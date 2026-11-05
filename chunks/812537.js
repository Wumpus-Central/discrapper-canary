i.d(t, { A: () => V });
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
    g = i(793574),
    p = i(688810),
    f = i(722178),
    h = i(580630),
    N = i(423814),
    A = i(77528),
    b = i(511484),
    j = i(795269);
i(321073);
var E = i(325499),
    T = i(914313),
    C = i(773669),
    I = i(975571),
    R = i(398523),
    _ = i(881373),
    v = i(682901),
    y = i(652215),
    P = i(221596),
    S = i(691450),
    D = i(17268),
    M = i(792996),
    O = i(842671),
    L = i(831768),
    U = i(55647),
    k = i(202600);
function G(e) {
    let { includes: t } = e;
    return t
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(c.CheckmarkSmallBoldIcon, {
                      size: "sm",
                      color: r.A.colors.TEXT_STRONG,
                      "aria-hidden": !0,
                  }),
                  (0, s.jsx)(o.A, { children: M.intl.string(M.t["tq+6t/"]) }),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(d.XSmallBoldIcon, { size: "xs", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, s.jsx)(o.A, { children: M.intl.string(M.t.l4qZrp) }),
              ],
          });
}
function w(e) {
    let { label: t, tier0ColumnData: i, tier2ColumnData: n } = e;
    return (0, s.jsxs)("tr", {
        className: l()(U.nM, U.WQ),
        children: [
            (0, s.jsx)("th", {
                scope: "row",
                className: U.nx,
                children: (0, s.jsx)(u.E, { variant: "body-md/medium", children: t }),
            }),
            (0, s.jsx)("td", {
                className: U.Hn,
                children:
                    null != i.text
                        ? (0, s.jsx)(u.E, { variant: "body-md/medium", children: i.text })
                        : (0, s.jsx)(G, { includes: !!i.includes }),
            }),
            (0, s.jsx)("td", {
                className: U.Hn,
                children:
                    null != n.text
                        ? (0, s.jsx)(u.E, { variant: "body-md/medium", children: n.text })
                        : (0, s.jsx)(G, { includes: !!n.includes }),
            }),
        ],
    });
}
function B(e) {
    let { title: t, subtitle: i, rows: n } = e;
    return (0, s.jsxs)("tbody", {
        children: [
            (0, s.jsx)("tr", {
                className: l()(U.nM, U.Gf),
                children: (0, s.jsxs)("td", {
                    className: U.nx,
                    colSpan: 3,
                    children: [
                        (0, s.jsx)(m.D, { variant: "heading-lg/semibold", children: t }),
                        null != i && (0, s.jsx)(u.E, { variant: "body-xs/medium", children: i }),
                    ],
                }),
            }),
            n.map((e) => (0, s.jsx)(w, { ...e }, e.id)),
        ],
    });
}
function H(e) {
    let { premiumType: t, priceString: i } = e,
        n = t === v.PremiumTypes.TIER_0 ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t.Ipxkog);
    return (0, s.jsxs)("div", {
        className: U.nn,
        children: [
            (0, s.jsxs)("div", {
                className: U.KS,
                children: [
                    (0, s.jsx)(x.NitroWheelIcon, { colorClass: U.oG }),
                    (0, s.jsx)(m.D, { variant: "heading-xs/semibold", children: n }),
                ],
            }),
            (0, s.jsx)(m.D, { variant: "heading-xs/semibold", children: i }),
        ],
    });
}
function F(e) {
    let {
            tier0Price: t,
            tier2Price: i,
            shouldUseDiscountPrice: n,
            tier2DiscountedPriceString: a,
            showMonthlyInterval: l,
        } = e,
        r = n ? a : (0, h.$g)(i.amount, i.currency);
    function c(e) {
        return l ? `${e}/${(0, f.FJ)(v.WT.MONTH)}` : e;
    }
    return (0, s.jsx)("thead", {
        children: (0, s.jsxs)("tr", {
            className: U.U1,
            children: [
                (0, s.jsx)("th", {
                    scope: "col",
                    className: U.Cr,
                    children: (0, s.jsx)(m.D, { variant: "heading-xl/semibold", children: M.intl.string(M.t.ED4UVD) }),
                }),
                (0, s.jsx)("th", {
                    scope: "col",
                    className: U.Hn,
                    children: (0, s.jsx)(H, {
                        premiumType: v.PremiumTypes.TIER_0,
                        priceString: c((0, h.$g)(t.amount, t.currency)),
                    }),
                }),
                (0, s.jsx)("th", {
                    scope: "col",
                    className: U.Hn,
                    children: (0, s.jsx)(H, { premiumType: v.PremiumTypes.TIER_2, priceString: n ? r : c(r) }),
                }),
            ],
        }),
    });
}
let V = function (e) {
    let t,
        {
            className: i,
            headingOverride: a,
            hidePill: r = !1,
            selectedPlanTier: c = v.PremiumTypes.TIER_2,
            variant: o = "default",
        } = e,
        d = "settings" === o,
        { analyticsLocations: u } = (0, p.Ay)(g.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        x = (0, A.V)(),
        G = x?.subscriptionTrial?.skuId,
        w = (0, N.O)(),
        H = (0, b.YJ)(w),
        V = null != w && (0, b.U9)(w, v.pe.TIER_2) && H === v.gD.PREMIUM_MONTH_TIER_2,
        W = (0, b.N1)(H),
        z = null != W ? `${W}/${(0, f.FJ)(v.WT.MONTH)}` : "",
        Y = (0, f.JM)(v.gD.PREMIUM_MONTH_TIER_0),
        X = (0, f.JM)(v.gD.PREMIUM_MONTH_TIER_2),
        K = (function () {
            let e = (0, E.b)("premium_marketing_comparison"),
                t = [
                    {
                        id: 10,
                        label: M.intl.string(M.t["svn/YX"]),
                        tier0ColumnData: { includes: !0 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 7,
                        label: M.intl.string(M.t.ID5B6Z),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 13,
                        label: M.intl.string(M.t["PBUrx/"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                    {
                        id: 22,
                        label: M.intl.string(O.default["86GtGH"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    },
                ],
                i = null,
                s = [],
                { shouldShowBonusOrbsUX: n, multiplier: a } = (0, T.lk)(P.rE.NITRO_HOME_MARKETING),
                { enabled: l } = R.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                { functionalityEnabled: r } = (0, _.YS)({ location: "useGetV2PlanComparisonTableRowsApplicationHome" });
            return (
                e &&
                    ((i = {
                        id: 23,
                        title: M.intl.string(M.t.NG1e6l),
                        subtitle: M.intl.format(L.default.uJcbMv, {
                            termsLink: I.A.getArticleURL(y.MVz.NITRO_2_POINT_0),
                        }),
                        rows: [
                            {
                                id: 24,
                                label: M.intl.string(L.default.OpOEmk),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    }),
                    l &&
                        i.rows.push({
                            id: 25,
                            label: M.intl.string(L.default.Q0A42h),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    r &&
                        i.rows.push({
                            id: 26,
                            label: M.intl.string(S.default["gc2sa/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    n &&
                        s.push({
                            id: 27,
                            label: M.intl.formatToPlainString(M.t.Uhemob, { bonusOrbMultiplier: a }),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    s.push({
                        id: 28,
                        label: M.intl.string(D.default["20tmSN"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    })),
                [
                    ...(null != i ? [i] : []),
                    { id: 17, title: M.intl.string(M.t.Ij3Zmv), rows: t },
                    {
                        id: 18,
                        title: M.intl.string(M.t.Wme3nX),
                        rows: [
                            {
                                id: 0,
                                label: M.intl.string(M.t.LrUABv),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 1,
                                label: M.intl.string(M.t.DmfiwT),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 2,
                                label: M.intl.string(M.t.Uukj4o),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 12,
                                label: M.intl.string(M.t.NIKDqG),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 9,
                                label: M.intl.string(M.t["5OAKhw"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    },
                    {
                        id: 19,
                        title: M.intl.string(M.t["6b3ydG"]),
                        rows: [
                            {
                                id: 4,
                                label: M.intl.string(M.t["ufhQC+"]),
                                tier0ColumnData: { text: (0, f.EJ)(v.PremiumTypes.TIER_0) },
                                tier2ColumnData: { text: (0, f.EJ)(v.PremiumTypes.TIER_2) },
                            },
                            {
                                id: 11,
                                label: M.intl.string(M.t.qQxxVc),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 3,
                                label: M.intl.string(M.t["9kRJS8"]),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 21,
                                label: M.intl.string(M.t["5BJqNF"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 5,
                                label: M.intl.string(M.t.VwxlMw),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 6,
                                label: M.intl.formatToPlainString(M.t.nyhDpw, {
                                    numBoosts: 2,
                                    percentageOff: (0, h.l9)(C.default.locale, 0.3),
                                }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 16,
                                label: M.intl.string(M.t["93xPy3"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 8,
                                label: M.intl.string(M.t.IzrZHz),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 20,
                                label: M.intl.string(M.t.Rj1Qys),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            ...s,
                            {
                                id: 15,
                                label: M.intl.formatToPlainString(M.t["8crdzJ"], { maxChars: 4e3 }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 14,
                                label: M.intl.string(M.t["il8+nC"]),
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
        let e = null != x ? M.intl.string(M.t.IBYG5U) : M.intl.string(M.t.TR2B4T);
        t = (0, s.jsx)(j.R, { className: l()(U.Io, U.SP), text: e });
    }
    let Z = G === v.pe.TIER_0 || c === v.PremiumTypes.TIER_0;
    return (0, s.jsx)(p.f5, {
        value: u,
        children: (0, s.jsxs)("div", {
            className: l()(U.zr, i, { [U.W0]: d }),
            children: [
                (0, s.jsx)(m.D, {
                    className: U.Qw,
                    variant: d ? "heading-lg/semibold" : "nitro-md",
                    color: "text-strong",
                    children: a ?? M.intl.string(M.t.DbPgAd),
                }),
                (0, s.jsxs)("div", {
                    className: U.wY,
                    children: [
                        (0, s.jsxs)("div", {
                            className: l()(U.fO, { [U.Vd]: Z, [U.hA]: !Z }),
                            children: [
                                !Z && t,
                                (0, s.jsx)("div", { className: U.xQ }),
                                (0, s.jsxs)("div", {
                                    className: U.wN,
                                    children: [
                                        (0, s.jsx)("img", { src: k, alt: "", className: U.kQ }),
                                        (0, s.jsx)("img", {
                                            src: "/assets/6162a665edda48d4.svg",
                                            alt: "",
                                            className: U.kQ,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("table", {
                            className: U.tp,
                            children: [
                                (0, s.jsx)(F, {
                                    tier0Price: Y,
                                    tier2Price: X,
                                    shouldUseDiscountPrice: V,
                                    tier2DiscountedPriceString: z,
                                    showMonthlyInterval: d,
                                }),
                                K.map((e) => (0, n.createElement)(B, { ...e, key: e.id })),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
