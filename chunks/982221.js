"use strict";
var r = n(72290),
    i = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    f = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    h = Symbol.iterator,
    p = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    m = Object.assign,
    g = {};
function A(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p);
}
function I() {}
function T(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p);
}
(A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables.",
            );
        this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (A.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (I.prototype = A.prototype);
var S = (T.prototype = new I());
(S.constructor = T), m(S, A.prototype), (S.isPureReactComponent = !0);
var y = Array.isArray,
    N = { H: null, A: null, T: null, S: null, V: null },
    O = Object.prototype.hasOwnProperty;
function R(e, t, n, r, s, a) {
    return { $$typeof: i, type: e, key: t, ref: void 0 !== (n = a.ref) ? n : null, props: a };
}
function v(e) {
    return "object" == typeof e && null !== e && e.$$typeof === i;
}
var C = /\/+/g;
function b(e, t) {
    var n, r;
    return "object" == typeof e && null !== e && null != e.key
        ? ((n = "" + e.key),
          (r = { "=": "=0", ":": "=2" }),
          "$" +
              n.replace(/[=:]/g, function (e) {
                  return r[e];
              }))
        : t.toString(36);
}
function D() {}
function L(e, t, n) {
    if (null == e) return e;
    var r = [],
        a = 0;
    return (
        !(function e(t, n, r, a, o) {
            var l,
                u,
                d,
                c = typeof t;
            ("undefined" === c || "boolean" === c) && (t = null);
            var _ = !1;
            if (null === t) _ = !0;
            else
                switch (c) {
                    case "bigint":
                    case "string":
                    case "number":
                        _ = !0;
                        break;
                    case "object":
                        switch (t.$$typeof) {
                            case i:
                            case s:
                                _ = !0;
                                break;
                            case E:
                                return e((_ = t._init)(t._payload), n, r, a, o);
                        }
                }
            if (_)
                return (
                    (o = o(t)),
                    (_ = "" === a ? "." + b(t, 0) : a),
                    y(o)
                        ? ((r = ""),
                          null != _ && (r = _.replace(C, "$&/") + "/"),
                          e(o, n, r, "", function (e) {
                              return e;
                          }))
                        : null != o &&
                          (v(o) &&
                              ((l = o),
                              (u =
                                  r +
                                  (null == o.key || (t && t.key === o.key)
                                      ? ""
                                      : ("" + o.key).replace(C, "$&/") + "/") +
                                  _),
                              (o = R(l.type, u, void 0, void 0, void 0, l.props))),
                          n.push(o)),
                    1
                );
            _ = 0;
            var f = "" === a ? "." : a + ":";
            if (y(t)) for (var p = 0; p < t.length; p++) (c = f + b((a = t[p]), p)), (_ += e(a, n, r, c, o));
            else if (
                "function" ==
                typeof (p =
                    null === (d = t) || "object" != typeof d
                        ? null
                        : "function" == typeof (d = (h && d[h]) || d["@@iterator"])
                          ? d
                          : null)
            )
                for (t = p.call(t), p = 0; !(a = t.next()).done; )
                    (c = f + b((a = a.value), p++)), (_ += e(a, n, r, c, o));
            else if ("object" === c) {
                if ("function" == typeof t.then)
                    return e(
                        (function (e) {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    switch (
                                        ("string" == typeof e.status
                                            ? e.then(D, D)
                                            : ((e.status = "pending"),
                                              e.then(
                                                  function (t) {
                                                      "pending" === e.status &&
                                                          ((e.status = "fulfilled"), (e.value = t));
                                                  },
                                                  function (t) {
                                                      "pending" === e.status &&
                                                          ((e.status = "rejected"), (e.reason = t));
                                                  },
                                              )),
                                        e.status)
                                    ) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason;
                                    }
                            }
                            throw e;
                        })(t),
                        n,
                        r,
                        a,
                        o,
                    );
                throw Error(
                    "Objects are not valid as a React child (found: " +
                        ("[object Object]" === (n = String(t))
                            ? "object with keys {" + Object.keys(t).join(", ") + "}"
                            : n) +
                        "). If you meant to render a collection of children, use an array instead.",
                );
            }
            return _;
        })(e, r, "", "", function (e) {
            return t.call(n, e, a++);
        }),
        r
    );
}
function w(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
            },
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
            },
        ),
            -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var M =
    "function" == typeof reportError
        ? reportError
        : function (e) {
              if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                  var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                          "object" == typeof e && null !== e && "string" == typeof e.message
                              ? String(e.message)
                              : String(e),
                      error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
              } else if ("object" == typeof r && "function" == typeof r.emit)
                  return void r.emit("uncaughtException", e);
              console.error(e);
          };
