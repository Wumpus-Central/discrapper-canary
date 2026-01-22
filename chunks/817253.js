n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(638075),
    a = n(763754),
    s = n(888675),
    o = n(985018);
function l(e) {
    let { message: t, usernameHook: l, compact: c } = e,
        u = (0, a.Ay)(t),
        d = l(u),
        f = i.A.getSystemMessageUserJoin(t.id),
        p = o.intl.format(f, {
            username: u.nick,
            usernameHook: d,
        });
    return (0, r.jsx)(s.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: c,
        children: p,
    });
}
