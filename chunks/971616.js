n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(987209),
    d = n(509545),
    f = n(930153),
    p = n(74538),
    _ = n(937615),
    m = n(474936),
    h = n(388032),
    g = n(815610);
function E(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: i,
            selectPlan: o,
            selected: E,
            priceOptions: b,
            isPrepaid: y,
            isCustomGift: O,
            shouldUseCalculatedDiscount: v,
            shouldShowUpdatedPaymentModal: S,
            discountOffer: I,
            discountAmountOff: T,
            isEligibleForDiscount: C,
            isEligibleForBOGOPromotion: A,
            isEligibleForTrial: N,
        } = e,
        { isGift: P } = (0, u.wD)(),
        R = (0, l.e7)([d.Z], () => d.Z.get(i));
    s()(null != R, "Missing subscriptionPlan");
    let w = null != n && n.planId === i,
        D =
            w ||
            (i === m.Xh.PREMIUM_MONTH_TIER_2 &&
                null != n &&
                [m.Xh.PREMIUM_YEAR_TIER_0, m.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        x = m.nH[i];
    v && (x = (0, p.UV)(R, P, b));
    let L = (0, p.aS)(i, !1, P, b),
        j = null != x && !S,
        M = R.interval === m.rV.YEAR ? h.t.ECT4A5 : h.t.v9QeON,
        k = () =>
            A && !P && i === m.Xh.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(c.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: g.planOptionDiscount,
                      children: h.intl.string(h.t.iQTfWx),
                  })
                : null,
        U = () =>
            null != x &&
            !A &&
            (0, r.jsx)(c.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: g.planOptionDiscount,
                children: h.intl.format(h.t.IAybsG, { discount: (0, f.T3)(t, x / 100) }),
            }),
        G = () =>
            A
                ? k()
                : (R.interval === m.rV.YEAR && null != n) || (j && !w)
                  ? R.interval === m.rV.YEAR && null != n
                      ? (0, r.jsxs)("span", {
                            className: g.planOptionMonthsFree,
                            children: ["(", h.intl.string(h.t["122kWB"]), ")"],
                        })
                      : j && !w
                        ? U()
                        : void 0
                  : null,
        Z = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(g.planOptionInterval, {
                            [g.optionSelected]: E || O,
                            [g.updatedOptionSelected]: S && (E || O),
                        }),
                        children: [(0, p.L7)(R.interval, P, y, R.intervalCount, O, (0, p.Rd)(R.id)), O && G()],
                    }),
                    O &&
                        (0, r.jsx)("div", {
                            className: g.planOneTimeCost,
                            children: h.intl.format(h.t.ori2Jm, { currencyAmount: (0, _.T4)(L.amount, L.currency) }),
                        }),
                ],
            }),
        F = () =>
            C && null != T && R.interval === m.rV.MONTH
                ? (0, _.T4)(L.amount - T, L.currency)
                : N
                  ? (0, _.T4)(0, L.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, _.T4)(L.amount, L.currency),
        B = () => {
            if (C && null != T && R.interval === m.rV.MONTH) {
                var e;
                return h.intl.format(h.t["VeE/4E"], {
                    numMonths: null != (e = null == I ? void 0 : I.discount.user_usage_limit) ? e : m.rt,
                    discountedPrice: (0, _.T4)(L.amount - T, L.currency),
                    regularPrice: (0, _.T4)(L.amount, L.currency),
                });
            }
            return N
                ? h.intl.format(M, { price: (0, _.T4)(L.amount, L.currency) })
                : R.interval === m.rV.YEAR
                  ? h.intl.formatToPlainString(h.t.rtLTJP, { percent: x })
                  : null;
        };
    return (0, r.jsxs)(c.P3F, {
        role: O ? "menuitem" : "radio",
        "aria-checked": E,
        tabIndex: E ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0,
            },
        },
        onClick: D ? void 0 : () => o(i),
        className: a()(g.planOptionClickableContainer, {
            [g.selectedPlan]: O && E,
            [g.selectionBox]: O,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(g.planOption, { [g.planOptionDisabled]: D }),
                children: [
                    (0, r.jsxs)("div", {
                        className: g.planOptionClickable,
                        children: [
                            !O &&
                                (0, r.jsx)("div", {
                                    className: g.planOptionCheckbox,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: E,
                                        value: E,
                                        label: "",
                                        description: "",
                                    }),
                                }),
                            Z(),
                            w &&
                                (0, r.jsxs)("span", {
                                    className: g.planOptionCurrentPlan,
                                    children: ["(", h.intl.string(h.t.ymSxhy), ")"],
                                }),
                            !O && G(),
                        ],
                    }),
                    S
                        ? (0, r.jsx)("div", {
                              className: a()({ [g.optionPriceSelected]: E }),
                              children: h.intl.format(h.t.hXcaLT, { price: F() }),
                          })
                        : (0, r.jsx)("div", {
                              className: a()({ [g.optionSelected]: E || O }),
                              children: (0, _.T4)(L.amount, L.currency),
                          }),
                ],
            }),
            S &&
                (0, r.jsx)("div", {
                    className: g.planOptionSubtextContainer,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: E ? "text-default" : "interactive-text-default",
                        className: a()(g.planOptionSubtext, { [g.discountPlanOptionSubtext]: C }),
                        children: B(),
                    }),
                }),
        ],
    });
}
