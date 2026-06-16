function r(t, n) {
    return (r = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, n) {
              return (t.__proto__ = n), t;
          })(t, n);
}
function o(t, n) {
    (t.prototype = Object.create(n.prototype)), (t.prototype.constructor = t), r(t, n);
}
e.d(n, { B6: () => b, XZ: () => C, W6: () => w, Ix: () => _, y: () => R });
var i = e(64700),
    a = e(655972),
    u = e.n(a),
    c = (e(830845), "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== e.g ? e.g : {}),
    s =
        i.createContext ||
        function (t, n) {
            var e,
                r,
                a = "__create-react-context-" + (c.__global_unique_id__ = (c.__global_unique_id__ || 0) + 1) + "__",
                s = (function (t) {
                    function e() {
                        var n, e, r;
                        return (
                            (n = t.apply(this, arguments) || this),
                            (e = n.props.value),
                            (r = []),
                            (n.emitter = {
                                on: function (t) {
                                    r.push(t);
                                },
                                off: function (t) {
                                    r = r.filter(function (n) {
                                        return n !== t;
                                    });
                                },
                                get: function () {
                                    return e;
                                },
                                set: function (t, n) {
                                    (e = t),
                                        r.forEach(function (t) {
                                            return t(e, n);
                                        });
                                },
                            }),
                            n
                        );
                    }
                    o(e, t);
                    var r = e.prototype;
                    return (
                        (r.getChildContext = function () {
                            var t;
                            return ((t = {})[a] = this.emitter), t;
                        }),
                        (r.componentWillReceiveProps = function (t) {
                            if (this.props.value !== t.value) {
                                var e,
                                    r = this.props.value,
                                    o = t.value;
                                (r === o ? 0 !== r || 1 / r == 1 / o : r != r && o != o)
                                    ? (e = 0)
                                    : 0 != (e = ("function" == typeof n ? n(r, o) : 0x3fffffff) | 0) &&
                                      this.emitter.set(t.value, e);
                            }
                        }),
                        (r.render = function () {
                            return this.props.children;
                        }),
                        e
                    );
                })(i.Component);
            ((e = {})[a] = u().object.isRequired), (s.childContextTypes = e);
            var l = (function (n) {
                function e() {
                    var t;
                    return (
                        (t = n.apply(this, arguments) || this),
                        (t.state = { value: t.getValue() }),
                        (t.onUpdate = function (n, e) {
                            (t.observedBits & e) != 0 && t.setState({ value: t.getValue() });
                        }),
                        t
                    );
                }
                o(e, n);
                var r = e.prototype;
                return (
                    (r.componentWillReceiveProps = function (t) {
                        var n = t.observedBits;
                        this.observedBits = null == n ? 0x3fffffff : n;
                    }),
                    (r.componentDidMount = function () {
                        this.context[a] && this.context[a].on(this.onUpdate);
                        var t = this.props.observedBits;
                        this.observedBits = null == t ? 0x3fffffff : t;
                    }),
                    (r.componentWillUnmount = function () {
                        this.context[a] && this.context[a].off(this.onUpdate);
                    }),
                    (r.getValue = function () {
                        return this.context[a] ? this.context[a].get() : t;
                    }),
                    (r.render = function () {
                        var t;
                        return (Array.isArray((t = this.props.children)) ? t[0] : t)(this.state.value);
                    }),
                    e
                );
            })(i.Component);
            return ((r = {})[a] = u().object), (l.contextTypes = r), { Provider: s, Consumer: l };
        },
    l = e(258635);
function f() {
    return (f = Object.assign
        ? Object.assign.bind()
        : function (t) {
              for (var n = 1; n < arguments.length; n++) {
                  var e = arguments[n];
                  for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }
              return t;
          }).apply(null, arguments);
}
var p = e(353719),
    v = e.n(p);
e(53635);
var h = e(833871),
    d = e.n(h),
    m = function (t) {
        var n = s();
        return (n.displayName = t), n;
    },
    y = m("Router-History"),
    C = m("Router"),
    _ = (function (t) {
        function n(n) {
            var e;
            return (
                ((e = t.call(this, n) || this).state = { location: n.history.location }),
                (e._isMounted = !1),
                (e._pendingLocation = null),
                n.staticContext ||
                    (e.unlisten = n.history.listen(function (t) {
                        e._pendingLocation = t;
                    })),
                e
            );
        }
        o(n, t),
            (n.computeRootMatch = function (t) {
                return { path: "/", url: "/", params: {}, isExact: "/" === t };
            });
        var e = n.prototype;
        return (
            (e.componentDidMount = function () {
                var t = this;
                (this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (n) {
                            t._isMounted && t.setState({ location: n });
                        })),
                    this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (e.componentWillUnmount = function () {
                this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (e.render = function () {
                return i.createElement(
                    C.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: n.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    i.createElement(y.Provider, { children: this.props.children || null, value: this.props.history }),
                );
            }),
            n
        );
    })(i.Component);
i.Component, i.Component;
var g = {},
    x = 0;
function b(t, n) {
    void 0 === n && (n = {}), ("string" == typeof n || Array.isArray(n)) && (n = { path: n });
    var e = n,
        r = e.path,
        o = e.exact,
        i = void 0 !== o && o,
        a = e.strict,
        u = void 0 !== a && a,
        c = e.sensitive,
        s = void 0 !== c && c;
    return [].concat(r).reduce(function (n, e) {
        if (!e && "" !== e) return null;
        if (n) return n;
        var r = (function (t, n) {
                var e = "" + n.end + n.strict + n.sensitive,
                    r = g[e] || (g[e] = {});
                if (r[t]) return r[t];
                var o = [],
                    i = { regexp: v()(t, o, n), keys: o };
                return x < 1e4 && ((r[t] = i), x++), i;
            })(e, { end: i, strict: u, sensitive: s }),
            o = r.regexp,
            a = r.keys,
            c = o.exec(t);
        if (!c) return null;
        var l = c[0],
            f = c.slice(1),
            p = t === l;
        return i && !p
            ? null
            : {
                  path: e,
                  url: "/" === e && "" === l ? "/" : l,
                  isExact: p,
                  params: a.reduce(function (t, n, e) {
                      return (t[n.name] = f[e]), t;
                  }, {}),
              };
    }, null);
}
i.Component;
function R(t) {
    var n = "withRouter(" + (t.displayName || t.name) + ")",
        e = function (n) {
            var e = n.wrappedComponentRef,
                r = (function (t, n) {
                    if (null == t) return {};
                    var e = {};
                    for (var r in t)
                        if ({}.hasOwnProperty.call(t, r)) {
                            if (-1 !== n.indexOf(r)) continue;
                            e[r] = t[r];
                        }
                    return e;
                })(n, ["wrappedComponentRef"]);
            return i.createElement(C.Consumer, null, function (n) {
                return n || (0, l.A)(!1), i.createElement(t, f({}, r, n, { ref: e }));
            });
        };
    return (e.displayName = n), (e.WrappedComponent = t), d()(e, t);
}
i.Component, i.Component;
var A = i.useContext;
function w() {
    return A(y);
}
