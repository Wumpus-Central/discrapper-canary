n.d(t, { Z: () => s });
var i = n(255367),
    o = n(120356),
    l = n.n(o),
    r = n(481060),
    a = n(249274);
function s(e) {
    let { icon: t, title: n, onClick: o, active: s } = e;
    return (0, i.jsxs)(r.P3F, {
        className: l()(a.item, s && a.active),
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
