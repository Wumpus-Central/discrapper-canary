"use strict";
n.d(t, { L: () => u, d: () => c });
var i = n(17928),
    r = n(627363),
    s = n(651743),
    a = n(134861),
    o = n(760751),
    l = n(189081),
    d = n(340829),
    _ = n(144914);
function u(e) {
    return (0, i.bG)(
        [l.A, s.A, d.A, a.A],
        () =>
            null != e &&
            (0, _.A)({
                LibraryApplicationStore: l.A,
                LaunchableGameStore: s.A,
                DispatchApplicationStore: d.A,
                ConnectedAppsStore: a.A,
                applicationId: e,
            }),
        [e],
    );
}
function c(e) {
    let { data: t } = (0, r.YY)(e),
        n = (0, i.bG)([o.A], () => (null != t ? (o.A.getOfficialGame(t) ?? o.A.getGameByApplication(t)) : null), [t]),
        s = u(e),
        a = u(n?.id);
    return null != n && a ? n.id : s ? (e ?? null) : null;
}
