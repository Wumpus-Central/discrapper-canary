n.d(t, { Z: () => c }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(519279),
    l = n(519338);
let c = (e) => {
    let { icon: t, iconClassName: n, header: i, description: c } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.container, s.box),
        children: [
            (0, r.jsx)("div", {
                className: l.circle,
                children: (0, r.jsx)(t, {
                    className: a()(l.icon, n),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/bold",
                        className: l.header,
                        children: (0, r.jsx)(o.y5t, { children: i }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: c,
                    }),
                ],
            }),
        ],
    });
};
