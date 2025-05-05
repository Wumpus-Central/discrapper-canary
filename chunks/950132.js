a.d(t, { h: () => u });
var n = a(255367);
a(73800);
var r = a(764110),
    s = a(948789),
    l = a(982905),
    i = a(66037),
    o = a(231338),
    c = a(82212);
let d = o.j_.MAIN_NAVIGATION_MENU;
function u(e) {
    let { isOpen: t, dropdownLinks: a, TrackClick: u, avoidRouter: _, id: N, 'aria-label': m } = e,
        p = (0, s.fQ)({ history: (0, r.k6)() }),
        h = a.map((e, t) =>
            e.divider
                ? (0, n.jsx)('hr', { className: c.divider }, 'divider-'.concat(t))
                : e.external
                  ? (0, n.jsx)(
                        'li',
                        {
                            className: c.moreListItemInactive,
                            children: (0, n.jsx)(u, {
                                className: c.moreListLink,
                                eventName: d,
                                data: { linkClicked: e.linkClicked },
                                href: e.route,
                                rel: 'me',
                                children: (0, n.jsx)('span', {
                                    className: c.moreListLinkCopy,
                                    children: e.title
                                })
                            })
                        },
                        e.route
                    )
                  : (0, n.jsx)(
                        'li',
                        {
                            className: (0, l.l)(c, 'moreListItem', p(e.route) ? 'Active' : 'Inactive'),
                            children: (0, n.jsx)(i.Z, {
                                avoidRouter: _,
                                className: c.moreListLink,
                                to: e.route,
                                from: o.j_.MAIN_NAVIGATION_MENU,
                                role: 'menuitem',
                                children: (0, n.jsx)(u, {
                                    tag: 'span',
                                    className: c.moreListLinkCopy,
                                    eventName: d,
                                    data: { linkClicked: e.linkClicked },
                                    children: e.title
                                })
                            })
                        },
                        e.route
                    )
        );
    return (0, n.jsx)('ul', {
        id: N,
        className: (0, l.l)(c, 'moreList', t ? 'Open' : 'Closed'),
        'aria-label': m,
        children: h
    });
}
