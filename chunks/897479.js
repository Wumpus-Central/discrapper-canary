i.d(e, { A: () => r });
var s = i(627968),
    n = i(64700),
    a = i(873263),
    h = i(73939),
    l = i(334465);
function r(t) {
    let { children: e, ...i } = t,
        r = (0, a.zy)(),
        o = (0, a.W6)(),
        d = null,
        c = null;
    return (
        n.Children.forEach(e, (t) => {
            if (null == d && n.isValidElement(t)) {
                let { component: e, render: i, ...s } = t.props,
                    a = s.path || s.from;
                null != (d = null != a ? (0, l.B)(r.pathname, { ...s, path: a }) : null) &&
                    ((s = { ...s, key: a, location: r, match: d, history: o }),
                    null != e ? (c = n.createElement(e, s)) : null != i && (c = i(s)));
            }
        }),
        (0, s.jsx)(h.F, { ...i, children: c })
    );
}
