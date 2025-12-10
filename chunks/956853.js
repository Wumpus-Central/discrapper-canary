n.d(e, { G: () => c });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(358085),
    a = n(313789),
    o = n(388032);
let c = (0, s.qs)(a.n.VOICE_SILENCE_WARNING_SETTING, {
    useTitle: () => o.intl.string(o.t["4rsOPQ"]),
    useSubtitle: () => o.intl.string(o.t.jtiiCw),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getEnableSilenceWarning());
    },
    setValue: function (t) {
        l.Z.setSilenceWarning(t);
    },
    usePredicate: function () {
        return r.isPlatformEmbedded;
    },
});
