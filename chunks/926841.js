n.d(t, {
    a: () => a,
    b: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-11_checkout_optimization_desktop_client_google_pay',
    label: 'Checkout Optimization Browser Autofill Google Pay',
    defaultConfig: {
        enabled: !1,
        delay: !1
    },
    commonTriggerPoint: i.$P.PAYMENT_FLOW_STARTED,
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
function a() {
    return o.getCurrentConfig({ location: 'premium_payment_flow_started_1' }, { autoTrackExposure: !0 });
}
