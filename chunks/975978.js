n.d(t, { Z: () => A });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(692547),
    o = n(481060),
    c = n(634894),
    d = n(100527),
    u = n(906732),
    m = n(74538),
    p = n(937615),
    g = n(104494),
    h = n(639119),
    f = n(230916),
    b = n(947390),
    x = n(694338),
    _ = n(474936),
    j = n(388032),
    E = n(975926),
    O = n(298632),
    C = n(219242);
function v(e) {
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
let S = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.kSu, {
                          size: 'sm',
                          color: l.Z.colors.HEADER_PRIMARY,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(o.nn4, { children: j.intl.string(j.t['tq+6t7']) })
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.P$X, {
                          size: 'xs',
                          color: l.Z.colors.HEADER_PRIMARY,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(o.nn4, { children: j.intl.string(j.t.l4qZrq) })
                  ]
              });
    },
    T = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: r } = e;
        return (0, i.jsxs)('tr', {
            className: a()(E.row, E.planComparisonItem),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: E.labelCell,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        children: t
                    })
                }),
                (0, i.jsx)('td', {
                    className: E.cell,
                    children:
                        null != n.text
                            ? (0, i.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: n.text
                              })
                            : (0, i.jsx)(S, { includes: !!n.includes })
                }),
                (0, i.jsx)('td', {
                    className: E.cell,
                    children:
                        null != r.text
                            ? (0, i.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: r.text
                              })
                            : (0, i.jsx)(S, { includes: !!r.includes })
                })
            ]
        });
    },
    N = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)('tbody', {
            children: [
                (0, i.jsx)('tr', {
                    className: a()(E.row, E.sectionTitle),
                    children: (0, i.jsx)('td', {
                        className: E.labelCell,
                        colSpan: 3,
                        children: (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            children: t
                        })
                    })
                }),
                n.map((e) => (0, i.jsx)(T, v({}, e), e.id))
            ]
        });
    },
    I = (e) => {
        let { premiumType: t, priceString: n } = e,
            r = t === _.p9.TIER_0 ? j.intl.string(j.t.tUbSDA) : j.intl.string(j.t.Ipxkoq);
        return (0, i.jsxs)('div', {
            className: E.planTitleWithPrice,
            children: [
                (0, i.jsxs)('div', {
                    className: E.planTitle,
                    children: [
                        (0, i.jsx)(o.SrA, {}),
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-sm/semibold',
                            children: r
                        })
                    ]
                }),
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-sm/semibold',
                    children: n
                })
            ]
        });
    },
    y = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: r, tier2DiscountedPriceString: s } = e,
            a = r ? s : (0, p.T4)(n.amount, n.currency);
        return (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: E.headerRow,
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: E.headerLabelCell,
                        children: (0, i.jsx)(o.X6q, {
                            variant: 'heading-xl/bold',
                            children: j.intl.string(j.t.ED4UVF)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: E.cell,
                        children: (0, i.jsx)(I, {
                            premiumType: _.p9.TIER_0,
                            priceString: (0, p.T4)(t.amount, t.currency)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: E.cell,
                        children: (0, i.jsx)(I, {
                            premiumType: _.p9.TIER_2,
                            priceString: a
                        })
                    })
                ]
            })
        });
    },
    A = (e) => {
        var t;
        let n,
            { className: s, hidePill: l = !1, selectedPlanTier: p = _.p9.TIER_2 } = e,
            { analyticsLocations: S } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            T = 'PlanComparisonTable';
        ((0, c.j)({
            location: T + ' auto on',
            autoTrackExposure: !0
        }),
            (0, c.j)({
                location: T + ' auto off',
                autoTrackExposure: !1
            }));
        let I = (0, h.N)(),
            A = null == I || null == (t = I.subscription_trial) ? void 0 : t.sku_id,
            P = (0, g.Ng)(),
            R = null != P && (0, g.Wp)(P, _.Si.TIER_2),
            D = (0, f.A)(_.Xh.PREMIUM_MONTH_TIER_2),
            Z = ''.concat(D, '/').concat((0, m.eP)(_.rV.MONTH)),
            w = (0, m.CY)(_.Xh.PREMIUM_MONTH_TIER_0),
            k = (0, m.CY)(_.Xh.PREMIUM_MONTH_TIER_2),
            L = (0, x.e)();
        if (l) n = null;
        else {
            let e = null != I ? j.intl.string(j.t.IBYG5e) : j.intl.string(j.t.TR2B4e);
            n = (0, i.jsx)(b.E, {
                className: E.pill,
                text: e
            });
        }
        let B = A === _.Si.TIER_0 || p === _.p9.TIER_0;
        return (0, i.jsx)(u.Gt, {
            value: S,
            children: (0, i.jsxs)('div', {
                className: a()(E.root, s),
                children: [
                    (0, i.jsx)(o.X6q, {
                        className: E.titleText,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: j.intl.string(j.t.DbPgAQ)
                    }),
                    (0, i.jsxs)('div', {
                        className: E.tableWrapper,
                        children: [
                            (0, i.jsxs)('div', {
                                className: a()(E.gradientColumn, {
                                    [E.tier0]: B,
                                    [E.tier2]: !B
                                }),
                                children: [
                                    !B && n,
                                    (0, i.jsx)('div', { className: E.gradientColumnBorder }),
                                    (0, i.jsxs)('div', {
                                        className: E.gradientBackgroundContainer,
                                        children: [
                                            (0, i.jsx)('img', {
                                                src: C,
                                                alt: '',
                                                className: E.gradientBackgroundPosition
                                            }),
                                            (0, i.jsx)('img', {
                                                src: O,
                                                alt: '',
                                                className: E.gradientBackgroundPosition
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsxs)('table', {
                                className: E.table,
                                children: [
                                    (0, i.jsx)(y, {
                                        tier0Price: w,
                                        tier2Price: k,
                                        shouldUseDiscountPrice: R,
                                        tier2DiscountedPriceString: Z
                                    }),
                                    L.map((e) => {
                                        var t, n;
                                        return (0, r.createElement)(
                                            N,
                                            ((t = v({}, e)),
                                            (n = n = { key: e.id }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var i = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, i);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (e) {
                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                  }),
                                            t)
                                        );
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
