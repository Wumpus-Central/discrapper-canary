"use strict";
function r(t, e) {
    return (r = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
              return (t.__proto__ = e), t;
          })(t, e);
}
function o(t, e) {
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), r(t, e);
}
n.d(e, { B6: () => R, XZ: () => g, W6: () => A, Ix: () => x, y: () => b });
var i = n(64700),
    a = n(655972),
    u = n.n(a),
    c = (n(830845), "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0 !== n.g ? n.g : {}),
    s =
        i.createContext ||
        function (t, e) {
            var n,
                r,
                a = "__create-react-context-" + (c.__global_unique_id__ = (c.__global_unique_id__ || 0) + 1) + "__",
                s = (function (t) {
                    function n() {
                        var e, n, r;
                        return (
                            (e = t.apply(this, arguments) || this),
                            (n = e.props.value),
                            (r = []),
                            (e.emitter = {
                                on: function (t) {
                                    r.push(t);
                                },
                                off: function (t) {
                                    r = r.filter(function (e) {
                                        return e !== t;
                                    });
                                },
                                get: function () {
                                    return n;
                                },
                                set: function (t, e) {
                                    (n = t),
                                        r.forEach(function (t) {
                                            return t(n, e);
                                        });
                                },
                            }),
                            e
                        );
                    }
                    o(n, t);
                    var r = n.prototype;
                    return (
                        (r.getChildContext = function () {
                            var t;
                            return ((t = {})[a] = this.emitter), t;
                        }),
                        (r.componentWillReceiveProps = function (t) {
                            if (this.props.value !== t.value) {
                                var n,
                                    r = this.props.value,
                                    o = t.value;
                                (r === o ? 0 !== r || 1 / r == 1 / o : r != r && o != o)
                                    ? (n = 0)
                                    : 0 != (n = ("function" == typeof e ? e(r, o) : 0x3fffffff) | 0) &&
                                      this.emitter.set(t.value, n);
                            }
                        }),
                        (r.render = function () {
                            return this.props.children;
                        }),
                        n
                    );
                })(i.Component);
            ((n = {})[a] = u().object.isRequired), (s.childContextTypes = n);
            var l = (function (e) {
                function n() {
                    var t;
                    return (
                        (t = e.apply(this, arguments) || this),
                        (t.state = { value: t.getValue() }),
                        (t.onUpdate = function (e, n) {
                            (t.observedBits & n) != 0 && t.setState({ value: t.getValue() });
                        }),
                        t
                    );
                }
                o(n, e);
                var r = n.prototype;
                return (
                    (r.componentWillReceiveProps = function (t) {
                        var e = t.observedBits;
                        this.observedBits = null == e ? 0x3fffffff : e;
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
                    n
                );
            })(i.Component);
            return ((r = {})[a] = u().object), (l.contextTypes = r), { Provider: s, Consumer: l };
        },
    l = n(258635);
function p() {
    return (p = Object.assign
        ? Object.assign.bind()
        : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
          }).apply(null, arguments);
}
var f = n(395445),
    v = n.n(f);
n(53635);
var h = n(833871),
    d = n.n(h),
    m = function (t) {
        var e = s();
        return (e.displayName = t), e;
    },
    y = m("Router-History"),
    g = m("Router"),
    x = (function (t) {
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
        o(e, t),
            (e.computeRootMatch = function (t) {
                return { path: "/", url: "/", params: {}, isExact: "/" === t };
            });
        var n = e.prototype;
        return (
            (n.componentDidMount = function () {
                var t = this;
                (this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (e) {
                            t._isMounted && t.setState({ location: e });
                        })),
                    this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
                this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
                return i.createElement(
                    g.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: e.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    i.createElement(y.Provider, { children: this.props.children || null, value: this.props.history }),
                );
            }),
            e
        );
    })(i.Component);
i.Component, i.Component;
var C = {},
    _ = 0;
function R(t, e) {
    void 0 === e && (e = {}), ("string" == typeof e || Array.isArray(e)) && (e = { path: e });
    var n = e,
        r = n.path,
        o = n.exact,
        i = void 0 !== o && o,
        a = n.strict,
        u = void 0 !== a && a,
        c = n.sensitive,
        s = void 0 !== c && c;
    return [].concat(r).reduce(function (e, n) {
        if (!n && "" !== n) return null;
        if (e) return e;
        var r = (function (t, e) {
                var n = "" + e.end + e.strict + e.sensitive,
                    r = C[n] || (C[n] = {});
                if (r[t]) return r[t];
                var o = [],
                    i = { regexp: v()(t, o, e), keys: o };
                return _ < 1e4 && ((r[t] = i), _++), i;
            })(n, { end: i, strict: u, sensitive: s }),
            o = r.regexp,
            a = r.keys,
            c = o.exec(t);
        if (!c) return null;
        var l = c[0],
            p = c.slice(1),
            f = t === l;
        return i && !f
            ? null
            : {
                  path: n,
                  url: "/" === n && "" === l ? "/" : l,
                  isExact: f,
                  params: a.reduce(function (t, e, n) {
                      return (t[e.name] = p[n]), t;
                  }, {}),
              };
    }, null);
}
i.Component;
function b(t) {
    var e = "withRouter(" + (t.displayName || t.name) + ")",
        n = function (e) {
            var n = e.wrappedComponentRef,
                r = (function (t, e) {
                    if (null == t) return {};
                    var n = {};
                    for (var r in t)
                        if ({}.hasOwnProperty.call(t, r)) {
                            if (-1 !== e.indexOf(r)) continue;
                            n[r] = t[r];
                        }
                    return n;
                })(e, ["wrappedComponentRef"]);
            return i.createElement(g.Consumer, null, function (e) {
                return e || (0, l.A)(!1), i.createElement(t, p({}, r, e, { ref: n }));
            });
        };
    return (n.displayName = e), (n.WrappedComponent = t), d()(n, t);
}
i.Component, i.Component;
var E = i.useContext;
function A() {
    return E(y);
}
