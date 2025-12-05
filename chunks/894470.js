n.d(e, { v: () => o });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(131951),
    u = n(313789),
    a = n(388032);
let o = (0, s.qs)(u.n.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
    useTitle: () => a.intl.string(a.t.DFPXIG),
    useSubtitle: () => a.intl.string(a.t["UyRX+C"]),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getBypassSystemInputProcessing());
    },
    setValue: function (t) {
        l.Z.setBypassSystemInputProcessing(t);
    },
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.showBypassSystemInputProcessing() && r.Z.isInputProfileCustom());
    },
});
