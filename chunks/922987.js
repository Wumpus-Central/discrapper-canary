n.d(t, {
    _Y: () => N,
    default: () => D,
});
var r = n(951288),
    l = n(647438),
    i = n(481060),
    a = n(493773),
    o = n(89057),
    s = n(583434),
    c = n(987209),
    u = n(563132),
    d = n(409813),
    p = n(45572),
    f = n(126982),
    b = n(791785),
    y = n(51499),
    m = n(614277),
    O = n(626135),
    g = n(152521),
    j = n(932563),
    h = n(336079),
    v = n(748714),
    x = n(981631),
    E = n(231338),
    _ = n(388032);
function P(e) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
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
let S = {
        payment_type: x.Zuq[x.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: b.PaymentModal.CURRENT_VERSION,
    },
    N = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: l, analyticsSourceLocation: i } = t;
        e === x.rMx.PAYMENT_FLOW_CANCELED &&
            O.default.track(
                x.rMx.PAYMENT_FLOW_CANCELED,
                P(
                    {
                        load_id: n,
                        application_id: (0, g.N)(r),
                        location: l,
                        location_stack: l,
                        payment_gateway: E.ht.VIRTUAL_CURRENCY,
                        sku_id: r,
                        currency: x.pKx.DISCORD_ORB,
                    },
                    null != i && { source: i },
                    S,
                ),
            );
    },
    I = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, u.JL)(),
            { loadId: r, startTime: i } = n,
            { skuId: a, orbProductContext: o, analyticsLocations: s, analyticsSourceLocation: c } = (0, h.C)(),
            p = (0, l.useMemo)(() => {
                var t, n;
                return P(
                    C(
                        P(
                            {
                                load_id: r,
                                application_id: (0, g.N)(a),
                                location: s,
                                location_stack: s,
                                sku_id: a,
                                activity_session_id: e,
                                payment_gateway: E.ht.VIRTUAL_CURRENCY,
                            },
                            null != o && {
                                price: null != (t = o.orbPriceAmount) ? t : void 0,
                                regular_price: null != (n = o.orbPriceAmount) ? n : void 0,
                            },
                        ),
                        { currency: x.pKx.DISCORD_ORB },
                    ),
                    null != c && { source: c },
                    S,
                );
            }, [r, e, a, s, c, o]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, l.useCallback)(
                (e, n) => {
                    let r = Date.now() - i;
                    e === x.rMx.PAYMENT_FLOW_STARTED
                        ? O.default.track(
                              x.rMx.PAYMENT_FLOW_STARTED,
                              C(P({}, p), {
                                  has_saved_payment_source: t,
                                  payment_gateway: E.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null,
                              }),
                          )
                        : e === x.rMx.PAYMENT_FLOW_LOADED
                          ? O.default.track(
                                x.rMx.PAYMENT_FLOW_LOADED,
                                C(P({}, p), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: r,
                                }),
                            )
                          : e === x.rMx.PAYMENT_FLOW_CANCELED
                            ? O.default.track(x.rMx.PAYMENT_FLOW_CANCELED, C(P({}, p), { duration_ms: r }))
                            : e === x.rMx.PAYMENT_FLOW_COMPLETED
                              ? O.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, C(P({}, p), { duration_ms: r }))
                              : e === x.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? O.default.track(x.rMx.PAYMENT_FLOW_SUCCEEDED, C(P({}, p), { duration_ms: r }))
                                : e === x.rMx.PAYMENT_FLOW_FAILED &&
                                  O.default.track(
                                      x.rMx.PAYMENT_FLOW_FAILED,
                                      P(
                                          C(P({}, p), { duration_ms: r }),
                                          null != n
                                              ? {
                                                    payment_error_code: n.code,
                                                    error_message: n.message,
                                                }
                                              : {},
                                      ),
                                  );
                },
                [i, p, t],
            ),
        };
    },
    L = (e) => {
        let { handleClose: t, handleStepChange: n } = e,
            { blockedPayments: i } = (0, u.JL)();
        return ((0, l.useEffect)(() => {
            i || n(d.h8.REVIEW);
        }, [i, n]),
        i)
            ? (0, r.jsx)(o.Vq, { onClose: t })
            : null;
    },
    T = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: o, purchaseState: c, setPurchaseState: d } = (0, u.JL)(),
            { product: f } = (0, s.T)(o),
            { emitOrbCheckoutPaymentFlowEvent: b } = I(),
            {
                skuId: O,
                onRedeemVirtualCurrency: g,
                isRedeeming: E,
                orbRedemptionError: _,
                orbProductContext: P,
            } = (0, h.C)(),
            C = (0, j.cR)(),
            A = (0, l.useRef)(C);
        (0, a.ZP)(() => {
            b(x.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, l.useEffect)(() => {
                c === p.A.COMPLETED && n();
            }, [c, n]),
            (0, l.useEffect)(() => {
                null != _ && null !== A.current && (b(x.rMx.PAYMENT_FLOW_FAILED, _), (A.current = null));
            }, [_, b]);
        let S = (0, l.useCallback)(() => {
            (A.current = C),
                b(x.rMx.PAYMENT_FLOW_COMPLETED),
                g(() => {
                    d(p.A.COMPLETED), b(x.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [g, d, C, b]);
        if (null == o || null == f) return (0, r.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES });
        let N = null != (t = A.current) ? t : C,
            L = null != P ? P.orbPriceAmount : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.Z, {}),
                (0, r.jsxs)(m.C3, {
                    children: [
                        (0, r.jsxs)(i.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(v.gY, { error: _ }), (0, r.jsx)(v.f4, { skuId: O })],
                        }),
                        (0, r.jsx)(v.A3, {
                            skuId: O,
                            orbPriceAmount: L,
                            orbBalance: N,
                        }),
                    ],
                }),
                (0, r.jsx)(m.O3, {
                    children: (0, r.jsx)(v.f9, {
                        orbPriceAmount: L,
                        orbBalance: N,
                        isSubmitting: E,
                        onClickCheckout: S,
                    }),
                }),
            ],
        });
    },
    R = [
        {
            key: null,
            renderStep: (e) => (0, r.jsx)(L, P({}, e)),
        },
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(T, P({}, e)),
            options: { useBreadcrumbLabel: () => _.intl.string(_.t.QBnNHh) },
        },
    ],
    k = (e, t, n) =>
        (0, r.jsx)(f.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1),
        }),
    w = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            i = A(e, ["skuId", "analyticsLocations"]);
        let { orbProductContext: a } = (0, h.C)(),
            { emitOrbCheckoutPaymentFlowEvent: o } = I(),
            s = (0, l.useMemo)(() => {
                var e, t;
                if (null != a)
                    return {
                        price: null != (e = a.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = a.orbPriceAmount) ? t : void 0,
                        currency: x.pKx.DISCORD_ORB,
                    };
            }, [a]),
            c = (0, l.useCallback)(
                async (e) => {
                    e || o(x.rMx.PAYMENT_FLOW_CANCELED), await i.onClose();
                },
                [i, o],
            );
        return (0, r.jsx)(b.PaymentModal, {
            applicationId: (0, g.N)(t),
            transitionState: i.transitionState,
            analyticsDataOverride: s,
            onClose: c,
            hideShadow: !0,
            skuId: t,
            renderHeader: k,
            initialPlanId: null,
            analyticsLocations: n,
        });
    },
    D = (e) => {
        var { skuId: t, loadId: n, onCheckoutSuccess: l, analyticsSourceLocation: i, analyticsLocations: a = [] } = e,
            o = A(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
        return (0, r.jsx)(u.PaymentContextProvider, {
            applicationId: (0, g.N)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: R,
            purchaseType: x.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, r.jsx)(h.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: l,
                analyticsLocations: a,
                analyticsSourceLocation: i,
                children: (0, r.jsx)(c.b6, {
                    children: (0, r.jsx)(
                        w,
                        P(
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
