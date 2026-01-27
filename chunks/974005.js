n.d(t, {
    A: () => N,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(827734),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(927578),
    _ = n(580630),
    p = n(422936),
    m = n(234419),
    g = n(511484),
    A = n(356309),
    f = n(121304),
    h = n(788868),
    b = n(985018),
    E = n(11297),
    x = n(115292),
    O = n(799919);

function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let I = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.BNr, {
                          size: "sm",
                          color: a.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(o.AC4, {
                          children: b.intl.string(b.t["tq+6t/"]),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.aoi, {
                          size: "xs",
                          color: a.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(o.AC4, {
                          children: b.intl.string(b.t.l4qZrp),
                      }),
                  ],
              });
    },
    T = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: i } = e;
        return (0, r.jsxs)("tr", {
            className: s()(E.nM, E.WQ),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: E.nx,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: t,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: E.Hn,
                    children:
                        null != n.text
                            ? (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  children: n.text,
                              })
                            : (0, r.jsx)(I, {
                                  includes: !!n.includes,
                              }),
                }),
                (0, r.jsx)("td", {
                    className: E.Hn,
                    children:
                        null != i.text
                            ? (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  children: i.text,
                              })
                            : (0, r.jsx)(I, {
                                  includes: !!i.includes,
                              }),
                }),
            ],
        });
    },
    S = (e) => {
        let { title: t, rows: n } = e;
        return (0, r.jsxs)("tbody", {
            children: [
                (0, r.jsx)("tr", {
                    className: s()(E.nM, E.Gf),
                    children: (0, r.jsx)("td", {
                        className: E.nx,
                        colSpan: 3,
                        children: (0, r.jsx)(o.Heading, {
                            variant: "heading-lg/bold",
                            children: t,
                        }),
                    }),
                }),
                n.map((e) => (0, r.jsx)(T, C({}, e), e.id)),
            ],
        });
    },
    j = (e) => {
        let { premiumType: t, priceString: n } = e,
            i = t === h.PremiumTypes.TIER_0 ? b.intl.string(b.t.tUbSDK) : b.intl.string(b.t.Ipxkog);
        return (0, r.jsxs)("div", {
            className: E.nn,
            children: [
                (0, r.jsxs)("div", {
                    className: E.KS,
                    children: [
                        (0, r.jsx)(o.tvc, {
                            colorClass: E.oG,
                        }),
                        (0, r.jsx)(o.Heading, {
                            variant: "heading-sm/semibold",
                            children: i,
                        }),
                    ],
                }),
                (0, r.jsx)(o.Heading, {
                    variant: "heading-sm/semibold",
                    children: n,
                }),
            ],
        });
    },
    v = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: i, tier2DiscountedPriceString: l } = e,
            s = i ? l : (0, _.$g)(n.amount, n.currency);
        return (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: E.U1,
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: E.Cr,
                        children: (0, r.jsx)(o.Heading, {
                            variant: "heading-xl/bold",
                            children: b.intl.string(b.t.ED4UVD),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: E.Hn,
                        children: (0, r.jsx)(j, {
                            premiumType: h.PremiumTypes.TIER_0,
                            priceString: (0, _.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: E.Hn,
                        children: (0, r.jsx)(j, {
                            premiumType: h.PremiumTypes.TIER_2,
                            priceString: s,
                        }),
                    }),
                ],
            }),
        });
    },
    N = (e) => {
        var t;
        let n,
            { className: l, hidePill: a = !1, selectedPlanTier: _ = h.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: I } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            T = (0, m.V)(),
            j = null == T || null == (t = T.subscription_trial) ? void 0 : t.sku_id,
            N = (0, p.O)(),
            y = null != N && (0, g.U9)(N, h.pe.TIER_2),
            P = (0, g.N1)(h.gD.PREMIUM_MONTH_TIER_2),
            R = "".concat(P, "/").concat((0, u.FJ)(h.WT.MONTH)),
            D = (0, u.JM)(h.gD.PREMIUM_MONTH_TIER_0),
            w = (0, u.JM)(h.gD.PREMIUM_MONTH_TIER_2),
            L = (0, f.g)();
        if (a) n = null;
        else {
            let e = null != T ? b.intl.string(b.t.IBYG5U) : b.intl.string(b.t.TR2B4T);
            n = (0, r.jsx)(A.D, {
                className: s()(E.Io, E.SP),
                text: e,
            });
        }
        let M = j === h.pe.TIER_0 || _ === h.PremiumTypes.TIER_0;
        return (0, r.jsx)(d.f5, {
            value: I,
            children: (0, r.jsxs)("div", {
                className: s()(E.zr, l),
                children: [
                    (0, r.jsx)(o.Heading, {
                        className: E.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: b.intl.string(b.t.DbPgAd),
                    }),
                    (0, r.jsxs)("div", {
                        className: E.wY,
                        children: [
                            (0, r.jsxs)("div", {
                                className: s()(E.fO, {
                                    [E.Vd]: M,
                                    [E.hA]: !M,
                                }),
                                children: [
                                    !M && n,
                                    (0, r.jsx)("div", {
                                        className: E.xQ,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: E.wN,
                                        children: [
                                            (0, r.jsx)("img", {
                                                src: O,
                                                alt: "",
                                                className: E.kQ,
                                            }),
                                            (0, r.jsx)("img", {
                                                src: x,
                                                alt: "",
                                                className: E.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("table", {
                                className: E.tp,
                                children: [
                                    (0, r.jsx)(v, {
                                        tier0Price: D,
                                        tier2Price: w,
                                        shouldUseDiscountPrice: y,
                                        tier2DiscountedPriceString: R,
                                    }),
                                    L.map((e) => {
                                        var t, n;
                                        return (0, i.createElement)(
                                            S,
                                            ((t = C({}, e)),
                                            (n = n =
                                                {
                                                    key: e.id,
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          t,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(n, e),
                                                      );
                                                  }),
                                            t),
                                        );
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
