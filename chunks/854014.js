n.d(t, {
    C: () => a,
    Z: () => u,
});
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(873395);
function a(e) {
    let { onClick: t, active: n, children: i } = e;
    return (0, r.jsx)(o.P3F, {
        className: l()(s.item, { [s.active]: n }),
        onClick: t,
        children: i,
    });
}
function u(e) {
    let { icon: t, title: n, onClick: i, active: l, trailing: o } = e;
    return (0, r.jsxs)(a, {
        onClick: i,
        active: l,
        children: [
            (0, r.jsxs)("div", {
                className: s.itemContent,
                children: [
                    (0, r.jsx)(t, {
                        color: "currentColor",
                        size: "refresh_sm",
                    }),
                    n,
                ],
            }),
            (0, r.jsx)("div", {
                className: s.itemContent,
                children: o,
            }),
        ],
    });
}
