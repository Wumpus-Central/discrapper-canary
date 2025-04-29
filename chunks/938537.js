var r = n(444675),
    i = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    l = Symbol.for('react.profiler'),
    c = Symbol.for('react.consumer'),
    u = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    f = Symbol.for('react.suspense'),
    _ = Symbol.for('react.memo'),
    p = Symbol.for('react.lazy'),
    h = Symbol.iterator;
function m(e) {
    return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (h && e[h]) || e['@@iterator']) ? e : null;
}
var g = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    E = Object.assign,
    b = {};
function y(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || g);
}
function O() {}
function v(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || g);
}
(y.prototype.isReactComponent = {}),
    (y.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e) throw Error('takes an object of state variables to update or a function which returns an object of state variables.');
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (O.prototype = y.prototype);
var I = (v.prototype = new O());
(I.constructor = v), E(I, y.prototype), (I.isPureReactComponent = !0);
var S = Array.isArray,
    T = {
        H: null,
        A: null,
        T: null,
        S: null
    },
    A = Object.prototype.hasOwnProperty;
function N(e, t, n, r, o, a) {
    return {
        $$typeof: i,
        type: e,
        key: t,
        ref: void 0 !== (n = a.ref) ? n : null,
        props: a
    };
}
function C(e, t) {
    return N(e.type, t, void 0, void 0, void 0, e.props);
}
function R(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === i;
}
function P(e) {
    var t = {
        '=': '=0',
        ':': '=2'
    };
    return (
        '$' +
        e.replace(/[=:]/g, function (e) {
            return t[e];
        })
    );
}
var w = /\/+/g;
function D(e, t) {
    return 'object' == typeof e && null !== e && null != e.key ? P('' + e.key) : t.toString(36);
}
function L() {}
function x(e) {
    switch (e.status) {
        case 'fulfilled':
            return e.value;
        case 'rejected':
            throw e.reason;
        default:
            switch (
                ('string' == typeof e.status
                    ? e.then(L, L)
                    : ((e.status = 'pending'),
                      e.then(
                          function (t) {
                              'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t));
                          },
                          function (t) {
                              'pending' === e.status && ((e.status = 'rejected'), (e.reason = t));
                          }
                      )),
                e.status)
            ) {
                case 'fulfilled':
                    return e.value;
                case 'rejected':
                    throw e.reason;
            }
    }
    throw e;
}
function M(e, t, n, r, a) {
    var s = typeof e;
    ('undefined' === s || 'boolean' === s) && (e = null);
    var l = !1;
    if (null === e) l = !0;
    else
        switch (s) {
            case 'bigint':
            case 'string':
            case 'number':
                l = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case i:
                    case o:
                        l = !0;
                        break;
                    case p:
                        return M((l = e._init)(e._payload), t, n, r, a);
                }
        }
    if (l)
        return (
            (a = a(e)),
            (l = '' === r ? '.' + D(e, 0) : r),
            S(a)
                ? ((n = ''),
                  null != l && (n = l.replace(w, '$&/') + '/'),
                  M(a, t, n, '', function (e) {
                      return e;
                  }))
                : null != a && (R(a) && (a = C(a, n + (null == a.key || (e && e.key === a.key) ? '' : ('' + a.key).replace(w, '$&/') + '/') + l)), t.push(a)),
            1
        );
    l = 0;
    var c = '' === r ? '.' : r + ':';
    if (S(e)) for (var u = 0; u < e.length; u++) (s = c + D((r = e[u]), u)), (l += M(r, t, n, s, a));
    else if ('function' == typeof (u = m(e))) for (e = u.call(e), u = 0; !(r = e.next()).done; ) (s = c + D((r = r.value), u++)), (l += M(r, t, n, s, a));
    else if ('object' === s) {
        if ('function' == typeof e.then) return M(x(e), t, n, r, a);
        throw Error('Objects are not valid as a React child (found: ' + ('[object Object]' === (t = String(e)) ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) + '). If you meant to render a collection of children, use an array instead.');
    }
    return l;
}
function k(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        M(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function j(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
            },
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
            }
        ),
            -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var U =
    'function' == typeof reportError
        ? reportError
        : function (e) {
              if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
                  var t = new window.ErrorEvent('error', {
                      bubbles: !0,
                      cancelable: !0,
                      message: 'object' == typeof e && null !== e && 'string' == typeof e.message ? String(e.message) : String(e),
                      error: e
                  });
                  if (!window.dispatchEvent(t)) return;
              } else if ('object' == typeof r && 'function' == typeof r.emit) return void r.emit('uncaughtException', e);
              console.error(e);
          };
