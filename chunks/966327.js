"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    s = n(778712),
    a = n(97808),
    o = n(386467);
let l = i.memo(function (e) {
    var t, n;
    let { user: l, guildId: u, size: c = s._3.SIZE_32, animate: d = !1, "aria-hidden": _ = !1, ...f } = e,
        p = i.useContext(o.A);
    return (0, r.jsx)(a.eu, {
        src: ((t = (0, s.FT)(c)), (n = u ?? p), l.getAvatarURL(n, t, d)),
        size: c,
        "aria-label": _ ? void 0 : l.username,
        "aria-hidden": _,
        ...f,
    });
});
