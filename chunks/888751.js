n.d(t, {
    EA: () => T,
    Gj: () => C,
    Go: () => k,
    IY: () => _,
    Ig: () => E,
    Rs: () => L,
    fk: () => N,
    iK: () => j,
    ib: () => y,
}),
    n(321073);
var l = n(284009),
    a = n.n(l),
    r = n(403581),
    i = n(854354),
    s = n(410516),
    u = n(692440),
    c = n(815545),
    o = n(736339),
    d = n(299301),
    m = n(97352),
    f = n(252424),
    x = n(428262),
    p = n(580630),
    v = n(788868),
    g = n(375708),
    h = n(327105);
let b = (e) => (0, x.xq)(e) || (0, x.Zb)(e),
    y = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? g.intl.format(h.default.U2CmMW, {
                  priceAmount: (0, p.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, p.$g)(0, e);
    },
    A = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    j = (e) => {
        let { interval: t } = e,
            n = (0, x.m6)(e.id);
        switch (t) {
            case v.WT.MONTH:
                let l = g.intl.string(h.default.ZnoRKt);
                return n === v.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(h.default.Z9mu9q, { timeInterval: l })
                    : g.intl.formatToPlainString(h.default["8Jt4Dw"], { timeInterval: l });
            case v.WT.YEAR:
                let a = g.intl.string(h.default.Xrg8aC);
                return n === v.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(h.default.Z9mu9q, { timeInterval: a })
                    : g.intl.formatToPlainString(h.default["8Jt4Dw"], { timeInterval: a });
            case v.WT.DAY:
                let r = g.intl.string(h.default.WmjxYl);
                return n === v.PremiumTypes.TIER_0
                    ? g.intl.formatToPlainString(h.default.Z9mu9q, { timeInterval: r })
                    : g.intl.formatToPlainString(h.default["8Jt4Dw"], { timeInterval: r });
        }
    },
    T = (e) => {
        let { id: t, label: n, amount: l, subscriptionDiscount: a, entitlementDiscount: r, currency: i } = e,
            s = [{ id: t, label: n, amount: l }];
        return (
            null != a && s.push(A(a, "subscription-discount", g.intl.string(h.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != r, lineItems: s, currency: i }
        );
    },
    I = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: l,
                invoiceAdjustmentDisplayItems: a,
                currency: r,
                subscriptionPlan: i,
                subscriptionTrial: s,
                excludeDiscountsAndAdjustments: u,
            } = t,
            {
                label: o,
                amount: d,
                amountWithoutDiscount: m,
                subscriptionDiscount: f,
                entitlementDiscount: x,
            } = (0, c.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: l,
                currency: r,
            }),
            p = null != f || null != x,
            v = { id: e.id, label: o, amount: p ? m : d, lineItemType: "main" },
            b = [
                v,
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
            null == f || u || b.push(A(f, "subscription-discount", g.intl.string(h.default["9yHcmL"]))),
            { lineItems: b, primaryLineItem: v, entitlementDiscount: x }
        );
    },
    E = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: l,
                isPrepaidPaymentSource: a = !1,
                includeTaxLineItem: r = !0,
                excludeDiscountsAndAdjustments: i,
            } = t,
            {
                basePlanInvoiceItem: s,
                guildSubscriptionInvoiceItem: u,
                guildSubscriptionPlan: o,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: m,
            } = (0, c.wt)(e, { isPrepaidPaymentSource: a });
        if (null == s) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: f,
            primaryLineItem: x,
            entitlementDiscount: p,
        } = I(s, {
            subscriptionPlan: l,
            subscriptionTrial: n,
            isPrepaidPaymentSource: a,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: i,
        });
        return (
            0 !== d && null != u && null != o && null != m && f.push({ id: u.id, label: m, amount: d }),
            r && f.push({ id: "tax", label: g.intl.string(g.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: f, primaryLineItem: x, entitlementDiscount: p }
        );
    },
    _ = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: l, subscriptionPlan: a, subscriptionTrial: r } = t,
            { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, c.SA)(e, a),
            {
                lineItems: o,
                primaryLineItem: m,
                entitlementDiscount: f,
            } = I(i, {
                overrideAmount: d.IJ.has(l) ? s : void 0,
                subscriptionPlan: a,
                subscriptionTrial: r,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: u,
            });
        return { lineItems: o, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: u.length > 0 };
    },
    N = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: l = !1, subscriptionPlan: a } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, u.Lw)(a, { isCustomGift: n, isPrepaidPaymentSource: l }),
                amount: e.total - e.tax,
            },
        ];
    },
    P = (e, t) => {
        let n = (0, c.NL)(e),
            l = (function (e, t) {
                if (null == e || null == t || e !== t.discountId) return null;
                let { discount: n } = t,
                    l = new Date(t.appliedAt?.getTime() ?? Date.now()),
                    a = "",
                    r = t.getFullIntervalCount();
                switch (n.userUsageLimitInterval) {
                    case v.Ff.DAY:
                        l.setDate(l.getDate() + r),
                            (a = g.intl.formatToPlainString(h.default.WzJTZI, { intervalCount: r }));
                        break;
                    case v.Ff.WEEK:
                        l.setDate(l.getDate() + 7 * r),
                            (a = g.intl.formatToPlainString(h.default.LHWoqL, { intervalCount: r }));
                        break;
                    case v.Ff.MONTH:
                        l.setMonth(l.getMonth() + r),
                            (a = g.intl.formatToPlainString(h.default.ZQLDzk, { intervalCount: r }));
                        break;
                    case v.Ff.YEAR:
                        l.setFullYear(l.getFullYear() + r),
                            (a = g.intl.formatToPlainString(h.default.KpnRtO, { intervalCount: r }));
                        break;
                    default:
                        return null;
                }
                return { discountEndDate: l, discountAppliedLabel: a, intervalCount: r };
            })(null != n ? n.discount_id : null, t),
            a = null != l && 1 === l.intervalCount,
            { subscriptionPlanPrice: r, subscriptionPlanId: i, amount: s } = e;
        return b(i)
            ? { amount: a ? r * e.quantity : s, matchedDiscountInfo: l }
            : { amount: s, matchedDiscountInfo: l };
    },
    k = (e, t, n) => {
        let l = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
        if (null == l) return { renewalPrice: e.subtotal };
        let { amount: a, matchedDiscountInfo: r } = P(l, n);
        if (null == n || null == r) return { renewalPrice: a };
        if (n.getIsMultiIntervalDiscount()) {
            let e = l.subscriptionPlanPrice * l.quantity;
            return {
                renewalPrice: e,
                multiPeriodDiscountAttributes: {
                    discountedRenewalPrice: a,
                    priceWithoutDiscount: e,
                    discountEndDate: r.discountEndDate,
                },
            };
        }
        return { renewalPrice: a };
    },
    S = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: l,
                isPremiumPlanInvoiceItem: a,
                intervalType: i,
                intervalCount: s,
                discountOffer: u,
                currency: o,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: m,
                subscriptionDiscount: f,
                originalAmount: v,
            } = (0, c.Ae)(e, { subscriptionTrial: t, currency: o }),
            b = d ? g.intl.format(g.t.UDop9c, {}) : void 0,
            y =
                a || null == f
                    ? null
                    : {
                          subText: (0, p.CE)((0, p.$g)(v, o), i, s),
                          subTextHasStrikethrough: !0,
                          valueIcon: l && (0, x.z4)(e.subscriptionPlanId) ? r.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: A, matchedDiscountInfo: j } = P(e, u),
            T = null != j && j.intervalCount > 1,
            I =
                a && T
                    ? {
                          subText: g.intl.format(h.default.Chj1Ke, { discountEndDate: j.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: j, lineItem: { id: e.id, label: m, amount: A, tooltip: b, ...I, ...y } };
    },
    C = function (e, t, n) {
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
            s = (0, c.Q8)(t, e, { isSubscriptionUpdate: a }),
            { intervalType: o, intervalCount: d } = (0, x.Ge)(t),
            m = t.currency,
            f = [],
            p = s.some((e) => (0, x.xq)(e.subscriptionPlanId));
        for (let e of s) {
            let { subscriptionPlanId: t } = e,
                { lineItem: l } = S(e, n, {
                    invoiceIncludesPremiumBasePlan: p,
                    isPremiumPlanInvoiceItem: b(t),
                    intervalType: o,
                    intervalCount: d,
                    discountOffer: r,
                    currency: m,
                });
            f.push(l);
        }
        let y = (0, u.de)({
            overrideRenewalDate: l,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: a,
            fractionalPremiumInfo: i,
        });
        return {
            lineItems: f,
            intervalType: o,
            intervalCount: d,
            currency: m,
            label: g.intl.string(h.default.GGn3pp),
            totalLineItemValueSubText: g.intl.string(h.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case v.WT.MONTH:
                            return g.intl.string(h.default.WrFWOV);
                        case v.WT.YEAR:
                            return g.intl.string(h.default.SxKq52);
                    }
                return g.intl.string(h.default.jxUJkZ);
            })(o, d),
            totalLineItemLabelSubText: g.intl.format(h.default.MR4VnX, { renewalDate: y }),
        };
    },
    L = (e, t) => {
        let n,
            l,
            r,
            {
                planId: u,
                disabled: c,
                userLocale: d,
                isEligibleForDiscount: b,
                discountInfo: y,
                priceOptions: A,
                isCurrentPlan: j,
                isGift: T,
                isEligibleForTrial: I,
                isEligibleForBOGOPromotion: E,
                showPlanStatusSubText: _,
                isInPlanSelectStep: N,
            } = t,
            P = m.A.get(u);
        a()(null != P, "Missing subscriptionPlan");
        let { discountOffer: k, discountAmountOff: S, applicablePlan: C } = y,
            L = (0, x.L_)({ planId: u, isGift: T, priceOptions: A, subscriptionPlan: P }),
            R = null != L && null == k,
            D = (0, x.y8)(u, !1, T, A),
            M = (0, o.gS)(e, P, {
                userLocale: d,
                isEligibleForBOGOPromotion: E,
                shouldShowSavingsPercent: R,
                isGift: T,
                planId: u,
                savingsPercent: L,
            }),
            w = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? g.intl.formatToPlainString(g.t.hXcaLT, {
                          price: (0, p.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, p.$g)(e.amount, e.currency);
            })(D, { isEligibleForTrial: I }),
            O = w,
            G = b && null != C && u === C ? S : null;
        null != k &&
            !I &&
            ((0, s.p2)(k)
                ? P.interval === v.WT.YEAR
                    ? (n = g.intl.format(h.default.ODKoJd, { percent: L ?? "" }))
                    : P.interval === v.WT.MONTH &&
                      (null != G && (O = g.intl.format(g.t.hXcaLT, { price: (0, p.$g)(D.amount - G, D.currency) })),
                      (n = g.intl.format(h.default.JsSin7, {
                          priceRate: (0, p.CE)(w, P.interval, P.intervalCount),
                          intervalCount: k.getFullIntervalCount(),
                      })))
                : (0, s.hm)(k) &&
                  P.interval === v.WT.YEAR &&
                  null != G &&
                  ((O = g.intl.format(g.t.hXcaLT, { price: (0, p.$g)(D.amount - G, D.currency) })),
                  (l = w),
                  (n = g.intl.format(g.t.VZ8Tvh, { regularPrice: w })),
                  (r = g.intl.formatToPlainString(h.default.nsG1jw, {
                      savingsText: (0, f.l9)(d, parseInt(k.discount.amount) / 100),
                  })))),
            _ &&
                (N && I
                    ? (n = (0, o.O7)(P, D))
                    : j
                      ? (n = g.intl.string(g.t.ymSxhy))
                      : "string" == typeof M && (n = M));
        let B = ((e) => {
            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
            return t ?? n ?? l;
        })({
            promoTextOverride: r,
            overrideBadgeText: null != M && "object" == typeof M ? (M.type, M.text) : null,
            defaultValue: (0, i.Nc)({
                subscriptionPlan: P,
                userLocale: d,
                discountOffer: k,
                yearlyPercentSavings: L,
                shouldHideYearlySavingsBadge: null != e || null != k,
            }),
        });
        return {
            id: u,
            planName: (0, i.YR)(P.interval, P.intervalCount, !0),
            priceText: O,
            subTextStrikethrough: l,
            secondarySubText: n,
            promoText: B,
            isDisabled: c,
            savingsPercent: L,
        };
    };
