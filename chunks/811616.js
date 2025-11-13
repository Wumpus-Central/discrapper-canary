n.d(t, { Z: () => I });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(987209),
    d = n(706454),
    f = n(509545),
    _ = n(669079),
    p = n(930153),
    h = n(74538),
    m = n(937615),
    g = n(367074),
    E = n(621651),
    b = n(622909),
    y = n(474936),
    O = n(388032),
    v = n(399377);
function I(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selectPlan: i,
            selected: o,
            priceOptions: I,
            shouldShowUpdatedPaymentModal: T,
            isEligibleForDiscount: S,
            discountAmountOff: A,
            isEligibleForTrial: C,
        } = e,
        N = (0, l.e7)([d.default], () => d.default.locale),
        R = (0, l.e7)([f.Z], () => f.Z.get(n)),
        { isGift: P, giftRecipient: D } = (0, u.wD)(),
        w = P && (0, _.pO)(D);
    s()(null != R, "Missing subscriptionPlan");
    let x = null != t && t.planId === n,
        L =
            x ||
            (n === y.Xh.PREMIUM_MONTH_TIER_2 &&
                null != t &&
                [y.Xh.PREMIUM_YEAR_TIER_0, y.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        M = y.nH[n],
        { enabled: j } = E.Z.getCurrentConfig({ location: "PremiumSwitchPlanSelectOption" }, { autoTrackExposure: !1 });
    j && (M = (0, h.UV)(R, P, I));
    let k = (0, h.aS)(n, !1, P, I),
        U = (0, h.Ap)(I.paymentSourceId),
        G = null != M && !T,
        B = (0, b.N)(),
        Z = (0, g.Vi)(),
        F = R.interval === y.rV.YEAR ? O.t.ECT4A5 : O.t.v9QeON,
        V = () =>
            Z && !P && n === y.Xh.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(c.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: v.planOptionDiscount,
                      children: O.intl.string(O.t.iQTfWx),
                  })
                : null,
        H = () =>
            null != M &&
            !Z &&
            (0, r.jsx)(c.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: v.planOptionDiscount,
                children: O.intl.format(O.t.IAybsG, { discount: (0, p.T3)(N, M / 100) }),
            }),
        Y = () =>
            Z
                ? V()
                : (R.interval === y.rV.YEAR && null != t) || (G && !x)
                  ? R.interval === y.rV.YEAR && null != t
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
                        className: a()(v.planOptionInterval, {
                            [v.optionSelected]: o || w,
                            [v.updatedOptionSelected]: T && (o || w),
                        }),
                        children: [(0, h.L7)(R.interval, P, U, R.intervalCount, w, (0, h.Rd)(R.id)), w && Y()],
                    }),
                    w &&
                        (0, r.jsx)("div", {
                            className: v.planOneTimeCost,
                            children: O.intl.format(O.t.ori2Jm, { currencyAmount: (0, m.T4)(k.amount, k.currency) }),
                        }),
                ],
            }),
        K = () =>
            S && null != A && R.interval === y.rV.MONTH
                ? (0, m.T4)(k.amount - A, k.currency)
                : C
                  ? (0, m.T4)(0, k.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, m.T4)(k.amount, k.currency),
        z = () => {
            if (S && null != A && R.interval === y.rV.MONTH) {
                var e;
                return O.intl.format(O.t["VeE/4E"], {
                    numMonths: null != (e = null == B ? void 0 : B.discount.user_usage_limit) ? e : y.rt,
                    discountedPrice: (0, m.T4)(k.amount - A, k.currency),
                    regularPrice: (0, m.T4)(k.amount, k.currency),
                });
            }
            return C
                ? O.intl.format(F, { price: (0, m.T4)(k.amount, k.currency) })
                : R.interval === y.rV.YEAR
                  ? O.intl.formatToPlainString(O.t.rtLTJP, { percent: M })
                  : null;
        };
    return (0, r.jsxs)(c.P3F, {
        role: w ? "menuitem" : "radio",
        "aria-checked": o,
        tabIndex: o ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0,
            },
        },
        onClick: L ? void 0 : () => i(n),
        className: a()(v.planOptionClickableContainer, {
            [v.selectedPlan]: w && o,
            [v.selectionBox]: w,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(v.planOption, { [v.planOptionDisabled]: L }),
                children: [
                    (0, r.jsxs)("div", {
                        className: v.planOptionClickable,
                        children: [
                            !w &&
                                (0, r.jsx)("div", {
                                    className: v.planOptionCheckbox,
                                    children: (0, r.jsx)(c.Checkbox, {
                                        checked: o,
                                        value: o,
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
                            !w && Y(),
                        ],
                    }),
                    T
                        ? (0, r.jsx)("div", {
                              className: a()({ [v.optionPriceSelected]: o }),
                              children: O.intl.format(O.t.hXcaLT, { price: K() }),
                          })
                        : (0, r.jsx)("div", {
                              className: a()({ [v.optionSelected]: o || w }),
                              children: (0, m.T4)(k.amount, k.currency),
                          }),
                ],
            }),
            T &&
                (0, r.jsx)("div", {
                    className: v.planOptionSubtextContainer,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: o ? "text-default" : "interactive-normal",
                        className: a()(v.planOptionSubtext, { [v.discountPlanOptionSubtext]: S }),
                        children: z(),
                    }),
                }),
        ],
    });
}
