n.d(t, { default: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    o = n(189213),
    a = n(243721),
    r = n(106236),
    d = n(452027),
    h = n(331322),
    u = n(954197),
    c = n(827343),
    p = n(117178),
    g = n(848222),
    m = n(430452),
    _ = n(824744),
    v = n(319437),
    C = n(652215),
    b = n(731854),
    f = n(985018),
    A = n(818050);
class x extends s.PureComponent {
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
        return (0, i.jsx)(a.d, {
            label: f.intl.string(f.t.I1Zuq0),
            checked: e,
            onChange: this.handleAutoThresholdChange,
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, i.jsx)(r.A, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: f.intl.string(f.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, i.jsx)("div", {
            className: A.SX,
            children: (0, i.jsxs)(d.D, {
                label: f.intl.string(f.t["sqUm+k"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
        });
    }
}
function D(e) {
    let t,
        { mediaEngineContext: n, speaking: s = !1 } = e,
        {
            inputVolume: o,
            outputVolume: a,
            inputMode: v,
            shortcut: A,
            vadThreshold: D,
            vadAutoThreshold: E,
            delay: R,
        } = (0, l.cf)([m.Ay], () => ({
            inputVolume: m.Ay.getInputVolume(),
            outputVolume: m.Ay.getOutputVolume(),
            inputMode: m.Ay.getMode(n),
            shortcut: m.Ay.getModeOptions(n).shortcut,
            vadThreshold: m.Ay.getModeOptions(n).threshold,
            vadAutoThreshold: m.Ay.getModeOptions(n).autoThreshold,
            delay: m.Ay.getModeOptions(n).delay,
        })),
        I = [
            { value: C.TBI.VOICE_ACTIVITY, name: f.intl.string(f.t.cHCEOJ) },
            { value: C.TBI.PUSH_TO_TALK, name: f.intl.string(f.t.Q8gkVL) },
        ];
    return (
        (t =
            v === C.TBI.PUSH_TO_TALK
                ? (0, i.jsxs)(h.B, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(d.D, {
                              label: f.intl.string(f.t.YkDjVM),
                              children: (0, i.jsx)(p.A, {
                                  defaultValue: A,
                                  onChange: (e) => c.A.setMode(v, { shortcut: e }, n),
                              }),
                          }),
                          (0, i.jsx)(r.A, {
                              label: f.intl.string(f.t.y0ShVt),
                              initialValue: R,
                              onValueChange: (e) => c.A.setMode(v, { delay: e }, n),
                              onValueRender: (e) => (e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}ms`),
                              maxValue: C.IjB,
                          }),
                      ],
                  })
                : (0, i.jsx)(x, {
                      speaking: s,
                      inputMode: v,
                      threshold: D,
                      autoThreshold: E,
                      onThresholdChange: (e, t) => c.A.setMode(v, { threshold: e, autoThreshold: t }, n),
                  })),
        (0, i.jsxs)(h.B, {
            gap: 20,
            children: [
                (0, i.jsx)(g.U, {
                    label: f.intl.string(f.t.hHMYbb),
                    deviceType: b.oh.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, i.jsx)(r.A, {
                    label: f.intl.string(f.t.OX2Bnr),
                    initialValue: (0, _.M)(o),
                    asValueChanges: (e) => c.A.setInputVolume((0, _.w)(e)),
                }),
                (0, i.jsx)(g.U, {
                    label: f.intl.string(f.t.dl18zb),
                    deviceType: b.oh.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, i.jsx)(r.A, {
                    label: f.intl.string(f.t.eATD2B),
                    initialValue: (0, _.M)(a),
                    maxValue: 200,
                    asValueChanges: (e) => c.A.setOutputVolume((0, _.w)(e)),
                }),
                (0, i.jsx)(u.z, {
                    label: f.intl.string(f.t["pS+K2L"]),
                    onChange: (e) => c.A.setMode(e, {}, n),
                    options: I,
                    value: v,
                }),
                t,
            ],
        })
    );
}
function E(e) {
    return (
        (0, v.A)(() => {
            null != C.QCW && e.onClose();
        }),
        (0, i.jsx)(o.Modal, {
            title: f.intl.string(f.t.NiTd0e),
            subtitle: e.subtitle,
            actions: void 0,
            transitionState: e.transitionState,
            onClose: e.onClose,
            children: (0, i.jsx)(D, { mediaEngineContext: e.mediaEngineContext ?? b.x.DEFAULT }),
        })
    );
}
