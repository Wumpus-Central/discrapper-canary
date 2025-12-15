n.d(t, { Z: () => C });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(975298),
    s = n(89057),
    l = n(724884),
    c = n(290799),
    u = n(362948),
    d = n(691807),
    f = n(899667),
    p = n(165630),
    _ = n(771845),
    m = n(594174),
    h = n(314884),
    g = n(74538),
    E = n(296533),
    b = n(901750),
    y = n(112863),
    O = n(701157),
    v = n(912152),
    S = n(615603),
    I = n(474936),
    T = n(718212);
function C(e) {
    let { premiumSubscription: t } = e,
        n = (0, a.e7)([h.Z], () => h.Z.boostSlots),
        C = i.useMemo(() => Object.values(n), [n]),
        A = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        N = g.ZP.isPremium(A, I.PremiumTypes.TIER_2),
        P = (0, a.e7)([p.Z], () => p.Z.affinities),
        R = (0, a.e7)([_.ZP], () => _.ZP.getFlattenedGuildIds()),
        w = P.length > 0 || R.length > 0,
        D = C.length > 0,
        x = i.useMemo(() => C.filter((e) => null != e.premiumGuildSubscription), [C]),
        L = x.length > 0,
        j = C.length > x.length,
        M = (0, a.e7)([f.Z], () => f.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: k } = (0, o.Z)({ forceFetch: !0 }),
        U = null == A ? void 0 : A.isPremiumGroupMember(),
        G = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && k === I.a$.NONE,
        Z = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && k === I.a$.NONE && !U,
        F = N && k === I.a$.FP_SUB_PAUSED,
        B = k === I.a$.NONE && !U;
    return (0, r.jsxs)("div", {
        className: T.guildBoostingSettings,
        children: [
            (0, r.jsx)(s.oQ, { className: T.blockedPaymentsWarning }),
            (0, r.jsx)(b.Z, {
                hasGuildBoostSlots: D,
                hasAppliedGuildBoosts: L,
                hasBoostPerk: F,
                canAddBoosts: Z,
            }),
            B &&
                (0, r.jsx)(v.Z, {
                    hasAppliedGuildBoosts: L,
                    hasBoostPerk: F,
                    hasGuildAffinitiesOrInGuild: w,
                    subscriptionIsPausedOrPausePending: G,
                }),
            U && (0, r.jsx)(d.Z, {}),
            !w && (0, r.jsx)(y.Z, {}),
            (null == t ? void 0 : t.isPaused) && k !== I.a$.FP_SUB_PAUSED
                ? (0, r.jsx)(E.r, {
                      appliedGuildBoosts: M,
                      premiumSubscription: t,
                  })
                : (0, r.jsx)(E.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t,
                  }),
            (0, r.jsx)(S.Z, {
                guildBoostSlots: C,
                fractionalPremiumState: k,
            }),
            (0, r.jsx)(O.Z, {
                canAddBoosts: L && Z,
                canApplyBoosts: j,
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
