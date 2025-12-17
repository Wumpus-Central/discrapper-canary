n.d(t, { Z: () => d }), n(415506);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(445373);
function c(e, t, n) {
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
    componentDidUpdate(e) {
        e.src !== this.props.src && this.setState({ loaded: !1 }, () => this.initialize());
    }
    initialize() {
        let e;
        ((e = this.props.src),
        new Promise((t, n) => {
            null == e && n(Error("No image src passed"));
            let r = new Image();
            (r.src = e), (r.onload = () => t(r)), (r.onerror = (e) => n(e));
        })).then(() => {
            this.unmounting || this.setState({ loaded: !0 });
        });
    }
    componentWillUnmount() {
        this.unmounting = !0;
    }
    render() {
        var e, t;
        let { className: n, src: r, alt: l, width: a, height: u, onLoad: d, style: p, imageClassName: f } = this.props,
            { loaded: g } = this.state;
        return (0, i.jsx)("div", {
            className: n,
            style:
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                c(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, p)),
                (t = t =
                    {
                        width: a,
                        height: u,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            children: (0, i.jsx)("img", {
                className: o()(s.image, f, { [s.loaded]: g }),
                width: a,
                height: u,
                src: r,
                alt: l,
                onLoad: d,
            }),
        });
    }
    constructor(e) {
        super(e), c(this, "unmounting", !1), c(this, "state", { loaded: !1 }), this.initialize();
    }
}
c(u, "defaultProps", {
    width: 0,
    height: 0,
    alt: "",
});
let d = u;
