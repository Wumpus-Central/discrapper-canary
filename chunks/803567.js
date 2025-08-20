n.d(t, { Z: () => R }), n(539854);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(780384),
    l = n(481060),
    c = n(846027),
    u = n(600164),
    d = n(313201),
    f = n(921801),
    _ = n(463395),
    p = n(131951),
    h = n(626135),
    m = n(63063),
    g = n(210887),
    E = n(738486),
    b = n(726985),
    y = n(981631),
    O = n(388032),
    v = n(197571);
let I = n(775322),
    T = n(853453),
    S = (0, d.hQ)(),
    A = {
        page: y.ZY5.USER_SETTINGS,
        section: y.jXE.SETTINGS_VOICE_AND_VIDEO,
    };
function C(e) {
    let t = e.currentTarget;
    h.default.track(y.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: y.ZY5.USER_SETTINGS,
            section: y.jXE.SETTINGS_VOICE_AND_VIDEO,
        },
    });
}
function N(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, o.e7)([g.Z], () => g.Z.theme),
        {
            noiseCancellation: i,
            noiseSuppression: a,
            noiseSuppressionSupported: d,
            noiseCancellationSupported: f,
        } = (0, o.cj)([p.Z], () => ({
            noiseCancellation: p.Z.getNoiseCancellation(),
            noiseSuppression: p.Z.getNoiseSuppression(),
            noiseSuppressionSupported: p.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: p.Z.isNoiseCancellationSupported(),
        }));
    if (!d && !f) return null;
    let _ = +!!a,
        h = i ? 2 : _,
        E = [];
    return (
        f &&
            E.push({
                name: O.intl.string(O.t.rdoNzs),
                value: 2,
            }),
        d &&
            E.push({
                name: O.intl.string(O.t.qXeYHx),
                value: 1,
            }),
        E.push({
            name: O.intl.string(O.t.wkYAl5),
            value: 0,
        }),
        (0, r.jsxs)(l.hjN, {
            className: t ? void 0 : v.marginBottom20,
            children: [
                (0, r.jsx)(l.vwX, {
                    id: S,
                    tag: l.RB0.H3,
                    className: v.marginBottom8,
                    children: O.intl.string(O.t.t8QhiY),
                }),
                (0, r.jsx)(l.R94, {
                    type: l.R94.Types.DESCRIPTION,
                    className: v.marginBottom8,
                    children: O.intl.string(O.t.najZCQ),
                }),
                (0, r.jsxs)(l.Kqy, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(l.FXm, {
                            options: E,
                            onChange: (e) => {
                                c.Z.setNoiseCancellation(2 === e.value, A), c.Z.setNoiseSuppression(1 === e.value, A);
                            },
                            value: h,
                        }),
                        f &&
                            (0, r.jsx)(l.ToO, {
                                type: l.Dd5.PRIMARY,
                                imageData: {
                                    src: (0, s.ap)(n) ? I : T,
                                    width: 70,
                                    height: 40,
                                },
                                align: u.Z.Align.CENTER,
                                body: (0, r.jsx)(l.eee, {
                                    href: m.Z.getArticleURL(y.BhN.NOISE_SUPPRESSION),
                                    onClick: C,
                                    children: O.intl.string(O.t.hvVgAQ),
                                }),
                            }),
                    ],
                }),
                t ? null : (0, r.jsx)(l.$i$, {}),
            ],
        })
    );
}
function R(e) {
    let { refreshStyles: t = !1 } = e,
        {
            inputMode: n,
            inputDeviceId: i,
            echoCancellation: s,
            automaticGainControl: u,
            vadAutoThreshold: d,
            vadUseKrisp: h,
            bypassSystemInputProcessing: m,
        } = (0, o.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            inputDeviceId: p.Z.getInputDeviceId(),
            echoCancellation: p.Z.getEchoCancellation(),
            automaticGainControl: p.Z.getAutomaticGainControl(),
            vadAutoThreshold: p.Z.getModeOptions().autoThreshold,
            vadUseKrisp: p.Z.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: p.Z.getBypassSystemInputProcessing(),
        })),
        {
            hasEchoCancellation: g,
            hasNoiseSuppression: I,
            hasAutomaticGainControl: T,
        } = (0, o.cj)(
            [_.Z],
            () => ({
                hasEchoCancellation: _.Z.hasEchoCancellation(i),
                hasNoiseSuppression: _.Z.hasNoiseSuppression(i),
                hasAutomaticGainControl: _.Z.hasAutomaticGainControl(i),
            }),
            [i],
        ),
        S = g || I || T,
        A = n === y.pM4.VOICE_ACTIVITY && d,
        C = (0, r.jsxs)(E.Z, {
            children: [
                S &&
                    (0, r.jsx)(l.R94, {
                        className: t ? void 0 : v.marginBottom20,
                        type: l.R94.Types.DESCRIPTION,
                        children: O.intl.string(O.t["/Whuzs"]),
                    }),
                (0, r.jsx)(f.F, {
                    setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                    children: (0, r.jsx)(l.j7V, {
                        className: t ? void 0 : a()(v.marginTop8, v.marginBottom20),
                        value: s,
                        onChange: (e) =>
                            c.Z.setEchoCancellation(e, {
                                page: y.ZY5.USER_SETTINGS,
                                section: y.jXE.SETTINGS_VOICE_AND_VIDEO,
                            }),
                        disabled: g,
                        hideBorder: t,
                        children: O.intl.string(O.t.iWTwu7),
                    }),
                }),
                (0, r.jsx)(f.F, {
                    setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                    children: (0, r.jsx)(N, { refreshStyles: t }),
                }),
                (0, r.jsx)(f.F, {
                    setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                    children: (0, r.jsx)(l.j7V, {
                        value: h,
                        onChange: (e) => c.Z.setMode(n, { vadUseKrisp: e }),
                        note: O.intl.string(O.t.LoOB1N),
                        disabled: !A,
                        hideBorder: t,
                        children: O.intl.string(O.t.BbESsr),
                    }),
                }),
                (0, r.jsx)(f.F, {
                    setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                    children: (0, r.jsx)(l.j7V, {
                        value: u,
                        onChange: (e) =>
                            c.Z.setAutomaticGainControl(e, {
                                page: y.ZY5.USER_SETTINGS,
                                section: y.jXE.SETTINGS_VOICE_AND_VIDEO,
                            }),
                        note: O.intl.string(O.t["6EjbvL"]),
                        disabled: T,
                        hideBorder: t,
                        children: O.intl.string(O.t.cUMdHx),
                    }),
                }),
                (0, r.jsx)(f.F, {
                    setting: b.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                    children: (0, r.jsx)(l.j7V, {
                        value: m,
                        onChange: (e) => {
                            c.Z.setBypassSystemInputProcessing(e);
                        },
                        note: O.intl.string(O.t["UyRX+P"]),
                        hideBorder: t,
                        children: O.intl.string(O.t.DFPXIC),
                    }),
                }),
            ],
        });
    return t
        ? C
        : (0, r.jsx)(l.hjN, {
              className: v.marginBottom20,
              title: O.intl.string(O.t["6I6GUl"]),
              children: C,
          });
}
