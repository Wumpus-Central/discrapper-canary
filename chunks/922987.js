n.d(t, {
    _Y: () => N,
    default: () => D,
});
var r = n(951288),
    l = n(647438),
    a = n(481060),
    i = n(493773),
    o = n(89057),
    s = n(583434),
    c = n(987209),
    u = n(563132),
    d = n(409813),
    p = n(45572),
    f = n(126982),
    b = n(791785),
    y = n(51499),
    O = n(614277),
    v = n(626135),
    g = n(152521),
    m = n(932563),
    h = n(336079),
    j = n(748714),
    x = n(981631),
    P = n(231338),
    E = n(388032);
function _(e) {
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
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let A = {
        payment_type: x.Zuq[x.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: b.PaymentModal.CURRENT_VERSION,
    },
    N = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: l, analyticsSourceLocation: a } = t;
        e === x.rMx.PAYMENT_FLOW_CANCELED &&
            v.default.track(
                x.rMx.PAYMENT_FLOW_CANCELED,
                _(
                    {
                        load_id: n,
                        application_id: (0, g.N)(r),
                        location: l,
                        location_stack: l,
                        payment_gateway: P.ht.VIRTUAL_CURRENCY,
                        sku_id: r,
                        currency: x.pKx.DISCORD_ORB,
                    },
                    null != a && { source: a },
                    A,
                ),
            );
    },
    w = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, u.JL)(),
            { loadId: r, startTime: a } = n,
            { skuId: i, orbProductContext: o, analyticsLocations: s, analyticsSourceLocation: c } = (0, h.C)(),
            p = (0, l.useMemo)(() => {
                var t, n;
                return _(
                    C(
                        _(
                            {
                                load_id: r,
                                application_id: (0, g.N)(i),
                                location: s,
                                location_stack: s,
                                sku_id: i,
                                activity_session_id: e,
                                payment_gateway: P.ht.VIRTUAL_CURRENCY,
                            },
                            null != o && {
                                price: null != (t = o.orbPriceAmount) ? t : void 0,
                                regular_price: null != (n = o.orbPriceAmount) ? n : void 0,
                            },
                        ),
                        { currency: x.pKx.DISCORD_ORB },
                    ),
                    null != c && { source: c },
                    A,
                );
            }, [r, e, i, s, c, o]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, l.useCallback)(
                (e, n) => {
                    let r = Date.now() - a;
                    e === x.rMx.PAYMENT_FLOW_STARTED
                        ? v.default.track(
                              x.rMx.PAYMENT_FLOW_STARTED,
                              C(_({}, p), {
                                  has_saved_payment_source: t,
                                  payment_gateway: P.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null,
                              }),
                          )
                        : e === x.rMx.PAYMENT_FLOW_LOADED
                          ? v.default.track(
                                x.rMx.PAYMENT_FLOW_LOADED,
                                C(_({}, p), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: r,
                                }),
                            )
                          : e === x.rMx.PAYMENT_FLOW_CANCELED
                            ? v.default.track(x.rMx.PAYMENT_FLOW_CANCELED, C(_({}, p), { duration_ms: r }))
                            : e === x.rMx.PAYMENT_FLOW_COMPLETED
                              ? v.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, C(_({}, p), { duration_ms: r }))
                              : e === x.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? v.default.track(x.rMx.PAYMENT_FLOW_SUCCEEDED, C(_({}, p), { duration_ms: r }))
                                : e === x.rMx.PAYMENT_FLOW_FAILED &&
                                  v.default.track(
                                      x.rMx.PAYMENT_FLOW_FAILED,
                                      _(
                                          C(_({}, p), { duration_ms: r }),
                                          null != n
                                              ? {
                                                    payment_error_code: n.code,
                                                    error_message: n.message,
                                                }
                                              : {},
                                      ),
                                  );
                },
                [a, p, t],
            ),
        };
    },
    I = (e) => {
        let { handleClose: t, handleStepChange: n } = e,
            { blockedPayments: a } = (0, u.JL)();
        return ((0, l.useEffect)(() => {
            a || n(d.h8.REVIEW);
        }, [a, n]),
        a)
            ? (0, r.jsx)(o.Vq, { onClose: t })
            : null;
    },
    L = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: o, purchaseState: c, setPurchaseState: d } = (0, u.JL)(),
            { product: f } = (0, s.T)(o),
            { emitOrbCheckoutPaymentFlowEvent: b } = w(),
            {
                skuId: v,
                onRedeemVirtualCurrency: g,
                isRedeeming: P,
                orbRedemptionError: E,
                orbProductContext: _,
            } = (0, h.C)(),
            C = (0, m.cR)(),
            S = (0, l.useRef)(C);
        (0, i.ZP)(() => {
            b(x.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, l.useEffect)(() => {
                c === p.A.COMPLETED && n();
            }, [c, n]),
            (0, l.useEffect)(() => {
                null != E && null !== S.current && (b(x.rMx.PAYMENT_FLOW_FAILED, E), (S.current = null));
            }, [E, b]);
        let A = (0, l.useCallback)(() => {
            (S.current = C),
                b(x.rMx.PAYMENT_FLOW_COMPLETED),
                g(() => {
                    d(p.A.COMPLETED), b(x.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [g, d, C, b]);
        if (null == o || null == f) return (0, r.jsx)(a.$jN, { type: a.$jN.Type.WANDERING_CUBES });
        let N = null != (t = S.current) ? t : C,
            I = null != _ ? _.orbPriceAmount : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.Z, {}),
                (0, r.jsxs)(O.C3, {
                    children: [
                        (0, r.jsxs)(a.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(j.gY, { error: E }), (0, r.jsx)(j.f4, { skuId: v })],
                        }),
                        (0, r.jsx)(j.A3, {
                            skuId: v,
                            orbPriceAmount: I,
                            orbBalance: N,
                        }),
                    ],
                }),
                (0, r.jsx)(O.O3, {
                    children: (0, r.jsx)(j.f9, {
                        orbPriceAmount: I,
                        orbBalance: N,
                        isSubmitting: P,
                        onClickCheckout: A,
                    }),
                }),
            ],
        });
    },
    R = [
        {
            key: null,
            renderStep: (e) => (0, r.jsx)(I, _({}, e)),
        },
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(L, _({}, e)),
            options: { useBreadcrumbLabel: () => E.intl.string(E.t.QBnNHh) },
        },
    ],
    k = (e, t, n) =>
        (0, r.jsx)(f.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1),
        }),
    T = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            a = S(e, ["skuId", "analyticsLocations"]);
        let { orbProductContext: i } = (0, h.C)(),
            { emitOrbCheckoutPaymentFlowEvent: o } = w(),
            s = (0, l.useMemo)(() => {
                var e, t;
                if (null != i)
                    return {
                        price: null != (e = i.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = i.orbPriceAmount) ? t : void 0,
                        currency: x.pKx.DISCORD_ORB,
                    };
            }, [i]),
            c = (0, l.useCallback)(
                async (e) => {
                    e || o(x.rMx.PAYMENT_FLOW_CANCELED), await a.onClose();
                },
                [a, o],
            );
        return (0, r.jsx)(b.PaymentModal, {
            applicationId: (0, g.N)(t),
            transitionState: a.transitionState,
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
        var { skuId: t, loadId: n, onCheckoutSuccess: l, analyticsSourceLocation: a, analyticsLocations: i = [] } = e,
            o = S(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
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
                analyticsLocations: i,
                analyticsSourceLocation: a,
                children: (0, r.jsx)(c.b6, {
                    children: (0, r.jsx)(
                        T,
                        _(
                            {
                                skuId: t,
                                analyticsLocations: i,
                            },
                            o,
                        ),
                    ),
                }),
            }),
        });
    };
