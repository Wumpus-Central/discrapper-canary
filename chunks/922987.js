n.d(t, {
    HR: () => M,
    PR: () => w,
    default: () => U,
    sF: () => D,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(128069),
    s = n(493773),
    l = n(89057),
    c = n(583434),
    u = n(445794),
    d = n(987209),
    f = n(563132),
    p = n(409813),
    _ = n(45572),
    m = n(126982),
    h = n(791785),
    g = n(51499),
    E = n(614277),
    b = n(152521),
    y = n(932563),
    O = n(336079),
    v = n(887505),
    S = n(748714),
    I = n(981631),
    T = n(388032);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = (e) => {
        let { handleClose: t, handleStepChange: n } = e,
            { blockedPayments: a } = (0, f.JL)();
        return ((0, i.useEffect)(() => {
            a || n(p.h8.REVIEW);
        }, [a, n]),
        a)
            ? (0, r.jsx)(l.Vq, { onClose: t })
            : null;
    },
    w = (e) => {
        let { handleClose: t } = e,
            { purchaseState: n } = (0, f.JL)();
        (0, i.useEffect)(() => {
            n === _.A.COMPLETED && t();
        }, [n, t]);
    },
    D = (e) => {
        var t;
        let {
                skuId: n,
                onRedeemVirtualCurrency: r,
                orbRedemptionError: a,
                orbProductContext: l,
                analyticsLocations: d,
                analyticsSourceLocation: p,
            } = e,
            { selectedSkuId: m, setPurchaseState: h } = (0, f.JL)(),
            { product: g } = (0, c.T)(m),
            E = (0, y.cR)(),
            b = (0, i.useRef)(E),
            { emitOrbCheckoutPaymentFlowEvent: O } = (0, v.S)({
                skuId: n,
                orbProductContext: l,
                analyticsLocations: d,
                analyticsSourceLocation: p,
            });
        (0, s.ZP)(() => {
            O(I.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, i.useEffect)(() => {
                null != a && null !== b.current && (O(I.rMx.PAYMENT_FLOW_FAILED, a), (b.current = null));
            }, [a, O]);
        let S = (0, i.useCallback)(() => {
                (b.current = E),
                    O(I.rMx.PAYMENT_FLOW_COMPLETED),
                    r(() => {
                        h(_.A.COMPLETED), O(I.rMx.PAYMENT_FLOW_SUCCEEDED);
                    });
            }, [r, h, E, O]),
            A = null != (t = b.current) ? t : E,
            C = null != l ? l.orbPriceAmount : null;
        return {
            isStepLoading: null == m || null == g,
            showCollectiblesDiscountWarning: (0, u.N3)({
                skuId: n,
                isOrbsPurchase: !0,
            }),
            errorMessage: (0, i.useMemo)(
                () =>
                    null == a
                        ? null
                        : a.code === o.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                          ? T.intl.string(T.t.keFvXM)
                          : a.code === o.SM.ALREADY_PURCHASED
                            ? T.intl.string(T.t.m371Mx)
                            : T.intl.string(T.t.fqJZ11),
                [a],
            ),
            orbPriceAmount: C,
            orbBalanceToDisplay: A,
            onClickCheckout: S,
            selectedSkuId: m,
            product: g,
        };
    },
    x = (e) => {
        let { handleClose: t } = e,
            {
                skuId: n,
                onRedeemVirtualCurrency: i,
                isRedeeming: o,
                orbRedemptionError: s,
                orbProductContext: l,
                analyticsLocations: c,
                analyticsSourceLocation: u,
                rentalDuration: d,
            } = (0, O.CH)();
        w({ handleClose: t });
        let {
            orbPriceAmount: f,
            orbBalanceToDisplay: p,
            onClickCheckout: _,
            isStepLoading: m,
            showCollectiblesDiscountWarning: h,
            errorMessage: b,
        } = D({
            skuId: n,
            onRedeemVirtualCurrency: i,
            orbRedemptionError: s,
            orbProductContext: l,
            analyticsLocations: c,
            analyticsSourceLocation: u,
        });
        return m
            ? (0, r.jsx)(a.$jN, { type: a.$jN.Type.WANDERING_CUBES })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(g.Z, {}),
                      (0, r.jsxs)(E.C3, {
                          children: [
                              (0, r.jsxs)(a.Kqy, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != b
                                          ? (0, r.jsx)(a.M14, {
                                                type: "critical",
                                                children: b,
                                            })
                                          : null,
                                      h && (0, r.jsx)(S.f4, {}),
                                  ],
                              }),
                              (0, r.jsx)(S.A3, {
                                  skuId: n,
                                  orbPriceAmount: f,
                                  orbBalance: p,
                                  rentalDuration: d,
                              }),
                          ],
                      }),
                      (0, r.jsx)(E.O3, {
                          children: (0, r.jsx)(S.f9, {
                              orbPriceAmount: f,
                              orbBalance: p,
                              isSubmitting: o,
                              onClickCheckout: _,
                              rentalDuration: d,
                          }),
                      }),
                  ],
              });
    },
    L = [
        {
            key: null,
            renderStep: (e) => (0, r.jsx)(R, C({}, e)),
        },
        {
            key: p.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(x, C({}, e)),
            options: { useBreadcrumbLabel: () => T.intl.string(T.t.QBnNHq) },
        },
    ],
    j = (e, t, n) =>
        (0, r.jsx)(m.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1),
        }),
    M = (e) => {
        let { skuId: t, analyticsLocations: n, analyticsSourceLocation: r, orbProductContext: a, onClose: o } = e,
            { emitOrbCheckoutPaymentFlowEvent: s } = (0, v.S)({
                skuId: t,
                orbProductContext: a,
                analyticsLocations: n,
                analyticsSourceLocation: r,
            });
        return {
            analyticsDataOverride: (0, i.useMemo)(() => {
                var e, t;
                if (null != a)
                    return {
                        price: null != (e = a.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = a.orbPriceAmount) ? t : void 0,
                        currency: I.pKx.DISCORD_ORB,
                    };
            }, [a]),
            onClose: (0, i.useCallback)(
                async (e) => {
                    e || s(I.rMx.PAYMENT_FLOW_CANCELED), await o();
                },
                [o, s],
            ),
        };
    },
    k = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            i = N(e, ["skuId", "analyticsLocations"]);
        let { orbProductContext: a, analyticsSourceLocation: o } = (0, O.CH)(),
            { analyticsDataOverride: s, onClose: l } = M({
                skuId: t,
                analyticsLocations: n,
                analyticsSourceLocation: o,
                orbProductContext: a,
                onClose: i.onClose,
            });
        return (0, r.jsx)(h.PaymentModal, {
            applicationId: (0, b.Nb)(t),
            transitionState: i.transitionState,
            analyticsDataOverride: s,
            onClose: l,
            hideShadow: !0,
            skuId: t,
            renderHeader: j,
            initialPlanId: null,
            analyticsLocations: n,
        });
    },
    U = (e) => {
        var {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: i,
                analyticsSourceLocation: a,
                analyticsLocations: o = [],
                rentalDuration: s,
            } = e,
            l = N(e, [
                "skuId",
                "loadId",
                "onCheckoutSuccess",
                "analyticsSourceLocation",
                "analyticsLocations",
                "rentalDuration",
            ]);
        return (0, r.jsx)(f.PaymentContextProvider, {
            applicationId: (0, b.Nb)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: L,
            purchaseType: I.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, r.jsx)(O.dv, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: i,
                analyticsLocations: o,
                analyticsSourceLocation: a,
                rentalDuration: s,
                children: (0, r.jsx)(d.b6, {
                    children: (0, r.jsx)(
                        k,
                        C(
                            {
                                skuId: t,
                                analyticsLocations: o,
                            },
                            l,
                        ),
                    ),
                }),
            }),
        });
    };
