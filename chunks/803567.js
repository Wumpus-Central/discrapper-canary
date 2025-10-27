n.d(t, { Z: () => T }), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(780384),
    o = n(481060),
    s = n(846027),
    l = n(600164),
    c = n(921801),
    u = n(463395),
    d = n(131951),
    f = n(626135),
    _ = n(63063),
    p = n(210887),
    h = n(738486),
    m = n(726985),
    g = n(981631),
    E = n(388032);
let b = n(775322),
    y = n(853453),
    O = {
        page: g.ZY5.USER_SETTINGS,
        section: g.jXE.SETTINGS_VOICE_AND_VIDEO,
    };
function v(e) {
    let t = e.currentTarget;
    f.default.track(g.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: g.ZY5.USER_SETTINGS,
            section: g.jXE.SETTINGS_VOICE_AND_VIDEO,
        },
    });
}
function I() {
    let e = (0, i.e7)([p.Z], () => p.Z.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: c,
            noiseCancellationSupported: u,
        } = (0, i.cj)([d.Z], () => ({
            noiseCancellation: d.Z.getNoiseCancellation(),
            noiseSuppression: d.Z.getNoiseSuppression(),
            noiseSuppressionSupported: d.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: d.Z.isNoiseCancellationSupported(),
        }));
    if (!c && !u) return null;
    let f = +!!n,
        h = t ? 2 : f,
        m = [];
    return (
        u &&
            m.push({
                name: E.intl.string(E.t.rdoNzt),
                value: 2,
            }),
        c &&
            m.push({
                name: E.intl.string(E.t.qXeYHw),
                value: 1,
            }),
        m.push({
            name: E.intl.string(E.t.wkYAlz),
            value: 0,
        }),
        (0, r.jsxs)(o.Kqy, {
            gap: 8,
            children: [
                (0, r.jsx)(o.FXm, {
                    label: E.intl.string(E.t.t8Qhib),
                    description: E.intl.string(E.t.najZCV),
                    options: m,
                    onChange: (e) => {
                        s.Z.setNoiseCancellation(2 === e, O), s.Z.setNoiseSuppression(1 === e, O);
                    },
                    value: h,
                }),
                u &&
                    (0, r.jsx)(o.ToO, {
                        type: o.Dd5.PRIMARY,
                        imageData: {
                            src: (0, a.ap)(e) ? b : y,
                            width: 70,
                            height: 40,
                        },
                        align: l.Z.Align.CENTER,
                        body: (0, r.jsx)(o.Anchor, {
                            href: _.Z.getArticleURL(g.BhN.NOISE_SUPPRESSION),
                            onClick: v,
                            children: E.intl.string(E.t.hvVgAZ),
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
            vadAutoThreshold: l,
            vadUseKrisp: f,
            bypassSystemInputProcessing: _,
        } = (0, i.cj)([d.Z], () => ({
            inputMode: d.Z.getMode(),
            inputDeviceId: d.Z.getInputDeviceId(),
            echoCancellation: d.Z.getEchoCancellation(),
            automaticGainControl: d.Z.getAutomaticGainControl(),
            vadAutoThreshold: d.Z.getModeOptions().autoThreshold,
            vadUseKrisp: d.Z.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: d.Z.getBypassSystemInputProcessing(),
        })),
        {
            hasEchoCancellation: p,
            hasNoiseSuppression: b,
            hasAutomaticGainControl: y,
        } = (0, i.cj)(
            [u.Z],
            () => ({
                hasEchoCancellation: u.Z.hasEchoCancellation(t),
                hasNoiseSuppression: u.Z.hasNoiseSuppression(t),
                hasAutomaticGainControl: u.Z.hasAutomaticGainControl(t),
            }),
            [t],
        ),
        O = p || b || y,
        v = e === g.pM4.VOICE_ACTIVITY && l;
    return (0, r.jsxs)(h.Z, {
        children: [
            O &&
                (0, r.jsx)(o.Wn, {
                    messageType: o.QYI.INFO,
                    children: E.intl.string(E.t["/Whuzi"]),
                }),
            (0, r.jsx)(c.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, r.jsx)(o.rsf, {
                    label: E.intl.string(E.t.iWTwu6),
                    checked: n,
                    onChange: (e) =>
                        s.Z.setEchoCancellation(e, {
                            page: g.ZY5.USER_SETTINGS,
                            section: g.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: p,
                }),
            }),
            (0, r.jsx)(c.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, r.jsx)(I, {}),
            }),
            (0, r.jsx)(c.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, r.jsx)(o.rsf, {
                    label: E.intl.string(E.t.BbESsg),
                    description: E.intl.string(E.t.LoOB1F),
                    checked: f,
                    onChange: (t) => s.Z.setMode(e, { vadUseKrisp: t }),
                    disabled: !v,
                }),
            }),
            (0, r.jsx)(c.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, r.jsx)(o.rsf, {
                    label: E.intl.string(E.t.cUMdH0),
                    description: E.intl.string(E.t["6EjbvA"]),
                    checked: a,
                    onChange: (e) =>
                        s.Z.setAutomaticGainControl(e, {
                            page: g.ZY5.USER_SETTINGS,
                            section: g.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: y,
                }),
            }),
            (0, r.jsx)(c.F, {
                setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                children: (0, r.jsx)(o.rsf, {
                    label: E.intl.string(E.t.DFPXIG),
                    description: E.intl.string(E.t["UyRX+C"]),
                    checked: _,
                    onChange: (e) => {
                        s.Z.setBypassSystemInputProcessing(e);
                    },
                }),
            }),
        ],
    });
}
