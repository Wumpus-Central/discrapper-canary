r.d(t, { default: () => _ }), r(388685);
var n = r(255367),
    i = r(73800),
    s = r(481060),
    o = r(816814),
    c = r(600164),
    a = r(198993),
    l = r(594174),
    d = r(287880),
    u = r(388032),
    h = r(366293);
function p(e, t, r) {
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
let g = (e) => {
    let { image: t, label: r, text: i, children: o } = e;
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
                        (0, n.jsx)(s.vwX, {
                            tag: 'h5',
                            className: h.headerSpacing,
                            children: r
                        }),
                        (0, n.jsx)(s.R94, {
                            type: s.R94.Types.DESCRIPTION,
                            children: i
                        }),
                        o
                    ]
                })
            })
        ]
    });
};
class f extends i.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: i } = this.props,
            { totpSecret: o, code: p, isVerifying: f } = this.state,
            _ = null == (e = l.default.getCurrentUser()) ? void 0 : e.email,
            C = (0, d.U0)(null != _ ? _ : '', o),
            E = (0, n.jsx)('form', {
                onSubmit: this.handleActivate,
                children: (0, n.jsxs)(c.Z, {
                    className: h.inputContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, n.jsx)(s.oil, {
                            value: p,
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
                            children: (0, n.jsx)(s.zxk, {
                                type: 'submit',
                                submitting: f,
                                children: u.intl.string(u.t['/a5+YW'])
                            })
                        })
                    ]
                })
            });
        return (0, n.jsxs)(s.Y0X, {
            transitionState: t,
            size: s.CgR.DYNAMIC,
            className: h.customWidth,
            children: [
                (0, n.jsxs)(s.xBx, {
                    separator: !1,
                    children: [
                        (0, n.jsxs)(c.Z.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [
                                (0, n.jsx)(s.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: u.intl.string(u.t.cDgKtb)
                                }),
                                (0, n.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    className: h.subHeader,
                                    children: u.intl.string(u.t['7NGwtL'])
                                })
                            ]
                        }),
                        (0, n.jsx)(c.Z.Child, {
                            grow: 0,
                            children: (0, n.jsx)(s.olH, { onClick: i })
                        })
                    ]
                }),
                (0, n.jsxs)(s.hzk, {
                    children: [
                        (0, n.jsx)(g, {
                            image: (0, n.jsx)('img', {
                                alt: '',
                                src: r(340061),
                                width: 100,
                                height: 100
                            }),
                            label: u.intl.string(u.t['9E74Dw']),
                            text: u.intl.format(u.t.A7Aeh4, {
                                googleAuthURL: 'https://support.google.com/accounts/answer/1066447?hl=en',
                                authyURL: 'https://www.authy.com/'
                            })
                        }),
                        (0, n.jsx)(s.$i$, { className: h.divider }),
                        (0, n.jsx)(g, {
                            image: (0, n.jsx)(a.ZP, { text: C }),
                            label: u.intl.string(u.t['91InFx']),
                            text: u.intl.string(u.t.hFeBkp),
                            children: (0, n.jsxs)('div', {
                                className: h.topSpacing,
                                children: [
                                    (0, n.jsx)(s.vwX, {
                                        tag: 'h5',
                                        className: h.headerSpacing,
                                        children: u.intl.string(u.t['76IPws'])
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        className: h.secret,
                                        selectable: !0,
                                        children: o
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)(s.$i$, { className: h.divider }),
                        (0, n.jsx)(g, {
                            image: (0, n.jsx)('img', {
                                alt: '',
                                src: r(308777)
                            }),
                            label: u.intl.string(u.t['SaD/LS']),
                            text: u.intl.string(u.t.vI1ziY),
                            children: E
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {
                code: '',
                totpSecret: (0, d.bV)(),
                error: null,
                isVerifying: !1
            }),
            p(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            }),
            p(this, 'handleActivate', (e) => {
                e.preventDefault();
                let { totpSecret: t, code: r } = this.state;
                this.setState({ isVerifying: !0 }),
                    o.Z.enable({
                        code: r,
                        secret: (0, d.Qe)(t)
                    }).then(this.handleActivateSuccess, (e) =>
                        this.setState({
                            error: e.body.message,
                            isVerifying: !1
                        })
                    );
            }),
            p(this, 'handleActivateSuccess', () => {
                let { onClose: e, handleEnableMFASuccess: t } = this.props;
                this.setState({ isVerifying: !1 }), t(), null == e || e();
            });
    }
}
let _ = f;
