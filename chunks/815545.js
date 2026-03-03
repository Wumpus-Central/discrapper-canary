"use strict";
n.d(t, { Ae: () => S, Q8: () => E, SA: () => O, Sb: () => y, Tp: () => I, rc: () => C, wt: () => R }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(311907),
    a = n(155718),
    o = n(97352),
    l = n(927578),
    u = n(580630),
    c = n(874638),
    d = n(788868),
    _ = n(88001),
    f = n(519412),
    p = n(985018);
function h(e) {
    let t = e.slice();
    return (
        t.sort((e, t) => {
            let n = (0, l.xq)(e.subscriptionPlanId),
                r = (0, l.xq)(t.subscriptionPlanId);
            return n && !r ? -1 : !n && r ? 1 : 0;
        }),
        t
    );
}
function m(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: t } = e;
        return t !== d.gD.NONE_MONTH && t !== d.gD.NONE_YEAR;
    });
}
let E = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
            r = null != t ? (0, c.Z)(t.invoiceItems) : null,
            i = null != t ? (0, l.Ge)(t) : null,
            { intervalType: s, intervalCount: a } = (0, l.Ge)(e),
            o = null != i && (i.intervalType !== s || i.intervalCount !== a);
        return m(h((0, c.Z)(e.invoiceItems))).map((e) => {
            let t =
                    null != r &&
                    !r.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity),
                i = !n.isSubscriptionUpdate || t;
            return {
                ...e,
                showGuildSubscriptionAdjustmentTooltip:
                    o &&
                    (e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                        e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD ||
                        e.subscriptionPlanId === d.gD.PREMIUM_3_MONTH_GUILD ||
                        e.subscriptionPlanId === d.gD.PREMIUM_6_MONTH_GUILD),
                isAddedSubscriptionInvoiceItem: i,
            };
        });
    },
    g = (e, t) => (e.discounts ?? []).some((e) => e.type === t),
    A = (e, t) => e.subscriptionPlanPrice - (e.discounts?.find((e) => e.type === t)?.amount ?? 0);
