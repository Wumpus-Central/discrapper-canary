i.d(e, {
    W: () => E,
});
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(419954),
    u = i(430452),
    a = i(780964),
    o = i(204318),
    T = i(593942),
    A = i(731854),
    S = i(985018);
let E = (0, r.Hn)(a.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => S.intl.string(S.t.wVBHr0),
    useValue: function () {
        return (0, l.bG)([u.A], () => u.A.getAudioSubsystem());
    },
    setValue: function (t) {
        (0, T.A)(S.intl.string(S.t.uY7AcQ), S.intl.string(S.t.gBqik6), () => s.A.setAudioSubsystem(t));
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: t,
            experimentalAudioSubsystemSupported: e,
            automaticAudioSubsystemSupported: i,
        } = (0, l.cf)([u.A], () => ({
            legacyAudioSubsystemSupported: u.A.supports(A.O5.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: u.A.supports(A.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: u.A.supports(A.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return n.useMemo(() => (0, o.g)(t, e, i), [i, e, t]);
    },
    usePredicate: function () {
        return (0, l.bG)([u.A], () => u.A.shouldOfferManualSubsystemSelection());
    },
});
