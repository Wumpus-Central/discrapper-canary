n.d(e, { Z: () => o });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    a = n(388032);
let o = (0, l.qs)(u.n.STREAMING_ADVANCED_SCREENSHARE, {
    useTitle: () => a.intl.string(a.t.GmWk2E),
    useSubtitle: () => a.intl.string(a.t["Fj/xn1"]),
    usePredicate: function () {
        return (0, i.e7)([s.Z], () => s.Z.supportsVideoHook());
    },
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getVideoHook());
    },
    setValue: r.Z.setVideoHook,
});
