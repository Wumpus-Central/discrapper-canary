"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(386467);
function o(e, t, n, r) {
    return e.getAvatarURL(r, t, n);
}
let l = i.memo(function (e) {
    let { user: t, guildId: n, size: l = a._3J.SIZE_32, animate: u = !1, "aria-hidden": c = !1, ...d } = e,
        _ = i.useContext(s.A);
    return (0, r.jsx)(a.euF, {
        src: o(t, (0, a.FT9)(l), u, n ?? _),
        size: l,
        "aria-label": c ? void 0 : t.username,
        "aria-hidden": c,
        ...d,
    });
});
