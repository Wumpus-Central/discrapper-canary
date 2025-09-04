n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(785717),
    a = n(299560),
    o = n(286957),
    s = n(388032),
    c = n(958461);
function u() {
    let { trackUserProfileEditAction: e } = (0, l.KZ)();
    return (0, r.jsxs)("div", {
        className: c.empty,
        children: [
            (0, r.jsxs)("div", {
                className: c.textContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: s.intl.string(s.t.oqalCw),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: s.intl.string(s.t.O9SQ1d),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: c.widgetGrid,
                "aria-label": s.intl.string(s.t["+EIBSE"]),
                children: o.rR.map((t) =>
                    (0, r.jsx)(
                        "li",
                        {
                            children: (0, r.jsx)(a.Z, {
                                widgetType: t,
                                size: "small",
                                trackUserProfileEditAction: e,
                            }),
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
