i.d(e, { g: () => E });
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(670492),
    u = i(780964),
    a = i(455611),
    o = i(548018),
    T = i(32096),
    A = i(545214),
    S = i(985018);
let E = (0, s.E2)(u.X.ACCOUNT_BACKUP_CODES_SETTING, {
    useSearchTerms: () => [S.intl.string(S.t.m0FidJ), S.intl.string(S.t.xZEzbu)],
    usePredicate: function () {
        let t = (0, T.b)(),
            e = (0, A.A)(),
            i = (0, o.f)(),
            n = (0, l.bG)([r.A], () => r.A.getBackupCodes().length > 0);
        return !t && !e && i && n;
    },
    Component: function () {
        let t = (0, l.bG)([r.A], () => r.A.getBackupCodes());
        return (0, n.jsx)(a.A, { backupCodes: t });
    },
});
