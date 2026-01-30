t.d(n, {
    As: () => el,
    WE: () => es,
    Xp: () => ea,
}),
    t(321073),
    t(896048);
var i = t(627968),
    l = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(284009),
    c = t.n(s),
    o = t(997101),
    u = t(311907),
    d = t(827734),
    m = t(990078),
    p = t(397927),
    y = t(821891),
    v = t(726656),
    x = t(637141),
    g = t(953689),
    P = t(155718),
    I = t(793574),
    f = t(688810),
    S = t(531260),
    A = t(404374),
    b = t(156312),
    j = t(216641),
    h = t(543767),
    E = t(874638),
    T = t(477421),
    N = t(234419),
    _ = t(163538),
    O = t(735164),
    R = t(796012),
    D = t(363476),
    L = t(659746),
    U = t(934581),
    C = t(778307),
    w = t(692440),
    M = t(72140),
    G = t(773669),
    V = t(351906),
    Y = t(287809),
    k = t(615405),
    B = t(295405),
    W = t(97352),
    q = t(166403),
    F = t(473145),
    H = t(975571),
    K = t(252424),
    $ = t(927578),
    J = t(580630),
    Z = t(902038),
    z = t(652215),
    X = t(26279),
    Q = t(788868),
    ee = t(818348),
    en = t(985018),
    et = t(843010);

function ei(e) {
    let { endDate: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", {
                className: et.bU,
            }),
            (0, i.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: et.b7,
                children: en.intl.format(en.t.IeaYqg, {
                    endDate: n,
                }),
            }),
            (0, i.jsx)("div", {
                className: et.bU,
            }),
        ],
    });
}

