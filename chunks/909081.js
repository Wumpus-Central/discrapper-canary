i.d(e, { T: () => _ });
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(961350),
    u = i(670492),
    a = i(287809),
    o = i(780964),
    T = i(309198),
    A = i(548018),
    S = i(32096),
    E = i(545214),
    d = i(985018);
let _ = (0, s.E2)(o.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [d.intl.string(d.t.uHAJ5v)],
    usePredicate: function () {
        let t = (0, S.b)(),
            e = (0, E.A)(),
            i = (0, A.f)(),
            n = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
        return !t && !e && i && n;
    },
    Component: function () {
        let t = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
            e = (0, l.bG)([u.A], () => u.A.togglingSMS);
        return null == t
            ? null
            : (0, n.jsx)(T.A, {
                  currentUser: t,
                  togglingSMS: e,
              });
    },
});
