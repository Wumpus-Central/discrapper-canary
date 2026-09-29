n.d(t, { Pq: () => B, Ay: () => W });
var u = n(582128),
    l = n(512750),
    r = n(702841),
    i = n(554146),
    o = n(367727),
    s = n(831617),
    A = n(475669),
    E = n(43471),
    _ = n(45780),
    a = n(71393),
    d = n(403362),
    G = n(473145),
    R = n(868652),
    P = n(17928),
    S = n(228366),
    I = n(645619),
    f = n(904629);
let O = {};
class c extends P.Ay.PersistedStore {
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
        (this.waitFor(A.A, I.A, a.A), null != e && (O = e));
    }
    getNotificationStateForGuild(e) {
        return O[e];
    }
}
let C = new c(S.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = a.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            u = I.A.getStateForGuild(t),
            l = A.A.getStateForGuild(t),
            r = (0, f.k)([...Object.values(u?.unlockedPowerups ?? {}), ...Object.values(l?.entitlements ?? {})]);
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
var p = n(379229),
    L = n(383272),
    M = n(414133),
    N = n(229548),
    m = n(139032),
    D = n(531260),
    U = n(287809),
    w = n(202541),
    k = n(128313),
    T = n(786173),
    g = n(294384),
    h = n(639060),
    V = n(864310),
    K = n(482487),
    H = n(568065),
    b = n(652215),
    v = n(49999);
function W(e) {
    var t;
    let n,
        R,
        S,
        O,
        c,
        K = (0, r.bG)([C], () => C.getNotificationStateForGuild(e), [e]),
        v = (0, r.bG)([I.A], () => I.A.getStateForGuild(e)),
        { indicator: W, showUnread: B } =
            ((t = v ?? void 0),
            (n = (0, V.A)(e).available),
            (R = (0, h.A)(e, "useGuildPowerupsNotificationIndicator")),
            (S = (0, o.cN)(null != R ? R.dismissibleContent : null, e)),
            (O = null != R && !S),
            (c = (0, r.bG)([A.A], () => A.A.getStateForGuild(e))),
            u.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    u = (0, f.k)([...Object.values(e), ...Object.values(c?.entitlements ?? {})]),
                    l = K?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(u[u.length - 1]?.ends_at).getTime(),
                    i = K?.lastBoostCount ?? 0,
                    o = u.length > 0 && l < r,
                    s = n - i;
                return o || O
                    ? { indicator: { type: p.cD.WARNING }, showUnread: !0 }
                    : n !== i && s > 0
                      ? { indicator: { type: p.cD.UNREAD, count: s }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [n, K?.lastBoostCount, K?.lastSeenWarningNotification, t, O, c?.entitlements])),
        y = (function (e, t) {
            let [n, o] = (0, N.ty)(null != t),
                R = n === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: S } = (0, V.A)(e),
                I = (0, r.bG)([a.A], () => a.A.getGuild(e)?.features.has(b.GuildFeatures.GAME_SERVERS) ?? !1),
                f = (0, r.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                O = (0, L.DD)(e, "useGuildPowerupsChannelListPopout"),
                c = (0, M.OS)("useGuildPowerupsChannelListPopout"),
                C = (0, L.lY)(e, "useGuildPowerupsChannelListPopout"),
                h = O && c && !C,
                K = (0, T.A)(e, t),
                [v, W] = (0, N.FC)(null != t && !R, K),
                B = v === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                y = (0, m.A)(e),
                F = (function () {
                    let { fractionalState: e } = (0, D.A)(),
                        t = (0, P.bG)([U.default], () => U.default.getCurrentUser()?.isPremiumGroupMember() === !0);
                    return e === w.xc.NONE && !t;
                })(),
                [Q, x] = (0, N.ww)(null != t && !R && !B && null != y && F, e),
                j = Q === i.M.BOOST_TO_UNLOCK_COACHMARK,
                z = (0, k.A)(e),
                [Y, $] = (0, N.W2)(null != t && !R && !B && !j && null != z, e),
                X = Y === i.M.EXPIRING_POWERUP_COACHMARK,
                q = (0, s.TS)(e, "useGuildPowerupsChannelListPopout"),
                [J, Z] = (0, N.vB)(null != t && q),
                ee = J === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                et = (0, E.S)(e, "useGuildPowerupsChannelListPopout"),
                [en, eu] = (0, N.vn)(null != t && !I && q && et),
                el = en === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                er = u.useMemo(() => {
                    if (null == t || R || B || ee || el || j || X) return;
                    let n = (function (e, t) {
                        let n = G.fi.find((e) => {
                            let n = H.a8[e],
                                u = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != u && u.user_id !== H.mB;
                        });
                        if (null == n) return;
                        let u = H.On[n];
                        if (null == u || (0, _.zs)(u, e)) return;
                        let l = H.a8[n],
                            r = null != l ? t.allPowerups[l] : void 0;
                        if (null != r)
                            return {
                                type: p.o.LEVEL_REACHED,
                                powerup: r,
                                markAsDismissed: (t) => {
                                    (0, _._$)(u, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let u = (function (e, t, n, u) {
                        let r = a.A.getGuild(e)?.premiumTier ?? b.TVA.NONE,
                            o = Array.from(H.oN.values())
                                .flatMap((i) =>
                                    i.length <= 0 ||
                                    i.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = H.wr[e];
                                        return null != n && !!(r >= n);
                                    })
                                        ? []
                                        : i.map((r) => {
                                              if (r === l.d0 && !u) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, g.te)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : i;
                                          }),
                                )
                                .filter(d.Vq);
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
                    })(e, t, S, h);
                    if (null != u) return u;
                    let r = (function (e, t, n, u) {
                        if (
                            (0, s.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != u &&
                            n >= u &&
                            !(0, _.zs)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: p.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, _._$)(i.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, I, S, f);
                    if (null != r) return r;
                }, [e, t, R, B, ee, el, j, X, S, I, f, h]),
                [ei, eo] = (0, N.ru)(null != er);
            return u.useMemo(() => {
                if (null != t) {
                    if (R) return { type: p.o.PERKS_AVAILABLE, markAsDismissed: o };
                    if (B) {
                        if (K === H.QS.GAME_SERVER_HOSTING)
                            return { type: p.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: W };
                        let e = H.Q0[K],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: p.o.NEW_PERK_AVAILABLE, markAsDismissed: W };
                    }
                    if (j && null != y) return { type: p.o.BOOST_TO_UNLOCK, powerup: y, markAsDismissed: x };
                    if (X && null != z)
                        return { type: p.o.EXPIRING_PERK, featuredExpiringPowerup: z, markAsDismissed: $ };
                    if (ee) return { type: p.o.GAME_SERVER_NEW_GAMES, markAsDismissed: Z };
                    if (el) return { type: p.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: eu };
                    if (ei === i.M.GUILD_POWERUP_NOTIFICATION && null != er)
                        return {
                            ...er,
                            markAsDismissed: (e) => {
                                (eo(e), er.markAsDismissed(e));
                            },
                        };
                }
            }, [t, R, o, er, ei, eo, B, W, K, j, y, x, X, z, $, ee, Z, el, eu]);
        })(e, v ?? void 0);
    if (null !== v && (null != W || B || null != y)) return { indicator: W, showUnread: B, popout: y };
}
function B(e) {
    let t = (0, r.bG)([I.A], () => I.A.getStateForGuild(e)),
        n = W(e);
    ((0, K.m)(e),
        u.useEffect(() => {
            (0, R.Zm)(e);
        }, [e]),
        u.useEffect(() => {
            let e = new Set([p.o.BOOST_TO_UNLOCK, p.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(v.i.AUTO_DISMISS);
        }, [n]),
        u.useEffect(() => {
            null != t &&
                G.fi.forEach((n) => {
                    let u = H.a8[n];
                    if (null == u || null == t.unlockedPowerups[u]) return;
                    let l = H.On[n];
                    null != l && (0, _._$)(l, e, !1, v.i.AUTO_DISMISS);
                });
        }, [e, t]));
}
