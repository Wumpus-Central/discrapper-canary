"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    r = n(873263),
    l = n(73939),
    a = n(334465);
function o(e) {
    let { children: t, ...n } = e,
        o = (0, r.zy)(),
        c = (0, r.W6)(),
        d = null,
        u = null;
    return (
        s.Children.forEach(t, (e) => {
            if (null == d && s.isValidElement(e)) {
                let { component: t, render: n, ...i } = e.props,
                    r = i.path || i.from;
                null != (d = null != r ? (0, a.B)(o.pathname, { ...i, path: r }) : null) &&
                    ((i = { ...i, key: r, location: o, match: d, history: c }),
                    null != t ? (u = s.createElement(t, i)) : null != n && (u = n(i)));
            }
        }),
        (0, i.jsx)(l.F, { ...n, children: u })
    );
}
