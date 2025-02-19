n.d(t, {
    PH: () => R,
    ZP: () => F,
    sQ: () => A
}),
    n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(598077),
    u = n(314897),
    d = n(592125),
    f = n(271383),
    p = n(594174),
    _ = n(979651),
    h = n(709054),
    m = n(51144),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = Object.freeze([]),
    S = {};
function I(e) {
    let t = S[e];
    return null == t && ((t = new P(e)), (S[e] = t)), t;
}
function T(e, t) {
    return f.ZP.getMember(e, t.id);
}
function N(e, t, n) {
    var r;
    let i = null !== (r = null == t ? void 0 : t.nick) && void 0 !== r ? r : m.ZP.getName(n);
    return {
        member: t,
        comparator: A(e, i)
    };
}
function A(e, t) {
    return ''
        .concat(e.selfStream ? '\0' : '\x01')
        .concat(t.toLowerCase(), '\0')
        .concat(e.userId);
}
function C(e, t, n) {
    return N(n, T(e, t), t);
}
function R(e, t, n) {
    let r = p.default.getUser(n),
        i = null == r;
    null == r &&
        (r = new c.Z({
            id: n,
            username: '...',
            discriminator: n.slice(-5, -1)
        }));
    let { member: o, comparator: a } = C(t, r, e),
        s = {
            voiceState: e,
            user: r,
            member: o,
            comparator: a,
            nick: null == o ? void 0 : o.nick
        };
    return i && (s._isPlaceholder = !0), s;
}
class P {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = _.Z.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            r = p.default.getUser(e);
        if (null != t && null != r) {
            if (null == n) return this._voiceStates.set(e, R(t, this.guildId, e)), !0;
            if (n.voiceState !== t) {
                var i;
                let o = T(this.guildId, r),
                    a = null !== (i = null == o ? void 0 : o.nick) && void 0 !== i ? i : m.ZP.getName(r);
                return (
                    this._voiceStates.set(
                        e,
                        y(v({}, n), {
                            member: o,
                            comparator: A(t, a),
                            nick: a,
                            voiceState: t
                        })
                    ),
                    !0
                );
            }
        } else if (null != n) return this._voiceStates.delete(e), !0;
        return !1;
    }
    updateMember(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = this._voiceStates.get(e),
            n = p.default.getUser(e);
        if (null != t && null != n) {
            var r, i;
            let o = T(this.guildId, n);
            if ((null == o ? void 0 : o.nick) !== (null === (r = t.member) || void 0 === r ? void 0 : r.nick) || (null == o ? void 0 : o.avatar) !== (null === (i = t.member) || void 0 === i ? void 0 : i.avatar)) {
                let { comparator: r } = N(t.voiceState, o, n);
                return (
                    this._voiceStates.set(
                        e,
                        y(v({}, t), {
                            member: o,
                            comparator: r,
                            nick: null == o ? void 0 : o.nick
                        })
                    ),
                    !0
                );
            }
        }
        return !1;
    }
    updateUsers() {
        return (
            null == this._pending &&
            this._voiceStates.values().reduce((e, t) => {
                let n = p.default.getUser(t.user.id);
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, R(t.voiceState, this.guildId, n.id)), !0) : e;
            }, !1)
        );
    }
    getUserIds() {
        return this.processPending(), this._voiceStates.keys();
    }
    getVoiceStates() {
        return this.processPending(), this._voiceStates.indexes();
    }
    getVoiceStatesForChannel(e) {
        this.processPending();
        let t = this._voiceStates.values(e);
        return 0 === t.length ? O : t;
    }
    countVoiceStatesForChannel(e) {
        return this.processPending(), this._voiceStates.size(e);
    }
    getVersion() {
        return this.processPending(), this._voiceStates.version;
    }
    processPending() {
        if (null != this._pending) {
            let e = this._pending;
            (this._pending = void 0), e.forEach((e) => this.updateVoiceState(e));
        }
    }
    constructor(e) {
        E(this, 'guildId', void 0),
            E(this, '_pending', new Set()),
            E(
                this,
                '_voiceStates',
                new s.h(
                    (e) => {
                        let {
                            voiceState: { channelId: t }
                        } = e;
                        return null != t ? [t] : [];
                    },
                    (e) => {
                        let { comparator: t } = e;
                        return t;
                    }
                )
            ),
            (this.guildId = e);
    }
}
function w() {
    S = {};
}
function D() {
    B();
}
function x(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { guildId: n, userId: r } = t;
        return I(null != n ? n : g.ME).updateVoiceState(r) || e;
    }, !1);
}
function L(e) {
    var t, n;
    let r = !1,
        i = new Set(null === (t = S[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
        o = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map((e) => e.userId)),
        a = new Set(e.removedVoiceStateUsers);
    for (let t of new Set([...i, ...o])) r = I(e.guildId).updateVoiceState(t) || r;
    for (let t of i) a.has(t) || (r = I(e.guildId).updateMember(t) || r);
    return r;
}
function M(e) {
    let { guildId: t } = e,
        n = u.default.getId();
    return null != n && I(null != t ? t : g.ME).updateVoiceState(n);
}
function k() {
    return o().reduce(S, (e, t) => t.updateUsers() || e, !1);
}
function j(e) {
    let { guildId: t, user: n } = e;
    return I(t).updateMember(n.id);
}
function U(e) {
    let { guild: t } = e;
    delete S[t.id];
}
function G(e) {
    let { guild: t } = e;
    delete S[t.id];
}
function B() {
    S = {};
    let e = _.Z.getAllVoiceStates();
    h.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            I(null != t ? t : g.ME).updateVoiceState(e);
        });
    });
}
class Z extends (r = a.ZP.Store) {
    initialize() {
        B(), this.waitFor(u.default, p.default, f.ZP, _.Z), this.syncWith([p.default], k);
    }
    getVoiceStates(e) {
        return I(null != e ? e : g.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return S;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return I(null != t ? t : g.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return I(null != t ? t : g.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = d.Z.getChannel(e);
        if (null == t) return 0;
        let n = t.getGuildId();
        return I(null != n ? n : g.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return I(null != e ? e : g.ME).getVersion();
    }
}
E(Z, 'displayName', 'SortedVoiceStateStore');
let F = new Z(l.Z, {
    CONNECTION_OPEN: w,
    OVERLAY_INITIALIZE: D,
    VOICE_CHANNEL_SELECT: M,
    VOICE_STATE_UPDATES: x,
    GUILD_MEMBER_UPDATE: j,
    GUILD_CREATE: U,
    GUILD_DELETE: G,
    PASSIVE_UPDATE_V2: L
});
