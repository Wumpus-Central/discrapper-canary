n.d(t, { Z: () => S }), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(538534),
    o = n(780384),
    s = n(481060),
    l = n(846027),
    c = n(600164),
    u = n(921801),
    d = n(463395),
    f = n(131951),
    _ = n(626135),
    p = n(63063),
    h = n(210887),
    m = n(738486),
    g = n(726985),
    E = n(981631),
    b = n(388032);
let y = n(775322),
    O = n(853453),
    v = {
        page: E.ZY5.USER_SETTINGS,
        section: E.jXE.SETTINGS_VOICE_AND_VIDEO,
    };
function I(e) {
    let t = e.currentTarget;
    _.default.track(E.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: E.ZY5.USER_SETTINGS,
            section: E.jXE.SETTINGS_VOICE_AND_VIDEO,
        },
    });
}
function T() {
    let e = (0, i.e7)([h.Z], () => h.Z.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: u,
            noiseCancellationSupported: d,
        } = (0, i.cj)([f.Z], () => ({
            noiseCancellation: f.Z.getNoiseCancellation(),
            noiseSuppression: f.Z.getNoiseSuppression(),
            noiseSuppressionSupported: f.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: f.Z.isNoiseCancellationSupported(),
        }));
    if (!u && !d) return null;
    let _ = +!!n,
        m = t ? 2 : _,
        g = [];
    return (
        d &&
            g.push({
                name: b.intl.string(b.t.rdoNzs),
                value: 2,
            }),
        u &&
            g.push({
                name: b.intl.string(b.t.qXeYHx),
                value: 1,
            }),
        g.push({
            name: b.intl.string(b.t.wkYAl5),
            value: 0,
        }),
        (0, r.jsxs)(s.Kqy, {
            gap: 8,
            children: [
                (0, r.jsx)(a.E, {
                    label: b.intl.string(b.t.t8QhiY),
                    description: b.intl.string(b.t.najZCQ),
                    options: g,
                    onChange: (e) => {
                        l.Z.setNoiseCancellation(2 === e, v), l.Z.setNoiseSuppression(1 === e, v);
                    },
                    value: m,
                }),
                d &&
                    (0, r.jsx)(s.ToO, {
                        type: s.Dd5.PRIMARY,
                        imageData: {
                            src: (0, o.ap)(e) ? y : O,
                            width: 70,
                            height: 40,
                        },
                        align: c.Z.Align.CENTER,
                        body: (0, r.jsx)(s.Anchor, {
                            href: p.Z.getArticleURL(E.BhN.NOISE_SUPPRESSION),
                            onClick: I,
                            children: b.intl.string(b.t.hvVgAQ),
                        }),
                    }),
            ],
        })
    );
}
function S() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: a,
            vadAutoThreshold: o,
            vadUseKrisp: c,
            bypassSystemInputProcessing: _,
        } = (0, i.cj)([f.Z], () => ({
            inputMode: f.Z.getMode(),
            inputDeviceId: f.Z.getInputDeviceId(),
            echoCancellation: f.Z.getEchoCancellation(),
            automaticGainControl: f.Z.getAutomaticGainControl(),
            vadAutoThreshold: f.Z.getModeOptions().autoThreshold,
            vadUseKrisp: f.Z.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: f.Z.getBypassSystemInputProcessing(),
        })),
        {
            hasEchoCancellation: p,
            hasNoiseSuppression: h,
            hasAutomaticGainControl: y,
        } = (0, i.cj)(
            [d.Z],
            () => ({
                hasEchoCancellation: d.Z.hasEchoCancellation(t),
                hasNoiseSuppression: d.Z.hasNoiseSuppression(t),
                hasAutomaticGainControl: d.Z.hasAutomaticGainControl(t),
            }),
            [t],
        ),
        O = p || h || y,
        v = e === E.pM4.VOICE_ACTIVITY && o;
    return (0, r.jsxs)(m.Z, {
        children: [
            O &&
                (0, r.jsx)(s.Wn, {
                    messageType: s.QYI.INFO,
                    children: b.intl.string(b.t["/Whuzs"]),
                }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, r.jsx)(s.rsf, {
                    label: b.intl.string(b.t.iWTwu7),
                    checked: n,
                    onChange: (e) =>
                        l.Z.setEchoCancellation(e, {
                            page: E.ZY5.USER_SETTINGS,
                            section: E.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: p,
                }),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, r.jsx)(T, {}),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, r.jsx)(s.rsf, {
                    label: b.intl.string(b.t.BbESsr),
                    description: b.intl.string(b.t.LoOB1N),
                    checked: c,
                    onChange: (t) => l.Z.setMode(e, { vadUseKrisp: t }),
                    disabled: !v,
                }),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, r.jsx)(s.rsf, {
                    label: b.intl.string(b.t.cUMdHx),
                    description: b.intl.string(b.t["6EjbvL"]),
                    checked: a,
                    onChange: (e) =>
                        l.Z.setAutomaticGainControl(e, {
                            page: E.ZY5.USER_SETTINGS,
                            section: E.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: y,
                }),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                children: (0, r.jsx)(s.rsf, {
                    label: b.intl.string(b.t.DFPXIC),
                    description: b.intl.string(b.t["UyRX+P"]),
                    checked: _,
                    onChange: (e) => {
                        l.Z.setBypassSystemInputProcessing(e);
                    },
                }),
            }),
        ],
    });
}
