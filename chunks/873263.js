"use strict";
n.d(t, {
    B6: () => k,
    Ix: () => v,
    W5: () => W,
    W6: () => j,
    XZ: () => S,
    dO: () => V,
    g: () => Y,
    qh: () => G,
    rd: () => L,
    zy: () => H,
});
var r = n(238710),
    i = n(64700),
    a = n(655972),
    s = n.n(a),
    o = n(830845),
    l = n(258635),
    u = n(542113),
    c = n(353719),
    d = n.n(c);
n(53635), n(725664), n(833871);
var _ = 0x3fffffff,
    f = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== n.g ? n.g : {};
function h() {
    var e = "__global_unique_id__";
    return (f[e] = (f[e] || 0) + 1);
}
function p(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function g(e) {
    var t = [];
    return {
        on: function (e) {
            t.push(e);
        },
        off: function (e) {
            t = t.filter(function (t) {
                return t !== e;
            });
        },
        get: function () {
            return e;
        },
        set: function (n, r) {
            (e = n),
                t.forEach(function (t) {
                    return t(e, r);
                });
        },
    };
}
function E(e) {
    return Array.isArray(e) ? e[0] : e;
}
function A(e, t) {
    var n,
        a,
        o = "__create-react-context-" + h() + "__",
        l = (function (e) {
            function n() {
                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return ((t = e.call.apply(e, [this].concat(r)) || this).emitter = g(t.props.value)), t;
            }
            (0, r.A)(n, e);
            var i = n.prototype;
            return (
                (i.getChildContext = function () {
                    var e;
                    return ((e = {})[o] = this.emitter), e;
                }),
                (i.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                        var n,
                            r = this.props.value,
                            i = e.value;
                        p(r, i)
                            ? (n = 0)
                            : 0 != (n = ("function" == typeof t ? t(r, i) : _) | 0) && this.emitter.set(e.value, n);
                    }
                }),
                (i.render = function () {
                    return this.props.children;
                }),
                n
            );
        })(i.Component);
    ((n = {})[o] = s().object.isRequired), (l.childContextTypes = n);
    var u = (function (t) {
        function n() {
            for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
                ((e = t.call.apply(t, [this].concat(r)) || this).observedBits = void 0),
                (e.state = { value: e.getValue() }),
                (e.onUpdate = function (t, n) {
                    (e.observedBits & n) != 0 && e.setState({ value: e.getValue() });
                }),
                e
            );
        }
        (0, r.A)(n, t);
        var i = n.prototype;
        return (
            (i.componentWillReceiveProps = function (e) {
                var t = e.observedBits;
                this.observedBits = null == t ? _ : t;
            }),
            (i.componentDidMount = function () {
                this.context[o] && this.context[o].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? _ : e;
            }),
            (i.componentWillUnmount = function () {
                this.context[o] && this.context[o].off(this.onUpdate);
            }),
            (i.getValue = function () {
                return this.context[o] ? this.context[o].get() : e;
            }),
            (i.render = function () {
                return E(this.props.children)(this.state.value);
            }),
            n
        );
    })(i.Component);
    return ((a = {})[o] = s().object), (u.contextTypes = a), { Provider: l, Consumer: u };
}
var I = i.createContext || A,
    T = function (e) {
        var t = I();
        return (t.displayName = e), t;
    },
    y = T("Router-History"),
    S = T("Router"),
    v = (function (e) {
        function t(t) {
            var n;
            return (
                ((n = e.call(this, t) || this).state = { location: t.history.location }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                t.staticContext ||
                    (n.unlisten = t.history.listen(function (e) {
                        n._pendingLocation = e;
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
                var e = this;
                (this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (t) {
                            e._isMounted && e.setState({ location: t });
                        })),
                    this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
                this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
                return i.createElement(
                    S.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: t.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    i.createElement(y.Provider, { children: this.props.children || null, value: this.props.history }),
                );
            }),
            t
        );
    })(i.Component);
i.Component;
var C = (function (e) {
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
    b = {},
    N = 1e4,
    R = 0;
function O(e) {
    if (b[e]) return b[e];
    var t = d().compile(e);
    return R < N && ((b[e] = t), R++), t;
}
function D(e, t) {
    return void 0 === e && (e = "/"), void 0 === t && (t = {}), "/" === e ? e : O(e)(t, { pretty: !0 });
}
function L(e) {
    var t = e.computedMatch,
        n = e.to,
        r = e.push,
        a = void 0 !== r && r;
    return i.createElement(S.Consumer, null, function (e) {
        e || (0, l.A)(!1);
        var r = e.history,
            s = e.staticContext,
            c = a ? r.push : r.replace,
            d = (0, o.yJ)(
                t
                    ? "string" == typeof n
                        ? D(n, t.params)
                        : (0, u.A)({}, n, { pathname: D(n.pathname, t.params) })
                    : n,
            );
        return s
            ? (c(d), null)
            : i.createElement(C, {
                  onMount: function () {
                      c(d);
                  },
                  onUpdate: function (e, t) {
                      var n = (0, o.yJ)(t.to);
                      (0, o.Fu)(n, (0, u.A)({}, d, { key: n.key })) || c(d);
                  },
                  to: n,
              });
    });
}
var w = {},
    x = 1e4,
    P = 0;
function M(e, t) {
    var n = "" + t.end + t.strict + t.sensitive,
        r = w[n] || (w[n] = {});
    if (r[e]) return r[e];
    var i = [],
        a = { regexp: d()(e, i, t), keys: i };
    return P < x && ((r[e] = a), P++), a;
}
function k(e, t) {
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
        var r = M(n, { end: a, strict: o, sensitive: u }),
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
function U(e) {
    return 0 === i.Children.count(e);
}
var G = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    return (
        (0, r.A)(t, e),
        (t.prototype.render = function () {
            var e = this;
            return i.createElement(S.Consumer, null, function (t) {
                t || (0, l.A)(!1);
                var n = e.props.location || t.location,
                    r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? k(n.pathname, e.props) : t.match,
                    a = (0, u.A)({}, t, { location: n, match: r }),
                    s = e.props,
                    o = s.children,
                    c = s.component,
                    d = s.render;
                return (
                    Array.isArray(o) && U(o) && (o = null),
                    i.createElement(
                        S.Provider,
                        { value: a },
                        a.match
                            ? o
                                ? "function" == typeof o
                                    ? o(a)
                                    : o
                                : c
                                  ? i.createElement(c, a)
                                  : d
                                    ? d(a)
                                    : null
                            : "function" == typeof o
                              ? o(a)
                              : null,
                    )
                );
            });
        }),
        t
    );
})(i.Component);
function F(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
i.Component;
var V = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        return (
            (0, r.A)(t, e),
            (t.prototype.render = function () {
                var e = this;
                return i.createElement(S.Consumer, null, function (t) {
                    t || (0, l.A)(!1);
                    var n,
                        r,
                        a = e.props.location || t.location;
                    return (
                        i.Children.forEach(e.props.children, function (e) {
                            if (null == r && i.isValidElement(e)) {
                                n = e;
                                var s = e.props.path || e.props.from;
                                r = s ? k(a.pathname, (0, u.A)({}, e.props, { path: s })) : t.match;
                            }
                        }),
                        r ? i.cloneElement(n, { location: a, computedMatch: r }) : null
                    );
                });
            }),
            t
        );
    })(i.Component),
    B = i.useContext;
function j() {
    return B(y);
}
function H() {
    return B(S).location;
}
function Y() {
    var e = B(S).match;
    return e ? e.params : {};
}
function W(e) {
    var t = H(),
        n = B(S).match;
    return e ? k(t.pathname, e) : n;
}
