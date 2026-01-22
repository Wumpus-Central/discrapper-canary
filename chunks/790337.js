i.d(e, {
    K: () => T,
});
var n = i(827343),
    l = i(793574),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(731854),
    o = i(985018);
let T = (0, s.sN)(u.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => o.intl.string(o.t.fhEzfj),
    setValue: function (t) {
        let e = [l.A.USER_SETTINGS_VOICE_AND_VIDEO];
        n.A.setSidechainCompressionStrength(t, {
            analyticsLocations: e,
        });
    },
    minValue: 1,
    maxValue: 100,
    getInitialValue: r.A.getSidechainCompressionStrength,
    usePredicate: function () {
        return r.A.supports(a.O5.SIDECHAIN_COMPRESSION);
    },
});
