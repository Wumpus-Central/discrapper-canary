n.d(t, { Z: () => S });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(975298),
    s = n(89057),
    l = n(724884),
    c = n(290799),
    u = n(362948),
    d = n(899667),
    f = n(165630),
    _ = n(771845),
    p = n(594174),
    h = n(314884),
    m = n(74538),
    g = n(296533),
    E = n(901750),
    b = n(112863),
    y = n(701157),
    O = n(912152),
    v = n(615603),
    I = n(474936),
    T = n(28616);
function S(e) {
    let { premiumSubscription: t } = e,
        n = (0, a.e7)([h.Z], () => h.Z.boostSlots),
        S = i.useMemo(() => Object.values(n), [n]),
        A = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        C = m.ZP.isPremium(A, I.PremiumTypes.TIER_2),
        N = (0, a.e7)([f.Z], () => f.Z.affinities),
        R = (0, a.e7)([_.ZP], () => _.ZP.getFlattenedGuildIds()),
        P = N.length > 0 || R.length > 0,
        w = S.length > 0,
        D = i.useMemo(() => S.filter((e) => null != e.premiumGuildSubscription), [S]),
        x = D.length > 0,
        L = S.length > D.length,
        M = (0, a.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: j } = (0, o.Z)({ forceFetch: !0 }),
        k = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && j === I.a$.NONE,
        U = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && j === I.a$.NONE,
        G = C && j === I.a$.FP_SUB_PAUSED;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.oQ, { className: T.blockedPaymentsWarning }),
            (0, r.jsx)(E.Z, {
                hasGuildBoostSlots: w,
                hasAppliedGuildBoosts: x,
                hasBoostPerk: G,
                canAddBoosts: U,
            }),
            j === I.a$.NONE &&
                (0, r.jsx)(O.Z, {
                    hasAppliedGuildBoosts: x,
                    hasBoostPerk: G,
                    hasGuildAffinitiesOrInGuild: P,
                    subscriptionIsPausedOrPausePending: k,
                }),
            !P && (0, r.jsx)(b.Z, {}),
            (null == t ? void 0 : t.isPaused) && j !== I.a$.FP_SUB_PAUSED
                ? (0, r.jsx)(g.r, {
                      appliedGuildBoosts: M,
                      premiumSubscription: t,
                  })
                : (0, r.jsx)(g.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t,
                  }),
            (0, r.jsx)(v.Z, {
                guildBoostSlots: S,
                fractionalPremiumState: j,
            }),
            (0, r.jsx)(y.Z, {
                canAddBoosts: x && U,
                canApplyBoosts: L,
            }),
            (0, r.jsx)(u.Z, {
                className: T.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0,
            }),
            (0, r.jsx)(l.Z, { cardClassName: T.boosterRecognitionCard }),
            (0, r.jsx)(c.Z, { className: T.faq }),
        ],
    });
}
