n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    r = n(873263),
    s = n(868285),
    a = n(334465);
function o(e) {
    let { children: t, ...n } = e,
        o = (0, r.zy)(),
        d = (0, r.W6)(),
        h = null,
        c = null;
    return (
        l.Children.forEach(t, (e) => {
            if (null == h && l.isValidElement(e)) {
                let { component: t, render: n, ...i } = e.props,
                    r = i.path || i.from;
                null != (h = null != r ? (0, a.B)(o.pathname, { ...i, path: r }) : null) &&
                    ((i = { ...i, key: r, location: o, match: h, history: d }),
                    null != t ? (c = l.createElement(t, i)) : null != n && (c = n(i)));
            }
        }),
        (0, i.jsx)(s.F, { ...n, children: c })
    );
}
