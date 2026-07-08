n.d(t, { X: () => v });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(834730),
    o = n(17928),
    u = n(854354),
    c = n(944355),
    d = n(6938),
    p = n(986883),
    m = n(410516),
    h = n(186223),
    C = n(361597),
    E = n(135314),
    A = n(773669),
    f = n(97352),
    y = n(252424),
    S = n(428262),
    P = n(580630),
    T = n(202541),
    I = n(375708),
    _ = n(327105),
    g = n(556208);
function v(e) {
    let {
            selectedPlanId: t,
            priceOptions: n,
            planOptions: r,
            subscriptionPeriodEnd: v,
            showPlanStatusSubText: x,
            disabled: N = !1,
            isInPlanSelectStep: b,
            headingSubText: R,
            planPricesLoading: M = !1,
        } = e,
        {
            selectedPlan: O,
            selectedPlanPrice: j,
            isPrepaid: L,
            isPlansEligibleForDiscount: w,
            shouldShowHRKEuroWarning: D,
            shouldShowTotalInSubscriptionFlow: k,
            shouldShowTrialOrDiscountLayout: U,
            userTrialOffer: G,
            trialPeriodCopy: F,
            isEligibleForTrial: B,
            isEligibleForBOGOPromotion: Y,
            premiumSubscriptionPlan: H,
            thePriceOptions: W,
            skuId: V,
        } = (0, C.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: v, showTotal: b }),
        { shouldShowPremiumSwitchPlanSelectText: K, premiumSwitchPlanSelectText: Z } = i.useMemo(() => {
            let e = (0, C.U_)(H, { isEligibleForBOGOPromotion: Y });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, C.yq)(H, V) : null,
            };
        }, [H, Y, V]),
        q = i.useMemo(
            () => (b && B ? (0, C.Ct)(G, { subscriptionPeriodEnd: v, trialPeriodCopy: F }) : R),
            [b, B, G, v, F, R],
        ),
        z = i.useMemo(() => (r.length > 0 ? T.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: $ } = (0, d.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
        Q = i.useCallback(
            (e) => {
                $(e.value);
            },
            [$],
        ),
        J = (function (e, t) {
            let {
                    disabled: n,
                    planPricesLoading: l,
                    isEligibleForDiscount: r,
                    priceOptions: s,
                    isEligibleForTrial: c,
                    isEligibleForBOGOPromotion: g,
                    showPlanStatusSubText: v,
                    isInPlanSelectStep: x,
                } = t,
                {
                    currentPremiumSubscriptionForCheckout: N,
                    isGift: b,
                    discountInfo: R,
                } = (0, d.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                M = (0, o.bG)([A.default], () => A.default.locale),
                { discountOffer: O, discountAmountOff: j, applicablePlan: L } = R,
                w = (0, p.DQ)({ location: "PremiumUnifiedCheckoutPlanSelect" });
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: d, disabled: A } = (0, C.cD)(N, e),
                            R = f.A.get(e);
                        a()(null != R, "Missing subscriptionPlan");
                        let D = (0, S.L_)({ planId: e, isGift: b, priceOptions: s, subscriptionPlan: R }),
                            k = null != D && null == O,
                            U = (0, S.y8)(e, !1, b, s),
                            G = (0, E.gS)(N, R, {
                                userLocale: M,
                                isEligibleForBOGOPromotion: g,
                                shouldShowSavingsPercent: k,
                                isGift: b,
                                planId: e,
                                savingsPercent: D,
                                priceOptions: s,
                                annualPlanCheckoutCopyTreatment: w,
                                isEligibleForTrial: c,
                            }),
                            F = (0, h.is)({
                                treatment: w,
                                targetSubscriptionPlan: R,
                                isGift: b,
                                shouldShowSavingsPercent: k,
                                isEligibleForTrial: c,
                            }),
                            B = (function (e, t) {
                                let { isEligibleForTrial: n } = t;
                                return n
                                    ? I.intl.formatToPlainString(I.t.hXcaLT, {
                                          price: (0, P.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, P.$g)(e.amount, e.currency);
                            })(U, { isEligibleForTrial: c }),
                            Y = B,
                            H = r && null != L && e === L ? j : null;
                        if (
                            (null != O &&
                                !c &&
                                ((0, m.p2)(O)
                                    ? R.interval === T.WT.YEAR
                                        ? (t = I.intl.format(_.default.ODKoJd, { percent: D ?? "" }))
                                        : R.interval === T.WT.MONTH &&
                                          (null != H &&
                                              (Y = I.intl.format(I.t.hXcaLT, {
                                                  price: (0, P.$g)(U.amount - H, U.currency),
                                              })),
                                          (t = I.intl.format(_.default.JsSin7, {
                                              priceRate: (0, P.CE)(B, R.interval, R.intervalCount),
                                              intervalCount: O.getFullIntervalCount(),
                                          })))
                                    : (0, m.hm)(O) &&
                                      R.interval === T.WT.YEAR &&
                                      null != H &&
                                      ((Y = I.intl.format(I.t.hXcaLT, { price: (0, P.$g)(U.amount - H, U.currency) })),
                                      (i = B),
                                      (t = I.intl.format(I.t.VZ8Tvh, { regularPrice: B })),
                                      (o = I.intl.formatToPlainString(_.default.nsG1jw, {
                                          savingsText: (0, y.l9)(M, parseInt(O.discount.amount) / 100),
                                      })))),
                            v &&
                                (x && c
                                    ? (t = (0, E.O7)(R, U))
                                    : d
                                      ? (t = I.intl.string(I.t.ymSxhy))
                                      : "string" != typeof G || F || (t = G)),
                            F && w === p.qS.AMOUNT_OFF_WITH_MONTHLY_RATE && !d)
                        ) {
                            let e = (0, h.cg)(R, b, s);
                            null != e && (t = e);
                        }
                        let W = (function (e) {
                            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
                            return t ?? n ?? l;
                        })({
                            promoTextOverride: o,
                            overrideBadgeText: null != G && "object" == typeof G ? (G.type, G.text) : null,
                            defaultValue: (0, u.Nc)({
                                subscriptionPlan: R,
                                userLocale: M,
                                discountOffer: O,
                                yearlyPercentSavings: D,
                                shouldHideYearlySavingsBadge: null != N || null != O || g,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, u.YR)(R.interval, R.intervalCount, !0),
                            subText: l ? I.intl.string(I.t.ZTNur7) : Y,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : W,
                            isDisabled: A || n,
                        };
                    }),
                [l, e, r, s, c, g, v, x, N, j, L, O, b, M, n, w],
            );
        })(r, {
            disabled: N,
            planPricesLoading: M,
            isEligibleForDiscount: w,
            priceOptions: W,
            isEligibleForTrial: B,
            isEligibleForBOGOPromotion: Y,
            showPlanStatusSubText: x,
            isInPlanSelectStep: b,
        });
    return null == z
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  K &&
                      (0, l.jsx)(s.E, { variant: "text-md/medium", color: "text-subtle", className: g.S, children: Z }),
                  (0, l.jsx)(c.me, {
                      headingComponent: (0, l.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: z }),
                      headingSubText: q,
                      planRadioOptions: J,
                      value: O?.id ?? "",
                      onChange: Q,
                  }),
                  b
                      ? (0, C.LR)({
                            selectedPlan: O,
                            selectedPlanPrice: j,
                            isPrepaid: L,
                            shouldShowHRKEuroWarning: D,
                            shouldShowTrialOrDiscountLayout: U,
                            showTotal: b,
                            shouldShowTotalInSubscriptionFlow: k,
                            previewTotalSectionClassName: g.$,
                        })
                      : null,
              ],
          });
}
