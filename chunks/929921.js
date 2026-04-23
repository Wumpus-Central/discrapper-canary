"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(753070),
    a = n(731854);
let o = s.jQ.PRESET_VIDEO,
    l = s.on.RESOLUTION_720,
    u = s.kn.FPS_30,
    c = !0;
class d extends r.Ay.PersistedStore {
    static displayName = "ApplicationStreamingSettingsStore";
    static persistKey = "ApplicationStreamingSettingStore";
    initialize(e) {
        null != e &&
            ((o = e.preset ?? s.jQ.PRESET_VIDEO), (l = e.resolution), (u = e.fps), (c = e.soundshareEnabled ?? !0));
    }
    getState() {
        return { preset: o, resolution: l, fps: u, soundshareEnabled: c };
    }
}
let _ = new d(i.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.context !== a.x.STREAM || t?.qualityOptions == null) return !1;
        let n = !1;
        return (
            o !== t.qualityOptions.preset && ((o = t.qualityOptions.preset), (n = !0)),
            l !== t.qualityOptions.resolution && ((l = t.qualityOptions.resolution), (n = !0)),
            u !== t.qualityOptions.frameRate && ((u = t.qualityOptions.frameRate), (n = !0)),
            n
        );
    },
    STREAM_UPDATE_SETTINGS: function (e) {
        let { preset: t, resolution: n, frameRate: r, soundshareEnabled: i } = e,
            s = !1;
        return (
            null != t && t !== o && ((o = t), (s = !0)),
            null != n && n !== l && ((l = n), (s = !0)),
            null != r && r !== u && ((u = r), (s = !0)),
            null != i && i !== c && ((c = i), (s = !0)),
            s
        );
    },
});
