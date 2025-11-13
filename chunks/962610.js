n.d(e, { Z: () => E });
var i = n(442837),
    l = n(179658),
    u = n(509613),
    r = n(857192),
    s = n(695346),
    a = n(313789),
    o = n(569550),
    c = n(388032);
let E = (0, u.qs)(a.n.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
    useTitle: () => c.intl.string(c.t["0CEP6e"]),
    useSubtitle: () => c.intl.string(c.t["kBXuW+"]),
    usePredicate: function () {
        return s.Sb.useSetting();
    },
    useValue: function () {
        return (0, i.e7)([r.default], () => r.default.isStreamInfoOverlayEnabled);
    },
    setValue: function (t) {
        let e = r.default.isStreamInfoOverlayEnabled;
        (0, o.Z)("stream_info_overlay_enabled", t, e), (0, l.y)({ isStreamInfoOverlayEnabled: t });
    },
});
