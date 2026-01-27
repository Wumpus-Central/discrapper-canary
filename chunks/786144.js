n.d(t, {
    A: () => _,
});
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(235986),
    c = n(683754);

function d(e, t, n) {
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
class u extends (r = l.PureComponent) {
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: r } = this.props;
        return (0, i.jsx)("div", {
            className: a()(c.Nr, t),
            onMouseEnter: n,
            onMouseLeave: r,
            children: e,
        });
    }
}
d(u, "Header", (e) => {
    let { children: t, className: n, splashArtURL: r } = e;
    return (0, i.jsxs)(o.A, {
        className: a()(c.wx, n),
        align: o.A.Align.CENTER,
        children: [
            (0, i.jsx)("div", {
                className: c.Bn,
                style:
                    null != r
                        ? {
                              backgroundImage: "url(".concat(r, ")"),
                          }
                        : void 0,
            }),
            t,
        ],
    });
}),
    d(u, "Body", (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: a()(c.rf, n),
            children: t,
        });
    });
let _ = u;
