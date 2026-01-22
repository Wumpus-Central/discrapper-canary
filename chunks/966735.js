n.d(t, { A: () => c }), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(896498),
    l = n(714979);
let c = (e) => {
    let { icon: t, iconClassName: n, header: i, description: c } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.kL, o.a),
        children: [
            (0, r.jsx)("div", {
                className: l.n1,
                children: (0, r.jsx)(t, {
                    className: a()(l.Kk, n),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/bold",
                        className: l.wx,
                        children: (0, r.jsx)(s.Fmo, { children: i }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: c,
                    }),
                ],
            }),
        ],
    });
};
