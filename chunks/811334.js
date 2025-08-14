n.d(t, {
    B1: () => m,
    P7: () => y,
    UN: () => E,
    Z9: () => h,
    aO: () => p,
    az: () => b,
    i$: () => g,
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(911969),
    c = n(937615),
    u = n(388032),
    d = n(704442);
let f = i.createContext({ isPremiumRebrand: !1 }),
    _ = () => i.useContext(f).isPremiumRebrand;
function p(e) {
    let { children: t, className: n, isPremiumRebrand: i = !1 } = e;
    return (0, r.jsx)(f.Provider, {
        value: { isPremiumRebrand: i },
        children: (0, r.jsx)("div", {
            className: a()(d.table, { [d.premiumRebrand]: i }, n),
            children: t,
        }),
    });
}
function h(e) {
    let { children: t } = e;
    return _()
        ? (0, r.jsx)(s.X6q, {
              variant: "heading-md/semibold",
              color: "text-primary",
              className: a()(d.header, d.premiumRebrand),
              children: t,
          })
        : (0, r.jsx)("div", {
              className: d.header,
              children: t,
          });
}
function m(e) {
    let { label: t, value: n, className: i } = e;
    return _()
        ? (0, r.jsxs)("div", {
              className: a()(d.row, i),
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      children: t,
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: d.flex,
                      children: n,
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: a()(d.row, i),
              children: [
                  (0, r.jsx)("div", {
                      className: d.rowLabel,
                      children: t,
                  }),
                  (0, r.jsx)("div", {
                      className: d.rowAmount,
                      children: n,
                  }),
              ],
          });
}
function g(e) {
    let {
            label: t,
            value: n,
            discounts: i,
            originalAmount: o,
            interval: a,
            currency: f,
            className: _,
            intervalCount: p,
            inTrialPeriod: h,
        } = e,
        g = (e) => (null != i ? i.find((t) => t.type === e) : null),
        E = g(l.eW.SUBSCRIPTION_PLAN),
        b = g(l.eW.ENTITLEMENT),
        y = null != E ? Math.floor((E.amount / o) * 100) : null,
        O = (0, c.T4)(o, f);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m, {
                label: t,
                value: (0, r.jsxs)(r.Fragment, {
                    children: [
                        h ? u.intl.formatToPlainString(u.t.hXcaLS, { price: (0, c.T4)(0, f) }) : n,
                        null != y
                            ? (0, r.jsxs)("div", {
                                  className: d.rowPercentDiscount,
                                  children: ["-", y, "%"],
                              })
                            : null,
                    ],
                }),
                className: _,
            }),
            h &&
                (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    className: d.trialEndPrice,
                    children: u.intl.format(u.t.v9QeOD, { price: O }),
                }),
            null != y
                ? (0, r.jsxs)("div", {
                      className: d.rowDiscountOriginalPrice,
                      children: ["(", null != a && null != p ? (0, c.og)(O, a, p) : O, ")"],
                  })
                : null,
            null != b
                ? (0, r.jsx)("div", {
                      className: d.entitlementDiscountRow,
                      children: u.intl.string(u.t.A7Hpfn),
                  })
                : null,
        ],
    });
}
function E(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1 } = e;
    return (0, r.jsx)("div", {
        className: a()(d.divider, {
            [d.dividerExtended]: t,
            [d.negativeMarginTop]: n,
            [d.negativeMarginBottom]: i,
        }),
    });
}
function b(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)("div", {
        className: a()(d.totalRow, i),
        children: [
            (0, r.jsx)("div", {
                className: d.totalLabel,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: d.totalAmount,
                children: n,
            }),
        ],
    });
}
function y(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(d.finePrint, n),
        children: t,
    });
}
