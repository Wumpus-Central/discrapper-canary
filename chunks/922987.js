n.d(t, {
    _Y: () => w,
    default: () => G,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(493773),
    s = n(89057),
    l = n(583434),
    c = n(987209),
    u = n(563132),
    d = n(409813),
    f = n(45572),
    _ = n(126982),
    p = n(791785),
    h = n(51499),
    m = n(614277),
    g = n(626135),
    E = n(152521),
    b = n(932563),
    y = n(336079),
    O = n(748714),
    v = n(981631),
    I = n(231338),
    T = n(388032);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
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
let D = {
        payment_type: v.Zuq[v.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: p.PaymentModal.CURRENT_VERSION,
    },
    w = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: i, analyticsSourceLocation: a } = t;
        e === v.rMx.PAYMENT_FLOW_CANCELED &&
            g.default.track(
                v.rMx.PAYMENT_FLOW_CANCELED,
                A(
                    {
                        load_id: n,
                        application_id: (0, E.Nb)(r),
                        location: i,
                        location_stack: i,
                        payment_gateway: I.ht.VIRTUAL_CURRENCY,
                        sku_id: r,
                        currency: v.pKx.DISCORD_ORB,
                    },
                    null != a && { source: a },
                    D,
                ),
            );
    },
    x = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, u.JL)(),
            { loadId: r, startTime: a } = n,
            { skuId: o, orbProductContext: s, analyticsLocations: l, analyticsSourceLocation: c } = (0, y.C)(),
            f = (0, i.useMemo)(() => {
                var t, n;
                return A(
                    N(
                        A(
                            {
                                load_id: r,
                                application_id: (0, E.Nb)(o),
                                location: l,
                                location_stack: l,
                                sku_id: o,
                                activity_session_id: e,
                                payment_gateway: I.ht.VIRTUAL_CURRENCY,
                            },
                            null != s && {
                                price: null != (t = s.orbPriceAmount) ? t : void 0,
                                regular_price: null != (n = s.orbPriceAmount) ? n : void 0,
                            },
                        ),
                        { currency: v.pKx.DISCORD_ORB },
                    ),
                    null != c && { source: c },
                    D,
                );
            }, [r, e, o, l, c, s]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, i.useCallback)(
                (e, n) => {
                    let r = Date.now() - a;
                    e === v.rMx.PAYMENT_FLOW_STARTED
                        ? g.default.track(
                              v.rMx.PAYMENT_FLOW_STARTED,
                              N(A({}, f), {
                                  has_saved_payment_source: t,
                                  payment_gateway: I.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null,
                              }),
                          )
                        : e === v.rMx.PAYMENT_FLOW_LOADED
                          ? g.default.track(
                                v.rMx.PAYMENT_FLOW_LOADED,
                                N(A({}, f), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: r,
                                }),
                            )
                          : e === v.rMx.PAYMENT_FLOW_CANCELED
                            ? g.default.track(v.rMx.PAYMENT_FLOW_CANCELED, N(A({}, f), { duration_ms: r }))
                            : e === v.rMx.PAYMENT_FLOW_COMPLETED
                              ? g.default.track(v.rMx.PAYMENT_FLOW_COMPLETED, N(A({}, f), { duration_ms: r }))
                              : e === v.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? g.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, N(A({}, f), { duration_ms: r }))
                                : e === v.rMx.PAYMENT_FLOW_FAILED &&
                                  g.default.track(
                                      v.rMx.PAYMENT_FLOW_FAILED,
                                      A(
                                          N(A({}, f), { duration_ms: r }),
                                          null != n
                                              ? {
                                                    payment_error_code: n.code,
                                                    error_message: n.message,
                                                }
                                              : {},
                                      ),
                                  );
                },
                [a, f, t],
            ),
        };
    },
    L = (e) => {
        let { handleClose: t, handleStepChange: n } = e,
            { blockedPayments: a } = (0, u.JL)();
        return ((0, i.useEffect)(() => {
            a || n(d.h8.REVIEW);
        }, [a, n]),
        a)
            ? (0, r.jsx)(s.Vq, { onClose: t })
            : null;
    },
    M = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: s, purchaseState: c, setPurchaseState: d } = (0, u.JL)(),
            { product: _ } = (0, l.T)(s),
            { emitOrbCheckoutPaymentFlowEvent: p } = x(),
            {
                skuId: g,
                onRedeemVirtualCurrency: E,
                isRedeeming: I,
                orbRedemptionError: T,
                orbProductContext: S,
            } = (0, y.C)(),
            A = (0, b.cR)(),
            C = (0, i.useRef)(A);
        (0, o.ZP)(() => {
            p(v.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, i.useEffect)(() => {
                c === f.A.COMPLETED && n();
            }, [c, n]),
            (0, i.useEffect)(() => {
                null != T && null !== C.current && (p(v.rMx.PAYMENT_FLOW_FAILED, T), (C.current = null));
            }, [T, p]);
        let N = (0, i.useCallback)(() => {
            (C.current = A),
                p(v.rMx.PAYMENT_FLOW_COMPLETED),
                E(() => {
                    d(f.A.COMPLETED), p(v.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [E, d, A, p]);
        if (null == s || null == _) return (0, r.jsx)(a.$jN, { type: a.$jN.Type.WANDERING_CUBES });
        let R = null != (t = C.current) ? t : A,
            P = null != S ? S.orbPriceAmount : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.Z, {}),
                (0, r.jsxs)(m.C3, {
                    children: [
                        (0, r.jsxs)(a.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(O.gY, { error: T }), (0, r.jsx)(O.f4, { skuId: g })],
                        }),
                        (0, r.jsx)(O.A3, {
                            skuId: g,
                            orbPriceAmount: P,
                            orbBalance: R,
                        }),
                    ],
                }),
                (0, r.jsx)(m.O3, {
                    children: (0, r.jsx)(O.f9, {
                        orbPriceAmount: P,
                        orbBalance: R,
                        isSubmitting: I,
                        onClickCheckout: N,
                    }),
                }),
            ],
        });
    },
    k = [
        {
            key: null,
            renderStep: (e) => (0, r.jsx)(L, A({}, e)),
        },
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(M, A({}, e)),
            options: { useBreadcrumbLabel: () => T.intl.string(T.t.QBnNHq) },
        },
    ],
    j = (e, t, n) =>
        (0, r.jsx)(_.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1),
        }),
    U = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            a = R(e, ["skuId", "analyticsLocations"]);
        let { orbProductContext: o } = (0, y.C)(),
            { emitOrbCheckoutPaymentFlowEvent: s } = x(),
            l = (0, i.useMemo)(() => {
                var e, t;
                if (null != o)
                    return {
                        price: null != (e = o.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = o.orbPriceAmount) ? t : void 0,
                        currency: v.pKx.DISCORD_ORB,
                    };
            }, [o]),
            c = (0, i.useCallback)(
                async (e) => {
                    e || s(v.rMx.PAYMENT_FLOW_CANCELED), await a.onClose();
                },
                [a, s],
            );
        return (0, r.jsx)(p.PaymentModal, {
            applicationId: (0, E.Nb)(t),
            transitionState: a.transitionState,
            analyticsDataOverride: l,
            onClose: c,
            hideShadow: !0,
            skuId: t,
            renderHeader: j,
            initialPlanId: null,
            analyticsLocations: n,
        });
    },
    G = (e) => {
        var { skuId: t, loadId: n, onCheckoutSuccess: i, analyticsSourceLocation: a, analyticsLocations: o = [] } = e,
            s = R(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
        return (0, r.jsx)(u.PaymentContextProvider, {
            applicationId: (0, E.Nb)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: k,
            purchaseType: v.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, r.jsx)(y.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: i,
                analyticsLocations: o,
                analyticsSourceLocation: a,
                children: (0, r.jsx)(c.b6, {
                    children: (0, r.jsx)(
                        U,
                        A(
                            {
                                skuId: t,
                                analyticsLocations: o,
                            },
                            s,
                        ),
                    ),
                }),
            }),
        });
    };
