e.d(n, { A: () => p });
var u = e(627968),
    t = e(64700),
    r = e(873263),
    a = e(73939),
    i = e(334465);
function p(l) {
    let { children: n, ...e } = l,
        p = (0, r.zy)(),
        h = (0, r.W6)(),
        s = null,
        c = null;
    return (
        t.Children.forEach(n, (l) => {
            if (null == s && t.isValidElement(l)) {
                let { component: n, render: e, ...u } = l.props,
                    r = u.path || u.from;
                null != (s = null != r ? (0, i.B)(p.pathname, { ...u, path: r }) : null) &&
                    ((u = { ...u, key: r, location: p, match: s, history: h }),
                    null != n ? (c = t.createElement(n, u)) : null != e && (c = e(u)));
            }
        }),
        (0, u.jsx)(a.F, { ...e, children: c })
    );
}
