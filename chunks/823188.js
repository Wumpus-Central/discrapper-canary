i.d(t, {
    Gq: () => W,
    IY: () => $,
    Ub: () => Q,
    nT: () => X,
    ql: () => B,
    rS: () => Y,
    uZ: () => z,
    wp: () => K
});
var n,
    r = i(255367);
i(73800);
var l = i(120356),
    a = i.n(l),
    s = i(442837),
    o = i(780384),
    c = i(481060),
    u = i(410030),
    d = i(100527),
    m = i(906732),
    C = i(535322),
    p = i(706454),
    g = i(594174),
    x = i(78839),
    f = i(483444),
    h = i(599250),
    v = i(942659),
    I = i(357355),
    T = i(367074),
    j = i(140465),
    P = i(286961),
    E = i(33052),
    N = i(104494),
    _ = i(639119),
    b = i(784238),
    S = i(346497),
    R = i(382791),
    Z = i(63802),
    y = i(52741),
    w = i(318990),
    M = i(575732),
    O = i(474936),
    L = i(217702),
    H = i(388032),
    A = i(767594),
    U = i(781793),
    G = i(107283),
    k = i(476945),
    D = i(945182);
function V(e) {
    let { Icon: t, text: i, isNew: n = !1, className: l, textVariant: s, isApplicationHome: o, enablePremiumBrandRefresh: u } = e;
    return (0, r.jsxs)('div', {
        className: a()(null != l ? l : U.itemWithWumpus, {
            [A.featureItem]: u,
            [A.featureItemApplicationHome]: u && o
        }),
        children: [
            (0, r.jsx)(t, {
                className: u ? U.smallIcon : U.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(c.Text, {
                variant: null != s ? s : 'text-md/normal',
                color: u || o ? 'currentColor' : 'always-white',
                children: i
            }),
            n
                ? (0, r.jsx)(C.Z, {
                      className: U.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function B(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: i } = e,
        n = t && !i ? M.X : M.FV;
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, n) => {
            let { Icon: l, getText: a } = e;
            return (0, r.jsx)(
                V,
                {
                    Icon: l,
                    text: a(),
                    className: t ? U.itemApplicationHome : void 0,
                    textVariant: t && !i ? 'text-sm/normal' : void 0,
                    enablePremiumBrandRefresh: i,
                    isApplicationHome: t
                },
                n
            );
        })
    });
}
function F(e) {
    var t;
    let { ctaButton: i, showYearlyPrice: n, className: l, isGift: o = !1, priceOptions: c } = e,
        u = (0, s.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        d = (0, _.N)(),
        m = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        C = !!(null == u ? void 0 : u.hasActiveTrial),
        p = null != m || C;
    return (0, r.jsxs)('div', {
        className: a()(U.tier0, U.card, U.tier0ApplicationHomeBackground, l, {
            [U.withTier0Rim]: !o && p,
            [U.withCardHover]: !o && p
        }),
        children: [
            (0, r.jsx)('img', {
                src: G,
                className: U.applicationHomeStarBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(v.Z, { className: a()(U.title, U.tier0ApplicationHomeTitle) }),
                            (0, r.jsx)(y.Z, {
                                isGift: o,
                                premiumTier: O.p9.TIER_0,
                                offerType: O.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: m === O.Si.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: c,
                                textVariant: 'heading-xl/normal',
                                isApplicationHome: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(B, { isApplicationHome: !0 }) })
                ]
            }),
            i
        ]
    });
}
function W(e) {
    var t;
    let { showWumpus: i, ctaButton: n, showYearlyPrice: l, className: o, isGift: u = !1, priceOptions: d } = e,
        m = (0, s.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        C = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        p = (0, _.N)(),
        f = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id,
        v = !!(null == m ? void 0 : m.hasActiveTrial),
        I = v ? (null == C ? void 0 : C.premiumType) : null,
        T = null != f || v,
        j = (0, R.y_)(I, f);
    return (0, r.jsxs)('div', {
        className: a()(U.tier0, U.card, o, {
            [U.withTier0Rim]: !u && T,
            [U.withCardHover]: !u && T
        }),
        children: [
            !u &&
                null != j &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R.Cy, {
                            text: j,
                            className: U.topRimPill,
                            colorOptions: R.VE.PREMIUM_TIER_0_WHITE_FILL
                        }),
                        (0, r.jsx)('div', { className: U.rimGlowTier0 })
                    ]
                }),
            i
                ? (0, r.jsx)('div', {
                      className: U.wumpusImageContainer,
                      children: (0, r.jsx)(c.Eep, {
                          src: k,
                          mediaLayoutType: L.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(h.Z, { className: a()(U.title, U.tier0Title) }),
                            (0, r.jsx)(y.Z, {
                                isGift: u,
                                premiumTier: O.p9.TIER_0,
                                offerType: O.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: f === O.Si.TIER_0,
                                showYearlyPrice: l,
                                priceOptions: d,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(B, {}) })
                ]
            }),
            u || f !== O.Si.TIER_0 ? null : (0, r.jsx)(Z.t, { tier: O.p9.TIER_0 }),
            n
        ]
    });
}
var z = (((n = {})[(n.DEFAULT = 0)] = 'DEFAULT'), (n[(n.BOOSTING = 1)] = 'BOOSTING'), (n[(n.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (n[(n.APPLICATION_HOME = 3)] = 'APPLICATION_HOME'), n);
function X(e) {
    let { featureSet: t = 0, isModal: i = !1, isGift: n = !1, enablePremiumBrandRefresh: l = !1, isApplicationHome: a = !1 } = e,
        o = (0, s.e7)([p.default], () => p.default.locale),
        u = (0, s.e7)([I.Z], () => I.Z.affinities),
        d = !l && i && !n && u.length > 0,
        m = 3 === t || (0 === t && l && a),
        C = (() => {
            switch (t) {
                case 3:
                    return M.CD;
                case 1:
                    return M.x7;
                case 2:
                    return M.Pc;
                default:
                    return M.Nv;
            }
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m &&
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/bold',
                    className: l ? A.tier2ApplicationHomeSubheader : U.tier2ApplicationHomeSubheader,
                    children: H.intl.string(H.t.AozD3d)
                }),
            C.map((e, i) => {
                let { Icon: n, getText: s } = e;
                return (0, r.jsx)(
                    V,
                    {
                        Icon: n,
                        text: s(o),
                        className: 3 === t ? U.itemApplicationHome : void 0,
                        textVariant: 3 === t ? 'text-sm/normal' : void 0,
                        isApplicationHome: a,
                        enablePremiumBrandRefresh: l
                    },
                    i
                );
            }),
            d && (3 === t || 0 === t) && (0, r.jsx)(w.Z, {})
        ]
    });
}
function q(e) {
    var t, i, n, l;
    let { ctaButton: s, showYearlyPrice: o, featureSet: u = 0, className: d, isGift: m = !1, isModal: C = !1, priceOptions: p, showPromotionalGiftBanner: g = !1 } = e,
        x = (0, _.N)(),
        h = null == x || null == (t = x.subscription_trial) ? void 0 : t.sku_id,
        v = (0, j.Nx)(),
        I = (0, N.Ng)(),
        b = null != x ? O.C.PREMIUM_TRIAL : null != I ? O.C.PREMIUM_DISCOUNT : null,
        R = (0, T.Vi)(),
        Z = !m && v,
        w = null == (i = (0, P.Z)()) ? void 0 : i.planSelection,
        M = null == w || null == (n = w.getBackgroundImageUrl) ? void 0 : n.call(w),
        L = null == w || null == (l = w.getCardImageUrl) ? void 0 : l.call(w),
        H = (0, S.W)();
    return (0, r.jsxs)('div', {
        className: a()(U.card, U.tier2, U.tier2ApplicationHomeBackground, d, {
            [U.withTier2Rim]: Z,
            [U.withCardHover]: Z,
            [U.withPromotionalGradientBanner]: g,
            [U.withPromotionalCardImage]: g && null != L
        }),
        children: [
            g &&
                null != L &&
                (0, r.jsx)('img', {
                    className: U.promotionalCardImage,
                    alt: '',
                    src: L
                }),
            g &&
                null != M &&
                (0, r.jsx)('img', {
                    className: U.promotionalBackgroundImage,
                    alt: '',
                    src: M
                }),
            (0, r.jsx)('div', { className: U.tier2SideGradient }),
            (0, r.jsx)('img', {
                src: G,
                className: U.applicationHomeStarBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(f.Z, { className: a()(U.title, U.tier2ApplicationHomeTitle) }),
                            !m &&
                                h !== O.Si.TIER_2 &&
                                R &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/bold',
                                        className: U.freeTrialPillInline,
                                        children: H
                                    })
                                }),
                            (0, r.jsx)(y.Z, {
                                isGift: m,
                                premiumTier: O.p9.TIER_2,
                                offerType: b,
                                offerTierMatchesCard: h === O.Si.TIER_2 || (0, N.Wp)(I, O.Si.TIER_2),
                                showYearlyPrice: o,
                                priceOptions: p,
                                textVariant: 'heading-xl/normal',
                                isApplicationHome: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(X, {
                            featureSet: u,
                            isModal: C,
                            isGift: m,
                            isApplicationHome: !0
                        })
                    })
                ]
            }),
            s,
            g && (0, r.jsx)(E.K, {})
        ]
    });
}
function K(e) {
    var t, i, n, l;
    let { showWumpus: d, ctaButton: m, showYearlyPrice: C, featureSet: p = 0, className: h, isGift: v = !1, isModal: I = !1, priceOptions: b, showPromotionalGiftBanner: w = !1 } = e,
        M = (0, s.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        H = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        A = (0, _.N)(),
        G = null == A || null == (t = A.subscription_trial) ? void 0 : t.sku_id,
        k = (null == M ? void 0 : M.hasActiveTrial) ? (null == H ? void 0 : H.premiumType) : null,
        V = (0, j.Nx)(),
        B = (0, N.Ng)(),
        F = (0, j.t7)(),
        W = null != G || null != k ? O.C.PREMIUM_TRIAL : null != B || F ? O.C.PREMIUM_DISCOUNT : null,
        z = (0, T.Vi)(),
        q = !v && V,
        K = null == (i = (0, P.Z)()) ? void 0 : i.planSelection,
        Y = null == K || null == (n = K.getBackgroundImageUrl) ? void 0 : n.call(K),
        Q = null == K || null == (l = K.getCardImageUrl) ? void 0 : l.call(K),
        $ = (0, S.W)(),
        J = (0, o.ap)((0, u.ZP)()),
        ee = J ? R.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : R.VE.PREMIUM_TIER_2_WHITE_FILL,
        et = (0, R.A1)(F, k, B, A, G),
        ei = q && !J ? U.rimGlowTier2 : void 0;
    return (0, r.jsxs)('div', {
        className: a()(U.card, U.tier2, h, {
            [U.withTier2Rim]: q,
            [U.withCardHover]: q,
            [U.withPromotionalGradientBanner]: w,
            [U.withPromotionalCardImage]: w && null != Q
        }),
        children: [
            w &&
                null !== Q &&
                (0, r.jsx)('img', {
                    className: U.promotionalCardImage,
                    alt: '',
                    src: Q
                }),
            w &&
                null !== Y &&
                (0, r.jsx)('img', {
                    className: U.promotionalBackgroundImage,
                    alt: '',
                    src: Y
                }),
            !v &&
                null != et &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R.Cy, {
                            text: et,
                            className: U.topRimPill,
                            colorOptions: ee
                        }),
                        (0, r.jsx)('div', { className: ei })
                    ]
                }),
            d
                ? (0, r.jsx)('div', {
                      className: U.wumpusImageContainer,
                      children: (0, r.jsx)(c.Eep, {
                          src: D,
                          mediaLayoutType: L.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(f.Z, { className: a()(U.title, U.tier2Title) }),
                            !v &&
                                G !== O.Si.TIER_2 &&
                                z &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/bold',
                                        className: U.freeTrialPillInline,
                                        children: $
                                    })
                                }),
                            (0, r.jsx)(y.Z, {
                                isGift: v,
                                premiumTier: O.p9.TIER_2,
                                offerType: W,
                                offerTierMatchesCard: G === O.Si.TIER_2 || (0, N.Wp)(B, O.Si.TIER_2),
                                showYearlyPrice: C,
                                priceOptions: b,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(X, {
                            featureSet: p,
                            isModal: I,
                            isGift: v
                        })
                    })
                ]
            }),
            v || (G !== O.Si.TIER_2 && null == B) ? null : (0, r.jsx)(Z.t, { tier: O.p9.TIER_2 }),
            m,
            w && (0, r.jsx)(E.K, {})
        ]
    });
}
let Y = (e) => (t) => {
    null != e && ('function' == typeof e ? e(t) : e.hasOwnProperty('current') && (e.current = t));
};
function Q(e) {
    let { innerRef: t, hasActiveTier2PremiumPromotion: i, className: n } = e,
        { analyticsLocations: l } = (0, m.ZP)(d.Z.PREMIUM_MARKETING_TIER_CARD),
        s = Y(t),
        o = (0, r.jsx)(b.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: O.Si.TIER_0,
            className: U.subButton,
            textOptions: { textClassName: U.v2SubButtonText },
            buttonShineClassName: U.buttonShine
        }),
        u = (0, r.jsx)(b.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: O.Si.TIER_2,
            className: U.subButton,
            hasActivePromotion: i,
            textOptions: { textClassName: U.v2SubButtonText },
            buttonShineClassName: U.buttonShine
        });
    return (0, r.jsxs)(m.Gt, {
        value: l,
        children: [
            (0, r.jsx)(c.X6q, {
                ref: s,
                className: U.applicationHomeTierCardSectionHeader,
                variant: 'display-md',
                color: 'header-primary',
                children: H.intl.string(H.t.vLz3Zm)
            }),
            (0, r.jsxs)('div', {
                ref: s,
                className: a()(U.premiumCards, n),
                children: [
                    (0, r.jsx)(F, { ctaButton: o }),
                    (0, r.jsx)(q, {
                        ctaButton: u,
                        featureSet: 3
                    })
                ]
            })
        ]
    });
}
function $(e) {
    let { innerRef: t, className: i, tier0CTAButton: n, tier2CTAButton: l } = e,
        { analyticsLocations: s } = (0, m.ZP)(d.Z.PREMIUM_MARKETING_TIER_CARD),
        o = Y(t);
    return (0, r.jsx)(m.Gt, {
        value: s,
        children: (0, r.jsxs)('div', {
            ref: o,
            className: a()(U.premiumCards, i),
            children: [
                (0, r.jsx)(W, {
                    showWumpus: !0,
                    ctaButton: n
                }),
                (0, r.jsx)(K, {
                    showWumpus: !0,
                    ctaButton: l
                })
            ]
        })
    });
}
