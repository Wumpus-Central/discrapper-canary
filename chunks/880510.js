n.d(t, { default: () => R });
var s = n(627968),
    i = n(64700),
    l = n(311907),
    o = n(732955),
    r = n(397927),
    a = n(827343),
    d = n(117178),
    h = n(625841),
    u = n(430452),
    c = n(824744),
    p = n(319437),
    g = n(652215),
    m = n(731854),
    C = n(985018),
    _ = n(473169);
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
        return (0, s.jsx)(r.dOG, {
            label: C.intl.string(C.t.I1Zuq0),
            checked: e,
            onChange: this.handleAutoThresholdChange,
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, s.jsx)(r.Apm, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: C.intl.string(C.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, s.jsx)("div", {
            className: _.SX,
            children: (0, s.jsxs)(r.D0$, {
                label: C.intl.string(C.t["sqUm+k"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
        });
    }
}
function A(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: o,
            outputVolume: p,
            inputMode: _,
            shortcut: A,
            vadThreshold: R,
            vadAutoThreshold: E,
            delay: f,
        } = (0, l.cf)([u.Ay], () => ({
            inputVolume: u.Ay.getInputVolume(),
            outputVolume: u.Ay.getOutputVolume(),
            inputMode: u.Ay.getMode(n),
            shortcut: u.Ay.getModeOptions(n).shortcut,
            vadThreshold: u.Ay.getModeOptions(n).threshold,
            vadAutoThreshold: u.Ay.getModeOptions(n).autoThreshold,
            delay: u.Ay.getModeOptions(n).delay,
        })),
        x = [
            { value: g.TBI.VOICE_ACTIVITY, name: C.intl.string(C.t.cHCEOJ) },
            { value: g.TBI.PUSH_TO_TALK, name: C.intl.string(C.t.Q8gkVL) },
        ];
    return (
        (t =
            _ === g.TBI.PUSH_TO_TALK
                ? (0, s.jsxs)(r.BJc, {
                      gap: 20,
                      children: [
                          (0, s.jsx)(r.D0$, {
                              label: C.intl.string(C.t.YkDjVM),
                              children: (0, s.jsx)(d.A, {
                                  defaultValue: A,
                                  onChange: (e) => a.A.setMode(_, { shortcut: e }, n),
                              }),
                          }),
                          (0, s.jsx)(r.Apm, {
                              label: C.intl.string(C.t.y0ShVt),
                              initialValue: f,
                              onValueChange: (e) => a.A.setMode(_, { delay: e }, n),
                              onValueRender: (e) => (e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}ms`),
                              maxValue: g.IjB,
                          }),
                      ],
                  })
                : (0, s.jsx)(b, {
                      speaking: i,
                      inputMode: _,
                      threshold: R,
                      autoThreshold: E,
                      onThresholdChange: (e, t) => a.A.setMode(_, { threshold: e, autoThreshold: t }, n),
                  })),
        (0, s.jsxs)(r.BJc, {
            gap: 20,
            children: [
                (0, s.jsx)(h.U, {
                    label: C.intl.string(C.t.hHMYbb),
                    deviceType: m.oh.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, s.jsx)(r.Apm, {
                    label: C.intl.string(C.t.OX2Bnr),
                    initialValue: (0, c.M)(o),
                    asValueChanges: (e) => a.A.setInputVolume((0, c.w)(e)),
                }),
                (0, s.jsx)(h.U, {
                    label: C.intl.string(C.t.dl18zb),
                    deviceType: m.oh.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, s.jsx)(r.Apm, {
                    label: C.intl.string(C.t.eATD2B),
                    initialValue: (0, c.M)(p),
                    maxValue: 200,
                    asValueChanges: (e) => a.A.setOutputVolume((0, c.w)(e)),
                }),
                (0, s.jsx)(r.z6M, {
                    label: C.intl.string(C.t["pS+K2L"]),
                    onChange: (e) => a.A.setMode(e, {}, n),
                    options: x,
                    value: _,
                }),
                t,
            ],
        })
    );
}
function R(e) {
    return (
        (0, p.A)(() => {
            null != g.QCW && e.onClose();
        }),
        (0, s.jsx)(o.aFV, {
            title: C.intl.string(C.t.NiTd0e),
            subtitle: e.subtitle,
            actions: void 0,
            transitionState: e.transitionState,
            onClose: e.onClose,
            children: (0, s.jsx)(A, { mediaEngineContext: e.mediaEngineContext ?? m.x.DEFAULT }),
        })
    );
}
