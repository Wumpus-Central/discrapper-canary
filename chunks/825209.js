n.d(t, { Z: () => h }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(921738),
    a = n.n(s),
    l = n(213005),
    o = n(455279),
    c = n(358085),
    d = n(998502),
    u = n(981631);
function m(e, t, n) {
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
let g = c.isPlatformEmbedded && null != d.ZP.getDiscordUtils().inputCaptureRegisterElement;
class p extends i.PureComponent {
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
        t === o.c.RECORDING && (null != n && n(e), this.setState({ codes: e }));
    }
    render() {
        let e,
            t,
            { codes: n, mode: i } = this.state,
            { disabled: s } = this.props;
        return (
            g ? ((t = d.ZP.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange)) : c.isPlatformEmbedded || (e = this.handleComboKeys),
            (0, r.jsx)(o.Z, {
                disabled: s,
                value: n,
                mode: i,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: t,
                disableOnClickWhileRecording: g
            })
        );
    }
    constructor(e) {
        super(e),
            m(this, '_input', void 0),
            m(this, 'gs', void 0),
            m(this, '_mounted', !1),
            m(this, 'recordStart', () => {
                c.isPlatformEmbedded && !g && ((this.gs = new l.Z()), this.gs.on('change', this.handleGSChange)), this.setState({ mode: o.c.RECORDING });
            }),
            m(this, 'recordEnd', () => {
                this.cleanUp(), this.setState({ mode: o.c.DEFAULT });
            }),
            m(this, 'toggleRecordMode', () => {
                this.state.mode === o.c.DEFAULT ? this.recordStart() : this.recordEnd();
            }),
            m(this, 'handleComboKeys', (e, t, n) => {
                if ((n.preventDefault(), 'keydown' === n.type)) {
                    let e = t.map((e) => [u.MoX.KEYBOARD_KEY, a()(e), u.CgE.BROWSER]),
                        { keyCode: r } = n;
                    null ==
                        e.find((e) => {
                            let [, t] = e;
                            return r === t;
                        }) && e.push([u.MoX.KEYBOARD_KEY, r, u.CgE.BROWSER]),
                        this.handleComboChange(e);
                }
            }),
            m(this, 'handleGSChange', (e) => {
                if (!1 === this._mounted) return;
                let t = [...e.combo];
                this.handleComboChange(t);
            }),
            m(this, 'handleNativeChange', (e) => {
                e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
        let { defaultValue: t } = e;
        this.state = {
            codes: t,
            mode: o.c.DEFAULT
        };
    }
}
let h = p;
