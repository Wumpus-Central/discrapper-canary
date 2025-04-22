n.d(t, {
    PH: () => R,
    ZP: () => F,
    sQ: () => N
}),
    n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(598077),
    u = n(314897),
    d = n(592125),
    f = n(271383),
    _ = n(594174),
    p = n(979651),
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
function b(e) {
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
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = Object.freeze([]),
    I = {};
function S(e) {
    let t = I[e];
    return null == t && ((t = new P(e)), (I[e] = t)), t;
}
function T(e, t) {
    return f.ZP.getMember(e, t.id);
}
function A(e, t, n) {
    var r;
    let i = null != (r = null == t ? void 0 : t.nick) ? r : m.ZP.getName(n);
    return {
        member: t,
        comparator: N(e, i)
    };
}
function N(e, t) {
    return ''
        .concat(e.selfStream ? '\0' : '\x01')
        .concat(t.toLowerCase(), '\0')
        .concat(e.userId);
}
function C(e, t, n) {
    return A(n, T(e, t), t);
}
function R(e, t, n, r) {
    var i;
    let a = _.default.getUser(n),
        o = null == a;
    null == a &&
        (a = new c.Z({
            id: n,
            username: '...',
            discriminator: n.slice(-5, -1)
        }));
    let { member: s, comparator: l } = C(t, a, e),
        u = {
            voiceState: e,
            user: a,
            member: s,
            comparator: l,
            nick: null == s ? void 0 : s.nick,
            connectedOn: null != (i = null == r ? void 0 : r.connectedOn) ? i : Date.now()
        };
    return o && (u._isPlaceholder = !0), u;
}
class P {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = p.Z.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            r = _.default.getUser(e);
        if (null != t && null != r) {
            if (null == n) return this._voiceStates.set(e, R(t, this.guildId, e)), !0;
            else if (n.voiceState !== t) {
                var i;
                let a = T(this.guildId, r),
                    o = null != (i = null == a ? void 0 : a.nick) ? i : m.ZP.getName(r);
                return (
                    this._voiceStates.set(
                        e,
                        v(b({}, n), {
                            member: a,
                            comparator: N(t, o),
                            nick: o,
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
            n = _.default.getUser(e);
        if (null != t && null != n) {
            var r, i;
            let a = T(this.guildId, n);
            if ((null == a ? void 0 : a.nick) !== (null == (r = t.member) ? void 0 : r.nick) || (null == a ? void 0 : a.avatar) !== (null == (i = t.member) ? void 0 : i.avatar)) {
                let { comparator: r } = A(t.voiceState, a, n);
                return (
                    this._voiceStates.set(
                        e,
                        v(b({}, t), {
                            member: a,
                            comparator: r,
                            nick: null == a ? void 0 : a.nick
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
                let n = _.default.getUser(t.user.id);
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, R(t.voiceState, this.guildId, n.id, t)), !0) : e;
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
    I = {};
}
function D() {
    B();
}
function L(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { guildId: n, userId: r } = t;
        return S(null != n ? n : g.ME).updateVoiceState(r) || e;
    }, !1);
}
function x(e) {
    var t, n;
    let r = !1,
        i = new Set(null == (t = I[e.guildId]) ? void 0 : t.getUserIds()),
        a = new Set(null == (n = e.voiceStates) ? void 0 : n.map((e) => e.userId)),
        o = new Set(e.removedVoiceStateUsers);
    for (let t of new Set([...i, ...a])) r = S(e.guildId).updateVoiceState(t) || r;
    for (let t of i) o.has(t) || (r = S(e.guildId).updateMember(t) || r);
    return r;
}
function M(e) {
    let { guildId: t } = e,
        n = u.default.getId();
    return null != n && S(null != t ? t : g.ME).updateVoiceState(n);
}
function k() {
    return a().reduce(I, (e, t) => t.updateUsers() || e, !1);
}
function j(e) {
    let { guildId: t, user: n } = e;
    return S(t).updateMember(n.id);
}
function U(e) {
    let { guild: t } = e;
    delete I[t.id];
}
function G(e) {
    let { guild: t } = e;
    delete I[t.id];
}
function B() {
    I = {};
    let e = p.Z.getAllVoiceStates();
    h.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            S(null != t ? t : g.ME).updateVoiceState(e);
        });
    });
}
class V extends (r = o.ZP.Store) {
    initialize() {
        B(), this.waitFor(u.default, _.default, f.ZP, p.Z), this.syncWith([_.default], k);
    }
    getVoiceStates(e) {
        return S(null != e ? e : g.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return I;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return S(null != t ? t : g.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return S(null != t ? t : g.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = d.Z.getChannel(e);
        if (null == t) return 0;
        let n = t.getGuildId();
        return S(null != n ? n : g.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return S(null != e ? e : g.ME).getVersion();
    }
}
E(V, 'displayName', 'SortedVoiceStateStore');
let F = new V(l.Z, {
    CONNECTION_OPEN: w,
    OVERLAY_INITIALIZE: D,
    VOICE_CHANNEL_SELECT: M,
    VOICE_STATE_UPDATES: L,
    GUILD_MEMBER_UPDATE: j,
    GUILD_CREATE: U,
    GUILD_DELETE: G,
    PASSIVE_UPDATE_V2: x
});
