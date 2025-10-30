n.d(t, { default: () => Z }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(442837),
    a = n(481060),
    o = n(846027),
    r = n(825209),
    d = n(600164),
    h = n(670863),
    u = n(131951),
    g = n(36703),
    c = n(382577),
    p = n(981631),
    x = n(65154),
    m = n(388032),
    V = n(931810),
    j = n(10198);
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
class T extends l.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(d.Z, {
            className: j.marginBottom4,
            children: (0, i.jsx)(a.rsf, {
                label: m.intl.string(m.t.I1Zuq0),
                checked: e,
                onChange: this.handleAutoThresholdChange,
            }),
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, i.jsx)(a.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: m.intl.string(m.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, i.jsx)("div", {
            className: j.marginBottom20,
            children: (0, i.jsxs)(a.gNt, {
                label: m.intl.string(m.t["sqUm+k"]),
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
        { mediaEngineContext: n, speaking: l = !1 } = e,
        {
            inputVolume: d,
            outputVolume: c,
            inputMode: V,
            shortcut: j,
            vadThreshold: C,
            vadAutoThreshold: b,
            delay: Z,
        } = (0, s.cj)([u.Z], () => ({
            inputVolume: u.Z.getInputVolume(),
            outputVolume: u.Z.getOutputVolume(),
            inputMode: u.Z.getMode(n),
            shortcut: u.Z.getModeOptions(n).shortcut,
            vadThreshold: u.Z.getModeOptions(n).threshold,
            vadAutoThreshold: u.Z.getModeOptions(n).autoThreshold,
            delay: u.Z.getModeOptions(n).delay,
        })),
        M = [
            {
                value: p.pM4.VOICE_ACTIVITY,
                name: m.intl.string(m.t.cHCEOJ),
            },
            {
                value: p.pM4.PUSH_TO_TALK,
                name: m.intl.string(m.t.Q8gkVL),
            },
        ];
    return (
        (t =
            V === p.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(a.Kqy, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(a.gNt, {
                              label: m.intl.string(m.t.YkDjVM),
                              children: (0, i.jsx)(r.Z, {
                                  defaultValue: j,
                                  onChange: (e) => o.Z.setMode(V, { shortcut: e }, n),
                              }),
                          }),
                          (0, i.jsx)(a.iRW, {
                              label: m.intl.string(m.t.y0ShVt),
                              initialValue: Z,
                              onValueChange: (e) => o.Z.setMode(V, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: p.qhL,
                          }),
                      ],
                  })
                : (0, i.jsx)(T, {
                      speaking: l,
                      inputMode: V,
                      threshold: C,
                      autoThreshold: b,
                      onThresholdChange: (e, t) =>
                          o.Z.setMode(
                              V,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, i.jsxs)(a.Kqy, {
            gap: 20,
            children: [
                (0, i.jsx)(h.j, {
                    label: m.intl.string(m.t.hHMYbb),
                    deviceType: x.h7.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, i.jsx)(a.iRW, {
                    label: m.intl.string(m.t.OX2Bnr),
                    initialValue: (0, g.P)(d),
                    asValueChanges: (e) => o.Z.setInputVolume((0, g.A)(e)),
                }),
                (0, i.jsx)(h.j, {
                    label: m.intl.string(m.t.dl18zb),
                    deviceType: x.h7.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, i.jsx)(a.iRW, {
                    label: m.intl.string(m.t.eATD2B),
                    initialValue: (0, g.P)(c),
                    maxValue: 200,
                    asValueChanges: (e) => o.Z.setOutputVolume((0, g.A)(e)),
                }),
                (0, i.jsx)(a.FXm, {
                    label: m.intl.string(m.t["pS+K2L"]),
                    onChange: (e) => o.Z.setMode(e, {}, n),
                    options: M,
                    value: V,
                }),
                t,
            ],
        })
    );
}
function Z(e) {
    var t;
    return (
        (0, c.Z)(() => {
            null != p.e3s && e.onClose();
        }),
        (0, i.jsxs)(a.Y0X, {
            transitionState: e.transitionState,
            "aria-label": m.intl.string(m.t.NiTd0e),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, i.jsxs)(a.xBx, {
                    children: [
                        (0, i.jsxs)(d.Z.Child, {
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: j.marginReset,
                                    children: m.intl.string(m.t.NiTd0e),
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    className: V.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, i.jsx)(d.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.hzk, {
                    children: (0, i.jsx)(b, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : x.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
