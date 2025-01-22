r.d(n, {
    Cy: function () {
        return X;
    },
    Gq: function () {
        return er;
    },
    NN: function () {
        return s;
    },
    VE: function () {
        return i;
    },
    ZP: function () {
        return el;
    },
    lq: function () {
        return ei;
    },
    mn: function () {
        return Q;
    },
    nT: function () {
        return ea;
    },
    uZ: function () {
        return o;
    },
    wp: function () {
        return es;
    }
});
var i,
    a,
    o,
    s,
    l = r(200651);
r(192379);
var u = r(120356),
    c = r.n(u),
    d = r(913527),
    f = r.n(d),
    p = r(442837),
    h = r(692547),
    _ = r(780384),
    m = r(481060),
    g = r(410030),
    E = r(100527),
    v = r(906732),
    y = r(535322),
    b = r(706454),
    I = r(594174),
    T = r(78839),
    S = r(709586),
    A = r(483444),
    C = r(599250),
    N = r(942659),
    R = r(930153),
    O = r(74538),
    D = r(357355),
    x = r(140465),
    L = r(650032),
    w = r(286961),
    P = r(33052),
    M = r(104494),
    k = r(639119),
    U = r(230916),
    B = r(346497),
    G = r(504865),
    Z = r(63802),
    F = r(318990),
    V = r(474936),
    j = r(217702),
    H = r(388032),
    Y = r(521855),
    W = r(499317),
    K = r(476945),
    z = r(945182);
