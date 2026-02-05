"use strict";
n.d(t, { Ol: () => I, Q8: () => m, Sb: () => T, Tp: () => A, qi: () => y }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    s = n(97352),
    o = n(927578),
    l = n(580630),
    u = n(874638),
    c = n(788868),
    d = n(88001),
    _ = n(519412),
    f = n(985018);
function p(e) {
    let t = e.slice();
    return (
        t.sort((e, t) => {
            let n = (0, o.xq)(e.subscriptionPlanId),
                r = (0, o.xq)(t.subscriptionPlanId);
            return n && !r ? -1 : !n && r ? 1 : 0;
        }),
        t
    );
}
function h(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: t } = e;
        return t !== c.gD.NONE_MONTH && t !== c.gD.NONE_YEAR;
    });
}
let m = (e, t) => {
        let n = null != t ? (0, o.Ge)(t) : null,
            { intervalType: r, intervalCount: i } = (0, o.Ge)(e),
            a = null != n && (n.intervalType !== r || n.intervalCount !== i);
        return h(p((0, u.Z)(e.invoiceItems))).map((e) => ({
            ...e,
            showGuildSubscriptionAdjustmentTooltip:
                a &&
                (e.subscriptionPlanId === c.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === c.gD.PREMIUM_YEAR_GUILD ||
                    e.subscriptionPlanId === c.gD.PREMIUM_3_MONTH_GUILD ||
                    e.subscriptionPlanId === c.gD.PREMIUM_6_MONTH_GUILD),
        }));
    },
    g = (e, t) => (e.discounts ?? []).some((e) => e.type === t),
    E = (e, t) => e.subscriptionPlanPrice - (e.discounts?.find((e) => e.type === t)?.amount ?? 0);
function A(e, t, n, r) {
    let i = g(e, a.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case c.gD.PREMIUM_GROUP_MONTH:
            return f.intl.formatToPlainString(_.default["8bPDtb"], { premiumGroupProductName: (0, d.DP)() });
        case c.gD.PREMIUM_MONTH_LEGACY:
        case c.gD.PREMIUM_YEAR_LEGACY:
        case c.gD.PREMIUM_MONTH_TIER_0:
        case c.gD.PREMIUM_YEAR_TIER_0:
        case c.gD.PREMIUM_MONTH_TIER_1:
        case c.gD.PREMIUM_YEAR_TIER_1:
        case c.gD.PREMIUM_MONTH_TIER_2:
        case c.gD.PREMIUM_YEAR_TIER_2:
        case c.gD.PREMIUM_3_MONTH_TIER_2:
        case c.gD.PREMIUM_6_MONTH_TIER_2:
            return (0, o.Mn)(e.subscriptionPlanId, i, n, r);
        case c.gD.PREMIUM_3_MONTH_GUILD:
        case c.gD.PREMIUM_6_MONTH_GUILD:
            return f.intl.format(f.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case c.gD.PREMIUM_MONTH_GUILD:
            return f.intl.format(f.t["3BYyip"], { num: e.quantity });
        case c.gD.PREMIUM_YEAR_GUILD:
            return f.intl.format(f.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case c.WT.MONTH:
            if (1 === t.intervalCount) return f.intl.formatToPlainString(f.t["6oq128"], { planName: t.name });
            return f.intl.formatToPlainString(f.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case c.WT.YEAR:
            return f.intl.formatToPlainString(f.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
let I = (e, t) => {
        let {
                premiumTrialOffer: n,
                subscriptionPlan: r,
                overrideAmount: u,
                isPrepaidPaymentSource: c,
                currency: d,
            } = t,
            _ = r ?? s.A.get(e.subscriptionPlanId),
            f = n?.subscription_trial;
        i()(null != _, "Missing subscriptionPlan");
        let p = A(e, _, c, (0, o.re)({ intervalType: f?.interval, intervalCount: f?.interval_count })),
            h = null != u ? u : e.amount,
            m = (0, l.$g)(h, d),
            g = c ? m : (0, l.CE)(m, _.interval, _.intervalCount),
            E = e.discounts ?? [],
            I = E.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN),
            T = E.find((e) => e.type === a.iS.PREMIUM_TRIAL),
            y = E.find((e) => e.type === a.iS.ENTITLEMENT),
            S = E.reduce((e, t) => e + t.amount, 0);
        return {
            label: p,
            value: g,
            amount: h,
            amountWithoutDiscount: e.amount + S,
            discountAmountOff: S,
            formattedPrice: m,
            subscriptionPlan: _,
            subscriptionTrial: f,
            trialDiscount: T,
            subscriptionDiscount: I,
            entitlementDiscount: y,
        };
    },
    T = (e, t) => {
        let n = (0, u.Z)(e.invoiceItems);
        return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id), coalescedInvoiceItems: n };
    },
    y = (e, t) => {
        let { subscriptionPlanInvoiceItem: n, coalescedInvoiceItems: r } = T(e, t);
        i()(null != n, "Expected newPlanInvoiceItem");
        let s = r.find((e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount < 0),
            u = r.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            d = g(n, a.iS.PREMIUM_TRIAL),
            _ = E(n, a.iS.SUBSCRIPTION_PLAN),
            p = n.quantity * _,
            h = n.amount + (null != s ? s.amount : 0) - p + (null != u ? u.amount : 0),
            m = r.filter(
                (e) =>
                    e.subscriptionPlanId === c.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === c.gD.PREMIUM_YEAR_GUILD,
            ),
            A = m.reduce((e, t) => e + t.amount, 0),
            I = [];
        return (
            0 === h ||
                d ||
                I.push({
                    id: "base-plan-adjustment",
                    label: f.intl.formatToPlainString(f.t.ZSVged, {
                        planName: (0, o.ys)(t.id) ? (0, o.RH)(t.id) : t.name,
                    }),
                    tooltipText: f.intl.string(f.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, l.$g)(h, e.currency),
                    amount: h,
                }),
            0 !== A &&
                I.push({
                    id: "guild-subscription-adjustment",
                    label: f.intl.string(f.t["+as5ZZ"]),
                    tooltipText: f.intl.format(f.t.UDop9c, {}),
                    tooltipAriaLabel: f.intl.string(f.t.P68ePO),
                    value: (0, l.$g)(A, e.currency),
                    amount: A,
                }),
            {
                newPlanInvoiceItem: n,
                basePlanFullAmount: p,
                basePlanAdjustment: h,
                guildSubscriptionAdjustment: A,
                isTrialItem: d,
                invoiceAdjustmentDisplayItems: I,
                guildSubscriptionInvoiceItems: m,
                promotionItem: u,
                basePlanCreditItem: s,
            }
        );
    };
