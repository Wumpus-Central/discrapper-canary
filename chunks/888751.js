"use strict";
n.d(t, { BZ: () => O, Gj: () => R, IY: () => N, Ig: () => v, MT: () => I, Rs: () => D, fk: () => C }), n(321073);
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
let I = (e) => E.intl.format(g.default.U2CmMW, { priceAmount: (0, p.$g)(0, e) }),
    T = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount }),
    S = (e) => {
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
    y = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: r,
                invoiceAdjustmentDisplayItems: i,
                currency: s,
                subscriptionPlan: a,
                subscriptionTrial: o,
            } = t,
            {
                label: l,
                amount: c,
                amountWithoutDiscount: d,
                subscriptionDiscount: _,
                entitlementDiscount: f,
            } = (0, u.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: a,
                subscriptionTrial: o,
                isPrepaidPaymentSource: r,
                currency: s,
            }),
            p = null != _ || null != f,
            h = { id: e.id, label: l, amount: p ? d : c },
            m = [
                h,
                ...i.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                })),
            ];
        return (
            null != _ && m.push(T(_, "subscription-discount", E.intl.string(g.default["9yHcmL"]))),
            { lineItems: m, primaryLineItem: h, entitlementDiscount: f }
        );
    },
    v = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: r,
                isPrepaidPaymentSource: i = !1,
                includeTaxLineItem: s = !0,
            } = t,
            {
                basePlanInvoiceItem: a,
                guildSubscriptionInvoiceItem: o,
                guildSubscriptionPlan: l,
                guildSubscriptionAmount: c,
                guildBoostItemLabel: d,
            } = (0, u.wt)(e, { isPrepaidPaymentSource: i });
        if (null == a) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: _,
            primaryLineItem: f,
            entitlementDiscount: p,
        } = y(a, {
            subscriptionPlan: r,
            subscriptionTrial: n,
            isPrepaidPaymentSource: i,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
        });
        return (
            0 !== c && null != o && null != l && null != d && _.push({ id: o.id, label: d, amount: c }),
            s && _.push({ id: "tax", label: E.intl.string(E.t.jiRvC7), amount: e.tax }),
            { lineItems: _, primaryLineItem: f, entitlementDiscount: p }
        );
    },
    N = (e, t) => {
        let {
                isPrepaidPaymentSource: n = !1,
                invoiceSummaryTypeWithPreview: r,
                subscriptionPlan: i,
                subscriptionTrial: s,
            } = t,
            { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, u.SA)(e, i),
            {
                lineItems: c,
                primaryLineItem: _,
                entitlementDiscount: f,
            } = y(a, {
                overrideAmount: d.IJ.has(r.type) ? o : void 0,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: l,
            });
        return { lineItems: c, primaryLineItem: _, entitlementDiscount: f };
    },
    C = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, l.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    b = (e, t) => {
        if (1 === t)
            switch (e) {
                case h.WT.MONTH:
                    return E.intl.string(g.default.ajn5LL);
                case h.WT.YEAR:
                    return E.intl.string(g.default.FNijW7);
            }
        return E.intl.string(g.default.jxUJkZ);
    },
    R = function (e, t, n) {
        let { includeTaxLineItem: r, overrideRenewalDate: i } =
                arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : { includeTaxLineItem: !0, overrideRenewalDate: void 0 },
            s = (0, u.Q8)(t, e),
            { intervalType: a, intervalCount: o } = (0, f.Ge)(t),
            l = t.currency,
            c = s.map((e) => {
                let { amount: t, showGuildSubscriptionAdjustmentTooltip: r } = e,
                    { label: i } = (0, u.Ae)(e, { subscriptionTrial: n, currency: l }),
                    s = r ? E.intl.format(E.t.UDop9c, {}) : void 0;
                return { id: e.id, label: i, amount: t, tooltip: s };
            }),
            d = t.tax;
        d > 0 && r && c.push({ id: "tax", label: E.intl.string(E.t.jiRvC7), amount: d, formatWithoutRate: !0 });
        let _ = i;
        return (
            null == _ && (_ = null != e ? e.subscriptionPeriodEnd : t.subscriptionPeriodStart),
            {
                lineItems: c,
                intervalType: a,
                intervalCount: o,
                currency: l,
                label: E.intl.format(g.default["57B1ks"], { renewalDate: _ }),
                totalLineItemLabel: b(a, o),
            }
        );
    },
    O = (e, t, n) => {
        let { type: i, invoicePreview: s } = e,
            { isPrepaidPaymentSource: l, giftRecipient: _, isPremiumGroupPurchase: I } = n,
            T = i === d.N$.PREMIUM_GIFT,
            y = i === d.N$.PREMIUM_WITH_TRIAL,
            { subscriptionPlanInvoiceItem: v } = (0, u.Sb)(s, t),
            N = "";
        N = I
            ? null != v
                ? (0, u.Tp)(v, t)
                : E.intl.formatToPlainString(A.default["8bPDtb"], { premiumGroupProductName: (0, m.DP)() })
            : T
              ? S(t)
              : (0, f.Mn)(t.id, !1, l);
        let C = T && null != _ ? (0, a.xk)(_) : void 0,
            b = null == _ ? E.intl.string(g.default.AM9XGb) : "",
            R = T ? b : E.intl.string(g.default["2zUa6I"]),
            O = (0, f.m6)(t.id) === h.PremiumTypes.TIER_0 ? (0, r.jsx)(o.DH, {}) : (0, r.jsx)(o.JW, {}),
            D = (T ? v?.amount : v?.subscriptionPlanPrice) ?? 0,
            L = (0, p.$g)(D, s.currency),
            w = (0, p.CE)(L, t.interval, t.intervalCount),
            x = y ? (0, c.O7)(t, { amount: D, currency: s.currency }) : null;
        return {
            label: N,
            description: R,
            price: i === d.N$.PREMIUM_GIFT ? L : w,
            priceSubText: x,
            priceSubTextHasStrikethrough: !y,
            gift: C,
            graphic: O,
        };
    },
    D = (e, t) => {
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
