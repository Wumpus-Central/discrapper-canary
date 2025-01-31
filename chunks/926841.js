n.d(t, {
    a: () => s,
    b: () => a
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-11_checkout_optimization_desktop_client_google_pay',
    label: 'Checkout Optimization Browser Autofill Google Pay',
    defaultConfig: {
        enabled: !1,
        delay: !1
    },
    commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
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
    return a.getCurrentConfig({ location: 'premium_payment_flow_started_1' }, { autoTrackExposure: !0 });
}
