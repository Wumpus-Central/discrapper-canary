n.d(t, { R: () => o });
var r = n(818083),
    i = n(984134);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-04_wgc24h2api',
    label: 'Windows Graphics Capture 24H2 API',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable new API features',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.h.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return a.getCurrentConfig(
        { location: e },
        {
            disable: n,
            autoTrackExposure: t
        }
    );
}
