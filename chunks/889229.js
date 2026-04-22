n.d(e, { A: () => c });
var a = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    i = n(534514),
    l = n(834730),
    o = n(822030);
function c(t) {
    let { tips: e, className: n, headerText: r } = t;
    return (0, a.jsxs)("div", {
        className: s()(o.iB, n),
        children: [
            (0, a.jsx)("div", {
                className: o.oO,
                children: (0, a.jsx)(i.D, { variant: "heading-lg/bold", className: o.TK, children: r }),
            }),
            (0, a.jsx)("ul", {
                className: o.T6,
                children: e.map((t, e) =>
                    (0, a.jsxs)(
                        "li",
                        {
                            className: o.eL,
                            children: [
                                (0, a.jsx)(i.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-brand",
                                    className: o.VX,
                                    children: e + 1,
                                }),
                                (0, a.jsx)(l.E, { variant: "text-sm/medium", children: t }),
                            ],
                        },
                        `safety-tips-${e}`,
                    ),
                ),
            }),
        ],
    });
}
