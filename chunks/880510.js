n.d(t, { default: () => y });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(189213),
    o = n(243721),
    d = n(106236),
    r = n(452027),
    h = n(331322),
    u = n(773812),
    g = n(827343),
    p = n(635242),
    A = n(625841),
    c = n(235058),
    V = n(824744),
    x = n(319437),
    T = n(652215),
    C = n(731854),
    j = n(375708),
    m = n(818050);
class b extends i.PureComponent {
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
            label: j.intl.string(j.t.I1Zuq0),
            checked: e,
            onChange: this.handleAutoThresholdChange,
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, l.jsx)(d.A, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: j.intl.string(j.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: m.SX,
            children: (0, l.jsxs)(r.D, {
                label: j.intl.string(j.t["sqUm+k"]),
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
            shortcut: m,
            vadThreshold: M,
            vadAutoThreshold: y,
            delay: O,
        } = (0, s.cf)([c.Ay], () => ({
            inputVolume: c.Ay.getInputVolume(),
            outputVolume: c.Ay.getOutputVolume(),
            inputMode: c.Ay.getMode(n),
            shortcut: c.Ay.getModeOptions(n).shortcut,
            vadThreshold: c.Ay.getModeOptions(n).threshold,
            vadAutoThreshold: c.Ay.getModeOptions(n).autoThreshold,
            delay: c.Ay.getModeOptions(n).delay,
        })),
        I = [
            { value: T.TBI.VOICE_ACTIVITY, name: j.intl.string(j.t.cHCEOJ) },
            { value: T.TBI.PUSH_TO_TALK, name: j.intl.string(j.t.Q8gkVL) },
        ];
    return (
        (t =
            x === T.TBI.PUSH_TO_TALK
                ? (0, l.jsxs)(h.B, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(r.D, {
                              label: j.intl.string(j.t.YkDjVM),
                              children: (0, l.jsx)(p.A, {
                                  defaultValue: m,
                                  onChange: (e) => g.A.setMode(x, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(d.A, {
                              label: j.intl.string(j.t.y0ShVt),
                              initialValue: O,
                              onValueChange: (e) => g.A.setMode(x, { delay: e }, n),
                              onValueRender: (e) => (e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}ms`),
                              maxValue: T.IjB,
                          }),
                      ],
                  })
                : (0, l.jsx)(b, {
                      speaking: i,
                      inputMode: x,
                      threshold: M,
                      autoThreshold: y,
                      onThresholdChange: (e, t) => g.A.setMode(x, { threshold: e, autoThreshold: t }, n),
                  })),
        (0, l.jsxs)(h.B, {
            gap: 20,
            children: [
                (0, l.jsx)(A.U, {
                    label: j.intl.string(j.t.hHMYbb),
                    deviceType: C.oh.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.A, {
                    label: j.intl.string(j.t.OX2Bnr),
                    initialValue: (0, V.M)(a),
                    asValueChanges: (e) => g.A.setInputVolume((0, V.w)(e)),
                }),
                (0, l.jsx)(A.U, {
                    label: j.intl.string(j.t.dl18zb),
                    deviceType: C.oh.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(d.A, {
                    label: j.intl.string(j.t.eATD2B),
                    initialValue: (0, V.M)(o),
                    maxValue: 200,
                    asValueChanges: (e) => g.A.setOutputVolume((0, V.w)(e)),
                }),
                (0, l.jsx)(u.z, {
                    label: j.intl.string(j.t["pS+K2L"]),
                    onChange: (e) => g.A.setMode(e, {}, n),
                    options: I,
                    value: x,
                }),
                t,
            ],
        })
    );
}
function y(e) {
    return (
        (0, x.A)(() => {
            null != T.QCW && e.onClose();
        }),
        (0, l.jsx)(a.Modal, {
            title: j.intl.string(j.t.NiTd0e),
            subtitle: e.subtitle,
            actions: void 0,
            transitionState: e.transitionState,
            onClose: e.onClose,
            children: (0, l.jsx)(M, { mediaEngineContext: e.mediaEngineContext ?? C.x.DEFAULT }),
        })
    );
}
