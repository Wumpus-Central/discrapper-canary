n.r(t), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(816814),
    o = n(600164),
    l = n(198993),
    c = n(200483),
    d = n(594174),
    u = n(287880),
    h = n(388032),
    f = n(235170);
function g(e, t, n) {
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
let p = (e) => {
    let { image: t, label: n, text: r, children: a } = e;
    return (0, i.jsxs)(o.Z, {
        className: f.spacing,
        children: [
            (0, i.jsx)(o.Z, {
                grow: 0,
                shrink: 0,
                basis: '156px',
                justify: o.Z.Justify.CENTER,
                className: f.image,
                children: t
            }),
            (0, i.jsx)(o.Z, {
                direction: o.Z.Direction.VERTICAL,
                justify: o.Z.Justify.CENTER,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.FormTitle, {
                            tag: 'h5',
                            className: f.headerSpacing,
                            children: n
                        }),
                        (0, i.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            children: r
                        }),
                        a
                    ]
                })
            })
        ]
    });
};
class m extends r.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: r } = this.props,
            { totpSecret: a, code: c, isVerifying: g } = this.state,
            m = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.email,
            x = (0, u.U0)(null != m ? m : '', a),
            v = (0, i.jsx)('form', {
                onSubmit: this.handleActivate,
                children: (0, i.jsxs)(o.Z, {
                    className: f.inputContainer,
                    align: o.Z.Align.START,
                    children: [
                        (0, i.jsx)(s.TextInput, {
                            value: c,
                            className: f.input,
                            placeholder: '000 000',
                            maxLength: 7,
                            autoComplete: 'one-time-code',
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0
                        }),
                        (0, i.jsx)(o.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(s.Button, {
                                type: 'submit',
                                submitting: g,
                                children: h.intl.string(h.t['/a5+YW'])
                            })
                        })
                    ]
                })
            });
        return (0, i.jsxs)(s.ModalRoot, {
            transitionState: t,
            size: s.ModalSize.DYNAMIC,
            className: f.customWidth,
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsxs)(o.Z.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [
                                (0, i.jsx)(s.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: h.intl.string(h.t.cDgKtb)
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    className: f.subHeader,
                                    children: h.intl.string(h.t['7NGwtL'])
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(s.ModalCloseButton, { onClick: r })
                        })
                    ]
                }),
                (0, i.jsxs)(s.ModalContent, {
                    children: [
                        (0, i.jsx)(p, {
                            image: (0, i.jsx)('img', {
                                alt: '',
                                src: n(340061),
                                width: 100,
                                height: 100
                            }),
                            label: h.intl.string(h.t['9E74Dw']),
                            text: h.intl.format(h.t.A7Aeh4, {
                                googleAuthURL: 'https://support.google.com/accounts/answer/1066447?hl=en',
                                authyURL: 'https://www.authy.com/'
                            })
                        }),
                        (0, i.jsx)(s.FormDivider, { className: f.divider }),
                        (0, i.jsx)(p, {
                            image: (0, i.jsx)(l.ZP, { text: x }),
                            label: h.intl.string(h.t['91InFx']),
                            text: h.intl.string(h.t.hFeBkp),
                            children: (0, i.jsxs)('div', {
                                className: f.topSpacing,
                                children: [
                                    (0, i.jsx)(s.FormTitle, {
                                        tag: 'h5',
                                        className: f.headerSpacing,
                                        children: h.intl.string(h.t['76IPws'])
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        className: f.secret,
                                        selectable: !0,
                                        children: a
                                    })
                                ]
                            })
                        }),
                        (0, i.jsx)(s.FormDivider, { className: f.divider }),
                        (0, i.jsx)(p, {
                            image: (0, i.jsx)('img', {
                                alt: '',
                                src: n(308777)
                            }),
                            label: h.intl.string(h.t['SaD/LS']),
                            text: h.intl.string(h.t.vI1ziY),
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
                totpSecret: (0, u.bV)(),
                error: null,
                isVerifying: !1
            }),
            g(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            }),
            g(this, 'handleActivate', (e) => {
                e.preventDefault();
                let { password: t, emailToken: n } = this.props,
                    { totpSecret: i, code: r } = this.state;
                this.setState({ isVerifying: !0 }),
                    a.Z.enable({
                        password: t,
                        code: r,
                        secret: (0, u.Qe)(i),
                        ...((0, c.j)() && { emailToken: n })
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
t.default = m;
