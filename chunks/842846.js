n.d(t, { Pq: () => K, Ay: () => g });
var u = n(64700),
    l = n(512750),
    r = n(702841),
    i = n(554146),
    o = n(367727),
    s = n(45780),
    E = n(71393),
    _ = n(403362),
    A = n(473145),
    a = n(488803),
    d = n(522055),
    G = n(764322),
    R = n(661881),
    P = n(868652),
    I = n(17928),
    S = n(228366),
    c = n(645619),
    O = n(904629);
let C = {};
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
        return C;
    }
    initialize(e) {
        this.waitFor(d.A, c.A, E.A), null != e && (C = e);
    }
    getNotificationStateForGuild(e) {
        return C[e];
    }
}
let p = new f(S.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = E.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            u = c.A.getStateForGuild(t),
            l = d.A.getStateForGuild(t),
            r = (0, O.k)([...Object.values(u?.unlockedPowerups ?? {}), ...Object.values(l?.entitlements ?? {})]);
        C = {
            ...C,
            [t]: {
                lastSeenWarningNotification: new Date(r[r.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        C = {};
    },
});
var L = n(379229),
    m = n(383272),
    M = n(414133),
    N = n(229548),
    D = n(139032),
    U = n(52260),
    w = n(294384),
    h = n(864310),
    V = n(568065),
    k = n(652215),
    T = n(49999);
function g(e) {
    let t = (0, r.bG)([p], () => p.getNotificationStateForGuild(e), [e]),
        n = (0, r.bG)([c.A], () => c.A.getStateForGuild(e)),
        { indicator: P, showUnread: I } = (function (e, t, n) {
            let l = (0, h.A)(e).available,
                { shouldShow: s } = { shouldShow: !1, notificationConfig: null },
                E = (0, o.cN)(i.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                _ = s && !E,
                A = (0, r.bG)([d.A], () => d.A.getStateForGuild(e));
            return u.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    u = (0, O.k)([...Object.values(e), ...Object.values(A?.entitlements ?? {})]),
                    r = n?.lastSeenWarningNotification ?? Date.now(),
                    i = new Date(u[u.length - 1]?.ends_at).getTime(),
                    o = n?.lastBoostCount ?? 0,
                    s = u.length > 0 && r < i,
                    E = l - o;
                return s || _
                    ? { indicator: { type: L.cD.WARNING }, showUnread: !0 }
                    : l !== o && E > 0
                      ? { indicator: { type: L.cD.UNREAD, count: E }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [l, n?.lastBoostCount, n?.lastSeenWarningNotification, t, _, A?.entitlements]);
        })(e, n ?? void 0, t),
        S = (function (e, t) {
            let n,
                o,
                P,
                I,
                S,
                [c, O] = (0, N.ty)(null != t),
                C = c === i.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: f } = (0, h.A)(e),
                p = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(k.GuildFeatures.GAME_SERVERS) ?? !1),
                T = (0, r.bG)([d.A], () => d.A.getLowestGameCostForGuild(e)),
                g = (0, m.DD)(e, "useGuildPowerupsChannelListPopout"),
                K = (0, M.OS)("useGuildPowerupsChannelListPopout"),
                H = g && K,
                b =
                    ((n = (0, a.C$)(e, "GuildPowerupsChannelRow")),
                    (o = (0, r.bG)([E.A], () => E.A.getGuild(e)?.features.has(k.GuildFeatures.GAME_SERVERS))),
                    (P = (0, m.DD)(e, "useGuildPowerupNewPerkAvailableCoachmarkVersion")),
                    (I = (0, M.OS)("useGuildPowerupNewPerkAvailableCoachmarkVersion")),
                    (S = P && I),
                    u.useMemo(() => {
                        let e = t?.allPowerups?.[l.d0] != null,
                            u = t?.unlockedPowerups?.[l.d0] != null;
                        if (S && e && !u) return V.q.GUILD_THEME;
                        let r = t?.allPowerups?.[l.zY] != null,
                            i = t?.unlockedPowerups?.[l.zY] != null;
                        return r && !i
                            ? V.q.FILE_UPLOAD_250_MB
                            : Array.from(V.r9[V.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? n && !o
                                  ? V.q.GAME_SERVER_HOSTING
                                  : Array.from(V.r9[V.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : V.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : V.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, n, o, S])),
                [W, B] = (0, N.FC)(null != t && !C, b),
                y = W === i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                v = (0, D.A)(e),
                [F, j] = (0, N.ww)(null != t && !C && !y && null != v, e),
                q = F === i.M.BOOST_TO_UNLOCK_COACHMARK,
                x = (0, U.A)(e),
                [z, X] = (0, N.W2)(null != t && !C && !y && !q && null != x, e),
                $ = z === i.M.EXPIRING_POWERUP_COACHMARK,
                J = (0, a.TS)(e, "useGuildPowerupsChannelListPopout"),
                Y = (0, R.J)("useGuildPowerupsChannelListPopout"),
                [Q, Z] = (0, N.vB)(null != t && J && Y),
                ee = Q === i.M.GAME_SERVER_NEW_GAMES_COACHMARK,
                et = (0, G.S)(e, "useGuildPowerupsChannelListPopout"),
                [en, eu] = (0, N.vn)(null != t && !p && J && et),
                el = en === i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                er = u.useMemo(() => {
                    if (null == t || C || y || ee || el || q || $) return;
                    let n = (function (e, t) {
                        let n = A.fi.find((e) => {
                            let n = V.a8[e],
                                u = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != u && u.user_id !== V.mB;
                        });
                        if (null == n) return;
                        let u = V.On[n];
                        if (null == u || (0, s.zs)(u, e)) return;
                        let l = V.a8[n],
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
                        let r = E.A.getGuild(e)?.premiumTier ?? k.TVA.NONE,
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
                                              if (r === l.d0 && !u) return null;
                                              let i = t.allPowerups[r];
                                              return null == i ||
                                                  n < i.cost ||
                                                  !i.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, w.t)(e, i, "maybeGetPerkPurchaseablePopoutDCF")
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
                    })(e, t, f, H);
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
                    })(e, p, f, T);
                    if (null != r) return r;
                }, [e, t, C, y, ee, el, q, $, f, p, T, H]),
                [ei, eo] = (0, N.ru)(null != er);
            return u.useMemo(() => {
                if (null != t) {
                    if (C) return { type: L.o.PERKS_AVAILABLE, markAsDismissed: O };
                    if (y) {
                        if (b === V.q.GAME_SERVER_HOSTING)
                            return { type: L.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: B };
                        let e = V.r9[b],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: L.o.NEW_PERK_AVAILABLE, markAsDismissed: B };
                    }
                    if (q && null != v) return { type: L.o.BOOST_TO_UNLOCK, powerup: v, markAsDismissed: j };
                    if ($ && null != x)
                        return { type: L.o.EXPIRING_PERK, featuredExpiringPowerup: x, markAsDismissed: X };
                    if (ee) return { type: L.o.GAME_SERVER_NEW_GAMES, markAsDismissed: Z };
                    if (el) return { type: L.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: eu };
                    if (ei === i.M.GUILD_POWERUP_NOTIFICATION && null != er)
                        return {
                            ...er,
                            markAsDismissed: (e) => {
                                eo(e), er.markAsDismissed(e);
                            },
                        };
                }
            }, [t, C, O, er, ei, eo, y, B, b, q, v, j, $, x, X, ee, Z, el, eu]);
        })(e, n ?? void 0);
    if (null !== n && (null != P || I || null != S)) return { indicator: P, showUnread: I, popout: S };
}
function K(e) {
    let t = (0, r.bG)([c.A], () => c.A.getStateForGuild(e)),
        n = g(e);
    u.useEffect(() => {
        (0, P.Zm)(e);
    }, [e]),
        u.useEffect(() => {
            let e = new Set([L.o.BOOST_TO_UNLOCK, L.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(T.i.AUTO_DISMISS);
        }, [n]),
        u.useEffect(() => {
            null != t &&
                A.fi.forEach((n) => {
                    let u = V.a8[n];
                    if (null == u || null == t.unlockedPowerups[u]) return;
                    let l = V.On[n];
                    null != l && (0, s._$)(l, e, !1, T.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
