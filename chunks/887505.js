n.d(t, {
    S: () => g,
    _: () => h,
});
var r = n(473749),
    i = n(563132),
    a = n(409813),
    o = n(626135),
    s = n(152521),
    l = n(981631),
    c = n(545006),
    u = n(231338);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
        payment_type: l.Zuq[l.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: c.g,
    },
    h = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: i, analyticsSourceLocation: a } = t;
        e === l.rMx.PAYMENT_FLOW_CANCELED &&
            o.default.track(
                l.rMx.PAYMENT_FLOW_CANCELED,
                f(
                    {
                        load_id: n,
                        application_id: (0, s.Nb)(r),
                        location: i,
                        location_stack: i,
                        payment_gateway: u.ht.VIRTUAL_CURRENCY,
                        sku_id: r,
                        currency: l.pKx.DISCORD_ORB,
                    },
                    null != a && { source: a },
                    m,
                ),
            );
    },
    g = (e) => {
        let { skuId: t, orbProductContext: n, analyticsLocations: c, analyticsSourceLocation: d } = e,
            { activitySessionId: p, hasPaymentSources: h, contextMetadata: g } = (0, i.JL)(),
            { loadId: E, startTime: b } = g,
            y = (0, r.useMemo)(() => {
                var e, r;
                return f(
                    _(
                        f(
                            {
                                load_id: E,
                                application_id: (0, s.Nb)(t),
                                location: c,
                                location_stack: c,
                                sku_id: t,
                                activity_session_id: p,
                                payment_gateway: u.ht.VIRTUAL_CURRENCY,
                            },
                            null != n && {
                                price: null != (e = n.orbPriceAmount) ? e : void 0,
                                regular_price: null != (r = n.orbPriceAmount) ? r : void 0,
                            },
                        ),
                        { currency: l.pKx.DISCORD_ORB },
                    ),
                    null != d && { source: d },
                    m,
                );
            }, [E, p, t, c, d, n]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e, t) => {
                    let n = Date.now() - b;
                    e === l.rMx.PAYMENT_FLOW_STARTED
                        ? o.default.track(
                              l.rMx.PAYMENT_FLOW_STARTED,
                              _(f({}, y), {
                                  has_saved_payment_source: h,
                                  payment_gateway: u.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null,
                              }),
                          )
                        : e === l.rMx.PAYMENT_FLOW_LOADED
                          ? o.default.track(
                                l.rMx.PAYMENT_FLOW_LOADED,
                                _(f({}, y), {
                                    has_saved_payment_source: h,
                                    initial_step: a.h8.REVIEW,
                                    duration_ms: n,
                                }),
                            )
                          : e === l.rMx.PAYMENT_FLOW_CANCELED
                            ? o.default.track(l.rMx.PAYMENT_FLOW_CANCELED, _(f({}, y), { duration_ms: n }))
                            : e === l.rMx.PAYMENT_FLOW_COMPLETED
                              ? o.default.track(l.rMx.PAYMENT_FLOW_COMPLETED, _(f({}, y), { duration_ms: n }))
                              : e === l.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? o.default.track(l.rMx.PAYMENT_FLOW_SUCCEEDED, _(f({}, y), { duration_ms: n }))
                                : e === l.rMx.PAYMENT_FLOW_FAILED &&
                                  o.default.track(
                                      l.rMx.PAYMENT_FLOW_FAILED,
                                      f(
                                          _(f({}, y), { duration_ms: n }),
                                          null != t
                                              ? {
                                                    payment_error_code: t.code,
                                                    error_message: t.message,
                                                }
                                              : {},
                                      ),
                                  );
                },
                [b, y, h],
            ),
        };
    };
