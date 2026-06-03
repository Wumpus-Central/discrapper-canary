n.d(t, {
    EA: () => _,
    Gj: () => S,
    Go: () => R,
    IY: () => E,
    Ig: () => T,
    Rs: () => L,
    fk: () => j,
    iK: () => I,
    ib: () => y,
}),
    n(321073);
var l = n(284009),
    a = n.n(l),
    r = n(403581),
    i = n(854354),
    s = n(410516),
    u = n(692440),
    o = n(815545),
    c = n(736339),
    d = n(299301),
    m = n(97352),
    p = n(252424),
    f = n(428262),
    g = n(580630),
    v = n(788868),
    x = n(375708),
    b = n(327105);
let h = (e) => (0, f.xq)(e) || (0, f.Zb)(e),
    y = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? x.intl.format(b.default.U2CmMW, {
                  priceAmount: (0, g.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, g.$g)(0, e);
    },
    A = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    I = (e) => {
        let { interval: t } = e,
            n = (0, f.m6)(e.id);
        switch (t) {
            case v.WT.MONTH:
                let l = x.intl.string(b.default.ZnoRKt);
                return n === v.PremiumTypes.TIER_0
                    ? x.intl.formatToPlainString(b.default.Z9mu9q, { timeInterval: l })
                    : x.intl.formatToPlainString(b.default["8Jt4Dw"], { timeInterval: l });
            case v.WT.YEAR:
                let a = x.intl.string(b.default.Xrg8aC);
                return n === v.PremiumTypes.TIER_0
                    ? x.intl.formatToPlainString(b.default.Z9mu9q, { timeInterval: a })
                    : x.intl.formatToPlainString(b.default["8Jt4Dw"], { timeInterval: a });
            case v.WT.DAY:
                let r = x.intl.string(b.default.WmjxYl);
                return n === v.PremiumTypes.TIER_0
                    ? x.intl.formatToPlainString(b.default.Z9mu9q, { timeInterval: r })
                    : x.intl.formatToPlainString(b.default["8Jt4Dw"], { timeInterval: r });
        }
    },
    _ = (e) => {
        let { id: t, label: n, amount: l, subscriptionDiscount: a, entitlementDiscount: r, currency: i } = e,
            s = [{ id: t, label: n, amount: l }];
        return (
            null != a && s.push(A(a, "subscription-discount", x.intl.string(b.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != r, lineItems: s, currency: i }
        );
    },
    P = (e, t) => {
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
                label: c,
                amount: d,
                amountWithoutDiscount: m,
                subscriptionDiscount: p,
                entitlementDiscount: f,
            } = (0, o.Ae)(e, {
                overrideAmount: n,
                subscriptionPlan: i,
                subscriptionTrial: s,
                isPrepaidPaymentSource: l,
                currency: r,
            }),
            g = null != p || null != f,
            v = { id: e.id, label: c, amount: g ? m : d, lineItemType: "main" },
            h = [
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
            null == p || u || h.push(A(p, "subscription-discount", x.intl.string(b.default["9yHcmL"]))),
            { lineItems: h, primaryLineItem: v, entitlementDiscount: f }
        );
    },
    T = (e, t) => {
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
                guildSubscriptionPlan: c,
                guildSubscriptionAmount: d,
                guildBoostItemLabel: m,
            } = (0, o.wt)(e, { isPrepaidPaymentSource: a });
        if (null == s) return { lineItems: [], primaryLineItem: null };
        let {
            lineItems: p,
            primaryLineItem: f,
            entitlementDiscount: g,
        } = P(s, {
            subscriptionPlan: l,
            subscriptionTrial: n,
            isPrepaidPaymentSource: a,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: i,
        });
        return (
            0 !== d && null != u && null != c && null != m && p.push({ id: u.id, label: m, amount: d }),
            r && p.push({ id: "tax", label: x.intl.string(x.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: p, primaryLineItem: f, entitlementDiscount: g }
        );
    },
    E = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: l, subscriptionPlan: a, subscriptionTrial: r } = t,
            { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, o.SA)(e, a),
            {
                lineItems: c,
                primaryLineItem: m,
                entitlementDiscount: p,
            } = P(i, {
                overrideAmount: d.IJ.has(l) ? s : void 0,
                subscriptionPlan: a,
                subscriptionTrial: r,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: u,
            });
        return { lineItems: c, primaryLineItem: m, entitlementDiscount: p, hasAdjustmentLineItem: u.length > 0 };
    },
    j = (e, t) => {
        let { isCustomGift: n = !1, isPrepaidPaymentSource: l = !1, subscriptionPlan: a } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, u.Lw)(a, { isCustomGift: n, isPrepaidPaymentSource: l }),
                amount: e.total - e.tax,
            },
        ];
    },
    N = (e, t) => {
        let n = (0, o.NL)(e),
            l = (function (e, t) {
                if (null == e || null == t || e !== t.discountId) return null;
                let { discount: n } = t,
                    l = new Date(t.appliedAt?.getTime() ?? Date.now()),
                    a = "",
                    r = t.getFullIntervalCount();
                switch (n.userUsageLimitInterval) {
                    case v.Ff.DAY:
                        l.setDate(l.getDate() + r),
                            (a = x.intl.formatToPlainString(b.default.WzJTZI, { intervalCount: r }));
                        break;
                    case v.Ff.WEEK:
                        l.setDate(l.getDate() + 7 * r),
                            (a = x.intl.formatToPlainString(b.default.LHWoqL, { intervalCount: r }));
                        break;
                    case v.Ff.MONTH:
                        l.setMonth(l.getMonth() + r),
                            (a = x.intl.formatToPlainString(b.default.ZQLDzk, { intervalCount: r }));
                        break;
                    case v.Ff.YEAR:
                        l.setFullYear(l.getFullYear() + r),
                            (a = x.intl.formatToPlainString(b.default.KpnRtO, { intervalCount: r }));
                        break;
                    default:
                        return null;
                }
                return { discountEndDate: l, discountAppliedLabel: a, intervalCount: r };
            })(null != n ? n.discount_id : null, t),
            a = null != l && 1 === l.intervalCount,
            { subscriptionPlanPrice: r, subscriptionPlanId: i, amount: s } = e;
        return h(i)
            ? { amount: a ? r * e.quantity : s, matchedDiscountInfo: l }
            : { amount: s, matchedDiscountInfo: l };
    },
    R = (e, t, n) => {
        let l = e.invoiceItems.find((e) => e.subscriptionPlanId === t.id);
        if (null == l) return { renewalPrice: e.subtotal };
        let { amount: a, matchedDiscountInfo: r } = N(l, n);
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
    M = (e, t, n) => {
        let {
                invoiceIncludesPremiumBasePlan: l,
                isPremiumPlanInvoiceItem: a,
                intervalType: i,
                intervalCount: s,
                discountOffer: u,
                currency: c,
            } = n,
            { showGuildSubscriptionAdjustmentTooltip: d } = e,
            {
                label: m,
                subscriptionDiscount: p,
                originalAmount: v,
            } = (0, o.Ae)(e, { subscriptionTrial: t, currency: c }),
            h = d ? x.intl.format(x.t.UDop9c, {}) : void 0,
            y =
                a || null == p
                    ? null
                    : {
                          subText: (0, g.CE)((0, g.$g)(v, c), i, s),
                          subTextHasStrikethrough: !0,
                          valueIcon: l && (0, f.z4)(e.subscriptionPlanId) ? r.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: A, matchedDiscountInfo: I } = N(e, u),
            _ = null != I && I.intervalCount > 1,
            P =
                a && _
                    ? {
                          subText: x.intl.format(b.default.Chj1Ke, { discountEndDate: I.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: I, lineItem: { id: e.id, label: m, amount: A, tooltip: h, ...P, ...y } };
    },
    S = function (e, t, n) {
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
            s = (0, o.Q8)(t, e, { isSubscriptionUpdate: a }),
            { intervalType: c, intervalCount: d } = (0, f.Ge)(t),
            m = t.currency,
            p = [],
            g = s.some((e) => (0, f.xq)(e.subscriptionPlanId));
        for (let e of s) {
            let { subscriptionPlanId: t } = e,
                { lineItem: l } = M(e, n, {
                    invoiceIncludesPremiumBasePlan: g,
                    isPremiumPlanInvoiceItem: h(t),
                    intervalType: c,
                    intervalCount: d,
                    discountOffer: r,
                    currency: m,
                });
            p.push(l);
        }
        let y = (0, u.de)({
            overrideRenewalDate: l,
            currentInvoice: e,
            renewalInvoice: t,
            isSubscriptionUpdate: a,
            fractionalPremiumInfo: i,
        });
        return {
            lineItems: p,
            intervalType: c,
            intervalCount: d,
            currency: m,
            label: x.intl.string(b.default.GGn3pp),
            totalLineItemValueSubText: x.intl.string(b.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case v.WT.MONTH:
                            return x.intl.string(b.default.WrFWOV);
                        case v.WT.YEAR:
                            return x.intl.string(b.default.SxKq52);
                    }
                return x.intl.string(b.default.jxUJkZ);
            })(c, d),
            totalLineItemLabelSubText: x.intl.format(b.default.MR4VnX, { renewalDate: y }),
        };
    },
    L = (e, t) => {
        let n,
            l,
            r,
            {
                planId: u,
                disabled: o,
                userLocale: d,
                isEligibleForDiscount: h,
                discountInfo: y,
                priceOptions: A,
                isCurrentPlan: I,
                isGift: _,
                isEligibleForTrial: P,
                isEligibleForBOGOPromotion: T,
                showPlanStatusSubText: E,
                isInPlanSelectStep: j,
            } = t,
            N = m.A.get(u);
        a()(null != N, "Missing subscriptionPlan");
        let { discountOffer: R, discountAmountOff: M, applicablePlan: S } = y,
            L = (0, f.L_)({ planId: u, isGift: _, priceOptions: A, subscriptionPlan: N }),
            k = null != L && null == R,
            C = (0, f.y8)(u, !1, _, A),
            D = (0, c.gS)(e, N, {
                userLocale: d,
                isEligibleForBOGOPromotion: T,
                shouldShowSavingsPercent: k,
                isGift: _,
                planId: u,
                savingsPercent: L,
            }),
            U = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? x.intl.formatToPlainString(x.t.hXcaLT, {
                          price: (0, g.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, g.$g)(e.amount, e.currency);
            })(C, { isEligibleForTrial: P }),
            O = U,
            w = h && null != S && u === S ? M : null;
        null != R &&
            !P &&
            ((0, s.p2)(R)
                ? N.interval === v.WT.YEAR
                    ? (n = x.intl.format(b.default.ODKoJd, { percent: L ?? "" }))
                    : N.interval === v.WT.MONTH &&
                      (null != w && (O = x.intl.format(x.t.hXcaLT, { price: (0, g.$g)(C.amount - w, C.currency) })),
                      (n = x.intl.format(b.default.JsSin7, {
                          priceRate: (0, g.CE)(U, N.interval, N.intervalCount),
                          intervalCount: R.getFullIntervalCount(),
                      })))
                : (0, s.hm)(R) &&
                  N.interval === v.WT.YEAR &&
                  null != w &&
                  ((O = x.intl.format(x.t.hXcaLT, { price: (0, g.$g)(C.amount - w, C.currency) })),
                  (l = U),
                  (n = x.intl.format(x.t.VZ8Tvh, { regularPrice: U })),
                  (r = x.intl.formatToPlainString(b.default.nsG1jw, {
                      savingsText: (0, p.l9)(d, parseInt(R.discount.amount) / 100),
                  })))),
            E &&
                (j && P
                    ? (n = (0, c.O7)(N, C))
                    : I
                      ? (n = x.intl.string(x.t.ymSxhy))
                      : "string" == typeof D && (n = D));
        let G = ((e) => {
            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
            return t ?? n ?? l;
        })({
            promoTextOverride: r,
            overrideBadgeText: null != D && "object" == typeof D && "badge" === D.type ? D.text : null,
            defaultValue: (0, i.Nc)({
                subscriptionPlan: N,
                userLocale: d,
                discountOffer: R,
                yearlyPercentSavings: L,
                shouldHideYearlySavingsBadge: null != e || null != R,
            }),
        });
        return {
            id: u,
            planName: (0, i.YR)(N.interval, N.intervalCount, !0),
            priceText: O,
            subTextStrikethrough: l,
            secondarySubText: n,
            promoText: G,
            isDisabled: o,
            savingsPercent: L,
        };
    };
