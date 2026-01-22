n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var l = n(405018),
    i = n(697415);

function a(e) {
    let { channel: t, video: n, userCount: a } = e,
        { limit: s } = (0, l.A)(t),
        o = -1,
        c = !1;
    return (
        t.userLimit > 0 && (o = t.userLimit),
        n && s > 0 && ((c = o < 0 || s < o), (o = o > 0 ? Math.min(o, s) : s)),
        (0, r.jsx)(i.A, {
            users: a,
            total: o,
            videoLimit: c,
        })
    );
}
