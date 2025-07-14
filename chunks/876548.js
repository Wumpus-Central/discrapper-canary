n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(829750),
    l = n(280102);
function o(e) {
    let { channel: t, video: n, userCount: o } = e,
        { limit: s } = (0, i.Z)(t),
        a = -1,
        c = !1;
    return (
        t.userLimit > 0 && (a = t.userLimit),
        n && s > 0 && ((c = a < 0 || s < a), (a = a > 0 ? Math.min(a, s) : s)),
        (0, r.jsx)(l.Z, {
            users: o,
            total: a,
            videoLimit: c
        })
    );
}
