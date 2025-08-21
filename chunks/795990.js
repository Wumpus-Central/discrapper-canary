r.d(t, { Z: () => s });
var n = r(951288);
r(647438);
var i = r(481060),
    l = r(299560),
    a = r(247397),
    o = r(388032),
    c = r(958461);
function s() {
    return (0, n.jsxs)("div", {
        className: c.empty,
        children: [
            (0, n.jsxs)("div", {
                className: c.textContainer,
                children: [
                    (0, n.jsx)(i.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: o.intl.string(o.t.oqalCw),
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: o.intl.string(o.t.O9SQ1d),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: c.widgetGrid,
                "aria-label": o.intl.string(o.t["+EIBSE"]),
                children: a.rR.map((e) =>
                    (0, n.jsx)(
                        "li",
                        {
                            children: (0, n.jsx)(l.Z, {
                                widgetType: e,
                                size: "small",
                            }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
