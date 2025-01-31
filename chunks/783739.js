n.d(t, { Z: () => v });
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(975298),
    a = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(899667),
    m = n(165630),
    h = n(771845),
    g = n(594174),
    _ = n(314884),
    x = n(74538),
    p = n(199778),
    E = n(296533),
    C = n(901750),
    f = n(112863),
    T = n(701157),
    N = n(912152),
    I = n(615603),
    S = n(474936),
    b = n(734943);
function v(e) {
    let { premiumSubscription: t } = e,
        n = (0, r.e7)([_.Z], () => _.Z.boostSlots),
        v = s.useMemo(() => Object.values(n), [n]),
        j = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        A = x.ZP.isPremium(j, S.p9.TIER_2),
        O = (0, r.e7)([m.Z], () => m.Z.affinities),
        R = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
        P = O.length > 0 || R.length > 0,
        D = v.length > 0,
        y = s.useMemo(() => v.filter((e) => null != e.premiumGuildSubscription), [v]),
        Z = y.length > 0,
        L = v.length > y.length,
        k = (0, r.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: B } = (0, l.Z)({ forceFetch: !0 }),
        M = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && B === S.a$.NONE,
        w = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && B === S.a$.NONE,
        V = A && B === S.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: b.blockedPaymentsWarning }),
            (0, i.jsx)(C.Z, {
                hasGuildBoostSlots: D,
                hasAppliedGuildBoosts: Z,
                hasBoostPerk: V,
                canAddBoosts: w
            }),
            B === S.a$.NONE &&
                (0, i.jsx)(N.Z, {
                    hasAppliedGuildBoosts: Z,
                    hasBoostPerk: V,
                    hasGuildAffinitiesOrInGuild: P,
                    subscriptionIsPausedOrPausePending: M
                }),
            (0, i.jsx)(p.Z, {
                hide: L,
                containerClassName: b.FPContainer,
                pillClassName: b.FPPill
            }),
            !P && (0, i.jsx)(f.Z, {}),
            (null == t ? void 0 : t.isPaused) && B === S.a$.NONE
                ? (0, i.jsx)(E.r, {
                      appliedGuildBoosts: k,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(E.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(I.Z, {
                guildBoostSlots: v,
                fractionalPremiumState: B
            }),
            (0, i.jsx)(T.Z, {
                canAddBoosts: Z && w,
                canApplyBoosts: L
            }),
            (0, i.jsx)(d.Z, {
                className: b.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: b.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: b.faq })
        ]
    });
}
