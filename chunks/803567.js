n.d(t, { Z: () => y }), n(653041);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(600164),
    u = n(313201),
    m = n(921801),
    g = n(463395),
    p = n(131951),
    h = n(626135),
    f = n(63063),
    b = n(210887),
    N = n(738486),
    x = n(726985),
    _ = n(981631),
    E = n(388032),
    j = n(20493);
let O = n(775322),
    C = n(853453),
    S = (0, u.hQ)(),
    v = {
        page: _.ZY5.USER_SETTINGS,
        section: _.jXE.SETTINGS_VOICE_AND_VIDEO
    };
function T(e) {
    let t = e.currentTarget;
    h.default.track(_.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: _.ZY5.USER_SETTINGS,
            section: _.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function I(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([b.Z], () => b.Z.theme),
        {
            noiseCancellation: i,
            noiseSuppression: s,
            noiseSuppressionSupported: u,
            noiseCancellationSupported: m
        } = (0, a.cj)([p.Z], () => ({
            noiseCancellation: p.Z.getNoiseCancellation(),
            noiseSuppression: p.Z.getNoiseSuppression(),
            noiseSuppressionSupported: p.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: p.Z.isNoiseCancellationSupported()
        }));
    if (!u && !m) return null;
    let g = [];
    return (
        m &&
            g.push({
                name: E.NW.string(E.t.rdoNzs),
                value: 2
            }),
        u &&
            g.push({
                name: E.NW.string(E.t.qXeYHx),
                value: 1
            }),
        g.push({
            name: E.NW.string(E.t.wkYAl5),
            value: 0
        }),
        (0, r.jsxs)(o.hjN, {
            className: t ? void 0 : j.marginBottom20,
            children: [
                (0, r.jsx)(o.vwX, {
                    id: S,
                    tag: o.RB0.H3,
                    className: j.marginBottom8,
                    children: E.NW.string(E.t.t8QhiY)
                }),
                (0, r.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: j.marginBottom8,
                    children: E.NW.string(E.t.najZCQ)
                }),
                (0, r.jsx)(o.FXm, {
                    options: g,
                    onChange: (e) => {
                        c.Z.setNoiseCancellation(2 === e.value, v), c.Z.setNoiseSuppression(1 === e.value, v);
                    },
                    value: i ? 2 : +!!s
                }),
                m &&
                    (0, r.jsx)(o.ToO, {
                        className: j.marginBottom8,
                        type: o.Dd5.PRIMARY,
                        imageData: {
                            src: (0, l.ap)(n) ? O : C,
                            width: 70,
                            height: 40
                        },
                        align: d.Z.Align.CENTER,
                        body: (0, r.jsx)(o.eee, {
                            href: f.Z.getArticleURL(_.BhN.NOISE_SUPPRESSION),
                            onClick: T,
                            children: E.NW.string(E.t.hvVgAQ)
                        })
                    }),
                t ? null : (0, r.jsx)(o.$i$, {})
            ]
        })
    );
}
function y(e) {
    let { refreshStyles: t = !1 } = e,
        {
            inputMode: n,
            inputDeviceId: i,
            echoCancellation: l,
            automaticGainControl: d,
            vadAutoThreshold: u,
            vadUseKrisp: h
        } = (0, a.cj)([p.Z], () => ({
            inputMode: p.Z.getMode(),
            inputDeviceId: p.Z.getInputDeviceId(),
            echoCancellation: p.Z.getEchoCancellation(),
            automaticGainControl: p.Z.getAutomaticGainControl(),
            vadAutoThreshold: p.Z.getModeOptions().autoThreshold,
            vadUseKrisp: p.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: f,
            hasNoiseSuppression: b,
            hasAutomaticGainControl: O
        } = (0, a.cj)(
            [g.Z],
            () => ({
                hasEchoCancellation: g.Z.hasEchoCancellation(i),
                hasNoiseSuppression: g.Z.hasNoiseSuppression(i),
                hasAutomaticGainControl: g.Z.hasAutomaticGainControl(i)
            }),
            [i]
        ),
        C = n === _.pM4.VOICE_ACTIVITY && u,
        S = (0, r.jsxs)(N.Z, {
            children: [
                (f || b || O) &&
                    (0, r.jsx)(o.R94, {
                        className: t ? void 0 : j.marginBottom20,
                        type: o.R94.Types.DESCRIPTION,
                        children: E.NW.string(E.t['/Whuzs'])
                    }),
                (0, r.jsx)(m.F, {
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                    children: (0, r.jsx)(o.j7V, {
                        className: t ? void 0 : s()(j.marginTop8, j.marginBottom20),
                        value: l,
                        onChange: (e) =>
                            c.Z.setEchoCancellation(e, {
                                page: _.ZY5.USER_SETTINGS,
                                section: _.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        disabled: f,
                        hideBorder: t,
                        children: E.NW.string(E.t.iWTwu7)
                    })
                }),
                (0, r.jsx)(m.F, {
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                    children: (0, r.jsx)(I, { refreshStyles: t })
                }),
                (0, r.jsx)(m.F, {
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                    children: (0, r.jsx)(o.j7V, {
                        value: h,
                        onChange: (e) => c.Z.setMode(n, { vadUseKrisp: e }),
                        note: E.NW.string(E.t.LoOB1N),
                        disabled: !C,
                        hideBorder: t,
                        children: E.NW.string(E.t.BbESsr)
                    })
                }),
                (0, r.jsx)(m.F, {
                    setting: x.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                    children: (0, r.jsx)(o.j7V, {
                        value: d,
                        onChange: (e) =>
                            c.Z.setAutomaticGainControl(e, {
                                page: _.ZY5.USER_SETTINGS,
                                section: _.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        note: E.NW.string(E.t['6EjbvL']),
                        disabled: O,
                        hideBorder: t,
                        children: E.NW.string(E.t.cUMdHx)
                    })
                })
            ]
        });
    return t
        ? S
        : (0, r.jsx)(o.hjN, {
              className: j.marginBottom20,
              title: E.NW.string(E.t['6I6GUl']),
              children: S
          });
}
