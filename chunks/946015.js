"use strict";
s.d(t, { s: () => m });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(341440),
    o = s(196988);
let c = { VERTICAL: i.yG, HORIZONTAL: i.OZ, HORIZONTAL_REVERSE: i.y0 },
    d = { START: i.KF, END: i.HA, CENTER: i.pb, BETWEEN: i.G1, AROUND: i.nm },
    u = { NO_WRAP: i.B, WRAP: i.aR, WRAP_REVERSE: i.KM },
    g = { START: i.j$, END: i.S_, CENTER: i.YO, STRETCH: i.ai },
    h = { SMALL: o.sf, LARGE: o.S6 };
class _ extends l.PureComponent {
    static defaultProps = { className: o.Gu, style: {}, wrap: !1 };
    render() {
        let { children: e, className: t, shrink: s, grow: r, basis: i, style: c, wrap: d, ...u } = this.props,
            g = {
                style: { flexGrow: r, flexShrink: s, flexBasis: i, ...c },
                className: t === o.Gu ? t : a()(o.Gu, t),
                ...u,
            };
        if (!d && "string" != typeof e && 1 === l.Children.count(e)) {
            let s = l.Children.only(e);
            return (
                (g.style = { ...g.style, ...s.props.style }),
                (g.className = a()(s.props.className, t)),
                l.cloneElement(s, g)
            );
        }
        return (0, n.jsx)("div", { ...g, children: e });
    }
}
class m extends l.PureComponent {
    static Child = _;
    static Direction = c;
    static Align = g;
    static Justify = d;
    static Wrap = u;
    static Gutter = h;
    static defaultProps = {
        direction: c.HORIZONTAL,
        justify: d.START,
        align: g.STRETCH,
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
                direction: s,
                justify: l,
                align: r,
                wrap: i,
                shrink: c,
                grow: d,
                basis: u,
                style: g,
                gutter: h,
                ..._
            } = this.props,
            m = { flexShrink: c, flexGrow: d, flexBasis: u, ...g };
        return (0, n.jsx)("div", { style: m, className: a()(o.Uu, s, l, r, i, h, t), ..._, children: e });
    }
}
