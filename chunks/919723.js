n.d(e, { D: () => T });
var i = n(473749),
    l = n(442837),
    s = n(846027),
    u = n(509613),
    r = n(131951),
    a = n(313789),
    o = n(208113),
    c = n(680924),
    d = n(65154),
    S = n(388032);
let T = (0, u.Em)(a.n.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => S.intl.string(S.t.wVBHr0),
    useValue: function () {
        return (0, l.e7)([r.Z], () => r.Z.getAudioSubsystem());
    },
    setValue: function (t) {
        (0, c.Z)(S.intl.string(S.t.uY7AcQ), S.intl.string(S.t.gBqik6), () => s.Z.setAudioSubsystem(t));
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: n,
        } = (0, l.cj)([r.Z], () => ({
            legacyAudioSubsystemSupported: r.Z.supports(d.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: r.Z.supports(d.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: r.Z.supports(d.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return i.useMemo(() => (0, o.z)(t, e, n), [n, e, t]);
    },
    usePredicate: function () {
        return (0, l.e7)([r.Z], () => r.Z.shouldOfferManualSubsystemSelection());
    },
});
