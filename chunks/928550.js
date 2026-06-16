"use strict";
n.d(t, { L: () => d, d: () => _ });
var i = n(17928),
    r = n(627363),
    s = n(651743),
    a = n(134861),
    o = n(760751),
    l = n(189081),
    u = n(340829),
    c = n(144914);
function d(e) {
    return (0, i.yK)(
        [l.A, s.A, u.A, a.A],
        () => [
            null != e &&
                (0, c.A)({
                    LibraryApplicationStore: l.A,
                    LaunchableGameStore: s.A,
                    DispatchApplicationStore: u.A,
                    ConnectedAppsStore: a.A,
                    applicationId: e,
                }),
            null != e && s.A.isLaunchableLoading(e),
        ],
        [e],
    );
}
function _(e) {
    let { data: t } = (0, r.YY)(e),
        n = (0, i.bG)([o.A], () => (null != t ? (o.A.getOfficialGame(t) ?? o.A.getGameByApplication(t)) : null), [t]),
        [s] = d(e),
        [a] = d(n?.id);
    return null != e && s ? e : null != n && a ? n.id : null;
}
