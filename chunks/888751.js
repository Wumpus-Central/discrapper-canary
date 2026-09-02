n.d(t, { EA: () => C, Gj: () => N, IY: () => I, Ig: () => L, QM: () => A, fk: () => T, iK: () => g, ib: () => x }),
    n(321073);
var s = n(536637),
    r = n.n(s),
    i = n(403581),
    a = n(400612),
    l = n(692440),
    u = n(815545),
    c = n(158045),
    o = n(580630),
    d = n(202541),
    m = n(375708),
    p = n(583741);
function f(e) {
    return (0, c.xq)(e) || (0, c.Zb)(e);
}
function x(e) {
    let { includeNowSuffix: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return t
        ? m.intl.format(p.default.U2CmMW, {
              priceAmount: (0, o.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, o.$g)(0, e);
}
function v(e, t, n) {
    return { id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" };
}
function g(e) {
    let { interval: t } = e,
        n = (0, c.m6)(e.id);
    switch (t) {
        case d.WT.MONTH:
            let s = m.intl.string(p.default.ZnoRKt);
            return n === d.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(p.default.Z9mu9q, { timeInterval: s })
                : m.intl.formatToPlainString(p.default["8Jt4Dw"], { timeInterval: s });
        case d.WT.YEAR:
            let r = m.intl.string(p.default.Xrg8aC);
            return n === d.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(p.default.Z9mu9q, { timeInterval: r })
                : m.intl.formatToPlainString(p.default["8Jt4Dw"], { timeInterval: r });
        case d.WT.DAY:
            let i = m.intl.string(p.default.WmjxYl);
            return n === d.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(p.default.Z9mu9q, { timeInterval: i })
                : m.intl.formatToPlainString(p.default["8Jt4Dw"], { timeInterval: i });
    }
}
function C(e) {
    let { id: t, label: n, amount: s, subscriptionDiscount: r, entitlementDiscount: i, currency: a } = e,
        l = [{ id: t, label: n, amount: s }];
    return (
        null != r && l.push(v(r, "subscription-discount", m.intl.string(p.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != i, lineItems: l, currency: a }
    );
}
function h(e, t) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            invoiceAdjustmentDisplayItems: r,
            currency: i,
            subscriptionPlan: a,
            subscriptionTrial: l,
            excludeDiscountsAndAdjustments: c,
        } = t,
        {
            label: o,
            amount: d,
            amountWithoutDiscount: f,
            subscriptionDiscount: x,
            entitlementDiscount: g,
        } = (0, u.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: a,
            subscriptionTrial: l,
            isPrepaidPaymentSource: s,
            currency: i,
        }),
        C = null != x || null != g,
        h = { id: e.id, label: o, amount: C ? f : d, lineItemType: "main" },
        L = [
            h,
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
        null == x || c || L.push(v(x, "subscription-discount", m.intl.string(p.default["9yHcmL"]))),
        { lineItems: L, primaryLineItem: h, entitlementDiscount: g }
    );
}
function L(e, t) {
    let {
            subscriptionPlan: n,
            isPrepaidPaymentSource: s = !1,
            includeTaxLineItem: r = !0,
            excludeDiscountsAndAdjustments: i,
        } = t,
        {
            basePlanInvoiceItem: a,
            guildSubscriptionInvoiceItem: l,
            guildSubscriptionPlan: c,
            guildSubscriptionAmount: o,
            guildBoostItemLabel: d,
        } = (0, u.wt)(e, { isPrepaidPaymentSource: s });
    if (null == a) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: p,
        primaryLineItem: f,
        entitlementDiscount: x,
    } = h(a, {
        subscriptionPlan: n,
        subscriptionTrial: null,
        isPrepaidPaymentSource: s,
        currency: e.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: i,
    });
    return (
        0 !== o && null != l && null != c && null != d && p.push({ id: l.id, label: d, amount: o }),
        r && p.push({ id: "tax", label: m.intl.string(m.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
        { lineItems: p, primaryLineItem: f, entitlementDiscount: x }
    );
}
function I(e, t) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: s, subscriptionPlan: r, subscriptionTrial: i } = t,
        { newPlanInvoiceItem: l, basePlanFullAmount: c, invoiceAdjustmentDisplayItems: o } = (0, u.SA)(e, r),
        {
            lineItems: d,
            primaryLineItem: m,
            entitlementDiscount: p,
        } = h(l, {
            overrideAmount: a.ME.has(s) ? c : void 0,
            subscriptionPlan: r,
            subscriptionTrial: i,
            isPrepaidPaymentSource: n,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: o,
        });
    return { lineItems: d, primaryLineItem: m, entitlementDiscount: p, hasAdjustmentLineItem: o.length > 0 };
}
function T(e, t) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: s = !1, subscriptionPlan: r } = t;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, l.Lw)(r, { isCustomGift: n, isPrepaidPaymentSource: s }),
            amount: e.total - e.tax,
        },
    ];
}
function E(e) {
    if (null == e)
        return { isMultiPeriodTrial: !1, intervalCount: null, trial: null, multiPeriodTrialRenewalDate: null };
    let t = e.intervalCount;
    if (!(t > 1)) return { isMultiPeriodTrial: !1, intervalCount: t, trial: e, multiPeriodTrialRenewalDate: null };
    let n = (function (e, t) {
        let { intervalType: n, intervalCount: s } = t,
            i = r()(e);
        return n === d.WT.MONTH
            ? i.add(s, "months").toDate()
            : n === d.WT.YEAR
              ? i.add(s, "years").toDate()
              : i.add(s, "days").toDate();
    })(new Date(), { intervalType: e.interval, intervalCount: t });
    return { isMultiPeriodTrial: !0, intervalCount: t, trial: e, multiPeriodTrialRenewalDate: n };
}
function j(e, t) {
    let n = (0, u.NL)(e),
        s = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                s = new Date(t.appliedAt?.getTime() ?? Date.now()),
                i = r()(s),
                a = "",
                l = n.intervalCount;
            switch (n.intervalType) {
                case d.Ff.DAY:
                    (s = i.add(l, "days").toDate()),
                        (a = m.intl.formatToPlainString(p.default.WzJTZI, { intervalCount: l }));
                    break;
                case d.Ff.WEEK:
                    (s = i.add(l, "weeks").toDate()),
                        (a = m.intl.formatToPlainString(p.default.LHWoqL, { intervalCount: l }));
                    break;
                case d.Ff.MONTH:
                    (s = i.add(l, "months").toDate()),
                        (a = m.intl.formatToPlainString(p.default.ZQLDzk, { intervalCount: l }));
                    break;
                case d.Ff.YEAR:
                    (s = i.add(l, "years").toDate()),
                        (a = m.intl.formatToPlainString(p.default.KpnRtO, { intervalCount: l }));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: s, discountAppliedLabel: a, intervalCount: l };
        })(null != n ? n.discount_id : null, t),
        i = null != s && 1 === s.intervalCount,
        { subscriptionPlanPrice: a, subscriptionPlanId: l, amount: c } = e;
    return f(l) ? { amount: i ? a * e.quantity : c, matchedDiscountInfo: s } : { amount: c, matchedDiscountInfo: s };
}
function A(e, t, n) {
    let { discountOffer: s, subscriptionTrial: r } = n,
        i = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
    if (null == i) return { renewalPrice: e.subtotal };
    let a = e.invoiceItems.filter((e) => e !== i && null != e.subscriptionPlanId).reduce((e, t) => e + t.amount, 0),
        { amount: l, matchedDiscountInfo: u } = j(i, s),
        c = l + a,
        o = (function (e, t) {
            let { multiPeriodTrialRenewalDate: n, isMultiPeriodTrial: s, trial: r, intervalCount: i } = E(e);
            return s
                ? {
                      isMultiPeriodTrial: !0,
                      multiPeriodDiscountAttributes: {
                          discountedRenewalPrice: 0,
                          discountEndDate: n,
                          priceWithoutDiscount: t,
                          intervalCount: i,
                          intervalType: r.interval,
                      },
                  }
                : { isMultiPeriodTrial: !1, multiPeriodDiscountAttributes: void 0 };
        })(r, c);
    if (o.isMultiPeriodTrial) {
        let { multiPeriodDiscountAttributes: e } = o;
        return { renewalPrice: c, multiPeriodDiscountAttributes: e };
    }
    if (null == s || null == u) return { renewalPrice: c };
    if (s.discount.isMultiInterval) {
        let e = i.subscriptionPlanPrice * i.quantity,
            t = s.discount.intervalType === d.Ff.WEEK;
        return {
            renewalPrice: e + a,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: c,
                priceWithoutDiscount: e + a,
                discountEndDate: u.discountEndDate,
                intervalCount: t ? 7 * u.intervalCount : u.intervalCount,
                intervalType: s.discount.applicableSubscriptionInterval,
            },
        };
    }
    return { renewalPrice: c };
}
function N(e, t, n) {
    let {
            overrideRenewalDate: s,
            isSubscriptionUpdate: r,
            discountOffer: a,
            fractionalPremiumInfo: x,
        } = arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : {
                  overrideRenewalDate: void 0,
                  isSubscriptionUpdate: !1,
                  discountOffer: null,
                  fractionalPremiumInfo: null,
              },
        v = (0, u.Q8)(t, e, { isSubscriptionUpdate: r }),
        { intervalType: g, intervalCount: C } = (0, c.Ge)(t),
        h = t.currency,
        L = [],
        I = v.some((e) => (0, c.xq)(e.subscriptionPlanId));
    for (let e of v) {
        let { subscriptionPlanId: t } = e,
            { lineItem: s } = (function (e, t, n) {
                let {
                        invoiceIncludesPremiumBasePlan: s,
                        isPremiumPlanInvoiceItem: r,
                        intervalType: a,
                        intervalCount: l,
                        discountOffer: d,
                        currency: f,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: x } = e,
                    {
                        label: v,
                        subscriptionDiscount: g,
                        originalAmount: C,
                    } = (0, u.Ae)(e, { subscriptionTrial: t, currency: f }),
                    h = x ? m.intl.format(m.t.UDop9c, {}) : void 0,
                    L =
                        r || null == g
                            ? null
                            : {
                                  subText: (0, o.CE)((0, o.$g)(C, f), a, l),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: s && (0, c.z4)(e.subscriptionPlanId) ? i.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: I, matchedDiscountInfo: T } = j(e, d),
                    E = null != T && T.intervalCount > 1,
                    A =
                        r && E
                            ? {
                                  subText: m.intl.format(p.default.Chj1Ke, { discountEndDate: T.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: T, lineItem: { id: e.id, label: v, amount: I, tooltip: h, ...A, ...L } };
            })(e, n, {
                invoiceIncludesPremiumBasePlan: I,
                isPremiumPlanInvoiceItem: f(t),
                intervalType: g,
                intervalCount: C,
                discountOffer: a,
                currency: h,
            });
        L.push(s);
    }
    let T = E(n),
        A = (0, l.de)({
            overrideRenewalDate: s ?? T.multiPeriodTrialRenewalDate ?? void 0,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: r,
            fractionalPremiumInfo: x,
        });
    return {
        renewalDate: A,
        lineItems: L,
        intervalType: g,
        intervalCount: C,
        currency: h,
        label: m.intl.string(p.default.GGn3pp),
        totalLineItemValueSubText: m.intl.string(p.default.yvUaHi),
        totalLineItemLabel: (function (e, t) {
            if (1 === t)
                switch (e) {
                    case d.WT.MONTH:
                        return m.intl.string(p.default.WrFWOV);
                    case d.WT.YEAR:
                        return m.intl.string(p.default.SxKq52);
                }
            return m.intl.string(p.default.jxUJkZ);
        })(g, C),
        totalLineItemLabelSubText: m.intl.format(p.default.MR4VnX, { renewalDate: A }),
    };
}
