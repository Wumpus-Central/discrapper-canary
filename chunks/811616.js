n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    l = n(442837),
    u = n(692547),
    c = n(481060),
    d = n(987209),
    f = n(706454),
    _ = n(509545),
    p = n(669079),
    h = n(930153),
    m = n(74538),
    g = n(937615),
    E = n(104494),
    v = n(474936),
    y = n(388032),
    I = n(589242);
function T(e) {
    let { premiumSubscription: t, planId: n, selectPlan: r, selected: s, priceOptions: T, shouldShowUpdatedPaymentModal: b, isEligibleForDiscount: S, discountAmountOff: A, isEligibleForTrial: N } = e,
        C = (0, l.e7)([f.default], () => f.default.locale),
        R = (0, l.e7)([_.Z], () => _.Z.get(n)),
        { isGift: O, giftRecipient: D } = (0, d.wD)(),
        x = O && (0, p.pO)(D);
    o()(null != R, 'Missing subscriptionPlan');
    let L = null != t && t.planId === n,
        P = L || (n === v.Xh.PREMIUM_MONTH_TIER_2 && null != t && [v.Xh.PREMIUM_YEAR_TIER_0, v.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        w = v.nH[n],
        M = (0, m.aS)(n, !1, O, T),
        k = (0, m.Ap)(T.paymentSourceId),
        U = null != w && !b,
        G = (0, E.Ng)(),
        B = R.interval === v.rV.YEAR ? y.t.ECT4Aw : y.t.v9QeOD,
        Z = () =>
            null != w &&
            (0, i.jsx)(c.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: I.planOptionDiscount,
                children: y.intl.format(y.t.IAybsL, { discount: (0, h.T3)(C, w / 100) })
            }),
        F = () =>
            (R.interval === v.rV.YEAR && null != t) || (U && !L)
                ? R.interval === v.rV.YEAR && null != t
                    ? (0, i.jsxs)('span', {
                          className: I.planOptionMonthsFree,
                          children: ['(', y.intl.string(y.t['122kWF']), ')']
                      })
                    : U && !L
                      ? Z()
                      : void 0
                : null,
        V = () =>
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(I.planOptionInterval, {
                            [I.optionSelected]: s || x,
                            [I.updatedOptionSelected]: b && (s || x)
                        }),
                        children: [(0, m.L7)(R.interval, O, k, R.intervalCount, x, (0, m.Rd)(R.id)), x && F()]
                    }),
                    x &&
                        (0, i.jsx)('div', {
                            className: I.planOneTimeCost,
                            children: y.intl.format(y.t.ori2Ji, { currencyAmount: (0, g.T4)(M.amount, M.currency) })
                        })
                ]
            }),
        j = () =>
            S && null != A && R.interval === v.rV.MONTH
                ? (0, g.T4)(M.amount - A, M.currency)
                : N
                  ? (0, g.T4)(0, M.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })
                  : (0, g.T4)(M.amount, M.currency),
        H = () => {
            if (S && null != A && R.interval === v.rV.MONTH) {
                var e;
                return y.intl.format(y.t['VeE/4O'], {
                    numMonths: null !== (e = null == G ? void 0 : G.discount.user_usage_limit) && void 0 !== e ? e : v.rt,
                    discountedPrice: (0, g.T4)(M.amount - A, M.currency),
                    regularPrice: (0, g.T4)(M.amount, M.currency)
                });
            }
            return N ? y.intl.format(B, { price: (0, g.T4)(M.amount, M.currency) }) : R.interval === v.rV.YEAR ? y.intl.formatToPlainString(y.t.rtLTJC, { percent: w }) : null;
        };
    return (0, i.jsxs)(c.P3F, {
        role: x ? 'menuitem' : 'radio',
        'aria-checked': s,
        tabIndex: s ? 0 : -1,
        focusProps: {
            offset: {
                left: -4,
                right: -4,
                top: 0,
                bottom: 0
            }
        },
        onClick: P ? void 0 : () => r(n),
        className: a()(I.planOptionClickableContainer, {
            [I.selectedPlan]: x && s,
            [I.selectionBox]: x
        }),
        children: [
            (0, i.jsxs)('div', {
                className: a()(I.planOption, { [I.planOptionDisabled]: P }),
                children: [
                    (0, i.jsxs)('div', {
                        className: I.planOptionClickable,
                        children: [
                            !x &&
                                (0, i.jsx)(c.XZJ, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: s,
                                    shape: c.XZJ.Shapes.ROUND,
                                    color: u.Z.unsafe_rawColors.BRAND_500.css,
                                    type: c.XZJ.Types.INVERTED,
                                    className: I.planOptionCheckbox
                                }),
                            V(),
                            L &&
                                (0, i.jsxs)('span', {
                                    className: I.planOptionCurrentPlan,
                                    children: ['(', y.intl.string(y.t.ymSxh4), ')']
                                }),
                            !x && F()
                        ]
                    }),
                    b
                        ? (0, i.jsx)('div', {
                              className: a()({ [I.optionPriceSelected]: s }),
                              children: y.intl.format(y.t.hXcaLS, { price: j() })
                          })
                        : (0, i.jsx)('div', {
                              className: a()({ [I.optionSelected]: s || x }),
                              children: (0, g.T4)(M.amount, M.currency)
                          })
                ]
            }),
            b &&
                (0, i.jsx)('div', {
                    className: I.planOptionSubtextContainer,
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        color: s ? 'text-normal' : 'interactive-normal',
                        className: a()(I.planOptionSubtext, { [I.discountPlanOptionSubtext]: S }),
                        children: H()
                    })
                })
        ]
    });
}
