"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    a = n(778712),
    l = n(97808),
    s = n(386467);
let o = i.memo(function (e) {
    var t, n;
    let { user: o, guildId: c, size: u = a._3.SIZE_32, animate: d = !1, "aria-hidden": _ = !1, ...p } = e,
        f = i.useContext(s.A);
    return (0, r.jsx)(l.eu, {
        src: ((t = (0, a.FT)(u)), (n = c ?? f), o.getAvatarURL(n, t, d)),
        size: u,
        "aria-label": _ ? void 0 : o.username,
        "aria-hidden": _,
        ...p,
    });
});
