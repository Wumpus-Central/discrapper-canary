r.d(n, {
    a: function () {
        return s;
    },
    b: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-11_checkout_optimization_desktop_client_google_pay',
    label: 'Checkout Optimization Browser Autofill Google Pay',
    defaultConfig: {
        enabled: !1,
        delay: !1
    },
    commonTriggerPoint: a.$P.PAYMENT_FLOW_STARTED,
    treatments: [
        {
            id: 1,
            label: 'Enabled with delay',
            config: {
                enabled: !0,
                delay: !0
            }
        }
    ]
});
function s() {
    return o.getCurrentConfig({ location: 'premium_payment_flow_started_1' }, { autoTrackExposure: !0 });
}
