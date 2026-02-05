"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(73153),
    a = n(753070),
    s = n(731854);
let o = a.jQ.PRESET_VIDEO,
    l = a.on.RESOLUTION_720,
    u = a.kn.FPS_30,
    c = !0;
function d(e) {
    let { settings: t } = e;
    if (t?.context !== s.x.STREAM || t?.qualityOptions == null) return !1;
    let n = !1;
    return (
        o !== t.qualityOptions.preset && ((o = t.qualityOptions.preset), (n = !0)),
        l !== t.qualityOptions.resolution && ((l = t.qualityOptions.resolution), (n = !0)),
        u !== t.qualityOptions.frameRate && ((u = t.qualityOptions.frameRate), (n = !0)),
        n
    );
}
function _(e) {
    let { preset: t, resolution: n, frameRate: r, soundshareEnabled: i } = e,
        a = !1;
    return (
        null != t && t !== o && ((o = t), (a = !0)),
        null != n && n !== l && ((l = n), (a = !0)),
        null != r && r !== u && ((u = r), (a = !0)),
        null != i && i !== c && ((c = i), (a = !0)),
        a
    );
}
class f extends r.Ay.PersistedStore {
    static displayName = "ApplicationStreamingSettingsStore";
    static persistKey = "ApplicationStreamingSettingStore";
    initialize(e) {
        null != e &&
            ((o = e.preset ?? a.jQ.PRESET_VIDEO), (l = e.resolution), (u = e.fps), (c = e.soundshareEnabled ?? !0));
    }
    getState() {
        return { preset: o, resolution: l, fps: u, soundshareEnabled: c };
    }
}
let p = new f(i.h, { MEDIA_ENGINE_SET_GO_LIVE_SOURCE: d, STREAM_UPDATE_SETTINGS: _ });
