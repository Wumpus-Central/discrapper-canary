n.d(t, {
    Ol: () => I,
    Q8: () => b,
    Sb: () => S,
    Tp: () => A,
    qi: () => T,
}),
    n(638769),
    n(65821),
    n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    o = n(97352),
    s = n(927578),
    l = n(580630),
    c = n(874638),
    u = n(788868),
    d = n(88001),
    f = n(519412),
    p = n(985018);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e) {
    let t = e.slice();
    return (
        t.sort((e, t) => {
            let n = (0, s.xq)(e.subscriptionPlanId),
                r = (0, s.xq)(t.subscriptionPlanId);
            return n && !r ? -1 : !n && r ? 1 : 0;
        }),
        t
    );
}

function y(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: t } = e;
        return t !== u.gD.NONE_MONTH && t !== u.gD.NONE_YEAR;
    });
}
let b = (e, t) => {
        let n = null != t ? (0, s.Ge)(t) : null,
            { intervalType: r, intervalCount: i } = (0, s.Ge)(e),
            a = null != n && (n.intervalType !== r || n.intervalCount !== i);
        return y(E((0, c.Z)(e.invoiceItems))).map((e) =>
            g(h({}, e), {
                showGuildSubscriptionAdjustmentTooltip:
                    a &&
                    (e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD ||
                        e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD ||
                        e.subscriptionPlanId === u.gD.PREMIUM_3_MONTH_GUILD ||
                        e.subscriptionPlanId === u.gD.PREMIUM_6_MONTH_GUILD),
            }),
        );
    },
    O = (e, t) => {
        var n;
        return (null != (n = e.discounts) ? n : []).some((e) => e.type === t);
    },
    v = (e, t) => {
        var n, r, i;
        return (
            e.subscriptionPlanPrice -
            (null != (n = null == (i = e.discounts) || null == (r = i.find((e) => e.type === t)) ? void 0 : r.amount)
                ? n
                : 0)
        );
    };

function A(e, t, n, r) {
    let i = O(e, a.iS.PREMIUM_TRIAL);
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
            return (0, s.Mn)(e.subscriptionPlanId, i, n, r);
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
let I = (e, t) => {
        var n;
        let {
                premiumTrialOffer: r,
                subscriptionPlan: c,
                overrideAmount: u,
                isPrepaidPaymentSource: d,
                currency: f,
            } = t,
            p = null != c ? c : o.A.get(e.subscriptionPlanId),
            _ = null == r ? void 0 : r.subscription_trial;
        i()(null != p, "Missing subscriptionPlan");
        let h = A(
                e,
                p,
                d,
                (0, s.re)({
                    intervalType: null == _ ? void 0 : _.interval,
                    intervalCount: null == _ ? void 0 : _.interval_count,
                }),
            ),
            m = null != u ? u : e.amount,
            g = (0, l.$g)(m, f),
            E = d ? g : (0, l.CE)(g, p.interval, p.intervalCount),
            y = null != (n = e.discounts) ? n : [],
            b = y.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN),
            O = y.find((e) => e.type === a.iS.PREMIUM_TRIAL),
            v = y.find((e) => e.type === a.iS.ENTITLEMENT),
            I = y.reduce((e, t) => e + t.amount, 0);
        return {
            label: h,
            value: E,
            amount: m,
            amountWithoutDiscount: e.amount + I,
            discountAmountOff: I,
            formattedPrice: g,
            subscriptionPlan: p,
            subscriptionTrial: _,
            trialDiscount: O,
            subscriptionDiscount: b,
            entitlementDiscount: v,
        };
    },
    S = (e, t) => {
        let n = (0, c.Z)(e.invoiceItems);
        return {
            subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t.id),
            coalescedInvoiceItems: n,
        };
    },
    T = (e, t) => {
        let { subscriptionPlanInvoiceItem: n, coalescedInvoiceItems: r } = S(e, t);
        i()(null != n, "Expected newPlanInvoiceItem");
        let o = r.find((e) => !(0, s.z4)(e.subscriptionPlanId) && e.amount < 0),
            c = r.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            d = O(n, a.iS.PREMIUM_TRIAL),
            f = v(n, a.iS.SUBSCRIPTION_PLAN),
            _ = n.quantity * f,
            h = n.amount + (null != o ? o.amount : 0) - _ + (null != c ? c.amount : 0),
            m = r.filter(
                (e) =>
                    e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD,
            ),
            g = m.reduce((e, t) => e + t.amount, 0),
            E = [];
        return (
            0 === h ||
                d ||
                E.push({
                    id: "base-plan-adjustment",
                    label: p.intl.formatToPlainString(p.t.ZSVged, {
                        planName: (0, s.ys)(t.id) ? (0, s.RH)(t.id) : t.name,
                    }),
                    tooltipText: p.intl.string(p.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, l.$g)(h, e.currency),
                    amount: h,
                }),
            0 !== g &&
                E.push({
                    id: "guild-subscription-adjustment",
                    label: p.intl.string(p.t["+as5ZZ"]),
                    tooltipText: p.intl.format(p.t.UDop9c, {}),
                    tooltipAriaLabel: p.intl.string(p.t.P68ePO),
                    value: (0, l.$g)(g, e.currency),
                    amount: g,
                }),
            {
                newPlanInvoiceItem: n,
                basePlanFullAmount: _,
                basePlanAdjustment: h,
                guildSubscriptionAdjustment: g,
                isTrialItem: d,
                invoiceAdjustmentDisplayItems: E,
                guildSubscriptionInvoiceItems: m,
                promotionItem: c,
                basePlanCreditItem: o,
            }
        );
    };
