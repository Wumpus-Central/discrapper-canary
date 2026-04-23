n.d(t, {
    Ae: () => A,
    NL: () => f,
    Q8: () => m,
    Ro: () => _,
    SA: () => T,
    Sb: () => P,
    Tp: () => E,
    rc: () => S,
    wt: () => M,
}),
    n(321073);
var i = n(284009),
    r = n.n(i),
    l = n(17928),
    s = n(155718),
    a = n(97352),
    u = n(927578),
    o = n(580630),
    c = n(874638),
    d = n(788868),
    p = n(88001),
    h = n(466919),
    C = n(985018);
let m = function (e, t) {
        let n,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
            r = null != t ? (0, c.Z)(t.invoiceItems) : null,
            l = null != t ? (0, u.Ge)(t) : null,
            { intervalType: s, intervalCount: a } = (0, u.Ge)(e),
            o = null != l && (l.intervalType !== s || l.intervalCount !== a);
        return ((n = (0, c.Z)(e.invoiceItems).slice()).sort((e, t) => {
            let n = (0, u.xq)(e.subscriptionPlanId),
                i = (0, u.xq)(t.subscriptionPlanId);
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
                        o &&
                        (e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                            e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD ||
                            e.subscriptionPlanId === d.gD.PREMIUM_3_MONTH_GUILD ||
                            e.subscriptionPlanId === d.gD.PREMIUM_6_MONTH_GUILD),
                    isAddedSubscriptionInvoiceItem: n,
                };
            });
    },
    I = (e, t) => (e.discounts ?? []).some((e) => e.type === t);
