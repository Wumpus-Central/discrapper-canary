(n.d(t, { EA: () => I, Gj: () => y, IY: () => P, Ig: () => E, QM: () => A, fk: () => T, iK: () => g, ib: () => f }),
    n(321073));
var r = n(536637),
    i = n.n(r),
    a = n(403581),
    l = n(400612),
    s = n(563020),
    u = n(158045),
    c = n(580630),
    o = n(202541),
    d = n(660183),
    m = n(583741);
function p(e) {
    return (0, u.xq)(e) || (0, u.Zb)(e);
}
function f(e) {
    let { includeNowSuffix: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return t
        ? d.intl.format(m.default.U2CmMW, {
              priceAmount: (0, c.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, c.$g)(0, e);
}
function v(e, t, n) {
    return { id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" };
}
function g(e) {
    let { interval: t } = e,
        n = (0, u.m6)(e.id);
    switch (t) {
        case o.WT.MONTH:
            let r = d.intl.string(m.default.ZnoRKt);
            return n === o.PremiumTypes.TIER_0
                ? d.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: r })
                : d.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: r });
        case o.WT.YEAR:
            let i = d.intl.string(m.default.Xrg8aC);
            return n === o.PremiumTypes.TIER_0
                ? d.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: i })
                : d.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: i });
        case o.WT.DAY:
            let a = d.intl.string(m.default.WmjxYl);
            return n === o.PremiumTypes.TIER_0
                ? d.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: a })
                : d.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: a });
    }
}
function I(e) {
    let { id: t, label: n, amount: r, subscriptionDiscount: i, entitlementDiscount: a, currency: l } = e,
        s = [{ id: t, label: n, amount: r }];
    return (
        null != i && s.push(v(i, "subscription-discount", d.intl.string(m.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != a, lineItems: s, currency: l }
    );
}
function x(e, t) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: r,
            invoiceAdjustmentDisplayItems: i,
            currency: a,
            subscriptionPlan: l,
            subscriptionTrial: u,
            excludeDiscountsAndAdjustments: c,
        } = t,
        {
            label: o,
            amount: p,
            amountWithoutDiscount: f,
            subscriptionDiscount: g,
            entitlementDiscount: I,
        } = (0, s.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: l,
            subscriptionTrial: u,
            isPrepaidPaymentSource: r,
            currency: a,
        }),
        x = null != g || null != I,
        E = { id: e.id, label: o, amount: x ? f : p, lineItemType: "main" },
        P = [
            E,
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
        null == g || c || P.push(v(g, "subscription-discount", d.intl.string(m.default["9yHcmL"]))),
        { lineItems: P, primaryLineItem: E, entitlementDiscount: I }
    );
}
function E(e, t) {
    let {
            subscriptionPlan: n,
            isPrepaidPaymentSource: r = !1,
            includeTaxLineItem: i = !0,
            excludeDiscountsAndAdjustments: a,
        } = t,
        {
            basePlanInvoiceItem: l,
            guildSubscriptionInvoiceItem: u,
            guildSubscriptionPlan: c,
            guildSubscriptionAmount: o,
            guildBoostItemLabel: m,
        } = (0, s.wt)(e, { isPrepaidPaymentSource: r });
    if (null == l) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: p,
        primaryLineItem: f,
        entitlementDiscount: v,
    } = x(l, {
        subscriptionPlan: n,
        subscriptionTrial: null,
        isPrepaidPaymentSource: r,
        currency: e.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: a,
    });
    return (
        0 !== o && null != u && null != c && null != m && p.push({ id: u.id, label: m, amount: o }),
        i && p.push({ id: "tax", label: d.intl.string(d.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
        { lineItems: p, primaryLineItem: f, entitlementDiscount: v }
    );
}
function P(e, t) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: r, subscriptionPlan: i, subscriptionTrial: a } = t,
        { newPlanInvoiceItem: u, basePlanFullAmount: c, invoiceAdjustmentDisplayItems: o } = (0, s.SA)(e, i),
        {
            lineItems: d,
            primaryLineItem: m,
            entitlementDiscount: p,
        } = x(u, {
            overrideAmount: l.ME.has(r) ? c : void 0,
            subscriptionPlan: i,
            subscriptionTrial: a,
            isPrepaidPaymentSource: n,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: o,
        });
    return { lineItems: d, primaryLineItem: m, entitlementDiscount: p, hasAdjustmentLineItem: o.length > 0 };
}
function T(e, t) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: i } = t;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, s.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
            amount: e.total - e.tax,
        },
    ];
}
function b(e) {
    if (null == e)
        return { isMultiPeriodTrial: !1, intervalCount: null, trial: null, multiPeriodTrialRenewalDate: null };
    let t = e.intervalCount;
    if (!(t > 1)) return { isMultiPeriodTrial: !1, intervalCount: t, trial: e, multiPeriodTrialRenewalDate: null };
    let n = (function (e, t) {
        let { intervalType: n, intervalCount: r } = t,
            a = i()(e);
        return n === o.WT.MONTH
            ? a.add(r, "months").toDate()
            : n === o.WT.YEAR
              ? a.add(r, "years").toDate()
              : a.add(r, "days").toDate();
    })(new Date(), { intervalType: e.interval, intervalCount: t });
    return { isMultiPeriodTrial: !0, intervalCount: t, trial: e, multiPeriodTrialRenewalDate: n };
}
function h(e, t) {
    let n = (0, s.NL)(e),
        r = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                r = new Date(t.appliedAt?.getTime() ?? Date.now()),
                a = i()(r),
                l = "",
                s = n.intervalCount;
            switch (n.intervalType) {
                case o.Ff.DAY:
                    ((r = a.add(s, "days").toDate()),
                        (l = d.intl.formatToPlainString(m.default.WzJTZI, { intervalCount: s })));
                    break;
                case o.Ff.WEEK:
                    ((r = a.add(s, "weeks").toDate()),
                        (l = d.intl.formatToPlainString(m.default.LHWoqL, { intervalCount: s })));
                    break;
                case o.Ff.MONTH:
                    ((r = a.add(s, "months").toDate()),
                        (l = d.intl.formatToPlainString(m.default.ZQLDzk, { intervalCount: s })));
                    break;
                case o.Ff.YEAR:
                    ((r = a.add(s, "years").toDate()),
                        (l = d.intl.formatToPlainString(m.default.KpnRtO, { intervalCount: s })));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: r, discountAppliedLabel: l, intervalCount: s };
        })(null != n ? n.discount_id : null, t),
        a = null != r && 1 === r.intervalCount,
        { subscriptionPlanPrice: l, subscriptionPlanId: u, amount: c } = e;
    return p(u) ? { amount: a ? l * e.quantity : c, matchedDiscountInfo: r } : { amount: c, matchedDiscountInfo: r };
}
function A(e, t, n) {
    let { discountOffer: r, subscriptionTrial: i } = n,
        a = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
    if (null == a) return { renewalPrice: e.subtotal };
    let l = e.invoiceItems.filter((e) => e !== a && null != e.subscriptionPlanId).reduce((e, t) => e + t.amount, 0),
        { amount: s, matchedDiscountInfo: u } = h(a, r),
        c = s + l,
        d = (function (e, t) {
            let { multiPeriodTrialRenewalDate: n, isMultiPeriodTrial: r, trial: i, intervalCount: a } = b(e);
            return r
                ? {
                      isMultiPeriodTrial: !0,
                      multiPeriodDiscountAttributes: {
                          discountedRenewalPrice: 0,
                          discountEndDate: n,
                          priceWithoutDiscount: t,
                          intervalCount: a,
                          intervalType: i.interval,
                      },
                  }
                : { isMultiPeriodTrial: !1, multiPeriodDiscountAttributes: void 0 };
        })(i, c);
    if (d.isMultiPeriodTrial) {
        let { multiPeriodDiscountAttributes: e } = d;
        return { renewalPrice: c, multiPeriodDiscountAttributes: e };
    }
    if (null == r || null == u) return { renewalPrice: c };
    if (r.discount.isMultiInterval) {
        let e = a.subscriptionPlanPrice * a.quantity,
            t = r.discount.intervalType === o.Ff.WEEK;
        return {
            renewalPrice: e + l,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: c,
                priceWithoutDiscount: e + l,
                discountEndDate: u.discountEndDate,
                intervalCount: t ? 7 * u.intervalCount : u.intervalCount,
                intervalType: r.discount.applicableSubscriptionInterval,
            },
        };
    }
    return { renewalPrice: c };
}
function y(e, t, n) {
    let {
            overrideRenewalDate: r,
            isSubscriptionUpdate: i,
            discountOffer: l,
            fractionalPremiumInfo: f,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        v = (0, s.Q8)(t, e, { isSubscriptionUpdate: i }),
        { intervalType: g, intervalCount: I } = (0, u.Ge)(t),
        x = t.currency,
        E = [],
        P = v.some((e) => (0, u.xq)(e.subscriptionPlanId));
    for (let e of v) {
        let { subscriptionPlanId: t } = e,
            { lineItem: r } = (function (e, t, n) {
                let {
                        invoiceIncludesPremiumBasePlan: r,
                        isPremiumPlanInvoiceItem: i,
                        intervalType: l,
                        intervalCount: o,
                        discountOffer: p,
                        currency: f,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: v } = e,
                    {
                        label: g,
                        subscriptionDiscount: I,
                        originalAmount: x,
                    } = (0, s.Ae)(e, { subscriptionTrial: t, currency: f }),
                    E = v ? d.intl.format(d.t.UDop9c, {}) : void 0,
                    P =
                        i || null == I
                            ? null
                            : {
                                  subText: (0, c.CE)((0, c.$g)(x, f), l, o),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: r && (0, u.z4)(e.subscriptionPlanId) ? a.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: T, matchedDiscountInfo: b } = h(e, p),
                    A = null != b && b.intervalCount > 1,
                    y =
                        i && A
                            ? {
                                  subText: d.intl.format(m.default.Chj1Ke, { discountEndDate: b.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: b, lineItem: { id: e.id, label: g, amount: T, tooltip: E, ...y, ...P } };
            })(e, n, {
                invoiceIncludesPremiumBasePlan: P,
                isPremiumPlanInvoiceItem: p(t),
                intervalType: g,
                intervalCount: I,
                discountOffer: l,
                currency: x,
            });
        E.push(r);
    }
    let T = b(n),
        A = (0, s.de)({
            overrideRenewalDate: r ?? T.multiPeriodTrialRenewalDate ?? void 0,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: i,
            fractionalPremiumInfo: f,
        });
    return {
        renewalDate: A,
        lineItems: E,
        intervalType: g,
        intervalCount: I,
        currency: x,
        label: d.intl.string(m.default.GGn3pp),
        totalLineItemValueSubText: d.intl.string(m.default.yvUaHi),
        totalLineItemLabel: (function (e, t) {
            if (1 === t)
                switch (e) {
                    case o.WT.MONTH:
                        return d.intl.string(m.default.WrFWOV);
                    case o.WT.YEAR:
                        return d.intl.string(m.default.SxKq52);
                }
            return d.intl.string(m.default.jxUJkZ);
        })(g, I),
        totalLineItemLabelSubText: d.intl.format(m.default.MR4VnX, { renewalDate: A }),
    };
}