function I(e, t, n, r) {
    let i = g(e, a.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case d.gD.PREMIUM_GROUP_MONTH:
            return p.intl.formatToPlainString(f.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
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
            return (0, l.Mn)(e.subscriptionPlanId, i, n, r);
        case d.gD.PREMIUM_3_MONTH_GUILD:
        case d.gD.PREMIUM_6_MONTH_GUILD:
            return p.intl.format(p.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case d.gD.PREMIUM_MONTH_GUILD:
            return p.intl.format(p.t["3BYyip"], { num: e.quantity });
        case d.gD.PREMIUM_YEAR_GUILD:
            return p.intl.format(p.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case d.WT.MONTH:
            if (1 === t.intervalCount) return p.intl.formatToPlainString(p.t["6oq128"], { planName: t.name });
            return p.intl.formatToPlainString(p.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case d.WT.YEAR:
            return p.intl.formatToPlainString(p.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
let T = (e) => {
        if (null != e) return "interval_count" in e ? e.interval_count : e.intervalCount;
    },
    S = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: r,
                overrideAmount: s,
                isPrepaidPaymentSource: c,
                currency: d,
            } = t,
            _ = r ?? o.A.get(e.subscriptionPlanId);
        i()(null != _, "Missing subscriptionPlan");
        let f = T(n),
            p = I(e, _, c, (0, l.re)({ intervalType: n?.interval, intervalCount: f })),
            h = null != s ? s : e.amount,
            m = (0, u.$g)(h, d),
            E = c ? m : (0, u.CE)(m, _.interval, _.intervalCount),
            g = e.discounts ?? [],
            A = g.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN),
            S = g.find((e) => e.type === a.iS.PREMIUM_TRIAL),
            y = g.find((e) => e.type === a.iS.ENTITLEMENT),
            v = g.reduce((e, t) => e + t.amount, 0);
        return {
            label: p,
            value: E,
            originalAmount: e.subscriptionPlanPrice * e.quantity,
            amount: h,
            amountWithoutDiscount: e.amount + v,
            discountAmountOff: v,
            formattedPrice: m,
            subscriptionPlan: _,
            subscriptionTrial: n,
            trialDiscount: S,
            subscriptionDiscount: A,
            entitlementDiscount: y,
        };
    },
    y = (e, t) => {
        let n = (0, c.Z)(e.invoiceItems);
        return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id), coalescedInvoiceItems: n };
    },
    v = (e) => {
        let t = (0, c.Z)(e.invoiceItems),
            n = t.find((e) => !(0, l.z4)(e.subscriptionPlanId) && e.amount >= 0),
            r = t.find((e) => (0, l.z4)(e.subscriptionPlanId) && e.amount >= 0);
        return { coalescedInvoiceItems: t, basePlanInvoiceItem: n, guildSubscriptionInvoiceItem: r };
    },
    N = (e, t, n) => {
        let { currency: r, isPrepaidPaymentSource: i } = n,
            s = null != t ? t.amount : 0,
            a = (0, u.$g)(s, r),
            o = null != e ? (0, u.CE)(a, e.interval, e.intervalCount) : 0;
        return {
            guildSubscriptionAmount: s,
            formattedGuildBoostPrice: a,
            formattedGuildBoostRate: o,
            guildBoostItemLabel:
                null != t && null != e
                    ? p.intl.formatToPlainString(p.t.a3cAOg, {
                          numGuildSubscriptions: t.quantity,
                          planName: (0, l.Mn)(e.id, !1, i),
                      })
                    : null,
        };
    },
    C = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: r, ...i } = v(e),
            a = (0, s.bG)([o.A], () => (null != r ? o.A.get(r.subscriptionPlanId) : null)),
            l = N(a, r, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...i, guildSubscriptionInvoiceItem: r, guildSubscriptionPlan: a, ...l };
    },
    R = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: r, ...i } = v(e),
            s = null != r ? o.A.get(r.subscriptionPlanId) : null,
            a = N(s, r, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...i, guildSubscriptionInvoiceItem: r, guildSubscriptionPlan: s, ...a };
    },
    O = (e, t) => {
        let { subscriptionPlanInvoiceItem: n, coalescedInvoiceItems: r } = y(e, t);
        i()(null != n, "Expected newPlanInvoiceItem");
        let s = r.find((e) => !(0, l.z4)(e.subscriptionPlanId) && e.amount < 0),
            o = r.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            c = g(n, a.iS.PREMIUM_TRIAL),
            _ = A(n, a.iS.SUBSCRIPTION_PLAN),
            f = n.quantity * _,
            h = n.amount + (null != s ? s.amount : 0) - f + (null != o ? o.amount : 0),
            m = r.filter(
                (e) =>
                    e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD,
            ),
            E = m.reduce((e, t) => e + t.amount, 0),
            I = [];
        return (
            0 === h ||
                c ||
                I.push({
                    id: "base-plan-adjustment",
                    label: p.intl.formatToPlainString(p.t.ZSVged, {
                        planName: (0, l.ys)(t.id) ? (0, l.RH)(t.id) : t.name,
                    }),
                    tooltipText: p.intl.string(p.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, u.$g)(h, e.currency),
                    amount: h,
                }),
            0 !== E &&
                I.push({
                    id: "guild-subscription-adjustment",
                    label: p.intl.string(p.t["+as5ZZ"]),
                    tooltipText: p.intl.format(p.t.UDop9c, {}),
                    tooltipAriaLabel: p.intl.string(p.t.P68ePO),
                    value: (0, u.$g)(E, e.currency),
                    amount: E,
                }),
            {
                newPlanInvoiceItem: n,
                basePlanFullAmount: f,
                basePlanAdjustment: h,
                guildSubscriptionAdjustment: E,
                isTrialItem: c,
                invoiceAdjustmentDisplayItems: I,
                guildSubscriptionInvoiceItems: m,
                promotionItem: o,
                basePlanCreditItem: s,
            }
        );
    };
