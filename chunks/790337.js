i.d(t, { K: () => d });
var n = i(827343),
    l = i(793574),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(731854),
    o = i(985018);
let d = (0, s.sN)(a.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
    useTitle: () => o.intl.string(o.t.fhEzfj),
    setValue: function (e) {
        let t = [l.A.USER_SETTINGS_VOICE_AND_VIDEO];
        n.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
    },
    minValue: 1,
    maxValue: 100,
    getInitialValue: r.Ay.getSidechainCompressionStrength,
    usePredicate: function () {
        return r.Ay.supports(u.O5.SIDECHAIN_COMPRESSION);
    },
});
