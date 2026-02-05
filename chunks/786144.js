n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(235986),
    o = n(683754);
let c = (e) => {
        let { children: t, className: n, splashArtURL: s } = e;
        return (0, i.jsxs)(l.A, {
            className: a()(o.wx, n),
            align: l.A.Align.CENTER,
            children: [
                (0, i.jsx)("div", { className: o.Bn, style: null != s ? { backgroundImage: `url(${s})` } : void 0 }),
                t,
            ],
        });
    },
    d = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: a()(o.rf, n), children: t });
    };
class u extends s.PureComponent {
    static Header = c;
    static Body = d;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: s } = this.props;
        return (0, i.jsx)("div", { className: a()(o.Nr, t), onMouseEnter: n, onMouseLeave: s, children: e });
    }
}
let _ = u;
