n.d(t, { A: () => o });
var a = n(627968),
    r = n(64700),
    l = n(778712),
    i = n(97808),
    s = n(386467);
let o = r.memo(function (e) {
    var t, n;
    let { user: o, guildId: u, size: c = l._3.SIZE_32, animate: d = !1, "aria-hidden": m = !1, ...p } = e,
        _ = r.useContext(s.A);
    return (0, a.jsx)(i.eu, {
        src: ((t = (0, l.FT)(c)), (n = u ?? _), o.getAvatarURL(n, t, d)),
        size: c,
        "aria-label": m ? void 0 : o.username,
        "aria-hidden": m,
        ...p,
    });
});
