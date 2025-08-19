n.d(t, { Z: () => a });
var i = n(951288),
    l = n(120356),
    r = n.n(l),
    o = n(481060),
    s = n(873395);
function a(e) {
    let { icon: t, title: n, onClick: l, active: a } = e;
    return (0, i.jsxs)(o.P3F, {
        className: r()(s.item, a && s.active),
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
