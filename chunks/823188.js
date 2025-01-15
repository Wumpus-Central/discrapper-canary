r.d(n, {
    Cy: function () {
        return Q;
    },
    Gq: function () {
        return en;
    },
    NN: function () {
        return o;
    },
    VE: function () {
        return i;
    },
    ZP: function () {
        return eo;
    },
    lq: function () {
        return er;
    },
    mn: function () {
        return q;
    },
    nT: function () {
        return ei;
    },
    uZ: function () {
        return s;
    },
    wp: function () {
        return es;
    }
});
var i,
    a,
    s,
    o,
    l = r(200651);
r(192379);
var u = r(120356),
    c = r.n(u),
    d = r(913527),
    f = r.n(d),
    _ = r(442837),
    h = r(692547),
    p = r(780384),
    m = r(481060),
    g = r(410030),
    E = r(100527),
    v = r(906732),
    I = r(535322),
    T = r(706454),
    b = r(594174),
    y = r(78839),
    S = r(709586),
    A = r(483444),
    N = r(599250),
    C = r(942659),
    R = r(930153),
    O = r(74538),
    D = r(357355),
    L = r(140465),
    x = r(650032),
    w = r(33052),
    P = r(104494),
    M = r(639119),
    k = r(230916),
    U = r(346497),
    B = r(504865),
    G = r(63802),
    F = r(318990),
    Z = r(474936),
    V = r(217702),
    j = r(388032),
    H = r(884206),
    Y = r(499317),
    W = r(476945),
    K = r(945182);
