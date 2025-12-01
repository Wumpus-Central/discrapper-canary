n.d(e, { Z: () => c });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    u = n(131951),
    s = n(358085),
    a = n(313789),
    o = n(388032);
let c = (0, l.qs)(a.n.VOICE_SILENCE_WARNING_SETTING, {
    useTitle: () => o.intl.string(o.t["4rsOPQ"]),
    useSubtitle: () => o.intl.string(o.t.jtiiCw),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getEnableSilenceWarning());
    },
    usePredicate: function () {
        return s.isPlatformEmbedded;
    },
    setValue: function (t) {
        r.Z.setSilenceWarning(t);
    },
});
