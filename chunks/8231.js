n.d(t, { Z: () => M });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(634894),
    u = n(410030),
    m = n(100527),
    p = n(906732),
    g = n(15640),
    h = n(78839),
    f = n(74538),
    b = n(104494),
    x = n(639119),
    _ = n(230916),
    E = n(694338),
    j = n(474936),
    C = n(388032),
    O = n(528880),
    S = n(102655),
    v = n(768236),
    T = n(314907),
    N = n(826701);
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
function y(e, t) {
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
let A = () =>
        (0, i.jsx)('div', {
            className: O.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: O.mostPopularText,
                variant: 'text-xs/bold',
                children: C.intl.string(C.t.TR2B4e)
            })
        }),
    P = () =>
        (0, i.jsx)('div', {
            className: O.comparisonTablePill,
            children: (0, i.jsx)(c.X6q, {
                className: O.mostPopularText,
                variant: 'heading-deprecated-12/extrabold',
                children: C.intl.string(C.t.IBYG5e)
            })
        }),
    R = (e) => {
        let { text: t, badge: n, variant: r } = e;
        return (0, i.jsxs)(c.Text, {
            color: 'none',
            variant: null != r ? r : 'text-md/medium',
            className: O.rowLabelText,
            children: [
                t,
                null != n &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [' ', n]
                    })
            ]
        });
    },
    D = (e) => {
        let { isIncluded: t, isTier0: n } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: n ? O.basicCheckMark : O.premiumCheckMark,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(c.nn4, { children: C.intl.string(C.t['tq+6t7']) })
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.Dio, {
                          size: 'md',
                          color: 'currentColor',
                          className: O.closeIcon,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(c.nn4, { children: C.intl.string(C.t.l4qZrq) })
                  ]
              });
    },
    Z = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: r, withBottomMargin: s } = e;
        return (0, i.jsxs)('tr', {
            className: l()(O.row, O.rowBottomBorder, { [O.bottomMargin]: s }),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: O.labelCell,
                    children: (0, i.jsx)(R, { text: t })
                }),
                (0, i.jsx)('td', {
                    className: O.cell,
                    children:
                        null != n.text
                            ? (0, i.jsx)(R, { text: n.text })
                            : (0, i.jsx)(D, {
                                  isIncluded: !!n.includes,
                                  isTier0: !0
                              })
                }),
                (0, i.jsx)('td', {
                    className: O.cell,
                    children: null != r.text ? (0, i.jsx)(R, { text: r.text }) : (0, i.jsx)(D, { isIncluded: !!r.includes })
                })
            ]
        });
    },
    w = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('tr', {
                    className: O.row,
                    children: [
                        (0, i.jsx)('th', {
                            scope: 'row',
                            className: O.labelCell,
                            children: (0, i.jsx)(R, {
                                text: t,
                                variant: 'text-lg/bold'
                            })
                        }),
                        (0, i.jsx)('td', {}),
                        (0, i.jsx)('td', {})
                    ]
                }),
                n.map((e, t) => (0, i.jsx)(Z, y(I({}, e), { withBottomMargin: t === n.length - 1 }), e.id))
            ]
        });
    },
    k = (e) => {
        let t,
            { premiumType: n } = e,
            r = (0, u.ZP)();
        t = n === j.p9.TIER_0 ? ((0, o.wj)(r) ? S : v) : (0, o.wj)(r) ? T : N;
        let s = (0, f.Px)(n);
        return (0, i.jsx)('img', {
            src: t,
            className: O.logo,
            alt: s
        });
    },
    L = () =>
        (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: l()(O.headerRow, O.topBorderRadius),
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: O.headerLabelCell,
                        children: (0, i.jsx)(c.X6q, {
                            className: O.__invalid_textColor,
                            variant: 'heading-xl/semibold',
                            children: C.intl.string(C.t.XXENra)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: O.headerCell,
                        children: (0, i.jsx)(k, { premiumType: j.p9.TIER_0 })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: l()(O.headerCell, O.topBorderRadius),
                        children: (0, i.jsx)(k, { premiumType: j.p9.TIER_2 })
                    })
                ]
            })
        }),
    B = (e) => {
        let { tier0MonthlyPrice: t, tier2MonthlyPrice: n, shouldUseDiscountPrice: r, tier2DiscountedPriceString: s } = e;
        return (0, i.jsxs)('tr', {
            className: l()(O.row, O.rowBottomBorder, O.bottomMargin),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: O.labelCell,
                    children: (0, i.jsx)(R, {
                        text: C.intl.string(C.t['09yRKy']),
                        variant: 'text-lg/bold'
                    })
                }),
                (0, i.jsx)('td', {
                    className: O.cell,
                    children: (0, i.jsx)(R, { text: f.ZP.formatPriceString(t, j.rV.MONTH) })
                }),
                (0, i.jsx)('td', {
                    className: O.cell,
                    children: (0, i.jsx)(R, { text: r ? s : f.ZP.formatPriceString(n, j.rV.MONTH) })
                })
            ]
        });
    },
    M = (e) => {
        var t;
        let n,
            { className: s, hidePill: o = !1, selectedPlanColumnClassName: c, selectedPlanTier: u = j.p9.TIER_2 } = e,
            { analyticsLocations: C } = (0, p.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, a.e7)([h.Z], () => h.Z.hasFetchedSubscriptions()),
            v = (0, g.V)(),
            T = 'PlanComparisonTable';
        ((0, d.j)({
            location: T + ' auto on',
            autoTrackExposure: !0
        }),
            (0, d.j)({
                location: T + ' auto off',
                autoTrackExposure: !1
            }));
        let N = (0, x.N)(),
            R = null == N || null == (t = N.subscription_trial) ? void 0 : t.sku_id,
            D = (0, b.Ng)(),
            Z = null != D && (0, b.Wp)(D, j.Si.TIER_2),
            k = (0, _.A)(j.Xh.PREMIUM_MONTH_TIER_2),
            M = ''.concat(k, '/').concat((0, f.eP)(j.rV.MONTH)),
            U = (0, f.CY)(j.Xh.PREMIUM_MONTH_TIER_0),
            V = (0, f.CY)(j.Xh.PREMIUM_MONTH_TIER_2),
            G = (0, E.e)();
        if (!S || !v) return null;
        n = o ? null : null != N ? (0, i.jsx)(P, {}) : (0, i.jsx)(A, {});
        let F = R === j.Si.TIER_0 || u === j.p9.TIER_0;
        return (0, i.jsx)(p.Gt, {
            value: C,
            children: (0, i.jsx)('div', {
                className: l()(O.root, s),
                'data-testid': 'application-home-marketing-page-comparison-table',
                children: (0, i.jsxs)('div', {
                    className: O.tableWrapper,
                    children: [
                        (0, i.jsxs)('div', {
                            className: l()(c, {
                                [O.tier0ColumnPosition]: F,
                                [O.tier2ColumnPosition]: !F
                            }),
                            children: [
                                !F && n,
                                (0, i.jsx)('div', {
                                    className: l()({
                                        [O.tier0ColumnOuter]: F,
                                        [O.tier2ColumnOuter]: !F
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('table', {
                            className: O.table,
                            children: [
                                (0, i.jsx)(L, {}),
                                (0, i.jsxs)('tbody', {
                                    children: [
                                        (0, i.jsx)(B, {
                                            tier0MonthlyPrice: U,
                                            tier2MonthlyPrice: V,
                                            shouldUseDiscountPrice: Z,
                                            tier2DiscountedPriceString: M
                                        }),
                                        G.map((e) => (0, r.createElement)(w, y(I({}, e), { key: e.id })))
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
