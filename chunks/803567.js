n.d(t, { Z: () => O }), n(653041);
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(600164),
    u = n(313201),
    m = n(921801),
    g = n(463395),
    h = n(131951),
    x = n(626135),
    _ = n(63063),
    p = n(210887),
    E = n(738486),
    C = n(726985),
    f = n(981631),
    T = n(388032),
    N = n(483938);
let S = n(775322),
    I = n(853453),
    b = (0, u.hQ)(),
    v = {
        page: f.ZY5.USER_SETTINGS,
        section: f.jXE.SETTINGS_VOICE_AND_VIDEO
    };
function j(e) {
    let t = e.currentTarget;
    x.default.track(f.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: f.ZY5.USER_SETTINGS,
            section: f.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function A(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, l.e7)([p.Z], () => p.Z.theme),
        {
            noiseCancellation: s,
            noiseSuppression: r,
            noiseSuppressionSupported: u,
            noiseCancellationSupported: m
        } = (0, l.cj)([h.Z], () => ({
            noiseCancellation: h.Z.getNoiseCancellation(),
            noiseSuppression: h.Z.getNoiseSuppression(),
            noiseSuppressionSupported: h.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: h.Z.isNoiseCancellationSupported()
        }));
    if (!u && !m) return null;
    let g = [];
    return (
        m &&
            g.push({
                name: T.intl.string(T.t.rdoNzs),
                value: 2
            }),
        u &&
            g.push({
                name: T.intl.string(T.t.qXeYHx),
                value: 1
            }),
        g.push({
            name: T.intl.string(T.t.wkYAl5),
            value: 0
        }),
        (0, i.jsxs)(o.hjN, {
            className: t ? void 0 : N.marginBottom20,
            children: [
                (0, i.jsx)(o.vwX, {
                    id: b,
                    tag: o.RB0.H3,
                    className: N.marginBottom8,
                    children: T.intl.string(T.t.t8QhiY)
                }),
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: N.marginBottom8,
                    children: T.intl.string(T.t.najZCQ)
                }),
                (0, i.jsx)(o.FXm, {
                    options: g,
                    onChange: (e) => {
                        c.Z.setNoiseCancellation(2 === e.value, v), c.Z.setNoiseSuppression(1 === e.value, v);
                    },
                    value: s ? 2 : r ? 1 : 0
                }),
                m &&
                    (0, i.jsx)(o.ToO, {
                        className: N.marginBottom8,
                        type: o.Dd5.PRIMARY,
                        imageData: {
                            src: (0, a.ap)(n) ? S : I,
                            width: 70,
                            height: 40
                        },
                        align: d.Z.Align.CENTER,
                        body: (0, i.jsx)(o.eee, {
                            href: _.Z.getArticleURL(f.BhN.NOISE_SUPPRESSION),
                            onClick: j,
                            children: T.intl.string(T.t.hvVgAQ)
                        })
                    }),
                t ? null : (0, i.jsx)(o.$i$, {})
            ]
        })
    );
}
function O(e) {
    let { refreshStyles: t = !1 } = e,
        {
            inputMode: n,
            inputDeviceId: s,
            echoCancellation: a,
            automaticGainControl: d,
            vadAutoThreshold: u,
            vadUseKrisp: x
        } = (0, l.cj)([h.Z], () => ({
            inputMode: h.Z.getMode(),
            inputDeviceId: h.Z.getInputDeviceId(),
            echoCancellation: h.Z.getEchoCancellation(),
            automaticGainControl: h.Z.getAutomaticGainControl(),
            vadAutoThreshold: h.Z.getModeOptions().autoThreshold,
            vadUseKrisp: h.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: _,
            hasNoiseSuppression: p,
            hasAutomaticGainControl: S
        } = (0, l.cj)(
            [g.Z],
            () => ({
                hasEchoCancellation: g.Z.hasEchoCancellation(s),
                hasNoiseSuppression: g.Z.hasNoiseSuppression(s),
                hasAutomaticGainControl: g.Z.hasAutomaticGainControl(s)
            }),
            [s]
        ),
        I = n === f.pM4.VOICE_ACTIVITY && u,
        b = (0, i.jsxs)(E.Z, {
            children: [
                (_ || p || S) &&
                    (0, i.jsx)(o.R94, {
                        className: t ? void 0 : N.marginBottom20,
                        type: o.R94.Types.DESCRIPTION,
                        children: T.intl.string(T.t['/Whuzs'])
                    }),
                (0, i.jsx)(m.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                    children: (0, i.jsx)(o.j7V, {
                        className: t ? void 0 : r()(N.marginTop8, N.marginBottom20),
                        value: a,
                        onChange: (e) =>
                            c.Z.setEchoCancellation(e, {
                                page: f.ZY5.USER_SETTINGS,
                                section: f.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        disabled: _,
                        hideBorder: t,
                        children: T.intl.string(T.t.iWTwu7)
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                    children: (0, i.jsx)(A, { refreshStyles: t })
                }),
                (0, i.jsx)(m.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                    children: (0, i.jsx)(o.j7V, {
                        value: x,
                        onChange: (e) => c.Z.setMode(n, { vadUseKrisp: e }),
                        note: T.intl.string(T.t.LoOB1N),
                        disabled: !I,
                        hideBorder: t,
                        children: T.intl.string(T.t.BbESsr)
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                    children: (0, i.jsx)(o.j7V, {
                        value: d,
                        onChange: (e) =>
                            c.Z.setAutomaticGainControl(e, {
                                page: f.ZY5.USER_SETTINGS,
                                section: f.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        note: T.intl.string(T.t['6EjbvL']),
                        disabled: S,
                        hideBorder: t,
                        children: T.intl.string(T.t.cUMdHx)
                    })
                })
            ]
        });
    return t
        ? b
        : (0, i.jsx)(o.hjN, {
              className: N.marginBottom20,
              title: T.intl.string(T.t['6I6GUl']),
              children: b
          });
}
