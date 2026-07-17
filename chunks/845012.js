n.d(t, { X: () => x });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(834730),
    o = n(17928),
    u = n(854354),
    c = n(944355),
    d = n(316915),
    p = n(986883),
    m = n(410516),
    h = n(186223),
    C = n(361597),
    E = n(135314),
    f = n(773669),
    A = n(97352),
    S = n(252424),
    y = n(428262),
    P = n(580630),
    I = n(202541),
    _ = n(375708),
    T = n(327105),
    g = n(556208);
function x(e) {
    let {
            selectedPlanId: t,
            priceOptions: n,
            planOptions: r,
            subscriptionPeriodEnd: x,
            showPlanStatusSubText: v,
            disabled: N = !1,
            isInPlanSelectStep: M,
            headingSubText: R,
            planPricesLoading: b = !1,
        } = e,
        {
            selectedPlan: j,
            selectedPlanPrice: O,
            isPrepaid: L,
            isPlansEligibleForDiscount: w,
            shouldShowHRKEuroWarning: k,
            shouldShowTotalInSubscriptionFlow: D,
            shouldShowTrialOrDiscountLayout: U,
            userTrialOffer: G,
            trialPeriodCopy: F,
            isEligibleForTrial: H,
            isEligibleForBOGOPromotion: B,
            premiumSubscriptionPlan: Y,
            thePriceOptions: W,
            skuId: V,
        } = (0, C.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: x, showTotal: M }),
        { shouldShowPremiumSwitchPlanSelectText: K, premiumSwitchPlanSelectText: Z } = i.useMemo(() => {
            let e = (0, C.U_)(Y, { isEligibleForBOGOPromotion: B });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, C.yq)(Y, V) : null,
            };
        }, [Y, B, V]),
        q = i.useMemo(
            () => (M && H ? (0, C.Ct)(G, { subscriptionPeriodEnd: x, trialPeriodCopy: F }) : R),
            [M, H, G, x, F, R],
        ),
        z = i.useMemo(() => (r.length > 0 ? I.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: Q } = (0, d.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
        $ = i.useCallback(
            (e) => {
                Q(e.value);
            },
            [Q],
        ),
        J = (function (e, t) {
            let {
                    disabled: n,
                    planPricesLoading: l,
                    isEligibleForDiscount: r,
                    priceOptions: s,
                    isEligibleForTrial: c,
                    isEligibleForBOGOPromotion: g,
                    showPlanStatusSubText: x,
                    isInPlanSelectStep: v,
                } = t,
                {
                    currentPremiumSubscriptionForCheckout: N,
                    isGift: M,
                    discountInfo: R,
                } = (0, d.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                b = (0, o.bG)([f.default], () => f.default.locale),
                { discountOffer: j, discountAmountOff: O, applicablePlan: L } = R,
                w = (0, p.DQ)({ location: "PremiumUnifiedCheckoutPlanSelect" });
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: d, disabled: f } = (0, C.cD)(N, e),
                            R = A.A.get(e);
                        a()(null != R, "Missing subscriptionPlan");
                        let k = (0, y.L_)({ planId: e, isGift: M, priceOptions: s, subscriptionPlan: R }),
                            D = null != k && null == j,
                            U = (0, y.y8)(e, !1, M, s),
                            G = (0, E.gS)(N, R, {
                                userLocale: b,
                                isEligibleForBOGOPromotion: g,
                                shouldShowSavingsPercent: D,
                                isGift: M,
                                planId: e,
                                savingsPercent: k,
                                priceOptions: s,
                                annualPlanCheckoutCopyTreatment: w,
                                isEligibleForTrial: c,
                            }),
                            F = (0, h.is)({
                                treatment: w,
                                targetSubscriptionPlan: R,
                                isGift: M,
                                shouldShowSavingsPercent: D,
                                isEligibleForTrial: c,
                            }),
                            H = (function (e, t) {
                                let { isEligibleForTrial: n } = t;
                                return n
                                    ? _.intl.formatToPlainString(_.t.hXcaLT, {
                                          price: (0, P.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, P.$g)(e.amount, e.currency);
                            })(U, { isEligibleForTrial: c }),
                            B = H,
                            Y = r && null != L && e === L ? O : null;
                        if (
                            (null != j &&
                                !c &&
                                ((0, m.p2)(j)
                                    ? R.interval === I.WT.YEAR
                                        ? (t = _.intl.format(T.default.ODKoJd, { percent: k ?? "" }))
                                        : R.interval === I.WT.MONTH &&
                                          (null != Y &&
                                              (B = _.intl.format(_.t.hXcaLT, {
                                                  price: (0, P.$g)(U.amount - Y, U.currency),
                                              })),
                                          (t = _.intl.format(T.default.JsSin7, {
                                              priceRate: (0, P.CE)(H, R.interval, R.intervalCount),
                                              intervalCount: j.getFullIntervalCount(),
                                          })))
                                    : (0, m.hm)(j) &&
                                      R.interval === I.WT.YEAR &&
                                      null != Y &&
                                      ((B = _.intl.format(_.t.hXcaLT, { price: (0, P.$g)(U.amount - Y, U.currency) })),
                                      (i = H),
                                      (t = _.intl.format(_.t.VZ8Tvh, { regularPrice: H })),
                                      (o = _.intl.formatToPlainString(T.default.nsG1jw, {
                                          savingsText: (0, S.l9)(b, parseInt(j.discount.amount) / 100),
                                      })))),
                            x &&
                                (v && c
                                    ? (t = (0, E.O7)(R, U))
                                    : d
                                      ? (t = _.intl.string(_.t.ymSxhy))
                                      : "string" != typeof G || F || (t = G)),
                            F && w === p.qS.AMOUNT_OFF_WITH_MONTHLY_RATE && !d)
                        ) {
                            let e = (0, h.cg)(R, M, s);
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
                                userLocale: b,
                                discountOffer: j,
                                yearlyPercentSavings: k,
                                shouldHideYearlySavingsBadge: null != N || null != j || g,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, u.YR)(R.interval, R.intervalCount, !0),
                            subText: l ? _.intl.string(_.t.ZTNur7) : B,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : W,
                            isDisabled: f || n,
                        };
                    }),
                [l, e, r, s, c, g, x, v, N, O, L, j, M, b, n, w],
            );
        })(r, {
            disabled: N,
            planPricesLoading: b,
            isEligibleForDiscount: w,
            priceOptions: W,
            isEligibleForTrial: H,
            isEligibleForBOGOPromotion: B,
            showPlanStatusSubText: v,
            isInPlanSelectStep: M,
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
                      value: j?.id ?? "",
                      onChange: $,
                  }),
                  M
                      ? (0, C.LR)({
                            selectedPlan: j,
                            selectedPlanPrice: O,
                            isPrepaid: L,
                            shouldShowHRKEuroWarning: k,
                            shouldShowTrialOrDiscountLayout: U,
                            showTotal: M,
                            shouldShowTotalInSubscriptionFlow: D,
                            previewTotalSectionClassName: g.$,
                        })
                      : null,
              ],
          });
}