function el(e) {
    var n, t;
    let {
            premiumSubscriptionPlan: r,
            numGuildBoosts: s,
            setNumGuildBoosts: o,
            setForceDisableSubmitButton: y,
            premiumSubscription: x,
            onClickPremiumSubscriptionLink: g,
            existingAvailableSlots: P = [],
            priceOptions: j,
        } = e,
        { setInvoicePreview: E } = (0, b.P5)(),
        O = (0, _.A)(),
        R = r.interval,
        L = r.intervalCount,
        C = (0, u.bG)([W.A], () => W.A.getForSkuAndInterval((0, $.mH)(Q.pe.GUILD), R, L)),
        w = (0, u.bG)([Y.default], () => Y.default.getCurrentUser()),
        V = (0, S.A)({
            forceFetch: !1,
        });
    c()(null != C, "Missing guildBoostingSubscriptionPlan");
    let k = [
            {
                planId: C.id,
                quantity: 1,
            },
        ],
        B =
            null == x
                ? void 0
                : x.items.find((e) => e.planId === Q.gD.PREMIUM_MONTH_TIER_2 || e.planId === Q.gD.PREMIUM_YEAR_TIER_2);
    null != B && k.push(B);
    let X =
            null == x
                ? void 0
                : x.items.find((e) => e.planId === Q.gD.PREMIUM_MONTH_GUILD || e.planId === Q.gD.PREMIUM_YEAR_GUILD),
        { enabled: el } = Z.A.useExperiment({
            location: "32b64a_1",
        }),
        er = !el || null == O || !Q.uJ.has(O) || null == X,
        { analyticsLocations: ea } = (0, f.Ay)(),
        [es, ec] = (0, h.Kq)({
            subscriptionId: null == x ? void 0 : x.id,
            items: k,
            renewal: !0,
            paymentSourceId: null == x ? void 0 : x.paymentSourceId,
            currency: j.currency,
            preventFetch: er,
            analyticsLocations: ea,
            analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    l.useEffect(() => {
        E(es);
    }, [E, es]);
    let eo = !er && null == es && null == ec,
        eu = (null == (t = (0, N.V)()) || null == (n = t.subscription_trial) ? void 0 : n.sku_id) === Q.pe.TIER_2,
        ed = $.Ay.hasBoostDiscount(w),
        em = null == es ? void 0 : es.findInvoiceItemByPlanId(C.id),
        ep =
            null != em
                ? {
                      amount: em.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: j.currency,
                  }
                : $.Ay.getPrice(C.id, ed, !1, j),
        ey = s * ep.amount,
        ev = (0, u.bG)([q.A], () => q.A.inReverseTrial() && $.Ay.hasBoostDiscount(w) && null != x),
        ex =
            $.Ay.hasBoostDiscount(w) &&
            null != x &&
            $.Ay.isPremiumAtLeast($.Ay.getPremiumType(x.planId), Q.PremiumTypes.TIER_1)
                ? en.intl.format(en.t.hf6YOY, {
                      planName: $.Ay.getTierDisplayNameByPlanId(x.planId),
                  })
                : en.intl.format(eu ? en.t.ba1L74 : en.t.fkffDT, {
                      onPremiumSubscriptionClick: g,
                      discountPercentage: (0, K.l9)(G.default.locale, Q.oX / 100),
                      freeSubscriptionCount: Q.M4,
                  }),
        eg = P.filter((e) => (0, F.I5)(e)).length,
        eP = (0, $.J$)(j.paymentSourceId),
        { ipCountryCode: eI } = (0, T.A)(),
        ef = "HR" === eI && ep.currency === ee.Yr.EUR,
        eS = V.fractionalState === Q.xc.FP_SUB_PAUSED;
    return (
        y(eo),
        (0, i.jsxs)("div", {
            children: [
                eS &&
                    (0, i.jsx)(U.vi, {
                        fractionalPremiumInfo: V,
                    }),
                ev && null != x
                    ? (0, i.jsx)(ei, {
                          endDate: x.currentPeriodEnd,
                      })
                    : (0, i.jsx)("div", {
                          className: a()(et.hA, et.G3),
                          children: en.intl.string(en.t.jNY1FO),
                      }),
                P.length > 0
                    ? (0, i.jsxs)("div", {
                          className: et.Mv,
                          children: [
                              (0, i.jsx)(p._Jp, {
                                  className: et.T5,
                                  color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      en.intl.format(en.t.F8xlhr, {
                                          slotCount: P.length,
                                      }),
                                      eg > 0 && null != x
                                          ? (0, i.jsx)(m.m, {
                                                text: en.intl.formatToPlainString(en.t.SFpsCH, {
                                                    canceledCount: eg,
                                                    date: x.currentPeriodEnd,
                                                }),
                                                children: (0, i.jsx)(p.EpV, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: et.Y5,
                                                    color: d.A.unsafe_rawColors.YELLOW_300.css,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
                (0, i.jsxs)("div", {
                    className: et.mP,
                    children: [
                        (0, i.jsxs)("div", {
                            className: et.E6,
                            children: [
                                (0, i.jsx)(p.lw3, {
                                    value: s,
                                    onChange: (e) => o(e),
                                    className: et.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: et.$0,
                                    children: eP
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === Q.WT.YEAR
                                                  ? en.intl.string(en.t.YDpAzZ)
                                                  : n === Q.WT.MONTH && 1 === t
                                                    ? en.intl.string(en.t["6ZR3By"])
                                                    : null;
                                          })({
                                              intervalType: R,
                                              intervalCount: L,
                                          })
                                        : en.intl.string(en.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: a()(et.QK, {
                                [et.S]: eo,
                            }),
                            children: eo
                                ? (0, i.jsx)(p.y$y, {})
                                : eP
                                  ? (0, J.$g)(ep.amount, ep.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                            r = (0, J.$g)(n, t);
                                        return i === Q.WT.YEAR
                                            ? en.intl.formatToPlainString(en.t["8M04YJ"], {
                                                  price: r,
                                              })
                                            : i === Q.WT.MONTH && 1 === l
                                              ? en.intl.formatToPlainString(en.t.VStWCR, {
                                                    price: r,
                                                })
                                              : i === Q.WT.MONTH && l > 1
                                                ? en.intl.formatToPlainString(en.t.xJvAFU, {
                                                      price: r,
                                                  })
                                                : null;
                                    })({
                                        intervalType: R,
                                        intervalCount: L,
                                        amount: ep.amount,
                                        currency: ep.currency,
                                    }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: et.J3,
                }),
                (0, i.jsxs)("div", {
                    className: et.mP,
                    children: [
                        (0, i.jsx)("div", {
                            className: et.xp,
                            children: en.intl.string(en.t.RtA7nR),
                        }),
                        (0, i.jsx)("div", {
                            className: a()(et.__invalid_planSelectorSubtotalPrice, {
                                [et.S]: eo,
                            }),
                            children: eo
                                ? (0, i.jsx)(p.y$y, {})
                                : (0, i.jsx)(D.A, {
                                      price: ey,
                                      currency: ep.currency,
                                      intervalType: R,
                                      intervalCount: L,
                                      isPrepaidPaymentSource: eP,
                                  }),
                        }),
                    ],
                }),
                ef &&
                    (0, i.jsx)(v.A, {
                        message: en.intl.formatToPlainString(en.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, J.$g)(7.5345 * ey, ee.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(v.A, {
                    message: en.intl.format(en.t.Om31w8, {
                        documentationLink: H.A.getArticleURL(z.MVz.LOCALIZED_PRICING),
                    }),
                }),
                ev
                    ? (0, i.jsx)(M.G, {})
                    : (0, i.jsx)(M.A, {
                          text: ex,
                          color: A.k0.PREMIUM_TIER_2,
                      }),
            ],
        })
    );
}

function er(e) {
    let {
            premiumSubscription: n,
            premiumSubscriptionPlan: t,
            proratedInvoicePreview: l,
            renewalInvoicePreview: r,
            priceOptions: a,
        } = e,
        s = t.interval,
        o = t.intervalCount,
        d = (0, u.bG)([W.A], () => W.A.getForSkuAndInterval((0, $.mH)(Q.pe.GUILD), s, o));
    c()(null != d, "Missing guildBoostingSubscriptionPlan");
    let m = (e) => (0, E.Z)(l.invoiceItems).find((n) => Q.pW.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, "Missing guild boosting invoice item");
    let y = m((e) => e.amount < 0),
        v = null != y ? p.quantity - y.quantity : p.quantity,
        x = l.invoiceItems.filter((e) => (0, $.xq)(e.subscriptionPlanId)),
        g = x.reduce((e, n) => e + n.amount, 0),
        I = (0, h.sL)(p) * v,
        f = (0, J.$g)(I, l.currency),
        S = (0, J.CE)(f, s, o),
        A = (0, J.$g)(l.total, l.currency) + (l.currency !== ee.Yr.USD ? "*" : ""),
        b = l.total - I - g,
        j = p.discounts.map((e) => {
            var n, t;
            let i = e.amount / p.quantity;
            return (
                (n = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = i);
                            });
                    }
                    return e;
                })({}, e)),
                (t = t =
                    {
                        amount: i * v,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, i);
                          }
                          return t;
                      })(Object(t)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                      }),
                n
            );
        }),
        { subscriptionDiscount: T, entitlementDiscount: N } = {
            subscriptionDiscount: j.find((e) => e.type === P.iS.SUBSCRIPTION_PLAN),
            entitlementDiscount: j.find((e) => e.type === P.iS.ENTITLEMENT),
        },
        _ = (0, $.J$)(a.paymentSourceId),
        R = (0, u.bG)([q.A], () => q.A.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _
                ? null
                : R && null != n
                  ? (0, i.jsx)(ei, {
                        endDate: n.currentPeriodEnd,
                        className: et.jk,
                    })
                  : (0, i.jsx)(w.wP, {
                        proratedInvoice: l,
                        renewalInvoice: r,
                    }),
            (0, i.jsxs)(O.Yx, {
                children: [
                    (0, i.jsx)(O.Xd, {
                        children: en.intl.string(en.t.CWIwms),
                    }),
                    (0, i.jsx)(O.f0, {
                        label: en.intl.formatToPlainString(en.t.a3cAOg, {
                            numGuildSubscriptions: v,
                            planName: (0, $.Mn)(d.id, !1, _),
                        }),
                        value: _ ? f : S,
                        subscriptionDiscount: T,
                        entitlementDiscount: N,
                        originalAmount: p.subscriptionPlanPrice * v,
                        currency: l.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount,
                    }),
                    0 !== g
                        ? (0, i.jsx)(O.oR, {
                              label: (0, i.jsx)(w.sw, {
                                  label: en.intl.formatToPlainString(en.t.ZSVged, {
                                      planName: (0, $.RH)(x[0].subscriptionPlanId),
                                  }),
                                  tooltipText: en.intl.string(en.t.JmwQJM),
                              }),
                              value: (0, J.$g)(g, l.currency),
                          })
                        : null,
                    0 !== b
                        ? (0, i.jsx)(O.oR, {
                              label: (0, i.jsx)(w.sw, {
                                  label: en.intl.string(en.t["+as5ZZ"]),
                                  tooltipText: en.intl.string(en.t.JmwQJM),
                              }),
                              value: (0, J.$g)(b, l.currency),
                          })
                        : null,
                    (0, i.jsx)(O.pK, {}),
                    (0, i.jsx)(O.Sd, {
                        label: en.intl.format(l.taxInclusive ? (_ ? en.t.BqdxQt : en.t.XH4raN) : en.t.RUI48E, {}),
                        value: A,
                    }),
                    null != n
                        ? (0, i.jsx)(w.m0, {
                              premiumSubscription: n,
                              proratedInvoice: l,
                              renewalInvoice: r,
                              isUpdate: !0,
                              isPrepaidPaymentSource: _,
                              isTrial: R,
                          })
                        : (0, i.jsx)(w.m0, {
                              renewalInvoice: r,
                              priceOptions: a,
                              isPrepaidPaymentSource: _,
                          }),
                ],
            }),
        ],
    });
}

function ea(e) {
    var n;
    let t,
        r,
        {
            paymentSources: a,
            priceOptions: s,
            currentPremiumSubscription: c,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: v,
            newAdditionalPlans: P,
            onPaymentSourceChange: S,
            onPaymentSourceAdd: A,
            onPurchaseTermsChange: E,
            legalTermsNodeRef: T,
            hasLegalTermsFlash: N,
        } = e,
        { setInvoicePreview: _ } = (0, b.P5)(),
        O = s.paymentSourceId,
        R = (0, j.g)(a, O),
        D = (0, u.bG)([B.A], () => (null != d ? B.A.getPaymentSource(d) : null)),
        L = (0, u.bG)([V.A], () => V.A.hidePersonalInformation);
    t = null != c ? (0, $.Om)(c, P[0].quantity, P[0].planId) : P;
    let { analyticsLocations: U } = (0, f.Ay)(),
        [w] = (0, h.Kq)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: O,
            currency: s.currency,
            analyticsLocations: U,
            analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [M] = (0, h.Kq)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !0,
            paymentSourceId: O,
            currency: s.currency,
            analyticsLocations: U,
            analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_RENEWAL,
        });
    null != M &&
        (r = {
            amount: M.subtotal,
            currency: M.currency,
            tax: M.tax,
            taxInclusive: !1,
        });
    let G = o.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback);
    return (
        l.useEffect(() => {
            _(w);
        }, [_, w]),
        (0, i.jsxs)("div", {
            children: [
                null != w && null != M
                    ? (0, i.jsx)(er, {
                          premiumSubscription: c,
                          premiumSubscriptionPlan: v,
                          proratedInvoicePreview: w,
                          renewalInvoicePreview: M,
                          priceOptions: s,
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: et.LC,
                    children:
                        null != d
                            ? null != D
                                ? (0, i.jsx)(m.m, {
                                      asContainer: !0,
                                      text: en.intl.string(en.t.XiuuV9),
                                      children: (0, i.jsx)(x.A, {
                                          label: en.intl.string(en.t["mmDvV+"]),
                                          paymentSources: [D],
                                          selectedPaymentSourceId: D.id,
                                          hidePersonalInformation: L,
                                          disabled: !0,
                                      }),
                                  })
                                : (0, i.jsx)("div", {
                                      children: (0, i.jsx)(p.y$y, {}),
                                  })
                            : (0, i.jsx)(x.A, {
                                  label: en.intl.string(en.t["mmDvV+"]),
                                  paymentSources: Object.values(a),
                                  selectedPaymentSourceId: O,
                                  onChange: S,
                                  onPaymentSourceAdd: A,
                                  hidePersonalInformation: L,
                              }),
                }),
                (0, i.jsx)(C.A, {
                    isActive: N,
                    ref: T,
                    children:
                        null != r &&
                        (0, i.jsx)(g.A, {
                            onChange: E,
                            forceShow: !0,
                            finePrint: (0, i.jsx)(y.A, {
                                subscriptionPlan: v,
                                paymentSourceType: R,
                                proratedAmount: null != w ? w.total : void 0,
                                basePrice: r,
                                productLine: z.EZt.BOOST,
                            }),
                            showPricingLink:
                                (null != (n = null == w ? void 0 : w.currency) ? n : ee.Yr.USD) !== ee.Yr.USD,
                            showWithdrawalWaiver: G,
                            subscriptionPlan: v,
                        }),
                }),
            ],
        })
    );
}

function es(e) {
    var n;
    let t,
        {
            onClose: r,
            guild: a,
            guildBoostQuantity: s,
            isTransfer: c = !1,
            withAnimation: o = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: d = !1,
            fallbackGuildName: m,
            customCheckoutFlow: y,
        } = e,
        { theme: v } = (0, p.wRf)(),
        [x, g] = l.useState(R.V1.Scenes.ENTRY),
        [P, I] = l.useState(!1),
        f = null != (n = null == a ? void 0 : a.name) ? n : m;
    return (
        (t = c
            ? null == f
                ? en.intl.format(en.t.P52e1r, {})
                : en.intl.format(en.t["4UnIk9"], {
                      guildName: f,
                  })
            : d
              ? en.intl.format(en.t.gFaKd1, {
                    helpCenterLink: H.A.getArticleURL(z.MVz.FRACTIONAL_PREMIUM_ABOUT),
                })
              : null == f
                ? en.intl.format(en.t.SZ5ohR, {
                      guildSubscriptionQuantity: s,
                  })
                : en.intl.format(en.t.GxK3Mv, {
                      guildName: f,
                      guildSubscriptionQuantity: s,
                  })),
        (0, i.jsxs)("div", {
            className: et.RP,
            children: [
                o
                    ? (0, i.jsx)(R.V1, {
                          className: et.ud,
                          nextScene: x,
                          onScenePlay: (e) => {
                              if (!P)
                                  switch (e) {
                                      case R.V1.Scenes.ENTRY:
                                          return g(R.V1.Scenes.IDLE);
                                      case R.V1.Scenes.IDLE:
                                          return g(R.V1.Scenes.SUCCESS);
                                      case R.V1.Scenes.SUCCESS:
                                          return I(!0), g(R.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(L.Ay, {
                    className: et.E,
                    theme: v,
                    premiumType: Q.PremiumTypes.TIER_2,
                    type: ee.Nc.has(null != u ? u : ee.he.UNKNOWN)
                        ? L.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : L.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", {
                    className: et.xR,
                    children: t,
                }),
                (0, i.jsx)(p.Button, {
                    variant: "primary",
                    text: y === X.uH.APPLE_PAYMENT_LINK ? en.intl.string(en.t.qXV2XU) : en.intl.string(en.t["/iTxgz"]),
                    onClick: r,
                }),
            ],
        })
    );
}
