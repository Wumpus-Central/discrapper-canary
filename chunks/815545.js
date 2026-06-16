"use strict";
n.d(t, { Ae: () => I, NL: () => g, Q8: () => p, Ro: () => A, SA: () => y, Sb: () => T, Tp: () => m, wt: () => S }),
    n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(155718),
    a = n(71804),
    o = n(97352),
    l = n(428262),
    u = n(580630),
    c = n(874638),
    d = n(788868),
    _ = n(88001),
    h = n(466919),
    f = n(375708);
let p = function (e, t) {
        let n,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
            r = null != t ? (0, c.Z)(t.invoiceItems) : null,
            s = null != t ? (0, l.Ge)(t) : null,
            { intervalType: a, intervalCount: o } = (0, l.Ge)(e),
            u = null != s && (s.intervalType !== a || s.intervalCount !== o);
        return ((n = (0, c.Z)(e.invoiceItems).slice()).sort((e, t) => {
            let n = (0, l.xq)(e.subscriptionPlanId),
                i = (0, l.xq)(t.subscriptionPlanId);
            return n && !i ? -1 : !n && i ? 1 : 0;
        }),
        n)
            .filter((e) => {
                let { subscriptionPlanId: t } = e;
                return t !== d.gD.NONE_MONTH && t !== d.gD.NONE_YEAR;
            })
            .map((e) => {
                let t =
                        null != r &&
                        !r.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity),
                    n = !i.isSubscriptionUpdate || t;
                return {
                    ...e,
                    showGuildSubscriptionAdjustmentTooltip:
                        u &&
                        (e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                            e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD ||
                            e.subscriptionPlanId === d.gD.PREMIUM_3_MONTH_GUILD ||
                            e.subscriptionPlanId === d.gD.PREMIUM_6_MONTH_GUILD),
                    isAddedSubscriptionInvoiceItem: n,
                };
            });
    },
    E = (e, t) => (e.discounts ?? []).some((e) => e.type === t);
