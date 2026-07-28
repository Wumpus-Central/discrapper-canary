n.d(t, { Pq: () => F, Ay: () => B });
var u = n(582128),
    l = n(512750),
    r = n(702841),
    i = n(554146),
    o = n(367727),
    s = n(45780),
    A = n(71393),
    _ = n(403362),
    E = n(473145),
    a = n(488803),
    d = n(522055),
    G = n(764322),
    R = n(661881),
    S = n(868652),
    P = n(17928),
    I = n(228366),
    f = n(645619),
    c = n(904629);
let O = {};
class C extends P.Ay.PersistedStore {
    static displayName = "GuildPowerupsNotificationStore";
    static persistKey = "GuildPowerupsNotificationStore";
    static migrations = [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, u] = t;
                e[n] = u;
            }),
            e
        ),
    ];
    getState() {
        return O;
    }
    initialize(e) {
        this.waitFor(d.A, f.A, A.A), null != e && (O = e);
    }
    getNotificationStateForGuild(e) {
        return O[e];
    }
}
let p = new C(I.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = A.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            u = f.A.getStateForGuild(t),
            l = d.A.getStateForGuild(t),
            r = (0, c.k)([...Object.values(u?.unlockedPowerups ?? {}), ...Object.values(l?.entitlements ?? {})]);
        O = {
            ...O,
            [t]: {
                lastSeenWarningNotification: new Date(r[r.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        O = {};
    },
});
var L = n(379229),
    m = n(383272),
    M = n(414133),
    N = n(229548),
    D = n(139032),
    U = n(531260),
    w = n(287809),
    k = n(202541),
    g = n(128313),
    T = n(786173),
    h = n(294384),
    V = n(639060),
    K = n(864310),
    H = n(482487),
    b = n(568065),
    W = n(652215),
    v = n(49999);
function B(e) {
    var t;
    let n,
        S,
        I,
        O,
        C,
        H = (0, r.bG)([p], () => p.getNotificationStateForGuild(e), [e]),
        v = (0, r.bG)([f.A], () => f.A.getStateForGuild(e)),
        { indicator: B, showUnread: F } =
            ((t = v ?? void 0),
            (n = (0, K.A)(e).available),
            (S = (0, V.A)(e, "useGuildPowerupsNotificationIndicator")),
            (I = (0, o.cN)(null != S ? S.dismissibleContent : null, e)),
            (O = null != S && !I),
            (C = (0, r.bG)([d.A], () => d.A.getStateForGuild(e))),
            u.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    u = (0, c.k)([...Object.values(e), ...Object.values(C?.entitlements ?? {})]),
                    l = H?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(u[u.length - 1]?.ends_at).getTime(),
                    i = H?.lastBoostCount ?? 0,
                    o = u.length > 0 && l < r,
                    s = n - i;
                return o || O
                    ? { indicator: { type: L.cD.WARNING }, showUnread: !0 }
                    : n !== i && s > 0
                      ? { indicator: { type: L.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [n, H?.lastBoostCount, H?.lastSeenWarningNotification, t, O, C?.entitlements])),
        y = (function (e, t) {
            let [n, o] = (0, N.ty)(null != t),
                S = n === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: I } = (0, K.A)(e),
                f = (0, r.bG)([A.A], () => A.A.getGuild(e)?.features.has(W.GuildFeatures.GAME_SERVERS) ?? !1),
                c = (0, r.bG)([d.A], () => d.A.getLowestGameCostForGuild(e)),
                O = (0, m.DD)(e, "useGuildPowerupsChannelListPopout"),
                C = (0, M.OS)("useGuildPowerupsChannelListPopout"),
                p = O && C,
                V = (0, T.A)(e, t),
                [H, v] = (0, N.FC)(null != t && !S, V),
                B = H === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                F = (0, D.A)(e),
                y = (function () {
                    let { fractionalState: e } = (0, U.A)(),
                        t = (0, P.bG)([w.default], () => w.default.getCurrentUser()?.isPremiumGroupMember() === !0);
                    return e === k.xc.NONE && !t;
                })(),
                [z, Q] = (0, N.ww)(null != t && !S && !B && null != F && y, e),
                j = z === i.M.BOOST_TO_UNLOCK_COACHMARK,
                x = (0, g.A)(e),
                [Y, $] = (0, N.W2)(null != t && !S && !B && !j && null != x, e),
                X = Y === i.M.EXPIRING_POWERUP_COACHMARK,
                J = (0, a.TS)(e, "useGuildPowerupsChannelListPopout"),
                q = (0, R.J)("useGuildPowerupsChannelListPopout"),
                [Z, ee] = (0, N.vB)(null != t && J && q),
                et = Z === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                en = (0, G.S)(e, "useGuildPowerupsChannelListPopout"),
                [eu, el] = (0, N.vn)(null != t && !f && J && en),
                er = eu === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                ei = u.useMemo(() => {
                    if (null == t || S || B || et || er || j || X) return;
                    let n = (function (e, t) {
                        let n = E.fi.find((e) => {
                            let n = b.a8[e],
                                u = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != u && u.user_id !== b.mB;
                        });
                        if (null == n) return;
                        let u = b.On[n];
                        if (null == u || (0, s.zs)(u, e)) return;
                        let l = b.a8[n],
                            r = null != l ? t.allPowerups[l] : void 0;
                        if (null != r)
                            return {
                                type: L.o.LEVEL_REACHED,
                                powerup: r,
                                markAsDismissed: (t) => {
                                    (0, s._$)(u, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let u = (function (e, t, n, u) {
                        let r = A.A.getGuild(e)?.premiumTier ?? W.TVA.NONE,
                            o = Array.from(b.oN.values())
                                .flatMap((i) =>
                                    i.length <= 0 ||
                                    i.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = b.wr[e];
                                        return null != n && !!(r >= n);
                                    })
                                        ? []
                                        : i.map((r) => {
                                              if (r === l.d0 && !u) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, h.t)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(_.Vq);
                        if (0 !== o.length) {
                            if (1 === o.length && !(0, s.zs)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: L.o.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, s._$)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (o.length > 1 && !(0, s.zs)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: L.o.PERKS_PURCHASABLE,
                                    powerups: o,
                                    markAsDismissed: (t) => {
                                        (0, s._$)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, I, p);
                    if (null != u) return u;
                    let r = (function (e, t, n, u) {
                        if (
                            (0, a.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != u &&
                            n >= u &&
                            !(0, s.zs)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: L.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, s._$)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, f, I, c);
                    if (null != r) return r;
                }, [e, t, S, B, et, er, j, X, I, f, c, p]),
                [eo, es] = (0, N.ru)(null != ei);
            return u.useMemo(() => {
                if (null != t) {
                    if (S) return { type: L.o.PERKS_AVAILABLE, markAsDismissed: o };
                    if (B) {
                        if (V === b.QS.GAME_SERVER_HOSTING)
                            return { type: L.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: v };
                        let e = b.Q0[V],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: L.o.NEW_PERK_AVAILABLE, markAsDismissed: v };
                    }
                    if (j && null != F) return { type: L.o.BOOST_TO_UNLOCK, powerup: F, markAsDismissed: Q };
                    if (X && null != x)
                        return { type: L.o.EXPIRING_PERK, featuredExpiringPowerup: x, markAsDismissed: $ };
                    if (et) return { type: L.o.GAME_SERVER_NEW_GAMES, markAsDismissed: ee };
                    if (er) return { type: L.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: el };
                    if (eo === i.M.GUILD_POWERUP_NOTIFICATION && null != ei)
                        return {
                            ...ei,
                            markAsDismissed: (e) => {
                                es(e), ei.markAsDismissed(e);
                            },
                        };
                }
            }, [t, S, o, ei, eo, es, B, v, V, j, F, Q, X, x, $, et, ee, er, el]);
        })(e, v ?? void 0);
    if (null !== v && (null != B || F || null != y)) return { indicator: B, showUnread: F, popout: y };
}
function F(e) {
    let t = (0, r.bG)([f.A], () => f.A.getStateForGuild(e)),
        n = B(e);
    (0, H.m)(e),
        u.useEffect(() => {
            (0, S.Zm)(e);
        }, [e]),
        u.useEffect(() => {
            let e = new Set([L.o.BOOST_TO_UNLOCK, L.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(v.i.AUTO_DISMISS);
        }, [n]),
        u.useEffect(() => {
            null != t &&
                E.fi.forEach((n) => {
                    let u = b.a8[n];
                    if (null == u || null == t.unlockedPowerups[u]) return;
                    let l = b.On[n];
                    null != l && (0, s._$)(l, e, !1, v.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
