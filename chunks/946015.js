n.d(t, { s: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(890425),
    o = n(117457);
let d = { VERTICAL: r.yG, HORIZONTAL: r.OZ, HORIZONTAL_REVERSE: r.y0 },
    c = { START: r.KF, END: r.HA, CENTER: r.pb, BETWEEN: r.G1, AROUND: r.nm },
    u = { NO_WRAP: r.B, WRAP: r.aR, WRAP_REVERSE: r.KM },
    m = { START: r.j$, END: r.S_, CENTER: r.YO, STRETCH: r.ai },
    g = { SMALL: o.sf, LARGE: o.S6 };
class _ extends s.PureComponent {
    static defaultProps = { className: o.Gu, style: {}, wrap: !1 };
    render() {
        let { children: e, className: t, shrink: n, grow: l, basis: r, style: d, wrap: c, ...u } = this.props,
            m = {
                style: { flexGrow: l, flexShrink: n, flexBasis: r, ...d },
                className: t === o.Gu ? t : a()(o.Gu, t),
                ...u,
            };
        if (!c && "string" != typeof e && 1 === s.Children.count(e)) {
            let n = s.Children.only(e);
            return (
                (m.style = { ...m.style, ...n.props.style }),
                (m.className = a()(n.props.className, t)),
                s.cloneElement(n, m)
            );
        }
        return (0, i.jsx)("div", { ...m, children: e });
    }
}
class A extends s.PureComponent {
    static Child = _;
    static Direction = d;
    static Align = m;
    static Justify = c;
    static Wrap = u;
    static Gutter = g;
    static defaultProps = {
        direction: d.HORIZONTAL,
        justify: c.START,
        align: m.STRETCH,
        wrap: u.WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
        style: {},
    };
    render() {
        let {
                children: e,
                className: t,
                direction: n,
                justify: s,
                align: l,
                wrap: r,
                shrink: d,
                grow: c,
                basis: u,
                style: m,
                gutter: g,
                ..._
            } = this.props,
            A = { flexShrink: d, flexGrow: c, flexBasis: u, ...m };
        return (0, i.jsx)("div", { style: A, className: a()(o.Uu, n, s, l, r, g, t), ..._, children: e });
    }
}
