n.d(e, { Z: () => c });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    u = n(131951),
    s = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, l.qs)(s.n.VOICE_QUALITY_OF_SERVICE_SETTING, {
    useTitle: () => o.intl.string(o.t.uancuJ),
    useSubtitle: () => o.intl.string(o.t.I1Eoqq),
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.supports(a.AN.QOS));
    },
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getQoS());
    },
    setValue: function (t) {
        r.Z.setQoS(t);
    },
});
