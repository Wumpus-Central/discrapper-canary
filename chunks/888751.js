n.d(t, { EA: () => h, Gj: () => E, IY: () => L, Ig: () => C, QM: () => b, fk: () => y, iK: () => v, ib: () => x }),
    n(321073);
var s = n(989349),
    r = n.n(s),
    i = n(403581),
    a = n(400612),
    l = n(692440),
    u = n(815545),
    c = n(428262),
    o = n(580630),
    d = n(202541),
    m = n(375708),
    f = n(327105);
function p(e) {
    return (0, c.xq)(e) || (0, c.Zb)(e);
}
function x(e) {
    let { includeNowSuffix: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
    return t
        ? m.intl.format(f.default.U2CmMW, {
              priceAmount: (0, o.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        : (0, o.$g)(0, e);
}
function g(e, t, n) {
    return { id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" };
}
function v(e) {
    let { interval: t } = e,
        n = (0, c.m6)(e.id);
    switch (t) {
        case d.WT.MONTH:
            let s = m.intl.string(f.default.ZnoRKt);
            return n === d.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: s })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: s });
        case d.WT.YEAR:
            let r = m.intl.string(f.default.Xrg8aC);
            return n === d.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: r })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: r });
        case d.WT.DAY:
            let i = m.intl.string(f.default.WmjxYl);
            return n === d.PremiumTypes.TIER_0
                ? m.intl.formatToPlainString(f.default.Z9mu9q, { timeInterval: i })
                : m.intl.formatToPlainString(f.default["8Jt4Dw"], { timeInterval: i });
    }
}
function h(e) {
    let { id: t, label: n, amount: s, subscriptionDiscount: r, entitlementDiscount: i, currency: a } = e,
        l = [{ id: t, label: n, amount: s }];
    return (
        null != r && l.push(g(r, "subscription-discount", m.intl.string(f.default["9yHcmL"]))),
        { hasSubscriptionCredit: null != i, lineItems: l, currency: a }
    );
}
function A(e, t) {
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
            amountWithoutDiscount: p,
            subscriptionDiscount: x,
            entitlementDiscount: v,
        } = (0, u.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: a,
            subscriptionTrial: l,
            isPrepaidPaymentSource: s,
            currency: i,
        }),
        h = null != x || null != v,
        A = { id: e.id, label: o, amount: h ? p : d, lineItemType: "main" },
        C = [
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
        null == x || c || C.push(g(x, "subscription-discount", m.intl.string(f.default["9yHcmL"]))),
        { lineItems: C, primaryLineItem: A, entitlementDiscount: v }
    );
}
function C(e, t) {
    let {
            subscriptionTrial: n,
            subscriptionPlan: s,
            isPrepaidPaymentSource: r = !1,
            includeTaxLineItem: i = !0,
            excludeDiscountsAndAdjustments: a,
        } = t,
        {
            basePlanInvoiceItem: l,
            guildSubscriptionInvoiceItem: c,
            guildSubscriptionPlan: o,
            guildSubscriptionAmount: d,
            guildBoostItemLabel: f,
        } = (0, u.wt)(e, { isPrepaidPaymentSource: r });
    if (null == l) return { lineItems: [], primaryLineItem: null };
    let {
        lineItems: p,
        primaryLineItem: x,
        entitlementDiscount: g,
    } = A(l, {
        subscriptionPlan: s,
        subscriptionTrial: n,
        isPrepaidPaymentSource: r,
        currency: e.currency,
        invoiceAdjustmentDisplayItems: [],
        excludeDiscountsAndAdjustments: a,
    });
    return (
        0 !== d && null != c && null != o && null != f && p.push({ id: c.id, label: f, amount: d }),
        i && p.push({ id: "tax", label: m.intl.string(m.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
        { lineItems: p, primaryLineItem: x, entitlementDiscount: g }
    );
}
function L(e, t) {
    let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: s, subscriptionPlan: r, subscriptionTrial: i } = t,
        { newPlanInvoiceItem: l, basePlanFullAmount: c, invoiceAdjustmentDisplayItems: o } = (0, u.SA)(e, r),
        {
            lineItems: d,
            primaryLineItem: m,
            entitlementDiscount: f,
        } = A(l, {
            overrideAmount: a.ME.has(s) ? c : void 0,
            subscriptionPlan: r,
            subscriptionTrial: i,
            isPrepaidPaymentSource: n,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: o,
        });
    return { lineItems: d, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: o.length > 0 };
}
function y(e, t) {
    let { isCustomGift: n = !1, isPrepaidPaymentSource: s = !1, subscriptionPlan: r } = t;
    return [
        {
            id: "premium-gift-line-item",
            label: (0, l.Lw)(r, { isCustomGift: n, isPrepaidPaymentSource: s }),
            amount: e.total - e.tax,
        },
    ];
}
function T(e) {
    if (null == e)
        return { isMultiPeriodTrial: !1, intervalCount: null, trial: null, multiPeriodTrialRenewalDate: null };
    let t = "interval_count" in e ? e.interval_count : e.intervalCount;
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
function I(e, t) {
    let n = (0, u.NL)(e),
        s = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                s = new Date(t.appliedAt?.getTime() ?? Date.now()),
                i = r()(s),
                a = "",
                l = t.getFullIntervalCount();
            switch (n.userUsageLimitInterval) {
                case d.Ff.DAY:
                    (s = i.add(l, "days").toDate()),
                        (a = m.intl.formatToPlainString(f.default.WzJTZI, { intervalCount: l }));
                    break;
                case d.Ff.WEEK:
                    (s = i.add(l, "weeks").toDate()),
                        (a = m.intl.formatToPlainString(f.default.LHWoqL, { intervalCount: l }));
                    break;
                case d.Ff.MONTH:
                    (s = i.add(l, "months").toDate()),
                        (a = m.intl.formatToPlainString(f.default.ZQLDzk, { intervalCount: l }));
                    break;
                case d.Ff.YEAR:
                    (s = i.add(l, "years").toDate()),
                        (a = m.intl.formatToPlainString(f.default.KpnRtO, { intervalCount: l }));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: s, discountAppliedLabel: a, intervalCount: l };
        })(null != n ? n.discount_id : null, t),
        i = null != s && 1 === s.intervalCount,
        { subscriptionPlanPrice: a, subscriptionPlanId: l, amount: c } = e;
    return p(l) ? { amount: i ? a * e.quantity : c, matchedDiscountInfo: s } : { amount: c, matchedDiscountInfo: s };
}
function b(e, t, n) {
    let { discountOffer: s, subscriptionTrial: r } = n,
        i = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
    if (null == i) return { renewalPrice: e.subtotal };
    let a = e.invoiceItems.filter((e) => e !== i && null != e.subscriptionPlanId).reduce((e, t) => e + t.amount, 0),
        { amount: l, matchedDiscountInfo: u } = I(i, s),
        c = l + a,
        o = (function (e, t) {
            let { multiPeriodTrialRenewalDate: n, isMultiPeriodTrial: s, trial: r, intervalCount: i } = T(e);
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
    if (s.getIsMultiIntervalDiscount()) {
        let e = i.subscriptionPlanPrice * i.quantity,
            t = s.getDiscountInterval() === d.Ff.WEEK;
        return {
            renewalPrice: e + a,
            multiPeriodDiscountAttributes: {
                discountedRenewalPrice: c,
                priceWithoutDiscount: e + a,
                discountEndDate: u.discountEndDate,
                intervalCount: t ? 7 * u.intervalCount : u.intervalCount,
                intervalType: s.getApplicableSubscriptionInterval(),
            },
        };
    }
    return { renewalPrice: c };
}
function E(e, t, n) {
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
        g = (0, u.Q8)(t, e, { isSubscriptionUpdate: r }),
        { intervalType: v, intervalCount: h } = (0, c.Ge)(t),
        A = t.currency,
        C = [],
        L = g.some((e) => (0, c.xq)(e.subscriptionPlanId));
    for (let e of g) {
        let { subscriptionPlanId: t } = e,
            { lineItem: s } = (function (e, t, n) {
                let {
                        invoiceIncludesPremiumBasePlan: s,
                        isPremiumPlanInvoiceItem: r,
                        intervalType: a,
                        intervalCount: l,
                        discountOffer: d,
                        currency: p,
                    } = n,
                    { showGuildSubscriptionAdjustmentTooltip: x } = e,
                    {
                        label: g,
                        subscriptionDiscount: v,
                        originalAmount: h,
                    } = (0, u.Ae)(e, { subscriptionTrial: t, currency: p }),
                    A = x ? m.intl.format(m.t.UDop9c, {}) : void 0,
                    C =
                        r || null == v
                            ? null
                            : {
                                  subText: (0, o.CE)((0, o.$g)(h, p), a, l),
                                  subTextHasStrikethrough: !0,
                                  valueIcon: s && (0, c.z4)(e.subscriptionPlanId) ? i.t : void 0,
                                  color: "text-feedback-positive",
                                  valueColor: "text-feedback-positive",
                              },
                    { amount: L, matchedDiscountInfo: y } = I(e, d),
                    T = null != y && y.intervalCount > 1,
                    b =
                        r && T
                            ? {
                                  subText: m.intl.format(f.default.Chj1Ke, { discountEndDate: y.discountEndDate }),
                                  subTextColor: "text-feedback-positive",
                              }
                            : null;
                return { matchedDiscountInfo: y, lineItem: { id: e.id, label: g, amount: L, tooltip: A, ...b, ...C } };
            })(e, n, {
                invoiceIncludesPremiumBasePlan: L,
                isPremiumPlanInvoiceItem: p(t),
                intervalType: v,
                intervalCount: h,
                discountOffer: a,
                currency: A,
            });
        C.push(s);
    }
    let y = T(n),
        b = (0, l.de)({
            overrideRenewalDate: s ?? y.multiPeriodTrialRenewalDate ?? void 0,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: r,
            fractionalPremiumInfo: x,
        });
    return {
        renewalDate: b,
        lineItems: C,
        intervalType: v,
        intervalCount: h,
        currency: A,
        label: m.intl.string(f.default.GGn3pp),
        totalLineItemValueSubText: m.intl.string(f.default.yvUaHi),
        totalLineItemLabel: (function (e, t) {
            if (1 === t)
                switch (e) {
                    case d.WT.MONTH:
                        return m.intl.string(f.default.WrFWOV);
                    case d.WT.YEAR:
                        return m.intl.string(f.default.SxKq52);
                }
            return m.intl.string(f.default.jxUJkZ);
        })(v, h),
        totalLineItemLabelSubText: m.intl.format(f.default.MR4VnX, { renewalDate: b }),
    };
}
