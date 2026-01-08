n.d(t, { J: () => o });
var r = n(722733),
    i = n(751823);
let a = (0, r.ZP)({
    kind: "user",
    name: "2025-10-low-latency-rate-control",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let { location: t, disable: n = !1 } = e,
        { isInHoldout: r } = i.L.getCurrentConfig(
            { location: t },
            {
                disable: n,
                autoTrackExposure: !0,
            },
        );
    return r || n ? a.definition.defaultConfig : a.getConfig({ location: t });
}
