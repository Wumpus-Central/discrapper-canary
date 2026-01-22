n.d(t, {
    Ol: () => y,
    Q8: () => m,
    qi: () => O,
}),
    n(638769),
    n(65821),
    n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    s = n(97352),
    o = n(927578),
    l = n(580630),
    c = n(874638),
    u = n(788868),
    d = n(88001),
    f = n(519412),
    p = n(985018);

function _(e) {
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
        return t !== u.gD.NONE_MONTH && t !== u.gD.NONE_YEAR;
    });
}
let m = (e) => h(_((0, c.Z)(e.invoiceItems))),
    g = (e, t) => {
        var n;
        return (null != (n = e.discounts) ? n : []).some((e) => e.type === t);
    },
    E = (e, t) => {
        var n, r, i;
        return (
            e.subscriptionPlanPrice -
            (null != (n = null == (i = e.discounts) || null == (r = i.find((e) => e.type === t)) ? void 0 : r.amount)
                ? n
                : 0)
        );
    };

function b(e, t, n, r) {
    let i = g(e, a.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case u.gD.PREMIUM_GROUP_MONTH:
            return p.intl.formatToPlainString(f.default["8bPDtb"], {
                premiumGroupProductName: (0, d.DP)(),
            });
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
            return (0, o.Mn)(e.subscriptionPlanId, i, n, r);
        case u.gD.PREMIUM_3_MONTH_GUILD:
        case u.gD.PREMIUM_6_MONTH_GUILD:
            return p.intl.format(p.t.YAIIWp, {
                num: e.quantity,
                intervalCount: t.intervalCount,
            });
        case u.gD.PREMIUM_MONTH_GUILD:
            return p.intl.format(p.t["3BYyip"], {
                num: e.quantity,
            });
        case u.gD.PREMIUM_YEAR_GUILD:
            return p.intl.format(p.t.JVW4UN, {
                num: e.quantity,
            });
    }
    switch (t.interval) {
        case u.WT.MONTH:
            if (1 === t.intervalCount)
                return p.intl.formatToPlainString(p.t["6oq128"], {
                    planName: t.name,
                });
            return p.intl.formatToPlainString(p.t["9ydggS"], {
                planName: t.name,
                intervalCount: t.intervalCount,
            });
        case u.WT.YEAR:
            return p.intl.formatToPlainString(p.t.V6UFQM, {
                planName: t.name,
            });
    }
    throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId));
}
let y = (e, t) => {
        var n;
        let {
                premiumTrialOffer: r,
                subscriptionPlan: c,
                overrideAmount: u,
                isPrepaidPaymentSource: d,
                currency: f,
            } = t,
            p = null != c ? c : s.A.get(e.subscriptionPlanId),
            _ = null == r ? void 0 : r.subscription_trial;
        i()(null != p, "Missing subscriptionPlan");
        let h = b(
                e,
                p,
                d,
                (0, o.re)({
                    intervalType: null == _ ? void 0 : _.interval,
                    intervalCount: null == _ ? void 0 : _.interval_count,
                }),
            ),
            m = null != u ? u : e.amount,
            g = (0, l.$g)(m, f),
            E = d ? g : (0, l.CE)(g, p.interval, p.intervalCount),
            y = null != (n = e.discounts) ? n : [],
            O = y.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN),
            A = y.find((e) => e.type === a.iS.PREMIUM_TRIAL),
            v = y.find((e) => e.type === a.iS.ENTITLEMENT),
            S = y.reduce((e, t) => e + t.amount, 0);
        return {
            label: h,
            value: E,
            amount: m,
            amountWithoutDiscount: e.amount + S,
            discountAmountOff: S,
            formattedPrice: g,
            subscriptionPlan: p,
            subscriptionTrial: _,
            trialDiscount: A,
            subscriptionDiscount: O,
            entitlementDiscount: v,
        };
    },
    O = (e, t) => {
        let n = (0, c.Z)(e.invoiceItems),
            r = n.find((e) => e.subscriptionPlanId === t.id);
        i()(null != r, "Expected newPlanInvoiceItem");
        let s = n.find((e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount < 0),
            d = n.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            f = g(r, a.iS.PREMIUM_TRIAL),
            _ = E(r, a.iS.SUBSCRIPTION_PLAN),
            h = r.quantity * _,
            m = r.amount + (null != s ? s.amount : 0) - h + (null != d ? d.amount : 0),
            b = n.filter(
                (e) =>
                    e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD,
            ),
            y = b.reduce((e, t) => e + t.amount, 0),
            O = [];
        return (
            0 === m ||
                f ||
                O.push({
                    id: "base-plan-adjustment",
                    label: p.intl.formatToPlainString(p.t.ZSVged, {
                        planName: (0, o.ys)(t.id) ? (0, o.RH)(t.id) : t.name,
                    }),
                    tooltipText: p.intl.string(p.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, l.$g)(m, e.currency),
                    amount: m,
                }),
            0 !== y &&
                O.push({
                    id: "guild-subscription-adjustment",
                    label: p.intl.string(p.t["+as5ZZ"]),
                    tooltipText: p.intl.format(p.t.UDop9c, {}),
                    tooltipAriaLabel: p.intl.string(p.t.P68ePO),
                    value: (0, l.$g)(y, e.currency),
                    amount: y,
                }),
            {
                newPlanInvoiceItem: r,
                basePlanFullAmount: h,
                basePlanAdjustment: m,
                guildSubscriptionAdjustment: y,
                isTrialItem: f,
                invoiceAdjustmentDisplayItems: O,
                guildSubscriptionInvoiceItems: b,
                promotionItem: d,
                basePlanCreditItem: s,
            }
        );
    };
