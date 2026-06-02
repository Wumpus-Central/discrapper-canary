n.d(t, {
    EA: () => j,
    Gj: () => R,
    IY: () => _,
    Ig: () => P,
    Re: () => N,
    Rs: () => M,
    fk: () => E,
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
    x = n(788868),
    v = n(375708),
    b = n(327105);
let h = (e) => (0, f.xq)(e) || (0, f.Zb)(e),
    y = function (e) {
        let { includeNowSuffix: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeNowSuffix: !1 };
        return t
            ? v.intl.format(b.default.U2CmMW, {
                  priceAmount: (0, g.$g)(0, e, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
              })
            : (0, g.$g)(0, e);
    },
    A = (e, t, n) => ({ id: e.discount_id ?? t, label: n, amount: -e.amount, lineItemType: "discount" }),
    I = (e) => {
        let { interval: t } = e,
            n = (0, f.m6)(e.id);
        switch (t) {
            case x.WT.MONTH:
                let l = v.intl.string(b.default.ZnoRKt);
                return n === x.PremiumTypes.TIER_0
                    ? v.intl.formatToPlainString(b.default.Z9mu9q, { timeInterval: l })
                    : v.intl.formatToPlainString(b.default["8Jt4Dw"], { timeInterval: l });
            case x.WT.YEAR:
                let a = v.intl.string(b.default.Xrg8aC);
                return n === x.PremiumTypes.TIER_0
                    ? v.intl.formatToPlainString(b.default.Z9mu9q, { timeInterval: a })
                    : v.intl.formatToPlainString(b.default["8Jt4Dw"], { timeInterval: a });
            case x.WT.DAY:
                let r = v.intl.string(b.default.WmjxYl);
                return n === x.PremiumTypes.TIER_0
                    ? v.intl.formatToPlainString(b.default.Z9mu9q, { timeInterval: r })
                    : v.intl.formatToPlainString(b.default["8Jt4Dw"], { timeInterval: r });
        }
    },
    j = (e) => {
        let { id: t, label: n, amount: l, subscriptionDiscount: a, entitlementDiscount: r, currency: i } = e,
            s = [{ id: t, label: n, amount: l }];
        return (
            null != a && s.push(A(a, "subscription-discount", v.intl.string(b.default["9yHcmL"]))),
            { hasSubscriptionCredit: null != r, lineItems: s, currency: i }
        );
    },
    T = (e, t) => {
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
            x = { id: e.id, label: c, amount: g ? m : d, lineItemType: "main" },
            h = [
                x,
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
            null == p || u || h.push(A(p, "subscription-discount", v.intl.string(b.default["9yHcmL"]))),
            { lineItems: h, primaryLineItem: x, entitlementDiscount: f }
        );
    },
    P = (e, t) => {
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
        } = T(s, {
            subscriptionPlan: l,
            subscriptionTrial: n,
            isPrepaidPaymentSource: a,
            currency: e.currency,
            invoiceAdjustmentDisplayItems: [],
            excludeDiscountsAndAdjustments: i,
        });
        return (
            0 !== d && null != u && null != c && null != m && p.push({ id: u.id, label: m, amount: d }),
            r && p.push({ id: "tax", label: v.intl.string(v.t.jiRvC7), amount: e.tax, lineItemType: "tax" }),
            { lineItems: p, primaryLineItem: f, entitlementDiscount: g }
        );
    },
    _ = (e, t) => {
        let { isPrepaidPaymentSource: n = !1, invoiceSummaryType: l, subscriptionPlan: a, subscriptionTrial: r } = t,
            { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, o.SA)(e, a),
            {
                lineItems: c,
                primaryLineItem: m,
                entitlementDiscount: p,
            } = T(i, {
                overrideAmount: d.IJ.has(l) ? s : void 0,
                subscriptionPlan: a,
                subscriptionTrial: r,
                isPrepaidPaymentSource: n,
                currency: e.currency,
                invoiceAdjustmentDisplayItems: u,
            });
        return { lineItems: c, primaryLineItem: m, entitlementDiscount: p, hasAdjustmentLineItem: u.length > 0 };
    },
    E = (e, t) => {
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
                    case x.Ff.DAY:
                        l.setDate(l.getDate() + r),
                            (a = v.intl.formatToPlainString(b.default.WzJTZI, { intervalCount: r }));
                        break;
                    case x.Ff.WEEK:
                        l.setDate(l.getDate() + 7 * r),
                            (a = v.intl.formatToPlainString(b.default.LHWoqL, { intervalCount: r }));
                        break;
                    case x.Ff.MONTH:
                        l.setMonth(l.getMonth() + r),
                            (a = v.intl.formatToPlainString(b.default.ZQLDzk, { intervalCount: r }));
                        break;
                    case x.Ff.YEAR:
                        l.setFullYear(l.getFullYear() + r),
                            (a = v.intl.formatToPlainString(b.default.KpnRtO, { intervalCount: r }));
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
    S = (e, t, n) => {
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
                originalAmount: x,
            } = (0, o.Ae)(e, { subscriptionTrial: t, currency: c }),
            h = d ? v.intl.format(v.t.UDop9c, {}) : void 0,
            y =
                a || null == p
                    ? null
                    : {
                          subText: (0, g.CE)((0, g.$g)(x, c), i, s),
                          subTextHasStrikethrough: !0,
                          valueIcon: l && (0, f.z4)(e.subscriptionPlanId) ? r.t : void 0,
                          color: "text-feedback-positive",
                          valueColor: "text-feedback-positive",
                      },
            { amount: A, matchedDiscountInfo: I } = N(e, u),
            j = null != I && I.intervalCount > 1,
            T =
                a && j
                    ? {
                          subText: v.intl.format(b.default.Chj1Ke, { discountEndDate: I.discountEndDate }),
                          subTextColor: "text-feedback-positive",
                      }
                    : null;
        return { matchedDiscountInfo: I, lineItem: { id: e.id, label: m, amount: A, tooltip: h, ...T, ...y } };
    },
    R = function (e, t, n) {
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
                { lineItem: l } = S(e, n, {
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
            label: v.intl.string(b.default.GGn3pp),
            totalLineItemValueSubText: v.intl.string(b.default.yvUaHi),
            totalLineItemLabel: ((e, t) => {
                if (1 === t)
                    switch (e) {
                        case x.WT.MONTH:
                            return v.intl.string(b.default.WrFWOV);
                        case x.WT.YEAR:
                            return v.intl.string(b.default.SxKq52);
                    }
                return v.intl.string(b.default.jxUJkZ);
            })(c, d),
            totalLineItemLabelSubText: v.intl.format(b.default.MR4VnX, { renewalDate: y }),
        };
    },
    M = (e, t) => {
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
                isGift: j,
                isEligibleForTrial: T,
                isEligibleForBOGOPromotion: P,
                showPlanStatusSubText: _,
                isInPlanSelectStep: E,
            } = t,
            N = m.A.get(u);
        a()(null != N, "Missing subscriptionPlan");
        let { discountOffer: S, discountAmountOff: R, applicablePlan: M } = y,
            L = (0, f.L_)({ planId: u, isGift: j, priceOptions: A, subscriptionPlan: N }),
            k = null != L && null == S,
            C = (0, f.y8)(u, !1, j, A),
            D = (0, c.gS)(e, N, {
                userLocale: d,
                isEligibleForBOGOPromotion: P,
                shouldShowSavingsPercent: k,
                isGift: j,
                planId: u,
                savingsPercent: L,
            }),
            U = ((e, t) => {
                let { isEligibleForTrial: n } = t;
                return n
                    ? v.intl.formatToPlainString(v.t.hXcaLT, {
                          price: (0, g.$g)(0, e.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                      })
                    : (0, g.$g)(e.amount, e.currency);
            })(C, { isEligibleForTrial: T }),
            O = U,
            w = h && null != M && u === M ? R : null;
        null != S &&
            !T &&
            ((0, s.p2)(S)
                ? N.interval === x.WT.YEAR
                    ? (n = v.intl.format(b.default.ODKoJd, { percent: L ?? "" }))
                    : N.interval === x.WT.MONTH &&
                      (null != w && (O = v.intl.format(v.t.hXcaLT, { price: (0, g.$g)(C.amount - w, C.currency) })),
                      (n = v.intl.format(b.default.JsSin7, {
                          priceRate: (0, g.CE)(U, N.interval, N.intervalCount),
                          intervalCount: S.getFullIntervalCount(),
                      })))
                : (0, s.hm)(S) &&
                  N.interval === x.WT.YEAR &&
                  null != w &&
                  ((O = v.intl.format(v.t.hXcaLT, { price: (0, g.$g)(C.amount - w, C.currency) })),
                  (l = U),
                  (n = v.intl.format(v.t.VZ8Tvh, { regularPrice: U })),
                  (r = v.intl.formatToPlainString(b.default.nsG1jw, {
                      savingsText: (0, p.l9)(d, parseInt(S.discount.amount) / 100),
                  })))),
            _ &&
                (E && T
                    ? (n = (0, c.O7)(N, C))
                    : I
                      ? (n = v.intl.string(v.t.ymSxhy))
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
                discountOffer: S,
                yearlyPercentSavings: L,
                shouldHideYearlySavingsBadge: null != e || null != S,
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
