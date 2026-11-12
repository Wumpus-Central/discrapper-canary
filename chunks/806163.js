var i = n(721207),
    r = n(582128),
    o = n(655972),
    a = n.n(o),
    s = n(830845),
    c = n(258635),
    l = n(542113),
    u = n(353719),
    h = n.n(u);
(n(53635), n(725664), n(833871));
var p = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== n.g ? n.g : {},
    f =
        r.createContext ||
        function (t, e) {
            var n,
                o,
                s = "__create-react-context-" + (p.__global_unique_id__ = (p.__global_unique_id__ || 0) + 1) + "__",
                c = (function (t) {
                    function n() {
                        for (var e, n, i, r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return (
                            (n = (e = t.call.apply(t, [this].concat(o)) || this).props.value),
                            (i = []),
                            (e.emitter = {
                                on: function (t) {
                                    i.push(t);
                                },
                                off: function (t) {
                                    i = i.filter(function (e) {
                                        return e !== t;
                                    });
                                },
                                get: function () {
                                    return n;
                                },
                                set: function (t, e) {
                                    ((n = t),
                                        i.forEach(function (t) {
                                            return t(n, e);
                                        }));
                                },
                            }),
                            e
                        );
                    }
                    (0, i.A)(n, t);
                    var r = n.prototype;
                    return (
                        (r.getChildContext = function () {
                            var t;
                            return (((t = {})[s] = this.emitter), t);
                        }),
                        (r.componentWillReceiveProps = function (t) {
                            if (this.props.value !== t.value) {
                                var n,
                                    i = this.props.value,
                                    r = t.value;
                                (i === r ? 0 !== i || 1 / i == 1 / r : i != i && r != r)
                                    ? (n = 0)
                                    : 0 != (n = ("function" == typeof e ? e(i, r) : 0x3fffffff) | 0) &&
                                      this.emitter.set(t.value, n);
                            }
                        }),
                        (r.render = function () {
                            return this.props.children;
                        }),
                        n
                    );
                })(r.Component);
            (((n = {})[s] = a().object.isRequired), (c.childContextTypes = n));
            var l = (function (e) {
                function n() {
                    for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return (
                        ((t = e.call.apply(e, [this].concat(i)) || this).observedBits = void 0),
                        (t.state = { value: t.getValue() }),
                        (t.onUpdate = function (e, n) {
                            (t.observedBits & n) != 0 && t.setState({ value: t.getValue() });
                        }),
                        t
                    );
                }
                (0, i.A)(n, e);
                var r = n.prototype;
                return (
                    (r.componentWillReceiveProps = function (t) {
                        var e = t.observedBits;
                        this.observedBits = null == e ? 0x3fffffff : e;
                    }),
                    (r.componentDidMount = function () {
                        this.context[s] && this.context[s].on(this.onUpdate);
                        var t = this.props.observedBits;
                        this.observedBits = null == t ? 0x3fffffff : t;
                    }),
                    (r.componentWillUnmount = function () {
                        this.context[s] && this.context[s].off(this.onUpdate);
                    }),
                    (r.getValue = function () {
                        return this.context[s] ? this.context[s].get() : t;
                    }),
                    (r.render = function () {
                        var t;
                        return (Array.isArray((t = this.props.children)) ? t[0] : t)(this.state.value);
                    }),
                    n
                );
            })(r.Component);
            return (((o = {})[s] = a().object), (l.contextTypes = o), { Provider: c, Consumer: l });
        },
    d = function (t) {
        var e = f();
        return ((e.displayName = t), e);
    },
    g = d("Router-History"),
    _ = d("Router"),
    m = (function (t) {
        function e(e) {
            var n;
            return (
                ((n = t.call(this, e) || this).state = { location: e.history.location }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                e.staticContext ||
                    (n.unlisten = e.history.listen(function (t) {
                        n._pendingLocation = t;
                    })),
                n
            );
        }
        ((0, i.A)(e, t),
            (e.computeRootMatch = function (t) {
                return { path: "/", url: "/", params: {}, isExact: "/" === t };
            }));
        var n = e.prototype;
        return (
            (n.componentDidMount = function () {
                var t = this;
                ((this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (e) {
                            t._isMounted && t.setState({ location: e });
                        })),
                    this._pendingLocation && this.setState({ location: this._pendingLocation }));
            }),
            (n.componentWillUnmount = function () {
                this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
                return r.createElement(
                    _.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: e.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    r.createElement(g.Provider, { children: this.props.children || null, value: this.props.history }),
                );
            }),
            e
        );
    })(r.Component);
r.Component;
var y = (function (t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        (0, i.A)(e, t);
        var n = e.prototype;
        return (
            (n.componentDidMount = function () {
                this.props.onMount && this.props.onMount.call(this, this);
            }),
            (n.componentDidUpdate = function (t) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, t);
            }),
            (n.componentWillUnmount = function () {
                this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (n.render = function () {
                return null;
            }),
            e
        );
    })(r.Component),
    b = {},
    v = 0;
function w(t, e) {
    return (
        void 0 === t && (t = "/"),
        void 0 === e && (e = {}),
        "/" === t
            ? t
            : (function (t) {
                  if (b[t]) return b[t];
                  var e = h().compile(t);
                  return (v < 1e4 && ((b[t] = e), v++), e);
              })(t)(e, { pretty: !0 })
    );
}
var x = {},
    E = 0;
function S(t, e) {
    (void 0 === e && (e = {}), ("string" == typeof e || Array.isArray(e)) && (e = { path: e }));
    var n = e,
        i = n.path,
        r = n.exact,
        o = void 0 !== r && r,
        a = n.strict,
        s = void 0 !== a && a,
        c = n.sensitive,
        l = void 0 !== c && c;
    return [].concat(i).reduce(function (e, n) {
        if (!n && "" !== n) return null;
        if (e) return e;
        var i = (function (t, e) {
                var n = "" + e.end + e.strict + e.sensitive,
                    i = x[n] || (x[n] = {});
                if (i[t]) return i[t];
                var r = [],
                    o = { regexp: h()(t, r, e), keys: r };
                return (E < 1e4 && ((i[t] = o), E++), o);
            })(n, { end: o, strict: s, sensitive: l }),
            r = i.regexp,
            a = i.keys,
            c = r.exec(t);
        if (!c) return null;
        var u = c[0],
            p = c.slice(1),
            f = t === u;
        return o && !f
            ? null
            : {
                  path: n,
                  url: "/" === n && "" === u ? "/" : u,
                  isExact: f,
                  params: a.reduce(function (t, e, n) {
                      return ((t[e.name] = p[n]), t);
                  }, {}),
              };
    }, null);
}
var T = (function (t) {
    function e() {
        return t.apply(this, arguments) || this;
    }
    return (
        (0, i.A)(e, t),
        (e.prototype.render = function () {
            var t = this;
            return r.createElement(_.Consumer, null, function (e) {
                e || (0, c.A)(!1);
                var n,
                    i = t.props.location || e.location,
                    o = t.props.computedMatch ? t.props.computedMatch : t.props.path ? S(i.pathname, t.props) : e.match,
                    a = (0, l.A)({}, e, { location: i, match: o }),
                    s = t.props,
                    u = s.children,
                    h = s.component,
                    p = s.render;
                return (
                    Array.isArray(u) && ((n = u), 0 === r.Children.count(n)) && (u = null),
                    r.createElement(
                        _.Provider,
                        { value: a },
                        a.match
                            ? u
                                ? "function" == typeof u
                                    ? u(a)
                                    : u
                                : h
                                  ? r.createElement(h, a)
                                  : p
                                    ? p(a)
                                    : null
                            : "function" == typeof u
                              ? u(a)
                              : null,
                    )
                );
            });
        }),
        e
    );
})(r.Component);
r.Component;
var A = (function (t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        return (
            (0, i.A)(e, t),
            (e.prototype.render = function () {
                var t = this;
                return r.createElement(_.Consumer, null, function (e) {
                    e || (0, c.A)(!1);
                    var n,
                        i,
                        o = t.props.location || e.location;
                    return (
                        r.Children.forEach(t.props.children, function (t) {
                            if (null == i && r.isValidElement(t)) {
                                n = t;
                                var a = t.props.path || t.props.from;
                                i = a ? S(o.pathname, (0, l.A)({}, t.props, { path: a })) : e.match;
                            }
                        }),
                        i ? r.cloneElement(n, { location: o, computedMatch: i }) : null
                    );
                });
            }),
            e
        );
    })(r.Component),
    R = r.useContext;
function C() {
    return R(_).location;
}
n.d(
    e,
    {},
    {
        B6: S,
        Ix: m,
        W5: function (t) {
            var e = C(),
                n = R(_).match;
            return t ? S(e.pathname, t) : n;
        },
        W6: function () {
            return R(g);
        },
        XZ: _,
        dO: A,
        g: function () {
            var t = R(_).match;
            return t ? t.params : {};
        },
        qh: T,
        rd: function (t) {
            var e = t.computedMatch,
                n = t.to,
                i = t.push,
                o = void 0 !== i && i;
            return r.createElement(_.Consumer, null, function (t) {
                t || (0, c.A)(!1);
                var i = t.history,
                    a = t.staticContext,
                    u = o ? i.push : i.replace,
                    h = (0, s.yJ)(
                        e
                            ? "string" == typeof n
                                ? w(n, e.params)
                                : (0, l.A)({}, n, { pathname: w(n.pathname, e.params) })
                            : n,
                    );
                return a
                    ? (u(h), null)
                    : r.createElement(y, {
                          onMount: function () {
                              u(h);
                          },
                          onUpdate: function (t, e) {
                              var n = (0, s.yJ)(e.to);
                              (0, s.Fu)(n, (0, l.A)({}, h, { key: n.key })) || u(h);
                          },
                          to: n,
                      });
            });
        },
        zy: C,
    },
);
