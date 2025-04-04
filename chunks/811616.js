n.d(t, { Z: () => I });
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
    m = n(930153),
    g = n(74538),
    E = n(937615),
    b = n(104494),
    y = n(474936),
    v = n(388032),
    O = n(106981);
function I(e) {
    let { premiumSubscription: t, planId: n, selectPlan: i, selected: a, priceOptions: I, shouldShowUpdatedPaymentModal: S, isEligibleForDiscount: T, discountAmountOff: N, isEligibleForTrial: A } = e,
        C = (0, l.e7)([_.default], () => _.default.locale),
        R = (0, l.e7)([p.Z], () => p.Z.get(n)),
        P = (0, d.Z)().fractionalState !== y.a$.NONE,
        { isGift: w, giftRecipient: D } = (0, f.wD)(),
        L = w && (0, h.pO)(D);
    s()(null != R, 'Missing subscriptionPlan');
    let x = null != t && t.planId === n,
        M = x || (n === y.Xh.PREMIUM_MONTH_TIER_2 && null != t && [y.Xh.PREMIUM_YEAR_TIER_0, y.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        k = y.nH[n],
        j = (0, g.aS)(n, !1, w, I),
        U = (0, g.Ap)(I.paymentSourceId),
        G = null != k && !S,
        B = (0, b.Ng)(),
        F = R.interval === y.rV.YEAR ? v.t.ECT4Aw : v.t.v9QeOD,
        V = R.interval === y.rV.YEAR ? v.t.oprI4u : v.t.ALLTBQ,
        Z = () =>
            null != k &&
            (0, r.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: O.planOptionDiscount,
                children: v.NW.format(v.t.IAybsL, { discount: (0, m.T3)(C, k / 100) })
            }),
        H = () =>
            (R.interval === y.rV.YEAR && null != t) || (G && !x)
                ? R.interval === y.rV.YEAR && null != t
                    ? (0, r.jsxs)('span', {
                          className: O.planOptionMonthsFree,
                          children: ['(', v.NW.string(v.t['122kWF']), ')']
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
                            [O.updatedOptionSelected]: S && (a || L)
                        }),
                        children: [(0, g.L7)(R.interval, w, U, R.intervalCount, L, (0, g.Rd)(R.id)), L && H()]
                    }),
                    L &&
                        (0, r.jsx)('div', {
                            className: O.planOneTimeCost,
                            children: v.NW.format(v.t.ori2Ji, { currencyAmount: (0, E.T4)(j.amount, j.currency) })
                        })
                ]
            }),
        Y = () =>
            P
                ? (0, E.T4)(0, j.currency)
                : T && null != N && R.interval === y.rV.MONTH
                  ? (0, E.T4)(j.amount - N, j.currency)
                  : A
                    ? (0, E.T4)(0, j.currency, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                      })
                    : (0, E.T4)(j.amount, j.currency),
        K = () => {
            if (T && null != N && R.interval === y.rV.MONTH) {
                var e;
                return v.NW.format(v.t['VeE/4O'], {
                    numMonths: null != (e = null == B ? void 0 : B.discount.user_usage_limit) ? e : y.rt,
                    discountedPrice: (0, E.T4)(j.amount - N, j.currency),
                    regularPrice: (0, E.T4)(j.amount, j.currency)
                });
            }
            return A ? v.NW.format(F, { price: (0, E.T4)(j.amount, j.currency) }) : P ? v.NW.format(V, { price: (0, E.T4)(j.amount, j.currency) }) : R.interval === y.rV.YEAR ? v.NW.formatToPlainString(v.t.rtLTJC, { percent: k }) : null;
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
                                    children: ['(', v.NW.string(v.t.ymSxh4), ')']
                                }),
                            !L && H()
                        ]
                    }),
                    S
                        ? (0, r.jsx)('div', {
                              className: o()({ [O.optionPriceSelected]: a }),
                              children: v.NW.format(v.t.hXcaLS, { price: Y() })
                          })
                        : (0, r.jsx)('div', {
                              className: o()({ [O.optionSelected]: a || L }),
                              children: (0, E.T4)(j.amount, j.currency)
                          })
                ]
            }),
            S &&
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
