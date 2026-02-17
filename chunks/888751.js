"use strict";
n.d(t, { BZ: () => S, Gj: () => y, fk: () => I, iQ: () => A }), n(321073);
var r = n(627968);
n(64700);
var i = n(854354),
    a = n(93159),
    s = n(692440),
    o = n(815545),
    l = n(299301),
    u = n(927578),
    c = n(580630),
    d = n(788868),
    _ = n(88001),
    f = n(985018),
    h = n(756366),
    p = n(519412);
let g = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount }),
    E = (e) => {
        let { interval: t } = e,
            n = (0, u.m6)(e.id);
        switch (t) {
            case d.WT.MONTH:
                let r = f.intl.string(h.default.ZnoRKt);
                return n === d.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(h.default.Z9mu9q, { timeInterval: r })
                    : f.intl.formatToPlainString(h.default["8Jt4Dw"], { timeInterval: r });
            case d.WT.YEAR:
                let i = f.intl.string(h.default.Xrg8aC);
                return n === d.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(h.default.Z9mu9q, { timeInterval: i })
                    : f.intl.formatToPlainString(h.default["8Jt4Dw"], { timeInterval: i });
            case d.WT.DAY:
                let a = f.intl.string(h.default.WmjxYl);
                return n === d.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(h.default.Z9mu9q, { timeInterval: a })
                    : f.intl.formatToPlainString(h.default["8Jt4Dw"], { timeInterval: a });
        }
    },
    A = (e, t) => {
        let {
                isPrepaidPaymentSource: n,
                invoiceSummaryTypeWithPreview: r,
                subscriptionPlan: i,
                subscriptionTrial: a,
            } = t,
            { newPlanInvoiceItem: s, basePlanFullAmount: u, invoiceAdjustmentDisplayItems: c } = (0, o.qi)(e, i),
            d = l.IJ.has(r.type) ? u : void 0,
            {
                label: _,
                amount: p,
                amountWithoutDiscount: E,
                subscriptionDiscount: A,
                entitlementDiscount: I,
                trialDiscount: T,
            } = (0, o.Ol)(s, {
                overrideAmount: d,
                subscriptionPlan: i,
                subscriptionTrial: a,
                isPrepaidPaymentSource: n,
                currency: e.currency,
            }),
            y = null != A || null != I || null != T,
            S = { id: s.id, label: _, amount: y ? E : p },
            v = [
                S,
                ...c.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                })),
            ];
        return (
            null != T
                ? v.push(g(T, "trial-discount", f.intl.string(h.default["7LeLN4"])))
                : (null != A && v.push(g(A, "subscription-discount", f.intl.string(h.default["9yHcmL"]))),
                  null != I && v.push(g(I, "entitlement-discount", f.intl.string(f.t.A7Hpfs)))),
            { lineItems: v, primaryLineItem: S }
        );
    },
    I = (e, t) => {
        let { isCustomGift: n, isPrepaidPaymentSource: r, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, s.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    T = (e, t) => {
        if (1 === t)
            switch (e) {
                case d.WT.MONTH:
                    return f.intl.string(h.default.ajn5LL);
                case d.WT.YEAR:
                    return f.intl.string(h.default.FNijW7);
            }
        return f.intl.string(h.default.jxUJkZ);
    },
    y = (e, t, n) => {
        let r = (0, o.Q8)(t, e),
            { intervalType: i, intervalCount: a } = (0, u.Ge)(t),
            s = t.currency;
        return {
            lineItems: r.map((e) => {
                let { subscriptionPlanPrice: t, showGuildSubscriptionAdjustmentTooltip: r } = e,
                    { label: i } = (0, o.Ol)(e, { subscriptionTrial: n, currency: s }),
                    a = r ? f.intl.format(f.t.UDop9c, {}) : void 0;
                return { id: e.id, label: i, amount: t, tooltip: a };
            }),
            intervalType: i,
            intervalCount: a,
            currency: s,
            label: f.intl.format(h.default["57B1ks"], {
                renewalDate: null != e ? e.subscriptionPeriodEnd : t.subscriptionPeriodStart,
            }),
            totalLineItemLabel: T(i, a),
        };
    },
    S = (e, t, n) => {
        let { isPrepaidPaymentSource: s, giftRecipient: g, isPremiumGroupPurchase: A } = n,
            I = e.type === l.N$.PREMIUM_GIFT,
            { invoicePreview: T } = e,
            { subscriptionPlanInvoiceItem: y } = (0, o.Sb)(T, t),
            S = "";
        S = A
            ? null != y
                ? (0, o.Tp)(y, t)
                : f.intl.formatToPlainString(p.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() })
            : I
              ? E(t)
              : (0, u.Mn)(t.id, !1, s);
        let v = I && null != g ? (0, i.xk)(g) : void 0,
            C = null == g ? f.intl.string(h.default.AM9XGb) : "",
            b = I ? C : f.intl.string(h.default["2zUa6I"]),
            N = (0, u.m6)(t.id) === d.PremiumTypes.TIER_0 ? (0, r.jsx)(a.DH, {}) : (0, r.jsx)(a.JW, {}),
            R = (I ? y?.amount : y?.subscriptionPlanPrice) ?? 0,
            O = (0, c.$g)(R, T.currency);
        return {
            label: S,
            description: b,
            price: e.type === l.N$.PREMIUM_GIFT ? O : (0, c.CE)(O, t.interval, t.intervalCount),
            gift: v,
            graphic: N,
        };
    };
