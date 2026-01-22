i.d(e, { $: () => T });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let T = (0, s.zD)(u.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
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
            return t === a.TBI.VOICE_ACTIVITY && e;
        });
    },
    usePredicate: function () {
        return (0, n.bG)([r.A], () => r.A.isAdvancedVoiceActivitySupported() && r.A.isInputProfileCustom());
    },
});
