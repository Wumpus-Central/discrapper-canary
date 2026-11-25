var l = n(855986),
    i = n(627363),
    a = n(651743),
    r = n(134861),
    s = n(760751),
    o = n(189081),
    u = n(659096),
    c = n(144914);
function d(e) {
    return (0, l.yK)(
        [o.A, a.A, u.A, r.A],
        () => [
            null != e &&
                (0, c.A)({
                    LibraryApplicationStore: o.A,
                    LaunchableGameStore: a.A,
                    DispatchApplicationStore: u.A,
                    ConnectedAppsStore: r.A,
                    applicationId: e,
                }),
            null != e && a.A.isLaunchableLoading(e),
        ],
        [e],
    );
}
function m(e, t) {
    let [n] = d(e),
        [l] = d(t?.id);
    return null != e && n ? e : null != t && l ? t.id : null;
}
n.d(
    t,
    {},
    {
        L_: d,
        au: function (e) {
            let { data: t } = (0, i.YY)(e);
            return m(
                e,
                (0, l.bG)([s.A], () => (null != t ? s.A.getOfficialGame(t) : null), [t]),
            );
        },
        dB: function (e) {
            let { data: t } = (0, i.YY)(e);
            return m(
                e,
                (0, l.bG)([s.A], () => (null != t ? (s.A.getOfficialGame(t) ?? s.A.getGameByApplication(t)) : null), [
                    t,
                ]),
            );
        },
    },
);
