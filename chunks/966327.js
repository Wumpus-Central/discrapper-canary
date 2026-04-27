"use strict";
r.d(t, { A: () => o });
var n = r(627968),
    i = r(64700),
    a = r(778712),
    s = r(97808),
    l = r(386467);
let o = i.memo(function (e) {
    var t, r;
    let { user: o, guildId: c, size: d = a._3.SIZE_32, animate: u = !1, "aria-hidden": _ = !1, ...p } = e,
        f = i.useContext(l.A);
    return (0, n.jsx)(s.eu, {
        src: ((t = (0, a.FT)(d)), (r = c ?? f), o.getAvatarURL(r, t, u)),
        size: d,
        "aria-label": _ ? void 0 : o.username,
        "aria-hidden": _,
        ...p,
    });
});
