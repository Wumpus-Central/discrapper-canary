"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    a = n(753070),
    s = n(731854);
let l = a.jQ.PRESET_VIDEO,
    o = a.on.RESOLUTION_720,
    d = a.kn.FPS_30,
    c = !0;
class u extends i.Ay.PersistedStore {
    static displayName = "ApplicationStreamingSettingsStore";
    static persistKey = "ApplicationStreamingSettingStore";
    initialize(e) {
        null != e &&
            ((l = e.preset ?? a.jQ.PRESET_VIDEO), (o = e.resolution), (d = e.fps), (c = e.soundshareEnabled ?? !0));
    }
    getState() {
        return { preset: l, resolution: o, fps: d, soundshareEnabled: c };
    }
}
let _ = new u(r.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.context !== s.x.STREAM || t?.qualityOptions == null) return !1;
        let n = !1;
        return (
            l !== t.qualityOptions.preset && ((l = t.qualityOptions.preset), (n = !0)),
            o !== t.qualityOptions.resolution && ((o = t.qualityOptions.resolution), (n = !0)),
            d !== t.qualityOptions.frameRate && ((d = t.qualityOptions.frameRate), (n = !0)),
            n
        );
    },
    STREAM_UPDATE_SETTINGS: function (e) {
        let { preset: t, resolution: n, frameRate: i, soundshareEnabled: r } = e,
            a = !1;
        return (
            null != t && t !== l && ((l = t), (a = !0)),
            null != n && n !== o && ((o = n), (a = !0)),
            null != i && i !== d && ((d = i), (a = !0)),
            null != r && r !== c && ((c = r), (a = !0)),
            a
        );
    },
});
