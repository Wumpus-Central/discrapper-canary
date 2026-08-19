n.d(t, { X: () => _ });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(834730),
    o = n(17928),
    u = n(854354),
    c = n(936477),
    d = n(87725),
    p = n(511484),
    m = n(186223),
    h = n(92886),
    C = n(958720),
    f = n(773669),
    E = n(97352),
    S = n(252424),
    y = n(158045),
    A = n(580630),
    P = n(202541),
    I = n(375708),
    g = n(327105),
    v = n(166536);
function _(e) {
    let {
            selectedPlanId: t,
            priceOptions: n,
            planOptions: r,
            subscriptionPeriodEnd: _,
            showPlanStatusSubText: T,
            disabled: x = !1,
            isInPlanSelectStep: N,
            headingSubText: b,
            planPricesLoading: R = !1,
        } = e,
        {
            selectedPlan: j,
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
            thePriceOptions: Y,
            skuId: W,
        } = (0, h.RO)({ selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: _, showTotal: N }),
        { shouldShowPremiumSwitchPlanSelectText: V, premiumSwitchPlanSelectText: K } = i.useMemo(() => {
            let e = (0, h.U_)(H, { isEligibleForBOGOPromotion: B });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, h.yq)(H, W) : null,
            };
        }, [H, B, W]),
        q = i.useMemo(
            () => (N && F ? (0, h.Ct)(D, { subscriptionPeriodEnd: _, trialPeriodCopy: G }) : b),
            [N, F, D, _, G, b],
        ),
        Z = i.useMemo(() => (r.length > 0 ? P.hd[r[0]].premiumType : void 0), [r]),
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
                    showPlanStatusSubText: _,
                    isInPlanSelectStep: T,
                } = t,
                {
                    currentPremiumSubscriptionForCheckout: x,
                    isGift: N,
                    discountInfo: b,
                } = (0, d.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                R = (0, o.bG)([f.default], () => f.default.locale),
                { discountOffer: j, discountAmountOff: M, applicablePlan: O } = b;
            return i.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            i,
                            o,
                            { isCurrentPlan: d, disabled: f } = (0, h.cD)(x, e),
                            b = E.A.get(e);
                        a()(null != b, "Missing subscriptionPlan");
                        let L = (0, y.L_)({ planId: e, isGift: N, priceOptions: s, subscriptionPlan: b }),
                            k = null != L && null == j,
                            w = (0, y.y8)(e, !1, N, s),
                            U = (0, C.gS)(x, b, {
                                userLocale: R,
                                isEligibleForBOGOPromotion: v,
                                shouldShowSavingsPercent: k,
                                isGift: N,
                                planId: e,
                                savingsPercent: L,
                                priceOptions: s,
                                isEligibleForTrial: c,
                            }),
                            D = (0, m.sR)({
                                targetSubscriptionPlan: b,
                                isGift: N,
                                shouldShowSavingsPercent: k,
                                isEligibleForTrial: c,
                            }),
                            G = (function (e, t) {
                                let { isEligibleForTrial: n } = t;
                                return n
                                    ? I.intl.formatToPlainString(I.t.hXcaLT, {
                                          price: (0, A.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, A.$g)(e.amount, e.currency);
                            })(w, { isEligibleForTrial: c }),
                            F = G,
                            B = r && null != O && e === O ? M : null;
                        if (
                            (null != j &&
                                !c &&
                                ((0, p.p2)(j)
                                    ? b.interval === P.WT.YEAR
                                        ? (t = I.intl.format(g.default.ODKoJd, { percent: L ?? "" }))
                                        : b.interval === P.WT.MONTH &&
                                          (null != B &&
                                              (F = I.intl.format(I.t.hXcaLT, {
                                                  price: (0, A.$g)(w.amount - B, w.currency),
                                              })),
                                          (t = I.intl.format(g.default.JsSin7, {
                                              priceRate: (0, A.CE)(G, b.interval, b.intervalCount),
                                              intervalCount: j.discount.intervalCount,
                                          })))
                                    : (0, p.hm)(j) &&
                                      b.interval === P.WT.YEAR &&
                                      null != B &&
                                      ((F = I.intl.format(I.t.hXcaLT, { price: (0, A.$g)(w.amount - B, w.currency) })),
                                      (i = G),
                                      (t = I.intl.format(I.t.VZ8Tvh, { regularPrice: G })),
                                      (o = I.intl.formatToPlainString(g.default.nsG1jw, {
                                          savingsText: (0, S.l9)(R, parseInt(j.discount.amount) / 100),
                                      })))),
                            _ &&
                                (T && c
                                    ? (t = (0, C.O7)(b, w))
                                    : d
                                      ? (t = I.intl.string(I.t.ymSxhy))
                                      : "string" != typeof U || D || (t = U)),
                            D && !d)
                        ) {
                            let e = (0, m.Cj)(b, N, s);
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
                                userLocale: R,
                                discountOffer: j,
                                yearlyPercentSavings: L,
                                shouldHideYearlySavingsBadge: null != x || null != j || v,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, u.YR)(b.interval, b.intervalCount, !0),
                            subText: l ? I.intl.string(I.t.ZTNur7) : F,
                            subTextStrikethrough: l ? null : i,
                            secondarySubText: l ? null : t,
                            badgeText: l ? null : H,
                            isDisabled: f || n,
                        };
                    }),
                [l, e, r, s, c, v, _, T, x, M, O, j, N, R, n],
            );
        })(r, {
            disabled: x,
            planPricesLoading: R,
            isEligibleForDiscount: L,
            priceOptions: Y,
            isEligibleForTrial: F,
            isEligibleForBOGOPromotion: B,
            showPlanStatusSubText: T,
            isInPlanSelectStep: N,
        });
    return null == Z
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  V &&
                      (0, l.jsx)(s.E, { variant: "text-md/medium", color: "text-subtle", className: v.S, children: K }),
                  (0, l.jsx)(c.me, {
                      headingComponent: (0, l.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: Z }),
                      headingSubText: q,
                      planRadioOptions: $,
                      value: j?.id ?? "",
                      onChange: Q,
                  }),
                  N
                      ? (0, h.LR)({
                            selectedPlan: j,
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
