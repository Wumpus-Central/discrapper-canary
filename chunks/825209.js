n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(921738),
    l = n.n(r),
    o = n(213005),
    a = n(455279),
    d = n(358085),
    u = n(998502),
    h = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = d.isPlatformEmbedded && null != u.ZP.getDiscordUtils().inputCaptureRegisterElement;
class g extends s.PureComponent {
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
        d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: t } = this.state,
            { onChange: n } = this.props;
        t === a.c.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    render() {
        let e, t;
        let { codes: n, mode: s } = this.state,
            { disabled: r } = this.props;
        return (
            m ? ((t = u.ZP.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange)) : !d.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, i.jsx)(a.Z, {
                disabled: r,
                value: n,
                mode: s,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: m
            })
        );
    }
    constructor(e) {
        super(e),
            c(this, '_input', void 0),
            c(this, 'gs', void 0),
            c(this, '_mounted', !1),
            c(this, 'recordStart', () => {
                d.isPlatformEmbedded && !m && ((this.gs = new o.Z()), this.gs.on('change', this.handleGSChange)), this.setState({ mode: a.c.RECORDING });
            }),
            c(this, 'recordEnd', () => {
                this.cleanUp(), this.setState({ mode: a.c.DEFAULT });
            }),
            c(this, 'toggleRecordMode', () => {
                this.state.mode === a.c.DEFAULT ? this.recordStart() : this.recordEnd();
            }),
            c(this, 'handleComboKeys', (e, t, n) => {
                if ((n.preventDefault(), 'keydown' === n.type)) {
                    let e = t.map((e) => [h.MoX.KEYBOARD_KEY, l()(e), h.CgE.BROWSER]),
                        { keyCode: i } = n;
                    null ==
                        e.find((e) => {
                            let [, t] = e;
                            return i === t;
                        }) && e.push([h.MoX.KEYBOARD_KEY, i, h.CgE.BROWSER]),
                        this.handleComboChange(e);
                }
            }),
            c(this, 'handleGSChange', (e) => {
                if (!1 === this._mounted) return;
                let t = [...e.combo];
                this.handleComboChange(t);
            }),
            c(this, 'handleNativeChange', (e) => {
                e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
        let { defaultValue: t } = e;
        this.state = {
            codes: t,
            mode: a.c.DEFAULT
        };
    }
}
t.Z = g;
