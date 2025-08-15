n.d(t, { Z: () => c }), n(953529);
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(519279),
    o = n(575140);
let c = (e) => {
    let { icon: t, iconClassName: n, header: r, description: c } = e;
    return (0, i.jsxs)("div", {
        className: s()(o.container, l.box),
        children: [
            (0, i.jsx)("div", {
                className: o.circle,
                children: (0, i.jsx)(t, {
                    className: s()(o.icon, n),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: "heading-md/bold",
                        className: o.header,
                        children: (0, i.jsx)(a.y5t, { children: r }),
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: c,
                    }),
                ],
            }),
        ],
    });
};
