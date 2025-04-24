n.d(t, { Z: () => y }), n(539854);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(442837),
    a = n(780384),
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
    _ = n(738486),
    x = n(726985),
    E = n(981631),
    C = n(388032),
    j = n(20493);
let O = n(775322),
    S = n(853453),
    v = (0, u.hQ)(),
    T = {
        page: E.ZY5.USER_SETTINGS,
        section: E.jXE.SETTINGS_VOICE_AND_VIDEO
    };
function I(e) {
    let t = e.currentTarget;
    h.default.track(E.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: E.ZY5.USER_SETTINGS,
            section: E.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function N(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, l.e7)([b.Z], () => b.Z.theme),
        {
            noiseCancellation: r,
            noiseSuppression: s,
            noiseSuppressionSupported: u,
            noiseCancellationSupported: m
        } = (0, l.cj)([g.Z], () => ({
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
            className: t ? void 0 : j.marginBottom20,
            children: [
                (0, i.jsx)(o.vwX, {
                    id: v,
                    tag: o.RB0.H3,
                    className: j.marginBottom8,
                    children: C.intl.string(C.t.t8QhiY)
                }),
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: j.marginBottom8,
                    children: C.intl.string(C.t.najZCQ)
                }),
                (0, i.jsx)(o.FXm, {
                    options: p,
                    onChange: (e) => {
                        c.Z.setNoiseCancellation(2 === e.value, T), c.Z.setNoiseSuppression(1 === e.value, T);
                    },
                    value: r ? 2 : +!!s
                }),
                m &&
                    (0, i.jsx)(o.ToO, {
                        className: j.marginBottom8,
                        type: o.Dd5.PRIMARY,
                        imageData: {
                            src: (0, a.ap)(n) ? O : S,
                            width: 70,
                            height: 40
                        },
                        align: d.Z.Align.CENTER,
                        body: (0, i.jsx)(o.eee, {
                            href: f.Z.getArticleURL(E.BhN.NOISE_SUPPRESSION),
                            onClick: I,
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
            echoCancellation: a,
            automaticGainControl: d,
            vadAutoThreshold: u,
            vadUseKrisp: h
        } = (0, l.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            inputDeviceId: g.Z.getInputDeviceId(),
            echoCancellation: g.Z.getEchoCancellation(),
            automaticGainControl: g.Z.getAutomaticGainControl(),
            vadAutoThreshold: g.Z.getModeOptions().autoThreshold,
            vadUseKrisp: g.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: f,
            hasNoiseSuppression: b,
            hasAutomaticGainControl: O
        } = (0, l.cj)(
            [p.Z],
            () => ({
                hasEchoCancellation: p.Z.hasEchoCancellation(r),
                hasNoiseSuppression: p.Z.hasNoiseSuppression(r),
                hasAutomaticGainControl: p.Z.hasAutomaticGainControl(r)
            }),
            [r]
        ),
        S = n === E.pM4.VOICE_ACTIVITY && u,
        v = (0, i.jsxs)(_.Z, {
            children: [
                (f || b || O) &&
                    (0, i.jsx)(o.R94, {
                        className: t ? void 0 : j.marginBottom20,
                        type: o.R94.Types.DESCRIPTION,
                        children: C.intl.string(C.t['/Whuzs'])
                    }),
                (0, i.jsx)(m.F, {
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                    children: (0, i.jsx)(o.j7V, {
                        className: t ? void 0 : s()(j.marginTop8, j.marginBottom20),
                        value: a,
                        onChange: (e) =>
                            c.Z.setEchoCancellation(e, {
                                page: E.ZY5.USER_SETTINGS,
                                section: E.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        disabled: f,
                        hideBorder: t,
                        children: C.intl.string(C.t.iWTwu7)
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                    children: (0, i.jsx)(N, { refreshStyles: t })
                }),
                (0, i.jsx)(m.F, {
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
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
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                    children: (0, i.jsx)(o.j7V, {
                        value: d,
                        onChange: (e) =>
                            c.Z.setAutomaticGainControl(e, {
                                page: E.ZY5.USER_SETTINGS,
                                section: E.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        note: C.intl.string(C.t['6EjbvL']),
                        disabled: O,
                        hideBorder: t,
                        children: C.intl.string(C.t.cUMdHx)
                    })
                })
            ]
        });
    return t
        ? v
        : (0, i.jsx)(o.hjN, {
              className: j.marginBottom20,
              title: C.intl.string(C.t['6I6GUl']),
              children: v
          });
}
