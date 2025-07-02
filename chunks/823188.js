n.d(t, {
    Gq: () => W,
    IY: () => $,
    Ub: () => Q,
    nT: () => X,
    ql: () => V,
    rS: () => Y,
    uZ: () => z,
    wp: () => K
});
var i,
    r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(100527),
    m = n(906732),
    C = n(535322),
    p = n(706454),
    x = n(594174),
    g = n(78839),
    h = n(483444),
    f = n(599250),
    I = n(942659),
    v = n(357355),
    T = n(367074),
    j = n(140465),
    P = n(286961),
    E = n(33052),
    N = n(104494),
    b = n(639119),
    S = n(784238),
    _ = n(346497),
    R = n(382791),
    Z = n(63802),
    y = n(52741),
    w = n(318990),
    M = n(575732),
    O = n(474936),
    L = n(217702),
    H = n(388032),
    A = n(767594),
    U = n(781793),
    G = n(107283),
    k = n(476945),
    D = n(945182);
function B(e) {
    let { Icon: t, text: n, isNew: i = !1, className: l, textVariant: s, isApplicationHome: o, enablePremiumBrandRefresh: u } = e;
    return (0, r.jsxs)('div', {
        className: a()(null != l ? l : U.itemWithWumpus, { [A.featureItem]: u }),
        children: [
            (0, r.jsx)(t, {
                className: u ? U.smallIcon : U.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(c.Text, {
                variant: null != s ? s : 'text-md/normal',
                color: u || o ? 'currentColor' : 'always-white',
                children: n
            }),
            i
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
function V(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n } = e;
    return t
        ? (0, r.jsx)(r.Fragment, {
              children: M.X.map((e, n) => {
                  let { Icon: i, getText: l } = e;
                  return (0, r.jsx)(
                      B,
                      {
                          Icon: i,
                          text: l(),
                          className: U.itemApplicationHome,
                          textVariant: 'text-sm/normal',
                          isApplicationHome: t
                      },
                      n
                  );
              })
          })
        : (0, r.jsx)(r.Fragment, {
              children: M.FV.map((e, t) => {
                  let { Icon: i, getText: l } = e;
                  return (0, r.jsx)(
                      B,
                      {
                          Icon: i,
                          text: l(),
                          enablePremiumBrandRefresh: n
                      },
                      t
                  );
              })
          });
}
function F(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: l, isGift: o = !1, priceOptions: c } = e,
        u = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        d = (0, b.N)(),
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
                            (0, r.jsx)(I.Z, { className: a()(U.title, U.tier0ApplicationHomeTitle) }),
                            (0, r.jsx)(y.Z, {
                                isGift: o,
                                premiumTier: O.p9.TIER_0,
                                offerType: O.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: m === O.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                textVariant: 'heading-xl/normal',
                                isApplicationHome: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(V, { isApplicationHome: !0 }) })
                ]
            }),
            n
        ]
    });
}
function W(e) {
    var t;
    let { showWumpus: n, ctaButton: i, showYearlyPrice: l, className: o, isGift: u = !1, priceOptions: d } = e,
        m = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        C = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        p = (0, b.N)(),
        h = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id,
        I = !!(null == m ? void 0 : m.hasActiveTrial),
        v = I ? (null == C ? void 0 : C.premiumType) : null,
        T = null != h || I,
        j = (0, R.y_)(v, h);
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
            n
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
                            (0, r.jsx)(f.Z, { className: a()(U.title, U.tier0Title) }),
                            (0, r.jsx)(y.Z, {
                                isGift: u,
                                premiumTier: O.p9.TIER_0,
                                offerType: O.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: h === O.Si.TIER_0,
                                showYearlyPrice: l,
                                priceOptions: d,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(V, {}) })
                ]
            }),
            u || h !== O.Si.TIER_0 ? null : (0, r.jsx)(Z.t, { tier: O.p9.TIER_0 }),
            i
        ]
    });
}
var z = (((i = {})[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.BOOSTING = 1)] = 'BOOSTING'), (i[(i.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (i[(i.APPLICATION_HOME = 3)] = 'APPLICATION_HOME'), i);
function X(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: i = !1, enablePremiumBrandRefresh: l = !1, isApplicationHome: a = !1 } = e,
        o = (0, s.e7)([p.default], () => p.default.locale),
        u = (0, s.e7)([v.Z], () => v.Z.affinities),
        d = !l && n && !i && u.length > 0;
    switch (t) {
        case 3:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/bold',
                        className: U.tier2ApplicationHomeSubheader,
                        children: H.intl.string(H.t.AozD3d)
                    }),
                    M.CD.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, r.jsx)(
                            B,
                            {
                                Icon: n,
                                text: i(),
                                className: U.itemApplicationHome,
                                textVariant: 'text-sm/normal',
                                isApplicationHome: a
                            },
                            t
                        );
                    }),
                    d && (0, r.jsx)(w.Z, {})
                ]
            });
        case 1:
            return (0, r.jsx)(r.Fragment, {
                children: M.x7.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, r.jsx)(
                        B,
                        {
                            Icon: n,
                            text: i(o),
                            enablePremiumBrandRefresh: l
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, r.jsx)(r.Fragment, {
                children: M.Pc.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, r.jsx)(
                        B,
                        {
                            Icon: n,
                            text: i(),
                            enablePremiumBrandRefresh: l
                        },
                        t
                    );
                })
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    M.Nv.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, r.jsx)(
                            B,
                            {
                                Icon: n,
                                text: i(),
                                enablePremiumBrandRefresh: l
                            },
                            t
                        );
                    }),
                    d && (0, r.jsx)(w.Z, {})
                ]
            });
    }
}
function q(e) {
    var t, n, i, l;
    let { ctaButton: s, showYearlyPrice: o, featureSet: u = 0, className: d, isGift: m = !1, isModal: C = !1, priceOptions: p, showPromotionalGiftBanner: x = !1 } = e,
        g = (0, b.N)(),
        f = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        I = (0, j.Nx)(),
        v = (0, N.Ng)(),
        S = null != g ? O.C.PREMIUM_TRIAL : null != v ? O.C.PREMIUM_DISCOUNT : null,
        R = (0, T.Vi)(),
        Z = !m && I,
        w = null == (n = (0, P.Z)()) ? void 0 : n.planSelection,
        M = null == w || null == (i = w.getBackgroundImageUrl) ? void 0 : i.call(w),
        L = null == w || null == (l = w.getCardImageUrl) ? void 0 : l.call(w),
        H = (0, _.W)();
    return (0, r.jsxs)('div', {
        className: a()(U.card, U.tier2, U.tier2ApplicationHomeBackground, d, {
            [U.withTier2Rim]: Z,
            [U.withCardHover]: Z,
            [U.withPromotionalGradientBanner]: x,
            [U.withPromotionalCardImage]: x && null != L
        }),
        children: [
            x &&
                null != L &&
                (0, r.jsx)('img', {
                    className: U.promotionalCardImage,
                    alt: '',
                    src: L
                }),
            x &&
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
                            (0, r.jsx)(h.Z, { className: a()(U.title, U.tier2ApplicationHomeTitle) }),
                            !m &&
                                f !== O.Si.TIER_2 &&
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
                                offerType: S,
                                offerTierMatchesCard: f === O.Si.TIER_2 || (0, N.Wp)(v, O.Si.TIER_2),
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
            x && (0, r.jsx)(E.K, {})
        ]
    });
}
function K(e) {
    var t, n, i, l;
    let { showWumpus: d, ctaButton: m, showYearlyPrice: C, featureSet: p = 0, className: f, isGift: I = !1, isModal: v = !1, priceOptions: S, showPromotionalGiftBanner: w = !1 } = e,
        M = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        H = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        A = (0, b.N)(),
        G = null == A || null == (t = A.subscription_trial) ? void 0 : t.sku_id,
        k = (null == M ? void 0 : M.hasActiveTrial) ? (null == H ? void 0 : H.premiumType) : null,
        B = (0, j.Nx)(),
        V = (0, N.Ng)(),
        F = (0, j.t7)(),
        W = null != G || null != k ? O.C.PREMIUM_TRIAL : null != V || F ? O.C.PREMIUM_DISCOUNT : null,
        z = (0, T.Vi)(),
        q = !I && B,
        K = null == (n = (0, P.Z)()) ? void 0 : n.planSelection,
        Y = null == K || null == (i = K.getBackgroundImageUrl) ? void 0 : i.call(K),
        Q = null == K || null == (l = K.getCardImageUrl) ? void 0 : l.call(K),
        $ = (0, _.W)(),
        J = (0, o.ap)((0, u.ZP)()),
        ee = J ? R.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : R.VE.PREMIUM_TIER_2_WHITE_FILL,
        et = (0, R.A1)(F, k, V, A, G),
        en = q && !J ? U.rimGlowTier2 : void 0;
    return (0, r.jsxs)('div', {
        className: a()(U.card, U.tier2, f, {
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
            !I &&
                null != et &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R.Cy, {
                            text: et,
                            className: U.topRimPill,
                            colorOptions: ee
                        }),
                        (0, r.jsx)('div', { className: en })
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
                            (0, r.jsx)(h.Z, { className: a()(U.title, U.tier2Title) }),
                            !I &&
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
                                isGift: I,
                                premiumTier: O.p9.TIER_2,
                                offerType: W,
                                offerTierMatchesCard: G === O.Si.TIER_2 || (0, N.Wp)(V, O.Si.TIER_2),
                                showYearlyPrice: C,
                                priceOptions: S,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(X, {
                            featureSet: p,
                            isModal: v,
                            isGift: I
                        })
                    })
                ]
            }),
            I || (G !== O.Si.TIER_2 && null == V) ? null : (0, r.jsx)(Z.t, { tier: O.p9.TIER_2 }),
            m,
            w && (0, r.jsx)(E.K, {})
        ]
    });
}
let Y = (e) => (t) => {
    null != e && ('function' == typeof e ? e(t) : e.hasOwnProperty('current') && (e.current = t));
};
function Q(e) {
    let { innerRef: t, hasActiveTier2PremiumPromotion: n, className: i } = e,
        { analyticsLocations: l } = (0, m.ZP)(d.Z.PREMIUM_MARKETING_TIER_CARD),
        s = Y(t),
        o = (0, r.jsx)(S.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: O.Si.TIER_0,
            className: U.subButton,
            textOptions: { textClassName: U.v2SubButtonText },
            buttonShineClassName: U.buttonShine
        }),
        u = (0, r.jsx)(S.Z, {
            color: void 0,
            showIcon: !1,
            subscriptionTier: O.Si.TIER_2,
            className: U.subButton,
            hasActivePromotion: n,
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
                className: a()(U.premiumCards, i),
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
    let { innerRef: t, className: n, tier0CTAButton: i, tier2CTAButton: l } = e,
        { analyticsLocations: s } = (0, m.ZP)(d.Z.PREMIUM_MARKETING_TIER_CARD),
        o = Y(t);
    return (0, r.jsx)(m.Gt, {
        value: s,
        children: (0, r.jsxs)('div', {
            ref: o,
            className: a()(U.premiumCards, n),
            children: [
                (0, r.jsx)(W, {
                    showWumpus: !0,
                    ctaButton: i
                }),
                (0, r.jsx)(K, {
                    showWumpus: !0,
                    ctaButton: l
                })
            ]
        })
    });
}
