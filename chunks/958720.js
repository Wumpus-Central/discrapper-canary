"use strict";
n.d(t, { A: () => S, g: () => T });
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
let T = (e, t, n) => {
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
function S(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: s,
            selectPlan: o,
            selected: h,
            priceOptions: S,
            isPrepaid: y,
            isCustomGift: v,
            shouldUseUnifiedCheckoutUI: N,
            shouldUseCalculatedDiscount: C,
            shouldShowUpdatedPaymentModal: b,
            discountOffer: R,
            discountAmountOff: O,
            isEligibleForDiscount: D,
            isEligibleForBOGOPromotion: L,
            isEligibleForTrial: w,
            isCurrentPlan: x,
            disabled: M,
        } = e,
        { isGift: P } = (0, f.Pv)(),
        k = (0, u.bG)([p.A], () => p.A.get(s));
    l()(null != k, "Missing subscriptionPlan");
    let U = (0, m.L_)({ planId: s, shouldUseCalculatedDiscount: C, isGift: P, priceOptions: S, subscriptionPlan: k }),
        G = (0, m.y8)(s, !1, P, S),
        F = null != U && !b,
        V = k.interval === g.WT.YEAR ? A.t.ECT4A5 : A.t.v9QeON,
        B = i.useCallback(() => {
            let e = T(n, k, {
                userLocale: t,
                isEligibleForBOGOPromotion: L,
                shouldShowDiscount: F,
                isGift: P,
                planId: s,
                savingsPercent: U,
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
        }, [t, L, k, n, F, P, s, U]),
        H = (0, m.m6)(k.id),
        j = i.useMemo(
            () => (0, m.D8)(k.interval, P, y, k.intervalCount, v, H),
            [k.interval, k.intervalCount, P, y, v, H],
        ),
        Y = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(I.Gl, { [I.h4]: h || v, [I.ox]: b && (h || v) }),
                        children: [j, v && B()],
                    }),
                    v &&
                        (0, r.jsx)("div", {
                            className: I._R,
                            children: A.intl.format(A.t.ori2Jm, { currencyAmount: (0, E.$g)(G.amount, G.currency) }),
                        }),
                ],
            }),
        W = () =>
            D && null != O && k.interval === g.WT.MONTH
                ? (0, E.$g)(G.amount - O, G.currency)
                : w
                  ? (0, E.$g)(0, G.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                  : (0, E.$g)(G.amount, G.currency),
        K = () =>
            D && null != O && k.interval === g.WT.MONTH
                ? A.intl.format(A.t["VeE/4E"], {
                      numMonths: R?.discount.user_usage_limit ?? g.OJ,
                      discountedPrice: (0, E.$g)(G.amount - O, G.currency),
                      regularPrice: (0, E.$g)(G.amount, G.currency),
                  })
                : w
                  ? A.intl.format(V, { price: (0, E.$g)(G.amount, G.currency) })
                  : k.interval === g.WT.YEAR
                    ? A.intl.formatToPlainString(A.t.rtLTJP, { percent: U ?? "" })
                    : null,
        z = () => {
            M || o(s);
        },
        $ = b ? A.intl.format(A.t.hXcaLT, { price: W() }) : (0, E.$g)(G.amount, G.currency);
    if (N) {
        let e = (0, d.Nc)({ subscriptionPlan: k, userLocale: t, discountOffer: R, yearlyPercentSavings: U });
        return (0, r.jsx)(_.ZA, {
            id: s,
            title: null,
            titleDescriber: (0, d.YR)(k.interval, k.intervalCount),
            primaryText: (0, E.$g)(G.amount, G.currency),
            subtext: null != e ? (0, r.jsx)(_.Lo, { price: e }) : null,
            isDisabled: M,
        });
    }
    return (0, r.jsxs)(c.DUT, {
        role: v ? "menuitem" : "radio",
        "aria-checked": h,
        tabIndex: h ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: z,
        className: a()(I.G_, { [I.vW]: v && h, [I.Gb]: v }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(I.XM, { [I.PA]: M }),
                children: [
                    (0, r.jsxs)("div", {
                        className: I.l,
                        children: [
                            !v &&
                                (0, r.jsx)("div", {
                                    className: I.E2,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: h,
                                        value: h,
                                        label: "",
                                        description: "",
                                        onChange: z,
                                    }),
                                }),
                            Y(),
                            x &&
                                (0, r.jsxs)("span", {
                                    className: I.bq,
                                    children: ["(", A.intl.string(A.t.ymSxhy), ")"],
                                }),
                            !v && B(),
                        ],
                    }),
                    b
                        ? (0, r.jsx)("div", { className: a()({ [I.kb]: h }), children: $ })
                        : (0, r.jsx)("div", { className: a()({ [I.h4]: h || v }), children: $ }),
                ],
            }),
            b &&
                (0, r.jsx)("div", {
                    className: I.hB,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: h ? "text-default" : "interactive-text-default",
                        className: a()(I.Ub, { [I.sw]: D || w }),
                        children: K(),
                    }),
                }),
        ],
    });
}
