var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    i = n ? Symbol.for('react.portal') : 60106,
    o = n ? Symbol.for('react.fragment') : 60107,
    a = n ? Symbol.for('react.strict_mode') : 60108,
    s = n ? Symbol.for('react.profiler') : 60114,
    l = n ? Symbol.for('react.provider') : 60109,
    c = n ? Symbol.for('react.context') : 60110,
    u = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    f = n ? Symbol.for('react.forward_ref') : 60112,
    _ = n ? Symbol.for('react.suspense') : 60113,
    p = n ? Symbol.for('react.suspense_list') : 60120,
    h = n ? Symbol.for('react.memo') : 60115,
    m = n ? Symbol.for('react.lazy') : 60116,
    g = n ? Symbol.for('react.block') : 60121,
    E = n ? Symbol.for('react.fundamental') : 60117,
    b = n ? Symbol.for('react.responder') : 60118,
    y = n ? Symbol.for('react.scope') : 60119;
function O(e) {
    if ('object' == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case r:
                switch ((e = e.type)) {
                    case u:
                    case d:
                    case o:
                    case s:
                    case a:
                    case _:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case c:
                            case f:
                            case m:
                            case h:
                            case l:
                                return e;
                            default:
                                return t;
                        }
                }
            case i:
                return t;
        }
    }
}
function v(e) {
    return O(e) === d;
}
(t.AsyncMode = u),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = c),
    (t.ContextProvider = l),
    (t.Element = r),
    (t.ForwardRef = f),
    (t.Fragment = o),
    (t.Lazy = m),
    (t.Memo = h),
    (t.Portal = i),
    (t.Profiler = s),
    (t.StrictMode = a),
    (t.Suspense = _),
    (t.isAsyncMode = function (e) {
        return v(e) || O(e) === u;
    }),
    (t.isConcurrentMode = v),
    (t.isContextConsumer = function (e) {
        return O(e) === c;
    }),
    (t.isContextProvider = function (e) {
        return O(e) === l;
    }),
    (t.isElement = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r;
    }),
    (t.isForwardRef = function (e) {
        return O(e) === f;
    }),
    (t.isFragment = function (e) {
        return O(e) === o;
    }),
    (t.isLazy = function (e) {
        return O(e) === m;
    }),
    (t.isMemo = function (e) {
        return O(e) === h;
    }),
    (t.isPortal = function (e) {
        return O(e) === i;
    }),
    (t.isProfiler = function (e) {
        return O(e) === s;
    }),
    (t.isStrictMode = function (e) {
        return O(e) === a;
    }),
    (t.isSuspense = function (e) {
        return O(e) === _;
    }),
    (t.isValidElementType = function (e) {
        return 'string' == typeof e || 'function' == typeof e || e === o || e === d || e === s || e === a || e === _ || e === p || ('object' == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === E || e.$$typeof === b || e.$$typeof === y || e.$$typeof === g));
    }),
    (t.typeOf = O);
