n.d(t, { Z: () => v });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(975298),
    a = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(899667),
    h = n(165630),
    m = n(771845),
    g = n(594174),
    x = n(314884),
    _ = n(74538),
    p = n(199778),
    E = n(296533),
    C = n(901750),
    N = n(112863),
    f = n(701157),
    I = n(912152),
    T = n(615603),
    S = n(474936),
    j = n(953380);
function v(e) {
    let { premiumSubscription: t } = e,
        n = (0, l.e7)([x.Z], () => x.Z.boostSlots),
        v = s.useMemo(() => Object.values(n), [n]),
        b = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        A = _.ZP.isPremium(b, S.p9.TIER_2),
        O = (0, l.e7)([h.Z], () => h.Z.affinities),
        R = (0, l.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
        D = O.length > 0 || R.length > 0,
        P = v.length > 0,
        y = s.useMemo(() => v.filter((e) => null != e.premiumGuildSubscription), [v]),
        Z = y.length > 0,
        L = v.length > y.length,
        k = (0, l.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: B } = (0, r.Z)({ forceFetch: !0 }),
        M = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && B === S.a$.NONE,
        V = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && B === S.a$.NONE,
        w = A && B === S.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: j.blockedPaymentsWarning }),
            (0, i.jsx)(C.Z, {
                hasGuildBoostSlots: P,
                hasAppliedGuildBoosts: Z,
                hasBoostPerk: w,
                canAddBoosts: V
            }),
            B === S.a$.NONE &&
                (0, i.jsx)(I.Z, {
                    hasAppliedGuildBoosts: Z,
                    hasBoostPerk: w,
                    hasGuildAffinitiesOrInGuild: D,
                    subscriptionIsPausedOrPausePending: M
                }),
            (0, i.jsx)(p.Z, {
                hide: L,
                containerClassName: j.FPContainer,
                pillClassName: j.FPPill
            }),
            !D && (0, i.jsx)(N.Z, {}),
            (null == t ? void 0 : t.isPaused) && B === S.a$.NONE
                ? (0, i.jsx)(E.r, {
                      appliedGuildBoosts: k,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(E.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(T.Z, {
                guildBoostSlots: v,
                fractionalPremiumState: B
            }),
            (0, i.jsx)(f.Z, {
                canAddBoosts: Z && V,
                canApplyBoosts: L
            }),
            (0, i.jsx)(d.Z, {
                className: j.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: j.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: j.faq })
        ]
    });
}
