var l = n(477900),
    i = n(582128),
    s = n(855986),
    a = n(189213),
    o = n(143129),
    d = n(893007),
    r = n(452027),
    u = n(331322),
    h = n(771871),
    g = n(827343),
    p = n(368484),
    c = n(625841),
    A = n(988468),
    V = n(824744),
    x = n(319437),
    T = n(652215),
    C = n(731854),
    m = n(792996),
    f = n(221851);
function b(e) {
    return (t) => `${((100 * t) / e).toFixed(0)}%`;
}
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
            return (0, l.jsx)(d.A, {
                defaultValue: t + 100,
                formatValue: this.handleValueRender,
                onChangeEnd: this.handleSensitivityChange,
                label: m.intl.string(m.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: f.SX,
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
            inputMode: x,
            shortcut: f,
            vadThreshold: M,
            vadAutoThreshold: y,
            delay: O,
        } = (0, s.cf)([A.Ay], () => ({
            inputVolume: A.Ay.getInputVolume(),
            outputVolume: A.Ay.getOutputVolume(),
            inputMode: A.Ay.getMode(n),
            shortcut: A.Ay.getModeOptions(n).shortcut,
            vadThreshold: A.Ay.getModeOptions(n).threshold,
            vadAutoThreshold: A.Ay.getModeOptions(n).autoThreshold,
            delay: A.Ay.getModeOptions(n).delay,
        })),
        S = [
            { value: T.TBI.VOICE_ACTIVITY, name: m.intl.string(m.t.cHCEOJ) },
            { value: T.TBI.PUSH_TO_TALK, name: m.intl.string(m.t.Q8gkVL) },
        ];
    return (
        (t =
            x === T.TBI.PUSH_TO_TALK
                ? (0, l.jsxs)(u.B, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(r.D, {
                              label: m.intl.string(m.t.YkDjVM),
                              children: (0, l.jsx)(p.A, {
                                  defaultValue: f,
                                  onChange: (e) => g.default.setMode(x, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(d.A, {
                              label: m.intl.string(m.t.y0ShVt),
                              defaultValue: O,
                              onChangeEnd: (e) => g.default.setMode(x, { delay: e }, n),
                              formatValue: (e) => (e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}ms`),
                              maxValue: 2e3,
                          }),
                      ],
                  })
                : (0, l.jsx)(j, {
                      speaking: i,
                      inputMode: x,
                      threshold: M,
                      autoThreshold: y,
                      onThresholdChange: (e, t) => g.default.setMode(x, { threshold: e, autoThreshold: t }, n),
                  })),
        (0, l.jsxs)(u.B, {
            gap: 20,
            children: [
                (0, l.jsx)(c.U, {
                    label: m.intl.string(m.t.hHMYbb),
                    deviceType: C.oh.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.A, {
                    label: m.intl.string(m.t.OX2Bnr),
                    defaultValue: (0, V.M)(a),
                    formatValue: b(100),
                    onChange: (e) => g.default.setInputVolume((0, V.w)(e)),
                }),
                (0, l.jsx)(c.U, {
                    label: m.intl.string(m.t.dl18zb),
                    deviceType: C.oh.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.A, {
                    label: m.intl.string(m.t.eATD2B),
                    defaultValue: (0, V.M)(o),
                    maxValue: 200,
                    formatValue: b(200),
                    onChange: (e) => g.default.setOutputVolume((0, V.w)(e)),
                }),
                (0, l.jsx)(h.z, {
                    label: m.intl.string(m.t["pS+K2L"]),
                    onChange: (e) => g.default.setMode(e, {}, n),
                    options: S,
                    value: x,
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
                (0, x.A)(() => {
                    null != T.QCW && e.onClose();
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
