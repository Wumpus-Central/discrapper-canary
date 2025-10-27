n.d(t, { Z: () => S });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(692547),
    u = n(755721),
    d = n(481060),
    f = n(987209),
    _ = n(706454),
    p = n(509545),
    h = n(669079),
    m = n(930153),
    g = n(74538),
    E = n(937615),
    b = n(367074),
    y = n(621651),
    O = n(104494),
    v = n(474936),
    I = n(388032),
    T = n(399377);
function S(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selectPlan: i,
            selected: o,
            priceOptions: S,
            shouldShowUpdatedPaymentModal: A,
            isEligibleForDiscount: C,
            discountAmountOff: N,
            isEligibleForTrial: R,
        } = e,
        P = (0, l.e7)([_.default], () => _.default.locale),
        D = (0, l.e7)([p.Z], () => p.Z.get(n)),
        { isGift: w, giftRecipient: L } = (0, f.wD)(),
        x = w && (0, h.pO)(L);
    s()(null != D, "Missing subscriptionPlan");
    let M = null != t && t.planId === n,
        k =
            M ||
            (n === v.Xh.PREMIUM_MONTH_TIER_2 &&
                null != t &&
                [v.Xh.PREMIUM_YEAR_TIER_0, v.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        j = v.nH[n],
        { enabled: U } = y.Z.getCurrentConfig({ location: "PremiumSwitchPlanSelectOption" }, { autoTrackExposure: !1 });
    U && (j = (0, g.UV)(D, w, S));
    let G = (0, g.aS)(n, !1, w, S),
        B = (0, g.Ap)(S.paymentSourceId),
        Z = null != j && !A,
        F = (0, O.Ng)(),
        V = (0, b.Vi)(),
        H = D.interval === v.rV.YEAR ? I.t.ECT4A5 : I.t.v9QeON,
        Y = () =>
            V && !w && n === v.Xh.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(d.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: T.planOptionDiscount,
                      children: I.intl.string(I.t.iQTfWx),
                  })
                : null,
        W = () =>
            null != j &&
            !V &&
            (0, r.jsx)(d.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: T.planOptionDiscount,
                children: I.intl.format(I.t.IAybsG, { discount: (0, m.T3)(P, j / 100) }),
            }),
        K = () =>
            V
                ? Y()
                : (D.interval === v.rV.YEAR && null != t) || (Z && !M)
                  ? D.interval === v.rV.YEAR && null != t
                      ? (0, r.jsxs)("span", {
                            className: T.planOptionMonthsFree,
                            children: ["(", I.intl.string(I.t["122kWB"]), ")"],
                        })
                      : Z && !M
                        ? W()
                        : void 0
                  : null,
        z = () =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(T.planOptionInterval, {
                            [T.optionSelected]: o || x,
                            [T.updatedOptionSelected]: A && (o || x),
                        }),
                        children: [(0, g.L7)(D.interval, w, B, D.intervalCount, x, (0, g.Rd)(D.id)), x && K()],
                    }),
                    x &&
                        (0, r.jsx)("div", {
                            className: T.planOneTimeCost,
                            children: I.intl.format(I.t.ori2Jm, { currencyAmount: (0, E.T4)(G.amount, G.currency) }),
                        }),
                ],
            }),
        q = () =>
            C && null != N && D.interval === v.rV.MONTH
                ? (0, E.T4)(G.amount - N, G.currency)
                : R
                  ? (0, E.T4)(0, G.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, E.T4)(G.amount, G.currency),
        X = () => {
            if (C && null != N && D.interval === v.rV.MONTH) {
                var e;
                return I.intl.format(I.t["VeE/4E"], {
                    numMonths: null != (e = null == F ? void 0 : F.discount.user_usage_limit) ? e : v.rt,
                    discountedPrice: (0, E.T4)(G.amount - N, G.currency),
                    regularPrice: (0, E.T4)(G.amount, G.currency),
                });
            }
            return R
                ? I.intl.format(H, { price: (0, E.T4)(G.amount, G.currency) })
                : D.interval === v.rV.YEAR
                  ? I.intl.formatToPlainString(I.t.rtLTJP, { percent: j })
                  : null;
        };
    return (0, r.jsxs)(d.P3F, {
        role: x ? "menuitem" : "radio",
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
        onClick: k ? void 0 : () => i(n),
        className: a()(T.planOptionClickableContainer, {
            [T.selectedPlan]: x && o,
            [T.selectionBox]: x,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(T.planOption, { [T.planOptionDisabled]: k }),
                children: [
                    (0, r.jsxs)("div", {
                        className: T.planOptionClickable,
                        children: [
                            !x &&
                                (0, r.jsx)(u.$q, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: o,
                                    shape: u.zV.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.M0.INVERTED,
                                    className: T.planOptionCheckbox,
                                }),
                            z(),
                            M &&
                                (0, r.jsxs)("span", {
                                    className: T.planOptionCurrentPlan,
                                    children: ["(", I.intl.string(I.t.ymSxhy), ")"],
                                }),
                            !x && K(),
                        ],
                    }),
                    A
                        ? (0, r.jsx)("div", {
                              className: a()({ [T.optionPriceSelected]: o }),
                              children: I.intl.format(I.t.hXcaLT, { price: q() }),
                          })
                        : (0, r.jsx)("div", {
                              className: a()({ [T.optionSelected]: o || x }),
                              children: (0, E.T4)(G.amount, G.currency),
                          }),
                ],
            }),
            A &&
                (0, r.jsx)("div", {
                    className: T.planOptionSubtextContainer,
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-md/normal",
                        color: o ? "text-default" : "interactive-normal",
                        className: a()(T.planOptionSubtext, { [T.discountPlanOptionSubtext]: C }),
                        children: X(),
                    }),
                }),
        ],
    });
}
