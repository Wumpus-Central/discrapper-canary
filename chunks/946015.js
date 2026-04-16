n.d(t, { s: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(341440),
    o = n(196988);
let d = { VERTICAL: a.yG, HORIZONTAL: a.OZ, HORIZONTAL_REVERSE: a.y0 },
    c = { START: a.KF, END: a.HA, CENTER: a.pb, BETWEEN: a.G1, AROUND: a.nm },
    u = { NO_WRAP: a.B, WRAP: a.aR, WRAP_REVERSE: a.KM },
    m = { START: a.j$, END: a.S_, CENTER: a.YO, STRETCH: a.ai },
    g = { SMALL: o.sf, LARGE: o.S6 };
class _ extends s.PureComponent {
    static defaultProps = { className: o.Gu, style: {}, wrap: !1 };
    render() {
        let { children: e, className: t, shrink: n, grow: l, basis: a, style: d, wrap: c, ...u } = this.props,
            m = {
                style: { flexGrow: l, flexShrink: n, flexBasis: a, ...d },
                className: t === o.Gu ? t : r()(o.Gu, t),
                ...u,
            };
        if (!c && "string" != typeof e && 1 === s.Children.count(e)) {
            let n = s.Children.only(e);
            return (
                (m.style = { ...m.style, ...n.props.style }),
                (m.className = r()(n.props.className, t)),
                s.cloneElement(n, m)
            );
        }
        return (0, i.jsx)("div", { ...m, children: e });
    }
}
class x extends s.PureComponent {
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
                wrap: a,
                shrink: d,
                grow: c,
                basis: u,
                style: m,
                gutter: g,
                ..._
            } = this.props,
            x = { flexShrink: d, flexGrow: c, flexBasis: u, ...m };
        return (0, i.jsx)("div", { style: x, className: r()(o.Uu, n, s, l, a, g, t), ..._, children: e });
    }
}
