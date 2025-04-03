r.d(t, { default: () => b }), r(47120);
var n = r(200651),
    s = r(192379),
    i = r(481060),
    a = r(816814),
    c = r(600164),
    o = r(198993),
    l = r(594174),
    d = r(287880),
    u = r(388032),
    h = r(366293);
function g(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let p = (e) => {
    let { image: t, label: r, text: s, children: a } = e;
    return (0, n.jsxs)(c.Z, {
        className: h.spacing,
        children: [
            (0, n.jsx)(c.Z, {
                grow: 0,
                shrink: 0,
                basis: '156px',
                justify: c.Z.Justify.CENTER,
                className: h.image,
                children: t
            }),
            (0, n.jsx)(c.Z, {
                direction: c.Z.Direction.VERTICAL,
                justify: c.Z.Justify.CENTER,
                children: (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(i.vwX, {
                            tag: 'h5',
                            className: h.headerSpacing,
                            children: r
                        }),
                        (0, n.jsx)(i.R94, {
                            type: i.R94.Types.DESCRIPTION,
                            children: s
                        }),
                        a
                    ]
                })
            })
        ]
    });
};
class f extends s.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: s } = this.props,
            { totpSecret: a, code: g, isVerifying: f } = this.state,
            b = null == (e = l.default.getCurrentUser()) ? void 0 : e.email,
            x = (0, d.U0)(null != b ? b : '', a),
            m = (0, n.jsx)('form', {
                onSubmit: this.handleActivate,
                children: (0, n.jsxs)(c.Z, {
                    className: h.inputContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, n.jsx)(i.oil, {
                            value: g,
                            className: h.input,
                            placeholder: '000 000',
                            maxLength: 7,
                            autoComplete: 'one-time-code',
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0
                        }),
                        (0, n.jsx)(c.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(i.zxk, {
                                type: 'submit',
                                submitting: f,
                                children: u.NW.string(u.t['/a5+YW'])
                            })
                        })
                    ]
                })
            });
        return (0, n.jsxs)(i.Y0X, {
            transitionState: t,
            size: i.CgR.DYNAMIC,
            className: h.customWidth,
            children: [
                (0, n.jsxs)(i.xBx, {
                    separator: !1,
                    children: [
                        (0, n.jsxs)(c.Z.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [
                                (0, n.jsx)(i.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: u.NW.string(u.t.cDgKtb)
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-xs/normal',
                                    className: h.subHeader,
                                    children: u.NW.string(u.t['7NGwtL'])
                                })
                            ]
                        }),
                        (0, n.jsx)(c.Z.Child, {
                            grow: 0,
                            children: (0, n.jsx)(i.olH, { onClick: s })
                        })
                    ]
                }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        (0, n.jsx)(p, {
                            image: (0, n.jsx)('img', {
                                alt: '',
                                src: r(340061),
                                width: 100,
                                height: 100
                            }),
                            label: u.NW.string(u.t['9E74Dw']),
                            text: u.NW.format(u.t.A7Aeh4, {
                                googleAuthURL: 'https://support.google.com/accounts/answer/1066447?hl=en',
                                authyURL: 'https://www.authy.com/'
                            })
                        }),
                        (0, n.jsx)(i.$i$, { className: h.divider }),
                        (0, n.jsx)(p, {
                            image: (0, n.jsx)(o.ZP, { text: x }),
                            label: u.NW.string(u.t['91InFx']),
                            text: u.NW.string(u.t.hFeBkp),
                            children: (0, n.jsxs)('div', {
                                className: h.topSpacing,
                                children: [
                                    (0, n.jsx)(i.vwX, {
                                        tag: 'h5',
                                        className: h.headerSpacing,
                                        children: u.NW.string(u.t['76IPws'])
                                    }),
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        className: h.secret,
                                        selectable: !0,
                                        children: a
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)(i.$i$, { className: h.divider }),
                        (0, n.jsx)(p, {
                            image: (0, n.jsx)('img', {
                                alt: '',
                                src: r(308777)
                            }),
                            label: u.NW.string(u.t['SaD/LS']),
                            text: u.NW.string(u.t.vI1ziY),
                            children: m
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
                    { totpSecret: r, code: n } = this.state;
                this.setState({ isVerifying: !0 }),
                    a.Z.enable({
                        password: t,
                        code: n,
                        secret: (0, d.Qe)(r)
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
let b = f;
