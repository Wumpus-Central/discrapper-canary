n.d(t, {
    ZP: () => a,
    oW: () => i
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-06_bogo_mobile_promotion_gate',
        label: 'BOGO Mobile Promotion Manager',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable BOGO Mobile Promotion Manager',
                config: { enabled: !0 }
            }
        ]
    }),
    i = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return r.getCurrentConfig({ location: '489551_2' }, { autoTrackExposure: e });
    },
    a = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return r.useExperiment({ location: '489551_1' }, { autoTrackExposure: e });
    };
