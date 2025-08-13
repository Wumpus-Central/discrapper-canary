n.d(t, { U: () => a });
var r = n(818083),
    i = n(480218);
let o = (0, r.B)({
    kind: "user",
    id: "2025-07_image_attachment_mezzanine",
    label: "Convert attachment images to WebP format for size optimization",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Control - No WebP conversion",
            config: { enabled: !1 },
        },
        {
            id: 2,
            label: "WebP conversion enabled",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    let { location: t } = e,
        { isInHoldout: n } = i._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0,
        },
    );
}
