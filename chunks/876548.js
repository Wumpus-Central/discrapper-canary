n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(829750),
    l = n(280102);
function a(e) {
    let { channel: t, video: n, userCount: a } = e,
        { limit: o } = (0, i.Z)(t),
        s = -1,
        c = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && o > 0 && ((c = s < 0 || o < s), (s = s > 0 ? Math.min(s, o) : o)),
        (0, r.jsx)(l.Z, {
            users: a,
            total: s,
            videoLimit: c,
        })
    );
}
