r.d(n, {
    YC: function () {
        return a;
    },
    cC: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-10_blocking_context',
    label: 'Blocking Context',
    defaultConfig: {
        enabled: !1,
        condensed: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Show blocking context in block confirmation modal',
            config: {
                enabled: !0,
                condensed: !1
            }
        },
        {
            id: 2,
            label: 'Show condensed blocking context',
            config: {
                enabled: !0,
                condensed: !0
            }
        }
    ]
});
function a(e) {
    let { location: n } = e;
    return i.useExperiment({ location: n }, { autoTrackExposure: !0 }).condensed;
}
function o(e) {
    let { location: n } = e;
    return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 }).enabled;
}
