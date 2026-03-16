n.d(t, { s: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(112303),
    o = n(50567);
let d = { VERTICAL: a.yG, HORIZONTAL: a.OZ, HORIZONTAL_REVERSE: a.y0 },
    c = { START: a.KF, END: a.HA, CENTER: a.pb, BETWEEN: a.G1, AROUND: a.nm },
    u = { NO_WRAP: a.B, WRAP: a.aR, WRAP_REVERSE: a.KM },
    _ = { START: a.j$, END: a.S_, CENTER: a.YO, STRETCH: a.ai },
    m = { SMALL: o.sf, LARGE: o.S6 };
class g extends s.PureComponent {
    static defaultProps = { className: o.Gu, style: {}, wrap: !1 };
    render() {
        let { children: e, className: t, shrink: n, grow: l, basis: a, style: d, wrap: c, ...u } = this.props,
            _ = {
                style: { flexGrow: l, flexShrink: n, flexBasis: a, ...d },
                className: t === o.Gu ? t : r()(o.Gu, t),
                ...u,
            };
        if (!c && "string" != typeof e && 1 === s.Children.count(e)) {
            let n = s.Children.only(e);
            return (
                (_.style = { ..._.style, ...n.props.style }),
                (_.className = r()(n.props.className, t)),
                s.cloneElement(n, _)
            );
        }
        return (0, i.jsx)("div", { ..._, children: e });
    }
}
class A extends s.PureComponent {
    static Child = g;
    static Direction = d;
    static Align = _;
    static Justify = c;
    static Wrap = u;
    static Gutter = m;
    static defaultProps = {
        direction: d.HORIZONTAL,
        justify: c.START,
        align: _.STRETCH,
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
                style: _,
                gutter: m,
                ...g
            } = this.props,
            A = { flexShrink: d, flexGrow: c, flexBasis: u, ..._ };
        return (0, i.jsx)("div", { style: A, className: r()(o.Uu, n, s, l, a, m, t), ...g, children: e });
    }
}
