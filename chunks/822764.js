n.d(t, { FY: () => c, PD: () => o, c: () => u, ik: () => d, lO: () => a });
var l = n(913122),
    r = n(174459),
    i = n(652215);
function a(e, t) {
    let { loadId: n, paymentSource: l } = e;
    return r.default.track(i.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
        load_id: n,
        analytics_location: t,
        payment_source_id: l.id,
        payment_source_type: l.type,
        payment_source_country: l.paymentMethodCountry,
    });
}
function s(e, t) {
    let n = [e.type, e.code, e.decline_code].filter((e) => null != e && "" !== e);
    return n.length > 0 ? `stripe ${n.join("/")}: ${t}` : t;
}
function u(e, t) {
    let { loadId: n, paymentSourceType: a, error: u, errorMessage: c } = e,
        o = u instanceof l.Ey ? u : null,
        d = null != o ? o.code : null,
        f = u instanceof l.Ey || null == u ? null : u,
        h = {
            load_id: n,
            analytics_location: t,
            payment_source_type: a,
            error_code: d,
            error_message: null != f ? s(f, c) : c,
        };
    return (r.default.track(i.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, h), h);
}
function c(e, t) {
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
}
function o(e, t) {
    let { loadId: n, checkoutFlow: l, error: a, errorMessage: u } = e,
        c = { load_id: n, analytics_location: t, checkout_flow: l, error_message: s(a, u) };
    return (r.default.track(i.HAw.EXPRESS_CHECKOUT_LOAD_FAILED, c), c);
}
function d(e, t) {
    let { loadId: n, checkoutFlow: l, expressCheckoutType: a, displayedAmount: s, updatedAmount: u, currency: c } = e;
    return r.default.track(i.HAw.EXPRESS_CHECKOUT_AMOUNT_CHANGED, {
        load_id: n,
        analytics_location: t,
        checkout_flow: l,
        express_checkout_type: a,
        displayed_amount: s,
        updated_amount: u,
        currency: c,
    });
}
