n.d(t, { A: () => d });
var i = n(477900),
    l = n(582128),
    s = n(806163),
    r = n(868285),
    a = n(334465);
function d(e) {
    let { children: t, ...n } = e,
        d = (0, s.zy)(),
        o = (0, s.W6)(),
        h = null,
        u = null;
    return (
        l.Children.forEach(t, (e) => {
            if (null == h && l.isValidElement(e)) {
                let { component: t, render: n, ...i } = e.props,
                    s = null != i.path && "" !== i.path ? i.path : i.from;
                if (null == (h = null != s ? (0, a.B)(d.pathname, { ...i, path: s }) : null)) return;
                let r = { ...i, key: s, location: d, match: h, history: o };
                null != t ? (u = l.createElement(t, r)) : null != n && (u = n(r));
            }
        }),
        (0, i.jsx)(r.F, { ...n, children: u })
    );
}
