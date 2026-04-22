l.d(t, { A: () => d });
var n = l(627968);
l(64700);
var i = l(534514),
    s = l(834730),
    a = l(404778),
    r = l(628630);
let d = function (e) {
    let { children: t, title: l, description: d } = e;
    return (0, n.jsxs)("div", {
        className: r.L1,
        children: [
            (null != l || null != d) &&
                (0, n.jsxs)("div", {
                    className: r.Km,
                    children: [
                        null != l &&
                            (0, n.jsx)(i.D, { variant: "heading-lg/semibold", color: "text-strong", children: l }),
                        null != d && (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: d }),
                    ],
                }),
            (0, n.jsx)("div", { className: r.Yq, children: t }),
            (0, n.jsx)(a.c, { className: r.yj }),
        ],
    });
};
