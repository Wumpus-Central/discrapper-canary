n.d(t, { A: () => _ });
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(235986),
    c = n(683754);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = (e) => {
        let { children: t, className: n, splashArtURL: r } = e;
        return (0, i.jsxs)(l.A, {
            className: o()(c.wx, n),
            align: l.A.Align.CENTER,
            children: [
                (0, i.jsx)("div", {
                    className: c.Bn,
                    style: null != r ? { backgroundImage: "url(".concat(r, ")") } : void 0,
                }),
                t,
            ],
        });
    },
    f = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: o()(c.rf, n),
            children: t,
        });
    };
class p extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: r } = this.props;
        return (0, i.jsx)("div", {
            className: o()(c.Nr, t),
            onMouseEnter: n,
            onMouseLeave: r,
            children: e,
        });
    }
}
u(p, "Header", d), u(p, "Body", f);
let _ = p;
