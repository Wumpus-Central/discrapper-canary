var l = n(477900),
    i = n(582128),
    s = n(855986),
    a = n(189213),
    o = n(143129),
    d = n(205513),
    r = n(452027),
    u = n(331322),
    h = n(771871),
    g = n(827343),
    p = n(368484),
    c = n(625841),
    V = n(718197),
    x = n(824744),
    T = n(319437),
    A = n(652215),
    C = n(731854),
    m = n(792996),
    b = n(221851);
class j extends i.PureComponent {
    handleAutoThresholdChange = (e) => {
        let { onThresholdChange: t, threshold: n } = this.props;
        t?.(n, e);
    };
    handleSensitivityChange = (e) => {
        let { onThresholdChange: t, autoThreshold: n } = this.props;
        t?.(-((100 - e) * 1), n);
    };
    handleValueRender(e) {
        return `${(-((100 - e) * 1)).toFixed(0)}dB`;
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, l.jsx)(o.d, {
            label: m.intl.string(m.t.I1Zuq0),
            checked: e,
            onChange: this.handleAutoThresholdChange,
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, l.jsx)(d.G, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: m.intl.string(m.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: b.SX,
            children: (0, l.jsxs)(r.D, {
                label: m.intl.string(m.t["sqUm+k"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
        });
    }
}
function M(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: a,
            outputVolume: o,
            inputMode: T,
            shortcut: b,
            vadThreshold: M,
            vadAutoThreshold: y,
            delay: O,
        } = (0, s.cf)([V.Ay], () => ({
            inputVolume: V.Ay.getInputVolume(),
            outputVolume: V.Ay.getOutputVolume(),
            inputMode: V.Ay.getMode(n),
            shortcut: V.Ay.getModeOptions(n).shortcut,
            vadThreshold: V.Ay.getModeOptions(n).threshold,
            vadAutoThreshold: V.Ay.getModeOptions(n).autoThreshold,
            delay: V.Ay.getModeOptions(n).delay,
        })),
        S = [
            { value: A.TBI.VOICE_ACTIVITY, name: m.intl.string(m.t.cHCEOJ) },
            { value: A.TBI.PUSH_TO_TALK, name: m.intl.string(m.t.Q8gkVL) },
        ];
    return (
        (t =
            T === A.TBI.PUSH_TO_TALK
                ? (0, l.jsxs)(u.B, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(r.D, {
                              label: m.intl.string(m.t.YkDjVM),
                              children: (0, l.jsx)(p.A, {
                                  defaultValue: b,
                                  onChange: (e) => g.default.setMode(T, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(d.G, {
                              label: m.intl.string(m.t.y0ShVt),
                              initialValue: O,
                              onValueChange: (e) => g.default.setMode(T, { delay: e }, n),
                              onValueRender: (e) => (e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}ms`),
                              maxValue: 2e3,
                          }),
                      ],
                  })
                : (0, l.jsx)(j, {
                      speaking: i,
                      inputMode: T,
                      threshold: M,
                      autoThreshold: y,
                      onThresholdChange: (e, t) => g.default.setMode(T, { threshold: e, autoThreshold: t }, n),
                  })),
        (0, l.jsxs)(u.B, {
            gap: 20,
            children: [
                (0, l.jsx)(c.U, {
                    label: m.intl.string(m.t.hHMYbb),
                    deviceType: C.oh.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.G, {
                    label: m.intl.string(m.t.OX2Bnr),
                    initialValue: (0, x.M)(a),
                    asValueChanges: (e) => g.default.setInputVolume((0, x.w)(e)),
                }),
                (0, l.jsx)(c.U, {
                    label: m.intl.string(m.t.dl18zb),
                    deviceType: C.oh.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.G, {
                    label: m.intl.string(m.t.eATD2B),
                    initialValue: (0, x.M)(o),
                    maxValue: 200,
                    asValueChanges: (e) => g.default.setOutputVolume((0, x.w)(e)),
                }),
                (0, l.jsx)(h.z, {
                    label: m.intl.string(m.t["pS+K2L"]),
                    onChange: (e) => g.default.setMode(e, {}, n),
                    options: S,
                    value: T,
                }),
                t,
            ],
        })
    );
}
n.d(
    t,
    {},
    {
        default: function (e) {
            return (
                (0, T.A)(() => {
                    null != A.QCW && e.onClose();
                }),
                (0, l.jsx)(a.a, {
                    title: m.intl.string(m.t.NiTd0e),
                    subtitle: e.subtitle,
                    actions: void 0,
                    transitionState: e.transitionState,
                    onClose: e.onClose,
                    children: (0, l.jsx)(M, { mediaEngineContext: e.mediaEngineContext ?? C.x.DEFAULT }),
                })
            );
        },
    },
);
