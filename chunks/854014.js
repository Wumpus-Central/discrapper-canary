n.d(t, { Z: () => r });
var i = n(255367),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    a = n(422833);
function r(e) {
    let { icon: t, title: n, onClick: l, active: r } = e;
    return (0, i.jsxs)(o.P3F, {
        className: s()(a.item, r && a.active),
        onClick: l,
        children: [
            (0, i.jsx)(t, {
                color: "currentColor",
                size: "refresh_sm",
            }),
            n,
        ],
    });
}
