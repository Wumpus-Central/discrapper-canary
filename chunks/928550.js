"use strict";
n.d(t, { L_: () => d, au: () => f, dB: () => m });
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
function h(e, t) {
    let [n] = d(e),
        [l] = d(t?.id);
    return null != e && n ? e : null != t && l ? t.id : null;
}
function m(e) {
    let { data: t } = (0, i.YY)(e);
    return h(
        e,
        (0, l.bG)([a.A], () => (null != t ? (a.A.getOfficialGame(t) ?? a.A.getGameByApplication(t)) : null), [t]),
    );
}
function f(e) {
    let { data: t } = (0, i.YY)(e);
    return h(
        e,
        (0, l.bG)([a.A], () => (null != t ? a.A.getOfficialGame(t) : null), [t]),
    );
}
