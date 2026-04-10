n.d(e, { A: () => H, W: () => K }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    u = n.n(s),
    o = n(311907),
    c = n(827734),
    d = n(990078),
    m = n(397927),
    p = n(726656),
    x = n(793574),
    I = n(688810),
    y = n(531260),
    v = n(404374),
    f = n(156312),
    S = n(543767),
    g = n(881489),
    h = n(477421),
    A = n(234419),
    P = n(163538),
    T = n(796012),
    b = n(363476),
    j = n(659746),
    E = n(156962),
    C = n(72140),
    N = n(773669),
    _ = n(287809),
    R = n(97352),
    U = n(473145),
    D = n(975571),
    w = n(252424),
    L = n(927578),
    M = n(580630),
    O = n(599669),
    G = n(652215),
    k = n(26279),
    B = n(788868),
    W = n(818348),
    Y = n(985018),
    V = n(877985);
function H(t) {
    let {
            premiumSubscriptionPlan: e,
            numGuildBoosts: n,
            setNumGuildBoosts: l,
            setForceDisableSubmitButton: s,
            premiumSubscription: T,
            onClickPremiumSubscriptionLink: j,
            existingAvailableSlots: k = [],
            priceOptions: H,
        } = t,
        { setInvoicePreview: K } = (0, f.P5)(),
        q = (0, P.A)(),
        F = e.interval,
        J = e.intervalCount,
        $ = (0, o.bG)([R.A], () => R.A.getForSkuAndInterval((0, L.mH)(B.pe.GUILD), F, J)),
        Z = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        z = (0, y.A)({ forceFetch: !1 });
    u()(null != $, "Missing guildBoostingSubscriptionPlan");
    let Q = [{ planId: $.id, quantity: 1 }],
        X = T?.items.find((t) => t.planId === B.gD.PREMIUM_MONTH_TIER_2 || t.planId === B.gD.PREMIUM_YEAR_TIER_2);
    null != X && Q.push(X);
    let tt = T?.items.find((t) => t.planId === B.gD.PREMIUM_MONTH_GUILD || t.planId === B.gD.PREMIUM_YEAR_GUILD),
        te = null == q || !B.uJ.has(q) || null == tt,
        { analyticsLocations: tn } = (0, I.Ay)(),
        [ti, tr] = (0, S.Kq)({
            subscriptionId: T?.id,
            items: Q,
            renewal: !0,
            paymentSourceId: T?.paymentSourceId,
            currency: H.currency,
            preventFetch: te,
            analyticsLocations: tn,
            analyticsLocation: x.A.GUILD_BOOSTING_PLAN_SELECT,
        });
    r.useEffect(() => {
        K(ti);
    }, [K, ti]);
    let tl = !te && null == ti && null == tr,
        ta = (0, A.V)()?.subscription_trial?.sku_id === B.pe.TIER_2,
        ts = L.Ay.hasBoostDiscount(Z),
        tu = ti?.findInvoiceItemByPlanId($.id),
        to =
            null != tu
                ? { amount: tu.amount, tax: 0, taxInclusive: !0, currency: ti.currency }
                : L.Ay.getPrice($.id, ts, !1, H),
        tc = n * to.amount,
        td = (0, g.ds)() && L.Ay.hasBoostDiscount(Z) && null != T,
        tm =
            L.Ay.hasBoostDiscount(Z) &&
            null != T &&
            L.Ay.isPremiumAtLeast(L.Ay.getPremiumType(T.planId), B.PremiumTypes.TIER_1)
                ? Y.intl.format(Y.t.hf6YOY, { planName: L.Ay.getTierDisplayNameByPlanId(T.planId) })
                : Y.intl.format(ta ? Y.t.ba1L74 : Y.t.fkffDT, {
                      onPremiumSubscriptionClick: j,
                      discountPercentage: (0, w.l9)(N.default.locale, B.oX / 100),
                      freeSubscriptionCount: B.M4,
                  }),
        tp = k.filter((t) => (0, U.I5)(t)).length,
        tx = (0, L.J$)(H.paymentSourceId),
        { ipCountryCode: tI } = (0, h.A)(),
        ty = "HR" === tI && to.currency === W.Yr.EUR,
        tv = z.fractionalState === B.xc.FP_SUB_PAUSED;
    return (
        s(tl),
        (0, i.jsxs)("div", {
            children: [
                tv && (0, i.jsx)(E.vi, { fractionalPremiumInfo: z }),
                td && null != T
                    ? (0, i.jsx)(O.Ak, { text: (0, O.zT)(T.currentPeriodEnd) })
                    : (0, i.jsx)("div", { className: a()(V.hA, V.G3), children: Y.intl.string(Y.t.jNY1FO) }),
                k.length > 0
                    ? (0, i.jsxs)("div", {
                          className: V.Mv,
                          children: [
                              (0, i.jsx)(m._Jp, { className: V.T5, color: c.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      Y.intl.format(Y.t.F8xlhr, { slotCount: k.length }),
                                      tp > 0 && null != T
                                          ? (0, i.jsx)(d.m, {
                                                text: Y.intl.formatToPlainString(Y.t.SFpsCH, {
                                                    canceledCount: tp,
                                                    date: T.currentPeriodEnd,
                                                }),
                                                children: (0, i.jsx)(m.EpV, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    className: V.Y5,
                                                    color: c.A.unsafe_rawColors.YELLOW_300.css,
                                                }),
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      })
                    : null,
                (0, i.jsxs)("div", {
                    className: V.mP,
                    children: [
                        (0, i.jsxs)("div", {
                            className: V.E6,
                            children: [
                                (0, i.jsx)(m.lw3, {
                                    value: n,
                                    onChange: (t) => l(t),
                                    className: V.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30,
                                }),
                                (0, i.jsx)("div", {
                                    className: V.$0,
                                    children: tx
                                        ? (function (t) {
                                              let { intervalType: e, intervalCount: n = 1 } = t;
                                              return e === B.WT.YEAR
                                                  ? Y.intl.string(Y.t.YDpAzZ)
                                                  : e === B.WT.MONTH && 1 === n
                                                    ? Y.intl.string(Y.t["6ZR3By"])
                                                    : null;
                                          })({ intervalType: F, intervalCount: J })
                                        : Y.intl.string(Y.t.K9Bmze),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: a()(V.QK, { [V.S]: tl }),
                            children: tl
                                ? (0, i.jsx)(m.y$y, {})
                                : tx
                                  ? (0, M.$g)(to.amount, to.currency)
                                  : (function (t) {
                                        let { amount: e, currency: n, intervalType: i, intervalCount: r = 1 } = t,
                                            l = (0, M.$g)(e, n);
                                        return i === B.WT.YEAR
                                            ? Y.intl.formatToPlainString(Y.t["8M04YJ"], { price: l })
                                            : i === B.WT.MONTH && 1 === r
                                              ? Y.intl.formatToPlainString(Y.t.VStWCR, { price: l })
                                              : i === B.WT.MONTH && r > 1
                                                ? Y.intl.formatToPlainString(Y.t.xJvAFU, { price: l })
                                                : null;
                                    })({ intervalType: F, intervalCount: J, amount: to.amount, currency: to.currency }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", { className: V.J3 }),
                (0, i.jsxs)("div", {
                    className: V.mP,
                    children: [
                        (0, i.jsx)("div", { className: V.xp, children: Y.intl.string(Y.t.RtA7nR) }),
                        (0, i.jsx)("div", {
                            className: a()(V.__invalid_planSelectorSubtotalPrice, { [V.S]: tl }),
                            children: tl
                                ? (0, i.jsx)(m.y$y, {})
                                : (0, i.jsx)(b.A, {
                                      price: tc,
                                      currency: to.currency,
                                      intervalType: F,
                                      intervalCount: J,
                                      isPrepaidPaymentSource: tx,
                                  }),
                        }),
                    ],
                }),
                ty &&
                    (0, i.jsx)(p.A, {
                        message: Y.intl.formatToPlainString(Y.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, M.$g)(7.5345 * tc, W.Yr.HRK),
                        }),
                    }),
                (0, i.jsx)(p.A, {
                    message: Y.intl.format(Y.t.Om31w8, {
                        documentationLink: D.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                    }),
                }),
                td ? (0, i.jsx)(C.G, {}) : (0, i.jsx)(C.A, { text: tm, color: v.k0.PREMIUM_TIER_2 }),
            ],
        })
    );
}
function K(t) {
    let e,
        {
            onClose: n,
            guild: l,
            guildBoostQuantity: a,
            isTransfer: s = !1,
            withAnimation: u = !0,
            paymentSourceType: o,
            didPurchaseOnFractionalPremium: c = !1,
            fallbackGuildName: d,
            customCheckoutFlow: p,
        } = t,
        { theme: x } = (0, m.wRf)(),
        [I, y] = r.useState(T.V1.Scenes.ENTRY),
        [v, f] = r.useState(!1),
        S = l?.name ?? d;
    return (
        (e = s
            ? null == S
                ? Y.intl.format(Y.t.P52e1r, {})
                : Y.intl.format(Y.t["4UnIk9"], { guildName: S })
            : c
              ? Y.intl.format(Y.t.gFaKd1, { helpCenterLink: D.A.getArticleURL(G.MVz.FRACTIONAL_PREMIUM_ABOUT) })
              : null == S
                ? Y.intl.format(Y.t.SZ5ohR, { guildSubscriptionQuantity: a })
                : Y.intl.format(Y.t.GxK3Mv, { guildName: S, guildSubscriptionQuantity: a })),
        (0, i.jsxs)("div", {
            className: V.RP,
            children: [
                u
                    ? (0, i.jsx)(T.V1, {
                          className: V.ud,
                          nextScene: I,
                          onScenePlay: (t) => {
                              if (!v)
                                  switch (t) {
                                      case T.V1.Scenes.ENTRY:
                                          return y(T.V1.Scenes.IDLE);
                                      case T.V1.Scenes.IDLE:
                                          return y(T.V1.Scenes.SUCCESS);
                                      case T.V1.Scenes.SUCCESS:
                                          return f(!0), y(T.V1.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1,
                      })
                    : null,
                (0, i.jsx)(j.Ay, {
                    className: V.E,
                    theme: x,
                    premiumType: B.PremiumTypes.TIER_2,
                    type: W.Nc.has(o ?? W.he.UNKNOWN)
                        ? j.Ay.Types.PREMIUM_PAYMENT_STARTED
                        : j.Ay.Types.GUILD_BOOST_APPLIED,
                }),
                (0, i.jsx)("div", { className: V.xR, children: e }),
                (0, i.jsx)(m.Button, {
                    variant: "primary",
                    text:
                        p === k.uH.MOBILE_WEB_REDIRECT_CHECKOUT
                            ? Y.intl.string(Y.t.sRApon)
                            : Y.intl.string(Y.t["/iTxgz"]),
                    onClick: n,
                }),
            ],
        })
    );
}
