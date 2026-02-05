"use strict";
n.d(t, { Y: () => s });
var r = n(600975),
    i = n(128319);
let a = (0, r.C)({
    kind: "user",
    id: "2025-07_async_audio_device_mobile",
    label: "Mobile Asynchronous Audio Device Manager Controls",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Mobile Asynchronous Audio Device Manager Controls", config: { enabled: !0 } }],
});
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.p.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.getCurrentConfig({ location: t }, { disable: r, autoTrackExposure: n });
}
