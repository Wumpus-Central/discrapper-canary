n.d(t, { X: () => x });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(118751),
    o = n(17928),
    u = n(834730),
    c = n(854354),
    d = n(25149),
    p = n(263532),
    m = n(511484),
    h = n(387278),
    C = n(242124),
    f = n(448013),
    S = n(773669),
    E = n(97352),
    y = n(158045),
    A = n(580630),
    I = n(202541),
    g = n(375708),
    P = n(583741),
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
            skuId: Y,
        } = (0, C.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: x, showTotal: N }),
        { shouldShowPremiumSwitchPlanSelectText: V, premiumSwitchPlanSelectText: K } = i.useMemo(() => {
            let e = (0, C.U_)(H, { isEligibleForBOGOPromotion: B });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, C.yq)(H, Y) : null,
            };
        }, [H, B, Y]),
        q = i.useMemo(
            () => (N && F ? (0, C.Ct)(U, { subscriptionPeriodEnd: x, trialPeriodCopy: G }) : b),
            [N, F, U, x, G, b],
        ),
        Z = i.useMemo(() => (r.length > 0 ? I.hd[r[0]].premiumType : void 0), [r]),
        { setSelectedPlanId: z } = (0, p.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
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
                    isEligibleForBOGOPromotion: v,
                    showPlanStatusSubText: x,
                    isInPlanSelectStep: _,
                } = t,
                {
                    currentPremiumSubscriptionForCheckout: T,
                    isGift: N,
                    discountInfo: b,
                } = (0, p.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                j = (0, o.bG)([S.default], () => S.default.locale),
                { discountOffer: R, discountAmountOff: O, applicablePlan: M } = b;
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: p, disabled: S } = (0, C.cD)(T, e),
                            b = E.A.get(e);
                        a()(null != b, "Missing subscriptionPlan");
                        let L = (0, y.L_)({ planId: e, isGift: N, priceOptions: u, subscriptionPlan: b }),
                            k = null != L && null == R,
                            w = (0, y.y8)(e, !1, N, u),
                            D = (0, f.gS)(T, b, {
                                userLocale: j,
                                isEligibleForBOGOPromotion: v,
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
                                    ? g.intl.formatToPlainString(g.t.hXcaLT, {
                                          price: (0, A.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, A.$g)(e.amount, e.currency);
                            })(w, { isEligibleForTrial: d }),
                            F = G,
                            B = r && null != M && e === M ? O : null;
                        if (
                            (null != R &&
                                !d &&
                                ((0, m.p2)(R)
                                    ? b.interval === I.WT.YEAR
                                        ? (t = g.intl.format(P.default.ODKoJd, { percent: L ?? "" }))
                                        : b.interval === I.WT.MONTH &&
                                          (null != B &&
                                              (F = g.intl.format(g.t.hXcaLT, {
                                                  price: (0, A.$g)(w.amount - B, w.currency),
                                              })),
                                          (t = g.intl.format(P.default.JsSin7, {
                                              priceRate: (0, A.CE)(G, b.interval, b.intervalCount),
                                              intervalCount: R.discount.intervalCount,
                                          })))
                                    : (0, m.hm)(R) &&
                                      b.interval === I.WT.YEAR &&
                                      null != B &&
                                      ((F = g.intl.format(g.t.hXcaLT, { price: (0, A.$g)(w.amount - B, w.currency) })),
                                      (i = G),
                                      (t = g.intl.format(g.t.VZ8Tvh, { regularPrice: G })),
                                      (o = g.intl.formatToPlainString(P.default.nsG1jw, {
                                          savingsText: (0, s.l9)(j, parseInt(R.discount.amount) / 100),
                                      })))),
                            x &&
                                (_ && d
                                    ? (t = (0, f.O7)(b, w))
                                    : p
                                      ? (t = g.intl.string(g.t.ymSxhy))
                                      : "string" != typeof D || U || (t = D)),
                            U && !p)
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
                                yearlyPercentSavings: L,
                                shouldHideYearlySavingsBadge: null != T || null != R || v,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, c.YR)(b.interval, b.intervalCount, !0),
                            subText: l ? g.intl.string(g.t.ZTNur7) : F,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : H,
                            isDisabled: S || n,
                        };
                    }),
                [l, e, r, u, d, v, x, _, T, O, M, R, N, j, n],
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
                  V &&
                      (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", className: v.S, children: K }),
                  (0, l.jsx)(d.me, {
                      headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: Z }),
                      headingSubText: q,
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
                            previewTotalSectionClassName: v.$,
                        })
                      : null,
              ],
          });
}
