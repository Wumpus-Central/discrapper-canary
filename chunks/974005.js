n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(827734),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(927578),
    _ = n(580630),
    m = n(422936),
    A = n(234419),
    g = n(511484),
    E = n(356309),
    h = n(121304),
    p = n(788868),
    C = n(985018),
    x = n(11297),
    T = n(115292),
    I = n(799919);
let S = (e) => {
        let { includes: t } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.BNr, { size: "sm", color: l.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, i.jsx)(o.AC4, { children: C.intl.string(C.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(o.aoi, { size: "xs", color: l.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, i.jsx)(o.AC4, { children: C.intl.string(C.t.l4qZrp) }),
                  ],
              });
    },
    f = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: s } = e;
        return (0, i.jsxs)("tr", {
            className: a()(x.nM, x.WQ),
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    className: x.nx,
                    children: (0, i.jsx)(o.Text, { variant: "text-md/medium", children: t }),
                }),
                (0, i.jsx)("td", {
                    className: x.Hn,
                    children:
                        null != n.text
                            ? (0, i.jsx)(o.Text, { variant: "text-md/medium", children: n.text })
                            : (0, i.jsx)(S, { includes: !!n.includes }),
                }),
                (0, i.jsx)("td", {
                    className: x.Hn,
                    children:
                        null != s.text
                            ? (0, i.jsx)(o.Text, { variant: "text-md/medium", children: s.text })
                            : (0, i.jsx)(S, { includes: !!s.includes }),
                }),
            ],
        });
    },
    N = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)("tbody", {
            children: [
                (0, i.jsx)("tr", {
                    className: a()(x.nM, x.Gf),
                    children: (0, i.jsx)("td", {
                        className: x.nx,
                        colSpan: 3,
                        children: (0, i.jsx)(o.Heading, { variant: "heading-lg/bold", children: t }),
                    }),
                }),
                n.map((e) => (0, i.jsx)(f, { ...e }, e.id)),
            ],
        });
    },
    b = (e) => {
        let { premiumType: t, priceString: n } = e,
            s = t === p.PremiumTypes.TIER_0 ? C.intl.string(C.t.tUbSDK) : C.intl.string(C.t.Ipxkog);
        return (0, i.jsxs)("div", {
            className: x.nn,
            children: [
                (0, i.jsxs)("div", {
                    className: x.KS,
                    children: [
                        (0, i.jsx)(o.tvc, { colorClass: x.oG }),
                        (0, i.jsx)(o.Heading, { variant: "heading-sm/semibold", children: s }),
                    ],
                }),
                (0, i.jsx)(o.Heading, { variant: "heading-sm/semibold", children: n }),
            ],
        });
    },
    R = (e) => {
        let { tier0Price: t, tier2Price: n, shouldUseDiscountPrice: s, tier2DiscountedPriceString: r } = e,
            a = s ? r : (0, _.$g)(n.amount, n.currency);
        return (0, i.jsx)("thead", {
            children: (0, i.jsxs)("tr", {
                className: x.U1,
                children: [
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: x.Cr,
                        children: (0, i.jsx)(o.Heading, {
                            variant: "heading-xl/bold",
                            children: C.intl.string(C.t.ED4UVD),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: x.Hn,
                        children: (0, i.jsx)(b, {
                            premiumType: p.PremiumTypes.TIER_0,
                            priceString: (0, _.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: x.Hn,
                        children: (0, i.jsx)(b, { premiumType: p.PremiumTypes.TIER_2, priceString: a }),
                    }),
                ],
            }),
        });
    },
    v = (e) => {
        let t,
            { className: n, hidePill: r = !1, selectedPlanTier: l = p.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: _ } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, A.V)(),
            f = S?.subscription_trial?.sku_id,
            b = (0, m.O)(),
            v = null != b && (0, g.U9)(b, p.pe.TIER_2),
            O = (0, g.N1)(p.gD.PREMIUM_MONTH_TIER_2),
            j = `${O}/${(0, u.FJ)(p.WT.MONTH)}`,
            P = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_0),
            y = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_2),
            L = (0, h.g)();
        if (r) t = null;
        else {
            let e = null != S ? C.intl.string(C.t.IBYG5U) : C.intl.string(C.t.TR2B4T);
            t = (0, i.jsx)(E.D, { className: a()(x.Io, x.SP), text: e });
        }
        let D = f === p.pe.TIER_0 || l === p.PremiumTypes.TIER_0;
        return (0, i.jsx)(d.f5, {
            value: _,
            children: (0, i.jsxs)("div", {
                className: a()(x.zr, n),
                children: [
                    (0, i.jsx)(o.Heading, {
                        className: x.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: C.intl.string(C.t.DbPgAd),
                    }),
                    (0, i.jsxs)("div", {
                        className: x.wY,
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(x.fO, { [x.Vd]: D, [x.hA]: !D }),
                                children: [
                                    !D && t,
                                    (0, i.jsx)("div", { className: x.xQ }),
                                    (0, i.jsxs)("div", {
                                        className: x.wN,
                                        children: [
                                            (0, i.jsx)("img", { src: I, alt: "", className: x.kQ }),
                                            (0, i.jsx)("img", { src: T, alt: "", className: x.kQ }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("table", {
                                className: x.tp,
                                children: [
                                    (0, i.jsx)(R, {
                                        tier0Price: P,
                                        tier2Price: y,
                                        shouldUseDiscountPrice: v,
                                        tier2DiscountedPriceString: j,
                                    }),
                                    L.map((e) => (0, s.createElement)(N, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
