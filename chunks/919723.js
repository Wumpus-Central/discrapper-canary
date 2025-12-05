n.d(e, { D: () => S });
var i = n(473749),
    l = n(442837),
    s = n(846027),
    r = n(509613),
    u = n(131951),
    a = n(313789),
    o = n(208113),
    c = n(680924),
    d = n(65154),
    E = n(388032);
let S = (0, r.Em)(a.n.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => E.intl.string(E.t.wVBHr0),
    useValue: function () {
        return (0, l.e7)([u.Z], () => u.Z.getAudioSubsystem());
    },
    setValue: function (t) {
        (0, c.Z)(E.intl.string(E.t.uY7AcQ), E.intl.string(E.t.gBqik6), () => s.Z.setAudioSubsystem(t));
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: n,
        } = (0, l.cj)([u.Z], () => ({
            legacyAudioSubsystemSupported: u.Z.supports(d.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: u.Z.supports(d.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: u.Z.supports(d.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return i.useMemo(() => (0, o.z)(t, e, n), [n, e, t]);
    },
    usePredicate: function () {
        return (0, l.e7)([u.Z], () => u.Z.shouldOfferManualSubsystemSelection());
    },
});
