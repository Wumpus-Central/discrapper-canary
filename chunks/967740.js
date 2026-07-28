"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(201275),
    a = n(657048),
    s = n(63104);
function l(e) {
    let { guildId: t, role: n, size: l, className: o } = e,
        d = (0, r.$7)({ guildId: t, roleId: n.id, size: l });
    return null != d
        ? (0, i.jsx)(a.A, { className: o, ...d })
        : (0, i.jsx)(s.A, { color: n.colorString, className: o, size: l });
}
