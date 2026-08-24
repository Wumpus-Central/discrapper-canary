n.d(t, {
    U_: () => ef,
    yq: () => eE,
    LR: () => eT,
    $p: () => eN,
    cD: () => eP,
    O8: () => eS,
    Ct: () => ev,
    RO: () => ey,
});
var l,
    i = n(477900),
    r = n(582128),
    a = n(284009),
    s = n.n(a),
    o = n(17928),
    u = n(785007),
    c = n(331322),
    d = n(297264),
    m = n(834730),
    p = n(726656),
    C = n(463376),
    h = n(558620),
    f = n(87725),
    E = n(34188),
    S = n(661531),
    y = n(939249),
    I = n(398590),
    A = n(793574),
    P = n(688810),
    g = n(906199),
    v = n(361158),
    _ = n(976860),
    x = n(839534),
    T = n(403689),
    N = n(652215),
    b = n(375708),
    j = n(909753);
let R = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, P.Ay)(),
        { isHidden: l } = T.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        t(),
            (0, _.pX)(N.BVt.COLLECTIBLES_SHOP),
            (0, x.Cz)({ analyticsSource: A.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, I.jH)(),
            (0, v.dF)(g.Zt);
    }
    return l
        ? null
        : (0, i.jsxs)("div", {
              className: j.kL,
              children: [
                  (0, i.jsx)("div", {
                      className: j.Wk,
                      children: (0, i.jsx)(E.U, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: S.A.colors.ICON_DEFAULT,
                      }),
                  }),
                  (0, i.jsx)(m.E, {
                      variant: "text-sm/normal",
                      children: b.intl.format(b.t.twSHte, {
                          checkItOut: (e) => (0, i.jsx)(y.D, { className: j.nf, onClick: r, children: e }),
                      }),
                  }),
              ],
          });
};
var M = n(951305),
    O = n(222707),
    L = n(594832),
    k = n(97352),
    w = n(45938),
    U = n(975571),
    D = n(158045),
    G = n(580630),
    F = n(881489),
    B = n(774962),
    H = n(945810),
    W = (((l = {})[(l.CONTROL = 0)] = "CONTROL"), (l[(l.STEPPER = 1)] = "STEPPER"), l);
let Y = (0, H.mj)({ name: "2026-06-bulk-nitro-gifting", kind: "user", defaultConfig: 0, variations: { 0: 0, 1: 1 } });
var V = n(580194),
    K = n(202541);
let Z = new Set([K.gD.PREMIUM_MONTH_TIER_2, K.gD.PREMIUM_YEAR_TIER_2]);
var q = n(408278),
    z = n(834040),
    $ = n(663341),
    Q = n(503698),
    J = n.n(Q),
    X = n(346689);
function ee(e) {
    let { className: t, unitPrice: n } = e,
        l = (0, f.t4)((e) => e.quantity);
    return (0, i.jsx)("div", {
        className: J()(X.z, t),
        "aria-live": "polite",
        children: (0, i.jsxs)("div", {
            className: X.y,
            children: [
                (0, i.jsx)(m.E, {
                    variant: "text-md/medium",
                    color: "text-default",
                    children: b.intl.string(b.t["0YJHm5"]),
                }),
                (0, i.jsx)(m.E, {
                    tag: "span",
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: (0, G.$g)(n.amount * l, n.currency),
                }),
            ],
        }),
    });
}
var et = n(270115),
    en = n(649102);
