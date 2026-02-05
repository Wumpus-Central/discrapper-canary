n.d(t, { default: () => m });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(732955),
    o = n(397927),
    d = n(827343),
    r = n(117178),
    h = n(625841),
    u = n(430452),
    g = n(824744),
    p = n(319437),
    A = n(652215),
    c = n(731854),
    V = n(985018),
    x = n(473169);
class T extends i.PureComponent {
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
        return (0, l.jsx)(o.dOG, {
            label: V.intl.string(V.t.I1Zuq0),
            checked: e,
            onChange: this.handleAutoThresholdChange,
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, l.jsx)(o.Apm, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: V.intl.string(V.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: x.SX,
            children: (0, l.jsxs)(o.D0$, {
                label: V.intl.string(V.t["sqUm+k"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
        });
    }
}
function C(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: a,
            outputVolume: p,
            inputMode: x,
            shortcut: C,
            vadThreshold: m,
            vadAutoThreshold: j,
            delay: b,
        } = (0, s.cf)([u.A], () => ({
            inputVolume: u.A.getInputVolume(),
            outputVolume: u.A.getOutputVolume(),
            inputMode: u.A.getMode(n),
            shortcut: u.A.getModeOptions(n).shortcut,
            vadThreshold: u.A.getModeOptions(n).threshold,
            vadAutoThreshold: u.A.getModeOptions(n).autoThreshold,
            delay: u.A.getModeOptions(n).delay,
        })),
        M = [
            { value: A.TBI.VOICE_ACTIVITY, name: V.intl.string(V.t.cHCEOJ) },
            { value: A.TBI.PUSH_TO_TALK, name: V.intl.string(V.t.Q8gkVL) },
        ];
    return (
        (t =
            x === A.TBI.PUSH_TO_TALK
                ? (0, l.jsxs)(o.BJc, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(o.D0$, {
                              label: V.intl.string(V.t.YkDjVM),
                              children: (0, l.jsx)(r.A, {
                                  defaultValue: C,
                                  onChange: (e) => d.A.setMode(x, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(o.Apm, {
                              label: V.intl.string(V.t.y0ShVt),
                              initialValue: b,
                              onValueChange: (e) => d.A.setMode(x, { delay: e }, n),
                              onValueRender: (e) => (e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}ms`),
                              maxValue: A.IjB,
                          }),
                      ],
                  })
                : (0, l.jsx)(T, {
                      speaking: i,
                      inputMode: x,
                      threshold: m,
                      autoThreshold: j,
                      onThresholdChange: (e, t) => d.A.setMode(x, { threshold: e, autoThreshold: t }, n),
                  })),
        (0, l.jsxs)(o.BJc, {
            gap: 20,
            children: [
                (0, l.jsx)(h.U, {
                    label: V.intl.string(V.t.hHMYbb),
                    deviceType: c.oh.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.Apm, {
                    label: V.intl.string(V.t.OX2Bnr),
                    initialValue: (0, g.M)(a),
                    asValueChanges: (e) => d.A.setInputVolume((0, g.w)(e)),
                }),
                (0, l.jsx)(h.U, {
                    label: V.intl.string(V.t.dl18zb),
                    deviceType: c.oh.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.Apm, {
                    label: V.intl.string(V.t.eATD2B),
                    initialValue: (0, g.M)(p),
                    maxValue: 200,
                    asValueChanges: (e) => d.A.setOutputVolume((0, g.w)(e)),
                }),
                (0, l.jsx)(o.z6M, {
                    label: V.intl.string(V.t["pS+K2L"]),
                    onChange: (e) => d.A.setMode(e, {}, n),
                    options: M,
                    value: x,
                }),
                t,
            ],
        })
    );
}
function m(e) {
    return (
        (0, p.A)(() => {
            null != A.QCW && e.onClose();
        }),
        (0, l.jsx)(a.aFV, {
            title: V.intl.string(V.t.NiTd0e),
            subtitle: e.subtitle,
            actions: void 0,
            transitionState: e.transitionState,
            onClose: e.onClose,
            children: (0, l.jsx)(C, { mediaEngineContext: e.mediaEngineContext ?? c.x.DEFAULT }),
        })
    );
}
