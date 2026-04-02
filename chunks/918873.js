n.d(t, { W: () => m }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(827343),
    a = n(419954),
    r = n(430452),
    o = n(780964),
    d = n(84655),
    c = n(731854),
    u = n(985018);
let m = (0, a.Hn)(o.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => u.intl.string(u.t.wVBHr0),
    useValue: function () {
        return (0, s.bG)([r.Ay], () => r.Ay.getAudioSubsystem());
    },
    setValue: function (e) {
        (0, d.A)(u.intl.string(u.t.uY7AcQ), u.intl.string(u.t.gBqik6), () => l.A.setAudioSubsystem(e));
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: e,
            experimentalAudioSubsystemSupported: t,
            automaticAudioSubsystemSupported: n,
        } = (0, s.cf)([r.Ay], () => ({
            legacyAudioSubsystemSupported: r.Ay.supports(c.O5.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: r.Ay.supports(c.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: r.Ay.supports(c.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return i.useMemo(() => {
            let i;
            return (
                (i = [{ id: c.rB.STANDARD, value: c.rB.STANDARD, label: u.intl.string(u.t.dqb2JZ) }]),
                e && i.push({ id: c.rB.LEGACY, value: c.rB.LEGACY, label: u.intl.string(u.t["TYfH+5"]) }),
                t && i.push({ id: c.rB.EXPERIMENTAL, value: c.rB.EXPERIMENTAL, label: u.intl.string(u.t.liQmtr) }),
                n && i.push({ id: c.rB.AUTOMATIC, value: c.rB.AUTOMATIC, label: u.intl.string(u.t.qNgtO1) }),
                i
            );
        }, [n, t, e]);
    },
    usePredicate: function () {
        return (0, s.bG)([r.Ay], () => r.Ay.shouldOfferManualSubsystemSelection());
    },
});