function P() {}
(t.Children = {
    map: L,
    forEach: function (e, t, n) {
        L(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            L(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            L(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!v(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
}),
    (t.Component = A),
    (t.Fragment = a),
    (t.Profiler = l),
    (t.PureComponent = T),
    (t.StrictMode = o),
    (t.Suspense = _),
    (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N),
    (t.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
            return N.H.useMemoCache(e);
        },
    }),
    (t.cache = function (e) {
        return function () {
            return e.apply(null, arguments);
        };
    }),
    (t.cloneElement = function (e, t, n) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var r = m({}, e.props),
            i = e.key,
            s = void 0;
        if (null != t)
            for (a in (void 0 !== t.ref && (s = void 0), void 0 !== t.key && (i = "" + t.key), t))
                O.call(t, a) &&
                    "key" !== a &&
                    "__self" !== a &&
                    "__source" !== a &&
                    ("ref" !== a || void 0 !== t.ref) &&
                    (r[a] = t[a]);
        var a = arguments.length - 2;
        if (1 === a) r.children = n;
        else if (1 < a) {
            for (var o = Array(a), l = 0; l < a; l++) o[l] = arguments[l + 2];
            r.children = o;
        }
        return R(e.type, i, void 0, void 0, s, r);
    }),
    (t.createContext = function (e) {
        return (
            ((e = {
                $$typeof: d,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
            }).Provider = e),
            (e.Consumer = { $$typeof: u, _context: e }),
            e
        );
    }),
    (t.createElement = function (e, t, n) {
        var r,
            i = {},
            s = null;
        if (null != t)
            for (r in (void 0 !== t.key && (s = "" + t.key), t))
                O.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (i[r] = t[r]);
        var a = arguments.length - 2;
        if (1 === a) i.children = n;
        else if (1 < a) {
            for (var o = Array(a), l = 0; l < a; l++) o[l] = arguments[l + 2];
            i.children = o;
        }
        if (e && e.defaultProps) for (r in (a = e.defaultProps)) void 0 === i[r] && (i[r] = a[r]);
        return R(e, s, void 0, void 0, null, i);
    }),
    (t.createRef = function () {
        return { current: null };
    }),
    (t.forwardRef = function (e) {
        return { $$typeof: c, render: e };
    }),
    (t.isValidElement = v),
    (t.lazy = function (e) {
        return { $$typeof: E, _payload: { _status: -1, _result: e }, _init: w };
    }),
    (t.memo = function (e, t) {
        return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
    }),
    (t.startTransition = function (e) {
        var t = N.T,
            n = {};
        N.T = n;
        try {
            var r = e(),
                i = N.S;
            null !== i && i(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(P, M);
        } catch (e) {
            M(e);
        } finally {
            N.T = t;
        }
    }),
    (t.unstable_useCacheRefresh = function () {
        return N.H.useCacheRefresh();
    }),
    (t.use = function (e) {
        return N.H.use(e);
    }),
    (t.useActionState = function (e, t, n) {
        return N.H.useActionState(e, t, n);
    }),
    (t.useCallback = function (e, t) {
        return N.H.useCallback(e, t);
    }),
    (t.useContext = function (e) {
        return N.H.useContext(e);
    }),
    (t.useDebugValue = function () {}),
    (t.useDeferredValue = function (e, t) {
        return N.H.useDeferredValue(e, t);
    }),
    (t.useEffect = function (e, t, n) {
        var r = N.H;
        if ("function" == typeof n) throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return r.useEffect(e, t);
    }),
    (t.useId = function () {
        return N.H.useId();
    }),
    (t.useImperativeHandle = function (e, t, n) {
        return N.H.useImperativeHandle(e, t, n);
    }),
    (t.useInsertionEffect = function (e, t) {
        return N.H.useInsertionEffect(e, t);
    }),
    (t.useLayoutEffect = function (e, t) {
        return N.H.useLayoutEffect(e, t);
    }),
    (t.useMemo = function (e, t) {
        return N.H.useMemo(e, t);
    }),
    (t.useOptimistic = function (e, t) {
        return N.H.useOptimistic(e, t);
    }),
    (t.useReducer = function (e, t, n) {
        return N.H.useReducer(e, t, n);
    }),
    (t.useRef = function (e) {
        return N.H.useRef(e);
    }),
    (t.useState = function (e) {
        return N.H.useState(e);
    }),
    (t.useSyncExternalStore = function (e, t, n) {
        return N.H.useSyncExternalStore(e, t, n);
    }),
    (t.useTransition = function () {
        return N.H.useTransition();
    }),
    (t.version = "19.1.0");