function el(e) {
    let { unitPrice: t } = e,
        { quantity: n, setQuantity: l } = (0, f.t4)((e) => ({ quantity: e.quantity, setQuantity: e.setQuantity }));
    return (0, i.jsxs)("div", {
        className: en.kL,
        children: [
            (0, i.jsxs)("div", {
                className: en.W_,
                children: [
                    (0, i.jsx)("div", {
                        className: en.l_,
                        children: (0, i.jsx)(m.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: b.intl.string(et.default.WnnzG7),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: en.Im,
                        role: "group",
                        "aria-label": b.intl.string(et.default.WnnzG7),
                        children: [
                            (0, i.jsx)(q.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: z.MinusIcon,
                                onClick: () => l(n - 1),
                                "aria-label": b.intl.string(b.t["k+ohJm"]),
                                disabled: n <= f.y0,
                            }),
                            (0, i.jsx)("div", {
                                className: en.$5,
                                "aria-live": "polite",
                                children: (0, i.jsx)(m.E, {
                                    tag: "span",
                                    variant: "heading-xl/semibold",
                                    color: "text-default",
                                    children: n,
                                }),
                            }),
                            (0, i.jsx)(q.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: $.PlusLargeIcon,
                                onClick: () => l(n + 1),
                                "aria-label": b.intl.string(b.t.w8Sc4B),
                                disabled: n >= 50,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(ee, { unitPrice: t }),
        ],
    });
}
var ei = n(477421),
    er = n(35587),
    ea = n(511484),
    es = n(735164),
    eo = n(363476),
    eu = n(531506),
    ec = n(871181),
    ed = n(318007),
    em = n(958720),
    ep = n(285719);
n(26279);
var eC = n(818348),
    eh = n(656715);
function ef(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function eE(e, t) {
    let n = b.intl.string(b.t.BYa62u),
        l = b.intl.string(b.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case K.WT.YEAR:
                    return n;
                case K.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case K.pe.TIER_0:
            switch (r) {
                case K.pe.TIER_1:
                    return b.intl.string(b.t.q6mxDS);
                case K.pe.TIER_2:
                    return b.intl.string(b.t.seZVS0);
                default:
                    return i;
            }
        case K.pe.TIER_1:
            switch (r) {
                case K.pe.TIER_0:
                    return b.intl.string(b.t["7+u2zg"]);
                case K.pe.TIER_2:
                    return b.intl.string(b.t.NG2qcc);
                default:
                    return i;
            }
        case K.pe.TIER_2:
            switch (r) {
                case K.pe.TIER_0:
                case K.pe.TIER_1:
                    return b.intl.string(b.t["eB0/w9"]);
                case K.pe.TIER_2:
                    return e.interval === K.WT.MONTH
                        ? b.intl.formatToPlainString(b.t.RqUv86, { numFreeGuildSubscriptions: K.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function eS() {
    let { userTrialOffer: e } = (0, C.i)(),
        t = e?.subscriptionTrial,
        { daysCount: n, copy: l } = r.useMemo(
            () =>
                t?.interval === K.WT.DAY
                    ? t?.intervalCount > 7
                        ? { daysCount: 14, copy: b.intl.string(b.t.Z1V2cs) }
                        : { daysCount: 7, copy: b.intl.string(b.t.MI1rHs) }
                    : { daysCount: 30, copy: b.intl.string(b.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: l, userTrialOffer: e };
}
function ey(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: i, showTotal: a } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: m,
            activeSubscription: p,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: E, isEligibleForTrial: S, discountOffer: y } = (0, C.i)(),
        I = (0, ea.YJ)(y),
        {
            isGift: A,
            giftRecipient: P,
            selectedGiftStyle: g,
            customGiftMessage: v,
            setCustomGiftMessage: _,
            claimableRewards: x,
            setSelectedGiftingPromotionReward: T,
        } = (0, M.Pv)(),
        N = (0, h.A)(),
        b = (0, V.kz)(N, A && (0, w.Ik)(P), x),
        j = (0, L.tA)({ giftRecipient: P, isGift: A });
    s()(void 0 !== p, "should not be undefined");
    let [R, O] = (0, o.yK)([k.A], () => [null != p ? k.A.get(p.planId) : null, null != t ? k.A.get(t) : null]),
        U = E?.subscriptionTrial,
        G = E?.trialId === K.Dw,
        F = (0, er.Sq)() && !G,
        B = O ?? N,
        H = n ?? m;
    s()(null != H, "Price option has to be set");
    let W = y?.discount?.planIds,
        Y = null != y && l.some((e) => W?.includes(e)) && null != y.discount,
        Z = null != I && l.includes(I) ? (0, D.y8)(I, !1, A, H) : void 0,
        q = null != B ? B.id : void 0,
        z = null != q && l.includes(q);
    r.useEffect(() => {
        if (z) return void d(q, { shouldUpdateQuantity: !1 });
        let e = !A && null != I && l.includes(I) ? I : null;
        if (null == R || A) d(e ?? l[0]);
        else if (null != R) {
            let e = l.find((e) => e !== R.id);
            null != e && d(e);
        }
    }, [z, A, l, R, d, q, I]),
        r.useEffect(() => {
            b && null != x && x.length > 0 && T(x[0]);
        }, [x, T, b]);
    let { ref: $, ...Q } = (0, u._u)(),
        J = B?.id != null ? (0, D.y8)(B.id, !1, A, H) : void 0,
        { ipCountryCode: X } = (0, ei.A)(),
        ee = "HR" === X && null != J && J.currency === eC.Yr.EUR,
        et = (0, D.J$)(H.paymentSourceId),
        en = !A && (Y || (null != U && S && null != i)),
        { copy: el } = eS();
    return {
        skuId: c,
        selectedPlan: B,
        selectedPlanPrice: J,
        premiumSubscriptionPlan: R,
        premiumSubscription: p,
        thePriceOptions: H,
        hasSeenCollectiblesInSkuSelect: j,
        shouldShowTrialOrDiscountLayout: en,
        shouldShowHRKEuroWarning: ee,
        shouldShowTotalInSubscriptionFlow: !S && !Y && z && a,
        canContinue: z,
        isPrepaid: et,
        radioGroupRef: $,
        radioGroupProps: Q,
        isGift: A,
        giftRecipient: P,
        customGiftMessage: v,
        setCustomGiftMessage: _,
        selectedGiftStyle: g,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: S,
        userTrialOffer: E,
        trialPeriodCopy: el,
        isPlansEligibleForDiscount: Y,
        discountedPlanRegularPrice: Z,
    };
}
function eI(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: l, intervalType: r, className: a } = e;
    return (0, i.jsxs)("div", {
        className: a,
        children: [
            (0, i.jsx)("div", { className: eh.T }),
            (0, i.jsx)(es.Sd, {
                label: b.intl.string(b.t.txajQG),
                value: (0, i.jsx)(eo.A, {
                    price: l.amount,
                    currency: l.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eh.M3,
            }),
        ],
    });
}
function eA(e) {
    let {
        giftRecipient: t,
        customGiftMessage: n,
        setCustomGiftMessage: l,
        selectedGiftStyle: r,
        hasSeenCollectiblesInSkuSelect: a,
        isPrepaid: s,
        canContinue: o,
        selectedPlan: u,
        selectedPlanPrice: m,
        useCompactGiftComponents: p,
        showQuantityStepper: C,
        handleClose: h,
        showTotal: f,
        switchPlanSelectComponent: E,
        warningComponent: S,
    } = e;
    function y() {
        var e;
        return (
            (e =
                C && null != m
                    ? (0, i.jsxs)("div", { className: eh.SL, children: [E, (0, i.jsx)(el, { unitPrice: m })] })
                    : E),
            (0, i.jsxs)(c.B, {
                gap: 8,
                children: [
                    (0, i.jsx)(d.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: b.intl.string(b.t["3E5hXj"]),
                    }),
                    e,
                ],
            })
        );
    }
    return (0, w.Ik)(t)
        ? (0, i.jsxs)("div", {
              className: eh.mh,
              children: [
                  (0, i.jsx)("div", { className: eh.MU, children: null != r && (0, i.jsx)(ed.t, {}) }),
                  (0, i.jsxs)("div", {
                      className: eh.Tc,
                      children: [
                          (0, i.jsx)(ep.Z, { className: p ? eh.KW : void 0, giftRecipient: t }),
                          (function () {
                              if ((0, w.lo)(t) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != l)
                                  return (0, i.jsx)(ec.A, {
                                      className: eh.iX,
                                      innerClassName: eh.pt,
                                      onTextChange: (e) => l(e),
                                      pendingText: n,
                                      currentText: n,
                                  });
                          })(),
                          y(),
                          S,
                          !a && (0, i.jsx)(R, { onClose: h }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: eh.Du,
              children: [
                  (0, i.jsx)(ep.Z, { className: p ? eh.KW : void 0, giftRecipient: t }),
                  y(),
                  !C &&
                      o &&
                      f &&
                      null != u &&
                      null != m &&
                      (0, i.jsx)(eI, { selectedPlan: u, selectedPlanPrice: m, intervalType: null, isPrepaid: s }),
                  S,
                  !a && (0, i.jsx)(R, { onClose: h }),
              ],
          });
}
function eP(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === K.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [K.gD.PREMIUM_YEAR_TIER_0, K.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function eg(e) {
    let {
            isPrepaid: t,
            planOptions: n,
            radioGroupRef: l,
            selectedPlan: a,
            radioGroupProps: s,
            shouldShowTrialOrDiscountLayout: o,
            thePriceOptions: u,
            isPlansEligibleForDiscount: c,
            isEligibleForTrial: d,
        } = e,
        { currentPremiumSubscriptionForCheckout: m } = (0, f.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        p = r.useMemo(
            () =>
                n.map((n) => {
                    let { isCurrentPlan: l, disabled: r } = eP(m, n);
                    return (0, i.jsx)(
                        em.Ay,
                        {
                            planId: n,
                            selected: a?.id === n,
                            isCurrentPlan: l,
                            disabled: e.disabled || r,
                            premiumSubscription: m,
                            isPrepaid: t,
                            priceOptions: u,
                            shouldShowTrialOrDiscountLayout: o,
                            isEligibleForDiscount: c,
                            isEligibleForTrial: d,
                        },
                        n,
                    );
                }),
            [e.disabled, n, a, m, t, u, o, c, d],
        );
    return (0, i.jsx)("div", { ref: l, ...s, children: p });
}
function ev(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.trialId === K.Dw;
    return null == n
        ? null
        : i
          ? b.intl.format(b.t.nG95hA, { endDate: n })
          : b.intl.format(b.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function e_(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, i.jsx)(p.A, {
              message: b.intl.formatToPlainString(b.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, G.$g)(7.5345 * n.amount, eC.Yr.HRK),
              }),
          })
        : null;
}
function ex() {
    let e = (0, B.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, i.jsx)(p.A, {
        message: e
            ? b.intl.string(b.t.jHqrJW)
            : b.intl.format(b.t.Om31w8, { documentationLink: U.A.getArticleURL(N.MVz.LOCALIZED_PRICING) }),
    });
}
function eT(e) {
    let {
        selectedPlan: t,
        selectedPlanPrice: n,
        isPrepaid: l,
        shouldShowHRKEuroWarning: r,
        shouldShowTrialOrDiscountLayout: a,
        showTotal: s,
        shouldShowTotalInSubscriptionFlow: o,
        previewTotalSectionClassName: u,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o &&
                null != t &&
                null != n &&
                (0, i.jsx)(eI, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: l,
                }),
            e_({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, i.jsx)(ex, {}),
        ],
    });
}
function eN(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: l,
            priceOptions: r,
            planOptions: a,
            subscriptionPeriodEnd: s,
            showTotal: o = !0,
            useCompactGiftComponents: u,
            handleClose: c,
        } = e,
        {
            skuId: p,
            selectedPlan: C,
            premiumSubscription: h,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: S,
            isGift: y,
            thePriceOptions: I,
            isEligibleForTrial: A,
            giftRecipient: P,
            customGiftMessage: g,
            setCustomGiftMessage: v,
            selectedGiftStyle: _,
            isPlansEligibleForDiscount: x,
            discountedPlanRegularPrice: T,
            hasSeenCollectiblesInSkuSelect: N,
            userTrialOffer: j,
            shouldShowTrialOrDiscountLayout: R,
            isPrepaid: M,
            radioGroupRef: L,
            radioGroupProps: k,
            selectedPlanPrice: U,
            shouldShowHRKEuroWarning: D,
            shouldShowTotalInSubscriptionFlow: B,
            canContinue: H,
            trialPeriodCopy: V,
        } = ey({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: q, applicablePlan: z, discountOffer: $ } = (0, f.t4)((e) => e.premiumDiscountInfo),
        Q = (0, F.ds)(),
        J = Y.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        X =
            (function (e) {
                let { isGift: t, giftRecipient: n, selectedPlanId: l } = e;
                return t && null == n && (0, w.Ik)(n) && null != l && Z.has(l);
            })({ isGift: y, giftRecipient: P, selectedPlanId: C?.id }) && J === W.STEPPER;
    function ee() {
        return (0, i.jsx)(eg, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: k,
            isGift: y,
            isPrepaid: M,
            premiumSubscription: h,
            selectedPlan: C,
            thePriceOptions: I,
            shouldShowTrialOrDiscountLayout: R,
            isEligibleForTrial: A,
            isPlansEligibleForDiscount: x,
        });
    }
    let { showFractionalPremiumBanner: et, fractionalPremiumInfo: en } = (0, O._V)({
        premiumSubscription: h,
        selectedPlanId: n,
        planGroup: l,
        isGift: y,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (y)
        return (0, i.jsx)(eA, {
            giftRecipient: P,
            customGiftMessage: g,
            setCustomGiftMessage: v,
            selectedGiftStyle: _,
            hasSeenCollectiblesInSkuSelect: N,
            isPrepaid: M,
            canContinue: H,
            selectedPlan: C,
            selectedPlanPrice: U,
            useCompactGiftComponents: u,
            showQuantityStepper: X,
            handleClose: c,
            showTotal: o,
            switchPlanSelectComponent: ee(),
            warningComponent: e_({ shouldShowHRKEuroWarning: D, selectedPlanPrice: U }),
        });
    let el = !(A && et && !Q),
        ei = ef(E, { isEligibleForBOGOPromotion: S });
    return (0, i.jsxs)("div", {
        children: [
            et &&
                !Q &&
                (0, i.jsx)(eu.vi, {
                    fractionalPremiumInfo: en,
                    enablePremiumBrandRefresh: !0,
                    variant: A ? eu.uA.TRIAL : void 0,
                    trialPeriod: A ? V : void 0,
                    trialEnd: A ? s : void 0,
                }),
            ei &&
                !et &&
                (0, i.jsx)(m.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eh.G3,
                    children: eE(E, p),
                }),
            el &&
                (function (e, t, l) {
                    if (!R)
                        return (0, i.jsx)(d.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: eh.VZ,
                            children: b.intl.string(b.t.a19jpU),
                        });
                    if (t)
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(m.E, {
                                    variant: "text-sm/normal",
                                    className: eh.Tz,
                                    children: ev(e, { subscriptionPeriodEnd: s, trialPeriodCopy: V }),
                                }),
                                (0, i.jsx)("hr", { className: eh.RA }),
                            ],
                        });
                    if (l && null != q && null != T && null != z && n === z) {
                        let e = C?.interval === K.WT.YEAR,
                            t = (0, G.$g)(T.amount - q, T.currency),
                            n = (0, G.$g)(T.amount, T.currency);
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(m.E, {
                                    variant: "text-sm/normal",
                                    className: eh.Tz,
                                    children: e
                                        ? b.intl.format(b.t.ofweWu, {
                                              numYears: $?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : b.intl.format(b.t["nG7g/E"], {
                                              numMonths: $?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, i.jsx)("hr", { className: eh.RA }),
                            ],
                        });
                    }
                })(j, A, x),
            ee(),
            eT({
                selectedPlan: C,
                selectedPlanPrice: U,
                isPrepaid: M,
                shouldShowHRKEuroWarning: D,
                shouldShowTrialOrDiscountLayout: R,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: B,
            }),
        ],
    });
}
