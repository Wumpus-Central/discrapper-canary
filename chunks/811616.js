n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(987209),
    f = n(706454),
    _ = n(509545),
    p = n(669079),
    h = n(930153),
    m = n(74538),
    g = n(937615),
    E = n(367074),
    b = n(104494),
    y = n(474936),
    O = n(388032),
    v = n(106981);
function I(e) {
    let { premiumSubscription: t, planId: n, selectPlan: i, selected: o, priceOptions: I, shouldShowUpdatedPaymentModal: T, isEligibleForDiscount: S, discountAmountOff: A, isEligibleForTrial: N } = e,
        C = (0, l.e7)([f.default], () => f.default.locale),
        R = (0, l.e7)([_.Z], () => _.Z.get(n)),
        { isGift: P, giftRecipient: w } = (0, d.wD)(),
        D = P && (0, p.pO)(w);
    s()(null != R, 'Missing subscriptionPlan');
    let L = null != t && t.planId === n,
        x = L || (n === y.Xh.PREMIUM_MONTH_TIER_2 && null != t && [y.Xh.PREMIUM_YEAR_TIER_0, y.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        k = y.nH[n],
        M = (0, m.aS)(n, !1, P, I),
        j = (0, m.Ap)(I.paymentSourceId),
        U = null != k && !T,
        G = (0, b.Ng)(),
        B = (0, E.Vi)(),
        V = R.interval === y.rV.YEAR ? O.t.ECT4Aw : O.t.v9QeOD,
        F = () =>
            B && !P && n === y.Xh.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(u.Text, {
                      tag: 'span',
                      variant: 'eyebrow',
                      color: 'always-white',
                      className: v.planOptionDiscount,
                      children: O.intl.string(O.t.iQTfW1)
                  })
                : null,
        Z = () =>
            null != k &&
            !B &&
            (0, r.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: v.planOptionDiscount,
                children: O.intl.format(O.t.IAybsL, { discount: (0, h.T3)(C, k / 100) })
            }),
        H = () =>
            B
                ? F()
                : (R.interval === y.rV.YEAR && null != t) || (U && !L)
                  ? R.interval === y.rV.YEAR && null != t
                      ? (0, r.jsxs)('span', {
                            className: v.planOptionMonthsFree,
                            children: ['(', O.intl.string(O.t['122kWF']), ')']
                        })
                      : U && !L
                        ? Z()
                        : void 0
                  : null,
        Y = () =>
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(v.planOptionInterval, {
                            [v.optionSelected]: o || D,
                            [v.updatedOptionSelected]: T && (o || D)
                        }),
                        children: [(0, m.L7)(R.interval, P, j, R.intervalCount, D, (0, m.Rd)(R.id)), D && H()]
                    }),
                    D &&
                        (0, r.jsx)('div', {
                            className: v.planOneTimeCost,
                            children: O.intl.format(O.t.ori2Ji, { currencyAmount: (0, g.T4)(M.amount, M.currency) })
                        })
                ]
            }),
        W = () =>
            S && null != A && R.interval === y.rV.MONTH
                ? (0, g.T4)(M.amount - A, M.currency)
                : N
                  ? (0, g.T4)(0, M.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })
                  : (0, g.T4)(M.amount, M.currency),
        K = () => {
            if (S && null != A && R.interval === y.rV.MONTH) {
                var e;
                return O.intl.format(O.t['VeE/4O'], {
                    numMonths: null != (e = null == G ? void 0 : G.discount.user_usage_limit) ? e : y.rt,
                    discountedPrice: (0, g.T4)(M.amount - A, M.currency),
                    regularPrice: (0, g.T4)(M.amount, M.currency)
                });
            }
            return N ? O.intl.format(V, { price: (0, g.T4)(M.amount, M.currency) }) : R.interval === y.rV.YEAR ? O.intl.formatToPlainString(O.t.rtLTJC, { percent: k }) : null;
        };
    return (0, r.jsxs)(u.P3F, {
        role: D ? 'menuitem' : 'radio',
        'aria-checked': o,
        tabIndex: o ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0
            }
        },
        onClick: x ? void 0 : () => i(n),
        className: a()(v.planOptionClickableContainer, {
            [v.selectedPlan]: D && o,
            [v.selectionBox]: D
        }),
        children: [
            (0, r.jsxs)('div', {
                className: a()(v.planOption, { [v.planOptionDisabled]: x }),
                children: [
                    (0, r.jsxs)('div', {
                        className: v.planOptionClickable,
                        children: [
                            !D &&
                                (0, r.jsx)(u.XZJ, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: o,
                                    shape: u.XZJ.Shapes.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.XZJ.Types.INVERTED,
                                    className: v.planOptionCheckbox
                                }),
                            Y(),
                            L &&
                                (0, r.jsxs)('span', {
                                    className: v.planOptionCurrentPlan,
                                    children: ['(', O.intl.string(O.t.ymSxh4), ')']
                                }),
                            !D && H()
                        ]
                    }),
                    T
                        ? (0, r.jsx)('div', {
                              className: a()({ [v.optionPriceSelected]: o }),
                              children: O.intl.format(O.t.hXcaLS, { price: W() })
                          })
                        : (0, r.jsx)('div', {
                              className: a()({ [v.optionSelected]: o || D }),
                              children: (0, g.T4)(M.amount, M.currency)
                          })
                ]
            }),
            T &&
                (0, r.jsx)('div', {
                    className: v.planOptionSubtextContainer,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: o ? 'text-default' : 'interactive-normal',
                        className: a()(v.planOptionSubtext, { [v.discountPlanOptionSubtext]: S }),
                        children: K()
                    })
                })
        ]
    });
}
