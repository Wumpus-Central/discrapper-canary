"use strict";
n.d(t, { A: () => T });
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
    p = n(97352),
    h = n(252424),
    m = n(927578),
    g = n(580630),
    E = n(788868),
    A = n(985018),
    I = n(371894);
function T(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: a,
            selectPlan: o,
            selected: T,
            priceOptions: y,
            isPrepaid: S,
            isCustomGift: v,
            shouldUseUnifiedCheckoutUI: C,
            shouldUseCalculatedDiscount: b,
            shouldShowUpdatedPaymentModal: N,
            discountOffer: R,
            discountAmountOff: O,
            isEligibleForDiscount: D,
            isEligibleForBOGOPromotion: L,
            isEligibleForTrial: w,
            isCurrentPlan: x,
            disabled: P,
        } = e,
        { isGift: M } = (0, f.Pv)(),
        k = (0, u.bG)([p.A], () => p.A.get(a));
    l()(null != k, "Missing subscriptionPlan");
    let U = E.XE[a];
    b && (U = (0, m.k8)(k, M, y));
    let G = (0, m.y8)(a, !1, M, y),
        V = null != U && !N,
        F = k.interval === E.WT.YEAR ? A.t.ECT4A5 : A.t.v9QeON,
        B = () =>
            L && !M && a === E.gD.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(c.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: I.kP,
                      children: A.intl.string(A.t.iQTfWx),
                  })
                : null,
        j = () =>
            null != U &&
            !L &&
            (0, r.jsx)(c.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: I.kP,
                children: A.intl.format(A.t.IAybsG, { discount: (0, h.l9)(t, U / 100) }),
            }),
        H = () =>
            L
                ? B()
                : (k.interval === E.WT.YEAR && null != n) || (V && !x)
                  ? k.interval === E.WT.YEAR && null != n
                      ? (0, r.jsxs)("span", { className: I.IS, children: ["(", A.intl.string(A.t["122kWB"]), ")"] })
                      : V && !x
                        ? j()
                        : void 0
                  : null,
        Y = (0, m.m6)(k.id),
        W = i.useMemo(
            () => (0, m.D8)(k.interval, M, S, k.intervalCount, v, Y),
            [k.interval, k.intervalCount, M, S, v, Y],
        ),
        K = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(I.Gl, { [I.h4]: T || v, [I.ox]: N && (T || v) }),
                        children: [W, v && H()],
                    }),
                    v &&
                        (0, r.jsx)("div", {
                            className: I._R,
                            children: A.intl.format(A.t.ori2Jm, { currencyAmount: (0, g.$g)(G.amount, G.currency) }),
                        }),
                ],
            }),
        z = () =>
            D && null != O && k.interval === E.WT.MONTH
                ? (0, g.$g)(G.amount - O, G.currency)
                : w
                  ? (0, g.$g)(0, G.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                  : (0, g.$g)(G.amount, G.currency),
        $ = () =>
            D && null != O && k.interval === E.WT.MONTH
                ? A.intl.format(A.t["VeE/4E"], {
                      numMonths: R?.discount.user_usage_limit ?? E.OJ,
                      discountedPrice: (0, g.$g)(G.amount - O, G.currency),
                      regularPrice: (0, g.$g)(G.amount, G.currency),
                  })
                : w
                  ? A.intl.format(F, { price: (0, g.$g)(G.amount, G.currency) })
                  : k.interval === E.WT.YEAR
                    ? A.intl.formatToPlainString(A.t.rtLTJP, { percent: U ?? "" })
                    : null,
        q = () => {
            P || o(a);
        },
        Z = N ? A.intl.format(A.t.hXcaLT, { price: z() }) : (0, g.$g)(G.amount, G.currency);
    if (C) {
        let e = (0, d.Cq)({ subscriptionPlan: k, userLocale: t, discountOffer: R, yearlyPercentSavings: U });
        return (0, r.jsx)(_.ZA, {
            id: a,
            title: null,
            titleDescriber: (0, d.YR)(k.interval, k.intervalCount),
            primaryText: (0, g.$g)(G.amount, G.currency),
            subtext: null != e ? (0, r.jsx)(_.Lo, { price: e }) : null,
            isDisabled: P,
        });
    }
    return (0, r.jsxs)(c.DUT, {
        role: v ? "menuitem" : "radio",
        "aria-checked": T,
        tabIndex: T ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: q,
        className: s()(I.G_, { [I.vW]: v && T, [I.Gb]: v }),
        children: [
            (0, r.jsxs)("div", {
                className: s()(I.XM, { [I.PA]: P }),
                children: [
                    (0, r.jsxs)("div", {
                        className: I.l,
                        children: [
                            !v &&
                                (0, r.jsx)("div", {
                                    className: I.E2,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: T,
                                        value: T,
                                        label: "",
                                        description: "",
                                        onChange: q,
                                    }),
                                }),
                            K(),
                            x &&
                                (0, r.jsxs)("span", {
                                    className: I.bq,
                                    children: ["(", A.intl.string(A.t.ymSxhy), ")"],
                                }),
                            !v && H(),
                        ],
                    }),
                    N
                        ? (0, r.jsx)("div", { className: s()({ [I.kb]: T }), children: Z })
                        : (0, r.jsx)("div", { className: s()({ [I.h4]: T || v }), children: Z }),
                ],
            }),
            N &&
                (0, r.jsx)("div", {
                    className: I.hB,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: T ? "text-default" : "interactive-text-default",
                        className: s()(I.Ub, { [I.sw]: D || w }),
                        children: $(),
                    }),
                }),
        ],
    });
}
