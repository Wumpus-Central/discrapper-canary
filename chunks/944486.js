let i, r, a, s, o, l, u;
n.d(t, {
    C: () => B,
    Z: () => en
}),
    n(47120),
    n(724458);
var c,
    d = n(392711),
    f = n.n(d),
    _ = n(442837),
    p = n(433517),
    h = n(570140),
    m = n(703656),
    g = n(131704),
    E = n(823379),
    v = n(314897),
    y = n(592125),
    I = n(984933),
    b = n(430824),
    T = n(131951),
    S = n(914010),
    A = n(981631),
    N = n(176505);
function C(e, t, n) {
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
let R = 'SelectedChannelStore',
    O = 300000,
    D = 60000,
    x = {},
    L = {},
    P = {},
    w = new Set();
function M(e) {
    return String(e);
}
function k() {
    __OVERLAY__ ||
        p.K.set(R, {
            selectedChannelId: a,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: s,
            lastConnectedTime: l,
            selectedChannelIds: x,
            mostRecentSelectedTextChannelIds: P,
            knownThreadIds: f()(x)
                .values()
                .concat(f().values(P))
                .filter(E.lm)
                .uniq()
                .filter((e) => {
                    let t = y.Z.getBasicChannel(e);
                    return w.has(e) || (null != t && g.Ec.has(t.type));
                })
                .value()
        });
}
function U(e) {
    if (null != e) {
        let t = I.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function G(e, t) {
    if (null == e || null == t || P[e] === t) return !1;
    let n = y.Z.getChannel(t),
        i = null != n && (0, g.zi)(n.type),
        r = (null == n ? void 0 : n.getGuildId()) === e;
    return !!i && !!r && ((P[e] = t), !0);
}
function B(e) {
    let t = y.Z.getMutableBasicGuildChannelsForGuild(e),
        n = f().find(t, (e) => e.type === A.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function Z() {
    let e = !1,
        t = b.Z.getGuilds();
    return (
        f().each(x, (t, n) => {
            (null != t && (y.Z.hasChannel(t) || t === a || w.has(t) || (0, N.ME)(t))) || (delete x[n], delete L[n], (e = !0));
        }),
        f().each(P, (t, n) => {
            (null != t && (y.Z.hasChannel(t) || w.has(t))) || (delete P[n], (e = !0));
        }),
        f().each(t, (e) => {
            let t = x[e.id];
            null == P[e.id] && G(e.id, t);
        }),
        null != l && Date.now() - l >= O && ((o = null), (e = !0)),
        e
    );
}
function F(e) {
    (i = e.sessionId), null != o && null == y.Z.getChannel(o) && (o = null), Z() && k();
}
function V(e) {
    (i = e.sessionId), (o = e.selectedVoiceChannelId), (x = {}), (L = {}), (a = e.selectedChannelId), (x[e.selectedGuildId] = e.selectedChannelId), G(e.selectedGuildId, a), Z();
}
function j() {
    i = null;
}
function H(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = U(t)), null != a && n !== a && (r = a), (a = n), G(t, n), x[M(t)] !== n && ((L[M(t)] = x[M(t)]), (x[M(t)] = a)), k();
}
function Y(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = y.Z.getChannel(o),
            t = null == e ? void 0 : e.guild_id;
        null != t && t !== S.Z.getGuildId() && x[t] === o && (x[t] = U(t));
    }
    (o = t), k();
}
function W(e, t) {
    if ((w.delete(e), null == t)) {
        let n = S.Z.getGuildId();
        x[M(n)] === e && (t = n);
    }
    let n = null != b.Z.getGuild(t) ? t : null,
        i = !1;
    o === e && ((o = null), (i = !0)), x[M(n)] === e && ((x[M(n)] = U(M(n))), S.Z.getGuildId() === n && (0, m.dL)(A.Z5c.CHANNEL(t, x[M(n)])), (i = !0)), null != n && P[n] === e && (delete P[n], (i = !0)), i && k();
}
function K(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    W(t, n);
}
function z(e) {
    let { channels: t } = e;
    for (let e of t) e.isScheduledForDeletion() && W(e.id, e.guild_id);
}
function q(e) {
    let { guild: t } = e;
    if (null == x[t.id]) {
        let e = U(t.id);
        (x[t.id] = e), G(t.id, e), k();
    }
}
function Q(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    if ((o === x[t] && (o = null), n)) return !1;
    delete P[t], delete x[t], k();
}
function X(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, r, a;
        if (t.sessionId === i) {
            clearInterval(u);
            let e = null === (n = y.Z.getChannel(o)) || void 0 === n ? void 0 : n.getGuildId();
            (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                (l = Date.now()),
                null != o &&
                    (u = setInterval(() => {
                        (l = Date.now()), k();
                    }, D)),
                k();
        } else {
            if (t.userId !== v.default.getId()) return e;
            clearInterval(u), (u = void 0), (l = 0);
            let n = null === (r = y.Z.getChannel(o)) || void 0 === r ? void 0 : r.getGuildId(),
                i = null === (a = y.Z.getChannel(t.channelId)) || void 0 === a ? void 0 : a.getGuildId();
            ((null != n && i === n) || o === t.channelId) && (o = null), k();
        }
        return !0;
    }, !1);
}
function J(e) {
    let { channelId: t, guildId: n } = e;
    (null == s || t !== s.channelId) &&
        ((s = {
            channelId: t,
            guildId: n
        }),
        k());
}
function $() {
    (x = {}), (a = null), (r = void 0), (P = {}), (s = {}), (o = null), p.K.remove(R);
}
function ee(e) {
    let { channel: t } = e;
    switch (t.type) {
        case A.d4z.GUILD_ANNOUNCEMENT:
        case A.d4z.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == P[n] && (P[n] = t.id), null != n && null == x[n])) return (x[n] = U(n)), !0;
    }
    return !1;
}
class et extends (c = _.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n =
                null !== (e = p.K.get(R)) && void 0 !== e
                    ? e
                    : {
                          selectedChannelId: a,
                          selectedVoiceChannelId: o,
                          lastChannelFollowingDestination: s,
                          lastConnectedTime: l,
                          selectedChannelIds: x,
                          mostRecentSelectedTextChannelIds: P
                      };
            null != n.knownThreadIds && (w = new Set(n.knownThreadIds)),
                (o = n.selectedVoiceChannelId),
                (s = n.lastChannelFollowingDestination),
                (l = n.lastConnectedTime),
                (P = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}),
                null != n.selectedChannelIds &&
                    (x = {
                        ...n.selectedChannelIds,
                        null: null
                    });
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(b.Z, y.Z, S.Z, I.ZP, T.Z);
    }
    getChannelId(e) {
        var t, n;
        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = M(e === A.ME ? null : null !== (t = null != e ? e : S.Z.getGuildId()) && void 0 !== t ? t : null);
        return i ? (null !== (n = x[r]) && void 0 !== n ? n : U(r)) : x[r];
    }
    getVoiceChannelId() {
        return T.Z.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null !== (t = P[e]) && void 0 !== t ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? x[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? L[e] : r;
    }
    getLastSelectedChannels(e) {
        return L[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
C(et, 'displayName', 'SelectedChannelStore');
let en = new et(h.Z, {
    CONNECTION_OPEN: F,
    OVERLAY_INITIALIZE: V,
    CONNECTION_CLOSED: j,
    CHANNEL_SELECT: H,
    CHANNEL_CREATE: ee,
    CHANNEL_DELETE: K,
    CHANNEL_UPDATES: z,
    THREAD_DELETE: K,
    GUILD_CREATE: q,
    GUILD_DELETE: Q,
    VOICE_CHANNEL_SELECT: Y,
    VOICE_STATE_UPDATES: X,
    CHANNEL_FOLLOWER_CREATED: J,
    LOGOUT: $
});
