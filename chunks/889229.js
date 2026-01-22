n.d(e, {
    A: () => o,
});
var s = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(397927),
    a = n(186261);

function o(t) {
    let { tips: e, className: n, headerText: i } = t;
    return (0, s.jsxs)("div", {
        className: l()(a.iB, n),
        children: [
            (0, s.jsx)("div", {
                className: a.oO,
                children: (0, s.jsx)(r.Heading, {
                    variant: "heading-lg/bold",
                    className: a.TK,
                    children: i,
                }),
            }),
            (0, s.jsx)("ul", {
                className: a.T6,
                children: e.map((t, e) =>
                    (0, s.jsxs)(
                        "li",
                        {
                            className: a.eL,
                            children: [
                                (0, s.jsx)(r.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: a.VX,
                                    children: e + 1,
                                }),
                                (0, s.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    children: t,
                                }),
                            ],
                        },
                        "safety-tips-".concat(e),
                    ),
                ),
            }),
        ],
    });
}
