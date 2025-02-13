n.d(t, { Z: () => O }), n(653041);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    a = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(600164),
    u = n(313201),
    h = n(921801),
    m = n(463395),
    g = n(131951),
    x = n(626135),
    _ = n(63063),
    p = n(210887),
    E = n(738486),
    C = n(726985),
    N = n(981631),
    I = n(388032),
    f = n(814632);
let T = n(775322),
    S = n(853453),
    j = (0, u.hQ)(),
    v = {
        page: N.ZY5.USER_SETTINGS,
        section: N.jXE.SETTINGS_VOICE_AND_VIDEO
    };
function b(e) {
    let t = e.currentTarget;
    x.default.track(N.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: N.ZY5.USER_SETTINGS,
            section: N.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function A(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, r.e7)([p.Z], () => p.Z.theme),
        {
            noiseCancellation: s,
            noiseSuppression: l,
            noiseSuppressionSupported: u,
            noiseCancellationSupported: h
        } = (0, r.cj)([g.Z], () => ({
            noiseCancellation: g.Z.getNoiseCancellation(),
            noiseSuppression: g.Z.getNoiseSuppression(),
            noiseSuppressionSupported: g.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: g.Z.isNoiseCancellationSupported()
        }));
    if (!u && !h) return null;
    let m = [];
    return (
        h &&
            m.push({
                name: I.intl.string(I.t.rdoNzs),
                value: 2
            }),
        u &&
            m.push({
                name: I.intl.string(I.t.qXeYHx),
                value: 1
            }),
        m.push({
            name: I.intl.string(I.t.wkYAl5),
            value: 0
        }),
        (0, i.jsxs)(o.hjN, {
            className: t ? void 0 : f.marginBottom20,
            children: [
                (0, i.jsx)(o.vwX, {
                    id: j,
                    tag: o.RB0.H3,
                    className: f.marginBottom8,
                    children: I.intl.string(I.t.t8QhiY)
                }),
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: f.marginBottom8,
                    children: I.intl.string(I.t.najZCQ)
                }),
                (0, i.jsx)(o.FXm, {
                    options: m,
                    onChange: (e) => {
                        c.Z.setNoiseCancellation(2 === e.value, v), c.Z.setNoiseSuppression(1 === e.value, v);
                    },
                    value: s ? 2 : l ? 1 : 0
                }),
                h &&
                    (0, i.jsx)(o.ToO, {
                        className: f.marginBottom8,
                        type: o.Dd5.PRIMARY,
                        imageData: {
                            src: (0, a.ap)(n) ? T : S,
                            width: 70,
                            height: 40
                        },
                        align: d.Z.Align.CENTER,
                        body: (0, i.jsx)(o.eee, {
                            href: _.Z.getArticleURL(N.BhN.NOISE_SUPPRESSION),
                            onClick: b,
                            children: I.intl.string(I.t.hvVgAQ)
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
        } = (0, r.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            inputDeviceId: g.Z.getInputDeviceId(),
            echoCancellation: g.Z.getEchoCancellation(),
            automaticGainControl: g.Z.getAutomaticGainControl(),
            vadAutoThreshold: g.Z.getModeOptions().autoThreshold,
            vadUseKrisp: g.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: _,
            hasNoiseSuppression: p,
            hasAutomaticGainControl: T
        } = (0, r.cj)(
            [m.Z],
            () => ({
                hasEchoCancellation: m.Z.hasEchoCancellation(s),
                hasNoiseSuppression: m.Z.hasNoiseSuppression(s),
                hasAutomaticGainControl: m.Z.hasAutomaticGainControl(s)
            }),
            [s]
        ),
        S = n === N.pM4.VOICE_ACTIVITY && u,
        j = (0, i.jsxs)(E.Z, {
            children: [
                (_ || p || T) &&
                    (0, i.jsx)(o.R94, {
                        className: t ? void 0 : f.marginBottom20,
                        type: o.R94.Types.DESCRIPTION,
                        children: I.intl.string(I.t['/Whuzs'])
                    }),
                (0, i.jsx)(h.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                    children: (0, i.jsx)(o.j7V, {
                        className: t ? void 0 : l()(f.marginTop8, f.marginBottom20),
                        value: a,
                        onChange: (e) =>
                            c.Z.setEchoCancellation(e, {
                                page: N.ZY5.USER_SETTINGS,
                                section: N.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        disabled: _,
                        hideBorder: t,
                        children: I.intl.string(I.t.iWTwu7)
                    })
                }),
                (0, i.jsx)(h.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                    children: (0, i.jsx)(A, { refreshStyles: t })
                }),
                (0, i.jsx)(h.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                    children: (0, i.jsx)(o.j7V, {
                        value: x,
                        onChange: (e) => c.Z.setMode(n, { vadUseKrisp: e }),
                        note: I.intl.string(I.t.LoOB1N),
                        disabled: !S,
                        hideBorder: t,
                        children: I.intl.string(I.t.BbESsr)
                    })
                }),
                (0, i.jsx)(h.F, {
                    setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                    children: (0, i.jsx)(o.j7V, {
                        value: d,
                        onChange: (e) =>
                            c.Z.setAutomaticGainControl(e, {
                                page: N.ZY5.USER_SETTINGS,
                                section: N.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        note: I.intl.string(I.t['6EjbvL']),
                        disabled: T,
                        hideBorder: t,
                        children: I.intl.string(I.t.cUMdHx)
                    })
                })
            ]
        });
    return t
        ? j
        : (0, i.jsx)(o.hjN, {
              className: f.marginBottom20,
              title: I.intl.string(I.t['6I6GUl']),
              children: j
          });
}
