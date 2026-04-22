n.d(t, {
    EA: () => h,
    Gj: () => P,
    IY: () => y,
    Ig: () => A,
    Re: () => E,
    Rs: () => L,
    fk: () => T,
    iK: () => x,
    ib: () => b,
}),
    n(321073);
var a = n(284009),
    r = n.n(a),
    l = n(403581),
    i = n(854354),
    s = n(692440),
    o = n(815545),
    u = n(958720),
    c = n(299301),
    d = n(97352),
    m = n(927578),
    p = n(580630),
    _ = n(788868),
    f = n(985018),
    g = n(327105);
let b = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? f.intl.format(g.default.U2CmMW, {
                  priceAmount: (0, p.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, p.$g)(0, e);
    },
    v = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    x = (e) => {
        let { interval: t } = e,
            n = (0, m.m6)(e.id);
        switch (t) {
            case _.WT.MONTH:
                let a = f.intl.string(g.default.ZnoRKt);
                return n === _.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: a })
                    : f.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: a });
            case _.WT.YEAR:
                let r = f.intl.string(g.default.Xrg8aC);
                return n === _.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: r })
                    : f.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: r });
            case _.WT.DAY:
                let l = f.intl.string(g.default.WmjxYl);
                return n === _.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: l })
                    : f.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: l });
        }
    },
    h = (e) => {
        let { id: t, label: n, amount: a, subscriptionDiscount: r, entitlementDiscount: l, currency: i } = e,
            s = [{ id: t, label: n, amount: a }];
        return (
            null != r && s.push(v(r, "subscription-discount", f.intl.string(g.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != l, lineItems: s, currency: i }
        );
    },
    I = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: a,
                invoiceAdjustmentDisplayItems: r,
                currency: l,
                subscriptionPlan: i,
                subscriptionTrial: s,
                excludeDiscountsAndAdjustments: u,
            } = t,
            {
                label: c,
                amount: d,
                amountWithoutDiscount: m,
                subscriptionDiscount: p,
                entitlementDiscount: _,
            } = (0, o.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: a,
                currency: l,
            }),
            b = null != p || null != _,
            x = { id: e.id, label: c, amount: b ? m : d, lineItemType: "main" },
            h = [
                x,
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
            null == p || u || h.push(v(p, "subscription-discount", f.intl.string(g.default["9yHcmL"]))),
            { lineItems: h, primaryLineItem: x, entitlementDiscount: _ }
        );
    },
    A = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: a,
                isPrepaidPaymentSource: r = !1,
                includeTaxLineItem: l = !0,
                excludeDiscountsAndAdjustments: i,
            } = t,
            {
                basePlanInvoiceItem: s,
                guildSubscriptionInvoiceItem: u,
                guildSubscriptionPlan: c,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: m,
            } = (0, o.wt)(e, { isPrepaidPaymentSource: r });
        if (null == s) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: p,
            primaryLineItem: _,
            entitlementDiscount: g,
        } = I(s, {
            subscriptionPlan: a,
            subscriptionTrial: n,
            isPrepaidPaymentSource: r,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: i,
        });
        return (
            0 !== d && null != u && null != c && null != m && p.push({ id: u.id, label: m, amount: d }),
            l && p.push({ id: "tax", label: f.intl.string(f.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: p, primaryLineItem: _, entitlementDiscount: g }
        );
    },
    y = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: a, subscriptionPlan: r, subscriptionTrial: l } = t,
            { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, o.SA)(e, r),
            {
                lineItems: d,
                primaryLineItem: m,
                entitlementDiscount: p,
            } = I(i, {
                overrideAmount: c.IJ.has(a) ? s : void 0,
                subscriptionPlan: r,
                subscriptionTrial: l,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: u,
            });
        return { lineItems: d, primaryLineItem: m, entitlementDiscount: p, hasAdjustmentLineItem: u.length > 0 };
    },
    T = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: a = !1, subscriptionPlan: r } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, s.Lw)(r, { isCustomGift: n, isPrepaidPaymentSource: a }),
                amount: e.total - e.tax,
            },
        ];
    },
    E = (e, t) => {
        let n = (0, o.NL)(e),
            a = (function (e, t) {
                if (null == e || null == t || e !== t.discount_id) return null;
                let { discount: n } = t,
                    a = new Date(t.applied_at ?? Date.now()),
                    r = "";
                switch (n.user_usage_limit_interval) {
                    case _.Ff.DAY:
                        a.setDate(a.getDate() + n.user_usage_limit_interval_count),
                            (r = f.intl.formatToPlainString(g.default.WzJTZI, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case _.Ff.WEEK:
                        a.setDate(a.getDate() + 7 * n.user_usage_limit_interval_count),
                            (r = f.intl.formatToPlainString(g.default.LHWoqL, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case _.Ff.MONTH:
                        a.setMonth(a.getMonth() + n.user_usage_limit_interval_count),
                            (r = f.intl.formatToPlainString(g.default.ZQLDzk, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    case _.Ff.YEAR:
                        a.setFullYear(a.getFullYear() + n.user_usage_limit_interval_count),
                            (r = f.intl.formatToPlainString(g.default.KpnRtO, {
                                intervalCount: n.user_usage_limit_interval_count,
                            }));
                        break;
                    default:
                        return null;
                }
                return {
                    discountEndDate: a,
                    discountAppliedLabel: r,
                    intervalCount: n.user_usage_limit_interval_count,
                };
            })(null != n ? n.discount_id : null, t),
            r = null != a && 1 === a.intervalCount,
            { subscriptionPlanPrice: l, subscriptionPlanId: i, amount: s } = e;
        return (0, m.xq)(i)
            ? { amount: r ? l * e.quantity : s, matchedDiscountInfo: a }
            : { amount: s, matchedDiscountInfo: a };
    },
    C = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: a,
                isPremiumBasePlanInvoiceItem: r,
                intervalType: i,
                intervalCount: s,
                discountOffer: u,
                currency: c,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: _,
                subscriptionDiscount: b,
                originalAmount: v,
            } = (0, o.Ae)(e, { subscriptionTrial: t, currency: c }),
            x = d ? f.intl.format(f.t.UDop9c, {}) : void 0,
            h =
                r || null == b
                    ? null
                    : {
                          subText: (0, p.CE)((0, p.$g)(v, c), i, s),
                          subTextHasStrikethrough: !0,
                          valueIcon: a && (0, m.z4)(e.subscriptionPlanId) ? l.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: I, matchedDiscountInfo: A } = E(e, u),
            y = null != A && A.intervalCount > 1,
            T =
                r && y
                    ? {
                          subText: f.intl.format(g.default.Chj1Ke, { discountEndDate: A.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: A, lineItem: { id: e.id, label: _, amount: I, tooltip: x, ...T, ...h } };
    },
    P = function (e, t, n) {
        let {
                overrideRenewalDate: a,
                isSubscriptionUpdate: r,
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
            u = (0, o.Q8)(t, e, { isSubscriptionUpdate: r }),
            { intervalType: c, intervalCount: d } = (0, m.Ge)(t),
            p = t.currency,
            b = [],
            v = u.some((e) => (0, m.xq)(e.subscriptionPlanId));
        for (let e of u) {
            let { subscriptionPlanId: t } = e,
                { lineItem: a } = C(e, n, {
                    invoiceIncludesPremiumBasePlan: v,
                    isPremiumBasePlanInvoiceItem: (0, m.xq)(t),
                    intervalType: c,
                    intervalCount: d,
                    discountOffer: l,
                    currency: p,
                });
            b.push(a);
        }
        let x = (0, s.de)({
            overrideRenewalDate: a,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: r,
            fractionalPremiumInfo: i,
        });
        return {
            lineItems: b,
            intervalType: c,
            intervalCount: d,
            currency: p,
            label: f.intl.string(g.default.GGn3pp),
            totalLineItemValueSubText: f.intl.string(g.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case _.WT.MONTH:
                            return f.intl.string(g.default.WrFWOV);
                        case _.WT.YEAR:
                            return f.intl.string(g.default.SxKq52);
                    }
                return f.intl.string(g.default.jxUJkZ);
            })(c, d),
            totalLineItemLabelSubText: f.intl.format(g.default.MR4VnX, { renewalDate: x }),
        };
    },
    L = (e, t) => {
        let n,
            {
                planId: a,
                disabled: l,
                userLocale: s,
                discountOffer: o,
                isEligibleForDiscount: c,
                discountAmountOff: b,
                isMonthlyDiscountOffer: v,
                priceOptions: x,
                shouldUseCalculatedDiscount: h,
                isCurrentPlan: I,
                isGift: A,
                isEligibleForTrial: y,
                isEligibleForBOGOPromotion: T,
                showPlanStatusSubText: E,
                isInPlanSelectStep: C,
            } = t,
            P = d.A.get(a);
        r()(null != P, "Missing subscriptionPlan");
        let L = (0, m.L_)({
                planId: a,
                shouldUseCalculatedDiscount: h,
                isGift: A,
                priceOptions: x,
                subscriptionPlan: P,
            }),
            S = null != L && null == o,
            N = (0, m.y8)(a, !1, A, x),
            j = (0, u.gS)(e, P, {
                userLocale: s,
                isEligibleForBOGOPromotion: T,
                shouldShowSavingsPercent: S,
                isGift: A,
                planId: a,
                savingsPercent: L,
            }),
            M = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? f.intl.formatToPlainString(f.t.hXcaLT, {
                          price: (0, p.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, p.$g)(e.amount, e.currency);
            })(N, { isEligibleForTrial: y }),
            R = M;
        if (v && null != o && !y) {
            if (P.interval === _.WT.YEAR) n = f.intl.format(g.default.ODKoJd, { percent: L ?? "" });
            else if (P.interval === _.WT.MONTH) {
                if (c && null != b) {
                    let e = (0, p.$g)(N.amount - b, N.currency);
                    R = f.intl.format(f.t.hXcaLT, { price: e });
                }
                n = f.intl.format(g.default.JsSin7, {
                    priceRate: (0, p.CE)(M, P.interval, P.intervalCount),
                    intervalCount: o.discount.user_usage_limit_interval_count,
                });
            }
        }
        E && (C && y ? (n = (0, u.O7)(P, N)) : I ? (n = f.intl.string(f.t.ymSxhy)) : "string" == typeof j && (n = j));
        let k = null != j && "object" == typeof j && "badge" === j.type ? j.text : null,
            D =
                null != k
                    ? k
                    : (0, i.Nc)({
                          subscriptionPlan: P,
                          userLocale: s,
                          discountOffer: o,
                          yearlyPercentSavings: L,
                          shouldHideYearlySavingsBadge: null != e || null != o,
                      });
        return {
            id: a,
            planName: (0, i.YR)(P.interval, P.intervalCount, !0),
            priceText: R,
            secondarySubText: n,
            promoText: D,
            isDisabled: l,
            savingsPercent: L,
        };
    };
