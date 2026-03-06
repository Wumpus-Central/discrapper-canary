"use strict";
n.d(t, { BZ: () => L, EA: () => v, Gj: () => D, IY: () => R, Ig: () => C, MT: () => T, Rs: () => w, fk: () => O }),
    n(321073);
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(158954),
    o = n(854354),
    l = n(93159),
    u = n(692440),
    c = n(815545),
    d = n(958720),
    _ = n(299301),
    f = n(97352),
    p = n(927578),
    h = n(580630),
    m = n(788868),
    E = n(88001),
    g = n(985018),
    A = n(523376),
    I = n(518582);
let T = (e) => g.intl.format(A.default.U2CmMW, { priceAmount: (0, h.$g)(0, e) }),
    S = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount }),
    y = (e) => {
        let { interval: t } = e,
            n = (0, p.m6)(e.id);
        switch (t) {
            case m.WT.MONTH:
                let r = g.intl.string(A.default.ZnoRKt);
                return n === m.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(A.default.Z9mu9q, { timeInterval: r })
                    : g.intl.formatToPlainString(A.default["8Jt4Dw"], { timeInterval: r });
            case m.WT.YEAR:
                let i = g.intl.string(A.default.Xrg8aC);
                return n === m.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(A.default.Z9mu9q, { timeInterval: i })
                    : g.intl.formatToPlainString(A.default["8Jt4Dw"], { timeInterval: i });
            case m.WT.DAY:
                let s = g.intl.string(A.default.WmjxYl);
                return n === m.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(A.default.Z9mu9q, { timeInterval: s })
                    : g.intl.formatToPlainString(A.default["8Jt4Dw"], { timeInterval: s });
        }
    },
    v = (e) => {
        let { id: t, label: n, amount: r, subscriptionDiscount: i, entitlementDiscount: s, currency: a } = e,
            o = [{ id: t, label: n, amount: r }];
        return (
            null != i && o.push(S(i, "subscription-discount", g.intl.string(A.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != s, lineItems: o, currency: a }
        );
    },
    N = (e, t) => {
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
                amount: u,
                amountWithoutDiscount: d,
                subscriptionDiscount: _,
                entitlementDiscount: f,
            } = (0, c.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: a,
                subscriptionTrial: o,
                isPrepaidPaymentSource: r,
                currency: s,
            }),
            p = null != _ || null != f,
            h = { id: e.id, label: l, amount: p ? d : u },
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
            null != _ && m.push(S(_, "subscription-discount", g.intl.string(A.default["9yHcmL"]))),
            { lineItems: m, primaryLineItem: h, entitlementDiscount: f }
        );
    },
    C = (e, t) => {
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
                guildSubscriptionAmount: u,
                guildBoostItemLabel: d,
            } = (0, c.wt)(e, { isPrepaidPaymentSource: i });
        if (null == a) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: _,
            primaryLineItem: f,
            entitlementDiscount: p,
        } = N(a, {
            subscriptionPlan: r,
            subscriptionTrial: n,
            isPrepaidPaymentSource: i,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
        });
        return (
            0 !== u && null != o && null != l && null != d && _.push({ id: o.id, label: d, amount: u }),
            s && _.push({ id: "tax", label: g.intl.string(g.t.jiRvC7), amount: e.tax }),
            { lineItems: _, primaryLineItem: f, entitlementDiscount: p }
        );
    },
    R = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: r, subscriptionPlan: i, subscriptionTrial: s } = t,
            { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, c.SA)(e, i),
            {
                lineItems: u,
                primaryLineItem: d,
                entitlementDiscount: f,
            } = N(a, {
                overrideAmount: _.IJ.has(r) ? o : void 0,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: l,
            });
        return { lineItems: u, primaryLineItem: d, entitlementDiscount: f };
    },
    O = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, u.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    b = (e, t) => {
        if (1 === t)
            switch (e) {
                case m.WT.MONTH:
                    return g.intl.string(A.default.ajn5LL);
                case m.WT.YEAR:
                    return g.intl.string(A.default.FNijW7);
            }
        return g.intl.string(A.default.jxUJkZ);
    },
    D = function (e, t, n) {
        let {
                includeTaxLineItem: r,
                overrideRenewalDate: i,
                isSubscriptionUpdate: s,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : { includeTaxLineItem: !0, overrideRenewalDate: void 0, isSubscriptionUpdate: !1 },
            o = (0, c.Q8)(t, e, { isSubscriptionUpdate: s }),
            { intervalType: l, intervalCount: u } = (0, p.Ge)(t),
            d = t.currency,
            _ = o.map((e) => {
                let { amount: t, showGuildSubscriptionAdjustmentTooltip: r, isAddedSubscriptionInvoiceItem: i } = e,
                    {
                        label: s,
                        subscriptionDiscount: o,
                        originalAmount: _,
                    } = (0, c.Ae)(e, { subscriptionTrial: n, currency: d }),
                    f = r ? g.intl.format(g.t.UDop9c, {}) : void 0,
                    p = null != o,
                    m = p ? (0, h.CE)((0, h.$g)(_, d), l, u) : null,
                    E = p,
                    A = p ? a.tvc : void 0,
                    I = p || i ? "text-feedback-positive" : void 0;
                return {
                    id: e.id,
                    label: s,
                    amount: t,
                    tooltip: f,
                    subText: m,
                    subTextHasStrikethrough: E,
                    color: I,
                    valueColor: I,
                    valueIcon: A,
                };
            }),
            f = t.tax;
        f > 0 && r && _.push({ id: "tax", label: g.intl.string(g.t.jiRvC7), amount: f, formatWithoutRate: !0 });
        let m = i;
        return (
            null == m && (m = null != e ? e.subscriptionPeriodEnd : t.subscriptionPeriodStart),
            {
                lineItems: _,
                intervalType: l,
                intervalCount: u,
                currency: d,
                label: g.intl.format(A.default["57B1ks"], { renewalDate: m }),
                totalLineItemLabel: b(l, u),
            }
        );
    },
    L = (e, t, n) => {
        let { type: i, invoicePreview: s } = e,
            { isPrepaidPaymentSource: a, giftRecipient: u, isPremiumGroupPurchase: f } = n,
            T = i === _.N$.PREMIUM_GIFT,
            S = i === _.N$.PREMIUM_WITH_TRIAL,
            { subscriptionPlanInvoiceItem: v } = (0, c.Sb)(s, t),
            N = "";
        N = f
            ? null != v
                ? (0, c.Tp)(v, t)
                : g.intl.formatToPlainString(I.default["8bPDtb"], { premiumGroupProductName: (0, E.DP)() })
            : T
              ? y(t)
              : (0, p.Mn)(t.id, !1, a);
        let C = T && null != u ? (0, o.xk)(u) : void 0,
            R = null == u ? g.intl.string(A.default.AM9XGb) : "",
            O = T ? R : g.intl.string(A.default["2zUa6I"]),
            b = (0, p.m6)(t.id) === m.PremiumTypes.TIER_0 ? (0, r.jsx)(l.DH, {}) : (0, r.jsx)(l.JW, {}),
            D = (T ? v?.amount : v?.subscriptionPlanPrice) ?? 0,
            L = (0, h.$g)(D, s.currency),
            w = (0, h.CE)(L, t.interval, t.intervalCount),
            M = S ? (0, d.O7)(t, { amount: D, currency: s.currency }) : null;
        return {
            label: N,
            description: O,
            price: i === _.N$.PREMIUM_GIFT ? L : w,
            priceSubText: M,
            priceSubTextHasStrikethrough: !S,
            gift: C,
            graphic: b,
        };
    },
    w = (e, t) => {
        let n,
            {
                planId: r,
                disabled: i,
                userLocale: a,
                discountOffer: l,
                priceOptions: u,
                shouldUseCalculatedDiscount: c,
                isCurrentPlan: _,
                isGift: m,
                isEligibleForTrial: E,
                isEligibleForBOGOPromotion: A,
                showSecondarySubTexts: I,
                isInPlanSelectStep: T,
            } = t,
            S = f.A.get(r);
        s()(null != S, "Missing subscriptionPlan");
        let y = (0, p.L_)({
                planId: r,
                shouldUseCalculatedDiscount: c,
                isGift: m,
                priceOptions: u,
                subscriptionPlan: S,
            }),
            v = null != y,
            N = (0, p.y8)(r, !1, m, u),
            C = (0, o.Nc)({ subscriptionPlan: S, userLocale: a, discountOffer: l, yearlyPercentSavings: y }),
            R = (0, d.gS)(e, S, {
                userLocale: a,
                isEligibleForBOGOPromotion: A,
                shouldShowDiscount: v,
                isGift: m,
                planId: r,
                savingsPercent: y,
            });
        I && (T && E ? (n = (0, d.O7)(S, N)) : _ ? (n = g.intl.string(g.t.ymSxhy)) : "string" == typeof R && (n = R));
        let O = C;
        return (
            null != R && "object" == typeof R && (O = R.text),
            {
                id: r,
                planName: (0, o.YR)(S.interval, S.intervalCount, !0),
                priceText: (0, h.$g)(N.amount, N.currency),
                secondarySubText: n,
                promoText: O,
                isDisabled: i,
                savingsPercent: y,
            }
        );
    };
