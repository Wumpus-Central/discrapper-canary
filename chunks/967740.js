l.d(t, { A: () => a });
var n = l(627968);
l(64700);
var i = l(201275),
    s = l(657048),
    r = l(63104);
function a(e) {
    let { guildId: t, role: l, size: a, className: o } = e,
        d = (0, i.$7)({ guildId: t, roleId: l.id, size: a });
    return null != d
        ? (0, n.jsx)(s.A, { className: o, ...d })
        : (0, n.jsx)(r.A, { color: l.colorString, className: o, size: a });
}
