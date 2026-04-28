e.d(t, { s: () => T });
var i = e(627968),
    r = e(64700),
    a = e(503698),
    n = e.n(a),
    l = e(341440),
    c = e(196988);
let p = { VERTICAL: l.yG, HORIZONTAL: l.OZ, HORIZONTAL_REVERSE: l.y0 },
    o = { START: l.KF, END: l.HA, CENTER: l.pb, BETWEEN: l.G1, AROUND: l.nm },
    R = { NO_WRAP: l.B, WRAP: l.aR, WRAP_REVERSE: l.KM },
    u = { START: l.j$, END: l.S_, CENTER: l.YO, STRETCH: l.ai },
    E = { SMALL: c.sf, LARGE: c.S6 };
class d extends r.PureComponent {
    static defaultProps = { className: c.Gu, style: {}, wrap: !1 };
    render() {
        let { children: s, className: t, shrink: e, grow: a, basis: l, style: p, wrap: o, ...R } = this.props,
            u = {
                style: { flexGrow: a, flexShrink: e, flexBasis: l, ...p },
                className: t === c.Gu ? t : n()(c.Gu, t),
                ...R,
            };
        if (!o && "string" != typeof s && 1 === r.Children.count(s)) {
            let e = r.Children.only(s);
            return (
                (u.style = { ...u.style, ...e.props.style }),
                (u.className = n()(e.props.className, t)),
                r.cloneElement(e, u)
            );
        }
        return (0, i.jsx)("div", { ...u, children: s });
    }
}
class T extends r.PureComponent {
    static Child = d;
    static Direction = p;
    static Align = u;
    static Justify = o;
    static Wrap = R;
    static Gutter = E;
    static defaultProps = {
        direction: p.HORIZONTAL,
        justify: o.START,
        align: u.STRETCH,
        wrap: R.WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
        style: {},
    };
    render() {
        let {
                children: s,
                className: t,
                direction: e,
                justify: r,
                align: a,
                wrap: l,
                shrink: p,
                grow: o,
                basis: R,
                style: u,
                gutter: E,
                ...d
            } = this.props,
            T = { flexShrink: p, flexGrow: o, flexBasis: R, ...u };
        return (0, i.jsx)("div", { style: T, className: n()(c.Uu, e, r, a, l, E, t), ...d, children: s });
    }
}
