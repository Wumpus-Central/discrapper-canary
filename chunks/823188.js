n.d(t, {
    C: () => z,
    Gq: () => $,
    ZP: () => ei,
    ko: () => K,
    nT: () => ee,
    ql: () => Y,
    uZ: () => J,
    wp: () => en
});
var i,
    r,
    l = n(255367);
n(73800);
var a = n(120356),
    s = n.n(a),
    o = n(913527),
    c = n.n(o),
    u = n(442837),
    d = n(780384),
    m = n(481060),
    C = n(410030),
    p = n(100527),
    g = n(906732),
    x = n(535322),
    f = n(706454),
    h = n(594174),
    v = n(78839),
    I = n(483444),
    T = n(599250),
    j = n(942659),
    P = n(74538),
    b = n(357355),
    E = n(367074),
    S = n(140465),
    N = n(286961),
    _ = n(33052),
    y = n(104494),
    Z = n(639119),
    R = n(230916),
    w = n(346497),
    O = n(382791),
    L = n(504865),
    M = n(63802),
    H = n(318990),
    A = n(575732),
    U = n(474936),
    k = n(217702),
    D = n(388032),
    G = n(195078),
    V = n(781793),
    F = n(107283),
    B = n(476945),
    W = n(945182),
    z = (((i = {})[(i.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (i[(i.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), i);
function X(e) {
    let { Icon: t, text: n, isNew: i = !1, className: r, textVariant: a, isApplicationHome: o, enablePremiumRebrandDesign: c } = e;
    return (0, l.jsxs)('div', {
        className: s()(null != r ? r : V.itemWithWumpus, { [G.featureItem]: c }),
        children: [
            (0, l.jsx)(t, {
                className: c ? V.smallIcon : V.icon,
                color: 'currentColor'
            }),
            (0, l.jsx)(m.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: c || o ? 'currentColor' : 'always-white',
                children: n
            }),
            i
                ? (0, l.jsx)(x.Z, {
                      className: V.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function q(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: i, discountOffer: r } = e,
        a = (0, R.A)(i);
    return (0, l.jsx)(l.Fragment, {
        children: D.intl.format(D.t.sJTwHR, {
            numMonths: null != (t = r.discount.user_usage_limit) ? t : U.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function K(e) {
    var t, n, i, r, a, o, d;
    let { isGift: C, premiumTier: p, offerTierMatchesCard: g, offerType: x, showYearlyPrice: f, priceOptions: I, textVariant: T, className: j, isApplicationHome: b, enablePremiumRebrandDesign: E, headerClassName: N, headingVariant: _ = 'heading-md/normal', headingColor: R } = e,
        w = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        O = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        M = (0, S.t7)(),
        H = (0, S.lr)(),
        A = p === U.p9.TIER_0 ? U.Si.TIER_0 : U.Si.TIER_2,
        k = (null == w ? void 0 : w.hasActiveTrial) ? (null == O ? void 0 : O.premiumType) : M ? U.p9.TIER_2 : null,
        G = (0, Z.N)(),
        F = (0, y.Ng)(),
        B = null == G ? void 0 : G.subscription_trial;
    if (!b && !C && null != k && p === k && null != w && null != w.planIdFromItems) {
        let e = null != w.trialEndsAt ? c()(null == w ? void 0 : w.trialEndsAt).diff(c()(), 'd') : 0,
            r = U.GP[w.planIdFromItems],
            a = P.ZP.formatPriceString(P.ZP.getDefaultPrice(r.id), r.interval);
        return (0, l.jsx)(m.X6q, {
            variant: _,
            color: R,
            className: s()(V.trialHeader, N),
            children:
                0 === x
                    ? D.intl.format(D.t['2CGBrq'], {
                          remainingTime: e,
                          price: a
                      })
                    : w.planIdFromItems === U.Xh.PREMIUM_YEAR_TIER_2
                      ? D.intl.format(D.t['+qqh6u'], {
                            percent: null != (t = null == H ? void 0 : H.percentage) ? t : U.Bo,
                            regularPrice: a
                        })
                      : D.intl.formatToPlainString(D.t['3Ziutb'], {
                            percent: null != (n = null == H ? void 0 : H.percentage) ? n : U.M_,
                            regularPrice: a,
                            numMonths: null != (i = null == H ? void 0 : H.duration) ? i : U.rt
                        })
        });
    }
    if (!b && !C && g) {
        let e = P.ZP.formatPriceString(P.ZP.getDefaultPrice(p === U.p9.TIER_0 ? U.Xh.PREMIUM_MONTH_TIER_0 : U.Xh.PREMIUM_MONTH_TIER_2), U.rV.MONTH);
        if (0 === x)
            return (0, l.jsx)(m.X6q, {
                variant: _,
                color: R,
                className: s()(V.trialHeader, N),
                children: D.intl.format(D.t['9vyovr'], {
                    planName: (0, P.aq)(null != (a = U.IW[null != (r = null == B ? void 0 : B.sku_id) ? r : U.Si.NONE]) ? a : U.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, P.if)({
                        intervalType: null != (o = null == B ? void 0 : B.interval) ? o : U.rV.DAY,
                        intervalCount: null != (d = null == B ? void 0 : B.interval_count) ? d : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != F)
            return (0, l.jsx)(m.X6q, {
                variant: _,
                color: R,
                className: s()(V.trialHeader, N),
                children: (0, l.jsx)(q, {
                    defaultPriceString: e,
                    subscriptionPlan: U.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: F
                })
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.Z, {
                subscriptionTier: A,
                isGift: C,
                className: null != j ? j : V.price,
                priceOptions: I,
                variant: T,
                isApplicationHome: b,
                enablePremiumRebrandDesign: E
            }),
            f &&
                (0, l.jsx)(L.Z, {
                    subscriptionTier: A,
                    interval: U.rV.YEAR,
                    className: null != j ? j : V.price,
                    isGift: C,
                    priceOptions: I,
                    variant: T,
                    isApplicationHome: b,
                    enablePremiumRebrandDesign: E
                })
        ]
    });
}
function Y(e) {
    let { isApplicationHome: t, enablePremiumRebrandDesign: n } = e;
    return t
        ? (0, l.jsx)(l.Fragment, {
              children: A.X.map((e, n) => {
                  let { Icon: i, getText: r } = e;
                  return (0, l.jsx)(
                      X,
                      {
                          Icon: i,
                          text: r(),
                          className: V.itemApplicationHome,
                          textVariant: 'text-sm/normal',
                          isApplicationHome: t
                      },
                      n
                  );
              })
          })
        : (0, l.jsx)(l.Fragment, {
              children: A.FV.map((e, t) => {
                  let { Icon: i, getText: r } = e;
                  return (0, l.jsx)(
                      X,
                      {
                          Icon: i,
                          text: r(),
                          enablePremiumRebrandDesign: n
                      },
                      t
                  );
              })
          });
}
function Q(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: r, isGift: a = !1, priceOptions: o } = e,
        c = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        d = (0, Z.N)(),
        m = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        C = !!(null == c ? void 0 : c.hasActiveTrial),
        p = null != m || C;
    return (0, l.jsxs)('div', {
        className: s()(V.tier0, V.card, V.tier0ApplicationHomeBackground, r, {
            [V.withTier0Rim]: !a && p,
            [V.withCardHover]: !a && p
        }),
        children: [
            (0, l.jsx)('img', {
                src: F,
                className: V.applicationHomeStarBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(j.Z, { className: s()(V.title, V.tier0ApplicationHomeTitle) }),
                            (0, l.jsx)(K, {
                                isGift: a,
                                premiumTier: U.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: m === U.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: o,
                                textVariant: 'heading-xl/normal',
                                isApplicationHome: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(Y, { isApplicationHome: !0 }) })
                ]
            }),
            n
        ]
    });
}
function $(e) {
    var t;
    let { showWumpus: n, ctaButton: i, showYearlyPrice: r, className: a, isGift: o = !1, priceOptions: c } = e,
        d = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        C = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        p = (0, Z.N)(),
        g = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id,
        x = !!(null == d ? void 0 : d.hasActiveTrial),
        f = x ? (null == C ? void 0 : C.premiumType) : null,
        I = null != g || x,
        j = (0, O.y_)(f, g);
    return (0, l.jsxs)('div', {
        className: s()(V.tier0, V.card, a, {
            [V.withTier0Rim]: !o && I,
            [V.withCardHover]: !o && I
        }),
        children: [
            !o &&
                null != j &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(O.Cy, {
                            text: j,
                            className: V.topRimPill,
                            colorOptions: O.VE.PREMIUM_TIER_0_WHITE_FILL
                        }),
                        (0, l.jsx)('div', { className: V.rimGlowTier0 })
                    ]
                }),
            n
                ? (0, l.jsx)('div', {
                      className: V.wumpusImageContainer,
                      children: (0, l.jsx)(m.Eep, {
                          src: B,
                          mediaLayoutType: k.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: V.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(T.Z, { className: s()(V.title, V.tier0Title) }),
                            (0, l.jsx)(K, {
                                isGift: o,
                                premiumTier: U.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: g === U.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: c,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(Y, {}) })
                ]
            }),
            o || g !== U.Si.TIER_0 ? null : (0, l.jsx)(M.t, { tier: U.p9.TIER_0 }),
            i
        ]
    });
}
var J = (((r = {})[(r.DEFAULT = 0)] = 'DEFAULT'), (r[(r.BOOSTING = 1)] = 'BOOSTING'), (r[(r.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (r[(r.APPLICATION_HOME = 3)] = 'APPLICATION_HOME'), r);
function ee(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: i = !1, enablePremiumRebrandDesign: r = !1, isApplicationHome: a = !1 } = e,
        s = (0, u.e7)([f.default], () => f.default.locale),
        o = (0, u.e7)([b.Z], () => b.Z.affinities),
        c = !r && n && !i && o.length > 0;
    switch (t) {
        case 3:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/bold',
                        className: V.tier2ApplicationHomeSubheader,
                        children: D.intl.string(D.t.AozD3d)
                    }),
                    A.CD.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, l.jsx)(
                            X,
                            {
                                Icon: n,
                                text: i(),
                                className: V.itemApplicationHome,
                                textVariant: 'text-sm/normal',
                                isApplicationHome: a
                            },
                            t
                        );
                    }),
                    c && (0, l.jsx)(H.Z, {})
                ]
            });
        case 1:
            return (0, l.jsx)(l.Fragment, {
                children: A.x7.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, l.jsx)(
                        X,
                        {
                            Icon: n,
                            text: i(s),
                            enablePremiumRebrandDesign: r
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, l.jsx)(l.Fragment, {
                children: A.Pc.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, l.jsx)(
                        X,
                        {
                            Icon: n,
                            text: i(),
                            enablePremiumRebrandDesign: r
                        },
                        t
                    );
                })
            });
        default:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    A.Nv.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, l.jsx)(
                            X,
                            {
                                Icon: n,
                                text: i(),
                                enablePremiumRebrandDesign: r
                            },
                            t
                        );
                    }),
                    c && (0, l.jsx)(H.Z, {})
                ]
            });
    }
}
function et(e) {
    var t, n, i, r;
    let { ctaButton: a, showYearlyPrice: o, featureSet: c = 0, className: u, isGift: d = !1, isModal: C = !1, priceOptions: p, showPromotionalGiftBanner: g = !1 } = e,
        x = (0, Z.N)(),
        f = null == x || null == (t = x.subscription_trial) ? void 0 : t.sku_id,
        h = (0, S.Nx)(),
        v = (0, y.Ng)(),
        T = null != x ? 0 : null != v ? 1 : null,
        j = (0, E.Vi)(),
        P = !d && h,
        b = null == (n = (0, N.Z)()) ? void 0 : n.planSelection,
        R = null == b || null == (i = b.getBackgroundImageUrl) ? void 0 : i.call(b),
        O = null == b || null == (r = b.getCardImageUrl) ? void 0 : r.call(b),
        L = (0, w.W)();
    return (0, l.jsxs)('div', {
        className: s()(V.card, V.tier2, V.tier2ApplicationHomeBackground, u, {
            [V.withTier2Rim]: P,
            [V.withCardHover]: P,
            [V.withPromotionalGradientBanner]: g,
            [V.withPromotionalCardImage]: g && null != O
        }),
        children: [
            g &&
                null != O &&
                (0, l.jsx)('img', {
                    className: V.promotionalCardImage,
                    alt: '',
                    src: O
                }),
            g &&
                null != R &&
                (0, l.jsx)('img', {
                    className: V.promotionalBackgroundImage,
                    alt: '',
                    src: R
                }),
            (0, l.jsx)('div', { className: V.tier2SideGradient }),
            (0, l.jsx)('img', {
                src: F,
                className: V.applicationHomeStarBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(I.Z, { className: s()(V.title, V.tier2ApplicationHomeTitle) }),
                            !d &&
                                f !== U.Si.TIER_2 &&
                                j &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-xs/bold',
                                        className: V.freeTrialPillInline,
                                        children: L
                                    })
                                }),
                            (0, l.jsx)(K, {
                                isGift: d,
                                premiumTier: U.p9.TIER_2,
                                offerType: T,
                                offerTierMatchesCard: f === U.Si.TIER_2 || (0, y.Wp)(v, U.Si.TIER_2),
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
                        children: (0, l.jsx)(ee, {
                            featureSet: c,
                            isModal: C,
                            isGift: d
                        })
                    })
                ]
            }),
            a,
            g && (0, l.jsx)(_.K, {})
        ]
    });
}
function en(e) {
    var t, n, i, r;
    let { showWumpus: a, ctaButton: o, showYearlyPrice: c, featureSet: p = 0, className: g, isGift: x = !1, isModal: f = !1, priceOptions: T, showPromotionalGiftBanner: j = !1 } = e,
        P = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        b = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        R = (0, Z.N)(),
        L = null == R || null == (t = R.subscription_trial) ? void 0 : t.sku_id,
        H = (null == P ? void 0 : P.hasActiveTrial) ? (null == b ? void 0 : b.premiumType) : null,
        A = (0, S.Nx)(),
        D = (0, y.Ng)(),
        G = (0, S.t7)(),
        F = null != L || null != H ? 0 : null != D || G ? 1 : null,
        B = (0, E.Vi)(),
        z = !x && A,
        X = null == (n = (0, N.Z)()) ? void 0 : n.planSelection,
        q = null == X || null == (i = X.getBackgroundImageUrl) ? void 0 : i.call(X),
        Y = null == X || null == (r = X.getCardImageUrl) ? void 0 : r.call(X),
        Q = (0, w.W)(),
        $ = (0, d.ap)((0, C.ZP)()),
        J = $ ? O.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : O.VE.PREMIUM_TIER_2_WHITE_FILL,
        et = (0, O.A1)(G, H, D, R, L),
        en = z && !$ ? V.rimGlowTier2 : void 0;
    return (0, l.jsxs)('div', {
        className: s()(V.card, V.tier2, g, {
            [V.withTier2Rim]: z,
            [V.withCardHover]: z,
            [V.withPromotionalGradientBanner]: j,
            [V.withPromotionalCardImage]: j && null != Y
        }),
        children: [
            j &&
                null !== Y &&
                (0, l.jsx)('img', {
                    className: V.promotionalCardImage,
                    alt: '',
                    src: Y
                }),
            j &&
                null !== q &&
                (0, l.jsx)('img', {
                    className: V.promotionalBackgroundImage,
                    alt: '',
                    src: q
                }),
            !x &&
                null != et &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(O.Cy, {
                            text: et,
                            className: V.topRimPill,
                            colorOptions: J
                        }),
                        (0, l.jsx)('div', { className: en })
                    ]
                }),
            a
                ? (0, l.jsx)('div', {
                      className: V.wumpusImageContainer,
                      children: (0, l.jsx)(m.Eep, {
                          src: W,
                          mediaLayoutType: k.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: V.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(I.Z, { className: s()(V.title, V.tier2Title) }),
                            !x &&
                                L !== U.Si.TIER_2 &&
                                B &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-xs/bold',
                                        className: V.freeTrialPillInline,
                                        children: Q
                                    })
                                }),
                            (0, l.jsx)(K, {
                                isGift: x,
                                premiumTier: U.p9.TIER_2,
                                offerType: F,
                                offerTierMatchesCard: L === U.Si.TIER_2 || (0, y.Wp)(D, U.Si.TIER_2),
                                showYearlyPrice: c,
                                priceOptions: T,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(ee, {
                            featureSet: p,
                            isModal: f,
                            isGift: x
                        })
                    })
                ]
            }),
            x || (L !== U.Si.TIER_2 && null == D) ? null : (0, l.jsx)(M.t, { tier: U.p9.TIER_2 }),
            o,
            j && (0, l.jsx)(_.K, {})
        ]
    });
}
function ei(e) {
    let { innerRef: t, isApplicationHome: n, showWumpus: i, tier0CTAButton: r, tier2CTAButton: a, className: o } = e,
        { analyticsLocations: c } = (0, g.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        u = (e) => {
            null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
        };
    return (0, l.jsxs)(g.Gt, {
        value: c,
        children: [
            n &&
                (0, l.jsx)(m.X6q, {
                    ref: u,
                    className: V.applicationHomeTierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: D.intl.string(D.t.vLz3Zm)
                }),
            (0, l.jsxs)('div', {
                ref: u,
                className: s()(V.premiumCards, o),
                children: [
                    n
                        ? (0, l.jsx)(Q, { ctaButton: r })
                        : (0, l.jsx)($, {
                              showWumpus: i,
                              ctaButton: r
                          }),
                    n
                        ? (0, l.jsx)(et, {
                              ctaButton: a,
                              featureSet: 3
                          })
                        : (0, l.jsx)(en, {
                              showWumpus: i,
                              ctaButton: a
                          })
                ]
            })
        ]
    });
}
