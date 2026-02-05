t.d(n, { As: () => el, WE: () => es, Xp: () => ea }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(284009),
    c = t.n(s),
    u = t(997101),
    o = t(311907),
    d = t(827734),
    m = t(990078),
    p = t(397927),
    x = t(821891),
    y = t(726656),
    I = t(637141),
    A = t(953689),
    g = t(155718),
    S = t(793574),
    P = t(688810),
    v = t(531260),
    f = t(404374),
    h = t(156312),
    j = t(216641),
    b = t(543767),
    E = t(874638),
    T = t(477421),
    N = t(234419),
    _ = t(163538),
    R = t(735164),
    L = t(796012),
    D = t(363476),
    U = t(659746),
    C = t(934581),
    M = t(778307),
    O = t(692440),
    w = t(72140),
    G = t(773669),
    V = t(351906),
    Y = t(287809),
    B = t(615405),
    k = t(295405),
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
            (0, i.jsx)("div", { className: et.bU }),
            (0, i.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: et.b7,
                children: en.intl.format(en.t.IeaYqg, { endDate: n }),
            }),
            (0, i.jsx)("div", { className: et.bU }),
        ],
    });
}
function el(e) {
    let {
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: s,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: x,
            existingAvailableSlots: I = [],
            priceOptions: A,
        } = e,
        { setInvoicePreview: g } = (0, h.P5)(),
        j = (0, _.A)(),
        E = n.interval,
        R = n.intervalCount,
        L = (0, o.bG)([W.A], () => W.A.getForSkuAndInterval((0, $.mH)(Q.pe.GUILD), E, R)),
        U = (0, o.bG)([Y.default], () => Y.default.getCurrentUser()),
        M = (0, v.A)({ forceFetch: !1 });
    c()(null != L, "Missing guildBoostingSubscriptionPlan");
    let O = [{ planId: L.id, quantity: 1 }],
        V = u?.items.find((e) => e.planId === Q.gD.PREMIUM_MONTH_TIER_2 || e.planId === Q.gD.PREMIUM_YEAR_TIER_2);
    null != V && O.push(V);
    let B = u?.items.find((e) => e.planId === Q.gD.PREMIUM_MONTH_GUILD || e.planId === Q.gD.PREMIUM_YEAR_GUILD),
        { enabled: k } = Z.A.useExperiment({ location: "32b64a_1" }),
        X = !k || null == j || !Q.uJ.has(j) || null == B,
        { analyticsLocations: el } = (0, P.Ay)(),
        [er, ea] = (0, b.Kq)({
            subscriptionId: u?.id,
            items: O,
            renewal: !0,
            paymentSourceId: u?.paymentSourceId,
            currency: A.currency,
            preventFetch: X,
            analyticsLocations: el,
            analyticsLocation: S.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    l.useEffect(() => {
        g(er);
    }, [g, er]);
    let es = !X && null == er && null == ea,
        ec = (0, N.V)()?.subscription_trial?.sku_id === Q.pe.TIER_2,
        eu = $.Ay.hasBoostDiscount(U),
        eo = er?.findInvoiceItemByPlanId(L.id),
        ed =
            null != eo
                ? { amount: eo.amount, tax: 0, taxInclusive: !0, currency: A.currency }
                : $.Ay.getPrice(L.id, eu, !1, A),
        em = t * ed.amount,
        ep = (0, o.bG)([q.A], () => q.A.inReverseTrial() && $.Ay.hasBoostDiscount(U) && null != u),
        ex =
            $.Ay.hasBoostDiscount(U) &&
            null != u &&
            $.Ay.isPremiumAtLeast($.Ay.getPremiumType(u.planId), Q.PremiumTypes.TIER_1)
                ? en.intl.format(en.t.hf6YOY, { planName: $.Ay.getTierDisplayNameByPlanId(u.planId) })
                : en.intl.format(ec ? en.t.ba1L74 : en.t.fkffDT, {
                      onPremiumSubscriptionClick: x,
                      discountPercentage: (0, K.l9)(G.default.locale, Q.oX / 100),
                      freeSubscriptionCount: Q.M4,
                  }),
        ey = I.filter((e) => (0, F.I5)(e)).length,
        eI = (0, $.J$)(A.paymentSourceId),
        { ipCountryCode: eA } = (0, T.A)(),
        eg = "HR" === eA && ed.currency === ee.Yr.EUR,
        eS = M.fractionalState === Q.xc.FP_SUB_PAUSED;
    return (
        s(es),
        (0, i.jsxs)("div", {
            children: [
                eS && (0, i.jsx)(C.vi, { fractionalPremiumInfo: M }),
                ep && null != u
                    ? (0, i.jsx)(ei, { endDate: u.currentPeriodEnd })
                    : (0, i.jsx)("div", { className: a()(et.hA, et.G3), children: en.intl.string(en.t.jNY1FO) }),
                I.length > 0
                    ? (0, i.jsxs)("div", {
                          className: et.Mv,
                          children: [
                              (0, i.jsx)(p._Jp, { className: et.T5, color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      en.intl.format(en.t.F8xlhr, { slotCount: I.length }),
                                      ey > 0 && null != u
                                          ? (0, i.jsx)(m.m, {
                                                text: en.intl.formatToPlainString(en.t.SFpsCH, {
                                                    canceledCount: ey,
                                                    date: u.currentPeriodEnd,
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
                                    value: t,
                                    onChange: (e) => r(e),
                                    className: et.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: et.$0,
                                    children: eI
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: t = 1 } = e;
                                              return n === Q.WT.YEAR
                                                  ? en.intl.string(en.t.YDpAzZ)
                                                  : n === Q.WT.MONTH && 1 === t
                                                    ? en.intl.string(en.t["6ZR3By"])
                                                    : null;
                                          })({ intervalType: E, intervalCount: R })
                                        : en.intl.string(en.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: a()(et.QK, { [et.S]: es }),
                            children: es
                                ? (0, i.jsx)(p.y$y, {})
                                : eI
                                  ? (0, J.$g)(ed.amount, ed.currency)
                                  : (function (e) {
                                        let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                            r = (0, J.$g)(n, t);
                                        return i === Q.WT.YEAR
                                            ? en.intl.formatToPlainString(en.t["8M04YJ"], { price: r })
                                            : i === Q.WT.MONTH && 1 === l
                                              ? en.intl.formatToPlainString(en.t.VStWCR, { price: r })
                                              : i === Q.WT.MONTH && l > 1
                                                ? en.intl.formatToPlainString(en.t.xJvAFU, { price: r })
                                                : null;
                                    })({ intervalType: E, intervalCount: R, amount: ed.amount, currency: ed.currency }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: et.J3 }),
                (0, i.jsxs)("div", {
                    className: et.mP,
                    children: [
                        (0, i.jsx)("div", { className: et.xp, children: en.intl.string(en.t.RtA7nR) }),
                        (0, i.jsx)("div", {
                            className: a()(et.__invalid_planSelectorSubtotalPrice, { [et.S]: es }),
                            children: es
                                ? (0, i.jsx)(p.y$y, {})
                                : (0, i.jsx)(D.A, {
                                      price: em,
                                      currency: ed.currency,
                                      intervalType: E,
                                      intervalCount: R,
                                      isPrepaidPaymentSource: eI,
                                  }),
                        }),
                    ],
                }),
                eg &&
                    (0, i.jsx)(y.A, {
                        message: en.intl.formatToPlainString(en.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, J.$g)(7.5345 * em, ee.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(y.A, {
                    message: en.intl.format(en.t.Om31w8, {
                        documentationLink: H.A.getArticleURL(z.MVz.LOCALIZED_PRICING),
                    }),
                }),
                ep ? (0, i.jsx)(w.G, {}) : (0, i.jsx)(w.A, { text: ex, color: f.k0.PREMIUM_TIER_2 }),
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
        u = t.intervalCount,
        d = (0, o.bG)([W.A], () => W.A.getForSkuAndInterval((0, $.mH)(Q.pe.GUILD), s, u));
    c()(null != d, "Missing guildBoostingSubscriptionPlan");
    let m = (e) => (0, E.Z)(l.invoiceItems).find((n) => Q.pW.has(n.subscriptionPlanId) && e(n)),
        p = m((e) => e.amount >= 0);
    c()(null != p, "Missing guild boosting invoice item");
    let x = m((e) => e.amount < 0),
        y = null != x ? p.quantity - x.quantity : p.quantity,
        I = l.invoiceItems.filter((e) => (0, $.xq)(e.subscriptionPlanId)),
        A = I.reduce((e, n) => e + n.amount, 0),
        S = (0, b.sL)(p) * y,
        P = (0, J.$g)(S, l.currency),
        v = (0, J.CE)(P, s, u),
        f = (0, J.$g)(l.total, l.currency) + (l.currency !== ee.Yr.USD ? "*" : ""),
        h = l.total - S - A,
        j = p.discounts.map((e) => {
            let n = e.amount / p.quantity;
            return { ...e, amount: n * y };
        }),
        { subscriptionDiscount: T, entitlementDiscount: N } = {
            subscriptionDiscount: j.find((e) => e.type === g.iS.SUBSCRIPTION_PLAN),
            entitlementDiscount: j.find((e) => e.type === g.iS.ENTITLEMENT),
        },
        _ = (0, $.J$)(a.paymentSourceId),
        L = (0, o.bG)([q.A], () => q.A.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _
                ? null
                : L && null != n
                  ? (0, i.jsx)(ei, { endDate: n.currentPeriodEnd, className: et.jk })
                  : (0, i.jsx)(O.wP, { proratedInvoice: l, renewalInvoice: r }),
            (0, i.jsxs)(R.Yx, {
                children: [
                    (0, i.jsx)(R.Xd, { children: en.intl.string(en.t.CWIwms) }),
                    (0, i.jsx)(R.f0, {
                        label: en.intl.formatToPlainString(en.t.a3cAOg, {
                            numGuildSubscriptions: y,
                            planName: (0, $.Mn)(d.id, !1, _),
                        }),
                        value: _ ? P : v,
                        subscriptionDiscount: T,
                        entitlementDiscount: N,
                        originalAmount: p.subscriptionPlanPrice * y,
                        currency: l.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount,
                    }),
                    0 !== A
                        ? (0, i.jsx)(R.oR, {
                              label: (0, i.jsx)(O.sw, {
                                  label: en.intl.formatToPlainString(en.t.ZSVged, {
                                      planName: (0, $.RH)(I[0].subscriptionPlanId),
                                  }),
                                  tooltipText: en.intl.string(en.t.JmwQJM),
                              }),
                              value: (0, J.$g)(A, l.currency),
                          })
                        : null,
                    0 !== h
                        ? (0, i.jsx)(R.oR, {
                              label: (0, i.jsx)(O.sw, {
                                  label: en.intl.string(en.t["+as5ZZ"]),
                                  tooltipText: en.intl.string(en.t.JmwQJM),
                              }),
                              value: (0, J.$g)(h, l.currency),
                          })
                        : null,
                    (0, i.jsx)(R.pK, {}),
                    (0, i.jsx)(R.Sd, {
                        label: en.intl.format(l.taxInclusive ? (_ ? en.t.BqdxQt : en.t.XH4raN) : en.t.RUI48E, {}),
                        value: f,
                    }),
                    null != n
                        ? (0, i.jsx)(O.m0, {
                              premiumSubscription: n,
                              proratedInvoice: l,
                              renewalInvoice: r,
                              isUpdate: !0,
                              isPrepaidPaymentSource: _,
                              isTrial: L,
                          })
                        : (0, i.jsx)(O.m0, { renewalInvoice: r, priceOptions: a, isPrepaidPaymentSource: _ }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let n,
        t,
        {
            paymentSources: r,
            priceOptions: a,
            currentPremiumSubscription: s,
            premiumSubscriptionPaymentSourceId: c,
            premiumSubscriptionPlan: d,
            newAdditionalPlans: y,
            onPaymentSourceChange: g,
            onPaymentSourceAdd: v,
            onPurchaseTermsChange: f,
            legalTermsNodeRef: E,
            hasLegalTermsFlash: T,
        } = e,
        { setInvoicePreview: N } = (0, h.P5)(),
        _ = a.paymentSourceId,
        R = (0, j.g)(r, _),
        L = (0, o.bG)([k.A], () => (null != c ? k.A.getPaymentSource(c) : null)),
        D = (0, o.bG)([V.A], () => V.A.hidePersonalInformation);
    n = null != s ? (0, $.Om)(s, y[0].quantity, y[0].planId) : y;
    let { analyticsLocations: U } = (0, P.Ay)(),
        [C] = (0, b.Kq)({
            subscriptionId: s?.id,
            items: n,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: _,
            currency: a.currency,
            analyticsLocations: U,
            analyticsLocation: S.A.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [O] = (0, b.Kq)({
            subscriptionId: s?.id,
            items: n,
            renewal: !0,
            paymentSourceId: _,
            currency: a.currency,
            analyticsLocations: U,
            analyticsLocation: S.A.GUILD_BOOSTING_REVIEW_RENEWAL,
        });
    null != O && (t = { amount: O.subtotal, currency: O.currency, tax: O.tax, taxInclusive: !1 });
    let w = u.M.EEA_COUNTRIES.has(B.A.ipCountryCodeWithFallback);
    return (
        l.useEffect(() => {
            N(C);
        }, [N, C]),
        (0, i.jsxs)("div", {
            children: [
                null != C && null != O
                    ? (0, i.jsx)(er, {
                          premiumSubscription: s,
                          premiumSubscriptionPlan: d,
                          proratedInvoicePreview: C,
                          renewalInvoicePreview: O,
                          priceOptions: a,
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: et.LC,
                    children:
                        null != c
                            ? null != L
                                ? (0, i.jsx)(m.m, {
                                      asContainer: !0,
                                      text: en.intl.string(en.t.XiuuV9),
                                      children: (0, i.jsx)(I.A, {
                                          label: en.intl.string(en.t["mmDvV+"]),
                                          paymentSources: [L],
                                          selectedPaymentSourceId: L.id,
                                          hidePersonalInformation: D,
                                          disabled: !0,
                                      }),
                                  })
                                : (0, i.jsx)("div", { children: (0, i.jsx)(p.y$y, {}) })
                            : (0, i.jsx)(I.A, {
                                  label: en.intl.string(en.t["mmDvV+"]),
                                  paymentSources: Object.values(r),
                                  selectedPaymentSourceId: _,
                                  onChange: g,
                                  onPaymentSourceAdd: v,
                                  hidePersonalInformation: D,
                              }),
                }),
                (0, i.jsx)(M.A, {
                    isActive: T,
                    ref: E,
                    children:
                        null != t &&
                        (0, i.jsx)(A.A, {
                            onChange: f,
                            forceShow: !0,
                            finePrint: (0, i.jsx)(x.A, {
                                subscriptionPlan: d,
                                paymentSourceType: R,
                                proratedAmount: null != C ? C.total : void 0,
                                basePrice: t,
                                productLine: z.EZt.BOOST,
                            }),
                            showPricingLink: (C?.currency ?? ee.Yr.USD) !== ee.Yr.USD,
                            showWithdrawalWaiver: w,
                            subscriptionPlan: d,
                        }),
                }),
            ],
        })
    );
}
function es(e) {
    let n,
        {
            onClose: t,
            guild: r,
            guildBoostQuantity: a,
            isTransfer: s = !1,
            withAnimation: c = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: o = !1,
            fallbackGuildName: d,
            customCheckoutFlow: m,
        } = e,
        { theme: x } = (0, p.wRf)(),
        [y, I] = l.useState(L.V1.Scenes.ENTRY),
        [A, g] = l.useState(!1),
        S = r?.name ?? d;
    return (
        (n = s
            ? null == S
                ? en.intl.format(en.t.P52e1r, {})
                : en.intl.format(en.t["4UnIk9"], { guildName: S })
            : o
              ? en.intl.format(en.t.gFaKd1, { helpCenterLink: H.A.getArticleURL(z.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == S
                ? en.intl.format(en.t.SZ5ohR, { guildSubscriptionQuantity: a })
                : en.intl.format(en.t.GxK3Mv, { guildName: S, guildSubscriptionQuantity: a })),
        (0, i.jsxs)("div", {
            className: et.RP,
            children: [
                c
                    ? (0, i.jsx)(L.V1, {
                          className: et.ud,
                          nextScene: y,
                          onScenePlay: (e) => {
                              if (!A)
                                  switch (e) {
                                      case L.V1.Scenes.ENTRY:
                                          return I(L.V1.Scenes.IDLE);
                                      case L.V1.Scenes.IDLE:
                                          return I(L.V1.Scenes.SUCCESS);
                                      case L.V1.Scenes.SUCCESS:
                                          return g(!0), I(L.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(U.Ay, {
                    className: et.E,
                    theme: x,
                    premiumType: Q.PremiumTypes.TIER_2,
                    type: ee.Nc.has(u ?? ee.he.UNKNOWN)
                        ? U.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : U.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: et.xR, children: n }),
                (0, i.jsx)(p.Button, {
                    variant: "primary",
                    text: m === X.uH.APPLE_PAYMENT_LINK ? en.intl.string(en.t.qXV2XU) : en.intl.string(en.t["/iTxgz"]),
                    onClick: t,
                }),
            ],
        })
    );
}
