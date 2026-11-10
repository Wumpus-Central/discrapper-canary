s.d(t, { A: () => z });
var i = s(477900),
    n = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(646514),
    c = s(820081),
    o = s(140735),
    d = s(401432),
    u = s(834730),
    m = s(534514),
    x = s(403581),
    g = s(366010),
    p = s(736653),
    h = s(793574),
    f = s(688810),
    N = s(448645),
    A = s(580630),
    b = s(423814),
    j = s(77528),
    E = s(511484),
    T = s(795269);
s(321073);
var C = s(325499),
    I = s(914313),
    R = s(773669),
    v = s(975571),
    _ = s(398523),
    y = s(881373),
    P = s(682901),
    S = s(652215),
    D = s(221596),
    M = s(691450),
    O = s(17268),
    k = s(792996),
    L = s(842671),
    U = s(831768),
    G = s(55647),
    w = s(202600);
function B(e) {
    let { includes: t } = e;
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.CheckmarkSmallBoldIcon, {
                      size: "sm",
                      color: r.A.colors.TEXT_STRONG,
                      "aria-hidden": !0,
                  }),
                  (0, i.jsx)(o.A, { children: k.intl.string(k.t["tq+6t/"]) }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.XSmallBoldIcon, { size: "xs", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, i.jsx)(o.A, { children: k.intl.string(k.t.l4qZrp) }),
              ],
          });
}
function H(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: n } = e;
    return (0, i.jsxs)("tr", {
        className: l()(G.nM, G.WQ),
        children: [
            (0, i.jsx)("th", {
                scope: "row",
                className: G.nx,
                children: (0, i.jsx)(u.E, { variant: "body-md/medium", children: t }),
            }),
            (0, i.jsx)("td", {
                className: G.Hn,
                children:
                    null != s.text
                        ? (0, i.jsx)(u.E, { variant: "body-md/medium", children: s.text })
                        : (0, i.jsx)(B, { includes: !!s.includes }),
            }),
            (0, i.jsx)("td", {
                className: G.Hn,
                children:
                    null != n.text
                        ? (0, i.jsx)(u.E, { variant: "body-md/medium", children: n.text })
                        : (0, i.jsx)(B, { includes: !!n.includes }),
            }),
        ],
    });
}
function F(e) {
    let { title: t, subtitle: s, rows: n } = e;
    return (0, i.jsxs)("tbody", {
        children: [
            (0, i.jsx)("tr", {
                className: l()(G.nM, G.Gf),
                children: (0, i.jsxs)("td", {
                    className: G.nx,
                    colSpan: 3,
                    children: [
                        (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: t }),
                        null != s && (0, i.jsx)(u.E, { variant: "body-xs/medium", children: s }),
                    ],
                }),
            }),
            n.map((e) => (0, i.jsx)(H, { ...e }, e.id)),
        ],
    });
}
function V(e) {
    let { premiumType: t, priceString: s } = e,
        n = t === P.PremiumTypes.TIER_0 ? k.intl.string(k.t.tUbSDK) : k.intl.string(k.t.Ipxkog);
    return (0, i.jsxs)("div", {
        className: G.nn,
        children: [
            (0, i.jsxs)("div", {
                className: G.KS,
                children: [
                    (0, i.jsx)(x.NitroWheelIcon, { colorClass: G.oG }),
                    (0, i.jsx)(m.D, { variant: "heading-xs/semibold", children: n }),
                ],
            }),
            (0, i.jsx)(m.D, { variant: "heading-xs/semibold", children: s }),
        ],
    });
}
function W(e) {
    let {
            tier0Price: t,
            tier2Price: s,
            shouldUseDiscountPrice: n,
            tier2DiscountedPriceString: a,
            showMonthlyInterval: l,
        } = e,
        r = n ? a : (0, A.$g)(s.amount, s.currency);
    function c(e) {
        return l ? `${e}/${(0, N.FJ)(P.WT.MONTH)}` : e;
    }
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: G.U1,
            children: [
                (0, i.jsx)("th", {
                    scope: "col",
                    className: G.Cr,
                    children: (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: k.intl.string(k.t.ED4UVD) }),
                }),
                (0, i.jsx)("th", {
                    scope: "col",
                    className: G.Hn,
                    children: (0, i.jsx)(V, {
                        premiumType: P.PremiumTypes.TIER_0,
                        priceString: c((0, A.$g)(t.amount, t.currency)),
                    }),
                }),
                (0, i.jsx)("th", {
                    scope: "col",
                    className: G.Hn,
                    children: (0, i.jsx)(V, { premiumType: P.PremiumTypes.TIER_2, priceString: n ? r : c(r) }),
                }),
            ],
        }),
    });
}
let z = function (e) {
    let t,
        {
            className: s,
            headingOverride: a,
            hidePill: r = !1,
            selectedPlanTier: c = P.PremiumTypes.TIER_2,
            variant: o = "default",
        } = e,
        d = "settings" === o,
        u = (0, p.Ay)(),
        x = d && (0, g.q)(u),
        { analyticsLocations: B } = (0, f.Ay)(h.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        H = (0, j.V)(),
        V = H?.subscriptionTrial?.skuId,
        z = (0, b.O)(),
        Y = (0, E.YJ)(z),
        X = null != z && (0, E.U9)(z, P.pe.TIER_2) && Y === P.gD.PREMIUM_MONTH_TIER_2,
        K = (0, E.N1)(Y),
        Z = null != K ? `${K}/${(0, N.FJ)(P.WT.MONTH)}` : "",
        q = (0, N.JM)(P.gD.PREMIUM_MONTH_TIER_0),
        J = (0, N.JM)(P.gD.PREMIUM_MONTH_TIER_2),
        Q = (function () {
            let e = (0, C.b)("premium_marketing_comparison"),
                t = [
                    {
                        id: 10,
                        label: k.intl.string(k.t["svn/YX"]),
                        tier0ColumnData: { includes: !0 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 7,
                        label: k.intl.string(k.t.ID5B6Z),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 13,
                        label: k.intl.string(k.t["PBUrx/"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 22,
                        label: k.intl.string(L.default["86GtGH"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                ],
                s = null,
                i = [],
                { shouldShowBonusOrbsUX: n, multiplier: a } = (0, I.lk)(D.rE.NITRO_HOME_MARKETING),
                { enabled: l } = _.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                { functionalityEnabled: r } = (0, y.YS)({ location: "useGetV2PlanComparisonTableRowsApplicationHome" });
            return (
                e &&
                    ((s = {
                        id: 23,
                        title: k.intl.string(k.t.NG1e6l),
                        subtitle: k.intl.format(U.default.uJcbMv, {
                            termsLink: v.A.getArticleURL(S.MVz.NITRO_2_POINT_0),
                        }),
                        rows: [
                            {
                                id: 24,
                                label: k.intl.string(U.default.OpOEmk),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    }),
                    l &&
                        s.rows.push({
                            id: 25,
                            label: k.intl.string(U.default.Q0A42h),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    r &&
                        s.rows.push({
                            id: 26,
                            label: k.intl.string(M.default["gc2sa/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    n &&
                        i.push({
                            id: 27,
                            label: k.intl.formatToPlainString(k.t.Uhemob, { bonusOrbMultiplier: a }),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    i.push({
                        id: 28,
                        label: k.intl.string(O.default["20tmSN"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    })),
                [
                    ...(null != s ? [s] : []),
                    { id: 17, title: k.intl.string(k.t.Ij3Zmv), rows: t },
                    {
                        id: 18,
                        title: k.intl.string(k.t.Wme3nX),
                        rows: [
                            {
                                id: 0,
                                label: k.intl.string(k.t.LrUABv),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 1,
                                label: k.intl.string(k.t.DmfiwT),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 2,
                                label: k.intl.string(k.t.Uukj4o),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 12,
                                label: k.intl.string(k.t.NIKDqG),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 9,
                                label: k.intl.string(k.t["5OAKhw"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    },
                    {
                        id: 19,
                        title: k.intl.string(k.t["6b3ydG"]),
                        rows: [
                            {
                                id: 4,
                                label: k.intl.string(k.t["ufhQC+"]),
                                tier0ColumnData: { text: (0, N.EJ)(P.PremiumTypes.TIER_0) },
                                tier2ColumnData: { text: (0, N.EJ)(P.PremiumTypes.TIER_2) },
                            },
                            {
                                id: 11,
                                label: k.intl.string(k.t.qQxxVc),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 3,
                                label: k.intl.string(k.t["9kRJS8"]),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 21,
                                label: k.intl.string(k.t["5BJqNF"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 5,
                                label: k.intl.string(k.t.VwxlMw),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 6,
                                label: k.intl.formatToPlainString(k.t.nyhDpw, {
                                    numBoosts: 2,
                                    percentageOff: (0, A.l9)(R.default.locale, 0.3),
                                }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 16,
                                label: k.intl.string(k.t["93xPy3"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 8,
                                label: k.intl.string(k.t.IzrZHz),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 20,
                                label: k.intl.string(k.t.Rj1Qys),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            ...i,
                            {
                                id: 15,
                                label: k.intl.formatToPlainString(k.t["8crdzJ"], { maxChars: 4e3 }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 14,
                                label: k.intl.string(k.t["il8+nC"]),
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
        let e = null != H ? k.intl.string(k.t.IBYG5U) : k.intl.string(k.t.TR2B4T);
        t = (0, i.jsx)(T.R, { className: l()(G.Io, { [G.SP]: !x }), text: e });
    }
    let $ = V === P.pe.TIER_0 || c === P.PremiumTypes.TIER_0;
    return (0, i.jsx)(f.f5, {
        value: B,
        children: (0, i.jsxs)("div", {
            className: l()(G.zr, s, { [G.W0]: d }),
            children: [
                (0, i.jsx)(m.D, {
                    className: G.Qw,
                    variant: d ? "heading-lg/semibold" : "nitro-md",
                    color: "text-strong",
                    children: a ?? k.intl.string(k.t.DbPgAd),
                }),
                (0, i.jsxs)("div", {
                    className: G.wY,
                    children: [
                        (0, i.jsxs)("div", {
                            className: l()(G.fO, { [G.Vd]: $, [G.hA]: !$ }),
                            children: [
                                !$ && t,
                                (0, i.jsx)("div", { className: G.xQ }),
                                (0, i.jsxs)("div", {
                                    className: G.wN,
                                    children: [
                                        (0, i.jsx)("img", { src: w, alt: "", className: G.kQ }),
                                        (0, i.jsx)("img", {
                                            src: "/assets/6162a665edda48d4.svg",
                                            alt: "",
                                            className: G.kQ,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("table", {
                            className: G.tp,
                            children: [
                                (0, i.jsx)(W, {
                                    tier0Price: q,
                                    tier2Price: J,
                                    shouldUseDiscountPrice: X,
                                    tier2DiscountedPriceString: Z,
                                    showMonthlyInterval: d,
                                }),
                                Q.map((e) => (0, n.createElement)(F, { ...e, key: e.id })),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
