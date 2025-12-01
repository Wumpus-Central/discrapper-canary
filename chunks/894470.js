n.d(e, { Z: () => o });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    u = n(131951),
    s = n(313789),
    a = n(388032);
let o = (0, l.qs)(s.n.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
    useTitle: () => a.intl.string(a.t.DFPXIG),
    useSubtitle: () => a.intl.string(a.t["UyRX+C"]),
    usePredicate: function () {
        return (0, i.e7)([u.Z], () => u.Z.showBypassSystemInputProcessing() && u.Z.isInputProfileCustom());
    },
    useValue: function () {
        return (0, i.e7)([u.Z], () => u.Z.getBypassSystemInputProcessing());
    },
    setValue: function (t) {
        r.Z.setBypassSystemInputProcessing(t);
    },
});
