l.d(t, { Pq: () => B, Ay: () => W });
var n = l(582128),
    u = l(512750),
    r = l(702841),
    i = l(554146),
    o = l(501419),
    s = l(831617),
    A = l(475669),
    _ = l(45780),
    E = l(71393),
    a = l(403362),
    d = l(473145),
    G = l(868652),
    P = l(17928),
    R = l(73153),
    S = l(645619),
    I = l(904629);
let f = {};
class O extends P.Ay.PersistedStore {
    static displayName = "GuildPowerupsNotificationStore";
    static persistKey = "GuildPowerupsNotificationStore";
    static migrations = [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [l, n] = t;
                e[l] = n;
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
            l = E.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            n = S.A.getStateForGuild(t),
            u = A.A.getStateForGuild(t),
            r = (0, I.k)([...Object.values(n?.unlockedPowerups ?? {}), ...Object.values(u?.entitlements ?? {})]);
        f = {
            ...f,
            [t]: {
                lastSeenWarningNotification: new Date(r[r.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: l,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        f = {};
    },
});
var p = l(379229),
    L = l(383272),
    C = l(414133),
    m = l(229548),
    D = l(139032),
    M = l(531260),
    N = l(287809),
    U = l(202541),
    w = l(128313),
    T = l(786173),
    g = l(294384),
    k = l(639060),
    h = l(864310),
    K = l(482487),
    V = l(568065),
    b = l(652215),
    H = l(49999);
function W(e) {
    var t;
    let l,
        G,
        R,
        f,
        O,
        K = (0, r.bG)([c], () => c.getNotificationStateForGuild(e), [e]),
        H = (0, r.bG)([S.A], () => S.A.getStateForGuild(e)),
        { indicator: W, showUnread: B } =
            ((t = H ?? void 0),
            (l = (0, h.A)(e).available),
            (G = (0, k.A)(e, "useGuildPowerupsNotificationIndicator")),
            (R = (0, o.cN)(null != G ? G.dismissibleContent : null, e)),
            (f = null != G && !R),
            (O = (0, r.bG)([A.A], () => A.A.getStateForGuild(e))),
            n.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    n = (0, I.k)([...Object.values(e), ...Object.values(O?.entitlements ?? {})]),
                    u = K?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(n[n.length - 1]?.ends_at).getTime(),
                    i = K?.lastBoostCount ?? 0,
                    o = n.length > 0 && u < r,
                    s = l - i;
                return o || f
                    ? { indicator: { type: p.cD.WARNING }, showUnread: !0 }
                    : l !== i && s > 0
                      ? { indicator: { type: p.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [l, K?.lastBoostCount, K?.lastSeenWarningNotification, t, f, O?.entitlements])),
        v = (function (e, t) {
            let [l, o] = (0, m.ty)(null != t),
                G = l === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: R } = (0, h.A)(e),
                S = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(b.GuildFeatures.GAME_SERVERS) ?? !1),
                I = (0, r.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                f = (0, L.DD)(e, "useGuildPowerupsChannelListPopout"),
                O = (0, C.OS)("useGuildPowerupsChannelListPopout"),
                c = (0, L.lY)(e, "useGuildPowerupsChannelListPopout"),
                k = f && O && !c,
                K = (0, T.A)(e, t),
                [H, W] = (0, m.FC)(null != t && !G, K),
                B = H === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                v = (0, D.A)(e),
                F = (function () {
                    let { fractionalState: e } = (0, M.A)(),
                        t = (0, P.bG)([N.default], () => N.default.getCurrentUser()?.isPremiumGroupMember() === !0);
                    return e === U.xc.NONE && !t;
                })(),
                [y, Q] = (0, m.ww)(null != t && !G && !B && null != v && F, e),
                x = y === i.M.BOOST_TO_UNLOCK_COACHMARK,
                j = (0, w.A)(e),
                [z, Y] = (0, m.W2)(null != t && !G && !B && !x && null != j, e),
                $ = z === i.M.EXPIRING_POWERUP_COACHMARK,
                X = (0, s.TS)(e, "useGuildPowerupsChannelListPopout"),
                [q, J] = (0, m.vB)(null != t && X),
                Z = q === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                ee = n.useMemo(() => {
                    if (null == t || G || B || Z || x || $) return;
                    let l = (function (e, t) {
                        let l = d.fi.find((e) => {
                            let l = V.a8[e],
                                n = null != l ? t.unlockedPowerups[l] : void 0;
                            return null != n && n.user_id !== V.mB;
                        });
                        if (null == l) return;
                        let n = V.On[l];
                        if (null == n || (0, _.zs)(n, e)) return;
                        let u = V.a8[l],
                            r = null != u ? t.allPowerups[u] : void 0;
                        if (null != r)
                            return {
                                type: p.o.LEVEL_REACHED,
                                powerup: r,
                                markAsDismissed: (t) => {
                                    (0, _._$)(n, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != l) return l;
                    let n = (function (e, t, l, n) {
                        let r = E.A.getGuild(e)?.premiumTier ?? b.TVA.NONE,
                            o = Array.from(V.oN.values())
                                .flatMap((i) =>
                                    i.length <= 0 ||
                                    i.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let l = V.wr[e];
                                        return null != l && !!(r >= l);
                                    })
                                        ? []
                                        : i.map((r) => {
                                              if (r === u.d0 && !n) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  l < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, g.te)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
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
                    })(e, t, R, k);
                    if (null != n) return n;
                    let r = (function (e, t, l, n) {
                        if (
                            (0, s.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != n &&
                            l >= n &&
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
                }, [e, t, G, B, Z, x, $, R, S, I, k]),
                [et, el] = (0, m.ru)(null != ee);
            return n.useMemo(() => {
                if (null != t) {
                    if (G) return { type: p.o.PERKS_AVAILABLE, markAsDismissed: o };
                    if (B) {
                        if (K === V.QS.GAME_SERVER_HOSTING)
                            return { type: p.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: W };
                        let e = V.Q0[K],
                            l = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === l.length) return;
                        return { powerups: l, type: p.o.NEW_PERK_AVAILABLE, markAsDismissed: W };
                    }
                    if (x && null != v) return { type: p.o.BOOST_TO_UNLOCK, powerup: v, markAsDismissed: Q };
                    if ($ && null != j)
                        return { type: p.o.EXPIRING_PERK, featuredExpiringPowerup: j, markAsDismissed: Y };
                    if (Z) return { type: p.o.GAME_SERVER_NEW_GAMES, markAsDismissed: J };
                    if (et === i.M.GUILD_POWERUP_NOTIFICATION && null != ee)
                        return {
                            ...ee,
                            markAsDismissed: (e) => {
                                (el(e), ee.markAsDismissed(e));
                            },
                        };
                }
            }, [t, G, o, ee, et, el, B, W, K, x, v, Q, $, j, Y, Z, J]);
        })(e, H ?? void 0);
    if (null !== H && (null != W || B || null != v)) return { indicator: W, showUnread: B, popout: v };
}
function B(e) {
    let t = (0, r.bG)([S.A], () => S.A.getStateForGuild(e)),
        l = W(e);
    ((0, K.m)(e),
        n.useEffect(() => {
            (0, G.Zm)(e);
        }, [e]),
        n.useEffect(() => {
            let e = new Set([p.o.BOOST_TO_UNLOCK, p.o.EXPIRING_PERK]);
            (l?.popout?.type != null && e.has(l.popout.type)) || l?.popout?.markAsDismissed(H.i.AUTO_DISMISS);
        }, [l]),
        n.useEffect(() => {
            null != t &&
                d.fi.forEach((l) => {
                    let n = V.a8[l];
                    if (null == n || null == t.unlockedPowerups[n]) return;
                    let u = V.On[l];
                    null != u && (0, _._$)(u, e, !1, H.i.AUTO_DISMISS);
                });
        }, [e, t]));
}
