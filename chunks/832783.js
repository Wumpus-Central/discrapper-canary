n.d(t, { Z: () => c });
var i = n(442837),
    r = n(292556),
    l = n(509613),
    o = n(292959),
    a = n(869235),
    s = n(981631),
    u = n(388032);
let c = (0, l.qs)(a.t.DESKTOP_NOTIFICATIONS, {
    useTitle: () => u.intl.string(u.t["/0WClp"]),
    useSubtitle: () => u.intl.string(u.t.wF9ih4),
    useValue: () => (0, i.e7)([o.Z], () => o.Z.getDesktopType()) !== s.qrD.NEVER,
    setValue: (e) => r.default.setDesktopType(e ? s.qrD.ALL : s.qrD.NEVER),
});
