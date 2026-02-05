n.d(t, { s: () => g });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(112303),
    o = n(50567);
let c = { VERTICAL: l.yG, HORIZONTAL: l.OZ, HORIZONTAL_REVERSE: l.y0 },
    d = { START: l.KF, END: l.HA, CENTER: l.pb, BETWEEN: l.G1, AROUND: l.nm },
    u = { NO_WRAP: l.B, WRAP: l.aR, WRAP_REVERSE: l.KM },
    _ = { START: l.j$, END: l.S_, CENTER: l.YO, STRETCH: l.ai },
    m = { SMALL: o.sf, LARGE: o.S6 };
class A extends s.PureComponent {
    static defaultProps = { className: o.Gu, style: {}, wrap: !1 };
    render() {
        let { children: e, className: t, shrink: n, grow: r, basis: l, style: c, wrap: d, ...u } = this.props,
            _ = {
                style: { flexGrow: r, flexShrink: n, flexBasis: l, ...c },
                className: t === o.Gu ? t : a()(o.Gu, t),
                ...u,
            };
        if (!d && "string" != typeof e && 1 === s.Children.count(e)) {
            let n = s.Children.only(e);
            return (
                (_.style = { ..._.style, ...n.props.style }),
                (_.className = a()(n.props.className, t)),
                s.cloneElement(n, _)
            );
        }
        return (0, i.jsx)("div", { ..._, children: e });
    }
}
class g extends s.PureComponent {
    static Child = A;
    static Direction = c;
    static Align = _;
    static Justify = d;
    static Wrap = u;
    static Gutter = m;
    static defaultProps = {
        direction: c.HORIZONTAL,
        justify: d.START,
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
                align: r,
                wrap: l,
                shrink: c,
                grow: d,
                basis: u,
                style: _,
                gutter: m,
                ...A
            } = this.props,
            g = { flexShrink: c, flexGrow: d, flexBasis: u, ..._ };
        return (0, i.jsx)("div", { style: g, className: a()(o.Uu, n, s, r, l, m, t), ...A, children: e });
    }
}
