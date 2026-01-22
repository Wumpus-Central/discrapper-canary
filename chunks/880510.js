n.d(t, { default: () => b }), n(896048);
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(732955),
    o = n(397927),
    r = n(827343),
    u = n(117178),
    d = n(625841),
    h = n(430452),
    g = n(824744),
    c = n(319437),
    p = n(652215),
    A = n(731854),
    V = n(985018),
    x = n(473169);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class m extends i.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
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
    constructor(...e) {
        super(...e),
            T(this, "handleAutoThresholdChange", (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            T(this, "handleSensitivityChange", (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function C(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: a,
            outputVolume: c,
            inputMode: x,
            shortcut: T,
            vadThreshold: C,
            vadAutoThreshold: b,
            delay: j,
        } = (0, s.cf)([h.A], () => ({
            inputVolume: h.A.getInputVolume(),
            outputVolume: h.A.getOutputVolume(),
            inputMode: h.A.getMode(n),
            shortcut: h.A.getModeOptions(n).shortcut,
            vadThreshold: h.A.getModeOptions(n).threshold,
            vadAutoThreshold: h.A.getModeOptions(n).autoThreshold,
            delay: h.A.getModeOptions(n).delay,
        })),
        M = [
            {
                value: p.TBI.VOICE_ACTIVITY,
                name: V.intl.string(V.t.cHCEOJ),
            },
            {
                value: p.TBI.PUSH_TO_TALK,
                name: V.intl.string(V.t.Q8gkVL),
            },
        ];
    return (
        (t =
            x === p.TBI.PUSH_TO_TALK
                ? (0, l.jsxs)(o.BJc, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(o.D0$, {
                              label: V.intl.string(V.t.YkDjVM),
                              children: (0, l.jsx)(u.A, {
                                  defaultValue: T,
                                  onChange: (e) => r.A.setMode(x, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(o.Apm, {
                              label: V.intl.string(V.t.y0ShVt),
                              initialValue: j,
                              onValueChange: (e) => r.A.setMode(x, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: p.IjB,
                          }),
                      ],
                  })
                : (0, l.jsx)(m, {
                      speaking: i,
                      inputMode: x,
                      threshold: C,
                      autoThreshold: b,
                      onThresholdChange: (e, t) =>
                          r.A.setMode(
                              x,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, l.jsxs)(o.BJc, {
            gap: 20,
            children: [
                (0, l.jsx)(d.U, {
                    label: V.intl.string(V.t.hHMYbb),
                    deviceType: A.oh.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.Apm, {
                    label: V.intl.string(V.t.OX2Bnr),
                    initialValue: (0, g.M)(a),
                    asValueChanges: (e) => r.A.setInputVolume((0, g.w)(e)),
                }),
                (0, l.jsx)(d.U, {
                    label: V.intl.string(V.t.dl18zb),
                    deviceType: A.oh.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.Apm, {
                    label: V.intl.string(V.t.eATD2B),
                    initialValue: (0, g.M)(c),
                    maxValue: 200,
                    asValueChanges: (e) => r.A.setOutputVolume((0, g.w)(e)),
                }),
                (0, l.jsx)(o.z6M, {
                    label: V.intl.string(V.t["pS+K2L"]),
                    onChange: (e) => r.A.setMode(e, {}, n),
                    options: M,
                    value: x,
                }),
                t,
            ],
        })
    );
}
function b(e) {
    var t;
    return (
        (0, c.A)(() => {
            null != p.QCW && e.onClose();
        }),
        (0, l.jsx)(a.aFV, {
            title: V.intl.string(V.t.NiTd0e),
            subtitle: e.subtitle,
            actions: void 0,
            transitionState: e.transitionState,
            onClose: e.onClose,
            children: (0, l.jsx)(C, { mediaEngineContext: null != (t = e.mediaEngineContext) ? t : A.x.DEFAULT }),
        })
    );
}