function G() {}
(t.Children = {
    map: k,
    forEach: function (e, t, n) {
        k(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            k(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            k(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!R(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    }
}),
    (t.Component = y),
    (t.Fragment = a),
    (t.Profiler = l),
    (t.PureComponent = v),
    (t.StrictMode = s),
    (t.Suspense = f),
    (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
    (t.act = function () {
        throw Error('act(...) is not supported in production builds of React.');
    }),
    (t.cache = function (e) {
        return function () {
            return e.apply(null, arguments);
        };
    }),
    (t.cloneElement = function (e, t, n) {
        if (null == e) throw Error('The argument must be a React element, but you passed ' + e + '.');
        var r = E({}, e.props),
            i = e.key,
            o = void 0;
        if (null != t) for (a in (void 0 !== t.ref && (o = void 0), void 0 !== t.key && (i = '' + t.key), t)) A.call(t, a) && 'key' !== a && '__self' !== a && '__source' !== a && ('ref' !== a || void 0 !== t.ref) && (r[a] = t[a]);
        var a = arguments.length - 2;
        if (1 === a) r.children = n;
        else if (1 < a) {
            for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
            r.children = s;
        }
        return N(e.type, i, void 0, void 0, o, r);
    }),
    (t.createContext = function (e) {
        return (
            ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = e),
            (e.Consumer = {
                $$typeof: c,
                _context: e
            }),
            e
        );
    }),
    (t.createElement = function (e, t, n) {
        var r,
            i = {},
            o = null;
        if (null != t) for (r in (void 0 !== t.key && (o = '' + t.key), t)) A.call(t, r) && 'key' !== r && '__self' !== r && '__source' !== r && (i[r] = t[r]);
        var a = arguments.length - 2;
        if (1 === a) i.children = n;
        else if (1 < a) {
            for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
            i.children = s;
        }
        if (e && e.defaultProps) for (r in (a = e.defaultProps)) void 0 === i[r] && (i[r] = a[r]);
        return N(e, o, void 0, void 0, null, i);
    }),
    (t.createRef = function () {
        return { current: null };
    }),
    (t.forwardRef = function (e) {
        return {
            $$typeof: d,
            render: e
        };
    }),
    (t.isValidElement = R),
    (t.lazy = function (e) {
        return {
            $$typeof: p,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: j
        };
    }),
    (t.memo = function (e, t) {
        return {
            $$typeof: _,
            type: e,
            compare: void 0 === t ? null : t
        };
    }),
    (t.startTransition = function (e) {
        var t = T.T,
            n = {};
        T.T = n;
        try {
            var r = e(),
                i = T.S;
            null !== i && i(n, r), 'object' == typeof r && null !== r && 'function' == typeof r.then && r.then(G, U);
        } catch (e) {
            U(e);
        } finally {
            T.T = t;
        }
    }),
    (t.unstable_useCacheRefresh = function () {
        return T.H.useCacheRefresh();
    }),
    (t.use = function (e) {
        return T.H.use(e);
    }),
    (t.useActionState = function (e, t, n) {
        return T.H.useActionState(e, t, n);
    }),
    (t.useCallback = function (e, t) {
        return T.H.useCallback(e, t);
    }),
    (t.useContext = function (e) {
        return T.H.useContext(e);
    }),
    (t.useDebugValue = function () {}),
    (t.useDeferredValue = function (e, t) {
        return T.H.useDeferredValue(e, t);
    }),
    (t.useEffect = function (e, t) {
        return T.H.useEffect(e, t);
    }),
    (t.useId = function () {
        return T.H.useId();
    }),
    (t.useImperativeHandle = function (e, t, n) {
        return T.H.useImperativeHandle(e, t, n);
    }),
    (t.useInsertionEffect = function (e, t) {
        return T.H.useInsertionEffect(e, t);
    }),
    (t.useLayoutEffect = function (e, t) {
        return T.H.useLayoutEffect(e, t);
    }),
    (t.useMemo = function (e, t) {
        return T.H.useMemo(e, t);
    }),
    (t.useOptimistic = function (e, t) {
        return T.H.useOptimistic(e, t);
    }),
    (t.useReducer = function (e, t, n) {
        return T.H.useReducer(e, t, n);
    }),
    (t.useRef = function (e) {
        return T.H.useRef(e);
    }),
    (t.useState = function (e) {
        return T.H.useState(e);
    }),
    (t.useSyncExternalStore = function (e, t, n) {
        return T.H.useSyncExternalStore(e, t, n);
    }),
    (t.useTransition = function () {
        return T.H.useTransition();
    }),
    (t.version = '19.0.0');
