n.d(t, {
    S: () => E,
    _: () => g,
});
var r = n(473749),
    i = n(844718),
    a = n(563132),
    o = n(409813),
    s = n(626135),
    l = n(152521),
    c = n(981631),
    u = n(545006),
    d = n(231338);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = () => {
        let { enabled: e } = (0, i.VL)({ location: "getBaseAnalyticsEventData" });
        return {
            payment_type: c.Zuq[c.GZQ.ONE_TIME],
            is_gift: !1,
            eligible_for_trial: !1,
            payment_modal_version: e ? "v2" : u.g,
        };
    },
    g = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: i, analyticsSourceLocation: a } = t;
        e === c.rMx.PAYMENT_FLOW_CANCELED &&
            s.default.track(
                c.rMx.PAYMENT_FLOW_CANCELED,
                p(
                    {
                        load_id: n,
                        application_id: (0, l.N)(r),
                        location: i,
                        location_stack: i,
                        payment_gateway: d.ht.VIRTUAL_CURRENCY,
                        sku_id: r,
                        currency: c.pKx.DISCORD_ORB,
                    },
                    null != a && { source: a },
                    m(),
                ),
            );
    },
    E = (e) => {
        let { skuId: t, orbProductContext: n, analyticsLocations: i, analyticsSourceLocation: u } = e,
            { activitySessionId: f, hasPaymentSources: _, contextMetadata: g } = (0, a.JL)(),
            { loadId: E, startTime: b } = g,
            y = (0, r.useMemo)(() => {
                var e, r;
                return p(
                    h(
                        p(
                            {
                                load_id: E,
                                application_id: (0, l.N)(t),
                                location: i,
                                location_stack: i,
                                sku_id: t,
                                activity_session_id: f,
                                payment_gateway: d.ht.VIRTUAL_CURRENCY,
                            },
                            null != n && {
                                price: null != (e = n.orbPriceAmount) ? e : void 0,
                                regular_price: null != (r = n.orbPriceAmount) ? r : void 0,
                            },
                        ),
                        { currency: c.pKx.DISCORD_ORB },
                    ),
                    null != u && { source: u },
                    m(),
                );
            }, [E, f, t, i, u, n]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e, t) => {
                    let n = Date.now() - b;
                    e === c.rMx.PAYMENT_FLOW_STARTED
                        ? s.default.track(
                              c.rMx.PAYMENT_FLOW_STARTED,
                              h(p({}, y), {
                                  has_saved_payment_source: _,
                                  payment_gateway: d.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null,
                              }),
                          )
                        : e === c.rMx.PAYMENT_FLOW_LOADED
                          ? s.default.track(
                                c.rMx.PAYMENT_FLOW_LOADED,
                                h(p({}, y), {
                                    has_saved_payment_source: _,
                                    initial_step: o.h8.REVIEW,
                                    duration_ms: n,
                                }),
                            )
                          : e === c.rMx.PAYMENT_FLOW_CANCELED
                            ? s.default.track(c.rMx.PAYMENT_FLOW_CANCELED, h(p({}, y), { duration_ms: n }))
                            : e === c.rMx.PAYMENT_FLOW_COMPLETED
                              ? s.default.track(c.rMx.PAYMENT_FLOW_COMPLETED, h(p({}, y), { duration_ms: n }))
                              : e === c.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? s.default.track(c.rMx.PAYMENT_FLOW_SUCCEEDED, h(p({}, y), { duration_ms: n }))
                                : e === c.rMx.PAYMENT_FLOW_FAILED &&
                                  s.default.track(
                                      c.rMx.PAYMENT_FLOW_FAILED,
                                      p(
                                          h(p({}, y), { duration_ms: n }),
                                          null != t
                                              ? {
                                                    payment_error_code: t.code,
                                                    error_message: t.message,
                                                }
                                              : {},
                                      ),
                                  );
                },
                [b, y, _],
            ),
        };
    };
