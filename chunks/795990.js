n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    l = n(785717),
    o = n(810473),
    c = n(299560),
    s = n(247397),
    u = n(388032),
    d = n(875699);
function f() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, l.KZ)(),
        n = i.useRef(!1),
        f = (0, o.Z)(),
        g = i.useMemo(() => {
            let e = new Set(f);
            return s.rR.filter((t) => e.has(t));
        }, [f]);
    return (
        i.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, r.jsxs)("div", {
            className: d.empty,
            children: [
                (0, r.jsxs)("div", {
                    className: d.textContainer,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: u.intl.string(u.t["oqalC+"]),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u.intl.string(u.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, r.jsx)("ul", {
                    className: d.widgetGrid,
                    "aria-label": u.intl.string(u.t["+EIBSA"]),
                    children: g.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(c.Z, {
                                    widgetType: e,
                                    size: "small",
                                    trackUserProfileEditAction: t,
                                }),
                            },
                            e,
                        ),
                    ),
                }),
            ],
        })
    );
}
