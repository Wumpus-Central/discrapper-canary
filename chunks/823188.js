n.d(t, {
    Cy: () => K,
    Gq: () => $,
    NN: () => ea,
    VE: () => Y,
    ZP: () => es,
    lq: () => ee,
    mn: () => W,
    nT: () => en,
    uZ: () => et,
    wp: () => er
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(692547),
    c = n(780384),
    d = n(481060),
    f = n(410030),
    _ = n(100527),
    p = n(906732),
    h = n(535322),
    m = n(706454),
    g = n(594174),
    E = n(78839),
    v = n(709586),
    y = n(483444),
    I = n(599250),
    b = n(942659),
    T = n(930153),
    S = n(74538),
    A = n(357355),
    N = n(140465),
    C = n(650032),
    R = n(286961),
    O = n(33052),
    D = n(104494),
    x = n(639119),
    L = n(230916),
    P = n(346497),
    w = n(504865),
    M = n(63802),
    k = n(318990),
    U = n(474936),
    G = n(217702),
    B = n(388032),
    Z = n(521855),
    F = n(499317),
    V = n(476945),
    j = n(945182);
let H = 'Tier2Card';
var Y = (function (e) {
    return (e[(e.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (e[(e.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (e[(e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), (e[(e.PREMIUM_TIER_2_GREY_FILL = 6)] = 'PREMIUM_TIER_2_GREY_FILL'), e;
})({});
function W(e) {
    let { text: t, className: n, colorOptions: r = 2 } = e;
    return (0, i.jsx)('div', {
        className: a()(n, Z.freeTrialPill, {
            [Z.freeTrialPillTier0GradientFill]: 1 === r,
            [Z.freeTrialPillTier2GradientFill]: 3 === r,
            [Z.freeTrialPillTier2OldGradientFill]: 4 === r,
            [Z.lightBackgroundPill]: 5 === r,
            [Z.greyBackgroundPill]: 6 === r
        }),
        children: (0, i.jsx)(d.Text, {
            variant: 'text-xs/bold',
            className: a()(Z.freeTrialPillText, {
                [Z.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [Z.freeTrialPillTextTier0]: 0 === r,
                [Z.freeTrialPillTextTier2]: 2 === r || 6 === r
            }),
            children: t
        })
    });
}
function K(e) {
    let t,
        { text: n, className: r, colorOptions: s = 2, isPillOnBorder: o = !0 } = e;
    switch (s) {
        case 1:
            t = u.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(M.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(M.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return o
        ? (0, i.jsxs)('div', {
              className: a()(r, Z.freeTrialPillWithSparkles),
              children: [
                  (0, i.jsx)(M.R9, {
                      foreground: Z.sparkleStar1,
                      color: t
                  }),
                  (0, i.jsx)(M.R9, {
                      foreground: Z.sparkleStar2,
                      color: t
                  }),
                  (0, i.jsx)(M.R9, {
                      foreground: Z.sparkleStar3,
                      color: t
                  }),
                  (0, i.jsx)(W, {
                      text: n,
                      colorOptions: s
                  }),
                  (0, i.jsx)(M.R9, {
                      foreground: Z.sparkleStar4,
                      color: t
                  }),
                  (0, i.jsx)(M.R9, {
                      foreground: Z.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: a()(r, Z.freeTrialPillWithSparkles),
              children: [
                  (0, i.jsx)(W, {
                      text: n,
                      colorOptions: s
                  }),
                  (0, i.jsx)(M.R9, {
                      foreground: Z.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, i.jsx)(M.R9, {
                      foreground: Z.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function z(e) {
    let { Icon: t, text: n, isNew: r = !1, className: a, textVariant: s, isMarketingPageV2: o } = e;
    return (0, i.jsxs)('div', {
        className: null != a ? a : Z.itemWithWumpus,
        children: [
            (0, i.jsx)(t, {
                className: Z.icon,
                color: 'currentColor'
            }),
            (0, i.jsx)(d.Text, {
                variant: null != s ? s : 'text-md/normal',
                color: o ? 'currentColor' : 'always-white',
                children: n
            }),
            r
                ? (0, i.jsx)(h.Z, {
                      className: Z.newTagItem,
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
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: a } = e,
        s = (0, L.A)(r);
    return (0, i.jsx)(i.Fragment, {
        children: B.intl.format(B.t.sJTwHR, {
            numMonths: null !== (t = a.discount.user_usage_limit) && void 0 !== t ? t : U.rt,
            discountedPrice: s,
            regularPrice: n
        })
    });
}
function Q(e) {
    let { isGift: t, premiumTier: n, offerTierMatchesCard: r, offerType: a, showYearlyPrice: s, priceOptions: u, textVariant: c, className: f, isMarketingPageV2: _ } = e,
        p = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        h = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        m = (0, N.t7)(),
        v = (0, N.lr)(),
        y = n === U.p9.TIER_0 ? U.Si.TIER_0 : U.Si.TIER_2,
        I = (null == p ? void 0 : p.trialId) != null ? (null == h ? void 0 : h.premiumType) : m ? U.p9.TIER_2 : null,
        b = (0, x.N)(),
        T = (0, D.Ng)(),
        A = null == b ? void 0 : b.subscription_trial;
    if (!_ && !t && null != I && n === I && null != p && null != p.planIdFromItems) {
        let e = null != p.trialEndsAt ? o()(null == p ? void 0 : p.trialEndsAt).diff(o()(), 'd') : 0,
            t = U.GP[p.planIdFromItems],
            n = S.ZP.formatPriceString(S.ZP.getDefaultPrice(t.id), t.interval),
            r = () => {
                var t, i, r;
                return 0 === a
                    ? B.intl.format(B.t['2CGBrq'], {
                          remainingTime: e,
                          price: n
                      })
                    : p.planIdFromItems === U.Xh.PREMIUM_YEAR_TIER_2
                      ? B.intl.format(B.t['+qqh6u'], {
                            percent: null !== (t = null == v ? void 0 : v.percentage) && void 0 !== t ? t : U.Bo,
                            regularPrice: n
                        })
                      : B.intl.formatToPlainString(B.t['3Ziutb'], {
                            percent: null !== (i = null == v ? void 0 : v.percentage) && void 0 !== i ? i : U.M_,
                            regularPrice: n,
                            numMonths: null !== (r = null == v ? void 0 : v.duration) && void 0 !== r ? r : U.rt
                        });
            };
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Z.trialHeader,
                children: r()
            })
        });
    }
    if (!_ && !t && r) {
        let e = S.ZP.formatPriceString(S.ZP.getDefaultPrice(n === U.p9.TIER_0 ? U.Xh.PREMIUM_MONTH_TIER_0 : U.Xh.PREMIUM_MONTH_TIER_2), U.rV.MONTH);
        if (0 === a) {
            var C, R, O, L;
            return (0, i.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Z.trialHeader,
                children: B.intl.format(B.t['9vyovr'], {
                    planName: (0, S.aq)(null !== (R = U.IW[null !== (C = null == A ? void 0 : A.sku_id) && void 0 !== C ? C : U.Si.NONE]) && void 0 !== R ? R : U.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, S.if)({
                        intervalType: null !== (O = null == A ? void 0 : A.interval) && void 0 !== O ? O : U.rV.DAY,
                        intervalCount: null !== (L = null == A ? void 0 : A.interval_count) && void 0 !== L ? L : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != T)
            return (0, i.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Z.trialHeader,
                children: (0, i.jsx)(q, {
                    defaultPriceString: e,
                    subscriptionPlan: U.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: T
                })
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.Z, {
                subscriptionTier: y,
                isGift: t,
                className: null != f ? f : Z.price,
                priceOptions: u,
                variant: c,
                isMarketingPageV2: _
            }),
            s &&
                (0, i.jsx)(w.Z, {
                    subscriptionTier: y,
                    interval: U.rV.YEAR,
                    className: null != f ? f : Z.price,
                    isGift: t,
                    priceOptions: u,
                    variant: c,
                    isMarketingPageV2: _
                })
        ]
    });
}
function X(e) {
    let { isMarketingPageV2: t } = e;
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(z, {
                      Icon: d.dz2,
                      text: B.intl.string(B.t.KjrZ8f),
                      className: Z.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, i.jsx)(z, {
                      Icon: d.dz2,
                      text: B.intl.formatToPlainString(B.t.p8QVLS, { maxUploadPremium: (0, S.v9)(U.p9.TIER_0, { useSpace: !1 }) }),
                      className: Z.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, i.jsx)(z, {
                      Icon: d.dz2,
                      text: B.intl.string(B.t.Uukj4u),
                      className: Z.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(z, {
                      Icon: d.rG2,
                      text: B.intl.formatToPlainString(B.t.p8QVLS, { maxUploadPremium: (0, S.v9)(U.p9.TIER_0, { useSpace: !1 }) })
                  }),
                  (0, i.jsx)(z, {
                      Icon: d.EO4,
                      text: B.intl.string(B.t.KjrZ8f)
                  }),
                  (0, i.jsx)(z, {
                      Icon: d.Pt5,
                      text: B.intl.string(B.t.taMwg4)
                  }),
                  (0, i.jsx)(z, {
                      Icon: d.SrA,
                      text: B.intl.string(B.t['8ukxAQ'])
                  })
              ]
          });
}
function J(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: r, className: s, isGift: o = !1, priceOptions: u } = e,
        c = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        d = (0, x.N)(),
        f = null == d ? void 0 : null === (t = d.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        _ = (null == c ? void 0 : c.trialId) != null,
        p = null != f || _;
    return (0, i.jsxs)('div', {
        className: a()(Z.tier0, Z.card, Z.tier0V2Background, s, {
            [Z.withTier0Rim]: !o && p,
            [Z.withCardHover]: !o && p
        }),
        children: [
            (0, i.jsx)('img', {
                src: F,
                className: Z.v2starBackground,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(b.Z, { className: a()(Z.title, Z.tier0V2Title) }),
                            (0, i.jsx)(Q, {
                                isGift: o,
                                premiumTier: U.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: f === U.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: u,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { children: (0, i.jsx)(X, { isMarketingPageV2: !0 }) })
                ]
            }),
            n
        ]
    });
}
function $(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: s, className: o, isGift: u = !1, priceOptions: c } = e,
        f = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        _ = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        p = (0, x.N)(),
        h = null == p ? void 0 : null === (t = p.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        m = (null == f ? void 0 : f.trialId) != null,
        v = (null == f ? void 0 : f.trialId) != null ? (null == _ ? void 0 : _.premiumType) : null,
        y = null != h || m;
    return (0, i.jsxs)('div', {
        className: a()(Z.tier0, Z.card, o, {
            [Z.withTier0Rim]: !u && y,
            [Z.withCardHover]: !u && y
        }),
        children: [
            h === U.Si.TIER_0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(K, {
                              text: B.intl.string(B.t.IBYG5e),
                              className: Z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, i.jsx)('div', { className: Z.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, i.jsx)('div', {
                      className: Z.wumpusImageContainer,
                      children: (0, i.jsx)(d.Eep, {
                          src: V,
                          mediaLayoutType: G.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Z.wumpusImage
                      })
                  })
                : null,
            u || h !== U.Si.TIER_0
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(K, {
                              text: B.intl.string(B.t.IBYG5e),
                              className: Z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, i.jsx)('div', { className: Z.rimGlowTier0 })
                      ]
                  }),
            u || v !== U.p9.TIER_0
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(K, {
                              text: B.intl.string(B.t.qYKftb),
                              className: Z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, i.jsx)('div', { className: Z.rimGlowTier0 })
                      ]
                  }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(I.Z, { className: a()(Z.title, Z.tier0Title) }),
                            (0, i.jsx)(Q, {
                                isGift: u,
                                premiumTier: U.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: h === U.Si.TIER_0,
                                showYearlyPrice: s,
                                priceOptions: c
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { children: (0, i.jsx)(X, {}) })
                ]
            }),
            u || h !== U.Si.TIER_0 ? null : (0, i.jsx)(M.t, { tier: U.p9.TIER_0 }),
            r
        ]
    });
}
function ee(e) {
    var t;
    let { showWumpus: n, showYearlyPrice: r, className: s, isGift: o = !1, priceOptions: l } = e,
        u = (0, x.N)(),
        c = null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.sku_id;
    return (0, i.jsxs)('div', {
        className: a()(Z.tier0, Z.card, s),
        children: [
            n
                ? (0, i.jsx)('div', {
                      className: Z.wumpusImageContainer,
                      children: (0, i.jsx)(d.Eep, {
                          src: V,
                          mediaLayoutType: G.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Z.wumpusImage
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(I.Z, { className: a()(Z.title, Z.tier0Title) }),
                            (0, i.jsx)(Q, {
                                isGift: o,
                                premiumTier: U.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: c === U.Si.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: l
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(z, {
                                Icon: d.rG2,
                                text: B.intl.formatToPlainString(B.t.p8QVLS, { maxUploadPremium: (0, S.v9)(U.p9.TIER_0, { useSpace: !1 }) })
                            }),
                            (0, i.jsx)(z, {
                                Icon: d.EO4,
                                text: B.intl.string(B.t.KjrZ8f)
                            }),
                            (0, i.jsx)(z, {
                                Icon: d.V3v,
                                text: B.intl.string(B.t.OuItFh)
                            }),
                            (0, i.jsx)(z, {
                                Icon: d.SrA,
                                text: B.intl.string(B.t['8ukxAQ'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var et = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.BOOSTING = 1)] = 'BOOSTING'), (e[(e.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (e[(e.V2 = 3)] = 'V2'), e;
})({});
function en(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        a = (0, l.e7)([m.default], () => m.default.locale),
        s = (0, l.e7)([A.Z], () => A.Z.affinities),
        o = n && !r && s.length > 0;
    switch (t) {
        case 3:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/bold',
                        className: Z.tier2V2Subheader,
                        children: B.intl.string(B.t.AozD3d)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.dz2,
                        text: B.intl.string(B.t.kpMomJ),
                        className: Z.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.dz2,
                        text: B.intl.formatToPlainString(B.t.p8QVLS, { maxUploadPremium: (0, S.v9)(U.p9.TIER_2, { useSpace: !1 }) }),
                        className: Z.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.dz2,
                        text: B.intl.string(B.t.W180bW),
                        className: Z.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.dz2,
                        text: B.intl.string(B.t.zTk8Ul),
                        className: Z.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    o && (0, i.jsx)(k.Z, {})
                ]
            });
        case 1:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(z, {
                        Icon: (0, d.GSL)(v.Z),
                        text: B.intl.formatToPlainString(B.t.T9RTr6, {
                            numBoosts: U.cb,
                            percentageOff: (0, T.T3)(a, U.Rr / 100)
                        })
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.rG2,
                        text: B.intl.formatToPlainString(B.t.p8QVLS, { maxUploadPremium: (0, S.v9)(U.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.EO4,
                        text: B.intl.string(B.t.KjrZ8f)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.hGI,
                        text: B.intl.string(B.t.W180bW)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.kYE,
                        text: B.intl.string(B.t.CNIZf3)
                    })
                ]
            });
        case 2:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(z, {
                        Icon: d.rG2,
                        text: B.intl.formatToPlainString(B.t.p8QVLS, { maxUploadPremium: (0, S.v9)(U.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.EO4,
                        text: B.intl.string(B.t.KjrZ8f)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.Pt5,
                        text: B.intl.string(B.t.taMwg4)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.hGI,
                        text: B.intl.string(B.t.W180bW)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.kYE,
                        text: B.intl.string(B.t.CNIZf3)
                    })
                ]
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(z, {
                        Icon: d.rG2,
                        text: B.intl.formatToPlainString(B.t.p8QVLS, { maxUploadPremium: (0, S.v9)(U.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.EO4,
                        text: B.intl.string(B.t.KjrZ8f)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.Pt5,
                        text: B.intl.string(B.t.taMwg4)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.hGI,
                        text: B.intl.string(B.t.W180bW)
                    }),
                    (0, i.jsx)(z, {
                        Icon: (0, d.GSL)(v.Z),
                        text: B.intl.string(B.t.cdfuUV)
                    }),
                    (0, i.jsx)(z, {
                        Icon: d.kYE,
                        text: B.intl.string(B.t.CNIZf3)
                    }),
                    o && (0, i.jsx)(k.Z, {})
                ]
            });
    }
}
function ei(e) {
    var t, n, r;
    let { ctaButton: s, showYearlyPrice: o, featureSet: l = 0, className: u, isGift: c = !1, isModal: f = !1, priceOptions: _, showPromotionalGiftBanner: p = !1 } = e,
        h = (0, x.N)(),
        m = null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        g = (0, N.Nx)(),
        E = (0, D.Ng)(),
        v = null != h ? 0 : null != E ? 1 : null,
        I = (0, P.Vi)(),
        b = !c && g,
        T = null === (n = (0, R.Z)()) || void 0 === n ? void 0 : n.planSelection,
        S = null == T ? void 0 : null === (r = T.getBackgroundImageUrl) || void 0 === r ? void 0 : r.call(T),
        A = (0, P.W1)();
    return (0, i.jsxs)('div', {
        className: a()(Z.card, Z.tier2, Z.tier2V2Background, u, {
            [Z.withTier2Rim]: b,
            [Z.withCardHover]: b,
            [Z.withPromotionalGradientBanner]: p
        }),
        children: [
            p &&
                null != S &&
                (0, i.jsx)('img', {
                    className: Z.promotionalBackgroundImage,
                    alt: '',
                    src: S
                }),
            (0, i.jsx)('div', { className: Z.tier2SideGradient }),
            (0, i.jsx)('img', {
                src: F,
                className: Z.v2starBackground,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(y.Z, { className: a()(Z.title, Z.tier2V2Title) }),
                            !c &&
                                m !== U.Si.TIER_2 &&
                                I &&
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/bold',
                                        className: Z.freeTrialPillInline,
                                        children: A
                                    })
                                }),
                            (0, i.jsx)(Q, {
                                isGift: c,
                                premiumTier: U.p9.TIER_2,
                                offerType: v,
                                offerTierMatchesCard: m === U.Si.TIER_2 || (0, D.Wp)(E, U.Si.TIER_2),
                                showYearlyPrice: o,
                                priceOptions: _,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(en, {
                            featureSet: l,
                            isModal: f,
                            isGift: c
                        })
                    })
                ]
            }),
            s,
            p && (0, i.jsx)(O.K, {})
        ]
    });
}
function er(e) {
    var t, n, r;
    let { showWumpus: s, ctaButton: o, showYearlyPrice: u, featureSet: _ = 0, className: p, isGift: h = !1, isModal: m = !1, priceOptions: v, showPromotionalGiftBanner: I = !1 } = e,
        b = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        T = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        S = (0, x.N)(),
        A = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        L = (null == b ? void 0 : b.trialId) != null ? (null == T ? void 0 : T.premiumType) : null,
        w = (0, N.Nx)(),
        k = (0, D.Ng)(),
        F = (0, N.t7)(),
        V = null != A || null != L ? 0 : null != k || F ? 1 : null,
        Y = (0, P.Vi)(),
        W = !h && w,
        z = null === (n = (0, R.Z)()) || void 0 === n ? void 0 : n.planSelection,
        q = null == z ? void 0 : null === (r = z.getBackgroundImageUrl) || void 0 === r ? void 0 : r.call(z),
        X = (0, P.W1)(),
        J = (0, c.ap)((0, f.ZP)()),
        $ = J ? 5 : 2,
        { enabled: ee } = C._.useExperiment({ location: H }, { autoTrackExposure: !1 }),
        et = B.intl.string(B.t.IBYG5e);
    ee && (null == S ? void 0 : S.trial_id) === U.a7 && (et = B.intl.string(B.t.gtNqJS));
    let ei = W && !J ? Z.rimGlowTier2 : void 0;
    return (0, i.jsxs)('div', {
        className: a()(Z.card, Z.tier2, p, {
            [Z.withTier2Rim]: W,
            [Z.withCardHover]: W,
            [Z.withPromotionalGradientBanner]: I
        }),
        children: [
            I &&
                null !== q &&
                (0, i.jsx)('img', {
                    className: Z.promotionalBackgroundImage,
                    alt: '',
                    src: q
                }),
            !h && null != k && (0, D.Wp)(k, U.Si.TIER_2) && void 0 !== k.discount.amount
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(K, {
                              text: F ? B.intl.string(B.t.EyjDRE) : B.intl.formatToPlainString(B.t.iiLbvr, { percent: k.discount.amount }),
                              className: Z.topRimPill,
                              colorOptions: $
                          }),
                          (0, i.jsx)('div', { className: ei })
                      ]
                  })
                : null,
            h || A !== U.Si.TIER_2
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(K, {
                              text: et,
                              className: Z.topRimPill,
                              colorOptions: $
                          }),
                          (0, i.jsx)('div', { className: ei })
                      ]
                  }),
            h || L !== U.p9.TIER_2
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(K, {
                              text: B.intl.string(B.t.qYKftb),
                              className: Z.topRimPill,
                              colorOptions: $
                          }),
                          (0, i.jsx)('div', { className: ei })
                      ]
                  }),
            !h &&
                F &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(K, {
                            text: B.intl.string(B.t.EyjDRE),
                            className: Z.topRimPill,
                            colorOptions: $
                        }),
                        (0, i.jsx)('div', { className: ei })
                    ]
                }),
            s
                ? (0, i.jsx)('div', {
                      className: Z.wumpusImageContainer,
                      children: (0, i.jsx)(d.Eep, {
                          src: j,
                          mediaLayoutType: G.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Z.wumpusImage
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(y.Z, { className: a()(Z.title, Z.tier2Title) }),
                            !h &&
                                A !== U.Si.TIER_2 &&
                                Y &&
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/bold',
                                        className: Z.freeTrialPillInline,
                                        children: X
                                    })
                                }),
                            (0, i.jsx)(Q, {
                                isGift: h,
                                premiumTier: U.p9.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: A === U.Si.TIER_2 || (0, D.Wp)(k, U.Si.TIER_2),
                                showYearlyPrice: u,
                                priceOptions: v
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(en, {
                            featureSet: _,
                            isModal: m,
                            isGift: h
                        })
                    })
                ]
            }),
            h || (A !== U.Si.TIER_2 && null == k) ? null : (0, i.jsx)(M.t, { tier: U.p9.TIER_2 }),
            o,
            I && (0, i.jsx)(O.K, {})
        ]
    });
}
var ea = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2'), e;
})({});
function es(e) {
    let { variant: t, showWumpus: n, tier0CTAButton: r, tier2CTAButton: s, className: o } = e,
        { analyticsLocations: l } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD),
        u = 1 === t;
    return (0, i.jsxs)(p.Gt, {
        value: l,
        children: [
            u &&
                (0, i.jsx)(d.X6q, {
                    className: Z.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: B.intl.string(B.t.vLz3Zm)
                }),
            (0, i.jsxs)('div', {
                className: a()(Z.premiumCards, o),
                children: [
                    u
                        ? (0, i.jsx)(J, { ctaButton: r })
                        : (0, i.jsx)($, {
                              showWumpus: n,
                              ctaButton: r
                          }),
                    u
                        ? (0, i.jsx)(ei, {
                              ctaButton: s,
                              featureSet: 3
                          })
                        : (0, i.jsx)(er, {
                              showWumpus: n,
                              ctaButton: s
                          })
                ]
            })
        ]
    });
}
