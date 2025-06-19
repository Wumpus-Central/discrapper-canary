n.d(t, {
    Gq: () => W,
    ZP: () => K,
    nT: () => z,
    ql: () => V,
    uZ: () => B,
    wp: () => q
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
    g = n(594174),
    x = n(78839),
    f = n(483444),
    h = n(599250),
    I = n(942659),
    v = n(357355),
    T = n(367074),
    j = n(140465),
    P = n(286961),
    E = n(33052),
    b = n(104494),
    _ = n(639119),
    N = n(346497),
    S = n(382791),
    R = n(63802),
    Z = n(52741),
    y = n(318990),
    w = n(575732),
    L = n(474936),
    M = n(217702),
    O = n(388032),
    H = n(195078),
    A = n(781793),
    U = n(107283),
    D = n(476945),
    G = n(945182);
function k(e) {
    let { Icon: t, text: n, isNew: i = !1, className: l, textVariant: s, isApplicationHome: o, enablePremiumRebrandDesign: u } = e;
    return (0, r.jsxs)('div', {
        className: a()(null != l ? l : A.itemWithWumpus, { [H.featureItem]: u }),
        children: [
            (0, r.jsx)(t, {
                className: u ? A.smallIcon : A.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(c.Text, {
                variant: null != s ? s : 'text-md/normal',
                color: u || o ? 'currentColor' : 'always-white',
                children: n
            }),
            i
                ? (0, r.jsx)(C.Z, {
                      className: A.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function V(e) {
    let { isApplicationHome: t, enablePremiumRebrandDesign: n } = e;
    return t
        ? (0, r.jsx)(r.Fragment, {
              children: w.X.map((e, n) => {
                  let { Icon: i, getText: l } = e;
                  return (0, r.jsx)(
                      k,
                      {
                          Icon: i,
                          text: l(),
                          className: A.itemApplicationHome,
                          textVariant: 'text-sm/normal',
                          isApplicationHome: t
                      },
                      n
                  );
              })
          })
        : (0, r.jsx)(r.Fragment, {
              children: w.FV.map((e, t) => {
                  let { Icon: i, getText: l } = e;
                  return (0, r.jsx)(
                      k,
                      {
                          Icon: i,
                          text: l(),
                          enablePremiumRebrandDesign: n
                      },
                      t
                  );
              })
          });
}
function F(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: l, isGift: o = !1, priceOptions: c } = e,
        u = (0, s.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        d = (0, _.N)(),
        m = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        C = !!(null == u ? void 0 : u.hasActiveTrial),
        p = null != m || C;
    return (0, r.jsxs)('div', {
        className: a()(A.tier0, A.card, A.tier0ApplicationHomeBackground, l, {
            [A.withTier0Rim]: !o && p,
            [A.withCardHover]: !o && p
        }),
        children: [
            (0, r.jsx)('img', {
                src: U,
                className: A.applicationHomeStarBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(I.Z, { className: a()(A.title, A.tier0ApplicationHomeTitle) }),
                            (0, r.jsx)(Z.Z, {
                                isGift: o,
                                premiumTier: L.p9.TIER_0,
                                offerType: L.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: m === L.Si.TIER_0,
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
        m = (0, s.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        C = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        p = (0, _.N)(),
        f = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id,
        I = !!(null == m ? void 0 : m.hasActiveTrial),
        v = I ? (null == C ? void 0 : C.premiumType) : null,
        T = null != f || I,
        j = (0, S.y_)(v, f);
    return (0, r.jsxs)('div', {
        className: a()(A.tier0, A.card, o, {
            [A.withTier0Rim]: !u && T,
            [A.withCardHover]: !u && T
        }),
        children: [
            !u &&
                null != j &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S.Cy, {
                            text: j,
                            className: A.topRimPill,
                            colorOptions: S.VE.PREMIUM_TIER_0_WHITE_FILL
                        }),
                        (0, r.jsx)('div', { className: A.rimGlowTier0 })
                    ]
                }),
            n
                ? (0, r.jsx)('div', {
                      className: A.wumpusImageContainer,
                      children: (0, r.jsx)(c.Eep, {
                          src: D,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: A.wumpusImage
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(h.Z, { className: a()(A.title, A.tier0Title) }),
                            (0, r.jsx)(Z.Z, {
                                isGift: u,
                                premiumTier: L.p9.TIER_0,
                                offerType: L.C.PREMIUM_TRIAL,
                                offerTierMatchesCard: f === L.Si.TIER_0,
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
            u || f !== L.Si.TIER_0 ? null : (0, r.jsx)(R.t, { tier: L.p9.TIER_0 }),
            i
        ]
    });
}
var B = (((i = {})[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.BOOSTING = 1)] = 'BOOSTING'), (i[(i.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (i[(i.APPLICATION_HOME = 3)] = 'APPLICATION_HOME'), i);
function z(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: i = !1, enablePremiumRebrandDesign: l = !1, isApplicationHome: a = !1 } = e,
        o = (0, s.e7)([p.default], () => p.default.locale),
        u = (0, s.e7)([v.Z], () => v.Z.affinities),
        d = !l && n && !i && u.length > 0;
    switch (t) {
        case 3:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/bold',
                        className: A.tier2ApplicationHomeSubheader,
                        children: O.intl.string(O.t.AozD3d)
                    }),
                    w.CD.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, r.jsx)(
                            k,
                            {
                                Icon: n,
                                text: i(),
                                className: A.itemApplicationHome,
                                textVariant: 'text-sm/normal',
                                isApplicationHome: a
                            },
                            t
                        );
                    }),
                    d && (0, r.jsx)(y.Z, {})
                ]
            });
        case 1:
            return (0, r.jsx)(r.Fragment, {
                children: w.x7.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, r.jsx)(
                        k,
                        {
                            Icon: n,
                            text: i(o),
                            enablePremiumRebrandDesign: l
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, r.jsx)(r.Fragment, {
                children: w.Pc.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, r.jsx)(
                        k,
                        {
                            Icon: n,
                            text: i(),
                            enablePremiumRebrandDesign: l
                        },
                        t
                    );
                })
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    w.Nv.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, r.jsx)(
                            k,
                            {
                                Icon: n,
                                text: i(),
                                enablePremiumRebrandDesign: l
                            },
                            t
                        );
                    }),
                    d && (0, r.jsx)(y.Z, {})
                ]
            });
    }
}
function X(e) {
    var t, n, i, l;
    let { ctaButton: s, showYearlyPrice: o, featureSet: u = 0, className: d, isGift: m = !1, isModal: C = !1, priceOptions: p, showPromotionalGiftBanner: g = !1 } = e,
        x = (0, _.N)(),
        h = null == x || null == (t = x.subscription_trial) ? void 0 : t.sku_id,
        I = (0, j.Nx)(),
        v = (0, b.Ng)(),
        S = null != x ? L.C.PREMIUM_TRIAL : null != v ? L.C.PREMIUM_DISCOUNT : null,
        R = (0, T.Vi)(),
        y = !m && I,
        w = null == (n = (0, P.Z)()) ? void 0 : n.planSelection,
        M = null == w || null == (i = w.getBackgroundImageUrl) ? void 0 : i.call(w),
        O = null == w || null == (l = w.getCardImageUrl) ? void 0 : l.call(w),
        H = (0, N.W)();
    return (0, r.jsxs)('div', {
        className: a()(A.card, A.tier2, A.tier2ApplicationHomeBackground, d, {
            [A.withTier2Rim]: y,
            [A.withCardHover]: y,
            [A.withPromotionalGradientBanner]: g,
            [A.withPromotionalCardImage]: g && null != O
        }),
        children: [
            g &&
                null != O &&
                (0, r.jsx)('img', {
                    className: A.promotionalCardImage,
                    alt: '',
                    src: O
                }),
            g &&
                null != M &&
                (0, r.jsx)('img', {
                    className: A.promotionalBackgroundImage,
                    alt: '',
                    src: M
                }),
            (0, r.jsx)('div', { className: A.tier2SideGradient }),
            (0, r.jsx)('img', {
                src: U,
                className: A.applicationHomeStarBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(f.Z, { className: a()(A.title, A.tier2ApplicationHomeTitle) }),
                            !m &&
                                h !== L.Si.TIER_2 &&
                                R &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/bold',
                                        className: A.freeTrialPillInline,
                                        children: H
                                    })
                                }),
                            (0, r.jsx)(Z.Z, {
                                isGift: m,
                                premiumTier: L.p9.TIER_2,
                                offerType: S,
                                offerTierMatchesCard: h === L.Si.TIER_2 || (0, b.Wp)(v, L.Si.TIER_2),
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
                        children: (0, r.jsx)(z, {
                            featureSet: u,
                            isModal: C,
                            isGift: m
                        })
                    })
                ]
            }),
            s,
            g && (0, r.jsx)(E.K, {})
        ]
    });
}
function q(e) {
    var t, n, i, l;
    let { showWumpus: d, ctaButton: m, showYearlyPrice: C, featureSet: p = 0, className: h, isGift: I = !1, isModal: v = !1, priceOptions: y, showPromotionalGiftBanner: w = !1 } = e,
        O = (0, s.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        H = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        U = (0, _.N)(),
        D = null == U || null == (t = U.subscription_trial) ? void 0 : t.sku_id,
        k = (null == O ? void 0 : O.hasActiveTrial) ? (null == H ? void 0 : H.premiumType) : null,
        V = (0, j.Nx)(),
        F = (0, b.Ng)(),
        W = (0, j.t7)(),
        B = null != D || null != k ? L.C.PREMIUM_TRIAL : null != F || W ? L.C.PREMIUM_DISCOUNT : null,
        X = (0, T.Vi)(),
        q = !I && V,
        K = null == (n = (0, P.Z)()) ? void 0 : n.planSelection,
        Y = null == K || null == (i = K.getBackgroundImageUrl) ? void 0 : i.call(K),
        Q = null == K || null == (l = K.getCardImageUrl) ? void 0 : l.call(K),
        $ = (0, N.W)(),
        J = (0, o.ap)((0, u.ZP)()),
        ee = J ? S.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : S.VE.PREMIUM_TIER_2_WHITE_FILL,
        et = (0, S.A1)(W, k, F, U, D),
        en = q && !J ? A.rimGlowTier2 : void 0;
    return (0, r.jsxs)('div', {
        className: a()(A.card, A.tier2, h, {
            [A.withTier2Rim]: q,
            [A.withCardHover]: q,
            [A.withPromotionalGradientBanner]: w,
            [A.withPromotionalCardImage]: w && null != Q
        }),
        children: [
            w &&
                null !== Q &&
                (0, r.jsx)('img', {
                    className: A.promotionalCardImage,
                    alt: '',
                    src: Q
                }),
            w &&
                null !== Y &&
                (0, r.jsx)('img', {
                    className: A.promotionalBackgroundImage,
                    alt: '',
                    src: Y
                }),
            !I &&
                null != et &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S.Cy, {
                            text: et,
                            className: A.topRimPill,
                            colorOptions: ee
                        }),
                        (0, r.jsx)('div', { className: en })
                    ]
                }),
            d
                ? (0, r.jsx)('div', {
                      className: A.wumpusImageContainer,
                      children: (0, r.jsx)(c.Eep, {
                          src: G,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: A.wumpusImage
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(f.Z, { className: a()(A.title, A.tier2Title) }),
                            !I &&
                                D !== L.Si.TIER_2 &&
                                X &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/bold',
                                        className: A.freeTrialPillInline,
                                        children: $
                                    })
                                }),
                            (0, r.jsx)(Z.Z, {
                                isGift: I,
                                premiumTier: L.p9.TIER_2,
                                offerType: B,
                                offerTierMatchesCard: D === L.Si.TIER_2 || (0, b.Wp)(F, L.Si.TIER_2),
                                showYearlyPrice: C,
                                priceOptions: y,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(z, {
                            featureSet: p,
                            isModal: v,
                            isGift: I
                        })
                    })
                ]
            }),
            I || (D !== L.Si.TIER_2 && null == F) ? null : (0, r.jsx)(R.t, { tier: L.p9.TIER_2 }),
            m,
            w && (0, r.jsx)(E.K, {})
        ]
    });
}
function K(e) {
    let { innerRef: t, isApplicationHome: n, showWumpus: i, tier0CTAButton: l, tier2CTAButton: s, className: o } = e,
        { analyticsLocations: u } = (0, m.ZP)(d.Z.PREMIUM_MARKETING_TIER_CARD),
        C = (e) => {
            null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
        };
    return (0, r.jsxs)(m.Gt, {
        value: u,
        children: [
            n &&
                (0, r.jsx)(c.X6q, {
                    ref: C,
                    className: A.applicationHomeTierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: O.intl.string(O.t.vLz3Zm)
                }),
            (0, r.jsxs)('div', {
                ref: C,
                className: a()(A.premiumCards, o),
                children: [
                    n
                        ? (0, r.jsx)(F, { ctaButton: l })
                        : (0, r.jsx)(W, {
                              showWumpus: i,
                              ctaButton: l
                          }),
                    n
                        ? (0, r.jsx)(X, {
                              ctaButton: s,
                              featureSet: 3
                          })
                        : (0, r.jsx)(q, {
                              showWumpus: i,
                              ctaButton: s
                          })
                ]
            })
        ]
    });
}
