n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(829750),
    l = n(280102);
function o(e) {
    let { channel: t, video: n, userCount: o } = e,
        { limit: a } = (0, i.Z)(t),
        s = -1,
        c = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && a > 0 && ((c = s < 0 || a < s), (s = s > 0 ? Math.min(s, a) : a)),
        (0, r.jsx)(l.Z, {
            users: o,
            total: s,
            videoLimit: c
        })
    );
}
