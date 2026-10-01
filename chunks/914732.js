n.d(t, { Pq: () => v, Ay: () => W });
var l = n(582128),
    u = n(512750),
    r = n(702841),
    i = n(554146),
    o = n(367727),
    s = n(831617),
    A = n(475669),
    _ = n(45780),
    E = n(71393),
    a = n(403362),
    d = n(473145),
    G = n(868652),
    P = n(17928),
    R = n(73153),
    S = n(645619),
    I = n(904629);
let f = {};
class O extends P.Ay.PersistedStore {
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
        (this.waitFor(A.A, S.A, E.A), null != e && (f = e));
    }
    getNotificationStateForGuild(e) {
        return f[e];
    }
}
let c = new O(R.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = E.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            l = S.A.getStateForGuild(t),
            u = A.A.getStateForGuild(t),
            r = (0, I.k)([...Object.values(l?.unlockedPowerups ?? {}), ...Object.values(u?.entitlements ?? {})]);
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
var p = n(379229),
    L = n(383272),
    C = n(414133),
    m = n(229548),
    D = n(139032),
    M = n(531260),
    N = n(287809),
    U = n(202541),
    w = n(128313),
    T = n(786173),
    k = n(294384),
    g = n(639060),
    h = n(864310),
    K = n(482487),
    V = n(568065),
    b = n(652215),
    H = n(49999);
function W(e) {
    var t;
    let n,
        G,
        R,
        f,
        O,
        K = (0, r.bG)([c], () => c.getNotificationStateForGuild(e), [e]),
        H = (0, r.bG)([S.A], () => S.A.getStateForGuild(e)),
        { indicator: W, showUnread: v } =
            ((t = H ?? void 0),
            (n = (0, h.A)(e).available),
            (G = (0, g.A)(e, "useGuildPowerupsNotificationIndicator")),
            (R = (0, o.cN)(null != G ? G.dismissibleContent : null, e)),
            (f = null != G && !R),
            (O = (0, r.bG)([A.A], () => A.A.getStateForGuild(e))),
            l.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    l = (0, I.k)([...Object.values(e), ...Object.values(O?.entitlements ?? {})]),
                    u = K?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(l[l.length - 1]?.ends_at).getTime(),
                    i = K?.lastBoostCount ?? 0,
                    o = l.length > 0 && u < r,
                    s = n - i;
                return o || f
                    ? { indicator: { type: p.cD.WARNING }, showUnread: !0 }
                    : n !== i && s > 0
                      ? { indicator: { type: p.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [n, K?.lastBoostCount, K?.lastSeenWarningNotification, t, f, O?.entitlements])),
        B = (function (e, t) {
            let [n, o] = (0, m.ty)(null != t),
                G = n === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: R } = (0, h.A)(e),
                S = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(b.GuildFeatures.GAME_SERVERS) ?? !1),
                I = (0, r.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                f = (0, L.DD)(e, "useGuildPowerupsChannelListPopout"),
                O = (0, C.OS)("useGuildPowerupsChannelListPopout"),
                c = (0, L.lY)(e, "useGuildPowerupsChannelListPopout"),
                g = f && O && !c,
                K = (0, T.A)(e, t),
                [H, W] = (0, m.FC)(null != t && !G, K),
                v = H === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                B = (0, D.A)(e),
                y = (function () {
                    let { fractionalState: e } = (0, M.A)(),
                        t = (0, P.bG)([N.default], () => N.default.getCurrentUser()?.isPremiumGroupMember() === !0);
                    return e === U.xc.NONE && !t;
                })(),
                [F, Q] = (0, m.ww)(null != t && !G && !v && null != B && y, e),
                x = F === i.M.BOOST_TO_UNLOCK_COACHMARK,
                j = (0, w.A)(e),
                [z, Y] = (0, m.W2)(null != t && !G && !v && !x && null != j, e),
                $ = z === i.M.EXPIRING_POWERUP_COACHMARK,
                X = (0, s.TS)(e, "useGuildPowerupsChannelListPopout"),
                [q, J] = (0, m.vB)(null != t && X),
                Z = q === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                ee = l.useMemo(() => {
                    if (null == t || G || v || Z || x || $) return;
                    let n = (function (e, t) {
                        let n = d.fi.find((e) => {
                            let n = V.a8[e],
                                l = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != l && l.user_id !== V.mB;
                        });
                        if (null == n) return;
                        let l = V.On[n];
                        if (null == l || (0, _.zs)(l, e)) return;
                        let u = V.a8[n],
                            r = null != u ? t.allPowerups[u] : void 0;
                        if (null != r)
                            return {
                                type: p.o.LEVEL_REACHED,
                                powerup: r,
                                markAsDismissed: (t) => {
                                    (0, _._$)(l, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let l = (function (e, t, n, l) {
                        let r = E.A.getGuild(e)?.premiumTier ?? b.TVA.NONE,
                            o = Array.from(V.oN.values())
                                .flatMap((i) =>
                                    i.length <= 0 ||
                                    i.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = V.wr[e];
                                        return null != n && !!(r >= n);
                                    })
                                        ? []
                                        : i.map((r) => {
                                              if (r === u.d0 && !l) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, k.te)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(a.Vq);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, _.zs)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: p.o.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, _._$)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, _.zs)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: p.o.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, _._$)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, R, g);
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
                                type: p.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, _._$)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, S, R, I);
                    if (null != r) return r;
                }, [e, t, G, v, Z, x, $, R, S, I, g]),
                [et, en] = (0, m.ru)(null != ee);
            return l.useMemo(() => {
                if (null != t) {
                    if (G) return { type: p.o.PERKS_AVAILABLE, markAsDismissed: o };
                    if (v) {
                        if (K === V.QS.GAME_SERVER_HOSTING)
                            return { type: p.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: W };
                        let e = V.Q0[K],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: p.o.NEW_PERK_AVAILABLE, markAsDismissed: W };
                    }
                    if (x && null != B) return { type: p.o.BOOST_TO_UNLOCK, powerup: B, markAsDismissed: Q };
                    if ($ && null != j)
                        return { type: p.o.EXPIRING_PERK, featuredExpiringPowerup: j, markAsDismissed: Y };
                    if (Z) return { type: p.o.GAME_SERVER_NEW_GAMES, markAsDismissed: J };
                    if (et === i.M.GUILD_POWERUP_NOTIFICATION && null != ee)
                        return {
                            ...ee,
                            markAsDismissed: (e) => {
                                (en(e), ee.markAsDismissed(e));
                            },
                        };
                }
            }, [t, G, o, ee, et, en, v, W, K, x, B, Q, $, j, Y, Z, J]);
        })(e, H ?? void 0);
    if (null !== H && (null != W || v || null != B)) return { indicator: W, showUnread: v, popout: B };
}
function v(e) {
    let t = (0, r.bG)([S.A], () => S.A.getStateForGuild(e)),
        n = W(e);
    ((0, K.m)(e),
        l.useEffect(() => {
            (0, G.Zm)(e);
        }, [e]),
        l.useEffect(() => {
            let e = new Set([p.o.BOOST_TO_UNLOCK, p.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(H.i.AUTO_DISMISS);
        }, [n]),
        l.useEffect(() => {
            null != t &&
                d.fi.forEach((n) => {
                    let l = V.a8[n];
                    if (null == l || null == t.unlockedPowerups[l]) return;
                    let u = V.On[n];
                    null != u && (0, _._$)(u, e, !1, H.i.AUTO_DISMISS);
                });
        }, [e, t]));
}
