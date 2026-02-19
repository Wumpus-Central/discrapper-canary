"use strict";
n.d(t, { BZ: () => R, Gj: () => b, IY: () => v, Ig: () => y, Rs: () => O, fk: () => N }), n(321073);
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
                trialDiscount: p,
            } = (0, u.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: a,
                subscriptionTrial: o,
                isPrepaidPaymentSource: r,
                currency: s,
            }),
            h = null != _ || null != f || null != p,
            m = { id: e.id, label: l, amount: h ? d : c },
            A = [
                m,
                ...i.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                })),
            ];
        return (
            null != p
                ? A.push(I(p, "trial-discount", E.intl.string(g.default["7LeLN4"])))
                : (null != _ && A.push(I(_, "subscription-discount", E.intl.string(g.default["9yHcmL"]))),
                  null != f && A.push(I(f, "entitlement-discount", E.intl.string(E.t.A7Hpfs)))),
            { lineItems: A, primaryLineItem: m }
        );
    },
    y = (e, t) => {
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
        let { lineItems: _, primaryLineItem: f } = S(a, {
            subscriptionPlan: r,
            subscriptionTrial: n,
            isPrepaidPaymentSource: i,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
        });
        return (
            0 !== c && null != o && null != l && null != d && _.push({ id: o.id, label: d, amount: c }),
            s && _.push({ id: "tax", label: E.intl.string(E.t.jiRvC7), amount: e.tax }),
            { lineItems: _, primaryLineItem: f }
        );
    },
    v = (e, t) => {
        let {
                isPrepaidPaymentSource: n = !1,
                invoiceSummaryTypeWithPreview: r,
                subscriptionPlan: i,
                subscriptionTrial: s,
            } = t,
            { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, u.SA)(e, i),
            { lineItems: c, primaryLineItem: _ } = S(a, {
                overrideAmount: d.IJ.has(r.type) ? o : void 0,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: l,
            });
        return { lineItems: c, primaryLineItem: _ };
    },
    N = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: r = !1, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, l.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    C = (e, t) => {
        if (1 === t)
            switch (e) {
                case h.WT.MONTH:
                    return E.intl.string(g.default.ajn5LL);
                case h.WT.YEAR:
                    return E.intl.string(g.default.FNijW7);
            }
        return E.intl.string(g.default.jxUJkZ);
    },
    b = function (e, t, n) {
        let { includeTaxLineItem: r } =
                arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { includeTaxLineItem: !0 },
            i = (0, u.Q8)(t, e),
            { intervalType: s, intervalCount: a } = (0, f.Ge)(t),
            o = t.currency,
            l = i.map((e) => {
                let { amount: t, showGuildSubscriptionAdjustmentTooltip: r } = e,
                    { label: i } = (0, u.Ae)(e, { subscriptionTrial: n, currency: o }),
                    s = r ? E.intl.format(E.t.UDop9c, {}) : void 0;
                return { id: e.id, label: i, amount: t, tooltip: s };
            }),
            c = t.tax;
        return (
            c > 0 && r && l.push({ id: "tax", label: E.intl.string(E.t.jiRvC7), amount: c, formatWithoutRate: !0 }),
            {
                lineItems: l,
                intervalType: s,
                intervalCount: a,
                currency: o,
                label: E.intl.format(g.default["57B1ks"], {
                    renewalDate: null != e ? e.subscriptionPeriodEnd : t.subscriptionPeriodStart,
                }),
                totalLineItemLabel: C(s, a),
            }
        );
    },
    R = (e, t, n) => {
        let { type: i, invoicePreview: s } = e,
            { isPrepaidPaymentSource: l, giftRecipient: c, isPremiumGroupPurchase: _ } = n,
            I = i === d.N$.PREMIUM_GIFT,
            { subscriptionPlanInvoiceItem: S } = (0, u.Sb)(s, t),
            y = "";
        y = _
            ? null != S
                ? (0, u.Tp)(S, t)
                : E.intl.formatToPlainString(A.default["8bPDtb"], { premiumGroupProductName: (0, m.DP)() })
            : I
              ? T(t)
              : (0, f.Mn)(t.id, !1, l);
        let v = I && null != c ? (0, a.xk)(c) : void 0,
            N = null == c ? E.intl.string(g.default.AM9XGb) : "",
            C = I ? N : E.intl.string(g.default["2zUa6I"]),
            b = (0, f.m6)(t.id) === h.PremiumTypes.TIER_0 ? (0, r.jsx)(o.DH, {}) : (0, r.jsx)(o.JW, {}),
            R = (I ? S?.amount : S?.subscriptionPlanPrice) ?? 0,
            O = (0, p.$g)(R, s.currency);
        return {
            label: y,
            description: C,
            price: i === d.N$.PREMIUM_GIFT ? O : (0, p.CE)(O, t.interval, t.intervalCount),
            gift: v,
            graphic: b,
        };
    },
    O = (e, t) => {
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
