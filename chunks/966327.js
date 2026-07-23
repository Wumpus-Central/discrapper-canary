i.d(a, { A: () => u });
var r = i(627968),
    s = i(64700),
    t = i(778712),
    d = i(97808),
    n = i(386467);
let u = s.memo(function (e) {
    var a, i;
    let { user: u, guildId: c, size: h = t._3.SIZE_32, animate: p = !1, "aria-hidden": o = !1, ...k } = e,
        l = s.useContext(n.A);
    return (0, r.jsx)(d.eu, {
        src: ((a = (0, t.FT)(h)), (i = c ?? l), u.getAvatarURL(i, a, p)),
        size: h,
        "aria-label": o ? void 0 : u.username,
        "aria-hidden": o,
        ...k,
    });
});
