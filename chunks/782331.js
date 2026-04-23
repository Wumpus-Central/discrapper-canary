"use strict";
n.d(t, { tj: () => E, jf: () => m, K8: () => f, i0: () => h });
var i = n(636537),
    r = n(228366),
    s = n(845584),
    a = n(136857),
    o = n(202613),
    l = n(954571),
    d = n(739508);
let _ = [
    "api_connection_error",
    "api_error",
    "authentication_error",
    "card_error",
    "idempotency_error",
    "invalid_request_error",
    "rate_limit_error",
    "validation_error",
];
var u = n(652215),
    c = n(985018);
async function E(e) {
    try {
        return (
            await i.Bo.post({
                url: u.Rsh.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
                body: {
                    billing_address: {
                        name: e.name,
                        line_1: e.line1,
                        line_2: e.line2,
                        city: e.city,
                        state: e.state,
                        postal_code: e.postalCode,
                        country: e.country,
                        email: e.email,
                    },
                },
                rejectWithError: !1,
            })
        ).body.token;
    } catch (t) {
        let e = (0, a.Wd)(t);
        throw (r.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }), e);
    }
}
function h(e) {
    let t,
        n,
        i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.intl.string(c.t.khEaRI),
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (_.includes(e.type)) {
        let r = null != e.message ? `${a}: ${e.message}` : a,
            o = {
                failure_message: r,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: e.payment_method?.type,
            };
        (n = o),
            "card_error" === e.type &&
                (l.default.track(u.HAw.PAYMENT_SOURCE_CREATION_FAILED, { ...o, stacktrace: Error().stack }), (i = !1)),
            (t = new s.Ey(r));
    } else
        (n = { failure_message: (t = new s.Ey("string" == typeof e ? a : e)).message, status_code: t.code }),
            429 === t.code && (i = !1);
    r.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: t });
    let E = Error("string" == typeof e ? e : t.message);
    return i && (0, d.pM)(E, { ...o, extra: { ...n, ...o.extra } }), E;
}
async function m(e) {
    let {
        body: { state: t },
    } = await i.Bo.post({ url: u.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return r.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t;
}
async function f(e, t, n, s) {
    let l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    r.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let a = await i.Bo.post({
                url: u.Rsh.BILLING_PAYMENT_SOURCES,
                query: { location: s.analyticsLocation },
                body: {
                    payment_gateway: e,
                    token: t,
                    billing_address: {
                        name: n.name,
                        line_1: n.line1,
                        line_2: n.line2,
                        city: n.city,
                        state: n.state,
                        postal_code: n.postalCode,
                        country: n.country,
                        email: n.email,
                    },
                    billing_address_token: s.billingAddressToken,
                    bank: s.bank,
                    return_url: s.returnUrl,
                    default: l,
                },
                rejectWithError: !1,
            }),
            d = o.Ay.createFromServer(a.body);
        return r.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: d }), d;
    } catch (t) {
        let e = (0, a.Wd)(t);
        throw (
            (t?.body?.adyen_redirect_url && (e.fields.adyen_redirect_url = t?.body?.adyen_redirect_url),
            e.code !== a.tG.CONFIRMATION_REQUIRED &&
                r.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }),
            e)
        );
    }
}
