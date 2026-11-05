n(321073);
var r = n(536637),
    i = n.n(r),
    a = n(403581),
    l = n(860841),
    s = n(563020),
    u = n(879610),
    o = n(580630),
    c = n(682901),
    d = n(792996),
    m = n(379912);
function f(e) {
    return (0, u.xq)(e) || (0, u.Zb)(e);
}
function p(e, t, n) {
    return { id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" };
}
function v(e, t) {
    let {
            overrideAmount: n,
            isPrepaidPaymentSource: r,
            invoiceAdjustmentDisplayItems: i,
            currency: a,
            subscriptionPlan: l,
            subscriptionTrial: u,
            excludeDiscountsAndAdjustments: o,
        } = t,
        {
            label: c,
            amount: f,
            amountWithoutDiscount: v,
            subscriptionDiscount: g,
            entitlementDiscount: x,
        } = (0, s.Ae)(e, {
            overrideAmount: n,
            subscriptionPlan: l,
            subscriptionTrial: u,
            isPrepaidPaymentSource: r,
            currency: a,
        }),
        b = null != g || null != x,
        h = { id: e.id, label: c, amount: b ? v : f, lineItemType: "main" },
        y = [
            h,
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
        null == g || o || y.push(p(g, "subscription-discount", d.intl.string(m.default["9yHcmL"]))),
        { lineItems: y, primaryLineItem: h, entitlementDiscount: x }
    );
}
function g(e) {
    if (null == e)
        return { isMultiPeriodTrial: !1, intervalCount: null, trial: null, multiPeriodTrialRenewalDate: null };
    let t = e.intervalCount;
    if (!(t > 1)) return { isMultiPeriodTrial: !1, intervalCount: t, trial: e, multiPeriodTrialRenewalDate: null };
    let n = (function (e, t) {
        let { intervalType: n, intervalCount: r } = t,
            a = i()(e);
        return n === c.WT.MONTH
            ? a.add(r, "months").toDate()
            : n === c.WT.YEAR
              ? a.add(r, "years").toDate()
              : a.add(r, "days").toDate();
    })(new Date(), { intervalType: e.interval, intervalCount: t });
    return { isMultiPeriodTrial: !0, intervalCount: t, trial: e, multiPeriodTrialRenewalDate: n };
}
function x(e, t) {
    let n = (0, s.NL)(e),
        r = (function (e, t) {
            if (null == e || null == t || e !== t.discountId) return null;
            let { discount: n } = t,
                r = new Date(t.appliedAt?.getTime() ?? Date.now()),
                a = i()(r),
                l = "",
                s = n.intervalCount;
            switch (n.intervalType) {
                case c.Ff.DAY:
                    ((r = a.add(s, "days").toDate()),
                        (l = d.intl.formatToPlainString(m.default.WzJTZI, { intervalCount: s })));
                    break;
                case c.Ff.WEEK:
                    ((r = a.add(s, "weeks").toDate()),
                        (l = d.intl.formatToPlainString(m.default.LHWoqL, { intervalCount: s })));
                    break;
                case c.Ff.MONTH:
                    ((r = a.add(s, "months").toDate()),
                        (l = d.intl.formatToPlainString(m.default.ZQLDzk, { intervalCount: s })));
                    break;
                case c.Ff.YEAR:
                    ((r = a.add(s, "years").toDate()),
                        (l = d.intl.formatToPlainString(m.default.KpnRtO, { intervalCount: s })));
                    break;
                default:
                    return null;
            }
            return { discountEndDate: r, discountAppliedLabel: l, intervalCount: s };
        })(null != n ? n.discount_id : null, t),
        a = null != r && 1 === r.intervalCount,
        { subscriptionPlanPrice: l, subscriptionPlanId: u, amount: o } = e;
    return f(u) ? { amount: a ? l * e.quantity : o, matchedDiscountInfo: r } : { amount: o, matchedDiscountInfo: r };
}
n.d(
    t,
    {},
    {
        EA: function (e) {
            let { id: t, label: n, amount: r, subscriptionDiscount: i, entitlementDiscount: a, currency: l } = e,
                s = [{ id: t, label: n, amount: r }];
            return (
                null != i && s.push(p(i, "subscription-discount", d.intl.string(m.default["9yHcmL"]))),
                { hasSubscriptionCredit: null != a, lineItems: s, currency: l }
            );
        },
        Gj: function (e, t, n) {
            let {
                    overrideRenewalDate: r,
                    isSubscriptionUpdate: i,
                    discountOffer: l,
                    fractionalPremiumInfo: p,
                } = arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {
                          overrideRenewalDate: void 0,
                          isSubscriptionUpdate: !1,
                          discountOffer: null,
                          fractionalPremiumInfo: null,
                      },
                v = (0, s.Q8)(t, e, { isSubscriptionUpdate: i }),
                { intervalType: b, intervalCount: h } = (0, u.Ge)(t),
                y = t.currency,
                T = [],
                j = v.some((e) => (0, u.xq)(e.subscriptionPlanId));
            for (let e of v) {
                let { subscriptionPlanId: t } = e,
                    { lineItem: r } = (function (e, t, n) {
                        let {
                                invoiceIncludesPremiumBasePlan: r,
                                isPremiumPlanInvoiceItem: i,
                                intervalType: l,
                                intervalCount: c,
                                discountOffer: f,
                                currency: p,
                            } = n,
                            { showGuildSubscriptionAdjustmentTooltip: v } = e,
                            {
                                label: g,
                                subscriptionDiscount: b,
                                originalAmount: h,
                            } = (0, s.Ae)(e, { subscriptionTrial: t, currency: p }),
                            y = v ? d.intl.format(d.t.UDop9c, {}) : void 0,
                            T =
                                i || null == b
                                    ? null
                                    : {
                                          subText: (0, o.CE)((0, o.$g)(h, p), l, c),
                                          subTextHasStrikethrough: !0,
                                          valueIcon: r && (0, u.z4)(e.subscriptionPlanId) ? a.t : void 0,
                                          color: "text-feedback-positive",
                                          valueColor: "text-feedback-positive",
                                      },
                            { amount: j, matchedDiscountInfo: E } = x(e, f),
                            A = null != E && E.intervalCount > 1,
                            I =
                                i && A
                                    ? {
                                          subText: d.intl.format(m.default.Chj1Ke, {
                                              discountEndDate: E.discountEndDate,
                                          }),
                                          subTextColor: "text-feedback-positive",
                                      }
                                    : null;
                        return {
                            matchedDiscountInfo: E,
                            lineItem: { id: e.id, label: g, amount: j, tooltip: y, ...I, ...T },
                        };
                    })(e, n, {
                        invoiceIncludesPremiumBasePlan: j,
                        isPremiumPlanInvoiceItem: f(t),
                        intervalType: b,
                        intervalCount: h,
                        discountOffer: l,
                        currency: y,
                    });
                T.push(r);
            }
            let E = g(n),
                A = (0, s.de)({
                    overrideRenewalDate: r ?? E.multiPeriodTrialRenewalDate ?? void 0,
                    currentInvoice: e,
                    renewalInvoice: t,
                    isSubscriptionUpdate: i,
                    fractionalPremiumInfo: p,
                });
            return {
                renewalDate: A,
                lineItems: T,
                intervalType: b,
                intervalCount: h,
                currency: y,
                label: d.intl.string(m.default.GGn3pp),
                totalLineItemValueSubText: d.intl.string(m.default.yvUaHi),
                totalLineItemLabel: (function (e, t) {
                    if (1 === t)
                        switch (e) {
                            case c.WT.MONTH:
                                return d.intl.string(m.default.WrFWOV);
                            case c.WT.YEAR:
                                return d.intl.string(m.default.SxKq52);
                        }
                    return d.intl.string(m.default.jxUJkZ);
                })(b, h),
                totalLineItemLabelSubText: d.intl.format(m.default.MR4VnX, { renewalDate: A }),
            };
        },
        IY: function (e, t) {
            let {
                    isPrepaidPaymentSource: n = !1,
                    invoiceSummaryType: r,
                    subscriptionPlan: i,
                    subscriptionTrial: a,
                    invoicePlanId: u,
                } = t,
                { newPlanInvoiceItem: o, basePlanFullAmount: c, invoiceAdjustmentDisplayItems: d } = (0, s.SA)(e, i, u),
                {
                    lineItems: m,
                    primaryLineItem: f,
                    entitlementDiscount: p,
                } = v(o, {
                    overrideAmount: l.ME.has(r) ? c : void 0,
                    subscriptionPlan: i,
                    subscriptionTrial: a,
                    isPrepaidPaymentSource: n,
                    currency: e.currency,
                    invoiceAdjustmentDisplayItems: d,
                });
            return { lineItems: m, primaryLineItem: f, entitlementDiscount: p, hasAdjustmentLineItem: d.length > 0 };
        },
        Ig: function (e, t) {
            let {
                    subscriptionPlan: n,
                    isPrepaidPaymentSource: r = !1,
                    includeTaxLineItem: i = !0,
                    excludeDiscountsAndAdjustments: a,
                } = t,
                {
                    basePlanInvoiceItem: l,
                    guildSubscriptionInvoiceItem: u,
                    guildSubscriptionPlan: o,
                    guildSubscriptionAmount: c,
                    guildBoostItemLabel: m,
                } = (0, s.wt)(e, { isPrepaidPaymentSource: r });
            if (null == l) return { lineItems: [], primaryLineItem: null };
            let {
                lineItems: f,
                primaryLineItem: p,
                entitlementDiscount: g,
            } = v(l, {
                subscriptionPlan: n,
                subscriptionTrial: null,
                isPrepaidPaymentSource: r,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: [],
                excludeDiscountsAndAdjustments: a,
            });
            return (
                0 !== c && null != u && null != o && null != m && f.push({ id: u.id, label: m, amount: c }),
                i && f.push({ id: "tax", label: d.intl.string(d.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
                { lineItems: f, primaryLineItem: p, entitlementDiscount: g }
            );
        },
        QM: function (e, t, n) {
            let { discountOffer: r, subscriptionTrial: i } = n,
                a = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
            if (null == a) return { renewalPrice: e.subtotal };
            let l = e.invoiceItems
                    .filter((e) => e !== a && null != e.subscriptionPlanId)
                    .reduce((e, t) => e + t.amount, 0),
                { amount: s, matchedDiscountInfo: u } = x(a, r),
                o = s + l,
                d = (function (e, t) {
                    let { multiPeriodTrialRenewalDate: n, isMultiPeriodTrial: r, trial: i, intervalCount: a } = g(e);
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
                })(i, o);
            if (d.isMultiPeriodTrial) {
                let { multiPeriodDiscountAttributes: e } = d;
                return { renewalPrice: o, multiPeriodDiscountAttributes: e };
            }
            if (null == r || null == u) return { renewalPrice: o };
            if (r.discount.isMultiInterval) {
                let e = a.subscriptionPlanPrice * a.quantity,
                    t = r.discount.intervalType === c.Ff.WEEK;
                return {
                    renewalPrice: e + l,
                    multiPeriodDiscountAttributes: {
                        discountedRenewalPrice: o,
                        priceWithoutDiscount: e + l,
                        discountEndDate: u.discountEndDate,
                        intervalCount: t ? 7 * u.intervalCount : u.intervalCount,
                        intervalType: r.discount.applicableSubscriptionInterval,
                    },
                };
            }
            return { renewalPrice: o };
        },
        fk: function (e, t) {
            let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: i } = t;
            return [
                {
                    id: "premium-gift-line-item",
                    label: (0, s.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                    amount: e.total - e.tax,
                },
            ];
        },
        iK: function (e) {
            let { interval: t, intervalCount: n } = e,
                r = (0, u.m6)(e.id);
            switch (t) {
                case c.WT.MONTH:
                    if (n > 1) return d.intl.formatToPlainString(m.default.PyJC0V, { intervalCount: n });
                    let i = d.intl.string(m.default.ZnoRKt);
                    return r === c.PremiumTypes.TIER_0
                        ? d.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: i })
                        : d.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: i });
                case c.WT.YEAR:
                    let a = d.intl.string(m.default.Xrg8aC);
                    return r === c.PremiumTypes.TIER_0
                        ? d.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: a })
                        : d.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: a });
                case c.WT.DAY:
                    let l = d.intl.string(m.default.WmjxYl);
                    return r === c.PremiumTypes.TIER_0
                        ? d.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: l })
                        : d.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: l });
            }
        },
        ib: function (e) {
            let { includeNowSuffix: t } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
            return t
                ? d.intl.format(m.default.U2CmMW, {
                      priceAmount: (0, o.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                  })
                : (0, o.$g)(0, e);
        },
        uH: function (e) {
            let t = e.interval === c.WT.MONTH && e.intervalCount > 1;
            return (0, u.xq)(e.id) && (e.interval === c.WT.YEAR || t);
        },
    },
);
