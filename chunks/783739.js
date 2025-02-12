n.d(t, { Z: () => b });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(975298),
    a = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(695349),
    h = n(899667),
    m = n(165630),
    g = n(771845),
    x = n(594174),
    _ = n(314884),
    p = n(74538),
    E = n(199778),
    C = n(296533),
    f = n(901750),
    N = n(112863),
    I = n(701157),
    T = n(912152),
    S = n(615603),
    j = n(474936),
    v = n(953380);
function b(e) {
    let { premiumSubscription: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.boostSlots),
        b = s.useMemo(() => Object.values(n), [n]),
        A = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
        O = p.ZP.isPremium(A, j.p9.TIER_2),
        R = (0, l.e7)([m.Z], () => m.Z.affinities),
        D = (0, l.e7)([g.ZP], () => g.ZP.getFlattenedGuildIds()),
        P = R.length > 0 || D.length > 0,
        y = b.length > 0,
        Z = s.useMemo(() => b.filter((e) => null != e.premiumGuildSubscription), [b]),
        L = Z.length > 0,
        k = b.length > Z.length,
        B = (0, l.e7)([h.Z], () => h.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: M } = (0, r.Z)({ forceFetch: !0 }),
        V = (0, u.W)(),
        w = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && M === j.a$.NONE,
        U = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && M === j.a$.NONE,
        G = O && M === j.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: v.blockedPaymentsWarning }),
            (0, i.jsx)(f.Z, {
                hasGuildBoostSlots: y,
                hasAppliedGuildBoosts: L,
                hasBoostPerk: G,
                canAddBoosts: U
            }),
            M === j.a$.NONE &&
                (0, i.jsx)(T.Z, {
                    hasAppliedGuildBoosts: L,
                    hasBoostPerk: G,
                    hasGuildAffinitiesOrInGuild: P,
                    subscriptionIsPausedOrPausePending: w
                }),
            (0, i.jsx)(E.Z, {
                hide: k,
                containerClassName: v.FPContainer,
                pillClassName: v.FPPill,
                isInReverseTrial: V
            }),
            !P && (0, i.jsx)(N.Z, {}),
            (null == t ? void 0 : t.isPaused) && M === j.a$.NONE
                ? (0, i.jsx)(C.r, {
                      appliedGuildBoosts: B,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(C.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(S.Z, {
                guildBoostSlots: b,
                fractionalPremiumState: M
            }),
            (0, i.jsx)(I.Z, {
                canAddBoosts: L && U,
                canApplyBoosts: k
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
