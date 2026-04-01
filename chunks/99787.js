"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(790225),
    s = n(489748),
    a = n(816758),
    o = n(178090),
    l = n(346640),
    u = n(429311),
    c = n(985018),
    d = n(595898),
    _ = n(748009);
function f(e) {
    let { achievementId: t, achievementProgress: n } = e,
        f = l.l8[t],
        p = (0, i.lO)(f, n),
        h = (0, i.Ou)(f, n);
    return (0, r.jsxs)(a.A, {
        className: d.o,
        children: [
            (0, r.jsx)("img", { className: d.d, src: _.A, alt: c.intl.string(u.default.bOc6lJ) }),
            (0, r.jsx)(o.A, { variant: "heading-xxl/normal", children: p }),
            null != h && h > 0 ? (0, r.jsx)(s.A, { level: h, color: "white" }) : null,
        ],
    });
}
