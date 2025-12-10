n.d(e, { v: () => o });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(313789),
    a = n(388032);
let o = (0, s.qs)(r.n.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
    useTitle: () => a.intl.string(a.t.DFPXIG),
    useSubtitle: () => a.intl.string(a.t["UyRX+C"]),
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getBypassSystemInputProcessing());
    },
    setValue: function (t) {
        l.Z.setBypassSystemInputProcessing(t);
    },
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.showBypassSystemInputProcessing() && u.Z.isInputProfileCustom());
    },
});
