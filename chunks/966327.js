n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    a = n(778712),
    s = n(97808),
    _ = n(386467);
let l = r.memo(function (e) {
    var t, n;
    let { user: l, guildId: o, size: E = a._3.SIZE_32, animate: d = !1, "aria-hidden": c = !1, ...u } = e,
        I = r.useContext(_.A);
    return (0, i.jsx)(s.eu, {
        src: ((t = (0, a.FT)(E)), (n = o ?? I), l.getAvatarURL(n, t, d)),
        size: E,
        "aria-label": c ? void 0 : l.username,
        "aria-hidden": c,
        ...u,
    });
});
