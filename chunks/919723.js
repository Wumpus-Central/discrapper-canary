n.d(e, { D: () => E });
var i = n(473749),
    l = n(442837),
    s = n(846027),
    u = n(509613),
    r = n(131951),
    a = n(313789),
    o = n(208113),
    T = n(680924),
    S = n(65154),
    c = n(388032);
let E = (0, u.Em)(a.n.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => c.intl.string(c.t.wVBHr0),
    useValue: function () {
        return (0, l.e7)([r.Z], () => r.Z.getAudioSubsystem());
    },
    setValue: function (t) {
        (0, T.Z)(c.intl.string(c.t.uY7AcQ), c.intl.string(c.t.gBqik6), () => s.Z.setAudioSubsystem(t));
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: n,
        } = (0, l.cj)([r.Z], () => ({
            legacyAudioSubsystemSupported: r.Z.supports(S.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: r.Z.supports(S.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: r.Z.supports(S.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return i.useMemo(() => (0, o.z)(t, e, n), [n, e, t]);
    },
    usePredicate: function () {
        return (0, l.e7)([r.Z], () => r.Z.shouldOfferManualSubsystemSelection());
    },
});
