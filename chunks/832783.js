n.d(e, { Z: () => c });
var i = n(442837),
    l = n(292556),
    s = n(509613),
    r = n(292959),
    u = n(313789),
    a = n(981631),
    o = n(388032);
let c = (0, s.qs)(u.n.DESKTOP_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t["/0WCll"]),
    useSubtitle: () => o.intl.string(o.t.wF9ih3),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getDesktopType()) !== a.qrD.NEVER,
    setValue: (t) => l.default.setDesktopType(t ? a.qrD.ALL : a.qrD.NEVER),
});
