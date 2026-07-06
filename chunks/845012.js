n.d(t, { X: () => v });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(834730),
    o = n(17928),
    u = n(854354),
    c = n(944355),
    d = n(650170),
    p = n(986883),
    m = n(410516),
    h = n(186223),
    C = n(361597),
    E = n(135314),
    A = n(773669),
    f = n(97352),
    S = n(252424),
    y = n(428262),
    P = n(580630),
    I = n(202541),
    T = n(375708),
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
            isInPlanSelectStep: R,
            headingSubText: b,
            planPricesLoading: M = !1,
        } = e,
        {
            selectedPlan: O,
            selectedPlanPrice: j,
            isPrepaid: L,
            isPlansEligibleForDiscount: D,
            shouldShowHRKEuroWarning: U,
            shouldShowTotalInSubscriptionFlow: w,
            shouldShowTrialOrDiscountLayout: k,
            userTrialOffer: G,
            trialPeriodCopy: F,
            isEligibleForTrial: B,
            isEligibleForBOGOPromotion: Y,
            premiumSubscriptionPlan: H,
            thePriceOptions: W,
            skuId: V,
        } = (0, C.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: v, showTotal: R }),
        { shouldShowPremiumSwitchPlanSelectText: K, premiumSwitchPlanSelectText: Z } = i.useMemo(() => {
            let e = (0, C.U_)(H, { isEligibleForBOGOPromotion: Y });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, C.yq)(H, V) : null,
            };
        }, [H, Y, V]),
        q = i.useMemo(
            () => (R && B ? (0, C.Ct)(G, { subscriptionPeriodEnd: v, trialPeriodCopy: F }) : b),
            [R, B, G, v, F, b],
        ),
        z = i.useMemo(() => (r.length > 0 ? I.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: $ } = (0, d.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
        X = i.useCallback(
            (e) => {
                $(e.value);
            },
            [$],
        ),
        Q = (function (e, t) {
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
                    isGift: R,
                    discountInfo: b,
                } = (0, d.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                M = (0, o.bG)([A.default], () => A.default.locale),
                { discountOffer: O, discountAmountOff: j, applicablePlan: L } = b,
                D = (0, p.DQ)({ location: "PremiumUnifiedCheckoutPlanSelect" });
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: d, disabled: A } = (0, C.cD)(N, e),
                            b = f.A.get(e);
                        a()(null != b, "Missing subscriptionPlan");
                        let U = (0, y.L_)({ planId: e, isGift: R, priceOptions: s, subscriptionPlan: b }),
                            w = null != U && null == O,
                            k = (0, y.y8)(e, !1, R, s),
                            G = (0, E.gS)(N, b, {
                                userLocale: M,
                                isEligibleForBOGOPromotion: g,
                                shouldShowSavingsPercent: w,
                                isGift: R,
                                planId: e,
                                savingsPercent: U,
                                priceOptions: s,
                                annualPlanCheckoutCopyTreatment: D,
                                isEligibleForTrial: c,
                            }),
                            F = (0, h.is)({
                                treatment: D,
                                targetSubscriptionPlan: b,
                                isGift: R,
                                shouldShowSavingsPercent: w,
                                isEligibleForTrial: c,
                            }),
                            B = (function (e, t) {
                                let { isEligibleForTrial: n } = t;
                                return n
                                    ? T.intl.formatToPlainString(T.t.hXcaLT, {
                                          price: (0, P.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, P.$g)(e.amount, e.currency);
                            })(k, { isEligibleForTrial: c }),
                            Y = B,
                            H = r && null != L && e === L ? j : null;
                        if (
                            (null != O &&
                                !c &&
                                ((0, m.p2)(O)
                                    ? b.interval === I.WT.YEAR
                                        ? (t = T.intl.format(_.default.ODKoJd, { percent: U ?? "" }))
                                        : b.interval === I.WT.MONTH &&
                                          (null != H &&
                                              (Y = T.intl.format(T.t.hXcaLT, {
                                                  price: (0, P.$g)(k.amount - H, k.currency),
                                              })),
                                          (t = T.intl.format(_.default.JsSin7, {
                                              priceRate: (0, P.CE)(B, b.interval, b.intervalCount),
                                              intervalCount: O.getFullIntervalCount(),
                                          })))
                                    : (0, m.hm)(O) &&
                                      b.interval === I.WT.YEAR &&
                                      null != H &&
                                      ((Y = T.intl.format(T.t.hXcaLT, { price: (0, P.$g)(k.amount - H, k.currency) })),
                                      (i = B),
                                      (t = T.intl.format(T.t.VZ8Tvh, { regularPrice: B })),
                                      (o = T.intl.formatToPlainString(_.default.nsG1jw, {
                                          savingsText: (0, S.l9)(M, parseInt(O.discount.amount) / 100),
                                      })))),
                            v &&
                                (x && c
                                    ? (t = (0, E.O7)(b, k))
                                    : d
                                      ? (t = T.intl.string(T.t.ymSxhy))
                                      : "string" != typeof G || F || (t = G)),
                            F && D === p.qS.AMOUNT_OFF_WITH_MONTHLY_RATE && !d)
                        ) {
                            let e = (0, h.cg)(b, R, s);
                            null != e && (t = e);
                        }
                        let W = (function (e) {
                            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
                            return t ?? n ?? l;
                        })({
                            promoTextOverride: o,
                            overrideBadgeText: null != G && "object" == typeof G ? (G.type, G.text) : null,
                            defaultValue: (0, u.Nc)({
                                subscriptionPlan: b,
                                userLocale: M,
                                discountOffer: O,
                                yearlyPercentSavings: U,
                                shouldHideYearlySavingsBadge: null != N || null != O,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, u.YR)(b.interval, b.intervalCount, !0),
                            subText: l ? T.intl.string(T.t.ZTNur7) : Y,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : W,
                            isDisabled: A || n,
                        };
                    }),
                [l, e, r, s, c, g, v, x, N, j, L, O, R, M, n, D],
            );
        })(r, {
            disabled: N,
            planPricesLoading: M,
            isEligibleForDiscount: D,
            priceOptions: W,
            isEligibleForTrial: B,
            isEligibleForBOGOPromotion: Y,
            showPlanStatusSubText: x,
            isInPlanSelectStep: R,
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
                      planRadioOptions: Q,
                      value: O?.id ?? "",
                      onChange: X,
                  }),
                  R
                      ? (0, C.LR)({
                            selectedPlan: O,
                            selectedPlanPrice: j,
                            isPrepaid: L,
                            shouldShowHRKEuroWarning: U,
                            shouldShowTrialOrDiscountLayout: k,
                            showTotal: R,
                            shouldShowTotalInSubscriptionFlow: w,
                            previewTotalSectionClassName: g.$,
                        })
                      : null,
              ],
          });
}
