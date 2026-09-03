n.d(t, { Ay: () => o });
var i = n(240921),
    r = n(753070);
let a = { videoPresetResolutionMax: r.on.RESOLUTION_1440 },
    s = (0, i.Ay)({
        name: "2026-02-go-live-video-preset-resolution",
        kind: "user",
        defaultConfig: a,
        variations: { 1: { ...a, videoPresetResolutionMax: r.on.RESOLUTION_1080 } },
    });
var l = n(327649);
function o(e, t, n) {
    let i = (function () {
        let { videoPresetResolutionMax: e } = s.getConfig({ location: "getApplicationStreamPresetValues" });
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
            [r.jQ.PRESET_MOBILE_DEFAULT]: [{ resolution: r.on.RESOLUTION_720, fps: r.kn.FPS_30 }],
            [r.jQ.PRESET_MOBILE_PERFORMANCE]: [{ resolution: r.on.RESOLUTION_480, fps: r.kn.FPS_30 }],
            [r.jQ.PRESET_MOBILE_HIGH_QUALITY]: [{ resolution: r.on.RESOLUTION_1080, fps: r.kn.FPS_60 }],
        };
    })()[e];
    if (null == i) return null;
    for (let r of i) if ((0, l.A)(e, r.resolution, r.fps, t, n)) return [r.resolution, r.fps];
    return null;
}
