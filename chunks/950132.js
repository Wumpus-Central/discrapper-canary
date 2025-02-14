a.d(t, { h: () => p });
var n,
    s,
    l,
    i = a(200651),
    r = a(192379),
    o = a(476400),
    c = a.n(o),
    d = a(948789),
    u = a(982905),
    _ = a(66037),
    N = a(231338),
    h = a(313691);
let m = N.j_.MAIN_NAVIGATION_MENU;
class p extends (l = r.PureComponent) {
    render() {
        let e = (0, d.fQ)(this.context.router),
            { isOpen: t, dropdownLinks: a, TrackClick: n, avoidRouter: s, id: l, 'aria-label': r } = this.props,
            o = a.map((t, a) =>
                t.divider
                    ? (0, i.jsx)('hr', { className: h.divider }, 'divider-'.concat(a))
                    : t.external
                      ? (0, i.jsx)(
                            'li',
                            {
                                className: h.moreListItemInactive,
                                children: (0, i.jsx)(n, {
                                    className: h.moreListLink,
                                    eventName: m,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    children: (0, i.jsx)('span', {
                                        className: h.moreListLinkCopy,
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
                      : (0, i.jsx)(
                            'li',
                            {
                                className: (0, u.l)(h, 'moreListItem', e(t.route) ? 'Active' : 'Inactive'),
                                children: (0, i.jsx)(_.Z, {
                                    avoidRouter: s,
                                    className: h.moreListLink,
                                    to: t.route,
                                    from: N.j_.MAIN_NAVIGATION_MENU,
                                    role: 'menuitem',
                                    children: (0, i.jsx)(n, {
                                        tag: 'span',
                                        className: h.moreListLinkCopy,
                                        eventName: m,
                                        data: { linkClicked: t.linkClicked },
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
            );
        return (0, i.jsx)('ul', {
            id: l,
            className: (0, u.l)(h, 'moreList', t ? 'Open' : 'Closed'),
            'aria-label': r,
            children: o
        });
    }
}
(n = 'contextTypes'),
    (s = { router: c().object.isRequired }),
    n in p
        ? Object.defineProperty(p, n, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[n] = s);
