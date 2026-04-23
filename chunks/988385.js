n.d(t, { S: () => d });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(430452),
    r = n(780964),
    o = n(985018);
let d = (0, l.zD)(r.X.STREAMING_ADVANCED_SCREENSHARE, {
    useTitle: () => o.intl.string(o.t.GmWk2E),
    useSearchTerms: () => [o.intl.string(o.t["Fj/xn1"])],
    useSubtitle: () => o.intl.string(o.t["Fj/xn1"]),
    useValue: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.getVideoHook());
    },
    setValue: s.A.setVideoHook,
    usePredicate: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.supportsVideoHook());
    },
});
