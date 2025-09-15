n.d(t, {
    C: () => s,
    Z: () => u,
});
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(873395);
function s(e) {
    let { onClick: t, active: n, children: i } = e;
    return (0, r.jsx)(o.P3F, {
        className: l()(a.item, { [a.active]: n }),
        onClick: t,
        children: i,
    });
}
function u(e) {
    let { icon: t, title: n, onClick: i, active: l, trailing: u } = e;
    return (0, r.jsxs)(s, {
        onClick: i,
        active: l,
        children: [
            (0, r.jsxs)("div", {
                className: a.itemContent,
                children: [
                    (0, r.jsx)(t, {
                        color: "currentColor",
                        size: "refresh_sm",
                        className: a.icon,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        children: n,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a.itemContent,
                children: u,
            }),
        ],
    });
}
