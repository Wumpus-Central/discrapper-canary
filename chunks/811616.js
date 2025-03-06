n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(975298),
    f = n(987209),
    _ = n(706454),
    p = n(509545),
    h = n(669079),
    g = n(930153),
    m = n(74538),
    E = n(937615),
    v = n(104494),
    b = n(474936),
    y = n(388032),
    O = n(814020);
function S(e) {
    let { premiumSubscription: t, planId: n, selectPlan: i, selected: a, priceOptions: S, shouldShowUpdatedPaymentModal: I, isEligibleForDiscount: T, discountAmountOff: N, isEligibleForTrial: A } = e,
        C = (0, l.e7)([_.default], () => _.default.locale),
        R = (0, l.e7)([p.Z], () => p.Z.get(n)),
        P = (0, d.Z)().fractionalState !== b.a$.NONE,
        { isGift: D, giftRecipient: w } = (0, f.wD)(),
        L = D && (0, h.pO)(w);
    s()(null != R, 'Missing subscriptionPlan');
    let x = null != t && t.planId === n,
        M = x || (n === b.Xh.PREMIUM_MONTH_TIER_2 && null != t && [b.Xh.PREMIUM_YEAR_TIER_0, b.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        k = b.nH[n],
        j = (0, m.aS)(n, !1, D, S),
        U = (0, m.Ap)(S.paymentSourceId),
        G = null != k && !I,
        B = (0, v.Ng)(),
        V = R.interval === b.rV.YEAR ? y.t.ECT4Aw : y.t.v9QeOD,
        F = R.interval === b.rV.YEAR ? y.t.oprI4u : y.t.ALLTBQ,
        Z = () =>
            null != k &&
            (0, r.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: O.planOptionDiscount,
                children: y.NW.format(y.t.IAybsL, { discount: (0, g.T3)(C, k / 100) })
            }),
        H = () =>
            (R.interval === b.rV.YEAR && null != t) || (G && !x)
                ? R.interval === b.rV.YEAR && null != t
                    ? (0, r.jsxs)('span', {
                          className: O.planOptionMonthsFree,
                          children: ['(', y.NW.string(y.t['122kWF']), ')']
                      })
                    : G && !x
                      ? Z()
                      : void 0
                : null,
        W = () =>
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(O.planOptionInterval, {
                            [O.optionSelected]: a || L,
                            [O.updatedOptionSelected]: I && (a || L)
                        }),
                        children: [(0, m.L7)(R.interval, D, U, R.intervalCount, L, (0, m.Rd)(R.id)), L && H()]
                    }),
                    L &&
                        (0, r.jsx)('div', {
                            className: O.planOneTimeCost,
                            children: y.NW.format(y.t.ori2Ji, { currencyAmount: (0, E.T4)(j.amount, j.currency) })
                        })
                ]
            }),
        Y = () =>
            P
                ? (0, E.T4)(0, j.currency)
                : T && null != N && R.interval === b.rV.MONTH
                  ? (0, E.T4)(j.amount - N, j.currency)
                  : A
                    ? (0, E.T4)(0, j.currency, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                      })
                    : (0, E.T4)(j.amount, j.currency),
        K = () => {
            if (T && null != N && R.interval === b.rV.MONTH) {
                var e;
                return y.NW.format(y.t['VeE/4O'], {
                    numMonths: null !== (e = null == B ? void 0 : B.discount.user_usage_limit) && void 0 !== e ? e : b.rt,
                    discountedPrice: (0, E.T4)(j.amount - N, j.currency),
                    regularPrice: (0, E.T4)(j.amount, j.currency)
                });
            }
            return A ? y.NW.format(V, { price: (0, E.T4)(j.amount, j.currency) }) : P ? y.NW.format(F, { price: (0, E.T4)(j.amount, j.currency) }) : R.interval === b.rV.YEAR ? y.NW.formatToPlainString(y.t.rtLTJC, { percent: k }) : null;
        };
    return (0, r.jsxs)(u.P3F, {
        role: L ? 'menuitem' : 'radio',
        'aria-checked': a,
        tabIndex: a ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0
            }
        },
        onClick: M ? void 0 : () => i(n),
        className: o()(O.planOptionClickableContainer, {
            [O.selectedPlan]: L && a,
            [O.selectionBox]: L
        }),
        children: [
            (0, r.jsxs)('div', {
                className: o()(O.planOption, { [O.planOptionDisabled]: M }),
                children: [
                    (0, r.jsxs)('div', {
                        className: O.planOptionClickable,
                        children: [
                            !L &&
                                (0, r.jsx)(u.XZJ, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: a,
                                    shape: u.XZJ.Shapes.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.XZJ.Types.INVERTED,
                                    className: O.planOptionCheckbox
                                }),
                            W(),
                            x &&
                                (0, r.jsxs)('span', {
                                    className: O.planOptionCurrentPlan,
                                    children: ['(', y.NW.string(y.t.ymSxh4), ')']
                                }),
                            !L && H()
                        ]
                    }),
                    I
                        ? (0, r.jsx)('div', {
                              className: o()({ [O.optionPriceSelected]: a }),
                              children: y.NW.format(y.t.hXcaLS, { price: Y() })
                          })
                        : (0, r.jsx)('div', {
                              className: o()({ [O.optionSelected]: a || L }),
                              children: (0, E.T4)(j.amount, j.currency)
                          })
                ]
            }),
            I &&
                (0, r.jsx)('div', {
                    className: O.planOptionSubtextContainer,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: a ? 'text-normal' : 'interactive-normal',
                        className: o()(O.planOptionSubtext, { [O.discountPlanOptionSubtext]: T }),
                        children: K()
                    })
                })
        ]
    });
}
