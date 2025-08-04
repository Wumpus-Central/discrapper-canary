(n.d(t, { Z: () => y }), n(539854));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(600164),
    u = n(313201),
    m = n(921801),
    p = n(463395),
    g = n(131951),
    h = n(626135),
    f = n(63063),
    b = n(210887),
    x = n(738486),
    _ = n(726985),
    j = n(981631),
    C = n(388032),
    E = n(20493);
let O = n(775322),
    v = n(853453),
    S = (0, u.hQ)(),
    T = {
        page: j.ZY5.USER_SETTINGS,
        section: j.jXE.SETTINGS_VOICE_AND_VIDEO
    };
function N(e) {
    let t = e.currentTarget;
    h.default.track(j.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: j.ZY5.USER_SETTINGS,
            section: j.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function I(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([b.Z], () => b.Z.theme),
        {
            noiseCancellation: r,
            noiseSuppression: s,
            noiseSuppressionSupported: u,
            noiseCancellationSupported: m
        } = (0, a.cj)([g.Z], () => ({
            noiseCancellation: g.Z.getNoiseCancellation(),
            noiseSuppression: g.Z.getNoiseSuppression(),
            noiseSuppressionSupported: g.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: g.Z.isNoiseCancellationSupported()
        }));
    if (!u && !m) return null;
    let p = [];
    return (
        m &&
            p.push({
                name: C.intl.string(C.t.rdoNzs),
                value: 2
            }),
        u &&
            p.push({
                name: C.intl.string(C.t.qXeYHx),
                value: 1
            }),
        p.push({
            name: C.intl.string(C.t.wkYAl5),
            value: 0
        }),
        (0, i.jsxs)(o.hjN, {
            className: t ? void 0 : E.marginBottom20,
            children: [
                (0, i.jsx)(o.vwX, {
                    id: S,
                    tag: o.RB0.H3,
                    className: E.marginBottom8,
                    children: C.intl.string(C.t.t8QhiY)
                }),
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: E.marginBottom8,
                    children: C.intl.string(C.t.najZCQ)
                }),
                (0, i.jsx)(o.FXm, {
                    options: p,
                    onChange: (e) => {
                        (c.Z.setNoiseCancellation(2 === e.value, T), c.Z.setNoiseSuppression(1 === e.value, T));
                    },
                    value: r ? 2 : +!!s
                }),
                m &&
                    (0, i.jsx)(o.ToO, {
                        className: E.marginBottom8,
                        type: o.Dd5.PRIMARY,
                        imageData: {
                            src: (0, l.ap)(n) ? O : v,
                            width: 70,
                            height: 40
                        },
                        align: d.Z.Align.CENTER,
                        body: (0, i.jsx)(o.eee, {
                            href: f.Z.getArticleURL(j.BhN.NOISE_SUPPRESSION),
                            onClick: N,
                            children: C.intl.string(C.t.hvVgAQ)
                        })
                    }),
                t ? null : (0, i.jsx)(o.$i$, {})
            ]
        })
    );
}
function y(e) {
    let { refreshStyles: t = !1 } = e,
        {
            inputMode: n,
            inputDeviceId: r,
            echoCancellation: l,
            automaticGainControl: d,
            vadAutoThreshold: u,
            vadUseKrisp: h,
            bypassSystemInputProcessing: f
        } = (0, a.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            inputDeviceId: g.Z.getInputDeviceId(),
            echoCancellation: g.Z.getEchoCancellation(),
            automaticGainControl: g.Z.getAutomaticGainControl(),
            vadAutoThreshold: g.Z.getModeOptions().autoThreshold,
            vadUseKrisp: g.Z.getModeOptions().vadUseKrisp,
            bypassSystemInputProcessing: g.Z.getBypassSystemInputProcessing()
        })),
        {
            hasEchoCancellation: b,
            hasNoiseSuppression: O,
            hasAutomaticGainControl: v
        } = (0, a.cj)(
            [p.Z],
            () => ({
                hasEchoCancellation: p.Z.hasEchoCancellation(r),
                hasNoiseSuppression: p.Z.hasNoiseSuppression(r),
                hasAutomaticGainControl: p.Z.hasAutomaticGainControl(r)
            }),
            [r]
        ),
        S = n === j.pM4.VOICE_ACTIVITY && u,
        T = (0, i.jsxs)(x.Z, {
            children: [
                (b || O || v) &&
                    (0, i.jsx)(o.R94, {
                        className: t ? void 0 : E.marginBottom20,
                        type: o.R94.Types.DESCRIPTION,
                        children: C.intl.string(C.t['/Whuzs'])
                    }),
                (0, i.jsx)(m.F, {
                    setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                    children: (0, i.jsx)(o.j7V, {
                        className: t ? void 0 : s()(E.marginTop8, E.marginBottom20),
                        value: l,
                        onChange: (e) =>
                            c.Z.setEchoCancellation(e, {
                                page: j.ZY5.USER_SETTINGS,
                                section: j.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        disabled: b,
                        hideBorder: t,
                        children: C.intl.string(C.t.iWTwu7)
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                    children: (0, i.jsx)(I, { refreshStyles: t })
                }),
                (0, i.jsx)(m.F, {
                    setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                    children: (0, i.jsx)(o.j7V, {
                        value: h,
                        onChange: (e) => c.Z.setMode(n, { vadUseKrisp: e }),
                        note: C.intl.string(C.t.LoOB1N),
                        disabled: !S,
                        hideBorder: t,
                        children: C.intl.string(C.t.BbESsr)
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                    children: (0, i.jsx)(o.j7V, {
                        value: d,
                        onChange: (e) =>
                            c.Z.setAutomaticGainControl(e, {
                                page: j.ZY5.USER_SETTINGS,
                                section: j.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        note: C.intl.string(C.t['6EjbvL']),
                        disabled: v,
                        hideBorder: t,
                        children: C.intl.string(C.t.cUMdHx)
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: _.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_BYPASS_SYSTEM_INPUT_PROCESSING,
                    children: (0, i.jsx)(o.j7V, {
                        value: f,
                        onChange: (e) => {
                            c.Z.setBypassSystemInputProcessing(e);
                        },
                        note: C.intl.string(C.t['UyRX+P']),
                        hideBorder: t,
                        children: C.intl.string(C.t.DFPXIC)
                    })
                })
            ]
        });
    return t
        ? T
        : (0, i.jsx)(o.hjN, {
              className: E.marginBottom20,
              title: C.intl.string(C.t['6I6GUl']),
              children: T
          });
}
