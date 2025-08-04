n.d(t, { Z: () => B });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(100527),
    m = n(906732),
    p = n(15640),
    g = n(78839),
    h = n(74538),
    f = n(104494),
    b = n(639119),
    x = n(230916),
    _ = n(694338),
    j = n(474936),
    E = n(388032),
    C = n(528880),
    O = n(102655),
    v = n(768236),
    S = n(314907),
    T = n(826701);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = () =>
        (0, i.jsx)('div', {
            className: C.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: C.mostPopularText,
                variant: 'text-xs/bold',
                children: E.intl.string(E.t.TR2B4e)
            })
        }),
    A = () =>
        (0, i.jsx)('div', {
            className: C.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: C.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: E.intl.string(E.t.IBYG5e)
            })
        }),
    P = (e) => {
        let { text: t, badge: n, variant: r } = e;
        return (0, i.jsxs)(c.Text, {
            color: 'none',
            variant: null != r ? r : 'text-md/medium',
            className: C.rowLabelText,
            children: [
                t,
                null != n &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [' ', n]
                    })
            ]
        });
    },
    R = (e) => {
        let { isIncluded: t, isTier0: n } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: n ? C.basicCheckMark : C.premiumCheckMark,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(c.nn4, { children: E.intl.string(E.t['tq+6t7']) })
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: C.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(c.nn4, { children: E.intl.string(E.t.l4qZrq) })
                  ]
              });
    },
    D = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: r, withBottomMargin: s } = e;
        return (0, i.jsxs)('tr', {
            className: a()(C.row, C.rowBottomBorder, { [C.bottomMargin]: s }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: C.labelCell,
                    children: (0, i.jsx)(P, { text: t })
                }),
                (0, i.jsx)('td', {
                    className: C.cell,
                    children:
                        null != n.text
                            ? (0, i.jsx)(P, { text: n.text })
                            : (0, i.jsx)(R, {
                                  isIncluded: !!n.includes,
                                  isTier0: !0
                              })
                }),
                (0, i.jsx)('td', {
                    className: C.cell,
                    children: null != r.text ? (0, i.jsx)(P, { text: r.text }) : (0, i.jsx)(R, { isIncluded: !!r.includes })
                })
            ]
        });
    },
    Z = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('tr', {
                    className: C.row,
                    children: [
                        (0, i.jsx)('th', {
                            scope: 'row',
                            className: C.labelCell,
                            children: (0, i.jsx)(P, {
                                text: t,
                                variant: 'text-lg/bold'
                            })
                        }),
                        (0, i.jsx)('td', {}),
                        (0, i.jsx)('td', {})
                    ]
                }),
                n.map((e, t) => (0, i.jsx)(D, N(I({}, e), { withBottomMargin: t === n.length - 1 }), e.id))
            ]
        });
    },
    w = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, d.ZP)();
        t = n === j.p9.TIER_0 ? ((0, o.wj)(r) ? O : v) : (0, o.wj)(r) ? S : T;
        let s = (0, h.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: C.logo,
            alt: s
        });
    },
    k = () =>
        (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: a()(C.headerRow, C.topBorderRadius),
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: C.headerLabelCell,
                        children: (0, i.jsx)(c.X6q, {
                            className: C.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: E.intl.string(E.t.XXENra)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: C.headerCell,
                        children: (0, i.jsx)(w, { premiumType: j.p9.TIER_0 })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: a()(C.headerCell, C.topBorderRadius),
                        children: (0, i.jsx)(w, { premiumType: j.p9.TIER_2 })
                    })
                ]
            })
        }),
    L = (e) => {
        let { tier0MonthlyPrice: t, tier2MonthlyPrice: n, shouldUseDiscountPrice: r, tier2DiscountedPriceString: s } = e;
        return (0, i.jsxs)('tr', {
            className: a()(C.row, C.rowBottomBorder, C.bottomMargin),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: C.labelCell,
                    children: (0, i.jsx)(P, {
                        text: E.intl.string(E.t['09yRKy']),
                        variant: 'text-lg/bold'
                    })
                }),
                (0, i.jsx)('td', {
                    className: C.cell,
                    children: (0, i.jsx)(P, { text: h.ZP.formatPriceString(t, j.rV.MONTH) })
                }),
                (0, i.jsx)('td', {
                    className: C.cell,
                    children: (0, i.jsx)(P, { text: r ? s : h.ZP.formatPriceString(n, j.rV.MONTH) })
                })
            ]
        });
    },
    B = (e) => {
        var t;
        let n,
            { className: s, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: d = j.p9.TIER_2 } = e,
            { analyticsLocations: E } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            O = (0, l.e7)([g.Z], () => g.Z.hasFetchedSubscriptions()),
            v = (0, p.V)(j.nS),
            S = (0, b.N)(),
            T = null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id,
            P = (0, f.Ng)(),
            R = null != P && (0, f.Wp)(P, j.Si.TIER_2),
            D = (0, x.A)(j.Xh.PREMIUM_MONTH_TIER_2),
            w = ''.concat(D, '/').concat((0, h.eP)(j.rV.MONTH)),
            B = (0, h.CY)(j.Xh.PREMIUM_MONTH_TIER_0),
            M = (0, h.CY)(j.Xh.PREMIUM_MONTH_TIER_2),
            U = (0, _.e)();
        if (!O || !v) return null;
        n = o ? null : null != S ? (0, i.jsx)(A, {}) : (0, i.jsx)(y, {});
        let V = T === j.Si.TIER_0 || d === j.p9.TIER_0;
        return (0, i.jsx)(m.Gt, {
            value: E,
            children: (0, i.jsx)('div', {
                className: a()(C.root, s),
                'data-testid': 'application-home-marketing-page-comparison-table',
                children: (0, i.jsxs)('div', {
                    className: C.tableWrapper,
                    children: [
                        (0, i.jsxs)('div', {
                            className: a()(c, {
                                [C.tier0ColumnPosition]: V,
                                [C.tier2ColumnPosition]: !V
                            }),
                            children: [
                                !V && n,
                                (0, i.jsx)('div', {
                                    className: a()({
                                        [C.tier0ColumnOuter]: V,
                                        [C.tier2ColumnOuter]: !V
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('table', {
                            className: C.table,
                            children: [
                                (0, i.jsx)(k, {}),
                                (0, i.jsxs)('tbody', {
                                    children: [
                                        (0, i.jsx)(L, {
                                            tier0MonthlyPrice: B,
                                            tier2MonthlyPrice: M,
                                            shouldUseDiscountPrice: R,
                                            tier2DiscountedPriceString: w
                                        }),
                                        U.map((e) => (0, r.createElement)(Z, N(I({}, e), { key: e.id })))
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
