n.d(t, {
    R: () => u,
    V: () => d
});
var r = n(544891),
    i = n(351402),
    a = n(51144),
    o = n(720452),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            }));
    }
    return e;
}
async function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = null != t ? { regional_payment_element_source_types: t.regionalPaymentMethods } : void 0;
    return (
        await r.tn.post(
            c(
                {
                    url: s.ANM.BILLING_STRIPE_SETUP_INTENT_SECRET,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                    body: n
                },
                e
            )
        )
    ).body.client_secret;
}
let d = function () {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = (0, a.vP)(),
        s =
            null != t
                ? t
                : r
                  ? (0, o.Q)({
                        ipCountryCode: null != (e = i.Z.ipCountryCode) ? e : 'ALL',
                        location: 'create_setup_intent_for_payment_elements'
                    }).countryPaymentMethods
                  : [];
    return u(c({ failImmediatelyWhenRateLimited: !0 }, n), s.length > 0 ? { regionalPaymentMethods: s } : void 0);
};
