r.d(t, { default: () => f }), r(388685);
var s = r(951288),
    i = r(647438),
    n = r(481060),
    a = r(816814),
    l = r(600164),
    c = r(198993),
    o = r(594174),
    d = r(287880),
    h = r(388032),
    u = r(186603);
function g(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let p = (e) => {
    let { image: t, label: r, text: i, children: a } = e;
    return (0, s.jsxs)(l.Z, {
        className: u.spacing,
        children: [
            (0, s.jsx)(l.Z, {
                grow: 0,
                shrink: 0,
                basis: "156px",
                justify: l.Z.Justify.CENTER,
                className: u.image,
                children: t,
            }),
            (0, s.jsx)(l.Z, {
                direction: l.Z.Direction.VERTICAL,
                justify: l.Z.Justify.CENTER,
                children: (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(n.X6q, {
                            variant: "heading-sm/semibold",
                            className: u.headerSpacing,
                            children: r,
                        }),
                        (0, s.jsx)(n.Text, {
                            variant: "text-md/normal",
                            children: i,
                        }),
                        a,
                    ],
                }),
            }),
        ],
    });
};
class x extends i.PureComponent {
    render() {
        var e;
        let { transitionState: t, onClose: i } = this.props,
            { totpSecret: a, code: g, isVerifying: x } = this.state,
            f = null == (e = o.default.getCurrentUser()) ? void 0 : e.email,
            m = (0, d.U0)(null != f ? f : "", a),
            b = (0, s.jsx)("form", {
                onSubmit: this.handleActivate,
                children: (0, s.jsxs)(l.Z, {
                    className: u.inputContainer,
                    align: l.Z.Align.START,
                    children: [
                        (0, s.jsx)(n.oil, {
                            value: g,
                            placeholder: "000 000",
                            maxLength: 7,
                            autoComplete: "one-time-code",
                            onChange: this.handleCodeChange,
                            error: this.state.error,
                            autoFocus: !0,
                            fullWidth: !0,
                        }),
                        (0, s.jsx)(l.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, s.jsx)(n.zxk, {
                                variant: "primary",
                                text: h.intl.string(h.t["/a5+YW"]),
                                type: "submit",
                                loading: x,
                            }),
                        }),
                    ],
                }),
            });
        return (0, s.jsxs)(n.Y0X, {
            transitionState: t,
            size: n.CgR.DYNAMIC,
            className: u.customWidth,
            parentComponent: "MFAEnable",
            children: [
                (0, s.jsxs)(n.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsxs)(l.Z.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [
                                (0, s.jsx)(n.X6q, {
                                    variant: "heading-lg/semibold",
                                    children: h.intl.string(h.t.cDgKtb),
                                }),
                                (0, s.jsx)(n.Text, {
                                    variant: "text-xs/normal",
                                    className: u.subHeader,
                                    children: h.intl.string(h.t["7NGwtL"]),
                                }),
                            ],
                        }),
                        (0, s.jsx)(l.Z.Child, {
                            grow: 0,
                            children: (0, s.jsx)(n.olH, { onClick: i }),
                        }),
                    ],
                }),
                (0, s.jsxs)(n.hzk, {
                    children: [
                        (0, s.jsx)(p, {
                            image: (0, s.jsx)("img", {
                                alt: "",
                                src: r(340061),
                                width: 100,
                                height: 100,
                            }),
                            label: h.intl.string(h.t["9E74Dw"]),
                            text: h.intl.format(h.t.A7Aeh4, {
                                googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
                                authyURL: "https://www.authy.com/",
                            }),
                        }),
                        (0, s.jsx)(n.izJ, { className: u.divider }),
                        (0, s.jsx)(p, {
                            image: (0, s.jsx)(c.ZP, { text: m }),
                            label: h.intl.string(h.t["91InFx"]),
                            text: h.intl.string(h.t.hFeBkp),
                            children: (0, s.jsxs)("div", {
                                className: u.topSpacing,
                                children: [
                                    (0, s.jsx)(n.X6q, {
                                        variant: "heading-sm/semibold",
                                        className: u.headerSpacing,
                                        children: h.intl.string(h.t["76IPws"]),
                                    }),
                                    (0, s.jsx)(n.Text, {
                                        variant: "text-md/normal",
                                        className: u.secret,
                                        selectable: !0,
                                        children: a,
                                    }),
                                ],
                            }),
                        }),
                        (0, s.jsx)(n.izJ, { className: u.divider }),
                        (0, s.jsx)(p, {
                            image: (0, s.jsx)("img", {
                                alt: "",
                                src: r(308777),
                            }),
                            label: h.intl.string(h.t["SaD/LS"]),
                            text: h.intl.string(h.t.vI1ziY),
                            children: b,
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "state", {
                code: "",
                totpSecret: (0, d.bV)(),
                error: null,
                isVerifying: !1,
            }),
            g(this, "handleCodeChange", (e) => {
                this.setState({ code: e });
            }),
            g(this, "handleActivate", (e) => {
                e.preventDefault();
                let { totpSecret: t, code: r } = this.state;
                this.setState({ isVerifying: !0 }),
                    a.Z.enable({
                        code: r,
                        secret: (0, d.Qe)(t),
                    }).then(this.handleActivateSuccess, (e) =>
                        this.setState({
                            error: e.body.message,
                            isVerifying: !1,
                        }),
                    );
            }),
            g(this, "handleActivateSuccess", () => {
                let { onClose: e, handleEnableMFASuccess: t } = this.props;
                this.setState({ isVerifying: !1 }), t(), null == e || e();
            });
    }
}
let f = x;
