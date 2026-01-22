n.d(t, {
    As: () => ef,
    WE: () => eh,
    Xp: () => e_,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(997101),
    u = n(311907),
    d = n(827734),
    f = n(990078),
    p = n(397927),
    _ = n(821891),
    h = n(726656),
    m = n(637141),
    g = n(953689),
    E = n(155718),
    b = n(793574),
    y = n(688810),
    O = n(531260),
    A = n(404374),
    v = n(156312),
    S = n(216641),
    I = n(543767),
    T = n(874638),
    C = n(477421),
    N = n(234419),
    R = n(163538),
    w = n(735164),
    P = n(796012),
    D = n(363476),
    x = n(659746),
    L = n(156962),
    j = n(778307),
    M = n(692440),
    k = n(72140),
    U = n(773669),
    G = n(351906),
    V = n(287809),
    F = n(615405),
    B = n(295405),
    H = n(97352),
    Y = n(166403),
    W = n(473145),
    K = n(975571),
    z = n(252424),
    q = n(927578),
    X = n(580630),
    Z = n(902038),
    Q = n(652215),
    $ = n(26279),
    J = n(788868),
    ee = n(818348),
    et = n(985018),
    en = n(843010);

function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}

function ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eo = 1,
    el = 30;

function ec(e) {
    let { amount: t, currency: n, intervalType: r, intervalCount: i = 1 } = e,
        a = (0, X.$g)(t, n);
    return r === J.WT.YEAR
        ? et.intl.formatToPlainString(et.t["8M04YJ"], {
              price: a,
          })
        : r === J.WT.MONTH && 1 === i
          ? et.intl.formatToPlainString(et.t.VStWCR, {
                price: a,
            })
          : r === J.WT.MONTH && i > 1
            ? et.intl.formatToPlainString(et.t.xJvAFU, {
                  price: a,
              })
            : null;
}

function eu(e) {
    let { intervalType: t, intervalCount: n = 1 } = e;
    return t === J.WT.YEAR
        ? et.intl.string(et.t.YDpAzZ)
        : t === J.WT.MONTH && 1 === n
          ? et.intl.string(et.t["6ZR3By"])
          : null;
}

function ed(e) {
    let { endDate: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)("div", {
                className: en.bU,
            }),
            (0, r.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: en.b7,
                children: et.intl.format(et.t.IeaYqg, {
                    endDate: t,
                }),
            }),
            (0, r.jsx)("div", {
                className: en.bU,
            }),
        ],
    });
}

