"use strict";
n.d(t, {
    EA: () => I,
    Gj: () => b,
    IY: () => y,
    Ig: () => S,
    Re: () => R,
    Rs: () => w,
    fk: () => v,
    iK: () => A,
    ib: () => E,
}),
    n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(158954),
    a = n(854354),
    o = n(692440),
    l = n(815545),
    u = n(958720),
    c = n(299301),
    d = n(97352),
    _ = n(927578),
    f = n(580630),
    p = n(788868),
    h = n(985018),
    m = n(756366);
let E = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? h.intl.format(m.default.U2CmMW, {
                  priceAmount: (0, f.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, f.$g)(0, e);
    },
    g = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    A = (e) => {
        let { interval: t } = e,
            n = (0, _.m6)(e.id);
        switch (t) {
            case p.WT.MONTH:
                let r = h.intl.string(m.default.ZnoRKt);
                return n === p.PremiumTypes.TIER_0
                    ? h.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: r })
                    : h.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: r });
            case p.WT.YEAR:
                let i = h.intl.string(m.default.Xrg8aC);
                return n === p.PremiumTypes.TIER_0
                    ? h.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: i })
                    : h.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: i });
            case p.WT.DAY:
                let s = h.intl.string(m.default.WmjxYl);
                return n === p.PremiumTypes.TIER_0
                    ? h.intl.formatToPlainString(m.default.Z9mu9q, { timeInterval: s })
                    : h.intl.formatToPlainString(m.default["8Jt4Dw"], { timeInterval: s });
        }
    },
    I = (e) => {
        let { id: t, label: n, amount: r, subscriptionDiscount: i, entitlementDiscount: s, currency: a } = e,
            o = [{ id: t, label: n, amount: r }];
        return (
            null != i && o.push(g(i, "subscription-discount", h.intl.string(m.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != s, lineItems: o, currency: a }
        );
    },
    T = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: r,
                invoiceAdjustmentDisplayItems: i,
                currency: s,
                subscriptionPlan: a,
                subscriptionTrial: o,
            } = t,
            {
                label: u,
                amount: c,
                amountWithoutDiscount: d,
                subscriptionDiscount: _,
                entitlementDiscount: f,
            } = (0, l.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: a,
                subscriptionTrial: o,
                isPrepaidPaymentSource: r,
                currency: s,
            }),
            p = null != _ || null != f,
            E = { id: e.id, label: u, amount: p ? d : c, lineItemType: "main" },
            A = [
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
            null != _ && A.push(g(_, "subscription-discount", h.intl.string(m.default["9yHcmL"]))),
            { lineItems: A, primaryLineItem: E, entitlementDiscount: f }
        );
    },
    S = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: r,
                isPrepaidPaymentSource: i = !1,
                includeTaxLineItem: s = !0,
            } = t,
            {
                basePlanInvoiceItem: a,
                guildSubscriptionInvoiceItem: o,
                guildSubscriptionPlan: u,
                guildSubscriptionAmount: c,
                guildBoostItemLabel: d,
            } = (0, l.wt)(e, { isPrepaidPaymentSource: i });
        if (null == a) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: _,
            primaryLineItem: f,
            entitlementDiscount: p,
        } = T(a, {
            subscriptionPlan: r,
            subscriptionTrial: n,
            isPrepaidPaymentSource: i,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
        });
        return (
            0 !== c && null != o && null != u && null != d && _.push({ id: o.id, label: d, amount: c }),
            s && _.push({ id: "tax", label: h.intl.string(h.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: _, primaryLineItem: f, entitlementDiscount: p }
        );
    },
    y = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: r, subscriptionPlan: i, subscriptionTrial: s } = t,
            { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: u } = (0, l.SA)(e, i),
            {
                lineItems: d,
                primaryLineItem: _,
                entitlementDiscount: f,
            } = T(a, {
                overrideAmount: c.IJ.has(r) ? o : void 0,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: u,
            });
        return { lineItems: d, primaryLineItem: _, entitlementDiscount: f, hasAdjustmentLineItem: u.length > 0 };
    },
    v = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, o.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    N = (e, t) => {
        if (1 === t)
            switch (e) {
                case p.WT.MONTH:
                    return h.intl.string(m.default.WrFWOV);
                case p.WT.YEAR:
                    return h.intl.string(m.default.SxKq52);
            }
        return h.intl.string(m.default.jxUJkZ);
    };
