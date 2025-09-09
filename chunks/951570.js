n.d(t, {
    G2: () => v,
    Q1: () => b,
    TO: () => g,
    h3: () => y,
    lB: () => h,
    lK: () => O,
});
var r = n(951288),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(594174),
    c = n(74538),
    u = n(47280),
    d = n(553094),
    f = n(474936);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = "https://support.discord.com/hc/articles/34679678303255",
    m = "2025-09-30";
var g = (function (e) {
    return (
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.COHORT_1 = 1)] = "COHORT_1"),
        (e[(e.COHORT_2 = 2)] = "COHORT_2"),
        (e[(e.COHORT_3 = 3)] = "COHORT_3"),
        e
    );
})({});
function E(e) {
    return null == e
        ? 0
        : c.ZP.isPremiumExactly(e, f.p9.TIER_2)
          ? 3
          : c.ZP.isPremiumExactly(e, f.p9.TIER_1) || c.ZP.isPremiumExactly(e, f.p9.TIER_0)
            ? 2
            : 1;
}
function b() {
    let e = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, d.o)({ location: "useSeptember2025MarketingMomentEligibility" }),
        n = (0, u.ZP)({ location: "useSeptember2025MarketingMomentEligibility" }),
        r = !0,
        i = !1;
    return {
        isEligible: t && n && r && !i,
        cohort: E(e),
    };
}
function y() {
    return Math.max(0, Math.ceil(a()(m).endOf("day").diff(a()(), "days", !0)));
}
function O() {
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e("75056").then(n.bind(n, 16919));
        return (t) => (0, r.jsx)(e, p({}, t));
    });
}
function v() {
    return "production" !== window.GLOBAL_ENV.PROJECT_ENV || 3 >= y();
}
