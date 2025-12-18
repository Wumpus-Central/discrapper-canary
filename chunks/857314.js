n.d(e, {
    D: () => g,
    N: () => d,
}),
    n(539854);
var i = n(54381),
    l = n(442837),
    s = n(509613),
    u = n(314897),
    r = n(325067),
    a = n(594174),
    o = n(313789),
    T = n(805244),
    S = n(968021),
    c = n(921356),
    E = n(388032);
function d() {
    return (0, l.e7)([a.default], () => {
        let t = a.default.getCurrentUser();
        return null != t && t.mfaEnabled;
    });
}
let g = (0, s.ON)(o.n.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let t = (0, l.e7)([u.default], () => u.default.hasTOTPEnabled()),
            e = [E.intl.string(E.t.m0FidJ), E.intl.string(E.t.xZEzbu)];
        return t ? e.push(E.intl.string(E.t["D+aE7g"])) : e.push(E.intl.string(E.t.cDgKte)), e;
    },
    usePredicate: function () {
        let t = (0, S.Y)(),
            e = (0, c.O)(),
            n = d();
        return !t && !e && n;
    },
    Component: function () {
        let t = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
            e = (0, l.e7)([r.Z], () => r.Z.getBackupCodes()),
            n = (0, l.e7)([u.default], () => u.default.hasTOTPEnabled());
        return null == t
            ? null
            : (0, i.jsx)(T.Z, {
                  backupCodes: e,
                  currentUser: t,
                  hasTOTPEnabled: n,
              });
    },
});
