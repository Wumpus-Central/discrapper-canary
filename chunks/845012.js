n.d(t, { X: () => v });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(118751),
    o = n(17928),
    u = n(834730),
    c = n(854354),
    d = n(25149),
    m = n(123816),
    p = n(511484),
    h = n(387278),
    C = n(472468),
    f = n(738869),
    E = n(773669),
    S = n(97352),
    g = n(158045),
    I = n(580630),
    y = n(202541),
    A = n(105292),
    P = n(649975),
    x = n(904541);
function v(e) {
    let {
            selectedPlanId: t,
            priceOptions: n,
            planOptions: r,
            subscriptionPeriodEnd: v,
            showPlanStatusSubText: _,
            disabled: T = !1,
            isInPlanSelectStep: N,
            headingSubText: b,
            planPricesLoading: j = !1,
        } = e,
        {
            selectedPlan: R,
            selectedPlanPrice: O,
            isPrepaid: M,
            isPlansEligibleForDiscount: L,
            shouldShowHRKEuroWarning: k,
            shouldShowTotalInSubscriptionFlow: w,
            shouldShowTrialOrDiscountLayout: D,
            userTrialOffer: U,
            trialPeriodCopy: G,
            isEligibleForTrial: F,
            isEligibleForBOGOPromotion: B,
            premiumSubscriptionPlan: H,
            thePriceOptions: W,
            skuId: V,
        } = (0, C.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: v, showTotal: N }),
        { shouldShowPremiumSwitchPlanSelectText: Y, premiumSwitchPlanSelectText: K } = i.useMemo(() => {
            let e = (0, C.U_)(H, { isEligibleForBOGOPromotion: B });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, C.yq)(H, V) : null,
            };
        }, [H, B, V]),
        q = i.useMemo(
            () => (N && F ? (0, C.Ct)(U, { subscriptionPeriodEnd: v, trialPeriodCopy: G }) : b),
            [N, F, U, v, G, b],
        ),
        Z = i.useMemo(() => (r.length > 0 ? y.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: z } = (0, m.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
        $ = i.useCallback(
            (e) => {
                z(e.value);
            },
            [z],
        ),
        J = (function (e, t) {
            let {
                    disabled: n,
                    planPricesLoading: l,
                    isEligibleForDiscount: r,
                    priceOptions: u,
                    isEligibleForTrial: d,
                    isEligibleForBOGOPromotion: x,
                    showPlanStatusSubText: v,
                    isInPlanSelectStep: _,
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
                j = (0, o.bG)([E.default], () => E.default.locale),
                { discountOffer: R, discountAmountOff: O, applicablePlan: M } = b;
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: m, disabled: E } = (0, C.cD)(T, e),
                            b = S.A.get(e);
                        a()(null != b, "Missing subscriptionPlan");
                        let L = (0, g.L_)({ planId: e, isGift: N, priceOptions: u, subscriptionPlan: b }),
                            k = null != L && null == R,
                            w = (0, g.y8)(e, !1, N, u),
                            D = (0, f.gS)(T, b, {
                                userLocale: j,
                                isEligibleForBOGOPromotion: x,
                                shouldShowSavingsPercent: k,
                                isGift: N,
                                planId: e,
                                savingsPercent: L,
                                priceOptions: u,
                                isEligibleForTrial: d,
                            }),
                            U = (0, h.sR)({
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
                            B = r && null != M && e === M ? O : null;
                        if (
                            (null != R &&
                                !d &&
                                ((0, p.p2)(R)
                                    ? b.interval === y.WT.YEAR
                                        ? (t = A.intl.format(P.default.ODKoJd, { percent: L ?? "" }))
                                        : b.interval === y.WT.MONTH &&
                                          (null != B &&
                                              (F = A.intl.format(A.t.hXcaLT, {
                                                  price: (0, I.$g)(w.amount - B, w.currency),
                                              })),
                                          (t = A.intl.format(P.default.JsSin7, {
                                              priceRate: (0, I.CE)(G, b.interval, b.intervalCount),
                                              intervalCount: R.discount.intervalCount,
                                          })))
                                    : (0, p.hm)(R) &&
                                      b.interval === y.WT.YEAR &&
                                      null != B &&
                                      ((F = A.intl.format(A.t.hXcaLT, { price: (0, I.$g)(w.amount - B, w.currency) })),
                                      (i = G),
                                      (t = A.intl.format(A.t.VZ8Tvh, { regularPrice: G })),
                                      (o = A.intl.formatToPlainString(P.default.nsG1jw, {
                                          savingsText: (0, s.l9)(j, parseInt(R.discount.amount) / 100),
                                      })))),
                            v &&
                                (_ && d
                                    ? (t = (0, f.O7)(b, w))
                                    : m
                                      ? (t = A.intl.string(A.t.ymSxhy))
                                      : "string" != typeof D || U || (t = D)),
                            U && !m)
                        ) {
                            let e = (0, h.Cj)(b, N, u);
                            null != e && (t = e);
                        }
                        let H = (function (e) {
                            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
                            return t ?? n ?? l;
                        })({
                            promoTextOverride: o,
                            overrideBadgeText: null != D && "object" == typeof D ? (D.type, D.text) : null,
                            defaultValue: (0, c.Nc)({
                                subscriptionPlan: b,
                                userLocale: j,
                                discountOffer: R,
                                savingsPercent: L,
                                shouldHideSavingsBadge: null != T || null != R || x,
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
                [l, e, r, u, d, x, v, _, T, O, M, R, N, j, n],
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
    return null == Z
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  Y &&
                      (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", className: x.S, children: K }),
                  (0, l.jsx)(d.me, {
                      headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: Z }),
                      headingSubText: q,
                      planRadioOptions: J,
                      value: R?.id ?? "",
                      onChange: $,
                  }),
                  N
                      ? (0, C.LR)({
                            selectedPlan: R,
                            selectedPlanPrice: O,
                            isPrepaid: M,
                            shouldShowHRKEuroWarning: k,
                            shouldShowTrialOrDiscountLayout: D,
                            showTotal: N,
                            shouldShowTotalInSubscriptionFlow: w,
                            previewTotalSectionClassName: x.$,
                        })
                      : null,
              ],
          });
}
