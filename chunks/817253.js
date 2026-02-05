n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(638075),
    a = n(763754),
    r = n(888675),
    s = n(985018);
function o(e) {
    let { message: t, usernameHook: o, compact: d } = e,
        c = (0, a.Ay)(t),
        u = o(c),
        m = l.A.getSystemMessageUserJoin(t.id),
        _ = s.intl.format(m, { username: c.nick, usernameHook: u });
    return (0, i.jsx)(r.A, { icon: n(394803), timestamp: t.timestamp, compact: d, children: _ });
}
