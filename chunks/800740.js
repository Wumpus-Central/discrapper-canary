n.d(t, { default: () => M }), n(388685);
var i = n(951288),
    l = n(647438),
    s = n(442837),
    a = n(538534),
    o = n(481060),
    r = n(846027),
    d = n(825209),
    h = n(600164),
    u = n(670863),
    g = n(131951),
    c = n(36703),
    p = n(382577),
    x = n(981631),
    m = n(65154),
    V = n(388032),
    j = n(607180),
    C = n(197571);
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
class b extends l.PureComponent {
    handleValueRender(e) {
        return "".concat((-((100 - e) * 1)).toFixed(0), "dB");
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(h.Z, {
            className: C.marginBottom4,
            children: (0, i.jsx)(o.rsf, {
                label: V.intl.string(V.t.I1Zuq0),
                checked: e,
                onChange: this.handleAutoThresholdChange,
            }),
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, i.jsx)(o.iRW, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                label: V.intl.string(V.t["sqUm+k"]),
                hideLabel: !0,
            });
    }
    render() {
        return (0, i.jsx)("div", {
            className: C.marginBottom20,
            children: (0, i.jsxs)(o.gNt, {
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
function Z(e) {
    let t,
        { mediaEngineContext: n, speaking: l = !1 } = e,
        {
            inputVolume: h,
            outputVolume: p,
            inputMode: j,
            shortcut: C,
            vadThreshold: T,
            vadAutoThreshold: Z,
            delay: M,
        } = (0, s.cj)([g.Z], () => ({
            inputVolume: g.Z.getInputVolume(),
            outputVolume: g.Z.getOutputVolume(),
            inputMode: g.Z.getMode(n),
            shortcut: g.Z.getModeOptions(n).shortcut,
            vadThreshold: g.Z.getModeOptions(n).threshold,
            vadAutoThreshold: g.Z.getModeOptions(n).autoThreshold,
            delay: g.Z.getModeOptions(n).delay,
        })),
        A = [
            {
                value: x.pM4.VOICE_ACTIVITY,
                name: V.intl.string(V.t.cHCEOJ),
            },
            {
                value: x.pM4.PUSH_TO_TALK,
                name: V.intl.string(V.t.Q8gkVL),
            },
        ];
    return (
        (t =
            j === x.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(o.Kqy, {
                      gap: 20,
                      children: [
                          (0, i.jsx)(o.gNt, {
                              label: V.intl.string(V.t.YkDjVM),
                              children: (0, i.jsx)(d.Z, {
                                  defaultValue: C,
                                  onChange: (e) => r.Z.setMode(j, { shortcut: e }, n),
                              }),
                          }),
                          (0, i.jsx)(o.iRW, {
                              label: V.intl.string(V.t.y0ShVt),
                              initialValue: M,
                              onValueChange: (e) => r.Z.setMode(j, { delay: e }, n),
                              onValueRender: (e) =>
                                  e >= 1000
                                      ? ((e /= 1000), "".concat(e.toFixed(2), "s"))
                                      : "".concat(e.toFixed(0), "ms"),
                              maxValue: x.qhL,
                          }),
                      ],
                  })
                : (0, i.jsx)(b, {
                      speaking: l,
                      inputMode: j,
                      threshold: T,
                      autoThreshold: Z,
                      onThresholdChange: (e, t) =>
                          r.Z.setMode(
                              j,
                              {
                                  threshold: e,
                                  autoThreshold: t,
                              },
                              n,
                          ),
                  })),
        (0, i.jsxs)(o.Kqy, {
            gap: 20,
            children: [
                (0, i.jsx)(u.j, {
                    label: V.intl.string(V.t.hHMYbb),
                    deviceType: m.h7.AUDIO_INPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, i.jsx)(o.iRW, {
                    label: V.intl.string(V.t.OX2Bnr),
                    initialValue: (0, c.P)(h),
                    asValueChanges: (e) => r.Z.setInputVolume((0, c.A)(e)),
                }),
                (0, i.jsx)(u.j, {
                    label: V.intl.string(V.t.dl18zb),
                    deviceType: m.h7.AUDIO_OUTPUT,
                    location: "VoiceSettingsModal",
                }),
                (0, i.jsx)(o.iRW, {
                    label: V.intl.string(V.t.eATD2B),
                    initialValue: (0, c.P)(p),
                    maxValue: 200,
                    asValueChanges: (e) => r.Z.setOutputVolume((0, c.A)(e)),
                }),
                (0, i.jsx)(a.E, {
                    label: V.intl.string(V.t["pS+K2L"]),
                    onChange: (e) => r.Z.setMode(e, {}, n),
                    options: A,
                    value: j,
                }),
                t,
            ],
        })
    );
}
function M(e) {
    var t;
    return (
        (0, p.Z)(() => {
            null != x.e3s && e.onClose();
        }),
        (0, i.jsxs)(o.Y0X, {
            transitionState: e.transitionState,
            "aria-label": V.intl.string(V.t.NiTd0e),
            parentComponent: "VoiceSettingsModal",
            children: [
                (0, i.jsxs)(o.xBx, {
                    children: [
                        (0, i.jsxs)(h.Z.Child, {
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: C.marginReset,
                                    children: V.intl.string(V.t.NiTd0e),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    className: j.title,
                                    children: e.title,
                                }),
                            ],
                        }),
                        (0, i.jsx)(h.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(o.olH, { onClick: e.onClose }),
                        }),
                    ],
                }),
                (0, i.jsx)(o.hzk, {
                    children: (0, i.jsx)(Z, {
                        mediaEngineContext: null != (t = e.mediaEngineContext) ? t : m.Yn.DEFAULT,
                    }),
                }),
            ],
        })
    );
}