let q = 'Tier2Card';
function Q(e) {
    let { text: n, className: r, colorOptions: i = 2 } = e;
    return (0, l.jsx)('div', {
        className: c()(r, Y.freeTrialPill, {
            [Y.freeTrialPillTier0GradientFill]: 1 === i,
            [Y.freeTrialPillTier2GradientFill]: 3 === i,
            [Y.freeTrialPillTier2OldGradientFill]: 4 === i,
            [Y.lightBackgroundPill]: 5 === i,
            [Y.greyBackgroundPill]: 6 === i
        }),
        children: (0, l.jsx)(m.Text, {
            variant: 'text-xs/bold',
            className: c()(Y.freeTrialPillText, {
                [Y.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                [Y.freeTrialPillTextTier0]: 0 === i,
                [Y.freeTrialPillTextTier2]: 2 === i || 6 === i
            }),
            children: n
        })
    });
}
function X(e) {
    let n,
        { text: r, className: i, colorOptions: a = 2, isPillOnBorder: o = !0 } = e;
    switch (a) {
        case 1:
            n = h.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            n = 'url(#'.concat(Z.l_, ')');
            break;
        case 4:
        case 5:
            n = 'url(#'.concat(Z.Qi, ')');
            break;
        default:
            n = 'white';
    }
    return o
        ? (0, l.jsxs)('div', {
              className: c()(i, Y.freeTrialPillWithSparkles),
              children: [
                  (0, l.jsx)(Z.R9, {
                      foreground: Y.sparkleStar1,
                      color: n
                  }),
                  (0, l.jsx)(Z.R9, {
                      foreground: Y.sparkleStar2,
                      color: n
                  }),
                  (0, l.jsx)(Z.R9, {
                      foreground: Y.sparkleStar3,
                      color: n
                  }),
                  (0, l.jsx)(Q, {
                      text: r,
                      colorOptions: a
                  }),
                  (0, l.jsx)(Z.R9, {
                      foreground: Y.sparkleStar4,
                      color: n
                  }),
                  (0, l.jsx)(Z.R9, {
                      foreground: Y.sparkleStar5,
                      color: n
                  })
              ]
          })
        : (0, l.jsxs)('div', {
              className: c()(i, Y.freeTrialPillWithSparkles),
              children: [
                  (0, l.jsx)(Q, {
                      text: r,
                      colorOptions: a
                  }),
                  (0, l.jsx)(Z.R9, {
                      foreground: Y.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: n
                  }),
                  (0, l.jsx)(Z.R9, {
                      foreground: Y.sparkleStar2,
                      color: n
                  })
              ]
          });
}
function J(e) {
    let { Icon: n, text: r, isNew: i = !1, className: a, textVariant: o, isMarketingPageV2: s } = e;
    return (0, l.jsxs)('div', {
        className: null != a ? a : Y.itemWithWumpus,
        children: [
            (0, l.jsx)(n, {
                className: Y.icon,
                color: 'currentColor'
            }),
            (0, l.jsx)(m.Text, {
                variant: null != o ? o : 'text-md/normal',
                color: s ? 'currentColor' : 'always-white',
                children: r
            }),
            i
                ? (0, l.jsx)(y.Z, {
                      className: Y.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function $(e) {
    var n;
    let { defaultPriceString: r, subscriptionPlan: i, discountOffer: a } = e,
        o = (0, U.A)(i);
    return (0, l.jsx)(l.Fragment, {
        children: H.intl.format(H.t.sJTwHR, {
            numMonths: null !== (n = a.discount.user_usage_limit) && void 0 !== n ? n : V.rt,
            discountedPrice: o,
            regularPrice: r
        })
    });
}
function ee(e) {
    let { isGift: n, premiumTier: r, offerTierMatchesCard: i, offerType: a, showYearlyPrice: o, priceOptions: s, textVariant: u, className: c, isMarketingPageV2: d } = e,
        h = (0, p.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        _ = (0, p.e7)([I.default], () => I.default.getCurrentUser()),
        g = (0, x.t7)(),
        E = (0, x.lr)(),
        v = r === V.p9.TIER_0 ? V.Si.TIER_0 : V.Si.TIER_2,
        y = (null == h ? void 0 : h.trialId) != null ? (null == _ ? void 0 : _.premiumType) : g ? V.p9.TIER_2 : null,
        b = (0, k.N)(),
        S = (0, M.Ng)(),
        A = null == b ? void 0 : b.subscription_trial;
    if (!d && !n && null != y && r === y && null != h && null != h.planIdFromItems) {
        let e = null != h.trialEndsAt ? f()(null == h ? void 0 : h.trialEndsAt).diff(f()(), 'd') : 0,
            n = V.GP[h.planIdFromItems],
            r = O.ZP.formatPriceString(O.ZP.getDefaultPrice(n.id), n.interval),
            i = () => {
                var n, i, o;
                return 0 === a
                    ? H.intl.format(H.t['2CGBrq'], {
                          remainingTime: e,
                          price: r
                      })
                    : h.planIdFromItems === V.Xh.PREMIUM_YEAR_TIER_2
                      ? H.intl.format(H.t['+qqh6u'], {
                            percent: null !== (n = null == E ? void 0 : E.percentage) && void 0 !== n ? n : V.Bo,
                            regularPrice: r
                        })
                      : H.intl.formatToPlainString(H.t['3Ziutb'], {
                            percent: null !== (i = null == E ? void 0 : E.percentage) && void 0 !== i ? i : V.M_,
                            regularPrice: r,
                            numMonths: null !== (o = null == E ? void 0 : E.duration) && void 0 !== o ? o : V.rt
                        });
            };
        return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)(m.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Y.trialHeader,
                children: i()
            })
        });
    }
    if (!d && !n && i) {
        let e = O.ZP.formatPriceString(O.ZP.getDefaultPrice(r === V.p9.TIER_0 ? V.Xh.PREMIUM_MONTH_TIER_0 : V.Xh.PREMIUM_MONTH_TIER_2), V.rV.MONTH);
        if (0 === a) {
            var C, N, R, D;
            return (0, l.jsx)(m.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Y.trialHeader,
                children: H.intl.format(H.t['9vyovr'], {
                    planName: (0, O.aq)(null !== (N = V.IW[null !== (C = null == A ? void 0 : A.sku_id) && void 0 !== C ? C : V.Si.NONE]) && void 0 !== N ? N : V.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, O.if)({
                        intervalType: null !== (R = null == A ? void 0 : A.interval) && void 0 !== R ? R : V.rV.DAY,
                        intervalCount: null !== (D = null == A ? void 0 : A.interval_count) && void 0 !== D ? D : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != S)
            return (0, l.jsx)(m.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Y.trialHeader,
                children: (0, l.jsx)($, {
                    defaultPriceString: e,
                    subscriptionPlan: V.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: S
                })
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(G.Z, {
                subscriptionTier: v,
                isGift: n,
                className: null != c ? c : Y.price,
                priceOptions: s,
                variant: u,
                isMarketingPageV2: d
            }),
            o &&
                (0, l.jsx)(G.Z, {
                    subscriptionTier: v,
                    interval: V.rV.YEAR,
                    className: null != c ? c : Y.price,
                    isGift: n,
                    priceOptions: s,
                    variant: u,
                    isMarketingPageV2: d
                })
        ]
    });
}
function et(e) {
    let { isMarketingPageV2: n } = e;
    return n
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(J, {
                      Icon: m.CheckmarkLargeIcon,
                      text: H.intl.string(H.t.KjrZ8f),
                      className: Y.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, l.jsx)(J, {
                      Icon: m.CheckmarkLargeIcon,
                      text: H.intl.formatToPlainString(H.t.p8QVLS, { maxUploadPremium: (0, O.v9)(V.p9.TIER_0, { useSpace: !1 }) }),
                      className: Y.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, l.jsx)(J, {
                      Icon: m.CheckmarkLargeIcon,
                      text: H.intl.string(H.t.Uukj4u),
                      className: Y.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  })
              ]
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(J, {
                      Icon: m.UploadIcon,
                      text: H.intl.formatToPlainString(H.t.p8QVLS, { maxUploadPremium: (0, O.v9)(V.p9.TIER_0, { useSpace: !1 }) })
                  }),
                  (0, l.jsx)(J, {
                      Icon: m.ReactionIcon,
                      text: H.intl.string(H.t.KjrZ8f)
                  }),
                  (0, l.jsx)(J, {
                      Icon: m.SuperReactionIcon,
                      text: H.intl.string(H.t.taMwg4)
                  }),
                  (0, l.jsx)(J, {
                      Icon: m.NitroWheelIcon,
                      text: H.intl.string(H.t['8ukxAQ'])
                  })
              ]
          });
}
function en(e) {
    var n;
    let { ctaButton: r, showYearlyPrice: i, className: a, isGift: o = !1, priceOptions: s } = e,
        u = (0, p.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        d = (0, k.N)(),
        f = null == d ? void 0 : null === (n = d.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        h = (null == u ? void 0 : u.trialId) != null,
        _ = null != f || h;
    return (0, l.jsxs)('div', {
        className: c()(Y.tier0, Y.card, Y.tier0V2Background, a, {
            [Y.withTier0Rim]: !o && _,
            [Y.withCardHover]: !o && _,
            [Y.cardPadding]: !o
        }),
        children: [
            (0, l.jsxs)('div', {
                className: c()({ [Y.cardPadding]: o }),
                children: [
                    (0, l.jsx)('img', {
                        src: W,
                        className: Y.v2starBackground,
                        alt: ''
                    }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(N.Z, { className: c()(Y.title, Y.tier0V2Title) }),
                                    (0, l.jsx)(ee, {
                                        isGift: o,
                                        premiumTier: V.p9.TIER_0,
                                        offerType: 0,
                                        offerTierMatchesCard: f === V.Si.TIER_0,
                                        showYearlyPrice: i,
                                        priceOptions: s,
                                        textVariant: 'heading-xl/normal',
                                        isMarketingPageV2: !0
                                    })
                                ]
                            }),
                            (0, l.jsx)('div', { children: (0, l.jsx)(et, { isMarketingPageV2: !0 }) })
                        ]
                    })
                ]
            }),
            r
        ]
    });
}
function er(e) {
    var n;
    let { showWumpus: r, ctaButton: i, showYearlyPrice: a, className: o, isGift: s = !1, priceOptions: u } = e,
        d = (0, p.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        f = (0, p.e7)([I.default], () => I.default.getCurrentUser()),
        h = (0, k.N)(),
        _ = null == h ? void 0 : null === (n = h.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        g = (null == d ? void 0 : d.trialId) != null,
        E = (null == d ? void 0 : d.trialId) != null ? (null == f ? void 0 : f.premiumType) : null,
        v = null != _ || g;
    return (0, l.jsxs)('div', {
        className: c()(Y.tier0, Y.card, o, {
            [Y.withTier0Rim]: !s && v,
            [Y.withCardHover]: !s && v,
            [Y.cardPadding]: !s
        }),
        children: [
            (0, l.jsxs)('div', {
                className: c()({ [Y.cardPadding]: s }),
                children: [
                    _ === V.Si.TIER_0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(X, {
                                      text: H.intl.string(H.t.IBYG5e),
                                      className: Y.topRimPill,
                                      colorOptions: 0
                                  }),
                                  (0, l.jsx)('div', { className: Y.rimGlowTier0 })
                              ]
                          })
                        : null,
                    r
                        ? (0, l.jsx)('div', {
                              className: Y.wumpusImageContainer,
                              children: (0, l.jsx)(m.Image, {
                                  src: K,
                                  mediaLayoutType: j.hV.RESPONSIVE,
                                  width: 270,
                                  height: 242,
                                  zoomable: !1,
                                  imageClassName: Y.wumpusImage
                              })
                          })
                        : null,
                    s || _ !== V.Si.TIER_0
                        ? null
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(X, {
                                      text: H.intl.string(H.t.IBYG5e),
                                      className: Y.topRimPill,
                                      colorOptions: 0
                                  }),
                                  (0, l.jsx)('div', { className: Y.rimGlowTier0 })
                              ]
                          }),
                    s || E !== V.p9.TIER_0
                        ? null
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(X, {
                                      text: H.intl.string(H.t.qYKftb),
                                      className: Y.topRimPill,
                                      colorOptions: 0
                                  }),
                                  (0, l.jsx)('div', { className: Y.rimGlowTier0 })
                              ]
                          }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(C.Z, { className: c()(Y.title, Y.tier0Title) }),
                                    (0, l.jsx)(ee, {
                                        isGift: s,
                                        premiumTier: V.p9.TIER_0,
                                        offerType: 0,
                                        offerTierMatchesCard: _ === V.Si.TIER_0,
                                        showYearlyPrice: a,
                                        priceOptions: u
                                    })
                                ]
                            }),
                            (0, l.jsx)('div', { children: (0, l.jsx)(et, {}) })
                        ]
                    }),
                    s || _ !== V.Si.TIER_0 ? null : (0, l.jsx)(Z.t, { tier: V.p9.TIER_0 })
                ]
            }),
            i
        ]
    });
}
function ei(e) {
    var n;
    let { showWumpus: r, showYearlyPrice: i, className: a, isGift: o = !1, priceOptions: s } = e,
        u = (0, k.N)(),
        d = null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.sku_id;
    return (0, l.jsxs)('div', {
        className: c()(Y.tier0, Y.card, a),
        children: [
            r
                ? (0, l.jsx)('div', {
                      className: Y.wumpusImageContainer,
                      children: (0, l.jsx)(m.Image, {
                          src: K,
                          mediaLayoutType: j.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Y.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(C.Z, { className: c()(Y.title, Y.tier0Title) }),
                            (0, l.jsx)(ee, {
                                isGift: o,
                                premiumTier: V.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: d === V.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: s
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(J, {
                                Icon: m.UploadIcon,
                                text: H.intl.formatToPlainString(H.t.p8QVLS, { maxUploadPremium: (0, O.v9)(V.p9.TIER_0, { useSpace: !1 }) })
                            }),
                            (0, l.jsx)(J, {
                                Icon: m.ReactionIcon,
                                text: H.intl.string(H.t.KjrZ8f)
                            }),
                            (0, l.jsx)(J, {
                                Icon: m.PaintPaletteIcon,
                                text: H.intl.string(H.t.OuItFh)
                            }),
                            (0, l.jsx)(J, {
                                Icon: m.NitroWheelIcon,
                                text: H.intl.string(H.t['8ukxAQ'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function ea(e) {
    let { featureSet: n = 0, isModal: r = !1, isGift: i = !1 } = e,
        a = (0, p.e7)([b.default], () => b.default.locale),
        o = (0, p.e7)([D.Z], () => D.Z.affinities),
        s = r && !i && o.length > 0;
    switch (n) {
        case 3:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/bold',
                        className: Y.tier2V2Subheader,
                        children: H.intl.string(H.t.AozD3d)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.CheckmarkLargeIcon,
                        text: H.intl.string(H.t.kpMomJ),
                        className: Y.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.CheckmarkLargeIcon,
                        text: H.intl.formatToPlainString(H.t.p8QVLS, { maxUploadPremium: (0, O.v9)(V.p9.TIER_2, { useSpace: !1 }) }),
                        className: Y.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.CheckmarkLargeIcon,
                        text: H.intl.string(H.t.W180bW),
                        className: Y.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.CheckmarkLargeIcon,
                        text: H.intl.string(H.t.zTk8Ul),
                        className: Y.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    s && (0, l.jsx)(F.Z, {})
                ]
            });
        case 1:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(J, {
                        Icon: (0, m.makeIconCompat)(S.Z),
                        text: H.intl.formatToPlainString(H.t.T9RTr6, {
                            numBoosts: V.cb,
                            percentageOff: (0, R.T3)(a, V.Rr / 100)
                        })
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.UploadIcon,
                        text: H.intl.formatToPlainString(H.t.p8QVLS, { maxUploadPremium: (0, O.v9)(V.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.ReactionIcon,
                        text: H.intl.string(H.t.KjrZ8f)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.ScreenArrowIcon,
                        text: H.intl.string(H.t.W180bW)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.UserSquareIcon,
                        text: H.intl.string(H.t.CNIZf3)
                    })
                ]
            });
        case 2:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(J, {
                        Icon: m.UploadIcon,
                        text: H.intl.formatToPlainString(H.t.p8QVLS, { maxUploadPremium: (0, O.v9)(V.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.ReactionIcon,
                        text: H.intl.string(H.t.KjrZ8f)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.SuperReactionIcon,
                        text: H.intl.string(H.t.taMwg4)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.ScreenArrowIcon,
                        text: H.intl.string(H.t.W180bW)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.UserSquareIcon,
                        text: H.intl.string(H.t.CNIZf3)
                    })
                ]
            });
        default:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(J, {
                        Icon: m.UploadIcon,
                        text: H.intl.formatToPlainString(H.t.p8QVLS, { maxUploadPremium: (0, O.v9)(V.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.ReactionIcon,
                        text: H.intl.string(H.t.KjrZ8f)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.SuperReactionIcon,
                        text: H.intl.string(H.t.taMwg4)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.ScreenArrowIcon,
                        text: H.intl.string(H.t.W180bW)
                    }),
                    (0, l.jsx)(J, {
                        Icon: (0, m.makeIconCompat)(S.Z),
                        text: H.intl.string(H.t.cdfuUV)
                    }),
                    (0, l.jsx)(J, {
                        Icon: m.UserSquareIcon,
                        text: H.intl.string(H.t.CNIZf3)
                    }),
                    s && (0, l.jsx)(F.Z, {})
                ]
            });
    }
}
function eo(e) {
    var n, r, i;
    let { ctaButton: a, showYearlyPrice: o, featureSet: s = 0, className: u, isGift: d = !1, isModal: f = !1, priceOptions: p, showPromotionalGiftBanner: h = !1 } = e,
        _ = (0, k.N)(),
        g = null == _ ? void 0 : null === (n = _.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        E = (0, x.Nx)(),
        v = (0, M.Ng)(),
        y = null != _ ? 0 : null != v ? 1 : null,
        b = (0, B.Vi)(),
        I = !d && E,
        T = null === (r = (0, w.Z)()) || void 0 === r ? void 0 : r.planSelection,
        S = null == T ? void 0 : null === (i = T.getBackgroundImageUrl) || void 0 === i ? void 0 : i.call(T),
        C = (0, B.W1)();
    return (0, l.jsxs)('div', {
        className: c()(Y.card, Y.tier2, Y.tier2V2Background, u, {
            [Y.withTier2Rim]: I,
            [Y.withCardHover]: I,
            [Y.withPromotionalGradientBanner]: h,
            [Y.cardPadding]: !d
        }),
        children: [
            h &&
                null != S &&
                (0, l.jsx)('img', {
                    className: Y.promotionalBackgroundImage,
                    alt: '',
                    src: S
                }),
            (0, l.jsxs)('div', {
                className: c()({ [Y.cardPadding]: d }),
                children: [
                    (0, l.jsx)('div', { className: Y.tier2SideGradient }),
                    (0, l.jsx)('img', {
                        src: W,
                        className: Y.v2starBackground,
                        alt: ''
                    }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(A.Z, { className: c()(Y.title, Y.tier2V2Title) }),
                                    !d &&
                                        g !== V.Si.TIER_2 &&
                                        b &&
                                        (0, l.jsx)('div', {
                                            children: (0, l.jsx)(m.Text, {
                                                variant: 'text-xs/bold',
                                                className: Y.freeTrialPillInline,
                                                children: C
                                            })
                                        }),
                                    (0, l.jsx)(ee, {
                                        isGift: d,
                                        premiumTier: V.p9.TIER_2,
                                        offerType: y,
                                        offerTierMatchesCard: g === V.Si.TIER_2 || (0, M.Wp)(v, V.Si.TIER_2),
                                        showYearlyPrice: o,
                                        priceOptions: p,
                                        textVariant: 'heading-xl/normal',
                                        isMarketingPageV2: !0
                                    })
                                ]
                            }),
                            (0, l.jsx)('div', {
                                children: (0, l.jsx)(ea, {
                                    featureSet: s,
                                    isModal: f,
                                    isGift: d
                                })
                            })
                        ]
                    })
                ]
            }),
            a,
            h && (0, l.jsx)(P.K, {})
        ]
    });
}
function es(e) {
    var n, r, i;
    let { showWumpus: a, ctaButton: o, showYearlyPrice: s, featureSet: u = 0, className: d, isGift: f = !1, isModal: h = !1, priceOptions: E, showPromotionalGiftBanner: v = !1 } = e,
        y = (0, p.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        b = (0, p.e7)([I.default], () => I.default.getCurrentUser()),
        S = (0, k.N)(),
        C = null == S ? void 0 : null === (n = S.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        N = (null == y ? void 0 : y.trialId) != null ? (null == b ? void 0 : b.premiumType) : null,
        R = (0, x.Nx)(),
        O = (0, M.Ng)(),
        D = (0, x.t7)(),
        U = null != C || null != N ? 0 : null != O || D ? 1 : null,
        G = (0, B.Vi)(),
        F = !f && R,
        W = null === (r = (0, w.Z)()) || void 0 === r ? void 0 : r.planSelection,
        K = null == W ? void 0 : null === (i = W.getBackgroundImageUrl) || void 0 === i ? void 0 : i.call(W),
        Q = (0, B.W1)(),
        J = (0, _.ap)((0, g.ZP)()),
        $ = J ? 5 : 2,
        { enabled: et } = L._.useExperiment({ location: q }, { autoTrackExposure: !1 }),
        en = H.intl.string(H.t.IBYG5e);
    et && (null == S ? void 0 : S.trial_id) === V.a7 && (en = H.intl.string(H.t.gtNqJS));
    let er = F && !J ? Y.rimGlowTier2 : void 0;
    return (0, l.jsxs)('div', {
        className: c()(Y.card, Y.tier2, d, {
            [Y.withTier2Rim]: F,
            [Y.withCardHover]: F,
            [Y.withPromotionalGradientBanner]: v,
            [Y.cardPadding]: !f
        }),
        children: [
            v &&
                null !== K &&
                (0, l.jsx)('img', {
                    className: Y.promotionalBackgroundImage,
                    alt: '',
                    src: K
                }),
            (0, l.jsxs)('div', {
                className: c()({ [Y.cardPadding]: f }),
                children: [
                    !f && null != O && (0, M.Wp)(O, V.Si.TIER_2) && void 0 !== O.discount.amount
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(X, {
                                      text: D ? H.intl.string(H.t.EyjDRE) : H.intl.formatToPlainString(H.t.iiLbvr, { percent: O.discount.amount }),
                                      className: Y.topRimPill,
                                      colorOptions: $
                                  }),
                                  (0, l.jsx)('div', { className: er })
                              ]
                          })
                        : null,
                    f || C !== V.Si.TIER_2
                        ? null
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(X, {
                                      text: en,
                                      className: Y.topRimPill,
                                      colorOptions: $
                                  }),
                                  (0, l.jsx)('div', { className: er })
                              ]
                          }),
                    f || N !== V.p9.TIER_2
                        ? null
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(X, {
                                      text: H.intl.string(H.t.qYKftb),
                                      className: Y.topRimPill,
                                      colorOptions: $
                                  }),
                                  (0, l.jsx)('div', { className: er })
                              ]
                          }),
                    !f &&
                        D &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(X, {
                                    text: H.intl.string(H.t.EyjDRE),
                                    className: Y.topRimPill,
                                    colorOptions: $
                                }),
                                (0, l.jsx)('div', { className: er })
                            ]
                        }),
                    a
                        ? (0, l.jsx)('div', {
                              className: Y.wumpusImageContainer,
                              children: (0, l.jsx)(m.Image, {
                                  src: z,
                                  mediaLayoutType: j.hV.RESPONSIVE,
                                  width: 270,
                                  height: 242,
                                  zoomable: !1,
                                  imageClassName: Y.wumpusImage
                              })
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(A.Z, { className: c()(Y.title, Y.tier2Title) }),
                                    !f &&
                                        C !== V.Si.TIER_2 &&
                                        G &&
                                        (0, l.jsx)('div', {
                                            children: (0, l.jsx)(m.Text, {
                                                variant: 'text-xs/bold',
                                                className: Y.freeTrialPillInline,
                                                children: Q
                                            })
                                        }),
                                    (0, l.jsx)(ee, {
                                        isGift: f,
                                        premiumTier: V.p9.TIER_2,
                                        offerType: U,
                                        offerTierMatchesCard: C === V.Si.TIER_2 || (0, M.Wp)(O, V.Si.TIER_2),
                                        showYearlyPrice: s,
                                        priceOptions: E
                                    })
                                ]
                            }),
                            (0, l.jsx)('div', {
                                children: (0, l.jsx)(ea, {
                                    featureSet: u,
                                    isModal: h,
                                    isGift: f
                                })
                            })
                        ]
                    }),
                    f || (C !== V.Si.TIER_2 && null == O) ? null : (0, l.jsx)(Z.t, { tier: V.p9.TIER_2 })
                ]
            }),
            o,
            v && (0, l.jsx)(P.K, {})
        ]
    });
}
function el(e) {
    let { variant: n, showWumpus: r, tier0CTAButton: i, tier2CTAButton: a, className: o } = e,
        { analyticsLocations: s } = (0, v.ZP)(E.Z.PREMIUM_MARKETING_TIER_CARD),
        u = 1 === n;
    return (0, l.jsxs)(v.Gt, {
        value: s,
        children: [
            u &&
                (0, l.jsx)(m.Heading, {
                    className: Y.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: H.intl.string(H.t.vLz3Zm)
                }),
            (0, l.jsxs)('div', {
                className: c()(Y.premiumCards, o),
                children: [
                    u
                        ? (0, l.jsx)(en, { ctaButton: i })
                        : (0, l.jsx)(er, {
                              showWumpus: r,
                              ctaButton: i
                          }),
                    u
                        ? (0, l.jsx)(eo, {
                              ctaButton: a,
                              featureSet: 3
                          })
                        : (0, l.jsx)(es, {
                              showWumpus: r,
                              ctaButton: a
                          })
                ]
            })
        ]
    });
}
!(function (e) {
    (e[(e.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (e[(e.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (e[(e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), (e[(e.PREMIUM_TIER_2_GREY_FILL = 6)] = 'PREMIUM_TIER_2_GREY_FILL');
})(i || (i = {})),
    !(function (e) {
        (e[(e.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (e[(e.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.BOOSTING = 1)] = 'BOOSTING'), (e[(e.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (e[(e.V2 = 3)] = 'V2');
    })(o || (o = {})),
    !(function (e) {
        (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2');
    })(s || (s = {}));
