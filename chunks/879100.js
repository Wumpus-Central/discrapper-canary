t.d(e, { As: () => K, WE: () => H, Xp: () => q }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    c = t.n(a),
    u = t(311907),
    o = t(827734),
    d = t(990078),
    m = t(397927),
    p = t(726656),
    I = t(793574),
    y = t(688810),
    g = t(531260),
    x = t(608805),
    S = t(404374),
    f = t(156312),
    h = t(543767),
    A = t(477421),
    P = t(234419),
    v = t(163538),
    j = t(796012),
    T = t(363476),
    b = t(659746),
    E = t(156962),
    N = t(72140),
    C = t(773669),
    U = t(287809),
    R = t(97352),
    _ = t(166403),
    L = t(473145),
    D = t(975571),
    M = t(252424),
    O = t(927578),
    k = t(580630),
    w = t(599669),
    G = t(652215);
t(601107);
var V = t(26279),
    Y = t(788868),
    W = t(818348),
    B = t(985018),
    J = t(272360);
function K(n) {
    let {
            premiumSubscriptionPlan: e,
            numGuildBoosts: t,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: x,
            onClickPremiumSubscriptionLink: j,
            existingAvailableSlots: b = [],
            priceOptions: V,
        } = n,
        { setInvoicePreview: K } = (0, f.P5)(),
        q = (0, v.A)(),
        H = e.interval,
        F = e.intervalCount,
        Z = (0, u.bG)([R.A], () => R.A.getForSkuAndInterval((0, O.mH)(Y.pe.GUILD), H, F)),
        $ = (0, u.bG)([U.default], () => U.default.getCurrentUser()),
        Q = (0, g.A)({ forceFetch: !1 });
    c()(null != Z, "Missing guildBoostingSubscriptionPlan");
    let z = [{ planId: Z.id, quantity: 1 }],
        X = x?.items.find((n) => n.planId === Y.gD.PREMIUM_MONTH_TIER_2 || n.planId === Y.gD.PREMIUM_YEAR_TIER_2);
    null != X && z.push(X);
    let nn = x?.items.find((n) => n.planId === Y.gD.PREMIUM_MONTH_GUILD || n.planId === Y.gD.PREMIUM_YEAR_GUILD),
        ne = null == q || !Y.uJ.has(q) || null == nn,
        { analyticsLocations: nt } = (0, y.Ay)(),
        [ni, nl] = (0, h.Kq)({
            subscriptionId: x?.id,
            items: z,
            renewal: !0,
            paymentSourceId: x?.paymentSourceId,
            currency: V.currency,
            preventFetch: ne,
            analyticsLocations: nt,
            analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    l.useEffect(() => {
        K(ni);
    }, [K, ni]);
    let nr = !ne && null == ni && null == nl,
        ns = (0, P.V)()?.subscription_trial?.sku_id === Y.pe.TIER_2,
        na = O.Ay.hasBoostDiscount($),
        nc = ni?.findInvoiceItemByPlanId(Z.id),
        nu =
            null != nc
                ? { amount: nc.amount, tax: 0, taxInclusive: !0, currency: V.currency }
                : O.Ay.getPrice(Z.id, na, !1, V),
        no = t * nu.amount,
        nd = (0, u.bG)([_.A], () => _.A.inReverseTrial() && O.Ay.hasBoostDiscount($) && null != x),
        nm =
            O.Ay.hasBoostDiscount($) &&
            null != x &&
            O.Ay.isPremiumAtLeast(O.Ay.getPremiumType(x.planId), Y.PremiumTypes.TIER_1)
                ? B.intl.format(B.t.hf6YOY, { planName: O.Ay.getTierDisplayNameByPlanId(x.planId) })
                : B.intl.format(ns ? B.t.ba1L74 : B.t.fkffDT, {
                      onPremiumSubscriptionClick: j,
                      discountPercentage: (0, M.l9)(C.default.locale, Y.oX / 100),
                      freeSubscriptionCount: Y.M4,
                  }),
        np = b.filter((n) => (0, L.I5)(n)).length,
        nI = (0, O.J$)(V.paymentSourceId),
        { ipCountryCode: ny } = (0, A.A)(),
        ng = "HR" === ny && nu.currency === W.Yr.EUR,
        nx = Q.fractionalState === Y.xc.FP_SUB_PAUSED;
    return (
        a(nr),
        (0, i.jsxs)("div", {
            children: [
                nx && (0, i.jsx)(E.vi, { fractionalPremiumInfo: Q }),
                nd && null != x
                    ? (0, i.jsx)(w.Ak, { endDate: x.currentPeriodEnd })
                    : (0, i.jsx)("div", { className: s()(J.hA, J.G3), children: B.intl.string(B.t.jNY1FO) }),
                b.length > 0
                    ? (0, i.jsxs)("div", {
                          className: J.Mv,
                          children: [
                              (0, i.jsx)(m._Jp, { className: J.T5, color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      B.intl.format(B.t.F8xlhr, { slotCount: b.length }),
                                      np > 0 && null != x
                                          ? (0, i.jsx)(d.m, {
                                                text: B.intl.formatToPlainString(B.t.SFpsCH, {
                                                    canceledCount: np,
                                                    date: x.currentPeriodEnd,
                                                }),
                                                children: (0, i.jsx)(m.EpV, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: J.Y5,
                                                    color: o.A.unsafe_rawColors.YELLOW_300.css,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
                (0, i.jsxs)("div", {
                    className: J.mP,
                    children: [
                        (0, i.jsxs)("div", {
                            className: J.E6,
                            children: [
                                (0, i.jsx)(m.lw3, {
                                    value: t,
                                    onChange: (n) => r(n),
                                    className: J.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: J.$0,
                                    children: nI
                                        ? (function (n) {
                                              let { intervalType: e, intervalCount: t = 1 } = n;
                                              return e === Y.WT.YEAR
                                                  ? B.intl.string(B.t.YDpAzZ)
                                                  : e === Y.WT.MONTH && 1 === t
                                                    ? B.intl.string(B.t["6ZR3By"])
                                                    : null;
                                          })({ intervalType: H, intervalCount: F })
                                        : B.intl.string(B.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(J.QK, { [J.S]: nr }),
                            children: nr
                                ? (0, i.jsx)(m.y$y, {})
                                : nI
                                  ? (0, k.$g)(nu.amount, nu.currency)
                                  : (function (n) {
                                        let { amount: e, currency: t, intervalType: i, intervalCount: l = 1 } = n,
                                            r = (0, k.$g)(e, t);
                                        return i === Y.WT.YEAR
                                            ? B.intl.formatToPlainString(B.t["8M04YJ"], { price: r })
                                            : i === Y.WT.MONTH && 1 === l
                                              ? B.intl.formatToPlainString(B.t.VStWCR, { price: r })
                                              : i === Y.WT.MONTH && l > 1
                                                ? B.intl.formatToPlainString(B.t.xJvAFU, { price: r })
                                                : null;
                                    })({ intervalType: H, intervalCount: F, amount: nu.amount, currency: nu.currency }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: J.J3 }),
                (0, i.jsxs)("div", {
                    className: J.mP,
                    children: [
                        (0, i.jsx)("div", { className: J.xp, children: B.intl.string(B.t.RtA7nR) }),
                        (0, i.jsx)("div", {
                            className: s()(J.__invalid_planSelectorSubtotalPrice, { [J.S]: nr }),
                            children: nr
                                ? (0, i.jsx)(m.y$y, {})
                                : (0, i.jsx)(T.A, {
                                      price: no,
                                      currency: nu.currency,
                                      intervalType: H,
                                      intervalCount: F,
                                      isPrepaidPaymentSource: nI,
                                  }),
                        }),
                    ],
                }),
                ng &&
                    (0, i.jsx)(p.A, {
                        message: B.intl.formatToPlainString(B.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, k.$g)(7.5345 * no, W.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(p.A, {
                    message: B.intl.format(B.t.Om31w8, {
                        documentationLink: D.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                    }),
                }),
                nd ? (0, i.jsx)(N.G, {}) : (0, i.jsx)(N.A, { text: nm, color: S.k0.PREMIUM_TIER_2 }),
            ],
        })
    );
}
function q(n) {
    let {
            paymentSources: e,
            priceOptions: t,
            currentPremiumSubscription: l,
            premiumSubscriptionPaymentSourceId: r,
            premiumSubscriptionPlan: s,
            newAdditionalPlans: a,
            onPaymentSourceChange: c,
            onPaymentSourceAdd: u,
            onPurchaseTermsChange: o,
            legalTermsNodeRef: d,
            hasLegalTermsFlash: m,
        } = n,
        p = (0, x.D7)({ location: "GuildBoostingReview" }),
        {
            paymentSourceId: I,
            paymentSourceType: y,
            hidePersonalInformation: g,
            proratedInvoicePreview: S,
            renewalInvoicePreview: f,
        } = (0, w.Jp)({ paymentSources: e, priceOptions: t, currentPremiumSubscription: l, newAdditionalPlans: a }),
        h = (0, w.eh)({
            paymentSources: e,
            paymentSourceId: I,
            premiumSubscriptionPaymentSourceId: r,
            onPaymentSourceChange: c,
            onPaymentSourceAdd: u,
            hidePersonalInformation: g,
            shouldUseUnifiedCheckoutUI: p,
        }),
        A = (0, w.Cc)({
            hasLegalTermsFlash: m,
            legalTermsNodeRef: d,
            onPurchaseTermsChange: o,
            premiumSubscriptionPlan: s,
            renewalInvoicePreview: f,
            proratedInvoicePreview: S,
            paymentSourceType: y,
        }),
        P = (0, w.V3)(p, {
            premiumSubscription: l,
            premiumSubscriptionPlan: s,
            proratedInvoicePreview: S,
            renewalInvoicePreview: f,
            priceOptions: t,
        });
    return P.isLoading
        ? P.loadingContent
        : (0, i.jsxs)("div", {
              children: [
                  P.isLoading
                      ? P.loadingContent
                      : P.isReturningUnifiedCheckoutUI
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [P.unifiedSubscriptionDetailsContent, P.unifiedInvoiceSummaryContent],
                          })
                        : P.legacyCheckoutContent,
                  (0, i.jsx)("div", { className: J.LC, children: (0, i.jsx)(w.x, { ...h }) }),
                  (0, i.jsx)(w.KR, { ...A }),
              ],
          });
}
function H(n) {
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
            customCheckoutFlow: p,
        } = n,
        { theme: I } = (0, m.wRf)(),
        [y, g] = l.useState(j.V1.Scenes.ENTRY),
        [x, S] = l.useState(!1),
        f = r?.name ?? d;
    return (
        (e = a
            ? null == f
                ? B.intl.format(B.t.P52e1r, {})
                : B.intl.format(B.t["4UnIk9"], { guildName: f })
            : o
              ? B.intl.format(B.t.gFaKd1, { helpCenterLink: D.A.getArticleURL(G.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == f
                ? B.intl.format(B.t.SZ5ohR, { guildSubscriptionQuantity: s })
                : B.intl.format(B.t.GxK3Mv, { guildName: f, guildSubscriptionQuantity: s })),
        (0, i.jsxs)("div", {
            className: J.RP,
            children: [
                c
                    ? (0, i.jsx)(j.V1, {
                          className: J.ud,
                          nextScene: y,
                          onScenePlay: (n) => {
                              if (!x)
                                  switch (n) {
                                      case j.V1.Scenes.ENTRY:
                                          return g(j.V1.Scenes.IDLE);
                                      case j.V1.Scenes.IDLE:
                                          return g(j.V1.Scenes.SUCCESS);
                                      case j.V1.Scenes.SUCCESS:
                                          return S(!0), g(j.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(b.Ay, {
                    className: J.E,
                    theme: I,
                    premiumType: Y.PremiumTypes.TIER_2,
                    type: W.Nc.has(u ?? W.he.UNKNOWN)
                        ? b.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : b.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: J.xR, children: e }),
                (0, i.jsx)(m.Button, {
                    variant: "primary",
                    text: p === V.uH.APPLE_PAYMENT_LINK ? B.intl.string(B.t.qXV2XU) : B.intl.string(B.t["/iTxgz"]),
                    onClick: t,
                }),
            ],
        })
    );
}
