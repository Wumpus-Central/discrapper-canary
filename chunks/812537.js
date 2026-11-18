s.d(t, { A: () => W });
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
    h = s(736653),
    p = s(793574),
    f = s(688810),
    N = s(448645),
    A = s(580630),
    j = s(423814),
    b = s(77528),
    E = s(511484),
    T = s(795269);
s(321073);
var I = s(325499),
    C = s(914313),
    R = s(773669),
    v = s(975571),
    _ = s(398523),
    y = s(881373),
    P = s(682901),
    S = s(652215),
    D = s(221596),
    M = s(691450),
    O = s(792996),
    k = s(842671),
    L = s(831768),
    U = s(55647),
    G = s(202600);
function w(e) {
    let { includes: t } = e;
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.CheckmarkSmallBoldIcon, {
                      size: "sm",
                      color: r.A.colors.TEXT_STRONG,
                      "aria-hidden": !0,
                  }),
                  (0, i.jsx)(o.A, { children: O.intl.string(O.t["tq+6t/"]) }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.XSmallBoldIcon, { size: "xs", color: r.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, i.jsx)(o.A, { children: O.intl.string(O.t.l4qZrp) }),
              ],
          });
}
function H(e) {
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
                        : (0, i.jsx)(w, { includes: !!s.includes }),
            }),
            (0, i.jsx)("td", {
                className: U.Hn,
                children:
                    null != n.text
                        ? (0, i.jsx)(u.E, { variant: "body-md/medium", children: n.text })
                        : (0, i.jsx)(w, { includes: !!n.includes }),
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
            n.map((e) => (0, i.jsx)(H, { ...e }, e.id)),
        ],
    });
}
function F(e) {
    let { premiumType: t, priceString: s } = e,
        n = t === P.PremiumTypes.TIER_0 ? O.intl.string(O.t.tUbSDK) : O.intl.string(O.t.Ipxkog);
    return (0, i.jsxs)("div", {
        className: U.nn,
        children: [
            (0, i.jsxs)("div", {
                className: U.KS,
                children: [
                    (0, i.jsx)(x.NitroWheelIcon, { size: "refresh_sm", colorClass: U.oG }),
                    (0, i.jsx)(m.D, { variant: "heading-xs/semibold", children: n }),
                ],
            }),
            (0, i.jsx)(m.D, { variant: "heading-xs/semibold", children: s }),
        ],
    });
}
function V(e) {
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
            className: U.U1,
            children: [
                (0, i.jsx)("th", {
                    scope: "col",
                    className: U.Cr,
                    children: (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: O.intl.string(O.t.ED4UVD) }),
                }),
                (0, i.jsx)("th", {
                    scope: "col",
                    className: U.Hn,
                    children: (0, i.jsx)(F, {
                        premiumType: P.PremiumTypes.TIER_0,
                        priceString: c((0, A.$g)(t.amount, t.currency)),
                    }),
                }),
                (0, i.jsx)("th", {
                    scope: "col",
                    className: U.Hn,
                    children: (0, i.jsx)(F, { premiumType: P.PremiumTypes.TIER_2, priceString: n ? r : c(r) }),
                }),
            ],
        }),
    });
}
let W = function (e) {
    let t,
        {
            className: s,
            headingOverride: a,
            hidePill: r = !1,
            selectedPlanTier: c = P.PremiumTypes.TIER_2,
            variant: o = "default",
        } = e,
        d = "settings" === o,
        u = (0, h.Ay)(),
        x = d && (0, g.q)(u),
        { analyticsLocations: w } = (0, f.Ay)(p.A.PREMIUM_MARKETING_PLAN_COMPARISON),
        H = (0, b.V)(),
        F = H?.subscriptionTrial?.skuId,
        W = (0, j.O)(),
        z = (0, E.YJ)(W),
        Y = null != W && (0, E.U9)(W, P.pe.TIER_2) && z === P.gD.PREMIUM_MONTH_TIER_2,
        X = (0, E.N1)(z),
        K = null != X ? `${X}/${(0, N.FJ)(P.WT.MONTH)}` : "",
        Z = (0, N.JM)(P.gD.PREMIUM_MONTH_TIER_0),
        q = (0, N.JM)(P.gD.PREMIUM_MONTH_TIER_2),
        J = (function () {
            let e = (0, I.b)("premium_marketing_comparison"),
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
                s = null,
                i = [],
                { shouldShowBonusOrbsUX: n, multiplier: a } = (0, C.lk)(D.rE.NITRO_HOME_MARKETING),
                { enabled: l } = _.A.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                { functionalityEnabled: r } = (0, y.YS)({ location: "useGetV2PlanComparisonTableRowsApplicationHome" });
            return (
                e &&
                    ((s = {
                        id: 23,
                        title: O.intl.string(O.t.NG1e6l),
                        subtitle: O.intl.format(L.default.uJcbMv, {
                            termsLink: v.A.getArticleURL(S.MVz.NITRO_2_POINT_0),
                        }),
                        rows: [
                            {
                                id: 24,
                                label: O.intl.string(L.default.OpOEmk),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    }),
                    l &&
                        s.rows.push({
                            id: 25,
                            label: O.intl.string(L.default.Q0A42h),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    r &&
                        s.rows.push({
                            id: 26,
                            label: O.intl.string(M.default["gc2sa/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        }),
                    n &&
                        i.push({
                            id: 27,
                            label: O.intl.formatToPlainString(O.t.Uhemob, { bonusOrbMultiplier: a }),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        })),
                [
                    ...(null != s ? [s] : []),
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
                            ...i,
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
        let e = null != H ? O.intl.string(O.t.IBYG5U) : O.intl.string(O.t.TR2B4T);
        t = (0, i.jsx)(T.R, { disableGradient: x, className: l()(U.Io, { [U.SP]: !x, [U.u8]: x }), text: e });
    }
    let Q = F === P.pe.TIER_0 || c === P.PremiumTypes.TIER_0;
    return (0, i.jsx)(f.f5, {
        value: w,
        children: (0, i.jsxs)("div", {
            className: l()(U.zr, s, { [U.W0]: d }),
            children: [
                (0, i.jsx)(m.D, {
                    className: U.Qw,
                    variant: d ? "heading-lg/semibold" : "nitro-md",
                    color: "text-strong",
                    children: a ?? O.intl.string(O.t.DbPgAd),
                }),
                (0, i.jsxs)("div", {
                    className: U.wY,
                    children: [
                        (0, i.jsxs)("div", {
                            className: l()(U.fO, { [U.Vd]: Q, [U.hA]: !Q }),
                            children: [
                                !Q && t,
                                (0, i.jsx)("div", { className: U.xQ }),
                                (0, i.jsx)("div", {
                                    className: U.wN,
                                    children: x
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: U._5 }),
                                                  (0, i.jsx)("div", { className: U.Db }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("img", { src: G, alt: "", className: U.kQ }),
                                                  (0, i.jsx)("img", {
                                                      src: "/assets/6162a665edda48d4.svg",
                                                      alt: "",
                                                      className: U.kQ,
                                                  }),
                                              ],
                                          }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("table", {
                            className: U.tp,
                            children: [
                                (0, i.jsx)(V, {
                                    tier0Price: Z,
                                    tier2Price: q,
                                    shouldUseDiscountPrice: Y,
                                    tier2DiscountedPriceString: K,
                                    showMonthlyInterval: d,
                                }),
                                J.map((e) => (0, n.createElement)(B, { ...e, key: e.id })),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
