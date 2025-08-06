n.d(t, { Z: () => s });
var i = n(255367),
    o = n(120356),
    l = n.n(o),
    a = n(481060),
    r = n(249274);
function s(e) {
    let { icon: t, title: n, onClick: o, active: s } = e;
    return (0, i.jsxs)(a.P3F, {
        className: l()(r.item, s && r.active),
        onClick: o,
        children: [
            (0, i.jsx)(t, {
                color: "currentColor",
                size: "refresh_sm",
            }),
            n,
        ],
    });
}
