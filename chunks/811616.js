n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
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
    E = n(104494),
    b = n(474936),
    y = n(388032),
    O = n(106981);
function v(e) {
    let { premiumSubscription: t, planId: n, selectPlan: i, selected: a, priceOptions: v, shouldShowUpdatedPaymentModal: I, isEligibleForDiscount: S, discountAmountOff: T, isEligibleForTrial: A } = e,
        N = (0, l.e7)([f.default], () => f.default.locale),
        C = (0, l.e7)([_.Z], () => _.Z.get(n)),
        { isGift: R, giftRecipient: P } = (0, d.wD)(),
        w = R && (0, p.pO)(P);
    s()(null != C, 'Missing subscriptionPlan');
    let D = null != t && t.planId === n,
        L = D || (n === b.Xh.PREMIUM_MONTH_TIER_2 && null != t && [b.Xh.PREMIUM_YEAR_TIER_0, b.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        x = b.nH[n],
        M = (0, m.aS)(n, !1, R, v),
        k = (0, m.Ap)(v.paymentSourceId),
        j = null != x && !I,
        U = (0, E.Ng)(),
        G = C.interval === b.rV.YEAR ? y.t.ECT4Aw : y.t.v9QeOD,
        B = () =>
            null != x &&
            (0, r.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: O.planOptionDiscount,
                children: y.intl.format(y.t.IAybsL, { discount: (0, h.T3)(N, x / 100) })
            }),
        V = () =>
            (C.interval === b.rV.YEAR && null != t) || (j && !D)
                ? C.interval === b.rV.YEAR && null != t
                    ? (0, r.jsxs)('span', {
                          className: O.planOptionMonthsFree,
                          children: ['(', y.intl.string(y.t['122kWF']), ')']
                      })
                    : j && !D
                      ? B()
                      : void 0
                : null,
        F = () =>
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(O.planOptionInterval, {
                            [O.optionSelected]: a || w,
                            [O.updatedOptionSelected]: I && (a || w)
                        }),
                        children: [(0, m.L7)(C.interval, R, k, C.intervalCount, w, (0, m.Rd)(C.id)), w && V()]
                    }),
                    w &&
                        (0, r.jsx)('div', {
                            className: O.planOneTimeCost,
                            children: y.intl.format(y.t.ori2Ji, { currencyAmount: (0, g.T4)(M.amount, M.currency) })
                        })
                ]
            }),
        Z = () =>
            S && null != T && C.interval === b.rV.MONTH
                ? (0, g.T4)(M.amount - T, M.currency)
                : A
                  ? (0, g.T4)(0, M.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })
                  : (0, g.T4)(M.amount, M.currency),
        H = () => {
            if (S && null != T && C.interval === b.rV.MONTH) {
                var e;
                return y.intl.format(y.t['VeE/4O'], {
                    numMonths: null != (e = null == U ? void 0 : U.discount.user_usage_limit) ? e : b.rt,
                    discountedPrice: (0, g.T4)(M.amount - T, M.currency),
                    regularPrice: (0, g.T4)(M.amount, M.currency)
                });
            }
            return A ? y.intl.format(G, { price: (0, g.T4)(M.amount, M.currency) }) : C.interval === b.rV.YEAR ? y.intl.formatToPlainString(y.t.rtLTJC, { percent: x }) : null;
        };
    return (0, r.jsxs)(u.P3F, {
        role: w ? 'menuitem' : 'radio',
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
        onClick: L ? void 0 : () => i(n),
        className: o()(O.planOptionClickableContainer, {
            [O.selectedPlan]: w && a,
            [O.selectionBox]: w
        }),
        children: [
            (0, r.jsxs)('div', {
                className: o()(O.planOption, { [O.planOptionDisabled]: L }),
                children: [
                    (0, r.jsxs)('div', {
                        className: O.planOptionClickable,
                        children: [
                            !w &&
                                (0, r.jsx)(u.XZJ, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: a,
                                    shape: u.XZJ.Shapes.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.XZJ.Types.INVERTED,
                                    className: O.planOptionCheckbox
                                }),
                            F(),
                            D &&
                                (0, r.jsxs)('span', {
                                    className: O.planOptionCurrentPlan,
                                    children: ['(', y.intl.string(y.t.ymSxh4), ')']
                                }),
                            !w && V()
                        ]
                    }),
                    I
                        ? (0, r.jsx)('div', {
                              className: o()({ [O.optionPriceSelected]: a }),
                              children: y.intl.format(y.t.hXcaLS, { price: Z() })
                          })
                        : (0, r.jsx)('div', {
                              className: o()({ [O.optionSelected]: a || w }),
                              children: (0, g.T4)(M.amount, M.currency)
                          })
                ]
            }),
            I &&
                (0, r.jsx)('div', {
                    className: O.planOptionSubtextContainer,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: a ? 'text-normal' : 'interactive-normal',
                        className: o()(O.planOptionSubtext, { [O.discountPlanOptionSubtext]: S }),
                        children: H()
                    })
                })
        ]
    });
}
