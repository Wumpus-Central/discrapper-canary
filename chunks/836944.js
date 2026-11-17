n.d(t, { Ay: () => b, Pq: () => W });
var l = n(582128),
    u = n(512750),
    r = n(164636),
    i = n(554146),
    o = n(543862),
    s = n(831617),
    A = n(475669),
    _ = n(45780),
    E = n(71393),
    a = n(403362),
    d = n(473145),
    G = n(533993),
    R = n(855986),
    S = n(73153),
    I = n(645619),
    P = n(904629);
let f = {};
class c extends R.Ay.PersistedStore {
    static displayName = "GuildPowerupsNotificationStore";
    static persistKey = "GuildPowerupsNotificationStore";
    static migrations = [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, l] = t;
                e[n] = l;
            }),
            e
        ),
    ];
    getState() {
        return f;
    }
    initialize(e) {
        (this.waitFor(A.A, I.A, E.A), null != e && (f = e));
    }
    getNotificationStateForGuild(e) {
        return f[e];
    }
}
let O = new c(S.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = E.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            l = I.A.getStateForGuild(t),
            u = A.A.getStateForGuild(t),
            r = (0, P.k)([...Object.values(l?.unlockedPowerups ?? {}), ...Object.values(u?.entitlements ?? {})]);
        f = {
            ...f,
            [t]: {
                lastSeenWarningNotification: new Date(r[r.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        f = {};
    },
});
var C = n(379229),
    L = n(229548),
    m = n(139032),
    p = n(531260),
    D = n(287809),
    M = n(682901),
    N = n(470892),
    U = n(786173),
    T = n(294384),
    g = n(639060),
    w = n(864310),
    h = n(482487),
    K = n(568065),
    k = n(652215),
    V = n(49999);
function b(e) {
    var t;
    let n,
        G,
        S,
        f,
        c,
        h = (0, r.bG)([O], () => O.getNotificationStateForGuild(e), [e]),
        V = (0, r.bG)([I.A], () => I.A.getStateForGuild(e)),
        { indicator: b, showUnread: W } =
            ((t = V ?? void 0),
            (n = (0, w.A)(e).available),
            (G = (0, g.A)(e, "useGuildPowerupsNotificationIndicator")),
            (S = (0, o.cN)(null != G ? G.dismissibleContent : null, e)),
            (f = null != G && !S),
            (c = (0, r.bG)([A.A], () => A.A.getStateForGuild(e))),
            l.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    l = (0, P.k)([...Object.values(e), ...Object.values(c?.entitlements ?? {})]),
                    u = h?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(l[l.length - 1]?.ends_at).getTime(),
                    i = h?.lastBoostCount ?? 0,
                    o = l.length > 0 && u < r,
                    s = n - i;
                return o || f
                    ? { indicator: { type: C.cD.WARNING }, showUnread: !0 }
                    : n !== i && s > 0
                      ? { indicator: { type: C.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [n, h?.lastBoostCount, h?.lastSeenWarningNotification, t, f, c?.entitlements])),
        B = (function (e, t) {
            let [n, o] = (0, L.ty)(null != t),
                G = n === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: S } = (0, w.A)(e),
                I = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(k.GuildFeatures.GAME_SERVERS) ?? !1),
                P = (0, r.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                f = (0, U.A)(e, t),
                [c, O] = (0, L.FC)(null != t && !G, f),
                g = c === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                h = (0, m.A)(e),
                V = (function () {
                    let { fractionalState: e } = (0, p.A)(),
                        t = (0, R.bG)([D.default], () => D.default.getCurrentUser()?.isPremiumGroupMember() === !0);
                    return e === M.xc.NONE && !t;
                })(),
                [b, W] = (0, L.ww)(null != t && !G && !g && null != h && V, e),
                B = b === i.M.BOOST_TO_UNLOCK_COACHMARK,
                H = (0, N.A)(e),
                [v, y] = (0, L.W2)(null != t && !G && !g && !B && null != H, e),
                F = v === i.M.EXPIRING_POWERUP_COACHMARK,
                x = (0, s.TS)(e, "useGuildPowerupsChannelListPopout"),
                [Q, j] = (0, L.vB)(null != t && x),
                z = Q === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                $ = l.useMemo(() => {
                    if (null == t || G || g || z || B || F) return;
                    let n = (function (e, t) {
                        let n = d.fi.find((e) => {
                            let n = K.a8[e],
                                l = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != l && l.user_id !== K.mB;
                        });
                        if (null == n) return;
                        let l = K.On[n];
                        if (null == l || (0, _.zs)(l, e)) return;
                        let u = K.a8[n],
                            r = null != u ? t.allPowerups[u] : void 0;
                        if (null != r)
                            return {
                                type: C.o.LEVEL_REACHED,
                                powerup: r,
                                markAsDismissed: (t) => {
                                    (0, _._$)(l, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let l = (function (e, t, n) {
                        let l = E.A.getGuild(e)?.premiumTier ?? k.TVA.NONE,
                            r = Array.from(K.oN.values())
                                .flatMap((r) =>
                                    r.length <= 0 ||
                                    r.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = K.wr[e];
                                        return null != n && !!(l >= n);
                                    })
                                        ? []
                                        : r.map((l) => {
                                              if (l === u.d0) return null;
                                              let r = t.allPowerups[l];
                                              return null == r ||
                                                  n < r.cost ||
                                                  !r.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, T.te)(e, r, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : r;
                                          }),
                                )
                                .filter(a.Vq);
                        if (0 !== r.length) {
                            if (1 === r.length && !(0, _.zs)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: C.o.PERKS_PURCHASABLE,
                                    powerups: r,
                                    markAsDismissed: (t) => {
                                        (0, _._$)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (r.length > 1 && !(0, _.zs)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: C.o.PERKS_PURCHASABLE,
                                    powerups: r,
                                    markAsDismissed: (t) => {
                                        (0, _._$)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, S);
                    if (null != l) return l;
                    let r = (function (e, t, n, l) {
                        if (
                            (0, s.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != l &&
                            n >= l &&
                            !(0, _.zs)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: C.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, _._$)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, I, S, P);
                    if (null != r) return r;
                }, [e, t, G, g, z, B, F, S, I, P]),
                [X, Y] = (0, L.ru)(null != $);
            return l.useMemo(() => {
                if (null != t) {
                    if (G) return { type: C.o.PERKS_AVAILABLE, markAsDismissed: o };
                    if (g) {
                        if (f === K.QS.GAME_SERVER_HOSTING)
                            return { type: C.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: O };
                        let e = K.Q0[f],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: C.o.NEW_PERK_AVAILABLE, markAsDismissed: O };
                    }
                    if (B && null != h) return { type: C.o.BOOST_TO_UNLOCK, powerup: h, markAsDismissed: W };
                    if (F && null != H)
                        return { type: C.o.EXPIRING_PERK, featuredExpiringPowerup: H, markAsDismissed: y };
                    if (z) return { type: C.o.GAME_SERVER_NEW_GAMES, markAsDismissed: j };
                    if (X === i.M.GUILD_POWERUP_NOTIFICATION && null != $)
                        return {
                            ...$,
                            markAsDismissed: (e) => {
                                (Y(e), $.markAsDismissed(e));
                            },
                        };
                }
            }, [t, G, o, $, X, Y, g, O, f, B, h, W, F, H, y, z, j]);
        })(e, V ?? void 0);
    if (null !== V && (null != b || W || null != B)) return { indicator: b, showUnread: W, popout: B };
}
function W(e) {
    let t = (0, r.bG)([I.A], () => I.A.getStateForGuild(e)),
        n = b(e);
    ((0, h.m)(e),
        l.useEffect(() => {
            (0, G.Zm)(e);
        }, [e]),
        l.useEffect(() => {
            let e = new Set([C.o.BOOST_TO_UNLOCK, C.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(V.i.AUTO_DISMISS);
        }, [n]),
        l.useEffect(() => {
            null != t &&
                d.fi.forEach((n) => {
                    let l = K.a8[n];
                    if (null == l || null == t.unlockedPowerups[l]) return;
                    let u = K.On[n];
                    null != u && (0, _._$)(u, e, !1, V.i.AUTO_DISMISS);
                });
        }, [e, t]));
}
