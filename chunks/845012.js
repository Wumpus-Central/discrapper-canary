n.d(t, { X: () => _ });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(118751),
    o = n(834730),
    u = n(17928),
    c = n(854354),
    d = n(93159),
    m = n(263532),
    p = n(511484),
    C = n(186223),
    h = n(73663),
    f = n(736339),
    E = n(773669),
    S = n(97352),
    y = n(158045),
    I = n(580630),
    g = n(202541),
    A = n(375708),
    P = n(649975),
    v = n(904541);
function _(e) {
    let {
            selectedPlanId: t,
            priceOptions: n,
            planOptions: r,
            subscriptionPeriodEnd: _,
            showPlanStatusSubText: x,
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
        } = (0, h.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: _, showTotal: N }),
        { shouldShowPremiumSwitchPlanSelectText: V, premiumSwitchPlanSelectText: K } = i.useMemo(() => {
            let e = (0, h.U_)(H, { isEligibleForBOGOPromotion: B });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, h.yq)(H, Y) : null,
            };
        }, [H, B, Y]),
        Z = i.useMemo(
            () => (N && F ? (0, h.Ct)(D, { subscriptionPeriodEnd: _, trialPeriodCopy: G }) : b),
            [N, F, D, _, G, b],
        ),
        q = i.useMemo(() => (r.length > 0 ? g.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: z } = (0, m.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
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
                    priceOptions: o,
                    isEligibleForTrial: d,
                    isEligibleForBOGOPromotion: v,
                    showPlanStatusSubText: _,
                    isInPlanSelectStep: x,
                } = t,
                {
                    currentPremiumSubscriptionForCheckout: T,
                    isGift: N,
                    discountInfo: b,
                } = (0, m.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                j = (0, u.bG)([E.default], () => E.default.locale),
                { discountOffer: R, discountAmountOff: M, applicablePlan: O } = b;
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            u,
                            { isCurrentPlan: m, disabled: E } = (0, h.cD)(T, e),
                            b = S.A.get(e);
                        a()(null != b, "Missing subscriptionPlan");
                        let L = (0, y.L_)({ planId: e, isGift: N, priceOptions: o, subscriptionPlan: b }),
                            k = null != L && null == R,
                            w = (0, y.y8)(e, !1, N, o),
                            U = (0, f.gS)(T, b, {
                                userLocale: j,
                                isEligibleForBOGOPromotion: v,
                                shouldShowSavingsPercent: k,
                                isGift: N,
                                planId: e,
                                savingsPercent: L,
                                priceOptions: o,
                                isEligibleForTrial: d,
                            }),
                            D = (0, C.sR)({
                                targetSubscriptionPlan: b,
                                isGift: N,
                                shouldShowSavingsPercent: k,
                                isEligibleForTrial: d,
                            }),
                            G = (function (e, t) {
                                let { isEligibleForTrial: n } = t;
                                return n
                                    ? A.intl.formatToPlainString(A.t.hXcaLT, {
                                          price: (0, I.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, I.$g)(e.amount, e.currency);
                            })(w, { isEligibleForTrial: d }),
                            F = G,
                            B = r && null != O && e === O ? M : null;
                        if (
                            (null != R &&
                                !d &&
                                ((0, p.p2)(R)
                                    ? b.interval === g.WT.YEAR
                                        ? (t = A.intl.format(P.default.ODKoJd, { percent: L ?? "" }))
                                        : b.interval === g.WT.MONTH &&
                                          (null != B &&
                                              (F = A.intl.format(A.t.hXcaLT, {
                                                  price: (0, I.$g)(w.amount - B, w.currency),
                                              })),
                                          (t = A.intl.format(P.default.JsSin7, {
                                              priceRate: (0, I.CE)(G, b.interval, b.intervalCount),
                                              intervalCount: R.discount.intervalCount,
                                          })))
                                    : (0, p.hm)(R) &&
                                      b.interval === g.WT.YEAR &&
                                      null != B &&
                                      ((F = A.intl.format(A.t.hXcaLT, { price: (0, I.$g)(w.amount - B, w.currency) })),
                                      (i = G),
                                      (t = A.intl.format(A.t.VZ8Tvh, { regularPrice: G })),
                                      (u = A.intl.formatToPlainString(P.default.nsG1jw, {
                                          savingsText: (0, s.l9)(j, parseInt(R.discount.amount) / 100),
                                      })))),
                            _ &&
                                (x && d
                                    ? (t = (0, f.O7)(b, w))
                                    : m
                                      ? (t = A.intl.string(A.t.ymSxhy))
                                      : "string" != typeof U || D || (t = U)),
                            D && !m)
                        ) {
                            let e = (0, C.Cj)(b, N, o);
                            null != e && (t = e);
                        }
                        let H = (function (e) {
                            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
                            return t ?? n ?? l;
                        })({
                            promoTextOverride: u,
                            overrideBadgeText: null != U && "object" == typeof U ? (U.type, U.text) : null,
                            defaultValue: (0, c.Nc)({
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
                            primaryText: (0, c.YR)(b.interval, b.intervalCount, !0),
                            subText: l ? A.intl.string(A.t.ZTNur7) : F,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : H,
                            isDisabled: E || n,
                        };
                    }),
                [l, e, r, o, d, v, _, x, T, M, O, R, N, j, n],
            );
        })(r, {
            disabled: T,
            planPricesLoading: j,
            isEligibleForDiscount: L,
            priceOptions: W,
            isEligibleForTrial: F,
            isEligibleForBOGOPromotion: B,
            showPlanStatusSubText: x,
            isInPlanSelectStep: N,
        });
    return null == q
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  V &&
                      (0, l.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", className: v.S, children: K }),
                  (0, l.jsx)(d.me, {
                      headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: q }),
                      headingSubText: Z,
                      planRadioOptions: $,
                      value: R?.id ?? "",
                      onChange: Q,
                  }),
                  N
                      ? (0, h.LR)({
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
