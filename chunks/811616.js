t.d(n, {
    Z: function () {
        return y;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(512722),
    a = t.n(s),
    c = t(442837),
    o = t(692547),
    u = t(481060),
    d = t(987209),
    m = t(706454),
    p = t(509545),
    x = t(669079),
    h = t(930153),
    f = t(74538),
    v = t(937615),
    g = t(104494),
    S = t(474936),
    E = t(388032),
    j = t(559805);
function y(e) {
    let { premiumSubscription: n, planId: t, selectPlan: l, selected: s, priceOptions: y, shouldShowUpdatedPaymentModal: P, isEligibleForDiscount: I, discountAmountOff: T, isEligibleForTrial: N } = e,
        b = (0, c.e7)([m.default], () => m.default.locale),
        C = (0, c.e7)([p.Z], () => p.Z.get(t)),
        { isGift: _, giftRecipient: Z } = (0, d.wD)(),
        O = _ && (0, x.pO)(Z);
    a()(null != C, 'Missing subscriptionPlan');
    let A = null != n && n.planId === t,
        R = A || (t === S.Xh.PREMIUM_MONTH_TIER_2 && null != n && [S.Xh.PREMIUM_YEAR_TIER_0, S.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        w = S.nH[t],
        M = (0, f.aS)(t, !1, _, y),
        L = (0, f.Ap)(y.paymentSourceId),
        k = null != w && !P,
        F = (0, g.Ng)(),
        D = C.interval === S.rV.YEAR ? E.t.ECT4Aw : E.t.v9QeOD,
        U = () =>
            null != w &&
            (0, i.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: j.planOptionDiscount,
                children: E.intl.format(E.t.IAybsL, { discount: (0, h.T3)(b, w / 100) })
            }),
        B = () =>
            (C.interval === S.rV.YEAR && null != n) || (k && !A)
                ? C.interval === S.rV.YEAR && null != n
                    ? (0, i.jsxs)('span', {
                          className: j.planOptionMonthsFree,
                          children: ['(', E.intl.string(E.t['122kWF']), ')']
                      })
                    : k && !A
                      ? U()
                      : void 0
                : null;
    return (0, i.jsxs)(u.Clickable, {
        role: O ? 'menuitem' : 'radio',
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
        onClick: R ? void 0 : () => l(t),
        className: r()(j.planOptionClickableContainer, {
            [j.selectedPlan]: O && s,
            [j.selectionBox]: O
        }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(j.planOption, { [j.planOptionDisabled]: R }),
                children: [
                    (0, i.jsxs)('div', {
                        className: j.planOptionClickable,
                        children: [
                            !O &&
                                (0, i.jsx)(u.Checkbox, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: s,
                                    shape: u.Checkbox.Shapes.ROUND,
                                    color: o.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.Checkbox.Types.INVERTED,
                                    className: j.planOptionCheckbox
                                }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: r()(j.planOptionInterval, {
                                            [j.optionSelected]: s || O,
                                            [j.updatedOptionSelected]: P && (s || O)
                                        }),
                                        children: [(0, f.L7)(C.interval, _, L, C.intervalCount, O, (0, f.Rd)(C.id)), O && B()]
                                    }),
                                    O &&
                                        (0, i.jsx)('div', {
                                            className: j.planOneTimeCost,
                                            children: E.intl.format(E.t.ori2Ji, { currencyAmount: (0, v.T4)(M.amount, M.currency) })
                                        })
                                ]
                            }),
                            A &&
                                (0, i.jsxs)('span', {
                                    className: j.planOptionCurrentPlan,
                                    children: ['(', E.intl.string(E.t.ymSxh4), ')']
                                }),
                            !O && B()
                        ]
                    }),
                    P
                        ? (0, i.jsx)('div', {
                              className: r()({ [j.optionPriceSelected]: s }),
                              children: E.intl.format(E.t.hXcaLS, {
                                  price:
                                      I && null != T && C.interval === S.rV.MONTH
                                          ? (0, v.T4)(M.amount - T, M.currency)
                                          : N
                                            ? (0, v.T4)(0, M.currency, {
                                                  minimumFractionDigits: 0,
                                                  maximumFractionDigits: 0
                                              })
                                            : (0, v.T4)(M.amount, M.currency)
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: r()({ [j.optionSelected]: s || O }),
                              children: (0, v.T4)(M.amount, M.currency)
                          })
                ]
            }),
            P &&
                (0, i.jsx)('div', {
                    className: j.planOptionSubtextContainer,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: s ? 'text-normal' : 'interactive-normal',
                        className: r()(j.planOptionSubtext, { [j.discountPlanOptionSubtext]: I }),
                        children: (() => {
                            if (I && null != T && C.interval === S.rV.MONTH) {
                                var e;
                                return E.intl.format(E.t['VeE/4O'], {
                                    numMonths: null !== (e = null == F ? void 0 : F.discount.user_usage_limit) && void 0 !== e ? e : S.rt,
                                    discountedPrice: (0, v.T4)(M.amount - T, M.currency),
                                    regularPrice: (0, v.T4)(M.amount, M.currency)
                                });
                            }
                            if (N) return E.intl.format(D, { price: (0, v.T4)(M.amount, M.currency) });
                            if (C.interval === S.rV.YEAR) return E.intl.formatToPlainString(E.t.rtLTJC, { percent: w });
                            return null;
                        })()
                    })
                })
        ]
    });
}
