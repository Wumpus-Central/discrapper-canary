n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(987209),
    f = n(706454),
    p = n(509545),
    _ = n(669079),
    h = n(930153),
    m = n(74538),
    g = n(937615),
    E = n(104494),
    v = n(474936),
    b = n(388032),
    y = n(881790);
function O(e) {
    let { premiumSubscription: t, planId: n, selectPlan: i, selected: a, priceOptions: O, shouldShowUpdatedPaymentModal: S, isEligibleForDiscount: I, discountAmountOff: T, isEligibleForTrial: N } = e,
        A = (0, l.e7)([f.default], () => f.default.locale),
        C = (0, l.e7)([p.Z], () => p.Z.get(n)),
        { isGift: R, giftRecipient: P } = (0, d.wD)(),
        w = R && (0, _.pO)(P);
    s()(null != C, 'Missing subscriptionPlan');
    let D = null != t && t.planId === n,
        x = D || (n === v.Xh.PREMIUM_MONTH_TIER_2 && null != t && [v.Xh.PREMIUM_YEAR_TIER_0, v.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        L = v.nH[n],
        M = (0, m.aS)(n, !1, R, O),
        k = (0, m.Ap)(O.paymentSourceId),
        j = null != L && !S,
        U = (0, E.Ng)(),
        G = C.interval === v.rV.YEAR ? b.t.ECT4Aw : b.t.v9QeOD,
        B = () =>
            null != L &&
            (0, r.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: y.planOptionDiscount,
                children: b.NW.format(b.t.IAybsL, { discount: (0, h.T3)(A, L / 100) })
            }),
        Z = () =>
            (C.interval === v.rV.YEAR && null != t) || (j && !D)
                ? C.interval === v.rV.YEAR && null != t
                    ? (0, r.jsxs)('span', {
                          className: y.planOptionMonthsFree,
                          children: ['(', b.NW.string(b.t['122kWF']), ')']
                      })
                    : j && !D
                      ? B()
                      : void 0
                : null,
        F = () =>
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: o()(y.planOptionInterval, {
                            [y.optionSelected]: a || w,
                            [y.updatedOptionSelected]: S && (a || w)
                        }),
                        children: [(0, m.L7)(C.interval, R, k, C.intervalCount, w, (0, m.Rd)(C.id)), w && Z()]
                    }),
                    w &&
                        (0, r.jsx)('div', {
                            className: y.planOneTimeCost,
                            children: b.NW.format(b.t.ori2Ji, { currencyAmount: (0, g.T4)(M.amount, M.currency) })
                        })
                ]
            }),
        V = () =>
            I && null != T && C.interval === v.rV.MONTH
                ? (0, g.T4)(M.amount - T, M.currency)
                : N
                  ? (0, g.T4)(0, M.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })
                  : (0, g.T4)(M.amount, M.currency),
        H = () => {
            if (I && null != T && C.interval === v.rV.MONTH) {
                var e;
                return b.NW.format(b.t['VeE/4O'], {
                    numMonths: null !== (e = null == U ? void 0 : U.discount.user_usage_limit) && void 0 !== e ? e : v.rt,
                    discountedPrice: (0, g.T4)(M.amount - T, M.currency),
                    regularPrice: (0, g.T4)(M.amount, M.currency)
                });
            }
            return N ? b.NW.format(G, { price: (0, g.T4)(M.amount, M.currency) }) : C.interval === v.rV.YEAR ? b.NW.formatToPlainString(b.t.rtLTJC, { percent: L }) : null;
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
        onClick: x ? void 0 : () => i(n),
        className: o()(y.planOptionClickableContainer, {
            [y.selectedPlan]: w && a,
            [y.selectionBox]: w
        }),
        children: [
            (0, r.jsxs)('div', {
                className: o()(y.planOption, { [y.planOptionDisabled]: x }),
                children: [
                    (0, r.jsxs)('div', {
                        className: y.planOptionClickable,
                        children: [
                            !w &&
                                (0, r.jsx)(u.XZJ, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: a,
                                    shape: u.XZJ.Shapes.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.XZJ.Types.INVERTED,
                                    className: y.planOptionCheckbox
                                }),
                            F(),
                            D &&
                                (0, r.jsxs)('span', {
                                    className: y.planOptionCurrentPlan,
                                    children: ['(', b.NW.string(b.t.ymSxh4), ')']
                                }),
                            !w && Z()
                        ]
                    }),
                    S
                        ? (0, r.jsx)('div', {
                              className: o()({ [y.optionPriceSelected]: a }),
                              children: b.NW.format(b.t.hXcaLS, { price: V() })
                          })
                        : (0, r.jsx)('div', {
                              className: o()({ [y.optionSelected]: a || w }),
                              children: (0, g.T4)(M.amount, M.currency)
                          })
                ]
            }),
            S &&
                (0, r.jsx)('div', {
                    className: y.planOptionSubtextContainer,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: a ? 'text-normal' : 'interactive-normal',
                        className: o()(y.planOptionSubtext, { [y.discountPlanOptionSubtext]: I }),
                        children: H()
                    })
                })
        ]
    });
}
