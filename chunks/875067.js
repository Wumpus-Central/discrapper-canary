n.d(t, { e: () => g });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(430452),
    r = n(780964),
    o = n(731854),
    d = n(985018);
let c = (0, l.sN)(r.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => d.intl.string(d.t.AlybXj),
        setValue: (e) =>
            s.A.setAttenuation(e, a.Ay.getAttenuateWhileSpeakingSelf(), a.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => a.Ay.getAttenuation(),
    }),
    u = (0, l.zD)(r.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => d.intl.string(d.t["9dHxRY"]),
        useValue: () => (0, i.bG)([a.Ay], () => a.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => s.A.setAttenuation(a.Ay.getAttenuation(), e, a.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    m = (0, l.zD)(r.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => d.intl.string(d.t.SMt0Gr),
        useValue: () => (0, i.bG)([a.Ay], () => a.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => s.A.setAttenuation(a.Ay.getAttenuation(), a.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    g = (0, l.FW)(r.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => d.intl.string(d.t.oSdBvW),
        useSubtitle: () => d.intl.string(d.t["0A/8Rt"]),
        usePredicate: () => (0, i.bG)([a.Ay], () => a.Ay.supports(o.O5.ATTENUATION)),
        buildLayout: () => [c, u, m],
    });
