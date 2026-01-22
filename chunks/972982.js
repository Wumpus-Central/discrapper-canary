n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(195043),
    u = n(359990),
    d = n(961350),
    f = n(670492),
    p = n(287809),
    _ = n(464477),
    h = n(709913),
    m = n(455611),
    g = n(858526),
    E = n(309198),
    b = n(978551),
    y = n(100817),
    O = n(531525);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
class S extends i.PureComponent {
    renderEnabled() {
        let { backupCodes: e, hasTOTPEnabled: t, currentUser: n, togglingSMS: i } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    backupCodes: e,
                    currentUser: n,
                    hasTOTPEnabled: t,
                }),
                e.length > 0 &&
                    (0, r.jsxs)(l.BJc, {
                        gap: 16,
                        children: [(0, r.jsx)(m.A, { backupCodes: e }), (0, r.jsx)(l.cGx, {})],
                    }),
                t &&
                    (0, r.jsx)(c.x, {
                        setting: O.H.ACCOUNT_SMS_BACKUP,
                        children: (0, r.jsx)(E.A, {
                            currentUser: n,
                            togglingSMS: i,
                        }),
                    }),
                (0, r.jsx)(c.x, {
                    setting: O.H.ACCOUNT_SECURITY_KEYS,
                    children: (0, r.jsx)(u.A, {}),
                }),
            ],
        });
    }
    renderDisabled() {
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(u.A, {})],
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return _.K7
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, r.jsx)(y.A, {})
            : (0, r.jsx)(b.A, {});
    }
}
function I(e) {
    let t = (0, o.bG)([p.default], () => p.default.getCurrentUser());
    s()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, o.cf)([f.A, d.default], () => ({
        togglingSMS: f.A.togglingSMS,
        hasTOTPEnabled: d.default.hasTOTPEnabled(),
    }));
    return (0, r.jsx)(S, v({ currentUser: t }, n, e));
}