function ef(e) {
    var t, n;
    let {
            premiumSubscriptionPlan: a,
            numGuildBoosts: o,
            setNumGuildBoosts: c,
            setForceDisableSubmitButton: _,
            premiumSubscription: m,
            onClickPremiumSubscriptionLink: g,
            existingAvailableSlots: E = [],
            priceOptions: S,
        } = e,
        { setInvoicePreview: T } = (0, v.P5)(),
        w = (0, R.A)(),
        P = a.interval,
        x = a.intervalCount,
        j = (0, u.bG)([H.A], () => H.A.getForSkuAndInterval((0, q.mH)(J.pe.GUILD), P, x)),
        M = (0, u.bG)([V.default], () => V.default.getCurrentUser()),
        G = (0, O.A)({
            forceFetch: !1,
        });
    l()(null != j, "Missing guildBoostingSubscriptionPlan");
    let F = [
            {
                planId: j.id,
                quantity: 1,
            },
        ],
        B =
            null == m
                ? void 0
                : m.items.find((e) => e.planId === J.gD.PREMIUM_MONTH_TIER_2 || e.planId === J.gD.PREMIUM_YEAR_TIER_2);
    null != B && F.push(B);
    let $ =
            null == m
                ? void 0
                : m.items.find((e) => e.planId === J.gD.PREMIUM_MONTH_GUILD || e.planId === J.gD.PREMIUM_YEAR_GUILD),
        { enabled: er } = Z.A.useExperiment({
            location: "32b64a_1",
        }),
        ei = !er || null == w || !J.uJ.has(w) || null == $,
        { analyticsLocations: ea } = (0, y.Ay)(),
        [es, ef] = (0, I.Kq)({
            subscriptionId: null == m ? void 0 : m.id,
            items: F,
            renewal: !0,
            paymentSourceId: null == m ? void 0 : m.paymentSourceId,
            currency: S.currency,
            preventFetch: ei,
            analyticsLocations: ea,
            analyticsLocation: b.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    i.useEffect(() => {
        T(es);
    }, [T, es]);
    let ep = !ei && null == es && null == ef,
        e_ = (null == (n = (0, N.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === J.pe.TIER_2,
        eh = q.Ay.hasBoostDiscount(M),
        em = null == es ? void 0 : es.findInvoiceItemByPlanId(j.id),
        eg =
            null != em
                ? {
                      amount: em.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: S.currency,
                  }
                : q.Ay.getPrice(j.id, eh, !1, S),
        eE = o * eg.amount,
        eb = (0, u.bG)([Y.A], () => Y.A.inReverseTrial() && q.Ay.hasBoostDiscount(M) && null != m),
        ey =
            q.Ay.hasBoostDiscount(M) &&
            null != m &&
            q.Ay.isPremiumAtLeast(q.Ay.getPremiumType(m.planId), J.PremiumTypes.TIER_1)
                ? et.intl.format(et.t.hf6YOY, {
                      planName: q.Ay.getTierDisplayNameByPlanId(m.planId),
                  })
                : et.intl.format(e_ ? et.t.ba1L74 : et.t.fkffDT, {
                      onPremiumSubscriptionClick: g,
                      discountPercentage: (0, z.l9)(U.default.locale, J.oX / 100),
                      freeSubscriptionCount: J.M4,
                  }),
        eO = E.filter((e) => (0, W.I5)(e)).length,
        eA = (0, q.J$)(S.paymentSourceId),
        { ipCountryCode: ev } = (0, C.A)(),
        eS = "HR" === ev && eg.currency === ee.Yr.EUR,
        eI = G.fractionalState === J.xc.FP_SUB_PAUSED;
    return (
        _(ep),
        (0, r.jsxs)("div", {
            children: [
                eI &&
                    (0, r.jsx)(L.v, {
                        fractionalPremiumInfo: G,
                    }),
                eb && null != m
                    ? (0, r.jsx)(ed, {
                          endDate: m.currentPeriodEnd,
                      })
                    : (0, r.jsx)("div", {
                          className: s()(en.hA, en.G3),
                          children: et.intl.string(et.t.jNY1FO),
                      }),
                E.length > 0
                    ? (0, r.jsxs)("div", {
                          className: en.Mv,
                          children: [
                              (0, r.jsx)(p._Jp, {
                                  className: en.T5,
                                  color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      et.intl.format(et.t.F8xlhr, {
                                          slotCount: E.length,
                                      }),
                                      eO > 0 && null != m
                                          ? (0, r.jsx)(f.m, {
                                                text: et.intl.formatToPlainString(et.t.SFpsCH, {
                                                    canceledCount: eO,
                                                    date: m.currentPeriodEnd,
                                                }),
                                                children: (0, r.jsx)(p.EpV, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: en.Y5,
                                                    color: d.A.unsafe_rawColors.YELLOW_300.css,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: en.mP,
                    children: [
                        (0, r.jsxs)("div", {
                            className: en.E6,
                            children: [
                                (0, r.jsx)(p.lw3, {
                                    value: o,
                                    onChange: (e) => c(e),
                                    className: en.__invalid_planSelector,
                                    minValue: eo,
                                    maxValue: el,
                                }),
                                (0, r.jsx)("div", {
                                    className: en.$0,
                                    children: eA
                                        ? eu({
                                              intervalType: P,
                                              intervalCount: x,
                                          })
                                        : et.intl.string(et.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: s()(en.QK, {
                                [en.S]: ep,
                            }),
                            children: ep
                                ? (0, r.jsx)(p.y$y, {})
                                : eA
                                  ? (0, X.$g)(eg.amount, eg.currency)
                                  : ec({
                                        intervalType: P,
                                        intervalCount: x,
                                        amount: eg.amount,
                                        currency: eg.currency,
                                    }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: en.J3,
                }),
                (0, r.jsxs)("div", {
                    className: en.mP,
                    children: [
                        (0, r.jsx)("div", {
                            className: en.xp,
                            children: et.intl.string(et.t.RtA7nR),
                        }),
                        (0, r.jsx)("div", {
                            className: s()(en.__invalid_planSelectorSubtotalPrice, {
                                [en.S]: ep,
                            }),
                            children: ep
                                ? (0, r.jsx)(p.y$y, {})
                                : (0, r.jsx)(D.A, {
                                      price: eE,
                                      currency: eg.currency,
                                      intervalType: P,
                                      intervalCount: x,
                                      isPrepaidPaymentSource: eA,
                                  }),
                        }),
                    ],
                }),
                eS &&
                    (0, r.jsx)(h.A, {
                        message: et.intl.formatToPlainString(et.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, X.$g)(7.5345 * eE, ee.Yr.HRK),
                        }),
                    }),
                (0, r.jsx)(h.A, {
                    message: et.intl.format(et.t.Om31w8, {
                        documentationLink: K.A.getArticleURL(Q.MVz.LOCALIZED_PRICING),
                    }),
                }),
                eb
                    ? (0, r.jsx)(k.G, {})
                    : (0, r.jsx)(k.A, {
                          text: ey,
                          color: A.k0.PREMIUM_TIER_2,
                      }),
            ],
        })
    );
}

function ep(e) {
    let {
            premiumSubscription: t,
            premiumSubscriptionPlan: n,
            proratedInvoicePreview: i,
            renewalInvoicePreview: a,
            priceOptions: s,
        } = e,
        o = n.interval,
        c = n.intervalCount,
        d = (0, u.bG)([H.A], () => H.A.getForSkuAndInterval((0, q.mH)(J.pe.GUILD), o, c));
    l()(null != d, "Missing guildBoostingSubscriptionPlan");
    let f = (e) => (0, T.Z)(i.invoiceItems).find((t) => J.pW.has(t.subscriptionPlanId) && e(t)),
        p = f((e) => e.amount >= 0);
    l()(null != p, "Missing guild boosting invoice item");
    let _ = f((e) => e.amount < 0),
        h = null != _ ? p.quantity - _.quantity : p.quantity,
        m = i.invoiceItems.filter((e) => (0, q.xq)(e.subscriptionPlanId)),
        g = m.reduce((e, t) => e + t.amount, 0),
        b = (0, I.sL)(p) * h,
        y = (0, X.$g)(b, i.currency),
        O = (0, X.CE)(y, o, c),
        A = (0, X.$g)(i.total, i.currency) + (i.currency !== ee.Yr.USD ? "*" : ""),
        v = i.total - b - g,
        S = p.discounts.map((e) => {
            let t = e.amount / p.quantity;
            return es(ei({}, e), {
                amount: t * h,
            });
        }),
        { subscriptionDiscount: C, entitlementDiscount: N } = {
            subscriptionDiscount: S.find((e) => e.type === E.iS.SUBSCRIPTION_PLAN),
            entitlementDiscount: S.find((e) => e.type === E.iS.ENTITLEMENT),
        },
        R = (0, q.J$)(s.paymentSourceId),
        P = (0, u.bG)([Y.A], () => Y.A.inReverseTrial());
    return (0, r.jsxs)(r.Fragment, {
        children: [
            R
                ? null
                : P && null != t
                  ? (0, r.jsx)(ed, {
                        endDate: t.currentPeriodEnd,
                        className: en.jk,
                    })
                  : (0, r.jsx)(M.wP, {
                        proratedInvoice: i,
                        renewalInvoice: a,
                    }),
            (0, r.jsxs)(w.Yx, {
                children: [
                    (0, r.jsx)(w.Xd, {
                        children: et.intl.string(et.t.CWIwms),
                    }),
                    (0, r.jsx)(w.f0, {
                        label: et.intl.formatToPlainString(et.t.a3cAOg, {
                            numGuildSubscriptions: h,
                            planName: (0, q.Mn)(d.id, !1, R),
                        }),
                        value: R ? y : O,
                        subscriptionDiscount: C,
                        entitlementDiscount: N,
                        originalAmount: p.subscriptionPlanPrice * h,
                        currency: i.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount,
                    }),
                    0 !== g
                        ? (0, r.jsx)(w.oR, {
                              label: (0, r.jsx)(M.sw, {
                                  label: et.intl.formatToPlainString(et.t.ZSVged, {
                                      planName: (0, q.RH)(m[0].subscriptionPlanId),
                                  }),
                                  tooltipText: et.intl.string(et.t.JmwQJM),
                              }),
                              value: (0, X.$g)(g, i.currency),
                          })
                        : null,
                    0 !== v
                        ? (0, r.jsx)(w.oR, {
                              label: (0, r.jsx)(M.sw, {
                                  label: et.intl.string(et.t["+as5ZZ"]),
                                  tooltipText: et.intl.string(et.t.JmwQJM),
                              }),
                              value: (0, X.$g)(v, i.currency),
                          })
                        : null,
                    (0, r.jsx)(w.pK, {}),
                    (0, r.jsx)(w.Sd, {
                        label: et.intl.format(i.taxInclusive ? (R ? et.t.BqdxQt : et.t.XH4raN) : et.t.RUI48E, {}),
                        value: A,
                    }),
                    null != t
                        ? (0, r.jsx)(M.m0, {
                              premiumSubscription: t,
                              proratedInvoice: i,
                              renewalInvoice: a,
                              isUpdate: !0,
                              isPrepaidPaymentSource: R,
                              isTrial: P,
                          })
                        : (0, r.jsx)(M.m0, {
                              renewalInvoice: a,
                              priceOptions: s,
                              isPrepaidPaymentSource: R,
                          }),
                ],
            }),
        ],
    });
}

function e_(e) {
    var t;
    let n,
        a,
        {
            paymentSources: s,
            priceOptions: o,
            currentPremiumSubscription: l,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: h,
            newAdditionalPlans: E,
            onPaymentSourceChange: O,
            onPaymentSourceAdd: A,
            onPurchaseTermsChange: T,
            legalTermsNodeRef: C,
            hasLegalTermsFlash: N,
        } = e,
        { setInvoicePreview: R } = (0, v.P5)(),
        w = o.paymentSourceId,
        P = (0, S.g)(s, w),
        D = (0, u.bG)([B.A], () => (null != d ? B.A.getPaymentSource(d) : null)),
        x = (0, u.bG)([G.A], () => G.A.hidePersonalInformation);
    n = null != l ? (0, q.Om)(l, E[0].quantity, E[0].planId) : E;
    let { analyticsLocations: L } = (0, y.Ay)(),
        [M] = (0, I.Kq)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: w,
            currency: o.currency,
            analyticsLocations: L,
            analyticsLocation: b.A.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [k] = (0, I.Kq)({
            subscriptionId: null == l ? void 0 : l.id,
            items: n,
            renewal: !0,
            paymentSourceId: w,
            currency: o.currency,
            analyticsLocations: L,
            analyticsLocation: b.A.GUILD_BOOSTING_REVIEW_RENEWAL,
        }),
        U = k;
    null != U &&
        (a = {
            amount: U.subtotal,
            currency: U.currency,
            tax: U.tax,
            taxInclusive: !1,
        });
    let V = c.M.EEA_COUNTRIES.has(F.A.ipCountryCodeWithFallback);
    return (
        i.useEffect(() => {
            R(M);
        }, [R, M]),
        (0, r.jsxs)("div", {
            children: [
                null != M && null != k
                    ? (0, r.jsx)(ep, {
                          premiumSubscription: l,
                          premiumSubscriptionPlan: h,
                          proratedInvoicePreview: M,
                          renewalInvoicePreview: k,
                          priceOptions: o,
                      })
                    : null,
                (0, r.jsx)("div", {
                    className: en.LC,
                    children:
                        null != d
                            ? null != D
                                ? (0, r.jsx)(f.m, {
                                      asContainer: !0,
                                      text: et.intl.string(et.t.XiuuV9),
                                      children: (0, r.jsx)(m.Ay, {
                                          label: et.intl.string(et.t["mmDvV+"]),
                                          paymentSources: [D],
                                          selectedPaymentSourceId: D.id,
                                          hidePersonalInformation: x,
                                          disabled: !0,
                                      }),
                                  })
                                : (0, r.jsx)("div", {
                                      children: (0, r.jsx)(p.y$y, {}),
                                  })
                            : (0, r.jsx)(m.Ay, {
                                  label: et.intl.string(et.t["mmDvV+"]),
                                  paymentSources: Object.values(s),
                                  selectedPaymentSourceId: w,
                                  onChange: O,
                                  onPaymentSourceAdd: A,
                                  hidePersonalInformation: x,
                              }),
                }),
                (0, r.jsx)(j.A, {
                    isActive: N,
                    ref: C,
                    children:
                        null != a &&
                        (0, r.jsx)(g.A, {
                            onChange: T,
                            forceShow: !0,
                            finePrint: (0, r.jsx)(_.A, {
                                subscriptionPlan: h,
                                paymentSourceType: P,
                                proratedAmount: null != M ? M.total : void 0,
                                basePrice: a,
                                productLine: Q.EZt.BOOST,
                            }),
                            showPricingLink:
                                (null != (t = null == M ? void 0 : M.currency) ? t : ee.Yr.USD) !== ee.Yr.USD,
                            showWithdrawalWaiver: V,
                            subscriptionPlan: h,
                        }),
                }),
            ],
        })
    );
}

function eh(e) {
    var t;
    let n,
        {
            onClose: a,
            guild: s,
            guildBoostQuantity: o,
            isTransfer: l = !1,
            withAnimation: c = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: d = !1,
            fallbackGuildName: f,
            customCheckoutFlow: _,
        } = e,
        { theme: h } = (0, p.wRf)(),
        [m, g] = i.useState(P.V1.Scenes.ENTRY),
        [E, b] = i.useState(!1),
        y = null != (t = null == s ? void 0 : s.name) ? t : f;
    return (
        (n = l
            ? null == y
                ? et.intl.format(et.t.P52e1r, {})
                : et.intl.format(et.t["4UnIk9"], {
                      guildName: y,
                  })
            : d
              ? et.intl.format(et.t.gFaKd1, {
                    helpCenterLink: K.A.getArticleURL(Q.MVz.FRACTIONAL_PREMIUM_ABOUT),
                })
              : null == y
                ? et.intl.format(et.t.SZ5ohR, {
                      guildSubscriptionQuantity: o,
                  })
                : et.intl.format(et.t.GxK3Mv, {
                      guildName: y,
                      guildSubscriptionQuantity: o,
                  })),
        (0, r.jsxs)("div", {
            className: en.RP,
            children: [
                c
                    ? (0, r.jsx)(P.V1, {
                          className: en.ud,
                          nextScene: m,
                          onScenePlay: (e) => {
                              if (!E)
                                  switch (e) {
                                      case P.V1.Scenes.ENTRY:
                                          return g(P.V1.Scenes.IDLE);
                                      case P.V1.Scenes.IDLE:
                                          return g(P.V1.Scenes.SUCCESS);
                                      case P.V1.Scenes.SUCCESS:
                                          return b(!0), g(P.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, r.jsx)(x.Ay, {
                    className: en.E,
                    theme: h,
                    premiumType: J.PremiumTypes.TIER_2,
                    type: ee.Nc.has(null != u ? u : ee.he.UNKNOWN)
                        ? x.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : x.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, r.jsx)("div", {
                    className: en.xR,
                    children: n,
                }),
                (0, r.jsx)(p.Button, {
                    variant: "primary",
                    text: _ === $.uH.APPLE_PAYMENT_LINK ? et.intl.string(et.t.qXV2XU) : et.intl.string(et.t["/iTxgz"]),
                    onClick: a,
                }),
            ],
        })
    );
}
