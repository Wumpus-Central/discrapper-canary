n.d(e, { Q: () => S });
var i = n(442837),
    l = n(179658),
    s = n(509613),
    u = n(857192),
    r = n(695346),
    a = n(313789),
    o = n(569550),
    T = n(388032);
let S = (0, s.qs)(a.n.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
    useTitle: () => T.intl.string(T.t["0CEP6e"]),
    useSubtitle: () => T.intl.string(T.t["kBXuW+"]),
    useValue: function () {
        return (0, i.e7)([u.default], () => u.default.isStreamInfoOverlayEnabled);
    },
    setValue: function (t) {
        let e = u.default.isStreamInfoOverlayEnabled;
        (0, o.Z)("stream_info_overlay_enabled", t, e), (0, l.y)({ isStreamInfoOverlayEnabled: t });
    },
    usePredicate: function () {
        return r.Sb.useSetting();
    },
});
