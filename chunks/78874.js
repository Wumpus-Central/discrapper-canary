n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(594190),
    c = n(757266),
    o = n(283595),
    u = n(417363),
    s = n(804739),
    d = n(346329),
    b = n(592745),
    p = n(388032);
function f(e, t) {
    let n = (0, i.e7)([a.ZP], () => a.ZP.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
        f = (0, i.e7)(
            [o.Z, b.Z, u.Z, c.Z],
            () =>
                (0, s.t)({
                    LibraryApplicationStore: o.Z,
                    LaunchableGameStore: b.Z,
                    DispatchApplicationStore: u.Z,
                    ConnectedAppsStore: c.Z,
                    applicationId: e.id,
                    branchId: e.branchId
                }),
            [e.branchId, e.id]
        );
    return n || !f
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'launch',
              label: p.NW.string(p.t.XKUw8v),
              action: () => d.playApplication(e.id, e, { analyticsParams: { location: t } })
          });
}
