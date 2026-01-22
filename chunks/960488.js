n.d(t, {
    B6: () => N,
    Ix: () => m,
    W5: () => k,
    W6: () => L,
    XZ: () => h,
    dO: () => P,
    g: () => M,
    qh: () => R,
    rd: () => v,
    y: () => D,
    zy: () => j,
});
var r = n(47312),
    i = n(64700);
n(655972);
var a = n(830845),
    s = n(777211),
    o = n(258635),
    l = n(1139),
    c = n(353719),
    u = n.n(c);
n(53635);
var d = n(299146),
    f = n(833871),
    p = n.n(f),
    _ = (function (e) {
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
                ((n = e.call(this, t) || this).state = {
                    location: t.history.location,
                }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                t.staticContext ||
                    (n.unlisten = t.history.listen(function (e) {
                        n._isMounted
                            ? n.setState({
                                  location: e,
                              })
                            : (n._pendingLocation = e);
                    })),
                n
            );
        }
        (0, r.A)(t, e),
            (t.computeRootMatch = function (e) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: "/" === e,
                };
            });
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this._isMounted = !0),
                    this._pendingLocation &&
                        this.setState({
                            location: this._pendingLocation,
                        });
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
                    i.createElement(_.Provider, {
                        children: this.props.children || null,
                        value: this.props.history,
                    }),
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
    b = 1e4,
    y = 0;

function O(e) {
    if (E[e]) return E[e];
    var t = u().compile(e);
    return y < b && ((E[e] = t), y++), t;
}

function A(e, t) {
    return (
        void 0 === e && (e = "/"),
        void 0 === t && (t = {}),
        "/" === e
            ? e
            : O(e)(t, {
                  pretty: !0,
              })
    );
}

function v(e) {
    var t = e.computedMatch,
        n = e.to,
        r = e.push,
        s = void 0 !== r && r;
    return i.createElement(h.Consumer, null, function (e) {
        e || (0, o.A)(!1);
        var r = e.history,
            c = e.staticContext,
            u = s ? r.push : r.replace,
            d = (0, a.yJ)(
                t
                    ? "string" == typeof n
                        ? A(n, t.params)
                        : (0, l.A)({}, n, {
                              pathname: A(n.pathname, t.params),
                          })
                    : n,
            );
        return c
            ? (u(d), null)
            : i.createElement(g, {
                  onMount: function () {
                      u(d);
                  },
                  onUpdate: function (e, t) {
                      var n = (0, a.yJ)(t.to);
                      (0, a.Fu)(
                          n,
                          (0, l.A)({}, d, {
                              key: n.key,
                          }),
                      ) || u(d);
                  },
                  to: n,
              });
    });
}
var S = {},
    I = 1e4,
    T = 0;

function C(e, t) {
    var n = "" + t.end + t.strict + t.sensitive,
        r = S[n] || (S[n] = {});
    if (r[e]) return r[e];
    var i = [],
        a = {
            regexp: u()(e, i, t),
            keys: i,
        };
    return T < I && ((r[e] = a), T++), a;
}

function N(e, t) {
    void 0 === t && (t = {}),
        ("string" == typeof t || Array.isArray(t)) &&
            (t = {
                path: t,
            });
    var n = t,
        r = n.path,
        i = n.exact,
        a = void 0 !== i && i,
        s = n.strict,
        o = void 0 !== s && s,
        l = n.sensitive,
        c = void 0 !== l && l;
    return [].concat(r).reduce(function (t, n) {
        if (!n && "" !== n) return null;
        if (t) return t;
        var r = C(n, {
                end: a,
                strict: o,
                sensitive: c,
            }),
            i = r.regexp,
            s = r.keys,
            l = i.exec(e);
        if (!l) return null;
        var u = l[0],
            d = l.slice(1),
            f = e === u;
        return a && !f
            ? null
            : {
                  path: n,
                  url: "/" === n && "" === u ? "/" : u,
                  isExact: f,
                  params: s.reduce(function (e, t, n) {
                      return (e[t.name] = d[n]), e;
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
            return i.createElement(h.Consumer, null, function (t) {
                t || (0, o.A)(!1);
                var n = e.props.location || t.location,
                    r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? N(n.pathname, e.props) : t.match,
                    a = (0, l.A)({}, t, {
                        location: n,
                        match: r,
                    }),
                    s = e.props,
                    c = s.children,
                    u = s.component,
                    d = s.render;
                return (
                    Array.isArray(c) && 0 === c.length && (c = null),
                    i.createElement(
                        h.Provider,
                        {
                            value: a,
                        },
                        a.match
                            ? c
                                ? "function" == typeof c
                                    ? c(a)
                                    : c
                                : u
                                  ? i.createElement(u, a)
                                  : d
                                    ? d(a)
                                    : null
                            : "function" == typeof c
                              ? c(a)
                              : null,
                    )
                );
            });
        }),
        t
    );
})(i.Component);

function w(e) {
    return "/" === e.charAt(0) ? e : "/" + e;
}
i.Component;
var P = (function (e) {
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
                            r = s
                                ? N(
                                      a.pathname,
                                      (0, l.A)({}, e.props, {
                                          path: s,
                                      }),
                                  )
                                : t.match;
                        }
                    }),
                    r
                        ? i.cloneElement(n, {
                              location: a,
                              computedMatch: r,
                          })
                        : null
                );
            });
        }),
        t
    );
})(i.Component);

function D(e) {
    var t = "withRouter(" + (e.displayName || e.name) + ")",
        n = function (t) {
            var n = t.wrappedComponentRef,
                r = (0, d.A)(t, ["wrappedComponentRef"]);
            return i.createElement(h.Consumer, null, function (t) {
                return (
                    t || (0, o.A)(!1),
                    i.createElement(
                        e,
                        (0, l.A)({}, r, t, {
                            ref: n,
                        }),
                    )
                );
            });
        };
    return (n.displayName = t), (n.WrappedComponent = e), p()(n, e);
}
var x = i.useContext;

function L() {
    return x(_);
}

function j() {
    return x(h).location;
}

function M() {
    var e = x(h).match;
    return e ? e.params : {};
}

function k(e) {
    var t = j(),
        n = x(h).match;
    return e ? N(t.pathname, e) : n;
}
