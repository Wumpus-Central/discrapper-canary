r.d(t, {
    B6: () => R,
    Ix: () => b,
    W5: () => P,
    W6: () => I,
    XZ: () => m,
    dO: () => E,
    g: () => k,
    qh: () => S,
    rd: () => M,
    zy: () => T,
});
var n = r(750573),
    o = r(582128),
    a = r(655972),
    i = r.n(a),
    s = r(830845),
    c = r(258635),
    l = r(542113),
    u = r(353719),
    h = r.n(u);
(r(53635), r(725664), r(833871));
var f = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== r.g ? r.g : {},
    d =
        o.createContext ||
        function (e, t) {
            var r,
                a,
                s = "__create-react-context-" + (f.__global_unique_id__ = (f.__global_unique_id__ || 0) + 1) + "__",
                c = (function (e) {
                    function r() {
                        for (var t, r, n, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return (
                            (r = (t = e.call.apply(e, [this].concat(a)) || this).props.value),
                            (n = []),
                            (t.emitter = {
                                on: function (e) {
                                    n.push(e);
                                },
                                off: function (e) {
                                    n = n.filter(function (t) {
                                        return t !== e;
                                    });
                                },
                                get: function () {
                                    return r;
                                },
                                set: function (e, t) {
                                    ((r = e),
                                        n.forEach(function (e) {
                                            return e(r, t);
                                        }));
                                },
                            }),
                            t
                        );
                    }
                    (0, n.A)(r, e);
                    var o = r.prototype;
                    return (
                        (o.getChildContext = function () {
                            var e;
                            return (((e = {})[s] = this.emitter), e);
                        }),
                        (o.componentWillReceiveProps = function (e) {
                            if (this.props.value !== e.value) {
                                var r,
                                    n = this.props.value,
                                    o = e.value;
                                (n === o ? 0 !== n || 1 / n == 1 / o : n != n && o != o)
                                    ? (r = 0)
                                    : 0 != (r = ("function" == typeof t ? t(n, o) : 0x3fffffff) | 0) &&
                                      this.emitter.set(e.value, r);
                            }
                        }),
                        (o.render = function () {
                            return this.props.children;
                        }),
                        r
                    );
                })(o.Component);
            (((r = {})[s] = i().object.isRequired), (c.childContextTypes = r));
            var l = (function (t) {
                function r() {
                    for (var e, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return (
                        ((e = t.call.apply(t, [this].concat(n)) || this).observedBits = void 0),
                        (e.state = { value: e.getValue() }),
                        (e.onUpdate = function (t, r) {
                            (e.observedBits & r) != 0 && e.setState({ value: e.getValue() });
                        }),
                        e
                    );
                }
                (0, n.A)(r, t);
                var o = r.prototype;
                return (
                    (o.componentWillReceiveProps = function (e) {
                        var t = e.observedBits;
                        this.observedBits = null == t ? 0x3fffffff : t;
                    }),
                    (o.componentDidMount = function () {
                        this.context[s] && this.context[s].on(this.onUpdate);
                        var e = this.props.observedBits;
                        this.observedBits = null == e ? 0x3fffffff : e;
                    }),
                    (o.componentWillUnmount = function () {
                        this.context[s] && this.context[s].off(this.onUpdate);
                    }),
                    (o.getValue = function () {
                        return this.context[s] ? this.context[s].get() : e;
                    }),
                    (o.render = function () {
                        var e;
                        return (Array.isArray((e = this.props.children)) ? e[0] : e)(this.state.value);
                    }),
                    r
                );
            })(o.Component);
            return (((a = {})[s] = i().object), (l.contextTypes = a), { Provider: c, Consumer: l });
        },
    p = function (e) {
        var t = d();
        return ((t.displayName = e), t);
    },
    g = p("Router-History"),
    m = p("Router"),
    b = (function (e) {
        function t(t) {
            var r;
            return (
                ((r = e.call(this, t) || this).state = { location: t.history.location }),
                (r._isMounted = !1),
                (r._pendingLocation = null),
                t.staticContext ||
                    (r.unlisten = t.history.listen(function (e) {
                        r._pendingLocation = e;
                    })),
                r
            );
        }
        ((0, n.A)(t, e),
            (t.computeRootMatch = function (e) {
                return { path: "/", url: "/", params: {}, isExact: "/" === e };
            }));
        var r = t.prototype;
        return (
            (r.componentDidMount = function () {
                var e = this;
                ((this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (t) {
                            e._isMounted && e.setState({ location: t });
                        })),
                    this._pendingLocation && this.setState({ location: this._pendingLocation }));
            }),
            (r.componentWillUnmount = function () {
                this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (r.render = function () {
                return o.createElement(
                    m.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: t.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    o.createElement(g.Provider, { children: this.props.children || null, value: this.props.history }),
                );
            }),
            t
        );
    })(o.Component);
o.Component;
var _ = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        (0, n.A)(t, e);
        var r = t.prototype;
        return (
            (r.componentDidMount = function () {
                this.props.onMount && this.props.onMount.call(this, this);
            }),
            (r.componentDidUpdate = function (e) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, e);
            }),
            (r.componentWillUnmount = function () {
                this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (r.render = function () {
                return null;
            }),
            t
        );
    })(o.Component),
    y = {},
    w = 0;
function v(e, t) {
    return (
        void 0 === e && (e = "/"),
        void 0 === t && (t = {}),
        "/" === e
            ? e
            : (function (e) {
                  if (y[e]) return y[e];
                  var t = h().compile(e);
                  return (w < 1e4 && ((y[e] = t), w++), t);
              })(e)(t, { pretty: !0 })
    );
}
function M(e) {
    var t = e.computedMatch,
        r = e.to,
        n = e.push,
        a = void 0 !== n && n;
    return o.createElement(m.Consumer, null, function (e) {
        e || (0, c.A)(!1);
        var n = e.history,
            i = e.staticContext,
            u = a ? n.push : n.replace,
            h = (0, s.yJ)(
                t
                    ? "string" == typeof r
                        ? v(r, t.params)
                        : (0, l.A)({}, r, { pathname: v(r.pathname, t.params) })
                    : r,
            );
        return i
            ? (u(h), null)
            : o.createElement(_, {
                  onMount: function () {
                      u(h);
                  },
                  onUpdate: function (e, t) {
                      var r = (0, s.yJ)(t.to);
                      (0, s.Fu)(r, (0, l.A)({}, h, { key: r.key })) || u(h);
                  },
                  to: r,
              });
    });
}
var x = {},
    C = 0;
function R(e, t) {
    (void 0 === t && (t = {}), ("string" == typeof t || Array.isArray(t)) && (t = { path: t }));
    var r = t,
        n = r.path,
        o = r.exact,
        a = void 0 !== o && o,
        i = r.strict,
        s = void 0 !== i && i,
        c = r.sensitive,
        l = void 0 !== c && c;
    return [].concat(n).reduce(function (t, r) {
        if (!r && "" !== r) return null;
        if (t) return t;
        var n = (function (e, t) {
                var r = "" + t.end + t.strict + t.sensitive,
                    n = x[r] || (x[r] = {});
                if (n[e]) return n[e];
                var o = [],
                    a = { regexp: h()(e, o, t), keys: o };
                return (C < 1e4 && ((n[e] = a), C++), a);
            })(r, { end: a, strict: s, sensitive: l }),
            o = n.regexp,
            i = n.keys,
            c = o.exec(e);
        if (!c) return null;
        var u = c[0],
            f = c.slice(1),
            d = e === u;
        return a && !d
            ? null
            : {
                  path: r,
                  url: "/" === r && "" === u ? "/" : u,
                  isExact: d,
                  params: i.reduce(function (e, t, r) {
                      return ((e[t.name] = f[r]), e);
                  }, {}),
              };
    }, null);
}
var S = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    return (
        (0, n.A)(t, e),
        (t.prototype.render = function () {
            var e = this;
            return o.createElement(m.Consumer, null, function (t) {
                t || (0, c.A)(!1);
                var r,
                    n = e.props.location || t.location,
                    a = e.props.computedMatch ? e.props.computedMatch : e.props.path ? R(n.pathname, e.props) : t.match,
                    i = (0, l.A)({}, t, { location: n, match: a }),
                    s = e.props,
                    u = s.children,
                    h = s.component,
                    f = s.render;
                return (
                    Array.isArray(u) && ((r = u), 0 === o.Children.count(r)) && (u = null),
                    o.createElement(
                        m.Provider,
                        { value: i },
                        i.match
                            ? u
                                ? "function" == typeof u
                                    ? u(i)
                                    : u
                                : h
                                  ? o.createElement(h, i)
                                  : f
                                    ? f(i)
                                    : null
                            : "function" == typeof u
                              ? u(i)
                              : null,
                    )
                );
            });
        }),
        t
    );
})(o.Component);
o.Component;
var E = (function (e) {
        function t() {
            return e.apply(this, arguments) || this;
        }
        return (
            (0, n.A)(t, e),
            (t.prototype.render = function () {
                var e = this;
                return o.createElement(m.Consumer, null, function (t) {
                    t || (0, c.A)(!1);
                    var r,
                        n,
                        a = e.props.location || t.location;
                    return (
                        o.Children.forEach(e.props.children, function (e) {
                            if (null == n && o.isValidElement(e)) {
                                r = e;
                                var i = e.props.path || e.props.from;
                                n = i ? R(a.pathname, (0, l.A)({}, e.props, { path: i })) : t.match;
                            }
                        }),
                        n ? o.cloneElement(r, { location: a, computedMatch: n }) : null
                    );
                });
            }),
            t
        );
    })(o.Component),
    A = o.useContext;
function I() {
    return A(g);
}
function T() {
    return A(m).location;
}
function k() {
    var e = A(m).match;
    return e ? e.params : {};
}
function P(e) {
    var t = T(),
        r = A(m).match;
    return e ? R(t.pathname, e) : r;
}
