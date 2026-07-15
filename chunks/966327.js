"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(778712),
    s = n(97808),
    l = n(386467);
let o = r.memo(function (e) {
    var t, n;
    let { user: o, guildId: d, size: c = a._3.SIZE_32, animate: u = !1, "aria-hidden": _ = !1, ...E } = e,
        A = r.useContext(l.A);
    return (0, i.jsx)(s.eu, {
        src: ((t = (0, a.FT)(c)), (n = d ?? A), o.getAvatarURL(n, t, u)),
        size: c,
        "aria-label": _ ? void 0 : o.username,
        "aria-hidden": _,
        ...E,
    });
});
