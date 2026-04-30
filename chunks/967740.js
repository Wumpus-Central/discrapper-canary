"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(201275),
    s = n(657048),
    a = n(87e3);
function o(e) {
    let { guildId: t, role: n, size: o, className: l } = e,
        u = (0, r.$7)({ guildId: t, roleId: n.id, size: o });
    return null != u
        ? (0, i.jsx)(s.A, { className: l, ...u })
        : (0, i.jsx)(a.A, { color: n.colorString, className: l, size: o });
}
