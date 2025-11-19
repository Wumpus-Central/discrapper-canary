n.d(t, {
    Gq: () => Y,
    IY: () => J,
    Ub: () => Q,
    nT: () => K,
    ql: () => V,
    rS: () => X,
    uZ: () => W,
    wp: () => q,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    f = n(535322),
    _ = n(706454),
    p = n(594174),
    h = n(78839),
    m = n(483444),
    g = n(599250),
    E = n(942659),
    b = n(357355),
    y = n(367074),
    O = n(140465),
    v = n(347896),
    I = n(33052),
    T = n(622909),
    S = n(639119),
    A = n(784238),
    C = n(230916),
    N = n(346497),
    R = n(382791),
    P = n(63802),
    D = n(52741),
    w = n(318990),
    L = n(575732),
    x = n(474936),
    M = n(217702),
    k = n(388032),
    j = n(1721),
    U = n(740150),
    G = n(107283),
    B = n(476945),
    Z = n(945182);
function F(e) {
    let {
        Icon: t,
        text: n,
        isNew: i = !1,
        className: o,
        textVariant: s,
        isApplicationHome: c,
        enablePremiumBrandRefresh: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(o, {
            [j.featureItem]: u,
            [j.featureItemApplicationHome]: u && c,
        }),
        children: [
            (0, r.jsx)(t, {
                className: u ? U.smallIcon : U.icon,
                color: "currentColor",
            }),
            (0, r.jsx)(l.Text, {
                variant: null != s ? s : "text-md/normal",
                color: u || c ? "currentColor" : "always-white",
                children: n,
            }),
            i
                ? (0, r.jsx)(f.Z, {
                      className: U.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function V(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n } = e,
        i = t && !n ? L.X : L.FV;
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: o } = e;
            return (0, r.jsx)(
                F,
                {
                    Icon: a,
                    text: o(),
                    className: t && !n ? U.itemApplicationHome : U.itemWithWumpus,
                    textVariant: t && !n ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function H(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: s, isGift: l = !1, priceOptions: c } = e,
        u = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        d = (0, S.N)(),
        f = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        _ = !!(null == u ? void 0 : u.hasActiveTrial),
        p = null != f || _;
    return (0, r.jsxs)("div", {
        className: a()(U.tier0, U.card, U.tier0ApplicationHomeBackground, s, {
            [U.withTier0Rim]: !l && p,
            [U.withCardHover]: !l && p,
        }),
        children: [
            (0, r.jsx)("img", {
                src: G,
                className: U.applicationHomeStarBackground,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(E.Z, { className: a()(U.title, U.tier0ApplicationHomeTitle) }),
                            (0, r.jsx)(D.Z, {
                                isGift: l,
                                premiumTier: x.PremiumTypes.TIER_0,
                                offerType: x.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: f === x.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { children: (0, r.jsx)(V, { isApplicationHome: !0 }) }),
                ],
            }),
            n,
        ],
    });
}
function Y(e) {
    var t;
    let { showWumpus: n, ctaButton: i, showYearlyPrice: s, className: c, isGift: u = !1, priceOptions: d } = e,
        f = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        _ = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        m = (0, S.N)(),
        E = null == m || null == (t = m.subscription_trial) ? void 0 : t.sku_id,
        b = !!(null == f ? void 0 : f.hasActiveTrial),
        y = b ? (null == _ ? void 0 : _.premiumType) : null,
        O = null != E || b,
        v = (0, R.y_)(y, E);
    return (0, r.jsxs)("div", {
        className: a()(U.tier0, U.card, c, {
            [U.withTier0Rim]: !u && O,
            [U.withCardHover]: !u && O,
        }),
        children: [
            !u &&
                null != v &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R.Cy, {
                            text: v,
                            className: U.topRimPill,
                            colorOptions: R.VE.PREMIUM_TIER_0_WHITE_FILL,
                        }),
                        (0, r.jsx)("div", { className: U.rimGlowTier0 }),
                    ],
                }),
            n
                ? (0, r.jsx)("div", {
                      className: U.wumpusImageContainer,
                      children: (0, r.jsx)(l.Eep, {
                          src: B,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(g.Z, { className: a()(U.title, U.tier0Title) }),
                            (0, r.jsx)(D.Z, {
                                isGift: u,
                                premiumTier: x.PremiumTypes.TIER_0,
                                offerType: x.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: E === x.Si.TIER_0,
                                showYearlyPrice: s,
                                priceOptions: d,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { children: (0, r.jsx)(V, {}) }),
                ],
            }),
            u || E !== x.Si.TIER_0 ? null : (0, r.jsx)(P.t, { tier: x.PremiumTypes.TIER_0 }),
            i,
        ],
    });
}
var W = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.BOOSTING = 1)] = "BOOSTING"),
        (e[(e.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
        (e[(e.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
        e
    );
})({});
function K(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: i = !1,
            enablePremiumBrandRefresh: s = !1,
            isApplicationHome: c = !1,
            firstFeatureItemClassName: u,
        } = e,
        d = (0, o.e7)([_.default], () => _.default.locale),
        f = (0, o.e7)([b.Z], () => b.Z.affinities),
        p = !s && n && !i && f.length > 0,
        h = 3 === t || 0 === t,
        m = 3 === t || (0 === t && s && c),
        g = (() => {
            switch (t) {
                case 3:
                    return L.CD;
                case 1:
                    return L.x7;
                case 2:
                    return L.Pc;
                default:
                    return L.Nv;
            }
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m &&
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/bold",
                    className: s ? j.tier2ApplicationHomeSubheader : U.tier2ApplicationHomeSubheader,
                    children: k.intl.string(k.t.AozD3Q),
                }),
            g.map((e, n) => {
                let { Icon: i, getText: o } = e;
                return (0, r.jsx)(
                    F,
                    {
                        Icon: i,
                        text: o(d),
                        className: a()(3 === t ? U.itemApplicationHome : U.itemWithWumpus, 0 === n ? u : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: c,
                        enablePremiumBrandRefresh: s,
                    },
                    n,
                );
            }),
            p && h && (0, r.jsx)(w.Z, {}),
        ],
    });
}
function z(e) {
    var t, n, i, o;
    let {
            ctaButton: s,
            showYearlyPrice: c,
            featureSet: u = 0,
            className: d,
            isGift: f = !1,
            isModal: _ = !1,
            priceOptions: p,
            showPromotionalGiftBanner: h = !1,
        } = e,
        g = (0, S.N)(),
        E = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        b = (0, O.Nx)(),
        A = (0, T.N)(),
        R = null != g ? x.C.PREMIUM_TRIAL : null != A ? x.C.PREMIUM_DISCOUNT : null,
        P = (0, y.Vi)(),
        w = !f && b,
        L = null == (n = (0, v.Z)()) ? void 0 : n.planSelection,
        M = null == L || null == (i = L.getBackgroundImageUrl) ? void 0 : i.call(L),
        k = null == L || null == (o = L.getCardImageUrl) ? void 0 : o.call(L),
        j = (0, N.W)();
    return (0, r.jsxs)("div", {
        className: a()(U.card, U.tier2, U.tier2ApplicationHomeBackground, d, {
            [U.withTier2Rim]: w,
            [U.withCardHover]: w,
            [U.withPromotionalGradientBanner]: h,
            [U.withPromotionalCardImage]: h && null != k,
        }),
        children: [
            h &&
                null != k &&
                (0, r.jsx)("img", {
                    className: U.promotionalCardImage,
                    alt: "",
                    src: k,
                }),
            h &&
                null != M &&
                (0, r.jsx)("img", {
                    className: U.promotionalBackgroundImage,
                    alt: "",
                    src: M,
                }),
            (0, r.jsx)("div", { className: U.tier2SideGradient }),
            (0, r.jsx)("img", {
                src: G,
                className: U.applicationHomeStarBackground,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(m.Z, { className: a()(U.title, U.tier2ApplicationHomeTitle) }),
                            !f &&
                                E !== x.Si.TIER_2 &&
                                P &&
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-xs/bold",
                                        className: U.freeTrialPillInline,
                                        children: j,
                                    }),
                                }),
                            (0, r.jsx)(D.Z, {
                                isGift: f,
                                premiumTier: x.PremiumTypes.TIER_2,
                                offerType: R,
                                offerTierMatchesCard: E === x.Si.TIER_2 || (0, C.Wp)(A, x.Si.TIER_2),
                                showYearlyPrice: c,
                                priceOptions: p,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(K, {
                            featureSet: u,
                            isModal: _,
                            isGift: f,
                            isApplicationHome: !0,
                        }),
                    }),
                ],
            }),
            s,
            h && (0, r.jsx)(I.K, {}),
        ],
    });
}
function q(e) {
    var t, n, i, u;
    let {
            showWumpus: d,
            ctaButton: f,
            showYearlyPrice: _,
            featureSet: g = 0,
            className: E,
            isGift: b = !1,
            isModal: A = !1,
            priceOptions: w,
            showPromotionalGiftBanner: L = !1,
        } = e,
        k = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        j = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        G = (0, S.N)(),
        B = null == G || null == (t = G.subscription_trial) ? void 0 : t.sku_id,
        F = (null == k ? void 0 : k.hasActiveTrial) ? (null == j ? void 0 : j.premiumType) : null,
        V = (0, O.Nx)(),
        H = (0, T.N)(),
        Y = (0, O.t7)(),
        W = null != B || null != F ? x.C.PREMIUM_TRIAL : null != H || Y ? x.C.PREMIUM_DISCOUNT : null,
        z = (0, y.Vi)(),
        q = !b && V,
        X = null == (n = (0, v.Z)()) ? void 0 : n.planSelection,
        Q = null == X || null == (i = X.getBackgroundImageUrl) ? void 0 : i.call(X),
        J = null == X || null == (u = X.getCardImageUrl) ? void 0 : u.call(X),
        $ = (0, N.W)(),
        ee = (0, s.ap)((0, c.ZP)()),
        et = ee ? R.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : R.VE.PREMIUM_TIER_2_WHITE_FILL,
        en = (0, R.A1)(Y, F, H, G, B),
        er = q && !ee ? U.rimGlowTier2 : void 0;
    return (0, r.jsxs)("div", {
        className: a()(U.card, U.tier2, E, {
            [U.withTier2Rim]: q,
            [U.withCardHover]: q,
            [U.withPromotionalGradientBanner]: L,
            [U.withPromotionalCardImage]: L && null != J,
        }),
        children: [
            L &&
                null !== J &&
                (0, r.jsx)("img", {
                    className: U.promotionalCardImage,
                    alt: "",
                    src: J,
                }),
            L &&
                null !== Q &&
                (0, r.jsx)("img", {
                    className: U.promotionalBackgroundImage,
                    alt: "",
                    src: Q,
                }),
            !b &&
                null != en &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R.Cy, {
                            text: en,
                            className: U.topRimPill,
                            colorOptions: et,
                        }),
                        (0, r.jsx)("div", { className: er }),
                    ],
                }),
            d
                ? (0, r.jsx)("div", {
                      className: U.wumpusImageContainer,
                      children: (0, r.jsx)(l.Eep, {
                          src: Z,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(m.Z, { className: a()(U.title, U.tier2Title) }),
                            !b &&
                                B !== x.Si.TIER_2 &&
                                z &&
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-xs/bold",
                                        className: U.freeTrialPillInline,
                                        children: $,
                                    }),
                                }),
                            (0, r.jsx)(D.Z, {
                                isGift: b,
                                premiumTier: x.PremiumTypes.TIER_2,
                                offerType: W,
                                offerTierMatchesCard: B === x.Si.TIER_2 || (0, C.Wp)(H, x.Si.TIER_2),
                                showYearlyPrice: _,
                                priceOptions: w,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(K, {
                            featureSet: g,
                            isModal: A,
                            isGift: b,
                        }),
                    }),
                ],
            }),
            b || (B !== x.Si.TIER_2 && null == H) ? null : (0, r.jsx)(P.t, { tier: x.PremiumTypes.TIER_2 }),
            f,
            L && (0, r.jsx)(I.K, {}),
        ],
    });
}
let X = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function Q(e) {
    let { innerRef: t, hasActiveTier2PremiumPromotion: n, className: i } = e,
        { analyticsLocations: o } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD),
        s = X(t),
        c = (0, r.jsx)(A.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: x.Si.TIER_0,
            className: U.subButton,
            textOptions: { textClassName: U.v2SubButtonText },
            buttonShineClassName: U.buttonShine,
        }),
        f = (0, r.jsx)(A.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: x.Si.TIER_2,
            className: U.subButton,
            hasActivePromotion: n,
            textOptions: { textClassName: U.v2SubButtonText },
            buttonShineClassName: U.buttonShine,
        });
    return (0, r.jsxs)(d.Gt, {
        value: o,
        children: [
            (0, r.jsx)(l.Heading, {
                ref: s,
                className: U.applicationHomeTierCardSectionHeader,
                variant: "display-md",
                color: "header-primary",
                children: k.intl.string(k.t.vLz3Zs),
            }),
            (0, r.jsxs)("div", {
                ref: s,
                className: a()(U.premiumCards, i),
                children: [
                    (0, r.jsx)(H, { ctaButton: c }),
                    (0, r.jsx)(z, {
                        ctaButton: f,
                        featureSet: 3,
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { innerRef: t, className: n, tier0CTAButton: i, tier2CTAButton: o } = e,
        { analyticsLocations: s } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD),
        l = X(t);
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsxs)("div", {
            ref: l,
            className: a()(U.premiumCards, n),
            children: [
                (0, r.jsx)(Y, {
                    showWumpus: !0,
                    ctaButton: i,
                }),
                (0, r.jsx)(q, {
                    showWumpus: !0,
                    ctaButton: o,
                }),
            ],
        }),
    });
}
