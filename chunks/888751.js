n.d(t, { EA: () => A, Gj: () => y, Go: () => L, IY: () => b, Ig: () => h, fk: () => C, iK: () => g, ib: () => f }),
    n(321073);
var a = n(403581),
    r = n(692440),
    s = n(815545),
    l = n(299301),
    i = n(428262),
    u = n(580630),
    o = n(202541),
    c = n(375708),
    d = n(327105);
function m(e) {
    return (0, i.xq)(e) || (0, i.Zb)(e);
}
function f(e) {
    let { includeNowSuffix: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return t
        ? c.intl.format(d.default.U2CmMW, {
              priceAmount: (0, u.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, u.$g)(0, e);
}
function p(e, t, n) {
    return { id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" };
}
function g(e) {
    let { interval: t } = e,
        n = (0, i.m6)(e.id);
    switch (t) {
        case o.WT.MONTH:
            let a = c.intl.string(d.default.ZnoRKt);
            return n === o.PremiumTypes.TIER_0
                ? c.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: a })
                : c.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: a });
        case o.WT.YEAR:
            let r = c.intl.string(d.default.Xrg8aC);
            return n === o.PremiumTypes.TIER_0
                ? c.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: r })
                : c.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: r });
        case o.WT.DAY:
            let s = c.intl.string(d.default.WmjxYl);
            return n === o.PremiumTypes.TIER_0
                ? c.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: s })
                : c.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: s });
    }
}
function A(e) {
    let { id: t, label: n, amount: a, subscriptionDiscount: r, entitlementDiscount: s, currency: l } = e,
        i = [{ id: t, label: n, amount: a }];
    return (
        null != r && i.push(p(r, "subscription-discount", c.intl.string(d.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != s, lineItems: i, currency: l }
    );
}
function x(e, t) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: a,
            invoiceAdjustmentDisplayItems: r,
            currency: l,
            subscriptionPlan: i,
            subscriptionTrial: u,
            excludeDiscountsAndAdjustments: o,
        } = t,
        {
            label: m,
            amount: f,
            amountWithoutDiscount: g,
            subscriptionDiscount: A,
            entitlementDiscount: x,
        } = (0, s.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: i,
            subscriptionTrial: u,
            isPrepaidPaymentSource: a,
            currency: l,
        }),
        h = null != A || null != x,
        b = { id: e.id, label: m, amount: h ? g : f, lineItemType: "main" },
        C = [
            b,
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
        null == A || o || C.push(p(A, "subscription-discount", c.intl.string(d.default["9yHcmL"]))),
        { lineItems: C, primaryLineItem: b, entitlementDiscount: x }
    );
}
function h(e, t) {
    let {
            subscriptionTrial: n,
            subscriptionPlan: a,
            isPrepaidPaymentSource: r = !1,
            includeTaxLineItem: l = !0,
            excludeDiscountsAndAdjustments: i,
        } = t,
        {
            basePlanInvoiceItem: u,
            guildSubscriptionInvoiceItem: o,
            guildSubscriptionPlan: d,
            guildSubscriptionAmount: m,
            guildBoostItemLabel: f,
        } = (0, s.wt)(e, { isPrepaidPaymentSource: r });
    if (null == u) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: p,
        primaryLineItem: g,
        entitlementDiscount: A,
    } = x(u, {
        subscriptionPlan: a,
        subscriptionTrial: n,
        isPrepaidPaymentSource: r,
        currency: e.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: i,
    });
    return (
        0 !== m && null != o && null != d && null != f && p.push({ id: o.id, label: f, amount: m }),
        l && p.push({ id: "tax", label: c.intl.string(c.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
        { lineItems: p, primaryLineItem: g, entitlementDiscount: A }
    );
}
function b(e, t) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: a, subscriptionPlan: r, subscriptionTrial: i } = t,
        { newPlanInvoiceItem: u, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: c } = (0, s.SA)(e, r),
        {
            lineItems: d,
            primaryLineItem: m,
            entitlementDiscount: f,
        } = x(u, {
            overrideAmount: l.IJ.has(a) ? o : void 0,
            subscriptionPlan: r,
            subscriptionTrial: i,
            isPrepaidPaymentSource: n,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: c,
        });
    return { lineItems: d, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: c.length > 0 };
}
function C(e, t) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: a = !1, subscriptionPlan: s } = t;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, r.Lw)(s, { isCustomGift: n, isPrepaidPaymentSource: a }),
            amount: e.total - e.tax,
        },
    ];
}
function _(e, t) {
    let n = (0, s.NL)(e),
        a = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                a = new Date(t.appliedAt?.getTime() ?? Date.now()),
                r = "",
                s = t.getFullIntervalCount();
            switch (n.userUsageLimitInterval) {
                case o.Ff.DAY:
                    a.setDate(a.getDate() + s),
                        (r = c.intl.formatToPlainString(d.default.WzJTZI, { intervalCount: s }));
                    break;
                case o.Ff.WEEK:
                    a.setDate(a.getDate() + 7 * s),
                        (r = c.intl.formatToPlainString(d.default.LHWoqL, { intervalCount: s }));
                    break;
                case o.Ff.MONTH:
                    a.setMonth(a.getMonth() + s),
                        (r = c.intl.formatToPlainString(d.default.ZQLDzk, { intervalCount: s }));
                    break;
                case o.Ff.YEAR:
                    a.setFullYear(a.getFullYear() + s),
                        (r = c.intl.formatToPlainString(d.default.KpnRtO, { intervalCount: s }));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: a, discountAppliedLabel: r, intervalCount: s };
        })(null != n ? n.discount_id : null, t),
        r = null != a && 1 === a.intervalCount,
        { subscriptionPlanPrice: l, subscriptionPlanId: i, amount: u } = e;
    return m(i) ? { amount: r ? l * e.quantity : u, matchedDiscountInfo: a } : { amount: u, matchedDiscountInfo: a };
}
function L(e, t, n) {
    let a = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
    if (null == a) return { renewalPrice: e.subtotal };
    let r = e.invoiceItems.filter((e) => e !== a && null != e.subscriptionPlanId).reduce((e, t) => e + t.amount, 0),
        { amount: s, matchedDiscountInfo: l } = _(a, n);
    if (null == n || null == l) return { renewalPrice: s + r };
    if (n.getIsMultiIntervalDiscount()) {
        let e = a.subscriptionPlanPrice * a.quantity;
        return {
            renewalPrice: e + r,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: s + r,
                priceWithoutDiscount: e + r,
                discountEndDate: l.discountEndDate,
            },
        };
    }
    return { renewalPrice: s + r };
}
function y(e, t, n) {
    let {
            overrideRenewalDate: l,
            isSubscriptionUpdate: f,
            discountOffer: p,
            fractionalPremiumInfo: g,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        A = (0, s.Q8)(t, e, { isSubscriptionUpdate: f }),
        { intervalType: x, intervalCount: h } = (0, i.Ge)(t),
        b = t.currency,
        C = [],
        L = A.some((e) => (0, i.xq)(e.subscriptionPlanId));
    for (let e of A) {
        let { subscriptionPlanId: t } = e,
            { lineItem: r } = (function (e, t, n) {
                let {
                        invoiceIncludesPremiumBasePlan: r,
                        isPremiumPlanInvoiceItem: l,
                        intervalType: o,
                        intervalCount: m,
                        discountOffer: f,
                        currency: p,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: g } = e,
                    {
                        label: A,
                        subscriptionDiscount: x,
                        originalAmount: h,
                    } = (0, s.Ae)(e, { subscriptionTrial: t, currency: p }),
                    b = g ? c.intl.format(c.t.UDop9c, {}) : void 0,
                    C =
                        l || null == x
                            ? null
                            : {
                                  subText: (0, u.CE)((0, u.$g)(h, p), o, m),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: r && (0, i.z4)(e.subscriptionPlanId) ? a.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: L, matchedDiscountInfo: y } = _(e, f),
                    v = null != y && y.intervalCount > 1,
                    E =
                        l && v
                            ? {
                                  subText: c.intl.format(d.default.Chj1Ke, { discountEndDate: y.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: y, lineItem: { id: e.id, label: A, amount: L, tooltip: b, ...E, ...C } };
            })(e, n, {
                invoiceIncludesPremiumBasePlan: L,
                isPremiumPlanInvoiceItem: m(t),
                intervalType: x,
                intervalCount: h,
                discountOffer: p,
                currency: b,
            });
        C.push(r);
    }
    let y = (0, r.de)({
        overrideRenewalDate: l,
        currentInvoice: e,
        renewalInvoice: t,
        isSubscriptionUpdate: f,
        fractionalPremiumInfo: g,
    });
    return {
        renewalDate: y,
        lineItems: C,
        intervalType: x,
        intervalCount: h,
        currency: b,
        label: c.intl.string(d.default.GGn3pp),
        totalLineItemValueSubText: c.intl.string(d.default.yvUaHi),
        totalLineItemLabel: (function (e, t) {
            if (1 === t)
                switch (e) {
                    case o.WT.MONTH:
                        return c.intl.string(d.default.WrFWOV);
                    case o.WT.YEAR:
                        return c.intl.string(d.default.SxKq52);
                }
            return c.intl.string(d.default.jxUJkZ);
        })(x, h),
        totalLineItemLabelSubText: c.intl.format(d.default.MR4VnX, { renewalDate: y }),
    };
}
