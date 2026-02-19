"use strict";
n.d(t, { BZ: () => C, Gj: () => N, Rs: () => b, fk: () => y, iQ: () => S }), n(321073);
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(854354),
    o = n(93159),
    l = n(692440),
    u = n(815545),
    c = n(958720),
    d = n(299301),
    _ = n(97352),
    f = n(927578),
    p = n(580630),
    h = n(788868),
    m = n(88001),
    E = n(985018),
    g = n(756366),
    A = n(519412);
let I = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount }),
    T = (e) => {
        let { interval: t } = e,
            n = (0, f.m6)(e.id);
        switch (t) {
            case h.WT.MONTH:
                let r = E.intl.string(g.default.ZnoRKt);
                return n === h.PremiumTypes.TIER_0
                    ? E.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: r })
                    : E.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: r });
            case h.WT.YEAR:
                let i = E.intl.string(g.default.Xrg8aC);
                return n === h.PremiumTypes.TIER_0
                    ? E.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: i })
                    : E.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: i });
            case h.WT.DAY:
                let s = E.intl.string(g.default.WmjxYl);
                return n === h.PremiumTypes.TIER_0
                    ? E.intl.formatToPlainString(g.default.Z9mu9q, { timeInterval: s })
                    : E.intl.formatToPlainString(g.default["8Jt4Dw"], { timeInterval: s });
        }
    },
    S = (e, t) => {
        let {
                isPrepaidPaymentSource: n,
                invoiceSummaryTypeWithPreview: r,
                subscriptionPlan: i,
                subscriptionTrial: s,
            } = t,
            { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, u.Zw)(e, i),
            c = d.IJ.has(r.type) ? o : void 0,
            {
                label: _,
                amount: f,
                amountWithoutDiscount: p,
                subscriptionDiscount: h,
                entitlementDiscount: m,
                trialDiscount: A,
            } = (0, u.Ae)(a, {
                overrideAmount: c,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: n,
                currency: e.currency,
            }),
            T = null != h || null != m || null != A,
            S = { id: a.id, label: _, amount: T ? p : f },
            y = [
                S,
                ...l.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                })),
            ];
        return (
            null != A
                ? y.push(I(A, "trial-discount", E.intl.string(g.default["7LeLN4"])))
                : (null != h && y.push(I(h, "subscription-discount", E.intl.string(g.default["9yHcmL"]))),
                  null != m && y.push(I(m, "entitlement-discount", E.intl.string(E.t.A7Hpfs)))),
            { lineItems: y, primaryLineItem: S }
        );
    },
    y = (e, t) => {
        let { isCustomGift: n, isPrepaidPaymentSource: r, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, l.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    v = (e, t) => {
        if (1 === t)
            switch (e) {
                case h.WT.MONTH:
                    return E.intl.string(g.default.ajn5LL);
                case h.WT.YEAR:
                    return E.intl.string(g.default.FNijW7);
            }
        return E.intl.string(g.default.jxUJkZ);
    },
    N = (e, t, n) => {
        let r = (0, u.Q8)(t, e),
            { intervalType: i, intervalCount: s } = (0, f.Ge)(t),
            a = t.currency;
        return {
            lineItems: r.map((e) => {
                let { subscriptionPlanPrice: t, showGuildSubscriptionAdjustmentTooltip: r } = e,
                    { label: i } = (0, u.Ae)(e, { subscriptionTrial: n, currency: a }),
                    s = r ? E.intl.format(E.t.UDop9c, {}) : void 0;
                return { id: e.id, label: i, amount: t, tooltip: s };
            }),
            intervalType: i,
            intervalCount: s,
            currency: a,
            label: E.intl.format(g.default["57B1ks"], {
                renewalDate: null != e ? e.subscriptionPeriodEnd : t.subscriptionPeriodStart,
            }),
            totalLineItemLabel: v(i, s),
        };
    },
    C = (e, t, n) => {
        let { isPrepaidPaymentSource: i, giftRecipient: s, isPremiumGroupPurchase: l } = n,
            c = e.type === d.N$.PREMIUM_GIFT,
            { invoicePreview: _ } = e,
            { subscriptionPlanInvoiceItem: I } = (0, u.Sb)(_, t),
            S = "";
        S = l
            ? null != I
                ? (0, u.Tp)(I, t)
                : E.intl.formatToPlainString(A.default["8bPDtb"], { premiumGroupProductName: (0, m.DP)() })
            : c
              ? T(t)
              : (0, f.Mn)(t.id, !1, i);
        let y = c && null != s ? (0, a.xk)(s) : void 0,
            v = null == s ? E.intl.string(g.default.AM9XGb) : "",
            N = c ? v : E.intl.string(g.default["2zUa6I"]),
            C = (0, f.m6)(t.id) === h.PremiumTypes.TIER_0 ? (0, r.jsx)(o.DH, {}) : (0, r.jsx)(o.JW, {}),
            b = (c ? I?.amount : I?.subscriptionPlanPrice) ?? 0,
            R = (0, p.$g)(b, _.currency);
        return {
            label: S,
            description: N,
            price: e.type === d.N$.PREMIUM_GIFT ? R : (0, p.CE)(R, t.interval, t.intervalCount),
            gift: y,
            graphic: C,
        };
    },
    b = (e, t) => {
        let n,
            {
                planId: r,
                disabled: i,
                userLocale: o,
                discountOffer: l,
                priceOptions: u,
                shouldUseCalculatedDiscount: d,
                isCurrentPlan: h,
                isGift: m,
                isEligibleForTrial: g,
                isEligibleForBOGOPromotion: A,
                showSecondarySubTexts: I,
                isInPlanSelectStep: T,
            } = t,
            S = _.A.get(r);
        s()(null != S, "Missing subscriptionPlan");
        let y = (0, f.L_)({
                planId: r,
                shouldUseCalculatedDiscount: d,
                isGift: m,
                priceOptions: u,
                subscriptionPlan: S,
            }),
            v = null != y,
            N = (0, f.y8)(r, !1, m, u),
            C = (0, a.Nc)({ subscriptionPlan: S, userLocale: o, discountOffer: l, yearlyPercentSavings: y }),
            b = (0, c.gS)(e, S, {
                userLocale: o,
                isEligibleForBOGOPromotion: A,
                shouldShowDiscount: v,
                isGift: m,
                planId: r,
                savingsPercent: y,
            });
        I && (T && g ? (n = (0, c.O7)(S, N)) : h ? (n = E.intl.string(E.t.ymSxhy)) : "string" == typeof b && (n = b));
        let R = C;
        return (
            null != b && "object" == typeof b && (R = b.text),
            {
                id: r,
                planName: (0, a.YR)(S.interval, S.intervalCount, !0),
                priceText: (0, p.$g)(N.amount, N.currency),
                secondarySubText: n,
                promoText: R,
                isDisabled: i,
                savingsPercent: y,
            }
        );
    };
