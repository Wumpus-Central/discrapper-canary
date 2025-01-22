r.d(n, {
    YP: function () {
        return s;
    },
    Zq: function () {
        return o;
    },
    l5: function () {
        return l;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-09_global_discovery_apps',
    label: 'Global Discovery Apps - Logged In',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: n } = e;
    return o.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
}
function l(e) {
    let { location: n } = e;
    return o.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
