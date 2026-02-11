n.d(t, { s: () => g });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(597833),
    o = n(913953);
let c = { VERTICAL: r.yG, HORIZONTAL: r.OZ, HORIZONTAL_REVERSE: r.y0 },
    d = { START: r.KF, END: r.HA, CENTER: r.pb, BETWEEN: r.G1, AROUND: r.nm },
    u = { NO_WRAP: r.B, WRAP: r.aR, WRAP_REVERSE: r.KM },
    _ = { START: r.j$, END: r.S_, CENTER: r.YO, STRETCH: r.ai },
    m = { SMALL: o.sf, LARGE: o.S6 };
class A extends s.PureComponent {
    static defaultProps = { className: o.Gu, style: {}, wrap: !1 };
    render() {
        let { children: e, className: t, shrink: n, grow: a, basis: r, style: c, wrap: d, ...u } = this.props,
            _ = {
                style: { flexGrow: a, flexShrink: n, flexBasis: r, ...c },
                className: t === o.Gu ? t : l()(o.Gu, t),
                ...u,
            };
        if (!d && "string" != typeof e && 1 === s.Children.count(e)) {
            let n = s.Children.only(e);
            return (
                (_.style = { ..._.style, ...n.props.style }),
                (_.className = l()(n.props.className, t)),
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
                align: a,
                wrap: r,
                shrink: c,
                grow: d,
                basis: u,
                style: _,
                gutter: m,
                ...A
            } = this.props,
            g = { flexShrink: c, flexGrow: d, flexBasis: u, ..._ };
        return (0, i.jsx)("div", { style: g, className: l()(o.Uu, n, s, a, r, m, t), ...A, children: e });
    }
}
