n.d(t, { N: () => g }), n(35282), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(711873),
    o = n.n(a),
    s = n(134432);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = /url\(['"](.*)['"]\)/,
    m = (e) => {
        if (null == e || "" === e || "none" === e) return null;
        let t = e.match(_);
        return null != t ? t[1] : e;
    };
function h(e) {
    return null == e || "" === e || "none" === e ? "none" : "url(".concat(e, ")");
}
function g(e) {
    class t extends i.Component {
        componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: r } = this.state,
                { style: i } = this.props,
                a = null != i ? m(i.backgroundImage) : null;
            (null == a && a !== n) || this.cachedURLs.indexOf(a) >= 0
                ? this.setState({
                      loaded: !0,
                      cached: a,
                  })
                : null != a && a !== n && !0 === r && this.setState({ loaded: !1 }, () => this.preloadURL(a));
        }
        preloadURL(e) {
            var t, n;
            null == (t = (n = this).canceller) || t.call(n),
                (this.canceller = (0, s.po)(e, (t) => {
                    (this.canceller = null),
                        t ||
                            (this.cachedURLs.push(e),
                            this.setState({
                                cached: e,
                                loaded: !0,
                            }));
                }));
        }
        componentWillUnmount() {
            var e, t;
            null == (e = (t = this).canceller) || e.call(t), (this.cachedURLs.length = 0);
        }
        render() {
            let t = this.props,
                { style: n } = t,
                i = f(t, ["style"]),
                { loaded: a, cached: o } = this.state;
            return a || null == n || (n = d(c({}, n), { backgroundImage: h(o) })), (0, r.jsx)(e, c({ style: n }, i));
        }
        constructor(e) {
            super(e), l(this, "cachedURLs", []), l(this, "canceller", null);
            let { style: t } = e,
                n = null != t ? m(t.backgroundImage) : null;
            (this.cachedURLs = [n]),
                (this.state = {
                    cached: n,
                    loaded: !0,
                });
        }
    }
    return o()(t, e), t;
}
