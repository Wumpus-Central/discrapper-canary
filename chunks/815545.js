"use strict";
n.d(t, {
    Ae: () => T,
    NL: () => A,
    Q8: () => E,
    Ro: () => I,
    SA: () => R,
    Sb: () => S,
    Tp: () => g,
    rc: () => v,
    wt: () => C,
}),
    n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(17928),
    a = n(155718),
    o = n(71804),
    l = n(97352),
    u = n(428262),
    c = n(580630),
    d = n(874638),
    _ = n(788868),
    h = n(88001),
    f = n(466919),
    p = n(375708);
let E = function (e, t) {
        let n,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
            r = null != t ? (0, d.Z)(t.invoiceItems) : null,
            s = null != t ? (0, u.Ge)(t) : null,
            { intervalType: a, intervalCount: o } = (0, u.Ge)(e),
            l = null != s && (s.intervalType !== a || s.intervalCount !== o);
        return ((n = (0, d.Z)(e.invoiceItems).slice()).sort((e, t) => {
            let n = (0, u.xq)(e.subscriptionPlanId),
                i = (0, u.xq)(t.subscriptionPlanId);
            return n && !i ? -1 : !n && i ? 1 : 0;
        }),
        n)
            .filter((e) => {
                let { subscriptionPlanId: t } = e;
                return t !== _.gD.NONE_MONTH && t !== _.gD.NONE_YEAR;
            })
            .map((e) => {
                let t =
                        null != r &&
                        !r.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity),
                    n = !i.isSubscriptionUpdate || t;
                return {
                    ...e,
                    showGuildSubscriptionAdjustmentTooltip:
                        l &&
                        (e.subscriptionPlanId === _.gD.PREMIUM_MONTH_GUILD ||
                            e.subscriptionPlanId === _.gD.PREMIUM_YEAR_GUILD ||
                            e.subscriptionPlanId === _.gD.PREMIUM_3_MONTH_GUILD ||
                            e.subscriptionPlanId === _.gD.PREMIUM_6_MONTH_GUILD),
                    isAddedSubscriptionInvoiceItem: n,
                };
            });
    },
    m = (e, t) => (e.discounts ?? []).some((e) => e.type === t);
