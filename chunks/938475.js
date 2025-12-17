n.d(t, {
    PH: () => P,
    ZP: () => B,
    sQ: () => A,
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
    p = n(594174),
    _ = n(979651),
    m = n(709054),
    h = n(51144),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function O(e, t) {
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
let v = Object.freeze([]),
    S = {};
function I(e) {
    let t = S[e];
    return null == t && ((t = new R(e)), (S[e] = t)), t;
}
function T(e, t) {
    return f.ZP.getMember(e, t.id);
}
function C(e, t, n) {
    var r;
    let i = null != (r = null == t ? void 0 : t.nick) ? r : h.ZP.getName(n);
    return {
        member: t,
        comparator: A(e, i),
    };
}
function A(e, t) {
    return ""
        .concat(e.selfStream ? "\0" : "\x01")
        .concat(t.toLowerCase(), "\0")
        .concat(e.userId);
}
function N(e, t, n) {
    return C(n, T(e, t), t);
}
function P(e, t, n, r) {
    var i;
    let a = p.default.getUser(n),
        o = null == a;
    null == a &&
        (a = new c.Z({
            id: n,
            username: "...",
            discriminator: n.slice(-5, -1),
        }));
    let { member: s, comparator: l } = N(t, a, e),
        u = {
            voiceState: e,
            user: a,
            member: s,
            comparator: l,
            nick: null == s ? void 0 : s.nick,
            connectedOn: null != (i = null == r ? void 0 : r.connectedOn) ? i : Date.now(),
        };
    return o && (u._isPlaceholder = !0), u;
}
class R {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = _.Z.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            r = p.default.getUser(e);
        if (null != t && null != r) {
            if (null == n) return this._voiceStates.set(e, P(t, this.guildId, e)), !0;
            else if (n.voiceState !== t) {
                var i;
                let a = T(this.guildId, r),
                    o = null != (i = null == a ? void 0 : a.nick) ? i : h.ZP.getName(r);
                return (
                    this._voiceStates.set(
                        e,
                        O(b({}, n), {
                            member: a,
                            comparator: A(t, o),
                            nick: o,
                            voiceState: t,
                        }),
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
            let a = T(this.guildId, n);
            if (
                (null == a ? void 0 : a.nick) !== (null == (r = t.member) ? void 0 : r.nick) ||
                (null == a ? void 0 : a.avatar) !== (null == (i = t.member) ? void 0 : i.avatar)
            ) {
                let { comparator: r } = C(t.voiceState, a, n);
                return (
                    this._voiceStates.set(
                        e,
                        O(b({}, t), {
                            member: a,
                            comparator: r,
                            nick: null == a ? void 0 : a.nick,
                        }),
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
                return null != n && t.user !== n
                    ? (this._voiceStates.set(n.id, P(t.voiceState, this.guildId, n.id, t)), !0)
                    : e;
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
        return 0 === t.length ? v : t;
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
        E(this, "guildId", void 0),
            E(this, "_pending", new Set()),
            E(
                this,
                "_voiceStates",
                new s.h(
                    (e) => {
                        let {
                            voiceState: { channelId: t },
                        } = e;
                        return null != t ? [t] : [];
                    },
                    (e) => {
                        let { comparator: t } = e;
                        return t;
                    },
                ),
            ),
            (this.guildId = e);
    }
}
function w() {
    S = {};
}
function D() {
    Z();
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
        i = new Set(null == (t = S[e.guildId]) ? void 0 : t.getUserIds()),
        a = new Set(null == (n = e.voiceStates) ? void 0 : n.map((e) => e.userId)),
        o = new Set(e.removedVoiceStateUsers);
    for (let t of new Set([...i, ...a])) r = I(e.guildId).updateVoiceState(t) || r;
    for (let t of i) o.has(t) || (r = I(e.guildId).updateMember(t) || r);
    return r;
}
function j(e) {
    let { guildId: t } = e,
        n = u.default.getId();
    return null != n && I(null != t ? t : g.ME).updateVoiceState(n);
}
function M() {
    return a().reduce(S, (e, t) => t.updateUsers() || e, !1);
}
function k(e) {
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
function Z() {
    S = {};
    let e = _.Z.getAllVoiceStates();
    m.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            I(null != t ? t : g.ME).updateVoiceState(e);
        });
    });
}
class F extends (r = o.ZP.Store) {
    initialize() {
        Z(), this.waitFor(u.default, d.Z, f.ZP, p.default, _.Z), this.syncWith([p.default], M);
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
E(F, "displayName", "SortedVoiceStateStore");
let B = new F(l.Z, {
    CONNECTION_OPEN: w,
    OVERLAY_INITIALIZE: D,
    VOICE_CHANNEL_SELECT: j,
    VOICE_STATE_UPDATES: x,
    GUILD_MEMBER_UPDATE: k,
    GUILD_CREATE: U,
    GUILD_DELETE: G,
    PASSIVE_UPDATE_V2: L,
});
