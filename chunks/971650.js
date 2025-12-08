n.d(t, { default: () => k }), n(388685);
var r = n(54381),
    s = n(473749),
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    l = n(481060),
    c = n(570140),
    d = n(23645),
    h = n(600164),
    u = n(454585),
    p = n(365007),
    m = n(15980),
    f = n(325067),
    b = n(594174),
    x = n(63063),
    C = n(981631),
    g = n(388032),
    j = n(468412);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let O = (e) => {
    var t,
        n,
        { label: s, text: i, children: o } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        s = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            }
            return s;
        })(e, ["label", "text", "children"]);
    return (0, r.jsxs)(
        h.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        y(e, t, n[t]);
                    });
            }
            return e;
        })({ direction: h.Z.Direction.VERTICAL }, a)),
        (n = n =
            {
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: s,
                    }),
                    null != i
                        ? (0, r.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: j.sectionBody,
                              children: i,
                          })
                        : null,
                    (0, r.jsx)(h.Z.Child, {
                        wrap: !0,
                        children: o,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};
class P extends s.PureComponent {
    renderBackupCodesSection(e) {
        return (0, r.jsx)(O, {
            label: g.intl.string(g.t.qZZUy6),
            text: e,
            children: (0, r.jsx)(d.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => c.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, r.jsx)(l.Button, {
                    variant: "active",
                    size: "sm",
                    text: g.intl.string(g.t.qZZUy6),
                }),
            }),
        });
    }
    renderPasskeyCTASection() {
        return m.Z.hasCredentials
            ? null
            : (0, r.jsxs)(O, {
                  label: g.intl.string(g.t.xMDCHa),
                  text: g.intl.string(g.t.okgGTu),
                  children: [
                      (0, r.jsx)(l.Text, {
                          variant: "text-md/normal",
                          className: j.sectionBody,
                          children: g.intl.format(g.t.OeGXVv, {
                              learnMoreLink: x.Z.getArticleURL(C.BhN.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, r.jsx)(l.Button, {
                          variant: "active",
                          size: "sm",
                          text: g.intl.string(g.t.NIFmCJ),
                          onClick: this.handleAddPasskey,
                      }),
                  ],
              });
    }
    renderHeader(e, t) {
        return (0, r.jsxs)(l.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)(h.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            className: j.header,
                            children: u.Z.parse(e),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            className: j.subHeader,
                            children: t,
                        }),
                    ],
                }),
                (0, r.jsx)(h.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(l.olH, { onClick: this.handleCloseModal }),
                }),
            ],
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, r.jsx)(l.SR, {
            dismissable: !0,
            header: g.intl.string(g.t.mwVXnI),
            confirmText: g.intl.string(g.t.MwSEoz),
            cancelText: g.intl.string(g.t["ETE/oC"]),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                c.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), t();
            },
            children: (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: e,
            }),
        });
    }
    render() {
        let { isTotp: e } = this.props;
        return e ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.Y0X, {
            transitionState: e,
            className: j.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(g.intl.string(g.t["681MPV"]), g.intl.format(g.t["/Nhi8R"], {})),
                (0, r.jsxs)(l.hzk, {
                    className: j.modalInner,
                    children: [
                        this.renderPasskeyCTASection(),
                        (0, r.jsx)(l.izJ, { className: j.divider }),
                        this.renderBackupCodesSection(g.intl.format(g.t.M0Dogh, {})),
                    ],
                }),
                t && this.renderConfirmModal(g.intl.string(g.t.WJFPHJ)),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.Y0X, {
            transitionState: e,
            className: j.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(g.intl.string(g.t.x6ielD), g.intl.format(g.t["/Nhi8R"], {})),
                (0, r.jsx)(l.hzk, {
                    className: j.modalInner,
                    children: this.renderBackupCodesSection(g.intl.format(g.t.p59QLQ, {})),
                }),
                t && this.renderConfirmModal(g.intl.string(g.t.aoNIXB)),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "state", { showConfirmModal: !1 }),
            y(this, "handleCloseModal", () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? e() : this.setState({ showConfirmModal: !0 });
            }),
            y(this, "handleAddPasskey", () => {
                this.props.onClose(), p.ef();
            }),
            y(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(t ? "(".concat(g.intl.string(g.t["ycME+9"]), ")") : "");
                        })
                        .join("\r\n"),
                    t = g.intl.formatToPlainString(g.t["uYWwh/"], { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            });
    }
}
let k = a.ZP.connectStores([b.default, f.Z], () => {
    let e = b.default.getCurrentUser();
    return (
        o()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
        {
            currentUser: e,
            backupCodes: f.Z.getBackupCodes(),
            hasSeenBackupPrompt: f.Z.hasSeenBackupPrompt,
        }
    );
})(P);
