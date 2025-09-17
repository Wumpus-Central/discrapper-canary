n.d(t, { Z: () => N }), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(780384),
    o = n(755721),
    s = n(481060),
    l = n(846027),
    c = n(600164),
    u = n(313201),
    d = n(921801),
    f = n(463395),
    _ = n(131951),
    p = n(626135),
    h = n(63063),
    m = n(210887),
    g = n(738486),
    E = n(726985),
    b = n(981631),
    y = n(388032),
    O = n(10198);
let v = n(775322),
    I = n(853453),
    T = (0, u.hQ)(),
    S = {
        page: b.ZY5.USER_SETTINGS,
        section: b.jXE.SETTINGS_VOICE_AND_VIDEO,
    };
function A(e) {
    let t = e.currentTarget;
    p.default.track(b.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: b.ZY5.USER_SETTINGS,
            section: b.jXE.SETTINGS_VOICE_AND_VIDEO,
        },
    });
}
function C() {
    let e = (0, i.e7)([m.Z], () => m.Z.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: u,
            noiseCancellationSupported: d,
        } = (0, i.cj)([_.Z], () => ({
            noiseCancellation: _.Z.getNoiseCancellation(),
            noiseSuppression: _.Z.getNoiseSuppression(),
            noiseSuppressionSupported: _.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: _.Z.isNoiseCancellationSupported(),
        }));
    if (!u && !d) return null;
    let f = +!!n,
        p = t ? 2 : f,
        g = [];
    return (
        d &&
            g.push({
                name: y.intl.string(y.t.rdoNzs),
                value: 2,
            }),
        u &&
            g.push({
                name: y.intl.string(y.t.qXeYHx),
                value: 1,
            }),
        g.push({
            name: y.intl.string(y.t.wkYAl5),
            value: 0,
        }),
        (0, r.jsxs)(s.hjN, {
            children: [
                (0, r.jsx)(s.vwX, {
                    id: T,
                    tag: s.RB0.H3,
                    className: O.marginBottom8,
                    children: y.intl.string(y.t.t8QhiY),
                }),
                (0, r.jsx)(s.R94, {
                    type: s.R94.Types.DESCRIPTION,
                    className: O.marginBottom8,
                    children: y.intl.string(y.t.najZCQ),
                }),
                (0, r.jsxs)(s.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(o.Gu, {
                            options: g,
                            onChange: (e) => {
                                l.Z.setNoiseCancellation(2 === e.value, S), l.Z.setNoiseSuppression(1 === e.value, S);
                            },
                            value: p,
                        }),
                        d &&
                            (0, r.jsx)(s.ToO, {
                                type: s.Dd5.PRIMARY,
                                imageData: {
                                    src: (0, a.ap)(e) ? v : I,
                                    width: 70,
                                    height: 40,
                                },
                                align: c.Z.Align.CENTER,
                                body: (0, r.jsx)(s.eee, {
                                    href: h.Z.getArticleURL(b.BhN.NOISE_SUPPRESSION),
                                    onClick: A,
                                    children: y.intl.string(y.t.hvVgAQ),
                                }),
                            }),
                    ],
                }),
            ],
        })
    );
}
function N() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: a,
            vadAutoThreshold: o,
            vadUseKrisp: c,
            bypassSystemInputProcessing: u,
        } = (0, i.cj)([_.Z], () => ({
            inputMode: _.Z.getMode(),
            inputDeviceId: _.Z.getInputDeviceId(),
            echoCancellation: _.Z.getEchoCancellation(),
            automaticGainControl: _.Z.getAutomaticGainControl(),
            vadAutoThreshold: _.Z.getModeOptions().autoThreshold,
            vadUseKrisp: _.Z.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: _.Z.getBypassSystemInputProcessing(),
        })),
        {
            hasEchoCancellation: p,
            hasNoiseSuppression: h,
            hasAutomaticGainControl: m,
        } = (0, i.cj)(
            [f.Z],
            () => ({
                hasEchoCancellation: f.Z.hasEchoCancellation(t),
                hasNoiseSuppression: f.Z.hasNoiseSuppression(t),
                hasAutomaticGainControl: f.Z.hasAutomaticGainControl(t),
            }),
            [t],
        ),
        O = p || h || m,
        v = e === b.pM4.VOICE_ACTIVITY && o;
    return (0, r.jsxs)(g.Z, {
        children: [
            O &&
                (0, r.jsx)(s.R94, {
                    type: s.R94.Types.DESCRIPTION,
                    children: y.intl.string(y.t["/Whuzs"]),
                }),
            (0, r.jsx)(d.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, r.jsx)(s.j7V, {
                    value: n,
                    onChange: (e) =>
                        l.Z.setEchoCancellation(e, {
                            page: b.ZY5.USER_SETTINGS,
                            section: b.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    disabled: p,
                    hideBorder: !0,
                    children: y.intl.string(y.t.iWTwu7),
                }),
            }),
            (0, r.jsx)(d.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, r.jsx)(C, {}),
            }),
            (0, r.jsx)(d.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, r.jsx)(s.j7V, {
                    value: c,
                    onChange: (t) => l.Z.setMode(e, { vadUseKrisp: t }),
                    note: y.intl.string(y.t.LoOB1N),
                    disabled: !v,
                    hideBorder: !0,
                    children: y.intl.string(y.t.BbESsr),
                }),
            }),
            (0, r.jsx)(d.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, r.jsx)(s.j7V, {
                    value: a,
                    onChange: (e) =>
                        l.Z.setAutomaticGainControl(e, {
                            page: b.ZY5.USER_SETTINGS,
                            section: b.jXE.SETTINGS_VOICE_AND_VIDEO,
                        }),
                    note: y.intl.string(y.t["6EjbvL"]),
                    disabled: m,
                    hideBorder: !0,
                    children: y.intl.string(y.t.cUMdHx),
                }),
            }),
            (0, r.jsx)(d.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                children: (0, r.jsx)(s.j7V, {
                    value: u,
                    onChange: (e) => {
                        l.Z.setBypassSystemInputProcessing(e);
                    },
                    note: y.intl.string(y.t["UyRX+P"]),
                    hideBorder: !0,
                    children: y.intl.string(y.t.DFPXIC),
                }),
            }),
        ],
    });
}
