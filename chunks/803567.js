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
    h = n(463395),
    g = n(131951),
    _ = n(626135),
    x = n(63063),
    p = n(210887),
    E = n(738486),
    C = n(726985),
    f = n(981631),
    T = n(388032),
    N = n(232186);
let I = n(775322),
    S = n(853453),
    b = (0, u.hQ)(),
    v = {
        page: f.ZY5.USER_SETTINGS,
        section: f.jXE.SETTINGS_VOICE_AND_VIDEO
    };
function j(e) {
    let t = e.currentTarget;
    _.default.track(f.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
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
        } = (0, l.cj)([g.Z], () => ({
            noiseCancellation: g.Z.getNoiseCancellation(),
            noiseSuppression: g.Z.getNoiseSuppression(),
            noiseSuppressionSupported: g.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: g.Z.isNoiseCancellationSupported()
        }));
    if (!u && !m) return null;
    let h = [];
    return (
        m &&
            h.push({
                name: T.intl.string(T.t.rdoNzs),
                value: 2
            }),
        u &&
            h.push({
                name: T.intl.string(T.t.qXeYHx),
                value: 1
            }),
        h.push({
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
                    options: h,
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
                            src: (0, a.ap)(n) ? I : S,
                            width: 70,
                            height: 40
                        },
                        align: d.Z.Align.CENTER,
                        body: (0, i.jsx)(o.eee, {
                            href: x.Z.getArticleURL(f.BhN.NOISE_SUPPRESSION),
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
            vadUseKrisp: _
        } = (0, l.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            inputDeviceId: g.Z.getInputDeviceId(),
            echoCancellation: g.Z.getEchoCancellation(),
            automaticGainControl: g.Z.getAutomaticGainControl(),
            vadAutoThreshold: g.Z.getModeOptions().autoThreshold,
            vadUseKrisp: g.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: x,
            hasNoiseSuppression: p,
            hasAutomaticGainControl: I
        } = (0, l.cj)(
            [h.Z],
            () => ({
                hasEchoCancellation: h.Z.hasEchoCancellation(s),
                hasNoiseSuppression: h.Z.hasNoiseSuppression(s),
                hasAutomaticGainControl: h.Z.hasAutomaticGainControl(s)
            }),
            [s]
        ),
        S = n === f.pM4.VOICE_ACTIVITY && u,
        b = (0, i.jsxs)(E.Z, {
            children: [
                (x || p || I) &&
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
                        disabled: x,
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
                        value: _,
                        onChange: (e) => c.Z.setMode(n, { vadUseKrisp: e }),
                        note: T.intl.string(T.t.LoOB1N),
                        disabled: !S,
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
                        disabled: I,
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
