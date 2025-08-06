n.d(t, {
    H1: () => a,
    s8: () => s,
});
var r = n(818083),
    i = n(128064);
let o = (0, r.B)({
    kind: "user",
    id: "2025-02_tigger_pawtect",
    label: "Tigger pawtect",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Tigger pawtect",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    let { location: t } = e;
    return o.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled || (0, i.c_)(t);
}
function s(e) {
    let { location: t } = e,
        n = o.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }),
        r = (0, i.pY)(t);
    return n.enabled || r;
}
