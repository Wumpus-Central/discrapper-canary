n.d(t, { A: () => q, W: () => K }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    u = n.n(s),
    c = n(311907),
    o = n(827734),
    d = n(990078),
    m = n(397927),
    p = n(726656),
    I = n(793574),
    y = n(688810),
    v = n(531260),
    x = n(404374),
    S = n(156312),
    f = n(543767),
    g = n(637073),
    A = n(477421),
    h = n(234419),
    P = n(163538),
    T = n(796012),
    j = n(363476),
    b = n(659746),
    E = n(156962),
    N = n(72140),
    U = n(773669),
    C = n(287809),
    _ = n(97352),
    R = n(473145),
    L = n(975571),
    D = n(252424),
    w = n(927578),
    M = n(580630),
    O = n(599669),
    G = n(652215);
n(601107);
var k = n(26279),
    B = n(788868),
    V = n(818348),
    Y = n(985018),
    W = n(843010);
function q(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: l,
            setForceDisableSubmitButton: s,
            premiumSubscription: T,
            onClickPremiumSubscriptionLink: b,
            existingAvailableSlots: k = [],
            priceOptions: q,
        } = e,
        { setInvoicePreview: K } = (0, S.P5)(),
        H = (0, P.A)(),
        F = t.interval,
        J = t.intervalCount,
        $ = (0, c.bG)([_.A], () => _.A.getForSkuAndInterval((0, w.mH)(B.pe.GUILD), F, J)),
        Z = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        z = (0, v.A)({ forceFetch: !1 });
    u()(null != $, "Missing guildBoostingSubscriptionPlan");
    let X = [{ planId: $.id, quantity: 1 }],
        Q = T?.items.find((e) => e.planId === B.gD.PREMIUM_MONTH_TIER_2 || e.planId === B.gD.PREMIUM_YEAR_TIER_2);
    null != Q && X.push(Q);
    let ee = T?.items.find((e) => e.planId === B.gD.PREMIUM_MONTH_GUILD || e.planId === B.gD.PREMIUM_YEAR_GUILD),
        et = null == H || !B.uJ.has(H) || null == ee,
        { analyticsLocations: en } = (0, y.Ay)(),
        [ei, er] = (0, f.Kq)({
            subscriptionId: T?.id,
            items: X,
            renewal: !0,
            paymentSourceId: T?.paymentSourceId,
            currency: q.currency,
            preventFetch: et,
            analyticsLocations: en,
            analyticsLocation: I.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    r.useEffect(() => {
        K(ei);
    }, [K, ei]);
    let el = !et && null == ei && null == er,
        ea = (0, h.V)()?.subscription_trial?.sku_id === B.pe.TIER_2,
        es = w.Ay.hasBoostDiscount(Z),
        eu = ei?.findInvoiceItemByPlanId($.id),
        ec =
            null != eu
                ? { amount: eu.amount, tax: 0, taxInclusive: !0, currency: q.currency }
                : w.Ay.getPrice($.id, es, !1, q),
        eo = n * ec.amount,
        ed = (0, g.d)() && w.Ay.hasBoostDiscount(Z) && null != T,
        em =
            w.Ay.hasBoostDiscount(Z) &&
            null != T &&
            w.Ay.isPremiumAtLeast(w.Ay.getPremiumType(T.planId), B.PremiumTypes.TIER_1)
                ? Y.intl.format(Y.t.hf6YOY, { planName: w.Ay.getTierDisplayNameByPlanId(T.planId) })
                : Y.intl.format(ea ? Y.t.ba1L74 : Y.t.fkffDT, {
                      onPremiumSubscriptionClick: b,
                      discountPercentage: (0, D.l9)(U.default.locale, B.oX / 100),
                      freeSubscriptionCount: B.M4,
                  }),
        ep = k.filter((e) => (0, R.I5)(e)).length,
        eI = (0, w.J$)(q.paymentSourceId),
        { ipCountryCode: ey } = (0, A.A)(),
        ev = "HR" === ey && ec.currency === V.Yr.EUR,
        ex = z.fractionalState === B.xc.FP_SUB_PAUSED;
    return (
        s(el),
        (0, i.jsxs)("div", {
            children: [
                ex && (0, i.jsx)(E.vi, { fractionalPremiumInfo: z }),
                ed && null != T
                    ? (0, i.jsx)(O.Ak, { text: (0, O.zT)(T.currentPeriodEnd) })
                    : (0, i.jsx)("div", { className: a()(W.hA, W.G3), children: Y.intl.string(Y.t.jNY1FO) }),
                k.length > 0
                    ? (0, i.jsxs)("div", {
                          className: W.Mv,
                          children: [
                              (0, i.jsx)(m._Jp, { className: W.T5, color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      Y.intl.format(Y.t.F8xlhr, { slotCount: k.length }),
                                      ep > 0 && null != T
                                          ? (0, i.jsx)(d.m, {
                                                text: Y.intl.formatToPlainString(Y.t.SFpsCH, {
                                                    canceledCount: ep,
                                                    date: T.currentPeriodEnd,
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
                                    onChange: (e) => l(e),
                                    className: W.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: W.$0,
                                    children: eI
                                        ? (function (e) {
                                              let { intervalType: t, intervalCount: n = 1 } = e;
                                              return t === B.WT.YEAR
                                                  ? Y.intl.string(Y.t.YDpAzZ)
                                                  : t === B.WT.MONTH && 1 === n
                                                    ? Y.intl.string(Y.t["6ZR3By"])
                                                    : null;
                                          })({ intervalType: F, intervalCount: J })
                                        : Y.intl.string(Y.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: a()(W.QK, { [W.S]: el }),
                            children: el
                                ? (0, i.jsx)(m.y$y, {})
                                : eI
                                  ? (0, M.$g)(ec.amount, ec.currency)
                                  : (function (e) {
                                        let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                            l = (0, M.$g)(t, n);
                                        return i === B.WT.YEAR
                                            ? Y.intl.formatToPlainString(Y.t["8M04YJ"], { price: l })
                                            : i === B.WT.MONTH && 1 === r
                                              ? Y.intl.formatToPlainString(Y.t.VStWCR, { price: l })
                                              : i === B.WT.MONTH && r > 1
                                                ? Y.intl.formatToPlainString(Y.t.xJvAFU, { price: l })
                                                : null;
                                    })({ intervalType: F, intervalCount: J, amount: ec.amount, currency: ec.currency }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: W.J3 }),
                (0, i.jsxs)("div", {
                    className: W.mP,
                    children: [
                        (0, i.jsx)("div", { className: W.xp, children: Y.intl.string(Y.t.RtA7nR) }),
                        (0, i.jsx)("div", {
                            className: a()(W.__invalid_planSelectorSubtotalPrice, { [W.S]: el }),
                            children: el
                                ? (0, i.jsx)(m.y$y, {})
                                : (0, i.jsx)(j.A, {
                                      price: eo,
                                      currency: ec.currency,
                                      intervalType: F,
                                      intervalCount: J,
                                      isPrepaidPaymentSource: eI,
                                  }),
                        }),
                    ],
                }),
                ev &&
                    (0, i.jsx)(p.A, {
                        message: Y.intl.formatToPlainString(Y.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, M.$g)(7.5345 * eo, V.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(p.A, {
                    message: Y.intl.format(Y.t.Om31w8, {
                        documentationLink: L.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                    }),
                }),
                ed ? (0, i.jsx)(N.G, {}) : (0, i.jsx)(N.A, { text: em, color: x.k0.PREMIUM_TIER_2 }),
            ],
        })
    );
}
function K(e) {
    let t,
        {
            onClose: n,
            guild: l,
            guildBoostQuantity: a,
            isTransfer: s = !1,
            withAnimation: u = !0,
            paymentSourceType: c,
            didPurchaseOnFractionalPremium: o = !1,
            fallbackGuildName: d,
            customCheckoutFlow: p,
        } = e,
        { theme: I } = (0, m.wRf)(),
        [y, v] = r.useState(T.V1.Scenes.ENTRY),
        [x, S] = r.useState(!1),
        f = l?.name ?? d;
    return (
        (t = s
            ? null == f
                ? Y.intl.format(Y.t.P52e1r, {})
                : Y.intl.format(Y.t["4UnIk9"], { guildName: f })
            : o
              ? Y.intl.format(Y.t.gFaKd1, { helpCenterLink: L.A.getArticleURL(G.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == f
                ? Y.intl.format(Y.t.SZ5ohR, { guildSubscriptionQuantity: a })
                : Y.intl.format(Y.t.GxK3Mv, { guildName: f, guildSubscriptionQuantity: a })),
        (0, i.jsxs)("div", {
            className: W.RP,
            children: [
                u
                    ? (0, i.jsx)(T.V1, {
                          className: W.ud,
                          nextScene: y,
                          onScenePlay: (e) => {
                              if (!x)
                                  switch (e) {
                                      case T.V1.Scenes.ENTRY:
                                          return v(T.V1.Scenes.IDLE);
                                      case T.V1.Scenes.IDLE:
                                          return v(T.V1.Scenes.SUCCESS);
                                      case T.V1.Scenes.SUCCESS:
                                          return S(!0), v(T.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(b.Ay, {
                    className: W.E,
                    theme: I,
                    premiumType: B.PremiumTypes.TIER_2,
                    type: V.Nc.has(c ?? V.he.UNKNOWN)
                        ? b.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : b.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: W.xR, children: t }),
                (0, i.jsx)(m.Button, {
                    variant: "primary",
                    text: p === k.uH.APPLE_PAYMENT_LINK ? Y.intl.string(Y.t.qXV2XU) : Y.intl.string(Y.t["/iTxgz"]),
                    onClick: n,
                }),
            ],
        })
    );
}
