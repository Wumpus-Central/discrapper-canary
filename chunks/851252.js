n.d(t, { n: () => c });
var i = n(311907),
    s = n(827343),
    l = n(793574),
    a = n(419954),
    r = n(430452),
    o = n(780964),
    d = n(731854),
    u = n(985018);
let c = (0, a.zD)(o.X.STREAMING_STREAM_ATTENUATION, {
    useTitle: () => u.intl.string(u.t["/jwMtn"]),
    useSubtitle: () => u.intl.string(u.t.zlA23F),
    useValue: function () {
        return (0, i.bG)([r.Ay], () => r.Ay.getSidechainCompression());
    },
    setValue: function (e) {
        let t = [l.A.USER_SETTINGS_VOICE_AND_VIDEO];
        s.A.setSidechainCompression(e, { analyticsLocations: t });
    },
    usePredicate: function () {
        return r.Ay.supports(d.O5.SIDECHAIN_COMPRESSION);
    },
});
