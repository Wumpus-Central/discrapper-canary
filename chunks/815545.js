"use strict";
n.d(t, {
    Ae: () => I,
    NL: () => g,
    Q8: () => h,
    Ro: () => A,
    SA: () => C,
    Sb: () => T,
    Tp: () => m,
    rc: () => N,
    wt: () => v,
}),
    n(321073);
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
    f = n(466919),
    p = n(985018);
let h = function (e, t) {
        let n,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
            i = null != t ? (0, c.Z)(t.invoiceItems) : null,
            s = null != t ? (0, l.Ge)(t) : null,
            { intervalType: a, intervalCount: o } = (0, l.Ge)(e),
            u = null != s && (s.intervalType !== a || s.intervalCount !== o);
        return ((n = (0, c.Z)(e.invoiceItems).slice()).sort((e, t) => {
            let n = (0, l.xq)(e.subscriptionPlanId),
                r = (0, l.xq)(t.subscriptionPlanId);
            return n && !r ? -1 : !n && r ? 1 : 0;
        }),
        n)
            .filter((e) => {
                let { subscriptionPlanId: t } = e;
                return t !== d.gD.NONE_MONTH && t !== d.gD.NONE_YEAR;
            })
            .map((e) => {
                let t =
                        null != i &&
                        !i.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity),
                    n = !r.isSubscriptionUpdate || t;
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
function m(e, t, n, r) {
    let i = E(e, a.iS.PREMIUM_TRIAL);
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
let g = (e) => {
        if (null != e.discounts) return e.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
    },
    A = (e, t) => e.invoiceItems.some((e) => (e.discounts ?? []).some((e) => e.discount_id === t)),
    I = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: r,
                overrideAmount: s,
                isPrepaidPaymentSource: c,
                currency: d,
            } = t,
            _ = r ?? o.A.get(e.subscriptionPlanId);
        i()(null != _, "Missing subscriptionPlan");
        let f = ((e) => {
                if (null != e) return "interval_count" in e ? e.interval_count : e.intervalCount;
            })(n),
            p = m(e, _, c, (0, l.re)({ intervalType: n?.interval, intervalCount: f })),
            h = null != s ? s : e.amount,
            E = (0, u.$g)(h, d),
            A = c ? E : (0, u.CE)(E, _.interval, _.intervalCount),
            I = g(e),
            T = e.discounts ?? [],
            S = T.find((e) => e.type === a.iS.PREMIUM_TRIAL),
            y = T.find((e) => e.type === a.iS.ENTITLEMENT),
            N = T.reduce((e, t) => e + t.amount, 0);
        return {
            label: p,
            value: A,
            originalAmount: e.subscriptionPlanPrice * e.quantity,
            amount: h,
            amountWithoutDiscount: e.amount + N,
            discountAmountOff: N,
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
    S = (e) => {
        let t = (0, c.Z)(e.invoiceItems),
            n = t.find((e) => !(0, l.z4)(e.subscriptionPlanId) && e.amount >= 0),
            r = t.find((e) => (0, l.z4)(e.subscriptionPlanId) && e.amount >= 0);
        return { coalescedInvoiceItems: t, basePlanInvoiceItem: n, guildSubscriptionInvoiceItem: r };
    },
    y = (e, t, n) => {
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
    N = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: r, ...i } = S(e),
            a = (0, s.bG)([o.A], () => (null != r ? o.A.get(r.subscriptionPlanId) : null)),
            l = y(a, r, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...i, guildSubscriptionInvoiceItem: r, guildSubscriptionPlan: a, ...l };
    },
    v = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: r, ...i } = S(e),
            s = null != r ? o.A.get(r.subscriptionPlanId) : null,
            a = y(s, r, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...i, guildSubscriptionInvoiceItem: r, guildSubscriptionPlan: s, ...a };
    },
    C = (e, t) => {
        let n,
            { subscriptionPlanInvoiceItem: r, coalescedInvoiceItems: s } = T(e, t);
        i()(null != r, "Expected newPlanInvoiceItem");
        let o = s.find((e) => !(0, l.z4)(e.subscriptionPlanId) && e.amount < 0),
            c = s.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            _ = E(r, a.iS.PREMIUM_TRIAL),
            f =
                ((n = a.iS.SUBSCRIPTION_PLAN),
                r.subscriptionPlanPrice - (r.discounts?.find((e) => e.type === n)?.amount ?? 0)),
            h = r.quantity * f,
            m = r.amount + (null != o ? o.amount : 0) - h + (null != c ? c.amount : 0),
            g = s.filter(
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
                    label: p.intl.formatToPlainString(p.t.ZSVged, {
                        planName: (0, l.ys)(t.id) ? (0, l.RH)(t.id) : t.name,
                    }),
                    tooltipText: p.intl.string(p.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, u.$g)(m, e.currency),
                    amount: m,
                    lineItemType: "adjustment",
                }),
            0 !== A &&
                I.push({
                    id: "guild-subscription-adjustment",
                    label: p.intl.string(p.t["+as5ZZ"]),
                    tooltipText: p.intl.format(p.t.UDop9c, {}),
                    tooltipAriaLabel: p.intl.string(p.t.P68ePO),
                    value: (0, u.$g)(A, e.currency),
                    amount: A,
                    lineItemType: "adjustment",
                }),
            {
                newPlanInvoiceItem: r,
                basePlanFullAmount: h,
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