function g(e, t, n, i) {
    let r = m(e, a.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case _.gD.PREMIUM_GROUP_MONTH:
            return p.intl.formatToPlainString(f.default["8bPDtb"], { premiumGroupProductName: (0, h.DP)() });
        case _.gD.PREMIUM_MONTH_LEGACY:
        case _.gD.PREMIUM_YEAR_LEGACY:
        case _.gD.PREMIUM_MONTH_TIER_0:
        case _.gD.PREMIUM_YEAR_TIER_0:
        case _.gD.PREMIUM_MONTH_TIER_1:
        case _.gD.PREMIUM_YEAR_TIER_1:
        case _.gD.PREMIUM_MONTH_TIER_2:
        case _.gD.PREMIUM_YEAR_TIER_2:
        case _.gD.PREMIUM_3_MONTH_TIER_2:
        case _.gD.PREMIUM_6_MONTH_TIER_2:
            return (0, u.Mn)(e.subscriptionPlanId, r, n, i);
        case _.gD.PREMIUM_3_MONTH_GUILD:
        case _.gD.PREMIUM_6_MONTH_GUILD:
            return p.intl.format(p.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case _.gD.PREMIUM_MONTH_GUILD:
            return p.intl.format(p.t["3BYyip"], { num: e.quantity });
        case _.gD.PREMIUM_YEAR_GUILD:
            return p.intl.format(p.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case _.WT.MONTH:
            if (1 === t.intervalCount) return p.intl.formatToPlainString(p.t["6oq128"], { planName: t.name });
            return p.intl.formatToPlainString(p.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case _.WT.YEAR:
            return p.intl.formatToPlainString(p.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
let A = (e) => {
        if (null != e.discounts) return e.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
    },
    I = (e, t) => e.invoiceItems.some((e) => (e.discounts ?? []).some((e) => e.discount_id === t)),
    T = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: i,
                overrideAmount: s,
                isPrepaidPaymentSource: o,
                currency: d,
            } = t,
            _ = i ?? l.A.get(e.subscriptionPlanId);
        r()(null != _, "Missing subscriptionPlan");
        let h = ((e) => {
                if (null != e) return "interval_count" in e ? e.interval_count : e.intervalCount;
            })(n),
            f = g(e, _, o, (0, u.re)({ intervalType: n?.interval, intervalCount: h })),
            p = null != s ? s : e.amount,
            E = (0, c.$g)(p, d),
            m = o ? E : (0, c.CE)(E, _.interval, _.intervalCount),
            I = A(e),
            T = e.discounts ?? [],
            S = T.find((e) => e.type === a.iS.PREMIUM_TRIAL),
            y = T.find((e) => e.type === a.iS.ENTITLEMENT),
            N = T.reduce((e, t) => e + t.amount, 0);
        return {
            label: f,
            value: m,
            originalAmount: e.subscriptionPlanPrice * e.quantity,
            amount: p,
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
    S = (e, t) => {
        let n = (0, d.Z)(e.invoiceItems);
        return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id), coalescedInvoiceItems: n };
    },
    y = (e) => {
        let t = (0, d.Z)(e.invoiceItems),
            n = t.find((e) => !(0, u.z4)(e.subscriptionPlanId) && e.amount >= 0),
            i = t.find((e) => (0, u.z4)(e.subscriptionPlanId) && e.amount >= 0);
        return { coalescedInvoiceItems: t, basePlanInvoiceItem: n, guildSubscriptionInvoiceItem: i };
    },
    N = (e, t, n) => {
        let { currency: i, isPrepaidPaymentSource: r } = n,
            s = null != t ? t.amount : 0,
            a = (0, c.$g)(s, i),
            o = null != e ? (0, c.CE)(a, e.interval, e.intervalCount) : 0;
        return {
            guildSubscriptionAmount: s,
            formattedGuildBoostPrice: a,
            formattedGuildBoostRate: o,
            guildBoostItemLabel:
                null != t && null != e
                    ? p.intl.formatToPlainString(p.t.a3cAOg, {
                          numGuildSubscriptions: t.quantity,
                          planName: (0, u.Mn)(e.id, !1, r),
                      })
                    : null,
        };
    },
    v = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: i, ...r } = y(e),
            a = (0, s.bG)([l.A], () => (null != i ? l.A.get(i.subscriptionPlanId) : null)),
            o = N(a, i, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...r, guildSubscriptionInvoiceItem: i, guildSubscriptionPlan: a, ...o };
    },
    C = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: i, ...r } = y(e),
            s = null != i ? l.A.get(i.subscriptionPlanId) : null,
            a = N(s, i, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...r, guildSubscriptionInvoiceItem: i, guildSubscriptionPlan: s, ...a };
    },
    R = (e, t) => {
        let n,
            { subscriptionPlanInvoiceItem: i, coalescedInvoiceItems: r } = S(e, t);
        if (null == i)
            throw new o.v({
                message: "Expected newPlanInvoiceItem",
                extraSentryInformation: { invoice: e, subscriptionPlan: t },
            });
        let s = r.find((e) => !(0, u.z4)(e.subscriptionPlanId) && e.amount < 0),
            l = r.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            d = m(i, a.iS.PREMIUM_TRIAL),
            h =
                ((n = a.iS.SUBSCRIPTION_PLAN),
                i.subscriptionPlanPrice - (i.discounts?.find((e) => e.type === n)?.amount ?? 0)),
            f = i.quantity * h,
            E = i.amount + (null != s ? s.amount : 0) - f + (null != l ? l.amount : 0),
            g = r.filter(
                (e) =>
                    e.subscriptionPlanId === _.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === _.gD.PREMIUM_YEAR_GUILD,
            ),
            A = g.reduce((e, t) => e + t.amount, 0),
            I = [];
        return (
            0 === E ||
                d ||
                I.push({
                    id: "base-plan-adjustment",
                    label: p.intl.formatToPlainString(p.t.ZSVged, {
                        planName: (0, u.ys)(t.id) ? (0, u.RH)(t.id) : t.name,
                    }),
                    tooltipText: p.intl.string(p.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, c.$g)(E, e.currency),
                    amount: E,
                    lineItemType: "adjustment",
                }),
            0 !== A &&
                I.push({
                    id: "guild-subscription-adjustment",
                    label: p.intl.string(p.t["+as5ZZ"]),
                    tooltipText: p.intl.format(p.t.UDop9c, {}),
                    tooltipAriaLabel: p.intl.string(p.t.P68ePO),
                    value: (0, c.$g)(A, e.currency),
                    amount: A,
                    lineItemType: "adjustment",
                }),
            {
                newPlanInvoiceItem: i,
                basePlanFullAmount: f,
                basePlanAdjustment: E,
                guildSubscriptionAdjustment: A,
                isTrialItem: d,
                invoiceAdjustmentDisplayItems: I,
                guildSubscriptionInvoiceItems: g,
                promotionItem: l,
                basePlanCreditItem: s,
            }
        );
    };
