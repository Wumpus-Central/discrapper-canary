n.d(t, { Z: () => Z });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(100527),
    f = n(906732),
    p = n(15640),
    _ = n(78839),
    m = n(74538),
    h = n(622909),
    g = n(639119),
    E = n(230916),
    b = n(694338),
    y = n(474936),
    O = n(388032),
    v = n(893296),
    S = n(102655),
    I = n(768236),
    T = n(314907),
    A = n(826701);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = () =>
        (0, r.jsx)("div", {
            className: v.comparisonTablePill,
            children: (0, r.jsx)(c.Heading, {
                className: v.mostPopularText,
                variant: "text-xs/bold",
                children: O.intl.string(O.t.TR2B4T),
            }),
        }),
    w = () =>
        (0, r.jsx)("div", {
            className: v.comparisonTablePill,
            children: (0, r.jsx)(c.Heading, {
                className: v.mostPopularText,
                variant: "heading-deprecated-12/extrabold",
                children: O.intl.string(O.t.IBYG5U),
            }),
        }),
    x = (e) => {
        let { text: t, badge: n, variant: i } = e;
        return (0, r.jsxs)(c.Text, {
            color: "none",
            variant: null != i ? i : "text-md/medium",
            className: v.rowLabelText,
            children: [
                t,
                null != n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [" ", n],
                    }),
            ],
        });
    },
    L = (e) => {
        let { isIncluded: t, isTier0: n } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.dz2, {
                          size: "md",
                          color: "currentColor",
                          className: n ? v.basicCheckMark : v.premiumCheckMark,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(c.nn4, { children: O.intl.string(O.t["tq+6t/"]) }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.Dio, {
                          size: "md",
                          color: "currentColor",
                          className: v.closeIcon,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(c.nn4, { children: O.intl.string(O.t.l4qZrp) }),
                  ],
              });
    },
    j = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: i, withBottomMargin: a } = e;
        return (0, r.jsxs)("tr", {
            className: o()(v.row, v.rowBottomBorder, { [v.bottomMargin]: a }),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: v.labelCell,
                    children: (0, r.jsx)(x, { text: t }),
                }),
                (0, r.jsx)("td", {
                    className: v.cell,
                    children:
                        null != n.text
                            ? (0, r.jsx)(x, { text: n.text })
                            : (0, r.jsx)(L, {
                                  isIncluded: !!n.includes,
                                  isTier0: !0,
                              }),
                }),
                (0, r.jsx)("td", {
                    className: v.cell,
                    children:
                        null != i.text ? (0, r.jsx)(x, { text: i.text }) : (0, r.jsx)(L, { isIncluded: !!i.includes }),
                }),
            ],
        });
    },
    M = (e) => {
        let { title: t, rows: n } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("tr", {
                    className: v.row,
                    children: [
                        (0, r.jsx)("th", {
                            scope: "row",
                            className: v.labelCell,
                            children: (0, r.jsx)(x, {
                                text: t,
                                variant: "text-lg/bold",
                            }),
                        }),
                        (0, r.jsx)("td", {}),
                        (0, r.jsx)("td", {}),
                    ],
                }),
                n.map((e, t) => (0, r.jsx)(j, R(N({}, e), { withBottomMargin: t === n.length - 1 }), e.id)),
            ],
        });
    },
    k = (e) => {
        let t,
            { premiumType: n } = e,
            i = (0, u.ZP)();
        t = n === y.PremiumTypes.TIER_0 ? ((0, l.wj)(i) ? S : I) : (0, l.wj)(i) ? T : A;
        let a = (0, m.Px)(n);
        return (0, r.jsx)("img", {
            src: t,
            className: v.logo,
            alt: a,
        });
    },
    U = () =>
        (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: o()(v.headerRow, v.topBorderRadius),
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: v.headerLabelCell,
                        children: (0, r.jsx)(c.Heading, {
                            className: v.__invalid_textColor,
                            variant: "heading-xl/semibold",
                            children: O.intl.string(O.t.XXENra),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: v.headerCell,
                        children: (0, r.jsx)(k, { premiumType: y.PremiumTypes.TIER_0 }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: o()(v.headerCell, v.topBorderRadius),
                        children: (0, r.jsx)(k, { premiumType: y.PremiumTypes.TIER_2 }),
                    }),
                ],
            }),
        }),
    G = (e) => {
        let {
            tier0MonthlyPrice: t,
            tier2MonthlyPrice: n,
            shouldUseDiscountPrice: i,
            tier2DiscountedPriceString: a,
        } = e;
        return (0, r.jsxs)("tr", {
            className: o()(v.row, v.rowBottomBorder, v.bottomMargin),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: v.labelCell,
                    children: (0, r.jsx)(x, {
                        text: O.intl.string(O.t["09yRK3"]),
                        variant: "text-lg/bold",
                    }),
                }),
                (0, r.jsx)("td", {
                    className: v.cell,
                    children: (0, r.jsx)(x, { text: m.ZP.formatPriceString(t, y.rV.MONTH) }),
                }),
                (0, r.jsx)("td", {
                    className: v.cell,
                    children: (0, r.jsx)(x, { text: i ? a : m.ZP.formatPriceString(n, y.rV.MONTH) }),
                }),
            ],
        });
    },
    Z = (e) => {
        var t;
        let n,
            {
                className: a,
                hidePill: l = !1,
                selectedPlanColumnClassName: c,
                selectedPlanTier: u = y.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: O } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, s.e7)([_.Z], () => _.Z.hasFetchedSubscriptions()),
            I = (0, p.V)(y.nS),
            T = (0, g.N)(),
            A = null == T || null == (t = T.subscription_trial) ? void 0 : t.sku_id,
            C = (0, h.N)(),
            P = null != C && (0, E.Wp)(C, y.Si.TIER_2),
            x = (0, E.Aq)(y.Xh.PREMIUM_MONTH_TIER_2),
            L = "".concat(x, "/").concat((0, m.eP)(y.rV.MONTH)),
            j = (0, m.CY)(y.Xh.PREMIUM_MONTH_TIER_0),
            k = (0, m.CY)(y.Xh.PREMIUM_MONTH_TIER_2),
            Z = (0, b.e)();
        if (!S || !I) return null;
        n = l ? null : null != T ? (0, r.jsx)(w, {}) : (0, r.jsx)(D, {});
        let B = A === y.Si.TIER_0 || u === y.PremiumTypes.TIER_0;
        return (0, r.jsx)(f.Gt, {
            value: O,
            children: (0, r.jsx)("div", {
                className: o()(v.root, a),
                "data-testid": "application-home-marketing-page-comparison-table",
                children: (0, r.jsxs)("div", {
                    className: v.tableWrapper,
                    children: [
                        (0, r.jsxs)("div", {
                            className: o()(c, {
                                [v.tier0ColumnPosition]: B,
                                [v.tier2ColumnPosition]: !B,
                            }),
                            children: [
                                !B && n,
                                (0, r.jsx)("div", {
                                    className: o()({
                                        [v.tier0ColumnOuter]: B,
                                        [v.tier2ColumnOuter]: !B,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("table", {
                            className: v.table,
                            children: [
                                (0, r.jsx)(U, {}),
                                (0, r.jsxs)("tbody", {
                                    children: [
                                        (0, r.jsx)(G, {
                                            tier0MonthlyPrice: j,
                                            tier2MonthlyPrice: k,
                                            shouldUseDiscountPrice: P,
                                            tier2DiscountedPriceString: L,
                                        }),
                                        Z.map((e) => (0, i.createElement)(M, R(N({}, e), { key: e.id }))),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    };
