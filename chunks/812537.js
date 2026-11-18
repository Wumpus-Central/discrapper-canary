i.d(t, { A: () => W });
var s = i(477900),
    n = i(582128),
    a = i(503698),
    l = i.n(a),
    r = i(646514),
    c = i(820081),
    o = i(140735),
    d = i(401432),
    u = i(834730),
    m = i(534514),
    x = i(403581),
    g = i(366010),
    p = i(736653),
    h = i(793574),
    f = i(688810),
    N = i(448645),
    A = i(580630),
    j = i(423814),
    b = i(77528),
    E = i(511484),
    T = i(795269);
i(321073);
var C = i(325499),
    I = i(914313),
    R = i(773669),
    v = i(975571),
    _ = i(398523),
    y = i(881373),
    P = i(682901),
    S = i(652215),
    D = i(221596),
    M = i(691450),
    O = i(792996),
    k = i(842671),
    U = i(831768),
    L = i(55647),
    G = i(202600);
function w(e) {
    let { includes: t } = e;
    return t
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(c.CheckmarkSmallBoldIcon, {
                      size: "sm",
                      color: r.A.colors.TEXT_STRONG,
                      "aria-hidden": !0,
                  }),
                  (0, s.jsx)(o.A, { children: O.intl.string(O.t["tq+6t/"]) }),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(d.XSmallBoldIcon, { size: "xs", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, s.jsx)(o.A, { children: O.intl.string(O.t.l4qZrp) }),
              ],
          });
}
function B(e) {
    let { label: t, tier0ColumnData: i, tier2ColumnData: n } = e;
    return (0, s.jsxs)("tr", {
        className: l()(L.nM, L.WQ),
        children: [
            (0, s.jsx)("th", {
                scope: "row",
                className: L.nx,
                children: (0, s.jsx)(u.E, { variant: "body-md/medium", children: t }),
            }),
            (0, s.jsx)("td", {
                className: L.Hn,
                children:
                    null != i.text
                        ? (0, s.jsx)(u.E, { variant: "body-md/medium", children: i.text })
                        : (0, s.jsx)(w, { includes: !!i.includes }),
            }),
            (0, s.jsx)("td", {
                className: L.Hn,
                children:
                    null != n.text
                        ? (0, s.jsx)(u.E, { variant: "body-md/medium", children: n.text })
                        : (0, s.jsx)(w, { includes: !!n.includes }),
            }),
        ],
    });
}
function H(e) {
    let { title: t, subtitle: i, rows: n } = e;
    return (0, s.jsxs)("tbody", {
        children: [
            (0, s.jsx)("tr", {
                className: l()(L.nM, L.Gf),
                children: (0, s.jsxs)("td", {
                    className: L.nx,
                    colSpan: 3,
                    children: [
                        (0, s.jsx)(m.D, { variant: "heading-lg/semibold", children: t }),
                        null != i && (0, s.jsx)(u.E, { variant: "body-xs/medium", children: i }),
                    ],
                }),
            }),
            n.map((e) => (0, s.jsx)(B, { ...e }, e.id)),
        ],
    });
}
function F(e) {
    let { premiumType: t, priceString: i } = e,
        n = t === P.PremiumTypes.TIER_0 ? O.intl.string(O.t.tUbSDK) : O.intl.string(O.t.Ipxkog);
    return (0, s.jsxs)("div", {
        className: L.nn,
        children: [
            (0, s.jsxs)("div", {
                className: L.KS,
                children: [
                    (0, s.jsx)(x.NitroWheelIcon, { size: "refresh_sm", colorClass: L.oG }),
                    (0, s.jsx)(m.D, { variant: "heading-xs/semibold", children: n }),
                ],
            }),
            (0, s.jsx)(m.D, { variant: "heading-xs/semibold", children: i }),
        ],
    });
}
function V(e) {
    let {
            tier0Price: t,
            tier2Price: i,
            shouldUseDiscountPrice: n,
            tier2DiscountedPriceString: a,
            showMonthlyInterval: l,
        } = e,
        r = n ? a : (0, A.$g)(i.amount, i.currency);
    function c(e) {
        return l ? `${e}/${(0, N.FJ)(P.WT.MONTH)}` : e;
    }
    return (0, s.jsx)("thead", {
        children: (0, s.jsxs)("tr", {
            className: L.U1,
            children: [
                (0, s.jsx)("th", {
                    scope: "col",
                    className: L.Cr,
                    children: (0, s.jsx)(m.D, { variant: "heading-xl/semibold", children: O.intl.string(O.t.ED4UVD) }),
                }),
                (0, s.jsx)("th", {
                    scope: "col",
                    className: L.Hn,
                    children: (0, s.jsx)(F, {
                        premiumType: P.PremiumTypes.TIER_0,
                        priceString: c((0, A.$g)(t.amount, t.currency)),
                    }),
                }),
                (0, s.jsx)("th", {
                    scope: "col",
                    className: L.Hn,
                    children: (0, s.jsx)(F, { premiumType: P.PremiumTypes.TIER_2, priceString: n ? r : c(r) }),
                }),
            ],
        }),
    });
}
let W = function (e) {
    let t,
        {
            className: i,
            headingOverride: a,
            hidePill: r = !1,
            selectedPlanTier: c = P.PremiumTypes.TIER_2,
            variant: o = "default",
        } = e,
        d = "settings" === o,
        u = (0, p.Ay)(),
        x = d && (0, g.q)(u),
        { analyticsLocations: w } = (0, f.Ay)(h.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        B = (0, b.V)(),
        F = B?.subscriptionTrial?.skuId,
        W = (0, j.O)(),
        z = (0, E.YJ)(W),
        X = null != W && (0, E.U9)(W, P.pe.TIER_2) && z === P.gD.PREMIUM_MONTH_TIER_2,
        Y = (0, E.N1)(z),
        K = null != Y ? `${Y}/${(0, N.FJ)(P.WT.MONTH)}` : "",
        Z = (0, N.JM)(P.gD.PREMIUM_MONTH_TIER_0),
        q = (0, N.JM)(P.gD.PREMIUM_MONTH_TIER_2),
        J = (function () {
            let e = (0, C.b)("premium_marketing_comparison"),
                t = [
                    {
                        id: 10,
                        label: O.intl.string(O.t["svn/YX"]),
                        tier0ColumnData: { includes: !0 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 7,
                        label: O.intl.string(O.t.ID5B6Z),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 13,
                        label: O.intl.string(O.t["PBUrx/"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 22,
                        label: O.intl.string(k.default["86GtGH"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                ],
                i = null,
                s = [],
                { shouldShowBonusOrbsUX: n, multiplier: a } = (0, I.lk)(D.rE.NITRO_HOME_MARKETING),
                { enabled: l } = _.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                { functionalityEnabled: r } = (0, y.YS)({ location: "useGetV2PlanComparisonTableRowsApplicationHome" });
            return (
                e &&
                    ((i = {
                        id: 23,
                        title: O.intl.string(O.t.NG1e6l),
                        subtitle: O.intl.format(U.default.uJcbMv, {
                            termsLink: v.A.getArticleURL(S.MVz.NITRO_2_POINT_0),
                        }),
                        rows: [
                            {
                                id: 24,
                                label: O.intl.string(U.default.OpOEmk),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    }),
                    l &&
                        i.rows.push({
                            id: 25,
                            label: O.intl.string(U.default.Q0A42h),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    r &&
                        i.rows.push({
                            id: 26,
                            label: O.intl.string(M.default["gc2sa/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    n &&
                        s.push({
                            id: 27,
                            label: O.intl.formatToPlainString(O.t.Uhemob, { bonusOrbMultiplier: a }),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        })),
                [
                    ...(null != i ? [i] : []),
                    { id: 17, title: O.intl.string(O.t.Ij3Zmv), rows: t },
                    {
                        id: 18,
                        title: O.intl.string(O.t.Wme3nX),
                        rows: [
                            {
                                id: 0,
                                label: O.intl.string(O.t.LrUABv),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 1,
                                label: O.intl.string(O.t.DmfiwT),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 2,
                                label: O.intl.string(O.t.Uukj4o),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 12,
                                label: O.intl.string(O.t.NIKDqG),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 9,
                                label: O.intl.string(O.t["5OAKhw"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    },
                    {
                        id: 19,
                        title: O.intl.string(O.t["6b3ydG"]),
                        rows: [
                            {
                                id: 4,
                                label: O.intl.string(O.t["ufhQC+"]),
                                tier0ColumnData: { text: (0, N.EJ)(P.PremiumTypes.TIER_0) },
                                tier2ColumnData: { text: (0, N.EJ)(P.PremiumTypes.TIER_2) },
                            },
                            {
                                id: 11,
                                label: O.intl.string(O.t.qQxxVc),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 3,
                                label: O.intl.string(O.t["9kRJS8"]),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 21,
                                label: O.intl.string(O.t["5BJqNF"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 5,
                                label: O.intl.string(O.t.VwxlMw),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 6,
                                label: O.intl.formatToPlainString(O.t.nyhDpw, {
                                    numBoosts: 2,
                                    percentageOff: (0, A.l9)(R.default.locale, 0.3),
                                }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 16,
                                label: O.intl.string(O.t["93xPy3"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 8,
                                label: O.intl.string(O.t.IzrZHz),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 20,
                                label: O.intl.string(O.t.Rj1Qys),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            ...s,
                            {
                                id: 15,
                                label: O.intl.formatToPlainString(O.t["8crdzJ"], { maxChars: 4e3 }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 14,
                                label: O.intl.string(O.t["il8+nC"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    },
                ]
            );
        })();
    if (r) t = null;
    else {
        let e = null != B ? O.intl.string(O.t.IBYG5U) : O.intl.string(O.t.TR2B4T);
        t = (0, s.jsx)(T.R, { disableGradient: x, className: l()(L.Io, { [L.SP]: !x, [L.u8]: x }), text: e });
    }
    let Q = F === P.pe.TIER_0 || c === P.PremiumTypes.TIER_0;
    return (0, s.jsx)(f.f5, {
        value: w,
        children: (0, s.jsxs)("div", {
            className: l()(L.zr, i, { [L.W0]: d }),
            children: [
                (0, s.jsx)(m.D, {
                    className: L.Qw,
                    variant: d ? "heading-lg/semibold" : "nitro-md",
                    color: "text-strong",
                    children: a ?? O.intl.string(O.t.DbPgAd),
                }),
                (0, s.jsxs)("div", {
                    className: L.wY,
                    children: [
                        (0, s.jsxs)("div", {
                            className: l()(L.fO, { [L.Vd]: Q, [L.hA]: !Q }),
                            children: [
                                !Q && t,
                                (0, s.jsx)("div", { className: L.xQ }),
                                (0, s.jsx)("div", {
                                    className: L.wN,
                                    children: x
                                        ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("div", { className: L._5 }),
                                                  (0, s.jsx)("div", { className: L.Db }),
                                              ],
                                          })
                                        : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)("img", { src: G, alt: "", className: L.kQ }),
                                                  (0, s.jsx)("img", {
                                                      src: "/assets/6162a665edda48d4.svg",
                                                      alt: "",
                                                      className: L.kQ,
                                                  }),
                                              ],
                                          }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("table", {
                            className: L.tp,
                            children: [
                                (0, s.jsx)(V, {
                                    tier0Price: Z,
                                    tier2Price: q,
                                    shouldUseDiscountPrice: X,
                                    tier2DiscountedPriceString: K,
                                    showMonthlyInterval: d,
                                }),
                                J.map((e) => (0, n.createElement)(H, { ...e, key: e.id })),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
