n.d(e, { EA: () => D, Gj: () => h, IY: () => P, Ig: () => y, QM: () => _, fk: () => E, iK: () => v, ib: () => T }),
    n(321073);
var i = n(536637),
    l = n.n(i),
    r = n(403581),
    a = n(400612),
    o = n(692440),
    u = n(815545),
    d = n(158045),
    c = n(580630),
    s = n(202541),
    m = n(375708),
    f = n(583741);
function p(t) {
    return (0, d.xq)(t) || (0, d.Zb)(t);
}
function T(t) {
    let { includeNowSuffix: e } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return e
        ? m.intl.format(f.default.U2CmMW, {
              priceAmount: (0, c.$g)(0, t, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, c.$g)(0, t);
}
function I(t, e, n) {
    return { id: t.discount_id ?? e, label: n, amount: -t.amount, lineItemType: "discount" };
}
function v(t) {
    let { interval: e } = t,
        n = (0, d.m6)(t.id);
    switch (e) {
        case s.WT.MONTH:
            let i = m.intl.string(f.default.ZnoRKt);
            return n === s.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: i })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: i });
        case s.WT.YEAR:
            let l = m.intl.string(f.default.Xrg8aC);
            return n === s.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: l })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: l });
        case s.WT.DAY:
            let r = m.intl.string(f.default.WmjxYl);
            return n === s.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: r })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: r });
    }
}
function D(t) {
    let { id: e, label: n, amount: i, subscriptionDiscount: l, entitlementDiscount: r, currency: a } = t,
        o = [{ id: e, label: n, amount: i }];
    return (
        null != l && o.push(I(l, "subscription-discount", m.intl.string(f.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != r, lineItems: o, currency: a }
    );
}
function b(t, e) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: i,
            invoiceAdjustmentDisplayItems: l,
            currency: r,
            subscriptionPlan: a,
            subscriptionTrial: o,
            excludeDiscountsAndAdjustments: d,
        } = e,
        {
            label: c,
            amount: s,
            amountWithoutDiscount: p,
            subscriptionDiscount: T,
            entitlementDiscount: v,
        } = (0, u.Ae)(t, {
            overrideAmount: n,
            subscriptionPlan: a,
            subscriptionTrial: o,
            isPrepaidPaymentSource: i,
            currency: r,
        }),
        D = null != T || null != v,
        b = { id: t.id, label: c, amount: D ? p : s, lineItemType: "main" },
        y = [
            b,
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
        null == T || d || y.push(I(T, "subscription-discount", m.intl.string(f.default["9yHcmL"]))),
        { lineItems: y, primaryLineItem: b, entitlementDiscount: v }
    );
}
function y(t, e) {
    let {
            subscriptionPlan: n,
            isPrepaidPaymentSource: i = !1,
            includeTaxLineItem: l = !0,
            excludeDiscountsAndAdjustments: r,
        } = e,
        {
            basePlanInvoiceItem: a,
            guildSubscriptionInvoiceItem: o,
            guildSubscriptionPlan: d,
            guildSubscriptionAmount: c,
            guildBoostItemLabel: s,
        } = (0, u.wt)(t, { isPrepaidPaymentSource: i });
    if (null == a) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: f,
        primaryLineItem: p,
        entitlementDiscount: T,
    } = b(a, {
        subscriptionPlan: n,
        subscriptionTrial: null,
        isPrepaidPaymentSource: i,
        currency: t.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: r,
    });
    return (
        0 !== c && null != o && null != d && null != s && f.push({ id: o.id, label: s, amount: c }),
        l && f.push({ id: "tax", label: m.intl.string(m.t.jiRvC7), amount: t.tax, lineItemType: "tax" }),
        { lineItems: f, primaryLineItem: p, entitlementDiscount: T }
    );
}
function P(t, e) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: i, subscriptionPlan: l, subscriptionTrial: r } = e,
        { newPlanInvoiceItem: o, basePlanFullAmount: d, invoiceAdjustmentDisplayItems: c } = (0, u.SA)(t, l),
        {
            lineItems: s,
            primaryLineItem: m,
            entitlementDiscount: f,
        } = b(o, {
            overrideAmount: a.ME.has(i) ? d : void 0,
            subscriptionPlan: l,
            subscriptionTrial: r,
            isPrepaidPaymentSource: n,
            currency: t.currency,
            invoiceAdjustmentDisplayItems: c,
        });
    return { lineItems: s, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: c.length > 0 };
}
function E(t, e) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: i = !1, subscriptionPlan: l } = e;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, o.Lw)(l, { isCustomGift: n, isPrepaidPaymentSource: i }),
            amount: t.total - t.tax,
        },
    ];
}
function C(t) {
    if (null == t)
        return { isMultiPeriodTrial: !1, intervalCount: null, trial: null, multiPeriodTrialRenewalDate: null };
    let e = t.intervalCount;
    if (!(e > 1)) return { isMultiPeriodTrial: !1, intervalCount: e, trial: t, multiPeriodTrialRenewalDate: null };
    let n = (function (t, e) {
        let { intervalType: n, intervalCount: i } = e,
            r = l()(t);
        return n === s.WT.MONTH
            ? r.add(i, "months").toDate()
            : n === s.WT.YEAR
              ? r.add(i, "years").toDate()
              : r.add(i, "days").toDate();
    })(new Date(), { intervalType: t.interval, intervalCount: e });
    return { isMultiPeriodTrial: !0, intervalCount: e, trial: t, multiPeriodTrialRenewalDate: n };
}
function g(t, e) {
    let n = (0, u.NL)(t),
        i = (function (t, e) {
            if (null == t || null == e || t !== e.discountId) return null;
            let { discount: n } = e,
                i = new Date(e.appliedAt?.getTime() ?? Date.now()),
                r = l()(i),
                a = "",
                o = n.intervalCount;
            switch (n.intervalType) {
                case s.Ff.DAY:
                    (i = r.add(o, "days").toDate()),
                        (a = m.intl.formatToPlainString(f.default.WzJTZI, { intervalCount: o }));
                    break;
                case s.Ff.WEEK:
                    (i = r.add(o, "weeks").toDate()),
                        (a = m.intl.formatToPlainString(f.default.LHWoqL, { intervalCount: o }));
                    break;
                case s.Ff.MONTH:
                    (i = r.add(o, "months").toDate()),
                        (a = m.intl.formatToPlainString(f.default.ZQLDzk, { intervalCount: o }));
                    break;
                case s.Ff.YEAR:
                    (i = r.add(o, "years").toDate()),
                        (a = m.intl.formatToPlainString(f.default.KpnRtO, { intervalCount: o }));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: i, discountAppliedLabel: a, intervalCount: o };
        })(null != n ? n.discount_id : null, e),
        r = null != i && 1 === i.intervalCount,
        { subscriptionPlanPrice: a, subscriptionPlanId: o, amount: d } = t;
    return p(o) ? { amount: r ? a * t.quantity : d, matchedDiscountInfo: i } : { amount: d, matchedDiscountInfo: i };
}
function _(t, e, n) {
    let { discountOffer: i, subscriptionTrial: l } = n,
        r = t.invoiceItems.find((t) => t.subscriptionPlanId === e.id);
    if (null == r) return { renewalPrice: t.subtotal };
    let a = t.invoiceItems.filter((t) => t !== r && null != t.subscriptionPlanId).reduce((t, e) => t + e.amount, 0),
        { amount: o, matchedDiscountInfo: u } = g(r, i),
        d = o + a,
        c = (function (t, e) {
            let { multiPeriodTrialRenewalDate: n, isMultiPeriodTrial: i, trial: l, intervalCount: r } = C(t);
            return i
                ? {
                      isMultiPeriodTrial: !0,
                      multiPeriodDiscountAttributes: {
                          discountedRenewalPrice: 0,
                          discountEndDate: n,
                          priceWithoutDiscount: e,
                          intervalCount: r,
                          intervalType: l.interval,
                      },
                  }
                : { isMultiPeriodTrial: !1, multiPeriodDiscountAttributes: void 0 };
        })(l, d);
    if (c.isMultiPeriodTrial) {
        let { multiPeriodDiscountAttributes: t } = c;
        return { renewalPrice: d, multiPeriodDiscountAttributes: t };
    }
    if (null == i || null == u) return { renewalPrice: d };
    if (i.discount.isMultiInterval) {
        let t = r.subscriptionPlanPrice * r.quantity,
            e = i.discount.intervalType === s.Ff.WEEK;
        return {
            renewalPrice: t + a,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: d,
                priceWithoutDiscount: t + a,
                discountEndDate: u.discountEndDate,
                intervalCount: e ? 7 * u.intervalCount : u.intervalCount,
                intervalType: i.discount.applicableSubscriptionInterval,
            },
        };
    }
    return { renewalPrice: d };
}
function h(t, e, n) {
    let {
            overrideRenewalDate: i,
            isSubscriptionUpdate: l,
            discountOffer: a,
            fractionalPremiumInfo: T,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        I = (0, u.Q8)(e, t, { isSubscriptionUpdate: l }),
        { intervalType: v, intervalCount: D } = (0, d.Ge)(e),
        b = e.currency,
        y = [],
        P = I.some((t) => (0, d.xq)(t.subscriptionPlanId));
    for (let t of I) {
        let { subscriptionPlanId: e } = t,
            { lineItem: i } = (function (t, e, n) {
                let {
                        invoiceIncludesPremiumBasePlan: i,
                        isPremiumPlanInvoiceItem: l,
                        intervalType: a,
                        intervalCount: o,
                        discountOffer: s,
                        currency: p,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: T } = t,
                    {
                        label: I,
                        subscriptionDiscount: v,
                        originalAmount: D,
                    } = (0, u.Ae)(t, { subscriptionTrial: e, currency: p }),
                    b = T ? m.intl.format(m.t.UDop9c, {}) : void 0,
                    y =
                        l || null == v
                            ? null
                            : {
                                  subText: (0, c.CE)((0, c.$g)(D, p), a, o),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: i && (0, d.z4)(t.subscriptionPlanId) ? r.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: P, matchedDiscountInfo: E } = g(t, s),
                    C = null != E && E.intervalCount > 1,
                    _ =
                        l && C
                            ? {
                                  subText: m.intl.format(f.default.Chj1Ke, { discountEndDate: E.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: E, lineItem: { id: t.id, label: I, amount: P, tooltip: b, ..._, ...y } };
            })(t, n, {
                invoiceIncludesPremiumBasePlan: P,
                isPremiumPlanInvoiceItem: p(e),
                intervalType: v,
                intervalCount: D,
                discountOffer: a,
                currency: b,
            });
        y.push(i);
    }
    let E = C(n),
        _ = (0, o.de)({
            overrideRenewalDate: i ?? E.multiPeriodTrialRenewalDate ?? void 0,
            currentInvoice: t,
            renewalInvoice: e,
            isSubscriptionUpdate: l,
            fractionalPremiumInfo: T,
        });
    return {
        renewalDate: _,
        lineItems: y,
        intervalType: v,
        intervalCount: D,
        currency: b,
        label: m.intl.string(f.default.GGn3pp),
        totalLineItemValueSubText: m.intl.string(f.default.yvUaHi),
        totalLineItemLabel: (function (t, e) {
            if (1 === e)
                switch (t) {
                    case s.WT.MONTH:
                        return m.intl.string(f.default.WrFWOV);
                    case s.WT.YEAR:
                        return m.intl.string(f.default.SxKq52);
                }
            return m.intl.string(f.default.jxUJkZ);
        })(v, D),
        totalLineItemLabelSubText: m.intl.format(f.default.MR4VnX, { renewalDate: _ }),
    };
}
