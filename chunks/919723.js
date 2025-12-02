n.d(e, { Z: () => S });
var i = n(473749),
    r = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    a = n(313789),
    o = n(208113),
    c = n(680924),
    d = n(65154),
    E = n(388032);
let S = (0, s.Em)(a.n.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => E.intl.string(E.t.wVBHr0),
    useValue: function () {
        return (0, r.e7)([u.Z], () => u.Z.getAudioSubsystem());
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: n,
        } = (0, r.cj)([u.Z], () => ({
            legacyAudioSubsystemSupported: u.Z.supports(d.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: u.Z.supports(d.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: u.Z.supports(d.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return i.useMemo(() => (0, o.z)(t, e, n), [n, e, t]);
    },
    setValue: function (t) {
        (0, c.Z)(E.intl.string(E.t.uY7AcQ), E.intl.string(E.t.gBqik6), () => l.Z.setAudioSubsystem(t));
    },
    usePredicate: function () {
        return (0, r.e7)([u.Z], () => u.Z.shouldOfferManualSubsystemSelection());
    },
});
