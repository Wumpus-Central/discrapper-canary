"use strict";
n.d(t, { A: () => l });
var i = n(250105),
    r = n(753070);
let s = { videoPresetResolutionMax: r.on.RESOLUTION_1440 },
    a = (0, i.Ay)({
        name: "2026-02-go-live-video-preset-resolution",
        kind: "user",
        defaultConfig: s,
        variations: { 1: { ...s, videoPresetResolutionMax: r.on.RESOLUTION_1080 } },
    });
var o = n(327649);
function l(e, t, n) {
    let i = (function () {
        let { videoPresetResolutionMax: e } = a.getConfig({ location: "getApplicationStreamPresetValues" });
        return {
            [r.jQ.PRESET_DOCUMENTS]: [
                { resolution: r.on.RESOLUTION_SOURCE, fps: r.kn.FPS_15 },
                { resolution: r.on.RESOLUTION_SOURCE, fps: r.kn.FPS_5 },
            ],
            [r.jQ.PRESET_VIDEO]: [
                { resolution: e, fps: r.kn.FPS_60 },
                { resolution: r.on.RESOLUTION_1080, fps: r.kn.FPS_60 },
                { resolution: r.on.RESOLUTION_720, fps: r.kn.FPS_60 },
                { resolution: r.on.RESOLUTION_720, fps: r.kn.FPS_30 },
            ],
            [r.jQ.PRESET_AUTO]: [],
            [r.jQ.PRESET_CUSTOM]: [],
        };
    })()[e];
    if (null == i) return null;
    for (let r of i) if ((0, o.A)(e, r.resolution, r.fps, t, n)) return [r.resolution, r.fps];
    return null;
}
