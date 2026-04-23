n.d(t, { Pq: () => M, Ay: () => G });
var i = n(64700),
    l = n(512750),
    s = n(702841),
    r = n(554146),
    a = n(367727),
    o = n(45780),
    d = n(71393),
    c = n(403362),
    u = n(473145),
    h = n(488803),
    A = n(522055),
    _ = n(764322),
    g = n(969983),
    m = n(942975),
    p = n(17928),
    f = n(228366),
    E = n(645619),
    C = n(904629);
let x = {};
class I extends p.Ay.PersistedStore {
    static displayName = "GuildPowerupsNotificationStore";
    static persistKey = "GuildPowerupsNotificationStore";
    static migrations = [
        (e) => (
            Object.entries(e).forEach((t) => {
                let [n, i] = t;
                e[n] = i;
            }),
            e
        ),
    ];
    getState() {
        return x;
    }
    initialize(e) {
        this.waitFor(A.A, E.A, d.A), null != e && (x = e);
    }
    getNotificationStateForGuild(e) {
        return x[e];
    }
}
let b = new I(f.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function (e) {
        let { guildId: t } = e,
            n = d.A.getGuild(t)?.premiumSubscriberCount ?? 0,
            i = E.A.getStateForGuild(t),
            l = A.A.getStateForGuild(t),
            s = (0, C.k)([...Object.values(i?.unlockedPowerups ?? {}), ...Object.values(l?.entitlements ?? {})]);
        x = {
            ...x,
            [t]: {
                lastSeenWarningNotification: new Date(s[s.length - 1]?.ends_at ?? Date.now()).getTime(),
                lastBoostCount: n,
            },
        };
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function () {
        x = {};
    },
});
var S = n(379229),
    N = n(932001),
    T = n(139032),
    v = n(52260),
    y = n(294384),
    R = n(864310),
    j = n(568065),
    L = n(652215),
    O = n(49999);
