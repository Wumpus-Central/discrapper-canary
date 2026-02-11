i.d(t, { $: () => d });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.zD)(a.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
    useTitle: () => o.intl.string(o.t.BbESsg),
    useSubtitle: () => o.intl.string(o.t.LoOB1F),
    useValue: function () {
        return (0, n.bG)([r.Ay], () => {
            let { vadUseKrisp: e } = r.Ay.getModeOptions();
            return e;
        });
    },
    setValue: function (e) {
        let t = r.Ay.getMode();
        l.A.setMode(t, { vadUseKrisp: e });
    },
    useDisabled: function () {
        return (0, n.bG)([r.Ay], () => {
            let e = r.Ay.getMode(),
                t = r.Ay.getModeOptions().autoThreshold;
            return e === u.TBI.VOICE_ACTIVITY && t;
        });
    },
    usePredicate: function () {
        return (0, n.bG)([r.Ay], () => r.Ay.isAdvancedVoiceActivitySupported() && r.Ay.isInputProfileCustom());
    },
});
