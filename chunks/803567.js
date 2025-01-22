n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(653041);
var i,
    r,
    s = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(846027),
    m = n(600164),
    g = n(313201),
    h = n(921801),
    p = n(463395),
    x = n(131951),
    f = n(626135),
    _ = n(63063),
    E = n(210887),
    C = n(738486),
    T = n(726985),
    S = n(981631),
    b = n(388032),
    I = n(232186);
let N = n(775322),
    v = n(853453),
    A = (0, g.hQ)();
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.STANDARD = 1)] = 'STANDARD'), (r[(r.KRISP = 2)] = 'KRISP');
let j = {
    page: S.ZY5.USER_SETTINGS,
    section: S.jXE.SETTINGS_VOICE_AND_VIDEO
};
function O(e) {
    let t = e.currentTarget;
    f.default.track(S.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: S.ZY5.USER_SETTINGS,
            section: S.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function R(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, o.e7)([E.Z], () => E.Z.theme),
        {
            noiseCancellation: i,
            noiseSuppression: r,
            noiseSuppressionSupported: a,
            noiseCancellationSupported: l
        } = (0, o.cj)([x.Z], () => ({
            noiseCancellation: x.Z.getNoiseCancellation(),
            noiseSuppression: x.Z.getNoiseSuppression(),
            noiseSuppressionSupported: x.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: x.Z.isNoiseCancellationSupported()
        }));
    if (!a && !l) return null;
    let g = [];
    return (
        l &&
            g.push({
                name: b.intl.string(b.t.rdoNzs),
                value: 2
            }),
        a &&
            g.push({
                name: b.intl.string(b.t.qXeYHx),
                value: 1
            }),
        g.push({
            name: b.intl.string(b.t.wkYAl5),
            value: 0
        }),
        (0, s.jsxs)(d.FormSection, {
            className: t ? void 0 : I.marginBottom20,
            children: [
                (0, s.jsx)(d.FormTitle, {
                    id: A,
                    tag: d.FormTitleTags.H3,
                    className: I.marginBottom8,
                    children: b.intl.string(b.t.t8QhiY)
                }),
                (0, s.jsx)(d.FormText, {
                    type: d.FormText.Types.DESCRIPTION,
                    className: I.marginBottom8,
                    children: b.intl.string(b.t.najZCQ)
                }),
                (0, s.jsx)(d.RadioGroup, {
                    options: g,
                    onChange: (e) => {
                        u.Z.setNoiseCancellation(2 === e.value, j), u.Z.setNoiseSuppression(1 === e.value, j);
                    },
                    value: i ? 2 : r ? 1 : 0
                }),
                l &&
                    (0, s.jsx)(d.FormNotice, {
                        className: I.marginBottom8,
                        type: d.FormNoticeTypes.PRIMARY,
                        imageData: {
                            src: (0, c.ap)(n) ? N : v,
                            width: 70,
                            height: 40
                        },
                        align: m.Z.Align.CENTER,
                        body: (0, s.jsx)(d.Anchor, {
                            href: _.Z.getArticleURL(S.BhN.NOISE_SUPPRESSION),
                            onClick: O,
                            children: b.intl.string(b.t.hvVgAQ)
                        })
                    }),
                t ? null : (0, s.jsx)(d.FormDivider, {})
            ]
        })
    );
}
function P(e) {
    let { refreshStyles: t = !1 } = e,
        {
            inputMode: n,
            inputDeviceId: i,
            echoCancellation: r,
            automaticGainControl: a,
            vadAutoThreshold: c,
            vadUseKrisp: m
        } = (0, o.cj)([x.Z], () => ({
            inputMode: x.Z.getMode(),
            inputDeviceId: x.Z.getInputDeviceId(),
            echoCancellation: x.Z.getEchoCancellation(),
            automaticGainControl: x.Z.getAutomaticGainControl(),
            vadAutoThreshold: x.Z.getModeOptions().autoThreshold,
            vadUseKrisp: x.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: g,
            hasNoiseSuppression: f,
            hasAutomaticGainControl: _
        } = (0, o.cj)(
            [p.Z],
            () => ({
                hasEchoCancellation: p.Z.hasEchoCancellation(i),
                hasNoiseSuppression: p.Z.hasNoiseSuppression(i),
                hasAutomaticGainControl: p.Z.hasAutomaticGainControl(i)
            }),
            [i]
        ),
        E = g || f || _,
        N = n === S.pM4.VOICE_ACTIVITY && c,
        v = (0, s.jsxs)(C.Z, {
            children: [
                E &&
                    (0, s.jsx)(d.FormText, {
                        className: t ? void 0 : I.marginBottom20,
                        type: d.FormText.Types.DESCRIPTION,
                        children: b.intl.string(b.t['/Whuzs'])
                    }),
                (0, s.jsx)(h.F, {
                    setting: T.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                    children: (0, s.jsx)(d.FormSwitch, {
                        className: t ? void 0 : l()(I.marginTop8, I.marginBottom20),
                        value: r,
                        onChange: (e) =>
                            u.Z.setEchoCancellation(e, {
                                page: S.ZY5.USER_SETTINGS,
                                section: S.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        disabled: g,
                        hideBorder: t,
                        children: b.intl.string(b.t.iWTwu7)
                    })
                }),
                (0, s.jsx)(h.F, {
                    setting: T.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                    children: (0, s.jsx)(R, { refreshStyles: t })
                }),
                (0, s.jsx)(h.F, {
                    setting: T.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                    children: (0, s.jsx)(d.FormSwitch, {
                        value: m,
                        onChange: (e) => u.Z.setMode(n, { vadUseKrisp: e }),
                        note: b.intl.string(b.t.LoOB1N),
                        disabled: !N,
                        hideBorder: t,
                        children: b.intl.string(b.t.BbESsr)
                    })
                }),
                (0, s.jsx)(h.F, {
                    setting: T.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                    children: (0, s.jsx)(d.FormSwitch, {
                        value: a,
                        onChange: (e) =>
                            u.Z.setAutomaticGainControl(e, {
                                page: S.ZY5.USER_SETTINGS,
                                section: S.jXE.SETTINGS_VOICE_AND_VIDEO
                            }),
                        note: b.intl.string(b.t['6EjbvL']),
                        disabled: _,
                        hideBorder: t,
                        children: b.intl.string(b.t.cUMdHx)
                    })
                })
            ]
        });
    return t
        ? v
        : (0, s.jsx)(d.FormSection, {
              className: I.marginBottom20,
              title: b.intl.string(b.t['6I6GUl']),
              children: v
          });
}
