s.d(t, { A: () => sE }), s(323874), s(14289), s(35956);
var i,
    l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    c = s(873263),
    o = s(17928),
    d = s(289873),
    u = s(228366),
    m = s(73825),
    x = s(974544),
    p = s(107834),
    h = s(793574),
    g = s(688810),
    j = s(753390),
    f = s(86379),
    N = s(160946),
    A = s(545075),
    _ = s(949030),
    C = s(611924),
    E = s(532794),
    v = s(976860),
    I = s(351906),
    R = s(287809),
    T = s(295405),
    b = s(166403),
    M = s(174459),
    y = s(474090),
    S = s(694080),
    P = s(287790),
    D = s(286320),
    O = s(422936),
    G = s(234419),
    L = s(851746),
    w = s(269115),
    k = s(43990),
    U = s(689175),
    B = s(775602),
    F = s(192444),
    H = s(636592),
    z = s(26508),
    V = s(927578),
    W = s(960851),
    K = s(994763),
    Y = s(949964),
    Z = s(226830),
    Q = s(366010),
    X = s(736653),
    J = s(303136),
    q = s(676279);
let $ = (e) => {
    let t,
        { className: s } = e,
        i = (0, q.TM)(),
        n = (0, Q.q)((0, X.Ay)());
    return (
        (t = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, l.jsx)("div", {
            className: s,
            children: (0, l.jsx)(
                J.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, l.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var ee =
        (((i = {}).HOME = "home"),
        (i.WHATS_NEW = "whatsNew"),
        (i.BEST_OF_NITRO = "bestOfNitro"),
        (i.PLANS = "plans"),
        (i.COMPARE = "compare"),
        i),
    et = s(873174),
    es = s(717421),
    ei = s(65470),
    el = s(792656),
    en = s(652215),
    ea = s(870408);
let er = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, es.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: en.JJy.MARKETING_FLOATING_CTA };
    return (0, l.jsx)(et.animated.div, {
        className: ea.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, l.jsxs)("div", {
            className: ea.U,
            children: [
                (0, l.jsx)(el.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, l.jsx)(ei.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var ec = s(661531),
    eo = s(820081),
    ed = s(140735),
    eu = s(401432),
    em = s(834730),
    ex = s(534514),
    ep = s(403581),
    eh = s(580630),
    eg = s(511484),
    ej = s(795269);
s(321073);
var ef = s(31502),
    eN = s(773669),
    eA = s(975571),
    e_ = s(398523),
    eC = s(881373),
    eE = s(84483),
    ev = s(788868),
    eI = s(190107),
    eR = s(962995),
    eT = s(490285),
    eb = s(375708),
    eM = s(237146),
    ey = s(864386),
    eS = s(944436),
    eP = s(799919);
let eD = (e) => {
        let { includes: t } = e;
        return t
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eo.B, { size: "sm", color: ec.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, l.jsx)(ed.A, { children: eb.intl.string(eb.t["tq+6t/"]) }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eu.a, { size: "xs", color: ec.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, l.jsx)(ed.A, { children: eb.intl.string(eb.t.l4qZrp) }),
                  ],
              });
    },
    eO = (e) => {
        let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
        return (0, l.jsxs)("tr", {
            className: r()(eS.nM, eS.WQ),
            children: [
                (0, l.jsx)("th", {
                    scope: "row",
                    className: eS.nx,
                    children: (0, l.jsx)(em.E, { variant: "text-md/medium", children: t }),
                }),
                (0, l.jsx)("td", {
                    className: eS.Hn,
                    children:
                        null != s.text
                            ? (0, l.jsx)(em.E, { variant: "text-md/medium", children: s.text })
                            : (0, l.jsx)(eD, { includes: !!s.includes }),
                }),
                (0, l.jsx)("td", {
                    className: eS.Hn,
                    children:
                        null != i.text
                            ? (0, l.jsx)(em.E, { variant: "text-md/medium", children: i.text })
                            : (0, l.jsx)(eD, { includes: !!i.includes }),
                }),
            ],
        });
    },
    eG = (e) => {
        let { title: t, subtitle: s, rows: i } = e;
        return (0, l.jsxs)("tbody", {
            children: [
                (0, l.jsx)("tr", {
                    className: r()(eS.nM, eS.Gf),
                    children: (0, l.jsxs)("td", {
                        className: eS.nx,
                        colSpan: 3,
                        children: [
                            (0, l.jsx)(ex.D, { variant: "heading-lg/bold", children: t }),
                            null != s && (0, l.jsx)(em.E, { variant: "text-xs/medium", children: s }),
                        ],
                    }),
                }),
                i.map((e) => (0, l.jsx)(eO, { ...e }, e.id)),
            ],
        });
    },
    eL = (e) => {
        let { premiumType: t, priceString: s } = e,
            i = t === ev.PremiumTypes.TIER_0 ? eb.intl.string(eb.t.tUbSDK) : eb.intl.string(eb.t.Ipxkog);
        return (0, l.jsxs)("div", {
            className: eS.nn,
            children: [
                (0, l.jsxs)("div", {
                    className: eS.KS,
                    children: [
                        (0, l.jsx)(ep.t, { colorClass: eS.oG }),
                        (0, l.jsx)(ex.D, { variant: "heading-sm/semibold", children: i }),
                    ],
                }),
                (0, l.jsx)(ex.D, { variant: "heading-sm/semibold", children: s }),
            ],
        });
    },
    ew = (e) => {
        let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
            a = i ? n : (0, eh.$g)(s.amount, s.currency);
        return (0, l.jsx)("thead", {
            children: (0, l.jsxs)("tr", {
                className: eS.U1,
                children: [
                    (0, l.jsx)("th", {
                        scope: "col",
                        className: eS.Cr,
                        children: (0, l.jsx)(ex.D, {
                            variant: "heading-xl/bold",
                            children: eb.intl.string(eb.t.ED4UVD),
                        }),
                    }),
                    (0, l.jsx)("th", {
                        scope: "col",
                        className: eS.Hn,
                        children: (0, l.jsx)(eL, {
                            premiumType: ev.PremiumTypes.TIER_0,
                            priceString: (0, eh.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, l.jsx)("th", {
                        scope: "col",
                        className: eS.Hn,
                        children: (0, l.jsx)(eL, { premiumType: ev.PremiumTypes.TIER_2, priceString: a }),
                    }),
                ],
            }),
        });
    },
    ek = (e) => {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: a = ev.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: c } = (0, g.Ay)(h.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            o = (0, G.V)(),
            d = o?.subscription_trial?.sku_id,
            u = (0, O.O)(),
            m = null != u && (0, eg.U9)(u, ev.pe.TIER_2),
            x = (0, eg.N1)(ev.gD.PREMIUM_MONTH_TIER_2),
            p = `${x}/${(0, V.FJ)(ev.WT.MONTH)}`,
            j = (0, V.JM)(ev.gD.PREMIUM_MONTH_TIER_0),
            f = (0, V.JM)(ev.gD.PREMIUM_MONTH_TIER_2),
            N = (() => {
                let e = (0, ef.l)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: eb.intl.string(eb.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eb.intl.string(eb.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eb.intl.string(eb.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eb.intl.string(ey.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: l, multiplier: n } = (0, F.lk)(eI.rE.NITRO_HOME_MARKETING),
                    { enabled: a } = e_.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, eC.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, eE.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: eb.intl.string(eb.t.NG1e6l),
                            subtitle: eb.intl.format(eM.default.uJcbMv, {
                                termsLink: eA.A.getArticleURL(en.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: eb.intl.string(eM.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        a &&
                            s.rows.push({
                                id: 25,
                                label: eb.intl.string(eM.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: eb.intl.string(eR.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            i.push({
                                id: 27,
                                label: eb.intl.formatToPlainString(eb.t.Uhemob, { bonusOrbMultiplier: n }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: eb.intl.string(eT.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: eb.intl.string(eb.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: eb.intl.string(eb.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: eb.intl.string(eb.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: eb.intl.string(eb.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: eb.intl.string(eb.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: eb.intl.string(eb.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: eb.intl.string(eb.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: eb.intl.string(eb.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: eb.intl.string(eb.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, V.EJ)(ev.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, V.EJ)(ev.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: eb.intl.string(eb.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: eb.intl.string(eb.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: eb.intl.string(eb.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: eb.intl.string(eb.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: eb.intl.formatToPlainString(eb.t.nyhDpw, {
                                        numBoosts: ev.M4,
                                        percentageOff: (0, eh.l9)(eN.default.locale, ev.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: eb.intl.string(eb.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: eb.intl.string(eb.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: eb.intl.string(eb.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: eb.intl.formatToPlainString(eb.t["8crdzJ"], { maxChars: en.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: eb.intl.string(eb.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (i) t = null;
        else {
            let e = null != o ? eb.intl.string(eb.t.IBYG5U) : eb.intl.string(eb.t.TR2B4T);
            t = (0, l.jsx)(ej.R, { className: r()(eS.Io, eS.SP), text: e });
        }
        let A = d === ev.pe.TIER_0 || a === ev.PremiumTypes.TIER_0;
        return (0, l.jsx)(g.f5, {
            value: c,
            children: (0, l.jsxs)("div", {
                className: r()(eS.zr, s),
                children: [
                    (0, l.jsx)(ex.D, {
                        className: eS.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: eb.intl.string(eb.t.DbPgAd),
                    }),
                    (0, l.jsxs)("div", {
                        className: eS.wY,
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(eS.fO, { [eS.Vd]: A, [eS.hA]: !A }),
                                children: [
                                    !A && t,
                                    (0, l.jsx)("div", { className: eS.xQ }),
                                    (0, l.jsxs)("div", {
                                        className: eS.wN,
                                        children: [
                                            (0, l.jsx)("img", { src: eP, alt: "", className: eS.kQ }),
                                            (0, l.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: eS.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("table", {
                                className: eS.tp,
                                children: [
                                    (0, l.jsx)(ew, {
                                        tier0Price: j,
                                        tier2Price: f,
                                        shouldUseDiscountPrice: m,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    N.map((e) => (0, n.createElement)(eG, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
var eU = s(702841),
    eB = s(652533),
    eF = s(20458),
    eH = s(80933),
    ez = s(180894);
let eV = () => {
    let e = (0, eU.bG)([B.A], () => B.A.useReducedMotion);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: eH.BI,
                children: (0, l.jsx)(eB.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eB.$G },
                    yAxisAnimationData: { range: 20, duration: eB.Mp, path: eB.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, l.jsx)("img", { src: ez.A, alt: "", className: eH.Q }),
                }),
            }),
            (0, l.jsx)(eF.A, {
                isMotionReduced: e,
                boltContainerClassName: eH.nJ,
                carContainerClassName: eH.IN,
                hammerContainerClassName: eH.Gj,
                keyContainerClassName: eH.FV,
                starContainerClassName: eH.E1,
                boltAssetClassName: eH.j7,
                carAssetClassName: eH.or,
                hammerAssetClassName: eH.Wv,
                keyAssetClassName: eH.rs,
                starAssetClassName: eH.OY,
            }),
        ],
    });
};
var eW = s(296725);
let eK = n.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, g.Ay)(h.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, l.jsx)(g.f5, {
        value: s,
        children: (0, l.jsx)("div", {
            ref: t,
            className: eW.kL,
            children: (0, l.jsxs)("div", {
                className: eW.hQ,
                children: [
                    (0, l.jsx)(eV, {}),
                    (0, l.jsx)(ex.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: eW.RH,
                        children: eb.intl.string(eb.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
eK.displayName = "PremiumMarketingFooter";
var eY = s(939249),
    eZ = s(742589),
    eQ = s(909536),
    eX = s(400669),
    eJ = s(876587),
    eq = s(503255);
let e$ = (e) => {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        a = {
            [ee.HOME]: eb.intl.string(eb.t.uGRXjS),
            [ee.WHATS_NEW]: eb.intl.string(eb.t["mfcR/v"]),
            [ee.BEST_OF_NITRO]: eb.intl.string(eb.t.xQKkE8),
            [ee.PLANS]: eb.intl.string(eb.t.wyNMnm),
            [ee.COMPARE]: eb.intl.string(eb.t.pwD7If),
        },
        r = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        c = (0, eQ.Gh)("premium_marketing_nav_bar") && null != r,
        d = n.useRef(null),
        u = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, l.jsxs)(eZ.A, {
        className: eq.TQ,
        transparent: !0,
        children: [
            (0, l.jsxs)("div", {
                className: eq.Wc,
                children: [
                    (0, l.jsxs)("div", {
                        className: eq.wG,
                        children: [
                            (0, l.jsx)(ep.t, { className: eq.nE, colorClass: eq.oG }),
                            (0, l.jsx)("div", {
                                className: eq.zc,
                                children: u.map((e) => {
                                    let t = s === e.id,
                                        i = a[e.id];
                                    return (0, l.jsxs)(
                                        eY.D,
                                        {
                                            className: eq.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, l.jsx)(em.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, l.jsx)("div", { className: eq.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: eq.MQ,
                        children: [
                            c &&
                                (0, l.jsx)(eX.l, { ref: d, size: "sm", location: h.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, l.jsx)(ei.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            c && i && (0, l.jsx)(eJ.O, { targetElementRef: d }),
        ],
    });
};
var e0 = s(990078),
    e1 = s(704333),
    e2 = s(414499),
    e3 = s(597770),
    e8 = s(500060),
    e5 = s(885574),
    e7 = s(406860),
    e6 = s(985603),
    e4 = s(983060),
    e9 = s(56598);
function te() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, e7.A)({ boxType: e6.XQ, thirdPartyPartner: e6.FZ }),
        s = [
            { icon: e1.B, text: eb.intl.string(eM.default.MUypiB) },
            { icon: e2.h, text: eb.intl.string(eM.default.ec5Rdd) },
            { icon: e3.o, text: eb.intl.string(eM.default["9t2CzW"]), tooltip: eM.default.AyECej },
            { icon: e8.o, text: eb.intl.string(eM.default.R7YJAY) },
        ];
    return (0, l.jsx)(w.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, l.jsx)("div", {
            ref: e,
            className: e9.iE,
            children: (0, l.jsxs)("div", {
                className: e9.Nr,
                children: [
                    (0, l.jsxs)("div", {
                        className: e9.j,
                        children: [
                            (0, l.jsx)("div", { className: e9._g }),
                            (0, l.jsx)("div", { className: e9.$h }),
                            (0, l.jsx)("div", { className: e9.Rv }),
                            (0, l.jsx)("div", { className: e9.Lw }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: e9.CT,
                        children: [
                            (0, l.jsxs)("div", {
                                className: e9.Qs,
                                children: [
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(ex.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: e9.R_,
                                                children: eb.intl.string(eM.default.rkt1aw),
                                            }),
                                            (0, l.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, l.jsxs)(
                                                            "div",
                                                            {
                                                                className: e9.yf,
                                                                children: [
                                                                    (0, l.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, l.jsx)(em.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, l.jsx)("div", {
                                                                            className: e9.Jn,
                                                                            children: (0, l.jsx)(e0.m, {
                                                                                text: eb.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, l.jsx)(e5.m, {
                                                                                    size: "xxs",
                                                                                    color: "var(--icon-default)",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: e9.xF,
                                                        children: (0, l.jsx)(el.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: ev.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: e9.WE,
                                        children: (0, l.jsx)(em.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eb.intl.format(eM.default.KDKdWi, { termsLink: (0, e4.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: e9.r1,
                                children: (0, l.jsx)("img", {
                                    className: e9.wm,
                                    src: "https://cdn.discordapp.com/assets/content/183a222feae2555e7a057002bbcae445e70efa78fb204d353c9c93b4a1f210d4.png",
                                    alt: "Xbox Game Pass",
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var tt = s(750338),
    ts = s(121),
    ti = s(856556);
function tl(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: c = !1,
        highlightBento: o,
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(ti.boxBackdrop, t),
        children: [
            (0, l.jsx)(ex.D, {
                className: ti.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != o && (0, l.jsx)("div", { className: ti.highlightBento, children: o }),
            (0, l.jsx)("div", {
                className: ti.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = ts.A0.SMALL;
                            break;
                        case 2:
                            s = ts.A0.MEDIUM;
                            break;
                        default:
                            s = ts.A0.LARGE;
                    }
                    return (0, l.jsx)(l.Fragment, {
                        children: e.map((e) =>
                            (0, l.jsx)(
                                tt.A,
                                { index: t + +!!c, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let tn = n.memo(function (e) {
        let t = (0, ef.l)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, ts.Ay)(t);
        return (0, l.jsx)(tl, {
            boxLayout: s,
            title: eb.intl.string(eb.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, l.jsx)(te, {}) : null,
            ...e,
        });
    }),
    ta = n.memo(function (e) {
        let { bestOfBoxes: t } = (0, ts.Ay)();
        return (0, l.jsx)(tl, { boxLayout: t, title: eb.intl.string(eb.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var tr = s(877624),
    tc = s(707554),
    to = s(526292),
    td = s(236834),
    tu = s(549996),
    tm = s(810660),
    tx = s(371764),
    tp = s(97808),
    th = s(854627),
    tg = s(778712),
    tj = s(45861);
function tf(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, th.A)({ userId: t?.id, size: tg._3.SIZE_24, animateOnHover: !0 });
    return (0, l.jsx)("div", {
        className: tj.$6,
        children: (0, l.jsxs)("div", {
            className: tj.sc,
            children: [
                (0, l.jsx)("div", {
                    className: tj.kR,
                    children: (0, l.jsx)(tp.eu, { src: s, "aria-label": t.username, size: tg._3.SIZE_32, ...i }),
                }),
                (0, l.jsx)(ex.D, {
                    variant: "heading-sm/normal",
                    className: tj.FS,
                    color: "text-strong",
                    children: eb.intl.format(eb.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var tN = s(175569),
    tA = s(369805);
let t_ = () => {
    let e = (0, tA.A)();
    return null == e ? null : (0, l.jsx)(tN.A, { text: e });
};
var tC = s(579245),
    tE = s(97352);
function tv() {
    let e = (0, o.bG)([tE.A], () => tE.A.getForSkuAndInterval((0, V.mH)(ev.pe.TIER_0), ev.WT.MONTH));
    return null != e ? (0, V.sS)(e) : "\u2026";
}
var tI = s(607470);
let tR =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tT = (e) => {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
        } = e;
        return s
            ? (0, l.jsx)("div", {
                  className: n,
                  children: (0, l.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, l.jsx)("div", {
                  className: n,
                  children: (0, l.jsx)(eB.Ay, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eB.$G },
                      yAxisAnimationData: { range: 20, duration: eB.Mp, path: eB.aV.SINE },
                      parallaxAnimationData: {
                          pathDirection: eB.MN.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      children: t
                          ? (0, l.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, l.jsx)(
                                tI.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, l.jsx)("source", { src: tR }),
                                },
                                tR,
                            ),
                  }),
              });
    };
var tb = s(188393);
let tM = (e) => {
    let { containerVisibilityPercentage: t } = e,
        s = (0, eU.bG)([B.A], () => B.A.useReducedMotion),
        i = (0, q.TM)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tT, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: tb.wG,
                assetClassName: tb.lu,
            }),
            (0, l.jsx)(eF.A, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: tb.nJ,
                carContainerClassName: tb.IN,
                hammerContainerClassName: tb.Gj,
                keyContainerClassName: tb.FV,
                starContainerClassName: tb.E1,
                boltAssetClassName: tb.j7,
                carAssetClassName: tb.or,
                hammerAssetClassName: tb.Wv,
                keyAssetClassName: tb.rs,
                starAssetClassName: tb.OY,
            }),
        ],
    });
};
var ty = s(469408);
let tS = n.memo(
        n.forwardRef((e, t) => {
            let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
                { analyticsLocations: a } = (0, g.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
                c = tv(),
                d = (0, td.A)(),
                u = null != d,
                m = (0, o.bG)([B.A], () => B.A.useReducedMotion),
                { visibilityPercentageRef: x, visibilityPercentage: p } = (0, tm.U)(!m),
                j = (0, D.b)(),
                f = !u && j.length > 0,
                N = (0, tu.c)(tr.C.MARKETING_PAGE_BANNER),
                A = null != N && "marketingPageBanner" === N.properties.properties.oneofKind,
                _ = (0, to.ar)() && !A;
            return (0, l.jsx)(g.f5, {
                value: a,
                children: (0, l.jsx)("div", {
                    ref: t,
                    className: r()(ty.kL, s),
                    "data-testid": "marketing-page-hero-header",
                    children: (0, l.jsx)("div", {
                        ref: x,
                        children: (0, l.jsxs)("div", {
                            className: ty.hQ,
                            children: [
                                (0, l.jsx)(tM, { containerVisibilityPercentage: p }),
                                _ && (0, l.jsx)("div", { className: ty.XN, children: (0, l.jsx)(t_, {}) }),
                                (0, l.jsx)("div", {
                                    className: ty.s8,
                                    children: (0, l.jsx)(tc.F, {
                                        forceLevel: 1,
                                        children: (0, l.jsx)(ex.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: ty.wx,
                                            children: eb.intl.string(eb.t.YCZldK),
                                        }),
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: ty.rf,
                                    children: [
                                        u &&
                                            (0, l.jsx)("div", {
                                                className: ty.eZ,
                                                children: (0, l.jsx)(tf, { referrer: d }),
                                            }),
                                        f &&
                                            (0, l.jsx)("div", {
                                                className: ty.Qn,
                                                children: (0, l.jsx)(tC.A, {
                                                    textColor: "text-strong",
                                                    smallerText: !1,
                                                    isApplicationHome: !0,
                                                    enablePremiumBrandRefresh: !0,
                                                }),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: _ ? ty.es : ty.UJ,
                                            children: [
                                                (0, l.jsx)(el.A, {
                                                    size: "md",
                                                    fullWidth: _,
                                                    hasActivePromotion: !!n,
                                                    subscriptionTier: A && null == i ? ev.pe.NONE : i,
                                                    buttonTextOverride: A ? eb.intl.string(eb.t["2pG5Ga"]) : void 0,
                                                }),
                                                !_ && (0, l.jsx)(ei.A, { variant: "secondary", size: "md" }),
                                            ],
                                        }),
                                        (0, l.jsx)("div", {
                                            className: ty.iQ,
                                            children: (0, l.jsx)(em.E, {
                                                color: "text-muted",
                                                variant: "text-xs/medium",
                                                children: eb.intl.format(eb.t.kt9wxs, { cheapestMonthlyPrice: c }),
                                            }),
                                        }),
                                        null != N &&
                                            "marketingPageBanner" === N.properties.properties.oneofKind &&
                                            (0, l.jsx)(tx.x, {
                                                componentId: N.id,
                                                promotionBannerMarketingComponentFields:
                                                    N.properties.properties.marketingPageBanner,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            });
        }),
    ),
    tP = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, n.useCallback)(
                (e) => {
                    let s = c.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, l] = (0, n.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, r] = (0, n.useState)(e[0]);
        (0, n.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && r(e[0]);
        }, [i]);
        let c = (0, n.useRef)({});
        return (
            (0, n.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        l((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(c.current).forEach((t) => {
                        null != t && e.observe(t);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, n.useMemo)(
                    () =>
                        e.reduce(
                            (e, t, i) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        (c.current[t] = e), null != e && (e.id = t);
                                    },
                                    scrollToSection: () => s(t),
                                    order: i,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, s],
                ),
                activeSectionId: a,
                setActiveSectionId: r,
            }
        );
    };
var tD = s(818348),
    tO = s(808557);
let tG = () => {
    let e = (0, c.zy)();
    (0, C.P)(_.b);
    let t = n.useRef(null),
        s = n.useRef(null),
        i = n.useRef(null),
        a = n.useRef(null),
        d = n.useRef(null),
        u = n.useRef(null),
        m = (0, o.bG)([B.A], () => B.A.useReducedMotion),
        [x, p] = n.useState(m);
    n.useEffect(() => {
        if (m) return void p(!0);
        let e = s.current;
        if (null == e) return;
        let t = (t) => {
            t.target === e && p(!0);
        };
        return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
    }, [m]);
    let [j, f] = n.useState(!1),
        [N, A] = n.useState(!1),
        [E, v] = n.useState(!1),
        [I, R] = n.useState(!1),
        T = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        y = null != T ? (0, V.EL)(T) : null,
        S = null != y ? V.Ay.getSkuIdForPlan(y.planId) : null,
        P = null !== S && S !== ev.pe.TIER_2 ? ev.pe.TIER_2 : null,
        D = (0, W.cg)(),
        { analyticsLocations: O } = (0, g.Ay)(h.A.PREMIUM_MARKETING);
    n.useEffect(() => {
        R(!0);
    }, []);
    let G = (0, z.DK)(H.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: L } = (0, F.lk)(eI.rE.NITRO_HOME_MARKETING),
        Q = G && L ? ts.NI.COMBINED_ORBS : L ? ts.NI.ORB_MULTIPLIER : G ? ts.NI.ORB_REWARDS : null,
        X = n.useMemo(() => null != Q && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, Q]);
    (0, K.z)(Q ?? ts.NI.COMBINED_ORBS, X);
    let { navBarSections: J, activeSectionId: q } = tP([ee.HOME, ee.WHATS_NEW, ee.BEST_OF_NITRO, ee.PLANS, ee.COMPARE]),
        { home: et, whatsNew: es, bestOfNitro: ei, plans: el, compare: ea } = J,
        ec = (0, l.jsxs)("div", {
            ref: s,
            className: r()(tO.kL, tO.Gd, tO.iI, { [tO.Hq]: !m }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, l.jsx)($, { className: tO.yH }),
                (0, l.jsx)(e$, { navBarSections: J, activeSectionId: q, isAnimationComplete: x }),
                (0, l.jsxs)("div", {
                    className: tO.Qr,
                    children: [
                        (0, l.jsx)("div", {
                            className: tO.qY,
                            ref: et.ref,
                            children: (0, l.jsx)(w.L, {
                                innerRef: a,
                                onChange: (e) => f(e),
                                threshold: 0,
                                active: !0,
                                children: (0, l.jsx)(tS, {
                                    ref: a,
                                    subscriptionTier: P,
                                    isEligibleForBogoPromotion: D,
                                }),
                            }),
                        }),
                        D &&
                            (0, l.jsx)("div", {
                                className: tO.Hz,
                                children: (0, l.jsx)(Y.A, { variant: Y.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, l.jsx)("div", {
                            className: tO.So,
                            ref: es.ref,
                            children: (0, l.jsx)(tn, { shouldLoadVideo: I, isReducedMotion: m }),
                        }),
                        (0, l.jsx)("div", {
                            className: tO.KQ,
                            ref: ei.ref,
                            children: (0, l.jsx)(ta, { shouldLoadVideo: I, isReducedMotion: m }),
                        }),
                        (0, l.jsx)("div", {
                            className: tO.s5,
                            ref: el.ref,
                            children: (0, l.jsx)(w.L, {
                                innerRef: i,
                                onChange: (e) => A(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, l.jsx)(Z.jP, { innerRef: i }),
                            }),
                        }),
                        (0, l.jsx)("div", { className: tO.aC, ref: ea.ref, children: (0, l.jsx)(ek, {}) }),
                    ],
                }),
                (0, l.jsx)(w.L, {
                    innerRef: d,
                    onChange: (e) => {
                        e &&
                            !E &&
                            (M.default.track(en.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: O }),
                            v(!0));
                    },
                    children: (0, l.jsx)("div", { ref: d, className: tO._Z }),
                }),
                (0, l.jsx)(eK, { ref: u }),
                (0, l.jsx)(er, { isVisible: !j && !N && I, subscriptionTier: P, isEligibleForBogoPromotion: D }),
                (0, l.jsx)($, { className: tO.MF }),
            ],
        });
    return (0, l.jsx)(k.N, {
        theme: tD.NJ.DARKER,
        children: (e) => (0, l.jsx)(U.Gt, { className: r()(tO.XG, e), ref: t, children: ec }),
    });
};
var tL = s(727949),
    tw = s(462887),
    tk = s(862482),
    tU = s(194509),
    tB = s(396375),
    tF = s(14238);
let tH = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, es.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        c = { section: en.JJy.MARKETING_FLOATING_CTA },
        o = (0, X.Ay)(),
        d = (0, Q.M)(o);
    return (0, l.jsx)(et.animated.div, {
        className: r()(tF.iE, { [tF.H8]: i, [tF.q4]: !t }),
        style: a,
        children: (0, l.jsxs)("div", {
            className: i ? tF.zW : tF.iJ,
            children: [
                (0, l.jsx)(tB.A, {
                    color: d ? tk.XD.BRAND_INVERTED : void 0,
                    className: r()(tF.x6, { [tF.Ph]: d }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: c,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: d ? void 0 : tF.PJ,
                }),
                (0, l.jsx)(tU.A, { className: tF.x6, premiumModalAnalyticsLocation: c }),
            ],
        }),
    });
};
var tz = s(904788),
    tV = s(89366),
    tW = s(360101);
let tK = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: s,
                containerClassName: i,
                buttonClassName: n,
                isApplicationHome: a,
                isDarkMode: c,
                isEligibleForBogoPromotion: o,
            } = e,
            d = o
                ? (0, l.jsx)(tB.A, {
                      color: c ? tk.XD.BRAND_INVERTED : void 0,
                      className: r()(tW.x6, tW.Ph, n, { [tW.Sq]: t && a, [tW.MF]: a && !c }),
                      shinyButtonClassName: c ? void 0 : tW.PJ,
                      subscriptionTier: s,
                      hasActivePromotion: !0,
                  })
                : (0, l.jsx)(tB.A, {
                      color: c || !a ? tk.XD.BRAND_INVERTED : void 0,
                      className: r()(tW.x6, tW.Ph, n, { [tW.Sq]: t && a, [tW.MF]: a && !c }),
                      subscriptionTier: s,
                  }),
            u = t && a ? null : (0, l.jsx)(tU.A, { className: r()(tW.x6, n), color: a ? void 0 : tk.XD.WHITE });
        return (0, l.jsxs)("div", { className: r()(tW.UD, i), children: [d, " ", u] });
    },
    tY = () =>
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tz.p, { className: tW.zd }),
                (0, l.jsx)(tz.p, { className: tW.G }),
                (0, l.jsx)(tz.p, { className: tW.zy }),
                (0, l.jsx)(tz.p, { className: tW.GX }),
            ],
        });
function tZ(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = tv();
    return (0, l.jsx)(em.E, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: r()(tW.h_, { [tW.If]: s, [tW.jn]: i }),
        children: eb.intl.format(eb.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let tQ = n.forwardRef((e, t) => {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: c } = (0, g.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
        o = (0, tV.QQ)(),
        d = (0, to.ar)(),
        u = (0, W.cg)(),
        m = (0, D.b)().length > 0,
        x = eb.intl.string(eb.t.YCZldK);
    return (0, l.jsx)(g.f5, {
        value: c,
        children: (0, l.jsxs)("div", {
            ref: t,
            className: r()(tW.kL, s, { [tW.V1]: !d, [tW.Q4]: !d && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, l.jsxs)("div", {
                    className: d ? tW.I6 : tW.G1,
                    children: [
                        (0, l.jsx)(tc.F, {
                            forceLevel: 1,
                            children: (0, l.jsx)(ex.D, {
                                variant: d ? "display-lg" : "display-md",
                                color: "always-white",
                                children: x,
                            }),
                        }),
                        m
                            ? (0, l.jsx)("div", {
                                  className: tW.DF,
                                  children: (0, l.jsx)(tC.A, { textColor: "always-white", smallerText: !d }),
                              })
                            : (0, l.jsx)(tZ, {}),
                        u || o
                            ? (0, l.jsx)("div", {
                                  className: tW.UD,
                                  children: (0, l.jsx)(tU.A, { className: r()(tW.x6, i), color: tk.XD.WHITE }),
                              })
                            : (0, l.jsx)(tK, {
                                  subscriptionTier: n,
                                  inOfferExperience: d,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, l.jsx)(tZ, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !d && (0, l.jsx)(tY, {}),
            ],
        }),
    });
});
var tX = s(374200),
    tJ = s(815846),
    tq = s(860839),
    t$ = s(359778),
    t0 = s(695366),
    t1 = s(780964),
    t2 = s(766075),
    t3 = s(824888);
let t8 = (e) => {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        c = (0, to.ar)();
    if (null == i) return null;
    let o = null != i ? V.Ay.getPremiumPlanItem(i) : null;
    if (
        (V.Ay.isBoostOnlySubscription(i)
            ? (t = eb.intl.string(eb.t.Uj0md3))
            : null != o && (t = V.Ay.getTierDisplayNameByPlanId(o.planId)),
        null == t)
    )
        return null;
    let d = () => (0, t2.openUserSettings)(t1.X.SUBSCRIPTIONS_PANEL),
        u = (null != o ? V.Ay.getSkuIdForPlan(o.planId) : null) === ev.pe.TIER_1;
    return (
        (s = null != a ? a : c ? "always-white" : "text-default"),
        (0, l.jsxs)(t$.Z, {
            className: r()(t3.kL, n, { [t3.He]: c }),
            type: t$.Z.Types.CUSTOM,
            children: [
                (0, l.jsx)(t0.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: r()(t3.Kk, { [t3.Pt]: c }),
                }),
                (0, l.jsx)(em.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: u
                        ? eb.intl.format(eb.t["tYuv+T"], {
                              helpdeskArticle: eA.A.getArticleURL(en.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: d,
                          })
                        : eb.intl.format(eb.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: d }),
                }),
            ],
        })
    );
};
var t5 = s(404631);
let t7 = (e) => {
    let { lifted: t = !1 } = e;
    return (0, l.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: r()(t5.zr, { [t5.N]: t }),
        children: [
            (0, l.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, l.jsx)("stop", { className: t5.eq }),
                        (0, l.jsx)("stop", { offset: "0.339235", className: t5.l_ }),
                        (0, l.jsx)("stop", { offset: "0.492065", className: t5.sM }),
                        (0, l.jsx)("stop", { offset: "0.823236", className: t5.zi }),
                        (0, l.jsx)("stop", { offset: "0.899558", className: t5.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var t6 = s(900797),
    t4 = s(847374),
    t9 = s(777666),
    se = s(464769);
function st(e) {
    let { className: t } = e;
    return (0, l.jsx)(t9.Lp, { className: r()(se.T, t), text: eb.intl.string(eb.t.EYxi0o) });
}
var ss = s(507553),
    si = s(591179),
    sl = s(255438),
    sn = s(355097);
let sa = "/assets/0838bda6ecd20d91.svg";
var sr = s(64514),
    sc = s(121818);
let so = "/assets/5b4fec8511c3676a.svg",
    sd = (e, t, s) => ((0, tw.M)(e) ? t : s);
var su = s(732302);
let sm = (e) => {
        let { isShowingAll: t, onClick: s } = e;
        return (0, l.jsxs)(eY.D, {
            onClick: s,
            className: su.customButton,
            children: [
                t ? eb.intl.string(eb.t.maZaN3) : eb.intl.string(eb.t["37C26f"]),
                t
                    ? (0, l.jsx)(t6.t, { size: "md", color: "currentColor", className: su.arrow })
                    : (0, l.jsx)(t4.a, { size: "md", color: "currentColor", className: su.arrow }),
            ],
        });
    },
    sx = (e) => {
        let {
                title: t,
                description: s,
                className: i,
                imageSource: n,
                imageClassName: a,
                titleBadge: c,
                isNew: o = !1,
                isEarlyAccess: d = !1,
            } = e,
            { analyticsLocations: u } = (0, g.Ay)(h.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, l.jsx)(g.f5, {
            value: u,
            children: (0, l.jsxs)("div", {
                className: r()(su.perkCard, i),
                children: [
                    o
                        ? (0, l.jsx)(tz.A, {
                              className: su.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    d ? (0, l.jsx)(st, { className: su.perkCardEarlyAccessBadge }) : null,
                    (0, l.jsx)("img", { src: n, alt: "", className: r()(a, su.perksCardArt) }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsxs)(ex.D, {
                                variant: "heading-lg/extrabold",
                                className: su.perkCardHeading,
                                children: [t, " ", c],
                            }),
                            (0, l.jsx)(em.E, {
                                variant: "text-sm/normal",
                                className: su.perkCardDescription,
                                children: "function" == typeof s ? s(u) : s,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    sp = (e) => {
        let { className: t, isSubscriberNitroHome: i = !1 } = e,
            [a, c] = n.useState(!1),
            o = ((e) => {
                let { styles: t } = e,
                    i = (0, X.Ay)(),
                    l = (0, si.X)("usePerkCards"),
                    n = (0, eU.bG)([R.default], () => {
                        let e = R.default.getCurrentUser();
                        return V.Ay.canUsePremiumProfileCustomization(e);
                    }),
                    a = (0, sl.Xq)(ev.f3 / 1024, { useKibibytes: !0 });
                return {
                    badge: {
                        title: eb.intl.string(eb.t.SS87rQ),
                        description: eb.intl.string(eb.t.oD6CRr),
                        imageSource: "/assets/70e295f6158d848f.png",
                        imageClassName: t.badgeImage,
                    },
                    badgeAlt: {
                        title: eb.intl.string(eb.t["5cYMu0"]),
                        description: eb.intl.string(eb.t.vxk9va),
                        imageSource: sd(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                        imageClassName: t.badgeNewImage,
                    },
                    clientThemes: {
                        title: eb.intl.string(eb.t["/xvEMy"]),
                        description: eb.intl.string(eb.t.HKWdjj),
                        className: t.clientThemesCard,
                        imageSource: "/assets/37e0853800afb796.svg",
                        imageClassName: t.clientThemesImage,
                    },
                    customAppIcons: {
                        title: eb.intl.string(eb.t.OuItFi),
                        description: eb.intl.string(eb.t.mPyrE6),
                        imageSource: "/assets/7992de8b563ad80a.png",
                        imageClassName: t.customAppIconImage,
                    },
                    emoji: {
                        title: eb.intl.string(eb.t["R2IV/Q"]),
                        description: eb.intl.string(eb.t.R5Xag2),
                        imageSource: "/assets/d8edaaf5cb32248f.svg",
                        imageClassName: t.emojiImage,
                    },
                    guildProfile: {
                        title: eb.intl.string(eb.t.lKDhhJ),
                        description: (e) => {
                            if (l)
                                return n
                                    ? eb.intl.formatToPlainString(eb.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                    : eb.intl.formatToPlainString(eb.t.d2oYS8, { onTryItOutClick: () => {} });
                            let t = () => {
                                {
                                    let { openUserSettings: t } = s(766075);
                                    ss.A.setState({ scrollPosition: sn._F.TRY_IT_OUT }),
                                        t(t1.X.PROFILE_PANEL, { analyticsLocations: e });
                                }
                            };
                            return n
                                ? eb.intl.format(eb.t.aj1pfZ, { onCheckItOutClick: t })
                                : eb.intl.format(eb.t.d2oYS8, { onTryItOutClick: t });
                        },
                        imageSource: "/assets/e1b6b45be1ce4b03.png",
                        imageClassName: t.perGuildProfilesImage,
                    },
                    longerMessages: {
                        title: eb.intl.string(eb.t.BUScid),
                        description: eb.intl.string(eb.t.vN6XpQ),
                        imageSource: sd(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                        imageClassName: t.longerMessagesImage,
                    },
                    moreGuilds: {
                        title: eb.intl.string(eb.t.Bv8Pfk),
                        description: eb.intl.string(eb.t.JMfaTU),
                        imageSource: sd(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                        imageClassName: t.moreGuildsImage,
                    },
                    moreGuildsAlt: {
                        title: eb.intl.string(eb.t.Bv8Pfk),
                        description: eb.intl.string(eb.t.JMfaTU),
                        imageSource: sd(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                        imageClassName: t.moreGuildsAltImage,
                    },
                    soundboard: {
                        title: eb.intl.string(eb.t["lGcW+c"]),
                        description: eb.intl.string(eb.t["/fDyO+"]),
                        imageSource: sd(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                        imageClassName: t.soundboardImage,
                    },
                    stickers: {
                        title: eb.intl.string(eb.t["1c+xwT"]),
                        description: eb.intl.string(eb.t.hJG8ZN),
                        imageSource: sd(i, sa, so),
                        imageClassName: t.stickersImage,
                    },
                    stickersBurst: {
                        title: eb.intl.string(eb.t.tzdIwI),
                        description: eb.intl.string(eb.t.hJG8ZN),
                        imageSource: sd(i, sa, so),
                        imageClassName: t.stickersImage,
                    },
                    stickersPremiumPerk: {
                        title: eb.intl.string(eb.t.tzdIwI),
                        description: eb.intl.string(eb.t.hJG8ZN),
                        imageSource: sd(i, sa, so),
                        imageClassName: t.stickersImage,
                    },
                    streaming: {
                        title: eb.intl.string(eb.t.RSXQYO),
                        description: eb.intl.string(eb.t.ymCPxp),
                        imageSource: "/assets/3bcdc01b26c7f691.svg",
                        imageClassName: t.streamingImage,
                    },
                    superReactions: {
                        title: eb.intl.string(eb.t["uZt5q/"]),
                        description: eb.intl.string(eb.t.ZK3ZoX),
                        imageSource: sd(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                        imageClassName: t.superReactionsImage,
                    },
                    upload: {
                        title: eb.intl.formatToPlainString(eb.t.jqhAdL, { premiumMaxSize: a }),
                        description: eb.intl.formatToPlainString(eb.t["HI+cfm"], { premiumMaxSize: a }),
                        imageSource: "/assets/010eae6a6dbacc63.svg",
                        imageClassName: t.uploadImage,
                    },
                    videoBackground: {
                        title: eb.intl.string(eb.t.NaGpTf),
                        description: eb.intl.string(eb.t["A8O/Qw"]),
                        imageSource: sd(i, sr, sc),
                        imageClassName: t.videoBackgroundImage,
                    },
                };
            })({ styles: su }),
            d = (0, eU.bG)([B.A], () => B.A.useReducedMotion),
            { analyticsLocations: u } = (0, g.Ay)(),
            m = [
                o.emoji,
                o.streaming,
                o.upload,
                o.customAppIcons,
                o.soundboard,
                o.videoBackground,
                o.superReactions,
                o.stickersPremiumPerk,
                o.badgeAlt,
            ];
        return (0, l.jsxs)("div", {
            className: r()(su.perksContainer, t, {
                [su.partiallyHidden]: i && !a,
                [su.subscriberNitroHome]: i,
                [su.reducedMotion]: d,
            }),
            children: [
                (0, l.jsx)(ex.D, {
                    variant: "heading-xxl/extrabold",
                    className: su.perksTitle,
                    children: i ? eb.intl.string(eb.t.QX14gI) : eb.intl.string(eb.t.RGadQR),
                }),
                (0, l.jsx)("div", {
                    className: r()(su.perkCardContainer, { [su.perkCardContainerExpanded]: a }),
                    children: m.map((e) => null != e && (0, l.jsx)(sx, { ...e }, e.title)),
                }),
                i &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", {
                                className: r()({ [su.sizeGizmo]: !a, [su.sizeGizmoExpanded]: a }),
                                children: (0, l.jsx)(sm, {
                                    onClick: () => {
                                        M.default.track(en.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: u,
                                            was_expanded: a,
                                        }),
                                            c(!a);
                                    },
                                    isShowingAll: a,
                                }),
                            }),
                            (0, l.jsx)("div", { className: r()(su.cover, { [su.hidden]: a }) }),
                        ],
                    }),
            ],
        });
    };
var sh = s(701413),
    sg = s(111932),
    sj = s(88822),
    sf = s(288894);
let sN = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, l.jsx)(t7, { lifted: t }) : null;
    },
    sA = () => {
        (0, C.P)(_.b);
        let e = n.useRef(null),
            t = n.useRef(null),
            s = n.useRef(null),
            i = (0, X.Ay)(),
            a = (0, tw.M)(i),
            [c, d] = n.useState(!1),
            [u, m] = n.useState(!1),
            [x, p] = n.useState(!1),
            [j, f] = n.useState(!1),
            N = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
            A = null != N ? (0, V.EL)(N) : null,
            E = null != A ? V.Ay.getSkuIdForPlan(A.planId) : null,
            v = null !== E && E !== ev.pe.TIER_2 ? ev.pe.TIER_2 : null,
            I = (0, G.V)(),
            R = I?.subscription_trial?.sku_id,
            T = (0, to.ar)(),
            y = (0, W.cg)(),
            S = (0, eQ.Gh)("premium-marketing-settings-page"),
            P = y ?? !1,
            D = (0, o.bG)([tX.A], () => {
                let e = tX.A.getMarketingComponentByType(tr.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: O } = (0, g.Ay)(h.A.PREMIUM_MARKETING);
        n.useEffect(() => {
            f(!0);
        }, []);
        let L = (0, l.jsx)("div", {
            className: sj.dY,
            children: (0, l.jsx)(w.L, {
                innerRef: e,
                onChange: (e) => m(e),
                threshold: 0.1,
                active: !0,
                children: (0, l.jsx)(tq.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, l.jsx)(tB.A, {
                        showIcon: !1,
                        subscriptionTier: ev.pe.TIER_0,
                        className: sg.Ph,
                        look: tk.pR.OUTLINED,
                        color: tk.XD.WHITE,
                        buttonShineClassName: sg.Qr,
                    }),
                    tier2CTAButton:
                        R === ev.pe.TIER_0
                            ? (0, l.jsx)(tB.A, {
                                  showIcon: !1,
                                  subscriptionTier: ev.pe.TIER_2,
                                  className: sg.Ph,
                                  look: tk.pR.OUTLINED,
                                  color: tk.XD.WHITE,
                                  buttonShineClassName: sg.Qr,
                              })
                            : (0, l.jsx)(tB.A, {
                                  color: tk.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: ev.pe.TIER_2,
                                  className: sg.Ph,
                                  hasActivePromotion: P,
                                  textOptions: { textClassName: sg.Ac },
                                  buttonShineClassName: sg.Qr,
                              }),
                }),
            }),
        });
        return (0, l.jsxs)("div", {
            className: sj.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, l.jsx)(t8, { premiumSubscription: N, className: r()(sj.R3, { [sj.aZ]: T }) }),
                T &&
                    (0, l.jsxs)("div", {
                        className: sj.n1,
                        children: [
                            (0, l.jsx)(sN, { inOfferExperience: T }),
                            S &&
                                (0, l.jsx)(eX.l, {
                                    className: sj.ij,
                                    size: "md",
                                    location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, l.jsxs)("div", {
                    className: r()({ [sj.V1]: !T }),
                    children: [
                        null != D && (0, l.jsx)(tJ.c, { className: sj.w$, config: D }),
                        (0, l.jsxs)("div", {
                            className: sj.iS,
                            children: [
                                S &&
                                    !T &&
                                    (0, l.jsx)(eX.l, {
                                        className: sj.ij,
                                        size: "md",
                                        location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, l.jsx)(w.L, {
                                    innerRef: t,
                                    onChange: (e) => d(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, l.jsx)(tQ, {
                                        ref: t,
                                        subscriptionTier: v,
                                        className: r()({ [sj.p7]: T, [sj.Pw]: T, [sj.AG]: y, [sj.Cv]: null != N }),
                                        isDarkMode: a,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                L,
                (0, l.jsx)(sp, { className: sj.B_ }),
                (0, l.jsx)("div", { className: sj.aC, children: (0, l.jsx)(sh.A, { className: sj.JQ, hideCTAs: !0 }) }),
                (0, l.jsx)("div", { className: sj.hz }),
                (0, l.jsx)(tH, {
                    isVisible: !c && !u && j,
                    subscriptionTier: v,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: y,
                }),
                (0, l.jsx)(w.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !x &&
                            (M.default.track(en.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: O }),
                            p(!0));
                    },
                    children: (0, l.jsx)("div", { ref: s, className: sj._Z }),
                }),
                (0, l.jsx)("img", {
                    src: sf,
                    className: sj.Kw,
                    width: 112,
                    height: 85,
                    alt: eb.intl.string(eb.t.X4IxWL),
                }),
            ],
        });
    },
    s_ = (e) => {
        let { entrypoint: t } = e,
            s = (0, G.V)(),
            i = (0, O.O)(),
            a = (0, tL.NF)({ trialOffer: s }),
            r = (0, tL.Tp)(),
            c = (0, o.bG)([L.A], () => L.A.getReminderStateId());
        return (n.useEffect(() => {
            !0 === a && (0, tL.QG)(), !0 === r && (0, tL.ne)(c), (null != s || null != i) && (0, S.u1)(s, i);
        }, [s, i, a, r, c]),
        t === ev.Mf.UserSettings)
            ? (0, l.jsx)(sA, {})
            : t === ev.Mf.ApplicationStoreHome
              ? (0, l.jsx)(tG, {})
              : null;
    };
var sC = s(972119);
let sE = function (e) {
    let { entrypoint: t = ev.Mf.UserSettings } = e;
    (0, C.P)(_.b);
    let s = (0, f.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: a } = (0, g.Ay)(h.A.PREMIUM_MARKETING),
        L = (0, o.bG)([b.A], () => b.A.hasFetchedSubscriptions()),
        w = (0, o.bG)([T.A], () => T.A.hasFetchedPaymentSources),
        k = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        U = k?.id,
        B = (0, G.V)(),
        F = (0, O.O)(),
        H = (0, N.Y)(ev.T7),
        [z, V] = n.useState(!0),
        W = n.useRef(0),
        K = (0, y.YE)(k, ev.PremiumTypes.TIER_2);
    (0, D.b)(),
        n.useEffect(() => {
            u.h.wait(async () => {
                let e = Date.now();
                await Promise.all([j.hP(), j.$o(), (0, m.zS)(null, null, en.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    V(!1);
            });
        }, []),
        n.useEffect(() => {
            z ||
                M.default.track(en.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: W.current,
                });
        }, [i, z]),
        n.useEffect(() => {
            s && (null != B || null != F) && (0, S.u1)(B, F);
        }, [s, B, F]);
    let Y = (0, c.zy)(),
        Z = n.useRef(!1),
        Q = L && w && H,
        [X, J] = n.useState(Q);
    Q && !X && J(!0),
        n.useEffect(() => {
            if (Z.current || !Q) return;
            let e = new URLSearchParams(Y.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: ev.pe.TIER_0, nitro: ev.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, v.bG)(en.BVt.APPLICATION_STORE),
                (0, E.A)({ subscriptionTier: t, analyticsLocations: a }));
        }, [Q, Y.search, a]);
    let q = (0, o.bG)([I.A], () => I.A.enabled),
        $ = t === ev.Mf.ApplicationStoreHome,
        ee = q
            ? (0, l.jsx)(x.A, {})
            : s
              ? (0, l.jsx)(A.uK, {})
              : $ && K
                ? (0, l.jsx)(g.f5, { value: a, children: (0, l.jsx)(P.Ay, { userId: U }) })
                : X
                  ? null
                  : (0, l.jsx)("div", { className: r()(sC.kL, sC.Lq), children: (0, l.jsx)(d.y, {}) });
    return null != ee
        ? (0, l.jsxs)(l.Fragment, { children: [$ && (0, l.jsx)(p.A, {}), ee] })
        : (0, l.jsx)(g.f5, { value: a, children: (0, l.jsx)(s_, { entrypoint: t }) });
};
