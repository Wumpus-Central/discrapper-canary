n.d(t, {
    MP: () => v,
    Q4: () => O,
    ZP: () => T,
}),
    n(539854);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(780384),
    o = n(481060),
    s = n(846027),
    l = n(921801),
    c = n(463395),
    u = n(131951),
    d = n(626135),
    f = n(63063),
    p = n(210887),
    _ = n(738486),
    m = n(726985),
    h = n(981631),
    g = n(388032),
    E = n(199688);
let b = n(775322),
    y = n(853453);
var O = (function (e) {
    return (e.NONE = "NONE"), (e.STANDARD = "STANDARD"), (e.KRISP = "KRISP"), e;
})({});
let v = {
    page: h.ZY5.USER_SETTINGS,
    section: h.jXE.SETTINGS_VOICE_AND_VIDEO,
};
function S(e) {
    let t = e.currentTarget;
    d.default.track(h.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: h.ZY5.USER_SETTINGS,
            section: h.jXE.SETTINGS_VOICE_AND_VIDEO,
        },
    });
}
function I() {
    let e = (0, i.e7)([p.Z], () => p.Z.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: l,
            noiseCancellationSupported: c,
        } = (0, i.cj)([u.Z], () => ({
            noiseCancellation: u.Z.getNoiseCancellation(),
            noiseSuppression: u.Z.getNoiseSuppression(),
            noiseSuppressionSupported: u.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: u.Z.isNoiseCancellationSupported(),
        }));
    if (!l && !c) return null;
    let d = n ? "STANDARD" : "NONE",
        _ = t ? "KRISP" : d,
        m = [];
    return (
        c &&
            m.push({
                name: g.intl.string(g.t.rdoNzt),
                value: "KRISP",
            }),
        l &&
            m.push({
                name: g.intl.string(g.t.qXeYHw),
                value: "STANDARD",
            }),
        m.push({
            name: g.intl.string(g.t.wkYAlz),
            value: "NONE",
        }),
        (0, r.jsxs)(o.Kqy, {
            gap: 8,
            children: [
                (0, r.jsx)(o.FXm, {
                    label: g.intl.string(g.t.t8Qhib),
                    description: g.intl.string(g.t.najZCV),
                    options: m,
                    onChange: (e) => {
                        s.Z.setNoiseCancellation("KRISP" === e, v), s.Z.setNoiseSuppression("STANDARD" === e, v);
                    },
                    value: _,
                }),
                c &&
                    (0, r.jsx)(o.Zbd, {
                        type: o.Zbd.Types.PRIMARY,
                        children: (0, r.jsxs)("div", {
                            className: E.krispCard,
                            children: [
                                (0, r.jsx)("img", {
                                    src: (0, a.ap)(e) ? b : y,
                                    width: 70,
                                    height: 40,
                                    alt: "",
                                }),
                                (0, r.jsx)(o.eee, {
                                    href: f.Z.getArticleURL(h.BhN.NOISE_SUPPRESSION),
                                    onClick: S,
                                    children: g.intl.string(g.t.hvVgAZ),
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
function T() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: a,
            vadAutoThreshold: d,
            vadUseKrisp: f,
            bypassSystemInputProcessing: p,
        } = (0, i.cj)([u.Z], () => ({
            inputMode: u.Z.getMode(),
            inputDeviceId: u.Z.getInputDeviceId(),
            echoCancellation: u.Z.getEchoCancellation(),
            automaticGainControl: u.Z.getAutomaticGainControl(),
            vadAutoThreshold: u.Z.getModeOptions().autoThreshold,
            vadUseKrisp: u.Z.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: u.Z.getBypassSystemInputProcessing(),
        })),
        {
            hasEchoCancellation: E,
            hasNoiseSuppression: b,
            hasAutomaticGainControl: y,
        } = (0, i.cj)(
            [c.Z],
            () => ({
                hasEchoCancellation: c.Z.hasEchoCancellation(t),
                hasNoiseSuppression: c.Z.hasNoiseSuppression(t),
                hasAutomaticGainControl: c.Z.hasAutomaticGainControl(t),
            }),
            [t],
        ),
        O = E || b || y,
        v = e === h.pM4.VOICE_ACTIVITY && d;
    return (0, r.jsxs)(_.Z, {
        children: [
            O &&
                (0, r.jsx)(o.M14, {
                    type: "info",
                    children: g.intl.string(g.t["/Whuzi"]),
                }),
            (0, r.jsx)(l.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, r.jsx)(o.rsf, {
                    label: g.intl.string(g.t.iWTwu6),
                    checked: n,
                    onChange: (e) =>
                        s.Z.setEchoCancellation(e, {
                            page: h.ZY5.USER_SETTINGS,
                            section: h.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: E,
                }),
            }),
            (0, r.jsx)(l.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, r.jsx)(I, {}),
            }),
            (0, r.jsx)(l.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, r.jsx)(o.rsf, {
                    label: g.intl.string(g.t.BbESsg),
                    description: g.intl.string(g.t.LoOB1F),
                    checked: f,
                    onChange: (t) => s.Z.setMode(e, { vadUseKrisp: t }),
                    disabled: !v,
                }),
            }),
            (0, r.jsx)(l.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, r.jsx)(o.rsf, {
                    label: g.intl.string(g.t.cUMdH0),
                    description: g.intl.string(g.t["6EjbvA"]),
                    checked: a,
                    onChange: (e) =>
                        s.Z.setAutomaticGainControl(e, {
                            page: h.ZY5.USER_SETTINGS,
                            section: h.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: y,
                }),
            }),
            (0, r.jsx)(l.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                children: (0, r.jsx)(o.rsf, {
                    label: g.intl.string(g.t.DFPXIG),
                    description: g.intl.string(g.t["UyRX+C"]),
                    checked: p,
                    onChange: (e) => {
                        s.Z.setBypassSystemInputProcessing(e);
                    },
                }),
            }),
        ],
    });
}
