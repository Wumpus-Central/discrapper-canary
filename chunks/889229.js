n.d(e, { A: () => c });
var s = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    r = n(534514),
    a = n(834730),
    o = n(822030);
function c(t) {
    let { tips: e, className: n, headerText: i } = t;
    return (0, s.jsxs)("div", {
        className: l()(o.iB, n),
        children: [
            (0, s.jsx)("div", {
                className: o.oO,
                children: (0, s.jsx)(r.D, { variant: "heading-lg/bold", className: o.TK, children: i }),
            }),
            (0, s.jsx)("ul", {
                className: o.T6,
                children: e.map((t, e) =>
                    (0, s.jsxs)(
                        "li",
                        {
                            className: o.eL,
                            children: [
                                (0, s.jsx)(r.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: o.VX,
                                    children: e + 1,
                                }),
                                (0, s.jsx)(a.E, { variant: "text-sm/medium", children: t }),
                            ],
                        },
                        `safety-tips-${e}`,
                    ),
                ),
            }),
        ],
    });
}
