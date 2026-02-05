"use strict";
n.d(t, {
    B6: () => R,
    Ix: () => m,
    W5: () => U,
    W6: () => P,
    XZ: () => h,
    dO: () => L,
    g: () => k,
    qh: () => O,
    rd: () => S,
    y: () => w,
    zy: () => M,
});
var r = n(47312),
    i = n(64700);
n(655972);
var a = n(830845),
    s = n(777211),
    o = n(258635),
    l = n(1139),
    u = n(353719),
    c = n.n(u);
n(53635);
var d = n(299146),
    _ = n(833871),
    f = n.n(_),
    p = (function (e) {
        var t = (0, s.A)();
        return (t.displayName = e), t;
    })("Router-History"),
    h = (function (e) {
        var t = (0, s.A)();
        return (t.displayName = e), t;
    })("Router"),
    m = (function (e) {
        function t(t) {
            var n;
            return (
                ((n = e.call(this, t) || this).state = { location: t.history.location }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                t.staticContext ||
                    (n.unlisten = t.history.listen(function (e) {
                        n._isMounted ? n.setState({ location: e }) : (n._pendingLocation = e);
                    })),
                n
            );
        }
        (0, r.A)(t, e),
            (t.computeRootMatch = function (e) {
                return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this._isMounted = !0), this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
                this.unlisten && this.unlisten();
            }),
            (n.render = function () {
                return i.createElement(
                    h.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: t.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    i.createElement(p.Provider, { children: this.props.children || null, value: this.props.history }),
                );
            }),
            t
        );
    })(i.Component);
i.Component;
var g = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        (0, r.A)(t, e);
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.props.onMount && this.props.onMount.call(this, this);
            }),
            (n.componentDidUpdate = function (e) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, e);
            }),
            (n.componentWillUnmount = function () {
                this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (n.render = function () {
                return null;
            }),
            t
        );
    })(i.Component),
    E = {},
    A = 1e4,
    I = 0;
function T(e) {
    if (E[e]) return E[e];
    var t = c().compile(e);
    return I < A && ((E[e] = t), I++), t;
}
function y(e, t) {
    return void 0 === e && (e = "/"), void 0 === t && (t = {}), "/" === e ? e : T(e)(t, { pretty: !0 });
}
function S(e) {
    var t = e.computedMatch,
        n = e.to,
        r = e.push,
        s = void 0 !== r && r;
    return i.createElement(h.Consumer, null, function (e) {
        e || (0, o.A)(!1);
        var r = e.history,
            u = e.staticContext,
            c = s ? r.push : r.replace,
            d = (0, a.yJ)(
                t
                    ? "string" == typeof n
                        ? y(n, t.params)
                        : (0, l.A)({}, n, { pathname: y(n.pathname, t.params) })
                    : n,
            );
        return u
            ? (c(d), null)
            : i.createElement(g, {
                  onMount: function () {
                      c(d);
                  },
                  onUpdate: function (e, t) {
                      var n = (0, a.yJ)(t.to);
                      (0, a.Fu)(n, (0, l.A)({}, d, { key: n.key })) || c(d);
                  },
                  to: n,
              });
    });
}
var v = {},
    C = 1e4,
    b = 0;
function N(e, t) {
    var n = "" + t.end + t.strict + t.sensitive,
        r = v[n] || (v[n] = {});
    if (r[e]) return r[e];
    var i = [],
        a = { regexp: c()(e, i, t), keys: i };
    return b < C && ((r[e] = a), b++), a;
}
function R(e, t) {
    void 0 === t && (t = {}), ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
    var n = t,
        r = n.path,
        i = n.exact,
        a = void 0 !== i && i,
        s = n.strict,
        o = void 0 !== s && s,
        l = n.sensitive,
        u = void 0 !== l && l;
    return [].concat(r).reduce(function (t, n) {
        if (!n && "" !== n) return null;
        if (t) return t;
        var r = N(n, { end: a, strict: o, sensitive: u }),
            i = r.regexp,
            s = r.keys,
            l = i.exec(e);
        if (!l) return null;
        var c = l[0],
            d = l.slice(1),
            _ = e === c;
        return a && !_
            ? null
            : {
                  path: n,
                  url: "/" === n && "" === c ? "/" : c,
                  isExact: _,
                  params: s.reduce(function (e, t, n) {
                      return (e[t.name] = d[n]), e;
                  }, {}),
              };
    }, null);
}
var O = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    return (
        (0, r.A)(t, e),
        (t.prototype.render = function () {
            var e = this;
            return i.createElement(h.Consumer, null, function (t) {
                t || (0, o.A)(!1);
                var n = e.props.location || t.location,
                    r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? R(n.pathname, e.props) : t.match,
                    a = (0, l.A)({}, t, { location: n, match: r }),
                    s = e.props,
                    u = s.children,
                    c = s.component,
                    d = s.render;
                return (
                    Array.isArray(u) && 0 === u.length && (u = null),
                    i.createElement(
                        h.Provider,
                        { value: a },
                        a.match
                            ? u
                                ? "function" == typeof u
                                    ? u(a)
                                    : u
                                : c
                                  ? i.createElement(c, a)
                                  : d
                                    ? d(a)
                                    : null
                            : "function" == typeof u
                              ? u(a)
                              : null,
                    )
                );
            });
        }),
        t
    );
})(i.Component);
function D(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
i.Component;
var L = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    return (
        (0, r.A)(t, e),
        (t.prototype.render = function () {
            var e = this;
            return i.createElement(h.Consumer, null, function (t) {
                t || (0, o.A)(!1);
                var n,
                    r,
                    a = e.props.location || t.location;
                return (
                    i.Children.forEach(e.props.children, function (e) {
                        if (null == r && i.isValidElement(e)) {
                            n = e;
                            var s = e.props.path || e.props.from;
                            r = s ? R(a.pathname, (0, l.A)({}, e.props, { path: s })) : t.match;
                        }
                    }),
                    r ? i.cloneElement(n, { location: a, computedMatch: r }) : null
                );
            });
        }),
        t
    );
})(i.Component);
function w(e) {
    var t = "withRouter(" + (e.displayName || e.name) + ")",
        n = function (t) {
            var n = t.wrappedComponentRef,
                r = (0, d.A)(t, ["wrappedComponentRef"]);
            return i.createElement(h.Consumer, null, function (t) {
                return t || (0, o.A)(!1), i.createElement(e, (0, l.A)({}, r, t, { ref: n }));
            });
        };
    return (n.displayName = t), (n.WrappedComponent = e), f()(n, e);
}
var x = i.useContext;
function P() {
    return x(p);
}
function M() {
    return x(h).location;
}
function k() {
    var e = x(h).match;
    return e ? e.params : {};
}
function U(e) {
    var t = M(),
        n = x(h).match;
    return e ? R(t.pathname, e) : n;
}
