n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(785717),
    o = n(500143),
    c = n(299560),
    s = n(388032),
    u = n(875699);
function d() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, a.KZ)(),
        n = i.useRef(!1),
        d = (0, o.Z)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        i.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, r.jsxs)("div", {
            className: u.empty,
            children: [
                (0, r.jsxs)("div", {
                    className: u.textContainer,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: s.intl.string(s.t["oqalC+"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: s.intl.string(s.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, r.jsx)("ul", {
                    className: u.widgetGrid,
                    "aria-label": s.intl.string(s.t["+EIBSA"]),
                    children: d.map((e) =>
                        (0, r.jsx)(
                            "li",
                            {
                                children: (0, r.jsx)(c.Z, {
                                    widget: e,
                                    size: "small",
                                    trackUserProfileEditAction: t,
                                }),
                            },
                            e.getUniqueKey(),
                        ),
                    ),
                }),
            ],
        })
    );
}