function E(e, t, n, i) {
    let r = I(e, s.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case d.gD.PREMIUM_GROUP_MONTH:
            return C.intl.formatToPlainString(h.default["8bPDtb"], { premiumGroupProductName: (0, p.DP)() });
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
            return (0, u.Mn)(e.subscriptionPlanId, r, n, i);
        case d.gD.PREMIUM_3_MONTH_GUILD:
        case d.gD.PREMIUM_6_MONTH_GUILD:
            return C.intl.format(C.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case d.gD.PREMIUM_MONTH_GUILD:
            return C.intl.format(C.t["3BYyip"], { num: e.quantity });
        case d.gD.PREMIUM_YEAR_GUILD:
            return C.intl.format(C.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case d.WT.MONTH:
            if (1 === t.intervalCount) return C.intl.formatToPlainString(C.t["6oq128"], { planName: t.name });
            return C.intl.formatToPlainString(C.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case d.WT.YEAR:
            return C.intl.formatToPlainString(C.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
let f = (e) => {
        if (null != e.discounts) return e.discounts.find((e) => e.type === s.iS.SUBSCRIPTION_PLAN);
    },
    _ = (e, t) => e.invoiceItems.some((e) => (e.discounts ?? []).some((e) => e.discount_id === t)),
    A = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: i,
                overrideAmount: l,
                isPrepaidPaymentSource: c,
                currency: d,
            } = t,
            p = i ?? a.A.get(e.subscriptionPlanId);
        r()(null != p, "Missing subscriptionPlan");
        let h = ((e) => {
                if (null != e) return "interval_count" in e ? e.interval_count : e.intervalCount;
            })(n),
            C = E(e, p, c, (0, u.re)({ intervalType: n?.interval, intervalCount: h })),
            m = null != l ? l : e.amount,
            I = (0, o.$g)(m, d),
            _ = c ? I : (0, o.CE)(I, p.interval, p.intervalCount),
            A = f(e),
            P = e.discounts ?? [],
            b = P.find((e) => e.type === s.iS.PREMIUM_TRIAL),
            y = P.find((e) => e.type === s.iS.ENTITLEMENT),
            S = P.reduce((e, t) => e + t.amount, 0);
        return {
            label: C,
            value: _,
            originalAmount: e.subscriptionPlanPrice * e.quantity,
            amount: m,
            amountWithoutDiscount: e.amount + S,
            discountAmountOff: S,
            formattedPrice: I,
            subscriptionPlan: p,
            subscriptionTrial: n,
            trialDiscount: b,
            subscriptionDiscount: A,
            entitlementDiscount: y,
        };
    },
    P = (e, t) => {
        let n = (0, c.Z)(e.invoiceItems);
        return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id), coalescedInvoiceItems: n };
    },
    b = (e) => {
        let t = (0, c.Z)(e.invoiceItems),
            n = t.find((e) => !(0, u.z4)(e.subscriptionPlanId) && e.amount >= 0),
            i = t.find((e) => (0, u.z4)(e.subscriptionPlanId) && e.amount >= 0);
        return { coalescedInvoiceItems: t, basePlanInvoiceItem: n, guildSubscriptionInvoiceItem: i };
    },
    y = (e, t, n) => {
        let { currency: i, isPrepaidPaymentSource: r } = n,
            l = null != t ? t.amount : 0,
            s = (0, o.$g)(l, i),
            a = null != e ? (0, o.CE)(s, e.interval, e.intervalCount) : 0;
        return {
            guildSubscriptionAmount: l,
            formattedGuildBoostPrice: s,
            formattedGuildBoostRate: a,
            guildBoostItemLabel:
                null != t && null != e
                    ? C.intl.formatToPlainString(C.t.a3cAOg, {
                          numGuildSubscriptions: t.quantity,
                          planName: (0, u.Mn)(e.id, !1, r),
                      })
                    : null,
        };
    },
    S = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: i, ...r } = b(e),
            s = (0, l.bG)([a.A], () => (null != i ? a.A.get(i.subscriptionPlanId) : null)),
            u = y(s, i, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...r, guildSubscriptionInvoiceItem: i, guildSubscriptionPlan: s, ...u };
    },
    M = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: i, ...r } = b(e),
            l = null != i ? a.A.get(i.subscriptionPlanId) : null,
            s = y(l, i, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...r, guildSubscriptionInvoiceItem: i, guildSubscriptionPlan: l, ...s };
    },
    T = (e, t) => {
        let n,
            { subscriptionPlanInvoiceItem: i, coalescedInvoiceItems: l } = P(e, t);
        r()(null != i, "Expected newPlanInvoiceItem");
        let a = l.find((e) => !(0, u.z4)(e.subscriptionPlanId) && e.amount < 0),
            c = l.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === s.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            p = I(i, s.iS.PREMIUM_TRIAL),
            h =
                ((n = s.iS.SUBSCRIPTION_PLAN),
                i.subscriptionPlanPrice - (i.discounts?.find((e) => e.type === n)?.amount ?? 0)),
            m = i.quantity * h,
            E = i.amount + (null != a ? a.amount : 0) - m + (null != c ? c.amount : 0),
            f = l.filter(
                (e) =>
                    e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD,
            ),
            _ = f.reduce((e, t) => e + t.amount, 0),
            A = [];
        return (
            0 === E ||
                p ||
                A.push({
                    id: "base-plan-adjustment",
                    label: C.intl.formatToPlainString(C.t.ZSVged, {
                        planName: (0, u.ys)(t.id) ? (0, u.RH)(t.id) : t.name,
                    }),
                    tooltipText: C.intl.string(C.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, o.$g)(E, e.currency),
                    amount: E,
                    lineItemType: "adjustment",
                }),
            0 !== _ &&
                A.push({
                    id: "guild-subscription-adjustment",
                    label: C.intl.string(C.t["+as5ZZ"]),
                    tooltipText: C.intl.format(C.t.UDop9c, {}),
                    tooltipAriaLabel: C.intl.string(C.t.P68ePO),
                    value: (0, o.$g)(_, e.currency),
                    amount: _,
                    lineItemType: "adjustment",
                }),
            {
                newPlanInvoiceItem: i,
                basePlanFullAmount: m,
                basePlanAdjustment: E,
                guildSubscriptionAdjustment: _,
                isTrialItem: p,
                invoiceAdjustmentDisplayItems: A,
                guildSubscriptionInvoiceItems: f,
                promotionItem: c,
                basePlanCreditItem: a,
            }
        );
    };
