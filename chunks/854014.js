n.d(t, { Z: () => o });
var l = n(951288),
    i = n(120356),
    r = n.n(i),
    s = n(481060),
    u = n(873395);
function o(e) {
    let { icon: t, title: n, onClick: i, active: o, trailing: a } = e;
    return (0, l.jsxs)(s.P3F, {
        className: r()(u.item, o && u.active),
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: u.itemContent,
                children: [
                    (0, l.jsx)(t, {
                        color: "currentColor",
                        size: "refresh_sm",
                    }),
                    n,
                ],
            }),
            (0, l.jsx)("div", {
                className: u.itemContent,
                children: a,
            }),
        ],
    });
}
