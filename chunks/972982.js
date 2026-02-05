n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(311907),
    o = n(397927),
    c = n(195043),
    d = n(359990),
    u = n(961350),
    _ = n(670492),
    m = n(287809),
    A = n(464477),
    g = n(709913),
    E = n(455611),
    h = n(858526),
    p = n(309198),
    C = n(978551),
    x = n(100817),
    T = n(531525);
class I extends s.PureComponent {
    renderEnabled() {
        let { backupCodes: e, hasTOTPEnabled: t, currentUser: n, togglingSMS: s } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.A, { backupCodes: e, currentUser: n, hasTOTPEnabled: t }),
                e.length > 0 &&
                    (0, i.jsxs)(o.BJc, {
                        gap: 16,
                        children: [(0, i.jsx)(E.A, { backupCodes: e }), (0, i.jsx)(o.cGx, {})],
                    }),
                t &&
                    (0, i.jsx)(c.x, {
                        setting: T.H.ACCOUNT_SMS_BACKUP,
                        children: (0, i.jsx)(p.A, { currentUser: n, togglingSMS: s }),
                    }),
                (0, i.jsx)(c.x, { setting: T.H.ACCOUNT_SECURITY_KEYS, children: (0, i.jsx)(d.A, {}) }),
            ],
        });
    }
    renderDisabled() {
        return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(h.A, {}), (0, i.jsx)(d.A, {})] });
    }
    render() {
        let { currentUser: e } = this.props;
        return A.K7
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, i.jsx)(x.A, {})
            : (0, i.jsx)(C.A, {});
    }
}
function S(e) {
    let t = (0, l.bG)([m.default], () => m.default.getCurrentUser());
    a()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, l.cf)([_.A, u.default], () => ({
        togglingSMS: _.A.togglingSMS,
        hasTOTPEnabled: u.default.hasTOTPEnabled(),
    }));
    return (0, i.jsx)(I, { currentUser: t, ...n, ...e });
}
