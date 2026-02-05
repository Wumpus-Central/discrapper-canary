"use strict";
n.d(t, { BZ: () => y, Gj: () => T, fk: () => A, iQ: () => E }), n(321073);
var r = n(627968);
n(64700);
var i = n(93159),
    a = n(692440),
    s = n(815545),
    o = n(299301),
    l = n(927578),
    u = n(580630),
    c = n(427262),
    d = n(788868),
    _ = n(88001),
    f = n(985018),
    p = n(756366),
    h = n(519412);
let m = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount }),
    g = (e) => {
        let { interval: t } = e,
            n = (0, l.m6)(e.id);
        switch (t) {
            case d.WT.MONTH:
                let r = f.intl.string(p.default.ZnoRKt);
                return n === d.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(p.default.Z9mu9q, { timeInterval: r })
                    : f.intl.formatToPlainString(p.default["8Jt4Dw"], { timeInterval: r });
            case d.WT.YEAR:
                let i = f.intl.string(p.default.Xrg8aC);
                return n === d.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(p.default.Z9mu9q, { timeInterval: i })
                    : f.intl.formatToPlainString(p.default["8Jt4Dw"], { timeInterval: i });
            case d.WT.DAY:
                let a = f.intl.string(p.default.WmjxYl);
                return n === d.PremiumTypes.TIER_0
                    ? f.intl.formatToPlainString(p.default.Z9mu9q, { timeInterval: a })
                    : f.intl.formatToPlainString(p.default["8Jt4Dw"], { timeInterval: a });
        }
    },
    E = (e, t) => {
        let {
                isPrepaidPaymentSource: n,
                invoiceSummaryTypeWithPreview: r,
                subscriptionPlan: i,
                premiumTrialOffer: a,
            } = t,
            { newPlanInvoiceItem: l, basePlanFullAmount: u, invoiceAdjustmentDisplayItems: c } = (0, s.qi)(e, i),
            d = r.type === o.N$.PREMIUM_DEFAULT ? u : void 0,
            {
                label: _,
                amount: h,
                amountWithoutDiscount: g,
                subscriptionDiscount: E,
                entitlementDiscount: A,
                trialDiscount: I,
            } = (0, s.Ol)(l, {
                overrideAmount: d,
                subscriptionPlan: i,
                premiumTrialOffer: a,
                isPrepaidPaymentSource: n,
                currency: e.currency,
            }),
            T = null != E || null != A || null != I,
            y = [
                { id: l.id, label: _, amount: T ? g : h },
                ...c.map((e) => ({ id: e.id, label: e.label, amount: e.amount })),
            ];
        return (
            null != I
                ? y.push(m(I, "trial-discount", f.intl.string(p.default["7LeLN4"])))
                : (null != E && y.push(m(E, "subscription-discount", f.intl.string(p.default["9yHcmL"]))),
                  null != A && y.push(m(A, "entitlement-discount", f.intl.string(f.t.A7Hpfs)))),
            y
        );
    },
    A = (e, t) => {
        let { isCustomGift: n, isPrepaidPaymentSource: r, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, a.Lw)(i, { isCustomGift: n, isPrepaidPaymentSource: r }),
                amount: e.total - e.tax,
            },
        ];
    },
    I = (e, t) => {
        if (1 === t)
            switch (e) {
                case d.WT.MONTH:
                    return f.intl.string(p.default.ajn5LL);
                case d.WT.YEAR:
                    return f.intl.string(p.default.FNijW7);
            }
        return f.intl.string(p.default.jxUJkZ);
    },
    T = (e, t, n) => {
        let r = (0, s.Q8)(t, e),
            { intervalType: i, intervalCount: a } = (0, l.Ge)(t),
            o = t.currency;
        return {
            lineItems: r.map((e) => {
                let { subscriptionPlanPrice: t, showGuildSubscriptionAdjustmentTooltip: r } = e,
                    { label: i } = (0, s.Ol)(e, { premiumTrialOffer: n, currency: o }),
                    a = r ? f.intl.format(f.t.UDop9c, {}) : void 0;
                return { id: e.id, label: i, amount: t, tooltip: a };
            }),
            intervalType: i,
            intervalCount: a,
            currency: o,
            label: f.intl.format(p.default["57B1ks"], { renewalDate: t.subscriptionPeriodEnd }),
            totalLineItemLabel: I(i, a),
        };
    },
    y = (e, t, n) => {
        let { isPrepaidPaymentSource: a, giftRecipient: m, isPremiumGroupPurchase: E } = n,
            A = e.type === o.N$.PREMIUM_GIFT,
            { invoicePreview: I } = e,
            { subscriptionPlanInvoiceItem: T } = (0, s.Sb)(I, t),
            y = "";
        y = E
            ? null != T
                ? (0, s.Tp)(T, t)
                : f.intl.formatToPlainString(h.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() })
            : A
              ? g(t)
              : (0, l.Mn)(t.id, !1, a);
        let S =
                A && null != m
                    ? {
                          username: c.Ay.getUserTag(m, { identifiable: "never" }),
                          avatarUrl: m.getAvatarURL(void 0, 16),
                          nickname: c.Ay.getName(m),
                      }
                    : void 0,
            v = null == m ? f.intl.string(p.default.AM9XGb) : "",
            C = A ? v : f.intl.string(p.default["2zUa6I"]),
            b = (0, l.m6)(t.id) === d.PremiumTypes.TIER_0 ? (0, r.jsx)(i.DH, {}) : (0, r.jsx)(i.JW, {}),
            N = (A ? T?.amount : T?.subscriptionPlanPrice) ?? 0,
            R = (0, u.$g)(N, I.currency);
        return {
            label: y,
            description: C,
            price: e.type === o.N$.PREMIUM_GIFT ? R : (0, u.CE)(R, t.interval, t.intervalCount),
            gift: S,
            graphic: b,
        };
    };
