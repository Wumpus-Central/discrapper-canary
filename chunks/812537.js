s.d(t, { A: () => V });
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
    g = s(793574),
    h = s(688810),
    p = s(722178),
    f = s(580630),
    N = s(423814),
    A = s(77528),
    j = s(511484),
    b = s(795269);
s(321073);
var E = s(325499),
    T = s(914313),
    I = s(773669),
    C = s(975571),
    R = s(398523),
    v = s(881373),
    _ = s(682901),
    y = s(652215),
    P = s(221596),
    S = s(691450),
    D = s(17268),
    M = s(792996),
    O = s(842671),
    k = s(831768),
    U = s(55647),
    L = s(202600);
function G(e) {
    let { includes: t } = e;
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.CheckmarkSmallBoldIcon, {
                      size: "sm",
                      color: r.A.colors.TEXT_STRONG,
                      "aria-hidden": !0,
                  }),
                  (0, i.jsx)(o.A, { children: M.intl.string(M.t["tq+6t/"]) }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.XSmallBoldIcon, { size: "xs", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, i.jsx)(o.A, { children: M.intl.string(M.t.l4qZrp) }),
              ],
          });
}
function w(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: n } = e;
    return (0, i.jsxs)("tr", {
        className: l()(U.nM, U.WQ),
        children: [
            (0, i.jsx)("th", {
                scope: "row",
                className: U.nx,
                children: (0, i.jsx)(u.E, { variant: "body-md/medium", children: t }),
            }),
            (0, i.jsx)("td", {
                className: U.Hn,
                children:
                    null != s.text
                        ? (0, i.jsx)(u.E, { variant: "body-md/medium", children: s.text })
                        : (0, i.jsx)(G, { includes: !!s.includes }),
            }),
            (0, i.jsx)("td", {
                className: U.Hn,
                children:
                    null != n.text
                        ? (0, i.jsx)(u.E, { variant: "body-md/medium", children: n.text })
                        : (0, i.jsx)(G, { includes: !!n.includes }),
            }),
        ],
    });
}
function B(e) {
    let { title: t, subtitle: s, rows: n } = e;
    return (0, i.jsxs)("tbody", {
        children: [
            (0, i.jsx)("tr", {
                className: l()(U.nM, U.Gf),
                children: (0, i.jsxs)("td", {
                    className: U.nx,
                    colSpan: 3,
                    children: [
                        (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: t }),
                        null != s && (0, i.jsx)(u.E, { variant: "body-xs/medium", children: s }),
                    ],
                }),
            }),
            n.map((e) => (0, i.jsx)(w, { ...e }, e.id)),
        ],
    });
}
function H(e) {
    let { premiumType: t, priceString: s } = e,
        n = t === _.PremiumTypes.TIER_0 ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t.Ipxkog);
    return (0, i.jsxs)("div", {
        className: U.nn,
        children: [
            (0, i.jsxs)("div", {
                className: U.KS,
                children: [
                    (0, i.jsx)(x.NitroWheelIcon, { colorClass: U.oG }),
                    (0, i.jsx)(m.D, { variant: "heading-xs/semibold", children: n }),
                ],
            }),
            (0, i.jsx)(m.D, { variant: "heading-xs/semibold", children: s }),
        ],
    });
}
function F(e) {
    let {
            tier0Price: t,
            tier2Price: s,
            shouldUseDiscountPrice: n,
            tier2DiscountedPriceString: a,
            showMonthlyInterval: l,
        } = e,
        r = n ? a : (0, f.$g)(s.amount, s.currency);
    function c(e) {
        return l ? `${e}/${(0, p.FJ)(_.WT.MONTH)}` : e;
    }
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: U.U1,
            children: [
                (0, i.jsx)("th", {
                    scope: "col",
                    className: U.Cr,
                    children: (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: M.intl.string(M.t.ED4UVD) }),
                }),
                (0, i.jsx)("th", {
                    scope: "col",
                    className: U.Hn,
                    children: (0, i.jsx)(H, {
                        premiumType: _.PremiumTypes.TIER_0,
                        priceString: c((0, f.$g)(t.amount, t.currency)),
                    }),
                }),
                (0, i.jsx)("th", {
                    scope: "col",
                    className: U.Hn,
                    children: (0, i.jsx)(H, { premiumType: _.PremiumTypes.TIER_2, priceString: n ? r : c(r) }),
                }),
            ],
        }),
    });
}
let V = function (e) {
    let t,
        {
            className: s,
            headingOverride: a,
            hidePill: r = !1,
            selectedPlanTier: c = _.PremiumTypes.TIER_2,
            variant: o = "default",
        } = e,
        d = "settings" === o,
        { analyticsLocations: u } = (0, h.Ay)(g.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        x = (0, A.V)(),
        G = x?.subscriptionTrial?.skuId,
        w = (0, N.O)(),
        H = (0, j.YJ)(w),
        V = null != w && (0, j.U9)(w, _.pe.TIER_2) && H === _.gD.PREMIUM_MONTH_TIER_2,
        W = (0, j.N1)(H),
        z = null != W ? `${W}/${(0, p.FJ)(_.WT.MONTH)}` : "",
        Y = (0, p.JM)(_.gD.PREMIUM_MONTH_TIER_0),
        X = (0, p.JM)(_.gD.PREMIUM_MONTH_TIER_2),
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
                s = null,
                i = [],
                { shouldShowBonusOrbsUX: n, multiplier: a } = (0, T.lk)(P.rE.NITRO_HOME_MARKETING),
                { enabled: l } = R.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                { functionalityEnabled: r } = (0, v.YS)({ location: "useGetV2PlanComparisonTableRowsApplicationHome" });
            return (
                e &&
                    ((s = {
                        id: 23,
                        title: M.intl.string(M.t.NG1e6l),
                        subtitle: M.intl.format(k.default.uJcbMv, {
                            termsLink: C.A.getArticleURL(y.MVz.NITRO_2_POINT_0),
                        }),
                        rows: [
                            {
                                id: 24,
                                label: M.intl.string(k.default.OpOEmk),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    }),
                    l &&
                        s.rows.push({
                            id: 25,
                            label: M.intl.string(k.default.Q0A42h),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    r &&
                        s.rows.push({
                            id: 26,
                            label: M.intl.string(S.default["gc2sa/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    n &&
                        i.push({
                            id: 27,
                            label: M.intl.formatToPlainString(M.t.Uhemob, { bonusOrbMultiplier: a }),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    i.push({
                        id: 28,
                        label: M.intl.string(D.default["20tmSN"]),
                        tier0ColumnData: { includes: !1 },
                        tier2ColumnData: { includes: !0 },
                    })),
                [
                    ...(null != s ? [s] : []),
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
                                tier0ColumnData: { text: (0, p.EJ)(_.PremiumTypes.TIER_0) },
                                tier2ColumnData: { text: (0, p.EJ)(_.PremiumTypes.TIER_2) },
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
                                    percentageOff: (0, f.l9)(I.default.locale, 0.3),
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
                            ...i,
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
        t = (0, i.jsx)(b.R, { className: l()(U.Io, U.SP), text: e });
    }
    let Z = G === _.pe.TIER_0 || c === _.PremiumTypes.TIER_0;
    return (0, i.jsx)(h.f5, {
        value: u,
        children: (0, i.jsxs)("div", {
            className: l()(U.zr, s, { [U.W0]: d }),
            children: [
                (0, i.jsx)(m.D, {
                    className: U.Qw,
                    variant: d ? "heading-lg/semibold" : "nitro-md",
                    color: "text-strong",
                    children: a ?? M.intl.string(M.t.DbPgAd),
                }),
                (0, i.jsxs)("div", {
                    className: U.wY,
                    children: [
                        (0, i.jsxs)("div", {
                            className: l()(U.fO, { [U.Vd]: Z, [U.hA]: !Z }),
                            children: [
                                !Z && t,
                                (0, i.jsx)("div", { className: U.xQ }),
                                (0, i.jsxs)("div", {
                                    className: U.wN,
                                    children: [
                                        (0, i.jsx)("img", { src: L, alt: "", className: U.kQ }),
                                        (0, i.jsx)("img", {
                                            src: "/assets/6162a665edda48d4.svg",
                                            alt: "",
                                            className: U.kQ,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("table", {
                            className: U.tp,
                            children: [
                                (0, i.jsx)(F, {
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
