n.d(t, {
    R: () => c,
    V: () => u,
});
var r = n(544891),
    i = n(351402),
    a = n(720452),
    o = n(981631);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
async function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = null != t ? { regional_payment_element_source_types: t.regionalPaymentMethods } : void 0;
    return (
        await r.tn.post(
            l(
                {
                    url: o.ANM.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                    body: n,
                },
                e,
            ),
        )
    ).body.client_secret;
}
let u = function () {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r =
            null != t
                ? t
                : (0, a.Q)({
                      ipCountryCode: null != (e = i.Z.ipCountryCode) ? e : "ALL",
                      location: "create_setup_intent_for_payment_elements",
                  }).countryPaymentMethods;
    return c(l({ failImmediatelyWhenRateLimited: !0 }, n), r.length > 0 ? { regionalPaymentMethods: r } : void 0);
};
