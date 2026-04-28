"use strict";
n.d(t, { L: () => d, d: () => h });
var l = n(17928),
    i = n(627363),
    s = n(651743),
    a = n(134861),
    r = n(760751),
    o = n(189081),
    c = n(340829),
    u = n(144914);
function d(e) {
    return (0, l.bG)(
        [o.A, s.A, c.A, a.A],
        () =>
            null != e &&
            (0, u.A)({
                LibraryApplicationStore: o.A,
                LaunchableGameStore: s.A,
                DispatchApplicationStore: c.A,
                ConnectedAppsStore: a.A,
                applicationId: e,
            }),
        [e],
    );
}
function h(e) {
    let { data: t } = (0, i.YY)(e),
        n = (0, l.bG)([r.A], () => (null != t ? (r.A.getOfficialGame(t) ?? r.A.getGameByApplication(t)) : null), [t]),
        s = d(e),
        a = d(n?.id);
    return null != n && a ? n.id : s ? (e ?? null) : null;
}
