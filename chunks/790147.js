i.d(e, { z: () => A });
var n = i(311907),
    l = i(926919),
    s = i(419954),
    r = i(111162),
    u = i(253932),
    a = i(780964),
    o = i(698723),
    T = i(985018);
let A = (0, s.zD)(a.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
    useTitle: () => T.intl.string(T.t["0CEP6e"]),
    useSubtitle: () => T.intl.string(T.t["kBXuW+"]),
    useValue: function () {
        return (0, n.bG)([r.default], () => r.default.isStreamInfoOverlayEnabled);
    },
    setValue: function (t) {
        let e = r.default.isStreamInfoOverlayEnabled;
        (0, o.A)("stream_info_overlay_enabled", t, e), (0, l.x)({ isStreamInfoOverlayEnabled: t });
    },
    usePredicate: function () {
        return u.Q_.useSetting();
    },
});
