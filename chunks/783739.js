n.d(t, { Z: () => I });
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(975298),
    a = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(124570),
    m = n(899667),
    p = n(165630),
    g = n(771845),
    h = n(594174),
    f = n(314884),
    b = n(74538),
    _ = n(199778),
    x = n(296533),
    E = n(901750),
    C = n(112863),
    j = n(701157),
    O = n(912152),
    S = n(615603),
    v = n(474936),
    T = n(551084);
function I(e) {
    let { premiumSubscription: t } = e,
        n = (0, s.e7)([f.Z], () => f.Z.boostSlots),
        I = r.useMemo(() => Object.values(n), [n]),
        N = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        y = b.ZP.isPremium(N, v.p9.TIER_2),
        A = (0, s.e7)([p.Z], () => p.Z.affinities),
        P = (0, s.e7)([g.ZP], () => g.ZP.getFlattenedGuildIds()),
        R = A.length > 0 || P.length > 0,
        D = I.length > 0,
        Z = r.useMemo(() => I.filter((e) => null != e.premiumGuildSubscription), [I]),
        w = Z.length > 0,
        k = I.length > Z.length,
        L = (0, s.e7)([m.Z], () => m.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: B } = (0, l.Z)({ forceFetch: !0 }),
        M = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && B === v.a$.NONE,
        U = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && B === v.a$.NONE,
        V = y && B === v.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: T.blockedPaymentsWarning }),
            (0, i.jsx)(E.Z, {
                hasGuildBoostSlots: D,
                hasAppliedGuildBoosts: w,
                hasBoostPerk: V,
                canAddBoosts: U
            }),
            !(0, u.y)('guild_boosting_settings', N, B) &&
                (0, i.jsx)(O.Z, {
                    hasAppliedGuildBoosts: w,
                    hasBoostPerk: V,
                    hasGuildAffinitiesOrInGuild: R,
                    subscriptionIsPausedOrPausePending: M
                }),
            (0, i.jsx)(_.Z, {
                hide: k,
                containerClassName: T.FPContainer,
                pillClassName: T.FPPill
            }),
            !R && (0, i.jsx)(C.Z, {}),
            (null == t ? void 0 : t.isPaused) && B !== v.a$.FP_SUB_PAUSED
                ? (0, i.jsx)(x.r, {
                      appliedGuildBoosts: L,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(x.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(S.Z, {
                guildBoostSlots: I,
                fractionalPremiumState: B
            }),
            (0, i.jsx)(j.Z, {
                canAddBoosts: w && U,
                canApplyBoosts: k
            }),
            (0, i.jsx)(d.Z, {
                className: T.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: T.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: T.faq })
        ]
    });
}
