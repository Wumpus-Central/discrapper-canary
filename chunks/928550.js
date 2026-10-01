l.d(t, { L_: () => o, au: () => f, dB: () => s });
var a = l(17928),
    e = l(627363),
    i = l(651743),
    u = l(134861),
    A = l(760751),
    c = l(189081),
    r = l(340829),
    p = l(144914);
function o(n) {
    return (0, a.yK)(
        [c.A, i.A, r.A, u.A],
        () => [
            null != n &&
                (0, p.A)({
                    LibraryApplicationStore: c.A,
                    LaunchableGameStore: i.A,
                    DispatchApplicationStore: r.A,
                    ConnectedAppsStore: u.A,
                    applicationId: n,
                }),
            null != n && i.A.isLaunchableLoading(n),
        ],
        [n],
    );
}
function d(n, t) {
    let [l] = o(n),
        [a] = o(t?.id);
    return null != n && l ? n : null != t && a ? t.id : null;
}
function s(n) {
    let { data: t } = (0, e.YY)(n);
    return d(
        n,
        (0, a.bG)([A.A], () => (null != t ? (A.A.getOfficialGame(t) ?? A.A.getGameByApplication(t)) : null), [t]),
    );
}
function f(n) {
    let { data: t } = (0, e.YY)(n);
    return d(
        n,
        (0, a.bG)([A.A], () => (null != t ? A.A.getOfficialGame(t) : null), [t]),
    );
}
