i.d(e, { n: () => T });
var n = i(311907),
    l = i(827343),
    s = i(793574),
    r = i(419954),
    a = i(430452),
    u = i(780964),
    o = i(731854),
    d = i(985018);
let T = (0, r.zD)(u.X.STREAMING_STREAM_ATTENUATION, {
    useTitle: () => d.intl.string(d.t["/jwMtn"]),
    useSubtitle: () => d.intl.string(d.t.zlA23F),
    useValue: function () {
        return (0, n.bG)([a.A], () => a.A.getSidechainCompression());
    },
    setValue: function (t) {
        let e = [s.A.USER_SETTINGS_VOICE_AND_VIDEO];
        l.A.setSidechainCompression(t, { analyticsLocations: e });
    },
    usePredicate: function () {
        return a.A.supports(o.O5.SIDECHAIN_COMPRESSION);
    },
});
