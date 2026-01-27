n.d(t, {
    A: () => C,
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(195043),
    d = n(359990),
    u = n(961350),
    _ = n(670492),
    p = n(287809),
    m = n(464477),
    g = n(709913),
    A = n(455611),
    f = n(858526),
    h = n(309198),
    b = n(978551),
    E = n(100817),
    x = n(531525);
class O extends i.PureComponent {
    renderEnabled() {
        let { backupCodes: e, hasTOTPEnabled: t, currentUser: n, togglingSMS: i } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.A, {
                    backupCodes: e,
                    currentUser: n,
                    hasTOTPEnabled: t,
                }),
                e.length > 0 &&
                    (0, r.jsxs)(o.BJc, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(A.A, {
                                backupCodes: e,
                            }),
                            (0, r.jsx)(o.cGx, {}),
                        ],
                    }),
                t &&
                    (0, r.jsx)(c.x, {
                        setting: x.H.ACCOUNT_SMS_BACKUP,
                        children: (0, r.jsx)(h.A, {
                            currentUser: n,
                            togglingSMS: i,
                        }),
                    }),
                (0, r.jsx)(c.x, {
                    setting: x.H.ACCOUNT_SECURITY_KEYS,
                    children: (0, r.jsx)(d.A, {}),
                }),
            ],
        });
    }
    renderDisabled() {
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(f.A, {}), (0, r.jsx)(d.A, {})],
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return m.K7
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, r.jsx)(E.A, {})
            : (0, r.jsx)(b.A, {});
    }
}

function C(e) {
    let t = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    s()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, a.cf)([_.A, u.default], () => ({
        togglingSMS: _.A.togglingSMS,
        hasTOTPEnabled: u.default.hasTOTPEnabled(),
    }));
    return (0, r.jsx)(
        O,
        (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                currentUser: t,
            },
            n,
            e,
        ),
    );
}