function G(e) {
    let t = (0, s.bG)([b], () => b.getNotificationStateForGuild(e), [e]),
        n = (0, s.bG)([E.A], () => E.A.getStateForGuild(e)),
        { indicator: m, showUnread: p } = (function (e, t, n) {
            let l = (0, R.A)(e).available,
                { shouldShow: o } = { shouldShow: !1, notificationConfig: null },
                d = (0, a.cN)(r.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION, e),
                c = o && !d,
                u = (0, s.bG)([A.A], () => A.A.getStateForGuild(e));
            return i.useMemo(() => {
                if (null == t) return { indicator: void 0, showUnread: !1 };
                let { unlockedPowerups: e } = t,
                    i = (0, C.k)([...Object.values(e), ...Object.values(u?.entitlements ?? {})]),
                    s = n?.lastSeenWarningNotification ?? Date.now(),
                    r = new Date(i[i.length - 1]?.ends_at).getTime(),
                    a = n?.lastBoostCount ?? 0,
                    o = i.length > 0 && s < r,
                    d = l - a;
                return o || c
                    ? { indicator: { type: S.cD.WARNING }, showUnread: !0 }
                    : l !== a && d > 0
                      ? { indicator: { type: S.cD.UNREAD, count: d }, showUnread: !0 }
                      : { indicator: void 0, showUnread: !1 };
            }, [l, n?.lastBoostCount, n?.lastSeenWarningNotification, t, c, u?.entitlements]);
        })(e, n ?? void 0, t),
        f = (function (e, t) {
            var n, a, m, p, f, E, C;
            let x,
                I,
                [b, O] = ((n = null != t), (0, N.kn)(n ? [r.M.GUILD_POWERUP_PERKS_COACHMARK] : [])),
                G = b === r.M.GUILD_POWERUP_PERKS_COACHMARK,
                { available: M } = (0, R.A)(e),
                D = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(L.GuildFeatures.GAME_SERVERS) ?? !1),
                U = (0, s.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                P =
                    ((x = (0, h.C$)(e, "GuildPowerupsChannelRow")),
                    (I = (0, s.bG)([d.A], () => d.A.getGuild(e)?.features.has(L.GuildFeatures.GAME_SERVERS))),
                    i.useMemo(() => {
                        let e = t?.allPowerups?.[l.zY] != null,
                            n = t?.unlockedPowerups?.[l.zY] != null;
                        return e && !n
                            ? j.q.FILE_UPLOAD_250_MB
                            : Array.from(j.r9[j.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO]).some(
                                    (e) => t?.unlockedPowerups?.[e] != null,
                                )
                              ? x && !I
                                  ? j.q.GAME_SERVER_HOSTING
                                  : Array.from(j.r9[j.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some(
                                          (e) => t?.unlockedPowerups?.[e] != null,
                                      )
                                    ? 0
                                    : j.q.GUILD_TAG_BADGE_PACKS_WAVE_ONE
                              : j.q.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    }, [t, x, I])),
                [w, k] =
                    ((a = null != t && !G),
                    (0, N.RF)(a && P > 0 ? r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, P)),
                V = w === r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
                B = (0, T.A)(e),
                [H, F] =
                    ((m = null != t && !G && !V && null != B),
                    (0, N.D8)(m ? r.M.BOOST_TO_UNLOCK_COACHMARK : null, e, {
                        cooldownDurationMs: S.bW,
                        numTimesToRecur: 5,
                    })),
                W = H === r.M.BOOST_TO_UNLOCK_COACHMARK,
                K = (0, v.A)(e),
                [Y, z] =
                    ((p = null != t && !G && !V && !W && null != K),
                    (0, N.D8)(p ? r.M.EXPIRING_POWERUP_COACHMARK : null, e, { cooldownDurationMs: S.mD })),
                q = Y === r.M.EXPIRING_POWERUP_COACHMARK,
                X = (0, h.TS)(e, "useGuildPowerupsChannelListPopout"),
                Q = (0, g.J)("useGuildPowerupsChannelListPopout"),
                [J, Z] =
                    ((f = null != t && X && Q),
                    (0, N.kn)(f ? [r.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK] : [])),
                $ = J === r.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK,
                ee = (0, _.S)(e, "useGuildPowerupsChannelListPopout"),
                [et, en] =
                    ((E = null != t && !D && X && ee), (0, N.kn)(E ? [r.M.GAME_SERVER_PRICING_CHANGE_COACHMARK] : [])),
                ei = et === r.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
                el = i.useMemo(() => {
                    if (null == t || G || V || $ || ei || W || q) return;
                    let n = (function (e, t) {
                        let n = u.fi.find((e) => {
                            let n = j.a8[e],
                                i = null != n ? t.unlockedPowerups[n] : void 0;
                            return null != i && i.user_id !== j.mB;
                        });
                        if (null == n) return;
                        let i = j.On[n];
                        if (null == i || (0, o.zs)(i, e)) return;
                        let l = j.a8[n],
                            s = null != l ? t.allPowerups[l] : void 0;
                        if (null != s)
                            return {
                                type: S.o.LEVEL_REACHED,
                                powerup: s,
                                markAsDismissed: (t) => {
                                    (0, o._$)(i, e, !0, t);
                                },
                            };
                    })(e, t);
                    if (null != n) return n;
                    let i = (function (e, t, n) {
                        let i = d.A.getGuild(e)?.premiumTier ?? L.TVA.NONE,
                            l = Array.from(j.oN.values())
                                .flatMap((l) =>
                                    l.length <= 0 ||
                                    l.some((e) => {
                                        if (null != t.unlockedPowerups[e]) return !0;
                                        let n = j.wr[e];
                                        return null != n && !!(i >= n);
                                    })
                                        ? []
                                        : l.map((i) => {
                                              let l = t.allPowerups[i];
                                              return null == l ||
                                                  n < l.cost ||
                                                  !l.dependencies.every((e) => null != t.unlockedPowerups[e]) ||
                                                  (0, y.t)(e, l, "maybeGetPerkPurchaseablePopoutDCF")
                                                  ? null
                                                  : l;
                                          }),
                                )
                                .filter(c.Vq);
                        if (0 !== l.length) {
                            if (1 === l.length && !(0, o.zs)(r.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: S.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(r.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                            if (l.length > 1 && !(0, o.zs)(r.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e))
                                return {
                                    type: S.o.PERKS_PURCHASABLE,
                                    powerups: l,
                                    markAsDismissed: (t) => {
                                        (0, o._$)(r.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, e, !0, t);
                                    },
                                };
                        }
                    })(e, t, M);
                    if (null != i) return i;
                    let l = (function (e, t, n, i) {
                        if (
                            (0, h.TS)(e, "maybeGetGameServerHostingGuildEligiblePopoutDCF") &&
                            !t &&
                            null != i &&
                            n >= i &&
                            !(0, o.zs)(r.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e)
                        )
                            return {
                                type: S.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed: (t) => {
                                    (0, o._$)(r.V.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, e, !0, t);
                                },
                            };
                    })(e, D, M, U);
                    if (null != l) return l;
                }, [e, t, G, V, $, ei, W, q, M, D, U]),
                [es, er] =
                    ((C = null != el),
                    (0, N.Wl)(C ? r.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: S.lE }));
            return i.useMemo(() => {
                if (null != t) {
                    if (G) return { type: S.o.PERKS_AVAILABLE, markAsDismissed: O };
                    if (V) {
                        if (P === j.q.GAME_SERVER_HOSTING)
                            return { type: S.o.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: k };
                        let e = j.r9[P],
                            n = Object.values(t.allPowerups).filter((t) => e.has(t.skuId));
                        if (0 === n.length) return;
                        return { powerups: n, type: S.o.NEW_PERK_AVAILABLE, markAsDismissed: k };
                    }
                    if (W && null != B) return { type: S.o.BOOST_TO_UNLOCK, powerup: B, markAsDismissed: F };
                    if (q && null != K)
                        return { type: S.o.EXPIRING_PERK, featuredExpiringPowerup: K, markAsDismissed: z };
                    if ($) return { type: S.o.GAME_SERVER_NEW_GAMES, markAsDismissed: Z };
                    if (ei) return { type: S.o.GAME_SERVER_PRICING_CHANGE, markAsDismissed: en };
                    if (es === r.M.GUILD_POWERUP_NOTIFICATION && null != el)
                        return {
                            ...el,
                            markAsDismissed: (e) => {
                                er(e), el.markAsDismissed(e);
                            },
                        };
                }
            }, [t, G, O, el, es, er, V, k, P, W, B, F, q, K, z, $, Z, ei, en]);
        })(e, n ?? void 0);
    if (null !== n && (null != m || p || null != f)) return { indicator: m, showUnread: p, popout: f };
}
function M(e) {
    let t = (0, s.bG)([E.A], () => E.A.getStateForGuild(e)),
        n = G(e);
    i.useEffect(() => {
        (0, m.Zm)(e);
    }, [e]),
        i.useEffect(() => {
            let e = new Set([S.o.BOOST_TO_UNLOCK, S.o.EXPIRING_PERK]);
            (n?.popout?.type != null && e.has(n.popout.type)) || n?.popout?.markAsDismissed(O.i.AUTO_DISMISS);
        }, [n]),
        i.useEffect(() => {
            null != t &&
                u.fi.forEach((n) => {
                    let i = j.a8[n];
                    if (null == i || null == t.unlockedPowerups[i]) return;
                    let l = j.On[n];
                    null != l && (0, o._$)(l, e, !1, O.i.AUTO_DISMISS);
                });
        }, [e, t]);
}
