n.d(t, {
    L: () => d,
    d: () => f,
});
var r = n(311907),
    i = n(627363),
    a = n(651743),
    s = n(134861),
    o = n(760751),
    l = n(189081),
    c = n(194871),
    u = n(144914);
function d(e) {
    return (0, r.bG)(
        [l.A, a.A, c.A, s.A],
        () =>
            null != e &&
            (0, u.A)({
                LibraryApplicationStore: l.A,
                LaunchableGameStore: a.A,
                DispatchApplicationStore: c.A,
                ConnectedAppsStore: s.A,
                applicationId: e,
            }),
        [e],
    );
}
function f(e) {
    let { data: t } = (0, i.YY)(e),
        n = (0, r.bG)([o.A], () => {
            var e;
            return null != t ? (null != (e = o.A.getOfficialGame(t)) ? e : o.A.getGameByApplication(t)) : null;
        }, [t]),
        a = d(e),
        s = d(null == n ? void 0 : n.id);
    return null != n && s ? n.id : a && null != e ? e : null;
}
