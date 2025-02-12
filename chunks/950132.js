s.d(t, { h: () => m });
var a,
    n,
    i,
    r = s(200651),
    o = s(192379),
    l = s(476400),
    c = s.n(l),
    d = s(948789),
    u = s(982905),
    p = s(66037),
    _ = s(231338),
    h = s(462231);
let N = _.j_.MAIN_NAVIGATION_MENU;
class m extends (i = o.PureComponent) {
    render() {
        let e = (0, d.fQ)(this.context.router),
            { isOpen: t, dropdownLinks: s, TrackClick: a, avoidRouter: n, id: i, 'aria-label': o } = this.props,
            l = s.map((t, s) =>
                t.divider
                    ? (0, r.jsx)('hr', { className: h.divider }, 'divider-'.concat(s))
                    : t.external
                      ? (0, r.jsx)(
                            'li',
                            {
                                className: h.moreListItemInactive,
                                children: (0, r.jsx)(a, {
                                    className: h.moreListLink,
                                    eventName: N,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    children: (0, r.jsx)('span', {
                                        className: h.moreListLinkCopy,
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
                      : (0, r.jsx)(
                            'li',
                            {
                                className: (0, u.l)(h, 'moreListItem', e(t.route) ? 'Active' : 'Inactive'),
                                children: (0, r.jsx)(p.Z, {
                                    avoidRouter: n,
                                    className: h.moreListLink,
                                    to: t.route,
                                    from: _.j_.MAIN_NAVIGATION_MENU,
                                    role: 'menuitem',
                                    children: (0, r.jsx)(a, {
                                        tag: 'span',
                                        className: h.moreListLinkCopy,
                                        eventName: N,
                                        data: { linkClicked: t.linkClicked },
                                        children: t.title
                                    })
                                })
                            },
                            t.route
                        )
            );
        return (0, r.jsx)('ul', {
            id: i,
            className: (0, u.l)(h, 'moreList', t ? 'Open' : 'Closed'),
            'aria-label': o,
            children: l
        });
    }
}
(a = 'contextTypes'),
    (n = { router: c().object.isRequired }),
    a in m
        ? Object.defineProperty(m, a, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[a] = n);
