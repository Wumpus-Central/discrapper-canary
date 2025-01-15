n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(975298),
    l = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(899667),
    m = n(165630),
    g = n(771845),
    h = n(594174),
    p = n(314884),
    x = n(74538),
    f = n(199778),
    _ = n(296533),
    E = n(901750),
    C = n(112863),
    T = n(701157),
    S = n(912152),
    b = n(615603),
    I = n(474936),
    N = n(857769);
function v(e) {
    let { premiumSubscription: t } = e,
        n = (0, s.e7)([p.Z], () => p.Z.boostSlots),
        v = r.useMemo(() => Object.values(n), [n]),
        A = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        j = x.ZP.isPremium(A, I.p9.TIER_2),
        O = (0, s.e7)([m.Z], () => m.Z.affinities),
        R = (0, s.e7)([g.ZP], () => g.ZP.getFlattenedGuildIds()),
        P = O.length > 0 || R.length > 0,
        y = v.length > 0,
        B = r.useMemo(() => v.filter((e) => null != e.premiumGuildSubscription), [v]),
        D = B.length > 0,
        Z = v.length > B.length,
        L = (0, s.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: M } = (0, a.Z)({ forceFetch: !0 }),
        k = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && M === I.a$.NONE,
        w = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && M === I.a$.NONE,
        U = j && M === I.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.oQ, { className: N.blockedPaymentsWarning }),
            (0, i.jsx)(E.Z, {
                hasGuildBoostSlots: y,
                hasAppliedGuildBoosts: D,
                hasBoostPerk: U,
                canAddBoosts: w
            }),
            M === I.a$.NONE &&
                (0, i.jsx)(S.Z, {
                    hasAppliedGuildBoosts: D,
                    hasBoostPerk: U,
                    hasGuildAffinitiesOrInGuild: P,
                    subscriptionIsPausedOrPausePending: k
                }),
            (0, i.jsx)(f.Z, {
                hide: Z,
                containerClassName: N.FPContainer,
                pillClassName: N.FPPill
            }),
            !P && (0, i.jsx)(C.Z, {}),
            (null == t ? void 0 : t.isPaused) && M === I.a$.NONE
                ? (0, i.jsx)(_.r, {
                      appliedGuildBoosts: L,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(_.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(b.Z, {
                guildBoostSlots: v,
                fractionalPremiumState: M
            }),
            (0, i.jsx)(T.Z, {
                canAddBoosts: D && w,
                canApplyBoosts: Z
            }),
            (0, i.jsx)(d.Z, {
                className: N.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: N.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: N.faq })
        ]
    });
}
