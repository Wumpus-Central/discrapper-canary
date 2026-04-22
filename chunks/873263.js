"use strict";
n.d(t, {
    B6: () => O,
    Ix: () => m,
    W5: () => w,
    W6: () => b,
    XZ: () => p,
    dO: () => v,
    g: () => L,
    qh: () => R,
    rd: () => S,
    zy: () => D,
});
var r = n(238710),
    i = n(64700),
    s = n(655972),
    a = n.n(s),
    o = n(830845),
    l = n(258635),
    u = n(542113),
    d = n(353719),
    c = n.n(d);
n(53635), n(725664), n(833871);
var _ = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== n.g ? n.g : {},
    f =
        i.createContext ||
        function (e, t) {
            var n,
                s,
                o = "__create-react-context-" + (_.__global_unique_id__ = (_.__global_unique_id__ || 0) + 1) + "__",
                l = (function (e) {
                    function n() {
                        for (var t, n, r, i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                        return (
                            (n = (t = e.call.apply(e, [this].concat(s)) || this).props.value),
                            (r = []),
                            (t.emitter = {
                                on: function (e) {
                                    r.push(e);
                                },
                                off: function (e) {
                                    r = r.filter(function (t) {
                                        return t !== e;
                                    });
                                },
                                get: function () {
                                    return n;
                                },
                                set: function (e, t) {
                                    (n = e),
                                        r.forEach(function (e) {
                                            return e(n, t);
                                        });
                                },
                            }),
                            t
                        );
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
                                (r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i)
                                    ? (n = 0)
                                    : 0 != (n = ("function" == typeof t ? t(r, i) : 0x3fffffff) | 0) &&
                                      this.emitter.set(e.value, n);
                            }
                        }),
                        (i.render = function () {
                            return this.props.children;
                        }),
                        n
                    );
                })(i.Component);
            ((n = {})[o] = a().object.isRequired), (l.childContextTypes = n);
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
                        this.observedBits = null == t ? 0x3fffffff : t;
                    }),
                    (i.componentDidMount = function () {
                        this.context[o] && this.context[o].on(this.onUpdate);
                        var e = this.props.observedBits;
                        this.observedBits = null == e ? 0x3fffffff : e;
                    }),
                    (i.componentWillUnmount = function () {
                        this.context[o] && this.context[o].off(this.onUpdate);
                    }),
                    (i.getValue = function () {
                        return this.context[o] ? this.context[o].get() : e;
                    }),
                    (i.render = function () {
                        var e;
                        return (Array.isArray((e = this.props.children)) ? e[0] : e)(this.state.value);
                    }),
                    n
                );
            })(i.Component);
            return ((s = {})[o] = a().object), (u.contextTypes = s), { Provider: l, Consumer: u };
        },
    E = function (e) {
        var t = f();
        return (t.displayName = e), t;
    },
    h = E("Router-History"),
    p = E("Router"),
    m = (function (e) {
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
                    p.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: t.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    i.createElement(h.Provider, { children: this.props.children || null, value: this.props.history }),
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
    A = {},
    I = 0;
function T(e, t) {
    return (
        void 0 === e && (e = "/"),
        void 0 === t && (t = {}),
        "/" === e
            ? e
            : (function (e) {
                  if (A[e]) return A[e];
                  var t = c().compile(e);
                  return I < 1e4 && ((A[e] = t), I++), t;
              })(e)(t, { pretty: !0 })
    );
}
function S(e) {
    var t = e.computedMatch,
        n = e.to,
        r = e.push,
        s = void 0 !== r && r;
    return i.createElement(p.Consumer, null, function (e) {
        e || (0, l.A)(!1);
        var r = e.history,
            a = e.staticContext,
            d = s ? r.push : r.replace,
            c = (0, o.yJ)(
                t
                    ? "string" == typeof n
                        ? T(n, t.params)
                        : (0, u.A)({}, n, { pathname: T(n.pathname, t.params) })
                    : n,
            );
        return a
            ? (d(c), null)
            : i.createElement(g, {
                  onMount: function () {
                      d(c);
                  },
                  onUpdate: function (e, t) {
                      var n = (0, o.yJ)(t.to);
                      (0, o.Fu)(n, (0, u.A)({}, c, { key: n.key })) || d(c);
                  },
                  to: n,
              });
    });
}
var y = {},
    N = 0;
function O(e, t) {
    void 0 === t && (t = {}), ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
    var n = t,
        r = n.path,
        i = n.exact,
        s = void 0 !== i && i,
        a = n.strict,
        o = void 0 !== a && a,
        l = n.sensitive,
        u = void 0 !== l && l;
    return [].concat(r).reduce(function (t, n) {
        if (!n && "" !== n) return null;
        if (t) return t;
        var r = (function (e, t) {
                var n = "" + t.end + t.strict + t.sensitive,
                    r = y[n] || (y[n] = {});
                if (r[e]) return r[e];
                var i = [],
                    s = { regexp: c()(e, i, t), keys: i };
                return N < 1e4 && ((r[e] = s), N++), s;
            })(n, { end: s, strict: o, sensitive: u }),
            i = r.regexp,
            a = r.keys,
            l = i.exec(e);
        if (!l) return null;
        var d = l[0],
            _ = l.slice(1),
            f = e === d;
        return s && !f
            ? null
            : {
                  path: n,
                  url: "/" === n && "" === d ? "/" : d,
                  isExact: f,
                  params: a.reduce(function (e, t, n) {
                      return (e[t.name] = _[n]), e;
                  }, {}),
              };
    }, null);
}
var R = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    return (
        (0, r.A)(t, e),
        (t.prototype.render = function () {
            var e = this;
            return i.createElement(p.Consumer, null, function (t) {
                t || (0, l.A)(!1);
                var n,
                    r = e.props.location || t.location,
                    s = e.props.computedMatch ? e.props.computedMatch : e.props.path ? O(r.pathname, e.props) : t.match,
                    a = (0, u.A)({}, t, { location: r, match: s }),
                    o = e.props,
                    d = o.children,
                    c = o.component,
                    _ = o.render;
                return (
                    Array.isArray(d) && ((n = d), 0 === i.Children.count(n)) && (d = null),
                    i.createElement(
                        p.Provider,
                        { value: a },
                        a.match
                            ? d
                                ? "function" == typeof d
                                    ? d(a)
                                    : d
                                : c
                                  ? i.createElement(c, a)
                                  : _
                                    ? _(a)
                                    : null
                            : "function" == typeof d
                              ? d(a)
                              : null,
                    )
                );
            });
        }),
        t
    );
})(i.Component);
i.Component;
var v = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        return (
            (0, r.A)(t, e),
            (t.prototype.render = function () {
                var e = this;
                return i.createElement(p.Consumer, null, function (t) {
                    t || (0, l.A)(!1);
                    var n,
                        r,
                        s = e.props.location || t.location;
                    return (
                        i.Children.forEach(e.props.children, function (e) {
                            if (null == r && i.isValidElement(e)) {
                                n = e;
                                var a = e.props.path || e.props.from;
                                r = a ? O(s.pathname, (0, u.A)({}, e.props, { path: a })) : t.match;
                            }
                        }),
                        r ? i.cloneElement(n, { location: s, computedMatch: r }) : null
                    );
                });
            }),
            t
        );
    })(i.Component),
    C = i.useContext;
function b() {
    return C(h);
}
function D() {
    return C(p).location;
}
function L() {
    var e = C(p).match;
    return e ? e.params : {};
}
function w(e) {
    var t = D(),
        n = C(p).match;
    return e ? O(t.pathname, e) : n;
}
