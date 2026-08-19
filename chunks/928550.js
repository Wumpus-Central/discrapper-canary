"use strict";
n.d(t, { L: () => d, d: () => h });
var l = n(17928),
    i = n(627363),
    s = n(651743),
    r = n(134861),
    a = n(760751),
    o = n(189081),
    u = n(340829),
    c = n(144914);
function d(e) {
    return (0, l.yK)(
        [o.A, s.A, u.A, r.A],
        () => [
            null != e &&
                (0, c.A)({
                    LibraryApplicationStore: o.A,
                    LaunchableGameStore: s.A,
                    DispatchApplicationStore: u.A,
                    ConnectedAppsStore: r.A,
                    applicationId: e,
                }),
            null != e && s.A.isLaunchableLoading(e),
        ],
        [e],
    );
}
function h(e) {
    let { data: t } = (0, i.YY)(e),
        n = (0, l.bG)([a.A], () => (null != t ? (a.A.getOfficialGame(t) ?? a.A.getGameByApplication(t)) : null), [t]),
        [s] = d(e),
        [r] = d(n?.id);
    return null != e && s ? e : null != n && r ? n.id : null;
}
