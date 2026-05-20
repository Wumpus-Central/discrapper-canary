n.d(t, {
    EA: () => A,
    Gj: () => E,
    IY: () => _,
    Ig: () => I,
    Re: () => T,
    Rs: () => N,
    fk: () => j,
    iK: () => h,
    ib: () => x,
}),
    n(321073);
var l = n(284009),
    a = n.n(l),
    r = n(403581),
    i = n(854354),
    s = n(692440),
    u = n(815545),
    o = n(736339),
    c = n(299301),
    d = n(97352),
    m = n(428262),
    p = n(580630),
    f = n(788868),
    g = n(375708),
    v = n(327105);
let x = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? g.intl.format(v.default.U2CmMW, {
                  priceAmount: (0, p.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, p.$g)(0, e);
    },
    b = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    h = (e) => {
        let { interval: t } = e,
            n = (0, m.m6)(e.id);
        switch (t) {
            case f.WT.MONTH:
                let l = g.intl.string(v.default.ZnoRKt);
                return n === f.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(v.default.Z9mu9q, { timeInterval: l })
                    : g.intl.formatToPlainString(v.default["8Jt4Dw"], { timeInterval: l });
            case f.WT.YEAR:
                let a = g.intl.string(v.default.Xrg8aC);
                return n === f.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(v.default.Z9mu9q, { timeInterval: a })
                    : g.intl.formatToPlainString(v.default["8Jt4Dw"], { timeInterval: a });
            case f.WT.DAY:
                let r = g.intl.string(v.default.WmjxYl);
                return n === f.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(v.default.Z9mu9q, { timeInterval: r })
                    : g.intl.formatToPlainString(v.default["8Jt4Dw"], { timeInterval: r });
        }
    },
    A = (e) => {
        let { id: t, label: n, amount: l, subscriptionDiscount: a, entitlementDiscount: r, currency: i } = e,
            s = [{ id: t, label: n, amount: l }];
        return (
            null != a && s.push(b(a, "subscription-discount", g.intl.string(v.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != r, lineItems: s, currency: i }
        );
    },
    y = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: l,
                invoiceAdjustmentDisplayItems: a,
                currency: r,
                subscriptionPlan: i,
                subscriptionTrial: s,
                excludeDiscountsAndAdjustments: o,
            } = t,
            {
                label: c,
                amount: d,
                amountWithoutDiscount: m,
                subscriptionDiscount: p,
                entitlementDiscount: f,
            } = (0, u.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: l,
                currency: r,
            }),
            x = null != p || null != f,
            h = { id: e.id, label: c, amount: x ? m : d, lineItemType: "main" },
            A = [
                h,
                ...a.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                    lineItemType: "adjustment",
                })),
            ];
        return (
            null == p || o || A.push(b(p, "subscription-discount", g.intl.string(v.default["9yHcmL"]))),
            { lineItems: A, primaryLineItem: h, entitlementDiscount: f }
        );
    },
    I = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: l,
                isPrepaidPaymentSource: a = !1,
                includeTaxLineItem: r = !0,
                excludeDiscountsAndAdjustments: i,
            } = t,
            {
                basePlanInvoiceItem: s,
                guildSubscriptionInvoiceItem: o,
                guildSubscriptionPlan: c,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: m,
            } = (0, u.wt)(e, { isPrepaidPaymentSource: a });
        if (null == s) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: p,
            primaryLineItem: f,
            entitlementDiscount: v,
        } = y(s, {
            subscriptionPlan: l,
            subscriptionTrial: n,
            isPrepaidPaymentSource: a,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: i,
        });
        return (
            0 !== d && null != o && null != c && null != m && p.push({ id: o.id, label: m, amount: d }),
            r && p.push({ id: "tax", label: g.intl.string(g.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: p, primaryLineItem: f, entitlementDiscount: v }
        );
    },
    _ = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: l, subscriptionPlan: a, subscriptionTrial: r } = t,
            { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: o } = (0, u.SA)(e, a),
            {
                lineItems: d,
                primaryLineItem: m,
                entitlementDiscount: p,
            } = y(i, {
                overrideAmount: c.IJ.has(l) ? s : void 0,
                subscriptionPlan: a,
                subscriptionTrial: r,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: o,
            });
        return { lineItems: d, primaryLineItem: m, entitlementDiscount: p, hasAdjustmentLineItem: o.length > 0 };
    },
    j = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: l = !1, subscriptionPlan: a } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, s.Lw)(a, { isCustomGift: n, isPrepaidPaymentSource: l }),
                amount: e.total - e.tax,
            },
        ];
    },
    T = (e, t) => {
        let n = (0, u.NL)(e),
            l = (function (e, t) {
                if (null == e || null == t || e !== t.discountId) return null;
                let { discount: n } = t,
                    l = new Date(t.appliedAt?.getTime() ?? Date.now()),
                    a = "";
                switch (n.userUsageLimitInterval) {
                    case f.Ff.DAY:
                        l.setDate(l.getDate() + n.userUsageLimitIntervalCount),
                            (a = g.intl.formatToPlainString(v.default.WzJTZI, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    case f.Ff.WEEK:
                        l.setDate(l.getDate() + 7 * n.userUsageLimitIntervalCount),
                            (a = g.intl.formatToPlainString(v.default.LHWoqL, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    case f.Ff.MONTH:
                        l.setMonth(l.getMonth() + n.userUsageLimitIntervalCount),
                            (a = g.intl.formatToPlainString(v.default.ZQLDzk, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    case f.Ff.YEAR:
                        l.setFullYear(l.getFullYear() + n.userUsageLimitIntervalCount),
                            (a = g.intl.formatToPlainString(v.default.KpnRtO, {
                                intervalCount: n.userUsageLimitIntervalCount,
                            }));
                        break;
                    default:
                        return null;
                }
                return { discountEndDate: l, discountAppliedLabel: a, intervalCount: n.userUsageLimitIntervalCount };
            })(null != n ? n.discount_id : null, t),
            a = null != l && 1 === l.intervalCount,
            { subscriptionPlanPrice: r, subscriptionPlanId: i, amount: s } = e;
        return (0, m.xq)(i)
            ? { amount: a ? r * e.quantity : s, matchedDiscountInfo: l }
            : { amount: s, matchedDiscountInfo: l };
    },
    P = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: l,
                isPremiumBasePlanInvoiceItem: a,
                intervalType: i,
                intervalCount: s,
                discountOffer: o,
                currency: c,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: f,
                subscriptionDiscount: x,
                originalAmount: b,
            } = (0, u.Ae)(e, { subscriptionTrial: t, currency: c }),
            h = d ? g.intl.format(g.t.UDop9c, {}) : void 0,
            A =
                a || null == x
                    ? null
                    : {
                          subText: (0, p.CE)((0, p.$g)(b, c), i, s),
                          subTextHasStrikethrough: !0,
                          valueIcon: l && (0, m.z4)(e.subscriptionPlanId) ? r.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: y, matchedDiscountInfo: I } = T(e, o),
            _ = null != I && I.intervalCount > 1,
            j =
                a && _
                    ? {
                          subText: g.intl.format(v.default.Chj1Ke, { discountEndDate: I.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: I, lineItem: { id: e.id, label: f, amount: y, tooltip: h, ...j, ...A } };
    },
    E = function (e, t, n) {
        let {
                overrideRenewalDate: l,
                isSubscriptionUpdate: a,
                discountOffer: r,
                fractionalPremiumInfo: i,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      overrideRenewalDate: void 0,
                      isSubscriptionUpdate: !1,
                      discountOffer: null,
                      fractionalPremiumInfo: null,
                  },
            o = (0, u.Q8)(t, e, { isSubscriptionUpdate: a }),
            { intervalType: c, intervalCount: d } = (0, m.Ge)(t),
            p = t.currency,
            x = [],
            b = o.some((e) => (0, m.xq)(e.subscriptionPlanId));
        for (let e of o) {
            let { subscriptionPlanId: t } = e,
                { lineItem: l } = P(e, n, {
                    invoiceIncludesPremiumBasePlan: b,
                    isPremiumBasePlanInvoiceItem: (0, m.xq)(t),
                    intervalType: c,
                    intervalCount: d,
                    discountOffer: r,
                    currency: p,
                });
            x.push(l);
        }
        let h = (0, s.de)({
            overrideRenewalDate: l,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: a,
            fractionalPremiumInfo: i,
        });
        return {
            lineItems: x,
            intervalType: c,
            intervalCount: d,
            currency: p,
            label: g.intl.string(v.default.GGn3pp),
            totalLineItemValueSubText: g.intl.string(v.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case f.WT.MONTH:
                            return g.intl.string(v.default.WrFWOV);
                        case f.WT.YEAR:
                            return g.intl.string(v.default.SxKq52);
                    }
                return g.intl.string(v.default.jxUJkZ);
            })(c, d),
            totalLineItemLabelSubText: g.intl.format(v.default.MR4VnX, { renewalDate: h }),
        };
    },
    N = (e, t) => {
        let n,
            {
                planId: l,
                disabled: r,
                userLocale: s,
                discountOffer: u,
                isEligibleForDiscount: c,
                discountAmountOff: x,
                isMonthlyDiscountOffer: b,
                priceOptions: h,
                isCurrentPlan: A,
                isGift: y,
                isEligibleForTrial: I,
                isEligibleForBOGOPromotion: _,
                showPlanStatusSubText: j,
                isInPlanSelectStep: T,
            } = t,
            P = d.A.get(l);
        a()(null != P, "Missing subscriptionPlan");
        let E = (0, m.L_)({ planId: l, isGift: y, priceOptions: h, subscriptionPlan: P }),
            N = null != E && null == u,
            S = (0, m.y8)(l, !1, y, h),
            R = (0, o.gS)(e, P, {
                userLocale: s,
                isEligibleForBOGOPromotion: _,
                shouldShowSavingsPercent: N,
                isGift: y,
                planId: l,
                savingsPercent: E,
            }),
            M = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? g.intl.formatToPlainString(g.t.hXcaLT, {
                          price: (0, p.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, p.$g)(e.amount, e.currency);
            })(S, { isEligibleForTrial: I }),
            L = M;
        if (b && null != u && !I) {
            if (P.interval === f.WT.YEAR) n = g.intl.format(v.default.ODKoJd, { percent: E ?? "" });
            else if (P.interval === f.WT.MONTH) {
                if (c && null != x) {
                    let e = (0, p.$g)(S.amount - x, S.currency);
                    L = g.intl.format(g.t.hXcaLT, { price: e });
                }
                n = g.intl.format(v.default.JsSin7, {
                    priceRate: (0, p.CE)(M, P.interval, P.intervalCount),
                    intervalCount: u.discount.userUsageLimitIntervalCount,
                });
            }
        }
        j && (T && I ? (n = (0, o.O7)(P, S)) : A ? (n = g.intl.string(g.t.ymSxhy)) : "string" == typeof R && (n = R));
        let C = null != R && "object" == typeof R && "badge" === R.type ? R.text : null,
            k =
                null != C
                    ? C
                    : (0, i.Nc)({
                          subscriptionPlan: P,
                          userLocale: s,
                          discountOffer: u,
                          yearlyPercentSavings: E,
                          shouldHideYearlySavingsBadge: null != e || null != u,
                      });
        return {
            id: l,
            planName: (0, i.YR)(P.interval, P.intervalCount, !0),
            priceText: L,
            secondarySubText: n,
            promoText: k,
            isDisabled: r,
            savingsPercent: E,
        };
    };
