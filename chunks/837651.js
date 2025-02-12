i.d(t, { default: () => m }), i(47120);
var s = i(200651),
    n = i(192379),
    r = i(481060),
    a = i(816814),
    c = i(600164),
    l = i(198993),
    o = i(200483),
    d = i(594174),
    u = i(287880),
    h = i(388032),
    g = i(840568);
function p(e, t, i) {
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
let f = (e) => {
    let { image: t, label: i, text: n, children: a } = e;
    return (0, s.jsxs)(c.Z, {
        className: g.spacing,
        children: [
            (0, s.jsx)(c.Z, {
                grow: 0,
                shrink: 0,
                basis: '156px',
                justify: c.Z.Justify.CENTER,
                className: g.image,
                children: t
            }),
            (0, s.jsx)(c.Z, {
                direction: c.Z.Direction.VERTICAL,
                justify: c.Z.Justify.CENTER,
                children: (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)(r.vwX, {
                            tag: 'h5',
                            className: g.headerSpacing,
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
class x extends n.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: n } = this.props,
            { totpSecret: a, code: o, isVerifying: p } = this.state,
            x = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.email,
            m = (0, u.U0)(null != x ? x : '', a),
            v = (0, s.jsx)('form', {
                onSubmit: this.handleActivate,
                children: (0, s.jsxs)(c.Z, {
                    className: g.inputContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, s.jsx)(r.oil, {
                            value: o,
                            className: g.input,
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
                                submitting: p,
                                children: h.intl.string(h.t['/a5+YW'])
                            })
                        })
                    ]
                })
            });
        return (0, s.jsxs)(r.Y0X, {
            transitionState: t,
            size: r.CgR.DYNAMIC,
            className: g.customWidth,
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
                                    children: h.intl.string(h.t.cDgKtb)
                                }),
                                (0, s.jsx)(r.Text, {
                                    variant: 'text-xs/normal',
                                    className: g.subHeader,
                                    children: h.intl.string(h.t['7NGwtL'])
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
                        (0, s.jsx)(f, {
                            image: (0, s.jsx)('img', {
                                alt: '',
                                src: i(340061),
                                width: 100,
                                height: 100
                            }),
                            label: h.intl.string(h.t['9E74Dw']),
                            text: h.intl.format(h.t.A7Aeh4, {
                                googleAuthURL: 'https://support.google.com/accounts/answer/1066447?hl=en',
                                authyURL: 'https://www.authy.com/'
                            })
                        }),
                        (0, s.jsx)(r.$i$, { className: g.divider }),
                        (0, s.jsx)(f, {
                            image: (0, s.jsx)(l.ZP, { text: m }),
                            label: h.intl.string(h.t['91InFx']),
                            text: h.intl.string(h.t.hFeBkp),
                            children: (0, s.jsxs)('div', {
                                className: g.topSpacing,
                                children: [
                                    (0, s.jsx)(r.vwX, {
                                        tag: 'h5',
                                        className: g.headerSpacing,
                                        children: h.intl.string(h.t['76IPws'])
                                    }),
                                    (0, s.jsx)(r.Text, {
                                        variant: 'text-md/normal',
                                        className: g.secret,
                                        selectable: !0,
                                        children: a
                                    })
                                ]
                            })
                        }),
                        (0, s.jsx)(r.$i$, { className: g.divider }),
                        (0, s.jsx)(f, {
                            image: (0, s.jsx)('img', {
                                alt: '',
                                src: i(308777)
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
            p(this, 'state', {
                code: '',
                totpSecret: (0, u.bV)(),
                error: null,
                isVerifying: !1
            }),
            p(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            }),
            p(this, 'handleActivate', (e) => {
                e.preventDefault();
                let { password: t, emailToken: i } = this.props,
                    { totpSecret: s, code: n } = this.state;
                this.setState({ isVerifying: !0 }),
                    a.Z.enable({
                        password: t,
                        code: n,
                        secret: (0, u.Qe)(s),
                        ...((0, o.j)() && { emailToken: i })
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
let m = x;
