"use strict";
n.d(t, { NQ: () => d, uA: () => c, vi: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(709917),
    a = n(788868),
    o = n(985018),
    l = n(637650),
    u = n(694414),
    c = (function (e) {
        return (e.TRIAL = "trial"), (e.DEFAULT = "default"), (e.REVERSE_TRIAL = "reverse_trial"), e;
    })({});
let d = (e) => {
    let { fractionalPremiumInfo: t, variant: n = "default", trialPeriod: r, trialEnd: i } = e,
        l = t.fractionalState === a.xc.FP_SUB_PAUSED,
        u = (0, s.A)(t.endsAt, l),
        c = "";
    if ("reverse_trial" === n) {
        let e = Math.max(1, u.days);
        return o.intl.format(o.t.rzTJXq, { days: e });
    }
    let d = {
        trial: { days_and_hours: o.t["8VIDrU"], days: o.t["5e2wY0"], hours: o.t.sQcCKt },
        default: { days_and_hours: o.t["6r9LLp"], days: o.t.c2BbVA, hours: o.t["8Xm6uL"] },
    };
    return (
        "trial" === n && null != r && null != i
            ? u.days > 0 && u.hours > 0
                ? (c = o.intl.format(d.trial.days_and_hours, {
                      days: u.days,
                      hours: u.hours,
                      trialPeriod: r,
                      trialEnd: i,
                  }))
                : u.days > 0
                  ? (c = o.intl.format(d.trial.days, { days: u.days, trialPeriod: r, trialEnd: i }))
                  : u.hours > 0 && (c = o.intl.format(d.trial.hours, { hours: u.hours, trialPeriod: r, trialEnd: i }))
            : u.days > 0 && u.hours > 0
              ? (c = o.intl.format(d.default.days_and_hours, { days: u.days, hours: u.hours }))
              : u.days > 0
                ? (c = o.intl.format(d.default.days, { days: u.days }))
                : u.hours > 0 && (c = o.intl.format(d.default.hours, { hours: u.hours })),
        c
    );
};
function _(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: s = !1,
            style: a,
            trialPeriod: o,
            trialEnd: c,
        } = e,
        _ = d({ fractionalPremiumInfo: t, variant: n, trialPeriod: o, trialEnd: c });
    return "reverse_trial" === n
        ? "" === _
            ? null
            : (0, r.jsx)("div", { className: l.OK, children: (0, r.jsx)(i.wx6, { type: "info", children: _ }) })
        : "trial" === n && null != o && null != c
          ? "" === _
              ? null
              : (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-sm/normal", className: l.OK, children: _ }),
                        (0, r.jsx)("hr", { className: l.oz }),
                    ],
                })
          : "" === _
            ? null
            : s
              ? (0, r.jsxs)("div", {
                    className: l.bD,
                    style: a,
                    children: [
                        (0, r.jsx)("img", { src: u, alt: "Nitro Icon", className: l.Zb }),
                        (0, r.jsx)(i.Text, { variant: "text-sm/medium", children: _ }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: l.s2,
                    style: a,
                    children: [
                        (0, r.jsxs)("div", {
                            className: l.Dl,
                            children: [
                                (0, r.jsx)(i.tvc, { size: "md", color: "white", className: l.T8 }),
                                (0, r.jsx)(i.tvc, { size: "md", color: "currentColor", className: l.XI }),
                            ],
                        }),
                        (0, r.jsx)(i.Text, { variant: "text-sm/normal", children: _ }),
                        (0, r.jsx)("div", { className: l.WW }),
                    ],
                });
}
