n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(85053);
let a = function (e) {
    let { children: t, title: n, description: a } = e;
    return (0, i.jsxs)("div", {
        className: l.L1,
        children: [
            (null != n || null != a) &&
                (0, i.jsxs)("div", {
                    className: l.Km,
                    children: [
                        null != n &&
                            (0, i.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: n,
                            }),
                        null != a &&
                            (0, i.jsx)(s.Text, { variant: "text-sm/normal", color: "text-default", children: a }),
                    ],
                }),
            (0, i.jsx)("div", { className: l.Yq, children: t }),
            (0, i.jsx)(s.cGx, { className: l.yj }),
        ],
    });
};
