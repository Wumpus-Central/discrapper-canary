n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(975298),
    l = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(124570),
    m = n(899667),
    g = n(165630),
    p = n(771845),
    h = n(594174),
    f = n(314884),
    x = n(74538),
    b = n(199778),
    N = n(296533),
    _ = n(901750),
    E = n(112863),
    j = n(701157),
    C = n(912152),
    O = n(615603),
    v = n(474936),
    S = n(482397);
function T(e) {
    let { premiumSubscription: t } = e,
        n = (0, s.e7)([f.Z], () => f.Z.boostSlots),
        T = i.useMemo(() => Object.values(n), [n]),
        I = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        y = x.ZP.isPremium(I, v.p9.TIER_2),
        A = (0, s.e7)([g.Z], () => g.Z.affinities),
        P = (0, s.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()),
        R = A.length > 0 || P.length > 0,
        D = T.length > 0,
        Z = i.useMemo(() => T.filter((e) => null != e.premiumGuildSubscription), [T]),
        w = Z.length > 0,
        k = T.length > Z.length,
        W = (0, s.e7)([m.Z], () => m.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: L } = (0, a.Z)({ forceFetch: !0 }),
        B = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && L === v.a$.NONE,
        M = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && L === v.a$.NONE,
        U = y && L === v.a$.FP_SUB_PAUSED;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.oQ, { className: S.blockedPaymentsWarning }),
            (0, r.jsx)(_.Z, {
                hasGuildBoostSlots: D,
                hasAppliedGuildBoosts: w,
                hasBoostPerk: U,
                canAddBoosts: M
            }),
            !(0, u.y)('guild_boosting_settings', I, L) &&
                (0, r.jsx)(C.Z, {
                    hasAppliedGuildBoosts: w,
                    hasBoostPerk: U,
                    hasGuildAffinitiesOrInGuild: R,
                    subscriptionIsPausedOrPausePending: B
                }),
            (0, r.jsx)(b.Z, {
                hide: k,
                containerClassName: S.FPContainer,
                pillClassName: S.FPPill
            }),
            !R && (0, r.jsx)(E.Z, {}),
            (null == t ? void 0 : t.isPaused) && L !== v.a$.FP_SUB_PAUSED
                ? (0, r.jsx)(N.r, {
                      appliedGuildBoosts: W,
                      premiumSubscription: t
                  })
                : (0, r.jsx)(N.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, r.jsx)(O.Z, {
                guildBoostSlots: T,
                fractionalPremiumState: L
            }),
            (0, r.jsx)(j.Z, {
                canAddBoosts: w && M,
                canApplyBoosts: k
            }),
            (0, r.jsx)(d.Z, {
                className: S.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, r.jsx)(o.Z, { cardClassName: S.boosterRecognitionCard }),
            (0, r.jsx)(c.Z, { className: S.faq })
        ]
    });
}
