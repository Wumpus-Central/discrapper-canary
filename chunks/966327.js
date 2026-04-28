"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    a = n(64700),
    i = n(778712),
    l = n(97808),
    s = n(386467);
let o = a.memo(function (e) {
    var t, n;
    let { user: o, guildId: c, size: d = i._3.SIZE_32, animate: u = !1, "aria-hidden": _ = !1, ...p } = e,
        f = a.useContext(s.A);
    return (0, r.jsx)(l.eu, {
        src: ((t = (0, i.FT)(d)), (n = c ?? f), o.getAvatarURL(n, t, u)),
        size: d,
        "aria-label": _ ? void 0 : o.username,
        "aria-hidden": _,
        ...p,
    });
});
