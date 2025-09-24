r.d(t, {
    _Y: () => w,
    default: () => D,
});
var n = r(951288),
    l = r(647438),
    i = r(481060),
    a = r(493773),
    o = r(89057),
    s = r(583434),
    c = r(987209),
    u = r(563132),
    d = r(409813),
    p = r(45572),
    f = r(126982),
    b = r(791785),
    h = r(51499),
    g = r(27034),
    O = r(626135),
    v = r(152521),
    y = r(932563),
    m = r(336079),
    j = r(748714),
    P = r(981631),
    _ = r(231338),
    E = r(388032);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let I = {
        payment_type: P.Zuq[P.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: b.PaymentModal.CURRENT_VERSION,
    },
    w = (e, t) => {
        let { loadId: r, skuId: n, analyticsLocations: l, analyticsSourceLocation: i } = t;
        e === P.rMx.PAYMENT_FLOW_CANCELED &&
            O.default.track(
                P.rMx.PAYMENT_FLOW_CANCELED,
                x(
                    {
                        load_id: r,
                        application_id: (0, v.N)(n),
                        location: l,
                        location_stack: l,
                        sku_id: n,
                        currency: P.pKx.DISCORD_ORB,
                    },
                    null != i && { source: i },
                    I,
                ),
            );
    },
    A = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: r } = (0, u.JL)(),
            { loadId: n, startTime: i } = r,
            { skuId: a, orbProductContext: o, analyticsLocations: s, analyticsSourceLocation: c } = (0, m.C)(),
            p = (0, l.useMemo)(() => {
                var t, r;
                return x(
                    C(
                        x(
                            {
                                load_id: n,
                                application_id: (0, v.N)(a),
                                location: s,
                                location_stack: s,
                                sku_id: a,
                                activity_session_id: e,
                            },
                            null != o && {
                                price: null != (t = o.orbPriceAmount) ? t : void 0,
                                regular_price: null != (r = o.orbPriceAmount) ? r : void 0,
                            },
                        ),
                        { currency: P.pKx.DISCORD_ORB },
                    ),
                    null != c && { source: c },
                    I,
                );
            }, [n, e, a, s, c, o]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, l.useCallback)(
                (e, r) => {
                    let n = Date.now() - i;
                    e === P.rMx.PAYMENT_FLOW_STARTED
                        ? O.default.track(
                              P.rMx.PAYMENT_FLOW_STARTED,
                              C(x({}, p), {
                                  has_saved_payment_source: t,
                                  payment_gateway: _.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null,
                              }),
                          )
                        : e === P.rMx.PAYMENT_FLOW_LOADED
                          ? O.default.track(
                                P.rMx.PAYMENT_FLOW_LOADED,
                                C(x({}, p), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: n,
                                }),
                            )
                          : e === P.rMx.PAYMENT_FLOW_CANCELED
                            ? O.default.track(P.rMx.PAYMENT_FLOW_CANCELED, C(x({}, p), { duration_ms: n }))
                            : e === P.rMx.PAYMENT_FLOW_COMPLETED
                              ? O.default.track(
                                    P.rMx.PAYMENT_FLOW_COMPLETED,
                                    C(x({}, p), {
                                        payment_gateway: _.ht.VIRTUAL_CURRENCY,
                                        duration_ms: n,
                                    }),
                                )
                              : e === P.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? O.default.track(P.rMx.PAYMENT_FLOW_SUCCEEDED, C(x({}, p), { duration_ms: n }))
                                : e === P.rMx.PAYMENT_FLOW_FAILED &&
                                  O.default.track(
                                      P.rMx.PAYMENT_FLOW_FAILED,
                                      x(
                                          C(x({}, p), {
                                              payment_gateway: _.ht.VIRTUAL_CURRENCY,
                                              duration_ms: n,
                                          }),
                                          null != r
                                              ? {
                                                    payment_error_code: r.code,
                                                    error_message: r.message,
                                                }
                                              : {},
                                      ),
                                  );
                },
                [i, p, t],
            ),
        };
    },
    T = (e) => {
        let { handleClose: t, handleStepChange: r } = e,
            { blockedPayments: i } = (0, u.JL)();
        return ((0, l.useEffect)(() => {
            i || r(d.h8.REVIEW);
        }, [i, r]),
        i)
            ? (0, n.jsx)(o.Vq, { onClose: t })
            : null;
    },
    R = (e) => {
        var t;
        let { handleClose: r } = e,
            { selectedSkuId: o, purchaseState: c, setPurchaseState: d } = (0, u.JL)(),
            { product: f } = (0, s.T)(o),
            { emitOrbCheckoutPaymentFlowEvent: b } = A(),
            {
                skuId: O,
                onRedeemVirtualCurrency: v,
                isRedeeming: _,
                orbRedemptionError: E,
                orbProductContext: x,
            } = (0, m.C)(),
            C = (0, y.cR)(),
            S = (0, l.useRef)(C);
        (0, a.ZP)(() => {
            b(P.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, l.useEffect)(() => {
                c === p.A.COMPLETED && r();
            }, [c, r]),
            (0, l.useEffect)(() => {
                null != E && null !== S.current && (b(P.rMx.PAYMENT_FLOW_FAILED, E), (S.current = null));
            }, [E, b]);
        let I = (0, l.useCallback)(() => {
            (S.current = C),
                b(P.rMx.PAYMENT_FLOW_COMPLETED),
                v(() => {
                    d(p.A.COMPLETED), b(P.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [v, d, C, b]);
        if (null == o || null == f) return (0, n.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES });
        let w = null != (t = S.current) ? t : C,
            T = null != x ? x.orbPriceAmount : null;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(h.Z, {}),
                (0, n.jsxs)(g.C3, {
                    children: [
                        (0, n.jsxs)(i.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, n.jsx)(j.gY, { error: E }), (0, n.jsx)(j.f4, { skuId: O })],
                        }),
                        (0, n.jsx)(j.A3, {
                            skuId: O,
                            orbPriceAmount: T,
                            orbBalance: w,
                        }),
                    ],
                }),
                (0, n.jsx)(g.O3, {
                    children: (0, n.jsx)(j.f9, {
                        orbPriceAmount: T,
                        orbBalance: w,
                        isSubmitting: _,
                        onClickCheckout: I,
                    }),
                }),
            ],
        });
    },
    L = [
        {
            key: null,
            renderStep: (e) => (0, n.jsx)(T, x({}, e)),
        },
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, n.jsx)(R, x({}, e)),
            options: { useBreadcrumbLabel: () => E.intl.string(E.t.QBnNHh) },
        },
    ],
    N = (e, t, r) =>
        (0, n.jsx)(f.Z, {
            isOrbCheckout: !0,
            step: r,
            onClose: () => t(!1),
        }),
    k = (e) => {
        var { skuId: t, analyticsLocations: r = [] } = e,
            i = S(e, ["skuId", "analyticsLocations"]);
        let { orbProductContext: a } = (0, m.C)(),
            { emitOrbCheckoutPaymentFlowEvent: o } = A(),
            s = (0, l.useMemo)(() => {
                var e, t;
                if (null != a)
                    return {
                        price: null != (e = a.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = a.orbPriceAmount) ? t : void 0,
                        currency: P.pKx.DISCORD_ORB,
                    };
            }, [a]),
            c = (0, l.useCallback)(
                async (e) => {
                    e || o(P.rMx.PAYMENT_FLOW_CANCELED), await i.onClose();
                },
                [i, o],
            );
        return (0, n.jsx)(b.PaymentModal, {
            applicationId: (0, v.N)(t),
            transitionState: i.transitionState,
            analyticsDataOverride: s,
            onClose: c,
            hideShadow: !0,
            skuId: t,
            renderHeader: N,
            initialPlanId: null,
            analyticsLocations: r,
        });
    },
    D = (e) => {
        var { skuId: t, loadId: r, onCheckoutSuccess: l, analyticsSourceLocation: i, analyticsLocations: a = [] } = e,
            o = S(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
        return (0, n.jsx)(u.PaymentContextProvider, {
            applicationId: (0, v.N)(t),
            activeSubscription: null,
            loadId: r,
            stepConfigs: L,
            purchaseType: P.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, n.jsx)(m.d, {
                skuId: t,
                loadId: r,
                onCheckoutSuccess: l,
                analyticsLocations: a,
                analyticsSourceLocation: i,
                children: (0, n.jsx)(c.b6, {
                    children: (0, n.jsx)(
                        k,
                        x(
                            {
                                skuId: t,
                                analyticsLocations: a,
                            },
                            o,
                        ),
                    ),
                }),
            }),
        });
    };
