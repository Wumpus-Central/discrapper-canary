n.d(t, { Z: () => S });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(975298),
    l = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(899667),
    m = n(165630),
    p = n(771845),
    g = n(594174),
    h = n(314884),
    f = n(74538),
    b = n(296533),
    x = n(901750),
    _ = n(112863),
    j = n(701157),
    E = n(912152),
    C = n(615603),
    O = n(474936),
    v = n(37558);
function S(e) {
    let { premiumSubscription: t } = e,
        n = (0, s.e7)([h.Z], () => h.Z.boostSlots),
        S = r.useMemo(() => Object.values(n), [n]),
        T = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        I = f.ZP.isPremium(T, O.p9.TIER_2),
        N = (0, s.e7)([m.Z], () => m.Z.affinities),
        y = (0, s.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()),
        A = N.length > 0 || y.length > 0,
        P = S.length > 0,
        R = r.useMemo(() => S.filter((e) => null != e.premiumGuildSubscription), [S]),
        D = R.length > 0,
        Z = S.length > R.length,
        w = (0, s.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: k } = (0, a.Z)({ forceFetch: !0 }),
        L = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && k === O.a$.NONE,
        M = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && k === O.a$.NONE,
        B = I && k === O.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.oQ, { className: v.blockedPaymentsWarning }),
            (0, i.jsx)(x.Z, {
                hasGuildBoostSlots: P,
                hasAppliedGuildBoosts: D,
                hasBoostPerk: B,
                canAddBoosts: M,
            }),
            k === O.a$.NONE &&
                (0, i.jsx)(E.Z, {
                    hasAppliedGuildBoosts: D,
                    hasBoostPerk: B,
                    hasGuildAffinitiesOrInGuild: A,
                    subscriptionIsPausedOrPausePending: L,
                }),
            !A && (0, i.jsx)(_.Z, {}),
            (null == t ? void 0 : t.isPaused) && k !== O.a$.FP_SUB_PAUSED
                ? (0, i.jsx)(b.r, {
                      appliedGuildBoosts: w,
                      premiumSubscription: t,
                  })
                : (0, i.jsx)(b.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t,
                  }),
            (0, i.jsx)(C.Z, {
                guildBoostSlots: S,
                fractionalPremiumState: k,
            }),
            (0, i.jsx)(j.Z, {
                canAddBoosts: D && M,
                canApplyBoosts: Z,
            }),
            (0, i.jsx)(d.Z, {
                className: v.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0,
            }),
            (0, i.jsx)(o.Z, { cardClassName: v.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: v.faq }),
        ],
    });
}
