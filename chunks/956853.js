n.d(e, { Z: () => c });
var i = n(442837),
    l = n(846027),
    u = n(509613),
    r = n(131951),
    s = n(358085),
    a = n(313789),
    o = n(388032);
let c = (0, u.qs)(a.n.VOICE_SILENCE_WARNING_SETTING, {
    useTitle: () => o.intl.string(o.t["4rsOPQ"]),
    useSubtitle: () => o.intl.string(o.t.jtiiCw),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getEnableSilenceWarning());
    },
    usePredicate: function () {
        return s.isPlatformEmbedded;
    },
    setValue: function (t) {
        l.Z.setSilenceWarning(t);
    },
});