function C(e, t) {
    if (null == e || null == t || e !== t.discount_id) return null;
    let { discount: n } = t,
        r = new Date(t.applied_at ?? Date.now()),
        i = "";
    switch (n.user_usage_limit_interval) {
        case p.Ff.DAY:
            r.setDate(r.getDate() + n.user_usage_limit_interval_count),
                (i = h.intl.formatToPlainString(m.default.WzJTZI, {
                    intervalCount: n.user_usage_limit_interval_count,
                }));
            break;
        case p.Ff.WEEK:
            r.setDate(r.getDate() + 7 * n.user_usage_limit_interval_count),
                (i = h.intl.formatToPlainString(m.default.LHWoqL, {
                    intervalCount: n.user_usage_limit_interval_count,
                }));
            break;
        case p.Ff.MONTH:
            r.setMonth(r.getMonth() + n.user_usage_limit_interval_count),
                (i = h.intl.formatToPlainString(m.default.ZQLDzk, {
                    intervalCount: n.user_usage_limit_interval_count,
                }));
            break;
        case p.Ff.YEAR:
            r.setFullYear(r.getFullYear() + n.user_usage_limit_interval_count),
                (i = h.intl.formatToPlainString(m.default.KpnRtO, {
                    intervalCount: n.user_usage_limit_interval_count,
                }));
            break;
        default:
            return null;
    }
    return { discountEndDate: r, discountAppliedLabel: i, intervalCount: n.user_usage_limit_interval_count };
}
let R = (e, t) => {
        let n = (0, l.NL)(e),
            r = C(null != n ? n.discount_id : null, t),
            i = null != r && 1 === r.intervalCount,
            { subscriptionPlanPrice: s, subscriptionPlanId: a, amount: o } = e;
        return (0, _.xq)(a)
            ? { amount: i ? s * e.quantity : o, matchedDiscountInfo: r }
            : { amount: o, matchedDiscountInfo: r };
    },
    O = (e, t, n) => {
        let { isPremiumBasePlanInvoiceItem: r, intervalType: i, intervalCount: a, discountOffer: o, currency: u } = n,
            { showGuildSubscriptionAdjustmentTooltip: c } = e,
            {
                label: d,
                subscriptionDiscount: _,
                originalAmount: p,
            } = (0, l.Ae)(e, { subscriptionTrial: t, currency: u }),
            E = c ? h.intl.format(h.t.UDop9c, {}) : void 0,
            g = null != _,
            A =
                !r && g
                    ? {
                          subText: (0, f.CE)((0, f.$g)(p, u), i, a),
                          subTextHasStrikethrough: !0,
                          valueIcon: s.tvc,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      }
                    : null,
            { amount: I, matchedDiscountInfo: T } = R(e, o),
            S = null != T && T.intervalCount > 1,
            y =
                r && S
                    ? {
                          subText: h.intl.format(m.default.Chj1Ke, { discountEndDate: T.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: T, lineItem: { id: e.id, label: d, amount: I, tooltip: E, ...y, ...A } };
    },
    b = function (e, t, n) {
        let {
                overrideRenewalDate: r,
                isSubscriptionUpdate: i,
                discountOffer: s,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : { overrideRenewalDate: void 0, isSubscriptionUpdate: !1, discountOffer: null },
            a = (0, l.Q8)(t, e, { isSubscriptionUpdate: i }),
            { intervalType: o, intervalCount: u } = (0, _.Ge)(t),
            c = t.currency,
            d = [];
        for (let e of a) {
            let { subscriptionPlanId: t } = e,
                { lineItem: r } = O(e, n, {
                    isPremiumBasePlanInvoiceItem: (0, _.xq)(t),
                    intervalType: o,
                    intervalCount: u,
                    discountOffer: s,
                    currency: c,
                });
            d.push(r);
        }
        let f = r;
        return (
            null == f && (f = null != e ? e.subscriptionPeriodEnd : t.subscriptionPeriodStart),
            {
                lineItems: d,
                intervalType: o,
                intervalCount: u,
                currency: c,
                label: h.intl.string(m.default.GGn3pp),
                totalLineItemValueSubText: h.intl.string(m.default.yvUaHi),
                totalLineItemLabel: N(o, u),
                totalLineItemLabelSubText: h.intl.format(m.default.MR4VnX, { renewalDate: f }),
            }
        );
    },
    D = (e, t) => {
        let { isEligibleForTrial: n } = t;
        return n
            ? h.intl.formatToPlainString(h.t.hXcaLT, {
                  price: (0, f.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, f.$g)(e.amount, e.currency);
    },
    L = (e) => (null != e && "object" == typeof e && "badge" === e.type ? e.text : null),
    w = (e, t) => {
        let n,
            {
                planId: r,
                disabled: s,
                userLocale: o,
                discountOffer: l,
                isEligibleForDiscount: c,
                discountAmountOff: E,
                isMonthlyDiscountOffer: g,
                priceOptions: A,
                shouldUseCalculatedDiscount: I,
                isCurrentPlan: T,
                isGift: S,
                isEligibleForTrial: y,
                isEligibleForBOGOPromotion: v,
                showPlanStatusSubText: N,
                isInPlanSelectStep: C,
            } = t,
            R = d.A.get(r);
        i()(null != R, "Missing subscriptionPlan");
        let O = (0, _.L_)({
                planId: r,
                shouldUseCalculatedDiscount: I,
                isGift: S,
                priceOptions: A,
                subscriptionPlan: R,
            }),
            b = null != O && null == l,
            w = (0, _.y8)(r, !1, S, A),
            M = (0, u.gS)(e, R, {
                userLocale: o,
                isEligibleForBOGOPromotion: v,
                shouldShowSavingsPercent: b,
                isGift: S,
                planId: r,
                savingsPercent: O,
            }),
            x = D(w, { isEligibleForTrial: y }),
            P = x;
        if (g && null != l && !y) {
            if (R.interval === p.WT.YEAR) n = h.intl.format(m.default.ODKoJd, { percent: O ?? "" });
            else if (R.interval === p.WT.MONTH) {
                if (c && null != E) {
                    let e = (0, f.$g)(w.amount - E, w.currency);
                    P = h.intl.format(h.t.hXcaLT, { price: e });
                }
                n = h.intl.format(m.default.JsSin7, {
                    priceRate: (0, f.CE)(x, R.interval, R.intervalCount),
                    intervalCount: l.discount.user_usage_limit_interval_count,
                });
            }
        }
        N && (C && y ? (n = (0, u.O7)(R, w)) : T ? (n = h.intl.string(h.t.ymSxhy)) : "string" == typeof M && (n = M));
        let k = L(M),
            U =
                null != k
                    ? k
                    : (0, a.Nc)({
                          subscriptionPlan: R,
                          userLocale: o,
                          discountOffer: l,
                          yearlyPercentSavings: O,
                          shouldHideYearlySavingsBadge: null != e || null != l,
                      });
        return {
            id: r,
            planName: (0, a.YR)(R.interval, R.intervalCount, !0),
            priceText: P,
            secondarySubText: n,
            promoText: U,
            isDisabled: s,
            savingsPercent: O,
        };
    };
