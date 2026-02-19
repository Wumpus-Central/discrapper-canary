"use strict";
n.d(t, { Ay: () => v, O7: () => T, gS: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(854354),
    _ = n(93159),
    f = n(937008),
    p = n(97352),
    h = n(252424),
    m = n(927578),
    E = n(580630),
    g = n(788868),
    A = n(985018),
    I = n(371894);
let T = (e, t) => {
        let n = e.interval === g.WT.YEAR ? A.t.ECT4A5 : A.t.v9QeON;
        return A.intl.format(n, { price: (0, E.$g)(t.amount, t.currency) });
    },
    S = (e, t) => {
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
                  discountedPrice: (0, E.$g)(n.amount - s, n.currency),
                  regularPrice: (0, E.$g)(n.amount, n.currency),
              })
            : i
              ? T(e, n)
              : e.interval === g.WT.YEAR
                ? A.intl.formatToPlainString(A.t.rtLTJP, { percent: o ?? "" })
                : null;
    },
    y = (e, t, n) => {
        let {
                userLocale: r,
                isEligibleForBOGOPromotion: i,
                shouldShowDiscount: s,
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
                  : s && !u
                    ? null == l || i
                        ? null
                        : {
                              type: "badge",
                              textBadgeVariant: "eyebrow",
                              text: A.intl.format(A.t.IAybsG, { discount: (0, h.l9)(r, l / 100) }),
                          }
                    : null
              : null;
    };
function v(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: s,
            selectPlan: o,
            selected: h,
            priceOptions: T,
            isPrepaid: v,
            isCustomGift: N,
            shouldUseUnifiedCheckoutUI: C,
            shouldUseCalculatedDiscount: b,
            shouldShowUpdatedPaymentModal: R,
            discountOffer: O,
            discountAmountOff: D,
            isEligibleForDiscount: L,
            isEligibleForBOGOPromotion: w,
            isEligibleForTrial: x,
            isCurrentPlan: M,
            disabled: P,
        } = e,
        { isGift: k } = (0, f.Pv)(),
        U = (0, u.bG)([p.A], () => p.A.get(s));
    l()(null != U, "Missing subscriptionPlan");
    let G = (0, m.L_)({ planId: s, shouldUseCalculatedDiscount: b, isGift: k, priceOptions: T, subscriptionPlan: U }),
        F = (0, m.y8)(s, !1, k, T),
        V = null != G && !R,
        B = i.useCallback(() => {
            let e = y(n, U, {
                userLocale: t,
                isEligibleForBOGOPromotion: w,
                shouldShowDiscount: V,
                isGift: k,
                planId: s,
                savingsPercent: G,
            });
            return "string" == typeof e
                ? (0, r.jsxs)("span", { className: I.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, r.jsx)(c.Text, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: I.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, w, U, n, V, k, s, G]),
        H = (0, m.m6)(U.id),
        j = i.useMemo(
            () => (0, m.D8)(U.interval, k, v, U.intervalCount, N, H),
            [U.interval, U.intervalCount, k, v, N, H],
        ),
        Y = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(I.Gl, { [I.h4]: h || N, [I.ox]: R && (h || N) }),
                        children: [j, N && B()],
                    }),
                    N &&
                        (0, r.jsx)("div", {
                            className: I._R,
                            children: A.intl.format(A.t.ori2Jm, { currencyAmount: (0, E.$g)(F.amount, F.currency) }),
                        }),
                ],
            }),
        W = () =>
            L && null != D && U.interval === g.WT.MONTH
                ? (0, E.$g)(F.amount - D, F.currency)
                : x
                  ? (0, E.$g)(0, F.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                  : (0, E.$g)(F.amount, F.currency),
        K = () => {
            P || o(s);
        },
        z = R ? A.intl.format(A.t.hXcaLT, { price: W() }) : (0, E.$g)(F.amount, F.currency);
    if (C) {
        let e = (0, d.Nc)({ subscriptionPlan: U, userLocale: t, discountOffer: O, yearlyPercentSavings: G });
        return (0, r.jsx)(_.ZA, {
            id: s,
            title: null,
            titleDescriber: (0, d.YR)(U.interval, U.intervalCount),
            primaryText: (0, E.$g)(F.amount, F.currency),
            subtext: null != e ? (0, r.jsx)(_.Lo, { price: e }) : null,
            isDisabled: P,
        });
    }
    return (0, r.jsxs)(c.DUT, {
        role: N ? "menuitem" : "radio",
        "aria-checked": h,
        tabIndex: h ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: K,
        className: a()(I.G_, { [I.vW]: N && h, [I.Gb]: N }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(I.XM, { [I.PA]: P }),
                children: [
                    (0, r.jsxs)("div", {
                        className: I.l,
                        children: [
                            !N &&
                                (0, r.jsx)("div", {
                                    className: I.E2,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: h,
                                        value: h,
                                        label: "",
                                        description: "",
                                        onChange: K,
                                    }),
                                }),
                            Y(),
                            M &&
                                (0, r.jsxs)("span", {
                                    className: I.bq,
                                    children: ["(", A.intl.string(A.t.ymSxhy), ")"],
                                }),
                            !N && B(),
                        ],
                    }),
                    R
                        ? (0, r.jsx)("div", { className: a()({ [I.kb]: h }), children: z })
                        : (0, r.jsx)("div", { className: a()({ [I.h4]: h || N }), children: z }),
                ],
            }),
            R &&
                (0, r.jsx)("div", {
                    className: I.hB,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: h ? "text-default" : "interactive-text-default",
                        className: a()(I.Ub, { [I.sw]: L || x }),
                        children: S(U, {
                            price: F,
                            isEligibleForDiscount: L,
                            isEligibleForTrial: x,
                            discountAmountOff: D,
                            discountOffer: O,
                            savingsPercent: G,
                        }),
                    }),
                }),
        ],
    });
}
