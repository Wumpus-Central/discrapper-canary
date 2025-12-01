n.d(t, { Z: () => m }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(921738),
    o = n.n(a),
    s = n(213005),
    l = n(455279),
    c = n(358085),
    u = n(998502),
    d = n(295907);
function f(e, t, n) {
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
let p = c.isPlatformEmbedded && null != u.ZP.getDiscordUtils().inputCaptureRegisterElement;
class _ extends i.PureComponent {
    componentDidMount() {
        this._mounted = !0;
    }
    componentWillUnmount() {
        (this._mounted = !1), this.cleanUp();
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue });
    }
    cleanUp() {
        c.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { onChange: n } = this.props;
        t === l.c.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    render() {
        let e,
            t,
            { codes: n, mode: i } = this.state,
            { disabled: a } = this.props;
        return (
            p
                ? ((t = u.ZP.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange))
                : c.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, r.jsx)(l.Z, {
                disabled: a,
                value: n,
                mode: i,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: p,
            })
        );
    }
    constructor(e) {
        super(e),
            f(this, "_input", void 0),
            f(this, "gs", void 0),
            f(this, "_mounted", !1),
            f(this, "recordStart", () => {
                c.isPlatformEmbedded && !p && ((this.gs = new s.Z()), this.gs.on("change", this.handleGSChange)),
                    this.setState({ mode: l.c.RECORDING });
            }),
            f(this, "recordEnd", () => {
                this.cleanUp(), this.setState({ mode: l.c.DEFAULT });
            }),
            f(this, "toggleRecordMode", () => {
                this.state.mode === l.c.DEFAULT ? this.recordStart() : this.recordEnd();
            }),
            f(this, "handleComboKeys", (e, t, n) => {
                if ((n.preventDefault(), "keydown" === n.type)) {
                    let e = t.map((e) => [d.Mo.KEYBOARD_KEY, o()(e), d.Cg.BROWSER]),
                        { keyCode: r } = n;
                    null ==
                        e.find((e) => {
                            let [, t] = e;
                            return r === t;
                        }) && e.push([d.Mo.KEYBOARD_KEY, r, d.Cg.BROWSER]),
                        this.handleComboChange(e);
                }
            }),
            f(this, "handleGSChange", (e) => {
                if (!1 === this._mounted) return;
                let t = [...e.combo];
                this.handleComboChange(t);
            }),
            f(this, "handleNativeChange", (e) => {
                e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
        let { defaultValue: t } = e;
        this.state = {
            codes: t,
            mode: l.c.DEFAULT,
        };
    }
}
let m = _;
