n.d(e, { G: () => c });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(131951),
    u = n(358085),
    a = n(313789),
    o = n(388032);
let c = (0, s.qs)(a.n.VOICE_SILENCE_WARNING_SETTING, {
    useTitle: () => o.intl.string(o.t["4rsOPQ"]),
    useSubtitle: () => o.intl.string(o.t.jtiiCw),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getEnableSilenceWarning());
    },
    setValue: function (t) {
        l.Z.setSilenceWarning(t);
    },
    usePredicate: function () {
        return u.isPlatformEmbedded;
    },
});
