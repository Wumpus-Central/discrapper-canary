n.d(t, {
    Z: function () {
        return R;
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
    C = n(726985),
    T = n(981631),
    S = n(388032),
    b = n(275477);
let I = n(775322),
    N = n(853453),
    v = (0, g.hQ)();
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.STANDARD = 1)] = 'STANDARD'), (r[(r.KRISP = 2)] = 'KRISP');
let A = {
    page: T.ZY5.USER_SETTINGS,
    section: T.jXE.SETTINGS_VOICE_AND_VIDEO
};
function j(e) {
    let t = e.currentTarget;
    f.default.track(T.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: T.ZY5.USER_SETTINGS,
            section: T.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function O() {
    let e = (0, o.e7)([E.Z], () => E.Z.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: i,
            noiseCancellationSupported: r
        } = (0, o.cj)([x.Z], () => ({
            noiseCancellation: x.Z.getNoiseCancellation(),
            noiseSuppression: x.Z.getNoiseSuppression(),
            noiseSuppressionSupported: x.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: x.Z.isNoiseCancellationSupported()
        }));
    if (!i && !r) return null;
    let a = [];
    return (
        r &&
            a.push({
                name: S.intl.string(S.t.rdoNzs),
                value: 2
            }),
        i &&
            a.push({
                name: S.intl.string(S.t.qXeYHx),
                value: 1
            }),
        a.push({
            name: S.intl.string(S.t.wkYAl5),
            value: 0
        }),
        (0, s.jsxs)(d.FormSection, {
            className: b.marginBottom20,
            children: [
                (0, s.jsx)(d.FormTitle, {
                    id: v,
                    tag: d.FormTitleTags.H3,
                    className: b.marginBottom8,
                    children: S.intl.string(S.t.t8QhiY)
                }),
                (0, s.jsx)(d.FormText, {
                    type: d.FormText.Types.DESCRIPTION,
                    className: b.marginBottom8,
                    children: S.intl.string(S.t.najZCQ)
                }),
                (0, s.jsx)(d.RadioGroup, {
                    options: a,
                    onChange: (e) => {
                        u.Z.setNoiseCancellation(2 === e.value, A), u.Z.setNoiseSuppression(1 === e.value, A);
                    },
                    value: t ? 2 : n ? 1 : 0
                }),
                r &&
                    (0, s.jsx)(d.FormNotice, {
                        className: b.marginBottom8,
                        type: d.FormNoticeTypes.PRIMARY,
                        imageData: {
                            src: (0, c.ap)(e) ? I : N,
                            width: 70,
                            height: 40
                        },
                        align: m.Z.Align.CENTER,
                        body: (0, s.jsx)(d.Anchor, {
                            href: _.Z.getArticleURL(T.BhN.NOISE_SUPPRESSION),
                            onClick: j,
                            children: S.intl.string(S.t.hvVgAQ)
                        })
                    }),
                (0, s.jsx)(d.FormDivider, {})
            ]
        })
    );
}
function R() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: i,
            vadAutoThreshold: r,
            vadUseKrisp: a
        } = (0, o.cj)([x.Z], () => ({
            inputMode: x.Z.getMode(),
            inputDeviceId: x.Z.getInputDeviceId(),
            echoCancellation: x.Z.getEchoCancellation(),
            automaticGainControl: x.Z.getAutomaticGainControl(),
            vadAutoThreshold: x.Z.getModeOptions().autoThreshold,
            vadUseKrisp: x.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: c,
            hasNoiseSuppression: m,
            hasAutomaticGainControl: g
        } = (0, o.cj)(
            [p.Z],
            () => ({
                hasEchoCancellation: p.Z.hasEchoCancellation(t),
                hasNoiseSuppression: p.Z.hasNoiseSuppression(t),
                hasAutomaticGainControl: p.Z.hasAutomaticGainControl(t)
            }),
            [t]
        ),
        f = c || m || g,
        _ = e === T.pM4.VOICE_ACTIVITY && r;
    return (0, s.jsxs)(d.FormSection, {
        className: b.marginBottom20,
        title: S.intl.string(S.t['6I6GUl']),
        children: [
            f &&
                (0, s.jsx)(d.FormText, {
                    className: b.marginBottom20,
                    type: d.FormText.Types.DESCRIPTION,
                    children: S.intl.string(S.t['/Whuzs'])
                }),
            (0, s.jsx)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, s.jsx)(d.FormSwitch, {
                    className: l()(b.marginTop8, b.marginBottom20),
                    value: n,
                    onChange: (e) =>
                        u.Z.setEchoCancellation(e, {
                            page: T.ZY5.USER_SETTINGS,
                            section: T.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    disabled: c,
                    children: S.intl.string(S.t.iWTwu7)
                })
            }),
            (0, s.jsx)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, s.jsx)(O, {})
            }),
            (0, s.jsx)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, s.jsx)(d.FormSwitch, {
                    value: a,
                    onChange: (t) => u.Z.setMode(e, { vadUseKrisp: t }),
                    note: S.intl.string(S.t.LoOB1N),
                    disabled: !_,
                    children: S.intl.string(S.t.BbESsr)
                })
            }),
            (0, s.jsx)(h.F, {
                setting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, s.jsx)(d.FormSwitch, {
                    className: '',
                    value: i,
                    onChange: (e) =>
                        u.Z.setAutomaticGainControl(e, {
                            page: T.ZY5.USER_SETTINGS,
                            section: T.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    note: S.intl.string(S.t['6EjbvL']),
                    disabled: g,
                    children: S.intl.string(S.t.cUMdHx)
                })
            })
        ]
    });
}
