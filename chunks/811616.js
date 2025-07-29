n.d(t, { Z: () => T });
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
    _ = n(706454),
    f = n(509545),
    p = n(669079),
    h = n(930153),
    m = n(74538),
    g = n(937615),
    E = n(367074),
    b = n(621651),
    y = n(104494),
    O = n(474936),
    v = n(388032),
    I = n(106981);
function T(e) {
    let { premiumSubscription: t, planId: n, selectPlan: i, selected: o, priceOptions: T, shouldShowUpdatedPaymentModal: S, isEligibleForDiscount: A, discountAmountOff: N, isEligibleForTrial: C } = e,
        R = (0, l.e7)([_.default], () => _.default.locale),
        P = (0, l.e7)([f.Z], () => f.Z.get(n)),
        { isGift: w, giftRecipient: D } = (0, d.wD)(),
        L = w && (0, p.pO)(D);
    s()(null != P, 'Missing subscriptionPlan');
    let x = null != t && t.planId === n,
        M = x || (n === O.Xh.PREMIUM_MONTH_TIER_2 && null != t && [O.Xh.PREMIUM_YEAR_TIER_0, O.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId)),
        k = O.nH[n],
        { enabled: j } = b.Z.getCurrentConfig({ location: 'PremiumSwitchPlanSelectOption' }, { autoTrackExposure: !1 });
    j && (k = (0, m.UV)(P, w, T));
    let U = (0, m.aS)(n, !1, w, T),
        G = (0, m.Ap)(T.paymentSourceId),
        B = null != k && !S,
        V = (0, y.Ng)(),
        F = (0, E.Vi)(),
        Z = P.interval === O.rV.YEAR ? v.t.ECT4Aw : v.t.v9QeOD,
        H = () =>
            F && !w && n === O.Xh.PREMIUM_MONTH_TIER_2
                ? (0, r.jsx)(u.Text, {
                      tag: 'span',
                      variant: 'eyebrow',
                      color: 'always-white',
                      className: I.planOptionDiscount,
                      children: v.intl.string(v.t.iQTfW1)
                  })
                : null,
        Y = () =>
            null != k &&
            !F &&
            (0, r.jsx)(u.Text, {
                tag: 'span',
                variant: 'eyebrow',
                color: 'always-white',
                className: I.planOptionDiscount,
                children: v.intl.format(v.t.IAybsL, { discount: (0, h.T3)(R, k / 100) })
            }),
        W = () =>
            F
                ? H()
                : (P.interval === O.rV.YEAR && null != t) || (B && !x)
                  ? P.interval === O.rV.YEAR && null != t
                      ? (0, r.jsxs)('span', {
                            className: I.planOptionMonthsFree,
                            children: ['(', v.intl.string(v.t['122kWF']), ')']
                        })
                      : B && !x
                        ? Y()
                        : void 0
                  : null,
        K = () =>
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(I.planOptionInterval, {
                            [I.optionSelected]: o || L,
                            [I.updatedOptionSelected]: S && (o || L)
                        }),
                        children: [(0, m.L7)(P.interval, w, G, P.intervalCount, L, (0, m.Rd)(P.id)), L && W()]
                    }),
                    L &&
                        (0, r.jsx)('div', {
                            className: I.planOneTimeCost,
                            children: v.intl.format(v.t.ori2Ji, { currencyAmount: (0, g.T4)(U.amount, U.currency) })
                        })
                ]
            }),
        z = () =>
            A && null != N && P.interval === O.rV.MONTH
                ? (0, g.T4)(U.amount - N, U.currency)
                : C
                  ? (0, g.T4)(0, U.currency, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })
                  : (0, g.T4)(U.amount, U.currency),
        q = () => {
            if (A && null != N && P.interval === O.rV.MONTH) {
                var e;
                return v.intl.format(v.t['VeE/4O'], {
                    numMonths: null != (e = null == V ? void 0 : V.discount.user_usage_limit) ? e : O.rt,
                    discountedPrice: (0, g.T4)(U.amount - N, U.currency),
                    regularPrice: (0, g.T4)(U.amount, U.currency)
                });
            }
            return C ? v.intl.format(Z, { price: (0, g.T4)(U.amount, U.currency) }) : P.interval === O.rV.YEAR ? v.intl.formatToPlainString(v.t.rtLTJC, { percent: k }) : null;
        };
    return (0, r.jsxs)(u.P3F, {
        role: L ? 'menuitem' : 'radio',
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
        onClick: M ? void 0 : () => i(n),
        className: a()(I.planOptionClickableContainer, {
            [I.selectedPlan]: L && o,
            [I.selectionBox]: L
        }),
        children: [
            (0, r.jsxs)('div', {
                className: a()(I.planOption, { [I.planOptionDisabled]: M }),
                children: [
                    (0, r.jsxs)('div', {
                        className: I.planOptionClickable,
                        children: [
                            !L &&
                                (0, r.jsx)(u.XZJ, {
                                    readOnly: !0,
                                    displayOnly: !0,
                                    value: o,
                                    shape: u.XZJ.Shapes.ROUND,
                                    color: c.Z.unsafe_rawColors.BRAND_500.css,
                                    type: u.XZJ.Types.INVERTED,
                                    className: I.planOptionCheckbox
                                }),
                            K(),
                            x &&
                                (0, r.jsxs)('span', {
                                    className: I.planOptionCurrentPlan,
                                    children: ['(', v.intl.string(v.t.ymSxh4), ')']
                                }),
                            !L && W()
                        ]
                    }),
                    S
                        ? (0, r.jsx)('div', {
                              className: a()({ [I.optionPriceSelected]: o }),
                              children: v.intl.format(v.t.hXcaLS, { price: z() })
                          })
                        : (0, r.jsx)('div', {
                              className: a()({ [I.optionSelected]: o || L }),
                              children: (0, g.T4)(U.amount, U.currency)
                          })
                ]
            }),
            S &&
                (0, r.jsx)('div', {
                    className: I.planOptionSubtextContainer,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-md/normal',
                        color: o ? 'text-default' : 'interactive-normal',
                        className: a()(I.planOptionSubtext, { [I.discountPlanOptionSubtext]: A }),
                        children: q()
                    })
                })
        ]
    });
}
