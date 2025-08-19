n.d(t, { Z: () => a });
var i = n(951288),
    l = n(120356),
    o = n.n(l),
    r = n(481060),
    s = n(873395);
function a(e) {
    let { icon: t, title: n, onClick: l, active: a } = e;
    return (0, i.jsxs)(r.P3F, {
        className: o()(s.item, a && s.active),
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
