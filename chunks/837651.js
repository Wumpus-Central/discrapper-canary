(r.d(t, { default: () => C }), r(388685));
var n = r(255367),
    i = r(73800),
    s = r(755721),
    o = r(481060),
    a = r(816814),
    c = r(600164),
    l = r(198993),
    d = r(594174),
    u = r(287880),
    h = r(388032),
    p = r(366293);
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
let f = (e) => {
    let { image: t, label: r, text: i, children: s } = e;
    return (0, n.jsxs)(c.Z, {
        className: p.spacing,
        children: [
            (0, n.jsx)(c.Z, {
                grow: 0,
                shrink: 0,
                basis: '156px',
                justify: c.Z.Justify.CENTER,
                className: p.image,
                children: t
            }),
            (0, n.jsx)(c.Z, {
                direction: c.Z.Direction.VERTICAL,
                justify: c.Z.Justify.CENTER,
                children: (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(o.vwX, {
                            tag: 'h5',
                            className: p.headerSpacing,
                            children: r
                        }),
                        (0, n.jsx)(o.R94, {
                            type: o.R94.Types.DESCRIPTION,
                            children: i
                        }),
                        s
                    ]
                })
            })
        ]
    });
};
class _ extends i.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: i } = this.props,
            { totpSecret: a, code: g, isVerifying: _ } = this.state,
            C = null == (e = d.default.getCurrentUser()) ? void 0 : e.email,
            E = (0, u.U0)(null != C ? C : '', a),
            S = (0, n.jsx)('form', {
                onSubmit: this.handleActivate,
                children: (0, n.jsxs)(c.Z, {
                    className: p.inputContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, n.jsx)(s.Is, {
                            value: g,
                            className: p.input,
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
                            children: (0, n.jsx)(o.zxk, {
                                variant: 'primary',
                                text: h.intl.string(h.t['/a5+YW']),
                                type: 'submit',
                                loading: _
                            })
                        })
                    ]
                })
            });
        return (0, n.jsxs)(o.Y0X, {
            transitionState: t,
            size: o.CgR.DYNAMIC,
            className: p.customWidth,
            parentComponent: 'MFAEnable',
            children: [
                (0, n.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, n.jsxs)(c.Z.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [
                                (0, n.jsx)(o.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: h.intl.string(h.t.cDgKtb)
                                }),
                                (0, n.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    className: p.subHeader,
                                    children: h.intl.string(h.t['7NGwtL'])
                                })
                            ]
                        }),
                        (0, n.jsx)(c.Z.Child, {
                            grow: 0,
                            children: (0, n.jsx)(o.olH, { onClick: i })
                        })
                    ]
                }),
                (0, n.jsxs)(o.hzk, {
                    children: [
                        (0, n.jsx)(f, {
                            image: (0, n.jsx)('img', {
                                alt: '',
                                src: r(340061),
                                width: 100,
                                height: 100
                            }),
                            label: h.intl.string(h.t['9E74Dw']),
                            text: h.intl.format(h.t.A7Aeh4, {
                                googleAuthURL: 'https://support.google.com/accounts/answer/1066447?hl=en',
                                authyURL: 'https://www.authy.com/'
                            })
                        }),
                        (0, n.jsx)(o.$i$, { className: p.divider }),
                        (0, n.jsx)(f, {
                            image: (0, n.jsx)(l.ZP, { text: E }),
                            label: h.intl.string(h.t['91InFx']),
                            text: h.intl.string(h.t.hFeBkp),
                            children: (0, n.jsxs)('div', {
                                className: p.topSpacing,
                                children: [
                                    (0, n.jsx)(o.vwX, {
                                        tag: 'h5',
                                        className: p.headerSpacing,
                                        children: h.intl.string(h.t['76IPws'])
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        className: p.secret,
                                        selectable: !0,
                                        children: a
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)(o.$i$, { className: p.divider }),
                        (0, n.jsx)(f, {
                            image: (0, n.jsx)('img', {
                                alt: '',
                                src: r(308777)
                            }),
                            label: h.intl.string(h.t['SaD/LS']),
                            text: h.intl.string(h.t.vI1ziY),
                            children: S
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            g(this, 'state', {
                code: '',
                totpSecret: (0, u.bV)(),
                error: null,
                isVerifying: !1
            }),
            g(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            }),
            g(this, 'handleActivate', (e) => {
                e.preventDefault();
                let { totpSecret: t, code: r } = this.state;
                (this.setState({ isVerifying: !0 }),
                    a.Z.enable({
                        code: r,
                        secret: (0, u.Qe)(t)
                    }).then(this.handleActivateSuccess, (e) =>
                        this.setState({
                            error: e.body.message,
                            isVerifying: !1
                        })
                    ));
            }),
            g(this, 'handleActivateSuccess', () => {
                let { onClose: e, handleEnableMFASuccess: t } = this.props;
                (this.setState({ isVerifying: !1 }), t(), null == e || e());
            }));
    }
}
let C = _;
