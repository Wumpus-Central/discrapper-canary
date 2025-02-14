i.d(t, { default: () => x }), i(47120);
var s = i(200651),
    n = i(192379),
    r = i(481060),
    a = i(816814),
    c = i(600164),
    l = i(198993),
    o = i(594174),
    d = i(287880),
    u = i(388032),
    h = i(80442);
function g(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let p = (e) => {
    let { image: t, label: i, text: n, children: a } = e;
    return (0, s.jsxs)(c.Z, {
        className: h.spacing,
        children: [
            (0, s.jsx)(c.Z, {
                grow: 0,
                shrink: 0,
                basis: '156px',
                justify: c.Z.Justify.CENTER,
                className: h.image,
                children: t
            }),
            (0, s.jsx)(c.Z, {
                direction: c.Z.Direction.VERTICAL,
                justify: c.Z.Justify.CENTER,
                children: (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)(r.vwX, {
                            tag: 'h5',
                            className: h.headerSpacing,
                            children: i
                        }),
                        (0, s.jsx)(r.R94, {
                            type: r.R94.Types.DESCRIPTION,
                            children: n
                        }),
                        a
                    ]
                })
            })
        ]
    });
};
class f extends n.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: n } = this.props,
            { totpSecret: a, code: g, isVerifying: f } = this.state,
            x = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.email,
            m = (0, d.U0)(null != x ? x : '', a),
            v = (0, s.jsx)('form', {
                onSubmit: this.handleActivate,
                children: (0, s.jsxs)(c.Z, {
                    className: h.inputContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, s.jsx)(r.oil, {
                            value: g,
                            className: h.input,
                            placeholder: '000 000',
                            maxLength: 7,
                            autoComplete: 'one-time-code',
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0
                        }),
                        (0, s.jsx)(c.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, s.jsx)(r.zxk, {
                                type: 'submit',
                                submitting: f,
                                children: u.intl.string(u.t['/a5+YW'])
                            })
                        })
                    ]
                })
            });
        return (0, s.jsxs)(r.Y0X, {
            transitionState: t,
            size: r.CgR.DYNAMIC,
            className: h.customWidth,
            children: [
                (0, s.jsxs)(r.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsxs)(c.Z.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [
                                (0, s.jsx)(r.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: u.intl.string(u.t.cDgKtb)
                                }),
                                (0, s.jsx)(r.Text, {
                                    variant: 'text-xs/normal',
                                    className: h.subHeader,
                                    children: u.intl.string(u.t['7NGwtL'])
                                })
                            ]
                        }),
                        (0, s.jsx)(c.Z.Child, {
                            grow: 0,
                            children: (0, s.jsx)(r.olH, { onClick: n })
                        })
                    ]
                }),
                (0, s.jsxs)(r.hzk, {
                    children: [
                        (0, s.jsx)(p, {
                            image: (0, s.jsx)('img', {
                                alt: '',
                                src: i(340061),
                                width: 100,
                                height: 100
                            }),
                            label: u.intl.string(u.t['9E74Dw']),
                            text: u.intl.format(u.t.A7Aeh4, {
                                googleAuthURL: 'https://support.google.com/accounts/answer/1066447?hl=en',
                                authyURL: 'https://www.authy.com/'
                            })
                        }),
                        (0, s.jsx)(r.$i$, { className: h.divider }),
                        (0, s.jsx)(p, {
                            image: (0, s.jsx)(l.ZP, { text: m }),
                            label: u.intl.string(u.t['91InFx']),
                            text: u.intl.string(u.t.hFeBkp),
                            children: (0, s.jsxs)('div', {
                                className: h.topSpacing,
                                children: [
                                    (0, s.jsx)(r.vwX, {
                                        tag: 'h5',
                                        className: h.headerSpacing,
                                        children: u.intl.string(u.t['76IPws'])
                                    }),
                                    (0, s.jsx)(r.Text, {
                                        variant: 'text-md/normal',
                                        className: h.secret,
                                        selectable: !0,
                                        children: a
                                    })
                                ]
                            })
                        }),
                        (0, s.jsx)(r.$i$, { className: h.divider }),
                        (0, s.jsx)(p, {
                            image: (0, s.jsx)('img', {
                                alt: '',
                                src: i(308777)
                            }),
                            label: u.intl.string(u.t['SaD/LS']),
                            text: u.intl.string(u.t.vI1ziY),
                            children: v
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                code: '',
                totpSecret: (0, d.bV)(),
                error: null,
                isVerifying: !1
            }),
            g(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            }),
            g(this, 'handleActivate', (e) => {
                e.preventDefault();
                let { password: t } = this.props,
                    { totpSecret: i, code: s } = this.state;
                this.setState({ isVerifying: !0 }),
                    a.Z.enable({
                        password: t,
                        code: s,
                        secret: (0, d.Qe)(i)
                    }).then(this.handleActivateSuccess, (e) =>
                        this.setState({
                            error: e.body.message,
                            isVerifying: !1
                        })
                    );
            }),
            g(this, 'handleActivateSuccess', () => {
                let { onClose: e, handleEnableMFASuccess: t } = this.props;
                this.setState({ isVerifying: !1 }), t(), null == e || e();
            });
    }
}
let x = f;
