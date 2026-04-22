n.d(t, {
    Ae: () => h,
    NL: () => v,
    Q8: () => f,
    Ro: () => x,
    SA: () => C,
    Sb: () => I,
    Tp: () => b,
    rc: () => T,
    wt: () => E,
}),
    n(321073);
var a = n(284009),
    r = n.n(a),
    l = n(311907),
    i = n(155718),
    s = n(97352),
    o = n(927578),
    u = n(580630),
    c = n(874638),
    d = n(788868),
    m = n(88001),
    p = n(466919),
    _ = n(985018);
let f = function (e, t) {
        let n,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
            r = null != t ? (0, c.Z)(t.invoiceItems) : null,
            l = null != t ? (0, o.Ge)(t) : null,
            { intervalType: i, intervalCount: s } = (0, o.Ge)(e),
            u = null != l && (l.intervalType !== i || l.intervalCount !== s);
        return ((n = (0, c.Z)(e.invoiceItems).slice()).sort((e, t) => {
            let n = (0, o.xq)(e.subscriptionPlanId),
                a = (0, o.xq)(t.subscriptionPlanId);
            return n && !a ? -1 : !n && a ? 1 : 0;
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
                    n = !a.isSubscriptionUpdate || t;
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
    g = (e, t) => (e.discounts ?? []).some((e) => e.type === t);
function b(e, t, n, a) {
    let r = g(e, i.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case d.gD.PREMIUM_GROUP_MONTH:
            return _.intl.formatToPlainString(p.default["8bPDtb"], { premiumGroupProductName: (0, m.DP)() });
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
            return (0, o.Mn)(e.subscriptionPlanId, r, n, a);
        case d.gD.PREMIUM_3_MONTH_GUILD:
        case d.gD.PREMIUM_6_MONTH_GUILD:
            return _.intl.format(_.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case d.gD.PREMIUM_MONTH_GUILD:
            return _.intl.format(_.t["3BYyip"], { num: e.quantity });
        case d.gD.PREMIUM_YEAR_GUILD:
            return _.intl.format(_.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case d.WT.MONTH:
            if (1 === t.intervalCount) return _.intl.formatToPlainString(_.t["6oq128"], { planName: t.name });
            return _.intl.formatToPlainString(_.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case d.WT.YEAR:
            return _.intl.formatToPlainString(_.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
let v = (e) => {
        if (null != e.discounts) return e.discounts.find((e) => e.type === i.iS.SUBSCRIPTION_PLAN);
    },
    x = (e, t) => e.invoiceItems.some((e) => (e.discounts ?? []).some((e) => e.discount_id === t)),
    h = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: a,
                overrideAmount: l,
                isPrepaidPaymentSource: c,
                currency: d,
            } = t,
            m = a ?? s.A.get(e.subscriptionPlanId);
        r()(null != m, "Missing subscriptionPlan");
        let p = ((e) => {
                if (null != e) return "interval_count" in e ? e.interval_count : e.intervalCount;
            })(n),
            _ = b(e, m, c, (0, o.re)({ intervalType: n?.interval, intervalCount: p })),
            f = null != l ? l : e.amount,
            g = (0, u.$g)(f, d),
            x = c ? g : (0, u.CE)(g, m.interval, m.intervalCount),
            h = v(e),
            I = e.discounts ?? [],
            A = I.find((e) => e.type === i.iS.PREMIUM_TRIAL),
            y = I.find((e) => e.type === i.iS.ENTITLEMENT),
            T = I.reduce((e, t) => e + t.amount, 0);
        return {
            label: _,
            value: x,
            originalAmount: e.subscriptionPlanPrice * e.quantity,
            amount: f,
            amountWithoutDiscount: e.amount + T,
            discountAmountOff: T,
            formattedPrice: g,
            subscriptionPlan: m,
            subscriptionTrial: n,
            trialDiscount: A,
            subscriptionDiscount: h,
            entitlementDiscount: y,
        };
    },
    I = (e, t) => {
        let n = (0, c.Z)(e.invoiceItems);
        return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id), coalescedInvoiceItems: n };
    },
    A = (e) => {
        let t = (0, c.Z)(e.invoiceItems),
            n = t.find((e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount >= 0),
            a = t.find((e) => (0, o.z4)(e.subscriptionPlanId) && e.amount >= 0);
        return { coalescedInvoiceItems: t, basePlanInvoiceItem: n, guildSubscriptionInvoiceItem: a };
    },
    y = (e, t, n) => {
        let { currency: a, isPrepaidPaymentSource: r } = n,
            l = null != t ? t.amount : 0,
            i = (0, u.$g)(l, a),
            s = null != e ? (0, u.CE)(i, e.interval, e.intervalCount) : 0;
        return {
            guildSubscriptionAmount: l,
            formattedGuildBoostPrice: i,
            formattedGuildBoostRate: s,
            guildBoostItemLabel:
                null != t && null != e
                    ? _.intl.formatToPlainString(_.t.a3cAOg, {
                          numGuildSubscriptions: t.quantity,
                          planName: (0, o.Mn)(e.id, !1, r),
                      })
                    : null,
        };
    },
    T = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: a, ...r } = A(e),
            i = (0, l.bG)([s.A], () => (null != a ? s.A.get(a.subscriptionPlanId) : null)),
            o = y(i, a, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...r, guildSubscriptionInvoiceItem: a, guildSubscriptionPlan: i, ...o };
    },
    E = (e, t) => {
        let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: a, ...r } = A(e),
            l = null != a ? s.A.get(a.subscriptionPlanId) : null,
            i = y(l, a, { currency: e.currency, isPrepaidPaymentSource: n });
        return { ...r, guildSubscriptionInvoiceItem: a, guildSubscriptionPlan: l, ...i };
    },
    C = (e, t) => {
        let n,
            { subscriptionPlanInvoiceItem: a, coalescedInvoiceItems: l } = I(e, t);
        r()(null != a, "Expected newPlanInvoiceItem");
        let s = l.find((e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount < 0),
            c = l.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === i.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            m = g(a, i.iS.PREMIUM_TRIAL),
            p =
                ((n = i.iS.SUBSCRIPTION_PLAN),
                a.subscriptionPlanPrice - (a.discounts?.find((e) => e.type === n)?.amount ?? 0)),
            f = a.quantity * p,
            b = a.amount + (null != s ? s.amount : 0) - f + (null != c ? c.amount : 0),
            v = l.filter(
                (e) =>
                    e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD,
            ),
            x = v.reduce((e, t) => e + t.amount, 0),
            h = [];
        return (
            0 === b ||
                m ||
                h.push({
                    id: "base-plan-adjustment",
                    label: _.intl.formatToPlainString(_.t.ZSVged, {
                        planName: (0, o.ys)(t.id) ? (0, o.RH)(t.id) : t.name,
                    }),
                    tooltipText: _.intl.string(_.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, u.$g)(b, e.currency),
                    amount: b,
                    lineItemType: "adjustment",
                }),
            0 !== x &&
                h.push({
                    id: "guild-subscription-adjustment",
                    label: _.intl.string(_.t["+as5ZZ"]),
                    tooltipText: _.intl.format(_.t.UDop9c, {}),
                    tooltipAriaLabel: _.intl.string(_.t.P68ePO),
                    value: (0, u.$g)(x, e.currency),
                    amount: x,
                    lineItemType: "adjustment",
                }),
            {
                newPlanInvoiceItem: a,
                basePlanFullAmount: f,
                basePlanAdjustment: b,
                guildSubscriptionAdjustment: x,
                isTrialItem: m,
                invoiceAdjustmentDisplayItems: h,
                guildSubscriptionInvoiceItems: v,
                promotionItem: c,
                basePlanCreditItem: s,
            }
        );
    };
