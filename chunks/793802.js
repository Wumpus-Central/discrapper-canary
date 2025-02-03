var n = 'function' == typeof Symbol && Symbol.for,
    i = n ? Symbol.for('react.element') : 60103,
    r = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    s = n ? Symbol.for('react.strict_mode') : 60108,
    o = n ? Symbol.for('react.profiler') : 60114,
    l = n ? Symbol.for('react.provider') : 60109,
    u = n ? Symbol.for('react.context') : 60110,
    c = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    f = n ? Symbol.for('react.forward_ref') : 60112,
    _ = n ? Symbol.for('react.suspense') : 60113,
    p = n ? Symbol.for('react.suspense_list') : 60120,
    h = n ? Symbol.for('react.memo') : 60115,
    m = n ? Symbol.for('react.lazy') : 60116,
    g = n ? Symbol.for('react.block') : 60121,
    E = n ? Symbol.for('react.fundamental') : 60117,
    v = n ? Symbol.for('react.responder') : 60118,
    y = n ? Symbol.for('react.scope') : 60119;
function I(e) {
    if ('object' == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case i:
                switch ((e = e.type)) {
                    case c:
                    case d:
                    case a:
                    case o:
                    case s:
                    case _:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case u:
                            case f:
                            case m:
                            case h:
                            case l:
                                return e;
                            default:
                                return t;
                        }
                }
            case r:
                return t;
        }
    }
}
function b(e) {
    return I(e) === d;
}
(t.AsyncMode = c),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = u),
    (t.ContextProvider = l),
    (t.Element = i),
    (t.ForwardRef = f),
    (t.Fragment = a),
    (t.Lazy = m),
    (t.Memo = h),
    (t.Portal = r),
    (t.Profiler = o),
    (t.StrictMode = s),
    (t.Suspense = _),
    (t.isAsyncMode = function (e) {
        return b(e) || I(e) === c;
    }),
    (t.isConcurrentMode = b),
    (t.isContextConsumer = function (e) {
        return I(e) === u;
    }),
    (t.isContextProvider = function (e) {
        return I(e) === l;
    }),
    (t.isElement = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === i;
    }),
    (t.isForwardRef = function (e) {
        return I(e) === f;
    }),
    (t.isFragment = function (e) {
        return I(e) === a;
    }),
    (t.isLazy = function (e) {
        return I(e) === m;
    }),
    (t.isMemo = function (e) {
        return I(e) === h;
    }),
    (t.isPortal = function (e) {
        return I(e) === r;
    }),
    (t.isProfiler = function (e) {
        return I(e) === o;
    }),
    (t.isStrictMode = function (e) {
        return I(e) === s;
    }),
    (t.isSuspense = function (e) {
        return I(e) === _;
    }),
    (t.isValidElementType = function (e) {
        return 'string' == typeof e || 'function' == typeof e || e === a || e === d || e === o || e === s || e === _ || e === p || ('object' == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === E || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g));
    }),
    (t.typeOf = I);
