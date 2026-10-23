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
    C = n(173133),
    f = n(738869),
    E = n(773669),
    S = n(97352),
    g = n(927578),
    I = n(580630),
    A = n(202541),
    y = n(105292),
    x = n(583741),
    P = n(904541);
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
        Z = i.useMemo(
            () => (N && F ? (0, C.Ct)(U, { subscriptionPeriodEnd: v, trialPeriodCopy: G }) : b),
            [N, F, U, v, G, b],
        ),
        q = i.useMemo(() => (r.length > 0 ? A.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: z } = (0, m.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
        $ = i.useCallback(
            (e) => {
                z(e.value);
            },
            [z],
        ),
        Q = (function (e, t) {
            let {
                    disabled: n,
                    planPricesLoading: l,
                    isEligibleForDiscount: r,
                    priceOptions: u,
                    isEligibleForTrial: d,
                    isEligibleForBOGOPromotion: P,
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
                                isEligibleForBOGOPromotion: P,
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
                                    ? y.intl.formatToPlainString(y.t.hXcaLT, {
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
                                    ? b.interval === A.WT.YEAR
                                        ? (t = y.intl.format(x.default.ODKoJd, { percent: L ?? "" }))
                                        : b.interval === A.WT.MONTH &&
                                          (null != B &&
                                              (F = y.intl.format(y.t.hXcaLT, {
                                                  price: (0, I.$g)(w.amount - B, w.currency),
                                              })),
                                          (t = y.intl.format(x.default.JsSin7, {
                                              priceRate: (0, I.CE)(G, b.interval, b.intervalCount),
                                              intervalCount: R.discount.intervalCount,
                                          })))
                                    : (0, p.hm)(R) &&
                                      b.interval === A.WT.YEAR &&
                                      null != B &&
                                      ((F = y.intl.format(y.t.hXcaLT, { price: (0, I.$g)(w.amount - B, w.currency) })),
                                      (i = G),
                                      (t = y.intl.format(y.t.VZ8Tvh, { regularPrice: G })),
                                      (o = y.intl.formatToPlainString(x.default.nsG1jw, {
                                          savingsText: (0, s.l9)(j, parseInt(R.discount.amount) / 100),
                                      })))),
                            v &&
                                (_ && d
                                    ? (t = (0, f.O7)(b, w))
                                    : m
                                      ? (t = y.intl.string(y.t.ymSxhy))
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
                                shouldHideSavingsBadge: null != T || null != R || P,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, c.YR)(b.interval, b.intervalCount, !0),
                            subText: l ? y.intl.string(y.t.ZTNur7) : F,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : H,
                            isDisabled: E || n,
                        };
                    }),
                [l, e, r, u, d, P, v, _, T, O, M, R, N, j, n],
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
                  Y &&
                      (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", className: P.S, children: K }),
                  (0, l.jsx)(d.me, {
                      headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: q }),
                      headingSubText: Z,
                      planRadioOptions: Q,
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
                            previewTotalSectionClassName: P.$,
                        })
                      : null,
              ],
          });
}
