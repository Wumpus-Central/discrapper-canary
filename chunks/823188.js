n.d(t, {
    C: () => z,
    Gq: () => $,
    NN: () => ei,
    ZP: () => er,
    ko: () => X,
    nT: () => ee,
    ql: () => Y,
    uZ: () => J,
    wp: () => en
});
var i,
    r,
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
    x = n(100527),
    p = n(906732),
    h = n(535322),
    f = n(706454),
    v = n(594174),
    T = n(78839),
    I = n(483444),
    j = n(599250),
    P = n(942659),
    E = n(74538),
    b = n(357355),
    N = n(140465),
    _ = n(286961),
    S = n(33052),
    y = n(104494),
    R = n(639119),
    Z = n(230916),
    M = n(346497),
    L = n(382791),
    w = n(504865),
    O = n(63802),
    H = n(318990),
    V = n(575732),
    k = n(474936),
    G = n(217702),
    U = n(388032),
    A = n(862189),
    D = n(261975),
    F = n(499317),
    W = n(476945),
    B = n(945182),
    z = (((i = {})[(i.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (i[(i.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), i);
function K(e) {
    let { Icon: t, text: n, isNew: i = !1, className: r, textVariant: l, isMarketingPageV2: s, enablePremiumRebrandDesign: c } = e;
    return (0, a.jsxs)('div', {
        className: o()(null != r ? r : D.itemWithWumpus, { [A.featureItem]: c }),
        children: [
            (0, a.jsx)(t, {
                className: D.icon,
                color: 'currentColor'
            }),
            (0, a.jsx)(C.Text, {
                variant: null != l ? l : 'text-md/normal',
                color: c || s ? 'currentColor' : 'always-white',
                children: n
            }),
            i
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
    let { defaultPriceString: n, subscriptionPlan: i, discountOffer: r } = e,
        l = (0, Z.A)(i);
    return (0, a.jsx)(a.Fragment, {
        children: U.intl.format(U.t.sJTwHR, {
            numMonths: null != (t = r.discount.user_usage_limit) ? t : k.rt,
            discountedPrice: l,
            regularPrice: n
        })
    });
}
function X(e) {
    var t, n, i, r, l, s, c;
    let { isGift: m, premiumTier: g, offerTierMatchesCard: x, offerType: p, showYearlyPrice: h, priceOptions: f, textVariant: I, className: j, isMarketingPageV2: P, enablePremiumRebrandDesign: b, headerClassName: _, headingVariant: S = 'heading-md/normal', headingColor: Z } = e,
        M = (0, d.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        L = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        O = (0, N.t7)(),
        H = (0, N.lr)(),
        V = g === k.p9.TIER_0 ? k.Si.TIER_0 : k.Si.TIER_2,
        G = (null == M ? void 0 : M.hasActiveTrial) ? (null == L ? void 0 : L.premiumType) : O ? k.p9.TIER_2 : null,
        A = (0, R.N)(),
        F = (0, y.Ng)(),
        W = null == A ? void 0 : A.subscription_trial;
    if (!P && !m && null != G && g === G && null != M && null != M.planIdFromItems) {
        let e = null != M.trialEndsAt ? u()(null == M ? void 0 : M.trialEndsAt).diff(u()(), 'd') : 0,
            r = k.GP[M.planIdFromItems],
            l = E.ZP.formatPriceString(E.ZP.getDefaultPrice(r.id), r.interval);
        return (0, a.jsx)(C.X6q, {
            variant: S,
            color: Z,
            className: o()(D.trialHeader, _),
            children:
                0 === p
                    ? U.intl.format(U.t['2CGBrq'], {
                          remainingTime: e,
                          price: l
                      })
                    : M.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2
                      ? U.intl.format(U.t['+qqh6u'], {
                            percent: null != (t = null == H ? void 0 : H.percentage) ? t : k.Bo,
                            regularPrice: l
                        })
                      : U.intl.formatToPlainString(U.t['3Ziutb'], {
                            percent: null != (n = null == H ? void 0 : H.percentage) ? n : k.M_,
                            regularPrice: l,
                            numMonths: null != (i = null == H ? void 0 : H.duration) ? i : k.rt
                        })
        });
    }
    if (!P && !m && x) {
        let e = E.ZP.formatPriceString(E.ZP.getDefaultPrice(g === k.p9.TIER_0 ? k.Xh.PREMIUM_MONTH_TIER_0 : k.Xh.PREMIUM_MONTH_TIER_2), k.rV.MONTH);
        if (0 === p)
            return (0, a.jsx)(C.X6q, {
                variant: S,
                color: Z,
                className: o()(D.trialHeader, _),
                children: U.intl.format(U.t['9vyovr'], {
                    planName: (0, E.aq)(null != (l = k.IW[null != (r = null == W ? void 0 : W.sku_id) ? r : k.Si.NONE]) ? l : k.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, E.if)({
                        intervalType: null != (s = null == W ? void 0 : W.interval) ? s : k.rV.DAY,
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
                    subscriptionPlan: k.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: F
                })
            });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(w.Z, {
                subscriptionTier: V,
                isGift: m,
                className: null != j ? j : D.price,
                priceOptions: f,
                variant: I,
                isMarketingPageV2: P,
                enablePremiumRebrandDesign: b
            }),
            h &&
                (0, a.jsx)(w.Z, {
                    subscriptionTier: V,
                    interval: k.rV.YEAR,
                    className: null != j ? j : D.price,
                    isGift: m,
                    priceOptions: f,
                    variant: I,
                    isMarketingPageV2: P,
                    enablePremiumRebrandDesign: b
                })
        ]
    });
}
function Y(e) {
    let { isMarketingPageV2: t, enablePremiumRebrandDesign: n } = e;
    return t
        ? (0, a.jsx)(a.Fragment, {
              children: V.LH.map((e, t) => {
                  let { Icon: n, getText: i } = e;
                  return (0, a.jsx)(
                      K,
                      {
                          Icon: n,
                          text: i(),
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
                  let { Icon: i, getText: r } = e;
                  return (0, a.jsx)(
                      K,
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
    let { ctaButton: n, showYearlyPrice: i, className: r, isGift: l = !1, priceOptions: s } = e,
        c = (0, d.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        u = (0, R.N)(),
        m = null == u || null == (t = u.subscription_trial) ? void 0 : t.sku_id,
        C = !!(null == c ? void 0 : c.hasActiveTrial),
        g = null != m || C;
    return (0, a.jsxs)('div', {
        className: o()(D.tier0, D.card, D.tier0V2Background, r, {
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
                                premiumTier: k.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: m === k.Si.TIER_0,
                                showYearlyPrice: i,
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
    let { showWumpus: n, ctaButton: i, showYearlyPrice: r, className: l, isGift: s = !1, priceOptions: c } = e,
        u = (0, d.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        m = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        g = (0, R.N)(),
        x = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        p = !!(null == u ? void 0 : u.hasActiveTrial),
        h = p ? (null == m ? void 0 : m.premiumType) : null,
        f = null != x || p,
        I = (0, L.y_)(h, x);
    return (0, a.jsxs)('div', {
        className: o()(D.tier0, D.card, l, {
            [D.withTier0Rim]: !s && f,
            [D.withCardHover]: !s && f
        }),
        children: [
            !s &&
                null != I &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(L.Cy, {
                            text: I,
                            className: D.topRimPill,
                            colorOptions: L.VE.PREMIUM_TIER_0_WHITE_FILL
                        }),
                        (0, a.jsx)('div', { className: D.rimGlowTier0 })
                    ]
                }),
            n
                ? (0, a.jsx)('div', {
                      className: D.wumpusImageContainer,
                      children: (0, a.jsx)(C.Eep, {
                          src: W,
                          mediaLayoutType: G.hV.RESPONSIVE,
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
                                premiumTier: k.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: x === k.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: c,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { children: (0, a.jsx)(Y, {}) })
                ]
            }),
            s || x !== k.Si.TIER_0 ? null : (0, a.jsx)(O.t, { tier: k.p9.TIER_0 }),
            i
        ]
    });
}
var J = (((r = {})[(r.DEFAULT = 0)] = 'DEFAULT'), (r[(r.BOOSTING = 1)] = 'BOOSTING'), (r[(r.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (r[(r.V2 = 3)] = 'V2'), r);
function ee(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: i = !1, enablePremiumRebrandDesign: r = !1 } = e,
        l = (0, d.e7)([f.default], () => f.default.locale),
        s = (0, d.e7)([b.Z], () => b.Z.affinities),
        o = n && !i && s.length > 0;
    switch (t) {
        case 3:
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(C.Text, {
                        variant: 'text-sm/bold',
                        className: D.tier2V2Subheader,
                        children: U.intl.string(U.t.AozD3d)
                    }),
                    V.Kw.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, a.jsx)(
                            K,
                            {
                                Icon: n,
                                text: i(),
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
                    let { Icon: n, getText: i } = e;
                    return (0, a.jsx)(
                        K,
                        {
                            Icon: n,
                            text: i(l),
                            enablePremiumRebrandDesign: r
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, a.jsx)(a.Fragment, {
                children: V.Pc.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, a.jsx)(
                        K,
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
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    V.Nv.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, a.jsx)(
                            K,
                            {
                                Icon: n,
                                text: i(),
                                enablePremiumRebrandDesign: r
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
    var t, n, i;
    let { ctaButton: r, showYearlyPrice: l, featureSet: s = 0, className: c, isGift: u = !1, isModal: d = !1, priceOptions: m, showPromotionalGiftBanner: g = !1 } = e,
        x = (0, R.N)(),
        p = null == x || null == (t = x.subscription_trial) ? void 0 : t.sku_id,
        h = (0, N.Nx)(),
        f = (0, y.Ng)(),
        v = null != x ? 0 : null != f ? 1 : null,
        T = (0, M.Vi)(),
        j = !u && h,
        P = null == (n = (0, _.Z)()) ? void 0 : n.planSelection,
        E = null == P || null == (i = P.getBackgroundImageUrl) ? void 0 : i.call(P),
        b = (0, M.W1)();
    return (0, a.jsxs)('div', {
        className: o()(D.card, D.tier2, D.tier2V2Background, c, {
            [D.withTier2Rim]: j,
            [D.withCardHover]: j,
            [D.withPromotionalGradientBanner]: g
        }),
        children: [
            g &&
                null != E &&
                (0, a.jsx)('img', {
                    className: D.promotionalBackgroundImage,
                    alt: '',
                    src: E
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
                            (0, a.jsx)(I.Z, { className: o()(D.title, D.tier2V2Title) }),
                            !u &&
                                p !== k.Si.TIER_2 &&
                                T &&
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(C.Text, {
                                        variant: 'text-xs/bold',
                                        className: D.freeTrialPillInline,
                                        children: b
                                    })
                                }),
                            (0, a.jsx)(X, {
                                isGift: u,
                                premiumTier: k.p9.TIER_2,
                                offerType: v,
                                offerTierMatchesCard: p === k.Si.TIER_2 || (0, y.Wp)(f, k.Si.TIER_2),
                                showYearlyPrice: l,
                                priceOptions: m,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        children: (0, a.jsx)(ee, {
                            featureSet: s,
                            isModal: d,
                            isGift: u
                        })
                    })
                ]
            }),
            r,
            g && (0, a.jsx)(S.K, {})
        ]
    });
}
function en(e) {
    var t, n, i;
    let { showWumpus: r, ctaButton: l, showYearlyPrice: s, featureSet: c = 0, className: u, isGift: x = !1, isModal: p = !1, priceOptions: h, showPromotionalGiftBanner: f = !1 } = e,
        j = (0, d.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        P = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        E = (0, R.N)(),
        b = null == E || null == (t = E.subscription_trial) ? void 0 : t.sku_id,
        Z = (null == j ? void 0 : j.hasActiveTrial) ? (null == P ? void 0 : P.premiumType) : null,
        w = (0, N.Nx)(),
        H = (0, y.Ng)(),
        V = (0, N.t7)(),
        U = null != b || null != Z ? 0 : null != H || V ? 1 : null,
        A = (0, M.Vi)(),
        F = !x && w,
        W = null == (n = (0, _.Z)()) ? void 0 : n.planSelection,
        z = null == W || null == (i = W.getBackgroundImageUrl) ? void 0 : i.call(W),
        K = (0, M.W1)(),
        q = (0, m.ap)((0, g.ZP)()),
        Y = q ? L.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : L.VE.PREMIUM_TIER_2_WHITE_FILL,
        Q = (0, L.A1)(V, Z, H, E, b),
        $ = F && !q ? D.rimGlowTier2 : void 0;
    return (0, a.jsxs)('div', {
        className: o()(D.card, D.tier2, u, {
            [D.withTier2Rim]: F,
            [D.withCardHover]: F,
            [D.withPromotionalGradientBanner]: f
        }),
        children: [
            f &&
                null !== z &&
                (0, a.jsx)('img', {
                    className: D.promotionalBackgroundImage,
                    alt: '',
                    src: z
                }),
            !x &&
                null != Q &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(L.Cy, {
                            text: Q,
                            className: D.topRimPill,
                            colorOptions: Y
                        }),
                        (0, a.jsx)('div', { className: $ })
                    ]
                }),
            r
                ? (0, a.jsx)('div', {
                      className: D.wumpusImageContainer,
                      children: (0, a.jsx)(C.Eep, {
                          src: B,
                          mediaLayoutType: G.hV.RESPONSIVE,
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
                            (0, a.jsx)(I.Z, { className: o()(D.title, D.tier2Title) }),
                            !x &&
                                b !== k.Si.TIER_2 &&
                                A &&
                                (0, a.jsx)('div', {
                                    children: (0, a.jsx)(C.Text, {
                                        variant: 'text-xs/bold',
                                        className: D.freeTrialPillInline,
                                        children: K
                                    })
                                }),
                            (0, a.jsx)(X, {
                                isGift: x,
                                premiumTier: k.p9.TIER_2,
                                offerType: U,
                                offerTierMatchesCard: b === k.Si.TIER_2 || (0, y.Wp)(H, k.Si.TIER_2),
                                showYearlyPrice: s,
                                priceOptions: h,
                                headingVariant: 'heading-md/normal',
                                headingColor: 'always-white'
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        children: (0, a.jsx)(ee, {
                            featureSet: c,
                            isModal: p,
                            isGift: x
                        })
                    })
                ]
            }),
            x || (b !== k.Si.TIER_2 && null == H) ? null : (0, a.jsx)(O.t, { tier: k.p9.TIER_2 }),
            l,
            f && (0, a.jsx)(S.K, {})
        ]
    });
}
var ei = (((l = {})[(l.DEFAULT = 0)] = 'DEFAULT'), (l[(l.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2'), l);
function er(e) {
    let { innerRef: t, variant: n, showWumpus: i, tier0CTAButton: r, tier2CTAButton: l, className: s } = e,
        { analyticsLocations: c } = (0, p.ZP)(x.Z.PREMIUM_MARKETING_TIER_CARD),
        u = 1 === n,
        d = (e) => {
            null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
        };
    return (0, a.jsxs)(p.Gt, {
        value: c,
        children: [
            u &&
                (0, a.jsx)(C.X6q, {
                    ref: d,
                    className: D.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: U.intl.string(U.t.vLz3Zm)
                }),
            (0, a.jsxs)('div', {
                ref: d,
                className: o()(D.premiumCards, s),
                children: [
                    u
                        ? (0, a.jsx)(Q, { ctaButton: r })
                        : (0, a.jsx)($, {
                              showWumpus: i,
                              ctaButton: r
                          }),
                    u
                        ? (0, a.jsx)(et, {
                              ctaButton: l,
                              featureSet: 3
                          })
                        : (0, a.jsx)(en, {
                              showWumpus: i,
                              ctaButton: l
                          })
                ]
            })
        ]
    });
}
