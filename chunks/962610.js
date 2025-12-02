n.d(e, { Z: () => d });
var i = n(442837),
    r = n(179658),
    l = n(509613),
    s = n(857192),
    u = n(695346),
    a = n(313789),
    o = n(569550),
    c = n(388032);
let d = (0, l.qs)(a.n.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
    useTitle: () => c.intl.string(c.t["0CEP6e"]),
    useSubtitle: () => c.intl.string(c.t["kBXuW+"]),
    usePredicate: function () {
        return u.Sb.useSetting();
    },
    useValue: function () {
        return (0, i.e7)([s.default], () => s.default.isStreamInfoOverlayEnabled);
    },
    setValue: function (t) {
        let e = s.default.isStreamInfoOverlayEnabled;
        (0, o.Z)("stream_info_overlay_enabled", t, e), (0, r.y)({ isStreamInfoOverlayEnabled: t });
    },
});
