n.d(e, { Z: () => o });
var i = n(442837),
    l = n(846027),
    u = n(509613),
    r = n(131951),
    s = n(313789),
    a = n(388032);
let o = (0, u.qs)(s.n.STREAMING_ADVANCED_SCREENSHARE, {
    useTitle: () => a.intl.string(a.t.GmWk2E),
    useSubtitle: () => a.intl.string(a.t["Fj/xn1"]),
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.supportsVideoHook());
    },
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getVideoHook());
    },
    setValue: l.Z.setVideoHook,
});
