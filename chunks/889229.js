var i = e(477900);
e(582128);
var d = e(503698),
    c = e.n(d),
    l = e(534514),
    n = e(834730),
    r = e(903919);
e.d(
    a,
    {},
    {
        A: function (s) {
            let { tips: a, className: e, headerText: d } = s;
            return (0, i.jsxs)("div", {
                className: c()(r.iB, e),
                children: [
                    (0, i.jsx)("div", {
                        className: r.oO,
                        children: (0, i.jsx)(l.D, { variant: "heading-lg/semibold", className: r.TK, children: d }),
                    }),
                    (0, i.jsx)("ul", {
                        className: r.T6,
                        children: a.map((s, a) =>
                            (0, i.jsxs)(
                                "li",
                                {
                                    className: r.eL,
                                    children: [
                                        (0, i.jsx)(l.D, {
                                            variant: "heading-sm/semibold",
                                            color: "text-brand",
                                            className: r.VX,
                                            children: a + 1,
                                        }),
                                        (0, i.jsx)(n.E, { variant: "body-sm/medium", children: s }),
                                    ],
                                },
                                `safety-tips-${a}`,
                            ),
                        ),
                    }),
                ],
            });
        },
    },
);
