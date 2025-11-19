n.d(t, { default: () => j }), n(388685);
var l = n(54381),
    i = n(473749),
    s = n(442837),
    a = n(159691),
    o = n(481060),
    r = n(846027),
    u = n(825209),
    d = n(670863),
    h = n(131951),
    g = n(36703),
    c = n(382577),
    p = n(981631),
    V = n(65154),
    x = n(388032),
    m = n(197571);
function C(e, t, n) {
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
class T extends i.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, l.jsx)(o.rsf, {
            label: x.intl.string(x.t.I1Zuq0),
            checked: e,
            onChange: this.handleAutoThresholdChange,
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, l.jsx)(o.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: x.intl.string(x.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, l.jsx)("div", {
            className: m.marginBottom20,
            children: (0, l.jsxs)(o.gNt, {
                label: x.intl.string(x.t["sqUm+k"]),
                role: "group",
                children: [this.renderAutomaticVADToggle(), this.renderSlider()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            C(this, "handleAutoThresholdChange", (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            C(this, "handleSensitivityChange", (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
function b(e) {
    let t,
        { mediaEngineContext: n, speaking: i = !1 } = e,
        {
            inputVolume: a,
            outputVolume: c,
            inputMode: m,
            shortcut: C,
            vadThreshold: b,
            vadAutoThreshold: j,
            delay: M,
        } = (0, s.cj)([h.Z], () => ({
            inputVolume: h.Z.getInputVolume(),
            outputVolume: h.Z.getOutputVolume(),
            inputMode: h.Z.getMode(n),
            shortcut: h.Z.getModeOptions(n).shortcut,
            vadThreshold: h.Z.getModeOptions(n).threshold,
            vadAutoThreshold: h.Z.getModeOptions(n).autoThreshold,
            delay: h.Z.getModeOptions(n).delay,
        })),
        Z = [
            {
                value: p.pM4.VOICE_ACTIVITY,
                name: x.intl.string(x.t.cHCEOJ),
            },
            {
                value: p.pM4.PUSH_TO_TALK,
                name: x.intl.string(x.t.Q8gkVL),
            },
        ];
    return (
        (t =
            m === p.pM4.PUSH_TO_TALK
                ? (0, l.jsxs)(o.Kqy, {
                      gap: 20,
                      children: [
                          (0, l.jsx)(o.gNt, {
                              label: x.intl.string(x.t.YkDjVM),
                              children: (0, l.jsx)(u.Z, {
                                  defaultValue: C,
                                  onChange: (e) => r.Z.setMode(m, { shortcut: e }, n),
                              }),
                          }),
                          (0, l.jsx)(o.iRW, {
                              label: x.intl.string(x.t.y0ShVt),
                              initialValue: M,
                              onValueChange: (e) => r.Z.setMode(m, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: p.qhL,
                          }),
                      ],
                  })
                : (0, l.jsx)(T, {
                      speaking: i,
                      inputMode: m,
                      threshold: b,
                      autoThreshold: j,
                      onThresholdChange: (e, t) =>
                          r.Z.setMode(
                              m,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, l.jsxs)(o.Kqy, {
            gap: 20,
            children: [
                (0, l.jsx)(d.j, {
                    label: x.intl.string(x.t.hHMYbb),
                    deviceType: V.h7.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.iRW, {
                    label: x.intl.string(x.t.OX2Bnr),
                    initialValue: (0, g.P)(a),
                    asValueChanges: (e) => r.Z.setInputVolume((0, g.A)(e)),
                }),
                (0, l.jsx)(d.j, {
                    label: x.intl.string(x.t.dl18zb),
                    deviceType: V.h7.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, l.jsx)(o.iRW, {
                    label: x.intl.string(x.t.eATD2B),
                    initialValue: (0, g.P)(c),
                    maxValue: 200,
                    asValueChanges: (e) => r.Z.setOutputVolume((0, g.A)(e)),
                }),
                (0, l.jsx)(o.FXm, {
                    label: x.intl.string(x.t["pS+K2L"]),
                    onChange: (e) => r.Z.setMode(e, {}, n),
                    options: Z,
                    value: m,
                }),
                t,
            ],
        })
    );
}
function j(e) {
    var t;
    return (
        (0, c.Z)(() => {
            null != p.e3s && e.onClose();
        }),
        (0, l.jsx)(a.u_l, {
            title: x.intl.string(x.t.NiTd0e),
            subtitle: e.subtitle,
            actions: void 0,
            transitionState: e.transitionState,
            onClose: e.onClose,
            children: (0, l.jsx)(b, { mediaEngineContext: null != (t = e.mediaEngineContext) ? t : V.Yn.DEFAULT }),
        })
    );
}
