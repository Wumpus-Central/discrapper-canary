"use strict";
r.d(t, { A: () => o });
var n = r(627968),
    i = r(64700),
    a = r(778712),
    l = r(97808),
    s = r(386467);
let o = i.memo(function (e) {
    var t, r;
    let { user: o, guildId: c, size: u = a._3.SIZE_32, animate: d = !1, "aria-hidden": _ = !1, ...p } = e,
        f = i.useContext(s.A);
    return (0, n.jsx)(l.eu, {
        src: ((t = (0, a.FT)(u)), (r = c ?? f), o.getAvatarURL(r, t, d)),
        size: u,
        "aria-label": _ ? void 0 : o.username,
        "aria-hidden": _,
        ...p,
    });
});
