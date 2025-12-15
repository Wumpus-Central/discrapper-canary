n.d(t, {
    IY: () => ee,
    Ub: () => $,
    fm: () => H,
    nT: () => q,
    ql: () => Y,
    rS: () => J,
    uZ: () => z,
    wp: () => X,
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
    p = n(706454),
    _ = n(594174),
    m = n(78839),
    h = n(483444),
    g = n(599250),
    E = n(942659),
    b = n(357355),
    y = n(367074),
    O = n(140465),
    v = n(347896),
    S = n(33052),
    I = n(622909),
    T = n(639119),
    C = n(784238),
    A = n(230916),
    N = n(346497),
    P = n(382791),
    R = n(63802),
    w = n(52741),
    D = n(318990),
    x = n(106646),
    L = n(575732),
    j = n(474936),
    M = n(217702),
    k = n(388032),
    U = n(974131),
    G = n(529663),
    Z = n(107283),
    F = n(476945),
    B = n(945182);
function V(e) {
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
            [U.featureItem]: u,
            [U.featureItemApplicationHome]: u && c,
        }),
        children: [
            (0, r.jsx)(t, {
                className: u ? G.smallIcon : G.icon,
                color: "currentColor",
            }),
            (0, r.jsx)(l.Text, {
                variant: null != s ? s : "text-md/normal",
                color: u || c ? "currentColor" : "always-white",
                children: n,
            }),
            i
                ? (0, r.jsx)(f.Z, {
                      className: G.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function H(e) {
    let { isApplicationHome: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: x.t7.map((e, n) => {
            let { Icon: i, getText: a } = e;
            return (0, r.jsx)(
                V,
                {
                    Icon: i,
                    text: a(),
                    className: G.itemApplicationHome,
                    textVariant: "text-sm/normal",
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: t,
                },
                n,
            );
        }),
    });
}
function Y(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n } = e,
        i = t && !n ? L.X : L.FV;
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: o } = e;
            return (0, r.jsx)(
                V,
                {
                    Icon: a,
                    text: o(),
                    className: t && !n ? G.itemApplicationHome : G.itemWithWumpus,
                    textVariant: t && !n ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function W(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: s, isGift: l = !1, priceOptions: c } = e,
        u = (0, o.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        d = (0, T.N)(),
        f = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        p = !!(null == u ? void 0 : u.hasActiveTrial),
        _ = null != f || p;
    return (0, r.jsxs)("div", {
        className: a()(G.tier0, G.card, G.tier0ApplicationHomeBackground, s, {
            [G.withTier0Rim]: !l && _,
            [G.withCardHover]: !l && _,
        }),
        children: [
            (0, r.jsx)("img", {
                src: Z,
                className: G.applicationHomeStarBackground,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(E.Z, { className: a()(G.title, G.tier0ApplicationHomeTitle) }),
                            (0, r.jsx)(w.Z, {
                                isGift: l,
                                premiumTier: j.PremiumTypes.TIER_0,
                                offerType: j.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: f === j.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { children: (0, r.jsx)(Y, { isApplicationHome: !0 }) }),
                ],
            }),
            n,
        ],
    });
}
function K(e) {
    var t;
    let { showWumpus: n, ctaButton: i, showYearlyPrice: s, className: c, isGift: u = !1, priceOptions: d } = e,
        f = (0, o.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        p = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        h = (0, T.N)(),
        E = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id,
        b = !!(null == f ? void 0 : f.hasActiveTrial),
        y = b ? (null == p ? void 0 : p.premiumType) : null,
        O = null != E || b,
        v = (0, P.y_)(y, E);
    return (0, r.jsxs)("div", {
        className: a()(G.tier0, G.card, c, {
            [G.withTier0Rim]: !u && O,
            [G.withCardHover]: !u && O,
        }),
        children: [
            !u &&
                null != v &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(P.Cy, {
                            text: v,
                            className: G.topRimPill,
                            colorOptions: P.VE.PREMIUM_TIER_0_WHITE_FILL,
                        }),
                        (0, r.jsx)("div", { className: G.rimGlowTier0 }),
                    ],
                }),
            n
                ? (0, r.jsx)("div", {
                      className: G.wumpusImageContainer,
                      children: (0, r.jsx)(l.Eep, {
                          src: F,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: G.wumpusImage,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(g.Z, { className: a()(G.title, G.tier0Title) }),
                            (0, r.jsx)(w.Z, {
                                isGift: u,
                                premiumTier: j.PremiumTypes.TIER_0,
                                offerType: j.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: E === j.Si.TIER_0,
                                showYearlyPrice: s,
                                priceOptions: d,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { children: (0, r.jsx)(Y, {}) }),
                ],
            }),
            u || E !== j.Si.TIER_0 ? null : (0, r.jsx)(R.t, { tier: j.PremiumTypes.TIER_0 }),
            i,
        ],
    });
}
var z = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.BOOSTING = 1)] = "BOOSTING"),
        (e[(e.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
        (e[(e.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
        (e[(e.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
        (e[(e.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
        e
    );
})({});
function q(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: i = !1,
            enablePremiumBrandRefresh: s = !1,
            isApplicationHome: c = !1,
            firstFeatureItemClassName: u,
        } = e,
        d = (0, o.e7)([p.default], () => p.default.locale),
        f = (0, o.e7)([b.Z], () => b.Z.affinities),
        _ = !s && n && !i && f.length > 0,
        m = 3 === t || 0 === t,
        h = 3 === t || (0 === t && s && c),
        g = (() => {
            switch (t) {
                case 3:
                    return L.CD;
                case 1:
                    return L.x7;
                case 2:
                    return L.Pc;
                case 4:
                    return x.Uo;
                case 5:
                    return x._J;
                default:
                    return L.Nv;
            }
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h &&
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/bold",
                    className: s ? U.tier2ApplicationHomeSubheader : G.tier2ApplicationHomeSubheader,
                    children: k.intl.string(k.t.AozD3Q),
                }),
            g.map((e, n) => {
                let { Icon: i, getText: o } = e;
                return (0, r.jsx)(
                    V,
                    {
                        Icon: i,
                        text: o(d),
                        className: a()(3 === t ? G.itemApplicationHome : G.itemWithWumpus, 0 === n ? u : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: c,
                        enablePremiumBrandRefresh: s,
                    },
                    n,
                );
            }),
            _ && m && (0, r.jsx)(D.Z, {}),
        ],
    });
}
function Q(e) {
    var t, n, i, o;
    let {
            ctaButton: s,
            showYearlyPrice: c,
            featureSet: u = 0,
            className: d,
            isGift: f = !1,
            isModal: p = !1,
            priceOptions: _,
            showPromotionalGiftBanner: m = !1,
        } = e,
        g = (0, T.N)(),
        E = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        b = (0, O.Nx)(),
        C = (0, I.N)(),
        P = null != g ? j.C.PREMIUM_TRIAL : null != C ? j.C.PREMIUM_DISCOUNT : null,
        R = (0, y.Vi)(),
        D = !f && b,
        x = null == (n = (0, v.Z)()) ? void 0 : n.planSelection,
        L = null == x || null == (i = x.getBackgroundImageUrl) ? void 0 : i.call(x),
        M = null == x || null == (o = x.getCardImageUrl) ? void 0 : o.call(x),
        k = (0, N.W)();
    return (0, r.jsxs)("div", {
        className: a()(G.card, G.tier2, G.tier2ApplicationHomeBackground, d, {
            [G.withTier2Rim]: D,
            [G.withCardHover]: D,
            [G.withPromotionalGradientBanner]: m,
            [G.withPromotionalCardImage]: m && null != M,
        }),
        children: [
            m &&
                null != M &&
                (0, r.jsx)("img", {
                    className: G.promotionalCardImage,
                    alt: "",
                    src: M,
                }),
            m &&
                null != L &&
                (0, r.jsx)("img", {
                    className: G.promotionalBackgroundImage,
                    alt: "",
                    src: L,
                }),
            (0, r.jsx)("div", { className: G.tier2SideGradient }),
            (0, r.jsx)("img", {
                src: Z,
                className: G.applicationHomeStarBackground,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(h.Z, { className: a()(G.title, G.tier2ApplicationHomeTitle) }),
                            !f &&
                                E !== j.Si.TIER_2 &&
                                R &&
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-xs/bold",
                                        className: G.freeTrialPillInline,
                                        children: k,
                                    }),
                                }),
                            (0, r.jsx)(w.Z, {
                                isGift: f,
                                premiumTier: j.PremiumTypes.TIER_2,
                                offerType: P,
                                offerTierMatchesCard: E === j.Si.TIER_2 || (0, A.Wp)(C, j.Si.TIER_2),
                                showYearlyPrice: c,
                                priceOptions: _,
                                textVariant: "heading-xl/normal",
                                isApplicationHome: !0,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(q, {
                            featureSet: u,
                            isModal: p,
                            isGift: f,
                            isApplicationHome: !0,
                        }),
                    }),
                ],
            }),
            s,
            m && (0, r.jsx)(S.K, {}),
        ],
    });
}
function X(e) {
    var t, n, i, u;
    let {
            showWumpus: d,
            ctaButton: f,
            showYearlyPrice: p,
            featureSet: g = 0,
            className: E,
            isGift: b = !1,
            isModal: C = !1,
            priceOptions: D,
            showPromotionalGiftBanner: x = !1,
        } = e,
        L = (0, o.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()),
        k = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        U = (0, T.N)(),
        Z = null == U || null == (t = U.subscription_trial) ? void 0 : t.sku_id,
        F = (null == L ? void 0 : L.hasActiveTrial) ? (null == k ? void 0 : k.premiumType) : null,
        V = (0, O.Nx)(),
        H = (0, I.N)(),
        Y = (0, O.t7)(),
        W = null != Z || null != F ? j.C.PREMIUM_TRIAL : null != H || Y ? j.C.PREMIUM_DISCOUNT : null,
        K = (0, y.Vi)(),
        z = !b && V,
        Q = null == (n = (0, v.Z)()) ? void 0 : n.planSelection,
        X = null == Q || null == (i = Q.getBackgroundImageUrl) ? void 0 : i.call(Q),
        J = null == Q || null == (u = Q.getCardImageUrl) ? void 0 : u.call(Q),
        $ = (0, N.W)(),
        ee = (0, s.ap)((0, c.ZP)()),
        et = ee ? P.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : P.VE.PREMIUM_TIER_2_WHITE_FILL,
        en = (0, P.A1)(Y, F, H, U, Z),
        er = z && !ee ? G.rimGlowTier2 : void 0;
    return (0, r.jsxs)("div", {
        className: a()(G.card, G.tier2, E, {
            [G.withTier2Rim]: z,
            [G.withCardHover]: z,
            [G.withPromotionalGradientBanner]: x,
            [G.withPromotionalCardImage]: x && null != J,
        }),
        children: [
            x &&
                null !== J &&
                (0, r.jsx)("img", {
                    className: G.promotionalCardImage,
                    alt: "",
                    src: J,
                }),
            x &&
                null !== X &&
                (0, r.jsx)("img", {
                    className: G.promotionalBackgroundImage,
                    alt: "",
                    src: X,
                }),
            !b &&
                null != en &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(P.Cy, {
                            text: en,
                            className: G.topRimPill,
                            colorOptions: et,
                        }),
                        (0, r.jsx)("div", { className: er }),
                    ],
                }),
            d
                ? (0, r.jsx)("div", {
                      className: G.wumpusImageContainer,
                      children: (0, r.jsx)(l.Eep, {
                          src: B,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: G.wumpusImage,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(h.Z, { className: a()(G.title, G.tier2Title) }),
                            !b &&
                                Z !== j.Si.TIER_2 &&
                                K &&
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-xs/bold",
                                        className: G.freeTrialPillInline,
                                        children: $,
                                    }),
                                }),
                            (0, r.jsx)(w.Z, {
                                isGift: b,
                                premiumTier: j.PremiumTypes.TIER_2,
                                offerType: W,
                                offerTierMatchesCard: Z === j.Si.TIER_2 || (0, A.Wp)(H, j.Si.TIER_2),
                                showYearlyPrice: p,
                                priceOptions: D,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(q, {
                            featureSet: g,
                            isModal: C,
                            isGift: b,
                        }),
                    }),
                ],
            }),
            b || (Z !== j.Si.TIER_2 && null == H) ? null : (0, r.jsx)(R.t, { tier: j.PremiumTypes.TIER_2 }),
            f,
            x && (0, r.jsx)(S.K, {}),
        ],
    });
}
let J = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function $(e) {
    let { innerRef: t, hasActiveTier2PremiumPromotion: n, className: i } = e,
        { analyticsLocations: o } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD),
        s = J(t),
        c = (0, r.jsx)(C.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: j.Si.TIER_0,
            className: G.subButton,
            textOptions: { textClassName: G.v2SubButtonText },
            buttonShineClassName: G.buttonShine,
        }),
        f = (0, r.jsx)(C.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: j.Si.TIER_2,
            className: G.subButton,
            hasActivePromotion: n,
            textOptions: { textClassName: G.v2SubButtonText },
            buttonShineClassName: G.buttonShine,
        });
    return (0, r.jsxs)(d.Gt, {
        value: o,
        children: [
            (0, r.jsx)(l.Heading, {
                ref: s,
                className: G.applicationHomeTierCardSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: k.intl.string(k.t.vLz3Zs),
            }),
            (0, r.jsxs)("div", {
                ref: s,
                className: a()(G.premiumCards, i),
                children: [
                    (0, r.jsx)(W, { ctaButton: c }),
                    (0, r.jsx)(Q, {
                        ctaButton: f,
                        featureSet: 3,
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { innerRef: t, className: n, tier0CTAButton: i, tier2CTAButton: o } = e,
        { analyticsLocations: s } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD),
        l = J(t);
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsxs)("div", {
            ref: l,
            className: a()(G.premiumCards, n),
            children: [
                (0, r.jsx)(K, {
                    showWumpus: !0,
                    ctaButton: i,
                }),
                (0, r.jsx)(X, {
                    showWumpus: !0,
                    ctaButton: o,
                }),
            ],
        }),
    });
}
