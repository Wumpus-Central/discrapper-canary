n.d(t, { l: () => d });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(430452),
    r = n(780964),
    o = n(985018);
let d = (0, l.zD)(r.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
    useTitle: () => o.intl.string(o.t.DFPXIG),
    useSubtitle: () => o.intl.string(o.t["UyRX+C"]),
    useValue: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.getBypassSystemInputProcessing());
    },
    setValue: function (e) {
        s.A.setBypassSystemInputProcessing(e);
    },
    usePredicate: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.showBypassSystemInputProcessing() && a.Ay.isInputProfileCustom());
    },
});
