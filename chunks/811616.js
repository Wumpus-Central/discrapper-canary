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
    E = t(474936),
    S = t(388032),
    j = t(589242);
function y(e) {
    let { premiumSubscription: n, planId: t, selectPlan: l, selected: s, priceOptions: y, shouldShowUpdatedPaymentModal: I, isEligibleForDiscount: P, discountAmountOff: T, isEligibleForTrial: N } = e,
        b = (0, c.e7)([m.default], () => m.default.locale),
        C = (0, c.e7)([p.Z], () => p.Z.get(t)),
        { isGift: _, giftRecipient: O } = (0, d.wD)(),
        A = _ && (0, x.pO)(O);
    a()(null != C, 'Missing subscriptionPlan');
    let Z = null != n && n.planId === t,
        R = Z || (t === E.Xh.PREMIUM_MONTH_TIER_2 && null != n && [E.Xh.PREMIUM_YEAR_TIER_0, E.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId)),
        w = E.nH[t],
        M = (0, f.aS)(t, !1, _, y),
        L = (0, f.Ap)(y.paymentSourceId),
        k = null != w && !I,
        F = (0, g.Ng)(),
        D = C.interval === E.rV.YEAR ? S.t.ECT4Aw : S.t.v9QeOD,
        U = () =>
            null != w &&
            (0, i.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: j.planOptionDiscount,
                children: S.intl.format(S.t.IAybsL, { discount: (0, h.T3)(b, w / 100) })
            }),
        G = () =>
            (C.interval === E.rV.YEAR && null != n) || (k && !Z)
                ? C.interval === E.rV.YEAR && null != n
                    ? (0, i.jsxs)('span', {
                          className: j.planOptionMonthsFree,
                          children: ['(', S.intl.string(S.t['122kWF']), ')']
                      })
                    : k && !Z
                      ? U()
                      : void 0
                : null;
    return (0, i.jsxs)(u.Clickable, {
        role: A ? 'menuitem' : 'radio',
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
            [j.selectedPlan]: A && s,
            [j.selectionBox]: A
        }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(j.planOption, { [j.planOptionDisabled]: R }),
                children: [
                    (0, i.jsxs)('div', {
                        className: j.planOptionClickable,
                        children: [
                            !A &&
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
                                            [j.optionSelected]: s || A,
                                            [j.updatedOptionSelected]: I && (s || A)
                                        }),
                                        children: [(0, f.L7)(C.interval, _, L, C.intervalCount, A, (0, f.Rd)(C.id)), A && G()]
                                    }),
                                    A &&
                                        (0, i.jsx)('div', {
                                            className: j.planOneTimeCost,
                                            children: S.intl.format(S.t.ori2Ji, { currencyAmount: (0, v.T4)(M.amount, M.currency) })
                                        })
                                ]
                            }),
                            Z &&
                                (0, i.jsxs)('span', {
                                    className: j.planOptionCurrentPlan,
                                    children: ['(', S.intl.string(S.t.ymSxh4), ')']
                                }),
                            !A && G()
                        ]
                    }),
                    I
                        ? (0, i.jsx)('div', {
                              className: r()({ [j.optionPriceSelected]: s }),
                              children: S.intl.format(S.t.hXcaLS, {
                                  price:
                                      P && null != T && C.interval === E.rV.MONTH
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
                              className: r()({ [j.optionSelected]: s || A }),
                              children: (0, v.T4)(M.amount, M.currency)
                          })
                ]
            }),
            I &&
                (0, i.jsx)('div', {
                    className: j.planOptionSubtextContainer,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: s ? 'text-normal' : 'interactive-normal',
                        className: r()(j.planOptionSubtext, { [j.discountPlanOptionSubtext]: P }),
                        children: (() => {
                            if (P && null != T && C.interval === E.rV.MONTH) {
                                var e;
                                return S.intl.format(S.t['VeE/4O'], {
                                    numMonths: null !== (e = null == F ? void 0 : F.discount.user_usage_limit) && void 0 !== e ? e : E.rt,
                                    discountedPrice: (0, v.T4)(M.amount - T, M.currency),
                                    regularPrice: (0, v.T4)(M.amount, M.currency)
                                });
                            }
                            if (N) return S.intl.format(D, { price: (0, v.T4)(M.amount, M.currency) });
                            if (C.interval === E.rV.YEAR) return S.intl.formatToPlainString(S.t.rtLTJC, { percent: w });
                            return null;
                        })()
                    })
                })
        ]
    });
}
