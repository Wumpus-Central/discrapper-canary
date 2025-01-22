r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(512722),
    l = r.n(s),
    u = r(442837),
    c = r(692547),
    d = r(481060),
    f = r(987209),
    p = r(706454),
    h = r(509545),
    _ = r(669079),
    m = r(930153),
    g = r(74538),
    E = r(937615),
    v = r(104494),
    y = r(474936),
    b = r(388032),
    I = r(589242);
function T(e) {
    let { premiumSubscription: n, planId: r, selectPlan: a, selected: s, priceOptions: T, shouldShowUpdatedPaymentModal: S, isEligibleForDiscount: A, discountAmountOff: C, isEligibleForTrial: N } = e,
        R = (0, u.e7)([p.default], () => p.default.locale),
        O = (0, u.e7)([h.Z], () => h.Z.get(r)),
        { isGift: D, giftRecipient: x } = (0, f.wD)(),
        L = D && (0, _.pO)(x);
    l()(null != O, 'Missing subscriptionPlan');
    let w = null != n && n.planId === r,
        P = w || (r === y.Xh.PREMIUM_MONTH_TIER_2 && null != n && [y.Xh.PREMIUM_YEAR_TIER_0, y.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        M = y.nH[r],
        k = (0, g.aS)(r, !1, D, T),
        U = (0, g.Ap)(T.paymentSourceId),
        B = null != M && !S,
        G = (0, v.Ng)(),
        Z = O.interval === y.rV.YEAR ? b.t.ECT4Aw : b.t.v9QeOD,
        F = () =>
            null != M &&
            (0, i.jsx)(d.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: I.planOptionDiscount,
                children: b.intl.format(b.t.IAybsL, { discount: (0, m.T3)(R, M / 100) })
            }),
        V = () =>
            (O.interval === y.rV.YEAR && null != n) || (B && !w)
                ? O.interval === y.rV.YEAR && null != n
                    ? (0, i.jsxs)('span', {
                          className: I.planOptionMonthsFree,
                          children: ['(', b.intl.string(b.t['122kWF']), ')']
                      })
                    : B && !w
                      ? F()
                      : void 0
                : null,
        j = () =>
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: o()(I.planOptionInterval, {
                            [I.optionSelected]: s || L,
                            [I.updatedOptionSelected]: S && (s || L)
                        }),
                        children: [(0, g.L7)(O.interval, D, U, O.intervalCount, L, (0, g.Rd)(O.id)), L && V()]
                    }),
                    L &&
                        (0, i.jsx)('div', {
                            className: I.planOneTimeCost,
                            children: b.intl.format(b.t.ori2Ji, { currencyAmount: (0, E.T4)(k.amount, k.currency) })
                        })
                ]
            }),
        H = () =>
            A && null != C && O.interval === y.rV.MONTH
                ? (0, E.T4)(k.amount - C, k.currency)
                : N
                  ? (0, E.T4)(0, k.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })
                  : (0, E.T4)(k.amount, k.currency),
        Y = () => {
            if (A && null != C && O.interval === y.rV.MONTH) {
                var e;
                return b.intl.format(b.t['VeE/4O'], {
                    numMonths: null !== (e = null == G ? void 0 : G.discount.user_usage_limit) && void 0 !== e ? e : y.rt,
                    discountedPrice: (0, E.T4)(k.amount - C, k.currency),
                    regularPrice: (0, E.T4)(k.amount, k.currency)
                });
            }
            if (N) return b.intl.format(Z, { price: (0, E.T4)(k.amount, k.currency) });
            if (O.interval === y.rV.YEAR) return b.intl.formatToPlainString(b.t.rtLTJC, { percent: M });
            return null;
        };
    return (0, i.jsxs)(d.Clickable, {
        role: L ? 'menuitem' : 'radio',
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
        onClick: P ? void 0 : () => a(r),
        className: o()(I.planOptionClickableContainer, {
            [I.selectedPlan]: L && s,
            [I.selectionBox]: L
        }),
        children: [
            (0, i.jsxs)('div', {
                className: o()(I.planOption, { [I.planOptionDisabled]: P }),
                children: [
                    (0, i.jsxs)('div', {
                        className: I.planOptionClickable,
                        children: [
                            !L &&
                                (0, i.jsx)(d.Checkbox, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: s,
                                    shape: d.Checkbox.Shapes.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: d.Checkbox.Types.INVERTED,
                                    className: I.planOptionCheckbox
                                }),
                            j(),
                            w &&
                                (0, i.jsxs)('span', {
                                    className: I.planOptionCurrentPlan,
                                    children: ['(', b.intl.string(b.t.ymSxh4), ')']
                                }),
                            !L && V()
                        ]
                    }),
                    S
                        ? (0, i.jsx)('div', {
                              className: o()({ [I.optionPriceSelected]: s }),
                              children: b.intl.format(b.t.hXcaLS, { price: H() })
                          })
                        : (0, i.jsx)('div', {
                              className: o()({ [I.optionSelected]: s || L }),
                              children: (0, E.T4)(k.amount, k.currency)
                          })
                ]
            }),
            S &&
                (0, i.jsx)('div', {
                    className: I.planOptionSubtextContainer,
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: s ? 'text-normal' : 'interactive-normal',
                        className: o()(I.planOptionSubtext, { [I.discountPlanOptionSubtext]: A }),
                        children: Y()
                    })
                })
        ]
    });
}
