n.d(e, { a: () => S });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(313789),
    a = n(65154),
    o = n(388032);
let S = (0, s.qs)(r.n.VOICE_QUALITY_OF_SERVICE_SETTING, {
    useTitle: () => o.intl.string(o.t.uancuJ),
    useSubtitle: () => o.intl.string(o.t.I1Eoqq),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getQoS());
    },
    setValue: function (t) {
        l.Z.setQoS(t);
    },
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.supports(a.AN.QOS));
    },
});
