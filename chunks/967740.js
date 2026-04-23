n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var r = n(201275),
    a = n(657048),
    l = n(87e3);
function s(e) {
    let { guildId: t, role: n, size: s, className: o } = e,
        d = (0, r.$7)({ guildId: t, roleId: n.id, size: s });
    return null != d
        ? (0, i.jsx)(a.A, { className: o, ...d })
        : (0, i.jsx)(l.A, { color: n.colorString, className: o, size: s });
}
