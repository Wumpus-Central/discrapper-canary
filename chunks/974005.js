n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    c = n(793574),
    u = n(688810),
    d = n(927578),
    f = n(580630),
    p = n(422936),
    _ = n(234419),
    h = n(511484),
    m = n(356309),
    g = n(121304),
    E = n(788868),
    b = n(985018),
    y = n(11297),
    O = n(115292),
    A = n(799919);

function v(e, t, n) {
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

function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
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

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
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
                      (0, r.jsx)(l.BNr, {
                          size: "sm",
                          color: o.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(l.AC4, {
                          children: b.intl.string(b.t["tq+6t/"]),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.aoi, {
                          size: "xs",
                          color: o.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                      (0, r.jsx)(l.AC4, {
                          children: b.intl.string(b.t.l4qZrp),
                      }),
                  ],
              });
    },
    N = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: i } = e;
        return (0, r.jsxs)("tr", {
            className: s()(y.nM, y.WQ),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: y.nx,
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-md/medium",
                        children: t,
                    }),
                }),
                (0, r.jsx)("td", {
                    className: y.Hn,
                    children:
                        null != n.text
                            ? (0, r.jsx)(l.Text, {
                                  variant: "text-md/medium",
                                  children: n.text,
                              })
                            : (0, r.jsx)(C, {
                                  includes: !!n.includes,
                              }),
                }),
                (0, r.jsx)("td", {
                    className: y.Hn,
                    children:
                        null != i.text
                            ? (0, r.jsx)(l.Text, {
                                  variant: "text-md/medium",
                                  children: i.text,
                              })
                            : (0, r.jsx)(C, {
                                  includes: !!i.includes,
                              }),
                }),
            ],
        });
    },
    R = (e) => {
        let { title: t, rows: n } = e;
        return (0, r.jsxs)("tbody", {
            children: [
                (0, r.jsx)("tr", {
                    className: s()(y.nM, y.Gf),
                    children: (0, r.jsx)("td", {
                        className: y.nx,
                        colSpan: 3,
                        children: (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/bold",
                            children: t,
                        }),
                    }),
                }),
                n.map((e) => (0, r.jsx)(N, S({}, e), e.id)),
            ],
        });
    },
    w = (e) => {
        let { premiumType: t, priceString: n } = e,
            i = t === E.PremiumTypes.TIER_0 ? b.intl.string(b.t.tUbSDK) : b.intl.string(b.t.Ipxkog);
        return (0, r.jsxs)("div", {
            className: y.nn,
            children: [
                (0, r.jsxs)("div", {
                    className: y.KS,
                    children: [
                        (0, r.jsx)(l.tvc, {
                            colorClass: y.oG,
                        }),
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
    P = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: i, tier2DiscountedPriceString: a } = e,
            s = i ? a : (0, f.$g)(n.amount, n.currency);
        return (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: y.U1,
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: y.Cr,
                        children: (0, r.jsx)(l.Heading, {
                            variant: "heading-xl/bold",
                            children: b.intl.string(b.t.ED4UVD),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: y.Hn,
                        children: (0, r.jsx)(w, {
                            premiumType: E.PremiumTypes.TIER_0,
                            priceString: (0, f.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: y.Hn,
                        children: (0, r.jsx)(w, {
                            premiumType: E.PremiumTypes.TIER_2,
                            priceString: s,
                        }),
                    }),
                ],
            }),
        });
    },
    D = (e) => {
        var t;
        let n,
            { className: a, hidePill: o = !1, selectedPlanTier: f = E.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: v } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            I = (0, _.V)(),
            C = null == I || null == (t = I.subscription_trial) ? void 0 : t.sku_id,
            N = (0, p.O)(),
            w = null != N && (0, h.U9)(N, E.pe.TIER_2),
            D = (0, h.N1)(E.gD.PREMIUM_MONTH_TIER_2),
            x = "".concat(D, "/").concat((0, d.FJ)(E.WT.MONTH)),
            L = (0, d.JM)(E.gD.PREMIUM_MONTH_TIER_0),
            j = (0, d.JM)(E.gD.PREMIUM_MONTH_TIER_2),
            M = (0, g.g)();
        if (o) n = null;
        else {
            let e = null != I ? b.intl.string(b.t.IBYG5U) : b.intl.string(b.t.TR2B4T);
            n = (0, r.jsx)(m.D, {
                className: s()(y.Io, y.SP),
                text: e,
            });
        }
        let k = C === E.pe.TIER_0 || f === E.PremiumTypes.TIER_0;
        return (0, r.jsx)(u.f5, {
            value: v,
            children: (0, r.jsxs)("div", {
                className: s()(y.zr, a),
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: y.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: b.intl.string(b.t.DbPgAd),
                    }),
                    (0, r.jsxs)("div", {
                        className: y.wY,
                        children: [
                            (0, r.jsxs)("div", {
                                className: s()(y.fO, {
                                    [y.Vd]: k,
                                    [y.hA]: !k,
                                }),
                                children: [
                                    !k && n,
                                    (0, r.jsx)("div", {
                                        className: y.xQ,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: y.wN,
                                        children: [
                                            (0, r.jsx)("img", {
                                                src: A,
                                                alt: "",
                                                className: y.kQ,
                                            }),
                                            (0, r.jsx)("img", {
                                                src: O,
                                                alt: "",
                                                className: y.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("table", {
                                className: y.tp,
                                children: [
                                    (0, r.jsx)(P, {
                                        tier0Price: L,
                                        tier2Price: j,
                                        shouldUseDiscountPrice: w,
                                        tier2DiscountedPriceString: x,
                                    }),
                                    M.map((e) =>
                                        (0, i.createElement)(
                                            R,
                                            T(S({}, e), {
                                                key: e.id,
                                            }),
                                        ),
                                    ),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
