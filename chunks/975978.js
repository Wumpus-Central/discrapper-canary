n.d(t, { Z: () => D });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(74538),
    f = n(937615),
    p = n(622909),
    _ = n(639119),
    m = n(230916),
    h = n(947390),
    g = n(694338),
    E = n(474936),
    b = n(388032),
    y = n(727486),
    O = n(298632),
    v = n(219242);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.kSu, {
                          size: "sm",
                          color: s.Z.colors.HEADER_PRIMARY,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(l.nn4, { children: b.intl.string(b.t["tq+6t/"]) }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.P$X, {
                          size: "xs",
                          color: s.Z.colors.HEADER_PRIMARY,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(l.nn4, { children: b.intl.string(b.t.l4qZrp) }),
                  ],
              });
    },
    N = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: i } = e;
        return (0, r.jsxs)("tr", {
            className: o()(y.row, y.planComparisonItem),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: y.labelCell,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-md/medium",
                        children: t,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: y.cell,
                    children:
                        null != n.text
                            ? (0, r.jsx)(l.Text, {
                                  variant: "text-md/medium",
                                  children: n.text,
                              })
                            : (0, r.jsx)(C, { includes: !!n.includes }),
                }),
                (0, r.jsx)("td", {
                    className: y.cell,
                    children:
                        null != i.text
                            ? (0, r.jsx)(l.Text, {
                                  variant: "text-md/medium",
                                  children: i.text,
                              })
                            : (0, r.jsx)(C, { includes: !!i.includes }),
                }),
            ],
        });
    },
    P = (e) => {
        let { title: t, rows: n } = e;
        return (0, r.jsxs)("tbody", {
            children: [
                (0, r.jsx)("tr", {
                    className: o()(y.row, y.sectionTitle),
                    children: (0, r.jsx)("td", {
                        className: y.labelCell,
                        colSpan: 3,
                        children: (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/bold",
                            children: t,
                        }),
                    }),
                }),
                n.map((e) => (0, r.jsx)(N, I({}, e), e.id)),
            ],
        });
    },
    R = (e) => {
        let { premiumType: t, priceString: n } = e,
            i = t === E.PremiumTypes.TIER_0 ? b.intl.string(b.t.tUbSDK) : b.intl.string(b.t.Ipxkog);
        return (0, r.jsxs)("div", {
            className: y.planTitleWithPrice,
            children: [
                (0, r.jsxs)("div", {
                    className: y.planTitle,
                    children: [
                        (0, r.jsx)(l.SrA, { colorClass: y.nitroWheelIconColor }),
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-sm/semibold",
                            children: i,
                        }),
                    ],
                }),
                (0, r.jsx)(l.Heading, {
                    variant: "heading-sm/semibold",
                    children: n,
                }),
            ],
        });
    },
    w = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: i, tier2DiscountedPriceString: a } = e,
            o = i ? a : (0, f.T4)(n.amount, n.currency);
        return (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: y.headerRow,
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: y.headerLabelCell,
                        children: (0, r.jsx)(l.Heading, {
                            variant: "heading-xl/bold",
                            children: b.intl.string(b.t.ED4UVD),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: y.cell,
                        children: (0, r.jsx)(R, {
                            premiumType: E.PremiumTypes.TIER_0,
                            priceString: (0, f.T4)(t.amount, t.currency),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: y.cell,
                        children: (0, r.jsx)(R, {
                            premiumType: E.PremiumTypes.TIER_2,
                            priceString: o,
                        }),
                    }),
                ],
            }),
        });
    },
    D = (e) => {
        var t;
        let n,
            { className: a, hidePill: s = !1, selectedPlanTier: f = E.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: S } = (0, u.ZP)(c.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            T = (0, _.N)(),
            C = null == T || null == (t = T.subscription_trial) ? void 0 : t.sku_id,
            N = (0, p.N)(),
            R = null != N && (0, m.Wp)(N, E.Si.TIER_2),
            D = (0, m.Aq)(E.Xh.PREMIUM_MONTH_TIER_2),
            x = "".concat(D, "/").concat((0, d.eP)(E.rV.MONTH)),
            L = (0, d.CY)(E.Xh.PREMIUM_MONTH_TIER_0),
            j = (0, d.CY)(E.Xh.PREMIUM_MONTH_TIER_2),
            M = (0, g.e)();
        if (s) n = null;
        else {
            let e = null != T ? b.intl.string(b.t.IBYG5U) : b.intl.string(b.t.TR2B4T);
            n = (0, r.jsx)(h.E, {
                className: o()(y.pill, y.pillGradient),
                text: e,
            });
        }
        let k = C === E.Si.TIER_0 || f === E.PremiumTypes.TIER_0;
        return (0, r.jsx)(u.Gt, {
            value: S,
            children: (0, r.jsxs)("div", {
                className: o()(y.root, a),
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: y.titleText,
                        variant: "display-md",
                        color: "header-primary",
                        children: b.intl.string(b.t.DbPgAd),
                    }),
                    (0, r.jsxs)("div", {
                        className: y.tableWrapper,
                        children: [
                            (0, r.jsxs)("div", {
                                className: o()(y.gradientColumn, {
                                    [y.tier0]: k,
                                    [y.tier2]: !k,
                                }),
                                children: [
                                    !k && n,
                                    (0, r.jsx)("div", { className: y.gradientColumnBorder }),
                                    (0, r.jsxs)("div", {
                                        className: y.gradientBackgroundContainer,
                                        children: [
                                            (0, r.jsx)("img", {
                                                src: v,
                                                alt: "",
                                                className: y.gradientBackgroundPosition,
                                            }),
                                            (0, r.jsx)("img", {
                                                src: O,
                                                alt: "",
                                                className: y.gradientBackgroundPosition,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("table", {
                                className: y.table,
                                children: [
                                    (0, r.jsx)(w, {
                                        tier0Price: L,
                                        tier2Price: j,
                                        shouldUseDiscountPrice: R,
                                        tier2DiscountedPriceString: x,
                                    }),
                                    M.map((e) => (0, i.createElement)(P, A(I({}, e), { key: e.id }))),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
