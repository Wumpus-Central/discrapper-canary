n.d(t, {
    Cy: () => K,
    Gq: () => $,
    NN: () => eo,
    VE: () => W,
    ZP: () => ea,
    lq: () => ee,
    mn: () => Y,
    nT: () => en,
    uZ: () => et,
    wp: () => ei
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(913527),
    s = n.n(a),
    l = n(442837),
    c = n(692547),
    u = n(780384),
    d = n(481060),
    f = n(410030),
    p = n(100527),
    _ = n(906732),
    h = n(535322),
    m = n(706454),
    g = n(594174),
    E = n(78839),
    v = n(709586),
    b = n(483444),
    y = n(599250),
    O = n(942659),
    S = n(930153),
    I = n(74538),
    T = n(357355),
    N = n(140465),
    A = n(650032),
    C = n(286961),
    R = n(33052),
    P = n(104494),
    w = n(639119),
    D = n(230916),
    x = n(346497),
    L = n(504865),
    M = n(63802),
    k = n(318990),
    j = n(474936),
    U = n(217702),
    G = n(388032),
    B = n(42590),
    Z = n(499317),
    F = n(476945),
    V = n(945182);
let H = 'Tier2Card';
var W = (function (e) {
    return (e[(e.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (e[(e.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (e[(e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), (e[(e.PREMIUM_TIER_2_GREY_FILL = 6)] = 'PREMIUM_TIER_2_GREY_FILL'), e;
})({});
function Y(e) {
    let { text: t, className: n, colorOptions: i = 2 } = e;
    return (0, r.jsx)('div', {
        className: o()(n, B.freeTrialPill, {
            [B.freeTrialPillTier0GradientFill]: 1 === i,
            [B.freeTrialPillTier2GradientFill]: 3 === i,
            [B.freeTrialPillTier2OldGradientFill]: 4 === i,
            [B.lightBackgroundPill]: 5 === i,
            [B.greyBackgroundPill]: 6 === i
        }),
        children: (0, r.jsx)(d.Text, {
            variant: 'text-xs/bold',
            className: o()(B.freeTrialPillText, {
                [B.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                [B.freeTrialPillTextTier0]: 0 === i,
                [B.freeTrialPillTextTier2]: 2 === i || 6 === i
            }),
            children: t
        })
    });
}
function K(e) {
    let t,
        { text: n, className: i, colorOptions: a = 2, isPillOnBorder: s = !0 } = e;
    switch (a) {
        case 1:
            t = c.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
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
    return s
        ? (0, r.jsxs)('div', {
              className: o()(i, B.freeTrialPillWithSparkles),
              children: [
                  (0, r.jsx)(M.R9, {
                      foreground: B.sparkleStar1,
                      color: t
                  }),
                  (0, r.jsx)(M.R9, {
                      foreground: B.sparkleStar2,
                      color: t
                  }),
                  (0, r.jsx)(M.R9, {
                      foreground: B.sparkleStar3,
                      color: t
                  }),
                  (0, r.jsx)(Y, {
                      text: n,
                      colorOptions: a
                  }),
                  (0, r.jsx)(M.R9, {
                      foreground: B.sparkleStar4,
                      color: t
                  }),
                  (0, r.jsx)(M.R9, {
                      foreground: B.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: o()(i, B.freeTrialPillWithSparkles),
              children: [
                  (0, r.jsx)(Y, {
                      text: n,
                      colorOptions: a
                  }),
                  (0, r.jsx)(M.R9, {
                      foreground: B.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, r.jsx)(M.R9, {
                      foreground: B.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function z(e) {
    let { Icon: t, text: n, isNew: i = !1, className: o, textVariant: a, isMarketingPageV2: s } = e;
    return (0, r.jsxs)('div', {
        className: null != o ? o : B.itemWithWumpus,
        children: [
            (0, r.jsx)(t, {
                className: B.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(d.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: s ? 'currentColor' : 'always-white',
                children: n
            }),
            i
                ? (0, r.jsx)(h.Z, {
                      className: B.newTagItem,
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
    let { defaultPriceString: n, subscriptionPlan: i, discountOffer: o } = e,
        a = (0, D.A)(i);
    return (0, r.jsx)(r.Fragment, {
        children: G.NW.format(G.t.sJTwHR, {
            numMonths: null !== (t = o.discount.user_usage_limit) && void 0 !== t ? t : j.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function Q(e) {
    let { isGift: t, premiumTier: n, offerTierMatchesCard: i, offerType: o, showYearlyPrice: a, priceOptions: c, textVariant: u, className: f, isMarketingPageV2: p } = e,
        _ = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        h = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        m = (0, N.t7)(),
        v = (0, N.lr)(),
        b = n === j.p9.TIER_0 ? j.Si.TIER_0 : j.Si.TIER_2,
        y = (null == _ ? void 0 : _.trialId) != null ? (null == h ? void 0 : h.premiumType) : m ? j.p9.TIER_2 : null,
        O = (0, w.N)(),
        S = (0, P.Ng)(),
        T = null == O ? void 0 : O.subscription_trial;
    if (!p && !t && null != y && n === y && null != _ && null != _.planIdFromItems) {
        let e = null != _.trialEndsAt ? s()(null == _ ? void 0 : _.trialEndsAt).diff(s()(), 'd') : 0,
            t = j.GP[_.planIdFromItems],
            n = I.ZP.formatPriceString(I.ZP.getDefaultPrice(t.id), t.interval),
            i = () => {
                var t, r, i;
                return 0 === o
                    ? G.NW.format(G.t['2CGBrq'], {
                          remainingTime: e,
                          price: n
                      })
                    : _.planIdFromItems === j.Xh.PREMIUM_YEAR_TIER_2
                      ? G.NW.format(G.t['+qqh6u'], {
                            percent: null !== (t = null == v ? void 0 : v.percentage) && void 0 !== t ? t : j.Bo,
                            regularPrice: n
                        })
                      : G.NW.formatToPlainString(G.t['3Ziutb'], {
                            percent: null !== (r = null == v ? void 0 : v.percentage) && void 0 !== r ? r : j.M_,
                            regularPrice: n,
                            numMonths: null !== (i = null == v ? void 0 : v.duration) && void 0 !== i ? i : j.rt
                        });
            };
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: B.trialHeader,
                children: i()
            })
        });
    }
    if (!p && !t && i) {
        let e = I.ZP.formatPriceString(I.ZP.getDefaultPrice(n === j.p9.TIER_0 ? j.Xh.PREMIUM_MONTH_TIER_0 : j.Xh.PREMIUM_MONTH_TIER_2), j.rV.MONTH);
        if (0 === o) {
            var A, C, R, D;
            return (0, r.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: B.trialHeader,
                children: G.NW.format(G.t['9vyovr'], {
                    planName: (0, I.aq)(null !== (C = j.IW[null !== (A = null == T ? void 0 : T.sku_id) && void 0 !== A ? A : j.Si.NONE]) && void 0 !== C ? C : j.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, I.if)({
                        intervalType: null !== (R = null == T ? void 0 : T.interval) && void 0 !== R ? R : j.rV.DAY,
                        intervalCount: null !== (D = null == T ? void 0 : T.interval_count) && void 0 !== D ? D : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != S)
            return (0, r.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: B.trialHeader,
                children: (0, r.jsx)(q, {
                    defaultPriceString: e,
                    subscriptionPlan: j.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: S
                })
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.Z, {
                subscriptionTier: b,
                isGift: t,
                className: null != f ? f : B.price,
                priceOptions: c,
                variant: u,
                isMarketingPageV2: p
            }),
            a &&
                (0, r.jsx)(L.Z, {
                    subscriptionTier: b,
                    interval: j.rV.YEAR,
                    className: null != f ? f : B.price,
                    isGift: t,
                    priceOptions: c,
                    variant: u,
                    isMarketingPageV2: p
                })
        ]
    });
}
function X(e) {
    let { isMarketingPageV2: t } = e;
    return t
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(z, {
                      Icon: d.dz2,
                      text: G.NW.string(G.t.KjrZ8f),
                      className: B.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, r.jsx)(z, {
                      Icon: d.dz2,
                      text: G.NW.formatToPlainString(G.t.p8QVLS, { maxUploadPremium: (0, I.v9)(j.p9.TIER_0, { useSpace: !1 }) }),
                      className: B.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, r.jsx)(z, {
                      Icon: d.dz2,
                      text: G.NW.string(G.t.Uukj4u),
                      className: B.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(z, {
                      Icon: d.rG2,
                      text: G.NW.formatToPlainString(G.t.p8QVLS, { maxUploadPremium: (0, I.v9)(j.p9.TIER_0, { useSpace: !1 }) })
                  }),
                  (0, r.jsx)(z, {
                      Icon: d.EO4,
                      text: G.NW.string(G.t.KjrZ8f)
                  }),
                  (0, r.jsx)(z, {
                      Icon: d.Pt5,
                      text: G.NW.string(G.t.taMwg4)
                  }),
                  (0, r.jsx)(z, {
                      Icon: d.SrA,
                      text: G.NW.string(G.t['8ukxAQ'])
                  })
              ]
          });
}
function J(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: c } = e,
        u = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        d = (0, w.N)(),
        f = null == d ? void 0 : null === (t = d.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        p = (null == u ? void 0 : u.trialId) != null,
        _ = null != f || p;
    return (0, r.jsxs)('div', {
        className: o()(B.tier0, B.card, B.tier0V2Background, a, {
            [B.withTier0Rim]: !s && _,
            [B.withCardHover]: !s && _
        }),
        children: [
            (0, r.jsx)('img', {
                src: Z,
                className: B.v2starBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(O.Z, { className: o()(B.title, B.tier0V2Title) }),
                            (0, r.jsx)(Q, {
                                isGift: s,
                                premiumTier: j.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: f === j.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(X, { isMarketingPageV2: !0 }) })
                ]
            }),
            n
        ]
    });
}
function $(e) {
    var t;
    let { showWumpus: n, ctaButton: i, showYearlyPrice: a, className: s, isGift: c = !1, priceOptions: u } = e,
        f = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        p = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        _ = (0, w.N)(),
        h = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        m = (null == f ? void 0 : f.trialId) != null,
        v = (null == f ? void 0 : f.trialId) != null ? (null == p ? void 0 : p.premiumType) : null,
        b = null != h || m;
    return (0, r.jsxs)('div', {
        className: o()(B.tier0, B.card, s, {
            [B.withTier0Rim]: !c && b,
            [B.withCardHover]: !c && b
        }),
        children: [
            h === j.Si.TIER_0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K, {
                              text: G.NW.string(G.t.IBYG5e),
                              className: B.topRimPill,
                              colorOptions: 0
                          }),
                          (0, r.jsx)('div', { className: B.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, r.jsx)('div', {
                      className: B.wumpusImageContainer,
                      children: (0, r.jsx)(d.Eep, {
                          src: F,
                          mediaLayoutType: U.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: B.wumpusImage
                      })
                  })
                : null,
            c || h !== j.Si.TIER_0
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K, {
                              text: G.NW.string(G.t.IBYG5e),
                              className: B.topRimPill,
                              colorOptions: 0
                          }),
                          (0, r.jsx)('div', { className: B.rimGlowTier0 })
                      ]
                  }),
            c || v !== j.p9.TIER_0
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K, {
                              text: G.NW.string(G.t.qYKftb),
                              className: B.topRimPill,
                              colorOptions: 0
                          }),
                          (0, r.jsx)('div', { className: B.rimGlowTier0 })
                      ]
                  }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(y.Z, { className: o()(B.title, B.tier0Title) }),
                            (0, r.jsx)(Q, {
                                isGift: c,
                                premiumTier: j.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: h === j.Si.TIER_0,
                                showYearlyPrice: a,
                                priceOptions: u
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(X, {}) })
                ]
            }),
            c || h !== j.Si.TIER_0 ? null : (0, r.jsx)(M.t, { tier: j.p9.TIER_0 }),
            i
        ]
    });
}
function ee(e) {
    var t;
    let { showWumpus: n, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: l } = e,
        c = (0, w.N)(),
        u = null == c ? void 0 : null === (t = c.subscription_trial) || void 0 === t ? void 0 : t.sku_id;
    return (0, r.jsxs)('div', {
        className: o()(B.tier0, B.card, a),
        children: [
            n
                ? (0, r.jsx)('div', {
                      className: B.wumpusImageContainer,
                      children: (0, r.jsx)(d.Eep, {
                          src: F,
                          mediaLayoutType: U.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: B.wumpusImage
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(y.Z, { className: o()(B.title, B.tier0Title) }),
                            (0, r.jsx)(Q, {
                                isGift: s,
                                premiumTier: j.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: u === j.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: l
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(z, {
                                Icon: d.rG2,
                                text: G.NW.formatToPlainString(G.t.p8QVLS, { maxUploadPremium: (0, I.v9)(j.p9.TIER_0, { useSpace: !1 }) })
                            }),
                            (0, r.jsx)(z, {
                                Icon: d.EO4,
                                text: G.NW.string(G.t.KjrZ8f)
                            }),
                            (0, r.jsx)(z, {
                                Icon: d.V3v,
                                text: G.NW.string(G.t.OuItFh)
                            }),
                            (0, r.jsx)(z, {
                                Icon: d.SrA,
                                text: G.NW.string(G.t['8ukxAQ'])
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
    let { featureSet: t = 0, isModal: n = !1, isGift: i = !1 } = e,
        o = (0, l.e7)([m.default], () => m.default.locale),
        a = (0, l.e7)([T.Z], () => T.Z.affinities),
        s = n && !i && a.length > 0;
    switch (t) {
        case 3:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/bold',
                        className: B.tier2V2Subheader,
                        children: G.NW.string(G.t.AozD3d)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.dz2,
                        text: G.NW.string(G.t.kpMomJ),
                        className: B.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.dz2,
                        text: G.NW.formatToPlainString(G.t.p8QVLS, { maxUploadPremium: (0, I.v9)(j.p9.TIER_2, { useSpace: !1 }) }),
                        className: B.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.dz2,
                        text: G.NW.string(G.t.W180bW),
                        className: B.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.dz2,
                        text: G.NW.string(G.t.zTk8Ul),
                        className: B.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    s && (0, r.jsx)(k.Z, {})
                ]
            });
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(z, {
                        Icon: (0, d.GSL)(v.Z),
                        text: G.NW.formatToPlainString(G.t.T9RTr6, {
                            numBoosts: j.cb,
                            percentageOff: (0, S.T3)(o, j.Rr / 100)
                        })
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.rG2,
                        text: G.NW.formatToPlainString(G.t.p8QVLS, { maxUploadPremium: (0, I.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.EO4,
                        text: G.NW.string(G.t.KjrZ8f)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.hGI,
                        text: G.NW.string(G.t.W180bW)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.kYE,
                        text: G.NW.string(G.t.CNIZf3)
                    })
                ]
            });
        case 2:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(z, {
                        Icon: d.rG2,
                        text: G.NW.formatToPlainString(G.t.p8QVLS, { maxUploadPremium: (0, I.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.EO4,
                        text: G.NW.string(G.t.KjrZ8f)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.Pt5,
                        text: G.NW.string(G.t.taMwg4)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.hGI,
                        text: G.NW.string(G.t.W180bW)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.kYE,
                        text: G.NW.string(G.t.CNIZf3)
                    })
                ]
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(z, {
                        Icon: d.rG2,
                        text: G.NW.formatToPlainString(G.t.p8QVLS, { maxUploadPremium: (0, I.v9)(j.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.EO4,
                        text: G.NW.string(G.t.KjrZ8f)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.Pt5,
                        text: G.NW.string(G.t.taMwg4)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.hGI,
                        text: G.NW.string(G.t.W180bW)
                    }),
                    (0, r.jsx)(z, {
                        Icon: (0, d.GSL)(v.Z),
                        text: G.NW.string(G.t.cdfuUV)
                    }),
                    (0, r.jsx)(z, {
                        Icon: d.kYE,
                        text: G.NW.string(G.t.CNIZf3)
                    }),
                    s && (0, r.jsx)(k.Z, {})
                ]
            });
    }
}
function er(e) {
    var t, n, i;
    let { ctaButton: a, showYearlyPrice: s, featureSet: l = 0, className: c, isGift: u = !1, isModal: f = !1, priceOptions: p, showPromotionalGiftBanner: _ = !1 } = e,
        h = (0, w.N)(),
        m = null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        g = (0, N.Nx)(),
        E = (0, P.Ng)(),
        v = null != h ? 0 : null != E ? 1 : null,
        y = (0, x.Vi)(),
        O = !u && g,
        S = null === (n = (0, C.Z)()) || void 0 === n ? void 0 : n.planSelection,
        I = null == S ? void 0 : null === (i = S.getBackgroundImageUrl) || void 0 === i ? void 0 : i.call(S),
        T = (0, x.W1)();
    return (0, r.jsxs)('div', {
        className: o()(B.card, B.tier2, B.tier2V2Background, c, {
            [B.withTier2Rim]: O,
            [B.withCardHover]: O,
            [B.withPromotionalGradientBanner]: _
        }),
        children: [
            _ &&
                null != I &&
                (0, r.jsx)('img', {
                    className: B.promotionalBackgroundImage,
                    alt: '',
                    src: I
                }),
            (0, r.jsx)('div', { className: B.tier2SideGradient }),
            (0, r.jsx)('img', {
                src: Z,
                className: B.v2starBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(b.Z, { className: o()(B.title, B.tier2V2Title) }),
                            !u &&
                                m !== j.Si.TIER_2 &&
                                y &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/bold',
                                        className: B.freeTrialPillInline,
                                        children: T
                                    })
                                }),
                            (0, r.jsx)(Q, {
                                isGift: u,
                                premiumTier: j.p9.TIER_2,
                                offerType: v,
                                offerTierMatchesCard: m === j.Si.TIER_2 || (0, P.Wp)(E, j.Si.TIER_2),
                                showYearlyPrice: s,
                                priceOptions: p,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(en, {
                            featureSet: l,
                            isModal: f,
                            isGift: u
                        })
                    })
                ]
            }),
            a,
            _ && (0, r.jsx)(R.K, {})
        ]
    });
}
function ei(e) {
    var t, n, i;
    let { showWumpus: a, ctaButton: s, showYearlyPrice: c, featureSet: p = 0, className: _, isGift: h = !1, isModal: m = !1, priceOptions: v, showPromotionalGiftBanner: y = !1 } = e,
        O = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        S = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        I = (0, w.N)(),
        T = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        D = (null == O ? void 0 : O.trialId) != null ? (null == S ? void 0 : S.premiumType) : null,
        L = (0, N.Nx)(),
        k = (0, P.Ng)(),
        Z = (0, N.t7)(),
        F = null != T || null != D ? 0 : null != k || Z ? 1 : null,
        W = (0, x.Vi)(),
        Y = !h && L,
        z = null === (n = (0, C.Z)()) || void 0 === n ? void 0 : n.planSelection,
        q = null == z ? void 0 : null === (i = z.getBackgroundImageUrl) || void 0 === i ? void 0 : i.call(z),
        X = (0, x.W1)(),
        J = (0, u.ap)((0, f.ZP)()),
        $ = J ? 5 : 2,
        { enabled: ee } = A._.useExperiment({ location: H }, { autoTrackExposure: !1 }),
        et = G.NW.string(G.t.IBYG5e);
    ee && (null == I ? void 0 : I.trial_id) === j.a7 && (et = G.NW.string(G.t.gtNqJS));
    let er = Y && !J ? B.rimGlowTier2 : void 0;
    return (0, r.jsxs)('div', {
        className: o()(B.card, B.tier2, _, {
            [B.withTier2Rim]: Y,
            [B.withCardHover]: Y,
            [B.withPromotionalGradientBanner]: y
        }),
        children: [
            y &&
                null !== q &&
                (0, r.jsx)('img', {
                    className: B.promotionalBackgroundImage,
                    alt: '',
                    src: q
                }),
            !h && null != k && (0, P.Wp)(k, j.Si.TIER_2) && void 0 !== k.discount.amount
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K, {
                              text: Z ? G.NW.string(G.t.EyjDRE) : G.NW.formatToPlainString(G.t.iiLbvr, { percent: k.discount.amount }),
                              className: B.topRimPill,
                              colorOptions: $
                          }),
                          (0, r.jsx)('div', { className: er })
                      ]
                  })
                : null,
            h || T !== j.Si.TIER_2
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K, {
                              text: et,
                              className: B.topRimPill,
                              colorOptions: $
                          }),
                          (0, r.jsx)('div', { className: er })
                      ]
                  }),
            h || D !== j.p9.TIER_2
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(K, {
                              text: G.NW.string(G.t.qYKftb),
                              className: B.topRimPill,
                              colorOptions: $
                          }),
                          (0, r.jsx)('div', { className: er })
                      ]
                  }),
            !h &&
                Z &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(K, {
                            text: G.NW.string(G.t.EyjDRE),
                            className: B.topRimPill,
                            colorOptions: $
                        }),
                        (0, r.jsx)('div', { className: er })
                    ]
                }),
            a
                ? (0, r.jsx)('div', {
                      className: B.wumpusImageContainer,
                      children: (0, r.jsx)(d.Eep, {
                          src: V,
                          mediaLayoutType: U.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: B.wumpusImage
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(b.Z, { className: o()(B.title, B.tier2Title) }),
                            !h &&
                                T !== j.Si.TIER_2 &&
                                W &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/bold',
                                        className: B.freeTrialPillInline,
                                        children: X
                                    })
                                }),
                            (0, r.jsx)(Q, {
                                isGift: h,
                                premiumTier: j.p9.TIER_2,
                                offerType: F,
                                offerTierMatchesCard: T === j.Si.TIER_2 || (0, P.Wp)(k, j.Si.TIER_2),
                                showYearlyPrice: c,
                                priceOptions: v
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(en, {
                            featureSet: p,
                            isModal: m,
                            isGift: h
                        })
                    })
                ]
            }),
            h || (T !== j.Si.TIER_2 && null == k) ? null : (0, r.jsx)(M.t, { tier: j.p9.TIER_2 }),
            s,
            y && (0, r.jsx)(R.K, {})
        ]
    });
}
var eo = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2'), e;
})({});
function ea(e) {
    let { variant: t, showWumpus: n, tier0CTAButton: i, tier2CTAButton: a, className: s } = e,
        { analyticsLocations: l } = (0, _.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD),
        c = 1 === t;
    return (0, r.jsxs)(_.Gt, {
        value: l,
        children: [
            c &&
                (0, r.jsx)(d.X6q, {
                    className: B.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: G.NW.string(G.t.vLz3Zm)
                }),
            (0, r.jsxs)('div', {
                className: o()(B.premiumCards, s),
                children: [
                    c
                        ? (0, r.jsx)(J, { ctaButton: i })
                        : (0, r.jsx)($, {
                              showWumpus: n,
                              ctaButton: i
                          }),
                    c
                        ? (0, r.jsx)(er, {
                              ctaButton: a,
                              featureSet: 3
                          })
                        : (0, r.jsx)(ei, {
                              showWumpus: n,
                              ctaButton: a
                          })
                ]
            })
        ]
    });
}
