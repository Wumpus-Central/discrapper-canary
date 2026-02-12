n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(235986),
    o = n(683754);
let c = (e) => {
        let { children: t, className: n, splashArtURL: s } = e;
        return (0, i.jsxs)(r.A, {
            className: l()(o.wx, n),
            align: r.A.Align.CENTER,
            children: [
                (0, i.jsx)("div", { className: o.Bn, style: null != s ? { backgroundImage: `url(${s})` } : void 0 }),
                t,
            ],
        });
    },
    d = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: l()(o.rf, n), children: t });
    };
class u extends s.PureComponent {
    static Header = c;
    static Body = d;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: s } = this.props;
        return (0, i.jsx)("div", { className: l()(o.Nr, t), onMouseEnter: n, onMouseLeave: s, children: e });
    }
}
let _ = u;