let z = 'Tier2Card';
function q(e) {
    let { text: n, className: r, colorOptions: i = 2 } = e;
    return (0, l.jsx)('div', {
        className: c()(r, H.freeTrialPill, {
            [H.freeTrialPillTier0GradientFill]: 1 === i,
            [H.freeTrialPillTier2GradientFill]: 3 === i,
            [H.freeTrialPillTier2OldGradientFill]: 4 === i,
            [H.lightBackgroundPill]: 5 === i,
            [H.greyBackgroundPill]: 6 === i
        }),
        children: (0, l.jsx)(m.Text, {
            variant: 'text-xs/bold',
            className: c()(H.freeTrialPillText, {
                [H.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                [H.freeTrialPillTextTier0]: 0 === i,
                [H.freeTrialPillTextTier2]: 2 === i || 6 === i
            }),
            children: n
        })
    });
}
function Q(e) {
    let n,
        { text: r, className: i, colorOptions: a = 2, isPillOnBorder: s = !0 } = e;
    switch (a) {
        case 1:
            n = h.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            n = 'url(#'.concat(G.l_, ')');
            break;
        case 4:
        case 5:
            n = 'url(#'.concat(G.Qi, ')');
            break;
        default:
            n = 'white';
    }
    return s
        ? (0, l.jsxs)('div', {
              className: c()(i, H.freeTrialPillWithSparkles),
              children: [
                  (0, l.jsx)(G.R9, {
                      foreground: H.sparkleStar1,
                      color: n
                  }),
                  (0, l.jsx)(G.R9, {
                      foreground: H.sparkleStar2,
                      color: n
                  }),
                  (0, l.jsx)(G.R9, {
                      foreground: H.sparkleStar3,
                      color: n
                  }),
                  (0, l.jsx)(q, {
                      text: r,
                      colorOptions: a
                  }),
                  (0, l.jsx)(G.R9, {
                      foreground: H.sparkleStar4,
                      color: n
                  }),
                  (0, l.jsx)(G.R9, {
                      foreground: H.sparkleStar5,
                      color: n
                  })
              ]
          })
        : (0, l.jsxs)('div', {
              className: c()(i, H.freeTrialPillWithSparkles),
              children: [
                  (0, l.jsx)(q, {
                      text: r,
                      colorOptions: a
                  }),
                  (0, l.jsx)(G.R9, {
                      foreground: H.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: n
                  }),
                  (0, l.jsx)(G.R9, {
                      foreground: H.sparkleStar2,
                      color: n
                  })
              ]
          });
}
function X(e) {
    let { Icon: n, text: r, isNew: i = !1, className: a, textVariant: s, isMarketingPageV2: o } = e;
    return (0, l.jsxs)('div', {
        className: null != a ? a : H.itemWithWumpus,
        children: [
            (0, l.jsx)(n, {
                className: H.icon,
                color: 'currentColor'
            }),
            (0, l.jsx)(m.Text, {
                variant: null != s ? s : 'text-md/normal',
                color: o ? 'currentColor' : 'always-white',
                children: r
            }),
            i
                ? (0, l.jsx)(I.Z, {
                      className: H.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function J(e) {
    var n;
    let { defaultPriceString: r, subscriptionPlan: i, discountOffer: a } = e,
        s = (0, k.A)(i);
    return (0, l.jsx)(l.Fragment, {
        children: j.intl.format(j.t.sJTwHR, {
            numMonths: null !== (n = a.discount.user_usage_limit) && void 0 !== n ? n : Z.rt,
            discountedPrice: s,
            regularPrice: r
        })
    });
}
function $(e) {
    let { isGift: n, premiumTier: r, offerTierMatchesCard: i, offerType: a, showYearlyPrice: s, priceOptions: o, textVariant: u, className: c, isMarketingPageV2: d } = e,
        h = (0, _.e7)([y.ZP], () => y.ZP.getPremiumTypeSubscription()),
        p = (0, _.e7)([b.default], () => b.default.getCurrentUser()),
        g = (0, L.t7)(),
        E = (0, L.lr)(),
        v = r === Z.p9.TIER_0 ? Z.Si.TIER_0 : Z.Si.TIER_2,
        I = (null == h ? void 0 : h.trialId) != null ? (null == p ? void 0 : p.premiumType) : g ? Z.p9.TIER_2 : null,
        T = (0, M.N)(),
        S = (0, P.Ng)(),
        A = null == T ? void 0 : T.subscription_trial;
    if (!d && !n && null != I && r === I && null != h && null != h.planIdFromItems) {
        let e = null != h.trialEndsAt ? f()(null == h ? void 0 : h.trialEndsAt).diff(f()(), 'd') : 0,
            n = Z.GP[h.planIdFromItems],
            r = O.ZP.formatPriceString(O.ZP.getDefaultPrice(n.id), n.interval),
            i = () => {
                var n, i, s;
                return 0 === a
                    ? j.intl.format(j.t['2CGBrq'], {
                          remainingTime: e,
                          price: r
                      })
                    : h.planIdFromItems === Z.Xh.PREMIUM_YEAR_TIER_2
                      ? j.intl.format(j.t['+qqh6u'], {
                            percent: null !== (n = null == E ? void 0 : E.percentage) && void 0 !== n ? n : Z.Bo,
                            regularPrice: r
                        })
                      : j.intl.formatToPlainString(j.t['3Ziutb'], {
                            percent: null !== (i = null == E ? void 0 : E.percentage) && void 0 !== i ? i : Z.M_,
                            regularPrice: r,
                            numMonths: null !== (s = null == E ? void 0 : E.duration) && void 0 !== s ? s : Z.rt
                        });
            };
        return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)(m.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: H.trialHeader,
                children: i()
            })
        });
    }
    if (!d && !n && i) {
        let e = O.ZP.formatPriceString(O.ZP.getDefaultPrice(r === Z.p9.TIER_0 ? Z.Xh.PREMIUM_MONTH_TIER_0 : Z.Xh.PREMIUM_MONTH_TIER_2), Z.rV.MONTH);
        if (0 === a) {
            var N, C, R, D;
            return (0, l.jsx)(m.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: H.trialHeader,
                children: j.intl.format(j.t['9vyovr'], {
                    planName: (0, O.aq)(null !== (C = Z.IW[null !== (N = null == A ? void 0 : A.sku_id) && void 0 !== N ? N : Z.Si.NONE]) && void 0 !== C ? C : Z.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, O.if)({
                        intervalType: null !== (R = null == A ? void 0 : A.interval) && void 0 !== R ? R : Z.rV.DAY,
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
                className: H.trialHeader,
                children: (0, l.jsx)(J, {
                    defaultPriceString: e,
                    subscriptionPlan: Z.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: S
                })
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(B.Z, {
                subscriptionTier: v,
                isGift: n,
                className: null != c ? c : H.price,
                priceOptions: o,
                variant: u,
                isMarketingPageV2: d
            }),
            s &&
                (0, l.jsx)(B.Z, {
                    subscriptionTier: v,
                    interval: Z.rV.YEAR,
                    className: null != c ? c : H.price,
                    isGift: n,
                    priceOptions: o,
                    variant: u,
                    isMarketingPageV2: d
                })
        ]
    });
}
function ee(e) {
    let { isMarketingPageV2: n } = e;
    return n
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(X, {
                      Icon: m.CheckmarkLargeIcon,
                      text: j.intl.string(j.t.KjrZ8f),
                      className: H.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, l.jsx)(X, {
                      Icon: m.CheckmarkLargeIcon,
                      text: j.intl.formatToPlainString(j.t.p8QVLS, { maxUploadPremium: (0, O.v9)(Z.p9.TIER_0, { useSpace: !1 }) }),
                      className: H.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  }),
                  (0, l.jsx)(X, {
                      Icon: m.CheckmarkLargeIcon,
                      text: j.intl.string(j.t.Uukj4u),
                      className: H.itemV2,
                      textVariant: 'text-sm/normal',
                      isMarketingPageV2: !0
                  })
              ]
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(X, {
                      Icon: m.UploadIcon,
                      text: j.intl.formatToPlainString(j.t.p8QVLS, { maxUploadPremium: (0, O.v9)(Z.p9.TIER_0, { useSpace: !1 }) })
                  }),
                  (0, l.jsx)(X, {
                      Icon: m.ReactionIcon,
                      text: j.intl.string(j.t.KjrZ8f)
                  }),
                  (0, l.jsx)(X, {
                      Icon: m.SuperReactionIcon,
                      text: j.intl.string(j.t.taMwg4)
                  }),
                  (0, l.jsx)(X, {
                      Icon: m.NitroWheelIcon,
                      text: j.intl.string(j.t['8ukxAQ'])
                  })
              ]
          });
}
function et(e) {
    var n;
    let { ctaButton: r, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: o } = e,
        u = (0, _.e7)([y.ZP], () => y.ZP.getPremiumTypeSubscription()),
        d = (0, M.N)(),
        f = null == d ? void 0 : null === (n = d.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        h = (null == u ? void 0 : u.trialId) != null,
        p = null != f || h;
    return (0, l.jsxs)('div', {
        className: c()(H.tier0, H.card, H.tier0V2Background, a, {
            [H.withTier0Rim]: !s && p,
            [H.withCardHover]: !s && p
        }),
        children: [
            (0, l.jsx)('img', {
                src: Y,
                className: H.v2starBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(C.Z, { className: c()(H.title, H.tier0V2Title) }),
                            (0, l.jsx)($, {
                                isGift: s,
                                premiumTier: Z.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: f === Z.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: o,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(ee, { isMarketingPageV2: !0 }) })
                ]
            }),
            r
        ]
    });
}
function en(e) {
    var n;
    let { showWumpus: r, ctaButton: i, showYearlyPrice: a, className: s, isGift: o = !1, priceOptions: u } = e,
        d = (0, _.e7)([y.ZP], () => y.ZP.getPremiumTypeSubscription()),
        f = (0, _.e7)([b.default], () => b.default.getCurrentUser()),
        h = (0, M.N)(),
        p = null == h ? void 0 : null === (n = h.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        g = (null == d ? void 0 : d.trialId) != null,
        E = (null == d ? void 0 : d.trialId) != null ? (null == f ? void 0 : f.premiumType) : null,
        v = null != p || g;
    return (0, l.jsxs)('div', {
        className: c()(H.tier0, H.card, s, {
            [H.withTier0Rim]: !o && v,
            [H.withCardHover]: !o && v
        }),
        children: [
            p === Z.Si.TIER_0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(Q, {
                              text: j.intl.string(j.t.IBYG5e),
                              className: H.topRimPill,
                              colorOptions: 0
                          }),
                          (0, l.jsx)('div', { className: H.rimGlowTier0 })
                      ]
                  })
                : null,
            r
                ? (0, l.jsx)('div', {
                      className: H.wumpusImageContainer,
                      children: (0, l.jsx)(m.Image, {
                          src: W,
                          mediaLayoutType: V.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: H.wumpusImage
                      })
                  })
                : null,
            o || p !== Z.Si.TIER_0
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(Q, {
                              text: j.intl.string(j.t.IBYG5e),
                              className: H.topRimPill,
                              colorOptions: 0
                          }),
                          (0, l.jsx)('div', { className: H.rimGlowTier0 })
                      ]
                  }),
            o || E !== Z.p9.TIER_0
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(Q, {
                              text: j.intl.string(j.t.qYKftb),
                              className: H.topRimPill,
                              colorOptions: 0
                          }),
                          (0, l.jsx)('div', { className: H.rimGlowTier0 })
                      ]
                  }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(N.Z, { className: c()(H.title, H.tier0Title) }),
                            (0, l.jsx)($, {
                                isGift: o,
                                premiumTier: Z.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: p === Z.Si.TIER_0,
                                showYearlyPrice: a,
                                priceOptions: u
                            })
                        ]
                    }),
                    (0, l.jsx)('div', { children: (0, l.jsx)(ee, {}) })
                ]
            }),
            i,
            o || p !== Z.Si.TIER_0 ? null : (0, l.jsx)(G.t, { tier: Z.p9.TIER_0 })
        ]
    });
}
function er(e) {
    var n;
    let { showWumpus: r, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: o } = e,
        u = (0, M.N)(),
        d = null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.sku_id;
    return (0, l.jsxs)('div', {
        className: c()(H.tier0, H.card, a),
        children: [
            r
                ? (0, l.jsx)('div', {
                      className: H.wumpusImageContainer,
                      children: (0, l.jsx)(m.Image, {
                          src: W,
                          mediaLayoutType: V.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: H.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(N.Z, { className: c()(H.title, H.tier0Title) }),
                            (0, l.jsx)($, {
                                isGift: s,
                                premiumTier: Z.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: d === Z.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: o
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(X, {
                                Icon: m.UploadIcon,
                                text: j.intl.formatToPlainString(j.t.p8QVLS, { maxUploadPremium: (0, O.v9)(Z.p9.TIER_0, { useSpace: !1 }) })
                            }),
                            (0, l.jsx)(X, {
                                Icon: m.ReactionIcon,
                                text: j.intl.string(j.t.KjrZ8f)
                            }),
                            (0, l.jsx)(X, {
                                Icon: m.PaintPaletteIcon,
                                text: j.intl.string(j.t.OuItFh)
                            }),
                            (0, l.jsx)(X, {
                                Icon: m.NitroWheelIcon,
                                text: j.intl.string(j.t['8ukxAQ'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function ei(e) {
    let { featureSet: n = 0, isModal: r = !1, isGift: i = !1 } = e,
        a = (0, _.e7)([T.default], () => T.default.locale),
        s = (0, _.e7)([D.Z], () => D.Z.affinities),
        o = r && !i && s.length > 0;
    switch (n) {
        case 3:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(m.Text, {
                        variant: 'text-sm/bold',
                        className: H.tier2V2Subheader,
                        children: j.intl.string(j.t.AozD3d)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.CheckmarkLargeIcon,
                        text: j.intl.string(j.t.kpMomJ),
                        className: H.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.CheckmarkLargeIcon,
                        text: j.intl.formatToPlainString(j.t.p8QVLS, { maxUploadPremium: (0, O.v9)(Z.p9.TIER_2, { useSpace: !1 }) }),
                        className: H.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.CheckmarkLargeIcon,
                        text: j.intl.string(j.t.W180bW),
                        className: H.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.CheckmarkLargeIcon,
                        text: j.intl.string(j.t.zTk8Ul),
                        className: H.itemV2,
                        textVariant: 'text-sm/normal',
                        isMarketingPageV2: !0
                    }),
                    o && (0, l.jsx)(F.Z, {})
                ]
            });
        case 1:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(X, {
                        Icon: (0, m.makeIconCompat)(S.Z),
                        text: j.intl.formatToPlainString(j.t.T9RTr6, {
                            numBoosts: Z.cb,
                            percentageOff: (0, R.T3)(a, Z.Rr / 100)
                        })
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.UploadIcon,
                        text: j.intl.formatToPlainString(j.t.p8QVLS, { maxUploadPremium: (0, O.v9)(Z.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.ReactionIcon,
                        text: j.intl.string(j.t.KjrZ8f)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.ScreenArrowIcon,
                        text: j.intl.string(j.t.W180bW)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.UserSquareIcon,
                        text: j.intl.string(j.t.CNIZf3)
                    })
                ]
            });
        case 2:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(X, {
                        Icon: m.UploadIcon,
                        text: j.intl.formatToPlainString(j.t.p8QVLS, { maxUploadPremium: (0, O.v9)(Z.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.ReactionIcon,
                        text: j.intl.string(j.t.KjrZ8f)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.SuperReactionIcon,
                        text: j.intl.string(j.t.taMwg4)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.ScreenArrowIcon,
                        text: j.intl.string(j.t.W180bW)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.UserSquareIcon,
                        text: j.intl.string(j.t.CNIZf3)
                    })
                ]
            });
        default:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(X, {
                        Icon: m.UploadIcon,
                        text: j.intl.formatToPlainString(j.t.p8QVLS, { maxUploadPremium: (0, O.v9)(Z.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.ReactionIcon,
                        text: j.intl.string(j.t.KjrZ8f)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.SuperReactionIcon,
                        text: j.intl.string(j.t.taMwg4)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.ScreenArrowIcon,
                        text: j.intl.string(j.t.W180bW)
                    }),
                    (0, l.jsx)(X, {
                        Icon: (0, m.makeIconCompat)(S.Z),
                        text: j.intl.string(j.t.cdfuUV)
                    }),
                    (0, l.jsx)(X, {
                        Icon: m.UserSquareIcon,
                        text: j.intl.string(j.t.CNIZf3)
                    }),
                    o && (0, l.jsx)(F.Z, {})
                ]
            });
    }
}
function ea(e) {
    var n;
    let { ctaButton: r, showYearlyPrice: i, featureSet: a = 0, className: s, isGift: o = !1, isModal: u = !1, priceOptions: d, showPromotionalGiftBanner: f = !1 } = e,
        _ = (0, M.N)(),
        h = null == _ ? void 0 : null === (n = _.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        p = (0, L.Nx)(),
        g = (0, P.Ng)(),
        E = null != _ ? 0 : null != g ? 1 : null,
        v = (0, U.Vi)(),
        I = !o && p,
        T = (0, U.W1)();
    return (0, l.jsxs)('div', {
        className: c()(H.card, H.tier2, H.tier2V2Background, s, {
            [H.withTier2Rim]: I,
            [H.withCardHover]: I,
            [H.withPromotionalGradientBanner]: f
        }),
        children: [
            (0, l.jsx)('div', { className: H.tier2SideGradient }),
            (0, l.jsx)('img', {
                src: Y,
                className: H.v2starBackground,
                alt: ''
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(A.Z, { className: c()(H.title, H.tier2V2Title) }),
                            !o &&
                                h !== Z.Si.TIER_2 &&
                                v &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-xs/bold',
                                        className: H.freeTrialPillInline,
                                        children: T
                                    })
                                }),
                            (0, l.jsx)($, {
                                isGift: o,
                                premiumTier: Z.p9.TIER_2,
                                offerType: E,
                                offerTierMatchesCard: h === Z.Si.TIER_2 || (0, P.Wp)(g, Z.Si.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: d,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(ei, {
                            featureSet: a,
                            isModal: u,
                            isGift: o
                        })
                    })
                ]
            }),
            r,
            f && (0, l.jsx)(w.K, {})
        ]
    });
}
function es(e) {
    var n;
    let { showWumpus: r, ctaButton: i, showYearlyPrice: a, featureSet: s = 0, className: o, isGift: u = !1, isModal: d = !1, priceOptions: f, showPromotionalGiftBanner: h = !1 } = e,
        E = (0, _.e7)([y.ZP], () => y.ZP.getPremiumTypeSubscription()),
        v = (0, _.e7)([b.default], () => b.default.getCurrentUser()),
        I = (0, M.N)(),
        T = null == I ? void 0 : null === (n = I.subscription_trial) || void 0 === n ? void 0 : n.sku_id,
        S = (null == E ? void 0 : E.trialId) != null ? (null == v ? void 0 : v.premiumType) : null,
        N = (0, L.Nx)(),
        C = (0, P.Ng)(),
        R = (0, L.t7)(),
        O = null != T || null != S ? 0 : null != C || R ? 1 : null,
        D = (0, U.Vi)(),
        k = !u && N,
        B = (0, U.W1)(),
        F = (0, p.ap)((0, g.ZP)()),
        Y = F ? 5 : 2,
        { enabled: W } = x._.useExperiment({ location: z }, { autoTrackExposure: !1 }),
        q = j.intl.string(j.t.IBYG5e);
    W && (null == I ? void 0 : I.trial_id) === Z.a7 && (q = j.intl.string(j.t.gtNqJS));
    let X = k && !F ? H.rimGlowTier2 : void 0;
    return (0, l.jsxs)('div', {
        className: c()(H.card, H.tier2, o, {
            [H.withTier2Rim]: k,
            [H.withCardHover]: k,
            [H.withPromotionalGradientBanner]: h
        }),
        children: [
            !u && null != C && (0, P.Wp)(C, Z.Si.TIER_2) && void 0 !== C.discount.amount
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(Q, {
                              text: R ? j.intl.string(j.t.EyjDRE) : j.intl.formatToPlainString(j.t.iiLbvr, { percent: C.discount.amount }),
                              className: H.topRimPill,
                              colorOptions: Y
                          }),
                          (0, l.jsx)('div', { className: X })
                      ]
                  })
                : null,
            u || T !== Z.Si.TIER_2
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(Q, {
                              text: q,
                              className: H.topRimPill,
                              colorOptions: Y
                          }),
                          (0, l.jsx)('div', { className: X })
                      ]
                  }),
            u || S !== Z.p9.TIER_2
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(Q, {
                              text: j.intl.string(j.t.qYKftb),
                              className: H.topRimPill,
                              colorOptions: Y
                          }),
                          (0, l.jsx)('div', { className: X })
                      ]
                  }),
            !u &&
                R &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(Q, {
                            text: j.intl.string(j.t.EyjDRE),
                            className: H.topRimPill,
                            colorOptions: Y
                        }),
                        (0, l.jsx)('div', { className: X })
                    ]
                }),
            r
                ? (0, l.jsx)('div', {
                      className: H.wumpusImageContainer,
                      children: (0, l.jsx)(m.Image, {
                          src: K,
                          mediaLayoutType: V.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: H.wumpusImage
                      })
                  })
                : null,
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(A.Z, { className: c()(H.title, H.tier2Title) }),
                            !u &&
                                T !== Z.Si.TIER_2 &&
                                D &&
                                (0, l.jsx)('div', {
                                    children: (0, l.jsx)(m.Text, {
                                        variant: 'text-xs/bold',
                                        className: H.freeTrialPillInline,
                                        children: B
                                    })
                                }),
                            (0, l.jsx)($, {
                                isGift: u,
                                premiumTier: Z.p9.TIER_2,
                                offerType: O,
                                offerTierMatchesCard: T === Z.Si.TIER_2 || (0, P.Wp)(C, Z.Si.TIER_2),
                                showYearlyPrice: a,
                                priceOptions: f
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        children: (0, l.jsx)(ei, {
                            featureSet: s,
                            isModal: d,
                            isGift: u
                        })
                    })
                ]
            }),
            i,
            u || (T !== Z.Si.TIER_2 && null == C) ? null : (0, l.jsx)(G.t, { tier: Z.p9.TIER_2 }),
            h && (0, l.jsx)(w.K, {})
        ]
    });
}
function eo(e) {
    let { variant: n, showWumpus: r, tier0CTAButton: i, tier2CTAButton: a, className: s } = e,
        { analyticsLocations: o } = (0, v.ZP)(E.Z.PREMIUM_MARKETING_TIER_CARD),
        u = 1 === n;
    return (0, l.jsxs)(v.Gt, {
        value: o,
        children: [
            u &&
                (0, l.jsx)(m.Heading, {
                    className: H.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: j.intl.string(j.t.vLz3Zm)
                }),
            (0, l.jsxs)('div', {
                className: c()(H.premiumCards, s),
                children: [
                    u
                        ? (0, l.jsx)(et, { ctaButton: i })
                        : (0, l.jsx)(en, {
                              showWumpus: r,
                              ctaButton: i
                          }),
                    u
                        ? (0, l.jsx)(ea, {
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
    })(s || (s = {})),
    !(function (e) {
        (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2');
    })(o || (o = {}));
