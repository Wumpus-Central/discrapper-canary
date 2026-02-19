"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(405018),
    l = n(697415);
function r(e) {
    let { channel: t, video: n, userCount: r } = e,
        { limit: a } = (0, s.A)(t),
        o = -1,
        c = !1;
    return (
        t.userLimit > 0 && (o = t.userLimit),
        n && a > 0 && ((c = o < 0 || a < o), (o = o > 0 ? Math.min(o, a) : a)),
        (0, i.jsx)(l.A, { users: r, total: o, videoLimit: c })
    );
}
