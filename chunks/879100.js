t.d(e, { As: () => ni, WE: () => ns, Xp: () => nr }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    c = t.n(a),
    u = t(997101),
    o = t(311907),
    d = t(827734),
    m = t(990078),
    p = t(397927),
    y = t(821891),
    x = t(726656),
    I = t(637141),
    A = t(953689),
    S = t(155718),
    v = t(793574),
    P = t(688810),
    g = t(531260),
    h = t(404374),
    f = t(156312),
    j = t(216641),
    T = t(543767),
    E = t(874638),
    N = t(477421),
    b = t(234419),
    _ = t(163538),
    R = t(735164),
    L = t(796012),
    D = t(363476),
    U = t(659746),
    C = t(156962),
    M = t(778307),
    O = t(692440),
    w = t(72140),
    G = t(773669),
    V = t(351906),
    Y = t(287809),
    B = t(615405),
    W = t(295405),
    k = t(97352),
    q = t(166403),
    H = t(473145),
    K = t(975571),
    F = t(252424),
    $ = t(927578),
    J = t(580630),
    Z = t(652215);
t(601107);
var z = t(26279),
    X = t(788868),
    Q = t(818348),
    nn = t(985018),
    ne = t(843010);
function nt(n) {
    let { endDate: e, className: t } = n;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: ne.bU }),
            (0, i.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: ne.b7,
                children: nn.intl.format(nn.t.IeaYqg, { endDate: e }),
            }),
            (0, i.jsx)("div", { className: ne.bU }),
        ],
    });
}
function ni(n) {
    let {
            premiumSubscriptionPlan: e,
            numGuildBoosts: t,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: y,
            existingAvailableSlots: I = [],
            priceOptions: A,
        } = n,
        { setInvoicePreview: S } = (0, f.P5)(),
        j = (0, _.A)(),
        E = e.interval,
        R = e.intervalCount,
        L = (0, o.bG)([k.A], () => k.A.getForSkuAndInterval((0, $.mH)(X.pe.GUILD), E, R)),
        U = (0, o.bG)([Y.default], () => Y.default.getCurrentUser()),
        M = (0, g.A)({ forceFetch: !1 });
    c()(null != L, "Missing guildBoostingSubscriptionPlan");
    let O = [{ planId: L.id, quantity: 1 }],
        V = u?.items.find((n) => n.planId === X.gD.PREMIUM_MONTH_TIER_2 || n.planId === X.gD.PREMIUM_YEAR_TIER_2);
    null != V && O.push(V);
    let B = u?.items.find((n) => n.planId === X.gD.PREMIUM_MONTH_GUILD || n.planId === X.gD.PREMIUM_YEAR_GUILD),
        W = null == j || !X.uJ.has(j) || null == B,
        { analyticsLocations: z } = (0, P.Ay)(),
        [ni, nl] = (0, T.Kq)({
            subscriptionId: u?.id,
            items: O,
            renewal: !0,
            paymentSourceId: u?.paymentSourceId,
            currency: A.currency,
            preventFetch: W,
            analyticsLocations: z,
            analyticsLocation: v.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    l.useEffect(() => {
        S(ni);
    }, [S, ni]);
    let nr = !W && null == ni && null == nl,
        ns = (0, b.V)()?.subscription_trial?.sku_id === X.pe.TIER_2,
        na = $.Ay.hasBoostDiscount(U),
        nc = ni?.findInvoiceItemByPlanId(L.id),
        nu =
            null != nc
                ? { amount: nc.amount, tax: 0, taxInclusive: !0, currency: A.currency }
                : $.Ay.getPrice(L.id, na, !1, A),
        no = t * nu.amount,
        nd = (0, o.bG)([q.A], () => q.A.inReverseTrial() && $.Ay.hasBoostDiscount(U) && null != u),
        nm =
            $.Ay.hasBoostDiscount(U) &&
            null != u &&
            $.Ay.isPremiumAtLeast($.Ay.getPremiumType(u.planId), X.PremiumTypes.TIER_1)
                ? nn.intl.format(nn.t.hf6YOY, { planName: $.Ay.getTierDisplayNameByPlanId(u.planId) })
                : nn.intl.format(ns ? nn.t.ba1L74 : nn.t.fkffDT, {
                      onPremiumSubscriptionClick: y,
                      discountPercentage: (0, F.l9)(G.default.locale, X.oX / 100),
                      freeSubscriptionCount: X.M4,
                  }),
        np = I.filter((n) => (0, H.I5)(n)).length,
        ny = (0, $.J$)(A.paymentSourceId),
        { ipCountryCode: nx } = (0, N.A)(),
        nI = "HR" === nx && nu.currency === Q.Yr.EUR,
        nA = M.fractionalState === X.xc.FP_SUB_PAUSED;
    return (
        a(nr),
        (0, i.jsxs)("div", {
            children: [
                nA && (0, i.jsx)(C.vi, { fractionalPremiumInfo: M }),
                nd && null != u
                    ? (0, i.jsx)(nt, { endDate: u.currentPeriodEnd })
                    : (0, i.jsx)("div", { className: s()(ne.hA, ne.G3), children: nn.intl.string(nn.t.jNY1FO) }),
                I.length > 0
                    ? (0, i.jsxs)("div", {
                          className: ne.Mv,
                          children: [
                              (0, i.jsx)(p._Jp, { className: ne.T5, color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      nn.intl.format(nn.t.F8xlhr, { slotCount: I.length }),
                                      np > 0 && null != u
                                          ? (0, i.jsx)(m.m, {
                                                text: nn.intl.formatToPlainString(nn.t.SFpsCH, {
                                                    canceledCount: np,
                                                    date: u.currentPeriodEnd,
                                                }),
                                                children: (0, i.jsx)(p.EpV, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: ne.Y5,
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
                    className: ne.mP,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ne.E6,
                            children: [
                                (0, i.jsx)(p.lw3, {
                                    value: t,
                                    onChange: (n) => r(n),
                                    className: ne.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: ne.$0,
                                    children: ny
                                        ? (function (n) {
                                              let { intervalType: e, intervalCount: t = 1 } = n;
                                              return e === X.WT.YEAR
                                                  ? nn.intl.string(nn.t.YDpAzZ)
                                                  : e === X.WT.MONTH && 1 === t
                                                    ? nn.intl.string(nn.t["6ZR3By"])
                                                    : null;
                                          })({ intervalType: E, intervalCount: R })
                                        : nn.intl.string(nn.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(ne.QK, { [ne.S]: nr }),
                            children: nr
                                ? (0, i.jsx)(p.y$y, {})
                                : ny
                                  ? (0, J.$g)(nu.amount, nu.currency)
                                  : (function (n) {
                                        let { amount: e, currency: t, intervalType: i, intervalCount: l = 1 } = n,
                                            r = (0, J.$g)(e, t);
                                        return i === X.WT.YEAR
                                            ? nn.intl.formatToPlainString(nn.t["8M04YJ"], { price: r })
                                            : i === X.WT.MONTH && 1 === l
                                              ? nn.intl.formatToPlainString(nn.t.VStWCR, { price: r })
                                              : i === X.WT.MONTH && l > 1
                                                ? nn.intl.formatToPlainString(nn.t.xJvAFU, { price: r })
                                                : null;
                                    })({ intervalType: E, intervalCount: R, amount: nu.amount, currency: nu.currency }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: ne.J3 }),
                (0, i.jsxs)("div", {
                    className: ne.mP,
                    children: [
                        (0, i.jsx)("div", { className: ne.xp, children: nn.intl.string(nn.t.RtA7nR) }),
                        (0, i.jsx)("div", {
                            className: s()(ne.__invalid_planSelectorSubtotalPrice, { [ne.S]: nr }),
                            children: nr
                                ? (0, i.jsx)(p.y$y, {})
                                : (0, i.jsx)(D.A, {
                                      price: no,
                                      currency: nu.currency,
                                      intervalType: E,
                                      intervalCount: R,
                                      isPrepaidPaymentSource: ny,
                                  }),
                        }),
                    ],
                }),
                nI &&
                    (0, i.jsx)(x.A, {
                        message: nn.intl.formatToPlainString(nn.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, J.$g)(7.5345 * no, Q.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(x.A, {
                    message: nn.intl.format(nn.t.Om31w8, {
                        documentationLink: K.A.getArticleURL(Z.MVz.LOCALIZED_PRICING),
                    }),
                }),
                nd ? (0, i.jsx)(w.G, {}) : (0, i.jsx)(w.A, { text: nm, color: h.k0.PREMIUM_TIER_2 }),
            ],
        })
    );
}
function nl(n) {
    let {
            premiumSubscription: e,
            premiumSubscriptionPlan: t,
            proratedInvoicePreview: l,
            renewalInvoicePreview: r,
            priceOptions: s,
        } = n,
        a = t.interval,
        u = t.intervalCount,
        d = (0, o.bG)([k.A], () => k.A.getForSkuAndInterval((0, $.mH)(X.pe.GUILD), a, u));
    c()(null != d, "Missing guildBoostingSubscriptionPlan");
    let m = (n) => (0, E.Z)(l.invoiceItems).find((e) => X.pW.has(e.subscriptionPlanId) && n(e)),
        p = m((n) => n.amount >= 0);
    c()(null != p, "Missing guild boosting invoice item");
    let y = m((n) => n.amount < 0),
        x = null != y ? p.quantity - y.quantity : p.quantity,
        I = l.invoiceItems.filter((n) => (0, $.xq)(n.subscriptionPlanId)),
        A = I.reduce((n, e) => n + e.amount, 0),
        v = (0, T.sL)(p) * x,
        P = (0, J.$g)(v, l.currency),
        g = (0, J.CE)(P, a, u),
        h = (0, J.$g)(l.total, l.currency) + (l.currency !== Q.Yr.USD ? "*" : ""),
        f = l.total - v - A,
        j = p.discounts.map((n) => {
            let e = n.amount / p.quantity;
            return { ...n, amount: e * x };
        }),
        { subscriptionDiscount: N, entitlementDiscount: b } = {
            subscriptionDiscount: j.find((n) => n.type === S.iS.SUBSCRIPTION_PLAN),
            entitlementDiscount: j.find((n) => n.type === S.iS.ENTITLEMENT),
        },
        _ = (0, $.J$)(s.paymentSourceId),
        L = (0, o.bG)([q.A], () => q.A.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _
                ? null
                : L && null != e
                  ? (0, i.jsx)(nt, { endDate: e.currentPeriodEnd, className: ne.jk })
                  : (0, i.jsx)(O.wP, { proratedInvoice: l, renewalInvoice: r }),
            (0, i.jsxs)(R.Yx, {
                children: [
                    (0, i.jsx)(R.Xd, { children: nn.intl.string(nn.t.CWIwms) }),
                    (0, i.jsx)(R.f0, {
                        label: nn.intl.formatToPlainString(nn.t.a3cAOg, {
                            numGuildSubscriptions: x,
                            planName: (0, $.Mn)(d.id, !1, _),
                        }),
                        value: _ ? P : g,
                        subscriptionDiscount: N,
                        entitlementDiscount: b,
                        originalAmount: p.subscriptionPlanPrice * x,
                        currency: l.currency,
                        interval: d.interval,
                        intervalCount: d.intervalCount,
                    }),
                    0 !== A
                        ? (0, i.jsx)(R.oR, {
                              label: (0, i.jsx)(O.sw, {
                                  label: nn.intl.formatToPlainString(nn.t.ZSVged, {
                                      planName: (0, $.RH)(I[0].subscriptionPlanId),
                                  }),
                                  tooltipText: nn.intl.string(nn.t.JmwQJM),
                              }),
                              value: (0, J.$g)(A, l.currency),
                          })
                        : null,
                    0 !== f
                        ? (0, i.jsx)(R.oR, {
                              label: (0, i.jsx)(O.sw, {
                                  label: nn.intl.string(nn.t["+as5ZZ"]),
                                  tooltipText: nn.intl.string(nn.t.JmwQJM),
                              }),
                              value: (0, J.$g)(f, l.currency),
                          })
                        : null,
                    (0, i.jsx)(R.pK, {}),
                    (0, i.jsx)(R.Sd, {
                        label: nn.intl.format(l.taxInclusive ? (_ ? nn.t.BqdxQt : nn.t.XH4raN) : nn.t.RUI48E, {}),
                        value: h,
                    }),
                    null != e
                        ? (0, i.jsx)(O.m0, {
                              premiumSubscription: e,
                              proratedInvoice: l,
                              renewalInvoice: r,
                              isUpdate: !0,
                              isPrepaidPaymentSource: _,
                              isTrial: L,
                          })
                        : (0, i.jsx)(O.m0, { renewalInvoice: r, priceOptions: s, isPrepaidPaymentSource: _ }),
                ],
            }),
        ],
    });
}
function nr(n) {
    let e,
        t,
        {
            paymentSources: r,
            priceOptions: s,
            currentPremiumSubscription: a,
            premiumSubscriptionPaymentSourceId: c,
            premiumSubscriptionPlan: d,
            newAdditionalPlans: x,
            onPaymentSourceChange: S,
            onPaymentSourceAdd: g,
            onPurchaseTermsChange: h,
            legalTermsNodeRef: E,
            hasLegalTermsFlash: N,
        } = n,
        { setInvoicePreview: b } = (0, f.P5)(),
        _ = s.paymentSourceId,
        R = (0, j.g)(r, _),
        L = (0, o.bG)([W.A], () => (null != c ? W.A.getPaymentSource(c) : null)),
        D = (0, o.bG)([V.A], () => V.A.hidePersonalInformation);
    e = null != a ? (0, $.Om)(a, x[0].quantity, x[0].planId) : x;
    let { analyticsLocations: U } = (0, P.Ay)(),
        [C] = (0, T.Kq)({
            subscriptionId: a?.id,
            items: e,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: _,
            currency: s.currency,
            analyticsLocations: U,
            analyticsLocation: v.A.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [O] = (0, T.Kq)({
            subscriptionId: a?.id,
            items: e,
            renewal: !0,
            paymentSourceId: _,
            currency: s.currency,
            analyticsLocations: U,
            analyticsLocation: v.A.GUILD_BOOSTING_REVIEW_RENEWAL,
        });
    null != O && (t = { amount: O.subtotal, currency: O.currency, tax: O.tax, taxInclusive: !1 });
    let w = u.M.EEA_COUNTRIES.has(B.A.ipCountryCodeWithFallback);
    return (
        l.useEffect(() => {
            b(C);
        }, [b, C]),
        (0, i.jsxs)("div", {
            children: [
                null != C && null != O
                    ? (0, i.jsx)(nl, {
                          premiumSubscription: a,
                          premiumSubscriptionPlan: d,
                          proratedInvoicePreview: C,
                          renewalInvoicePreview: O,
                          priceOptions: s,
                      })
                    : null,
                (0, i.jsx)("div", {
                    className: ne.LC,
                    children:
                        null != c
                            ? null != L
                                ? (0, i.jsx)(m.m, {
                                      asContainer: !0,
                                      text: nn.intl.string(nn.t.XiuuV9),
                                      children: (0, i.jsx)(I.A, {
                                          label: nn.intl.string(nn.t["mmDvV+"]),
                                          paymentSources: [L],
                                          selectedPaymentSourceId: L.id,
                                          hidePersonalInformation: D,
                                          disabled: !0,
                                      }),
                                  })
                                : (0, i.jsx)("div", { children: (0, i.jsx)(p.y$y, {}) })
                            : (0, i.jsx)(I.A, {
                                  label: nn.intl.string(nn.t["mmDvV+"]),
                                  paymentSources: Object.values(r),
                                  selectedPaymentSourceId: _,
                                  onChange: S,
                                  onPaymentSourceAdd: g,
                                  hidePersonalInformation: D,
                              }),
                }),
                (0, i.jsx)(M.A, {
                    isActive: N,
                    ref: E,
                    children:
                        null != t &&
                        (0, i.jsx)(A.A, {
                            onChange: h,
                            forceShow: !0,
                            finePrint: (0, i.jsx)(y.A, {
                                subscriptionPlan: d,
                                paymentSourceType: R,
                                proratedAmount: null != C ? C.total : void 0,
                                basePrice: t,
                                productLine: Z.EZt.BOOST,
                            }),
                            showPricingLink: (C?.currency ?? Q.Yr.USD) !== Q.Yr.USD,
                            showWithdrawalWaiver: w,
                            subscriptionPlan: d,
                        }),
                }),
            ],
        })
    );
}
function ns(n) {
    let e,
        {
            onClose: t,
            guild: r,
            guildBoostQuantity: s,
            isTransfer: a = !1,
            withAnimation: c = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: o = !1,
            fallbackGuildName: d,
            customCheckoutFlow: m,
        } = n,
        { theme: y } = (0, p.wRf)(),
        [x, I] = l.useState(L.V1.Scenes.ENTRY),
        [A, S] = l.useState(!1),
        v = r?.name ?? d;
    return (
        (e = a
            ? null == v
                ? nn.intl.format(nn.t.P52e1r, {})
                : nn.intl.format(nn.t["4UnIk9"], { guildName: v })
            : o
              ? nn.intl.format(nn.t.gFaKd1, { helpCenterLink: K.A.getArticleURL(Z.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == v
                ? nn.intl.format(nn.t.SZ5ohR, { guildSubscriptionQuantity: s })
                : nn.intl.format(nn.t.GxK3Mv, { guildName: v, guildSubscriptionQuantity: s })),
        (0, i.jsxs)("div", {
            className: ne.RP,
            children: [
                c
                    ? (0, i.jsx)(L.V1, {
                          className: ne.ud,
                          nextScene: x,
                          onScenePlay: (n) => {
                              if (!A)
                                  switch (n) {
                                      case L.V1.Scenes.ENTRY:
                                          return I(L.V1.Scenes.IDLE);
                                      case L.V1.Scenes.IDLE:
                                          return I(L.V1.Scenes.SUCCESS);
                                      case L.V1.Scenes.SUCCESS:
                                          return S(!0), I(L.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(U.Ay, {
                    className: ne.E,
                    theme: y,
                    premiumType: X.PremiumTypes.TIER_2,
                    type: Q.Nc.has(u ?? Q.he.UNKNOWN)
                        ? U.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : U.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: ne.xR, children: e }),
                (0, i.jsx)(p.Button, {
                    variant: "primary",
                    text: m === z.uH.APPLE_PAYMENT_LINK ? nn.intl.string(nn.t.qXV2XU) : nn.intl.string(nn.t["/iTxgz"]),
                    onClick: t,
                }),
            ],
        })
    );
}
