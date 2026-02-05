i.d(e, { A: () => r });
var s = i(627968),
    n = i(64700),
    a = i(960488),
    h = i(73939);
class l extends n.Component {
    render() {
        let { children: t, location: e, history: i, staticContext: l, match: r, ...o } = this.props,
            d = null,
            c = null;
        return (
            n.Children.forEach(t, (t) => {
                if (null == d && n.isValidElement(t)) {
                    let { component: s, render: h, ...r } = t.props,
                        o = r.path || r.from;
                    null != (d = null != o ? (0, a.B6)(e.pathname, { ...r, path: o }) : null) &&
                        ((r = { ...r, key: o, location: e, match: d, history: i, staticContext: l }),
                        null != s ? (c = n.createElement(s, r)) : null != h && (c = h(r)));
                }
            }),
            (0, s.jsx)(h.F, { ...o, children: c })
        );
    }
}
let r = (0, a.y)(l);
