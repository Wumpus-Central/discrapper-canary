n.d(e, { s: () => o });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(313789),
    a = n(388032);
let o = (0, s.qs)(r.n.STREAMING_ADVANCED_SCREENSHARE, {
    useTitle: () => a.intl.string(a.t.GmWk2E),
    useSearchTerms: () => [a.intl.string(a.t["Fj/xn1"])],
    useSubtitle: () => a.intl.string(a.t["Fj/xn1"]),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getVideoHook());
    },
    setValue: l.Z.setVideoHook,
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.supportsVideoHook());
    },
});
