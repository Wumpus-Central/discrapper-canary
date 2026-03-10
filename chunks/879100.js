n.d(t, { A: () => q, W: () => K }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    u = n.n(s),
    c = n(311907),
    o = n(827734),
    d = n(990078),
    m = n(397927),
    p = n(726656),
    I = n(793574),
    y = n(688810),
    x = n(531260),
    v = n(404374),
    S = n(156312),
    f = n(543767),
    A = n(477421),
    g = n(234419),
    h = n(163538),
    P = n(796012),
    T = n(363476),
    j = n(659746),
    b = n(156962),
    E = n(72140),
    N = n(773669),
    U = n(287809),
    _ = n(97352),
    R = n(166403),
    C = n(473145),
    L = n(975571),
    D = n(252424),
    M = n(927578),
    w = n(580630),
    O = n(599669),
    G = n(652215);
n(601107);
var k = n(26279),
    Y = n(788868),
    B = n(818348),
    V = n(985018),
    W = n(843010);
function q(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: s,
            premiumSubscription: P,
            onClickPremiumSubscriptionLink: j,
            existingAvailableSlots: k = [],
            priceOptions: q,
        } = e,
        { setInvoicePreview: K } = (0, S.P5)(),
        H = (0, h.A)(),
        $ = t.interval,
        J = t.intervalCount,
        F = (0, c.bG)([_.A], () => _.A.getForSkuAndInterval((0, M.mH)(Y.pe.GUILD), $, J)),
        z = (0, c.bG)([U.default], () => U.default.getCurrentUser()),
        Z = (0, x.A)({ forceFetch: !1 });
    u()(null != F, "Missing guildBoostingSubscriptionPlan");
    let X = [{ planId: F.id, quantity: 1 }],
        Q = P?.items.find((e) => e.planId === Y.gD.PREMIUM_MONTH_TIER_2 || e.planId === Y.gD.PREMIUM_YEAR_TIER_2);
    null != Q && X.push(Q);
    let ee = P?.items.find((e) => e.planId === Y.gD.PREMIUM_MONTH_GUILD || e.planId === Y.gD.PREMIUM_YEAR_GUILD),
        et = null == H || !Y.uJ.has(H) || null == ee,
        { analyticsLocations: en } = (0, y.Ay)(),
        [ei, el] = (0, f.Kq)({
            subscriptionId: P?.id,
            items: X,
            renewal: !0,
            paymentSourceId: P?.paymentSourceId,
            currency: q.currency,
            preventFetch: et,
            analyticsLocations: en,
            analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    l.useEffect(() => {
        K(ei);
    }, [K, ei]);
    let er = !et && null == ei && null == el,
        ea = (0, g.V)()?.subscription_trial?.sku_id === Y.pe.TIER_2,
        es = M.Ay.hasBoostDiscount(z),
        eu = ei?.findInvoiceItemByPlanId(F.id),
        ec =
            null != eu
                ? { amount: eu.amount, tax: 0, taxInclusive: !0, currency: q.currency }
                : M.Ay.getPrice(F.id, es, !1, q),
        eo = n * ec.amount,
        ed = (0, c.bG)([R.A], () => R.A.inReverseTrial() && M.Ay.hasBoostDiscount(z) && null != P),
        em =
            M.Ay.hasBoostDiscount(z) &&
            null != P &&
            M.Ay.isPremiumAtLeast(M.Ay.getPremiumType(P.planId), Y.PremiumTypes.TIER_1)
                ? V.intl.format(V.t.hf6YOY, { planName: M.Ay.getTierDisplayNameByPlanId(P.planId) })
                : V.intl.format(ea ? V.t.ba1L74 : V.t.fkffDT, {
                      onPremiumSubscriptionClick: j,
                      discountPercentage: (0, D.l9)(N.default.locale, Y.oX / 100),
                      freeSubscriptionCount: Y.M4,
                  }),
        ep = k.filter((e) => (0, C.I5)(e)).length,
        eI = (0, M.J$)(q.paymentSourceId),
        { ipCountryCode: ey } = (0, A.A)(),
        ex = "HR" === ey && ec.currency === B.Yr.EUR,
        ev = Z.fractionalState === Y.xc.FP_SUB_PAUSED;
    return (
        s(er),
        (0, i.jsxs)("div", {
            children: [
                ev && (0, i.jsx)(b.vi, { fractionalPremiumInfo: Z }),
                ed && null != P
                    ? (0, i.jsx)(O.Ak, { text: (0, O.zT)(P.currentPeriodEnd) })
                    : (0, i.jsx)("div", { className: a()(W.hA, W.G3), children: V.intl.string(V.t.jNY1FO) }),
                k.length > 0
                    ? (0, i.jsxs)("div", {
                          className: W.Mv,
                          children: [
                              (0, i.jsx)(m._Jp, { className: W.T5, color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      V.intl.format(V.t.F8xlhr, { slotCount: k.length }),
                                      ep > 0 && null != P
                                          ? (0, i.jsx)(d.m, {
                                                text: V.intl.formatToPlainString(V.t.SFpsCH, {
                                                    canceledCount: ep,
                                                    date: P.currentPeriodEnd,
                                                }),
                                                children: (0, i.jsx)(m.EpV, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: W.Y5,
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
                    className: W.mP,
                    children: [
                        (0, i.jsxs)("div", {
                            className: W.E6,
                            children: [
                                (0, i.jsx)(m.lw3, {
                                    value: n,
                                    onChange: (e) => r(e),
                                    className: W.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: W.$0,
                                    children: eI
                                        ? (function (e) {
                                              let { intervalType: t, intervalCount: n = 1 } = e;
                                              return t === Y.WT.YEAR
                                                  ? V.intl.string(V.t.YDpAzZ)
                                                  : t === Y.WT.MONTH && 1 === n
                                                    ? V.intl.string(V.t["6ZR3By"])
                                                    : null;
                                          })({ intervalType: $, intervalCount: J })
                                        : V.intl.string(V.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: a()(W.QK, { [W.S]: er }),
                            children: er
                                ? (0, i.jsx)(m.y$y, {})
                                : eI
                                  ? (0, w.$g)(ec.amount, ec.currency)
                                  : (function (e) {
                                        let { amount: t, currency: n, intervalType: i, intervalCount: l = 1 } = e,
                                            r = (0, w.$g)(t, n);
                                        return i === Y.WT.YEAR
                                            ? V.intl.formatToPlainString(V.t["8M04YJ"], { price: r })
                                            : i === Y.WT.MONTH && 1 === l
                                              ? V.intl.formatToPlainString(V.t.VStWCR, { price: r })
                                              : i === Y.WT.MONTH && l > 1
                                                ? V.intl.formatToPlainString(V.t.xJvAFU, { price: r })
                                                : null;
                                    })({ intervalType: $, intervalCount: J, amount: ec.amount, currency: ec.currency }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: W.J3 }),
                (0, i.jsxs)("div", {
                    className: W.mP,
                    children: [
                        (0, i.jsx)("div", { className: W.xp, children: V.intl.string(V.t.RtA7nR) }),
                        (0, i.jsx)("div", {
                            className: a()(W.__invalid_planSelectorSubtotalPrice, { [W.S]: er }),
                            children: er
                                ? (0, i.jsx)(m.y$y, {})
                                : (0, i.jsx)(T.A, {
                                      price: eo,
                                      currency: ec.currency,
                                      intervalType: $,
                                      intervalCount: J,
                                      isPrepaidPaymentSource: eI,
                                  }),
                        }),
                    ],
                }),
                ex &&
                    (0, i.jsx)(p.A, {
                        message: V.intl.formatToPlainString(V.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, w.$g)(7.5345 * eo, B.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(p.A, {
                    message: V.intl.format(V.t.Om31w8, {
                        documentationLink: L.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                    }),
                }),
                ed ? (0, i.jsx)(E.G, {}) : (0, i.jsx)(E.A, { text: em, color: v.k0.PREMIUM_TIER_2 }),
            ],
        })
    );
}
function K(e) {
    let t,
        {
            onClose: n,
            guild: r,
            guildBoostQuantity: a,
            isTransfer: s = !1,
            withAnimation: u = !0,
            paymentSourceType: c,
            didPurchaseOnFractionalPremium: o = !1,
            fallbackGuildName: d,
            customCheckoutFlow: p,
        } = e,
        { theme: I } = (0, m.wRf)(),
        [y, x] = l.useState(P.V1.Scenes.ENTRY),
        [v, S] = l.useState(!1),
        f = r?.name ?? d;
    return (
        (t = s
            ? null == f
                ? V.intl.format(V.t.P52e1r, {})
                : V.intl.format(V.t["4UnIk9"], { guildName: f })
            : o
              ? V.intl.format(V.t.gFaKd1, { helpCenterLink: L.A.getArticleURL(G.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == f
                ? V.intl.format(V.t.SZ5ohR, { guildSubscriptionQuantity: a })
                : V.intl.format(V.t.GxK3Mv, { guildName: f, guildSubscriptionQuantity: a })),
        (0, i.jsxs)("div", {
            className: W.RP,
            children: [
                u
                    ? (0, i.jsx)(P.V1, {
                          className: W.ud,
                          nextScene: y,
                          onScenePlay: (e) => {
                              if (!v)
                                  switch (e) {
                                      case P.V1.Scenes.ENTRY:
                                          return x(P.V1.Scenes.IDLE);
                                      case P.V1.Scenes.IDLE:
                                          return x(P.V1.Scenes.SUCCESS);
                                      case P.V1.Scenes.SUCCESS:
                                          return S(!0), x(P.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(j.Ay, {
                    className: W.E,
                    theme: I,
                    premiumType: Y.PremiumTypes.TIER_2,
                    type: B.Nc.has(c ?? B.he.UNKNOWN)
                        ? j.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : j.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: W.xR, children: t }),
                (0, i.jsx)(m.Button, {
                    variant: "primary",
                    text: p === k.uH.APPLE_PAYMENT_LINK ? V.intl.string(V.t.qXV2XU) : V.intl.string(V.t["/iTxgz"]),
                    onClick: n,
                }),
            ],
        })
    );
}
