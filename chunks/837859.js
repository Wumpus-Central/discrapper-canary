n.d(t, { Ay: () => c });
var i = n(723702),
    r = n(240921),
    a = n(753070);
let s = { videoPresetResolutionMax: a.on.RESOLUTION_1440 },
    l = (0, r.Ay)({
        name: "2026-02-go-live-video-preset-resolution",
        kind: "user",
        defaultConfig: s,
        variations: { 1: { ...s, videoPresetResolutionMax: a.on.RESOLUTION_1080 } },
    });
var o = n(327649),
    d = n(248174);
function c(e, t, n, r) {
    let s = (function () {
        let { videoPresetResolutionMax: e } = l.getConfig({ location: "getApplicationStreamPresetValues" });
        return {
            [a.jQ.PRESET_DOCUMENTS]: [
                { resolution: a.on.RESOLUTION_SOURCE, fps: a.kn.FPS_15 },
                { resolution: a.on.RESOLUTION_SOURCE, fps: a.kn.FPS_5 },
            ],
            [a.jQ.PRESET_VIDEO]: [
                { resolution: e, fps: a.kn.FPS_60 },
                { resolution: a.on.RESOLUTION_1080, fps: a.kn.FPS_60 },
                { resolution: a.on.RESOLUTION_720, fps: a.kn.FPS_60 },
                { resolution: a.on.RESOLUTION_720, fps: a.kn.FPS_30 },
            ],
            [a.jQ.PRESET_AUTO]: [],
            [a.jQ.PRESET_CUSTOM]: [],
            [a.jQ.PRESET_MOBILE_DEFAULT]: [{ resolution: a.on.RESOLUTION_720, fps: a.kn.FPS_30 }],
            [a.jQ.PRESET_MOBILE_PERFORMANCE]: [{ resolution: a.on.RESOLUTION_480, fps: a.kn.FPS_30 }],
            [a.jQ.PRESET_MOBILE_HIGH_QUALITY]: [{ resolution: a.on.RESOLUTION_1080, fps: a.kn.FPS_60 }],
        };
    })()[e];
    if (null == s) return null;
    for (let l of s)
        if ((0, o.A)(e, l.resolution, l.fps, t, n)) {
            if (e === a.jQ.PRESET_VIDEO && i.isPlatformEmbedded && (0, i.isDesktop)()) {
                let e = (0, d.A)("getStreamSettingsForPreset", t, r);
                if (
                    e?.maxResolution != null &&
                    null != e.maxFPS &&
                    l.resolution !== a.on.RESOLUTION_SOURCE &&
                    l.resolution < e.maxResolution &&
                    l.fps <= e.maxFPS
                )
                    return [e.maxResolution, e.maxFPS];
            }
            return [l.resolution, l.fps];
        }
    return null;
}
