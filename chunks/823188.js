n.d(t, {
    Cy: () => H,
    Gq: () => Q,
    NN: () => et,
    VE: () => V,
    ZP: () => en,
    mn: () => Z,
    nT: () => J,
    uZ: () => X,
    wp: () => ee
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    c = n(692547),
    u = n(780384),
    d = n(481060),
    f = n(410030),
    _ = n(100527),
    p = n(906732),
    h = n(535322),
    m = n(706454),
    g = n(594174),
    E = n(78839),
    b = n(483444),
    y = n(599250),
    O = n(942659),
    v = n(74538),
    I = n(357355),
    S = n(140465),
    T = n(286961),
    A = n(33052),
    N = n(104494),
    C = n(639119),
    P = n(230916),
    R = n(346497),
    w = n(504865),
    D = n(63802),
    L = n(318990),
    x = n(575732),
    k = n(474936),
    M = n(217702),
    j = n(388032),
    U = n(261975),
    G = n(499317),
    B = n(476945),
    F = n(945182),
    V = (function (e) {
        return (e[(e.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (e[(e.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (e[(e.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (e[(e.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), (e[(e.PREMIUM_TIER_2_GREY_FILL = 6)] = 'PREMIUM_TIER_2_GREY_FILL'), e;
    })({});
function Z(e) {
    let { text: t, className: n, colorOptions: i = 2, icon: o, gap: s = !0 } = e;
    return (0, r.jsxs)('div', {
        className: a()(n, U.freeTrialPill, {
            [U.freeTrialPillTier0GradientFill]: 1 === i,
            [U.freeTrialPillTier2GradientFill]: 3 === i,
            [U.freeTrialPillTier2OldGradientFill]: 4 === i,
            [U.lightBackgroundPill]: 5 === i,
            [U.greyBackgroundPill]: 6 === i,
            [U.freeTrialPillGap]: s
        }),
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-xs/bold',
                className: a()(U.freeTrialPillText, {
                    [U.freeTrialPillTextInverted]: 0 !== i && 2 !== i,
                    [U.freeTrialPillTextTier0]: 0 === i,
                    [U.freeTrialPillTextTier2]: 2 === i || 6 === i
                }),
                children: t
            }),
            o
        ]
    });
}
function H(e) {
    let t,
        { text: n, className: i, colorOptions: o = 2, isPillOnBorder: s = !0 } = e;
    switch (o) {
        case 1:
            t = c.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(D.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(D.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return s
        ? (0, r.jsxs)('div', {
              className: a()(i, U.freeTrialPillWithSparkles),
              children: [
                  (0, r.jsx)(D.R9, {
                      foreground: U.sparkleStar1,
                      color: t
                  }),
                  (0, r.jsx)(D.R9, {
                      foreground: U.sparkleStar2,
                      color: t
                  }),
                  (0, r.jsx)(D.R9, {
                      foreground: U.sparkleStar3,
                      color: t
                  }),
                  (0, r.jsx)(Z, {
                      text: n,
                      colorOptions: o
                  }),
                  (0, r.jsx)(D.R9, {
                      foreground: U.sparkleStar4,
                      color: t
                  }),
                  (0, r.jsx)(D.R9, {
                      foreground: U.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(i, U.freeTrialPillWithSparkles),
              children: [
                  (0, r.jsx)(Z, {
                      text: n,
                      colorOptions: o
                  }),
                  (0, r.jsx)(D.R9, {
                      foreground: U.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, r.jsx)(D.R9, {
                      foreground: U.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function Y(e) {
    let { Icon: t, text: n, isNew: i = !1, className: a, textVariant: o, isMarketingPageV2: s } = e;
    return (0, r.jsxs)('div', {
        className: null != a ? a : U.itemWithWumpus,
        children: [
            (0, r.jsx)(t, {
                className: U.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(d.Text, {
                variant: null != o ? o : 'text-md/normal',
                color: s ? 'currentColor' : 'always-white',
                children: n
            }),
            i
                ? (0, r.jsx)(h.Z, {
                      className: U.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function W(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: i, discountOffer: a } = e,
        o = (0, P.A)(i);
    return (0, r.jsx)(r.Fragment, {
        children: j.intl.format(j.t.sJTwHR, {
            numMonths: null != (t = a.discount.user_usage_limit) ? t : k.rt,
            discountedPrice: o,
            regularPrice: n
        })
    });
}
function K(e) {
    let { isGift: t, premiumTier: n, offerTierMatchesCard: i, offerType: a, showYearlyPrice: o, priceOptions: c, textVariant: u, className: f, isMarketingPageV2: _ } = e,
        p = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        h = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        m = (0, S.t7)(),
        b = (0, S.lr)(),
        y = n === k.p9.TIER_0 ? k.Si.TIER_0 : k.Si.TIER_2,
        O = (null == p ? void 0 : p.hasActiveTrial) ? (null == h ? void 0 : h.premiumType) : m ? k.p9.TIER_2 : null,
        I = (0, C.N)(),
        T = (0, N.Ng)(),
        A = null == I ? void 0 : I.subscription_trial;
    if (!_ && !t && null != O && n === O && null != p && null != p.planIdFromItems) {
        let e = null != p.trialEndsAt ? s()(null == p ? void 0 : p.trialEndsAt).diff(s()(), 'd') : 0,
            t = k.GP[p.planIdFromItems],
            n = v.ZP.formatPriceString(v.ZP.getDefaultPrice(t.id), t.interval),
            i = () => {
                var t, r, i;
                return 0 === a
                    ? j.intl.format(j.t['2CGBrq'], {
                          remainingTime: e,
                          price: n
                      })
                    : p.planIdFromItems === k.Xh.PREMIUM_YEAR_TIER_2
                      ? j.intl.format(j.t['+qqh6u'], {
                            percent: null != (t = null == b ? void 0 : b.percentage) ? t : k.Bo,
                            regularPrice: n
                        })
                      : j.intl.formatToPlainString(j.t['3Ziutb'], {
                            percent: null != (r = null == b ? void 0 : b.percentage) ? r : k.M_,
                            regularPrice: n,
                            numMonths: null != (i = null == b ? void 0 : b.duration) ? i : k.rt
                        });
            };
        return (0, r.jsx)(d.X6q, {
            variant: 'heading-md/normal',
            color: 'always-white',
            className: U.trialHeader,
            children: i()
        });
    }
    if (!_ && !t && i) {
        let e = v.ZP.formatPriceString(v.ZP.getDefaultPrice(n === k.p9.TIER_0 ? k.Xh.PREMIUM_MONTH_TIER_0 : k.Xh.PREMIUM_MONTH_TIER_2), k.rV.MONTH);
        if (0 === a) {
            var P, R, D, L;
            return (0, r.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: U.trialHeader,
                children: j.intl.format(j.t['9vyovr'], {
                    planName: (0, v.aq)(null != (R = k.IW[null != (P = null == A ? void 0 : A.sku_id) ? P : k.Si.NONE]) ? R : k.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, v.if)({
                        intervalType: null != (D = null == A ? void 0 : A.interval) ? D : k.rV.DAY,
                        intervalCount: null != (L = null == A ? void 0 : A.interval_count) ? L : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != T)
            return (0, r.jsx)(d.X6q, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: U.trialHeader,
                children: (0, r.jsx)(W, {
                    defaultPriceString: e,
                    subscriptionPlan: k.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: T
                })
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.Z, {
                subscriptionTier: y,
                isGift: t,
                className: null != f ? f : U.price,
                priceOptions: c,
                variant: u,
                isMarketingPageV2: _
            }),
            o &&
                (0, r.jsx)(w.Z, {
                    subscriptionTier: y,
                    interval: k.rV.YEAR,
                    className: null != f ? f : U.price,
                    isGift: t,
                    priceOptions: c,
                    variant: u,
                    isMarketingPageV2: _
                })
        ]
    });
}
function z(e) {
    let { isMarketingPageV2: t } = e;
    return t
        ? (0, r.jsx)(r.Fragment, {
              children: x.LH.map((e, t) => {
                  let { Icon: n, getText: i } = e;
                  return (0, r.jsx)(
                      Y,
                      {
                          Icon: n,
                          text: i(),
                          className: U.itemV2,
                          textVariant: 'text-sm/normal',
                          isMarketingPageV2: !0
                      },
                      t
                  );
              })
          })
        : (0, r.jsx)(r.Fragment, {
              children: x.FV.map((e, t) => {
                  let { Icon: n, getText: i } = e;
                  return (0, r.jsx)(
                      Y,
                      {
                          Icon: n,
                          text: i()
                      },
                      t
                  );
              })
          });
}
function q(e) {
    var t;
    let { ctaButton: n, showYearlyPrice: i, className: o, isGift: s = !1, priceOptions: c } = e,
        u = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        d = (0, C.N)(),
        f = null == d || null == (t = d.subscription_trial) ? void 0 : t.sku_id,
        _ = !!(null == u ? void 0 : u.hasActiveTrial),
        p = null != f || _;
    return (0, r.jsxs)('div', {
        className: a()(U.tier0, U.card, U.tier0V2Background, o, {
            [U.withTier0Rim]: !s && p,
            [U.withCardHover]: !s && p
        }),
        children: [
            (0, r.jsx)('img', {
                src: G,
                className: U.v2starBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(O.Z, { className: a()(U.title, U.tier0V2Title) }),
                            (0, r.jsx)(K, {
                                isGift: s,
                                premiumTier: k.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: f === k.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(z, { isMarketingPageV2: !0 }) })
                ]
            }),
            n
        ]
    });
}
function Q(e) {
    var t;
    let { showWumpus: n, ctaButton: i, showYearlyPrice: o, className: s, isGift: c = !1, priceOptions: u } = e,
        f = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        _ = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        p = (0, C.N)(),
        h = null == p || null == (t = p.subscription_trial) ? void 0 : t.sku_id,
        m = !!(null == f ? void 0 : f.hasActiveTrial),
        b = m ? (null == _ ? void 0 : _.premiumType) : null,
        O = null != h || m;
    return (0, r.jsxs)('div', {
        className: a()(U.tier0, U.card, s, {
            [U.withTier0Rim]: !c && O,
            [U.withCardHover]: !c && O
        }),
        children: [
            h === k.Si.TIER_0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(H, {
                              text: j.intl.string(j.t.IBYG5e),
                              className: U.topRimPill,
                              colorOptions: 0
                          }),
                          (0, r.jsx)('div', { className: U.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, r.jsx)('div', {
                      className: U.wumpusImageContainer,
                      children: (0, r.jsx)(d.Eep, {
                          src: B,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage
                      })
                  })
                : null,
            c || h !== k.Si.TIER_0
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(H, {
                              text: j.intl.string(j.t.IBYG5e),
                              className: U.topRimPill,
                              colorOptions: 0
                          }),
                          (0, r.jsx)('div', { className: U.rimGlowTier0 })
                      ]
                  }),
            c || b !== k.p9.TIER_0
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(H, {
                              text: j.intl.string(j.t.qYKftb),
                              className: U.topRimPill,
                              colorOptions: 0
                          }),
                          (0, r.jsx)('div', { className: U.rimGlowTier0 })
                      ]
                  }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(y.Z, { className: a()(U.title, U.tier0Title) }),
                            (0, r.jsx)(K, {
                                isGift: c,
                                premiumTier: k.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: h === k.Si.TIER_0,
                                showYearlyPrice: o,
                                priceOptions: u
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: (0, r.jsx)(z, {}) })
                ]
            }),
            c || h !== k.Si.TIER_0 ? null : (0, r.jsx)(D.t, { tier: k.p9.TIER_0 }),
            i
        ]
    });
}
var X = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.BOOSTING = 1)] = 'BOOSTING'), (e[(e.FRACTIONAL_PREMIUM = 2)] = 'FRACTIONAL_PREMIUM'), (e[(e.V2 = 3)] = 'V2'), e;
})({});
function J(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: i = !1 } = e,
        a = (0, l.e7)([m.default], () => m.default.locale),
        o = (0, l.e7)([I.Z], () => I.Z.affinities),
        s = n && !i && o.length > 0;
    switch (t) {
        case 3:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/bold',
                        className: U.tier2V2Subheader,
                        children: j.intl.string(j.t.AozD3d)
                    }),
                    x.Kw.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, r.jsx)(
                            Y,
                            {
                                Icon: n,
                                text: i(),
                                className: U.itemV2,
                                textVariant: 'text-sm/normal',
                                isMarketingPageV2: !0
                            },
                            t
                        );
                    }),
                    s && (0, r.jsx)(L.Z, {})
                ]
            });
        case 1:
            return (0, r.jsx)(r.Fragment, {
                children: x.x7.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, r.jsx)(
                        Y,
                        {
                            Icon: n,
                            text: i(a)
                        },
                        t
                    );
                })
            });
        case 2:
            return (0, r.jsx)(r.Fragment, {
                children: x.Pc.map((e, t) => {
                    let { Icon: n, getText: i } = e;
                    return (0, r.jsx)(
                        Y,
                        {
                            Icon: n,
                            text: i()
                        },
                        t
                    );
                })
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    x.Nv.map((e, t) => {
                        let { Icon: n, getText: i } = e;
                        return (0, r.jsx)(
                            Y,
                            {
                                Icon: n,
                                text: i()
                            },
                            t
                        );
                    }),
                    s && (0, r.jsx)(L.Z, {})
                ]
            });
    }
}
function $(e) {
    var t, n, i;
    let { ctaButton: o, showYearlyPrice: s, featureSet: l = 0, className: c, isGift: u = !1, isModal: f = !1, priceOptions: _, showPromotionalGiftBanner: p = !1 } = e,
        h = (0, C.N)(),
        m = null == h || null == (t = h.subscription_trial) ? void 0 : t.sku_id,
        g = (0, S.Nx)(),
        E = (0, N.Ng)(),
        y = null != h ? 0 : null != E ? 1 : null,
        O = (0, R.Vi)(),
        v = !u && g,
        I = null == (n = (0, T.Z)()) ? void 0 : n.planSelection,
        P = null == I || null == (i = I.getBackgroundImageUrl) ? void 0 : i.call(I),
        w = (0, R.W1)();
    return (0, r.jsxs)('div', {
        className: a()(U.card, U.tier2, U.tier2V2Background, c, {
            [U.withTier2Rim]: v,
            [U.withCardHover]: v,
            [U.withPromotionalGradientBanner]: p
        }),
        children: [
            p &&
                null != P &&
                (0, r.jsx)('img', {
                    className: U.promotionalBackgroundImage,
                    alt: '',
                    src: P
                }),
            (0, r.jsx)('div', { className: U.tier2SideGradient }),
            (0, r.jsx)('img', {
                src: G,
                className: U.v2starBackground,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(b.Z, { className: a()(U.title, U.tier2V2Title) }),
                            !u &&
                                m !== k.Si.TIER_2 &&
                                O &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/bold',
                                        className: U.freeTrialPillInline,
                                        children: w
                                    })
                                }),
                            (0, r.jsx)(K, {
                                isGift: u,
                                premiumTier: k.p9.TIER_2,
                                offerType: y,
                                offerTierMatchesCard: m === k.Si.TIER_2 || (0, N.Wp)(E, k.Si.TIER_2),
                                showYearlyPrice: s,
                                priceOptions: _,
                                textVariant: 'heading-xl/normal',
                                isMarketingPageV2: !0
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(J, {
                            featureSet: l,
                            isModal: f,
                            isGift: u
                        })
                    })
                ]
            }),
            o,
            p && (0, r.jsx)(A.K, {})
        ]
    });
}
function ee(e) {
    var t, n, i;
    let { showWumpus: o, ctaButton: s, showYearlyPrice: c, featureSet: _ = 0, className: p, isGift: h = !1, isModal: m = !1, priceOptions: y, showPromotionalGiftBanner: O = !1 } = e,
        v = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        I = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        P = (0, C.N)(),
        w = null == P || null == (t = P.subscription_trial) ? void 0 : t.sku_id,
        L = (null == v ? void 0 : v.hasActiveTrial) ? (null == I ? void 0 : I.premiumType) : null,
        x = (0, S.Nx)(),
        G = (0, N.Ng)(),
        B = (0, S.t7)(),
        V = null != w || null != L ? 0 : null != G || B ? 1 : null,
        Z = (0, R.Vi)(),
        Y = !h && x,
        W = null == (n = (0, T.Z)()) ? void 0 : n.planSelection,
        z = null == W || null == (i = W.getBackgroundImageUrl) ? void 0 : i.call(W),
        q = (0, R.W1)(),
        Q = (0, u.ap)((0, f.ZP)()),
        X = Q ? 5 : 2,
        $ = j.intl.string(j.t.IBYG5e);
    (null == P ? void 0 : P.trial_id) === k.a7 && ($ = j.intl.string(j.t.gtNqJS));
    let ee = Y && !Q ? U.rimGlowTier2 : void 0;
    return (0, r.jsxs)('div', {
        className: a()(U.card, U.tier2, p, {
            [U.withTier2Rim]: Y,
            [U.withCardHover]: Y,
            [U.withPromotionalGradientBanner]: O
        }),
        children: [
            O &&
                null !== z &&
                (0, r.jsx)('img', {
                    className: U.promotionalBackgroundImage,
                    alt: '',
                    src: z
                }),
            !h && null != G && (0, N.Wp)(G, k.Si.TIER_2) && void 0 !== G.discount.amount
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(H, {
                              text: B ? j.intl.string(j.t.EyjDRE) : j.intl.formatToPlainString(j.t.iiLbvr, { percent: G.discount.amount }),
                              className: U.topRimPill,
                              colorOptions: X
                          }),
                          (0, r.jsx)('div', { className: ee })
                      ]
                  })
                : null,
            h || w !== k.Si.TIER_2
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(H, {
                              text: $,
                              className: U.topRimPill,
                              colorOptions: X
                          }),
                          (0, r.jsx)('div', { className: ee })
                      ]
                  }),
            h || L !== k.p9.TIER_2
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(H, {
                              text: j.intl.string(j.t.qYKftb),
                              className: U.topRimPill,
                              colorOptions: X
                          }),
                          (0, r.jsx)('div', { className: ee })
                      ]
                  }),
            !h &&
                B &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(H, {
                            text: j.intl.string(j.t.EyjDRE),
                            className: U.topRimPill,
                            colorOptions: X
                        }),
                        (0, r.jsx)('div', { className: ee })
                    ]
                }),
            o
                ? (0, r.jsx)('div', {
                      className: U.wumpusImageContainer,
                      children: (0, r.jsx)(d.Eep, {
                          src: F,
                          mediaLayoutType: M.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: U.wumpusImage
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(b.Z, { className: a()(U.title, U.tier2Title) }),
                            !h &&
                                w !== k.Si.TIER_2 &&
                                Z &&
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/bold',
                                        className: U.freeTrialPillInline,
                                        children: q
                                    })
                                }),
                            (0, r.jsx)(K, {
                                isGift: h,
                                premiumTier: k.p9.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: w === k.Si.TIER_2 || (0, N.Wp)(G, k.Si.TIER_2),
                                showYearlyPrice: c,
                                priceOptions: y
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(J, {
                            featureSet: _,
                            isModal: m,
                            isGift: h
                        })
                    })
                ]
            }),
            h || (w !== k.Si.TIER_2 && null == G) ? null : (0, r.jsx)(D.t, { tier: k.p9.TIER_2 }),
            s,
            O && (0, r.jsx)(A.K, {})
        ]
    });
}
var et = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.MARKETING_PAGE_V2 = 1)] = 'MARKETING_PAGE_V2'), e;
})({});
function en(e) {
    let { innerRef: t, variant: n, showWumpus: i, tier0CTAButton: o, tier2CTAButton: s, className: l } = e,
        { analyticsLocations: c } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD),
        u = 1 === n,
        f = (e) => {
            null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
        };
    return (0, r.jsxs)(p.Gt, {
        value: c,
        children: [
            u &&
                (0, r.jsx)(d.X6q, {
                    ref: f,
                    className: U.v2TierCardSectionHeader,
                    variant: 'display-md',
                    color: 'header-primary',
                    children: j.intl.string(j.t.vLz3Zm)
                }),
            (0, r.jsxs)('div', {
                ref: f,
                className: a()(U.premiumCards, l),
                children: [
                    u
                        ? (0, r.jsx)(q, { ctaButton: o })
                        : (0, r.jsx)(Q, {
                              showWumpus: i,
                              ctaButton: o
                          }),
                    u
                        ? (0, r.jsx)($, {
                              ctaButton: s,
                              featureSet: 3
                          })
                        : (0, r.jsx)(ee, {
                              showWumpus: i,
                              ctaButton: s
                          })
                ]
            })
        ]
    });
}
