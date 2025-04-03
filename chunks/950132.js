a.d(t, { h: () => N });
var n,
    s,
    r,
    l = a(200651),
    i = a(192379),
    o = a(476400),
    c = a.n(o),
    d = a(948789),
    u = a(982905),
    p = a(66037),
    _ = a(231338),
    h = a(82212);
let m = _.j_.MAIN_NAVIGATION_MENU;
class N extends (r = i.PureComponent) {
    render() {
        let e = (0, d.f)(this.context.router),
            { isOpen: t, dropdownLinks: a, TrackClick: n, avoidRouter: s, id: r, 'aria-label': i } = this.props,
            o = a.map((t, a) =>
                t.divider
                    ? (0, l.jsx)('hr', { className: h.divider }, 'divider-'.concat(a))
                    : t.external
                      ? (0, l.jsx)(
                            'li',
                            {
                                className: h.moreListItemInactive,
                                children: (0, l.jsx)(n, {
                                    className: h.moreListLink,
                                    eventName: m,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    children: (0, l.jsx)('span', {
                                        className: h.moreListLinkCopy,
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
                      : (0, l.jsx)(
                            'li',
                            {
                                className: (0, u.l)(h, 'moreListItem', e(t.route) ? 'Active' : 'Inactive'),
                                children: (0, l.jsx)(p.Z, {
                                    avoidRouter: s,
                                    className: h.moreListLink,
                                    to: t.route,
                                    from: _.j_.MAIN_NAVIGATION_MENU,
                                    role: 'menuitem',
                                    children: (0, l.jsx)(n, {
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
        return (0, l.jsx)('ul', {
            id: r,
            className: (0, u.l)(h, 'moreList', t ? 'Open' : 'Closed'),
            'aria-label': i,
            children: o
        });
    }
}
(n = 'contextTypes'),
    (s = { router: c().object.isRequired }),
    n in N
        ? Object.defineProperty(N, n, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[n] = s);
