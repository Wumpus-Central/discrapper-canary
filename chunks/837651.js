r.d(t, { default: () => _ }), r(388685);
var n = r(200651),
    s = r(192379),
    i = r(481060),
    o = r(816814),
    c = r(600164),
    a = r(198993),
    l = r(594174),
    d = r(287880),
    u = r(388032),
    h = r(436265);
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
    let { image: t, label: r, text: s, children: o } = e;
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
                        o
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
            { totpSecret: o, code: p, isVerifying: f } = this.state,
            _ = null == (e = l.default.getCurrentUser()) ? void 0 : e.email,
            C = (0, d.U0)(null != _ ? _ : '', o),
            E = (0, n.jsx)('form', {
                onSubmit: this.handleActivate,
                children: (0, n.jsxs)(c.Z, {
                    className: h.inputContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, n.jsx)(i.oil, {
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
                        (0, n.jsx)(g, {
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
                        (0, n.jsx)(g, {
                            image: (0, n.jsx)(a.ZP, { text: C }),
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
                                        children: o
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)(i.$i$, { className: h.divider }),
                        (0, n.jsx)(g, {
                            image: (0, n.jsx)('img', {
                                alt: '',
                                src: r(308777)
                            }),
                            label: u.NW.string(u.t['SaD/LS']),
                            text: u.NW.string(u.t.vI1ziY),
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
