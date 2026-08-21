n.d(t, {
    U_: () => ef,
    yq: () => eE,
    LR: () => ex,
    $p: () => eN,
    cD: () => eI,
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
    p = n(834730),
    m = n(726656),
    h = n(463376),
    C = n(558620),
    f = n(87725),
    E = n(34188),
    S = n(661531),
    y = n(939249),
    A = n(398590),
    P = n(793574),
    I = n(688810),
    g = n(906199),
    v = n(361158),
    _ = n(976860),
    T = n(839534),
    x = n(403689),
    N = n(652215),
    b = n(375708),
    R = n(909753);
let j = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, I.Ay)(),
        { isHidden: l } = x.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        t(),
            (0, _.pX)(N.BVt.COLLECTIBLES_SHOP),
            (0, T.Cz)({ analyticsSource: P.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, A.jH)(),
            (0, v.dF)(g.Zt);
    }
    return l
        ? null
        : (0, i.jsxs)("div", {
              className: R.kL,
              children: [
                  (0, i.jsx)("div", {
                      className: R.Wk,
                      children: (0, i.jsx)(E.U, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: S.A.colors.ICON_DEFAULT,
                      }),
                  }),
                  (0, i.jsx)(p.E, {
                      variant: "text-sm/normal",
                      children: b.intl.format(b.t.twSHte, {
                          checkItOut: (e) => (0, i.jsx)(y.D, { className: R.nf, onClick: r, children: e }),
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
    Y = (((l = {})[(l.CONTROL = 0)] = "CONTROL"), (l[(l.STEPPER = 1)] = "STEPPER"), l);
let W = (0, H.mj)({ name: "2026-06-bulk-nitro-gifting", kind: "user", defaultConfig: 0, variations: { 0: 0, 1: 1 } });
var V = n(580194),
    K = n(202541);
let q = new Set([K.gD.PREMIUM_MONTH_TIER_2, K.gD.PREMIUM_YEAR_TIER_2]);
var Z = n(408278),
    z = n(834040),
    Q = n(663341),
    $ = n(503698),
    J = n.n($),
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
                (0, i.jsx)(p.E, {
                    variant: "text-md/medium",
                    color: "text-default",
                    children: b.intl.string(b.t["0YJHm5"]),
                }),
                (0, i.jsx)(p.E, {
                    tag: "span",
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: (0, G.$g)(n.amount * l, n.currency),
                }),
            ],
        }),
    });
}
var et = n(715138),
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
                        children: (0, i.jsx)(p.E, {
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
                            (0, i.jsx)(Z.K, {
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
                                children: (0, i.jsx)(p.E, {
                                    tag: "span",
                                    variant: "heading-xl/semibold",
                                    color: "text-default",
                                    children: n,
                                }),
                            }),
                            (0, i.jsx)(Z.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: Q.PlusLargeIcon,
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
    ep = n(958720),
    em = n(285719);
n(26279);
var eh = n(818348),
    eC = n(656715);
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
    let { userTrialOffer: e } = (0, h.i)(),
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
            checkoutPriceOptions: p,
            activeSubscription: m,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: E, isEligibleForTrial: S, discountOffer: y } = (0, h.i)(),
        A = (0, ea.YJ)(y),
        {
            isGift: P,
            giftRecipient: I,
            selectedGiftStyle: g,
            customGiftMessage: v,
            setCustomGiftMessage: _,
            claimableRewards: T,
            setSelectedGiftingPromotionReward: x,
        } = (0, M.Pv)(),
        N = (0, C.A)(),
        b = (0, V.kz)(N, P && (0, w.Ik)(I), T),
        R = (0, L.tA)({ giftRecipient: I, isGift: P });
    s()(void 0 !== m, "should not be undefined");
    let [j, O] = (0, o.yK)([k.A], () => [null != m ? k.A.get(m.planId) : null, null != t ? k.A.get(t) : null]),
        U = E?.subscriptionTrial,
        G = E?.trialId === K.Dw,
        F = (0, er.Sq)() && !G,
        B = O ?? N,
        H = n ?? p;
    s()(null != H, "Price option has to be set");
    let Y = y?.discount?.planIds,
        W = null != y && l.some((e) => Y?.includes(e)) && null != y.discount,
        q = null != A && l.includes(A) ? (0, D.y8)(A, !1, P, H) : void 0,
        Z = null != B ? B.id : void 0,
        z = null != Z && l.includes(Z);
    r.useEffect(() => {
        if (z) return void d(Z, { shouldUpdateQuantity: !1 });
        let e = !P && null != A && l.includes(A) ? A : null;
        if (null == j || P) d(e ?? l[0]);
        else if (null != j) {
            let e = l.find((e) => e !== j.id);
            null != e && d(e);
        }
    }, [z, P, l, j, d, Z, A]),
        r.useEffect(() => {
            b && null != T && T.length > 0 && x(T[0]);
        }, [T, x, b]);
    let { ref: Q, ...$ } = (0, u._u)(),
        J = B?.id != null ? (0, D.y8)(B.id, !1, P, H) : void 0,
        { ipCountryCode: X } = (0, ei.A)(),
        ee = "HR" === X && null != J && J.currency === eh.Yr.EUR,
        et = (0, D.J$)(H.paymentSourceId),
        en = !P && (W || (null != U && S && null != i)),
        { copy: el } = eS();
    return {
        skuId: c,
        selectedPlan: B,
        selectedPlanPrice: J,
        premiumSubscriptionPlan: j,
        premiumSubscription: m,
        thePriceOptions: H,
        hasSeenCollectiblesInSkuSelect: R,
        shouldShowTrialOrDiscountLayout: en,
        shouldShowHRKEuroWarning: ee,
        shouldShowTotalInSubscriptionFlow: !S && !W && z && a,
        canContinue: z,
        isPrepaid: et,
        radioGroupRef: Q,
        radioGroupProps: $,
        isGift: P,
        giftRecipient: I,
        customGiftMessage: v,
        setCustomGiftMessage: _,
        selectedGiftStyle: g,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: S,
        userTrialOffer: E,
        trialPeriodCopy: el,
        isPlansEligibleForDiscount: W,
        discountedPlanRegularPrice: q,
    };
}
function eA(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: l, intervalType: r, className: a } = e;
    return (0, i.jsxs)("div", {
        className: a,
        children: [
            (0, i.jsx)("div", { className: eC.T }),
            (0, i.jsx)(es.Sd, {
                label: b.intl.string(b.t.txajQG),
                value: (0, i.jsx)(eo.A, {
                    price: l.amount,
                    currency: l.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eC.M3,
            }),
        ],
    });
}
function eP(e) {
    let {
        giftRecipient: t,
        customGiftMessage: n,
        setCustomGiftMessage: l,
        selectedGiftStyle: r,
        hasSeenCollectiblesInSkuSelect: a,
        isPrepaid: s,
        canContinue: o,
        selectedPlan: u,
        selectedPlanPrice: p,
        useCompactGiftComponents: m,
        showQuantityStepper: h,
        handleClose: C,
        showTotal: f,
        switchPlanSelectComponent: E,
        warningComponent: S,
    } = e;
    function y() {
        var e;
        return (
            (e =
                h && null != p
                    ? (0, i.jsxs)("div", { className: eC.SL, children: [E, (0, i.jsx)(el, { unitPrice: p })] })
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
              className: eC.mh,
              children: [
                  (0, i.jsx)("div", { className: eC.MU, children: null != r && (0, i.jsx)(ed.t, {}) }),
                  (0, i.jsxs)("div", {
                      className: eC.Tc,
                      children: [
                          (0, i.jsx)(em.Z, { className: m ? eC.KW : void 0, giftRecipient: t }),
                          (function () {
                              if ((0, w.lo)(t) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != l)
                                  return (0, i.jsx)(ec.A, {
                                      className: eC.iX,
                                      innerClassName: eC.pt,
                                      onTextChange: (e) => l(e),
                                      pendingText: n,
                                      currentText: n,
                                  });
                          })(),
                          y(),
                          S,
                          !a && (0, i.jsx)(j, { onClose: C }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: eC.Du,
              children: [
                  (0, i.jsx)(em.Z, { className: m ? eC.KW : void 0, giftRecipient: t }),
                  y(),
                  !h &&
                      o &&
                      f &&
                      null != u &&
                      null != p &&
                      (0, i.jsx)(eA, { selectedPlan: u, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                  S,
                  !a && (0, i.jsx)(j, { onClose: C }),
              ],
          });
}
function eI(e, t) {
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
        { currentPremiumSubscriptionForCheckout: p } = (0, f.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        m = r.useMemo(
            () =>
                n.map((n) => {
                    let { isCurrentPlan: l, disabled: r } = eI(p, n);
                    return (0, i.jsx)(
                        ep.Ay,
                        {
                            planId: n,
                            selected: a?.id === n,
                            isCurrentPlan: l,
                            disabled: e.disabled || r,
                            premiumSubscription: p,
                            isPrepaid: t,
                            priceOptions: u,
                            shouldShowTrialOrDiscountLayout: o,
                            isEligibleForDiscount: c,
                            isEligibleForTrial: d,
                        },
                        n,
                    );
                }),
            [e.disabled, n, a, p, t, u, o, c, d],
        );
    return (0, i.jsx)("div", { ref: l, ...s, children: m });
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
        ? (0, i.jsx)(m.A, {
              message: b.intl.formatToPlainString(b.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, G.$g)(7.5345 * n.amount, eh.Yr.HRK),
              }),
          })
        : null;
}
function eT() {
    let e = (0, B.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, i.jsx)(m.A, {
        message: e
            ? b.intl.string(b.t.jHqrJW)
            : b.intl.format(b.t.Om31w8, { documentationLink: U.A.getArticleURL(N.MVz.LOCALIZED_PRICING) }),
    });
}
function ex(e) {
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
                (0, i.jsx)(eA, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: l,
                }),
            e_({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, i.jsx)(eT, {}),
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
            skuId: m,
            selectedPlan: h,
            premiumSubscription: C,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: S,
            isGift: y,
            thePriceOptions: A,
            isEligibleForTrial: P,
            giftRecipient: I,
            customGiftMessage: g,
            setCustomGiftMessage: v,
            selectedGiftStyle: _,
            isPlansEligibleForDiscount: T,
            discountedPlanRegularPrice: x,
            hasSeenCollectiblesInSkuSelect: N,
            userTrialOffer: R,
            shouldShowTrialOrDiscountLayout: j,
            isPrepaid: M,
            radioGroupRef: L,
            radioGroupProps: k,
            selectedPlanPrice: U,
            shouldShowHRKEuroWarning: D,
            shouldShowTotalInSubscriptionFlow: B,
            canContinue: H,
            trialPeriodCopy: V,
        } = ey({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: Z, applicablePlan: z, discountOffer: Q } = (0, f.t4)((e) => e.premiumDiscountInfo),
        $ = (0, F.ds)(),
        J = W.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        X =
            (function (e) {
                let { isGift: t, giftRecipient: n, selectedPlanId: l } = e;
                return t && null == n && (0, w.Ik)(n) && null != l && q.has(l);
            })({ isGift: y, giftRecipient: I, selectedPlanId: h?.id }) && J === Y.STEPPER;
    function ee() {
        return (0, i.jsx)(eg, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: k,
            isGift: y,
            isPrepaid: M,
            premiumSubscription: C,
            selectedPlan: h,
            thePriceOptions: A,
            shouldShowTrialOrDiscountLayout: j,
            isEligibleForTrial: P,
            isPlansEligibleForDiscount: T,
        });
    }
    let { showFractionalPremiumBanner: et, fractionalPremiumInfo: en } = (0, O._V)({
        premiumSubscription: C,
        selectedPlanId: n,
        planGroup: l,
        isGift: y,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (y)
        return (0, i.jsx)(eP, {
            giftRecipient: I,
            customGiftMessage: g,
            setCustomGiftMessage: v,
            selectedGiftStyle: _,
            hasSeenCollectiblesInSkuSelect: N,
            isPrepaid: M,
            canContinue: H,
            selectedPlan: h,
            selectedPlanPrice: U,
            useCompactGiftComponents: u,
            showQuantityStepper: X,
            handleClose: c,
            showTotal: o,
            switchPlanSelectComponent: ee(),
            warningComponent: e_({ shouldShowHRKEuroWarning: D, selectedPlanPrice: U }),
        });
    let el = !(P && et && !$),
        ei = ef(E, { isEligibleForBOGOPromotion: S });
    return (0, i.jsxs)("div", {
        children: [
            et &&
                !$ &&
                (0, i.jsx)(eu.vi, {
                    fractionalPremiumInfo: en,
                    enablePremiumBrandRefresh: !0,
                    variant: P ? eu.uA.TRIAL : void 0,
                    trialPeriod: P ? V : void 0,
                    trialEnd: P ? s : void 0,
                }),
            ei &&
                !et &&
                (0, i.jsx)(p.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eC.G3,
                    children: eE(E, m),
                }),
            el &&
                (function (e, t, l) {
                    if (!j)
                        return (0, i.jsx)(d.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: eC.VZ,
                            children: b.intl.string(b.t.a19jpU),
                        });
                    if (t)
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    className: eC.Tz,
                                    children: ev(e, { subscriptionPeriodEnd: s, trialPeriodCopy: V }),
                                }),
                                (0, i.jsx)("hr", { className: eC.RA }),
                            ],
                        });
                    if (l && null != Z && null != x && null != z && n === z) {
                        let e = h?.interval === K.WT.YEAR,
                            t = (0, G.$g)(x.amount - Z, x.currency),
                            n = (0, G.$g)(x.amount, x.currency);
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    className: eC.Tz,
                                    children: e
                                        ? b.intl.format(b.t.ofweWu, {
                                              numYears: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : b.intl.format(b.t["nG7g/E"], {
                                              numMonths: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, i.jsx)("hr", { className: eC.RA }),
                            ],
                        });
                    }
                })(R, P, T),
            ee(),
            ex({
                selectedPlan: h,
                selectedPlanPrice: U,
                isPrepaid: M,
                shouldShowHRKEuroWarning: D,
                shouldShowTrialOrDiscountLayout: j,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: B,
            }),
        ],
    });
}
