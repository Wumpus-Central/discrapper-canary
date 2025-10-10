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
        w = (0, l.e7)([p.Z], () => p.Z.get(n)),
        { isGift: D, giftRecipient: L } = (0, f.wD)(),
        x = D && (0, h.pO)(L);
    s()(null != w, "Missing subscriptionPlan");
    let M = null != t && t.planId === n,
        j =
            M ||
            (n === v.Xh.PREMIUM_MONTH_TIER_2 &&
                null != t &&
                [v.Xh.PREMIUM_YEAR_TIER_0, v.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        k = v.nH[n],
        { enabled: U } = y.Z.getCurrentConfig({ location: "PremiumSwitchPlanSelectOption" }, { autoTrackExposure: !1 });
    U && (k = (0, g.UV)(w, D, S));
    let G = (0, g.aS)(n, !1, D, S),
        B = (0, g.Ap)(S.paymentSourceId),
        Z = null != k && !A,
        F = (0, O.Ng)(),
        V = (0, b.Vi)(),
        H = w.interval === v.rV.YEAR ? I.t.ECT4Aw : I.t.v9QeOD,
        Y = () =>
            V && !D && n === v.Xh.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(d.Text, {
                      tag: "span",
                      variant: "eyebrow",
                      color: "always-white",
                      className: T.planOptionDiscount,
                      children: I.intl.string(I.t.iQTfW1),
                  })
                : null,
        W = () =>
            null != k &&
            !V &&
            (0, r.jsx)(d.Text, {
                tag: "span",
                variant: "eyebrow",
                color: "always-white",
                className: T.planOptionDiscount,
                children: I.intl.format(I.t.IAybsL, { discount: (0, m.T3)(P, k / 100) }),
            }),
        K = () =>
            V
                ? Y()
                : (w.interval === v.rV.YEAR && null != t) || (Z && !M)
                  ? w.interval === v.rV.YEAR && null != t
                      ? (0, r.jsxs)("span", {
                            className: T.planOptionMonthsFree,
                            children: ["(", I.intl.string(I.t["122kWF"]), ")"],
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
                        children: [(0, g.L7)(w.interval, D, B, w.intervalCount, x, (0, g.Rd)(w.id)), x && K()],
                    }),
                    x &&
                        (0, r.jsx)("div", {
                            className: T.planOneTimeCost,
                            children: I.intl.format(I.t.ori2Ji, { currencyAmount: (0, E.T4)(G.amount, G.currency) }),
                        }),
                ],
            }),
        q = () =>
            C && null != N && w.interval === v.rV.MONTH
                ? (0, E.T4)(G.amount - N, G.currency)
                : R
                  ? (0, E.T4)(0, G.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })
                  : (0, E.T4)(G.amount, G.currency),
        X = () => {
            if (C && null != N && w.interval === v.rV.MONTH) {
                var e;
                return I.intl.format(I.t["VeE/4O"], {
                    numMonths: null != (e = null == F ? void 0 : F.discount.user_usage_limit) ? e : v.rt,
                    discountedPrice: (0, E.T4)(G.amount - N, G.currency),
                    regularPrice: (0, E.T4)(G.amount, G.currency),
                });
            }
            return R
                ? I.intl.format(H, { price: (0, E.T4)(G.amount, G.currency) })
                : w.interval === v.rV.YEAR
                  ? I.intl.formatToPlainString(I.t.rtLTJC, { percent: k })
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
        onClick: j ? void 0 : () => i(n),
        className: a()(T.planOptionClickableContainer, {
            [T.selectedPlan]: x && o,
            [T.selectionBox]: x,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: a()(T.planOption, { [T.planOptionDisabled]: j }),
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
                                    children: ["(", I.intl.string(I.t.ymSxh4), ")"],
                                }),
                            !x && K(),
                        ],
                    }),
                    A
                        ? (0, r.jsx)("div", {
                              className: a()({ [T.optionPriceSelected]: o }),
                              children: I.intl.format(I.t.hXcaLS, { price: q() }),
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
