r.d(t, { Z: () => u });
var n = r(951288);
r(647438);
var a = r(481060),
    i = r(785717),
    l = r(299560),
    o = r(247397),
    c = r(388032),
    s = r(958461);
function u() {
    let { trackUserProfileAction: e } = (0, i.KZ)();
    return (0, n.jsxs)("div", {
        className: s.empty,
        children: [
            (0, n.jsxs)("div", {
                className: s.textContainer,
                children: [
                    (0, n.jsx)(a.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: c.intl.string(c.t.oqalCw),
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: c.intl.string(c.t.O9SQ1d),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: s.widgetGrid,
                "aria-label": c.intl.string(c.t["+EIBSE"]),
                children: o.rR.map((t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            children: (0, n.jsx)(l.Z, {
                                widgetType: t,
                                size: "small",
                                trackUserProfileAction: e,
                            }),
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
