a.d(t, { r: () => _ });
var s = a(627968);
a(64700);
var l = a(134402),
    r = a(877227),
    i = a(489569),
    n = a(137540),
    o = a(818348),
    c = a(393163);
let d = o.sE.MAIN_NAVIGATION_MENU;
function _(e) {
    let { isOpen: t, dropdownLinks: a, TrackClick: _, avoidRouter: N, id: A, "aria-label": u } = e,
        p = (0, r.dI)({ history: (0, l.W6)() }),
        h = a.map((e, t) =>
            e.divider
                ? (0, s.jsx)("hr", { className: c.divider }, `divider-${t}`)
                : e.external
                  ? (0, s.jsx)(
                        "li",
                        {
                            className: c.moreListItemInactive,
                            children: (0, s.jsx)(_, {
                                className: c.moreListLink,
                                eventName: d,
                                data: { linkClicked: e.linkClicked },
                                href: e.route,
                                rel: "me",
                                children: (0, s.jsx)("span", { className: c.moreListLinkCopy, children: e.title }),
                            }),
                        },
                        e.route,
                    )
                  : (0, s.jsx)(
                        "li",
                        {
                            className: (0, i.t)(c, "moreListItem", p(e.route) ? "Active" : "Inactive"),
                            children: (0, s.jsx)(n.A, {
                                avoidRouter: N,
                                className: c.moreListLink,
                                to: e.route,
                                from: o.sE.MAIN_NAVIGATION_MENU,
                                role: "menuitem",
                                children: (0, s.jsx)(_, {
                                    tag: "span",
                                    className: c.moreListLinkCopy,
                                    eventName: d,
                                    data: { linkClicked: e.linkClicked },
                                    children: e.title,
                                }),
                            }),
                        },
                        e.route,
                    ),
        );
    return (0, s.jsx)("ul", {
        id: A,
        className: (0, i.t)(c, "moreList", t ? "Open" : "Closed"),
        "aria-label": u,
        children: h,
    });
}
