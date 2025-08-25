n.d(t, { Z: () => C }), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(780384),
    o = n(481060),
    s = n(846027),
    l = n(600164),
    c = n(313201),
    u = n(921801),
    d = n(463395),
    f = n(131951),
    _ = n(626135),
    p = n(63063),
    h = n(210887),
    m = n(738486),
    g = n(726985),
    E = n(981631),
    b = n(388032),
    y = n(197571);
let O = n(775322),
    v = n(853453),
    I = (0, c.hQ)(),
    T = {
        page: E.ZY5.USER_SETTINGS,
        section: E.jXE.SETTINGS_VOICE_AND_VIDEO,
    };
function S(e) {
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
function A() {
    let e = (0, i.e7)([h.Z], () => h.Z.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: c,
            noiseCancellationSupported: u,
        } = (0, i.cj)([f.Z], () => ({
            noiseCancellation: f.Z.getNoiseCancellation(),
            noiseSuppression: f.Z.getNoiseSuppression(),
            noiseSuppressionSupported: f.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: f.Z.isNoiseCancellationSupported(),
        }));
    if (!c && !u) return null;
    let d = +!!n,
        _ = t ? 2 : d,
        m = [];
    return (
        u &&
            m.push({
                name: b.intl.string(b.t.rdoNzs),
                value: 2,
            }),
        c &&
            m.push({
                name: b.intl.string(b.t.qXeYHx),
                value: 1,
            }),
        m.push({
            name: b.intl.string(b.t.wkYAl5),
            value: 0,
        }),
        (0, r.jsxs)(o.hjN, {
            children: [
                (0, r.jsx)(o.vwX, {
                    id: I,
                    tag: o.RB0.H3,
                    className: y.marginBottom8,
                    children: b.intl.string(b.t.t8QhiY),
                }),
                (0, r.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: y.marginBottom8,
                    children: b.intl.string(b.t.najZCQ),
                }),
                (0, r.jsxs)(o.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(o.FXm, {
                            options: m,
                            onChange: (e) => {
                                s.Z.setNoiseCancellation(2 === e.value, T), s.Z.setNoiseSuppression(1 === e.value, T);
                            },
                            value: _,
                        }),
                        u &&
                            (0, r.jsx)(o.ToO, {
                                type: o.Dd5.PRIMARY,
                                imageData: {
                                    src: (0, a.ap)(e) ? O : v,
                                    width: 70,
                                    height: 40,
                                },
                                align: l.Z.Align.CENTER,
                                body: (0, r.jsx)(o.eee, {
                                    href: p.Z.getArticleURL(E.BhN.NOISE_SUPPRESSION),
                                    onClick: S,
                                    children: b.intl.string(b.t.hvVgAQ),
                                }),
                            }),
                    ],
                }),
            ],
        })
    );
}
function C() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: a,
            vadAutoThreshold: l,
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
        v = e === E.pM4.VOICE_ACTIVITY && l;
    return (0, r.jsxs)(m.Z, {
        children: [
            O &&
                (0, r.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    children: b.intl.string(b.t["/Whuzs"]),
                }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, r.jsx)(o.j7V, {
                    value: n,
                    onChange: (e) =>
                        s.Z.setEchoCancellation(e, {
                            page: E.ZY5.USER_SETTINGS,
                            section: E.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: p,
                    hideBorder: !0,
                    children: b.intl.string(b.t.iWTwu7),
                }),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, r.jsx)(A, {}),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, r.jsx)(o.j7V, {
                    value: c,
                    onChange: (t) => s.Z.setMode(e, { vadUseKrisp: t }),
                    note: b.intl.string(b.t.LoOB1N),
                    disabled: !v,
                    hideBorder: !0,
                    children: b.intl.string(b.t.BbESsr),
                }),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, r.jsx)(o.j7V, {
                    value: a,
                    onChange: (e) =>
                        s.Z.setAutomaticGainControl(e, {
                            page: E.ZY5.USER_SETTINGS,
                            section: E.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    note: b.intl.string(b.t["6EjbvL"]),
                    disabled: y,
                    hideBorder: !0,
                    children: b.intl.string(b.t.cUMdHx),
                }),
            }),
            (0, r.jsx)(u.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                children: (0, r.jsx)(o.j7V, {
                    value: _,
                    onChange: (e) => {
                        s.Z.setBypassSystemInputProcessing(e);
                    },
                    note: b.intl.string(b.t["UyRX+P"]),
                    hideBorder: !0,
                    children: b.intl.string(b.t.DFPXIC),
                }),
            }),
        ],
    });
}
