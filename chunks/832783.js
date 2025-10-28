n.d(e, { Z: () => c });
var i = n(442837),
    l = n(292556),
    u = n(509613),
    r = n(292959),
    s = n(313789),
    o = n(981631),
    a = n(388032);
let c = (0, u.qs)(s.n.DESKTOP_NOTIFICATIONS, {
    useTitle: () => a.intl.string(a.t["/0WCll"]),
    useSubtitle: () => a.intl.string(a.t.wF9ih3),
    useValue: () => (0, i.e7)([r.Z], () => r.Z.getDesktopType()) !== o.qrD.NEVER,
    setValue: (t) => l.default.setDesktopType(t ? o.qrD.ALL : o.qrD.NEVER),
});
