n.d(t, { Z: () => S });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    l = n(442837),
    c = n(481060),
    u = n(987209),
    d = n(706454),
    f = n(509545),
    p = n(669079),
    _ = n(930153),
    m = n(74538),
    h = n(937615),
    g = n(367074),
    E = n(621651),
    b = n(622909),
    y = n(474936),
    O = n(388032),
    v = n(399377);
function S(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selectPlan: i,
            selected: a,
            priceOptions: S,
            shouldShowUpdatedPaymentModal: I,
            isEligibleForDiscount: T,
            discountAmountOff: C,
            isEligibleForTrial: A,
        } = e,
        N = (0, l.e7)([d.default], () => d.default.locale),
        P = (0, l.e7)([f.Z], () => f.Z.get(n)),
        { isGift: R, giftRecipient: w } = (0, u.wD)(),
        D = R && (0, p.pO)(w);
    s()(null != P, "Missing subscriptionPlan");
    let x = null != t && t.planId === n,
        L =
            x ||
            (n === y.Xh.PREMIUM_MONTH_TIER_2 &&
                null != t &&
                [y.Xh.PREMIUM_YEAR_TIER_0, y.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        j = y.nH[n],
        { enabled: M } = E.Z.getCurrentConfig({ location: "PremiumSwitchPlanSelectOption" }, { autoTrackExposure: !1 });
    M && (j = (0, m.UV)(P, R, S));
    let k = (0, m.aS)(n, !1, R, S),
        U = (0, m.Ap)(S.paymentSourceId),
        G = null != j && !I,
        Z = (0, b.N)(),
        F = (0, g.Vi)(),
        B = P.interval === y.rV.YEAR ? O.t.ECT4A5 : O.t.v9QeON,
        V = () =>
            F && !R && n === y.Xh.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(c.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: v.planOptionDiscount,
                      children: O.intl.string(O.t.iQTfWx),
                  })
                : null,
        H = () =>
            null != j &&
            !F &&
            (0, r.jsx)(c.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: v.planOptionDiscount,
                children: O.intl.format(O.t.IAybsG, { discount: (0, _.T3)(N, j / 100) }),
            }),
        Y = () =>
            F
                ? V()
                : (P.interval === y.rV.YEAR && null != t) || (G && !x)
                  ? P.interval === y.rV.YEAR && null != t
                      ? (0, r.jsxs)("span", {
                            className: v.planOptionMonthsFree,
                            children: ["(", O.intl.string(O.t["122kWB"]), ")"],
                        })
                      : G && !x
                        ? H()
                        : void 0
                  : null,
        W = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: o()(v.planOptionInterval, {
                            [v.optionSelected]: a || D,
                            [v.updatedOptionSelected]: I && (a || D),
                        }),
                        children: [(0, m.L7)(P.interval, R, U, P.intervalCount, D, (0, m.Rd)(P.id)), D && Y()],
                    }),
                    D &&
                        (0, r.jsx)("div", {
                            className: v.planOneTimeCost,
                            children: O.intl.format(O.t.ori2Jm, { currencyAmount: (0, h.T4)(k.amount, k.currency) }),
                        }),
                ],
            }),
        K = () =>
            T && null != C && P.interval === y.rV.MONTH
                ? (0, h.T4)(k.amount - C, k.currency)
                : A
                  ? (0, h.T4)(0, k.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, h.T4)(k.amount, k.currency),
        z = () => {
            if (T && null != C && P.interval === y.rV.MONTH) {
                var e;
                return O.intl.format(O.t["VeE/4E"], {
                    numMonths: null != (e = null == Z ? void 0 : Z.discount.user_usage_limit) ? e : y.rt,
                    discountedPrice: (0, h.T4)(k.amount - C, k.currency),
                    regularPrice: (0, h.T4)(k.amount, k.currency),
                });
            }
            return A
                ? O.intl.format(B, { price: (0, h.T4)(k.amount, k.currency) })
                : P.interval === y.rV.YEAR
                  ? O.intl.formatToPlainString(O.t.rtLTJP, { percent: j })
                  : null;
        };
    return (0, r.jsxs)(c.P3F, {
        role: D ? "menuitem" : "radio",
        "aria-checked": a,
        tabIndex: a ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0,
            },
        },
        onClick: L ? void 0 : () => i(n),
        className: o()(v.planOptionClickableContainer, {
            [v.selectedPlan]: D && a,
            [v.selectionBox]: D,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: o()(v.planOption, { [v.planOptionDisabled]: L }),
                children: [
                    (0, r.jsxs)("div", {
                        className: v.planOptionClickable,
                        children: [
                            !D &&
                                (0, r.jsx)("div", {
                                    className: v.planOptionCheckbox,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: a,
                                        value: a,
                                        label: "",
                                        description: "",
                                    }),
                                }),
                            W(),
                            x &&
                                (0, r.jsxs)("span", {
                                    className: v.planOptionCurrentPlan,
                                    children: ["(", O.intl.string(O.t.ymSxhy), ")"],
                                }),
                            !D && Y(),
                        ],
                    }),
                    I
                        ? (0, r.jsx)("div", {
                              className: o()({ [v.optionPriceSelected]: a }),
                              children: O.intl.format(O.t.hXcaLT, { price: K() }),
                          })
                        : (0, r.jsx)("div", {
                              className: o()({ [v.optionSelected]: a || D }),
                              children: (0, h.T4)(k.amount, k.currency),
                          }),
                ],
            }),
            I &&
                (0, r.jsx)("div", {
                    className: v.planOptionSubtextContainer,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: a ? "text-default" : "interactive-text-default",
                        className: o()(v.planOptionSubtext, { [v.discountPlanOptionSubtext]: T }),
                        children: z(),
                    }),
                }),
        ],
    });
}
