i.d(e, { $: () => d });
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
        return (0, n.bG)([r.A], () => {
            let { vadUseKrisp: t } = r.A.getModeOptions();
            return t;
        });
    },
    setValue: function (t) {
        let e = r.A.getMode();
        l.A.setMode(e, { vadUseKrisp: t });
    },
    useDisabled: function () {
        return (0, n.bG)([r.A], () => {
            let t = r.A.getMode(),
                e = r.A.getModeOptions().autoThreshold;
            return t === u.TBI.VOICE_ACTIVITY && e;
        });
    },
    usePredicate: function () {
        return (0, n.bG)([r.A], () => r.A.isAdvancedVoiceActivitySupported() && r.A.isInputProfileCustom());
    },
});
