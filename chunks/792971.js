n.d(e, { Z: () => c });
var i = n(442837),
    l = n(846027),
    u = n(509613),
    r = n(131951),
    s = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, u.qs)(s.n.VOICE_QUALITY_OF_SERVICE_SETTING, {
    useTitle: () => o.intl.string(o.t.uancuJ),
    useSubtitle: () => o.intl.string(o.t.I1Eoqq),
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.supports(a.AN.QOS));
    },
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getQoS());
    },
    setValue: function (t) {
        l.Z.setQoS(t);
    },
});
