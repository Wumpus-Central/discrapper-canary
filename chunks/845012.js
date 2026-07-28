n.d(t, { X: () => v });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(834730),
    o = n(17928),
    u = n(854354),
    c = n(936477),
    d = n(316915),
    p = n(986883),
    m = n(410516),
    C = n(186223),
    h = n(361597),
    E = n(135314),
    f = n(773669),
    A = n(97352),
    S = n(252424),
    y = n(428262),
    P = n(580630),
    I = n(202541),
    _ = n(375708),
    T = n(327105),
    g = n(166536);
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
            selectedPlan: j,
            selectedPlanPrice: O,
            isPrepaid: L,
            isPlansEligibleForDiscount: w,
            shouldShowHRKEuroWarning: k,
            shouldShowTotalInSubscriptionFlow: U,
            shouldShowTrialOrDiscountLayout: D,
            userTrialOffer: G,
            trialPeriodCopy: F,
            isEligibleForTrial: H,
            isEligibleForBOGOPromotion: B,
            premiumSubscriptionPlan: Y,
            thePriceOptions: W,
            skuId: V,
        } = (0, h.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: v, showTotal: R }),
        { shouldShowPremiumSwitchPlanSelectText: K, premiumSwitchPlanSelectText: Z } = i.useMemo(() => {
            let e = (0, h.U_)(Y, { isEligibleForBOGOPromotion: B });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, h.yq)(Y, V) : null,
            };
        }, [Y, B, V]),
        q = i.useMemo(
            () => (R && H ? (0, h.Ct)(G, { subscriptionPeriodEnd: v, trialPeriodCopy: F }) : b),
            [R, H, G, v, F, b],
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
                M = (0, o.bG)([f.default], () => f.default.locale),
                { discountOffer: j, discountAmountOff: O, applicablePlan: L } = b,
                w = (0, p.DQ)({ location: "PremiumUnifiedCheckoutPlanSelect" });
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: d, disabled: f } = (0, h.cD)(N, e),
                            b = A.A.get(e);
                        a()(null != b, "Missing subscriptionPlan");
                        let k = (0, y.L_)({ planId: e, isGift: R, priceOptions: s, subscriptionPlan: b }),
                            U = null != k && null == j,
                            D = (0, y.y8)(e, !1, R, s),
                            G = (0, E.gS)(N, b, {
                                userLocale: M,
                                isEligibleForBOGOPromotion: g,
                                shouldShowSavingsPercent: U,
                                isGift: R,
                                planId: e,
                                savingsPercent: k,
                                priceOptions: s,
                                annualPlanCheckoutCopyTreatment: w,
                                isEligibleForTrial: c,
                            }),
                            F = (0, C.is)({
                                treatment: w,
                                targetSubscriptionPlan: b,
                                isGift: R,
                                shouldShowSavingsPercent: U,
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
                            })(D, { isEligibleForTrial: c }),
                            B = H,
                            Y = r && null != L && e === L ? O : null;
                        if (
                            (null != j &&
                                !c &&
                                ((0, m.p2)(j)
                                    ? b.interval === I.WT.YEAR
                                        ? (t = _.intl.format(T.default.ODKoJd, { percent: k ?? "" }))
                                        : b.interval === I.WT.MONTH &&
                                          (null != Y &&
                                              (B = _.intl.format(_.t.hXcaLT, {
                                                  price: (0, P.$g)(D.amount - Y, D.currency),
                                              })),
                                          (t = _.intl.format(T.default.JsSin7, {
                                              priceRate: (0, P.CE)(H, b.interval, b.intervalCount),
                                              intervalCount: j.getFullIntervalCount(),
                                          })))
                                    : (0, m.hm)(j) &&
                                      b.interval === I.WT.YEAR &&
                                      null != Y &&
                                      ((B = _.intl.format(_.t.hXcaLT, { price: (0, P.$g)(D.amount - Y, D.currency) })),
                                      (i = H),
                                      (t = _.intl.format(_.t.VZ8Tvh, { regularPrice: H })),
                                      (o = _.intl.formatToPlainString(T.default.nsG1jw, {
                                          savingsText: (0, S.l9)(M, parseInt(j.discount.amount) / 100),
                                      })))),
                            v &&
                                (x && c
                                    ? (t = (0, E.O7)(b, D))
                                    : d
                                      ? (t = _.intl.string(_.t.ymSxhy))
                                      : "string" != typeof G || F || (t = G)),
                            F && w === p.qS.AMOUNT_OFF_WITH_MONTHLY_RATE && !d)
                        ) {
                            let e = (0, C.cg)(b, R, s);
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
                                discountOffer: j,
                                yearlyPercentSavings: k,
                                shouldHideYearlySavingsBadge: null != N || null != j || g,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, u.YR)(b.interval, b.intervalCount, !0),
                            subText: l ? _.intl.string(_.t.ZTNur7) : B,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : W,
                            isDisabled: f || n,
                        };
                    }),
                [l, e, r, s, c, g, v, x, N, O, L, j, R, M, n, w],
            );
        })(r, {
            disabled: N,
            planPricesLoading: M,
            isEligibleForDiscount: w,
            priceOptions: W,
            isEligibleForTrial: H,
            isEligibleForBOGOPromotion: B,
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
                      planRadioOptions: J,
                      value: j?.id ?? "",
                      onChange: $,
                  }),
                  R
                      ? (0, h.LR)({
                            selectedPlan: j,
                            selectedPlanPrice: O,
                            isPrepaid: L,
                            shouldShowHRKEuroWarning: k,
                            shouldShowTrialOrDiscountLayout: D,
                            showTotal: R,
                            shouldShowTotalInSubscriptionFlow: U,
                            previewTotalSectionClassName: g.$,
                        })
                      : null,
              ],
          });
}
