n.d(t, {
    EA: () => T,
    Gj: () => j,
    Go: () => N,
    IY: () => k,
    Ig: () => I,
    Rs: () => C,
    fk: () => P,
    iK: () => E,
    ib: () => h,
}),
    n(321073);
var a = n(284009),
    r = n.n(a),
    l = n(403581),
    i = n(854354),
    s = n(410516),
    u = n(458785),
    o = n(815545),
    c = n(736339),
    d = n(299301),
    m = n(97352),
    f = n(252424),
    p = n(428262),
    g = n(580630),
    b = n(788868),
    v = n(375708),
    A = n(327105);
let x = (e) => (0, p.xq)(e) || (0, p.Zb)(e),
    h = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? v.intl.format(A.default.U2CmMW, {
                  priceAmount: (0, g.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, g.$g)(0, e);
    },
    y = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    E = (e) => {
        let { interval: t } = e,
            n = (0, p.m6)(e.id);
        switch (t) {
            case b.WT.MONTH:
                let a = v.intl.string(A.default.ZnoRKt);
                return n === b.PremiumTypes.TIER_0
                    ? v.intl.formatToPlainString(A.default.Z9mu9q, { timeInterval: a })
                    : v.intl.formatToPlainString(A.default["8Jt4Dw"], { timeInterval: a });
            case b.WT.YEAR:
                let r = v.intl.string(A.default.Xrg8aC);
                return n === b.PremiumTypes.TIER_0
                    ? v.intl.formatToPlainString(A.default.Z9mu9q, { timeInterval: r })
                    : v.intl.formatToPlainString(A.default["8Jt4Dw"], { timeInterval: r });
            case b.WT.DAY:
                let l = v.intl.string(A.default.WmjxYl);
                return n === b.PremiumTypes.TIER_0
                    ? v.intl.formatToPlainString(A.default.Z9mu9q, { timeInterval: l })
                    : v.intl.formatToPlainString(A.default["8Jt4Dw"], { timeInterval: l });
        }
    },
    T = (e) => {
        let { id: t, label: n, amount: a, subscriptionDiscount: r, entitlementDiscount: l, currency: i } = e,
            s = [{ id: t, label: n, amount: a }];
        return (
            null != r && s.push(y(r, "subscription-discount", v.intl.string(A.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != l, lineItems: s, currency: i }
        );
    },
    _ = (e, t) => {
        let {
                overrideAmount: n,
                isPrepaidPaymentSource: a,
                invoiceAdjustmentDisplayItems: r,
                currency: l,
                subscriptionPlan: i,
                subscriptionTrial: s,
                excludeDiscountsAndAdjustments: u,
            } = t,
            {
                label: c,
                amount: d,
                amountWithoutDiscount: m,
                subscriptionDiscount: f,
                entitlementDiscount: p,
            } = (0, o.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: a,
                currency: l,
            }),
            g = null != f || null != p,
            b = { id: e.id, label: c, amount: g ? m : d, lineItemType: "main" },
            x = [
                b,
                ...r.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                    tooltip: e.tooltipText,
                    tooltipAriaLabel: e.tooltipAriaLabel,
                    lineItemType: "adjustment",
                })),
            ];
        return (
            null == f || u || x.push(y(f, "subscription-discount", v.intl.string(A.default["9yHcmL"]))),
            { lineItems: x, primaryLineItem: b, entitlementDiscount: p }
        );
    },
    I = (e, t) => {
        let {
                subscriptionTrial: n,
                subscriptionPlan: a,
                isPrepaidPaymentSource: r = !1,
                includeTaxLineItem: l = !0,
                excludeDiscountsAndAdjustments: i,
            } = t,
            {
                basePlanInvoiceItem: s,
                guildSubscriptionInvoiceItem: u,
                guildSubscriptionPlan: c,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: m,
            } = (0, o.wt)(e, { isPrepaidPaymentSource: r });
        if (null == s) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: f,
            primaryLineItem: p,
            entitlementDiscount: g,
        } = _(s, {
            subscriptionPlan: a,
            subscriptionTrial: n,
            isPrepaidPaymentSource: r,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: i,
        });
        return (
            0 !== d && null != u && null != c && null != m && f.push({ id: u.id, label: m, amount: d }),
            l && f.push({ id: "tax", label: v.intl.string(v.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: f, primaryLineItem: p, entitlementDiscount: g }
        );
    },
    k = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: a, subscriptionPlan: r, subscriptionTrial: l } = t,
            { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, o.SA)(e, r),
            {
                lineItems: c,
                primaryLineItem: m,
                entitlementDiscount: f,
            } = _(i, {
                overrideAmount: d.IJ.has(a) ? s : void 0,
                subscriptionPlan: r,
                subscriptionTrial: l,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: u,
            });
        return { lineItems: c, primaryLineItem: m, entitlementDiscount: f, hasAdjustmentLineItem: u.length > 0 };
    },
    P = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: a = !1, subscriptionPlan: r } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, u.Lw)(r, { isCustomGift: n, isPrepaidPaymentSource: a }),
                amount: e.total - e.tax,
            },
        ];
    },
    L = (e, t) => {
        let n = (0, o.NL)(e),
            a = (function (e, t) {
                if (null == e || null == t || e !== t.discountId) return null;
                let { discount: n } = t,
                    a = new Date(t.appliedAt?.getTime() ?? Date.now()),
                    r = "",
                    l = t.getFullIntervalCount();
                switch (n.userUsageLimitInterval) {
                    case b.Ff.DAY:
                        a.setDate(a.getDate() + l),
                            (r = v.intl.formatToPlainString(A.default.WzJTZI, { intervalCount: l }));
                        break;
                    case b.Ff.WEEK:
                        a.setDate(a.getDate() + 7 * l),
                            (r = v.intl.formatToPlainString(A.default.LHWoqL, { intervalCount: l }));
                        break;
                    case b.Ff.MONTH:
                        a.setMonth(a.getMonth() + l),
                            (r = v.intl.formatToPlainString(A.default.ZQLDzk, { intervalCount: l }));
                        break;
                    case b.Ff.YEAR:
                        a.setFullYear(a.getFullYear() + l),
                            (r = v.intl.formatToPlainString(A.default.KpnRtO, { intervalCount: l }));
                        break;
                    default:
                        return null;
                }
                return { discountEndDate: a, discountAppliedLabel: r, intervalCount: l };
            })(null != n ? n.discount_id : null, t),
            r = null != a && 1 === a.intervalCount,
            { subscriptionPlanPrice: l, subscriptionPlanId: i, amount: s } = e;
        return x(i)
            ? { amount: r ? l * e.quantity : s, matchedDiscountInfo: a }
            : { amount: s, matchedDiscountInfo: a };
    },
    N = (e, t, n) => {
        let a = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
        if (null == a) return { renewalPrice: e.subtotal };
        let { amount: r, matchedDiscountInfo: l } = L(a, n);
        if (null == n || null == l) return { renewalPrice: r };
        if (n.getIsMultiIntervalDiscount()) {
            let e = a.subscriptionPlanPrice * a.quantity;
            return {
                renewalPrice: e,
                multiPeriodDiscountAttributes: {
                    discountedRenewalPrice: r,
                    priceWithoutDiscount: e,
                    discountEndDate: l.discountEndDate,
                },
            };
        }
        return { renewalPrice: r };
    },
    S = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: a,
                isPremiumPlanInvoiceItem: r,
                intervalType: i,
                intervalCount: s,
                discountOffer: u,
                currency: c,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: m,
                subscriptionDiscount: f,
                originalAmount: b,
            } = (0, o.Ae)(e, { subscriptionTrial: t, currency: c }),
            x = d ? v.intl.format(v.t.UDop9c, {}) : void 0,
            h =
                r || null == f
                    ? null
                    : {
                          subText: (0, g.CE)((0, g.$g)(b, c), i, s),
                          subTextHasStrikethrough: !0,
                          valueIcon: a && (0, p.z4)(e.subscriptionPlanId) ? l.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: y, matchedDiscountInfo: E } = L(e, u),
            T = null != E && E.intervalCount > 1,
            _ =
                r && T
                    ? {
                          subText: v.intl.format(A.default.Chj1Ke, { discountEndDate: E.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: E, lineItem: { id: e.id, label: m, amount: y, tooltip: x, ..._, ...h } };
    },
    j = function (e, t, n) {
        let {
                overrideRenewalDate: a,
                isSubscriptionUpdate: r,
                discountOffer: l,
                fractionalPremiumInfo: i,
            } = arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      overrideRenewalDate: void 0,
                      isSubscriptionUpdate: !1,
                      discountOffer: null,
                      fractionalPremiumInfo: null,
                  },
            s = (0, o.Q8)(t, e, { isSubscriptionUpdate: r }),
            { intervalType: c, intervalCount: d } = (0, p.Ge)(t),
            m = t.currency,
            f = [],
            g = s.some((e) => (0, p.xq)(e.subscriptionPlanId));
        for (let e of s) {
            let { subscriptionPlanId: t } = e,
                { lineItem: a } = S(e, n, {
                    invoiceIncludesPremiumBasePlan: g,
                    isPremiumPlanInvoiceItem: x(t),
                    intervalType: c,
                    intervalCount: d,
                    discountOffer: l,
                    currency: m,
                });
            f.push(a);
        }
        let h = (0, u.de)({
            overrideRenewalDate: a,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: r,
            fractionalPremiumInfo: i,
        });
        return {
            lineItems: f,
            intervalType: c,
            intervalCount: d,
            currency: m,
            label: v.intl.string(A.default.GGn3pp),
            totalLineItemValueSubText: v.intl.string(A.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case b.WT.MONTH:
                            return v.intl.string(A.default.WrFWOV);
                        case b.WT.YEAR:
                            return v.intl.string(A.default.SxKq52);
                    }
                return v.intl.string(A.default.jxUJkZ);
            })(c, d),
            totalLineItemLabelSubText: v.intl.format(A.default.MR4VnX, { renewalDate: h }),
        };
    },
    C = (e, t) => {
        let n,
            a,
            l,
            {
                planId: u,
                disabled: o,
                userLocale: d,
                isEligibleForDiscount: x,
                discountInfo: h,
                priceOptions: y,
                isCurrentPlan: E,
                isGift: T,
                isEligibleForTrial: _,
                isEligibleForBOGOPromotion: I,
                showPlanStatusSubText: k,
                isInPlanSelectStep: P,
            } = t,
            L = m.A.get(u);
        r()(null != L, "Missing subscriptionPlan");
        let { discountOffer: N, discountAmountOff: S, applicablePlan: j } = h,
            C = (0, p.L_)({ planId: u, isGift: T, priceOptions: y, subscriptionPlan: L }),
            R = null != C && null == N,
            M = (0, p.y8)(u, !1, T, y),
            D = (0, c.gS)(e, L, {
                userLocale: d,
                isEligibleForBOGOPromotion: I,
                shouldShowSavingsPercent: R,
                isGift: T,
                planId: u,
                savingsPercent: C,
            }),
            w = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? v.intl.formatToPlainString(v.t.hXcaLT, {
                          price: (0, g.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, g.$g)(e.amount, e.currency);
            })(M, { isEligibleForTrial: _ }),
            G = w,
            O = x && null != j && u === j ? S : null;
        null != N &&
            !_ &&
            ((0, s.p2)(N)
                ? L.interval === b.WT.YEAR
                    ? (n = v.intl.format(A.default.ODKoJd, { percent: C ?? "" }))
                    : L.interval === b.WT.MONTH &&
                      (null != O && (G = v.intl.format(v.t.hXcaLT, { price: (0, g.$g)(M.amount - O, M.currency) })),
                      (n = v.intl.format(A.default.JsSin7, {
                          priceRate: (0, g.CE)(w, L.interval, L.intervalCount),
                          intervalCount: N.getFullIntervalCount(),
                      })))
                : (0, s.hm)(N) &&
                  L.interval === b.WT.YEAR &&
                  null != O &&
                  ((G = v.intl.format(v.t.hXcaLT, { price: (0, g.$g)(M.amount - O, M.currency) })),
                  (a = w),
                  (n = v.intl.format(v.t.VZ8Tvh, { regularPrice: w })),
                  (l = v.intl.formatToPlainString(A.default.nsG1jw, {
                      savingsText: (0, f.l9)(d, parseInt(N.discount.amount) / 100),
                  })))),
            k &&
                (P && _
                    ? (n = (0, c.O7)(L, M))
                    : E
                      ? (n = v.intl.string(v.t.ymSxhy))
                      : "string" == typeof D && (n = D));
        let B = ((e) => {
            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: a } = e;
            return t ?? n ?? a;
        })({
            promoTextOverride: l,
            overrideBadgeText: null != D && "object" == typeof D ? (D.type, D.text) : null,
            defaultValue: (0, i.Nc)({
                subscriptionPlan: L,
                userLocale: d,
                discountOffer: N,
                yearlyPercentSavings: C,
                shouldHideYearlySavingsBadge: null != e || null != N,
            }),
        });
        return {
            id: u,
            planName: (0, i.YR)(L.interval, L.intervalCount, !0),
            priceText: G,
            subTextStrikethrough: a,
            secondarySubText: n,
            promoText: B,
            isDisabled: o,
            savingsPercent: C,
        };
    };
