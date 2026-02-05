"use strict";
n.d(t, { L: () => d, d: () => _ });
var r = n(311907),
    i = n(627363),
    a = n(651743),
    s = n(134861),
    o = n(760751),
    l = n(189081),
    u = n(194871),
    c = n(144914);
function d(e) {
    return (0, r.bG)(
        [l.A, a.A, u.A, s.A],
        () =>
            null != e &&
            (0, c.A)({
                LibraryApplicationStore: l.A,
                LaunchableGameStore: a.A,
                DispatchApplicationStore: u.A,
                ConnectedAppsStore: s.A,
                applicationId: e,
            }),
        [e],
    );
}
function _(e) {
    let { data: t } = (0, i.YY)(e),
        n = (0, r.bG)([o.A], () => (null != t ? (o.A.getOfficialGame(t) ?? o.A.getGameByApplication(t)) : null), [t]),
        a = d(e),
        s = d(n?.id);
    return null != n && s ? n.id : a ? (e ?? null) : null;
}
