a.d(t, { A: () => o });
var r = a(627968),
    n = a(64700),
    l = a(778712),
    i = a(97808),
    s = a(386467);
let o = n.memo(function (e) {
    var t, a;
    let { user: o, guildId: c, size: d = l._3.SIZE_32, animate: u = !1, "aria-hidden": h = !1, ...p } = e,
        m = n.useContext(s.A);
    return (0, r.jsx)(i.eu, {
        src: ((t = (0, l.FT)(d)), (a = c ?? m), o.getAvatarURL(a, t, u)),
        size: d,
        "aria-label": h ? void 0 : o.username,
        "aria-hidden": h,
        ...p,
    });
});
