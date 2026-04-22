n.d(t, { Ay: () => g });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(573613),
    o = n(235986),
    d = n(621328);
class c extends l.PureComponent {
    static defaultProps = { basis: 232, grow: 0, shrink: 0 };
    render() {
        let { scrollable: e, ...t } = this.props;
        return e
            ? (0, i.jsx)("aside", {
                  className: d.EW,
                  children: (0, i.jsx)(r.Ip, {
                      fade: !0,
                      className: d.XG,
                      children: (0, i.jsx)(o.A.Child, { ...t, wrap: !0 }),
                  }),
              })
            : (0, i.jsx)(o.A.Child, { ...t, wrap: !0 });
    }
}
class u extends l.PureComponent {
    render() {
        let { className: e, ...t } = this.props;
        return (0, i.jsx)(o.A.Child, { className: a()(d.Qs, e), wrap: !0, ...t });
    }
}
class m extends l.PureComponent {
    static defaultProps = {
        direction: o.A.Direction.HORIZONTAL,
        justify: o.A.Justify.START,
        align: o.A.Align.START,
        wrap: o.A.Wrap.NO_WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
    };
    static Direction = o.A.Direction;
    static Justify = o.A.Justify;
    static Align = o.A.Align;
    static Wrap = o.A.Wrap;
    static Sidebar = c;
    static Content = u;
    render() {
        return (0, i.jsx)(o.A, { ...this.props });
    }
}
let g = m;
