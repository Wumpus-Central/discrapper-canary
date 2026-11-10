var l = n(627784),
    r = n(129230),
    i = n(652215);
function a(e, t) {
    let n = [e.type, e.code, e.decline_code].filter((e) => null != e && "" !== e);
    return n.length > 0 ? `stripe ${n.join("/")}: ${t}` : t;
}
n.d(
    t,
    {},
    {
        FY: function (e, t) {
            let { loadId: n, checkoutFlow: l, expressCheckoutType: a, availablePaymentMethods: s } = e,
                u =
                    null != s
                        ? Object.entries(s)
                              .filter((e) => {
                                  let [, t] = e;
                                  return t;
                              })
                              .map((e) => {
                                  let [t] = e;
                                  return t;
                              })
                        : [];
            return r.default.track(i.HAw.EXPRESS_CHECKOUT_LOADED, {
                load_id: n,
                analytics_location: t,
                checkout_flow: l,
                express_checkout_type: a,
                has_available_payment_method: u.length > 0,
                available_payment_methods: u,
            });
        },
        PD: function (e, t) {
            let { loadId: n, checkoutFlow: l, error: s, errorMessage: u } = e,
                c = { load_id: n, analytics_location: t, checkout_flow: l, error_message: a(s, u) };
            return (r.default.track(i.HAw.EXPRESS_CHECKOUT_LOAD_FAILED, c), c);
        },
        Y2: function (e, t) {
            let { paymentSource: n, autoPurchaseSkipReason: l, ...a } = e;
            return r.default.track(i.HAw.EXPRESS_CHECKOUT_PAYMENT_METHOD_SAVED, {
                load_id: a.loadId,
                analytics_location: t,
                checkout_flow: a.checkoutFlow,
                express_checkout_type: a.expressCheckoutType,
                express_payment_type: a.expressPaymentType,
                payment_source_id: n.id,
                auto_purchase_attempted: null == l,
                auto_purchase_skip_reason: l,
            });
        },
        c: function (e, t) {
            let { loadId: n, paymentSourceType: s, error: u, errorMessage: c, expressPaymentType: o } = e,
                d = u instanceof l.Ey ? u : null,
                h = null != d ? d.code : null,
                f = u instanceof l.Ey || null == u ? null : u,
                p = {
                    load_id: n,
                    analytics_location: t,
                    payment_source_type: s,
                    error_code: h,
                    error_message: null != f ? a(f, c) : c,
                    express_payment_type: o ?? null,
                };
            return (r.default.track(i.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, p), p);
        },
        dE: function (e, t) {
            let { loadId: n, checkoutFlow: l, expressCheckoutType: a, expressPaymentType: s } = e;
            return r.default.track(i.HAw.EXPRESS_CHECKOUT_CLICKED, {
                load_id: n,
                analytics_location: t,
                checkout_flow: l,
                express_checkout_type: a,
                express_payment_type: s,
            });
        },
        dJ: function (e, t) {
            let { loadId: n, checkoutFlow: l, expressCheckoutType: a, expressPaymentType: s } = e;
            return r.default.track(i.HAw.EXPRESS_CHECKOUT_CANCELED, {
                load_id: n,
                analytics_location: t,
                checkout_flow: l,
                express_checkout_type: a,
                express_payment_type: s,
            });
        },
        ik: function (e, t) {
            let {
                loadId: n,
                checkoutFlow: l,
                expressCheckoutType: a,
                displayedAmount: s,
                updatedAmount: u,
                currency: c,
                expressPaymentType: o,
            } = e;
            return r.default.track(i.HAw.EXPRESS_CHECKOUT_AMOUNT_CHANGED, {
                load_id: n,
                analytics_location: t,
                checkout_flow: l,
                express_checkout_type: a,
                displayed_amount: s,
                updated_amount: u,
                currency: c,
                express_payment_type: o,
            });
        },
        lO: function (e, t) {
            let { loadId: n, paymentSource: l, expressPaymentType: a } = e;
            return r.default.track(i.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                load_id: n,
                analytics_location: t,
                payment_source_id: l.id,
                payment_source_type: l.type,
                payment_source_country: l.paymentMethodCountry,
                express_payment_type: a ?? null,
            });
        },
    },
);
