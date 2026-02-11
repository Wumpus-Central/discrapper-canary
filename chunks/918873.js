i.d(t, { W: () => T }), i(321073);
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(419954),
    a = i(430452),
    u = i(780964),
    o = i(593942),
    d = i(731854),
    _ = i(985018);
let T = (0, r.Hn)(u.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
    useTitle: () => _.intl.string(_.t.wVBHr0),
    useValue: function () {
        return (0, l.bG)([a.Ay], () => a.Ay.getAudioSubsystem());
    },
    setValue: function (e) {
        (0, o.A)(_.intl.string(_.t.uY7AcQ), _.intl.string(_.t.gBqik6), () => s.A.setAudioSubsystem(e));
    },
    useOptions: function () {
        let {
            legacyAudioSubsystemSupported: e,
            experimentalAudioSubsystemSupported: t,
            automaticAudioSubsystemSupported: i,
        } = (0, l.cf)([a.Ay], () => ({
            legacyAudioSubsystemSupported: a.Ay.supports(d.O5.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: a.Ay.supports(d.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: a.Ay.supports(d.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
        }));
        return n.useMemo(() => {
            let n;
            return (
                (n = [{ id: d.rB.STANDARD, value: d.rB.STANDARD, label: _.intl.string(_.t.dqb2JZ) }]),
                e && n.push({ id: d.rB.LEGACY, value: d.rB.LEGACY, label: _.intl.string(_.t["TYfH+5"]) }),
                t && n.push({ id: d.rB.EXPERIMENTAL, value: d.rB.EXPERIMENTAL, label: _.intl.string(_.t.liQmtr) }),
                i && n.push({ id: d.rB.AUTOMATIC, value: d.rB.AUTOMATIC, label: _.intl.string(_.t.qNgtO1) }),
                n
            );
        }, [i, t, e]);
    },
    usePredicate: function () {
        return (0, l.bG)([a.Ay], () => a.Ay.shouldOfferManualSubsystemSelection());
    },
});
