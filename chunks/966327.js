"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(778712),
    a = n(97808),
    o = n(386467);
let l = r.memo(function (e) {
    var t, n;
    let { user: l, guildId: u, size: c = s._3.SIZE_32, animate: d = !1, "aria-hidden": _ = !1, ...f } = e,
        h = r.useContext(o.A);
    return (0, i.jsx)(a.eu, {
        src: ((t = (0, s.FT)(c)), (n = u ?? h), l.getAvatarURL(n, t, d)),
        size: c,
        "aria-label": _ ? void 0 : l.username,
        "aria-hidden": _,
        ...f,
    });
});
