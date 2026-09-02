"use strict";
n.d(t, { Ae: () => m, NL: () => p, Q8: () => h, Ro: () => T, SA: () => N, Sb: () => g, Tp: () => f, wt: () => S }),
    n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(155718),
    s = n(71804),
    l = n(97352),
    o = n(158045),
    d = n(580630),
    c = n(874638),
    u = n(202541),
    _ = n(88001),
    E = n(148155),
    A = n(375708);
function h(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
        r = null != t ? (0, c.Z)(t.invoiceItems) : null,
        a = null != t ? (0, o.Ge)(t) : null,
        { intervalType: s, intervalCount: l } = (0, o.Ge)(e),
        d = null != a && (a.intervalType !== s || a.intervalCount !== l);
    return ((n = (0, c.Z)(e.invoiceItems).slice()).sort((e, t) => {
        let n = (0, o.xq)(e.subscriptionPlanId),
            i = (0, o.xq)(t.subscriptionPlanId);
        return n && !i ? -1 : !n && i ? 1 : 0;
    }),
    n)
        .filter((e) => {
            let { subscriptionPlanId: t } = e;
            return t !== u.gD.NONE_MONTH && t !== u.gD.NONE_YEAR;
        })
        .map((e) => {
            let t =
                    null != r &&
                    !r.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity),
                n = !i.isSubscriptionUpdate || t;
            return {
                ...e,
                showGuildSubscriptionAdjustmentTooltip:
                    d &&
                    (e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD ||
                        e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD ||
                        e.subscriptionPlanId === u.gD.PREMIUM_3_MONTH_GUILD ||
                        e.subscriptionPlanId === u.gD.PREMIUM_6_MONTH_GUILD),
                isAddedSubscriptionInvoiceItem: n,
            };
        });
}
function I(e, t) {
    return (e.discounts ?? []).some((e) => e.type === t);
}
function f(e, t, n, i) {
    let r = I(e, a.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case u.gD.PREMIUM_GROUP_MONTH:
            return A.intl.formatToPlainString(E.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
        case u.gD.PREMIUM_MONTH_LEGACY:
        case u.gD.PREMIUM_YEAR_LEGACY:
        case u.gD.PREMIUM_MONTH_TIER_0:
        case u.gD.PREMIUM_YEAR_TIER_0:
        case u.gD.PREMIUM_MONTH_TIER_1:
        case u.gD.PREMIUM_YEAR_TIER_1:
        case u.gD.PREMIUM_MONTH_TIER_2:
        case u.gD.PREMIUM_YEAR_TIER_2:
        case u.gD.PREMIUM_3_MONTH_TIER_2:
        case u.gD.PREMIUM_6_MONTH_TIER_2:
            return (0, o.Mn)(e.subscriptionPlanId, r, n, i);
        case u.gD.PREMIUM_3_MONTH_GUILD:
        case u.gD.PREMIUM_6_MONTH_GUILD:
            return A.intl.format(A.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case u.gD.PREMIUM_MONTH_GUILD:
            return A.intl.format(A.t["3BYyip"], { num: e.quantity });
        case u.gD.PREMIUM_YEAR_GUILD:
            return A.intl.format(A.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case u.WT.MONTH:
            if (1 === t.intervalCount) return A.intl.formatToPlainString(A.t["6oq128"], { planName: t.name });
            return A.intl.formatToPlainString(A.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case u.WT.YEAR:
            return A.intl.formatToPlainString(A.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
function p(e) {
    if (null != e.discounts) return e.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
}
function T(e, t) {
    return e.invoiceItems.some((e) => (e.discounts ?? []).some((e) => e.discount_id === t));
}
function m(e, t) {
    let { subscriptionTrial: n, subscriptionPlan: i, overrideAmount: s, isPrepaidPaymentSource: c, currency: u } = t,
        _ = i ?? l.A.get(e.subscriptionPlanId);
    r()(null != _, "Missing subscriptionPlan");
    let E = n?.intervalCount,
        A = f(e, _, c, (0, o.re)({ intervalType: n?.interval, intervalCount: E })),
        h = null != s ? s : e.amount,
        I = (0, d.$g)(h, u),
        T = c ? I : (0, d.CE)(I, _.interval, _.intervalCount),
        m = p(e),
        g = e.discounts ?? [],
        S = g.find((e) => e.type === a.iS.PREMIUM_TRIAL),
        N = g.find((e) => e.type === a.iS.ENTITLEMENT),
        C = g.reduce((e, t) => e + t.amount, 0);
    return {
        label: A,
        value: T,
        originalAmount: e.subscriptionPlanPrice * e.quantity,
        amount: h,
        amountWithoutDiscount: e.amount + C,
        discountAmountOff: C,
        formattedPrice: I,
        subscriptionPlan: _,
        subscriptionTrial: n,
        trialDiscount: S,
        subscriptionDiscount: m,
        entitlementDiscount: N,
    };
}
function g(e, t) {
    let n = (0, c.Z)(e.invoiceItems);
    return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id), coalescedInvoiceItems: n };
}
function S(e, t) {
    let n,
        i,
        r,
        { isPrepaidPaymentSource: a = !1 } = t,
        { guildSubscriptionInvoiceItem: s, ...u } =
            ((i = (n = (0, c.Z)(e.invoiceItems)).find((e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount >= 0)),
            (r = n.find((e) => (0, o.z4)(e.subscriptionPlanId) && e.amount >= 0)),
            { coalescedInvoiceItems: n, basePlanInvoiceItem: i, guildSubscriptionInvoiceItem: r }),
        _ = null != s ? l.A.get(s.subscriptionPlanId) : null,
        E = (function (e, t, n) {
            let { currency: i, isPrepaidPaymentSource: r } = n,
                a = null != t ? t.amount : 0,
                s = (0, d.$g)(a, i),
                l = null != e ? (0, d.CE)(s, e.interval, e.intervalCount) : 0;
            return {
                guildSubscriptionAmount: a,
                formattedGuildBoostPrice: s,
                formattedGuildBoostRate: l,
                guildBoostItemLabel:
                    null != t && null != e
                        ? A.intl.formatToPlainString(A.t.a3cAOg, {
                              numGuildSubscriptions: t.quantity,
                              planName: (0, o.Mn)(e.id, !1, r),
                          })
                        : null,
            };
        })(_, s, { currency: e.currency, isPrepaidPaymentSource: a });
    return { ...u, guildSubscriptionInvoiceItem: s, guildSubscriptionPlan: _, ...E };
}
function N(e, t) {
    var n;
    let { subscriptionPlanInvoiceItem: i, coalescedInvoiceItems: r } = g(e, t);
    if (null == i)
        throw new s.v({
            message: "Expected newPlanInvoiceItem",
            extraSentryInformation: { invoice: e, subscriptionPlan: t },
        });
    let l = r.find((e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount < 0),
        c = r.find(
            (e) =>
                null == e.subscriptionPlanId &&
                null != e.discounts &&
                null != e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
        ),
        _ = I(i, a.iS.PREMIUM_TRIAL),
        E =
            ((n = a.iS.SUBSCRIPTION_PLAN),
            i.subscriptionPlanPrice - (i.discounts?.find((e) => e.type === n)?.amount ?? 0)),
        h = i.quantity * E,
        f = i.amount + (null != l ? l.amount : 0) - h + (null != c ? c.amount : 0),
        p = r.filter(
            (e) =>
                e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD,
        ),
        T = p.reduce((e, t) => e + t.amount, 0),
        m = [];
    return (
        0 === f ||
            _ ||
            m.push({
                id: "base-plan-adjustment",
                label: A.intl.formatToPlainString(A.t.ZSVged, { planName: (0, o.ys)(t.id) ? (0, o.RH)(t.id) : t.name }),
                tooltipText: A.intl.string(A.t.JmwQJM),
                tooltipAriaLabel: "",
                value: (0, d.$g)(f, e.currency),
                amount: f,
                lineItemType: "adjustment",
            }),
        0 !== T &&
            m.push({
                id: "guild-subscription-adjustment",
                label: A.intl.string(A.t["+as5ZZ"]),
                tooltipText: A.intl.format(A.t.UDop9c, {}),
                tooltipAriaLabel: A.intl.string(A.t.P68ePO),
                value: (0, d.$g)(T, e.currency),
                amount: T,
                lineItemType: "adjustment",
            }),
        {
            newPlanInvoiceItem: i,
            basePlanFullAmount: h,
            basePlanAdjustment: f,
            guildSubscriptionAdjustment: T,
            isTrialItem: _,
            invoiceAdjustmentDisplayItems: m,
            guildSubscriptionInvoiceItems: p,
            promotionItem: c,
            basePlanCreditItem: l,
        }
    );
}
