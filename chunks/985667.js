i.d(e, {
    i: () => T,
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(731854),
    o = i(985018);
let T = (0, s.zD)(u.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
    useTitle: () => o.intl.string(o.t.uancuJ),
    useSubtitle: () => o.intl.string(o.t.I1Eoqq),
    useValue: function () {
        return (0, n.bG)([r.A], () => r.A.getQoS());
    },
    setValue: function (t) {
        l.A.setQoS(t);
    },
    usePredicate: function () {
        return (0, n.bG)([r.A], () => r.A.supports(a.O5.QOS));
    },
});
