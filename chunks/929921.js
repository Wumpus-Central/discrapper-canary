n.d(t, { A: () => m });
var r,
    i = n(311907),
    a = n(73153),
    s = n(753070),
    o = n(731854);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = s.jQ.PRESET_VIDEO,
    u = s.on.RESOLUTION_720,
    d = s.kn.FPS_30,
    f = !0;
function p(e) {
    let { settings: t } = e;
    if ((null == t ? void 0 : t.context) !== o.x.STREAM || (null == t ? void 0 : t.qualityOptions) == null) return !1;
    let n = !1;
    return (
        c !== t.qualityOptions.preset && ((c = t.qualityOptions.preset), (n = !0)),
        u !== t.qualityOptions.resolution && ((u = t.qualityOptions.resolution), (n = !0)),
        d !== t.qualityOptions.frameRate && ((d = t.qualityOptions.frameRate), (n = !0)),
        n
    );
}
function _(e) {
    let { preset: t, resolution: n, frameRate: r, soundshareEnabled: i } = e,
        a = !1;
    return (
        null != t && t !== c && ((c = t), (a = !0)),
        null != n && n !== u && ((u = n), (a = !0)),
        null != r && r !== d && ((d = r), (a = !0)),
        null != i && i !== f && ((f = i), (a = !0)),
        a
    );
}
class h extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n;
            (c = null != (t = e.preset) ? t : s.jQ.PRESET_VIDEO),
                (u = e.resolution),
                (d = e.fps),
                (f = null == (n = e.soundshareEnabled) || n);
        }
    }
    getState() {
        return {
            preset: c,
            resolution: u,
            fps: d,
            soundshareEnabled: f,
        };
    }
}
l(h, "displayName", "ApplicationStreamingSettingsStore"), l(h, "persistKey", "ApplicationStreamingSettingStore");
let m = new h(a.h, {
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: p,
    STREAM_UPDATE_SETTINGS: _,
});
