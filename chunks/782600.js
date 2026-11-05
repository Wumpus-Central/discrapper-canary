n.d(t, { V: () => N, A: () => w });
var i,
    r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(435558),
    u = n.n(o),
    d = n(855986),
    c = n(205693),
    h = n(451988),
    f = n(834730),
    g = n(452027),
    A = n(821609),
    p = n(866665),
    m = n(827343),
    I = n(765671),
    E = n(646514),
    S = n(953727);
function C(e) {
    let { width: t = 80, height: n = 28, color: i = "currentColor", foreground: s, ...a } = e,
        o = `pill-frame-pattern-${n}`,
        u = l.useMemo(() => {
            let e;
            return (
                (e = n - 8),
                `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [n]);
    return (0, r.jsxs)("svg", {
        ...(0, S.A)(a),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        children: [
            (0, r.jsx)("pattern", {
                id: o,
                width: 8 / t,
                height: "1",
                children: (0, r.jsx)("path", { d: u, fillRule: "evenodd", fill: i, className: s }),
            }),
            (0, r.jsx)("rect", { fill: `url(#${o})`, height: "100%", width: "100%" }),
        ],
    });
}
var _ = n(838949),
    N = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let T = { BLACK: _.Ql, GRAY: _.wm },
    y = { sm: 20, md: 28 };
function v(e) {
    return 8 * Math.round(e / 8);
}
function M(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: s = E.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: o = E.A.unsafe_rawColors.GREEN_360.css,
            className: u,
            notchClassName: d,
            children: c,
        } = e,
        h = y[i],
        { ref: f, width: g } = (0, I.Ay)(),
        A = l.useMemo(() => (null != g ? v(g) : 0), [g]),
        p = l.useMemo(() => {
            let e = Math.abs(v((A * (100 - Math.max(0, Math.min(100, n)))) / 100) - A);
            return { transform: `translateX(${e}px)` };
        }, [n, A]),
        m = l.useMemo(
            () => ({ width: `${A}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${s}, ${o})` }),
            [o, s, n, A],
        );
    return (0, r.jsxs)("div", {
        className: _.iE,
        ref: f,
        style: { height: h },
        children: [
            (0, r.jsxs)("div", {
                className: a()(_.kL, u),
                style: m,
                children: [
                    (0, r.jsx)("div", { className: _.qB, style: p }),
                    0 !== A && (0, r.jsx)(C, { width: A, height: h, className: a()(_.DR, T[t], d) }),
                ],
            }),
            c,
        ],
    });
}
var D = n(754712),
    R = n(495867),
    O = n(129230),
    x = n(652215),
    P = n(792996),
    L = n(193221);
class U extends l.PureComponent {
    _initTimeout = new h.Ep();
    _silenceTimeout = new h.Ep();
    _messageTimeout = new h.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        D.Ay.getMediaEngine().on(c.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        (this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            D.Ay.getMediaEngine().removeListener(c.bg.VoiceActivity, this.handleVoiceActivity));
    }
    handleVoiceActivity = (e) => {
        let { isMicTesting: t } = this.state;
        if (t && e <= -100) {
            (this._silenceTimeout.isStarted() ||
                this._silenceTimeout.start(2e3, () => {
                    this.setState({ isDetectingInput: !1 });
                }),
                this.setState({ volume: -100 }));
            return;
        }
        (this._silenceTimeout.stop(), this.setState({ volume: e, isDetectingInput: !0 }));
    };
    _micTestStart() {
        let {
                isVoiceConnected: e,
                inputDeviceName: t,
                inputVolume: n,
                outputDeviceName: i,
                outputVolume: r,
                inputMode: l,
                vadAutoThreshold: s,
                vadThreshold: a,
                location: o,
                isDeafened: u,
            } = this.props,
            d = !1;
        (e && !u && (m.default.toggleSelfDeaf(), (d = !0)),
            m.default.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: d }),
            O.default.track(x.HAw.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: l,
                input_sensitivity_is_automatic: s,
                input_sensitivity_threshold: Math.round(a),
                location: o,
            }));
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        t &&
            (n && i && e && m.default.toggleSelfDeaf(),
            m.default.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                O.default.track(x.HAw.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3),
                }));
    }
    handleToggleMicTest = () => {
        this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
    };
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
        return null == e && null == t
            ? null
            : (0, r.jsx)("span", {
                  "aria-live": "polite",
                  "aria-atomic": "true",
                  className: L.b_,
                  children: (0, r.jsx)(f.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: L.Qe,
                      children: n ? (i ? e : t) : void 0,
                  }),
              });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: n,
                notchBackground: i,
                buttonTest: l = "",
                buttonStop: s = "",
                buttonVariant: o = "secondary",
                size: u = "sm",
                isDeafened: d,
                buttonMinWidth: c,
                measureButtonRef: h,
                meterOnly: m = !1,
                containerClassName: I,
                helpText: E,
            } = this.props,
            { isMicTesting: S, volume: C, isDetectingInput: _ } = this.state,
            N = e && !S ? P.intl.string(P.t["9viE2A"]) : null;
        S && e && !d && this._micTestStop();
        let T = s.length >= l.length ? s : l;
        return (0, r.jsxs)("div", {
            className: a()(L.kL, I),
            children: [
                (0, r.jsx)(g.D, {
                    label: t ?? void 0,
                    hideLabel: m,
                    description: m ? null : n,
                    children: (0, r.jsxs)("div", {
                        className: a()(L.ak, { [L.mi]: m, [L.EX]: "sm" === u }),
                        children: [
                            !m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: L.km,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)(A.$, {
                                                buttonRef: h,
                                                size: u,
                                                variant: o,
                                                text: T,
                                                tabIndex: -1,
                                            }),
                                        }),
                                        (0, r.jsx)(p.m, {
                                            text: N,
                                            children: (0, r.jsx)("div", {
                                                style: null != c ? { minWidth: c } : { opacity: 0 },
                                                children: (0, r.jsx)(A.$, {
                                                    size: u,
                                                    variant: o,
                                                    text: S ? s : l,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(M, {
                                progress: S || m ? C + 100 : 0,
                                notchBackground: i,
                                notchClassName: this.props.notchClassName,
                                size: u,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != E &&
                    (0, r.jsx)(f.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        style: { visibility: S && !_ ? "hidden" : "visible" },
                        children: E,
                    }),
            ],
        });
    }
}
function w(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: i,
            autoThreshold: l,
            inputVolume: s,
            outputVolume: a,
            inputMode: o,
            isDeafened: c,
        } = (0, d.cf)([D.Ay], () => {
            let e = D.Ay.getInputDeviceId(),
                t = D.Ay.getInputDevices(),
                n = u().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = D.Ay.getOutputDeviceId(),
                r = D.Ay.getOutputDevices(),
                l = u().find(r, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: s, autoThreshold: a } = D.Ay.getModeOptions(),
                o = D.Ay.getInputVolume(),
                d = D.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: l,
                threshold: s,
                autoThreshold: a,
                inputVolume: o,
                outputVolume: d,
                inputMode: D.Ay.getMode(),
                isDeafened: D.Ay.isSelfDeaf(),
            };
        }),
        h = (0, d.bG)([R.A], () => R.A.isConnected()),
        { ref: f, width: g } = (0, I.Ay)();
    return (0, r.jsx)(U, {
        isVoiceConnected: h,
        inputVolume: s,
        outputVolume: a,
        inputMode: o,
        isDeafened: c,
        vadThreshold: i,
        vadAutoThreshold: l,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: f,
        buttonMinWidth: g,
        ...e,
    });
}
