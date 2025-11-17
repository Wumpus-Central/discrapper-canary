n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    l = n(785717),
    o = n(810473),
    c = n(299560),
    s = n(247397),
    u = n(388032),
    d = n(958461);
function f() {
    let { trackUserProfileEditAction: e } = (0, l.KZ)(),
        t = (0, o.Z)(),
        n = i.useMemo(() => {
            let e = new Set(t);
            return s.rR.filter((t) => e.has(t));
        }, [t]);
    return (0, r.jsxs)("div", {
        className: d.empty,
        children: [
            (0, r.jsxs)("div", {
                className: d.textContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: u.intl.string(u.t["oqalC+"]),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: u.intl.string(u.t.O9SQ1c),
                    }),
                ],
            }),
            (0, r.jsx)("ul", {
                className: d.widgetGrid,
                "aria-label": u.intl.string(u.t["+EIBSA"]),
                children: n.map((t) =>
                    (0, r.jsx)(
                        "li",
                        {
                            children: (0, r.jsx)(c.Z, {
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
