let i, a, o, s, l, u, c;
r.d(n, {
    C: function () {
        return V;
    }
});
var d,
    f = r(47120);
var p = r(724458);
var h = r(392711),
    _ = r.n(h),
    m = r(442837),
    g = r(433517),
    E = r(570140),
    v = r(703656),
    y = r(131704),
    b = r(823379),
    I = r(314897),
    T = r(592125),
    S = r(984933),
    A = r(430824),
    C = r(131951),
    N = r(914010),
    R = r(981631),
    O = r(176505);
function D(e, n, r) {
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
let x = 'SelectedChannelStore',
    L = 300000,
    w = 60000,
    P = {},
    M = {},
    k = {},
    U = new Set();
function B(e) {
    return String(e);
}
function G() {
    !__OVERLAY__ &&
        g.K.set(x, {
            selectedChannelId: o,
            selectedVoiceChannelId: l,
            lastChannelFollowingDestination: s,
            lastConnectedTime: u,
            selectedChannelIds: P,
            mostRecentSelectedTextChannelIds: k,
            knownThreadIds: _()(P)
                .values()
                .concat(_().values(k))
                .filter(b.lm)
                .uniq()
                .filter((e) => {
                    let n = T.Z.getBasicChannel(e);
                    return U.has(e) || (null != n && y.Ec.has(n.type));
                })
                .value()
        });
}
function Z(e) {
    if (null != e) {
        let n = S.ZP.getDefaultChannel(e);
        if (null != n) return n.id;
    }
}
function F(e, n) {
    if (null == e || null == n || k[e] === n) return !1;
    let r = T.Z.getChannel(n),
        i = null != r && (0, y.zi)(r.type),
        a = (null == r ? void 0 : r.getGuildId()) === e;
    return !!i && !!a && ((k[e] = n), !0);
}
function V(e) {
    let n = T.Z.getMutableBasicGuildChannelsForGuild(e),
        r = _().find(n, (e) => e.type === R.d4z.GUILD_VOICE);
    return null == r ? void 0 : r.id;
}
function j() {
    let e = !1,
        n = A.Z.getGuilds();
    return (
        _().each(P, (n, r) => {
            (null == n || (!T.Z.hasChannel(n) && n !== o && !U.has(n) && !(0, O.ME)(n))) && (delete P[r], delete M[r], (e = !0));
        }),
        _().each(k, (n, r) => {
            (null == n || (!T.Z.hasChannel(n) && !U.has(n))) && (delete k[r], (e = !0));
        }),
        _().each(n, (e) => {
            let n = P[e.id];
            null == k[e.id] && F(e.id, n);
        }),
        null != u && Date.now() - u >= L && ((l = null), (e = !0)),
        e
    );
}
function H(e) {
    (i = e.sessionId), null != l && null == T.Z.getChannel(l) && (l = null), j() && G();
}
function Y(e) {
    (i = e.sessionId), (l = e.selectedVoiceChannelId), (P = {}), (M = {}), (o = e.selectedChannelId), (P[e.selectedGuildId] = e.selectedChannelId), F(e.selectedGuildId, o), j();
}
function W() {
    i = null;
}
function K(e) {
    let { guildId: n, channelId: r } = e;
    if (void 0 === n) return !1;
    null == r && (r = Z(n)), null != o && r !== o && (a = o), (o = r), F(n, r), P[B(n)] !== r && ((M[B(n)] = P[B(n)]), (P[B(n)] = o)), G();
}
function z(e) {
    let { channelId: n } = e;
    if (null == n) {
        let e = T.Z.getChannel(l),
            n = null == e ? void 0 : e.guild_id;
        null != n && n !== N.Z.getGuildId() && P[n] === l && (P[n] = Z(n));
    }
    (l = n), G();
}
function q(e, n) {
    if ((U.delete(e), null == n)) {
        let r = N.Z.getGuildId();
        P[B(r)] === e && (n = r);
    }
    let r = null != A.Z.getGuild(n) ? n : null,
        i = !1;
    l === e && ((l = null), (i = !0));
    P[B(r)] === e && ((P[B(r)] = Z(B(r))), N.Z.getGuildId() === r && (0, v.dL)(R.Z5c.CHANNEL(n, P[B(r)])), (i = !0)), null != r && k[r] === e && (delete k[r], (i = !0)), i && G();
}
function Q(e) {
    let {
        channel: { id: n, guild_id: r }
    } = e;
    q(n, r);
}
function X(e) {
    let { channels: n } = e;
    for (let e of n) e.isScheduledForDeletion() && q(e.id, e.guild_id);
}
function J(e) {
    let { guild: n } = e;
    if (null == P[n.id]) {
        let e = Z(n.id);
        (P[n.id] = e), F(n.id, e), G();
    }
}
function $(e) {
    let {
        guild: { id: n, unavailable: r }
    } = e;
    if ((l === P[n] && (l = null), r)) return !1;
    delete k[n], delete P[n], G();
}
function ee(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        var r, a, o;
        if (n.sessionId === i) {
            clearInterval(c);
            let e = null === (r = T.Z.getChannel(l)) || void 0 === r ? void 0 : r.getGuildId();
            (n.guildId !== e && null == n.channelId) || (l = n.channelId),
                (u = Date.now()),
                null != l &&
                    (c = setInterval(() => {
                        (u = Date.now()), G();
                    }, w)),
                G();
        } else {
            if (n.userId !== I.default.getId()) return e;
            clearInterval(c), (c = void 0), (u = 0);
            let r = null === (a = T.Z.getChannel(l)) || void 0 === a ? void 0 : a.getGuildId(),
                i = null === (o = T.Z.getChannel(n.channelId)) || void 0 === o ? void 0 : o.getGuildId();
            ((null != r && i === r) || l === n.channelId) && (l = null), G();
        }
        return !0;
    }, !1);
}
function et(e) {
    let { channelId: n, guildId: r } = e;
    (null == s || n !== s.channelId) &&
        ((s = {
            channelId: n,
            guildId: r
        }),
        G());
}
function en() {
    (P = {}), (o = null), (a = void 0), (k = {}), (s = {}), (l = null), g.K.remove(x);
}
function er(e) {
    let { channel: n } = e;
    switch (n.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            let r = n.guild_id;
            if ((null != r && null == k[r] && (k[r] = n.id), null != r && null == P[r])) return (P[r] = Z(r)), !0;
    }
    return !1;
}
class ei extends (d = m.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, n;
            let r =
                null !== (e = g.K.get(x)) && void 0 !== e
                    ? e
                    : {
                          selectedChannelId: o,
                          selectedVoiceChannelId: l,
                          lastChannelFollowingDestination: s,
                          lastConnectedTime: u,
                          selectedChannelIds: P,
                          mostRecentSelectedTextChannelIds: k
                      };
            null != r.knownThreadIds && (U = new Set(r.knownThreadIds)),
                (l = r.selectedVoiceChannelId),
                (s = r.lastChannelFollowingDestination),
                (u = r.lastConnectedTime),
                (k = null !== (n = r.mostRecentSelectedTextChannelIds) && void 0 !== n ? n : {}),
                null != r.selectedChannelIds &&
                    (P = {
                        ...r.selectedChannelIds,
                        null: null
                    });
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(A.Z, T.Z, N.Z, S.ZP, C.Z);
    }
    getChannelId(e) {
        var n, r;
        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = B(e === R.ME ? null : null !== (n = null != e ? e : N.Z.getGuildId()) && void 0 !== n ? n : null);
        return i ? (null !== (r = P[a]) && void 0 !== r ? r : Z(a)) : P[a];
    }
    getVoiceChannelId() {
        return C.Z.isSupported() ? l : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var n;
        return null == e ? null : null !== (n = k[e]) && void 0 !== n ? n : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? P[e] : o;
    }
    getLastSelectedChannelId(e) {
        return null != e ? M[e] : a;
    }
    getLastSelectedChannels(e) {
        return M[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
D(ei, 'displayName', 'SelectedChannelStore'),
    (n.Z = new ei(E.Z, {
        CONNECTION_OPEN: H,
        OVERLAY_INITIALIZE: Y,
        CONNECTION_CLOSED: W,
        CHANNEL_SELECT: K,
        CHANNEL_CREATE: er,
        CHANNEL_DELETE: Q,
        CHANNEL_UPDATES: X,
        THREAD_DELETE: Q,
        GUILD_CREATE: J,
        GUILD_DELETE: $,
        VOICE_CHANNEL_SELECT: z,
        VOICE_STATE_UPDATES: ee,
        CHANNEL_FOLLOWER_CREATED: et,
        LOGOUT: en
    }));
