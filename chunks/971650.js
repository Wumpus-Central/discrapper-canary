n.d(e, { default: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(512722),
    s = n.n(o),
    l = n(775086),
    a = n(442837),
    c = n(248514),
    d = n(481060),
    u = n(570140),
    p = n(23645),
    h = n(365007),
    b = n(15980),
    f = n(325067),
    m = n(594174),
    y = n(63063),
    g = n(981631),
    O = n(388032),
    j = n(671146);
function C(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
let x = (t) => {
    var e,
        n,
        { label: i, text: o, children: s } = t,
        l = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
            }
            return i;
        })(t, ["label", "text", "children"]);
    return (0, r.jsxs)(
        "div",
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        }),
                    )),
                    r.forEach(function (e) {
                        C(t, e, n[e]);
                    });
            }
            return t;
        })({ className: j.modalSection }, l)),
        (n = n =
            {
                children: [
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        children: i,
                    }),
                    null != o
                        ? (0, r.jsx)(d.Text, {
                              variant: "text-md/normal",
                              className: j.sectionBody,
                              children: o,
                          })
                        : null,
                    (0, r.jsx)("div", { children: s }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e),
    );
};
class P extends i.PureComponent {
    renderBackupCodesSection(t) {
        return (0, r.jsx)(x, {
            label: O.intl.string(O.t.qZZUy6),
            text: t,
            children: (0, r.jsx)(p.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => u.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, r.jsx)(d.Button, {
                    variant: "active",
                    size: "sm",
                    text: O.intl.string(O.t.qZZUy6),
                }),
            }),
        });
    }
    renderPasskeyCTASection() {
        return b.Z.hasCredentials
            ? null
            : (0, r.jsxs)(x, {
                  label: O.intl.string(O.t.xMDCHa),
                  text: O.intl.string(O.t.okgGTu),
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: j.sectionBody,
                          children: O.intl.format(O.t.OeGXVv, {
                              learnMoreLink: y.Z.getArticleURL(g.BhN.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, r.jsx)(d.Button, {
                          variant: "active",
                          size: "sm",
                          text: O.intl.string(O.t.NIFmCJ),
                          onClick: this.handleAddPasskey,
                      }),
                  ],
              });
    }
    render() {
        let { isTotp: t } = this.props;
        return t ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: t } = this.props;
        return (0, r.jsxs)(l.Modal, {
            onClose: () => this.handleCloseModal(O.intl.string(O.t.WJFPHJ)),
            transitionState: t,
            title: O.intl.string(O.t.Awk3Gw),
            subtitle: O.intl.format(O.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, r.jsx)(d.izJ, { className: j.divider }),
                this.renderBackupCodesSection(O.intl.format(O.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, r.jsx)(l.Modal, {
            onClose: () => this.handleCloseModal(O.intl.string(O.t.aoNIXB)),
            transitionState: t,
            title: O.intl.string(O.t["7wPZln"]),
            subtitle: O.intl.format(O.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(O.intl.format(O.t.p59QLQ, {})),
        });
    }
    constructor(...t) {
        super(...t),
            C(this, "handleCloseModal", async (t) => {
                let { onClose: e, hasSeenBackupPrompt: n } = this.props;
                n
                    ? await e()
                    : await (0, c.Z)({
                          title: O.intl.string(O.t.mwVXnI),
                          confirmText: O.intl.string(O.t.MwSEoz),
                          cancelText: O.intl.string(O.t["ETE/oC"]),
                          onConfirm: () => {
                              u.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), e();
                          },
                          children: t,
                      });
            }),
            C(this, "handleAddPasskey", () => {
                this.props.onClose(), h.ef();
            }),
            C(this, "getDownloadFileContents", () => {
                let t = this.props.backupCodes
                        .map((t) => {
                            let { consumed: e, code: n } = t;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(e ? "(".concat(O.intl.string(O.t["ycME+9"]), ")") : "");
                        })
                        .join("\r\n"),
                    e = O.intl.formatToPlainString(O.t["uYWwh/"], { email: this.props.currentUser.email });
                return "".concat(e, "\r\n\r\n").concat(t);
            });
    }
}
let S = a.ZP.connectStores([m.default, f.Z], () => {
    let t = m.default.getCurrentUser();
    return (
        s()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        {
            currentUser: t,
            backupCodes: f.Z.getBackupCodes(),
            hasSeenBackupPrompt: f.Z.hasSeenBackupPrompt,
        }
    );
})(P);
