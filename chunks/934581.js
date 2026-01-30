n.d(t, {
    NQ: () => d,
    uA: () => u,
    vi: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(709917),
    o = n(788868),
    s = n(985018),
    l = n(857365),
    c = n(694414),
    u = (function (e) {
        return (e.TRIAL = "trial"), (e.DEFAULT = "default"), e;
    })({});
let d = (e) => {
    let { fractionalPremiumInfo: t, variant: n = "default", trialPeriod: r, trialEnd: i } = e,
        l = t.fractionalState === o.xc.FP_SUB_PAUSED,
        c = (0, a.A)(t.endsAt, l),
        u = "",
        d = {
            trial: {
                days_and_hours: s.t["8VIDrU"],
                days: s.t["5e2wY0"],
                hours: s.t.sQcCKt,
            },
            default: {
                days_and_hours: s.t["6r9LLp"],
                days: s.t.c2BbVA,
                hours: s.t["8Xm6uL"],
            },
        };
    return (
        "trial" === n && null != r && null != i
            ? c.days > 0 && c.hours > 0
                ? (u = s.intl.format(d.trial.days_and_hours, {
                      days: c.days,
                      hours: c.hours,
                      trialPeriod: r,
                      trialEnd: i,
                  }))
                : c.days > 0
                  ? (u = s.intl.format(d.trial.days, {
                        days: c.days,
                        trialPeriod: r,
                        trialEnd: i,
                    }))
                  : c.hours > 0 &&
                    (u = s.intl.format(d.trial.hours, {
                        days: c.days,
                        hours: c.hours,
                        trialPeriod: r,
                        trialEnd: i,
                    }))
            : c.days > 0 && c.hours > 0
              ? (u = s.intl.format(d.default.days_and_hours, {
                    days: c.days,
                    hours: c.hours,
                }))
              : c.days > 0
                ? (u = s.intl.format(d.default.days, {
                      days: c.days,
                  }))
                : c.hours > 0 &&
                  (u = s.intl.format(d.default.hours, {
                      hours: c.hours,
                  })),
        u
    );
};

function f(e) {
    let {
            fractionalPremiumInfo: t,
            variant: n = "default",
            enablePremiumBrandRefresh: a = !1,
            style: o,
            trialPeriod: s,
            trialEnd: u,
        } = e,
        f = d({
            fractionalPremiumInfo: t,
            variant: n,
            trialPeriod: s,
            trialEnd: u,
        });
    return "trial" === n && null != s && null != u
        ? "" === f
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          className: l.OK,
                          children: f,
                      }),
                      (0, r.jsx)("hr", {
                          className: l.oz,
                      }),
                  ],
              })
        : "" === f
          ? null
          : a
            ? (0, r.jsxs)("div", {
                  className: l.bD,
                  style: o,
                  children: [
                      (0, r.jsx)("img", {
                          src: c,
                          alt: "Nitro Icon",
                          className: l.Zb,
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/medium",
                          children: f,
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: l.s2,
                  style: o,
                  children: [
                      (0, r.jsxs)("div", {
                          className: l.Dl,
                          children: [
                              (0, r.jsx)(i.tvc, {
                                  size: "md",
                                  color: "white",
                                  className: l.T8,
                              }),
                              (0, r.jsx)(i.tvc, {
                                  size: "md",
                                  color: "currentColor",
                                  className: l.XI,
                              }),
                          ],
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children: f,
                      }),
                      (0, r.jsx)("div", {
                          className: l.WW,
                      }),
                  ],
              });
}
