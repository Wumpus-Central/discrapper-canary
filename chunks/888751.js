n.d(t, { EA: () => A, Gj: () => x, Go: () => I, IY: () => _, Ig: () => v, fk: () => y, iK: () => b, ib: () => f }),
    n(321073);
var a = n(403581),
    r = n(458785),
    l = n(815545),
    i = n(299301),
    s = n(428262),
    u = n(580630),
    o = n(202541),
    c = n(375708),
    d = n(327105);
function m(e) {
    return (0, s.xq)(e) || (0, s.Zb)(e);
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
function b(e) {
    let { interval: t } = e,
        n = (0, s.m6)(e.id);
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
            let l = c.intl.string(d.default.WmjxYl);
            return n === o.PremiumTypes.TIER_0
                ? c.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: l })
                : c.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: l });
    }
}
function A(e) {
    let { id: t, label: n, amount: a, subscriptionDiscount: r, entitlementDiscount: l, currency: i } = e,
        s = [{ id: t, label: n, amount: a }];
    return (
        null != r && s.push(p(r, "subscription-discount", c.intl.string(d.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != l, lineItems: s, currency: i }
    );
}
function g(e, t) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: a,
            invoiceAdjustmentDisplayItems: r,
            currency: i,
            subscriptionPlan: s,
            subscriptionTrial: u,
            excludeDiscountsAndAdjustments: o,
        } = t,
        {
            label: m,
            amount: f,
            amountWithoutDiscount: b,
            subscriptionDiscount: A,
            entitlementDiscount: g,
        } = (0, l.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: s,
            subscriptionTrial: u,
            isPrepaidPaymentSource: a,
            currency: i,
        }),
        v = null != A || null != g,
        _ = { id: e.id, label: m, amount: v ? b : f, lineItemType: "main" },
        y = [
            _,
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
        null == A || o || y.push(p(A, "subscription-discount", c.intl.string(d.default["9yHcmL"]))),
        { lineItems: y, primaryLineItem: _, entitlementDiscount: g }
    );
}
function v(e, t) {
    let {
            subscriptionTrial: n,
            subscriptionPlan: a,
            isPrepaidPaymentSource: r = !1,
            includeTaxLineItem: i = !0,
            excludeDiscountsAndAdjustments: s,
        } = t,
        {
            basePlanInvoiceItem: u,
            guildSubscriptionInvoiceItem: o,
            guildSubscriptionPlan: d,
            guildSubscriptionAmount: m,
            guildBoostItemLabel: f,
        } = (0, l.wt)(e, { isPrepaidPaymentSource: r });
    if (null == u) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: p,
        primaryLineItem: b,
        entitlementDiscount: A,
    } = g(u, {
        subscriptionPlan: a,
        subscriptionTrial: n,
        isPrepaidPaymentSource: r,
        currency: e.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: s,
    });
    return (
        0 !== m && null != o && null != d && null != f && p.push({ id: o.id, label: f, amount: m }),
        i && p.push({ id: "tax", label: c.intl.string(c.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
        { lineItems: p, primaryLineItem: b, entitlementDiscount: A }
    );
}
function _(e, t) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: a, subscriptionPlan: r, subscriptionTrial: s } = t,
        { newPlanInvoiceItem: u, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: c } = (0, l.SA)(e, r),
        {
            lineItems: d,
            primaryLineItem: m,
            entitlementDiscount: f,
        } = g(u, {
            overrideAmount: i.IJ.has(a) ? o : void 0,
            subscriptionPlan: r,
            subscriptionTrial: s,
            isPrepaidPaymentSource: n,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: c,
        });
    return { lineItems: d, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: c.length > 0 };
}
function y(e, t) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: a = !1, subscriptionPlan: l } = t;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, r.Lw)(l, { isCustomGift: n, isPrepaidPaymentSource: a }),
            amount: e.total - e.tax,
        },
    ];
}
function h(e, t) {
    let n = (0, l.NL)(e),
        a = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                a = new Date(t.appliedAt?.getTime() ?? Date.now()),
                r = "",
                l = t.getFullIntervalCount();
            switch (n.userUsageLimitInterval) {
                case o.Ff.DAY:
                    a.setDate(a.getDate() + l),
                        (r = c.intl.formatToPlainString(d.default.WzJTZI, { intervalCount: l }));
                    break;
                case o.Ff.WEEK:
                    a.setDate(a.getDate() + 7 * l),
                        (r = c.intl.formatToPlainString(d.default.LHWoqL, { intervalCount: l }));
                    break;
                case o.Ff.MONTH:
                    a.setMonth(a.getMonth() + l),
                        (r = c.intl.formatToPlainString(d.default.ZQLDzk, { intervalCount: l }));
                    break;
                case o.Ff.YEAR:
                    a.setFullYear(a.getFullYear() + l),
                        (r = c.intl.formatToPlainString(d.default.KpnRtO, { intervalCount: l }));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: a, discountAppliedLabel: r, intervalCount: l };
        })(null != n ? n.discount_id : null, t),
        r = null != a && 1 === a.intervalCount,
        { subscriptionPlanPrice: i, subscriptionPlanId: s, amount: u } = e;
    return m(s) ? { amount: r ? i * e.quantity : u, matchedDiscountInfo: a } : { amount: u, matchedDiscountInfo: a };
}
function I(e, t, n) {
    let a = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
    if (null == a) return { renewalPrice: e.subtotal };
    let { amount: r, matchedDiscountInfo: l } = h(a, n);
    if (null == n || null == l) return { renewalPrice: r };
    if (n.getIsMultiIntervalDiscount()) {
        let e = a.subscriptionPlanPrice * a.quantity;
        return {
            renewalPrice: e,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: r,
                priceWithoutDiscount: e,
                discountEndDate: l.discountEndDate,
            },
        };
    }
    return { renewalPrice: r };
}
function x(e, t, n) {
    let {
            overrideRenewalDate: i,
            isSubscriptionUpdate: f,
            discountOffer: p,
            fractionalPremiumInfo: b,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        A = (0, l.Q8)(t, e, { isSubscriptionUpdate: f }),
        { intervalType: g, intervalCount: v } = (0, s.Ge)(t),
        _ = t.currency,
        y = [],
        I = A.some((e) => (0, s.xq)(e.subscriptionPlanId));
    for (let e of A) {
        let { subscriptionPlanId: t } = e,
            { lineItem: r } = (function (e, t, n) {
                let {
                        invoiceIncludesPremiumBasePlan: r,
                        isPremiumPlanInvoiceItem: i,
                        intervalType: o,
                        intervalCount: m,
                        discountOffer: f,
                        currency: p,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: b } = e,
                    {
                        label: A,
                        subscriptionDiscount: g,
                        originalAmount: v,
                    } = (0, l.Ae)(e, { subscriptionTrial: t, currency: p }),
                    _ = b ? c.intl.format(c.t.UDop9c, {}) : void 0,
                    y =
                        i || null == g
                            ? null
                            : {
                                  subText: (0, u.CE)((0, u.$g)(v, p), o, m),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: r && (0, s.z4)(e.subscriptionPlanId) ? a.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: I, matchedDiscountInfo: x } = h(e, f),
                    E = null != x && x.intervalCount > 1,
                    T =
                        i && E
                            ? {
                                  subText: c.intl.format(d.default.Chj1Ke, { discountEndDate: x.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: x, lineItem: { id: e.id, label: A, amount: I, tooltip: _, ...T, ...y } };
            })(e, n, {
                invoiceIncludesPremiumBasePlan: I,
                isPremiumPlanInvoiceItem: m(t),
                intervalType: g,
                intervalCount: v,
                discountOffer: p,
                currency: _,
            });
        y.push(r);
    }
    let x = (0, r.de)({
        overrideRenewalDate: i,
        currentInvoice: e,
        renewalInvoice: t,
        isSubscriptionUpdate: f,
        fractionalPremiumInfo: b,
    });
    return {
        lineItems: y,
        intervalType: g,
        intervalCount: v,
        currency: _,
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
        })(g, v),
        totalLineItemLabelSubText: c.intl.format(d.default.MR4VnX, { renewalDate: x }),
    };
}
