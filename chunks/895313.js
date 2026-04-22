"use strict";
n.d(t, { K8: () => p, i0: () => E, jf: () => h, tj: () => f });
var r = n(562465),
    i = n(73153),
    s = n(198982),
    a = n(136857),
    o = n(202613),
    l = n(954571),
    u = n(739508),
    d = n(535833),
    c = n(652215),
    _ = n(985018);
async function f(e) {
    try {
        return (
            await r.Bo.post({
                url: c.Rsh.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
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
        throw (i.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }), e);
    }
}
function E(e) {
    let t,
        n,
        r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.intl.string(_.t.khEaRI),
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (d.D.includes(e.type)) {
        let i = null != e.message ? `${a}: ${e.message}` : a,
            o = {
                failure_message: i,
                error_type: e.type,
                failure_code: e.code,
                failure_sub_code: e.decline_code,
                payment_source_type: e.payment_method?.type,
            };
        (n = o),
            "card_error" === e.type &&
                (l.default.track(c.HAw.PAYMENT_SOURCE_CREATION_FAILED, { ...o, stacktrace: Error().stack }), (r = !1)),
            (t = new s.Ey(i));
    } else
        (n = { failure_message: (t = new s.Ey("string" == typeof e ? a : e)).message, status_code: t.code }),
            429 === t.code && (r = !1);
    i.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: t });
    let f = Error("string" == typeof e ? e : t.message);
    return r && (0, u.pM)(f, { ...o, extra: { ...n, ...o.extra } }), f;
}
async function h(e) {
    let {
        body: { state: t },
    } = await r.Bo.post({ url: c.Rsh.BILLING_POPUP_BRIDGE(e), oldFormErrors: !0, rejectWithError: !0 });
    return i.h.dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: t, paymentSourceType: e }), t;
}
async function p(e, t, n, s) {
    let l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    i.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    try {
        let a = await r.Bo.post({
                url: c.Rsh.BILLING_PAYMENT_SOURCES,
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
            u = o.Ay.createFromServer(a.body);
        return i.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: u }), u;
    } catch (t) {
        let e = (0, a.Wd)(t);
        throw (
            (t?.body?.adyen_redirect_url && (e.fields.adyen_redirect_url = t?.body?.adyen_redirect_url),
            e.code !== a.tG.CONFIRMATION_REQUIRED &&
                i.h.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: e }),
            e)
        );
    }
}
