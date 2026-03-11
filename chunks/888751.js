"use strict";
n.d(t, { EA: () => I, Gj: () => C, IY: () => y, Ig: () => S, MT: () => E, Rs: () => R, fk: () => v, iK: () => A }),
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
let E = (e) => h.intl.format(m.default.U2CmMW, { priceAmount: (0, f.$g)(0, e) }),
    g = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount }),
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
            E = { id: e.id, label: u, amount: p ? d : c },
            A = [
                E,
                ...i.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
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
            s && _.push({ id: "tax", label: h.intl.string(h.t.jiRvC7), amount: e.tax }),
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
        return { lineItems: d, primaryLineItem: _, entitlementDiscount: f };
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
                    return h.intl.string(m.default.ajn5LL);
                case p.WT.YEAR:
                    return h.intl.string(m.default.FNijW7);
            }
        return h.intl.string(m.default.jxUJkZ);
    },
    C = function (e, t, n) {
        let {
                includeTaxLineItem: r,
                overrideRenewalDate: i,
                isSubscriptionUpdate: a,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : { includeTaxLineItem: !0, overrideRenewalDate: void 0, isSubscriptionUpdate: !1 },
            o = (0, l.Q8)(t, e, { isSubscriptionUpdate: a }),
            { intervalType: u, intervalCount: c } = (0, _.Ge)(t),
            d = t.currency,
            p = o.map((e) => {
                let { amount: t, showGuildSubscriptionAdjustmentTooltip: r, isAddedSubscriptionInvoiceItem: i } = e,
                    {
                        label: a,
                        subscriptionDiscount: o,
                        originalAmount: _,
                    } = (0, l.Ae)(e, { subscriptionTrial: n, currency: d }),
                    p = r ? h.intl.format(h.t.UDop9c, {}) : void 0,
                    m = null != o,
                    E = m ? (0, f.CE)((0, f.$g)(_, d), u, c) : null,
                    g = m,
                    A = m ? s.tvc : void 0,
                    I = m || i ? "text-feedback-positive" : void 0;
                return {
                    id: e.id,
                    label: a,
                    amount: t,
                    tooltip: p,
                    subText: E,
                    subTextHasStrikethrough: g,
                    color: I,
                    valueColor: I,
                    valueIcon: A,
                };
            }),
            E = t.tax;
        E > 0 && r && p.push({ id: "tax", label: h.intl.string(h.t.jiRvC7), amount: E, formatWithoutRate: !0 });
        let g = i;
        return (
            null == g && (g = null != e ? e.subscriptionPeriodEnd : t.subscriptionPeriodStart),
            {
                lineItems: p,
                intervalType: u,
                intervalCount: c,
                currency: d,
                label: h.intl.string(m.default.GGn3pp),
                totalLineItemLabel: N(u, c),
                totalLineItemLabelSubText: h.intl.format(m.default.MR4VnX, { renewalDate: g }),
            }
        );
    },
    R = (e, t) => {
        let n,
            {
                planId: r,
                disabled: s,
                userLocale: o,
                discountOffer: l,
                priceOptions: c,
                shouldUseCalculatedDiscount: p,
                isCurrentPlan: m,
                isGift: E,
                isEligibleForTrial: g,
                isEligibleForBOGOPromotion: A,
                showSecondarySubTexts: I,
                isInPlanSelectStep: T,
            } = t,
            S = d.A.get(r);
        i()(null != S, "Missing subscriptionPlan");
        let y = (0, _.L_)({
                planId: r,
                shouldUseCalculatedDiscount: p,
                isGift: E,
                priceOptions: c,
                subscriptionPlan: S,
            }),
            v = null != y,
            N = (0, _.y8)(r, !1, E, c),
            C = (0, a.Nc)({ subscriptionPlan: S, userLocale: o, discountOffer: l, yearlyPercentSavings: y }),
            R = (0, u.gS)(e, S, {
                userLocale: o,
                isEligibleForBOGOPromotion: A,
                shouldShowDiscount: v,
                isGift: E,
                planId: r,
                savingsPercent: y,
            });
        I && (T && g ? (n = (0, u.O7)(S, N)) : m ? (n = h.intl.string(h.t.ymSxhy)) : "string" == typeof R && (n = R));
        let O = C;
        return (
            null != R && "object" == typeof R && (O = R.text),
            {
                id: r,
                planName: (0, a.YR)(S.interval, S.intervalCount, !0),
                priceText: (0, f.$g)(N.amount, N.currency),
                secondarySubText: n,
                promoText: O,
                isDisabled: s,
                savingsPercent: y,
            }
        );
    };
