var i = n(855986),
    r = n(73153),
    a = n(753070),
    s = n(731854);
let l = a.jQ.PRESET_VIDEO,
    o = a.on.RESOLUTION_720,
    d = a.kn.FPS_30,
    c = !0,
    u = !0;
class _ extends i.Ay.PersistedStore {
    static displayName = "ApplicationStreamingSettingsStore";
    static persistKey = "ApplicationStreamingSettingStore";
    initialize(e) {
        null != e &&
            ((l = e.preset ?? a.jQ.PRESET_VIDEO),
            (o = e.resolution),
            (d = e.fps),
            (c = e.soundshareEnabled ?? !0),
            (u = e.streamDrawingEnabled ?? !0));
    }
    getState() {
        return { preset: l, resolution: o, fps: d, soundshareEnabled: c, streamDrawingEnabled: u };
    }
}
let E = new _(r.h, {
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
        let { preset: t, resolution: n, frameRate: i, soundshareEnabled: r, streamDrawingEnabled: a } = e,
            s = !1;
        return (
            null != t && t !== l && ((l = t), (s = !0)),
            null != n && n !== o && ((o = n), (s = !0)),
            null != i && i !== d && ((d = i), (s = !0)),
            null != r && r !== c && ((c = r), (s = !0)),
            null != a && a !== u && ((u = a), (s = !0)),
            s
        );
    },
});
n.d(t, {}, { A: E });