function m(e, t, n, i) {
    let r = E(e, s.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case d.gD.PREMIUM_GROUP_MONTH:
            return f.intl.formatToPlainString(h.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
        case d.gD.PREMIUM_MONTH_LEGACY:
        case d.gD.PREMIUM_YEAR_LEGACY:
        case d.gD.PREMIUM_MONTH_TIER_0:
        case d.gD.PREMIUM_YEAR_TIER_0:
        case d.gD.PREMIUM_MONTH_TIER_1:
        case d.gD.PREMIUM_YEAR_TIER_1:
        case d.gD.PREMIUM_MONTH_TIER_2:
        case d.gD.PREMIUM_YEAR_TIER_2:
        case d.gD.PREMIUM_3_MONTH_TIER_2:
        case d.gD.PREMIUM_6_MONTH_TIER_2:
            return (0, l.Mn)(e.subscriptionPlanId, r, n, i);
        case d.gD.PREMIUM_3_MONTH_GUILD:
        case d.gD.PREMIUM_6_MONTH_GUILD:
            return f.intl.format(f.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case d.gD.PREMIUM_MONTH_GUILD:
            return f.intl.format(f.t["3BYyip"], { num: e.quantity });
        case d.gD.PREMIUM_YEAR_GUILD:
            return f.intl.format(f.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case d.WT.MONTH:
            if (1 === t.intervalCount) return f.intl.formatToPlainString(f.t["6oq128"], { planName: t.name });
            return f.intl.formatToPlainString(f.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case d.WT.YEAR:
            return f.intl.formatToPlainString(f.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
let g = (e) => {
        if (null != e.discounts) return e.discounts.find((e) => e.type === s.iS.SUBSCRIPTION_PLAN);
    },
    A = (e, t) => e.invoiceItems.some((e) => (e.discounts ?? []).some((e) => e.discount_id === t)),
    I = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: i,
                overrideAmount: a,
                isPrepaidPaymentSource: c,
                currency: d,
            } = t,
            _ = i ?? o.A.get(e.subscriptionPlanId);
        r()(null != _, "Missing subscriptionPlan");
        let h = ((e) => {
                if (null != e) return "interval_count" in e ? e.interval_count : e.intervalCount;
            })(n),
            f = m(e, _, c, (0, l.re)({ intervalType: n?.interval, intervalCount: h })),
            p = null != a ? a : e.amount,
            E = (0, u.$g)(p, d),
            A = c ? E : (0, u.CE)(E, _.interval, _.intervalCount),
            I = g(e),
            T = e.discounts ?? [],
            S = T.find((e) => e.type === s.iS.PREMIUM_TRIAL),
            y = T.find((e) => e.type === s.iS.ENTITLEMENT),
            C = T.reduce((e, t) => e + t.amount, 0);
        return {
            label: f,
            value: A,
            originalAmount: e.subscriptionPlanPrice * e.quantity,
            amount: p,
            amountWithoutDiscount: e.amount + C,
            discountAmountOff: C,
            formattedPrice: E,
            subscriptionPlan: _,
            subscriptionTrial: n,
            trialDiscount: S,
            subscriptionDiscount: I,
            entitlementDiscount: y,
        };
    },
    T = (e, t) => {
        let n = (0, c.Z)(e.invoiceItems);
        return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id), coalescedInvoiceItems: n };
    },
    S = (e, t) => {
        let n,
            i,
            r,
            { isPrepaidPaymentSource: s = !1 } = t,
            { guildSubscriptionInvoiceItem: a, ...d } =
                ((i = (n = (0, c.Z)(e.invoiceItems)).find((e) => !(0, l.z4)(e.subscriptionPlanId) && e.amount >= 0)),
                (r = n.find((e) => (0, l.z4)(e.subscriptionPlanId) && e.amount >= 0)),
                { coalescedInvoiceItems: n, basePlanInvoiceItem: i, guildSubscriptionInvoiceItem: r }),
            _ = null != a ? o.A.get(a.subscriptionPlanId) : null,
            h = ((e, t, n) => {
                let { currency: i, isPrepaidPaymentSource: r } = n,
                    s = null != t ? t.amount : 0,
                    a = (0, u.$g)(s, i),
                    o = null != e ? (0, u.CE)(a, e.interval, e.intervalCount) : 0;
                return {
                    guildSubscriptionAmount: s,
                    formattedGuildBoostPrice: a,
                    formattedGuildBoostRate: o,
                    guildBoostItemLabel:
                        null != t && null != e
                            ? f.intl.formatToPlainString(f.t.a3cAOg, {
                                  numGuildSubscriptions: t.quantity,
                                  planName: (0, l.Mn)(e.id, !1, r),
                              })
                            : null,
                };
            })(_, a, { currency: e.currency, isPrepaidPaymentSource: s });
        return { ...d, guildSubscriptionInvoiceItem: a, guildSubscriptionPlan: _, ...h };
    },
    y = (e, t) => {
        let n,
            { subscriptionPlanInvoiceItem: i, coalescedInvoiceItems: r } = T(e, t);
        if (null == i)
            throw new a.v({
                message: "Expected newPlanInvoiceItem",
                extraSentryInformation: { invoice: e, subscriptionPlan: t },
            });
        let o = r.find((e) => !(0, l.z4)(e.subscriptionPlanId) && e.amount < 0),
            c = r.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === s.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            _ = E(i, s.iS.PREMIUM_TRIAL),
            h =
                ((n = s.iS.SUBSCRIPTION_PLAN),
                i.subscriptionPlanPrice - (i.discounts?.find((e) => e.type === n)?.amount ?? 0)),
            p = i.quantity * h,
            m = i.amount + (null != o ? o.amount : 0) - p + (null != c ? c.amount : 0),
            g = r.filter(
                (e) =>
                    e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD,
            ),
            A = g.reduce((e, t) => e + t.amount, 0),
            I = [];
        return (
            0 === m ||
                _ ||
                I.push({
                    id: "base-plan-adjustment",
                    label: f.intl.formatToPlainString(f.t.ZSVged, {
                        planName: (0, l.ys)(t.id) ? (0, l.RH)(t.id) : t.name,
                    }),
                    tooltipText: f.intl.string(f.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, u.$g)(m, e.currency),
                    amount: m,
                    lineItemType: "adjustment",
                }),
            0 !== A &&
                I.push({
                    id: "guild-subscription-adjustment",
                    label: f.intl.string(f.t["+as5ZZ"]),
                    tooltipText: f.intl.format(f.t.UDop9c, {}),
                    tooltipAriaLabel: f.intl.string(f.t.P68ePO),
                    value: (0, u.$g)(A, e.currency),
                    amount: A,
                    lineItemType: "adjustment",
                }),
            {
                newPlanInvoiceItem: i,
                basePlanFullAmount: p,
                basePlanAdjustment: m,
                guildSubscriptionAdjustment: A,
                isTrialItem: _,
                invoiceAdjustmentDisplayItems: I,
                guildSubscriptionInvoiceItems: g,
                promotionItem: c,
                basePlanCreditItem: o,
            }
        );
    };
