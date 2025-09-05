n.d(t, {
    Q1: () => h,
    TO: () => _,
    h3: () => m,
    lB: () => d,
});
var r = n(913527),
    i = n.n(r),
    a = n(442837),
    o = n(594174),
    s = n(74538),
    l = n(47280),
    c = n(553094),
    u = n(474936);
let d = "https://support.discord.com/hc/articles/34679678303255",
    f = "2025-09-30";
var _ = (function (e) {
    return (
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.COHORT_1 = 1)] = "COHORT_1"),
        (e[(e.COHORT_2 = 2)] = "COHORT_2"),
        (e[(e.COHORT_3 = 3)] = "COHORT_3"),
        e
    );
})({});
function p(e) {
    return null == e
        ? 0
        : s.ZP.isPremiumExactly(e, u.p9.TIER_2)
          ? 3
          : s.ZP.isPremiumExactly(e, u.p9.TIER_1) || s.ZP.isPremiumExactly(e, u.p9.TIER_0)
            ? 2
            : 1;
}
function h() {
    let e = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, c.o)({ location: "useSeptember2025MarketingMomentEligibility" }),
        n = (0, l.ZP)({ location: "useSeptember2025MarketingMomentEligibility" }),
        r = !0,
        i = !1;
    return {
        isEligible: t && n && r && !i,
        cohort: p(e),
    };
}
function m() {
    return Math.max(0, Math.ceil(i()(f).endOf("day").diff(i()(), "days", !0)));
}
