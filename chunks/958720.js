n.d(t, { Ay: () => b, O7: () => _, gS: () => N });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(118751),
    c = n(17928),
    d = n(834730),
    p = n(939249),
    m = n(150934),
    h = n(263532),
    C = n(951305),
    f = n(773669),
    S = n(97352),
    E = n(45938),
    y = n(158045),
    A = n(580630),
    I = n(35587),
    g = n(186223),
    P = n(202541),
    v = n(375708),
    x = n(781248);
function _(e, t) {
    let n = e.interval === P.WT.YEAR ? v.t.ECT4A5 : v.t.v9QeON;
    return v.intl.format(n, { price: (0, A.$g)(t.amount, t.currency) });
}
function T(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function N(e, t, n) {
    let {
            userLocale: l,
            isEligibleForBOGOPromotion: i,
            shouldShowSavingsPercent: r,
            isGift: a,
            planId: s,
            savingsPercent: o,
            priceOptions: c,
            isEligibleForTrial: d,
        } = n,
        p = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== P.gD.PREMIUM_MONTH_TIER_2 ? null : T(v.intl.string(v.t.iQTfWx));
    if (null != t && (t.interval !== P.WT.YEAR || null == e) && !(r && !p)) return null;
    if (
        null != t &&
        !p &&
        (0, g.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: d ?? !1 })
    ) {
        let e = (0, g.vK)(t, a, c);
        return null != e ? T(e) : null;
    }
    return null != t && t.interval === P.WT.YEAR && null != e
        ? v.intl.string(v.t["122kWB"])
        : r && !p && null != o
          ? T(v.intl.format(v.t.IAybsG, { discount: (0, u.l9)(l, o / 100) }))
          : null;
}
function b(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: u,
            shouldShowTrialOrDiscountLayout: g,
            isEligibleForDiscount: T,
            isEligibleForTrial: b,
            isCurrentPlan: j,
            disabled: R,
        } = e,
        O = (0, c.bG)([f.default], () => f.default.locale),
        {
            discountInfo: M,
            setSelectedPlanId: L,
            isGift: k,
        } = (0, h.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: w } = (0, C.Pv)(),
        D = k && (0, E.Ik)(w),
        { discountOffer: U, discountAmountOff: G, applicablePlan: F } = M,
        B = (0, c.bG)([S.A], () => S.A.get(n));
    o()(null != B, "Missing subscriptionPlan");
    let H = (0, y.m6)(B.id),
        W = (0, I.Sq)(),
        Y = (0, y.L_)({ planId: n, isGift: k, priceOptions: s, subscriptionPlan: B }),
        V = (0, y.y8)(n, !1, k, s),
        K = null != Y && !g,
        q = i.useCallback(() => {
            let e = N(t, B, {
                userLocale: O,
                isEligibleForBOGOPromotion: W,
                shouldShowSavingsPercent: K,
                isGift: k,
                planId: n,
                savingsPercent: Y,
                priceOptions: s,
                isEligibleForTrial: b,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: x.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(d.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: x.kP,
                        children: e.text,
                    }))
                  : null;
        }, [O, W, B, t, K, k, n, Y, s, b]),
        Z = i.useMemo(
            () => (0, y.D8)(B.interval, k, u, B.intervalCount, D, H),
            [B.interval, B.intervalCount, k, u, D, H],
        ),
        z = null != F && n === F;
    function $() {
        R || r || L(n, { shouldUpdateQuantity: !1 });
    }
    let Q = g
        ? v.intl.format(v.t.hXcaLT, {
              price:
                  T && null != G && z
                      ? (0, A.$g)(V.amount - G, V.currency)
                      : b
                        ? (0, A.$g)(0, V.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, A.$g)(V.amount, V.currency),
          })
        : (0, A.$g)(V.amount, V.currency);
    return (0, l.jsxs)(p.D, {
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: $,
        className: a()(x.G_, { [x.vW]: D && r, [x.Gb]: D }),
        children: [
            (0, l.jsxs)("div", {
                className: a()(x.XM, { [x.PA]: R }),
                children: [
                    (0, l.jsxs)("div", {
                        className: x.l,
                        children: [
                            !D &&
                                (0, l.jsx)("div", {
                                    className: x.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: r,
                                        value: r,
                                        label: "",
                                        description: "",
                                        onChange: $,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: a()(x.Gl, { [x.h4]: r || D, [x.ox]: g && (r || D) }),
                                        children: [Z, D && q()],
                                    }),
                                    D &&
                                        (0, l.jsx)("div", {
                                            className: x._R,
                                            children: v.intl.format(v.t.ori2Jm, {
                                                currencyAmount: (0, A.$g)(V.amount, V.currency),
                                            }),
                                        }),
                                ],
                            }),
                            j &&
                                (0, l.jsxs)("span", {
                                    className: x.bq,
                                    children: ["(", v.intl.string(v.t.ymSxhy), ")"],
                                }),
                            !D && q(),
                        ],
                    }),
                    g
                        ? (0, l.jsx)("div", { className: a()({ [x.kb]: r }), children: Q })
                        : (0, l.jsx)("div", { className: a()({ [x.h4]: r || D }), children: Q }),
                ],
            }),
            g &&
                (0, l.jsx)("div", {
                    className: x.hB,
                    children: (0, l.jsx)(d.E, {
                        variant: "text-md/normal",
                        color: r ? "text-default" : "interactive-text-default",
                        className: a()(x.Ub, { [x.sw]: T || b }),
                        children: (function (e, t) {
                            let {
                                price: n,
                                isEligibleForDiscount: l,
                                isEligibleForTrial: i,
                                discountAmountOff: r,
                                discountOffer: a,
                                isDiscountApplicableToPlan: s,
                                savingsPercent: o,
                            } = t;
                            return l && null != r && s
                                ? e.interval === P.WT.YEAR
                                    ? v.intl.format(v.t["EQmTl+"], {
                                          numYears: a?.discount.intervalCount ?? P.OJ,
                                          regularPrice: (0, A.$g)(n.amount, n.currency),
                                      })
                                    : v.intl.format(v.t["VeE/4E"], {
                                          numMonths: a?.discount.intervalCount ?? P.OJ,
                                          discountedPrice: (0, A.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, A.$g)(n.amount, n.currency),
                                      })
                                : i
                                  ? _(e, n)
                                  : e.interval === P.WT.YEAR
                                    ? v.intl.formatToPlainString(v.t.rtLTJP, { percent: o ?? "" })
                                    : null;
                        })(B, {
                            price: V,
                            isEligibleForDiscount: T,
                            isEligibleForTrial: b,
                            discountAmountOff: G,
                            discountOffer: U,
                            isDiscountApplicableToPlan: z,
                            savingsPercent: Y,
                        }),
                    }),
                }),
        ],
    });
}
