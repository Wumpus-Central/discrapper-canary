n.d(t, { Ay: () => b, O7: () => _, gS: () => N });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(17928),
    c = n(834730),
    d = n(939249),
    m = n(150934),
    p = n(206441),
    C = n(951305),
    h = n(773669),
    f = n(97352),
    E = n(45938),
    S = n(252424),
    y = n(158045),
    I = n(580630),
    g = n(725018),
    A = n(186223),
    P = n(202541),
    v = n(375708),
    x = n(781248);
function _(e, t) {
    let n = e.interval === P.WT.YEAR ? v.t.ECT4A5 : v.t.v9QeON;
    return v.intl.format(n, { price: (0, I.$g)(t.amount, t.currency) });
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
            priceOptions: u,
            isEligibleForTrial: c,
        } = n,
        d = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== P.gD.PREMIUM_MONTH_TIER_2 ? null : T(v.intl.string(v.t.iQTfWx));
    if (null != t && (t.interval !== P.WT.YEAR || null == e) && !(r && !d)) return null;
    if (
        null != t &&
        !d &&
        (0, A.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: c ?? !1 })
    ) {
        let e = (0, A.vK)(t, a, u);
        return null != e ? T(e) : null;
    }
    return null != t && t.interval === P.WT.YEAR && null != e
        ? v.intl.string(v.t["122kWB"])
        : r && !d && null != o
          ? T(v.intl.format(v.t.IAybsG, { discount: (0, S.l9)(l, o / 100) }))
          : null;
}
function b(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: S,
            shouldShowTrialOrDiscountLayout: A,
            isEligibleForDiscount: T,
            isEligibleForTrial: b,
            isCurrentPlan: j,
            disabled: R,
        } = e,
        M = (0, u.bG)([h.default], () => h.default.locale),
        {
            discountInfo: O,
            setSelectedPlanId: L,
            isGift: k,
        } = (0, p.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: w } = (0, C.Pv)(),
        U = k && (0, E.Ik)(w),
        { discountOffer: D, discountAmountOff: G, applicablePlan: F } = O,
        B = (0, u.bG)([f.A], () => f.A.get(n));
    o()(null != B, "Missing subscriptionPlan");
    let H = (0, y.m6)(B.id),
        W = (0, g.cg)(),
        Y = (0, y.L_)({ planId: n, isGift: k, priceOptions: s, subscriptionPlan: B }),
        V = (0, y.y8)(n, !1, k, s),
        K = null != Y && !A,
        Z = i.useCallback(() => {
            let e = N(t, B, {
                userLocale: M,
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
                    (0, l.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: x.kP,
                        children: e.text,
                    }))
                  : null;
        }, [M, W, B, t, K, k, n, Y, s, b]),
        q = i.useMemo(
            () => (0, y.D8)(B.interval, k, S, B.intervalCount, U, H),
            [B.interval, B.intervalCount, k, S, U, H],
        ),
        z = null != F && n === F;
    function Q() {
        R || r || L(n);
    }
    let $ = A
        ? v.intl.format(v.t.hXcaLT, {
              price:
                  T && null != G && z
                      ? (0, I.$g)(V.amount - G, V.currency)
                      : b
                        ? (0, I.$g)(0, V.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, I.$g)(V.amount, V.currency),
          })
        : (0, I.$g)(V.amount, V.currency);
    return (0, l.jsxs)(d.D, {
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: Q,
        className: a()(x.G_, { [x.vW]: U && r, [x.Gb]: U }),
        children: [
            (0, l.jsxs)("div", {
                className: a()(x.XM, { [x.PA]: R }),
                children: [
                    (0, l.jsxs)("div", {
                        className: x.l,
                        children: [
                            !U &&
                                (0, l.jsx)("div", {
                                    className: x.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: r,
                                        value: r,
                                        label: "",
                                        description: "",
                                        onChange: Q,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: a()(x.Gl, { [x.h4]: r || U, [x.ox]: A && (r || U) }),
                                        children: [q, U && Z()],
                                    }),
                                    U &&
                                        (0, l.jsx)("div", {
                                            className: x._R,
                                            children: v.intl.format(v.t.ori2Jm, {
                                                currencyAmount: (0, I.$g)(V.amount, V.currency),
                                            }),
                                        }),
                                ],
                            }),
                            j &&
                                (0, l.jsxs)("span", {
                                    className: x.bq,
                                    children: ["(", v.intl.string(v.t.ymSxhy), ")"],
                                }),
                            !U && Z(),
                        ],
                    }),
                    A
                        ? (0, l.jsx)("div", { className: a()({ [x.kb]: r }), children: $ })
                        : (0, l.jsx)("div", { className: a()({ [x.h4]: r || U }), children: $ }),
                ],
            }),
            A &&
                (0, l.jsx)("div", {
                    className: x.hB,
                    children: (0, l.jsx)(c.E, {
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
                                          regularPrice: (0, I.$g)(n.amount, n.currency),
                                      })
                                    : v.intl.format(v.t["VeE/4E"], {
                                          numMonths: a?.discount.intervalCount ?? P.OJ,
                                          discountedPrice: (0, I.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, I.$g)(n.amount, n.currency),
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
                            discountOffer: D,
                            isDiscountApplicableToPlan: z,
                            savingsPercent: Y,
                        }),
                    }),
                }),
        ],
    });
}
