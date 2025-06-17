let r, i, a, o, s, l, c;
n.d(t, {
    C: () => H,
    Z: () => es
}),
    n(388685);
var u,
    d = n(392711),
    f = n.n(d),
    _ = n(149765),
    p = n(442837),
    h = n(433517),
    m = n(570140),
    g = n(703656),
    E = n(131704),
    b = n(823379),
    y = n(314897),
    O = n(592125),
    v = n(984933),
    I = n(430824),
    T = n(131951),
    S = n(496675),
    A = n(914010),
    N = n(981631),
    C = n(176505);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = 'SelectedChannelStore',
    x = 300000,
    k = 60000,
    M = {},
    j = {},
    U = {},
    G = new Set();
function B(e) {
    return String(e);
}
function V() {
    __OVERLAY__ ||
        h.K.set(L, {
            selectedChannelId: a,
            selectedVoiceChannelId: s,
            lastChannelFollowingDestination: o,
            lastConnectedTime: l,
            selectedChannelIds: M,
            mostRecentSelectedTextChannelIds: U,
            knownThreadIds: f()(M)
                .values()
                .concat(f().values(U))
                .filter(b.lm)
                .uniq()
                .filter((e) => {
                    let t = O.Z.getBasicChannel(e);
                    return G.has(e) || (null != t && E.Ec.has(t.type));
                })
                .value()
        });
}
function F(e) {
    if (null != e) {
        let t = v.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function Z(e, t) {
    if (null == e || null == t || U[e] === t) return !1;
    let n = O.Z.getChannel(t),
        r = null != n && (0, E.zi)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && ((U[e] = t), !0);
}
function H(e) {
    let t = O.Z.getMutableBasicGuildChannelsForGuild(e),
        n = f().find(t, (e) => e.type === N.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function Y() {
    let e = !1,
        t = I.Z.getGuilds();
    return (
        f().each(M, (t, n) => {
            (null != t && (O.Z.hasChannel(t) || t === a || G.has(t) || (0, C.ME)(t))) || (delete M[n], delete j[n], (e = !0));
        }),
        f().each(U, (t, n) => {
            (null != t && (O.Z.hasChannel(t) || G.has(t))) || (delete U[n], (e = !0));
        }),
        f().each(t, (e) => {
            let t = M[e.id];
            null == U[e.id] && Z(e.id, t);
        }),
        null != l && Date.now() - l >= x && ((s = null), (e = !0)),
        e
    );
}
function W(e) {
    if (((r = e.sessionId), null != s)) {
        let e = O.Z.getChannel(s);
        (null != e && S.Z.can(_.$e(N.Plq.VIEW_CHANNEL, N.Plq.CONNECT), e)) || (s = null);
    }
    Y() && V();
}
function K(e) {
    (r = e.sessionId), (s = e.selectedVoiceChannelId), (M = {}), (j = {}), (a = e.selectedChannelId), (M[e.selectedGuildId] = e.selectedChannelId), Z(e.selectedGuildId, a), Y();
}
function z() {
    r = null;
}
function q(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = F(t)), null != a && n !== a && (i = a), (a = n), Z(t, n), M[B(t)] !== n && ((j[B(t)] = M[B(t)]), (M[B(t)] = a)), V();
}
function X(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = O.Z.getChannel(s),
            t = null == e ? void 0 : e.guild_id;
        null != t && t !== A.Z.getGuildId() && M[t] === s && (M[t] = F(t));
    }
    (s = t), V();
}
function Q(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if ((G.delete(e), null == t)) {
        let n = A.Z.getGuildId();
        M[B(n)] === e && (t = n);
    }
    let i = null != I.Z.getGuild(t) ? t : null,
        a = !1;
    s === e && ((s = null), (a = !0)), M[B(i)] === e && ((M[B(i)] = r && null != n ? n : F(B(i))), A.Z.getGuildId() === i && (0, g.dL)(N.Z5c.CHANNEL(t, M[B(i)])), (a = !0)), null != i && U[i] === e && (delete U[i], (a = !0)), a && V();
}
function J(e) {
    let { type: t, channel: n } = e;
    Q(n.id, n.guild_id, n.parent_id, 'THREAD_DELETE' === t);
}
function $(e) {
    let { channels: t } = e;
    for (let e of t)
        if (e.isScheduledForDeletion()) {
            let t = E.Ec.has(e.type);
            Q(e.id, e.guild_id, e.parent_id, t);
        }
}
function ee(e) {
    let { guild: t } = e;
    if (null == M[t.id]) {
        let e = F(t.id);
        (M[t.id] = e), Z(t.id, e), V();
    }
}
function et(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    if ((s === M[t] && (s = null), n)) return !1;
    delete U[t], delete M[t], V();
}
function en(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, i, a;
        if (t.sessionId === r) {
            clearInterval(c);
            let e = null == (n = O.Z.getChannel(s)) ? void 0 : n.getGuildId();
            (t.guildId !== e && null == t.channelId) || (s = t.channelId),
                (l = Date.now()),
                null != s &&
                    (c = setInterval(() => {
                        (l = Date.now()), V();
                    }, k)),
                V();
        } else {
            if (t.userId !== y.default.getId()) return e;
            clearInterval(c), (c = void 0), (l = 0);
            let n = null == (i = O.Z.getChannel(s)) ? void 0 : i.getGuildId(),
                r = null == (a = O.Z.getChannel(t.channelId)) ? void 0 : a.getGuildId();
            ((null != n && r === n) || s === t.channelId) && (s = null), V();
        }
        return !0;
    }, !1);
}
function er(e) {
    let { channelId: t, guildId: n } = e;
    (null == o || t !== o.channelId) &&
        ((o = {
            channelId: t,
            guildId: n
        }),
        V());
}
function ei() {
    (M = {}), (a = null), (i = void 0), (U = {}), (o = {}), (s = null), h.K.remove(L);
}
function ea(e) {
    let { channel: t } = e;
    switch (t.type) {
        case N.d4z.GUILD_ANNOUNCEMENT:
        case N.d4z.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == U[n] && (U[n] = t.id), null != n && null == M[n])) return (M[n] = F(n)), !0;
    }
    return !1;
}
class eo extends (u = p.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n =
                null != (e = h.K.get(L))
                    ? e
                    : {
                          selectedChannelId: a,
                          selectedVoiceChannelId: s,
                          lastChannelFollowingDestination: o,
                          lastConnectedTime: l,
                          selectedChannelIds: M,
                          mostRecentSelectedTextChannelIds: U
                      };
            null != n.knownThreadIds && (G = new Set(n.knownThreadIds)), (s = n.selectedVoiceChannelId), (o = n.lastChannelFollowingDestination), (l = n.lastConnectedTime), (U = null != (t = n.mostRecentSelectedTextChannelIds) ? t : {}), null != n.selectedChannelIds && (M = D(P({}, n.selectedChannelIds), { null: null }));
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(I.Z, O.Z, A.Z, v.ZP, T.Z, S.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = B(e === N.ME ? null : null != (t = null != e ? e : A.Z.getGuildId()) ? t : null);
        return r ? (null != (n = M[i]) ? n : F(i)) : M[i];
    }
    getVoiceChannelId() {
        return T.Z.isSupported() ? s : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null != (t = U[e]) ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? M[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? j[e] : i;
    }
    getLastSelectedChannels(e) {
        return j[e];
    }
    getLastChannelFollowingDestination() {
        return o;
    }
}
R(eo, 'displayName', 'SelectedChannelStore');
let es = new eo(m.Z, {
    CONNECTION_OPEN: W,
    OVERLAY_INITIALIZE: K,
    CONNECTION_CLOSED: z,
    CHANNEL_SELECT: q,
    CHANNEL_CREATE: ea,
    CHANNEL_DELETE: J,
    CHANNEL_UPDATES: $,
    THREAD_DELETE: J,
    GUILD_CREATE: ee,
    GUILD_DELETE: et,
    VOICE_CHANNEL_SELECT: X,
    VOICE_STATE_UPDATES: en,
    CHANNEL_FOLLOWER_CREATED: er,
    LOGOUT: ei
});
