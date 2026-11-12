var l = n(477900),
    i = n(582128),
    r = n(806163),
    s = n(628274),
    a = n(334465);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { children: t, ...n } = e,
                o = (0, r.zy)(),
                d = (0, r.W6)(),
                u = null,
                h = null;
            return (
                i.Children.forEach(t, (e) => {
                    if (null == u && i.isValidElement(e)) {
                        let { component: t, render: n, ...l } = e.props,
                            r = null != l.path && "" !== l.path ? l.path : l.from;
                        if (null == (u = null != r ? (0, a.B)(o.pathname, { ...l, path: r }) : null)) return;
                        let s = { ...l, key: r, location: o, match: u, history: d };
                        null != t ? (h = i.createElement(t, s)) : null != n && (h = n(s));
                    }
                }),
                (0, l.jsx)(s.F, { ...n, children: h })
            );
        },
    },
);
