n.d(e, { Z: () => T });
var i = n(473749),
    l = n(442837),
    u = n(846027),
    r = n(509613),
    s = n(131951),
    a = n(313789),
    o = n(208113),
    c = n(680924),
    E = n(65154),
    S = n(388032);
let T = (0, r.Em)(a.n.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => S.intl.string(S.t.wVBHr0),
    useValue: function () {
        return (0, l.e7)([s.Z], () => s.Z.getAudioSubsystem());
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: n,
        } = (0, l.cj)([s.Z], () => ({
            legacyAudioSubsystemSupported: s.Z.supports(E.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: s.Z.supports(E.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: s.Z.supports(E.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return i.useMemo(() => (0, o.z)(t, e, n), [n, e, t]);
    },
    setValue: function (t) {
        (0, c.Z)(S.intl.string(S.t.uY7AcQ), S.intl.string(S.t.gBqik6), () => u.Z.setAudioSubsystem(t));
    },
    usePredicate: function () {
        return (0, l.e7)([s.Z], () => s.Z.shouldOfferManualSubsystemSelection());
    },
});
