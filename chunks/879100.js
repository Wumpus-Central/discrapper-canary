t.d(e, { As: () => K, WE: () => $, Xp: () => F }), t(321073);
var i = t(627968),
    r = t(64700),
    l = t(503698),
    s = t.n(l),
    a = t(284009),
    c = t.n(a),
    u = t(311907),
    o = t(827734),
    d = t(990078),
    m = t(397927),
    p = t(726656),
    I = t(793574),
    x = t(688810),
    y = t(531260),
    S = t(404374),
    A = t(156312),
    v = t(543767),
    P = t(477421),
    h = t(234419),
    f = t(163538),
    g = t(796012),
    j = t(363476),
    T = t(659746),
    E = t(156962),
    N = t(72140),
    b = t(773669),
    _ = t(287809),
    R = t(97352),
    U = t(166403),
    C = t(473145),
    L = t(975571),
    D = t(252424),
    M = t(927578),
    O = t(580630),
    w = t(599669),
    G = t(652215);
t(601107);
var k = t(26279),
    V = t(788868),
    Y = t(818348),
    W = t(985018),
    B = t(843010);
function K(n) {
    let {
            premiumSubscriptionPlan: e,
            numGuildBoosts: t,
            setNumGuildBoosts: l,
            setForceDisableSubmitButton: a,
            premiumSubscription: g,
            onClickPremiumSubscriptionLink: T,
            existingAvailableSlots: k = [],
            priceOptions: K,
        } = n,
        { setInvoicePreview: q } = (0, A.P5)(),
        F = (0, f.A)(),
        $ = e.interval,
        H = e.intervalCount,
        J = (0, u.bG)([R.A], () => R.A.getForSkuAndInterval((0, M.mH)(V.pe.GUILD), $, H)),
        Z = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        z = (0, y.A)({ forceFetch: !1 });
    c()(null != J, "Missing guildBoostingSubscriptionPlan");
    let X = [{ planId: J.id, quantity: 1 }],
        Q = g?.items.find((n) => n.planId === V.gD.PREMIUM_MONTH_TIER_2 || n.planId === V.gD.PREMIUM_YEAR_TIER_2);
    null != Q && X.push(Q);
    let nn = g?.items.find((n) => n.planId === V.gD.PREMIUM_MONTH_GUILD || n.planId === V.gD.PREMIUM_YEAR_GUILD),
        ne = null == F || !V.uJ.has(F) || null == nn,
        { analyticsLocations: nt } = (0, x.Ay)(),
        [ni, nr] = (0, v.Kq)({
            subscriptionId: g?.id,
            items: X,
            renewal: !0,
            paymentSourceId: g?.paymentSourceId,
            currency: K.currency,
            preventFetch: ne,
            analyticsLocations: nt,
            analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    r.useEffect(() => {
        q(ni);
    }, [q, ni]);
    let nl = !ne && null == ni && null == nr,
        ns = (0, h.V)()?.subscription_trial?.sku_id === V.pe.TIER_2,
        na = M.Ay.hasBoostDiscount(Z),
        nc = ni?.findInvoiceItemByPlanId(J.id),
        nu =
            null != nc
                ? { amount: nc.amount, tax: 0, taxInclusive: !0, currency: K.currency }
                : M.Ay.getPrice(J.id, na, !1, K),
        no = t * nu.amount,
        nd = (0, u.bG)([U.A], () => U.A.inReverseTrial() && M.Ay.hasBoostDiscount(Z) && null != g),
        nm =
            M.Ay.hasBoostDiscount(Z) &&
            null != g &&
            M.Ay.isPremiumAtLeast(M.Ay.getPremiumType(g.planId), V.PremiumTypes.TIER_1)
                ? W.intl.format(W.t.hf6YOY, { planName: M.Ay.getTierDisplayNameByPlanId(g.planId) })
                : W.intl.format(ns ? W.t.ba1L74 : W.t.fkffDT, {
                      onPremiumSubscriptionClick: T,
                      discountPercentage: (0, D.l9)(b.default.locale, V.oX / 100),
                      freeSubscriptionCount: V.M4,
                  }),
        np = k.filter((n) => (0, C.I5)(n)).length,
        nI = (0, M.J$)(K.paymentSourceId),
        { ipCountryCode: nx } = (0, P.A)(),
        ny = "HR" === nx && nu.currency === Y.Yr.EUR,
        nS = z.fractionalState === V.xc.FP_SUB_PAUSED;
    return (
        a(nl),
        (0, i.jsxs)("div", {
            children: [
                nS && (0, i.jsx)(E.vi, { fractionalPremiumInfo: z }),
                nd && null != g
                    ? (0, i.jsx)(w.Ak, { endDate: g.currentPeriodEnd })
                    : (0, i.jsx)("div", { className: s()(B.hA, B.G3), children: W.intl.string(W.t.jNY1FO) }),
                k.length > 0
                    ? (0, i.jsxs)("div", {
                          className: B.Mv,
                          children: [
                              (0, i.jsx)(m._Jp, { className: B.T5, color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      W.intl.format(W.t.F8xlhr, { slotCount: k.length }),
                                      np > 0 && null != g
                                          ? (0, i.jsx)(d.m, {
                                                text: W.intl.formatToPlainString(W.t.SFpsCH, {
                                                    canceledCount: np,
                                                    date: g.currentPeriodEnd,
                                                }),
                                                children: (0, i.jsx)(m.EpV, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: B.Y5,
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
                    className: B.mP,
                    children: [
                        (0, i.jsxs)("div", {
                            className: B.E6,
                            children: [
                                (0, i.jsx)(m.lw3, {
                                    value: t,
                                    onChange: (n) => l(n),
                                    className: B.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: B.$0,
                                    children: nI
                                        ? (function (n) {
                                              let { intervalType: e, intervalCount: t = 1 } = n;
                                              return e === V.WT.YEAR
                                                  ? W.intl.string(W.t.YDpAzZ)
                                                  : e === V.WT.MONTH && 1 === t
                                                    ? W.intl.string(W.t["6ZR3By"])
                                                    : null;
                                          })({ intervalType: $, intervalCount: H })
                                        : W.intl.string(W.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(B.QK, { [B.S]: nl }),
                            children: nl
                                ? (0, i.jsx)(m.y$y, {})
                                : nI
                                  ? (0, O.$g)(nu.amount, nu.currency)
                                  : (function (n) {
                                        let { amount: e, currency: t, intervalType: i, intervalCount: r = 1 } = n,
                                            l = (0, O.$g)(e, t);
                                        return i === V.WT.YEAR
                                            ? W.intl.formatToPlainString(W.t["8M04YJ"], { price: l })
                                            : i === V.WT.MONTH && 1 === r
                                              ? W.intl.formatToPlainString(W.t.VStWCR, { price: l })
                                              : i === V.WT.MONTH && r > 1
                                                ? W.intl.formatToPlainString(W.t.xJvAFU, { price: l })
                                                : null;
                                    })({ intervalType: $, intervalCount: H, amount: nu.amount, currency: nu.currency }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: B.J3 }),
                (0, i.jsxs)("div", {
                    className: B.mP,
                    children: [
                        (0, i.jsx)("div", { className: B.xp, children: W.intl.string(W.t.RtA7nR) }),
                        (0, i.jsx)("div", {
                            className: s()(B.__invalid_planSelectorSubtotalPrice, { [B.S]: nl }),
                            children: nl
                                ? (0, i.jsx)(m.y$y, {})
                                : (0, i.jsx)(j.A, {
                                      price: no,
                                      currency: nu.currency,
                                      intervalType: $,
                                      intervalCount: H,
                                      isPrepaidPaymentSource: nI,
                                  }),
                        }),
                    ],
                }),
                ny &&
                    (0, i.jsx)(p.A, {
                        message: W.intl.formatToPlainString(W.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, O.$g)(7.5345 * no, Y.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(p.A, {
                    message: W.intl.format(W.t.Om31w8, {
                        documentationLink: L.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                    }),
                }),
                nd ? (0, i.jsx)(N.G, {}) : (0, i.jsx)(N.A, { text: nm, color: S.k0.PREMIUM_TIER_2 }),
            ],
        })
    );
}
function q(n) {
    let {
            premiumSubscription: e,
            premiumSubscriptionPlan: t,
            proratedInvoicePreview: r,
            renewalInvoicePreview: l,
            priceOptions: s,
        } = n,
        { noticeProps: a, invoiceSummaryProps: c } = (0, w.$_)({
            premiumSubscription: e,
            premiumSubscriptionPlan: t,
            proratedInvoicePreview: r,
            renewalInvoicePreview: l,
            priceOptions: s,
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(w.Fv, { ...a }), (0, i.jsx)(w.eI, { ...c })] });
}
function F(n) {
    let {
            paymentSources: e,
            priceOptions: t,
            currentPremiumSubscription: r,
            premiumSubscriptionPaymentSourceId: l,
            premiumSubscriptionPlan: s,
            newAdditionalPlans: a,
            onPaymentSourceChange: c,
            onPaymentSourceAdd: u,
            onPurchaseTermsChange: o,
            legalTermsNodeRef: d,
            hasLegalTermsFlash: m,
        } = n,
        {
            paymentSourceId: p,
            paymentSourceType: I,
            hidePersonalInformation: x,
            proratedInvoicePreview: y,
            renewalInvoicePreview: S,
        } = (0, w.Jp)({ paymentSources: e, priceOptions: t, currentPremiumSubscription: r, newAdditionalPlans: a }),
        A = (0, w.eh)({
            paymentSources: e,
            paymentSourceId: p,
            premiumSubscriptionPaymentSourceId: l,
            onPaymentSourceChange: c,
            onPaymentSourceAdd: u,
            hidePersonalInformation: x,
            shouldUseUnifiedCheckoutUI: !1,
        }),
        v = (0, w.Cc)({
            hasLegalTermsFlash: m,
            legalTermsNodeRef: d,
            onPurchaseTermsChange: o,
            premiumSubscriptionPlan: s,
            renewalInvoicePreview: S,
            proratedInvoicePreview: y,
            paymentSourceType: I,
        });
    return (0, i.jsxs)("div", {
        children: [
            null != y && null != S
                ? (0, i.jsx)(q, {
                      premiumSubscription: r,
                      premiumSubscriptionPlan: s,
                      proratedInvoicePreview: y,
                      renewalInvoicePreview: S,
                      priceOptions: t,
                  })
                : null,
            (0, i.jsx)("div", { className: B.LC, children: (0, i.jsx)(w.x, { ...A }) }),
            (0, i.jsx)(w.KR, { ...v }),
        ],
    });
}
function $(n) {
    let e,
        {
            onClose: t,
            guild: l,
            guildBoostQuantity: s,
            isTransfer: a = !1,
            withAnimation: c = !0,
            paymentSourceType: u,
            didPurchaseOnFractionalPremium: o = !1,
            fallbackGuildName: d,
            customCheckoutFlow: p,
        } = n,
        { theme: I } = (0, m.wRf)(),
        [x, y] = r.useState(g.V1.Scenes.ENTRY),
        [S, A] = r.useState(!1),
        v = l?.name ?? d;
    return (
        (e = a
            ? null == v
                ? W.intl.format(W.t.P52e1r, {})
                : W.intl.format(W.t["4UnIk9"], { guildName: v })
            : o
              ? W.intl.format(W.t.gFaKd1, { helpCenterLink: L.A.getArticleURL(G.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == v
                ? W.intl.format(W.t.SZ5ohR, { guildSubscriptionQuantity: s })
                : W.intl.format(W.t.GxK3Mv, { guildName: v, guildSubscriptionQuantity: s })),
        (0, i.jsxs)("div", {
            className: B.RP,
            children: [
                c
                    ? (0, i.jsx)(g.V1, {
                          className: B.ud,
                          nextScene: x,
                          onScenePlay: (n) => {
                              if (!S)
                                  switch (n) {
                                      case g.V1.Scenes.ENTRY:
                                          return y(g.V1.Scenes.IDLE);
                                      case g.V1.Scenes.IDLE:
                                          return y(g.V1.Scenes.SUCCESS);
                                      case g.V1.Scenes.SUCCESS:
                                          return A(!0), y(g.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(T.Ay, {
                    className: B.E,
                    theme: I,
                    premiumType: V.PremiumTypes.TIER_2,
                    type: Y.Nc.has(u ?? Y.he.UNKNOWN)
                        ? T.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : T.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: B.xR, children: e }),
                (0, i.jsx)(m.Button, {
                    variant: "primary",
                    text: p === k.uH.APPLE_PAYMENT_LINK ? W.intl.string(W.t.qXV2XU) : W.intl.string(W.t["/iTxgz"]),
                    onClick: t,
                }),
            ],
        })
    );
}
