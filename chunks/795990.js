n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(785717),
    o = n(810473),
    s = n(299560),
    c = n(247397),
    u = n(388032),
    d = n(958461);
function p() {
    let { trackUserProfileEditAction: e } = (0, a.KZ)(),
        t = (0, o.Z)(),
        n = i.useMemo(() => {
            let e = new Set(t);
            return c.rR.filter((t) => e.has(t));
        }, [t]);
    return (0, r.jsxs)("div", {
        className: d.empty,
        children: [
            (0, r.jsxs)("div", {
                className: d.textContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: u.intl.string(u.t.oqalCw),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: u.intl.string(u.t.O9SQ1d),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: d.widgetGrid,
                "aria-label": u.intl.string(u.t["+EIBSE"]),
                children: n.map((t) =>
                    (0, r.jsx)(
                        "li",
                        {
                            children: (0, r.jsx)(s.Z, {
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
