r.d(n, {
    PH: function () {
        return O;
    },
    sQ: function () {
        return C;
    }
});
var i,
    a = r(47120);
var s = r(724458);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(759174),
    d = r(570140),
    f = r(598077),
    _ = r(314897),
    h = r(592125),
    p = r(271383),
    m = r(594174),
    g = r(979651),
    E = r(709054),
    v = r(51144),
    I = r(981631);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = Object.freeze([]),
    y = {};
function S(e) {
    let n = y[e];
    return null == n && ((n = new D(e)), (y[e] = n)), n;
}
function A(e, n) {
    return p.ZP.getMember(e, n.id);
}
function N(e, n, r) {
    var i;
    let a = null !== (i = null == n ? void 0 : n.nick) && void 0 !== i ? i : v.ZP.getName(r);
    return {
        member: n,
        comparator: C(e, a)
    };
}
function C(e, n) {
    return ''
        .concat(e.selfStream ? '\0' : '\x01')
        .concat(n.toLowerCase(), '\0')
        .concat(e.userId);
}
function R(e, n, r) {
    return N(r, A(e, n), n);
}
function O(e, n, r) {
    let i = m.default.getUser(r),
        a = null == i;
    null == i &&
        (i = new f.Z({
            id: r,
            username: '...',
            discriminator: r.slice(-5, -1)
        }));
    let { member: s, comparator: o } = R(n, i, e),
        l = {
            voiceState: e,
            user: i,
            member: s,
            comparator: o,
            nick: null == s ? void 0 : s.nick
        };
    return a && (l._isPlaceholder = !0), l;
}
class D {
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let n = g.Z.getVoiceState(this.guildId, e),
            r = this._voiceStates.get(e),
            i = m.default.getUser(e);
        if (null != n && null != i) {
            if (null == r) return this._voiceStates.set(e, O(n, this.guildId, e)), !0;
            if (r.voiceState !== n) {
                var a;
                let s = A(this.guildId, i),
                    o = null !== (a = null == s ? void 0 : s.nick) && void 0 !== a ? a : v.ZP.getName(i);
                return (
                    this._voiceStates.set(e, {
                        ...r,
                        member: s,
                        comparator: C(n, o),
                        nick: o,
                        voiceState: n
                    }),
                    !0
                );
            }
        } else if (null != r) return this._voiceStates.delete(e), !0;
        return !1;
    }
    updateMember(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let n = this._voiceStates.get(e),
            r = m.default.getUser(e);
        if (null != n && null != r) {
            var i, a;
            let s = A(this.guildId, r);
            if ((null == s ? void 0 : s.nick) !== (null === (i = n.member) || void 0 === i ? void 0 : i.nick) || (null == s ? void 0 : s.avatar) !== (null === (a = n.member) || void 0 === a ? void 0 : a.avatar)) {
                let { comparator: i } = N(n.voiceState, s, r);
                return (
                    this._voiceStates.set(e, {
                        ...n,
                        member: s,
                        comparator: i,
                        nick: null == s ? void 0 : s.nick
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
            this._voiceStates.values().reduce((e, n) => {
                let r = m.default.getUser(n.user.id);
                return null != r && n.user !== r ? (this._voiceStates.set(r.id, O(n.voiceState, this.guildId, r.id)), !0) : e;
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
        let n = this._voiceStates.values(e);
        return 0 === n.length ? b : n;
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
        T(this, 'guildId', void 0),
            T(this, '_pending', new Set()),
            T(
                this,
                '_voiceStates',
                new c.h(
                    (e) => {
                        let {
                            voiceState: { channelId: n }
                        } = e;
                        return null != n ? [n] : [];
                    },
                    (e) => {
                        let { comparator: n } = e;
                        return n;
                    }
                )
            ),
            (this.guildId = e);
    }
}
function L() {
    y = {};
}
function x() {
    Z();
}
function w(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let { guildId: r, userId: i } = n;
        return S(null != r ? r : I.ME).updateVoiceState(i) || e;
    }, !1);
}
function P(e) {
    var n, r;
    let i = !1,
        a = new Set(null === (n = y[e.guildId]) || void 0 === n ? void 0 : n.getUserIds()),
        s = new Set(null === (r = e.voiceStates) || void 0 === r ? void 0 : r.map((e) => e.userId)),
        o = new Set(e.removedVoiceStateUsers);
    for (let n of new Set([...a, ...s])) i = S(e.guildId).updateVoiceState(n) || i;
    for (let n of a) !o.has(n) && (i = S(e.guildId).updateMember(n) || i);
    return i;
}
function M(e) {
    let { guildId: n } = e,
        r = _.default.getId();
    return null != r && S(null != n ? n : I.ME).updateVoiceState(r);
}
function k() {
    return l().reduce(y, (e, n) => n.updateUsers() || e, !1);
}
function U(e) {
    let { guildId: n, user: r } = e;
    return S(n).updateMember(r.id);
}
function B(e) {
    let { guild: n } = e;
    delete y[n.id];
}
function G(e) {
    let { guild: n } = e;
    delete y[n.id];
}
function Z() {
    y = {};
    let e = g.Z.getAllVoiceStates();
    E.default.keys(e).forEach((n) => {
        Object.keys(e[n]).forEach((e) => {
            S(null != n ? n : I.ME).updateVoiceState(e);
        });
    });
}
class F extends (i = u.ZP.Store) {
    initialize() {
        Z(), this.waitFor(_.default, m.default, p.ZP, g.Z), this.syncWith([m.default], k);
    }
    getVoiceStates(e) {
        return S(null != e ? e : I.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return y;
    }
    getVoiceStatesForChannel(e) {
        let n = e.getGuildId(),
            r = e.id;
        return S(null != n ? n : I.ME).getVoiceStatesForChannel(r);
    }
    getVoiceStatesForChannelAlt(e, n) {
        return S(null != n ? n : I.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let n = h.Z.getChannel(e);
        if (null == n) return 0;
        let r = n.getGuildId();
        return S(null != r ? r : I.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return S(null != e ? e : I.ME).getVersion();
    }
}
T(F, 'displayName', 'SortedVoiceStateStore'),
    (n.ZP = new F(d.Z, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: x,
        VOICE_CHANNEL_SELECT: M,
        VOICE_STATE_UPDATES: w,
        GUILD_MEMBER_UPDATE: U,
        GUILD_CREATE: B,
        GUILD_DELETE: G,
        PASSIVE_UPDATE_V2: P
    }));
