"use strict";
n.d(t, { Ay: () => y, O7: () => T, gS: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(834730),
    d = n(939249),
    _ = n(150934),
    f = n(937008),
    p = n(97352),
    h = n(252424),
    E = n(927578),
    m = n(580630),
    g = n(788868),
    A = n(985018),
    I = n(672305);
let T = (e, t) => {
        let n = e.interval === g.WT.YEAR ? A.t.ECT4A5 : A.t.v9QeON;
        return A.intl.format(n, { price: (0, m.$g)(t.amount, t.currency) });
    },
    S = (e, t, n) => {
        let {
                userLocale: r,
                isEligibleForBOGOPromotion: i,
                shouldShowSavingsPercent: s,
                isGift: a,
                planId: o,
                savingsPercent: l,
            } = n,
            u = null != e && (e.planId === o || (null != t && e.planId === t.id));
        return i
            ? a || o !== g.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: A.intl.string(A.t.iQTfWx) }
            : null == t || (t.interval === g.WT.YEAR && null != e) || (s && !u)
              ? null != t && t.interval === g.WT.YEAR && null != e
                  ? A.intl.string(A.t["122kWB"])
                  : s && !u && null != l
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: A.intl.format(A.t.IAybsG, { discount: (0, h.l9)(r, l / 100) }),
                      }
                    : null
              : null;
    };
function y(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: s,
            selectPlan: o,
            selected: h,
            priceOptions: y,
            isPrepaid: N,
            isCustomGift: v,
            shouldUseCalculatedDiscount: C,
            shouldShowUpdatedPaymentModal: O,
            discountOffer: R,
            discountAmountOff: b,
            isEligibleForDiscount: D,
            isEligibleForBOGOPromotion: L,
            isEligibleForTrial: w,
            isCurrentPlan: M,
            disabled: P,
        } = e,
        { isGift: x } = (0, f.Pv)(),
        k = (0, u.bG)([p.A], () => p.A.get(s));
    l()(null != k, "Missing subscriptionPlan");
    let U = (0, E.L_)({ planId: s, shouldUseCalculatedDiscount: C, isGift: x, priceOptions: y, subscriptionPlan: k }),
        G = (0, E.y8)(s, !1, x, y),
        F = null != U && !O,
        V = i.useCallback(() => {
            let e = S(n, k, {
                userLocale: t,
                isEligibleForBOGOPromotion: L,
                shouldShowSavingsPercent: F,
                isGift: x,
                planId: s,
                savingsPercent: U,
            });
            return "string" == typeof e
                ? (0, r.jsxs)("span", { className: I.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, r.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: I.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, L, k, n, F, x, s, U]),
        B = (0, E.m6)(k.id),
        H = i.useMemo(
            () => (0, E.D8)(k.interval, x, N, k.intervalCount, v, B),
            [k.interval, k.intervalCount, x, N, v, B],
        ),
        j = () => {
            P || o(s);
        },
        Y = O
            ? A.intl.format(A.t.hXcaLT, {
                  price:
                      D && null != b && k.interval === g.WT.MONTH
                          ? (0, m.$g)(G.amount - b, G.currency)
                          : w
                            ? (0, m.$g)(0, G.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, m.$g)(G.amount, G.currency),
              })
            : (0, m.$g)(G.amount, G.currency);
    return (0, r.jsxs)(d.D, {
        role: v ? "menuitem" : "radio",
        "aria-checked": h,
        tabIndex: v || h ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: j,
        className: a()(I.G_, { [I.vW]: v && h, [I.Gb]: v }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(I.XM, { [I.PA]: P }),
                children: [
                    (0, r.jsxs)("div", {
                        className: I.l,
                        children: [
                            !v &&
                                (0, r.jsx)("div", {
                                    className: I.E2,
                                    children: (0, r.jsx)(_.S, {
                                        checked: h,
                                        value: h,
                                        label: "",
                                        description: "",
                                        onChange: j,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: a()(I.Gl, { [I.h4]: h || v, [I.ox]: O && (h || v) }),
                                        children: [H, v && V()],
                                    }),
                                    v &&
                                        (0, r.jsx)("div", {
                                            className: I._R,
                                            children: A.intl.format(A.t.ori2Jm, {
                                                currencyAmount: (0, m.$g)(G.amount, G.currency),
                                            }),
                                        }),
                                ],
                            }),
                            M &&
                                (0, r.jsxs)("span", {
                                    className: I.bq,
                                    children: ["(", A.intl.string(A.t.ymSxhy), ")"],
                                }),
                            !v && V(),
                        ],
                    }),
                    O
                        ? (0, r.jsx)("div", { className: a()({ [I.kb]: h }), children: Y })
                        : (0, r.jsx)("div", { className: a()({ [I.h4]: h || v }), children: Y }),
                ],
            }),
            O &&
                (0, r.jsx)("div", {
                    className: I.hB,
                    children: (0, r.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: h ? "text-default" : "interactive-text-default",
                        className: a()(I.Ub, { [I.sw]: D || w }),
                        children: ((e, t) => {
                            let {
                                price: n,
                                isEligibleForDiscount: r,
                                isEligibleForTrial: i,
                                discountAmountOff: s,
                                discountOffer: a,
                                savingsPercent: o,
                            } = t;
                            return r && null != s && e.interval === g.WT.MONTH
                                ? A.intl.format(A.t["VeE/4E"], {
                                      numMonths: a?.discount.user_usage_limit ?? g.OJ,
                                      discountedPrice: (0, m.$g)(n.amount - s, n.currency),
                                      regularPrice: (0, m.$g)(n.amount, n.currency),
                                  })
                                : i
                                  ? T(e, n)
                                  : e.interval === g.WT.YEAR
                                    ? A.intl.formatToPlainString(A.t.rtLTJP, { percent: o ?? "" })
                                    : null;
                        })(k, {
                            price: G,
                            isEligibleForDiscount: D,
                            isEligibleForTrial: w,
                            discountAmountOff: b,
                            discountOffer: R,
                            savingsPercent: U,
                        }),
                    }),
                }),
        ],
    });
}
