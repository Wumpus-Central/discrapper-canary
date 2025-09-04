n.d(t, {
    Q1: () => f,
    TO: () => u,
    lB: () => c,
});
var r = n(442837),
    i = n(594174),
    a = n(74538),
    o = n(47280),
    s = n(553094),
    l = n(474936);
let c = "https://support.discord.com/hc/articles/34679678303255";
var u = (function (e) {
    return (
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.COHORT_1 = 1)] = "COHORT_1"),
        (e[(e.COHORT_2 = 2)] = "COHORT_2"),
        (e[(e.COHORT_3 = 3)] = "COHORT_3"),
        e
    );
})({});
function d(e) {
    return null == e
        ? 0
        : a.ZP.isPremiumExactly(e, l.p9.TIER_2)
          ? 1
          : a.ZP.isPremiumExactly(e, l.p9.TIER_1)
            ? 2
            : 3 * !!a.ZP.isPremiumExactly(e, l.p9.TIER_0);
}
function f() {
    let e = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        t = (0, s.o)({ location: "useSeptember2025MarketingMomentEligibility" }),
        n = (0, o.ZP)({ location: "useSeptember2025MarketingMomentEligibility" }),
        a = !0,
        l = !1;
    return {
        isEligible: t && n && a && !l,
        cohort: d(e),
    };
}
