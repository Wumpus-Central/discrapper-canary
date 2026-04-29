n.d(t, { Pq: () => T, Ay: () => g });
var u = n(64700),
    l = n(512750),
    r = n(702841),
    i = n(554146),
    o = n(367727),
    s = n(45780),
    E = n(71393),
    A = n(403362),
    _ = n(473145),
    a = n(488803),
    d = n(522055),
    G = n(764322),
    R = n(661881),
    I = n(942975),
    c = n(17928),
    P = n(228366),
    S = n(645619),
    f = n(904629);
let O = {};
class C extends c.Ay.PersistedStore {
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
        this.waitFor(d.A, S.A, E.A), null != e && (O = e);
    }
    getNotificationStateForGuild(e) {
        return O[e];
    }
}
let p = new C(P.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = E.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            u = S.A.getStateForGuild(t),
            l = d.A.getStateForGuild(t),
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
var L = n(379229),
    m = n(229548),
    M = n(139032),
    N = n(52260),
    U = n(294384),
    D = n(864310),
    h = n(568065),
    w = n(652215),
    V = n(49999);
function g(e) {
    let t = (0, r.bG)([p], () => p.getNotificationStateForGuild(e), [e]),
        n = (0, r.bG)([S.A], () => S.A.getStateForGuild(e)),
        { indicator: I, showUnread: c } = (function (e, t, n) {
            let l = (0, D.A)(e).available,
                { shouldShow: s } = { shouldShow: !1, notificationConfig: null },
                E = (0, o.cN)(i.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                A = s && !E,
                _ = (0, r.bG)([d.A], () => d.A.getStateForGuild(e));
            return u.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    u = (0, f.k)([...Object.values(e), ...Object.values(_?.entitlements ?? {})]),
                    r = n?.lastSeenWarningNotification ?? Date.now(),
                    i = new Date(u[u.length - 1]?.ends_at).getTime(),
                    o = n?.lastBoostCount ?? 0,
                    s = u.length > 0 && r < i,
                    E = l - o;
                return s || A
                    ? { indicator: { type: L.cD.WARNING }, showUnread: !0 }
                    : l !== o && E > 0
                      ? { indicator: { type: L.cD.UNREAD, count: E }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [l, n?.lastBoostCount, n?.lastSeenWarningNotification, t, A, _?.entitlements]);
        })(e, n ?? void 0, t),
        P = (function (e, t) {
            let n,
                o,
                [I, c] = (0, m.ty)(null != t),
                P = I === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: S } = (0, D.A)(e),
                f = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(w.GuildFeatures.GAME_SERVERS) ?? !1),
                O = (0, r.bG)([d.A], () => d.A.getLowestGameCostForGuild(e)),
                C =
                    ((n = (0, a.C$)(e, "GuildPowerupsChannelRow")),
                    (o = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(w.GuildFeatures.GAME_SERVERS))),
                    u.useMemo(() => {
                        let e = t?.allPowerups?.[l.zY] != null,
                            u = t?.unlockedPowerups?.[l.zY] != null;
                        return e && !u
                            ? h.q.FILE_UPLOAD_250_MB
                            : Array.from(h.r9[h.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? n && !o
                                  ? h.q.GAME_SERVER_HOSTING
                                  : Array.from(h.r9[h.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : h.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : h.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, n, o])),
                [p, V] = (0, m.FC)(null != t && !P, C),
                g = p === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                T = (0, M.A)(e),
                [K, k] = (0, m.ww)(null != t && !P && !g && null != T, e),
                H = K === i.M.BOOST_TO_UNLOCK_COACHMARK,
                b = (0, N.A)(e),
                [W, B] = (0, m.W2)(null != t && !P && !g && !H && null != b, e),
                y = W === i.M.EXPIRING_POWERUP_COACHMARK,
                v = (0, a.TS)(e, "useGuildPowerupsChannelListPopout"),
                F = (0, R.J)("useGuildPowerupsChannelListPopout"),
                [j, q] = (0, m.vB)(e, null != t && v && F),
                x = j === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                z = (0, G.S)(e, "useGuildPowerupsChannelListPopout"),
                [X, $] = (0, m.vn)(null != t && !f && v && z),
                J = X === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                Y = u.useMemo(() => {
                    if (null == t || P || g || x || J || H || y) return;
                    let n = (function (e, t) {
                        let n = _.fi.find((e) => {
                            let n = h.a8[e],
                                u = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != u && u.user_id !== h.mB;
                        });
                        if (null == n) return;
                        let u = h.On[n];
                        if (null == u || (0, s.zs)(u, e)) return;
                        let l = h.a8[n],
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
                    let u = (function (e, t, n) {
                        let u = E.A.getGuild(e)?.premiumTier ?? w.TVA.NONE,
                            l = Array.from(h.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = h.wr[e];
                                        return null != n && !!(u >= n);
                                    })
                                        ? []
                                        : l.map((u) => {
                                              let l = t.allPowerups[u];
                                              return null == l ||
                                                  n < l.cost ||
                                                  !l.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, U.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : l;
                                          }),
                                )
                                .filter(A.Vq);
                        if (0 !== l.length) {
                            if (1 === l.length && !(0, s.zs)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: L.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, s._$)(i.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (l.length > 1 && !(0, s.zs)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: L.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, s._$)(i.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, S);
                    if (null != u) return u;
                    let l = (function (e, t, n, u) {
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
                    })(e, f, S, O);
                    if (null != l) return l;
                }, [e, t, P, g, x, J, H, y, S, f, O]),
                [Q, Z] = (0, m.ru)(null != Y);
            return u.useMemo(() => {
                if (null != t) {
                    if (P) return { type: L.o.PERKS_AVAILABLE, markAsDismissed: c };
                    if (g) {
                        if (C === h.q.GAME_SERVER_HOSTING)
                            return { type: L.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: V };
                        let e = h.r9[C],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: L.o.NEW_PERK_AVAILABLE, markAsDismissed: V };
                    }
                    if (H && null != T) return { type: L.o.BOOST_TO_UNLOCK, powerup: T, markAsDismissed: k };
                    if (y && null != b)
                        return { type: L.o.EXPIRING_PERK, featuredExpiringPowerup: b, markAsDismissed: B };
                    if (x) return { type: L.o.GAME_SERVER_NEW_GAMES, markAsDismissed: q };
                    if (J) return { type: L.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: $ };
                    if (Q === i.M.GUILD_POWERUP_NOTIFICATION && null != Y)
                        return {
                            ...Y,
                            markAsDismissed: (e) => {
                                Z(e), Y.markAsDismissed(e);
                            },
                        };
                }
            }, [t, P, c, Y, Q, Z, g, V, C, H, T, k, y, b, B, x, q, J, $]);
        })(e, n ?? void 0);
    if (null !== n && (null != I || c || null != P)) return { indicator: I, showUnread: c, popout: P };
}
function T(e) {
    let t = (0, r.bG)([S.A], () => S.A.getStateForGuild(e)),
        n = g(e);
    u.useEffect(() => {
        (0, I.Zm)(e);
    }, [e]),
        u.useEffect(() => {
            let e = new Set([L.o.BOOST_TO_UNLOCK, L.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(V.i.AUTO_DISMISS);
        }, [n]),
        u.useEffect(() => {
            null != t &&
                _.fi.forEach((n) => {
                    let u = h.a8[n];
                    if (null == u || null == t.unlockedPowerups[u]) return;
                    let l = h.On[n];
                    null != l && (0, s._$)(l, e, !1, V.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
