n.d(t, {
    Gq: () => X,
    NN: () => ee,
    ZP: () => et,
    nT: () => Q,
    uZ: () => Y,
    wp: () => J
});
var r,
    i,
    l = n(255367);
n(73800);
var a = n(120356),
    s = n.n(a),
    o = n(913527),
    c = n.n(o),
    u = n(442837),
    d = n(780384),
    C = n(481060),
    m = n(410030),
    p = n(100527),
    g = n(906732),
    x = n(535322),
    f = n(706454),
    h = n(594174),
    v = n(78839),
    T = n(483444),
    I = n(599250),
    j = n(942659),
    P = n(74538),
    N = n(357355),
    E = n(140465),
    S = n(286961),
    _ = n(33052),
    y = n(104494),
    Z = n(639119),
    b = n(230916),
    L = n(346497),
    w = n(382791),
    R = n(504865),
    M = n(63802),
    O = n(318990),
    H = n(575732),
    G = n(474936),
    V = n(217702),
    k = n(388032),
    U = n(781793),
    A = n(499317),
    F = n(476945),
    D = n(945182);
function W(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i, textVariant: a, isMarketingPageV2: s } = e;
    return (0, l.jsxs)('div', {
        className: null != i ? i : U.itemWithWumpus,
        children: [
            (0, l.jsx)(t, {
                className: U.icon,
                color: 'currentColor'
            }),
            (0, l.jsx)(C.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: s ? 'currentColor' : 'always-white',
                children: n
            }),
            r
                ? (0, l.jsx)(x.Z, {
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
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: i } = e,
        a = (0, b.A)(r);
    return (0, l.jsx)(l.Fragment, {
        children: k.intl.format(k.t.sJTwHR, {
            numMonths: null != (t = i.discount.user_usage_limit) ? t : G.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function z(e) {
    var t, n, r, i, a, s, o;
    let { isGift: d, premiumTier: m, offerTierMatchesCard: p, offerType: g, showYearlyPrice: x, priceOptions: f, textVariant: T, className: I, isMarketingPageV2: j } = e,
        N = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        S = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        _ = (0, E.t7)(),
        b = (0, E.lr)(),
        L = m === G.p9.TIER_0 ? G.Si.TIER_0 : G.Si.TIER_2,
        w = (null == N ? void 0 : N.hasActiveTrial) ? (null == S ? void 0 : S.premiumType) : _ ? G.p9.TIER_2 : null,
        M = (0, Z.N)(),
        O = (0, y.Ng)(),
        H = null == M ? void 0 : M.subscription_trial;
    if (!j && !d && null != w && m === w && null != N && null != N.planIdFromItems) {
        let e = null != N.trialEndsAt ? c()(null == N ? void 0 : N.trialEndsAt).diff(c()(), 'd') : 0,
            i = G.GP[N.planIdFromItems],
            a = P.ZP.formatPriceString(P.ZP.getDefaultPrice(i.id), i.interval);
        return (0, l.jsx)(C.X6q, {
            variant: 'heading-md/normal',
            color: 'always-white',
            className: U.trialHeader,
            children:
                0 === g
                    ? k.intl.format(k.t['2CGBrq'], {
                          remainingTime: e,
                          price: a
                      })
                    : N.planIdFromItems === G.Xh.PREMIUM_YEAR_TIER_2
                      ? k.intl.format(k.t['+qqh6u'], {
                            percent: null != (t = null == b ? void 0 : b.percentage) ? t : G.Bo,
                            regularPrice: a
                        })
                      : k.intl.formatToPlainString(k.t['3Ziutb'], {
                            percent: null != (n = null == b ? void 0 : b.percentage) ? n : G.M_,
                            regularPrice: a,
                            numMonths: null != (r = null == b ? void 0 : b.duration) ? r : G.rt
                        })
        });
    }
    if (!j && !d && p) {
        let e = P.ZP.formatPriceString(P.ZP.getDefaultPrice(m === G.p9.TIER_0 ? G.Xh.PREMIUM_MONTH_TIER_0 : G.Xh.PREMIUM_MONTH_TIER_2), G.rV.MONTH);
        if (0 === g)
            return (0, l.jsx)(C.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: U.trialHeader,
                children: k.intl.format(k.t['9vyovr'], {
                    planName: (0, P.aq)(null != (a = G.IW[null != (i = null == H ? void 0 : H.sku_id) ? i : G.Si.NONE]) ? a : G.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, P.if)({
                        intervalType: null != (s = null == H ? void 0 : H.interval) ? s : G.rV.DAY,
                        intervalCount: null != (o = null == H ? void 0 : H.interval_count) ? o : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != O)
            return (0, l.jsx)(C.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: U.trialHeader,
                children: (0, l.jsx)(B, {
                    defaultPriceString: e,
                    subscriptionPlan: G.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: O
                })
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.Z, {
                subscriptionTier: L,
                isGift: d,
                className: null != I ? I : U.price,
                priceOptions: f,
                variant: T,
                isMarketingPageV2: j
            }),
            x &&
                (0, l.jsx)(R.Z, {
                    subscriptionTier: L,
                    interval: G.rV.YEAR,
                    className: null != I ? I : U.price,
                    isGift: d,
                    priceOptions: f,
                    variant: T,
                    isMarketingPageV2: j
                })
        ]
    });
}
function K(e) {
    let { isMarketingPageV2: t } = e;
    return t
        ? (0, l.jsx)(l.Fragment, {
              children: H.LH.map((e, t) => {
                  let { Icon: n, getText: r } = e;
                  return (0, l.jsx)(
                      W,
                      {
                          Icon: n,
                          text: r(),
                          className: U.itemV2,
                          textVariant: 'text-sm/normal',
                          isMarketingPageV2: !0
                      },
                      t
                  );
              })
          })
        : (0, l.jsx)(l.Fragment, {
              children: H.FV.map((e, t) => {
                  let { Icon: n, getText: r } = e;
                  return (0, l.jsx)(
                      W,
                      {
                          Icon: n,
                          text: r()
                      },
                      t
                  );
              })
          });
}
function q(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: i, isGift: a = !1, priceOptions: o } = e,
        c = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        d = (0, Z.N)(),
        C = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        m = !!(null == c ? void 0 : c.hasActiveTrial),
        p = null != C || m;
    return (0, l.jsxs)('div', {
        className: s()(U.tier0, U.card, U.tier0V2Background, i, {
            [U.withTier0Rim]: !a && p,
            [U.withCardHover]: !a && p
        }),
        children: [
            (0, l.jsx)('img', {
                src: A,
                className: U.v2starBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(j.Z, { className: s()(U.title, U.tier0V2Title) }),
                            (0, l.jsx)(z, {
                                isGift: a,
                                premiumTier: G.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: C === G.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: o,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(K, { isMarketingPageV2: !0 }) })
                ]
            }),
            n
        ]
    });
}
function X(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, className: a, isGift: o = !1, priceOptions: c } = e,
        d = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        m = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        p = (0, Z.N)(),
        g = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id,
        x = !!(null == d ? void 0 : d.hasActiveTrial),
        f = x ? (null == m ? void 0 : m.premiumType) : null,
        T = null != g || x,
        j = (0, w.y_)(f, g);
    return (0, l.jsxs)('div', {
        className: s()(U.tier0, U.card, a, {
            [U.withTier0Rim]: !o && T,
            [U.withCardHover]: !o && T
        }),
        children: [
            !o &&
                null != j &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(w.Cy, {
                            text: j,
                            className: U.topRimPill,
                            colorOptions: w.VE.PREMIUM_TIER_0_WHITE_FILL
                        }),
                        (0, l.jsx)('div', { className: U.rimGlowTier0 })
                    ]
                }),
            n
                ? (0, l.jsx)('div', {
                      className: U.wumpusImageContainer,
                      children: (0, l.jsx)(C.Eep, {
                          src: F,
                          mediaLayoutType: V.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(I.Z, { className: s()(U.title, U.tier0Title) }),
                            (0, l.jsx)(z, {
                                isGift: o,
                                premiumTier: G.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: g === G.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(K, {}) })
                ]
            }),
            o || g !== G.Si.TIER_0 ? null : (0, l.jsx)(M.t, { tier: G.p9.TIER_0 }),
            r
        ]
    });
}
var Y = (((r = {})[(r.DEFAULT = 0)] = 'DEFAULT'), (r[(r.BOOSTING = 1)] = 'BOOSTING'), (r[(r.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (r[(r.V2 = 3)] = 'V2'), r);
function Q(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        i = (0, u.e7)([f.default], () => f.default.locale),
        a = (0, u.e7)([N.Z], () => N.Z.affinities),
        s = n && !r && a.length > 0;
    switch (t) {
        case 3:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(C.Text, {
                        variant: 'text-sm/bold',
                        className: U.tier2V2Subheader,
                        children: k.intl.string(k.t.AozD3d)
                    }),
                    H.Kw.map((e, t) => {
                        let { Icon: n, getText: r } = e;
                        return (0, l.jsx)(
                            W,
                            {
                                Icon: n,
                                text: r(),
                                className: U.itemV2,
                                textVariant: 'text-sm/normal',
                                isMarketingPageV2: !0
                            },
                            t
                        );
                    }),
                    s && (0, l.jsx)(O.Z, {})
                ]
            });
        case 1:
            return (0, l.jsx)(l.Fragment, {
                children: H.x7.map((e, t) => {
                    let { Icon: n, getText: r } = e;
                    return (0, l.jsx)(
                        W,
                        {
                            Icon: n,
                            text: r(i)
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, l.jsx)(l.Fragment, {
                children: H.Pc.map((e, t) => {
                    let { Icon: n, getText: r } = e;
                    return (0, l.jsx)(
                        W,
                        {
                            Icon: n,
                            text: r()
                        },
                        t
                    );
                })
            });
        default:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    H.Nv.map((e, t) => {
                        let { Icon: n, getText: r } = e;
                        return (0, l.jsx)(
                            W,
                            {
                                Icon: n,
                                text: r()
                            },
                            t
                        );
                    }),
                    s && (0, l.jsx)(O.Z, {})
                ]
            });
    }
}
function $(e) {
    var t, n, r;
    let { ctaButton: i, showYearlyPrice: a, featureSet: o = 0, className: c, isGift: u = !1, isModal: d = !1, priceOptions: m, showPromotionalGiftBanner: p = !1 } = e,
        g = (0, Z.N)(),
        x = null == g || null == (t = g.subscription_trial) ? void 0 : t.sku_id,
        f = (0, E.Nx)(),
        h = (0, y.Ng)(),
        v = null != g ? 0 : null != h ? 1 : null,
        I = (0, L.Vi)(),
        j = !u && f,
        P = null == (n = (0, S.Z)()) ? void 0 : n.planSelection,
        N = null == P || null == (r = P.getBackgroundImageUrl) ? void 0 : r.call(P),
        b = (0, L.W1)();
    return (0, l.jsxs)('div', {
        className: s()(U.card, U.tier2, U.tier2V2Background, c, {
            [U.withTier2Rim]: j,
            [U.withCardHover]: j,
            [U.withPromotionalGradientBanner]: p
        }),
        children: [
            p &&
                null != N &&
                (0, l.jsx)('img', {
                    className: U.promotionalBackgroundImage,
                    alt: '',
                    src: N
                }),
            (0, l.jsx)('div', { className: U.tier2SideGradient }),
            (0, l.jsx)('img', {
                src: A,
                className: U.v2starBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(T.Z, { className: s()(U.title, U.tier2V2Title) }),
                            !u &&
                                x !== G.Si.TIER_2 &&
                                I &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(C.Text, {
                                        variant: 'text-xs/bold',
                                        className: U.freeTrialPillInline,
                                        children: b
                                    })
                                }),
                            (0, l.jsx)(z, {
                                isGift: u,
                                premiumTier: G.p9.TIER_2,
                                offerType: v,
                                offerTierMatchesCard: x === G.Si.TIER_2 || (0, y.Wp)(h, G.Si.TIER_2),
                                showYearlyPrice: a,
                                priceOptions: m,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(Q, {
                            featureSet: o,
                            isModal: d,
                            isGift: u
                        })
                    })
                ]
            }),
            i,
            p && (0, l.jsx)(_.K, {})
        ]
    });
}
function J(e) {
    var t, n, r;
    let { showWumpus: i, ctaButton: a, showYearlyPrice: o, featureSet: c = 0, className: p, isGift: g = !1, isModal: x = !1, priceOptions: f, showPromotionalGiftBanner: I = !1 } = e,
        j = (0, u.e7)([v.ZP], () => v.ZP.getPremiumTypeSubscription()),
        P = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        N = (0, Z.N)(),
        b = null == N || null == (t = N.subscription_trial) ? void 0 : t.sku_id,
        R = (null == j ? void 0 : j.hasActiveTrial) ? (null == P ? void 0 : P.premiumType) : null,
        O = (0, E.Nx)(),
        H = (0, y.Ng)(),
        k = (0, E.t7)(),
        A = null != b || null != R ? 0 : null != H || k ? 1 : null,
        F = (0, L.Vi)(),
        W = !g && O,
        B = null == (n = (0, S.Z)()) ? void 0 : n.planSelection,
        K = null == B || null == (r = B.getBackgroundImageUrl) ? void 0 : r.call(B),
        q = (0, L.W1)(),
        X = (0, d.ap)((0, m.ZP)()),
        Y = X ? w.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : w.VE.PREMIUM_TIER_2_WHITE_FILL,
        $ = (0, w.A1)(k, R, H, N, b),
        J = W && !X ? U.rimGlowTier2 : void 0;
    return (0, l.jsxs)('div', {
        className: s()(U.card, U.tier2, p, {
            [U.withTier2Rim]: W,
            [U.withCardHover]: W,
            [U.withPromotionalGradientBanner]: I
        }),
        children: [
            I &&
                null !== K &&
                (0, l.jsx)('img', {
                    className: U.promotionalBackgroundImage,
                    alt: '',
                    src: K
                }),
            !g &&
                null != $ &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(w.Cy, {
                            text: $,
                            className: U.topRimPill,
                            colorOptions: Y
                        }),
                        (0, l.jsx)('div', { className: J })
                    ]
                }),
            i
                ? (0, l.jsx)('div', {
                      className: U.wumpusImageContainer,
                      children: (0, l.jsx)(C.Eep, {
                          src: D,
                          mediaLayoutType: V.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(T.Z, { className: s()(U.title, U.tier2Title) }),
                            !g &&
                                b !== G.Si.TIER_2 &&
                                F &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(C.Text, {
                                        variant: 'text-xs/bold',
                                        className: U.freeTrialPillInline,
                                        children: q
                                    })
                                }),
                            (0, l.jsx)(z, {
                                isGift: g,
                                premiumTier: G.p9.TIER_2,
                                offerType: A,
                                offerTierMatchesCard: b === G.Si.TIER_2 || (0, y.Wp)(H, G.Si.TIER_2),
                                showYearlyPrice: o,
                                priceOptions: f
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(Q, {
                            featureSet: c,
                            isModal: x,
                            isGift: g
                        })
                    })
                ]
            }),
            g || (b !== G.Si.TIER_2 && null == H) ? null : (0, l.jsx)(M.t, { tier: G.p9.TIER_2 }),
            a,
            I && (0, l.jsx)(_.K, {})
        ]
    });
}
var ee = (((i = {})[(i.DEFAULT = 0)] = 'DEFAULT'), (i[(i.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2'), i);
function et(e) {
    let { innerRef: t, variant: n, showWumpus: r, tier0CTAButton: i, tier2CTAButton: a, className: o } = e,
        { analyticsLocations: c } = (0, g.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        u = 1 === n,
        d = (e) => {
            null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
        };
    return (0, l.jsxs)(g.Gt, {
        value: c,
        children: [
            u &&
                (0, l.jsx)(C.X6q, {
                    ref: d,
                    className: U.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: k.intl.string(k.t.vLz3Zm)
                }),
            (0, l.jsxs)('div', {
                ref: d,
                className: s()(U.premiumCards, o),
                children: [
                    u
                        ? (0, l.jsx)(q, { ctaButton: i })
                        : (0, l.jsx)(X, {
                              showWumpus: r,
                              ctaButton: i
                          }),
                    u
                        ? (0, l.jsx)($, {
                              ctaButton: a,
                              featureSet: 3
                          })
                        : (0, l.jsx)(J, {
                              showWumpus: r,
                              ctaButton: a
                          })
                ]
            })
        ]
    });
}
