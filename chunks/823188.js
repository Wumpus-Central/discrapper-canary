i.d(t, {
    C: () => B,
    Gq: () => Q,
    ZP: () => ei,
    ko: () => q,
    nT: () => J,
    ql: () => K,
    uZ: () => $,
    wp: () => et
});
var n,
    r,
    l = i(255367);
i(73800);
var a = i(120356),
    s = i.n(a),
    o = i(913527),
    c = i.n(o),
    u = i(442837),
    d = i(780384),
    m = i(481060),
    C = i(410030),
    p = i(100527),
    g = i(906732),
    x = i(535322),
    h = i(706454),
    f = i(594174),
    I = i(78839),
    v = i(483444),
    T = i(599250),
    j = i(942659),
    P = i(74538),
    N = i(357355),
    b = i(140465),
    E = i(286961),
    S = i(33052),
    _ = i(104494),
    y = i(639119),
    R = i(230916),
    Z = i(346497),
    O = i(382791),
    w = i(504865),
    L = i(63802),
    M = i(318990),
    H = i(575732),
    A = i(474936),
    U = i(217702),
    G = i(388032),
    k = i(195078),
    D = i(781793),
    V = i(107283),
    F = i(476945),
    W = i(945182),
    B = (((n = {})[(n.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (n[(n.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), n);
function z(e) {
    let { Icon: t, text: i, isNew: n = !1, className: r, textVariant: a, isApplicationHome: o, enablePremiumRebrandDesign: c } = e;
    return (0, l.jsxs)('div', {
        className: s()(null != r ? r : D.itemWithWumpus, { [k.featureItem]: c }),
        children: [
            (0, l.jsx)(t, {
                className: c ? D.smallIcon : D.icon,
                color: 'currentColor'
            }),
            (0, l.jsx)(m.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: c || o ? 'currentColor' : 'always-white',
                children: i
            }),
            n
                ? (0, l.jsx)(x.Z, {
                      className: D.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function X(e) {
    var t;
    let { defaultPriceString: i, subscriptionPlan: n, discountOffer: r } = e,
        a = (0, R.A)(n);
    return (0, l.jsx)(l.Fragment, {
        children: G.intl.format(G.t.sJTwHR, {
            numMonths: null != (t = r.discount.user_usage_limit) ? t : A.rt,
            discountedPrice: a,
            regularPrice: i
        })
    });
}
function q(e) {
    var t, i, n, r, a, o, d;
    let { isGift: C, premiumTier: p, offerTierMatchesCard: g, offerType: x, showYearlyPrice: h, priceOptions: v, textVariant: T, className: j, isApplicationHome: N, enablePremiumRebrandDesign: E, headerClassName: S, headingVariant: R = 'heading-md/normal', headingColor: Z } = e,
        O = (0, u.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        L = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        M = (0, b.t7)(),
        H = (0, b.lr)(),
        U = p === A.p9.TIER_0 ? A.Si.TIER_0 : A.Si.TIER_2,
        k = (null == O ? void 0 : O.hasActiveTrial) ? (null == L ? void 0 : L.premiumType) : M ? A.p9.TIER_2 : null,
        V = (0, y.N)(),
        F = (0, _.Ng)(),
        W = null == V ? void 0 : V.subscription_trial;
    if (!N && !C && null != k && p === k && null != O && null != O.planIdFromItems) {
        let e = null != O.trialEndsAt ? c()(null == O ? void 0 : O.trialEndsAt).diff(c()(), 'd') : 0,
            r = A.GP[O.planIdFromItems],
            a = P.ZP.formatPriceString(P.ZP.getDefaultPrice(r.id), r.interval);
        return (0, l.jsx)(m.X6q, {
            variant: R,
            color: Z,
            className: s()(D.trialHeader, S),
            children:
                0 === x
                    ? G.intl.format(G.t['2CGBrq'], {
                          remainingTime: e,
                          price: a
                      })
                    : O.planIdFromItems === A.Xh.PREMIUM_YEAR_TIER_2
                      ? G.intl.format(G.t['+qqh6u'], {
                            percent: null != (t = null == H ? void 0 : H.percentage) ? t : A.Bo,
                            regularPrice: a
                        })
                      : G.intl.formatToPlainString(G.t['3Ziutb'], {
                            percent: null != (i = null == H ? void 0 : H.percentage) ? i : A.M_,
                            regularPrice: a,
                            numMonths: null != (n = null == H ? void 0 : H.duration) ? n : A.rt
                        })
        });
    }
    if (!N && !C && g) {
        let e = P.ZP.formatPriceString(P.ZP.getDefaultPrice(p === A.p9.TIER_0 ? A.Xh.PREMIUM_MONTH_TIER_0 : A.Xh.PREMIUM_MONTH_TIER_2), A.rV.MONTH);
        if (0 === x)
            return (0, l.jsx)(m.X6q, {
                variant: R,
                color: Z,
                className: s()(D.trialHeader, S),
                children: G.intl.format(G.t['9vyovr'], {
                    planName: (0, P.aq)(null != (a = A.IW[null != (r = null == W ? void 0 : W.sku_id) ? r : A.Si.NONE]) ? a : A.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, P.if)({
                        intervalType: null != (o = null == W ? void 0 : W.interval) ? o : A.rV.DAY,
                        intervalCount: null != (d = null == W ? void 0 : W.interval_count) ? d : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != F)
            return (0, l.jsx)(m.X6q, {
                variant: R,
                color: Z,
                className: s()(D.trialHeader, S),
                children: (0, l.jsx)(X, {
                    defaultPriceString: e,
                    subscriptionPlan: A.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: F
                })
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(w.Z, {
                subscriptionTier: U,
                isGift: C,
                className: null != j ? j : D.price,
                priceOptions: v,
                variant: T,
                isApplicationHome: N,
                enablePremiumRebrandDesign: E
            }),
            h &&
                (0, l.jsx)(w.Z, {
                    subscriptionTier: U,
                    interval: A.rV.YEAR,
                    className: null != j ? j : D.price,
                    isGift: C,
                    priceOptions: v,
                    variant: T,
                    isApplicationHome: N,
                    enablePremiumRebrandDesign: E
                })
        ]
    });
}
function K(e) {
    let { isApplicationHome: t, enablePremiumRebrandDesign: i } = e;
    return t
        ? (0, l.jsx)(l.Fragment, {
              children: H.X.map((e, i) => {
                  let { Icon: n, getText: r } = e;
                  return (0, l.jsx)(
                      z,
                      {
                          Icon: n,
                          text: r(),
                          className: D.itemApplicationHome,
                          textVariant: 'text-sm/normal',
                          isApplicationHome: t
                      },
                      i
                  );
              })
          })
        : (0, l.jsx)(l.Fragment, {
              children: H.FV.map((e, t) => {
                  let { Icon: n, getText: r } = e;
                  return (0, l.jsx)(
                      z,
                      {
                          Icon: n,
                          text: r(),
                          enablePremiumRebrandDesign: i
                      },
                      t
                  );
              })
          });
}
function Y(e) {
    var t;
    let { ctaButton: i, showYearlyPrice: n, className: r, isGift: a = !1, priceOptions: o } = e,
        c = (0, u.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        d = (0, y.N)(),
        m = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        C = !!(null == c ? void 0 : c.hasActiveTrial),
        p = null != m || C;
    return (0, l.jsxs)('div', {
        className: s()(D.tier0, D.card, D.tier0ApplicationHomeBackground, r, {
            [D.withTier0Rim]: !a && p,
            [D.withCardHover]: !a && p
        }),
        children: [
            (0, l.jsx)('img', {
                src: V,
                className: D.applicationHomeStarBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(j.Z, { className: s()(D.title, D.tier0ApplicationHomeTitle) }),
                            (0, l.jsx)(q, {
                                isGift: a,
                                premiumTier: A.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: m === A.Si.TIER_0,
                                showYearlyPrice: n,
                                priceOptions: o,
                                textVariant: 'heading-xl/normal',
                                isApplicationHome: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(K, { isApplicationHome: !0 }) })
                ]
            }),
            i
        ]
    });
}
function Q(e) {
    var t;
    let { showWumpus: i, ctaButton: n, showYearlyPrice: r, className: a, isGift: o = !1, priceOptions: c } = e,
        d = (0, u.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        C = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        p = (0, y.N)(),
        g = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id,
        x = !!(null == d ? void 0 : d.hasActiveTrial),
        h = x ? (null == C ? void 0 : C.premiumType) : null,
        v = null != g || x,
        j = (0, O.y_)(h, g);
    return (0, l.jsxs)('div', {
        className: s()(D.tier0, D.card, a, {
            [D.withTier0Rim]: !o && v,
            [D.withCardHover]: !o && v
        }),
        children: [
            !o &&
                null != j &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(O.Cy, {
                            text: j,
                            className: D.topRimPill,
                            colorOptions: O.VE.PREMIUM_TIER_0_WHITE_FILL
                        }),
                        (0, l.jsx)('div', { className: D.rimGlowTier0 })
                    ]
                }),
            i
                ? (0, l.jsx)('div', {
                      className: D.wumpusImageContainer,
                      children: (0, l.jsx)(m.Eep, {
                          src: F,
                          mediaLayoutType: U.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: D.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(T.Z, { className: s()(D.title, D.tier0Title) }),
                            (0, l.jsx)(q, {
                                isGift: o,
                                premiumTier: A.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: g === A.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: c,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(K, {}) })
                ]
            }),
            o || g !== A.Si.TIER_0 ? null : (0, l.jsx)(L.t, { tier: A.p9.TIER_0 }),
            n
        ]
    });
}
var $ = (((r = {})[(r.DEFAULT = 0)] = 'DEFAULT'), (r[(r.BOOSTING = 1)] = 'BOOSTING'), (r[(r.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (r[(r.APPLICATION_HOME = 3)] = 'APPLICATION_HOME'), r);
function J(e) {
    let { featureSet: t = 0, isModal: i = !1, isGift: n = !1, enablePremiumRebrandDesign: r = !1, isApplicationHome: a = !1 } = e,
        s = (0, u.e7)([h.default], () => h.default.locale),
        o = (0, u.e7)([N.Z], () => N.Z.affinities),
        c = !r && i && !n && o.length > 0;
    switch (t) {
        case 3:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/bold',
                        className: D.tier2ApplicationHomeSubheader,
                        children: G.intl.string(G.t.AozD3d)
                    }),
                    H.CD.map((e, t) => {
                        let { Icon: i, getText: n } = e;
                        return (0, l.jsx)(
                            z,
                            {
                                Icon: i,
                                text: n(),
                                className: D.itemApplicationHome,
                                textVariant: 'text-sm/normal',
                                isApplicationHome: a
                            },
                            t
                        );
                    }),
                    c && (0, l.jsx)(M.Z, {})
                ]
            });
        case 1:
            return (0, l.jsx)(l.Fragment, {
                children: H.x7.map((e, t) => {
                    let { Icon: i, getText: n } = e;
                    return (0, l.jsx)(
                        z,
                        {
                            Icon: i,
                            text: n(s),
                            enablePremiumRebrandDesign: r
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, l.jsx)(l.Fragment, {
                children: H.Pc.map((e, t) => {
                    let { Icon: i, getText: n } = e;
                    return (0, l.jsx)(
                        z,
                        {
                            Icon: i,
                            text: n(),
                            enablePremiumRebrandDesign: r
                        },
                        t
                    );
                })
            });
        default:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    H.Nv.map((e, t) => {
                        let { Icon: i, getText: n } = e;
                        return (0, l.jsx)(
                            z,
                            {
                                Icon: i,
                                text: n(),
                                enablePremiumRebrandDesign: r
                            },
                            t
                        );
                    }),
                    c && (0, l.jsx)(M.Z, {})
                ]
            });
    }
}
function ee(e) {
    var t, i, n, r;
    let { ctaButton: a, showYearlyPrice: o, featureSet: c = 0, className: u, isGift: d = !1, isModal: C = !1, priceOptions: p, showPromotionalGiftBanner: g = !1 } = e,
        x = (0, y.N)(),
        h = null == x || null == (t = x.subscription_trial) ? void 0 : t.sku_id,
        f = (0, b.Nx)(),
        I = (0, _.Ng)(),
        T = null != x ? 0 : null != I ? 1 : null,
        j = (0, Z.Vi)(),
        P = !d && f,
        N = null == (i = (0, E.Z)()) ? void 0 : i.planSelection,
        R = null == N || null == (n = N.getBackgroundImageUrl) ? void 0 : n.call(N),
        O = null == N || null == (r = N.getCardImageUrl) ? void 0 : r.call(N),
        w = (0, Z.W1)();
    return (0, l.jsxs)('div', {
        className: s()(D.card, D.tier2, D.tier2ApplicationHomeBackground, u, {
            [D.withTier2Rim]: P,
            [D.withCardHover]: P,
            [D.withPromotionalGradientBanner]: g,
            [D.withPromotionalCardImage]: g && null != O
        }),
        children: [
            g &&
                null != O &&
                (0, l.jsx)('img', {
                    className: D.promotionalCardImage,
                    alt: '',
                    src: O
                }),
            g &&
                null != R &&
                (0, l.jsx)('img', {
                    className: D.promotionalBackgroundImage,
                    alt: '',
                    src: R
                }),
            (0, l.jsx)('div', { className: D.tier2SideGradient }),
            (0, l.jsx)('img', {
                src: V,
                className: D.applicationHomeStarBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(v.Z, { className: s()(D.title, D.tier2ApplicationHomeTitle) }),
                            !d &&
                                h !== A.Si.TIER_2 &&
                                j &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-xs/bold',
                                        className: D.freeTrialPillInline,
                                        children: w
                                    })
                                }),
                            (0, l.jsx)(q, {
                                isGift: d,
                                premiumTier: A.p9.TIER_2,
                                offerType: T,
                                offerTierMatchesCard: h === A.Si.TIER_2 || (0, _.Wp)(I, A.Si.TIER_2),
                                showYearlyPrice: o,
                                priceOptions: p,
                                textVariant: 'heading-xl/normal',
                                isApplicationHome: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(J, {
                            featureSet: c,
                            isModal: C,
                            isGift: d
                        })
                    })
                ]
            }),
            a,
            g && (0, l.jsx)(S.K, {})
        ]
    });
}
function et(e) {
    var t, i, n, r;
    let { showWumpus: a, ctaButton: o, showYearlyPrice: c, featureSet: p = 0, className: g, isGift: x = !1, isModal: h = !1, priceOptions: T, showPromotionalGiftBanner: j = !1 } = e,
        P = (0, u.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        N = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        R = (0, y.N)(),
        w = null == R || null == (t = R.subscription_trial) ? void 0 : t.sku_id,
        M = (null == P ? void 0 : P.hasActiveTrial) ? (null == N ? void 0 : N.premiumType) : null,
        H = (0, b.Nx)(),
        G = (0, _.Ng)(),
        k = (0, b.t7)(),
        V = null != w || null != M ? 0 : null != G || k ? 1 : null,
        F = (0, Z.Vi)(),
        B = !x && H,
        z = null == (i = (0, E.Z)()) ? void 0 : i.planSelection,
        X = null == z || null == (n = z.getBackgroundImageUrl) ? void 0 : n.call(z),
        K = null == z || null == (r = z.getCardImageUrl) ? void 0 : r.call(z),
        Y = (0, Z.W1)(),
        Q = (0, d.ap)((0, C.ZP)()),
        $ = Q ? O.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : O.VE.PREMIUM_TIER_2_WHITE_FILL,
        ee = (0, O.A1)(k, M, G, R, w),
        et = B && !Q ? D.rimGlowTier2 : void 0;
    return (0, l.jsxs)('div', {
        className: s()(D.card, D.tier2, g, {
            [D.withTier2Rim]: B,
            [D.withCardHover]: B,
            [D.withPromotionalGradientBanner]: j,
            [D.withPromotionalCardImage]: j && null != K
        }),
        children: [
            j &&
                null !== K &&
                (0, l.jsx)('img', {
                    className: D.promotionalCardImage,
                    alt: '',
                    src: K
                }),
            j &&
                null !== X &&
                (0, l.jsx)('img', {
                    className: D.promotionalBackgroundImage,
                    alt: '',
                    src: X
                }),
            !x &&
                null != ee &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(O.Cy, {
                            text: ee,
                            className: D.topRimPill,
                            colorOptions: $
                        }),
                        (0, l.jsx)('div', { className: et })
                    ]
                }),
            a
                ? (0, l.jsx)('div', {
                      className: D.wumpusImageContainer,
                      children: (0, l.jsx)(m.Eep, {
                          src: W,
                          mediaLayoutType: U.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: D.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(v.Z, { className: s()(D.title, D.tier2Title) }),
                            !x &&
                                w !== A.Si.TIER_2 &&
                                F &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-xs/bold',
                                        className: D.freeTrialPillInline,
                                        children: Y
                                    })
                                }),
                            (0, l.jsx)(q, {
                                isGift: x,
                                premiumTier: A.p9.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: w === A.Si.TIER_2 || (0, _.Wp)(G, A.Si.TIER_2),
                                showYearlyPrice: c,
                                priceOptions: T,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(J, {
                            featureSet: p,
                            isModal: h,
                            isGift: x
                        })
                    })
                ]
            }),
            x || (w !== A.Si.TIER_2 && null == G) ? null : (0, l.jsx)(L.t, { tier: A.p9.TIER_2 }),
            o,
            j && (0, l.jsx)(S.K, {})
        ]
    });
}
function ei(e) {
    let { innerRef: t, isApplicationHome: i, showWumpus: n, tier0CTAButton: r, tier2CTAButton: a, className: o } = e,
        { analyticsLocations: c } = (0, g.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        u = (e) => {
            null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
        };
    return (0, l.jsxs)(g.Gt, {
        value: c,
        children: [
            i &&
                (0, l.jsx)(m.X6q, {
                    ref: u,
                    className: D.applicationHomeTierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: G.intl.string(G.t.vLz3Zm)
                }),
            (0, l.jsxs)('div', {
                ref: u,
                className: s()(D.premiumCards, o),
                children: [
                    i
                        ? (0, l.jsx)(Y, { ctaButton: r })
                        : (0, l.jsx)(Q, {
                              showWumpus: n,
                              ctaButton: r
                          }),
                    i
                        ? (0, l.jsx)(ee, {
                              ctaButton: a,
                              featureSet: 3
                          })
                        : (0, l.jsx)(et, {
                              showWumpus: n,
                              ctaButton: a
                          })
                ]
            })
        ]
    });
}
