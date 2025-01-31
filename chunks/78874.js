t.d(i, { Z: () => I });
var l = t(200651);
t(192379);
var a = t(442837),
    e = t(481060),
    r = t(594190),
    d = t(757266),
    c = t(283595),
    s = t(417363),
    o = t(804739),
    u = t(346329),
    h = t(592745),
    b = t(388032);
function I(n, i) {
    let t = (0, a.e7)([r.ZP], () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        I = (0, a.e7)(
            [c.Z, h.Z, s.Z, d.Z],
            () =>
                (0, o.t)({
                    LibraryApplicationStore: c.Z,
                    LaunchableGameStore: h.Z,
                    DispatchApplicationStore: s.Z,
                    ConnectedAppsStore: d.Z,
                    applicationId: n.id,
                    branchId: n.branchId
                }),
            [n.branchId, n.id]
        );
    return t || !I
        ? null
        : (0, l.jsx)(e.sNh, {
              id: 'launch',
              label: b.intl.string(b.t.XKUw8v),
              action: () => u.playApplication(n.id, n, { analyticsParams: { location: i } })
          });
}
