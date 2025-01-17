n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(829750),
    r = n(280102);
function a(e) {
    let { channel: t, video: n, userCount: a } = e,
        { limit: o } = (0, l.Z)(t),
        s = -1,
        c = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && o > 0 && ((c = s < 0 || o < s), (s = s > 0 ? Math.min(s, o) : o)),
        (0, i.jsx)(r.Z, {
            users: a,
            total: s,
            videoLimit: c
        })
    );
}
