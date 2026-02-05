i.d(e, { z: () => T });
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    a = i(253932),
    u = i(780964),
    o = i(698723),
    d = i(985018);
let T = (0, s.zD)(u.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
    useTitle: () => d.intl.string(d.t["0CEP6e"]),
    useSubtitle: () => d.intl.string(d.t["kBXuW+"]),
    useValue: function () {
        return (0, n.bG)([r.default], () => r.default.isStreamInfoOverlayEnabled);
    },
    setValue: function (t) {
        let e = r.default.isStreamInfoOverlayEnabled;
        (0, o.A)("stream_info_overlay_enabled", t, e), (0, l.x)({ isStreamInfoOverlayEnabled: t });
    },
    usePredicate: function () {
        return a.Q_.useSetting();
    },
});
