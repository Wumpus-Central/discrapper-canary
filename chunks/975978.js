n.d(t, { Z: () => y });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(692547),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(74538),
    m = n(937615),
    p = n(104494),
    g = n(639119),
    h = n(230916),
    f = n(947390),
    b = n(694338),
    x = n(474936),
    _ = n(388032),
    j = n(975926),
    E = n(298632),
    O = n(219242);
function C(e) {
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
let v = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.kSu, {
                          size: 'sm',
                          color: l.Z.colors.HEADER_PRIMARY,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(o.nn4, { children: _.intl.string(_.t['tq+6t7']) })
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.P$X, {
                          size: 'xs',
                          color: l.Z.colors.HEADER_PRIMARY,
                          'aria-hidden': !0
                      }),
                      (0, i.jsx)(o.nn4, { children: _.intl.string(_.t.l4qZrq) })
                  ]
              });
    },
    S = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: r } = e;
        return (0, i.jsxs)('tr', {
            className: a()(j.row, j.planComparisonItem),
            children: [
                (0, i.jsx)('th', {
                    scope: 'row',
                    className: j.labelCell,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        children: t
                    })
                }),
                (0, i.jsx)('td', {
                    className: j.cell,
                    children:
                        null != n.text
                            ? (0, i.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: n.text
                              })
                            : (0, i.jsx)(v, { includes: !!n.includes })
                }),
                (0, i.jsx)('td', {
                    className: j.cell,
                    children:
                        null != r.text
                            ? (0, i.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: r.text
                              })
                            : (0, i.jsx)(v, { includes: !!r.includes })
                })
            ]
        });
    },
    T = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)('tbody', {
            children: [
                (0, i.jsx)('tr', {
                    className: a()(j.row, j.sectionTitle),
                    children: (0, i.jsx)('td', {
                        className: j.labelCell,
                        colSpan: 3,
                        children: (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            children: t
                        })
                    })
                }),
                n.map((e) => (0, i.jsx)(S, C({}, e), e.id))
            ]
        });
    },
    N = (e) => {
        let { premiumType: t, priceString: n } = e,
            r = t === x.p9.TIER_0 ? _.intl.string(_.t.tUbSDA) : _.intl.string(_.t.Ipxkoq);
        return (0, i.jsxs)('div', {
            className: j.planTitleWithPrice,
            children: [
                (0, i.jsxs)('div', {
                    className: j.planTitle,
                    children: [
                        (0, i.jsx)(o.SrA, { colorClass: j.nitroWheelIconColor }),
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
    I = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: r, tier2DiscountedPriceString: s } = e,
            a = r ? s : (0, m.T4)(n.amount, n.currency);
        return (0, i.jsx)('thead', {
            children: (0, i.jsxs)('tr', {
                className: j.headerRow,
                children: [
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: j.headerLabelCell,
                        children: (0, i.jsx)(o.X6q, {
                            variant: 'heading-xl/bold',
                            children: _.intl.string(_.t.ED4UVF)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: j.cell,
                        children: (0, i.jsx)(N, {
                            premiumType: x.p9.TIER_0,
                            priceString: (0, m.T4)(t.amount, t.currency)
                        })
                    }),
                    (0, i.jsx)('th', {
                        scope: 'col',
                        className: j.cell,
                        children: (0, i.jsx)(N, {
                            premiumType: x.p9.TIER_2,
                            priceString: a
                        })
                    })
                ]
            })
        });
    },
    y = (e) => {
        var t;
        let n,
            { className: s, hidePill: l = !1, selectedPlanTier: m = x.p9.TIER_2 } = e,
            { analyticsLocations: v } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, g.N)(),
            N = null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id,
            y = (0, p.Ng)(),
            A = null != y && (0, p.Wp)(y, x.Si.TIER_2),
            P = (0, h.A)(x.Xh.PREMIUM_MONTH_TIER_2),
            R = ''.concat(P, '/').concat((0, u.eP)(x.rV.MONTH)),
            D = (0, u.CY)(x.Xh.PREMIUM_MONTH_TIER_0),
            Z = (0, u.CY)(x.Xh.PREMIUM_MONTH_TIER_2),
            w = (0, b.e)();
        if (l) n = null;
        else {
            let e = null != S ? _.intl.string(_.t.IBYG5e) : _.intl.string(_.t.TR2B4e);
            n = (0, i.jsx)(f.E, {
                className: j.pill,
                text: e
            });
        }
        let k = N === x.Si.TIER_0 || m === x.p9.TIER_0;
        return (0, i.jsx)(d.Gt, {
            value: v,
            children: (0, i.jsxs)('div', {
                className: a()(j.root, s),
                children: [
                    (0, i.jsx)(o.X6q, {
                        className: j.titleText,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: _.intl.string(_.t.DbPgAQ)
                    }),
                    (0, i.jsxs)('div', {
                        className: j.tableWrapper,
                        children: [
                            (0, i.jsxs)('div', {
                                className: a()(j.gradientColumn, {
                                    [j.tier0]: k,
                                    [j.tier2]: !k
                                }),
                                children: [
                                    !k && n,
                                    (0, i.jsx)('div', { className: j.gradientColumnBorder }),
                                    (0, i.jsxs)('div', {
                                        className: j.gradientBackgroundContainer,
                                        children: [
                                            (0, i.jsx)('img', {
                                                src: O,
                                                alt: '',
                                                className: j.gradientBackgroundPosition
                                            }),
                                            (0, i.jsx)('img', {
                                                src: E,
                                                alt: '',
                                                className: j.gradientBackgroundPosition
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsxs)('table', {
                                className: j.table,
                                children: [
                                    (0, i.jsx)(I, {
                                        tier0Price: D,
                                        tier2Price: Z,
                                        shouldUseDiscountPrice: A,
                                        tier2DiscountedPriceString: R
                                    }),
                                    w.map((e) => {
                                        var t, n;
                                        return (0, r.createElement)(
                                            T,
                                            ((t = C({}, e)),
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
