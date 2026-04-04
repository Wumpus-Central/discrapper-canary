n.d(t, { A: () => c });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(430452),
    r = n(723702),
    o = n(780964),
    d = n(985018);
let c = (0, l.zD)(o.X.VOICE_SILENCE_WARNING_SETTING, {
    useTitle: () => d.intl.string(d.t["4rsOPQ"]),
    useSubtitle: () => d.intl.string(d.t.jtiiCw),
    useValue: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.getEnableSilenceWarning());
    },
    setValue: function (e) {
        s.A.setSilenceWarning(e);
    },
    usePredicate: function () {
        return r.isPlatformEmbedded;
    },
});
