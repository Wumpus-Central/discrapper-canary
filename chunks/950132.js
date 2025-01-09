s.d(t, {
    h: function () {
        return g;
    }
});
var a,
    n,
    r,
    i,
    o = s(200651),
    l = s(192379),
    c = s(476400),
    d = s.n(c),
    u = s(948789),
    p = s(982905),
    N = s(66037),
    h = s(231338),
    m = s(294419);
let f = h.j_.MAIN_NAVIGATION_MENU;
class g extends (i = l.PureComponent) {
    render() {
        let e = (0, u.fQ)(this.context.router),
            { isOpen: t, dropdownLinks: s, TrackClick: a, avoidRouter: n, id: r, 'aria-label': i } = this.props,
            l = s.map((t, s) =>
                t.divider
                    ? (0, o.jsx)('hr', { className: m.divider }, 'divider-'.concat(s))
                    : t.external
                      ? (0, o.jsx)(
                            'li',
                            {
                                className: m.moreListItemInactive,
                                children: (0, o.jsx)(a, {
                                    className: m.moreListLink,
                                    eventName: f,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    children: (0, o.jsx)('span', {
                                        className: m.moreListLinkCopy,
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
                      : (0, o.jsx)(
                            'li',
                            {
                                className: (0, p.l)(m, 'moreListItem', e(t.route) ? 'Active' : 'Inactive'),
                                children: (0, o.jsx)(N.Z, {
                                    avoidRouter: n,
                                    className: m.moreListLink,
                                    to: t.route,
                                    from: h.j_.MAIN_NAVIGATION_MENU,
                                    role: 'menuitem',
                                    children: (0, o.jsx)(a, {
                                        tag: 'span',
                                        className: m.moreListLinkCopy,
                                        eventName: f,
                                        data: { linkClicked: t.linkClicked },
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
            );
        return (0, o.jsx)('ul', {
            id: r,
            className: (0, p.l)(m, 'moreList', t ? 'Open' : 'Closed'),
            'aria-label': i,
            children: l
        });
    }
}
(a = g),
    (n = 'contextTypes'),
    (r = { router: d().object.isRequired }),
    n in a
        ? Object.defineProperty(a, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[n] = r);
