n.d(t, { X: () => x });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(834730),
    o = n(17928),
    u = n(854354),
    c = n(936477),
    d = n(87725),
    m = n(511484),
    p = n(186223),
    C = n(73663),
    h = n(958720),
    f = n(773669),
    E = n(97352),
    S = n(252424),
    y = n(158045),
    I = n(580630),
    A = n(202541),
    g = n(375708),
    P = n(477729),
    v = n(904541);
function x(e) {
    let {
            selectedPlanId: t,
            priceOptions: n,
            planOptions: r,
            subscriptionPeriodEnd: x,
            showPlanStatusSubText: _,
            disabled: T = !1,
            isInPlanSelectStep: N,
            headingSubText: b,
            planPricesLoading: j = !1,
        } = e,
        {
            selectedPlan: R,
            selectedPlanPrice: M,
            isPrepaid: O,
            isPlansEligibleForDiscount: L,
            shouldShowHRKEuroWarning: k,
            shouldShowTotalInSubscriptionFlow: w,
            shouldShowTrialOrDiscountLayout: U,
            userTrialOffer: D,
            trialPeriodCopy: G,
            isEligibleForTrial: F,
            isEligibleForBOGOPromotion: B,
            premiumSubscriptionPlan: H,
            thePriceOptions: W,
            skuId: Y,
        } = (0, C.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: x, showTotal: N }),
        { shouldShowPremiumSwitchPlanSelectText: V, premiumSwitchPlanSelectText: K } = i.useMemo(() => {
            let e = (0, C.U_)(H, { isEligibleForBOGOPromotion: B });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, C.yq)(H, Y) : null,
            };
        }, [H, B, Y]),
        Z = i.useMemo(
            () => (N && F ? (0, C.Ct)(D, { subscriptionPeriodEnd: x, trialPeriodCopy: G }) : b),
            [N, F, D, x, G, b],
        ),
        q = i.useMemo(() => (r.length > 0 ? A.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: z } = (0, d.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
        Q = i.useCallback(
            (e) => {
                z(e.value);
            },
            [z],
        ),
        $ = (function (e, t) {
            let {
                    disabled: n,
                    planPricesLoading: l,
                    isEligibleForDiscount: r,
                    priceOptions: s,
                    isEligibleForTrial: c,
                    isEligibleForBOGOPromotion: v,
                    showPlanStatusSubText: x,
                    isInPlanSelectStep: _,
                } = t,
                {
                    currentPremiumSubscriptionForCheckout: T,
                    isGift: N,
                    discountInfo: b,
                } = (0, d.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                j = (0, o.bG)([f.default], () => f.default.locale),
                { discountOffer: R, discountAmountOff: M, applicablePlan: O } = b;
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: d, disabled: f } = (0, C.cD)(T, e),
                            b = E.A.get(e);
                        a()(null != b, "Missing subscriptionPlan");
                        let L = (0, y.L_)({ planId: e, isGift: N, priceOptions: s, subscriptionPlan: b }),
                            k = null != L && null == R,
                            w = (0, y.y8)(e, !1, N, s),
                            U = (0, h.gS)(T, b, {
                                userLocale: j,
                                isEligibleForBOGOPromotion: v,
                                shouldShowSavingsPercent: k,
                                isGift: N,
                                planId: e,
                                savingsPercent: L,
                                priceOptions: s,
                                isEligibleForTrial: c,
                            }),
                            D = (0, p.sR)({
                                targetSubscriptionPlan: b,
                                isGift: N,
                                shouldShowSavingsPercent: k,
                                isEligibleForTrial: c,
                            }),
                            G = (function (e, t) {
                                let { isEligibleForTrial: n } = t;
                                return n
                                    ? g.intl.formatToPlainString(g.t.hXcaLT, {
                                          price: (0, I.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, I.$g)(e.amount, e.currency);
                            })(w, { isEligibleForTrial: c }),
                            F = G,
                            B = r && null != O && e === O ? M : null;
                        if (
                            (null != R &&
                                !c &&
                                ((0, m.p2)(R)
                                    ? b.interval === A.WT.YEAR
                                        ? (t = g.intl.format(P.default.ODKoJd, { percent: L ?? "" }))
                                        : b.interval === A.WT.MONTH &&
                                          (null != B &&
                                              (F = g.intl.format(g.t.hXcaLT, {
                                                  price: (0, I.$g)(w.amount - B, w.currency),
                                              })),
                                          (t = g.intl.format(P.default.JsSin7, {
                                              priceRate: (0, I.CE)(G, b.interval, b.intervalCount),
                                              intervalCount: R.discount.intervalCount,
                                          })))
                                    : (0, m.hm)(R) &&
                                      b.interval === A.WT.YEAR &&
                                      null != B &&
                                      ((F = g.intl.format(g.t.hXcaLT, { price: (0, I.$g)(w.amount - B, w.currency) })),
                                      (i = G),
                                      (t = g.intl.format(g.t.VZ8Tvh, { regularPrice: G })),
                                      (o = g.intl.formatToPlainString(P.default.nsG1jw, {
                                          savingsText: (0, S.l9)(j, parseInt(R.discount.amount) / 100),
                                      })))),
                            x &&
                                (_ && c
                                    ? (t = (0, h.O7)(b, w))
                                    : d
                                      ? (t = g.intl.string(g.t.ymSxhy))
                                      : "string" != typeof U || D || (t = U)),
                            D && !d)
                        ) {
                            let e = (0, p.Cj)(b, N, s);
                            null != e && (t = e);
                        }
                        let H = (function (e) {
                            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
                            return t ?? n ?? l;
                        })({
                            promoTextOverride: o,
                            overrideBadgeText: null != U && "object" == typeof U ? (U.type, U.text) : null,
                            defaultValue: (0, u.Nc)({
                                subscriptionPlan: b,
                                userLocale: j,
                                discountOffer: R,
                                yearlyPercentSavings: L,
                                shouldHideYearlySavingsBadge: null != T || null != R || v,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, u.YR)(b.interval, b.intervalCount, !0),
                            subText: l ? g.intl.string(g.t.ZTNur7) : F,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : H,
                            isDisabled: f || n,
                        };
                    }),
                [l, e, r, s, c, v, x, _, T, M, O, R, N, j, n],
            );
        })(r, {
            disabled: T,
            planPricesLoading: j,
            isEligibleForDiscount: L,
            priceOptions: W,
            isEligibleForTrial: F,
            isEligibleForBOGOPromotion: B,
            showPlanStatusSubText: _,
            isInPlanSelectStep: N,
        });
    return null == q
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  V &&
                      (0, l.jsx)(s.E, { variant: "text-md/medium", color: "text-subtle", className: v.S, children: K }),
                  (0, l.jsx)(c.me, {
                      headingComponent: (0, l.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: q }),
                      headingSubText: Z,
                      planRadioOptions: $,
                      value: R?.id ?? "",
                      onChange: Q,
                  }),
                  N
                      ? (0, C.LR)({
                            selectedPlan: R,
                            selectedPlanPrice: M,
                            isPrepaid: O,
                            shouldShowHRKEuroWarning: k,
                            shouldShowTrialOrDiscountLayout: U,
                            showTotal: N,
                            shouldShowTotalInSubscriptionFlow: w,
                            previewTotalSectionClassName: v.$,
                        })
                      : null,
              ],
          });
}
