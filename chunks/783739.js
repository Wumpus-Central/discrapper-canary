n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(975298),
    s = n(89057),
    l = n(724884),
    c = n(290799),
    u = n(362948),
    d = n(899667),
    f = n(165630),
    p = n(771845),
    _ = n(594174),
    m = n(314884),
    h = n(74538),
    g = n(296533),
    E = n(901750),
    b = n(112863),
    y = n(701157),
    O = n(912152),
    v = n(615603),
    S = n(474936),
    I = n(718212);
function T(e) {
    let { premiumSubscription: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.boostSlots),
        T = i.useMemo(() => Object.values(n), [n]),
        C = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        A = h.ZP.isPremium(C, S.PremiumTypes.TIER_2),
        N = (0, a.e7)([f.Z], () => f.Z.affinities),
        P = (0, a.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()),
        R = N.length > 0 || P.length > 0,
        w = T.length > 0,
        D = i.useMemo(() => T.filter((e) => null != e.premiumGuildSubscription), [T]),
        x = D.length > 0,
        L = T.length > D.length,
        j = (0, a.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: M } = (0, o.Z)({ forceFetch: !0 }),
        k = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && M === S.a$.NONE,
        U = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && M === S.a$.NONE,
        G = A && M === S.a$.FP_SUB_PAUSED;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.oQ, { className: I.blockedPaymentsWarning }),
            (0, r.jsx)(E.Z, {
                hasGuildBoostSlots: w,
                hasAppliedGuildBoosts: x,
                hasBoostPerk: G,
                canAddBoosts: U,
            }),
            M === S.a$.NONE &&
                (0, r.jsx)(O.Z, {
                    hasAppliedGuildBoosts: x,
                    hasBoostPerk: G,
                    hasGuildAffinitiesOrInGuild: R,
                    subscriptionIsPausedOrPausePending: k,
                }),
            !R && (0, r.jsx)(b.Z, {}),
            (null == t ? void 0 : t.isPaused) && M !== S.a$.FP_SUB_PAUSED
                ? (0, r.jsx)(g.r, {
                      appliedGuildBoosts: j,
                      premiumSubscription: t,
                  })
                : (0, r.jsx)(g.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t,
                  }),
            (0, r.jsx)(v.Z, {
                guildBoostSlots: T,
                fractionalPremiumState: M,
            }),
            (0, r.jsx)(y.Z, {
                canAddBoosts: x && U,
                canApplyBoosts: L,
            }),
            (0, r.jsx)(u.Z, {
                className: I.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0,
            }),
            (0, r.jsx)(l.Z, { cardClassName: I.boosterRecognitionCard }),
            (0, r.jsx)(c.Z, { className: I.faq }),
        ],
    });
}
