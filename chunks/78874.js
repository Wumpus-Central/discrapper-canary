n.d(e, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(594190),
    c = n(757266),
    o = n(283595),
    u = n(417363),
    s = n(804739),
    d = n(346329),
    b = n(592745),
    f = n(388032);
function p(t, e) {
    let n = (0, i.e7)([a.ZP], () => a.ZP.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        p = (0, i.e7)(
            [o.Z, b.Z, u.Z, c.Z],
            () =>
                (0, s.t)({
                    LibraryApplicationStore: o.Z,
                    LaunchableGameStore: b.Z,
                    DispatchApplicationStore: u.Z,
                    ConnectedAppsStore: c.Z,
                    applicationId: t.id,
                    branchId: t.branchId,
                }),
            [t.branchId, t.id],
        );
    return n || !p
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "launch",
              label: f.intl.string(f.t.XKUw8m),
              action: () => d.playApplication(t.id, t, { analyticsParams: { location: e } }),
          });
}
