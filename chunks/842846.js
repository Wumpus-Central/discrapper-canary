n.d(t, { Pq: () => T, Ay: () => V });
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
    R = n(942975),
    I = n(17928),
    S = n(228366),
    P = n(645619),
    c = n(904629);
let O = {};
class f extends I.Ay.PersistedStore {
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
        this.waitFor(d.A, P.A, E.A), null != e && (O = e);
    }
    getNotificationStateForGuild(e) {
        return O[e];
    }
}
let C = new f(S.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = E.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            u = P.A.getStateForGuild(t),
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
    p = n(229548),
    M = n(139032),
    m = n(52260),
    N = n(294384),
    U = n(864310),
    D = n(568065),
    h = n(652215),
    w = n(49999);
function V(e) {
    let t = (0, r.bG)([C], () => C.getNotificationStateForGuild(e), [e]),
        n = (0, r.bG)([P.A], () => P.A.getStateForGuild(e)),
        { indicator: R, showUnread: I } = (function (e, t, n) {
            let l = (0, U.A)(e).available,
                { shouldShow: s } = { shouldShow: !1, notificationConfig: null },
                E = (0, o.cN)(i.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                A = s && !E,
                _ = (0, r.bG)([d.A], () => d.A.getStateForGuild(e));
            return u.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    u = (0, c.k)([...Object.values(e), ...Object.values(_?.entitlements ?? {})]),
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
        S = (function (e, t) {
            let n,
                o,
                [R, I] = (0, p.ty)(null != t),
                S = R === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: P } = (0, U.A)(e),
                c = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(h.GuildFeatures.GAME_SERVERS) ?? !1),
                O = (0, r.bG)([d.A], () => d.A.getLowestGameCostForGuild(e)),
                f =
                    ((n = (0, a.C$)(e, "GuildPowerupsChannelRow")),
                    (o = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(h.GuildFeatures.GAME_SERVERS))),
                    u.useMemo(() => {
                        let e = t?.allPowerups?.[l.zY] != null,
                            u = t?.unlockedPowerups?.[l.zY] != null;
                        return e && !u
                            ? D.q.FILE_UPLOAD_250_MB
                            : Array.from(D.r9[D.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? n && !o
                                  ? D.q.GAME_SERVER_HOSTING
                                  : Array.from(D.r9[D.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : D.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : D.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, n, o])),
                [C, w] = (0, p.FC)(null != t && !S, f),
                V = C === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                T = (0, M.A)(e),
                [g, K] = (0, p.ww)(null != t && !S && !V && null != T, e),
                k = g === i.M.BOOST_TO_UNLOCK_COACHMARK,
                H = (0, m.A)(e),
                [W, B] = (0, p.W2)(null != t && !S && !V && !k && null != H, e),
                b = W === i.M.EXPIRING_POWERUP_COACHMARK,
                y = (0, a.TS)(e, "useGuildPowerupsChannelListPopout"),
                [v, F] = (0, p.vB)(e, null != t && y),
                j = v === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                q = (0, G.S)(e, "useGuildPowerupsChannelListPopout"),
                [x, z] = (0, p.vn)(null != t && !c && y && q),
                X = x === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                $ = u.useMemo(() => {
                    if (null == t || S || V || j || X || k || b) return;
                    let n = (function (e, t) {
                        let n = _.fi.find((e) => {
                            let n = D.a8[e],
                                u = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != u && u.user_id !== D.mB;
                        });
                        if (null == n) return;
                        let u = D.On[n];
                        if (null == u || (0, s.zs)(u, e)) return;
                        let l = D.a8[n],
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
                        let u = E.A.getGuild(e)?.premiumTier ?? h.TVA.NONE,
                            l = Array.from(D.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = D.wr[e];
                                        return null != n && !!(u >= n);
                                    })
                                        ? []
                                        : l.map((u) => {
                                              let l = t.allPowerups[u];
                                              return null == l ||
                                                  n < l.cost ||
                                                  !l.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, N.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
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
                    })(e, t, P);
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
                    })(e, c, P, O);
                    if (null != l) return l;
                }, [e, t, S, V, j, X, k, b, P, c, O]),
                [Y, J] = (0, p.ru)(null != $);
            return u.useMemo(() => {
                if (null != t) {
                    if (S) return { type: L.o.PERKS_AVAILABLE, markAsDismissed: I };
                    if (V) {
                        if (f === D.q.GAME_SERVER_HOSTING)
                            return { type: L.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: w };
                        let e = D.r9[f],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: L.o.NEW_PERK_AVAILABLE, markAsDismissed: w };
                    }
                    if (k && null != T) return { type: L.o.BOOST_TO_UNLOCK, powerup: T, markAsDismissed: K };
                    if (b && null != H)
                        return { type: L.o.EXPIRING_PERK, featuredExpiringPowerup: H, markAsDismissed: B };
                    if (j) return { type: L.o.GAME_SERVER_NEW_GAMES, markAsDismissed: F };
                    if (X) return { type: L.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: z };
                    if (Y === i.M.GUILD_POWERUP_NOTIFICATION && null != $)
                        return {
                            ...$,
                            markAsDismissed: (e) => {
                                J(e), $.markAsDismissed(e);
                            },
                        };
                }
            }, [t, S, I, $, Y, J, V, w, f, k, T, K, b, H, B, j, F, X, z]);
        })(e, n ?? void 0);
    if (null !== n && (null != R || I || null != S)) return { indicator: R, showUnread: I, popout: S };
}
function T(e) {
    let t = (0, r.bG)([P.A], () => P.A.getStateForGuild(e)),
        n = V(e);
    u.useEffect(() => {
        (0, R.Zm)(e);
    }, [e]),
        u.useEffect(() => {
            let e = new Set([L.o.BOOST_TO_UNLOCK, L.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(w.i.AUTO_DISMISS);
        }, [n]),
        u.useEffect(() => {
            null != t &&
                _.fi.forEach((n) => {
                    let u = D.a8[n];
                    if (null == u || null == t.unlockedPowerups[u]) return;
                    let l = D.On[n];
                    null != l && (0, s._$)(l, e, !1, w.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
