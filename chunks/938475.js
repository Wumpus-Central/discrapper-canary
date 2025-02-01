n.d(t, {
    PH: () => N,
    ZP: () => B,
    sQ: () => S
}),
    n(47120),
    n(724458);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(759174),
    l = n(570140),
    u = n(598077),
    c = n(314897),
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
let v = Object.freeze([]),
    y = {};
function I(e) {
    let t = y[e];
    return null == t && ((t = new C(e)), (y[e] = t)), t;
}
function T(e, t) {
    return f.ZP.getMember(e, t.id);
}
function b(e, t, n) {
    var i;
    let r = null !== (i = null == t ? void 0 : t.nick) && void 0 !== i ? i : m.ZP.getName(n);
    return {
        member: t,
        comparator: S(e, r)
    };
}
function S(e, t) {
    return ''
        .concat(e.selfStream ? '\0' : '\x01')
        .concat(t.toLowerCase(), '\0')
        .concat(e.userId);
}
function A(e, t, n) {
    return b(n, T(e, t), t);
}
function N(e, t, n) {
    let i = _.default.getUser(n),
        r = null == i;
    null == i &&
        (i = new u.Z({
            id: n,
            username: '...',
            discriminator: n.slice(-5, -1)
        }));
    let { member: a, comparator: s } = A(t, i, e),
        o = {
            voiceState: e,
            user: i,
            member: a,
            comparator: s,
            nick: null == a ? void 0 : a.nick
        };
    return r && (o._isPlaceholder = !0), o;
}
class C {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = p.Z.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            i = _.default.getUser(e);
        if (null != t && null != i) {
            if (null == n) return this._voiceStates.set(e, N(t, this.guildId, e)), !0;
            if (n.voiceState !== t) {
                var r;
                let a = T(this.guildId, i),
                    s = null !== (r = null == a ? void 0 : a.nick) && void 0 !== r ? r : m.ZP.getName(i);
                return (
                    this._voiceStates.set(e, {
                        ...n,
                        member: a,
                        comparator: S(t, s),
                        nick: s,
                        voiceState: t
                    }),
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
            var i, r;
            let a = T(this.guildId, n);
            if ((null == a ? void 0 : a.nick) !== (null === (i = t.member) || void 0 === i ? void 0 : i.nick) || (null == a ? void 0 : a.avatar) !== (null === (r = t.member) || void 0 === r ? void 0 : r.avatar)) {
                let { comparator: i } = b(t.voiceState, a, n);
                return (
                    this._voiceStates.set(e, {
                        ...t,
                        member: a,
                        comparator: i,
                        nick: null == a ? void 0 : a.nick
                    }),
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
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, N(t.voiceState, this.guildId, n.id)), !0) : e;
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
        E(this, 'guildId', void 0),
            E(this, '_pending', new Set()),
            E(
                this,
                '_voiceStates',
                new o.h(
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
function R() {
    y = {};
}
function O() {
    U();
}
function D(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { guildId: n, userId: i } = t;
        return I(null != n ? n : g.ME).updateVoiceState(i) || e;
    }, !1);
}
function x(e) {
    var t, n;
    let i = !1,
        r = new Set(null === (t = y[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
        a = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map((e) => e.userId)),
        s = new Set(e.removedVoiceStateUsers);
    for (let t of new Set([...r, ...a])) i = I(e.guildId).updateVoiceState(t) || i;
    for (let t of r) s.has(t) || (i = I(e.guildId).updateMember(t) || i);
    return i;
}
function L(e) {
    let { guildId: t } = e,
        n = c.default.getId();
    return null != n && I(null != t ? t : g.ME).updateVoiceState(n);
}
function P() {
    return a().reduce(y, (e, t) => t.updateUsers() || e, !1);
}
function w(e) {
    let { guildId: t, user: n } = e;
    return I(t).updateMember(n.id);
}
function M(e) {
    let { guild: t } = e;
    delete y[t.id];
}
function k(e) {
    let { guild: t } = e;
    delete y[t.id];
}
function U() {
    y = {};
    let e = p.Z.getAllVoiceStates();
    h.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            I(null != t ? t : g.ME).updateVoiceState(e);
        });
    });
}
class G extends (i = s.ZP.Store) {
    initialize() {
        U(), this.waitFor(c.default, _.default, f.ZP, p.Z), this.syncWith([_.default], P);
    }
    getVoiceStates(e) {
        return I(null != e ? e : g.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return y;
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
E(G, 'displayName', 'SortedVoiceStateStore');
let B = new G(l.Z, {
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: O,
    VOICE_CHANNEL_SELECT: L,
    VOICE_STATE_UPDATES: D,
    GUILD_MEMBER_UPDATE: w,
    GUILD_CREATE: M,
    GUILD_DELETE: k,
    PASSIVE_UPDATE_V2: x
});
