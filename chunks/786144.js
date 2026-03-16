n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(235986),
    o = n(683754);
let d = (e) => {
        let { children: t, className: n, splashArtURL: s } = e;
        return (0, i.jsxs)(a.A, {
            className: r()(o.wx, n),
            align: a.A.Align.CENTER,
            children: [
                (0, i.jsx)("div", { className: o.Bn, style: null != s ? { backgroundImage: `url(${s})` } : void 0 }),
                t,
            ],
        });
    },
    c = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: r()(o.rf, n), children: t });
    };
class u extends s.PureComponent {
    static Header = d;
    static Body = c;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: s } = this.props;
        return (0, i.jsx)("div", { className: r()(o.Nr, t), onMouseEnter: n, onMouseLeave: s, children: e });
    }
}
let _ = u;
