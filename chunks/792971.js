n.d(e, { a: () => c });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(131951),
    u = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, s.qs)(u.n.VOICE_QUALITY_OF_SERVICE_SETTING, {
    useTitle: () => o.intl.string(o.t.uancuJ),
    useSubtitle: () => o.intl.string(o.t.I1Eoqq),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getQoS());
    },
    setValue: function (t) {
        l.Z.setQoS(t);
    },
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.supports(a.AN.QOS));
    },
});
