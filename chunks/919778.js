r.d(n, {
    sE: function () {
        return l;
    }
});
var i = r(818083),
    a = r(74538);
let o = (0, i.B)({
        kind: 'user',
        id: '2022-06_no_payment_info_trial',
        label: 'No Payment Info Trial',
        defaultConfig: { bypassCheckout: !1 },
        treatments: [
            {
                id: 1,
                label: 'Bypass collecting payment info',
                config: { bypassCheckout: !0 }
            }
        ]
    }),
    s = (e, n, r) => {
        let i = null == r || (0, a.uZ)(r);
        return null != e && null == n && i;
    },
    l = (e, n, r) => {
        let { bypassCheckout: i } = o.useExperiment({ location: 'aeb070_1' }, { autoTrackExposure: !1 }),
            a = s(e, n, r);
        return i && a;
    };
