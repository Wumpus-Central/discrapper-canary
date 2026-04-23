n.d(t, { W: () => g }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(827343),
    a = n(419954),
    r = n(430452),
    o = n(780964),
    d = n(84655),
    u = n(731854),
    c = n(985018);
let g = (0, a.Hn)(o.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => c.intl.string(c.t.wVBHr0),
    useValue: function () {
        return (0, s.bG)([r.Ay], () => r.Ay.getAudioSubsystem());
    },
    setValue: function (e) {
        (0, d.A)(c.intl.string(c.t.uY7AcQ), c.intl.string(c.t.gBqik6), () => l.A.setAudioSubsystem(e));
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: e,
            experimentalAudioSubsystemSupported: t,
            automaticAudioSubsystemSupported: n,
        } = (0, s.cf)([r.Ay], () => ({
            legacyAudioSubsystemSupported: r.Ay.supports(u.O5.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: r.Ay.supports(u.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: r.Ay.supports(u.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return i.useMemo(() => {
            let i;
            return (
                (i = [{ id: u.rB.STANDARD, value: u.rB.STANDARD, label: c.intl.string(c.t.dqb2JZ) }]),
                e && i.push({ id: u.rB.LEGACY, value: u.rB.LEGACY, label: c.intl.string(c.t["TYfH+5"]) }),
                t && i.push({ id: u.rB.EXPERIMENTAL, value: u.rB.EXPERIMENTAL, label: c.intl.string(c.t.liQmtr) }),
                n && i.push({ id: u.rB.AUTOMATIC, value: u.rB.AUTOMATIC, label: c.intl.string(c.t.qNgtO1) }),
                i
            );
        }, [n, t, e]);
    },
    usePredicate: function () {
        return (0, s.bG)([r.Ay], () => r.Ay.shouldOfferManualSubsystemSelection());
    },
});
