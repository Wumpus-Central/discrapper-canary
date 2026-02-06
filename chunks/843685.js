n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(582754),
    c = n(397927),
    d = n(736653),
    u = n(793574),
    _ = n(688810),
    m = n(160946),
    A = n(166403),
    g = n(927578),
    h = n(422936),
    x = n(234419),
    p = n(511484),
    E = n(121304),
    C = n(788868),
    T = n(985018),
    S = n(821413),
    I = n(196093),
    f = n(979653),
    N = n(255631),
    b = n(193023);
let j = () =>
        (0, i.jsx)("div", {
            className: S.Zr,
            children: (0, i.jsx)(c.Heading, {
                className: S.uC,
                variant: "text-xs/bold",
                children: T.intl.string(T.t.TR2B4T),
            }),
        }),
    v = () =>
        (0, i.jsx)("div", {
            className: S.Zr,
            children: (0, i.jsx)(c.Heading, {
                className: S.uC,
                variant: "heading-deprecated-12/extrabold",
                children: T.intl.string(T.t.IBYG5U),
            }),
        }),
    O = (e) => {
        let { text: t, badge: n, variant: s } = e;
        return (0, i.jsxs)(c.Text, {
            color: "none",
            variant: s ?? "text-md/medium",
            className: S.wb,
            children: [t, null != n && (0, i.jsxs)(i.Fragment, { children: [" ", n] })],
        });
    },
    R = (e) => {
        let { isIncluded: t, isTier0: n } = e;
        return t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.A9s, {
                          size: "md",
                          color: "currentColor",
                          className: n ? S.M0 : S.PE,
                          "aria-hidden": !0,
                      }),
                      (0, i.jsx)(c.AC4, { children: T.intl.string(T.t["tq+6t/"]) }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.PGe, { size: "md", color: "currentColor", className: S.ut, "aria-hidden": !0 }),
                      (0, i.jsx)(c.AC4, { children: T.intl.string(T.t.l4qZrp) }),
                  ],
              });
    },
    y = (e) => {
        let { label: t, tier0ColumnData: n, tier2ColumnData: s, withBottomMargin: a } = e;
        return (0, i.jsxs)("tr", {
            className: l()(S.nM, S.YI, { [S.ML]: a }),
            children: [
                (0, i.jsx)("th", { scope: "row", className: S.nx, children: (0, i.jsx)(O, { text: t }) }),
                (0, i.jsx)("td", {
                    className: S.Hn,
                    children:
                        null != n.text
                            ? (0, i.jsx)(O, { text: n.text })
                            : (0, i.jsx)(R, { isIncluded: !!n.includes, isTier0: !0 }),
                }),
                (0, i.jsx)("td", {
                    className: S.Hn,
                    children:
                        null != s.text ? (0, i.jsx)(O, { text: s.text }) : (0, i.jsx)(R, { isIncluded: !!s.includes }),
                }),
            ],
        });
    },
    P = (e) => {
        let { title: t, rows: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("tr", {
                    className: S.nM,
                    children: [
                        (0, i.jsx)("th", {
                            scope: "row",
                            className: S.nx,
                            children: (0, i.jsx)(O, { text: t, variant: "text-lg/bold" }),
                        }),
                        (0, i.jsx)("td", {}),
                        (0, i.jsx)("td", {}),
                    ],
                }),
                n.map((e, t) => (0, i.jsx)(y, { ...e, withBottomMargin: t === n.length - 1 }, e.id)),
            ],
        });
    },
    L = (e) => {
        let t,
            { premiumType: n } = e,
            s = (0, d.Ay)();
        t = n === C.PremiumTypes.TIER_0 ? ((0, o.Mw)(s) ? I : f) : (0, o.Mw)(s) ? N : b;
        let a = (0, g.Dd)(n);
        return (0, i.jsx)("img", { src: t, className: S.wm, alt: a });
    },
    D = () =>
        (0, i.jsx)("thead", {
            children: (0, i.jsxs)("tr", {
                className: l()(S.U1, S.Y9),
                children: [
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: S.Cr,
                        children: (0, i.jsx)(c.Heading, {
                            className: S.__invalid_textColor,
                            variant: "heading-xl/semibold",
                            children: T.intl.string(T.t.XXENra),
                        }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: S.e4,
                        children: (0, i.jsx)(L, { premiumType: C.PremiumTypes.TIER_0 }),
                    }),
                    (0, i.jsx)("th", {
                        scope: "col",
                        className: l()(S.e4, S.Y9),
                        children: (0, i.jsx)(L, { premiumType: C.PremiumTypes.TIER_2 }),
                    }),
                ],
            }),
        }),
    M = (e) => {
        let {
            tier0MonthlyPrice: t,
            tier2MonthlyPrice: n,
            shouldUseDiscountPrice: s,
            tier2DiscountedPriceString: a,
        } = e;
        return (0, i.jsxs)("tr", {
            className: l()(S.nM, S.YI, S.ML),
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    className: S.nx,
                    children: (0, i.jsx)(O, { text: T.intl.string(T.t["09yRK3"]), variant: "text-lg/bold" }),
                }),
                (0, i.jsx)("td", {
                    className: S.Hn,
                    children: (0, i.jsx)(O, { text: g.Ay.formatPriceString(t, C.WT.MONTH) }),
                }),
                (0, i.jsx)("td", {
                    className: S.Hn,
                    children: (0, i.jsx)(O, { text: s ? a : g.Ay.formatPriceString(n, C.WT.MONTH) }),
                }),
            ],
        });
    },
    G = (e) => {
        let t,
            {
                className: n,
                hidePill: a = !1,
                selectedPlanColumnClassName: o,
                selectedPlanTier: c = C.PremiumTypes.TIER_2,
            } = e,
            { analyticsLocations: d } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            T = (0, r.bG)([A.A], () => A.A.hasFetchedSubscriptions()),
            I = (0, m.Y)(C.T7),
            f = (0, x.V)(),
            N = f?.subscription_trial?.sku_id,
            b = (0, h.O)(),
            O = null != b && (0, p.U9)(b, C.pe.TIER_2),
            R = (0, p.N1)(C.gD.PREMIUM_MONTH_TIER_2),
            y = `${R}/${(0, g.FJ)(C.WT.MONTH)}`,
            L = (0, g.JM)(C.gD.PREMIUM_MONTH_TIER_0),
            G = (0, g.JM)(C.gD.PREMIUM_MONTH_TIER_2),
            U = (0, E.g)();
        if (!T || !I) return null;
        t = a ? null : null != f ? (0, i.jsx)(v, {}) : (0, i.jsx)(j, {});
        let k = N === C.pe.TIER_0 || c === C.PremiumTypes.TIER_0;
        return (0, i.jsx)(_.f5, {
            value: d,
            children: (0, i.jsx)("div", {
                className: l()(S.zr, n),
                "data-testid": "application-home-marketing-page-comparison-table",
                children: (0, i.jsxs)("div", {
                    className: S.wY,
                    children: [
                        (0, i.jsxs)("div", {
                            className: l()(o, { [S.sO]: k, [S.Yr]: !k }),
                            children: [!k && t, (0, i.jsx)("div", { className: l()({ [S.A9]: k, [S.ce]: !k }) })],
                        }),
                        (0, i.jsxs)("table", {
                            className: S.tp,
                            children: [
                                (0, i.jsx)(D, {}),
                                (0, i.jsxs)("tbody", {
                                    children: [
                                        (0, i.jsx)(M, {
                                            tier0MonthlyPrice: L,
                                            tier2MonthlyPrice: G,
                                            shouldUseDiscountPrice: O,
                                            tier2DiscountedPriceString: y,
                                        }),
                                        U.map((e) => (0, s.createElement)(P, { ...e, key: e.id })),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    };
