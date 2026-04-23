"use strict";
n.d(t, {
    EA: () => I,
    Gj: () => O,
    IY: () => y,
    Ig: () => S,
    Re: () => v,
    Rs: () => R,
    fk: () => N,
    iK: () => A,
    ib: () => m,
}),
    n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(403581),
    a = n(854354),
    o = n(692440),
    l = n(815545),
    u = n(958720),
    c = n(299301),
    d = n(97352),
    _ = n(927578),
    f = n(580630),
    p = n(788868),
    h = n(985018),
    E = n(327105);
let m = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? h.intl.format(E.default.U2CmMW, {
                  priceAmount: (0, f.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, f.$g)(0, e);
    },
    g = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    A = (e) => {
        let { interval: t } = e,
            n = (0, _.m6)(e.id);
        switch (t) {
            case p.WT.MONTH:
                let r = h.intl.string(E.default.ZnoRKt);
                return n === p.PremiumTypes.TIER_0
                    ? h.intl.formatToPlainString(E.default.Z9mu9q, { timeInterval: r })
                    : h.intl.formatToPlainString(E.default["8Jt4Dw"], { timeInterval: r });
            case p.WT.YEAR:
                let i = h.intl.string(E.default.Xrg8aC);
                return n === p.PremiumTypes.TIER_0
                    ? h.intl.formatToPlainString(E.default.Z9mu9q, { timeInterval: i })
                    : h.intl.formatToPlainString(E.default["8Jt4Dw"], { timeInterval: i });
            case p.WT.DAY:
                let s = h.intl.string(E.default.WmjxYl);
                return n === p.PremiumTypes.TIER_0
                    ? h.intl.formatToPlainString(E.default.Z9mu9q, { timeInterval: s })
                    : h.intl.formatToPlainString(E.default["8Jt4Dw"], { timeInterval: s });
        }
    },
    I = (e) => {
        let { id: t, label: n, amount: r, subscriptionDiscount: i, entitlementDiscount: s, currency: a } = e,
            o = [{ id: t, label: n, amount: r }];
        return (
            null != i && o.push(g(i, "subscription-discount", h.intl.string(E.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != s, lineItems: o, currency: a }
        );
    },
    T = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: r,
                invoiceAdjustmentDisplayItems: i,
                currency: s,
                subscriptionPlan: a,
                subscriptionTrial: o,
                excludeDiscountsAndAdjustments: u,
            } = t,
            {
                label: c,
                amount: d,
                amountWithoutDiscount: _,
                subscriptionDiscount: f,
                entitlementDiscount: p,
            } = (0, l.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: a,
                subscriptionTrial: o,
                isPrepaidPaymentSource: r,
                currency: s,
            }),
            m = null != f || null != p,
            A = { id: e.id, label: c, amount: m ? _ : d, lineItemType: "main" },
            I = [
                A,
                ...i.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                    lineItemType: "adjustment",
                })),
            ];
        return (
            null == f || u || I.push(g(f, "subscription-discount", h.intl.string(E.default["9yHcmL"]))),
            { lineItems: I, primaryLineItem: A, entitlementDiscount: p }
        );
    },
    S = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: r,
                isPrepaidPaymentSource: i = !1,
                includeTaxLineItem: s = !0,
                excludeDiscountsAndAdjustments: a,
            } = t,
            {
                basePlanInvoiceItem: o,
                guildSubscriptionInvoiceItem: u,
                guildSubscriptionPlan: c,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: _,
            } = (0, l.wt)(e, { isPrepaidPaymentSource: i });
        if (null == o) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: f,
            primaryLineItem: p,
            entitlementDiscount: E,
        } = T(o, {
            subscriptionPlan: r,
            subscriptionTrial: n,
            isPrepaidPaymentSource: i,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: a,
        });
        return (
            0 !== d && null != u && null != c && null != _ && f.push({ id: u.id, label: _, amount: d }),
            s && f.push({ id: "tax", label: h.intl.string(h.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: f, primaryLineItem: p, entitlementDiscount: E }
        );
    },
    y = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: r, subscriptionPlan: i, subscriptionTrial: s } = t,
            { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: u } = (0, l.SA)(e, i),
            {
                lineItems: d,
                primaryLineItem: _,
                entitlementDiscount: f,
            } = T(a, {
                overrideAmount: c.IJ.has(r) ? o : void 0,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: u,
            });
        return { lineItems: d, primaryLineItem: _, entitlementDiscount: f, hasAdjustmentLineItem: u.length > 0 };
    },
    N = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, o.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    v = (e, t) => {
        let n = (0, l.NL)(e),
            r = (function (e, t) {
                if (null == e || null == t || e !== t.discount_id) return null;
                let { discount: n } = t,
                    r = new Date(t.applied_at ?? Date.now()),
                    i = "";
                switch (n.user_usage_limit_interval) {
                    case p.Ff.DAY:
                        r.setDate(r.getDate() + n.user_usage_limit_interval_count),
                            (i = h.intl.formatToPlainString(E.default.WzJTZI, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case p.Ff.WEEK:
                        r.setDate(r.getDate() + 7 * n.user_usage_limit_interval_count),
                            (i = h.intl.formatToPlainString(E.default.LHWoqL, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case p.Ff.MONTH:
                        r.setMonth(r.getMonth() + n.user_usage_limit_interval_count),
                            (i = h.intl.formatToPlainString(E.default.ZQLDzk, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case p.Ff.YEAR:
                        r.setFullYear(r.getFullYear() + n.user_usage_limit_interval_count),
                            (i = h.intl.formatToPlainString(E.default.KpnRtO, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    default:
                        return null;
                }
                return {
                    discountEndDate: r,
                    discountAppliedLabel: i,
                    intervalCount: n.user_usage_limit_interval_count,
                };
            })(null != n ? n.discount_id : null, t),
            i = null != r && 1 === r.intervalCount,
            { subscriptionPlanPrice: s, subscriptionPlanId: a, amount: o } = e;
        return (0, _.xq)(a)
            ? { amount: i ? s * e.quantity : o, matchedDiscountInfo: r }
            : { amount: o, matchedDiscountInfo: r };
    },
    C = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: r,
                isPremiumBasePlanInvoiceItem: i,
                intervalType: a,
                intervalCount: o,
                discountOffer: u,
                currency: c,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: p,
                subscriptionDiscount: m,
                originalAmount: g,
            } = (0, l.Ae)(e, { subscriptionTrial: t, currency: c }),
            A = d ? h.intl.format(h.t.UDop9c, {}) : void 0,
            I =
                i || null == m
                    ? null
                    : {
                          subText: (0, f.CE)((0, f.$g)(g, c), a, o),
                          subTextHasStrikethrough: !0,
                          valueIcon: r && (0, _.z4)(e.subscriptionPlanId) ? s.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: T, matchedDiscountInfo: S } = v(e, u),
            y = null != S && S.intervalCount > 1,
            N =
                i && y
                    ? {
                          subText: h.intl.format(E.default.Chj1Ke, { discountEndDate: S.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: S, lineItem: { id: e.id, label: p, amount: T, tooltip: A, ...N, ...I } };
    },
    O = function (e, t, n) {
        let {
                overrideRenewalDate: r,
                isSubscriptionUpdate: i,
                discountOffer: s,
                fractionalPremiumInfo: a,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      overrideRenewalDate: void 0,
                      isSubscriptionUpdate: !1,
                      discountOffer: null,
                      fractionalPremiumInfo: null,
                  },
            u = (0, l.Q8)(t, e, { isSubscriptionUpdate: i }),
            { intervalType: c, intervalCount: d } = (0, _.Ge)(t),
            f = t.currency,
            m = [],
            g = u.some((e) => (0, _.xq)(e.subscriptionPlanId));
        for (let e of u) {
            let { subscriptionPlanId: t } = e,
                { lineItem: r } = C(e, n, {
                    invoiceIncludesPremiumBasePlan: g,
                    isPremiumBasePlanInvoiceItem: (0, _.xq)(t),
                    intervalType: c,
                    intervalCount: d,
                    discountOffer: s,
                    currency: f,
                });
            m.push(r);
        }
        let A = (0, o.de)({
            overrideRenewalDate: r,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: i,
            fractionalPremiumInfo: a,
        });
        return {
            lineItems: m,
            intervalType: c,
            intervalCount: d,
            currency: f,
            label: h.intl.string(E.default.GGn3pp),
            totalLineItemValueSubText: h.intl.string(E.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case p.WT.MONTH:
                            return h.intl.string(E.default.WrFWOV);
                        case p.WT.YEAR:
                            return h.intl.string(E.default.SxKq52);
                    }
                return h.intl.string(E.default.jxUJkZ);
            })(c, d),
            totalLineItemLabelSubText: h.intl.format(E.default.MR4VnX, { renewalDate: A }),
        };
    },
    R = (e, t) => {
        let n,
            {
                planId: r,
                disabled: s,
                userLocale: o,
                discountOffer: l,
                isEligibleForDiscount: c,
                discountAmountOff: m,
                isMonthlyDiscountOffer: g,
                priceOptions: A,
                shouldUseCalculatedDiscount: I,
                isCurrentPlan: T,
                isGift: S,
                isEligibleForTrial: y,
                isEligibleForBOGOPromotion: N,
                showPlanStatusSubText: v,
                isInPlanSelectStep: C,
            } = t,
            O = d.A.get(r);
        i()(null != O, "Missing subscriptionPlan");
        let R = (0, _.L_)({
                planId: r,
                shouldUseCalculatedDiscount: I,
                isGift: S,
                priceOptions: A,
                subscriptionPlan: O,
            }),
            b = null != R && null == l,
            D = (0, _.y8)(r, !1, S, A),
            L = (0, u.gS)(e, O, {
                userLocale: o,
                isEligibleForBOGOPromotion: N,
                shouldShowSavingsPercent: b,
                isGift: S,
                planId: r,
                savingsPercent: R,
            }),
            w = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? h.intl.formatToPlainString(h.t.hXcaLT, {
                          price: (0, f.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, f.$g)(e.amount, e.currency);
            })(D, { isEligibleForTrial: y }),
            M = w;
        if (g && null != l && !y) {
            if (O.interval === p.WT.YEAR) n = h.intl.format(E.default.ODKoJd, { percent: R ?? "" });
            else if (O.interval === p.WT.MONTH) {
                if (c && null != m) {
                    let e = (0, f.$g)(D.amount - m, D.currency);
                    M = h.intl.format(h.t.hXcaLT, { price: e });
                }
                n = h.intl.format(E.default.JsSin7, {
                    priceRate: (0, f.CE)(w, O.interval, O.intervalCount),
                    intervalCount: l.discount.user_usage_limit_interval_count,
                });
            }
        }
        v && (C && y ? (n = (0, u.O7)(O, D)) : T ? (n = h.intl.string(h.t.ymSxhy)) : "string" == typeof L && (n = L));
        let P = null != L && "object" == typeof L && "badge" === L.type ? L.text : null,
            x =
                null != P
                    ? P
                    : (0, a.Nc)({
                          subscriptionPlan: O,
                          userLocale: o,
                          discountOffer: l,
                          yearlyPercentSavings: R,
                          shouldHideYearlySavingsBadge: null != e || null != l,
                      });
        return {
            id: r,
            planName: (0, a.YR)(O.interval, O.intervalCount, !0),
            priceText: M,
            secondarySubText: n,
            promoText: x,
            isDisabled: s,
            savingsPercent: R,
        };
    };
