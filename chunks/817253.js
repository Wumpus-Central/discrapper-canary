"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(638075),
    l = n(763754),
    s = n(888675),
    a = n(985018);
function o(e) {
    let { message: t, usernameHook: o, compact: c } = e,
        u = (0, l.Ay)(t),
        d = o(u),
        _ = r.A.getSystemMessageUserJoin(t.id),
        E = a.intl.format(_, { username: u.nick, usernameHook: d });
    return (0, i.jsx)(s.A, { icon: n(617184), timestamp: t.timestamp, compact: c, children: E });
}
