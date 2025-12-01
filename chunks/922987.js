n.d(t, { default: () => A });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    s = n(128069),
    o = n(493773),
    a = n(89057),
    c = n(583434),
    u = n(445794),
    d = n(987209),
    p = n(563132),
    b = n(409813),
    x = n(45572),
    y = n(126982),
    f = n(791785),
    m = n(51499),
    j = n(614277),
    O = n(152521),
    g = n(932563),
    h = n(336079),
    P = n(887505),
    v = n(748714),
    C = n(981631),
    S = n(388032);
function E(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let k = (e) => {
        let { handleClose: t, handleStepChange: n } = e,
            { blockedPayments: i } = (0, p.JL)();
        return ((0, l.useEffect)(() => {
            i || n(b.h8.REVIEW);
        }, [i, n]),
        i)
            ? (0, r.jsx)(a.Vq, { onClose: t })
            : null;
    },
    _ = (e) => {
        let { handleClose: t } = e,
            {
                skuId: n,
                onRedeemVirtualCurrency: a,
                isRedeeming: d,
                orbRedemptionError: b,
                orbProductContext: y,
                isRental: f,
                analyticsLocations: O,
                analyticsSourceLocation: E,
            } = (0, h.CH)();
        ((e) => {
            let { handleClose: t } = e,
                { purchaseState: n } = (0, p.JL)();
            (0, l.useEffect)(() => {
                n === x.A.COMPLETED && t();
            }, [n, t]);
        })({ handleClose: t });
        let {
            orbPriceAmount: I,
            orbBalanceToDisplay: k,
            onClickCheckout: _,
            isStepLoading: N,
            showCollectiblesDiscountWarning: L,
            errorMessage: T,
        } = ((e) => {
            var t;
            let {
                    skuId: n,
                    onRedeemVirtualCurrency: r,
                    orbRedemptionError: i,
                    orbProductContext: a,
                    analyticsLocations: d,
                    analyticsSourceLocation: b,
                    isRental: y,
                } = e,
                { selectedSkuId: f, setPurchaseState: m } = (0, p.JL)(),
                { product: j } = (0, c.T)(f),
                O = (0, g.cR)(),
                h = (0, l.useRef)(O),
                { emitOrbCheckoutPaymentFlowEvent: v } = (0, P.S)({
                    skuId: n,
                    orbProductContext: a,
                    analyticsLocations: d,
                    analyticsSourceLocation: b,
                });
            (0, o.ZP)(() => {
                v(C.rMx.PAYMENT_FLOW_LOADED);
            }),
                (0, l.useEffect)(() => {
                    null != i && null !== h.current && (v(C.rMx.PAYMENT_FLOW_FAILED, i), (h.current = null));
                }, [i, v]);
            let E = (0, l.useCallback)(() => {
                    (h.current = O),
                        v(C.rMx.PAYMENT_FLOW_COMPLETED),
                        r(() => {
                            m(x.A.COMPLETED), v(C.rMx.PAYMENT_FLOW_SUCCEEDED);
                        });
                }, [r, m, O, v]),
                I = null != (t = h.current) ? t : O,
                k = null != a ? a.orbPriceAmount : null;
            return {
                isStepLoading: null == f || null == j,
                showCollectiblesDiscountWarning: (0, u.N3)({
                    skuId: n,
                    isOrbsPurchase: !0,
                }),
                errorMessage: (0, l.useMemo)(
                    () =>
                        null == i
                            ? null
                            : i.code === s.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                              ? S.intl.string(S.t.keFvXM)
                              : i.code === s.SM.ALREADY_PURCHASED
                                ? S.intl.string(S.t.m371Mx)
                                : S.intl.string(S.t.fqJZ11),
                    [i],
                ),
                orbPriceAmount: k,
                orbBalanceToDisplay: I,
                onClickCheckout: E,
                selectedSkuId: f,
                isRental: y,
                product: j,
            };
        })({
            skuId: n,
            onRedeemVirtualCurrency: a,
            orbRedemptionError: b,
            orbProductContext: y,
            isRental: f,
            analyticsLocations: O,
            analyticsSourceLocation: E,
        });
        return N
            ? (0, r.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(m.Z, {}),
                      (0, r.jsxs)(j.C3, {
                          children: [
                              (0, r.jsxs)(i.Kqy, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != T
                                          ? (0, r.jsx)(i.M14, {
                                                type: "critical",
                                                children: T,
                                            })
                                          : null,
                                      L && (0, r.jsx)(v.f4, {}),
                                  ],
                              }),
                              (0, r.jsx)(v.A3, {
                                  skuId: n,
                                  orbPriceAmount: I,
                                  orbBalance: k,
                              }),
                          ],
                      }),
                      (0, r.jsx)(j.O3, {
                          children: (0, r.jsx)(v.f9, {
                              orbPriceAmount: I,
                              orbBalance: k,
                              isSubmitting: d,
                              onClickCheckout: _,
                              isRental: f,
                          }),
                      }),
                  ],
              });
    },
    N = [
        {
            key: null,
            renderStep: (e) => (0, r.jsx)(k, E({}, e)),
        },
        {
            key: b.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(_, E({}, e)),
            options: { useBreadcrumbLabel: () => S.intl.string(S.t.QBnNHq) },
        },
    ],
    L = (e, t, n) =>
        (0, r.jsx)(y.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1),
        }),
    T = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            i = I(e, ["skuId", "analyticsLocations"]);
        let { orbProductContext: s, analyticsSourceLocation: o } = (0, h.CH)(),
            { analyticsDataOverride: a, onClose: c } = ((e) => {
                let {
                        skuId: t,
                        analyticsLocations: n,
                        analyticsSourceLocation: r,
                        orbProductContext: i,
                        onClose: s,
                    } = e,
                    { emitOrbCheckoutPaymentFlowEvent: o } = (0, P.S)({
                        skuId: t,
                        orbProductContext: i,
                        analyticsLocations: n,
                        analyticsSourceLocation: r,
                    });
                return {
                    analyticsDataOverride: (0, l.useMemo)(() => {
                        var e, t;
                        if (null != i)
                            return {
                                price: null != (e = i.orbPriceAmount) ? e : void 0,
                                regular_price: null != (t = i.orbPriceAmount) ? t : void 0,
                                currency: C.pKx.DISCORD_ORB,
                            };
                    }, [i]),
                    onClose: (0, l.useCallback)(
                        async (e) => {
                            e || o(C.rMx.PAYMENT_FLOW_CANCELED), await s();
                        },
                        [s, o],
                    ),
                };
            })({
                skuId: t,
                analyticsLocations: n,
                analyticsSourceLocation: o,
                orbProductContext: s,
                onClose: i.onClose,
            });
        return (0, r.jsx)(f.PaymentModal, {
            applicationId: (0, O.Nb)(t),
            transitionState: i.transitionState,
            analyticsDataOverride: a,
            onClose: c,
            hideShadow: !0,
            skuId: t,
            renderHeader: L,
            initialPlanId: null,
            analyticsLocations: n,
        });
    },
    A = (e) => {
        var {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: l,
                analyticsSourceLocation: i,
                analyticsLocations: s = [],
                isRental: o,
            } = e,
            a = I(e, [
                "skuId",
                "loadId",
                "onCheckoutSuccess",
                "analyticsSourceLocation",
                "analyticsLocations",
                "isRental",
            ]);
        return (0, r.jsx)(p.PaymentContextProvider, {
            applicationId: (0, O.Nb)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: N,
            purchaseType: C.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, r.jsx)(h.dv, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: l,
                analyticsLocations: s,
                analyticsSourceLocation: i,
                isRental: o,
                children: (0, r.jsx)(d.b6, {
                    children: (0, r.jsx)(
                        T,
                        E(
                            {
                                skuId: t,
                                analyticsLocations: s,
                            },
                            a,
                        ),
                    ),
                }),
            }),
        });
    };
