"use strict";
n.d(t, { EA: () => E, Gj: () => y, Go: () => S, IY: () => A, Ig: () => g, fk: () => I, iK: () => p, ib: () => h }),
    n(321073);
var i = n(403581),
    r = n(458785),
    s = n(815545),
    a = n(299301),
    o = n(428262),
    l = n(580630),
    u = n(788868),
    c = n(375708),
    d = n(327105);
function _(e) {
    return (0, o.xq)(e) || (0, o.Zb)(e);
}
function h(e) {
    let { includeNowSuffix: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return t
        ? c.intl.format(d.default.U2CmMW, {
              priceAmount: (0, l.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, l.$g)(0, e);
}
function f(e, t, n) {
    return { id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" };
}
function p(e) {
    let { interval: t } = e,
        n = (0, o.m6)(e.id);
    switch (t) {
        case u.WT.MONTH:
            let i = c.intl.string(d.default.ZnoRKt);
            return n === u.PremiumTypes.TIER_0
                ? c.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: i })
                : c.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: i });
        case u.WT.YEAR:
            let r = c.intl.string(d.default.Xrg8aC);
            return n === u.PremiumTypes.TIER_0
                ? c.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: r })
                : c.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: r });
        case u.WT.DAY:
            let s = c.intl.string(d.default.WmjxYl);
            return n === u.PremiumTypes.TIER_0
                ? c.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: s })
                : c.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: s });
    }
}
function E(e) {
    let { id: t, label: n, amount: i, subscriptionDiscount: r, entitlementDiscount: s, currency: a } = e,
        o = [{ id: t, label: n, amount: i }];
    return (
        null != r && o.push(f(r, "subscription-discount", c.intl.string(d.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != s, lineItems: o, currency: a }
    );
}
function m(e, t) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: i,
            invoiceAdjustmentDisplayItems: r,
            currency: a,
            subscriptionPlan: o,
            subscriptionTrial: l,
            excludeDiscountsAndAdjustments: u,
        } = t,
        {
            label: _,
            amount: h,
            amountWithoutDiscount: p,
            subscriptionDiscount: E,
            entitlementDiscount: m,
        } = (0, s.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: o,
            subscriptionTrial: l,
            isPrepaidPaymentSource: i,
            currency: a,
        }),
        g = null != E || null != m,
        A = { id: e.id, label: _, amount: g ? p : h, lineItemType: "main" },
        I = [
            A,
            ...r.map((e) => ({
                id: e.id,
                label: e.label,
                amount: e.amount,
                tooltip: e.tooltipText,
                tooltipAriaLabel: e.tooltipAriaLabel,
                lineItemType: "adjustment",
            })),
        ];
    return (
        null == E || u || I.push(f(E, "subscription-discount", c.intl.string(d.default["9yHcmL"]))),
        { lineItems: I, primaryLineItem: A, entitlementDiscount: m }
    );
}
function g(e, t) {
    let {
            subscriptionTrial: n,
            subscriptionPlan: i,
            isPrepaidPaymentSource: r = !1,
            includeTaxLineItem: a = !0,
            excludeDiscountsAndAdjustments: o,
        } = t,
        {
            basePlanInvoiceItem: l,
            guildSubscriptionInvoiceItem: u,
            guildSubscriptionPlan: d,
            guildSubscriptionAmount: _,
            guildBoostItemLabel: h,
        } = (0, s.wt)(e, { isPrepaidPaymentSource: r });
    if (null == l) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: f,
        primaryLineItem: p,
        entitlementDiscount: E,
    } = m(l, {
        subscriptionPlan: i,
        subscriptionTrial: n,
        isPrepaidPaymentSource: r,
        currency: e.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: o,
    });
    return (
        0 !== _ && null != u && null != d && null != h && f.push({ id: u.id, label: h, amount: _ }),
        a && f.push({ id: "tax", label: c.intl.string(c.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
        { lineItems: f, primaryLineItem: p, entitlementDiscount: E }
    );
}
function A(e, t) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: i, subscriptionPlan: r, subscriptionTrial: o } = t,
        { newPlanInvoiceItem: l, basePlanFullAmount: u, invoiceAdjustmentDisplayItems: c } = (0, s.SA)(e, r),
        {
            lineItems: d,
            primaryLineItem: _,
            entitlementDiscount: h,
        } = m(l, {
            overrideAmount: a.IJ.has(i) ? u : void 0,
            subscriptionPlan: r,
            subscriptionTrial: o,
            isPrepaidPaymentSource: n,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: c,
        });
    return { lineItems: d, primaryLineItem: _, entitlementDiscount: h, hasAdjustmentLineItem: c.length > 0 };
}
function I(e, t) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: i = !1, subscriptionPlan: s } = t;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, r.Lw)(s, { isCustomGift: n, isPrepaidPaymentSource: i }),
            amount: e.total - e.tax,
        },
    ];
}
function T(e, t) {
    let n = (0, s.NL)(e),
        i = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                i = new Date(t.appliedAt?.getTime() ?? Date.now()),
                r = "",
                s = t.getFullIntervalCount();
            switch (n.userUsageLimitInterval) {
                case u.Ff.DAY:
                    i.setDate(i.getDate() + s),
                        (r = c.intl.formatToPlainString(d.default.WzJTZI, { intervalCount: s }));
                    break;
                case u.Ff.WEEK:
                    i.setDate(i.getDate() + 7 * s),
                        (r = c.intl.formatToPlainString(d.default.LHWoqL, { intervalCount: s }));
                    break;
                case u.Ff.MONTH:
                    i.setMonth(i.getMonth() + s),
                        (r = c.intl.formatToPlainString(d.default.ZQLDzk, { intervalCount: s }));
                    break;
                case u.Ff.YEAR:
                    i.setFullYear(i.getFullYear() + s),
                        (r = c.intl.formatToPlainString(d.default.KpnRtO, { intervalCount: s }));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: i, discountAppliedLabel: r, intervalCount: s };
        })(null != n ? n.discount_id : null, t),
        r = null != i && 1 === i.intervalCount,
        { subscriptionPlanPrice: a, subscriptionPlanId: o, amount: l } = e;
    return _(o) ? { amount: r ? a * e.quantity : l, matchedDiscountInfo: i } : { amount: l, matchedDiscountInfo: i };
}
function S(e, t, n) {
    let i = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
    if (null == i) return { renewalPrice: e.subtotal };
    let { amount: r, matchedDiscountInfo: s } = T(i, n);
    if (null == n || null == s) return { renewalPrice: r };
    if (n.getIsMultiIntervalDiscount()) {
        let e = i.subscriptionPlanPrice * i.quantity;
        return {
            renewalPrice: e,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: r,
                priceWithoutDiscount: e,
                discountEndDate: s.discountEndDate,
            },
        };
    }
    return { renewalPrice: r };
}
function y(e, t, n) {
    let {
            overrideRenewalDate: a,
            isSubscriptionUpdate: h,
            discountOffer: f,
            fractionalPremiumInfo: p,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        E = (0, s.Q8)(t, e, { isSubscriptionUpdate: h }),
        { intervalType: m, intervalCount: g } = (0, o.Ge)(t),
        A = t.currency,
        I = [],
        S = E.some((e) => (0, o.xq)(e.subscriptionPlanId));
    for (let e of E) {
        let { subscriptionPlanId: t } = e,
            { lineItem: r } = (function (e, t, n) {
                let {
                        invoiceIncludesPremiumBasePlan: r,
                        isPremiumPlanInvoiceItem: a,
                        intervalType: u,
                        intervalCount: _,
                        discountOffer: h,
                        currency: f,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: p } = e,
                    {
                        label: E,
                        subscriptionDiscount: m,
                        originalAmount: g,
                    } = (0, s.Ae)(e, { subscriptionTrial: t, currency: f }),
                    A = p ? c.intl.format(c.t.UDop9c, {}) : void 0,
                    I =
                        a || null == m
                            ? null
                            : {
                                  subText: (0, l.CE)((0, l.$g)(g, f), u, _),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: r && (0, o.z4)(e.subscriptionPlanId) ? i.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: S, matchedDiscountInfo: y } = T(e, h),
                    C = null != y && y.intervalCount > 1,
                    N =
                        a && C
                            ? {
                                  subText: c.intl.format(d.default.Chj1Ke, { discountEndDate: y.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: y, lineItem: { id: e.id, label: E, amount: S, tooltip: A, ...N, ...I } };
            })(e, n, {
                invoiceIncludesPremiumBasePlan: S,
                isPremiumPlanInvoiceItem: _(t),
                intervalType: m,
                intervalCount: g,
                discountOffer: f,
                currency: A,
            });
        I.push(r);
    }
    let y = (0, r.de)({
        overrideRenewalDate: a,
        currentInvoice: e,
        renewalInvoice: t,
        isSubscriptionUpdate: h,
        fractionalPremiumInfo: p,
    });
    return {
        lineItems: I,
        intervalType: m,
        intervalCount: g,
        currency: A,
        label: c.intl.string(d.default.GGn3pp),
        totalLineItemValueSubText: c.intl.string(d.default.yvUaHi),
        totalLineItemLabel: (function (e, t) {
            if (1 === t)
                switch (e) {
                    case u.WT.MONTH:
                        return c.intl.string(d.default.WrFWOV);
                    case u.WT.YEAR:
                        return c.intl.string(d.default.SxKq52);
                }
            return c.intl.string(d.default.jxUJkZ);
        })(m, g),
        totalLineItemLabelSubText: c.intl.format(d.default.MR4VnX, { renewalDate: y }),
    };
}
