n.d(t, {
    EA: () => I,
    Gj: () => T,
    IY: () => A,
    Ig: () => j,
    Re: () => E,
    Rs: () => N,
    fk: () => y,
    iK: () => h,
    ib: () => f,
}),
    n(321073);
var r = n(284009),
    a = n.n(r),
    l = n(403581),
    i = n(854354),
    s = n(692440),
    u = n(815545),
    o = n(736339),
    c = n(299301),
    d = n(97352),
    m = n(927578),
    p = n(580630),
    v = n(788868),
    x = n(375708),
    g = n(327105);
let f = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? x.intl.format(g.default.U2CmMW, {
                  priceAmount: (0, p.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, p.$g)(0, e);
    },
    b = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    h = (e) => {
        let { interval: t } = e,
            n = (0, m.m6)(e.id);
        switch (t) {
            case v.WT.MONTH:
                let r = x.intl.string(g.default.ZnoRKt);
                return n === v.PremiumTypes.TIER_0
                    ? x.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: r })
                    : x.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: r });
            case v.WT.YEAR:
                let a = x.intl.string(g.default.Xrg8aC);
                return n === v.PremiumTypes.TIER_0
                    ? x.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: a })
                    : x.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: a });
            case v.WT.DAY:
                let l = x.intl.string(g.default.WmjxYl);
                return n === v.PremiumTypes.TIER_0
                    ? x.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: l })
                    : x.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: l });
        }
    },
    I = (e) => {
        let { id: t, label: n, amount: r, subscriptionDiscount: a, entitlementDiscount: l, currency: i } = e,
            s = [{ id: t, label: n, amount: r }];
        return (
            null != a && s.push(b(a, "subscription-discount", x.intl.string(g.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != l, lineItems: s, currency: i }
        );
    },
    _ = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: r,
                invoiceAdjustmentDisplayItems: a,
                currency: l,
                subscriptionPlan: i,
                subscriptionTrial: s,
                excludeDiscountsAndAdjustments: o,
            } = t,
            {
                label: c,
                amount: d,
                amountWithoutDiscount: m,
                subscriptionDiscount: p,
                entitlementDiscount: v,
            } = (0, u.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: r,
                currency: l,
            }),
            f = null != p || null != v,
            h = { id: e.id, label: c, amount: f ? m : d, lineItemType: "main" },
            I = [
                h,
                ...a.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                    lineItemType: "adjustment",
                })),
            ];
        return (
            null == p || o || I.push(b(p, "subscription-discount", x.intl.string(g.default["9yHcmL"]))),
            { lineItems: I, primaryLineItem: h, entitlementDiscount: v }
        );
    },
    j = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: r,
                isPrepaidPaymentSource: a = !1,
                includeTaxLineItem: l = !0,
                excludeDiscountsAndAdjustments: i,
            } = t,
            {
                basePlanInvoiceItem: s,
                guildSubscriptionInvoiceItem: o,
                guildSubscriptionPlan: c,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: m,
            } = (0, u.wt)(e, { isPrepaidPaymentSource: a });
        if (null == s) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: p,
            primaryLineItem: v,
            entitlementDiscount: g,
        } = _(s, {
            subscriptionPlan: r,
            subscriptionTrial: n,
            isPrepaidPaymentSource: a,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: i,
        });
        return (
            0 !== d && null != o && null != c && null != m && p.push({ id: o.id, label: m, amount: d }),
            l && p.push({ id: "tax", label: x.intl.string(x.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: p, primaryLineItem: v, entitlementDiscount: g }
        );
    },
    A = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: r, subscriptionPlan: a, subscriptionTrial: l } = t,
            { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: o } = (0, u.SA)(e, a),
            {
                lineItems: d,
                primaryLineItem: m,
                entitlementDiscount: p,
            } = _(i, {
                overrideAmount: c.IJ.has(r) ? s : void 0,
                subscriptionPlan: a,
                subscriptionTrial: l,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: o,
            });
        return { lineItems: d, primaryLineItem: m, entitlementDiscount: p, hasAdjustmentLineItem: o.length > 0 };
    },
    y = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: a } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, s.Lw)(a, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    E = (e, t) => {
        let n = (0, u.NL)(e),
            r = (function (e, t) {
                if (null == e || null == t || e !== t.discountId) return null;
                let { discount: n } = t,
                    r = new Date(t.appliedAt?.getTime() ?? Date.now()),
                    a = "";
                switch (n.userUsageLimitInterval) {
                    case v.Ff.DAY:
                        r.setDate(r.getDate() + n.userUsageLimitIntervalCount),
                            (a = x.intl.formatToPlainString(g.default.WzJTZI, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    case v.Ff.WEEK:
                        r.setDate(r.getDate() + 7 * n.userUsageLimitIntervalCount),
                            (a = x.intl.formatToPlainString(g.default.LHWoqL, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    case v.Ff.MONTH:
                        r.setMonth(r.getMonth() + n.userUsageLimitIntervalCount),
                            (a = x.intl.formatToPlainString(g.default.ZQLDzk, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    case v.Ff.YEAR:
                        r.setFullYear(r.getFullYear() + n.userUsageLimitIntervalCount),
                            (a = x.intl.formatToPlainString(g.default.KpnRtO, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    default:
                        return null;
                }
                return { discountEndDate: r, discountAppliedLabel: a, intervalCount: n.userUsageLimitIntervalCount };
            })(null != n ? n.discount_id : null, t),
            a = null != r && 1 === r.intervalCount,
            { subscriptionPlanPrice: l, subscriptionPlanId: i, amount: s } = e;
        return (0, m.xq)(i)
            ? { amount: a ? l * e.quantity : s, matchedDiscountInfo: r }
            : { amount: s, matchedDiscountInfo: r };
    },
    P = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: r,
                isPremiumBasePlanInvoiceItem: a,
                intervalType: i,
                intervalCount: s,
                discountOffer: o,
                currency: c,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: v,
                subscriptionDiscount: f,
                originalAmount: b,
            } = (0, u.Ae)(e, { subscriptionTrial: t, currency: c }),
            h = d ? x.intl.format(x.t.UDop9c, {}) : void 0,
            I =
                a || null == f
                    ? null
                    : {
                          subText: (0, p.CE)((0, p.$g)(b, c), i, s),
                          subTextHasStrikethrough: !0,
                          valueIcon: r && (0, m.z4)(e.subscriptionPlanId) ? l.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: _, matchedDiscountInfo: j } = E(e, o),
            A = null != j && j.intervalCount > 1,
            y =
                a && A
                    ? {
                          subText: x.intl.format(g.default.Chj1Ke, { discountEndDate: j.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: j, lineItem: { id: e.id, label: v, amount: _, tooltip: h, ...y, ...I } };
    },
    T = function (e, t, n) {
        let {
                overrideRenewalDate: r,
                isSubscriptionUpdate: a,
                discountOffer: l,
                fractionalPremiumInfo: i,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      overrideRenewalDate: void 0,
                      isSubscriptionUpdate: !1,
                      discountOffer: null,
                      fractionalPremiumInfo: null,
                  },
            o = (0, u.Q8)(t, e, { isSubscriptionUpdate: a }),
            { intervalType: c, intervalCount: d } = (0, m.Ge)(t),
            p = t.currency,
            f = [],
            b = o.some((e) => (0, m.xq)(e.subscriptionPlanId));
        for (let e of o) {
            let { subscriptionPlanId: t } = e,
                { lineItem: r } = P(e, n, {
                    invoiceIncludesPremiumBasePlan: b,
                    isPremiumBasePlanInvoiceItem: (0, m.xq)(t),
                    intervalType: c,
                    intervalCount: d,
                    discountOffer: l,
                    currency: p,
                });
            f.push(r);
        }
        let h = (0, s.de)({
            overrideRenewalDate: r,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: a,
            fractionalPremiumInfo: i,
        });
        return {
            lineItems: f,
            intervalType: c,
            intervalCount: d,
            currency: p,
            label: x.intl.string(g.default.GGn3pp),
            totalLineItemValueSubText: x.intl.string(g.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case v.WT.MONTH:
                            return x.intl.string(g.default.WrFWOV);
                        case v.WT.YEAR:
                            return x.intl.string(g.default.SxKq52);
                    }
                return x.intl.string(g.default.jxUJkZ);
            })(c, d),
            totalLineItemLabelSubText: x.intl.format(g.default.MR4VnX, { renewalDate: h }),
        };
    },
    N = (e, t) => {
        let n,
            {
                planId: r,
                disabled: l,
                userLocale: s,
                discountOffer: u,
                isEligibleForDiscount: c,
                discountAmountOff: f,
                isMonthlyDiscountOffer: b,
                priceOptions: h,
                shouldUseCalculatedDiscount: I,
                isCurrentPlan: _,
                isGift: j,
                isEligibleForTrial: A,
                isEligibleForBOGOPromotion: y,
                showPlanStatusSubText: E,
                isInPlanSelectStep: P,
            } = t,
            T = d.A.get(r);
        a()(null != T, "Missing subscriptionPlan");
        let N = (0, m.L_)({
                planId: r,
                shouldUseCalculatedDiscount: I,
                isGift: j,
                priceOptions: h,
                subscriptionPlan: T,
            }),
            R = null != N && null == u,
            M = (0, m.y8)(r, !1, j, h),
            L = (0, o.gS)(e, T, {
                userLocale: s,
                isEligibleForBOGOPromotion: y,
                shouldShowSavingsPercent: R,
                isGift: j,
                planId: r,
                savingsPercent: N,
            }),
            C = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? x.intl.formatToPlainString(x.t.hXcaLT, {
                          price: (0, p.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, p.$g)(e.amount, e.currency);
            })(M, { isEligibleForTrial: A }),
            S = C;
        if (b && null != u && !A) {
            if (T.interval === v.WT.YEAR) n = x.intl.format(g.default.ODKoJd, { percent: N ?? "" });
            else if (T.interval === v.WT.MONTH) {
                if (c && null != f) {
                    let e = (0, p.$g)(M.amount - f, M.currency);
                    S = x.intl.format(x.t.hXcaLT, { price: e });
                }
                n = x.intl.format(g.default.JsSin7, {
                    priceRate: (0, p.CE)(C, T.interval, T.intervalCount),
                    intervalCount: u.discount.userUsageLimitIntervalCount,
                });
            }
        }
        E && (P && A ? (n = (0, o.O7)(T, M)) : _ ? (n = x.intl.string(x.t.ymSxhy)) : "string" == typeof L && (n = L));
        let k = null != L && "object" == typeof L && "badge" === L.type ? L.text : null,
            D =
                null != k
                    ? k
                    : (0, i.Nc)({
                          subscriptionPlan: T,
                          userLocale: s,
                          discountOffer: u,
                          yearlyPercentSavings: N,
                          shouldHideYearlySavingsBadge: null != e || null != u,
                      });
        return {
            id: r,
            planName: (0, i.YR)(T.interval, T.intervalCount, !0),
            priceText: S,
            secondarySubText: n,
            promoText: D,
            isDisabled: l,
            savingsPercent: N,
        };
    };
