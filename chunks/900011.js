t.d(n, { Z: () => u });
var l = t(54381);
t(473749);
var i = t(666520),
    o = t(785717),
    r = t(104287),
    a = t(693408),
    c = t(228168),
    s = t(388032),
    d = t(699369);
function u(e) {
    let { userId: n } = e,
        t = (0, r.b)(),
        { trackUserProfileAction: u } = (0, o.KZ)();
    return (0, l.jsx)(a.Z, {
        heading: s.intl.string(s.t["mQKv+v"]),
        scrollTargetId: c.Tb.NOTE,
        children: (0, l.jsx)(i.Z, {
            userId: n,
            className: d.note,
            autoFocus: t === c.Tb.NOTE,
            onUpdate: () => u({ action: "SET_NOTE" }),
        }),
    });
}
