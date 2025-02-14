n.d(t, { Z: () => j });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(975298),
    a = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(695349),
    m = n(899667),
    h = n(165630),
    g = n(771845),
    x = n(594174),
    _ = n(314884),
    p = n(74538),
    E = n(199778),
    C = n(296533),
    f = n(901750),
    T = n(112863),
    N = n(701157),
    S = n(912152),
    I = n(615603),
    b = n(474936),
    v = n(945821);
function j(e) {
    let { premiumSubscription: t } = e,
        n = (0, r.e7)([_.Z], () => _.Z.boostSlots),
        j = s.useMemo(() => Object.values(n), [n]),
        A = (0, r.e7)([x.default], () => x.default.getCurrentUser()),
        O = p.ZP.isPremium(A, b.p9.TIER_2),
        R = (0, r.e7)([h.Z], () => h.Z.affinities),
        P = (0, r.e7)([g.ZP], () => g.ZP.getFlattenedGuildIds()),
        D = R.length > 0 || P.length > 0,
        y = j.length > 0,
        Z = s.useMemo(() => j.filter((e) => null != e.premiumGuildSubscription), [j]),
        k = Z.length > 0,
        L = j.length > Z.length,
        B = (0, r.e7)([m.Z], () => m.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: M } = (0, l.Z)({ forceFetch: !0 }),
        w = (0, u.W)(),
        V = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && M === b.a$.NONE,
        U = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && M === b.a$.NONE,
        G = O && M === b.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: v.blockedPaymentsWarning }),
            (0, i.jsx)(f.Z, {
                hasGuildBoostSlots: y,
                hasAppliedGuildBoosts: k,
                hasBoostPerk: G,
                canAddBoosts: U
            }),
            M === b.a$.NONE &&
                (0, i.jsx)(S.Z, {
                    hasAppliedGuildBoosts: k,
                    hasBoostPerk: G,
                    hasGuildAffinitiesOrInGuild: D,
                    subscriptionIsPausedOrPausePending: V
                }),
            (0, i.jsx)(E.Z, {
                hide: L,
                containerClassName: v.FPContainer,
                pillClassName: v.FPPill,
                isInReverseTrial: w
            }),
            !D && (0, i.jsx)(T.Z, {}),
            (null == t ? void 0 : t.isPaused) && M === b.a$.NONE
                ? (0, i.jsx)(C.r, {
                      appliedGuildBoosts: B,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(C.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(I.Z, {
                guildBoostSlots: j,
                fractionalPremiumState: M
            }),
            (0, i.jsx)(N.Z, {
                canAddBoosts: k && U,
                canApplyBoosts: L
            }),
            (0, i.jsx)(d.Z, {
                className: v.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: v.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: v.faq })
        ]
    });
}
