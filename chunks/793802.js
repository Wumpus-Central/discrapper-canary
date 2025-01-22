var r = 'function' == typeof Symbol && Symbol.for,
    i = r ? Symbol.for('react.element') : 60103,
    a = r ? Symbol.for('react.portal') : 60106,
    o = r ? Symbol.for('react.fragment') : 60107,
    s = r ? Symbol.for('react.strict_mode') : 60108,
    l = r ? Symbol.for('react.profiler') : 60114,
    u = r ? Symbol.for('react.provider') : 60109,
    c = r ? Symbol.for('react.context') : 60110,
    d = r ? Symbol.for('react.async_mode') : 60111,
    f = r ? Symbol.for('react.concurrent_mode') : 60111,
    p = r ? Symbol.for('react.forward_ref') : 60112,
    h = r ? Symbol.for('react.suspense') : 60113,
    _ = r ? Symbol.for('react.suspense_list') : 60120,
    m = r ? Symbol.for('react.memo') : 60115,
    g = r ? Symbol.for('react.lazy') : 60116,
    E = r ? Symbol.for('react.block') : 60121,
    v = r ? Symbol.for('react.fundamental') : 60117,
    y = r ? Symbol.for('react.responder') : 60118,
    b = r ? Symbol.for('react.scope') : 60119;
function I(e) {
    if ('object' == typeof e && null !== e) {
        var n = e.$$typeof;
        switch (n) {
            case i:
                switch ((e = e.type)) {
                    case d:
                    case f:
                    case o:
                    case l:
                    case s:
                    case h:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case c:
                            case p:
                            case g:
                            case m:
                            case u:
                                return e;
                            default:
                                return n;
                        }
                }
            case a:
                return n;
        }
    }
}
function T(e) {
    return I(e) === f;
}
(n.AsyncMode = d),
    (n.ConcurrentMode = f),
    (n.ContextConsumer = c),
    (n.ContextProvider = u),
    (n.Element = i),
    (n.ForwardRef = p),
    (n.Fragment = o),
    (n.Lazy = g),
    (n.Memo = m),
    (n.Portal = a),
    (n.Profiler = l),
    (n.StrictMode = s),
    (n.Suspense = h),
    (n.isAsyncMode = function (e) {
        return T(e) || I(e) === d;
    }),
    (n.isConcurrentMode = T),
    (n.isContextConsumer = function (e) {
        return I(e) === c;
    }),
    (n.isContextProvider = function (e) {
        return I(e) === u;
    }),
    (n.isElement = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === i;
    }),
    (n.isForwardRef = function (e) {
        return I(e) === p;
    }),
    (n.isFragment = function (e) {
        return I(e) === o;
    }),
    (n.isLazy = function (e) {
        return I(e) === g;
    }),
    (n.isMemo = function (e) {
        return I(e) === m;
    }),
    (n.isPortal = function (e) {
        return I(e) === a;
    }),
    (n.isProfiler = function (e) {
        return I(e) === l;
    }),
    (n.isStrictMode = function (e) {
        return I(e) === s;
    }),
    (n.isSuspense = function (e) {
        return I(e) === h;
    }),
    (n.isValidElementType = function (e) {
        return 'string' == typeof e || 'function' == typeof e || e === o || e === f || e === l || e === s || e === h || e === _ || ('object' == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === u || e.$$typeof === c || e.$$typeof === p || e.$$typeof === v || e.$$typeof === y || e.$$typeof === b || e.$$typeof === E));
    }),
    (n.typeOf = I);
