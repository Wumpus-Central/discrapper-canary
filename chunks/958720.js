"use strict";
n.d(t, { A: () => v, R: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(397927),
    d = n(854354),
    _ = n(93159),
    f = n(937008),
    h = n(97352),
    p = n(252424),
    g = n(927578),
    E = n(580630),
    A = n(788868),
    I = n(985018),
    T = n(371894);
let y = (e) => {
        let { planId: t, shouldUseCalculatedDiscount: n, isGift: r, priceOptions: i, subscriptionPlan: a } = e,
            s = A.XE[t];
        return n && (s = (0, g.k8)(a, r, i)), s;
    },
    S = (e) => {
        let {
                planId: t,
                disabled: n,
                userLocale: r,
                discountOffer: i,
                priceOptions: a,
                shouldUseCalculatedDiscount: s,
                isGift: o,
            } = e,
            u = h.A.get(t);
        l()(null != u, "Missing subscriptionPlan");
        let c = y({ planId: t, shouldUseCalculatedDiscount: s, isGift: o, priceOptions: a, subscriptionPlan: u }),
            _ = (0, g.y8)(t, !1, o, a),
            f = (0, d.Nc)({ subscriptionPlan: u, userLocale: r, discountOffer: i, yearlyPercentSavings: c });
        return {
            id: t,
            planName: (0, d.YR)(u.interval, u.intervalCount, !0),
            priceText: (0, E.$g)(_.amount, _.currency),
            promoText: f,
            isDisabled: n,
        };
    };
function v(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: a,
            selectPlan: o,
            selected: S,
            priceOptions: v,
            isPrepaid: C,
            isCustomGift: b,
            shouldUseUnifiedCheckoutUI: N,
            shouldUseCalculatedDiscount: R,
            shouldShowUpdatedPaymentModal: O,
            discountOffer: D,
            discountAmountOff: L,
            isEligibleForDiscount: w,
            isEligibleForBOGOPromotion: x,
            isEligibleForTrial: P,
            isCurrentPlan: M,
            disabled: k,
        } = e,
        { isGift: U } = (0, f.Pv)(),
        G = (0, u.bG)([h.A], () => h.A.get(a));
    l()(null != G, "Missing subscriptionPlan");
    let F = y({ planId: a, shouldUseCalculatedDiscount: R, isGift: U, priceOptions: v, subscriptionPlan: G }),
        V = (0, g.y8)(a, !1, U, v),
        B = null != F && !O,
        j = G.interval === A.WT.YEAR ? I.t.ECT4A5 : I.t.v9QeON,
        H = () =>
            x && !U && a === A.gD.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(c.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: T.kP,
                      children: I.intl.string(I.t.iQTfWx),
                  })
                : null,
        Y = () =>
            null != F &&
            !x &&
            (0, r.jsx)(c.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: T.kP,
                children: I.intl.format(I.t.IAybsG, { discount: (0, p.l9)(t, F / 100) }),
            }),
        W = () =>
            x
                ? H()
                : (G.interval === A.WT.YEAR && null != n) || (B && !M)
                  ? G.interval === A.WT.YEAR && null != n
                      ? (0, r.jsxs)("span", { className: T.IS, children: ["(", I.intl.string(I.t["122kWB"]), ")"] })
                      : B && !M
                        ? Y()
                        : void 0
                  : null,
        K = (0, g.m6)(G.id),
        $ = i.useMemo(
            () => (0, g.D8)(G.interval, U, C, G.intervalCount, b, K),
            [G.interval, G.intervalCount, U, C, b, K],
        ),
        z = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(T.Gl, { [T.h4]: S || b, [T.ox]: O && (S || b) }),
                        children: [$, b && W()],
                    }),
                    b &&
                        (0, r.jsx)("div", {
                            className: T._R,
                            children: I.intl.format(I.t.ori2Jm, { currencyAmount: (0, E.$g)(V.amount, V.currency) }),
                        }),
                ],
            }),
        q = () =>
            w && null != L && G.interval === A.WT.MONTH
                ? (0, E.$g)(V.amount - L, V.currency)
                : P
                  ? (0, E.$g)(0, V.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                  : (0, E.$g)(V.amount, V.currency),
        X = () =>
            w && null != L && G.interval === A.WT.MONTH
                ? I.intl.format(I.t["VeE/4E"], {
                      numMonths: D?.discount.user_usage_limit ?? A.OJ,
                      discountedPrice: (0, E.$g)(V.amount - L, V.currency),
                      regularPrice: (0, E.$g)(V.amount, V.currency),
                  })
                : P
                  ? I.intl.format(j, { price: (0, E.$g)(V.amount, V.currency) })
                  : G.interval === A.WT.YEAR
                    ? I.intl.formatToPlainString(I.t.rtLTJP, { percent: F ?? "" })
                    : null,
        Z = () => {
            k || o(a);
        },
        Q = O ? I.intl.format(I.t.hXcaLT, { price: q() }) : (0, E.$g)(V.amount, V.currency);
    if (N) {
        let e = (0, d.Nc)({ subscriptionPlan: G, userLocale: t, discountOffer: D, yearlyPercentSavings: F });
        return (0, r.jsx)(_.ZA, {
            id: a,
            title: null,
            titleDescriber: (0, d.YR)(G.interval, G.intervalCount),
            primaryText: (0, E.$g)(V.amount, V.currency),
            subtext: null != e ? (0, r.jsx)(_.Lo, { price: e }) : null,
            isDisabled: k,
        });
    }
    return (0, r.jsxs)(c.DUT, {
        role: b ? "menuitem" : "radio",
        "aria-checked": S,
        tabIndex: S ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: Z,
        className: s()(T.G_, { [T.vW]: b && S, [T.Gb]: b }),
        children: [
            (0, r.jsxs)("div", {
                className: s()(T.XM, { [T.PA]: k }),
                children: [
                    (0, r.jsxs)("div", {
                        className: T.l,
                        children: [
                            !b &&
                                (0, r.jsx)("div", {
                                    className: T.E2,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: S,
                                        value: S,
                                        label: "",
                                        description: "",
                                        onChange: Z,
                                    }),
                                }),
                            z(),
                            M &&
                                (0, r.jsxs)("span", {
                                    className: T.bq,
                                    children: ["(", I.intl.string(I.t.ymSxhy), ")"],
                                }),
                            !b && W(),
                        ],
                    }),
                    O
                        ? (0, r.jsx)("div", { className: s()({ [T.kb]: S }), children: Q })
                        : (0, r.jsx)("div", { className: s()({ [T.h4]: S || b }), children: Q }),
                ],
            }),
            O &&
                (0, r.jsx)("div", {
                    className: T.hB,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: S ? "text-default" : "interactive-text-default",
                        className: s()(T.Ub, { [T.sw]: w || P }),
                        children: X(),
                    }),
                }),
        ],
    });
}
