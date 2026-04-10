"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(638075),
    s = n(763754),
    l = n(888675),
    a = n(985018);
function c(e) {
    let { message: t, usernameHook: c, compact: o } = e,
        u = (0, s.Ay)(t),
        d = c(u),
        _ = r.A.getSystemMessageUserJoin(t.id),
        E = a.intl.format(_, { username: u.nick, usernameHook: d });
    return (0, i.jsx)(l.A, { icon: n(617184), timestamp: t.timestamp, compact: o, children: E });
}
