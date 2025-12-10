n.d(e, { r: () => c });
var i = n(442837),
    l = n(292556),
    s = n(509613),
    u = n(292959),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let c = (0, s.qs)(r.n.DESKTOP_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t["/0WCll"]),
    useSubtitle: () => o.intl.string(o.t.wF9ih3),
    useValue: () => (0, i.e7)([u.Z], () => u.Z.getDesktopType()) !== a.qrD.NEVER,
    setValue: (t) => l.default.setDesktopType(t ? a.qrD.ALL : a.qrD.NEVER),
});
