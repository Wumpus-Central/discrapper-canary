n.d(t, {
    EA: () => g,
    Gj: () => I,
    IY: () => v,
    Ig: () => A,
    QM: () => T,
    XP: () => L,
    fk: () => C,
    iK: () => x,
    ib: () => f,
}),
    n(321073);
var s = n(403581),
    r = n(400612),
    i = n(692440),
    a = n(815545),
    l = n(428262),
    u = n(580630),
    c = n(202541),
    o = n(375708),
    d = n(327105);
function m(e) {
    return (0, l.xq)(e) || (0, l.Zb)(e);
}
function f(e) {
    let { includeNowSuffix: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return t
        ? o.intl.format(d.default.U2CmMW, {
              priceAmount: (0, u.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, u.$g)(0, e);
}
function p(e, t, n) {
    return { id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" };
}
function x(e) {
    let { interval: t } = e,
        n = (0, l.m6)(e.id);
    switch (t) {
        case c.WT.MONTH:
            let s = o.intl.string(d.default.ZnoRKt);
            return n === c.PremiumTypes.TIER_0
                ? o.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: s })
                : o.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: s });
        case c.WT.YEAR:
            let r = o.intl.string(d.default.Xrg8aC);
            return n === c.PremiumTypes.TIER_0
                ? o.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: r })
                : o.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: r });
        case c.WT.DAY:
            let i = o.intl.string(d.default.WmjxYl);
            return n === c.PremiumTypes.TIER_0
                ? o.intl.formatToPlainString(d.default.Z9mu9q, { timeInterval: i })
                : o.intl.formatToPlainString(d.default["8Jt4Dw"], { timeInterval: i });
    }
}
function g(e) {
    let { id: t, label: n, amount: s, subscriptionDiscount: r, entitlementDiscount: i, currency: a } = e,
        l = [{ id: t, label: n, amount: s }];
    return (
        null != r && l.push(p(r, "subscription-discount", o.intl.string(d.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != i, lineItems: l, currency: a }
    );
}
function h(e, t) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            invoiceAdjustmentDisplayItems: r,
            currency: i,
            subscriptionPlan: l,
            subscriptionTrial: u,
            excludeDiscountsAndAdjustments: c,
        } = t,
        {
            label: m,
            amount: f,
            amountWithoutDiscount: x,
            subscriptionDiscount: g,
            entitlementDiscount: h,
        } = (0, a.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: l,
            subscriptionTrial: u,
            isPrepaidPaymentSource: s,
            currency: i,
        }),
        A = null != g || null != h,
        v = { id: e.id, label: m, amount: A ? x : f, lineItemType: "main" },
        C = [
            v,
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
        null == g || c || C.push(p(g, "subscription-discount", o.intl.string(d.default["9yHcmL"]))),
        { lineItems: C, primaryLineItem: v, entitlementDiscount: h }
    );
}
function A(e, t) {
    let {
            subscriptionTrial: n,
            subscriptionPlan: s,
            isPrepaidPaymentSource: r = !1,
            includeTaxLineItem: i = !0,
            excludeDiscountsAndAdjustments: l,
        } = t,
        {
            basePlanInvoiceItem: u,
            guildSubscriptionInvoiceItem: c,
            guildSubscriptionPlan: d,
            guildSubscriptionAmount: m,
            guildBoostItemLabel: f,
        } = (0, a.wt)(e, { isPrepaidPaymentSource: r });
    if (null == u) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: p,
        primaryLineItem: x,
        entitlementDiscount: g,
    } = h(u, {
        subscriptionPlan: s,
        subscriptionTrial: n,
        isPrepaidPaymentSource: r,
        currency: e.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: l,
    });
    return (
        0 !== m && null != c && null != d && null != f && p.push({ id: c.id, label: f, amount: m }),
        i && p.push({ id: "tax", label: o.intl.string(o.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
        { lineItems: p, primaryLineItem: x, entitlementDiscount: g }
    );
}
function v(e, t) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: s, subscriptionPlan: i, subscriptionTrial: l } = t,
        { newPlanInvoiceItem: u, basePlanFullAmount: c, invoiceAdjustmentDisplayItems: o } = (0, a.SA)(e, i),
        {
            lineItems: d,
            primaryLineItem: m,
            entitlementDiscount: f,
        } = h(u, {
            overrideAmount: r.ME.has(s) ? c : void 0,
            subscriptionPlan: i,
            subscriptionTrial: l,
            isPrepaidPaymentSource: n,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: o,
        });
    return { lineItems: d, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: o.length > 0 };
}
function C(e, t) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: s = !1, subscriptionPlan: r } = t;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, i.Lw)(r, { isCustomGift: n, isPrepaidPaymentSource: s }),
            amount: e.total - e.tax,
        },
    ];
}
function L(e, t) {
    let { intervalType: n, intervalCount: s } = t,
        r = new Date(e.getTime());
    return (
        n === c.WT.MONTH
            ? r.setMonth(r.getMonth() + s)
            : n === c.WT.YEAR
              ? r.setFullYear(r.getFullYear() + s)
              : r.setDate(r.getDate() + s),
        r
    );
}
function y(e, t) {
    let n = (0, a.NL)(e),
        s = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                s = new Date(t.appliedAt?.getTime() ?? Date.now()),
                r = "",
                i = t.getFullIntervalCount();
            switch (n.userUsageLimitInterval) {
                case c.Ff.DAY:
                    s.setDate(s.getDate() + i),
                        (r = o.intl.formatToPlainString(d.default.WzJTZI, { intervalCount: i }));
                    break;
                case c.Ff.WEEK:
                    s.setDate(s.getDate() + 7 * i),
                        (r = o.intl.formatToPlainString(d.default.LHWoqL, { intervalCount: i }));
                    break;
                case c.Ff.MONTH:
                    s.setMonth(s.getMonth() + i),
                        (r = o.intl.formatToPlainString(d.default.ZQLDzk, { intervalCount: i }));
                    break;
                case c.Ff.YEAR:
                    s.setFullYear(s.getFullYear() + i),
                        (r = o.intl.formatToPlainString(d.default.KpnRtO, { intervalCount: i }));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: s, discountAppliedLabel: r, intervalCount: i };
        })(null != n ? n.discount_id : null, t),
        r = null != s && 1 === s.intervalCount,
        { subscriptionPlanPrice: i, subscriptionPlanId: l, amount: u } = e;
    return m(l) ? { amount: r ? i * e.quantity : u, matchedDiscountInfo: s } : { amount: u, matchedDiscountInfo: s };
}
function T(e, t, n) {
    let s = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
    if (null == s) return { renewalPrice: e.subtotal };
    let r = e.invoiceItems.filter((e) => e !== s && null != e.subscriptionPlanId).reduce((e, t) => e + t.amount, 0),
        { amount: i, matchedDiscountInfo: a } = y(s, n);
    if (null == n || null == a) return { renewalPrice: i + r };
    if (n.getIsMultiIntervalDiscount()) {
        let e = s.subscriptionPlanPrice * s.quantity,
            t = n.getDiscountInterval() === c.Ff.WEEK;
        return {
            renewalPrice: e + r,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: i + r,
                priceWithoutDiscount: e + r,
                discountEndDate: a.discountEndDate,
                intervalCount: t ? 7 * a.intervalCount : a.intervalCount,
                intervalType: n.getApplicableSubscriptionInterval(),
            },
        };
    }
    return { renewalPrice: i + r };
}
function I(e, t, n) {
    let {
            overrideRenewalDate: r,
            isSubscriptionUpdate: f,
            discountOffer: p,
            fractionalPremiumInfo: x,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        g = (0, a.Q8)(t, e, { isSubscriptionUpdate: f }),
        { intervalType: h, intervalCount: A } = (0, l.Ge)(t),
        v = t.currency,
        C = [],
        L = g.some((e) => (0, l.xq)(e.subscriptionPlanId));
    for (let e of g) {
        let { subscriptionPlanId: t } = e,
            { lineItem: r } = (function (e, t, n) {
                let {
                        invoiceIncludesPremiumBasePlan: r,
                        isPremiumPlanInvoiceItem: i,
                        intervalType: c,
                        intervalCount: m,
                        discountOffer: f,
                        currency: p,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: x } = e,
                    {
                        label: g,
                        subscriptionDiscount: h,
                        originalAmount: A,
                    } = (0, a.Ae)(e, { subscriptionTrial: t, currency: p }),
                    v = x ? o.intl.format(o.t.UDop9c, {}) : void 0,
                    C =
                        i || null == h
                            ? null
                            : {
                                  subText: (0, u.CE)((0, u.$g)(A, p), c, m),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: r && (0, l.z4)(e.subscriptionPlanId) ? s.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: L, matchedDiscountInfo: T } = y(e, f),
                    I = null != T && T.intervalCount > 1,
                    b =
                        i && I
                            ? {
                                  subText: o.intl.format(d.default.Chj1Ke, { discountEndDate: T.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: T, lineItem: { id: e.id, label: g, amount: L, tooltip: v, ...b, ...C } };
            })(e, n, {
                invoiceIncludesPremiumBasePlan: L,
                isPremiumPlanInvoiceItem: m(t),
                intervalType: h,
                intervalCount: A,
                discountOffer: p,
                currency: v,
            });
        C.push(r);
    }
    let T = (0, i.de)({
        overrideRenewalDate: r,
        currentInvoice: e,
        renewalInvoice: t,
        isSubscriptionUpdate: f,
        fractionalPremiumInfo: x,
    });
    return {
        renewalDate: T,
        lineItems: C,
        intervalType: h,
        intervalCount: A,
        currency: v,
        label: o.intl.string(d.default.GGn3pp),
        totalLineItemValueSubText: o.intl.string(d.default.yvUaHi),
        totalLineItemLabel: (function (e, t) {
            if (1 === t)
                switch (e) {
                    case c.WT.MONTH:
                        return o.intl.string(d.default.WrFWOV);
                    case c.WT.YEAR:
                        return o.intl.string(d.default.SxKq52);
                }
            return o.intl.string(d.default.jxUJkZ);
        })(h, A),
        totalLineItemLabelSubText: o.intl.format(d.default.MR4VnX, { renewalDate: T }),
    };
}
