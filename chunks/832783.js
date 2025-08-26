n.d(t, { Z: () => c });
var l = n(442837),
    i = n(292556),
    r = n(509613),
    s = n(292959),
    a = n(869235),
    o = n(981631),
    u = n(388032);
let c = (0, r.qs)(a.t.DESKTOP_NOTIFICATIONS, {
    useTitle: () => u.intl.string(u.t["/0WClp"]),
    useSubtitle: () => u.intl.string(u.t.wF9ih4),
    useValue: () => (0, l.e7)([s.Z], () => s.Z.getDesktopType()) !== o.qrD.NEVER,
    setValue: (e) => i.default.setDesktopType(e ? o.qrD.ALL : o.qrD.NEVER),
});
