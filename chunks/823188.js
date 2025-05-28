n.d(t, {
    C: () => z,
    Gq: () => $,
    NN: () => er,
    ZP: () => ei,
    ko: () => X,
    nT: () => ee,
    ql: () => Y,
    uZ: () => J,
    wp: () => en
});
var r,
    i,
    l,
    a = n(255367);
n(73800);
var s = n(120356),
    o = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    m = n(780384),
    C = n(481060),
    g = n(410030),
    p = n(100527),
    x = n(906732),
    h = n(535322),
    f = n(706454),
    v = n(594174),
    I = n(78839),
    T = n(483444),
    j = n(599250),
    P = n(942659),
    E = n(74538),
    N = n(357355),
    b = n(140465),
    _ = n(286961),
    S = n(33052),
    y = n(104494),
    R = n(639119),
    Z = n(230916),
    M = n(346497),
    w = n(382791),
    L = n(504865),
    O = n(63802),
    H = n(318990),
    V = n(575732),
    U = n(474936),
    k = n(217702),
    G = n(388032),
    A = n(195078),
    D = n(781793),
    F = n(499317),
    W = n(476945),
    B = n(945182),
    z = (((r = {})[(r.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (r[(r.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), r);
function K(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i, textVariant: l, isMarketingPageV2: s, enablePremiumRebrandDesign: c } = e;
    return (0, a.jsxs)('div', {
        className: o()(null != i ? i : D.itemWithWumpus, { [A.featureItem]: c }),
        children: [
            (0, a.jsx)(t, {
                className: c ? D.smallIcon : D.icon,
                color: 'currentColor'
            }),
            (0, a.jsx)(C.Text, {
                variant: null != l ? l : 'text-md/normal',
                color: c || s ? 'currentColor' : 'always-white',
                children: n
            }),
            r
                ? (0, a.jsx)(h.Z, {
                      className: D.newTagItem,
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
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: i } = e,
        l = (0, Z.A)(r);
    return (0, a.jsx)(a.Fragment, {
        children: G.intl.format(G.t.sJTwHR, {
            numMonths: null != (t = i.discount.user_usage_limit) ? t : U.rt,
            discountedPrice: l,
            regularPrice: n
        })
    });
}
function X(e) {
    var t, n, r, i, l, s, c;
    let { isGift: m, premiumTier: g, offerTierMatchesCard: p, offerType: x, showYearlyPrice: h, priceOptions: f, textVariant: T, className: j, isMarketingPageV2: P, enablePremiumRebrandDesign: N, headerClassName: _, headingVariant: S = 'heading-md/normal', headingColor: Z } = e,
        M = (0, d.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        w = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        O = (0, b.t7)(),
        H = (0, b.lr)(),
        V = g === U.p9.TIER_0 ? U.Si.TIER_0 : U.Si.TIER_2,
        k = (null == M ? void 0 : M.hasActiveTrial) ? (null == w ? void 0 : w.premiumType) : O ? U.p9.TIER_2 : null,
        A = (0, R.N)(),
        F = (0, y.Ng)(),
        W = null == A ? void 0 : A.subscription_trial;
    if (!P && !m && null != k && g === k && null != M && null != M.planIdFromItems) {
        let e = null != M.trialEndsAt ? u()(null == M ? void 0 : M.trialEndsAt).diff(u()(), 'd') : 0,
            i = U.GP[M.planIdFromItems],
            l = E.ZP.formatPriceString(E.ZP.getDefaultPrice(i.id), i.interval);
        return (0, a.jsx)(C.X6q, {
            variant: S,
            color: Z,
            className: o()(D.trialHeader, _),
            children:
                0 === x
                    ? G.intl.format(G.t['2CGBrq'], {
                          remainingTime: e,
                          price: l
                      })
                    : M.planIdFromItems === U.Xh.PREMIUM_YEAR_TIER_2
                      ? G.intl.format(G.t['+qqh6u'], {
                            percent: null != (t = null == H ? void 0 : H.percentage) ? t : U.Bo,
                            regularPrice: l
                        })
                      : G.intl.formatToPlainString(G.t['3Ziutb'], {
                            percent: null != (n = null == H ? void 0 : H.percentage) ? n : U.M_,
                            regularPrice: l,
                            numMonths: null != (r = null == H ? void 0 : H.duration) ? r : U.rt
                        })
        });
    }
    if (!P && !m && p) {
        let e = E.ZP.formatPriceString(E.ZP.getDefaultPrice(g === U.p9.TIER_0 ? U.Xh.PREMIUM_MONTH_TIER_0 : U.Xh.PREMIUM_MONTH_TIER_2), U.rV.MONTH);
        if (0 === x)
            return (0, a.jsx)(C.X6q, {
                variant: S,
                color: Z,
                className: o()(D.trialHeader, _),
                children: G.intl.format(G.t['9vyovr'], {
                    planName: (0, E.aq)(null != (l = U.IW[null != (i = null == W ? void 0 : W.sku_id) ? i : U.Si.NONE]) ? l : U.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, E.if)({
                        intervalType: null != (s = null == W ? void 0 : W.interval) ? s : U.rV.DAY,
                        intervalCount: null != (c = null == W ? void 0 : W.interval_count) ? c : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != F)
            return (0, a.jsx)(C.X6q, {
                variant: S,
                color: Z,
                className: o()(D.trialHeader, _),
                children: (0, a.jsx)(q, {
                    defaultPriceString: e,
                    subscriptionPlan: U.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: F
                })
            });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(L.Z, {
                subscriptionTier: V,
                isGift: m,
                className: null != j ? j : D.price,
                priceOptions: f,
                variant: T,
                isMarketingPageV2: P,
                enablePremiumRebrandDesign: N
            }),
            h &&
                (0, a.jsx)(L.Z, {
                    subscriptionTier: V,
                    interval: U.rV.YEAR,
                    className: null != j ? j : D.price,
                    isGift: m,
                    priceOptions: f,
                    variant: T,
                    isMarketingPageV2: P,
                    enablePremiumRebrandDesign: N
                })
        ]
    });
}
function Y(e) {
    let { isMarketingPageV2: t, enablePremiumRebrandDesign: n } = e;
    return t
        ? (0, a.jsx)(a.Fragment, {
              children: V.LH.map((e, t) => {
                  let { Icon: n, getText: r } = e;
                  return (0, a.jsx)(
                      K,
                      {
                          Icon: n,
                          text: r(),
                          className: D.itemV2,
                          textVariant: 'text-sm/normal',
                          isMarketingPageV2: !0
                      },
                      t
                  );
              })
          })
        : (0, a.jsx)(a.Fragment, {
              children: V.FV.map((e, t) => {
                  let { Icon: r, getText: i } = e;
                  return (0, a.jsx)(
                      K,
                      {
                          Icon: r,
                          text: i(),
                          enablePremiumRebrandDesign: n
                      },
                      t
                  );
              })
          });
}
function Q(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: i, isGift: l = !1, priceOptions: s } = e,
        c = (0, d.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        u = (0, R.N)(),
        m = null == u || null == (t = u.subscription_trial) ? void 0 : t.sku_id,
        C = !!(null == c ? void 0 : c.hasActiveTrial),
        g = null != m || C;
    return (0, a.jsxs)('div', {
        className: o()(D.tier0, D.card, D.tier0V2Background, i, {
            [D.withTier0Rim]: !l && g,
            [D.withCardHover]: !l && g
        }),
        children: [
            (0, a.jsx)('img', {
                src: F,
                className: D.v2starBackground,
                alt: ''
            }),
            (0, a.jsxs)('div', {
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(P.Z, { className: o()(D.title, D.tier0V2Title) }),
                            (0, a.jsx)(X, {
                                isGift: l,
                                premiumTier: U.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: m === U.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: s,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { children: (0, a.jsx)(Y, { isMarketingPageV2: !0 }) })
                ]
            }),
            n
        ]
    });
}
function $(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, className: l, isGift: s = !1, priceOptions: c } = e,
        u = (0, d.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        m = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        g = (0, R.N)(),
        p = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        x = !!(null == u ? void 0 : u.hasActiveTrial),
        h = x ? (null == m ? void 0 : m.premiumType) : null,
        f = null != p || x,
        T = (0, w.y_)(h, p);
    return (0, a.jsxs)('div', {
        className: o()(D.tier0, D.card, l, {
            [D.withTier0Rim]: !s && f,
            [D.withCardHover]: !s && f
        }),
        children: [
            !s &&
                null != T &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(w.Cy, {
                            text: T,
                            className: D.topRimPill,
                            colorOptions: w.VE.PREMIUM_TIER_0_WHITE_FILL
                        }),
                        (0, a.jsx)('div', { className: D.rimGlowTier0 })
                    ]
                }),
            n
                ? (0, a.jsx)('div', {
                      className: D.wumpusImageContainer,
                      children: (0, a.jsx)(C.Eep, {
                          src: W,
                          mediaLayoutType: k.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: D.wumpusImage
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(j.Z, { className: o()(D.title, D.tier0Title) }),
                            (0, a.jsx)(X, {
                                isGift: s,
                                premiumTier: U.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: p === U.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { children: (0, a.jsx)(Y, {}) })
                ]
            }),
            s || p !== U.Si.TIER_0 ? null : (0, a.jsx)(O.t, { tier: U.p9.TIER_0 }),
            r
        ]
    });
}
var J = (((i = {})[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.BOOSTING = 1)] = 'BOOSTING'), (i[(i.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (i[(i.V2 = 3)] = 'V2'), i);
function ee(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1, enablePremiumRebrandDesign: i = !1 } = e,
        l = (0, d.e7)([f.default], () => f.default.locale),
        s = (0, d.e7)([N.Z], () => N.Z.affinities),
        o = !i && n && !r && s.length > 0;
    switch (t) {
        case 3:
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(C.Text, {
                        variant: 'text-sm/bold',
                        className: D.tier2V2Subheader,
                        children: G.intl.string(G.t.AozD3d)
                    }),
                    V.Kw.map((e, t) => {
                        let { Icon: n, getText: r } = e;
                        return (0, a.jsx)(
                            K,
                            {
                                Icon: n,
                                text: r(),
                                className: D.itemV2,
                                textVariant: 'text-sm/normal',
                                isMarketingPageV2: !0
                            },
                            t
                        );
                    }),
                    o && (0, a.jsx)(H.Z, {})
                ]
            });
        case 1:
            return (0, a.jsx)(a.Fragment, {
                children: V.x7.map((e, t) => {
                    let { Icon: n, getText: r } = e;
                    return (0, a.jsx)(
                        K,
                        {
                            Icon: n,
                            text: r(l),
                            enablePremiumRebrandDesign: i
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, a.jsx)(a.Fragment, {
                children: V.Pc.map((e, t) => {
                    let { Icon: n, getText: r } = e;
                    return (0, a.jsx)(
                        K,
                        {
                            Icon: n,
                            text: r(),
                            enablePremiumRebrandDesign: i
                        },
                        t
                    );
                })
            });
        default:
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    V.Nv.map((e, t) => {
                        let { Icon: n, getText: r } = e;
                        return (0, a.jsx)(
                            K,
                            {
                                Icon: n,
                                text: r(),
                                enablePremiumRebrandDesign: i
                            },
                            t
                        );
                    }),
                    o && (0, a.jsx)(H.Z, {})
                ]
            });
    }
}
function et(e) {
    var t, n, r, i;
    let { ctaButton: l, showYearlyPrice: s, featureSet: c = 0, className: u, isGift: d = !1, isModal: m = !1, priceOptions: g, showPromotionalGiftBanner: p = !1 } = e,
        x = (0, R.N)(),
        h = null == x || null == (t = x.subscription_trial) ? void 0 : t.sku_id,
        f = (0, b.Nx)(),
        v = (0, y.Ng)(),
        I = null != x ? 0 : null != v ? 1 : null,
        j = (0, M.Vi)(),
        P = !d && f,
        E = null == (n = (0, _.Z)()) ? void 0 : n.planSelection,
        N = null == E || null == (r = E.getBackgroundImageUrl) ? void 0 : r.call(E),
        Z = null == E || null == (i = E.getCardImageUrl) ? void 0 : i.call(E),
        w = (0, M.W1)();
    return (0, a.jsxs)('div', {
        className: o()(D.card, D.tier2, D.tier2V2Background, u, {
            [D.withTier2Rim]: P,
            [D.withCardHover]: P,
            [D.withPromotionalGradientBanner]: p,
            [D.withPromotionalCardImage]: p && null != Z
        }),
        children: [
            p &&
                null != Z &&
                (0, a.jsx)('img', {
                    className: D.promotionalCardImage,
                    alt: '',
                    src: Z
                }),
            p &&
                null != N &&
                (0, a.jsx)('img', {
                    className: D.promotionalBackgroundImage,
                    alt: '',
                    src: N
                }),
            (0, a.jsx)('div', { className: D.tier2SideGradient }),
            (0, a.jsx)('img', {
                src: F,
                className: D.v2starBackground,
                alt: ''
            }),
            (0, a.jsxs)('div', {
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(T.Z, { className: o()(D.title, D.tier2V2Title) }),
                            !d &&
                                h !== U.Si.TIER_2 &&
                                j &&
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(C.Text, {
                                        variant: 'text-xs/bold',
                                        className: D.freeTrialPillInline,
                                        children: w
                                    })
                                }),
                            (0, a.jsx)(X, {
                                isGift: d,
                                premiumTier: U.p9.TIER_2,
                                offerType: I,
                                offerTierMatchesCard: h === U.Si.TIER_2 || (0, y.Wp)(v, U.Si.TIER_2),
                                showYearlyPrice: s,
                                priceOptions: g,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        children: (0, a.jsx)(ee, {
                            featureSet: c,
                            isModal: m,
                            isGift: d
                        })
                    })
                ]
            }),
            l,
            p && (0, a.jsx)(S.K, {})
        ]
    });
}
function en(e) {
    var t, n, r, i;
    let { showWumpus: l, ctaButton: s, showYearlyPrice: c, featureSet: u = 0, className: p, isGift: x = !1, isModal: h = !1, priceOptions: f, showPromotionalGiftBanner: j = !1 } = e,
        P = (0, d.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        E = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        N = (0, R.N)(),
        Z = null == N || null == (t = N.subscription_trial) ? void 0 : t.sku_id,
        L = (null == P ? void 0 : P.hasActiveTrial) ? (null == E ? void 0 : E.premiumType) : null,
        H = (0, b.Nx)(),
        V = (0, y.Ng)(),
        G = (0, b.t7)(),
        A = null != Z || null != L ? 0 : null != V || G ? 1 : null,
        F = (0, M.Vi)(),
        W = !x && H,
        z = null == (n = (0, _.Z)()) ? void 0 : n.planSelection,
        K = null == z || null == (r = z.getBackgroundImageUrl) ? void 0 : r.call(z),
        q = null == z || null == (i = z.getCardImageUrl) ? void 0 : i.call(z),
        Y = (0, M.W1)(),
        Q = (0, m.ap)((0, g.ZP)()),
        $ = Q ? w.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : w.VE.PREMIUM_TIER_2_WHITE_FILL,
        J = (0, w.A1)(G, L, V, N, Z),
        et = W && !Q ? D.rimGlowTier2 : void 0;
    return (0, a.jsxs)('div', {
        className: o()(D.card, D.tier2, p, {
            [D.withTier2Rim]: W,
            [D.withCardHover]: W,
            [D.withPromotionalGradientBanner]: j,
            [D.withPromotionalCardImage]: j && null != q
        }),
        children: [
            j &&
                null !== q &&
                (0, a.jsx)('img', {
                    className: D.promotionalCardImage,
                    alt: '',
                    src: q
                }),
            j &&
                null !== K &&
                (0, a.jsx)('img', {
                    className: D.promotionalBackgroundImage,
                    alt: '',
                    src: K
                }),
            !x &&
                null != J &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(w.Cy, {
                            text: J,
                            className: D.topRimPill,
                            colorOptions: $
                        }),
                        (0, a.jsx)('div', { className: et })
                    ]
                }),
            l
                ? (0, a.jsx)('div', {
                      className: D.wumpusImageContainer,
                      children: (0, a.jsx)(C.Eep, {
                          src: B,
                          mediaLayoutType: k.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: D.wumpusImage
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(T.Z, { className: o()(D.title, D.tier2Title) }),
                            !x &&
                                Z !== U.Si.TIER_2 &&
                                F &&
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(C.Text, {
                                        variant: 'text-xs/bold',
                                        className: D.freeTrialPillInline,
                                        children: Y
                                    })
                                }),
                            (0, a.jsx)(X, {
                                isGift: x,
                                premiumTier: U.p9.TIER_2,
                                offerType: A,
                                offerTierMatchesCard: Z === U.Si.TIER_2 || (0, y.Wp)(V, U.Si.TIER_2),
                                showYearlyPrice: c,
                                priceOptions: f,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        children: (0, a.jsx)(ee, {
                            featureSet: u,
                            isModal: h,
                            isGift: x
                        })
                    })
                ]
            }),
            x || (Z !== U.Si.TIER_2 && null == V) ? null : (0, a.jsx)(O.t, { tier: U.p9.TIER_2 }),
            s,
            j && (0, a.jsx)(S.K, {})
        ]
    });
}
var er = (((l = {})[(l.DEFAULT = 0)] = 'DEFAULT'), (l[(l.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2'), l);
function ei(e) {
    let { innerRef: t, variant: n, showWumpus: r, tier0CTAButton: i, tier2CTAButton: l, className: s } = e,
        { analyticsLocations: c } = (0, x.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        u = 1 === n,
        d = (e) => {
            null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
        };
    return (0, a.jsxs)(x.Gt, {
        value: c,
        children: [
            u &&
                (0, a.jsx)(C.X6q, {
                    ref: d,
                    className: D.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: G.intl.string(G.t.vLz3Zm)
                }),
            (0, a.jsxs)('div', {
                ref: d,
                className: o()(D.premiumCards, s),
                children: [
                    u
                        ? (0, a.jsx)(Q, { ctaButton: i })
                        : (0, a.jsx)($, {
                              showWumpus: r,
                              ctaButton: i
                          }),
                    u
                        ? (0, a.jsx)(et, {
                              ctaButton: l,
                              featureSet: 3
                          })
                        : (0, a.jsx)(en, {
                              showWumpus: r,
                              ctaButton: l
                          })
                ]
            })
        ]
    });
}
