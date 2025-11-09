n.d(t, {
    Gq: () => H,
    IY: () => Q,
    Ub: () => X,
    nT: () => W,
    ql: () => F,
    rS: () => q,
    uZ: () => Y,
    wp: () => z,
});
var r = n(951288);
n(647438);
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
    S = n(104494),
    T = n(639119),
    A = n(784238),
    C = n(346497),
    N = n(382791),
    R = n(63802),
    P = n(52741),
    w = n(318990),
    D = n(575732),
    x = n(474936),
    L = n(217702),
    M = n(388032),
    j = n(518520),
    k = n(163594),
    U = n(107283),
    G = n(476945),
    B = n(945182);
function Z(e) {
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
                className: u ? k.smallIcon : k.icon,
                color: "currentColor",
            }),
            (0, r.jsx)(l.Text, {
                variant: null != s ? s : "text-md/normal",
                color: u || c ? "currentColor" : "always-white",
                children: n,
            }),
            i
                ? (0, r.jsx)(f.Z, {
                      className: k.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function F(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n } = e,
        i = t && !n ? D.X : D.FV;
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: o } = e;
            return (0, r.jsx)(
                Z,
                {
                    Icon: a,
                    text: o(),
                    className: t && !n ? k.itemApplicationHome : k.itemWithWumpus,
                    textVariant: t && !n ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function V(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: s, isGift: l = !1, priceOptions: c } = e,
        u = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        d = (0, T.N)(),
        f = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        _ = !!(null == u ? void 0 : u.hasActiveTrial),
        p = null != f || _;
    return (0, r.jsxs)("div", {
        className: a()(k.tier0, k.card, k.tier0ApplicationHomeBackground, s, {
            [k.withTier0Rim]: !l && p,
            [k.withCardHover]: !l && p,
        }),
        children: [
            (0, r.jsx)("img", {
                src: U,
                className: k.applicationHomeStarBackground,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(E.Z, { className: a()(k.title, k.tier0ApplicationHomeTitle) }),
                            (0, r.jsx)(P.Z, {
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
                    (0, r.jsx)("div", { children: (0, r.jsx)(F, { isApplicationHome: !0 }) }),
                ],
            }),
            n,
        ],
    });
}
function H(e) {
    var t;
    let { showWumpus: n, ctaButton: i, showYearlyPrice: s, className: c, isGift: u = !1, priceOptions: d } = e,
        f = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        _ = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        m = (0, T.N)(),
        E = null == m || null == (t = m.subscription_trial) ? void 0 : t.sku_id,
        b = !!(null == f ? void 0 : f.hasActiveTrial),
        y = b ? (null == _ ? void 0 : _.premiumType) : null,
        O = null != E || b,
        v = (0, N.y_)(y, E);
    return (0, r.jsxs)("div", {
        className: a()(k.tier0, k.card, c, {
            [k.withTier0Rim]: !u && O,
            [k.withCardHover]: !u && O,
        }),
        children: [
            !u &&
                null != v &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(N.Cy, {
                            text: v,
                            className: k.topRimPill,
                            colorOptions: N.VE.PREMIUM_TIER_0_WHITE_FILL,
                        }),
                        (0, r.jsx)("div", { className: k.rimGlowTier0 }),
                    ],
                }),
            n
                ? (0, r.jsx)("div", {
                      className: k.wumpusImageContainer,
                      children: (0, r.jsx)(l.Eep, {
                          src: G,
                          mediaLayoutType: L.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.wumpusImage,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(g.Z, { className: a()(k.title, k.tier0Title) }),
                            (0, r.jsx)(P.Z, {
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
                    (0, r.jsx)("div", { children: (0, r.jsx)(F, {}) }),
                ],
            }),
            u || E !== x.Si.TIER_0 ? null : (0, r.jsx)(R.t, { tier: x.PremiumTypes.TIER_0 }),
            i,
        ],
    });
}
var Y = (function (e) {
    return (
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
        (e[(e.BOOSTING = 1)] = "BOOSTING"),
        (e[(e.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
        (e[(e.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
        e
    );
})({});
function W(e) {
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
                    return D.CD;
                case 1:
                    return D.x7;
                case 2:
                    return D.Pc;
                default:
                    return D.Nv;
            }
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m &&
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/bold",
                    className: s ? j.tier2ApplicationHomeSubheader : k.tier2ApplicationHomeSubheader,
                    children: M.intl.string(M.t.AozD3Q),
                }),
            g.map((e, n) => {
                let { Icon: i, getText: o } = e;
                return (0, r.jsx)(
                    Z,
                    {
                        Icon: i,
                        text: o(d),
                        className: a()(3 === t ? k.itemApplicationHome : k.itemWithWumpus, 0 === n ? u : void 0),
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
function K(e) {
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
        g = (0, T.N)(),
        E = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        b = (0, O.Nx)(),
        A = (0, S.Ng)(),
        N = null != g ? x.C.PREMIUM_TRIAL : null != A ? x.C.PREMIUM_DISCOUNT : null,
        R = (0, y.Vi)(),
        w = !f && b,
        D = null == (n = (0, v.Z)()) ? void 0 : n.planSelection,
        L = null == D || null == (i = D.getBackgroundImageUrl) ? void 0 : i.call(D),
        M = null == D || null == (o = D.getCardImageUrl) ? void 0 : o.call(D),
        j = (0, C.W)();
    return (0, r.jsxs)("div", {
        className: a()(k.card, k.tier2, k.tier2ApplicationHomeBackground, d, {
            [k.withTier2Rim]: w,
            [k.withCardHover]: w,
            [k.withPromotionalGradientBanner]: h,
            [k.withPromotionalCardImage]: h && null != M,
        }),
        children: [
            h &&
                null != M &&
                (0, r.jsx)("img", {
                    className: k.promotionalCardImage,
                    alt: "",
                    src: M,
                }),
            h &&
                null != L &&
                (0, r.jsx)("img", {
                    className: k.promotionalBackgroundImage,
                    alt: "",
                    src: L,
                }),
            (0, r.jsx)("div", { className: k.tier2SideGradient }),
            (0, r.jsx)("img", {
                src: U,
                className: k.applicationHomeStarBackground,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(m.Z, { className: a()(k.title, k.tier2ApplicationHomeTitle) }),
                            !f &&
                                E !== x.Si.TIER_2 &&
                                R &&
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-xs/bold",
                                        className: k.freeTrialPillInline,
                                        children: j,
                                    }),
                                }),
                            (0, r.jsx)(P.Z, {
                                isGift: f,
                                premiumTier: x.PremiumTypes.TIER_2,
                                offerType: N,
                                offerTierMatchesCard: E === x.Si.TIER_2 || (0, S.Wp)(A, x.Si.TIER_2),
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
                        children: (0, r.jsx)(W, {
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
function z(e) {
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
            showPromotionalGiftBanner: D = !1,
        } = e,
        M = (0, o.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
        j = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        U = (0, T.N)(),
        G = null == U || null == (t = U.subscription_trial) ? void 0 : t.sku_id,
        Z = (null == M ? void 0 : M.hasActiveTrial) ? (null == j ? void 0 : j.premiumType) : null,
        F = (0, O.Nx)(),
        V = (0, S.Ng)(),
        H = (0, O.t7)(),
        Y = null != G || null != Z ? x.C.PREMIUM_TRIAL : null != V || H ? x.C.PREMIUM_DISCOUNT : null,
        K = (0, y.Vi)(),
        z = !b && F,
        q = null == (n = (0, v.Z)()) ? void 0 : n.planSelection,
        X = null == q || null == (i = q.getBackgroundImageUrl) ? void 0 : i.call(q),
        Q = null == q || null == (u = q.getCardImageUrl) ? void 0 : u.call(q),
        J = (0, C.W)(),
        $ = (0, s.ap)((0, c.ZP)()),
        ee = $ ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : N.VE.PREMIUM_TIER_2_WHITE_FILL,
        et = (0, N.A1)(H, Z, V, U, G),
        en = z && !$ ? k.rimGlowTier2 : void 0;
    return (0, r.jsxs)("div", {
        className: a()(k.card, k.tier2, E, {
            [k.withTier2Rim]: z,
            [k.withCardHover]: z,
            [k.withPromotionalGradientBanner]: D,
            [k.withPromotionalCardImage]: D && null != Q,
        }),
        children: [
            D &&
                null !== Q &&
                (0, r.jsx)("img", {
                    className: k.promotionalCardImage,
                    alt: "",
                    src: Q,
                }),
            D &&
                null !== X &&
                (0, r.jsx)("img", {
                    className: k.promotionalBackgroundImage,
                    alt: "",
                    src: X,
                }),
            !b &&
                null != et &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(N.Cy, {
                            text: et,
                            className: k.topRimPill,
                            colorOptions: ee,
                        }),
                        (0, r.jsx)("div", { className: en }),
                    ],
                }),
            d
                ? (0, r.jsx)("div", {
                      className: k.wumpusImageContainer,
                      children: (0, r.jsx)(l.Eep, {
                          src: B,
                          mediaLayoutType: L.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: k.wumpusImage,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(m.Z, { className: a()(k.title, k.tier2Title) }),
                            !b &&
                                G !== x.Si.TIER_2 &&
                                K &&
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(l.Text, {
                                        variant: "text-xs/bold",
                                        className: k.freeTrialPillInline,
                                        children: J,
                                    }),
                                }),
                            (0, r.jsx)(P.Z, {
                                isGift: b,
                                premiumTier: x.PremiumTypes.TIER_2,
                                offerType: Y,
                                offerTierMatchesCard: G === x.Si.TIER_2 || (0, S.Wp)(V, x.Si.TIER_2),
                                showYearlyPrice: _,
                                priceOptions: w,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(W, {
                            featureSet: g,
                            isModal: A,
                            isGift: b,
                        }),
                    }),
                ],
            }),
            b || (G !== x.Si.TIER_2 && null == V) ? null : (0, r.jsx)(R.t, { tier: x.PremiumTypes.TIER_2 }),
            f,
            D && (0, r.jsx)(I.K, {}),
        ],
    });
}
let q = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function X(e) {
    let { innerRef: t, hasActiveTier2PremiumPromotion: n, className: i } = e,
        { analyticsLocations: o } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD),
        s = q(t),
        c = (0, r.jsx)(A.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: x.Si.TIER_0,
            className: k.subButton,
            textOptions: { textClassName: k.v2SubButtonText },
            buttonShineClassName: k.buttonShine,
        }),
        f = (0, r.jsx)(A.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: x.Si.TIER_2,
            className: k.subButton,
            hasActivePromotion: n,
            textOptions: { textClassName: k.v2SubButtonText },
            buttonShineClassName: k.buttonShine,
        });
    return (0, r.jsxs)(d.Gt, {
        value: o,
        children: [
            (0, r.jsx)(l.Heading, {
                ref: s,
                className: k.applicationHomeTierCardSectionHeader,
                variant: "display-md",
                color: "header-primary",
                children: M.intl.string(M.t.vLz3Zs),
            }),
            (0, r.jsxs)("div", {
                ref: s,
                className: a()(k.premiumCards, i),
                children: [
                    (0, r.jsx)(V, { ctaButton: c }),
                    (0, r.jsx)(K, {
                        ctaButton: f,
                        featureSet: 3,
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { innerRef: t, className: n, tier0CTAButton: i, tier2CTAButton: o } = e,
        { analyticsLocations: s } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD),
        l = q(t);
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsxs)("div", {
            ref: l,
            className: a()(k.premiumCards, n),
            children: [
                (0, r.jsx)(H, {
                    showWumpus: !0,
                    ctaButton: i,
                }),
                (0, r.jsx)(z, {
                    showWumpus: !0,
                    ctaButton: o,
                }),
            ],
        }),
    });
}
