(i.d(e, { EA: () => I, Gj: () => A, IY: () => g, Ig: () => D, QM: () => x, fk: () => y, iK: () => b, ib: () => v }),
    i(321073));
var n = i(536637),
    l = i.n(n),
    u = i(403581),
    r = i(400612),
    a = i(692440),
    o = i(815545),
    d = i(158045),
    s = i(580630),
    c = i(202541),
    m = i(375708),
    f = i(649975);
function p(t) {
    return (0, d.xq)(t) || (0, d.Zb)(t);
}
function v(t) {
    let { includeNowSuffix: e } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return e
        ? m.intl.format(f.default.U2CmMW, {
              priceAmount: (0, s.$g)(0, t, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, s.$g)(0, t);
}
function T(t, e, i) {
    return { id: t.discount_id ?? e, label: i, amount: -t.amount, lineItemType: "discount" };
}
function b(t) {
    let { interval: e } = t,
        i = (0, d.m6)(t.id);
    switch (e) {
        case c.WT.MONTH:
            let n = m.intl.string(f.default.ZnoRKt);
            return i === c.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: n })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: n });
        case c.WT.YEAR:
            let l = m.intl.string(f.default.Xrg8aC);
            return i === c.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: l })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: l });
        case c.WT.DAY:
            let u = m.intl.string(f.default.WmjxYl);
            return i === c.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: u })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: u });
    }
}
function I(t) {
    let { id: e, label: i, amount: n, subscriptionDiscount: l, entitlementDiscount: u, currency: r } = t,
        a = [{ id: e, label: i, amount: n }];
    return (
        null != l && a.push(T(l, "subscription-discount", m.intl.string(f.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != u, lineItems: a, currency: r }
    );
}
function P(t, e) {
    let {
            overrideAmount: i,
            isPrepaidPaymentSource: n,
            invoiceAdjustmentDisplayItems: l,
            currency: u,
            subscriptionPlan: r,
            subscriptionTrial: a,
            excludeDiscountsAndAdjustments: d,
        } = e,
        {
            label: s,
            amount: c,
            amountWithoutDiscount: p,
            subscriptionDiscount: v,
            entitlementDiscount: b,
        } = (0, o.Ae)(t, {
            overrideAmount: i,
            subscriptionPlan: r,
            subscriptionTrial: a,
            isPrepaidPaymentSource: n,
            currency: u,
        }),
        I = null != v || null != b,
        P = { id: t.id, label: s, amount: I ? p : c, lineItemType: "main" },
        D = [
            P,
            ...l.map((t) => ({
                id: t.id,
                label: t.label,
                amount: t.amount,
                tooltip: t.tooltipText,
                tooltipAriaLabel: t.tooltipAriaLabel,
                lineItemType: "adjustment",
            })),
        ];
    return (
        null == v || d || D.push(T(v, "subscription-discount", m.intl.string(f.default["9yHcmL"]))),
        { lineItems: D, primaryLineItem: P, entitlementDiscount: b }
    );
}
function D(t, e) {
    let {
            subscriptionPlan: i,
            isPrepaidPaymentSource: n = !1,
            includeTaxLineItem: l = !0,
            excludeDiscountsAndAdjustments: u,
        } = e,
        {
            basePlanInvoiceItem: r,
            guildSubscriptionInvoiceItem: a,
            guildSubscriptionPlan: d,
            guildSubscriptionAmount: s,
            guildBoostItemLabel: c,
        } = (0, o.wt)(t, { isPrepaidPaymentSource: n });
    if (null == r) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: f,
        primaryLineItem: p,
        entitlementDiscount: v,
    } = P(r, {
        subscriptionPlan: i,
        subscriptionTrial: null,
        isPrepaidPaymentSource: n,
        currency: t.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: u,
    });
    return (
        0 !== s && null != a && null != d && null != c && f.push({ id: a.id, label: c, amount: s }),
        l && f.push({ id: "tax", label: m.intl.string(m.t.jiRvC7), amount: t.tax, lineItemType: "tax" }),
        { lineItems: f, primaryLineItem: p, entitlementDiscount: v }
    );
}
function g(t, e) {
    let { isPrepaidPaymentSource: i = !1, invoiceSummaryType: n, subscriptionPlan: l, subscriptionTrial: u } = e,
        { newPlanInvoiceItem: a, basePlanFullAmount: d, invoiceAdjustmentDisplayItems: s } = (0, o.SA)(t, l),
        {
            lineItems: c,
            primaryLineItem: m,
            entitlementDiscount: f,
        } = P(a, {
            overrideAmount: r.ME.has(n) ? d : void 0,
            subscriptionPlan: l,
            subscriptionTrial: u,
            isPrepaidPaymentSource: i,
            currency: t.currency,
            invoiceAdjustmentDisplayItems: s,
        });
    return { lineItems: c, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: s.length > 0 };
}
function y(t, e) {
    let { isCustomGift: i = !1, isPrepaidPaymentSource: n = !1, subscriptionPlan: l } = e;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, a.Lw)(l, { isCustomGift: i, isPrepaidPaymentSource: n }),
            amount: t.total - t.tax,
        },
    ];
}
function h(t) {
    if (null == t)
        return { isMultiPeriodTrial: !1, intervalCount: null, trial: null, multiPeriodTrialRenewalDate: null };
    let e = t.intervalCount;
    if (!(e > 1)) return { isMultiPeriodTrial: !1, intervalCount: e, trial: t, multiPeriodTrialRenewalDate: null };
    let i = (function (t, e) {
        let { intervalType: i, intervalCount: n } = e,
            u = l()(t);
        return i === c.WT.MONTH
            ? u.add(n, "months").toDate()
            : i === c.WT.YEAR
              ? u.add(n, "years").toDate()
              : u.add(n, "days").toDate();
    })(new Date(), { intervalType: t.interval, intervalCount: e });
    return { isMultiPeriodTrial: !0, intervalCount: e, trial: t, multiPeriodTrialRenewalDate: i };
}
function w(t, e) {
    let i = (0, o.NL)(t),
        n = (function (t, e) {
            if (null == t || null == e || t !== e.discountId) return null;
            let { discount: i } = e,
                n = new Date(e.appliedAt?.getTime() ?? Date.now()),
                u = l()(n),
                r = "",
                a = i.intervalCount;
            switch (i.intervalType) {
                case c.Ff.DAY:
                    ((n = u.add(a, "days").toDate()),
                        (r = m.intl.formatToPlainString(f.default.WzJTZI, { intervalCount: a })));
                    break;
                case c.Ff.WEEK:
                    ((n = u.add(a, "weeks").toDate()),
                        (r = m.intl.formatToPlainString(f.default.LHWoqL, { intervalCount: a })));
                    break;
                case c.Ff.MONTH:
                    ((n = u.add(a, "months").toDate()),
                        (r = m.intl.formatToPlainString(f.default.ZQLDzk, { intervalCount: a })));
                    break;
                case c.Ff.YEAR:
                    ((n = u.add(a, "years").toDate()),
                        (r = m.intl.formatToPlainString(f.default.KpnRtO, { intervalCount: a })));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: n, discountAppliedLabel: r, intervalCount: a };
        })(null != i ? i.discount_id : null, e),
        u = null != n && 1 === n.intervalCount,
        { subscriptionPlanPrice: r, subscriptionPlanId: a, amount: d } = t;
    return p(a) ? { amount: u ? r * t.quantity : d, matchedDiscountInfo: n } : { amount: d, matchedDiscountInfo: n };
}
function x(t, e, i) {
    let { discountOffer: n, subscriptionTrial: l } = i,
        u = t.invoiceItems.find((t) => t.subscriptionPlanId === e.id);
    if (null == u) return { renewalPrice: t.subtotal };
    let r = t.invoiceItems.filter((t) => t !== u && null != t.subscriptionPlanId).reduce((t, e) => t + e.amount, 0),
        { amount: a, matchedDiscountInfo: o } = w(u, n),
        d = a + r,
        s = (function (t, e) {
            let { multiPeriodTrialRenewalDate: i, isMultiPeriodTrial: n, trial: l, intervalCount: u } = h(t);
            return n
                ? {
                      isMultiPeriodTrial: !0,
                      multiPeriodDiscountAttributes: {
                          discountedRenewalPrice: 0,
                          discountEndDate: i,
                          priceWithoutDiscount: e,
                          intervalCount: u,
                          intervalType: l.interval,
                      },
                  }
                : { isMultiPeriodTrial: !1, multiPeriodDiscountAttributes: void 0 };
        })(l, d);
    if (s.isMultiPeriodTrial) {
        let { multiPeriodDiscountAttributes: t } = s;
        return { renewalPrice: d, multiPeriodDiscountAttributes: t };
    }
    if (null == n || null == o) return { renewalPrice: d };
    if (n.discount.isMultiInterval) {
        let t = u.subscriptionPlanPrice * u.quantity,
            e = n.discount.intervalType === c.Ff.WEEK;
        return {
            renewalPrice: t + r,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: d,
                priceWithoutDiscount: t + r,
                discountEndDate: o.discountEndDate,
                intervalCount: e ? 7 * o.intervalCount : o.intervalCount,
                intervalType: n.discount.applicableSubscriptionInterval,
            },
        };
    }
    return { renewalPrice: d };
}
function A(t, e, i) {
    let {
            overrideRenewalDate: n,
            isSubscriptionUpdate: l,
            discountOffer: r,
            fractionalPremiumInfo: v,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        T = (0, o.Q8)(e, t, { isSubscriptionUpdate: l }),
        { intervalType: b, intervalCount: I } = (0, d.Ge)(e),
        P = e.currency,
        D = [],
        g = T.some((t) => (0, d.xq)(t.subscriptionPlanId));
    for (let t of T) {
        let { subscriptionPlanId: e } = t,
            { lineItem: n } = (function (t, e, i) {
                let {
                        invoiceIncludesPremiumBasePlan: n,
                        isPremiumPlanInvoiceItem: l,
                        intervalType: r,
                        intervalCount: a,
                        discountOffer: c,
                        currency: p,
                    } = i,
                    { showGuildSubscriptionAdjustmentTooltip: v } = t,
                    {
                        label: T,
                        subscriptionDiscount: b,
                        originalAmount: I,
                    } = (0, o.Ae)(t, { subscriptionTrial: e, currency: p }),
                    P = v ? m.intl.format(m.t.UDop9c, {}) : void 0,
                    D =
                        l || null == b
                            ? null
                            : {
                                  subText: (0, s.CE)((0, s.$g)(I, p), r, a),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: n && (0, d.z4)(t.subscriptionPlanId) ? u.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: g, matchedDiscountInfo: y } = w(t, c),
                    h = null != y && y.intervalCount > 1,
                    x =
                        l && h
                            ? {
                                  subText: m.intl.format(f.default.Chj1Ke, { discountEndDate: y.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: y, lineItem: { id: t.id, label: T, amount: g, tooltip: P, ...x, ...D } };
            })(t, i, {
                invoiceIncludesPremiumBasePlan: g,
                isPremiumPlanInvoiceItem: p(e),
                intervalType: b,
                intervalCount: I,
                discountOffer: r,
                currency: P,
            });
        D.push(n);
    }
    let y = h(i),
        x = (0, a.de)({
            overrideRenewalDate: n ?? y.multiPeriodTrialRenewalDate ?? void 0,
            currentInvoice: t,
            renewalInvoice: e,
            isSubscriptionUpdate: l,
            fractionalPremiumInfo: v,
        });
    return {
        renewalDate: x,
        lineItems: D,
        intervalType: b,
        intervalCount: I,
        currency: P,
        label: m.intl.string(f.default.GGn3pp),
        totalLineItemValueSubText: m.intl.string(f.default.yvUaHi),
        totalLineItemLabel: (function (t, e) {
            if (1 === e)
                switch (t) {
                    case c.WT.MONTH:
                        return m.intl.string(f.default.WrFWOV);
                    case c.WT.YEAR:
                        return m.intl.string(f.default.SxKq52);
                }
            return m.intl.string(f.default.jxUJkZ);
        })(b, I),
        totalLineItemLabelSubText: m.intl.format(f.default.MR4VnX, { renewalDate: x }),
    };
}
