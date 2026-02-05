"use strict";
var r,
    i = n(72290),
    a = n(411071),
    s = n(64700),
    o = n(340287);
function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
function u(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
}
function c(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do 0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        while (e);
    }
    return 3 === t.tag ? n : null;
}
function d(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
    }
    return null;
}
function _(e) {
    if (c(e) !== e) throw Error(l(188));
}
function f(e) {
    var t = e.alternate;
    if (!t) {
        if (null === (t = c(e))) throw Error(l(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (null === i) break;
        var a = i.alternate;
        if (null === a) {
            if (null !== (r = i.return)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === a.child) {
            for (a = i.child; a; ) {
                if (a === n) return _(i), e;
                if (a === r) return _(i), t;
                a = a.sibling;
            }
            throw Error(l(188));
        }
        if (n.return !== r.return) (n = i), (r = a);
        else {
            for (var s = !1, o = i.child; o; ) {
                if (o === n) {
                    (s = !0), (n = i), (r = a);
                    break;
                }
                if (o === r) {
                    (s = !0), (r = i), (n = a);
                    break;
                }
                o = o.sibling;
            }
            if (!s) {
                for (o = a.child; o; ) {
                    if (o === n) {
                        (s = !0), (n = a), (r = i);
                        break;
                    }
                    if (o === r) {
                        (s = !0), (r = a), (n = i);
                        break;
                    }
                    o = o.sibling;
                }
                if (!s) throw Error(l(189));
            }
        }
        if (n.alternate !== r) throw Error(l(190));
    }
    if (3 !== n.tag) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
}
function p(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
    for (e = e.child; null !== e; ) {
        if (null !== (t = p(e))) return t;
        e = e.sibling;
    }
    return null;
}
var h = Object.assign,
    m = Symbol.for("react.element"),
    g = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    I = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    S = Symbol.for("react.consumer"),
    v = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    N = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy");
Symbol.for("react.scope");
var D = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
var L = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var w = Symbol.iterator;
function x(e) {
    return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (w && e[w]) || e["@@iterator"])
          ? e
          : null;
}
var P = Symbol.for("react.client.reference");
function M(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.$$typeof === P ? null : e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case A:
            return "Fragment";
        case T:
            return "Profiler";
        case I:
            return "StrictMode";
        case b:
            return "Suspense";
        case N:
            return "SuspenseList";
        case D:
            return "Activity";
    }
    if ("object" == typeof e)
        switch (e.$$typeof) {
            case E:
                return "Portal";
            case v:
                return (e.displayName || "Context") + ".Provider";
            case S:
                return (e._context.displayName || "Context") + ".Consumer";
            case C:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e
                );
            case R:
                return null !== (t = e.displayName || null) ? t : M(e.type) || "Memo";
            case O:
                (t = e._payload), (e = e._init);
                try {
                    return M(e(t));
                } catch (e) {}
        }
    return null;
}
var k = Array.isArray,
    U = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = { pending: !1, data: null, method: null, action: null },
    F = [],
    B = -1;
function j(e) {
    return { current: e };
}
function H(e) {
    0 > B || ((e.current = F[B]), (F[B] = null), B--);
}
function Y(e, t) {
    (F[++B] = e.current), (e.current = t);
}
var W = j(null),
    K = j(null),
    z = j(null),
    $ = j(null);
function q(e, t) {
    switch ((Y(z, t), Y(K, e), Y(W, null), t.nodeType)) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? uW(e) : 0;
            break;
        default:
            if (((e = t.tagName), (t = t.namespaceURI))) e = uK((t = uW(t)), e);
            else
                switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0;
                }
    }
    H(W), Y(W, e);
}
function Z() {
    H(W), H(K), H(z);
}
function Q(e) {
    null !== e.memoizedState && Y($, e);
    var t = W.current,
        n = uK(t, e.type);
    t !== n && (Y(K, e), Y(W, n));
}
function X(e) {
    K.current === e && (H(W), H(K)), $.current === e && (H($), (cF._currentValue = V));
}
var J = Object.prototype.hasOwnProperty,
    ee = a.unstable_scheduleCallback,
    et = a.unstable_cancelCallback,
    en = a.unstable_shouldYield,
    er = a.unstable_requestPaint,
    ei = a.unstable_now,
    ea = a.unstable_getCurrentPriorityLevel,
    es = a.unstable_ImmediatePriority,
    eo = a.unstable_UserBlockingPriority,
    el = a.unstable_NormalPriority,
    eu = a.unstable_LowPriority,
    ec = a.unstable_IdlePriority,
    ed = a.log,
    e_ = a.unstable_setDisableYieldValue,
    ef = null,
    ep = null;
function eh(e) {
    if (("function" == typeof ed && e_(e), ep && "function" == typeof ep.setStrictMode))
        try {
            ep.setStrictMode(ef, e);
        } catch (e) {}
}
var em = Math.clz32 ? Math.clz32 : eA,
    eg = Math.log,
    eE = Math.LN2;
function eA(e) {
    return 0 == (e >>>= 0) ? 32 : (31 - ((eg(e) / eE) | 0)) | 0;
}
var eI = 256,
    eT = 4194304;
function ey(e) {
    var t = 42 & e;
    if (0 !== t) return t;
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194048 & e;
        case 4194304:
        case 8388608:
        case 0x1000000:
        case 0x2000000:
            return 0x3c00000 & e;
        case 0x4000000:
            return 0x4000000;
        case 0x8000000:
            return 0x8000000;
        case 0x10000000:
            return 0x10000000;
        case 0x20000000:
            return 0x20000000;
        case 0x40000000:
            return 0;
        default:
            return e;
    }
}
function eS(e, t, n) {
    var r = e.pendingLanes;
    if (0 === r) return 0;
    var i = 0,
        a = e.suspendedLanes,
        s = e.pingedLanes;
    e = e.warmLanes;
    var o = 0x7ffffff & r;
    return (
        0 !== o
            ? 0 != (r = o & ~a)
                ? (i = ey(r))
                : 0 != (s &= o)
                  ? (i = ey(s))
                  : n || (0 != (n = o & ~e) && (i = ey(n)))
            : 0 != (o = r & ~a)
              ? (i = ey(o))
              : 0 !== s
                ? (i = ey(s))
                : n || (0 != (n = r & ~e) && (i = ey(n))),
        0 === i
            ? 0
            : 0 !== t && t !== i && 0 == (t & a) && ((a = i & -i) >= (n = t & -t) || (32 === a && 0 != (4194048 & n)))
              ? t
              : i
    );
}
function ev(e, t) {
    return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
}
function eC(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        default:
            return -1;
    }
}
function eb() {
    var e = eI;
    return 0 == (4194048 & (eI <<= 1)) && (eI = 256), e;
}
function eN() {
    var e = eT;
    return 0 == (0x3c00000 & (eT <<= 1)) && (eT = 4194304), e;
}
function eR(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function eO(e, t) {
    (e.pendingLanes |= t), 0x10000000 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function eD(e, t, n, r, i, a) {
    var s = e.pendingLanes;
    (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0);
    var o = e.entanglements,
        l = e.expirationTimes,
        u = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
        var c = 31 - em(n),
            d = 1 << c;
        (o[c] = 0), (l[c] = -1);
        var _ = u[c];
        if (null !== _)
            for (u[c] = null, c = 0; c < _.length; c++) {
                var f = _[c];
                null !== f && (f.lane &= -0x20000001);
            }
        n &= ~d;
    }
    0 !== r && eL(e, r, 0), 0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(s & ~t));
}
function eL(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - em(t);
    (e.entangledLanes |= t), (e.entanglements[r] = 0x40000000 | e.entanglements[r] | (4194090 & n));
}
function ew(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - em(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
function ex(e) {
    switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 0x1000000:
        case 0x2000000:
            e = 128;
            break;
        case 0x10000000:
            e = 0x8000000;
            break;
        default:
            e = 0;
    }
    return e;
}
function eP(e) {
    return 2 < (e &= -e) ? (8 < e ? (0 != (0x7ffffff & e) ? 32 : 0x10000000) : 8) : 2;
}
function eM() {
    var e = G.p;
    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : c1(e.type);
}
function ek(e, t) {
    var n = G.p;
    try {
        return (G.p = e), t();
    } finally {
        G.p = n;
    }
}
var eU = Math.random().toString(36).slice(2),
    eG = "__reactFiber$" + eU,
    eV = "__reactProps$" + eU,
    eF = "__reactContainer$" + eU,
    eB = "__reactEvents$" + eU,
    ej = "__reactListeners$" + eU,
    eH = "__reactHandles$" + eU,
    eY = "__reactResources$" + eU,
    eW = "__reactMarker$" + eU;
function eK(e) {
    delete e[eG], delete e[eV], delete e[eB], delete e[ej], delete e[eH];
}
function ez(e) {
    var t = e[eG];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[eF] || n[eG])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ce(e); null !== e; ) {
                    if ((n = e[eG])) return n;
                    e = ce(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function e$(e) {
    if ((e = e[eG] || e[eF])) {
        var t = e.tag;
        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
    }
    return null;
}
function eq(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
    throw Error(l(33));
}
function eZ(e) {
    var t = e[eY];
    return t || (t = e[eY] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
}
function eQ(e) {
    e[eW] = !0;
}
var eX = new Set(),
    eJ = {};
function e0(e, t) {
    e1(e, t), e1(e + "Capture", t);
}
function e1(e, t) {
    for (eJ[e] = t, e = 0; e < t.length; e++) eX.add(t[e]);
}
var e2 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    e3 = {},
    e6 = {};
function e4(e) {
    return !!J.call(e6, e) || (!J.call(e3, e) && (e2.test(e) ? (e6[e] = !0) : ((e3[e] = !0), !1)));
}
function e5(e, t, n) {
    if (e4(t))
        if (null === n) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var r = t.toLowerCase().slice(0, 5);
                    if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
        }
}
function e7(e, t, n) {
    if (null === n) e.removeAttribute(t);
    else {
        switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return;
        }
        e.setAttribute(t, "" + n);
    }
}
function e8(e, t, n, r) {
    if (null === r) e.removeAttribute(n);
    else {
        switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return;
        }
        e.setAttributeNS(t, n, "" + r);
    }
}
function e9(e) {
    if (void 0 === tW)
        try {
            throw Error();
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            (tW = (t && t[1]) || ""),
                (tK =
                    -1 < e.stack.indexOf("\n    at")
                        ? " (<anonymous>)"
                        : -1 < e.stack.indexOf("@")
                          ? "@unknown:0:0"
                          : "");
        }
    return "\n" + tW + e + tK;
}
var te = !1;
function tt(e, t) {
    if (!e || te) return "";
    te = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        var r = {
            DetermineComponentFrameRoot: function () {
                try {
                    if (t) {
                        var n = function () {
                            throw Error();
                        };
                        if (
                            (Object.defineProperty(n.prototype, "props", {
                                set: function () {
                                    throw Error();
                                },
                            }),
                            "object" == typeof Reflect && Reflect.construct)
                        ) {
                            try {
                                Reflect.construct(n, []);
                            } catch (e) {
                                var r = e;
                            }
                            Reflect.construct(e, [], n);
                        } else {
                            try {
                                n.call();
                            } catch (e) {
                                r = e;
                            }
                            e.call(n.prototype);
                        }
                    } else {
                        try {
                            throw Error();
                        } catch (e) {
                            r = e;
                        }
                        (n = e()) && "function" == typeof n.catch && n.catch(function () {});
                    }
                } catch (e) {
                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack];
                }
                return [null, null];
            },
        };
        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
        i &&
            i.configurable &&
            Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var a = r.DetermineComponentFrameRoot(),
            s = a[0],
            o = a[1];
        if (s && o) {
            var l = s.split("\n"),
                u = o.split("\n");
            for (i = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot"); ) r++;
            for (; i < u.length && !u[i].includes("DetermineComponentFrameRoot"); ) i++;
            if (r === l.length || i === u.length)
                for (r = l.length - 1, i = u.length - 1; 1 <= r && 0 <= i && l[r] !== u[i]; ) i--;
            for (; 1 <= r && 0 <= i; r--, i--)
                if (l[r] !== u[i]) {
                    if (1 !== r || 1 !== i)
                        do
                            if ((r--, i--, 0 > i || l[r] !== u[i])) {
                                var c = "\n" + l[r].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        c.includes("<anonymous>") &&
                                        (c = c.replace("<anonymous>", e.displayName)),
                                    c
                                );
                            }
                        while (1 <= r && 0 <= i);
                    break;
                }
        }
    } finally {
        (te = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? e9(n) : "";
}
function tn(e) {
    switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return e9(e.type);
        case 16:
            return e9("Lazy");
        case 13:
            return e9("Suspense");
        case 19:
            return e9("SuspenseList");
        case 0:
        case 15:
            return tt(e.type, !1);
        case 11:
            return tt(e.type.render, !1);
        case 1:
            return tt(e.type, !0);
        case 31:
            return e9("Activity");
        default:
            return "";
    }
}
function tr(e) {
    try {
        var t = "";
        do (t += tn(e)), (e = e.return);
        while (e);
        return t;
    } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack;
    }
}
function ti(e) {
    switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
            return e;
        default:
            return "";
    }
}
function ta(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
}
function ts(e) {
    var t = ta(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
        var i = n.get,
            a = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (e) {
                    (r = "" + e), a.call(this, e);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (e) {
                    r = "" + e;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function to(e) {
    e._valueTracker || (e._valueTracker = ts(e));
}
function tl(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ta(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function tu(e) {
    if (void 0 === (e = e || ("u" > typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
var tc = /[\n"\\]/g;
function td(e) {
    return e.replace(tc, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
}
function t_(e, t, n, r, i, a, s, o) {
    (e.name = ""),
        null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s
            ? (e.type = s)
            : e.removeAttribute("type"),
        null != t
            ? "number" === s
                ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + ti(t))
                : e.value !== "" + ti(t) && (e.value = "" + ti(t))
            : ("submit" !== s && "reset" !== s) || e.removeAttribute("value"),
        null != t ? tp(e, s, ti(t)) : null != n ? tp(e, s, ti(n)) : null != r && e.removeAttribute("value"),
        null == i && null != a && (e.defaultChecked = !!a),
        null != i && (e.checked = i && "function" != typeof i && "symbol" != typeof i),
        null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o
            ? (e.name = "" + ti(o))
            : e.removeAttribute("name");
}
function tf(e, t, n, r, i, a, s, o) {
    if (
        (null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a && (e.type = a),
        null != t || null != n)
    ) {
        if (("submit" === a || "reset" === a) && null == t) return;
        (n = null != n ? "" + ti(n) : ""),
            (t = null != t ? "" + ti(t) : n),
            o || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (r = "function" != typeof (r = null != r ? r : i) && "symbol" != typeof r && !!r),
        (e.checked = o ? e.checked : !!r),
        (e.defaultChecked = !!r),
        null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s && (e.name = s);
}
function tp(e, t, n) {
    ("number" === t && tu(e.ownerDocument) === e) || e.defaultValue === "" + n || (e.defaultValue = "" + n);
}
function th(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (i = 0, n = "" + ti(n), t = null; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
    }
}
function tm(e, t, n) {
    if (null != t && ((t = "" + ti(t)) !== e.value && (e.value = t), null == n)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
    }
    e.defaultValue = null != n ? "" + ti(n) : "";
}
function tg(e, t, n, r) {
    if (null == t) {
        if (null != r) {
            if (null != n) throw Error(l(92));
            if (k(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
            }
            n = r;
        }
        null == n && (n = ""), (t = n);
    }
    (e.defaultValue = n = ti(t)), (r = e.textContent) === n && "" !== r && null !== r && (e.value = r);
}
function tE(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var tA = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
    ),
);
function tI(e, t, n) {
    var r = 0 === t.indexOf("--");
    null == n || "boolean" == typeof n || "" === n
        ? r
            ? e.setProperty(t, "")
            : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
        : r
          ? e.setProperty(t, n)
          : "number" != typeof n || 0 === n || tA.has(t)
            ? "float" === t
                ? (e.cssFloat = n)
                : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
}
function tT(e, t, n) {
    if (null != t && "object" != typeof t) throw Error(l(62));
    if (((e = e.style), null != n)) {
        for (var r in n)
            !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? (e.cssFloat = "") : (e[r] = ""));
        for (var i in t) (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && tI(e, i, r);
    } else for (var a in t) t.hasOwnProperty(a) && tI(e, a, t[a]);
}
function ty(e) {
    if (-1 === e.indexOf("-")) return !1;
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var tS = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
    ]),
    tv =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function tC(e) {
    return tv.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
}
var tb = null;
function tN(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var tR = null,
    tO = null;
function tD(e) {
    var t = e$(e);
    if (t && (e = t.stateNode)) {
        var n = e[eV] || null;
        switch (((e = t.stateNode), t.type)) {
            case "input":
                if (
                    (t_(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                    (t = n.name),
                    "radio" === n.type && null != t)
                ) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name="' + td("" + t) + '"][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = r[eV] || null;
                            if (!i) throw Error(l(90));
                            t_(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                        }
                    }
                    for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && tl(r);
                }
                break;
            case "textarea":
                tm(e, n.value, n.defaultValue);
                break;
            case "select":
                null != (t = n.value) && th(e, !!n.multiple, t, !1);
        }
    }
}
var tL = !1;
function tw(e, t, n) {
    if (tL) return e(t, n);
    tL = !0;
    try {
        return e(t);
    } finally {
        if (((tL = !1), (null !== tR || null !== tO) && (lx(), tR && ((t = tR), (e = tO), (tO = tR = null), tD(t), e))))
            for (t = 0; t < e.length; t++) tD(e[t]);
    }
}
function tx(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = n[eV] || null;
    if (null === r) return null;
    switch (((n = r[t]), t)) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (r = "button" !== (e = e.type) && "input" !== e && "select" !== e && "textarea" !== e),
                (e = !r);
            break;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
    return n;
}
var tP = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    tM = !1;
if (tP)
    try {
        var tk = {};
        Object.defineProperty(tk, "passive", {
            get: function () {
                tM = !0;
            },
        }),
            window.addEventListener("test", tk, tk),
            window.removeEventListener("test", tk, tk);
    } catch (e) {
        tM = !1;
    }
var tU = null,
    tG = null,
    tV = null;
function tF() {
    if (tV) return tV;
    var e,
        t,
        n = tG,
        r = n.length,
        i = "value" in tU ? tU.value : tU.textContent,
        a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var s = r - e;
    for (t = 1; t <= s && n[r - t] === i[a - t]; t++);
    return (tV = i.slice(e, 1 < t ? 1 - t : void 0));
}
function tB(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function tj() {
    return !0;
}
function tH() {
    return !1;
}
function tY(e) {
    function t(t, n, r, i, a) {
        for (var s in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(i) : i[s]));
        return (
            (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue)
                ? tj
                : tH),
            (this.isPropagationStopped = tH),
            this
        );
    }
    return (
        h(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = tj));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = tj));
            },
            persist: function () {},
            isPersistent: tj,
        }),
        t
    );
}
var tW,
    tK,
    tz,
    t$,
    tq,
    tZ = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    tQ = tY(tZ),
    tX = h({}, tZ, { view: 0, detail: 0 }),
    tJ = tY(tX),
    t0 = h({}, tX, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: nt,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== tq &&
                      (tq && "mousemove" === e.type
                          ? ((tz = e.screenX - tq.screenX), (t$ = e.screenY - tq.screenY))
                          : (t$ = tz = 0),
                      (tq = e)),
                  tz);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : t$;
        },
    }),
    t1 = tY(t0),
    t2 = tY(h({}, t0, { dataTransfer: 0 })),
    t3 = tY(h({}, tX, { relatedTarget: 0 })),
    t6 = tY(h({}, tZ, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    t4 = tY(
        h({}, tZ, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
        }),
    ),
    t5 = tY(h({}, tZ, { data: 0 })),
    t7 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    t8 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    t9 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ne(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = t9[e]) && !!t[e];
}
function nt() {
    return ne;
}
var nn = tY(
        h({}, tX, {
            key: function (e) {
                if (e.key) {
                    var t = t7[e.key] || e.key;
                    if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                    ? 13 === (e = tB(e))
                        ? "Enter"
                        : String.fromCharCode(e)
                    : "keydown" === e.type || "keyup" === e.type
                      ? t8[e.keyCode] || "Unidentified"
                      : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: nt,
            charCode: function (e) {
                return "keypress" === e.type ? tB(e) : 0;
            },
            keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
                return "keypress" === e.type ? tB(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
        }),
    ),
    nr = tY(
        h({}, t0, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
    ),
    ni = tY(
        h({}, tX, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: nt,
        }),
    ),
    na = tY(h({}, tZ, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    ns = tY(
        h({}, t0, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                      ? -e.wheelDeltaY
                      : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
    ),
    no = tY(h({}, tZ, { newState: 0, oldState: 0 })),
    nl = [9, 13, 27, 32],
    nu = tP && "CompositionEvent" in window,
    nc = null;
tP && "documentMode" in document && (nc = document.documentMode);
var nd = tP && "TextEvent" in window && !nc,
    n_ = tP && (!nu || (nc && 8 < nc && 11 >= nc)),
    nf = " ",
    np = !1;
function nh(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== nl.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function nm(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var ng = !1;
function nE(e, t) {
    switch (e) {
        case "compositionend":
            return nm(t);
        case "keypress":
            if (32 !== t.which) return null;
            return (np = !0), nf;
        case "textInput":
            return (e = t.data) === nf && np ? null : e;
        default:
            return null;
    }
}
function nA(e, t) {
    if (ng)
        return "compositionend" === e || (!nu && nh(e, t)) ? ((e = tF()), (tV = tG = tU = null), (ng = !1), e) : null;
    switch (e) {
        case "paste":
        default:
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return n_ && "ko" !== t.locale ? null : t.data;
    }
}
var nI = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function nT(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!nI[e.type] : "textarea" === t;
}
function ny(e, t, n, r) {
    tR ? (tO ? tO.push(r) : (tO = [r])) : (tR = r),
        0 < (t = uD(t, "onChange")).length &&
            ((n = new tQ("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var nS = null,
    nv = null;
function nC(e) {
    uy(e, 0);
}
function nb(e) {
    if (tl(eq(e))) return e;
}
function nN(e, t) {
    if ("change" === e) return t;
}
var nR = !1;
if (tP) {
    if (tP) {
        var nO = "oninput" in document;
        if (!nO) {
            var nD = document.createElement("div");
            nD.setAttribute("oninput", "return;"), (nO = "function" == typeof nD.oninput);
        }
        r = nO;
    } else r = !1;
    nR = r && (!document.documentMode || 9 < document.documentMode);
}
function nL() {
    nS && (nS.detachEvent("onpropertychange", nw), (nv = nS = null));
}
function nw(e) {
    if ("value" === e.propertyName && nb(nv)) {
        var t = [];
        ny(t, nv, e, tN(e)), tw(nC, t);
    }
}
function nx(e, t, n) {
    "focusin" === e ? (nL(), (nS = t), (nv = n), nS.attachEvent("onpropertychange", nw)) : "focusout" === e && nL();
}
function nP(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return nb(nv);
}
function nM(e, t) {
    if ("click" === e) return nb(t);
}
function nk(e, t) {
    if ("input" === e || "change" === e) return nb(t);
}
function nU(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var nG = "function" == typeof Object.is ? Object.is : nU;
function nV(e, t) {
    if (nG(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!J.call(t, i) || !nG(e[i], t[i])) return !1;
    }
    return !0;
}
function nF(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function nB(e, t) {
    var n,
        r = nF(e);
    for (e = 0; r; ) {
        if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
            e = n;
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e;
                }
                r = r.parentNode;
            }
            r = void 0;
        }
        r = nF(r);
    }
}
function nj(e, t) {
    return (
        !!e &&
        !!t &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? nj(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function nH(e) {
    e =
        null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
            ? e.ownerDocument.defaultView
            : window;
    for (var t = tu(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = tu(e.document);
    }
    return t;
}
function nY(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        (("input" === t &&
            ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
    );
}
var nW = tP && "documentMode" in document && 11 >= document.documentMode,
    nK = null,
    nz = null,
    n$ = null,
    nq = !1;
function nZ(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    nq ||
        null == nK ||
        nK !== tu(r) ||
        ((r =
            "selectionStart" in (r = nK) && nY(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                      anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                          .anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  }),
        (n$ && nV(n$, r)) ||
            ((n$ = r),
            0 < (r = uD(nz, "onSelect")).length &&
                ((t = new tQ("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = nK))));
}
function nQ(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var nX = {
        animationend: nQ("Animation", "AnimationEnd"),
        animationiteration: nQ("Animation", "AnimationIteration"),
        animationstart: nQ("Animation", "AnimationStart"),
        transitionrun: nQ("Transition", "TransitionRun"),
        transitionstart: nQ("Transition", "TransitionStart"),
        transitioncancel: nQ("Transition", "TransitionCancel"),
        transitionend: nQ("Transition", "TransitionEnd"),
    },
    nJ = {},
    n0 = {};
function n1(e) {
    if (nJ[e]) return nJ[e];
    if (!nX[e]) return e;
    var t,
        n = nX[e];
    for (t in n) if (n.hasOwnProperty(t) && t in n0) return (nJ[e] = n[t]);
    return e;
}
tP &&
    ((n0 = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete nX.animationend.animation, delete nX.animationiteration.animation, delete nX.animationstart.animation),
    "TransitionEvent" in window || delete nX.transitionend.transition);
var n2 = n1("animationend"),
    n3 = n1("animationiteration"),
    n6 = n1("animationstart"),
    n4 = n1("transitionrun"),
    n5 = n1("transitionstart"),
    n7 = n1("transitioncancel"),
    n8 = n1("transitionend"),
    n9 = new Map(),
    re =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function rt(e, t) {
    n9.set(e, t), e0(t, [e]);
}
re.push("scrollEnd");
var rn = new WeakMap();
function rr(e, t) {
    if ("object" == typeof e && null !== e) {
        var n = rn.get(e);
        return void 0 !== n ? n : ((t = { value: e, source: t, stack: tr(t) }), rn.set(e, t), t);
    }
    return { value: e, source: t, stack: tr(t) };
}
var ri = [],
    ra = 0,
    rs = 0;
function ro() {
    for (var e = ra, t = (rs = ra = 0); t < e; ) {
        var n = ri[t];
        ri[t++] = null;
        var r = ri[t];
        ri[t++] = null;
        var i = ri[t];
        ri[t++] = null;
        var a = ri[t];
        if (((ri[t++] = null), null !== r && null !== i)) {
            var s = r.pending;
            null === s ? (i.next = i) : ((i.next = s.next), (s.next = i)), (r.pending = i);
        }
        0 !== a && rd(n, i, a);
    }
}
function rl(e, t, n, r) {
    (ri[ra++] = e),
        (ri[ra++] = t),
        (ri[ra++] = n),
        (ri[ra++] = r),
        (rs |= r),
        (e.lanes |= r),
        null !== (e = e.alternate) && (e.lanes |= r);
}
function ru(e, t, n, r) {
    return rl(e, t, n, r), r_(e);
}
function rc(e, t) {
    return rl(e, null, null, t), r_(e);
}
function rd(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    null !== r && (r.lanes |= n);
    for (var i = !1, a = e.return; null !== a; )
        (a.childLanes |= n),
            null !== (r = a.alternate) && (r.childLanes |= n),
            22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)),
            (e = a),
            (a = a.return);
    return 3 === e.tag
        ? ((a = e.stateNode),
          i &&
              null !== t &&
              ((i = 31 - em(n)),
              null === (r = (e = a.hiddenUpdates)[i]) ? (e[i] = [t]) : r.push(t),
              (t.lane = 0x20000000 | n)),
          a)
        : null;
}
function r_(e) {
    if (50 < lv) throw ((lv = 0), (lC = null), Error(l(185)));
    for (var t = e.return; null !== t; ) t = (e = t).return;
    return 3 === e.tag ? e.stateNode : null;
}
var rf = {};
function rp(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function rh(e, t, n, r) {
    return new rp(e, t, n, r);
}
function rm(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function rg(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = rh(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = 0x3e00000 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
    );
}
function rE(e, t) {
    e.flags &= 0x3e00002;
    var n = e.alternate;
    return (
        null === n
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null))
            : ((e.childLanes = n.childLanes),
              (e.lanes = n.lanes),
              (e.child = n.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = n.memoizedProps),
              (e.memoizedState = n.memoizedState),
              (e.updateQueue = n.updateQueue),
              (e.type = n.type),
              (e.dependencies =
                  null === (t = n.dependencies) ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
    );
}
function rA(e, t, n, r, i, a) {
    var s = 0;
    if (((r = e), "function" == typeof e)) rm(e) && (s = 1);
    else if ("string" == typeof e) s = cD(e, n, W.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
    else
        e: switch (e) {
            case D:
                return ((e = rh(31, n, t, i)).elementType = D), (e.lanes = a), e;
            case A:
                return rI(n.children, i, a, t);
            case I:
                (s = 8), (i |= 24);
                break;
            case T:
                return ((e = rh(12, n, t, 2 | i)).elementType = T), (e.lanes = a), e;
            case b:
                return ((e = rh(13, n, t, i)).elementType = b), (e.lanes = a), e;
            case N:
                return ((e = rh(19, n, t, i)).elementType = N), (e.lanes = a), e;
            default:
                if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case y:
                        case v:
                            s = 10;
                            break e;
                        case S:
                            s = 9;
                            break e;
                        case C:
                            s = 11;
                            break e;
                        case R:
                            s = 14;
                            break e;
                        case O:
                            (s = 16), (r = null);
                            break e;
                    }
                (s = 29), (n = Error(l(130, null === e ? "null" : typeof e, ""))), (r = null);
        }
    return ((t = rh(s, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t;
}
function rI(e, t, n, r) {
    return ((e = rh(7, e, r, t)).lanes = n), e;
}
function rT(e, t, n) {
    return ((e = rh(6, e, null, t)).lanes = n), e;
}
function ry(e, t, n) {
    return (
        ((t = rh(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
var rS = [],
    rv = 0,
    rC = null,
    rb = 0,
    rN = [],
    rR = 0,
    rO = null,
    rD = 1,
    rL = "";
function rw(e, t) {
    (rS[rv++] = rb), (rS[rv++] = rC), (rC = e), (rb = t);
}
function rx(e, t, n) {
    (rN[rR++] = rD), (rN[rR++] = rL), (rN[rR++] = rO), (rO = e);
    var r = rD;
    e = rL;
    var i = 32 - em(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var a = 32 - em(t) + i;
    if (30 < a) {
        var s = i - (i % 5);
        (a = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (i -= s),
            (rD = (1 << (32 - em(t) + i)) | (n << i) | r),
            (rL = a + e);
    } else (rD = (1 << a) | (n << i) | r), (rL = e);
}
function rP(e) {
    null !== e.return && (rw(e, 1), rx(e, 1, 0));
}
function rM(e) {
    for (; e === rC; ) (rC = rS[--rv]), (rS[rv] = null), (rb = rS[--rv]), (rS[rv] = null);
    for (; e === rO; )
        (rO = rN[--rR]), (rN[rR] = null), (rL = rN[--rR]), (rN[rR] = null), (rD = rN[--rR]), (rN[rR] = null);
}
var rk = null,
    rU = null,
    rG = !1,
    rV = null,
    rF = !1,
    rB = Error(l(519));
function rj(e) {
    throw (r$(rr(Error(l(418, "")), e)), rB);
}
function rH(e) {
    var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
    switch (((t[eG] = e), (t[eV] = r), n)) {
        case "dialog":
            uS("cancel", t), uS("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            uS("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < uI.length; n++) uS(uI[n], t);
            break;
        case "source":
            uS("error", t);
            break;
        case "img":
        case "image":
        case "link":
            uS("error", t), uS("load", t);
            break;
        case "details":
            uS("toggle", t);
            break;
        case "input":
            uS("invalid", t), tf(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), to(t);
            break;
        case "select":
            uS("invalid", t);
            break;
        case "textarea":
            uS("invalid", t), tg(t, r.value, r.defaultValue, r.children), to(t);
    }
    ("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
    t.textContent === "" + n ||
    !0 === r.suppressHydrationWarning ||
    uk(t.textContent, n)
        ? (null != r.popover && (uS("beforetoggle", t), uS("toggle", t)),
          null != r.onScroll && uS("scroll", t),
          null != r.onScrollEnd && uS("scrollend", t),
          null != r.onClick && (t.onclick = uU),
          (t = !0))
        : (t = !1),
        t || rj(e);
}
function rY(e) {
    for (rk = e.return; rk; )
        switch (rk.tag) {
            case 5:
            case 13:
                rF = !1;
                return;
            case 27:
            case 3:
                rF = !0;
                return;
            default:
                rk = rk.return;
        }
}
function rW(e) {
    if (e !== rk) return !1;
    if (!rG) return rY(e), (rG = !0), !1;
    var t,
        n = e.tag;
    if (
        ((t = 3 !== n && 27 !== n) &&
            ((t = 5 === n) && (t = "form" === (t = e.type) || "button" === t || uz(e.type, e.memoizedProps)), (t = !t)),
        t && rU && rj(e),
        rY(e),
        13 === n)
    ) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
        e: {
            for (n = 0, e = e.nextSibling; e; ) {
                if (8 === e.nodeType)
                    if ("/$" === (t = e.data)) {
                        if (0 === n) {
                            rU = u8(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
            }
            rU = null;
        }
    } else
        27 === n
            ? ((n = rU), u1(e.type) ? ((e = u9), (u9 = null), (rU = e)) : (rU = n))
            : (rU = rk ? u8(e.stateNode.nextSibling) : null);
    return !0;
}
function rK() {
    (rU = rk = null), (rG = !1);
}
function rz() {
    var e = rV;
    return null !== e && (null === ld ? (ld = e) : ld.push.apply(ld, e), (rV = null)), e;
}
function r$(e) {
    null === rV ? (rV = [e]) : rV.push(e);
}
var rq = j(null),
    rZ = null,
    rQ = null;
function rX(e, t, n) {
    Y(rq, t._currentValue), (t._currentValue = n);
}
function rJ(e) {
    (e._currentValue = rq.current), H(rq);
}
function r0(e, t, n) {
    for (; null !== e; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function r1(e, t, n, r) {
    var i = e.child;
    for (null !== i && (i.return = e); null !== i; ) {
        var a = i.dependencies;
        if (null !== a) {
            var s = i.child;
            a = a.firstContext;
            e: for (; null !== a; ) {
                var o = a;
                a = i;
                for (var u = 0; u < t.length; u++)
                    if (o.context === t[u]) {
                        (a.lanes |= n),
                            null !== (o = a.alternate) && (o.lanes |= n),
                            r0(a.return, n, e),
                            r || (s = null);
                        break e;
                    }
                a = o.next;
            }
        } else if (18 === i.tag) {
            if (null === (s = i.return)) throw Error(l(341));
            (s.lanes |= n), null !== (a = s.alternate) && (a.lanes |= n), r0(s, n, e), (s = null);
        } else s = i.child;
        if (null !== s) s.return = i;
        else
            for (s = i; null !== s; ) {
                if (s === e) {
                    s = null;
                    break;
                }
                if (null !== (i = s.sibling)) {
                    (i.return = s.return), (s = i);
                    break;
                }
                s = s.return;
            }
        i = s;
    }
}
function r2(e, t, n, r) {
    e = null;
    for (var i = t, a = !1; null !== i; ) {
        if (!a) {
            if (0 != (524288 & i.flags)) a = !0;
            else if (0 != (262144 & i.flags)) break;
        }
        if (10 === i.tag) {
            var s = i.alternate;
            if (null === s) throw Error(l(387));
            if (null !== (s = s.memoizedProps)) {
                var o = i.type;
                nG(i.pendingProps.value, s.value) || (null !== e ? e.push(o) : (e = [o]));
            }
        } else if (i === $.current) {
            if (null === (s = i.alternate)) throw Error(l(387));
            s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(cF) : (e = [cF]));
        }
        i = i.return;
    }
    null !== e && r1(t, e, n, r), (t.flags |= 262144);
}
function r3(e) {
    for (e = e.firstContext; null !== e; ) {
        if (!nG(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
    }
    return !1;
}
function r6(e) {
    (rZ = e), (rQ = null), null !== (e = e.dependencies) && (e.firstContext = null);
}
function r4(e) {
    return r7(rZ, e);
}
function r5(e, t) {
    return null === rZ && r6(e), r7(e, t);
}
function r7(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), null === rQ)) {
        if (null === e) throw Error(l(308));
        (rQ = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else rQ = rQ.next = t;
    return n;
}
var r8 =
        "u" > typeof AbortController
            ? AbortController
            : function () {
                  var e = [],
                      t = (this.signal = {
                          aborted: !1,
                          addEventListener: function (t, n) {
                              e.push(n);
                          },
                      });
                  this.abort = function () {
                      (t.aborted = !0),
                          e.forEach(function (e) {
                              return e();
                          });
                  };
              },
    r9 = a.unstable_scheduleCallback,
    ie = a.unstable_NormalPriority,
    it = { $$typeof: v, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
function ir() {
    return { controller: new r8(), data: new Map(), refCount: 0 };
}
function ii(e) {
    e.refCount--,
        0 === e.refCount &&
            r9(ie, function () {
                e.controller.abort();
            });
}
var ia = null,
    is = 0,
    io = 0,
    il = null;
function iu(e, t) {
    if (null === ia) {
        var n = (ia = []);
        (is = 0),
            (io = up()),
            (il = {
                status: "pending",
                value: void 0,
                then: function (e) {
                    n.push(e);
                },
            });
    }
    return is++, t.then(ic, ic), t;
}
function ic() {
    if (0 == --is && null !== ia) {
        null !== il && (il.status = "fulfilled");
        var e = ia;
        (ia = null), (io = 0), (il = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
}
function id(e, t) {
    var n = [],
        r = {
            status: "pending",
            value: null,
            reason: null,
            then: function (e) {
                n.push(e);
            },
        };
    return (
        e.then(
            function () {
                (r.status = "fulfilled"), (r.value = t);
                for (var e = 0; e < n.length; e++) (0, n[e])(t);
            },
            function (e) {
                for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
            },
        ),
        r
    );
}
var i_ = U.S;
U.S = function (e, t) {
    "object" == typeof t && null !== t && "function" == typeof t.then && iu(e, t), null !== i_ && i_(e, t);
};
var ip = j(null);
function ih() {
    var e = ip.current;
    return null !== e ? e : o4.pooledCache;
}
function im(e, t) {
    null === t ? Y(ip, ip.current) : Y(ip, t.pool);
}
function ig() {
    var e = ih();
    return null === e ? null : { parent: it._currentValue, pool: e };
}
var iE = Error(l(460)),
    iA = Error(l(474)),
    iI = Error(l(542)),
    iT = { then: function () {} };
function iy(e) {
    return "fulfilled" === (e = e.status) || "rejected" === e;
}
function iS() {}
function iv(e, t, n) {
    switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(iS, iS), (t = n)), t.status)) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw (iN((e = t.reason)), e);
        default:
            if ("string" == typeof t.status) t.then(iS, iS);
            else {
                if (null !== (e = o4) && 100 < e.shellSuspendCounter) throw Error(l(482));
                ((e = t).status = "pending"),
                    e.then(
                        function (e) {
                            if ("pending" === t.status) {
                                var n = t;
                                (n.status = "fulfilled"), (n.value = e);
                            }
                        },
                        function (e) {
                            if ("pending" === t.status) {
                                var n = t;
                                (n.status = "rejected"), (n.reason = e);
                            }
                        },
                    );
            }
            switch (t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw (iN((e = t.reason)), e);
            }
            throw ((iC = t), iE);
    }
}
var iC = null;
function ib() {
    if (null === iC) throw Error(l(459));
    var e = iC;
    return (iC = null), e;
}
function iN(e) {
    if (e === iE || e === iI) throw Error(l(483));
}
var iR = !1;
function iO(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
    };
}
function iD(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
            });
}
function iL(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function iw(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & o6))) {
        var i = r.pending;
        return (
            null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            (t = r_(e)),
            rd(e, null, n),
            t
        );
    }
    return rl(e, r, t, n), r_(e);
}
function ix(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194048 & n))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ew(e, n);
    }
}
function iP(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var i = null,
            a = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var s = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                null === a ? (i = a = s) : (a = a.next = s), (n = n.next);
            } while (null !== n);
            null === a ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            callbacks: r.callbacks,
        }),
            (e.updateQueue = n);
        return;
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
var iM = !1;
function ik() {
    if (iM) {
        var e = il;
        if (null !== e) throw e;
    }
}
function iU(e, t, n, r) {
    iM = !1;
    var i = e.updateQueue;
    iR = !1;
    var a = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        o = i.shared.pending;
    if (null !== o) {
        i.shared.pending = null;
        var l = o,
            u = l.next;
        (l.next = null), null === s ? (a = u) : (s.next = u), (s = l);
        var c = e.alternate;
        null !== c &&
            (o = (c = c.updateQueue).lastBaseUpdate) !== s &&
            (null === o ? (c.firstBaseUpdate = u) : (o.next = u), (c.lastBaseUpdate = l));
    }
    if (null !== a) {
        var d = i.baseState;
        for (s = 0, c = u = l = null, o = a; ; ) {
            var _ = -0x20000001 & o.lane,
                f = _ !== o.lane;
            if (f ? (o7 & _) === _ : (r & _) === _) {
                0 !== _ && _ === io && (iM = !0),
                    null !== c &&
                        (c = c.next = { lane: 0, tag: o.tag, payload: o.payload, callback: null, next: null });
                e: {
                    var p = e,
                        m = o;
                    _ = t;
                    var g = n;
                    switch (m.tag) {
                        case 1:
                            if ("function" == typeof (p = m.payload)) {
                                d = p.call(g, d, _);
                                break e;
                            }
                            d = p;
                            break e;
                        case 3:
                            p.flags = (-65537 & p.flags) | 128;
                        case 0:
                            if (null == (_ = "function" == typeof (p = m.payload) ? p.call(g, d, _) : p)) break e;
                            d = h({}, d, _);
                            break e;
                        case 2:
                            iR = !0;
                    }
                }
                null !== (_ = o.callback) &&
                    ((e.flags |= 64),
                    f && (e.flags |= 8192),
                    null === (f = i.callbacks) ? (i.callbacks = [_]) : f.push(_));
            } else
                (f = { lane: _, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
                    null === c ? ((u = c = f), (l = d)) : (c = c.next = f),
                    (s |= _);
            if (null === (o = o.next))
                if (null === (o = i.shared.pending)) break;
                else (o = (f = o).next), (f.next = null), (i.lastBaseUpdate = f), (i.shared.pending = null);
        }
        null === c && (l = d),
            (i.baseState = l),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = c),
            null === a && (i.shared.lanes = 0),
            (la |= s),
            (e.lanes = s),
            (e.memoizedState = d);
    }
}
function iG(e, t) {
    if ("function" != typeof e) throw Error(l(191, e));
    e.call(t);
}
function iV(e, t) {
    var n = e.callbacks;
    if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) iG(n[e], t);
}
var iF = j(null),
    iB = j(0);
function ij(e, t) {
    Y(iB, (e = lr)), Y(iF, t), (lr = e | t.baseLanes);
}
function iH() {
    Y(iB, lr), Y(iF, iF.current);
}
function iY() {
    (lr = iB.current), H(iF), H(iB);
}
var iW = 0,
    iK = null,
    iz = null,
    i$ = null,
    iq = !1,
    iZ = !1,
    iQ = !1,
    iX = 0,
    iJ = 0,
    i0 = null,
    i1 = 0;
function i2() {
    throw Error(l(321));
}
function i3(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nG(e[n], t[n])) return !1;
    return !0;
}
function i6(e, t, n, r, i, a) {
    return (
        (iW = a),
        (iK = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (U.H = null === e || null === e.memoizedState ? se : st),
        (iQ = !1),
        (a = n(r, i)),
        (iQ = !1),
        iZ && (a = i5(t, n, r, i)),
        i4(e),
        a
    );
}
function i4(e) {
    U.H = a9;
    var t = null !== iz && null !== iz.next;
    if (((iW = 0), (i$ = iz = iK = null), (iq = !1), (iJ = 0), (i0 = null), t)) throw Error(l(300));
    null === e || sk || (null !== (e = e.dependencies) && r3(e) && (sk = !0));
}
function i5(e, t, n, r) {
    iK = e;
    var i = 0;
    do {
        if ((iZ && (i0 = null), (iJ = 0), (iZ = !1), 25 <= i)) throw Error(l(301));
        if (((i += 1), (i$ = iz = null), null != e.updateQueue)) {
            var a = e.updateQueue;
            (a.lastEffect = null), (a.events = null), (a.stores = null), null != a.memoCache && (a.memoCache.index = 0);
        }
        (U.H = sn), (a = t(n, r));
    } while (iZ);
    return a;
}
function i7() {
    var e = U.H,
        t = e.useState()[0];
    return (
        (t = "function" == typeof t.then ? ai(t) : t),
        (e = e.useState()[0]),
        (null !== iz ? iz.memoizedState : null) !== e && (iK.flags |= 1024),
        t
    );
}
function i8() {
    var e = 0 !== iX;
    return (iX = 0), e;
}
function i9(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function ae(e) {
    if (iq) {
        for (e = e.memoizedState; null !== e; ) {
            var t = e.queue;
            null !== t && (t.pending = null), (e = e.next);
        }
        iq = !1;
    }
    (iW = 0), (i$ = iz = iK = null), (iZ = !1), (iJ = iX = 0), (i0 = null);
}
function at() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === i$ ? (iK.memoizedState = i$ = e) : (i$ = i$.next = e), i$;
}
function an() {
    if (null === iz) {
        var e = iK.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = iz.next;
    var t = null === i$ ? iK.memoizedState : i$.next;
    if (null !== t) (i$ = t), (iz = e);
    else {
        if (null === e) {
            if (null === iK.alternate) throw Error(l(467));
            throw Error(l(310));
        }
        (e = {
            memoizedState: (iz = e).memoizedState,
            baseState: iz.baseState,
            baseQueue: iz.baseQueue,
            queue: iz.queue,
            next: null,
        }),
            null === i$ ? (iK.memoizedState = i$ = e) : (i$ = i$.next = e);
    }
    return i$;
}
function ar() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function ai(e) {
    var t = iJ;
    return (
        (iJ += 1),
        null === i0 && (i0 = []),
        (e = iv(i0, e, t)),
        (t = iK),
        null === (null === i$ ? t.memoizedState : i$.next) &&
            (U.H = null === (t = t.alternate) || null === t.memoizedState ? se : st),
        e
    );
}
function aa(e) {
    if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return ai(e);
        if (e.$$typeof === v) return r4(e);
    }
    throw Error(l(438, String(e)));
}
function as(e) {
    var t = null,
        n = iK.updateQueue;
    if ((null !== n && (t = n.memoCache), null == t)) {
        var r = iK.alternate;
        null !== r &&
            null !== (r = r.updateQueue) &&
            null != (r = r.memoCache) &&
            (t = {
                data: r.data.map(function (e) {
                    return e.slice();
                }),
                index: 0,
            });
    }
    if (
        (null == t && (t = { data: [], index: 0 }),
        null === n && ((n = ar()), (iK.updateQueue = n)),
        (n.memoCache = t),
        void 0 === (n = t.data[t.index]))
    )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = L;
    return t.index++, n;
}
function ao(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function al(e) {
    return au(an(), iz, e);
}
function au(e, t, n) {
    var r = e.queue;
    if (null === r) throw Error(l(311));
    r.lastRenderedReducer = n;
    var i = e.baseQueue,
        a = r.pending;
    if (null !== a) {
        if (null !== i) {
            var s = i.next;
            (i.next = a.next), (a.next = s);
        }
        (t.baseQueue = i = a), (r.pending = null);
    }
    if (((a = e.baseState), null === i)) e.memoizedState = a;
    else {
        t = i.next;
        var o = (s = null),
            u = null,
            c = t,
            d = !1;
        do {
            var _ = -0x20000001 & c.lane;
            if (_ !== c.lane ? (o7 & _) === _ : (iW & _) === _) {
                var f = c.revertLane;
                if (0 === f)
                    null !== u &&
                        (u = u.next =
                            {
                                lane: 0,
                                revertLane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null,
                            }),
                        _ === io && (d = !0);
                else if ((iW & f) === f) {
                    (c = c.next), f === io && (d = !0);
                    continue;
                } else
                    (_ = {
                        lane: 0,
                        revertLane: c.revertLane,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                    }),
                        null === u ? ((o = u = _), (s = a)) : (u = u.next = _),
                        (iK.lanes |= f),
                        (la |= f);
                (_ = c.action), iQ && n(a, _), (a = c.hasEagerState ? c.eagerState : n(a, _));
            } else
                (f = {
                    lane: _,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                }),
                    null === u ? ((o = u = f), (s = a)) : (u = u.next = f),
                    (iK.lanes |= _),
                    (la |= _);
            c = c.next;
        } while (null !== c && c !== t);
        if ((null === u ? (s = a) : (u.next = o), !nG(a, e.memoizedState) && ((sk = !0), d && null !== (n = il))))
            throw n;
        (e.memoizedState = a), (e.baseState = s), (e.baseQueue = u), (r.lastRenderedState = a);
    }
    return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
}
function ac(e) {
    var t = an(),
        n = t.queue;
    if (null === n) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
    if (null !== i) {
        n.pending = null;
        var s = (i = i.next);
        do (a = e(a, s.action)), (s = s.next);
        while (s !== i);
        nG(a, t.memoizedState) || (sk = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
    }
    return [a, r];
}
function ad(e, t, n) {
    var r = iK,
        i = an(),
        a = rG;
    if (a) {
        if (void 0 === n) throw Error(l(407));
        n = n();
    } else n = t();
    var s = !nG((iz || i).memoizedState, n);
    if (
        (s && ((i.memoizedState = n), (sk = !0)),
        (i = i.queue),
        aM(2048, 8, ap.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || s || (null !== i$ && 1 & i$.memoizedState.tag))
    ) {
        if (((r.flags |= 2048), aL(9, aw(), af.bind(null, r, i, n, t), null), null === o4)) throw Error(l(349));
        a || 0 != (124 & iW) || a_(r, t, n);
    }
    return n;
}
function a_(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = iK.updateQueue)
            ? ((t = ar()), (iK.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
}
function af(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ah(t) && am(e);
}
function ap(e, t, n) {
    return n(function () {
        ah(t) && am(e);
    });
}
function ah(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nG(e, n);
    } catch (e) {
        return !0;
    }
}
function am(e) {
    var t = rc(e, 2);
    null !== t && lR(t, e, 2);
}
function ag(e) {
    var t = at();
    if ("function" == typeof e) {
        var n = e;
        if (((e = n()), iQ)) {
            eh(!0);
            try {
                n();
            } finally {
                eh(!1);
            }
        }
    }
    return (
        (t.memoizedState = t.baseState = e),
        (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ao, lastRenderedState: e }),
        t
    );
}
function aE(e, t, n, r) {
    return (e.baseState = n), au(e, iz, "function" == typeof r ? r : ao);
}
function aA(e, t, n, r, i) {
    if (a5(e)) throw Error(l(485));
    if (null !== (e = t.action)) {
        var a = {
            payload: i,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function (e) {
                a.listeners.push(e);
            },
        };
        null !== U.T ? n(!0) : (a.isTransition = !1),
            r(a),
            null === (n = t.pending)
                ? ((a.next = t.pending = a), aI(t, a))
                : ((a.next = n.next), (t.pending = n.next = a));
    }
}
function aI(e, t) {
    var n = t.action,
        r = t.payload,
        i = e.state;
    if (t.isTransition) {
        var a = U.T,
            s = {};
        U.T = s;
        try {
            var o = n(i, r),
                l = U.S;
            null !== l && l(s, o), aT(e, t, o);
        } catch (n) {
            aS(e, t, n);
        } finally {
            U.T = a;
        }
    } else
        try {
            (a = n(i, r)), aT(e, t, a);
        } catch (n) {
            aS(e, t, n);
        }
}
function aT(e, t, n) {
    null !== n && "object" == typeof n && "function" == typeof n.then
        ? n.then(
              function (n) {
                  ay(e, t, n);
              },
              function (n) {
                  return aS(e, t, n);
              },
          )
        : ay(e, t, n);
}
function ay(e, t, n) {
    (t.status = "fulfilled"),
        (t.value = n),
        av(t),
        (e.state = n),
        null !== (t = e.pending) && ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), aI(e, n)));
}
function aS(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), null !== r)) {
        r = r.next;
        do (t.status = "rejected"), (t.reason = n), av(t), (t = t.next);
        while (t !== r);
    }
    e.action = null;
}
function av(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
}
function aC(e, t) {
    return t;
}
function ab(e, t) {
    if (rG) {
        var n = o4.formState;
        if (null !== n) {
            e: {
                var r = iK;
                if (rG) {
                    if (rU) {
                        a: {
                            for (var i = rU, a = rF; 8 !== i.nodeType; )
                                if (!a || null === (i = u8(i.nextSibling))) {
                                    i = null;
                                    break a;
                                }
                            i = "F!" === (a = i.data) || "F" === a ? i : null;
                        }
                        if (i) {
                            (rU = u8(i.nextSibling)), (r = "F!" === i.data);
                            break e;
                        }
                    }
                    rj(r);
                }
                r = !1;
            }
            r && (t = n[0]);
        }
    }
    return (
        ((n = at()).memoizedState = n.baseState = t),
        (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: aC, lastRenderedState: t }),
        (n.queue = r),
        (n = a3.bind(null, iK, r)),
        (r.dispatch = n),
        (r = ag(!1)),
        (a = a4.bind(null, iK, !1, r.queue)),
        (r = at()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = aA.bind(null, iK, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
    );
}
function aN(e) {
    return aR(an(), iz, e);
}
function aR(e, t, n) {
    if (((t = au(e, t, aC)[0]), (e = al(ao)[0]), "object" == typeof t && null !== t && "function" == typeof t.then))
        try {
            var r = ai(t);
        } catch (e) {
            if (e === iE) throw iI;
            throw e;
        }
    else r = t;
    var i = (t = an()).queue,
        a = i.dispatch;
    return n !== t.memoizedState && ((iK.flags |= 2048), aL(9, aw(), aO.bind(null, i, n), null)), [r, a, e];
}
function aO(e, t) {
    e.action = t;
}
function aD(e) {
    var t = an(),
        n = iz;
    if (null !== n) return aR(t, n, e);
    an(), (t = t.memoizedState);
    var r = (n = an()).queue.dispatch;
    return (n.memoizedState = e), [t, r, !1];
}
function aL(e, t, n, r) {
    return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        null === (t = iK.updateQueue) && ((t = ar()), (iK.updateQueue = t)),
        null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function aw() {
    return { destroy: void 0, resource: void 0 };
}
function ax() {
    return an().memoizedState;
}
function aP(e, t, n, r) {
    var i = at();
    (r = void 0 === r ? null : r), (iK.flags |= e), (i.memoizedState = aL(1 | t, aw(), n, r));
}
function aM(e, t, n, r) {
    var i = an();
    r = void 0 === r ? null : r;
    var a = i.memoizedState.inst;
    null !== iz && null !== r && i3(r, iz.memoizedState.deps)
        ? (i.memoizedState = aL(t, a, n, r))
        : ((iK.flags |= e), (i.memoizedState = aL(1 | t, a, n, r)));
}
function ak(e, t) {
    aP(8390656, 8, e, t);
}
function aU(e, t) {
    aM(2048, 8, e, t);
}
function aG(e, t) {
    return aM(4, 2, e, t);
}
function aV(e, t) {
    return aM(4, 4, e, t);
}
function aF(e, t) {
    if ("function" == typeof t) {
        var n = t((e = e()));
        return function () {
            "function" == typeof n ? n() : t(null);
        };
    }
    if (null != t)
        return (
            (t.current = e = e()),
            function () {
                t.current = null;
            }
        );
}
function aB(e, t, n) {
    (n = null != n ? n.concat([e]) : null), aM(4, 4, aF.bind(null, t, e), n);
}
function aj() {}
function aH(e, t) {
    var n = an();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== t && i3(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function aY(e, t) {
    var n = an();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    if (null !== t && i3(t, r[1])) return r[0];
    if (((r = e()), iQ)) {
        eh(!0);
        try {
            e();
        } finally {
            eh(!1);
        }
    }
    return (n.memoizedState = [r, t]), r;
}
function aW(e, t, n) {
    return void 0 === n || 0 != (0x40000000 & iW)
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = lN()), (iK.lanes |= e), (la |= e), n);
}
function aK(e, t, n, r) {
    return nG(n, t)
        ? n
        : null !== iF.current
          ? (nG((e = aW(e, n, r)), t) || (sk = !0), e)
          : 0 == (42 & iW)
            ? ((sk = !0), (e.memoizedState = n))
            : ((e = lN()), (iK.lanes |= e), (la |= e), t);
}
function az(e, t, n, r, i) {
    var a = G.p;
    G.p = 0 !== a && 8 > a ? a : 8;
    var s = U.T,
        o = {};
    (U.T = o), a4(e, !1, t, n);
    try {
        var l = i(),
            u = U.S;
        if ((null !== u && u(o, l), null !== l && "object" == typeof l && "function" == typeof l.then)) {
            var c = id(l, r);
            a6(e, t, c, lb(e));
        } else a6(e, t, r, lb(e));
    } catch (n) {
        a6(e, t, { then: function () {}, status: "rejected", reason: n }, lb());
    } finally {
        (G.p = a), (U.T = s);
    }
}
function a$() {}
function aq(e, t, n, r) {
    if (5 !== e.tag) throw Error(l(476));
    var i = aZ(e).queue;
    az(
        e,
        i,
        t,
        V,
        null === n
            ? a$
            : function () {
                  return aQ(e), n(r);
              },
    );
}
function aZ(e) {
    var t = e.memoizedState;
    if (null !== t) return t;
    var n = {};
    return (
        ((t = {
            memoizedState: V,
            baseState: V,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ao, lastRenderedState: V },
            next: null,
        }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ao, lastRenderedState: n },
            next: null,
        }),
        (e.memoizedState = t),
        null !== (e = e.alternate) && (e.memoizedState = t),
        t
    );
}
function aQ(e) {
    var t = aZ(e).next.queue;
    a6(e, t, {}, lb());
}
function aX() {
    return r4(cF);
}
function aJ() {
    return an().memoizedState;
}
function a0() {
    return an().memoizedState;
}
function a1(e) {
    for (var t = e.return; null !== t; ) {
        switch (t.tag) {
            case 24:
            case 3:
                var n = lb(),
                    r = iw(t, (e = iL(n)), n);
                null !== r && (lR(r, t, n), ix(r, t, n)), (t = { cache: ir() }), (e.payload = t);
                return;
        }
        t = t.return;
    }
}
function a2(e, t, n) {
    var r = lb();
    (n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
        a5(e) ? a7(t, n) : null !== (n = ru(e, t, n, r)) && (lR(n, e, r), a8(n, t, r));
}
function a3(e, t, n) {
    a6(e, t, n, lb());
}
function a6(e, t, n, r) {
    var i = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (a5(e)) a7(t, i);
    else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
            try {
                var s = t.lastRenderedState,
                    o = a(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = o), nG(o, s)))
                    return rl(e, t, i, 0), null === o4 && ro(), !1;
            } catch (e) {
            } finally {
            }
        if (null !== (n = ru(e, t, i, r))) return lR(n, e, r), a8(n, t, r), !0;
    }
    return !1;
}
function a4(e, t, n, r) {
    if (((r = { lane: 2, revertLane: up(), action: r, hasEagerState: !1, eagerState: null, next: null }), a5(e))) {
        if (t) throw Error(l(479));
    } else null !== (t = ru(e, n, r, 2)) && lR(t, e, 2);
}
function a5(e) {
    var t = e.alternate;
    return e === iK || (null !== t && t === iK);
}
function a7(e, t) {
    iZ = iq = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function a8(e, t, n) {
    if (0 != (4194048 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (t.lanes = n |= r), ew(e, n);
    }
}
var a9 = {
        readContext: r4,
        use: aa,
        useCallback: i2,
        useContext: i2,
        useEffect: i2,
        useImperativeHandle: i2,
        useLayoutEffect: i2,
        useInsertionEffect: i2,
        useMemo: i2,
        useReducer: i2,
        useRef: i2,
        useState: i2,
        useDebugValue: i2,
        useDeferredValue: i2,
        useTransition: i2,
        useSyncExternalStore: i2,
        useId: i2,
        useHostTransitionStatus: i2,
        useFormState: i2,
        useActionState: i2,
        useOptimistic: i2,
        useMemoCache: i2,
        useCacheRefresh: i2,
    },
    se = {
        readContext: r4,
        use: aa,
        useCallback: function (e, t) {
            return (at().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: r4,
        useEffect: ak,
        useImperativeHandle: function (e, t, n) {
            (n = null != n ? n.concat([e]) : null), aP(4194308, 4, aF.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return aP(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            aP(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = at();
            t = void 0 === t ? null : t;
            var r = e();
            if (iQ) {
                eh(!0);
                try {
                    e();
                } finally {
                    eh(!1);
                }
            }
            return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
            var r = at();
            if (void 0 !== n) {
                var i = n(t);
                if (iQ) {
                    eh(!0);
                    try {
                        n(t);
                    } finally {
                        eh(!1);
                    }
                }
            } else i = t;
            return (
                (r.memoizedState = r.baseState = i),
                (r.queue = e =
                    { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
                (e = e.dispatch = a2.bind(null, iK, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return (at().memoizedState = { current: e });
        },
        useState: function (e) {
            var t = (e = ag(e)).queue,
                n = a3.bind(null, iK, t);
            return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: aj,
        useDeferredValue: function (e, t) {
            return aW(at(), e, t);
        },
        useTransition: function () {
            var e = ag(!1);
            return (e = az.bind(null, iK, e.queue, !0, !1)), (at().memoizedState = e), [!1, e];
        },
        useSyncExternalStore: function (e, t, n) {
            var r = iK,
                i = at();
            if (rG) {
                if (void 0 === n) throw Error(l(407));
                n = n();
            } else {
                if (((n = t()), null === o4)) throw Error(l(349));
                0 != (124 & o7) || a_(r, t, n);
            }
            i.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
                (i.queue = a),
                ak(ap.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                aL(9, aw(), af.bind(null, r, a, n, t), null),
                n
            );
        },
        useId: function () {
            var e = at(),
                t = o4.identifierPrefix;
            if (rG) {
                var n = rL,
                    r = rD;
                (t = "\xab" + t + "R" + (n = (r & ~(1 << (32 - em(r) - 1))).toString(32) + n)),
                    0 < (n = iX++) && (t += "H" + n.toString(32)),
                    (t += "\xbb");
            } else t = "\xab" + t + "r" + (n = i1++).toString(32) + "\xbb";
            return (e.memoizedState = t);
        },
        useHostTransitionStatus: aX,
        useFormState: ab,
        useActionState: ab,
        useOptimistic: function (e) {
            var t = at();
            t.memoizedState = t.baseState = e;
            var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
            return (t.queue = n), (t = a4.bind(null, iK, !0, n)), (n.dispatch = t), [e, t];
        },
        useMemoCache: as,
        useCacheRefresh: function () {
            return (at().memoizedState = a1.bind(null, iK));
        },
    },
    st = {
        readContext: r4,
        use: aa,
        useCallback: aH,
        useContext: r4,
        useEffect: aU,
        useImperativeHandle: aB,
        useInsertionEffect: aG,
        useLayoutEffect: aV,
        useMemo: aY,
        useReducer: al,
        useRef: ax,
        useState: function () {
            return al(ao);
        },
        useDebugValue: aj,
        useDeferredValue: function (e, t) {
            return aK(an(), iz.memoizedState, e, t);
        },
        useTransition: function () {
            var e = al(ao)[0],
                t = an().memoizedState;
            return ["boolean" == typeof e ? e : ai(e), t];
        },
        useSyncExternalStore: ad,
        useId: aJ,
        useHostTransitionStatus: aX,
        useFormState: aN,
        useActionState: aN,
        useOptimistic: function (e, t) {
            return aE(an(), iz, e, t);
        },
        useMemoCache: as,
        useCacheRefresh: a0,
    },
    sn = {
        readContext: r4,
        use: aa,
        useCallback: aH,
        useContext: r4,
        useEffect: aU,
        useImperativeHandle: aB,
        useInsertionEffect: aG,
        useLayoutEffect: aV,
        useMemo: aY,
        useReducer: ac,
        useRef: ax,
        useState: function () {
            return ac(ao);
        },
        useDebugValue: aj,
        useDeferredValue: function (e, t) {
            var n = an();
            return null === iz ? aW(n, e, t) : aK(n, iz.memoizedState, e, t);
        },
        useTransition: function () {
            var e = ac(ao)[0],
                t = an().memoizedState;
            return ["boolean" == typeof e ? e : ai(e), t];
        },
        useSyncExternalStore: ad,
        useId: aJ,
        useHostTransitionStatus: aX,
        useFormState: aD,
        useActionState: aD,
        useOptimistic: function (e, t) {
            var n = an();
            return null !== iz ? aE(n, iz, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: as,
        useCacheRefresh: a0,
    },
    sr = null,
    si = 0;
function sa(e) {
    var t = si;
    return (si += 1), null === sr && (sr = []), iv(sr, e, t);
}
function ss(e, t) {
    e.ref = void 0 !== (t = t.props.ref) ? t : null;
}
function so(e, t) {
    if (t.$$typeof === m) throw Error(l(525));
    throw Error(
        l(
            31,
            "[object Object]" === (e = Object.prototype.toString.call(t))
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
        ),
    );
}
function sl(e) {
    return (0, e._init)(e._payload);
}
function su(e) {
    function t(t, n) {
        if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
    }
    function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
    }
    function r(e) {
        for (var t = new Map(); null !== e; ) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
        return t;
    }
    function i(e, t) {
        return ((e = rg(e, t)).index = 0), (e.sibling = null), e;
    }
    function a(t, n, r) {
        return ((t.index = r), e)
            ? null !== (r = t.alternate)
                ? (r = r.index) < n
                    ? ((t.flags |= 0x4000002), n)
                    : r
                : ((t.flags |= 0x4000002), n)
            : ((t.flags |= 1048576), n);
    }
    function s(t) {
        return e && null === t.alternate && (t.flags |= 0x4000002), t;
    }
    function o(e, t, n, r) {
        return null === t || 6 !== t.tag ? ((t = rT(n, e.mode, r)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function u(e, t, n, r) {
        var a = n.type;
        return a === A
            ? d(e, t, n.props.children, r, n.key)
            : (null !== t &&
              (t.elementType === a || ("object" == typeof a && null !== a && a.$$typeof === O && sl(a) === t.type))
                  ? ss((t = i(t, n.props)), n)
                  : ss((t = rA(n.type, n.key, n.props, null, e.mode, r)), n),
              (t.return = e),
              t);
    }
    function c(e, t, n, r) {
        return (
            null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
                ? ((t = ry(n, e.mode, r)).return = e)
                : ((t = i(t, n.children || [])).return = e),
            t
        );
    }
    function d(e, t, n, r, a) {
        return null === t || 7 !== t.tag ? ((t = rI(n, e.mode, r, a)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function _(e, t, n) {
        if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
            return ((t = rT("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case g:
                    return ss((n = rA(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n;
                case E:
                    return ((t = ry(t, e.mode, n)).return = e), t;
                case O:
                    return _(e, (t = (0, t._init)(t._payload)), n);
            }
            if (k(t) || x(t)) return ((t = rI(t, e.mode, n, null)).return = e), t;
            if ("function" == typeof t.then) return _(e, sa(t), n);
            if (t.$$typeof === v) return _(e, r5(e, t), n);
            so(e, t);
        }
        return null;
    }
    function f(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (("string" == typeof n && "" !== n) || "number" == typeof n || "bigint" == typeof n)
            return null !== i ? null : o(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case g:
                    return n.key === i ? u(e, t, n, r) : null;
                case E:
                    return n.key === i ? c(e, t, n, r) : null;
                case O:
                    return f(e, t, (n = (i = n._init)(n._payload)), r);
            }
            if (k(n) || x(n)) return null !== i ? null : d(e, t, n, r, null);
            if ("function" == typeof n.then) return f(e, t, sa(n), r);
            if (n.$$typeof === v) return f(e, t, r5(e, n), r);
            so(e, n);
        }
        return null;
    }
    function p(e, t, n, r, i) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r)
            return o(t, (e = e.get(n) || null), "" + r, i);
        if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case g:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case E:
                    return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case O:
                    return p(e, t, n, (r = (0, r._init)(r._payload)), i);
            }
            if (k(r) || x(r)) return d(t, (e = e.get(n) || null), r, i, null);
            if ("function" == typeof r.then) return p(e, t, n, sa(r), i);
            if (r.$$typeof === v) return p(e, t, n, r5(t, r), i);
            so(t, r);
        }
        return null;
    }
    function h(i, s, o, l) {
        for (var u = null, c = null, d = s, h = (s = 0), m = null; null !== d && h < o.length; h++) {
            d.index > h ? ((m = d), (d = null)) : (m = d.sibling);
            var g = f(i, d, o[h], l);
            if (null === g) {
                null === d && (d = m);
                break;
            }
            e && d && null === g.alternate && t(i, d),
                (s = a(g, s, h)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = m);
        }
        if (h === o.length) return n(i, d), rG && rw(i, h), u;
        if (null === d) {
            for (; h < o.length; h++)
                null !== (d = _(i, o[h], l)) && ((s = a(d, s, h)), null === c ? (u = d) : (c.sibling = d), (c = d));
            return rG && rw(i, h), u;
        }
        for (d = r(d); h < o.length; h++)
            null !== (m = p(d, i, h, o[h], l)) &&
                (e && null !== m.alternate && d.delete(null === m.key ? h : m.key),
                (s = a(m, s, h)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
        return (
            e &&
                d.forEach(function (e) {
                    return t(i, e);
                }),
            rG && rw(i, h),
            u
        );
    }
    function m(i, s, o, u) {
        if (null == o) throw Error(l(151));
        for (
            var c = null, d = null, h = s, m = (s = 0), g = null, E = o.next();
            null !== h && !E.done;
            m++, E = o.next()
        ) {
            h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
            var A = f(i, h, E.value, u);
            if (null === A) {
                null === h && (h = g);
                break;
            }
            e && h && null === A.alternate && t(i, h),
                (s = a(A, s, m)),
                null === d ? (c = A) : (d.sibling = A),
                (d = A),
                (h = g);
        }
        if (E.done) return n(i, h), rG && rw(i, m), c;
        if (null === h) {
            for (; !E.done; m++, E = o.next())
                null !== (E = _(i, E.value, u)) && ((s = a(E, s, m)), null === d ? (c = E) : (d.sibling = E), (d = E));
            return rG && rw(i, m), c;
        }
        for (h = r(h); !E.done; m++, E = o.next())
            null !== (E = p(h, i, m, E.value, u)) &&
                (e && null !== E.alternate && h.delete(null === E.key ? m : E.key),
                (s = a(E, s, m)),
                null === d ? (c = E) : (d.sibling = E),
                (d = E));
        return (
            e &&
                h.forEach(function (e) {
                    return t(i, e);
                }),
            rG && rw(i, m),
            c
        );
    }
    function I(e, r, a, o) {
        if (
            ("object" == typeof a && null !== a && a.type === A && null === a.key && (a = a.props.children),
            "object" == typeof a && null !== a)
        ) {
            switch (a.$$typeof) {
                case g:
                    e: {
                        for (var u = a.key; null !== r; ) {
                            if (r.key === u) {
                                if ((u = a.type) === A) {
                                    if (7 === r.tag) {
                                        n(e, r.sibling), ((o = i(r, a.props.children)).return = e), (e = o);
                                        break e;
                                    }
                                } else if (
                                    r.elementType === u ||
                                    ("object" == typeof u && null !== u && u.$$typeof === O && sl(u) === r.type)
                                ) {
                                    n(e, r.sibling), ss((o = i(r, a.props)), a), (o.return = e), (e = o);
                                    break e;
                                }
                                n(e, r);
                                break;
                            }
                            t(e, r), (r = r.sibling);
                        }
                        a.type === A
                            ? ((o = rI(a.props.children, e.mode, o, a.key)).return = e)
                            : (ss((o = rA(a.type, a.key, a.props, null, e.mode, o)), a), (o.return = e)),
                            (e = o);
                    }
                    return s(e);
                case E:
                    e: {
                        for (u = a.key; null !== r; ) {
                            if (r.key === u)
                                if (
                                    4 === r.tag &&
                                    r.stateNode.containerInfo === a.containerInfo &&
                                    r.stateNode.implementation === a.implementation
                                ) {
                                    n(e, r.sibling), ((o = i(r, a.children || [])).return = e), (e = o);
                                    break e;
                                } else {
                                    n(e, r);
                                    break;
                                }
                            t(e, r), (r = r.sibling);
                        }
                        ((o = ry(a, e.mode, o)).return = e), (e = o);
                    }
                    return s(e);
                case O:
                    return I(e, r, (a = (u = a._init)(a._payload)), o);
            }
            if (k(a)) return h(e, r, a, o);
            if (x(a)) {
                if ("function" != typeof (u = x(a))) throw Error(l(150));
                return m(e, r, (a = u.call(a)), o);
            }
            if ("function" == typeof a.then) return I(e, r, sa(a), o);
            if (a.$$typeof === v) return I(e, r, r5(e, a), o);
            so(e, a);
        }
        return ("string" == typeof a && "" !== a) || "number" == typeof a || "bigint" == typeof a
            ? ((a = "" + a),
              null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((o = i(r, a)).return = e))
                  : (n(e, r), ((o = rT(a, e.mode, o)).return = e)),
              s((e = o)))
            : n(e, r);
    }
    return function (e, t, n, r) {
        try {
            si = 0;
            var i = I(e, t, n, r);
            return (sr = null), i;
        } catch (t) {
            if (t === iE || t === iI) throw t;
            var a = rh(29, t, null, e.mode);
            return (a.lanes = r), (a.return = e), a;
        } finally {
        }
    };
}
var sc = su(!0),
    sd = su(!1),
    s_ = j(null),
    sf = null;
function sp(e) {
    var t = e.alternate;
    Y(sE, 1 & sE.current),
        Y(s_, e),
        null === sf && (null === t || null !== iF.current ? (sf = e) : null !== t.memoizedState && (sf = e));
}
function sh(e) {
    if (22 === e.tag) {
        if ((Y(sE, sE.current), Y(s_, e), null === sf)) {
            var t = e.alternate;
            null !== t && null !== t.memoizedState && (sf = e);
        }
    } else sm(e);
}
function sm() {
    Y(sE, sE.current), Y(s_, s_.current);
}
function sg(e) {
    H(s_), sf === e && (sf = null), H(sE);
}
var sE = j(0);
function sA(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || u5(n))) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
function sI(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : h({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var sT = {
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = lb(),
            i = iL(r);
        (i.payload = t), null != n && (i.callback = n), null !== (t = iw(e, i, r)) && (lR(t, e, r), ix(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = lb(),
            i = iL(r);
        (i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = iw(e, i, r)) && (lR(t, e, r), ix(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = lb(),
            r = iL(n);
        (r.tag = 2), null != t && (r.callback = t), null !== (t = iw(e, r, n)) && (lR(t, e, n), ix(t, e, n));
    },
};
function sy(e, t, n, r, i, a, s) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, s)
        : !t.prototype || !t.prototype.isPureReactComponent || !nV(n, r) || !nV(i, a);
}
function sS(e, t, n, r) {
    (e = t.state),
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && sT.enqueueReplaceState(t, t.state, null);
}
function sv(e, t) {
    var n = t;
    if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
    if ((e = e.defaultProps)) for (var i in (n === t && (n = h({}, n)), e)) void 0 === n[i] && (n[i] = e[i]);
    return n;
}
var sC =
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
              } else if ("object" == typeof i && "function" == typeof i.emit)
                  return void i.emit("uncaughtException", e);
              console.error(e);
          };
function sb(e) {
    sC(e);
}
function sN(e) {
    console.error(e);
}
function sR(e) {
    sC(e);
}
function sO(e, t) {
    try {
        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function sD(e, t, n) {
    try {
        (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function sL(e, t, n) {
    return (
        ((n = iL(n)).tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
            sO(e, t);
        }),
        n
    );
}
function sw(e) {
    return ((e = iL(e)).tag = 3), e;
}
function sx(e, t, n, r) {
    var i = n.type.getDerivedStateFromError;
    if ("function" == typeof i) {
        var a = r.value;
        (e.payload = function () {
            return i(a);
        }),
            (e.callback = function () {
                sD(t, n, r);
            });
    }
    var s = n.stateNode;
    null !== s &&
        "function" == typeof s.componentDidCatch &&
        (e.callback = function () {
            sD(t, n, r), "function" != typeof i && (null === lm ? (lm = new Set([this])) : lm.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
        });
}
function sP(e, t, n, r, i) {
    if (((n.flags |= 32768), null !== r && "object" == typeof r && "function" == typeof r.then)) {
        if ((null !== (t = n.alternate) && r2(t, n, i, !0), null !== (n = s_.current))) {
            switch (n.tag) {
                case 13:
                    return (
                        null === sf ? lV() : null === n.alternate && 0 === li && (li = 3),
                        (n.flags &= -257),
                        (n.flags |= 65536),
                        (n.lanes = i),
                        r === iT
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r), l6(e, r, i)),
                        !1
                    );
                case 22:
                    return (
                        (n.flags |= 65536),
                        r === iT
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                  ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }),
                                    (n.updateQueue = t))
                                  : null === (n = t.retryQueue)
                                    ? (t.retryQueue = new Set([r]))
                                    : n.add(r),
                              l6(e, r, i)),
                        !1
                    );
            }
            throw Error(l(435, n.tag));
        }
        return l6(e, r, i), lV(), !1;
    }
    if (rG)
        return (
            null !== (t = s_.current)
                ? (0 == (65536 & t.flags) && (t.flags |= 256),
                  (t.flags |= 65536),
                  (t.lanes = i),
                  r !== rB && r$(rr((e = Error(l(422), { cause: r })), n)))
                : (r !== rB && r$(rr((t = Error(l(423), { cause: r })), n)),
                  (e = e.current.alternate),
                  (e.flags |= 65536),
                  (i &= -i),
                  (e.lanes |= i),
                  (r = rr(r, n)),
                  (i = sL(e.stateNode, r, i)),
                  iP(e, i),
                  4 !== li && (li = 2)),
            !1
        );
    var a = Error(l(520), { cause: r });
    if (((a = rr(a, n)), null === lc ? (lc = [a]) : lc.push(a), 4 !== li && (li = 2), null === t)) return !0;
    (r = rr(r, n)), (n = t);
    do {
        switch (n.tag) {
            case 3:
                return (n.flags |= 65536), (e = i & -i), (n.lanes |= e), (e = sL(n.stateNode, r, e)), iP(n, e), !1;
            case 1:
                if (
                    ((t = n.type),
                    (a = n.stateNode),
                    0 == (128 & n.flags) &&
                        ("function" == typeof t.getDerivedStateFromError ||
                            (null !== a && "function" == typeof a.componentDidCatch && (null === lm || !lm.has(a)))))
                )
                    return (n.flags |= 65536), (i &= -i), (n.lanes |= i), sx((i = sw(i)), e, n, r), iP(n, i), !1;
        }
        n = n.return;
    } while (null !== n);
    return !1;
}
var sM = Error(l(461)),
    sk = !1;
function sU(e, t, n, r) {
    t.child = null === e ? sd(t, null, n, r) : sc(t, e.child, n, r);
}
function sG(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    if ("ref" in r) {
        var s = {};
        for (var o in r) "ref" !== o && (s[o] = r[o]);
    } else s = r;
    return (r6(t), (r = i6(e, t, n, s, a, i)), (o = i8()), null === e || sk)
        ? (rG && o && rP(t), (t.flags |= 1), sU(e, t, r, i), t.child)
        : (i9(e, t, i), s6(e, t, i));
}
function sV(e, t, n, r, i) {
    if (null === e) {
        var a = n.type;
        return "function" != typeof a || rm(a) || void 0 !== a.defaultProps || null !== n.compare
            ? (((e = rA(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = a), sF(e, t, a, r, i));
    }
    if (((a = e.child), !s4(e, i))) {
        var s = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nV)(s, r) && e.ref === t.ref) return s6(e, t, i);
    }
    return (t.flags |= 1), ((e = rg(a, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function sF(e, t, n, r, i) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (nV(a, r) && e.ref === t.ref)
            if (((sk = !1), (t.pendingProps = r = a), !s4(e, i))) return (t.lanes = e.lanes), s6(e, t, i);
            else 0 != (131072 & e.flags) && (sk = !0);
    }
    return sY(e, t, n, r, i);
}
function sB(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        a = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode) {
        if (0 != (128 & t.flags)) {
            if (((r = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (a = 0, i = t.child = e.child; null !== i; ) (a = a | i.lanes | i.childLanes), (i = i.sibling);
                t.childLanes = a & ~r;
            } else (t.childLanes = 0), (t.child = null);
            return sj(e, t, r, n);
        }
        if (0 == (0x20000000 & n))
            return (t.lanes = t.childLanes = 0x20000000), sj(e, t, null !== a ? a.baseLanes | n : n, n);
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
            null !== e && im(t, null !== a ? a.cachePool : null),
            null !== a ? ij(t, a) : iH(),
            sh(t);
    } else
        null !== a
            ? (im(t, a.cachePool), ij(t, a), sm(t), (t.memoizedState = null))
            : (null !== e && im(t, null), iH(), sm(t));
    return sU(e, t, i, n), t.child;
}
function sj(e, t, n, r) {
    var i = ih();
    return (
        (t.memoizedState = {
            baseLanes: n,
            cachePool: (i = null === i ? null : { parent: it._currentValue, pool: i }),
        }),
        null !== e && im(t, null),
        iH(),
        sh(t),
        null !== e && r2(e, t, r, !0),
        null
    );
}
function sH(e, t) {
    var n = t.ref;
    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
    else {
        if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
        (null === e || e.ref !== n) && (t.flags |= 4194816);
    }
}
function sY(e, t, n, r, i) {
    return (r6(t), (n = i6(e, t, n, r, void 0, i)), (r = i8()), null === e || sk)
        ? (rG && r && rP(t), (t.flags |= 1), sU(e, t, n, i), t.child)
        : (i9(e, t, i), s6(e, t, i));
}
function sW(e, t, n, r, i, a) {
    return (r6(t), (t.updateQueue = null), (n = i5(t, r, n, i)), i4(e), (r = i8()), null === e || sk)
        ? (rG && r && rP(t), (t.flags |= 1), sU(e, t, n, a), t.child)
        : (i9(e, t, a), s6(e, t, a));
}
function sK(e, t, n, r, i) {
    if ((r6(t), null === t.stateNode)) {
        var a = rf,
            s = n.contextType;
        "object" == typeof s && null !== s && (a = r4(s)),
            (t.memoizedState = null !== (a = new n(r, a)).state && void 0 !== a.state ? a.state : null),
            (a.updater = sT),
            (t.stateNode = a),
            (a._reactInternals = t),
            ((a = t.stateNode).props = r),
            (a.state = t.memoizedState),
            (a.refs = {}),
            iO(t),
            (s = n.contextType),
            (a.context = "object" == typeof s && null !== s ? r4(s) : rf),
            (a.state = t.memoizedState),
            "function" == typeof (s = n.getDerivedStateFromProps) && (sI(t, n, s, r), (a.state = t.memoizedState)),
            "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount) ||
                ((s = a.state),
                "function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                s !== a.state && sT.enqueueReplaceState(a, a.state, null),
                iU(t, r, a, i),
                ik(),
                (a.state = t.memoizedState)),
            "function" == typeof a.componentDidMount && (t.flags |= 4194308),
            (r = !0);
    } else if (null === e) {
        a = t.stateNode;
        var o = t.memoizedProps,
            l = sv(n, o);
        a.props = l;
        var u = a.context,
            c = n.contextType;
        (s = rf), "object" == typeof c && null !== c && (s = r4(c));
        var d = n.getDerivedStateFromProps;
        (c = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate),
            (o = t.pendingProps !== o),
            c ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                ((o || u !== s) && sS(t, a, r, s)),
            (iR = !1);
        var _ = t.memoizedState;
        (a.state = _),
            iU(t, r, a, i),
            ik(),
            (u = t.memoizedState),
            o || _ !== u || iR
                ? ("function" == typeof d && (sI(t, n, d, r), (u = t.memoizedState)),
                  (l = iR || sy(t, n, l, r, _, u, s))
                      ? (c ||
                            ("function" != typeof a.UNSAFE_componentWillMount &&
                                "function" != typeof a.componentWillMount) ||
                            ("function" == typeof a.componentWillMount && a.componentWillMount(),
                            "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                        "function" == typeof a.componentDidMount && (t.flags |= 4194308))
                      : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = s),
                  (r = l))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1));
    } else {
        (a = t.stateNode),
            iD(e, t),
            (c = sv(n, (s = t.memoizedProps))),
            (a.props = c),
            (d = t.pendingProps),
            (_ = a.context),
            (u = n.contextType),
            (l = rf),
            "object" == typeof u && null !== u && (l = r4(u)),
            (u =
                "function" == typeof (o = n.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                ((s !== d || _ !== l) && sS(t, a, r, l)),
            (iR = !1),
            (_ = t.memoizedState),
            (a.state = _),
            iU(t, r, a, i),
            ik();
        var f = t.memoizedState;
        s !== d || _ !== f || iR || (null !== e && null !== e.dependencies && r3(e.dependencies))
            ? ("function" == typeof o && (sI(t, n, o, r), (f = t.memoizedState)),
              (c = iR || sy(t, n, c, r, _, f, l) || (null !== e && null !== e.dependencies && r3(e.dependencies)))
                  ? (u ||
                        ("function" != typeof a.UNSAFE_componentWillUpdate &&
                            "function" != typeof a.componentWillUpdate) ||
                        ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, f, l),
                        "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, f, l)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ("function" != typeof a.componentDidUpdate ||
                        (s === e.memoizedProps && _ === e.memoizedState) ||
                        (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                        (s === e.memoizedProps && _ === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = f)),
              (a.props = r),
              (a.state = f),
              (a.context = l),
              (r = c))
            : ("function" != typeof a.componentDidUpdate ||
                  (s === e.memoizedProps && _ === e.memoizedState) ||
                  (t.flags |= 4),
              "function" != typeof a.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && _ === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return (
        (a = r),
        sH(e, t),
        (r = 0 != (128 & t.flags)),
        a || r
            ? ((a = t.stateNode),
              (n = r && "function" != typeof n.getDerivedStateFromError ? null : a.render()),
              (t.flags |= 1),
              null !== e && r ? ((t.child = sc(t, e.child, null, i)), (t.child = sc(t, null, n, i))) : sU(e, t, n, i),
              (t.memoizedState = a.state),
              (e = t.child))
            : (e = s6(e, t, i)),
        e
    );
}
function sz(e, t, n, r) {
    return rK(), (t.flags |= 256), sU(e, t, n, r), t.child;
}
var s$ = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
function sq(e) {
    return { baseLanes: e, cachePool: ig() };
}
function sZ(e, t, n) {
    return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= ll), e;
}
function sQ(e, t, n) {
    var r,
        i = t.pendingProps,
        a = !1,
        s = 0 != (128 & t.flags);
    if (
        ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & sE.current)),
        r && ((a = !0), (t.flags &= -129)),
        (r = 0 != (32 & t.flags)),
        (t.flags &= -33),
        null === e)
    ) {
        if (rG) {
            if ((a ? sp(t) : sm(t), rG)) {
                var o,
                    u = rU;
                if ((o = u)) {
                    s: {
                        for (o = u, u = rF; 8 !== o.nodeType; )
                            if (!u || null === (o = u8(o.nextSibling))) {
                                u = null;
                                break s;
                            }
                        u = o;
                    }
                    null !== u
                        ? ((t.memoizedState = {
                              dehydrated: u,
                              treeContext: null !== rO ? { id: rD, overflow: rL } : null,
                              retryLane: 0x20000000,
                              hydrationErrors: null,
                          }),
                          ((o = rh(18, null, null, 0)).stateNode = u),
                          (o.return = t),
                          (t.child = o),
                          (rk = t),
                          (rU = null),
                          (o = !0))
                        : (o = !1);
                }
                o || rj(t);
            }
            if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                return u5(u) ? (t.lanes = 32) : (t.lanes = 0x20000000), null;
            sg(t);
        }
        return ((u = i.children), (i = i.fallback), a)
            ? (sm(t),
              (u = sJ({ mode: "hidden", children: u }, (a = t.mode))),
              (i = rI(i, a, n, null)),
              (u.return = t),
              (i.return = t),
              (u.sibling = i),
              (t.child = u),
              ((a = t.child).memoizedState = sq(n)),
              (a.childLanes = sZ(e, r, n)),
              (t.memoizedState = s$),
              i)
            : (sp(t), sX(t, u));
    }
    if (null !== (o = e.memoizedState) && null !== (u = o.dehydrated)) {
        if (s)
            256 & t.flags
                ? (sp(t), (t.flags &= -257), (t = s0(e, t, n)))
                : null !== t.memoizedState
                  ? (sm(t), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (sm(t),
                    (a = i.fallback),
                    (u = t.mode),
                    (i = sJ({ mode: "visible", children: i.children }, u)),
                    (a = rI(a, u, n, null)),
                    (a.flags |= 2),
                    (i.return = t),
                    (a.return = t),
                    (i.sibling = a),
                    (t.child = i),
                    sc(t, e.child, null, n),
                    ((i = t.child).memoizedState = sq(n)),
                    (i.childLanes = sZ(e, r, n)),
                    (t.memoizedState = s$),
                    (t = a));
        else if ((sp(t), u5(u))) {
            if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
            (r = c),
                ((i = Error(l(419))).stack = ""),
                (i.digest = r),
                r$({ value: i, source: null, stack: null }),
                (t = s0(e, t, n));
        } else if ((sk || r2(e, t, n, !1), (r = 0 != (n & e.childLanes)), sk || r)) {
            if (
                null !== (r = o4) &&
                0 !== (i = 0 != ((i = 0 != (42 & (i = n & -n)) ? 1 : ex(i)) & (r.suspendedLanes | n)) ? 0 : i) &&
                i !== o.retryLane
            )
                throw ((o.retryLane = i), rc(e, i), lR(r, e, i), sM);
            "$?" === u.data || lV(), (t = s0(e, t, n));
        } else
            "$?" === u.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = o.treeContext),
                  (rU = u8(u.nextSibling)),
                  (rk = t),
                  (rG = !0),
                  (rV = null),
                  (rF = !1),
                  null !== e &&
                      ((rN[rR++] = rD), (rN[rR++] = rL), (rN[rR++] = rO), (rD = e.id), (rL = e.overflow), (rO = t)),
                  (t = sX(t, i.children)),
                  (t.flags |= 4096));
        return t;
    }
    return a
        ? (sm(t),
          (a = i.fallback),
          (u = t.mode),
          (c = (o = e.child).sibling),
          ((i = rg(o, { mode: "hidden", children: i.children })).subtreeFlags = 0x3e00000 & o.subtreeFlags),
          null !== c ? (a = rg(c, a)) : ((a = rI(a, u, n, null)), (a.flags |= 2)),
          (a.return = t),
          (i.return = t),
          (i.sibling = a),
          (t.child = i),
          (i = a),
          (a = t.child),
          null === (u = e.child.memoizedState)
              ? (u = sq(n))
              : (null !== (o = u.cachePool)
                    ? ((c = it._currentValue), (o = o.parent !== c ? { parent: c, pool: c } : o))
                    : (o = ig()),
                (u = { baseLanes: u.baseLanes | n, cachePool: o })),
          (a.memoizedState = u),
          (a.childLanes = sZ(e, r, n)),
          (t.memoizedState = s$),
          i)
        : (sp(t),
          (e = (n = e.child).sibling),
          ((n = rg(n, { mode: "visible", children: i.children })).return = t),
          (n.sibling = null),
          null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
}
function sX(e, t) {
    return ((t = sJ({ mode: "visible", children: t }, e.mode)).return = e), (e.child = t);
}
function sJ(e, t) {
    return (
        ((e = rh(22, e, null, t)).lanes = 0),
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        e
    );
}
function s0(e, t, n) {
    return sc(t, e.child, null, n), (e = sX(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function s1(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), r0(e.return, t, n);
}
function s2(e, t, n, r, i) {
    var a = e.memoizedState;
    null === a
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
}
function s3(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
    if ((sU(e, t, r.children, n), 0 != (2 & (r = sE.current)))) (r = (1 & r) | 2), (t.flags |= 128);
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && s1(e, n, t);
                else if (19 === e.tag) s1(e, n, t);
                else if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break;
                for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    switch ((Y(sE, r), i)) {
        case "forwards":
            for (i = null, n = t.child; null !== n; )
                null !== (e = n.alternate) && null === sA(e) && (i = n), (n = n.sibling);
            null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                s2(t, !1, i, n, a);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === sA(e)) {
                    t.child = i;
                    break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
            }
            s2(t, !0, n, null, a);
            break;
        case "together":
            s2(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null;
    }
    return t.child;
}
function s6(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (la |= t.lanes), 0 == (n & t.childLanes))) {
        if (null === e) return null;
        else if ((r2(e, t, n, !1), 0 == (n & t.childLanes))) return null;
    }
    if (null !== e && t.child !== e.child) throw Error(l(153));
    if (null !== t.child) {
        for (n = rg((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = rg(e, e.pendingProps)).return = t);
        n.sibling = null;
    }
    return t.child;
}
function s4(e, t) {
    return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && r3(e));
}
function s5(e, t, n) {
    switch (t.tag) {
        case 3:
            q(t, t.stateNode.containerInfo), rX(t, it, e.memoizedState.cache), rK();
            break;
        case 27:
        case 5:
            Q(t);
            break;
        case 4:
            q(t, t.stateNode.containerInfo);
            break;
        case 10:
            rX(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var r = t.memoizedState;
            if (null !== r) {
                if (null !== r.dehydrated) return sp(t), (t.flags |= 128), null;
                if (0 != (n & t.child.childLanes)) return sQ(e, t, n);
                return sp(t), null !== (e = s6(e, t, n)) ? e.sibling : null;
            }
            sp(t);
            break;
        case 19:
            var i = 0 != (128 & e.flags);
            if (((r = 0 != (n & t.childLanes)) || (r2(e, t, n, !1), (r = 0 != (n & t.childLanes))), i)) {
                if (r) return s3(e, t, n);
                t.flags |= 128;
            }
            if (
                (null !== (i = t.memoizedState) && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                Y(sE, sE.current),
                !r)
            )
                return null;
            break;
        case 22:
        case 23:
            return (t.lanes = 0), sB(e, t, n);
        case 24:
            rX(t, it, e.memoizedState.cache);
    }
    return s6(e, t, n);
}
function s7(e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps) sk = !0;
        else {
            if (!s4(e, n) && 0 == (128 & t.flags)) return (sk = !1), s5(e, t, n);
            sk = 0 != (131072 & e.flags);
        }
    else (sk = !1), rG && 0 != (1048576 & t.flags) && rx(t, rb, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 16:
            e: {
                e = t.pendingProps;
                var r = t.elementType,
                    i = r._init;
                if (((r = i(r._payload)), (t.type = r), "function" == typeof r))
                    rm(r)
                        ? ((e = sv(r, e)), (t.tag = 1), (t = sK(null, t, r, e, n)))
                        : ((t.tag = 0), (t = sY(null, t, r, e, n)));
                else {
                    if (null != r) {
                        if ((i = r.$$typeof) === C) {
                            (t.tag = 11), (t = sG(null, t, r, e, n));
                            break e;
                        } else if (i === R) {
                            (t.tag = 14), (t = sV(null, t, r, e, n));
                            break e;
                        }
                    }
                    throw Error(l(306, (t = M(r) || r), ""));
                }
            }
            return t;
        case 0:
            return sY(e, t, t.type, t.pendingProps, n);
        case 1:
            return (i = sv((r = t.type), t.pendingProps)), sK(e, t, r, i, n);
        case 3:
            e: {
                if ((q(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                (i = a.element), iD(e, t), iU(t, r, null, n);
                var s = t.memoizedState;
                if (
                    (rX(t, it, (r = s.cache)),
                    r !== a.cache && r1(t, [it], n, !0),
                    ik(),
                    (r = s.element),
                    a.isDehydrated)
                )
                    if (
                        ((a = { element: r, isDehydrated: !1, cache: s.cache }),
                        (t.updateQueue.baseState = a),
                        (t.memoizedState = a),
                        256 & t.flags)
                    ) {
                        t = sz(e, t, r, n);
                        break e;
                    } else if (r !== i) {
                        r$((i = rr(Error(l(424)), t))), (t = sz(e, t, r, n));
                        break e;
                    } else
                        for (
                            rU = u8(
                                (e =
                                    9 === (e = t.stateNode.containerInfo).nodeType
                                        ? e.body
                                        : "HTML" === e.nodeName
                                          ? e.ownerDocument.body
                                          : e).firstChild,
                            ),
                                rk = t,
                                rG = !0,
                                rV = null,
                                rF = !0,
                                n = sd(t, null, r, n),
                                t.child = n;
                            n;
                        )
                            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                else {
                    if ((rK(), r === i)) {
                        t = s6(e, t, n);
                        break e;
                    }
                    sU(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 26:
            return (
                sH(e, t),
                null === e
                    ? (n = cm(t.type, null, t.pendingProps, null))
                        ? (t.memoizedState = n)
                        : rG ||
                          ((n = t.type),
                          (e = t.pendingProps),
                          ((r = uY(z.current).createElement(n))[eG] = t),
                          (r[eV] = e),
                          uF(r, n, e),
                          eQ(r),
                          (t.stateNode = r))
                    : (t.memoizedState = cm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                null
            );
        case 27:
            return (
                Q(t),
                null === e &&
                    rG &&
                    ((r = t.stateNode = ct(t.type, t.pendingProps, z.current)),
                    (rk = t),
                    (rF = !0),
                    (i = rU),
                    u1(t.type) ? ((u9 = i), (rU = u8(r.firstChild))) : (rU = i)),
                sU(e, t, t.pendingProps.children, n),
                sH(e, t),
                null === e && (t.flags |= 4194304),
                t.child
            );
        case 5:
            return (
                null === e &&
                    rG &&
                    ((i = r = rU) &&
                        (null !== (r = u6(r, t.type, t.pendingProps, rF))
                            ? ((t.stateNode = r), (rk = t), (rU = u8(r.firstChild)), (rF = !1), (i = !0))
                            : (i = !1)),
                    i || rj(t)),
                Q(t),
                (i = t.type),
                (a = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (r = a.children),
                uz(i, a) ? (r = null) : null !== s && uz(i, s) && (t.flags |= 32),
                null !== t.memoizedState && (cF._currentValue = i = i6(e, t, i7, null, null, n)),
                sH(e, t),
                sU(e, t, r, n),
                t.child
            );
        case 6:
            return (
                null === e &&
                    rG &&
                    ((e = n = rU) &&
                        (null !== (n = u4(n, t.pendingProps, rF))
                            ? ((t.stateNode = n), (rk = t), (rU = null), (e = !0))
                            : (e = !1)),
                    e || rj(t)),
                null
            );
        case 13:
            return sQ(e, t, n);
        case 4:
            return (
                q(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = sc(t, null, r, n)) : sU(e, t, r, n),
                t.child
            );
        case 11:
            return sG(e, t, t.type, t.pendingProps, n);
        case 7:
            return sU(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return sU(e, t, t.pendingProps.children, n), t.child;
        case 10:
            return (r = t.pendingProps), rX(t, t.type, r.value), sU(e, t, r.children, n), t.child;
        case 9:
            return (
                (i = t.type._context),
                (r = t.pendingProps.children),
                r6(t),
                (r = r((i = r4(i)))),
                (t.flags |= 1),
                sU(e, t, r, n),
                t.child
            );
        case 14:
            return sV(e, t, t.type, t.pendingProps, n);
        case 15:
            return sF(e, t, t.type, t.pendingProps, n);
        case 19:
            return s3(e, t, n);
        case 31:
            return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e ? ((n = sJ(r, n)).ref = t.ref) : ((n = rg(e.child, r)).ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n)
            );
        case 22:
            return sB(e, t, n);
        case 24:
            return (
                r6(t),
                (r = r4(it)),
                null === e
                    ? (null === (i = ih()) &&
                          ((i = o4),
                          (a = ir()),
                          (i.pooledCache = a),
                          a.refCount++,
                          null !== a && (i.pooledCacheLanes |= n),
                          (i = a)),
                      (t.memoizedState = { parent: r, cache: i }),
                      iO(t),
                      rX(t, it, i))
                    : (0 != (e.lanes & n) && (iD(e, t), iU(t, null, null, n), ik()),
                      (i = e.memoizedState),
                      (a = t.memoizedState),
                      i.parent !== r
                          ? ((i = { parent: r, cache: r }),
                            (t.memoizedState = i),
                            0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i),
                            rX(t, it, r))
                          : (rX(t, it, (r = a.cache)), r !== i.cache && r1(t, [it], n, !0))),
                sU(e, t, t.pendingProps.children, n),
                t.child
            );
        case 29:
            throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
}
function s8(e) {
    e.flags |= 4;
}
function s9(e, t) {
    if ("stylesheet" !== t.type || 0 != (4 & t.state.loading)) e.flags &= -0x1000001;
    else if (((e.flags |= 0x1000000), !cL(t))) {
        if (
            null !== (t = s_.current) &&
            ((4194048 & o7) === o7 ? null !== sf : ((0x3c00000 & o7) !== o7 && 0 == (0x20000000 & o7)) || t !== sf)
        )
            throw ((iC = iT), iA);
        e.flags |= 8192;
    }
}
function oe(e, t) {
    null !== t && (e.flags |= 4),
        16384 & e.flags && ((t = 22 !== e.tag ? eN() : 0x20000000), (e.lanes |= t), (lu |= t));
}
function ot(e, t) {
    if (!rG)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function on(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; null !== i; )
            (n |= i.lanes | i.childLanes),
                (r |= 0x3e00000 & i.subtreeFlags),
                (r |= 0x3e00000 & i.flags),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; null !== i; )
            (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function or(e, t, n) {
    var r = t.pendingProps;
    switch ((rM(t), t.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
        case 1:
            return on(t), null;
        case 3:
            return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                rJ(it),
                Z(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null === e || null === e.child) &&
                    (rW(t)
                        ? s8(t)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), rz())),
                on(t),
                null
            );
        case 26:
            return (
                (n = t.memoizedState),
                null === e
                    ? (s8(t), null !== n ? (on(t), s9(t, n)) : (on(t), (t.flags &= -0x1000001)))
                    : n
                      ? n !== e.memoizedState
                          ? (s8(t), on(t), s9(t, n))
                          : (on(t), (t.flags &= -0x1000001))
                      : (e.memoizedProps !== r && s8(t), on(t), (t.flags &= -0x1000001)),
                null
            );
        case 27:
            X(t), (n = z.current);
            var i = t.type;
            if (null !== e && null != t.stateNode) e.memoizedProps !== r && s8(t);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(l(166));
                    return on(t), null;
                }
                (e = W.current), rW(t) ? rH(t, e) : ((e = ct(i, r, n)), (t.stateNode = e), s8(t));
            }
            return on(t), null;
        case 5:
            if ((X(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && s8(t);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(l(166));
                    return on(t), null;
                }
                if (((e = W.current), rW(t))) rH(t, e);
                else {
                    switch (((i = uY(z.current)), e)) {
                        case 1:
                            e = i.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case 2:
                            e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        default:
                            switch (n) {
                                case "svg":
                                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case "math":
                                    e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                case "script":
                                    ((e = i.createElement("div")).innerHTML = "<script><\/script>"),
                                        (e = e.removeChild(e.firstChild));
                                    break;
                                case "select":
                                    (e =
                                        "string" == typeof r.is
                                            ? i.createElement("select", { is: r.is })
                                            : i.createElement("select")),
                                        r.multiple ? (e.multiple = !0) : r.size && (e.size = r.size);
                                    break;
                                default:
                                    e = "string" == typeof r.is ? i.createElement(n, { is: r.is }) : i.createElement(n);
                            }
                    }
                    (e[eG] = t), (e[eV] = r);
                    e: for (i = t.child; null !== i; ) {
                        if (5 === i.tag || 6 === i.tag) e.appendChild(i.stateNode);
                        else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                            (i.child.return = i), (i = i.child);
                            continue;
                        }
                        if (i === t) break;
                        for (; null === i.sibling; ) {
                            if (null === i.return || i.return === t) break e;
                            i = i.return;
                        }
                        (i.sibling.return = i.return), (i = i.sibling);
                    }
                    switch (((t.stateNode = e), uF(e, n, r), n)) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            e = !!r.autoFocus;
                            break;
                        case "img":
                            e = !0;
                            break;
                        default:
                            e = !1;
                    }
                    e && s8(t);
                }
            }
            return on(t), (t.flags &= -0x1000001), null;
        case 6:
            if (e && null != t.stateNode) e.memoizedProps !== r && s8(t);
            else {
                if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                if (((e = z.current), rW(t))) {
                    if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (i = rk)))
                        switch (i.tag) {
                            case 27:
                            case 5:
                                r = i.memoizedProps;
                        }
                    (e[eG] = t),
                        (e = !!(
                            e.nodeValue === n ||
                            (null !== r && !0 === r.suppressHydrationWarning) ||
                            uk(e.nodeValue, n)
                        )) || rj(t);
                } else ((e = uY(e).createTextNode(r))[eG] = t), (t.stateNode = e);
            }
            return on(t), null;
        case 13:
            if (
                ((r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (((i = rW(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(l(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                        i[eG] = t;
                    } else rK(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                    on(t), (i = !1);
                } else
                    (i = rz()),
                        null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = i),
                        (i = !0);
                if (!i) {
                    if (256 & t.flags) return sg(t), t;
                    return sg(t), null;
                }
            }
            if ((sg(t), 0 != (128 & t.flags))) return (t.lanes = n), t;
            if (((n = null !== r), (e = null !== e && null !== e.memoizedState), n)) {
                (r = t.child),
                    (i = null),
                    null !== r.alternate &&
                        null !== r.alternate.memoizedState &&
                        null !== r.alternate.memoizedState.cachePool &&
                        (i = r.alternate.memoizedState.cachePool.pool);
                var a = null;
                null !== r.memoizedState && null !== r.memoizedState.cachePool && (a = r.memoizedState.cachePool.pool),
                    a !== i && (r.flags |= 2048);
            }
            return n !== e && n && (t.child.flags |= 8192), oe(t, t.updateQueue), on(t), null;
        case 4:
            return Z(), null === e && ub(t.stateNode.containerInfo), on(t), null;
        case 10:
            return rJ(t.type), on(t), null;
        case 19:
            if ((H(sE), null === (i = t.memoizedState))) return on(t), null;
            if (((r = 0 != (128 & t.flags)), null === (a = i.rendering)))
                if (r) ot(i, !1);
                else {
                    if (0 !== li || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = sA(e))) {
                                for (
                                    t.flags |= 128,
                                        ot(i, !1),
                                        e = a.updateQueue,
                                        t.updateQueue = e,
                                        oe(t, e),
                                        t.subtreeFlags = 0,
                                        e = n,
                                        n = t.child;
                                    null !== n;
                                )
                                    rE(n, e), (n = n.sibling);
                                return Y(sE, (1 & sE.current) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && ei() > lp && ((t.flags |= 128), (r = !0), ot(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = sA(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (e = e.updateQueue),
                            (t.updateQueue = e),
                            oe(t, e),
                            ot(i, !0),
                            null === i.tail && "hidden" === i.tailMode && !a.alternate && !rG)
                        )
                            return on(t), null;
                    } else
                        2 * ei() - i.renderingStartTime > lp &&
                            0x20000000 !== n &&
                            ((t.flags |= 128), (r = !0), ot(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (e = i.last) ? (e.sibling = a) : (t.child = a), (i.last = a));
            }
            if (null !== i.tail)
                return (
                    (t = i.tail),
                    (i.rendering = t),
                    (i.tail = t.sibling),
                    (i.renderingStartTime = ei()),
                    (t.sibling = null),
                    (e = sE.current),
                    Y(sE, r ? (1 & e) | 2 : 1 & e),
                    t
                );
            return on(t), null;
        case 22:
        case 23:
            return (
                sg(t),
                iY(),
                (r = null !== t.memoizedState),
                null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                r
                    ? 0 != (0x20000000 & n) && 0 == (128 & t.flags) && (on(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : on(t),
                null !== (n = t.updateQueue) && oe(t, n.retryQueue),
                (n = null),
                null !== e &&
                    null !== e.memoizedState &&
                    null !== e.memoizedState.cachePool &&
                    (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && H(ip),
                null
            );
        case 24:
            return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                rJ(it),
                on(t),
                null
            );
        case 25:
        case 30:
            return null;
    }
    throw Error(l(156, t.tag));
}
function oi(e, t) {
    switch ((rM(t), t.tag)) {
        case 1:
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 3:
            return (
                rJ(it), Z(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 26:
        case 27:
        case 5:
            return X(t), null;
        case 13:
            if ((sg(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(l(340));
                rK();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return H(sE), null;
        case 4:
            return Z(), null;
        case 10:
            return rJ(t.type), null;
        case 22:
        case 23:
            return sg(t), iY(), null !== e && H(ip), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 24:
            return rJ(it), null;
        default:
            return null;
    }
}
function oa(e, t) {
    switch ((rM(t), t.tag)) {
        case 3:
            rJ(it), Z();
            break;
        case 26:
        case 27:
        case 5:
            X(t);
            break;
        case 4:
            Z();
            break;
        case 13:
            sg(t);
            break;
        case 19:
            H(sE);
            break;
        case 10:
            rJ(t.type);
            break;
        case 22:
        case 23:
            sg(t), iY(), null !== e && H(ip);
            break;
        case 24:
            rJ(it);
    }
}
function os(e, t) {
    try {
        var n = t.updateQueue,
            r = null !== n ? n.lastEffect : null;
        if (null !== r) {
            var i = r.next;
            n = i;
            do {
                if ((n.tag & e) === e) {
                    r = void 0;
                    var a = n.create;
                    n.inst.destroy = r = a();
                }
                n = n.next;
            } while (n !== i);
        }
    } catch (e) {
        l3(t, t.return, e);
    }
}
function oo(e, t, n) {
    try {
        var r = t.updateQueue,
            i = null !== r ? r.lastEffect : null;
        if (null !== i) {
            var a = i.next;
            r = a;
            do {
                if ((r.tag & e) === e) {
                    var s = r.inst,
                        o = s.destroy;
                    if (void 0 !== o) {
                        (s.destroy = void 0), (i = t);
                        var l = n,
                            u = o;
                        try {
                            u();
                        } catch (e) {
                            l3(i, l, e);
                        }
                    }
                }
                r = r.next;
            } while (r !== a);
        }
    } catch (e) {
        l3(t, t.return, e);
    }
}
function ol(e) {
    var t = e.updateQueue;
    if (null !== t) {
        var n = e.stateNode;
        try {
            iV(t, n);
        } catch (t) {
            l3(e, e.return, t);
        }
    }
}
function ou(e, t, n) {
    (n.props = sv(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
        n.componentWillUnmount();
    } catch (n) {
        l3(e, t, n);
    }
}
function oc(e, t) {
    try {
        var n = e.ref;
        if (null !== n) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                default:
                    r = e.stateNode;
            }
            "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
        }
    } catch (n) {
        l3(e, t, n);
    }
}
function od(e, t) {
    var n = e.ref,
        r = e.refCleanup;
    if (null !== n)
        if ("function" == typeof r)
            try {
                r();
            } catch (n) {
                l3(e, t, n);
            } finally {
                (e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null);
            }
        else if ("function" == typeof n)
            try {
                n(null);
            } catch (n) {
                l3(e, t, n);
            }
        else n.current = null;
}
function o_(e) {
    var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
    try {
        switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && r.focus();
                break;
            case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
    } catch (t) {
        l3(e, e.return, t);
    }
}
function of(e, t, n) {
    try {
        var r = e.stateNode;
        uB(r, e.type, n, t), (r[eV] = t);
    } catch (t) {
        l3(e, e.return, t);
    }
}
function op(e) {
    return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && u1(e.type)) || 4 === e.tag;
}
function oh(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || op(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if ((27 === e.tag && u1(e.type)) || 2 & e.flags || null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function om(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        (e = e.stateNode),
            t
                ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t)
                : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = uU));
    else if (4 !== r && (27 === r && u1(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child)))
        for (om(e, t, n), e = e.sibling; null !== e; ) om(e, t, n), (e = e.sibling);
}
function og(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && (27 === r && u1(e.type) && (n = e.stateNode), null !== (e = e.child)))
        for (og(e, t, n), e = e.sibling; null !== e; ) og(e, t, n), (e = e.sibling);
}
function oE(e) {
    var t = e.stateNode,
        n = e.memoizedProps;
    try {
        for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
        uF(t, r, n), (t[eG] = e), (t[eV] = n);
    } catch (t) {
        l3(e, e.return, t);
    }
}
var oA = !1,
    oI = !1,
    oT = !1,
    oy = "function" == typeof WeakSet ? WeakSet : Set,
    oS = null;
function ov(e, t) {
    if (((e = e.containerInfo), (uj = c$), nY((e = nH(e))))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                if (r && 0 !== r.rangeCount) {
                    n = r.anchorNode;
                    var i,
                        a = r.anchorOffset,
                        s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, s.nodeType;
                    } catch (e) {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        u = -1,
                        c = -1,
                        d = 0,
                        _ = 0,
                        f = e,
                        p = null;
                    a: for (;;) {
                        for (
                            ;
                            f !== n || (0 !== a && 3 !== f.nodeType) || (u = o + a),
                                f !== s || (0 !== r && 3 !== f.nodeType) || (c = o + r),
                                3 === f.nodeType && (o += f.nodeValue.length),
                                null !== (i = f.firstChild);
                        )
                            (p = f), (f = i);
                        for (;;) {
                            if (f === e) break a;
                            if (
                                (p === n && ++d === a && (u = o),
                                p === s && ++_ === r && (c = o),
                                null !== (i = f.nextSibling))
                            )
                                break;
                            p = (f = p).parentNode;
                        }
                        f = i;
                    }
                    n = -1 === u || -1 === c ? null : { start: u, end: c };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (uH = { focusedElem: e, selectionRange: n }, c$ = !1, oS = t; null !== oS; )
        if (((e = (t = oS).child), 0 != (1024 & t.subtreeFlags) && null !== e)) (e.return = t), (oS = e);
        else
            for (; null !== oS; ) {
                switch (((s = (t = oS).alternate), (e = t.flags), t.tag)) {
                    case 0:
                    case 11:
                    case 15:
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    case 1:
                        if (0 != (1024 & e) && null !== s) {
                            (e = void 0), (n = t), (a = s.memoizedProps), (s = s.memoizedState), (r = n.stateNode);
                            try {
                                var h = sv(n.type, a, n.elementType === n.type);
                                (e = r.getSnapshotBeforeUpdate(h, s)), (r.__reactInternalSnapshotBeforeUpdate = e);
                            } catch (e) {
                                l3(n, n.return, e);
                            }
                        }
                        break;
                    case 3:
                        if (0 != (1024 & e)) {
                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) u3(e);
                            else if (1 === n)
                                switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        u3(e);
                                        break;
                                    default:
                                        e.textContent = "";
                                }
                        }
                        break;
                    default:
                        if (0 != (1024 & e)) throw Error(l(163));
                }
                if (null !== (e = t.sibling)) {
                    (e.return = t.return), (oS = e);
                    break;
                }
                oS = t.return;
            }
}
function oC(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
        case 0:
        case 11:
        case 15:
            oV(e, n), 4 & r && os(5, n);
            break;
        case 1:
            if ((oV(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                    try {
                        e.componentDidMount();
                    } catch (e) {
                        l3(n, n.return, e);
                    }
                else {
                    var i = sv(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                    } catch (e) {
                        l3(n, n.return, e);
                    }
                }
            64 & r && ol(n), 512 & r && oc(n, n.return);
            break;
        case 3:
            if ((oV(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                    switch (n.child.tag) {
                        case 27:
                        case 5:
                        case 1:
                            t = n.child.stateNode;
                    }
                try {
                    iV(e, t);
                } catch (e) {
                    l3(n, n.return, e);
                }
            }
            break;
        case 27:
            null === t && 4 & r && oE(n);
        case 26:
        case 5:
            oV(e, n), null === t && 4 & r && o_(n), 512 & r && oc(n, n.return);
            break;
        case 12:
        default:
            oV(e, n);
            break;
        case 13:
            oV(e, n),
                4 & r && oL(e, n),
                64 & r &&
                    null !== (e = n.memoizedState) &&
                    null !== (e = e.dehydrated) &&
                    u7(e, (n = l7.bind(null, n)));
            break;
        case 22:
            if (!(r = null !== n.memoizedState || oA)) {
                (t = (null !== t && null !== t.memoizedState) || oI), (i = oA);
                var a = oI;
                (oA = r), (oI = t) && !a ? oB(e, n, 0 != (8772 & n.subtreeFlags)) : oV(e, n), (oA = i), (oI = a);
            }
        case 30:
    }
}
function ob(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), ob(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag && null !== (t = e.stateNode) && eK(t),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
var oN = null,
    oR = !1;
function oO(e, t, n) {
    for (n = n.child; null !== n; ) oD(e, t, n), (n = n.sibling);
}
function oD(e, t, n) {
    if (ep && "function" == typeof ep.onCommitFiberUnmount)
        try {
            ep.onCommitFiberUnmount(ef, n);
        } catch (e) {}
    switch (n.tag) {
        case 26:
            oI || od(n, t),
                oO(e, t, n),
                n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
            break;
        case 27:
            oI || od(n, t);
            var r = oN,
                i = oR;
            u1(n.type) && ((oN = n.stateNode), (oR = !1)), oO(e, t, n), cn(n.stateNode), (oN = r), (oR = i);
            break;
        case 5:
            oI || od(n, t);
        case 6:
            if (((r = oN), (i = oR), (oN = null), oO(e, t, n), (oN = r), (oR = i), null !== oN))
                if (oR)
                    try {
                        (9 === oN.nodeType ? oN.body : "HTML" === oN.nodeName ? oN.ownerDocument.body : oN).removeChild(
                            n.stateNode,
                        );
                    } catch (e) {
                        l3(n, t, e);
                    }
                else
                    try {
                        oN.removeChild(n.stateNode);
                    } catch (e) {
                        l3(n, t, e);
                    }
            break;
        case 18:
            null !== oN &&
                (oR
                    ? (u2(
                          9 === (e = oN).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e,
                          n.stateNode,
                      ),
                      dd(e))
                    : u2(oN, n.stateNode));
            break;
        case 4:
            (r = oN), (i = oR), (oN = n.stateNode.containerInfo), (oR = !0), oO(e, t, n), (oN = r), (oR = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            oI || oo(2, n, t), oI || oo(4, n, t), oO(e, t, n);
            break;
        case 1:
            oI || (od(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount && ou(n, t, r)), oO(e, t, n);
            break;
        case 21:
        default:
            oO(e, t, n);
            break;
        case 22:
            (oI = (r = oI) || null !== n.memoizedState), oO(e, t, n), (oI = r);
    }
}
function oL(e, t) {
    if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState) &&
        null !== (e = e.dehydrated)
    )
        try {
            dd(e);
        } catch (e) {
            l3(t, t.return, e);
        }
}
function ow(e) {
    switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return null === t && (t = e.stateNode = new oy()), t;
        case 22:
            return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new oy()), t;
        default:
            throw Error(l(435, e.tag));
    }
}
function ox(e, t) {
    var n = ow(e);
    t.forEach(function (t) {
        var r = l8.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
    });
}
function oP(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = n[r],
                a = e,
                s = t,
                o = s;
            e: for (; null !== o; ) {
                switch (o.tag) {
                    case 27:
                        if (u1(o.type)) {
                            (oN = o.stateNode), (oR = !1);
                            break e;
                        }
                        break;
                    case 5:
                        (oN = o.stateNode), (oR = !1);
                        break e;
                    case 3:
                    case 4:
                        (oN = o.stateNode.containerInfo), (oR = !0);
                        break e;
                }
                o = o.return;
            }
            if (null === oN) throw Error(l(160));
            oD(a, s, i), (oN = null), (oR = !1), null !== (a = i.alternate) && (a.return = null), (i.return = null);
        }
    if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) ok(t, e), (t = t.sibling);
}
var oM = null;
function ok(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            oP(t, e), oU(e), 4 & r && (oo(3, e, e.return), os(3, e), oo(5, e, e.return));
            break;
        case 1:
            oP(t, e),
                oU(e),
                512 & r && (oI || null === n || od(n, n.return)),
                64 & r &&
                    oA &&
                    null !== (e = e.updateQueue) &&
                    null !== (r = e.callbacks) &&
                    ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
            break;
        case 26:
            var i = oM;
            if ((oP(t, e), oU(e), 512 & r && (oI || null === n || od(n, n.return)), 4 & r)) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                    if (null === r)
                        if (null === e.stateNode) {
                            e: {
                                (r = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i);
                                a: switch (r) {
                                    case "title":
                                        (!(a = i.getElementsByTagName("title")[0]) ||
                                            a[eW] ||
                                            a[eG] ||
                                            "http://www.w3.org/2000/svg" === a.namespaceURI ||
                                            a.hasAttribute("itemprop")) &&
                                            ((a = i.createElement(r)),
                                            i.head.insertBefore(a, i.querySelector("head > title"))),
                                            uF(a, r, n),
                                            (a[eG] = e),
                                            eQ(a),
                                            (r = a);
                                        break e;
                                    case "link":
                                        var s = cR("link", "href", i).get(r + (n.href || ""));
                                        if (s) {
                                            for (var o = 0; o < s.length; o++)
                                                if (
                                                    (a = s[o]).getAttribute("href") ===
                                                        (null == n.href || "" === n.href ? null : n.href) &&
                                                    a.getAttribute("rel") === (null == n.rel ? null : n.rel) &&
                                                    a.getAttribute("title") === (null == n.title ? null : n.title) &&
                                                    a.getAttribute("crossorigin") ===
                                                        (null == n.crossOrigin ? null : n.crossOrigin)
                                                ) {
                                                    s.splice(o, 1);
                                                    break a;
                                                }
                                        }
                                        uF((a = i.createElement(r)), r, n), i.head.appendChild(a);
                                        break;
                                    case "meta":
                                        if ((s = cR("meta", "content", i).get(r + (n.content || "")))) {
                                            for (o = 0; o < s.length; o++)
                                                if (
                                                    (a = s[o]).getAttribute("content") ===
                                                        (null == n.content ? null : "" + n.content) &&
                                                    a.getAttribute("name") === (null == n.name ? null : n.name) &&
                                                    a.getAttribute("property") ===
                                                        (null == n.property ? null : n.property) &&
                                                    a.getAttribute("http-equiv") ===
                                                        (null == n.httpEquiv ? null : n.httpEquiv) &&
                                                    a.getAttribute("charset") === (null == n.charSet ? null : n.charSet)
                                                ) {
                                                    s.splice(o, 1);
                                                    break a;
                                                }
                                        }
                                        uF((a = i.createElement(r)), r, n), i.head.appendChild(a);
                                        break;
                                    default:
                                        throw Error(l(468, r));
                                }
                                (a[eG] = e), eQ(a), (r = a);
                            }
                            e.stateNode = r;
                        } else cO(i, e.type, e.stateNode);
                    else e.stateNode = cS(i, r, e.memoizedProps);
                else
                    a !== r
                        ? (null === a ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : a.count--,
                          null === r ? cO(i, e.type, e.stateNode) : cS(i, r, e.memoizedProps))
                        : null === r && null !== e.stateNode && of(e, e.memoizedProps, n.memoizedProps);
            }
            break;
        case 27:
            oP(t, e),
                oU(e),
                512 & r && (oI || null === n || od(n, n.return)),
                null !== n && 4 & r && of(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if ((oP(t, e), oU(e), 512 & r && (oI || null === n || od(n, n.return)), 32 & e.flags)) {
                i = e.stateNode;
                try {
                    tE(i, "");
                } catch (t) {
                    l3(e, e.return, t);
                }
            }
            4 & r && null != e.stateNode && ((i = e.memoizedProps), of(e, i, null !== n ? n.memoizedProps : i)),
                1024 & r && (oT = !0);
            break;
        case 6:
            if ((oP(t, e), oU(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                    n.nodeValue = r;
                } catch (t) {
                    l3(e, e.return, t);
                }
            }
            break;
        case 3:
            if (
                ((cN = null),
                (i = oM),
                (oM = ca(t.containerInfo)),
                oP(t, e),
                (oM = i),
                oU(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
            )
                try {
                    dd(t.containerInfo);
                } catch (t) {
                    l3(e, e.return, t);
                }
            oT && ((oT = !1), oG(e));
            break;
        case 4:
            (r = oM), (oM = ca(e.stateNode.containerInfo)), oP(t, e), oU(e), (oM = r);
            break;
        case 12:
        default:
            oP(t, e), oU(e);
            break;
        case 13:
            oP(t, e),
                oU(e),
                8192 & e.child.flags &&
                    (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                    (lf = ei()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), ox(e, r));
            break;
        case 22:
            i = null !== e.memoizedState;
            var u = null !== n && null !== n.memoizedState,
                c = oA,
                d = oI;
            if (((oA = c || i), (oI = d || u), oP(t, e), (oI = d), (oA = c), oU(e), 8192 & r))
                e: for (
                    (t = e.stateNode)._visibility = i ? -2 & t._visibility : 1 | t._visibility,
                        i && (null === n || u || oA || oI || oF(e)),
                        n = null,
                        t = e;
                    ;
                ) {
                    if (5 === t.tag || 26 === t.tag) {
                        if (null === n) {
                            u = n = t;
                            try {
                                if (((a = u.stateNode), i))
                                    (s = a.style),
                                        "function" == typeof s.setProperty
                                            ? s.setProperty("display", "none", "important")
                                            : (s.display = "none");
                                else {
                                    o = u.stateNode;
                                    var _ = u.memoizedProps.style,
                                        f = null != _ && _.hasOwnProperty("display") ? _.display : null;
                                    o.style.display = null == f || "boolean" == typeof f ? "" : ("" + f).trim();
                                }
                            } catch (e) {
                                l3(u, u.return, e);
                            }
                        }
                    } else if (6 === t.tag) {
                        if (null === n) {
                            u = t;
                            try {
                                u.stateNode.nodeValue = i ? "" : u.memoizedProps;
                            } catch (e) {
                                l3(u, u.return, e);
                            }
                        }
                    } else if (
                        ((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) &&
                        null !== t.child
                    ) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) break e;
                        n === t && (n = null), (t = t.return);
                    }
                    n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
                }
            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), ox(e, n));
            break;
        case 19:
            oP(t, e), oU(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), ox(e, r));
        case 30:
        case 21:
    }
}
function oU(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            for (var n, r = e.return; null !== r; ) {
                if (op(r)) {
                    n = r;
                    break;
                }
                r = r.return;
            }
            if (null == n) throw Error(l(160));
            switch (n.tag) {
                case 27:
                    var i = n.stateNode,
                        a = oh(e);
                    og(e, a, i);
                    break;
                case 5:
                    var s = n.stateNode;
                    32 & n.flags && (tE(s, ""), (n.flags &= -33));
                    var o = oh(e);
                    og(e, o, s);
                    break;
                case 3:
                case 4:
                    var u = n.stateNode.containerInfo,
                        c = oh(e);
                    om(e, c, u);
                    break;
                default:
                    throw Error(l(161));
            }
        } catch (t) {
            l3(e, e.return, t);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function oG(e) {
    if (1024 & e.subtreeFlags)
        for (e = e.child; null !== e; ) {
            var t = e;
            oG(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling);
        }
}
function oV(e, t) {
    if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) oC(e, t.alternate, t), (t = t.sibling);
}
function oF(e) {
    for (e = e.child; null !== e; ) {
        var t = e;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                oo(4, t, t.return), oF(t);
                break;
            case 1:
                od(t, t.return);
                var n = t.stateNode;
                "function" == typeof n.componentWillUnmount && ou(t, t.return, n), oF(t);
                break;
            case 27:
                cn(t.stateNode);
            case 26:
            case 5:
                od(t, t.return), oF(t);
                break;
            case 22:
                null === t.memoizedState && oF(t);
                break;
            default:
                oF(t);
        }
        e = e.sibling;
    }
}
function oB(e, t, n) {
    for (n = n && 0 != (8772 & t.subtreeFlags), t = t.child; null !== t; ) {
        var r = t.alternate,
            i = e,
            a = t,
            s = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                oB(i, a, n), os(4, a);
                break;
            case 1:
                if ((oB(i, a, n), "function" == typeof (i = (r = a).stateNode).componentDidMount))
                    try {
                        i.componentDidMount();
                    } catch (e) {
                        l3(r, r.return, e);
                    }
                if (null !== (i = (r = a).updateQueue)) {
                    var o = r.stateNode;
                    try {
                        var l = i.shared.hiddenCallbacks;
                        if (null !== l) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) iG(l[i], o);
                    } catch (e) {
                        l3(r, r.return, e);
                    }
                }
                n && 64 & s && ol(a), oc(a, a.return);
                break;
            case 27:
                oE(a);
            case 26:
            case 5:
                oB(i, a, n), n && null === r && 4 & s && o_(a), oc(a, a.return);
                break;
            case 12:
            default:
                oB(i, a, n);
                break;
            case 13:
                oB(i, a, n), n && 4 & s && oL(i, a);
                break;
            case 22:
                null === a.memoizedState && oB(i, a, n), oc(a, a.return);
            case 30:
        }
        t = t.sibling;
    }
}
function oj(e, t) {
    var n = null;
    null !== e &&
        null !== e.memoizedState &&
        null !== e.memoizedState.cachePool &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
        e !== n && (null != e && e.refCount++, null != n && ii(n));
}
function oH(e, t) {
    (e = null),
        null !== t.alternate && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ii(e));
}
function oY(e, t, n, r) {
    if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) oW(e, t, n, r), (t = t.sibling);
}
function oW(e, t, n, r) {
    var i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
            oY(e, t, n, r), 2048 & i && os(9, t);
            break;
        case 1:
        case 13:
        default:
            oY(e, t, n, r);
            break;
        case 3:
            oY(e, t, n, r),
                2048 & i &&
                    ((e = null),
                    null !== t.alternate && (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ii(e)));
            break;
        case 12:
            if (2048 & i) {
                oY(e, t, n, r), (e = t.stateNode);
                try {
                    var a = t.memoizedProps,
                        s = a.id,
                        o = a.onPostCommit;
                    "function" == typeof o &&
                        o(s, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (e) {
                    l3(t, t.return, e);
                }
            } else oY(e, t, n, r);
            break;
        case 23:
            break;
        case 22:
            (a = t.stateNode),
                (s = t.alternate),
                null !== t.memoizedState
                    ? 2 & a._visibility
                        ? oY(e, t, n, r)
                        : oz(e, t)
                    : 2 & a._visibility
                      ? oY(e, t, n, r)
                      : ((a._visibility |= 2), oK(e, t, n, r, 0 != (10256 & t.subtreeFlags))),
                2048 & i && oj(s, t);
            break;
        case 24:
            oY(e, t, n, r), 2048 & i && oH(t.alternate, t);
    }
}
function oK(e, t, n, r, i) {
    for (i = i && 0 != (10256 & t.subtreeFlags), t = t.child; null !== t; ) {
        var a = e,
            s = t,
            o = n,
            l = r,
            u = s.flags;
        switch (s.tag) {
            case 0:
            case 11:
            case 15:
                oK(a, s, o, l, i), os(8, s);
                break;
            case 23:
                break;
            case 22:
                var c = s.stateNode;
                null !== s.memoizedState
                    ? 2 & c._visibility
                        ? oK(a, s, o, l, i)
                        : oz(a, s)
                    : ((c._visibility |= 2), oK(a, s, o, l, i)),
                    i && 2048 & u && oj(s.alternate, s);
                break;
            case 24:
                oK(a, s, o, l, i), i && 2048 & u && oH(s.alternate, s);
                break;
            default:
                oK(a, s, o, l, i);
        }
        t = t.sibling;
    }
}
function oz(e, t) {
    if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t; ) {
            var n = e,
                r = t,
                i = r.flags;
            switch (r.tag) {
                case 22:
                    oz(n, r), 2048 & i && oj(r.alternate, r);
                    break;
                case 24:
                    oz(n, r), 2048 & i && oH(r.alternate, r);
                    break;
                default:
                    oz(n, r);
            }
            t = t.sibling;
        }
}
var o$ = 8192;
function oq(e) {
    if (e.subtreeFlags & o$) for (e = e.child; null !== e; ) oZ(e), (e = e.sibling);
}
function oZ(e) {
    switch (e.tag) {
        case 26:
            oq(e), e.flags & o$ && null !== e.memoizedState && cP(oM, e.memoizedState, e.memoizedProps);
            break;
        case 5:
        default:
            oq(e);
            break;
        case 3:
        case 4:
            var t = oM;
            (oM = ca(e.stateNode.containerInfo)), oq(e), (oM = t);
            break;
        case 22:
            null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                    ? ((t = o$), (o$ = 0x1000000), oq(e), (o$ = t))
                    : oq(e));
    }
}
function oQ(e) {
    var t = e.alternate;
    if (null !== t && null !== (e = t.child)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (null !== e);
    }
}
function oX(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (oS = r), o1(r, e);
            }
        oQ(e);
    }
    if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) oJ(e), (e = e.sibling);
}
function oJ(e) {
    switch (e.tag) {
        case 0:
        case 11:
        case 15:
            oX(e), 2048 & e.flags && oo(9, e, e.return);
            break;
        case 3:
        case 12:
        default:
            oX(e);
            break;
        case 22:
            var t = e.stateNode;
            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), o0(e))
                : oX(e);
    }
}
function o0(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (oS = r), o1(r, e);
            }
        oQ(e);
    }
    for (e = e.child; null !== e; ) {
        switch ((t = e).tag) {
            case 0:
            case 11:
            case 15:
                oo(8, t, t.return), o0(t);
                break;
            case 22:
                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), o0(t));
                break;
            default:
                o0(t);
        }
        e = e.sibling;
    }
}
function o1(e, t) {
    for (; null !== oS; ) {
        var n = oS;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                oo(8, n, t);
                break;
            case 23:
            case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                    var r = n.memoizedState.cachePool.pool;
                    null != r && r.refCount++;
                }
                break;
            case 24:
                ii(n.memoizedState.cache);
        }
        if (null !== (r = n.child)) (r.return = n), (oS = r);
        else
            for (n = e; null !== oS; ) {
                var i = (r = oS).sibling,
                    a = r.return;
                if ((ob(r), r === n)) {
                    oS = null;
                    break;
                }
                if (null !== i) {
                    (i.return = a), (oS = i);
                    break;
                }
                oS = a;
            }
    }
}
var o2 = {
        getCacheForType: function (e) {
            var t = r4(it),
                n = t.data.get(e);
            return void 0 === n && ((n = e()), t.data.set(e, n)), n;
        },
    },
    o3 = "function" == typeof WeakMap ? WeakMap : Map,
    o6 = 0,
    o4 = null,
    o5 = null,
    o7 = 0,
    o8 = 0,
    o9 = null,
    le = !1,
    lt = !1,
    ln = !1,
    lr = 0,
    li = 0,
    la = 0,
    ls = 0,
    lo = 0,
    ll = 0,
    lu = 0,
    lc = null,
    ld = null,
    l_ = !1,
    lf = 0,
    lp = 1 / 0,
    lh = null,
    lm = null,
    lg = 0,
    lE = null,
    lA = null,
    lI = 0,
    lT = 0,
    ly = null,
    lS = null,
    lv = 0,
    lC = null;
function lb() {
    if (0 != (2 & o6) && 0 !== o7) return o7 & -o7;
    if (null !== U.T) {
        var e = io;
        return 0 !== e ? e : up();
    }
    return eM();
}
function lN() {
    0 === ll && (ll = 0 == (0x20000000 & o7) || rG ? eb() : 0x20000000);
    var e = s_.current;
    return null !== e && (e.flags |= 32), ll;
}
function lR(e, t, n) {
    ((e === o4 && (2 === o8 || 9 === o8)) || null !== e.cancelPendingCommit) && (lM(e, 0), lw(e, o7, ll, !1)),
        eO(e, n),
        (0 == (2 & o6) || e !== o4) && (e === o4 && (0 == (2 & o6) && (ls |= n), 4 === li && lw(e, o7, ll, !1)), us(e));
}
function lO(e, t, n) {
    if (0 != (6 & o6)) throw Error(l(327));
    for (
        var r = (!n && 0 == (124 & t) && 0 == (t & e.expiredLanes)) || ev(e, t), i = r ? lj(e, t) : lF(e, t, !0), a = r;
        ;
    ) {
        if (0 === i) lt && !r && lw(e, t, 0, !1);
        else {
            if (((n = e.current.alternate), a && !lL(n))) {
                (i = lF(e, t, !1)), (a = !1);
                continue;
            }
            if (2 === i) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var s = 0;
                else s = 0 != (s = -0x20000001 & e.pendingLanes) ? s : 0x20000000 & s ? 0x20000000 : 0;
                if (0 !== s) {
                    t = s;
                    e: {
                        var o = e;
                        i = lc;
                        var u = o.current.memoizedState.isDehydrated;
                        if ((u && (lM(o, s).flags |= 256), 2 !== (s = lF(o, s, !1)))) {
                            if (ln && !u) {
                                (o.errorRecoveryDisabledLanes |= a), (ls |= a), (i = 4);
                                break e;
                            }
                            (a = ld), (ld = i), null !== a && (null === ld ? (ld = a) : ld.push.apply(ld, a));
                        }
                        i = s;
                    }
                    if (((a = !1), 2 !== i)) continue;
                }
            }
            if (1 === i) {
                lM(e, 0), lw(e, t, 0, !0);
                break;
            }
            e: {
                switch (((r = e), (a = i))) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((4194048 & t) !== t) break;
                    case 6:
                        lw(r, t, ll, !le);
                        break e;
                    case 2:
                        ld = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329));
                }
                if ((0x3c00000 & t) === t && 10 < (i = lf + 300 - ei())) {
                    if ((lw(r, t, ll, !le), 0 !== eS(r, 0, !0))) break e;
                    r.timeoutHandle = uZ(lD.bind(null, r, n, ld, lh, l_, t, ll, ls, lu, le, a, 2, -0, 0), i);
                    break e;
                }
                lD(r, n, ld, lh, l_, t, ll, ls, lu, le, a, 0, -0, 0);
            }
        }
        break;
    }
    us(e);
}
function lD(e, t, n, r, i, a, s, o, l, u, c, d, _, f) {
    if (
        ((e.timeoutHandle = -1),
        (8192 & (d = t.subtreeFlags) || 0x1002000 == (0x1002000 & d)) &&
            ((cw = { stylesheets: null, count: 0, unsuspend: cx }), oZ(t), null !== (d = cM())))
    ) {
        (e.cancelPendingCommit = d(lq.bind(null, e, t, a, n, r, i, s, o, l, c, 1, _, f))), lw(e, a, s, !u);
        return;
    }
    lq(e, t, a, n, r, i, s, o, l);
}
function lL(e) {
    for (var t = e; ; ) {
        var n = t.tag;
        if (
            (0 === n || 11 === n || 15 === n) &&
            16384 & t.flags &&
            null !== (n = t.updateQueue) &&
            null !== (n = n.stores)
        )
            for (var r = 0; r < n.length; r++) {
                var i = n[r],
                    a = i.getSnapshot;
                i = i.value;
                try {
                    if (!nG(a(), i)) return !1;
                } catch (e) {
                    return !1;
                }
            }
        if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function lw(e, t, n, r) {
    (t &= ~lo),
        (t &= ~ls),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
    for (var i = t; 0 < i; ) {
        var a = 31 - em(i),
            s = 1 << a;
        (r[a] = -1), (i &= ~s);
    }
    0 !== n && eL(e, n, t);
}
function lx() {
    return 0 != (6 & o6) || (uo(0, !1), !1);
}
function lP() {
    if (null !== o5) {
        if (0 === o8) var e = o5.return;
        else (e = o5), (rQ = rZ = null), ae(e), (sr = null), (si = 0), (e = o5);
        for (; null !== e; ) oa(e.alternate, e), (e = e.return);
        o5 = null;
    }
}
function lM(e, t) {
    var n = e.timeoutHandle;
    -1 !== n && ((e.timeoutHandle = -1), uQ(n)),
        null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
        lP(),
        (o4 = e),
        (o5 = n = rg(e.current, null)),
        (o7 = t),
        (o8 = 0),
        (o9 = null),
        (le = !1),
        (lt = ev(e, t)),
        (ln = !1),
        (lu = ll = lo = ls = la = li = 0),
        (ld = lc = null),
        (l_ = !1),
        0 != (8 & t) && (t |= 32 & t);
    var r = e.entangledLanes;
    if (0 !== r)
        for (e = e.entanglements, r &= t; 0 < r; ) {
            var i = 31 - em(r),
                a = 1 << i;
            (t |= e[i]), (r &= ~a);
        }
    return (lr = t), ro(), n;
}
function lk(e, t) {
    (iK = null),
        (U.H = a9),
        t === iE || t === iI
            ? ((t = ib()), (o8 = 3))
            : t === iA
              ? ((t = ib()), (o8 = 4))
              : (o8 = t === sM ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1),
        (o9 = t),
        null === o5 && ((li = 1), sO(e, rr(t, e.current)));
}
function lU() {
    var e = U.H;
    return (U.H = a9), null === e ? a9 : e;
}
function lG() {
    var e = U.A;
    return (U.A = o2), e;
}
function lV() {
    (li = 4),
        le || ((4194048 & o7) !== o7 && null !== s_.current) || (lt = !0),
        (0 == (0x7ffffff & la) && 0 == (0x7ffffff & ls)) || null === o4 || lw(o4, o7, ll, !1);
}
function lF(e, t, n) {
    var r = o6;
    o6 |= 2;
    var i = lU(),
        a = lG();
    (o4 !== e || o7 !== t) && ((lh = null), lM(e, t)), (t = !1);
    var s = li;
    e: for (;;)
        try {
            if (0 !== o8 && null !== o5) {
                var o = o5,
                    l = o9;
                switch (o8) {
                    case 8:
                        lP(), (s = 6);
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        null === s_.current && (t = !0);
                        var u = o8;
                        if (((o8 = 0), (o9 = null), lK(e, o, l, u), n && lt)) {
                            s = 0;
                            break e;
                        }
                        break;
                    default:
                        (u = o8), (o8 = 0), (o9 = null), lK(e, o, l, u);
                }
            }
            lB(), (s = li);
            break;
        } catch (t) {
            lk(e, t);
        }
    return (
        t && e.shellSuspendCounter++,
        (rQ = rZ = null),
        (o6 = r),
        (U.H = i),
        (U.A = a),
        null === o5 && ((o4 = null), (o7 = 0), ro()),
        s
    );
}
function lB() {
    for (; null !== o5; ) lY(o5);
}
function lj(e, t) {
    var n = o6;
    o6 |= 2;
    var r = lU(),
        i = lG();
    o4 !== e || o7 !== t ? ((lh = null), (lp = ei() + 500), lM(e, t)) : (lt = ev(e, t));
    e: for (;;)
        try {
            if (0 !== o8 && null !== o5) {
                t = o5;
                var a = o9;
                a: switch (o8) {
                    case 1:
                        (o8 = 0), (o9 = null), lK(e, t, a, 1);
                        break;
                    case 2:
                    case 9:
                        if (iy(a)) {
                            (o8 = 0), (o9 = null), lW(t);
                            break;
                        }
                        (t = function () {
                            (2 !== o8 && 9 !== o8) || o4 !== e || (o8 = 7), us(e);
                        }),
                            a.then(t, t);
                        break e;
                    case 3:
                        o8 = 7;
                        break e;
                    case 4:
                        o8 = 5;
                        break e;
                    case 7:
                        iy(a) ? ((o8 = 0), (o9 = null), lW(t)) : ((o8 = 0), (o9 = null), lK(e, t, a, 7));
                        break;
                    case 5:
                        var s = null;
                        switch (o5.tag) {
                            case 26:
                                s = o5.memoizedState;
                            case 5:
                            case 27:
                                var o = o5;
                                if (s ? cL(s) : 1) {
                                    (o8 = 0), (o9 = null);
                                    var u = o.sibling;
                                    if (null !== u) o5 = u;
                                    else {
                                        var c = o.return;
                                        null !== c ? ((o5 = c), lz(c)) : (o5 = null);
                                    }
                                    break a;
                                }
                        }
                        (o8 = 0), (o9 = null), lK(e, t, a, 5);
                        break;
                    case 6:
                        (o8 = 0), (o9 = null), lK(e, t, a, 6);
                        break;
                    case 8:
                        lP(), (li = 6);
                        break e;
                    default:
                        throw Error(l(462));
                }
            }
            lH();
            break;
        } catch (t) {
            lk(e, t);
        }
    return ((rQ = rZ = null), (U.H = r), (U.A = i), (o6 = n), null !== o5) ? 0 : ((o4 = null), (o7 = 0), ro(), li);
}
function lH() {
    for (; null !== o5 && !en(); ) lY(o5);
}
function lY(e) {
    var t = s7(e.alternate, e, lr);
    (e.memoizedProps = e.pendingProps), null === t ? lz(e) : (o5 = t);
}
function lW(e) {
    var t = e,
        n = t.alternate;
    switch (t.tag) {
        case 15:
        case 0:
            t = sW(n, t, t.pendingProps, t.type, void 0, o7);
            break;
        case 11:
            t = sW(n, t, t.pendingProps, t.type.render, t.ref, o7);
            break;
        case 5:
            ae(t);
        default:
            oa(n, t), (t = s7(n, (t = o5 = rE(t, lr)), lr));
    }
    (e.memoizedProps = e.pendingProps), null === t ? lz(e) : (o5 = t);
}
function lK(e, t, n, r) {
    (rQ = rZ = null), ae(t), (sr = null), (si = 0);
    var i = t.return;
    try {
        if (sP(e, i, t, n, o7)) {
            (li = 1), sO(e, rr(n, e.current)), (o5 = null);
            return;
        }
    } catch (t) {
        if (null !== i) throw ((o5 = i), t);
        (li = 1), sO(e, rr(n, e.current)), (o5 = null);
        return;
    }
    32768 & t.flags
        ? (rG || 1 === r
              ? (e = !0)
              : lt || 0 != (0x20000000 & o7)
                ? (e = !1)
                : ((le = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = s_.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
          l$(t, e))
        : lz(t);
}
function lz(e) {
    var t = e;
    do {
        if (0 != (32768 & t.flags)) return void l$(t, le);
        e = t.return;
        var n = or(t.alternate, t, lr);
        if (null !== n) {
            o5 = n;
            return;
        }
        if (null !== (t = t.sibling)) {
            o5 = t;
            return;
        }
        o5 = t = e;
    } while (null !== t);
    0 === li && (li = 5);
}
function l$(e, t) {
    do {
        var n = oi(e.alternate, e);
        if (null !== n) {
            (n.flags &= 32767), (o5 = n);
            return;
        }
        if (
            (null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && null !== (e = e.sibling))
        ) {
            o5 = e;
            return;
        }
        o5 = e = n;
    } while (null !== e);
    (li = 6), (o5 = null);
}
function lq(e, t, n, r, i, a, s, o, u) {
    e.cancelPendingCommit = null;
    do l0();
    while (0 !== lg);
    if (0 != (6 & o6)) throw Error(l(327));
    if (null !== t) {
        if (t === e.current) throw Error(l(177));
        if (
            (eD(e, n, (a = t.lanes | t.childLanes | rs), s, o, u),
            e === o4 && ((o5 = o4 = null), (o7 = 0)),
            (lA = t),
            (lE = e),
            (lI = n),
            (lT = a),
            (ly = i),
            (lS = r),
            0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  l9(el, function () {
                      return l1(!0), null;
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
            (r = 0 != (13878 & t.flags)),
            0 != (13878 & t.subtreeFlags) || r)
        ) {
            (r = U.T), (U.T = null), (i = G.p), (G.p = 2), (s = o6), (o6 |= 4);
            try {
                ov(e, t, n);
            } finally {
                (o6 = s), (G.p = i), (U.T = r);
            }
        }
        (lg = 1), lZ(), lQ(), lX();
    }
}
function lZ() {
    if (1 === lg) {
        lg = 0;
        var e = lE,
            t = lA,
            n = 0 != (13878 & t.flags);
        if (0 != (13878 & t.subtreeFlags) || n) {
            (n = U.T), (U.T = null);
            var r = G.p;
            G.p = 2;
            var i = o6;
            o6 |= 4;
            try {
                ok(t, e);
                var a = uH,
                    s = nH(e.containerInfo),
                    o = a.focusedElem,
                    l = a.selectionRange;
                if (s !== o && o && o.ownerDocument && nj(o.ownerDocument.documentElement, o)) {
                    if (null !== l && nY(o)) {
                        var u = l.start,
                            c = l.end;
                        if ((void 0 === c && (c = u), "selectionStart" in o))
                            (o.selectionStart = u), (o.selectionEnd = Math.min(c, o.value.length));
                        else {
                            var d = o.ownerDocument || document,
                                _ = (d && d.defaultView) || window;
                            if (_.getSelection) {
                                var f = _.getSelection(),
                                    p = o.textContent.length,
                                    h = Math.min(l.start, p),
                                    m = void 0 === l.end ? h : Math.min(l.end, p);
                                !f.extend && h > m && ((s = m), (m = h), (h = s));
                                var g = nB(o, h),
                                    E = nB(o, m);
                                if (
                                    g &&
                                    E &&
                                    (1 !== f.rangeCount ||
                                        f.anchorNode !== g.node ||
                                        f.anchorOffset !== g.offset ||
                                        f.focusNode !== E.node ||
                                        f.focusOffset !== E.offset)
                                ) {
                                    var A = d.createRange();
                                    A.setStart(g.node, g.offset),
                                        f.removeAllRanges(),
                                        h > m
                                            ? (f.addRange(A), f.extend(E.node, E.offset))
                                            : (A.setEnd(E.node, E.offset), f.addRange(A));
                                }
                            }
                        }
                    }
                    for (d = [], f = o; (f = f.parentNode); )
                        1 === f.nodeType && d.push({ element: f, left: f.scrollLeft, top: f.scrollTop });
                    for ("function" == typeof o.focus && o.focus(), o = 0; o < d.length; o++) {
                        var I = d[o];
                        (I.element.scrollLeft = I.left), (I.element.scrollTop = I.top);
                    }
                }
                (c$ = !!uj), (uH = uj = null);
            } finally {
                (o6 = i), (G.p = r), (U.T = n);
            }
        }
        (e.current = t), (lg = 2);
    }
}
function lQ() {
    if (2 === lg) {
        lg = 0;
        var e = lE,
            t = lA,
            n = 0 != (8772 & t.flags);
        if (0 != (8772 & t.subtreeFlags) || n) {
            (n = U.T), (U.T = null);
            var r = G.p;
            G.p = 2;
            var i = o6;
            o6 |= 4;
            try {
                oC(e, t.alternate, t);
            } finally {
                (o6 = i), (G.p = r), (U.T = n);
            }
        }
        lg = 3;
    }
}
function lX() {
    if (4 === lg || 3 === lg) {
        (lg = 0), er();
        var e = lE,
            t = lA,
            n = lI,
            r = lS;
        0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
            ? (lg = 5)
            : ((lg = 0), (lA = lE = null), lJ(e, e.pendingLanes));
        var i = e.pendingLanes;
        if ((0 === i && (lm = null), eP(n), (t = t.stateNode), ep && "function" == typeof ep.onCommitFiberRoot))
            try {
                ep.onCommitFiberRoot(ef, t, void 0, 128 == (128 & t.current.flags));
            } catch (e) {}
        if (null !== r) {
            (t = U.T), (i = G.p), (G.p = 2), (U.T = null);
            try {
                for (var a = e.onRecoverableError, s = 0; s < r.length; s++) {
                    var o = r[s];
                    a(o.value, { componentStack: o.stack });
                }
            } finally {
                (U.T = t), (G.p = i);
            }
        }
        0 != (3 & lI) && l0(),
            us(e),
            (i = e.pendingLanes),
            0 != (4194090 & n) && 0 != (42 & i) ? (e === lC ? lv++ : ((lv = 0), (lC = e))) : (lv = 0),
            uo(0, !1);
    }
}
function lJ(e, t) {
    0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), ii(t));
}
function l0(e) {
    return lZ(), lQ(), lX(), l1(e);
}
function l1() {
    if (5 !== lg) return !1;
    var e = lE,
        t = lT;
    lT = 0;
    var n = eP(lI),
        r = U.T,
        i = G.p;
    try {
        (G.p = 32 > n ? 32 : n), (U.T = null), (n = ly), (ly = null);
        var a = lE,
            s = lI;
        if (((lg = 0), (lA = lE = null), (lI = 0), 0 != (6 & o6))) throw Error(l(331));
        var o = o6;
        if (
            ((o6 |= 4),
            oJ(a.current),
            oW(a, a.current, s, n),
            (o6 = o),
            uo(0, !1),
            ep && "function" == typeof ep.onPostCommitFiberRoot)
        )
            try {
                ep.onPostCommitFiberRoot(ef, a);
            } catch (e) {}
        return !0;
    } finally {
        (G.p = i), (U.T = r), lJ(e, t);
    }
}
function l2(e, t, n) {
    (t = rr(n, t)), (t = sL(e.stateNode, t, 2)), null !== (e = iw(e, t, 2)) && (eO(e, 2), us(e));
}
function l3(e, t, n) {
    if (3 === e.tag) l2(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                l2(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    "function" == typeof t.type.getDerivedStateFromError ||
                    ("function" == typeof r.componentDidCatch && (null === lm || !lm.has(r)))
                ) {
                    (e = rr(n, e)), null !== (r = iw(t, (n = sw(2)), 2)) && (sx(n, r, t, e), eO(r, 2), us(r));
                    break;
                }
            }
            t = t.return;
        }
}
function l6(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new o3();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || ((ln = !0), i.add(n), (e = l4.bind(null, e, t, n)), t.then(e, e));
}
function l4(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        o4 === e &&
            (o7 & n) === n &&
            (4 === li || (3 === li && (0x3c00000 & o7) === o7 && 300 > ei() - lf)
                ? 0 == (2 & o6) && lM(e, 0)
                : (lo |= n),
            lu === o7 && (lu = 0)),
        us(e);
}
function l5(e, t) {
    0 === t && (t = eN()), null !== (e = rc(e, t)) && (eO(e, t), us(e));
}
function l7(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), l5(e, n);
}
function l8(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            null !== i && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(l(314));
    }
    null !== r && r.delete(t), l5(e, n);
}
function l9(e, t) {
    return ee(e, t);
}
var ue = null,
    ut = null,
    un = !1,
    ur = !1,
    ui = !1,
    ua = 0;
function us(e) {
    e !== ut && null === e.next && (null === ut ? (ue = ut = e) : (ut = ut.next = e)),
        (ur = !0),
        un || ((un = !0), uf());
}
function uo(e, t) {
    if (!ui && ur) {
        ui = !0;
        do
            for (var n = !1, r = ue; null !== r; ) {
                if (!t)
                    if (0 !== e) {
                        var i = r.pendingLanes;
                        if (0 === i) var a = 0;
                        else {
                            var s = r.suspendedLanes,
                                o = r.pingedLanes;
                            a =
                                0xc000095 & (a = ((1 << (31 - em(42 | e) + 1)) - 1) & (i & ~(s & ~o)))
                                    ? (0xc000095 & a) | 1
                                    : a
                                      ? 2 | a
                                      : 0;
                        }
                        0 !== a && ((n = !0), u_(r, a));
                    } else
                        (a = o7),
                            0 ==
                                (3 &
                                    (a = eS(
                                        r,
                                        r === o4 ? a : 0,
                                        null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                                    ))) ||
                                ev(r, a) ||
                                ((n = !0), u_(r, a));
                r = r.next;
            }
        while (n);
        ui = !1;
    }
}
function ul() {
    uu();
}
function uu() {
    ur = un = !1;
    var e = 0;
    0 !== ua && (uq() && (e = ua), (ua = 0));
    for (var t = ei(), n = null, r = ue; null !== r; ) {
        var i = r.next,
            a = uc(r, t);
        0 === a
            ? ((r.next = null), null === n ? (ue = i) : (n.next = i), null === i && (ut = n))
            : ((n = r), (0 !== e || 0 != (3 & a)) && (ur = !0)),
            (r = i);
    }
    uo(e, !1);
}
function uc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = -0x3c00001 & e.pendingLanes; 0 < a; ) {
        var s = 31 - em(a),
            o = 1 << s,
            l = i[s];
        -1 === l ? (0 == (o & n) || 0 != (o & r)) && (i[s] = eC(o, t)) : l <= t && (e.expiredLanes |= o), (a &= ~o);
    }
    if (
        ((t = o4),
        (n = o7),
        (n = eS(e, e === t ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
        (r = e.callbackNode),
        0 === n || (e === t && (2 === o8 || 9 === o8)) || null !== e.cancelPendingCommit)
    )
        return null !== r && null !== r && et(r), (e.callbackNode = null), (e.callbackPriority = 0);
    if (0 == (3 & n) || ev(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch ((null !== r && et(r), eP(n))) {
            case 2:
            case 8:
                n = eo;
                break;
            case 32:
            default:
                n = el;
                break;
            case 0x10000000:
                n = ec;
        }
        return (n = ee(n, (r = ud.bind(null, e)))), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return null !== r && null !== r && et(r), (e.callbackPriority = 2), (e.callbackNode = null), 2;
}
function ud(e, t) {
    if (0 !== lg && 5 !== lg) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (l0(!0) && e.callbackNode !== n) return null;
    var r = o7;
    return 0 === (r = eS(e, e === o4 ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
        ? null
        : (lO(e, r, t), uc(e, ei()), null != e.callbackNode && e.callbackNode === n ? ud.bind(null, e) : null);
}
function u_(e, t) {
    if (l0()) return null;
    lO(e, t, !0);
}
function uf() {
    uJ(function () {
        0 != (6 & o6) ? ee(es, ul) : uu();
    });
}
function up() {
    return 0 === ua && (ua = eb()), ua;
}
function uh(e) {
    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : tC("" + e);
}
function um(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
    );
}
function ug(e, t, n, r, i) {
    if ("submit" === t && n && n.stateNode === i) {
        var a = uh((i[eV] || null).action),
            s = r.submitter;
        s &&
            null !== (t = (t = s[eV] || null) ? uh(t.formAction) : s.getAttribute("formAction")) &&
            ((a = t), (s = null));
        var o = new tQ("action", "action", null, r, i);
        e.push({
            event: o,
            listeners: [
                {
                    instance: null,
                    listener: function () {
                        if (r.defaultPrevented) {
                            if (0 !== ua) {
                                var e = s ? um(i, s) : new FormData(i);
                                aq(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                            }
                        } else
                            "function" == typeof a &&
                                (o.preventDefault(),
                                aq(
                                    n,
                                    {
                                        pending: !0,
                                        data: (e = s ? um(i, s) : new FormData(i)),
                                        method: i.method,
                                        action: a,
                                    },
                                    a,
                                    e,
                                ));
                    },
                    currentTarget: i,
                },
            ],
        });
    }
}
for (var uE = 0; uE < re.length; uE++) {
    var uA = re[uE];
    rt(uA.toLowerCase(), "on" + (uA[0].toUpperCase() + uA.slice(1)));
}
rt(n2, "onAnimationEnd"),
    rt(n3, "onAnimationIteration"),
    rt(n6, "onAnimationStart"),
    rt("dblclick", "onDoubleClick"),
    rt("focusin", "onFocus"),
    rt("focusout", "onBlur"),
    rt(n4, "onTransitionRun"),
    rt(n5, "onTransitionStart"),
    rt(n7, "onTransitionCancel"),
    rt(n8, "onTransitionEnd"),
    e1("onMouseEnter", ["mouseout", "mouseover"]),
    e1("onMouseLeave", ["mouseout", "mouseover"]),
    e1("onPointerEnter", ["pointerout", "pointerover"]),
    e1("onPointerLeave", ["pointerout", "pointerover"]),
    e0("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    e0("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    e0("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    e0("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    e0("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    e0("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var uI =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    uT = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uI));
function uy(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var o = r[s],
                        l = o.instance,
                        u = o.currentTarget;
                    if (((o = o.listener), l !== a && i.isPropagationStopped())) break e;
                    (a = o), (i.currentTarget = u);
                    try {
                        a(i);
                    } catch (e) {
                        sC(e);
                    }
                    (i.currentTarget = null), (a = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((l = (o = r[s]).instance),
                        (u = o.currentTarget),
                        (o = o.listener),
                        l !== a && i.isPropagationStopped())
                    )
                        break e;
                    (a = o), (i.currentTarget = u);
                    try {
                        a(i);
                    } catch (e) {
                        sC(e);
                    }
                    (i.currentTarget = null), (a = l);
                }
        }
    }
}
function uS(e, t) {
    var n = t[eB];
    void 0 === n && (n = t[eB] = new Set());
    var r = e + "__bubble";
    n.has(r) || (uN(t, e, 2, !1), n.add(r));
}
function uv(e, t, n) {
    var r = 0;
    t && (r |= 4), uN(n, e, r, t);
}
var uC = "_reactListening" + Math.random().toString(36).slice(2);
function ub(e) {
    if (!e[uC]) {
        (e[uC] = !0),
            eX.forEach(function (t) {
                "selectionchange" !== t && (uT.has(t) || uv(t, !1, e), uv(t, !0, e));
            });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[uC] || ((t[uC] = !0), uv("selectionchange", !1, t));
    }
}
function uN(e, t, n, r) {
    switch (c1(t)) {
        case 2:
            var i = cq;
            break;
        case 8:
            i = cZ;
            break;
        default:
            i = cQ;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        tM && ("touchstart" === t || "touchmove" === t || "wheel" === t) && (i = !0),
        r
            ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
}
function uR(e, t, n, r, i) {
    var a = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var s = r.tag;
            if (3 === s || 4 === s) {
                var o = r.stateNode.containerInfo;
                if (o === i) break;
                if (4 === s)
                    for (s = r.return; null !== s; ) {
                        var l = s.tag;
                        if ((3 === l || 4 === l) && s.stateNode.containerInfo === i) return;
                        s = s.return;
                    }
                for (; null !== o; ) {
                    if (null === (s = ez(o))) return;
                    if (5 === (l = s.tag) || 6 === l || 26 === l || 27 === l) {
                        r = a = s;
                        continue e;
                    }
                    o = o.parentNode;
                }
            }
            r = r.return;
        }
    tw(function () {
        var r = a,
            i = tN(n),
            s = [];
        e: {
            var o = n9.get(e);
            if (void 0 !== o) {
                var l = tQ,
                    u = e;
                switch (e) {
                    case "keypress":
                        if (0 === tB(n)) break e;
                    case "keydown":
                    case "keyup":
                        l = nn;
                        break;
                    case "focusin":
                        (u = "focus"), (l = t3);
                        break;
                    case "focusout":
                        (u = "blur"), (l = t3);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        l = t3;
                        break;
                    case "click":
                        if (2 === n.button) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        l = t1;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        l = t2;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        l = ni;
                        break;
                    case n2:
                    case n3:
                    case n6:
                        l = t6;
                        break;
                    case n8:
                        l = na;
                        break;
                    case "scroll":
                    case "scrollend":
                        l = tJ;
                        break;
                    case "wheel":
                        l = ns;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        l = t4;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        l = nr;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        l = no;
                }
                var d = 0 != (4 & t),
                    _ = !d && ("scroll" === e || "scrollend" === e),
                    f = d ? (null !== o ? o + "Capture" : null) : o;
                d = [];
                for (var p, h = r; null !== h; ) {
                    var m = h;
                    if (
                        ((p = m.stateNode),
                        (5 !== (m = m.tag) && 26 !== m && 27 !== m) ||
                            null === p ||
                            null === f ||
                            (null != (m = tx(h, f)) && d.push(uO(h, m, p))),
                        _)
                    )
                        break;
                    h = h.return;
                }
                0 < d.length && ((o = new l(o, u, null, n, i)), s.push({ event: o, listeners: d }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((o = "mouseover" === e || "pointerover" === e),
                (l = "mouseout" === e || "pointerout" === e),
                !(o && n !== tb && (u = n.relatedTarget || n.fromElement) && (ez(u) || u[eF]))) &&
                (l || o) &&
                ((o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window),
                l
                    ? ((u = n.relatedTarget || n.toElement),
                      (l = r),
                      null !== (u = u ? ez(u) : null) &&
                          ((_ = c(u)), (d = u.tag), u !== _ || (5 !== d && 27 !== d && 6 !== d)) &&
                          (u = null))
                    : ((l = null), (u = r)),
                l !== u)
            ) {
                if (
                    ((d = t1),
                    (m = "onMouseLeave"),
                    (f = "onMouseEnter"),
                    (h = "mouse"),
                    ("pointerout" === e || "pointerover" === e) &&
                        ((d = nr), (m = "onPointerLeave"), (f = "onPointerEnter"), (h = "pointer")),
                    (_ = null == l ? o : eq(l)),
                    (p = null == u ? o : eq(u)),
                    ((o = new d(m, h + "leave", l, n, i)).target = _),
                    (o.relatedTarget = p),
                    (m = null),
                    ez(i) === r && (((d = new d(f, h + "enter", u, n, i)).target = p), (d.relatedTarget = _), (m = d)),
                    (_ = m),
                    l && u)
                )
                    a: {
                        for (d = l, f = u, h = 0, p = d; p; p = uL(p)) h++;
                        for (p = 0, m = f; m; m = uL(m)) p++;
                        for (; 0 < h - p; ) (d = uL(d)), h--;
                        for (; 0 < p - h; ) (f = uL(f)), p--;
                        for (; h--; ) {
                            if (d === f || (null !== f && d === f.alternate)) break a;
                            (d = uL(d)), (f = uL(f));
                        }
                        d = null;
                    }
                else d = null;
                null !== l && uw(s, o, l, d, !1), null !== u && null !== _ && uw(s, _, u, d, !0);
            }
            e: {
                if (
                    "select" === (l = (o = r ? eq(r) : window).nodeName && o.nodeName.toLowerCase()) ||
                    ("input" === l && "file" === o.type)
                )
                    var g,
                        E = nN;
                else if (nT(o))
                    if (nR) E = nk;
                    else {
                        E = nP;
                        var A = nx;
                    }
                else
                    (l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type)
                        ? (E = nM)
                        : r && ty(r.elementType) && (E = nN);
                if (E && (E = E(e, r))) {
                    ny(s, E, n, i);
                    break e;
                }
                A && A(e, o, r),
                    "focusout" === e &&
                        r &&
                        "number" === o.type &&
                        null != r.memoizedProps.value &&
                        tp(o, "number", o.value);
            }
            switch (((A = r ? eq(r) : window), e)) {
                case "focusin":
                    (nT(A) || "true" === A.contentEditable) && ((nK = A), (nz = r), (n$ = null));
                    break;
                case "focusout":
                    n$ = nz = nK = null;
                    break;
                case "mousedown":
                    nq = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (nq = !1), nZ(s, n, i);
                    break;
                case "selectionchange":
                    if (nW) break;
                case "keydown":
                case "keyup":
                    nZ(s, n, i);
            }
            if (nu)
                a: {
                    switch (e) {
                        case "compositionstart":
                            var I = "onCompositionStart";
                            break a;
                        case "compositionend":
                            I = "onCompositionEnd";
                            break a;
                        case "compositionupdate":
                            I = "onCompositionUpdate";
                            break a;
                    }
                    I = void 0;
                }
            else
                ng
                    ? nh(e, n) && (I = "onCompositionEnd")
                    : "keydown" === e && 229 === n.keyCode && (I = "onCompositionStart");
            I &&
                (n_ &&
                    "ko" !== n.locale &&
                    (ng || "onCompositionStart" !== I
                        ? "onCompositionEnd" === I && ng && (g = tF())
                        : ((tG = "value" in (tU = i) ? tU.value : tU.textContent), (ng = !0))),
                0 < (A = uD(r, I)).length &&
                    ((I = new t5(I, e, null, n, i)),
                    s.push({ event: I, listeners: A }),
                    g ? (I.data = g) : null !== (g = nm(n)) && (I.data = g))),
                (g = nd ? nE(e, n) : nA(e, n)) &&
                    0 < (I = uD(r, "onBeforeInput")).length &&
                    ((A = new t5("onBeforeInput", "beforeinput", null, n, i)),
                    s.push({ event: A, listeners: I }),
                    (A.data = g)),
                ug(s, e, r, n, i);
        }
        uy(s, t);
    });
}
function uO(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function uD(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
        var i = e,
            a = i.stateNode;
        if (
            ((5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
                null === a ||
                (null != (i = tx(e, n)) && r.unshift(uO(e, i, a)), null != (i = tx(e, t)) && r.push(uO(e, i, a))),
            3 === e.tag)
        )
            return r;
        e = e.return;
    }
    return [];
}
function uL(e) {
    if (null === e) return null;
    do e = e.return;
    while (e && 5 !== e.tag && 27 !== e.tag);
    return e || null;
}
function uw(e, t, n, r, i) {
    for (var a = t._reactName, s = []; null !== n && n !== r; ) {
        var o = n,
            l = o.alternate,
            u = o.stateNode;
        if (((o = o.tag), null !== l && l === r)) break;
        (5 !== o && 26 !== o && 27 !== o) ||
            null === u ||
            ((l = u),
            i
                ? null != (u = tx(n, a)) && s.unshift(uO(n, u, l))
                : i || (null != (u = tx(n, a)) && s.push(uO(n, u, l)))),
            (n = n.return);
    }
    0 !== s.length && e.push({ event: t, listeners: s });
}
var ux = /\r\n?/g,
    uP = /\u0000|\uFFFD/g;
function uM(e) {
    return ("string" == typeof e ? e : "" + e).replace(ux, "\n").replace(uP, "");
}
function uk(e, t) {
    return (t = uM(t)), uM(e) === t;
}
function uU() {}
function uG(e, t, n, r, i, a) {
    switch (n) {
        case "children":
            "string" == typeof r
                ? "body" === t || ("textarea" === t && "" === r) || tE(e, r)
                : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && tE(e, "" + r);
            break;
        case "className":
            e7(e, "class", r);
            break;
        case "tabIndex":
            e7(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            e7(e, n, r);
            break;
        case "style":
            tT(e, r, a);
            break;
        case "data":
            if ("object" !== t) {
                e7(e, "data", r);
                break;
            }
        case "src":
        case "href":
            if (
                ("" === r && ("a" !== t || "href" !== n)) ||
                null == r ||
                "function" == typeof r ||
                "symbol" == typeof r ||
                "boolean" == typeof r
            ) {
                e.removeAttribute(n);
                break;
            }
            (r = tC("" + r)), e.setAttribute(n, r);
            break;
        case "action":
        case "formAction":
            if ("function" == typeof r) {
                e.setAttribute(
                    n,
                    "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
            }
            if (
                ("function" == typeof a &&
                    ("formAction" === n
                        ? ("input" !== t && uG(e, t, "name", i.name, i, null),
                          uG(e, t, "formEncType", i.formEncType, i, null),
                          uG(e, t, "formMethod", i.formMethod, i, null),
                          uG(e, t, "formTarget", i.formTarget, i, null))
                        : (uG(e, t, "encType", i.encType, i, null),
                          uG(e, t, "method", i.method, i, null),
                          uG(e, t, "target", i.target, i, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
            ) {
                e.removeAttribute(n);
                break;
            }
            (r = tC("" + r)), e.setAttribute(n, r);
            break;
        case "onClick":
            null != r && (e.onclick = uU);
            break;
        case "onScroll":
            null != r && uS("scroll", e);
            break;
        case "onScrollEnd":
            null != r && uS("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                    if (null != i.children) throw Error(l(60));
                    e.innerHTML = n;
                }
            }
            break;
        case "multiple":
            e.multiple = r && "function" != typeof r && "symbol" != typeof r;
            break;
        case "muted":
            e.muted = r && "function" != typeof r && "symbol" != typeof r;
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
        case "autoFocus":
        case "innerText":
        case "textContent":
            break;
        case "xlinkHref":
            if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                e.removeAttribute("xlink:href");
                break;
            }
            (n = tC("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            null != r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
            break;
        case "capture":
        case "download":
            !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r
                  ? e.setAttribute(n, r)
                  : e.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
            break;
        case "popover":
            uS("beforetoggle", e), uS("toggle", e), e5(e, "popover", r);
            break;
        case "xlinkActuate":
            e8(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            e8(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            e8(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            e8(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            e8(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            e8(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            e8(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            e8(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            e8(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            e5(e, "is", r);
            break;
        default:
            (2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) ||
                e5(e, (n = tS.get(n) || n), r);
    }
}
function uV(e, t, n, r, i, a) {
    switch (n) {
        case "style":
            tT(e, r, a);
            break;
        case "dangerouslySetInnerHTML":
            if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                    if (null != i.children) throw Error(l(60));
                    e.innerHTML = n;
                }
            }
            break;
        case "children":
            "string" == typeof r ? tE(e, r) : ("number" == typeof r || "bigint" == typeof r) && tE(e, "" + r);
            break;
        case "onScroll":
            null != r && uS("scroll", e);
            break;
        case "onScrollEnd":
            null != r && uS("scrollend", e);
            break;
        case "onClick":
            null != r && (e.onclick = uU);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
            break;
        default:
            if (!eJ.hasOwnProperty(n))
                e: {
                    if (
                        "o" === n[0] &&
                        "n" === n[1] &&
                        ((i = n.endsWith("Capture")),
                        (t = n.slice(2, i ? n.length - 7 : void 0)),
                        "function" == typeof (a = null != (a = e[eV] || null) ? a[n] : null) &&
                            e.removeEventListener(t, a, i),
                        "function" == typeof r)
                    ) {
                        "function" != typeof a &&
                            null !== a &&
                            (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                            e.addEventListener(t, r, i);
                        break e;
                    }
                    n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, "") : e5(e, n, r);
                }
    }
}
function uF(e, t, n) {
    switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            uS("error", e), uS("load", e);
            var r,
                i = !1,
                a = !1;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var s = n[r];
                    if (null != s)
                        switch (r) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(l(137, t));
                            default:
                                uG(e, t, r, s, n, null);
                        }
                }
            a && uG(e, t, "srcSet", n.srcSet, n, null), i && uG(e, t, "src", n.src, n, null);
            return;
        case "input":
            uS("invalid", e);
            var o = (r = s = a = null),
                u = null,
                c = null;
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    var d = n[i];
                    if (null != d)
                        switch (i) {
                            case "name":
                                a = d;
                                break;
                            case "type":
                                s = d;
                                break;
                            case "checked":
                                u = d;
                                break;
                            case "defaultChecked":
                                c = d;
                                break;
                            case "value":
                                r = d;
                                break;
                            case "defaultValue":
                                o = d;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != d) throw Error(l(137, t));
                                break;
                            default:
                                uG(e, t, i, d, n, null);
                        }
                }
            tf(e, r, o, u, c, s, a, !1), to(e);
            return;
        case "select":
            for (a in (uS("invalid", e), (i = s = r = null), n))
                if (n.hasOwnProperty(a) && null != (o = n[a]))
                    switch (a) {
                        case "value":
                            r = o;
                            break;
                        case "defaultValue":
                            s = o;
                            break;
                        case "multiple":
                            i = o;
                        default:
                            uG(e, t, a, o, n, null);
                    }
            (t = r), (n = s), (e.multiple = !!i), null != t ? th(e, !!i, t, !1) : null != n && th(e, !!i, n, !0);
            return;
        case "textarea":
            for (s in (uS("invalid", e), (r = a = i = null), n))
                if (n.hasOwnProperty(s) && null != (o = n[s]))
                    switch (s) {
                        case "value":
                            i = o;
                            break;
                        case "defaultValue":
                            a = o;
                            break;
                        case "children":
                            r = o;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != o) throw Error(l(91));
                            break;
                        default:
                            uG(e, t, s, o, n, null);
                    }
            tg(e, i, a, r), to(e);
            return;
        case "option":
            for (u in n)
                n.hasOwnProperty(u) &&
                    null != (i = n[u]) &&
                    ("selected" === u
                        ? (e.selected = i && "function" != typeof i && "symbol" != typeof i)
                        : uG(e, t, u, i, n, null));
            return;
        case "dialog":
            uS("beforetoggle", e), uS("toggle", e), uS("cancel", e), uS("close", e);
            break;
        case "iframe":
        case "object":
            uS("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < uI.length; i++) uS(uI[i], e);
            break;
        case "image":
            uS("error", e), uS("load", e);
            break;
        case "details":
            uS("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            uS("error", e), uS("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (c in n)
                if (n.hasOwnProperty(c) && null != (i = n[c]))
                    switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            uG(e, t, c, i, n, null);
                    }
            return;
        default:
            if (ty(t)) {
                for (d in n) n.hasOwnProperty(d) && void 0 !== (i = n[d]) && uV(e, t, d, i, n, void 0);
                return;
            }
    }
    for (o in n) n.hasOwnProperty(o) && null != (i = n[o]) && uG(e, t, o, i, n, null);
}
function uB(e, t, n, r) {
    switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var i = null,
                a = null,
                s = null,
                o = null,
                u = null,
                c = null,
                d = null;
            for (p in n) {
                var _ = n[p];
                if (n.hasOwnProperty(p) && null != _)
                    switch (p) {
                        case "checked":
                        case "value":
                            break;
                        case "defaultValue":
                            u = _;
                        default:
                            r.hasOwnProperty(p) || uG(e, t, p, null, r, _);
                    }
            }
            for (var f in r) {
                var p = r[f];
                if (((_ = n[f]), r.hasOwnProperty(f) && (null != p || null != _)))
                    switch (f) {
                        case "type":
                            a = p;
                            break;
                        case "name":
                            i = p;
                            break;
                        case "checked":
                            c = p;
                            break;
                        case "defaultChecked":
                            d = p;
                            break;
                        case "value":
                            s = p;
                            break;
                        case "defaultValue":
                            o = p;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (null != p) throw Error(l(137, t));
                            break;
                        default:
                            p !== _ && uG(e, t, f, p, r, _);
                    }
            }
            t_(e, s, o, u, c, d, a, i);
            return;
        case "select":
            for (a in ((p = s = o = f = null), n))
                if (((u = n[a]), n.hasOwnProperty(a) && null != u))
                    switch (a) {
                        case "value":
                            break;
                        case "multiple":
                            p = u;
                        default:
                            r.hasOwnProperty(a) || uG(e, t, a, null, r, u);
                    }
            for (i in r)
                if (((a = r[i]), (u = n[i]), r.hasOwnProperty(i) && (null != a || null != u)))
                    switch (i) {
                        case "value":
                            f = a;
                            break;
                        case "defaultValue":
                            o = a;
                            break;
                        case "multiple":
                            s = a;
                        default:
                            a !== u && uG(e, t, i, a, r, u);
                    }
            (t = o),
                (n = s),
                (r = p),
                null != f
                    ? th(e, !!n, f, !1)
                    : !!r != !!n && (null != t ? th(e, !!n, t, !0) : th(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            for (o in ((p = f = null), n))
                if (((i = n[o]), n.hasOwnProperty(o) && null != i && !r.hasOwnProperty(o)))
                    switch (o) {
                        case "value":
                        case "children":
                            break;
                        default:
                            uG(e, t, o, null, r, i);
                    }
            for (s in r)
                if (((i = r[s]), (a = n[s]), r.hasOwnProperty(s) && (null != i || null != a)))
                    switch (s) {
                        case "value":
                            f = i;
                            break;
                        case "defaultValue":
                            p = i;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != i) throw Error(l(91));
                            break;
                        default:
                            i !== a && uG(e, t, s, i, r, a);
                    }
            tm(e, f, p);
            return;
        case "option":
            for (var h in n)
                (f = n[h]),
                    n.hasOwnProperty(h) &&
                        null != f &&
                        !r.hasOwnProperty(h) &&
                        ("selected" === h ? (e.selected = !1) : uG(e, t, h, null, r, f));
            for (u in r)
                (f = r[u]),
                    (p = n[u]),
                    r.hasOwnProperty(u) &&
                        f !== p &&
                        (null != f || null != p) &&
                        ("selected" === u
                            ? (e.selected = f && "function" != typeof f && "symbol" != typeof f)
                            : uG(e, t, u, f, r, p));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var m in n)
                (f = n[m]), n.hasOwnProperty(m) && null != f && !r.hasOwnProperty(m) && uG(e, t, m, null, r, f);
            for (c in r)
                if (((f = r[c]), (p = n[c]), r.hasOwnProperty(c) && f !== p && (null != f || null != p)))
                    switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (null != f) throw Error(l(137, t));
                            break;
                        default:
                            uG(e, t, c, f, r, p);
                    }
            return;
        default:
            if (ty(t)) {
                for (var g in n)
                    (f = n[g]),
                        n.hasOwnProperty(g) && void 0 !== f && !r.hasOwnProperty(g) && uV(e, t, g, void 0, r, f);
                for (d in r)
                    (f = r[d]),
                        (p = n[d]),
                        r.hasOwnProperty(d) && f !== p && (void 0 !== f || void 0 !== p) && uV(e, t, d, f, r, p);
                return;
            }
    }
    for (var E in n) (f = n[E]), n.hasOwnProperty(E) && null != f && !r.hasOwnProperty(E) && uG(e, t, E, null, r, f);
    for (_ in r)
        (f = r[_]), (p = n[_]), r.hasOwnProperty(_) && f !== p && (null != f || null != p) && uG(e, t, _, f, r, p);
}
var uj = null,
    uH = null;
function uY(e) {
    return 9 === e.nodeType ? e : e.ownerDocument;
}
function uW(e) {
    switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0;
    }
}
function uK(e, t) {
    if (0 === e)
        switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0;
        }
    return 1 === e && "foreignObject" === t ? 0 : e;
}
function uz(e, t) {
    return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        "bigint" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
    );
}
var u$ = null;
function uq() {
    var e = window.event;
    return e && "popstate" === e.type ? e !== u$ && ((u$ = e), !0) : ((u$ = null), !1);
}
var uZ = "function" == typeof setTimeout ? setTimeout : void 0,
    uQ = "function" == typeof clearTimeout ? clearTimeout : void 0,
    uX = "function" == typeof Promise ? Promise : void 0,
    uJ =
        "function" == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== uX
              ? function (e) {
                    return uX.resolve(null).then(e).catch(u0);
                }
              : uZ;
function u0(e) {
    setTimeout(function () {
        throw e;
    });
}
function u1(e) {
    return "head" === e;
}
function u2(e, t) {
    var n = t,
        r = 0,
        i = 0;
    do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType))
            if ("/$" === (n = a.data)) {
                if (0 < r && 8 > r) {
                    n = r;
                    var s = e.ownerDocument;
                    if ((1 & n && cn(s.documentElement), 2 & n && cn(s.body), 4 & n))
                        for (cn((n = s.head)), s = n.firstChild; s; ) {
                            var o = s.nextSibling,
                                l = s.nodeName;
                            s[eW] ||
                                "SCRIPT" === l ||
                                "STYLE" === l ||
                                ("LINK" === l && "stylesheet" === s.rel.toLowerCase()) ||
                                n.removeChild(s),
                                (s = o);
                        }
                }
                if (0 === i) {
                    e.removeChild(a), dd(t);
                    return;
                }
                i--;
            } else "$" === n || "$?" === n || "$!" === n ? i++ : (r = n.charCodeAt(0) - 48);
        else r = 0;
        n = a;
    } while (n);
    dd(t);
}
function u3(e) {
    var t = e.firstChild;
    for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
            case "HTML":
            case "HEAD":
            case "BODY":
                u3(n), eK(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
        }
        e.removeChild(n);
    }
}
function u6(e, t, n, r) {
    for (; 1 === e.nodeType; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
        } else if (r) {
            if (!e[eW])
                switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (
                            ("stylesheet" === (a = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) ||
                            a !== i.rel ||
                            e.getAttribute("href") !== (null == i.href || "" === i.href ? null : i.href) ||
                            e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin) ||
                            e.getAttribute("title") !== (null == i.title ? null : i.title)
                        )
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (
                            ((a = e.getAttribute("src")) !== (null == i.src ? null : i.src) ||
                                e.getAttribute("type") !== (null == i.type ? null : i.type) ||
                                e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin)) &&
                            a &&
                            e.hasAttribute("async") &&
                            !e.hasAttribute("itemprop")
                        )
                            break;
                        return e;
                    default:
                        return e;
                }
        } else {
            if ("input" !== t || "hidden" !== e.type) return e;
            var a = null == i.name ? null : "" + i.name;
            if ("hidden" === i.type && e.getAttribute("name") === a) return e;
        }
        if (null === (e = u8(e.nextSibling))) break;
    }
    return null;
}
function u4(e, t, n) {
    if ("" === t) return null;
    for (; 3 !== e.nodeType; )
        if (
            ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) ||
            null === (e = u8(e.nextSibling))
        )
            return null;
    return e;
}
function u5(e) {
    return "$!" === e.data || ("$?" === e.data && "complete" === e.ownerDocument.readyState);
}
function u7(e, t) {
    var n = e.ownerDocument;
    if ("$?" !== e.data || "complete" === n.readyState) t();
    else {
        var r = function () {
            t(), n.removeEventListener("DOMContentLoaded", r);
        };
        n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
    }
}
function u8(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t) break;
            if ("/$" === t) return null;
        }
    }
    return e;
}
var u9 = null;
function ce(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
            } else "/$" === n && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
function ct(e, t, n) {
    switch (((t = uY(n)), e)) {
        case "html":
            if (!(e = t.documentElement)) throw Error(l(452));
            return e;
        case "head":
            if (!(e = t.head)) throw Error(l(453));
            return e;
        case "body":
            if (!(e = t.body)) throw Error(l(454));
            return e;
        default:
            throw Error(l(451));
    }
}
function cn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    eK(e);
}
var cr = new Map(),
    ci = new Set();
function ca(e) {
    return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
}
var cs = G.d;
G.d = {
    f: function e() {
        var e = cs.f(),
            t = lx();
        return e || t;
    },
    r: function e(e) {
        var t = e$(e);
        null !== t && 5 === t.tag && "form" === t.type ? aQ(t) : cs.r(e);
    },
    D: cu,
    C: cc,
    L: cd,
    m: c_,
    X: cp,
    S: cf,
    M: ch,
};
var co = "u" < typeof document ? null : document;
function cl(e, t, n) {
    var r = co;
    if (r && "string" == typeof t && t) {
        var i = td(t);
        (i = 'link[rel="' + e + '"][href="' + i + '"]'),
            "string" == typeof n && (i += '[crossorigin="' + n + '"]'),
            ci.has(i) ||
                (ci.add(i),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(i) &&
                    (uF((t = r.createElement("link")), "link", e), eQ(t), r.head.appendChild(t)));
    }
}
function cu(e) {
    cs.D(e), cl("dns-prefetch", e, null);
}
function cc(e, t) {
    cs.C(e, t), cl("preconnect", e, t);
}
function cd(e, t, n) {
    cs.L(e, t, n);
    var r = co;
    if (r && e && t) {
        var i = 'link[rel="preload"][as="' + td(t) + '"]';
        "image" === t && n && n.imageSrcSet
            ? ((i += '[imagesrcset="' + td(n.imageSrcSet) + '"]'),
              "string" == typeof n.imageSizes && (i += '[imagesizes="' + td(n.imageSizes) + '"]'))
            : (i += '[href="' + td(e) + '"]');
        var a = i;
        switch (t) {
            case "style":
                a = cg(e);
                break;
            case "script":
                a = cT(e);
        }
        cr.has(a) ||
            ((e = h({ rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
            cr.set(a, e),
            null !== r.querySelector(i) ||
                ("style" === t && r.querySelector(cE(a))) ||
                ("script" === t && r.querySelector(cy(a))) ||
                (uF((t = r.createElement("link")), "link", e), eQ(t), r.head.appendChild(t)));
    }
}
function c_(e, t) {
    cs.m(e, t);
    var n = co;
    if (n && e) {
        var r = t && "string" == typeof t.as ? t.as : "script",
            i = 'link[rel="modulepreload"][as="' + td(r) + '"][href="' + td(e) + '"]',
            a = i;
        switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                a = cT(e);
        }
        if (!cr.has(a) && ((e = h({ rel: "modulepreload", href: e }, t)), cr.set(a, e), null === n.querySelector(i))) {
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(cy(a))) return;
            }
            uF((r = n.createElement("link")), "link", e), eQ(r), n.head.appendChild(r);
        }
    }
}
function cf(e, t, n) {
    cs.S(e, t, n);
    var r = co;
    if (r && e) {
        var i = eZ(r).hoistableStyles,
            a = cg(e);
        t = t || "default";
        var s = i.get(a);
        if (!s) {
            var o = { loading: 0, preload: null };
            if ((s = r.querySelector(cE(a)))) o.loading = 5;
            else {
                (e = h({ rel: "stylesheet", href: e, "data-precedence": t }, n)), (n = cr.get(a)) && cC(e, n);
                var l = (s = r.createElement("link"));
                eQ(l),
                    uF(l, "link", e),
                    (l._p = new Promise(function (e, t) {
                        (l.onload = e), (l.onerror = t);
                    })),
                    l.addEventListener("load", function () {
                        o.loading |= 1;
                    }),
                    l.addEventListener("error", function () {
                        o.loading |= 2;
                    }),
                    (o.loading |= 4),
                    cv(s, t, r);
            }
            (s = { type: "stylesheet", instance: s, count: 1, state: o }), i.set(a, s);
        }
    }
}
function cp(e, t) {
    cs.X(e, t);
    var n = co;
    if (n && e) {
        var r = eZ(n).hoistableScripts,
            i = cT(e),
            a = r.get(i);
        a ||
            ((a = n.querySelector(cy(i))) ||
                ((e = h({ src: e, async: !0 }, t)),
                (t = cr.get(i)) && cb(e, t),
                eQ((a = n.createElement("script"))),
                uF(a, "link", e),
                n.head.appendChild(a)),
            (a = { type: "script", instance: a, count: 1, state: null }),
            r.set(i, a));
    }
}
function ch(e, t) {
    cs.M(e, t);
    var n = co;
    if (n && e) {
        var r = eZ(n).hoistableScripts,
            i = cT(e),
            a = r.get(i);
        a ||
            ((a = n.querySelector(cy(i))) ||
                ((e = h({ src: e, async: !0, type: "module" }, t)),
                (t = cr.get(i)) && cb(e, t),
                eQ((a = n.createElement("script"))),
                uF(a, "link", e),
                n.head.appendChild(a)),
            (a = { type: "script", instance: a, count: 1, state: null }),
            r.set(i, a));
    }
}
function cm(e, t, n, r) {
    var i = (i = z.current) ? ca(i) : null;
    if (!i) throw Error(l(446));
    switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return "string" == typeof n.precedence && "string" == typeof n.href
                ? ((t = cg(n.href)),
                  (r = (n = eZ(i).hoistableStyles).get(t)) ||
                      ((r = { type: "style", instance: null, count: 0, state: null }), n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                e = cg(n.href);
                var a = eZ(i).hoistableStyles,
                    s = a.get(e);
                if (
                    (s ||
                        ((i = i.ownerDocument || i),
                        (s = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
                        a.set(e, s),
                        (a = i.querySelector(cE(e))) && !a._p && ((s.instance = a), (s.state.loading = 5)),
                        cr.has(e) ||
                            ((n = {
                                rel: "preload",
                                as: "style",
                                href: n.href,
                                crossOrigin: n.crossOrigin,
                                integrity: n.integrity,
                                media: n.media,
                                hrefLang: n.hrefLang,
                                referrerPolicy: n.referrerPolicy,
                            }),
                            cr.set(e, n),
                            a || cI(i, e, n, s.state))),
                    t && null === r)
                )
                    throw Error(l(528, ""));
                return s;
            }
            if (t && null !== r) throw Error(l(529, ""));
            return null;
        case "script":
            return (
                (t = n.async),
                "string" == typeof (n = n.src) && t && "function" != typeof t && "symbol" != typeof t
                    ? ((t = cT(n)),
                      (r = (n = eZ(i).hoistableScripts).get(t)) ||
                          ((r = { type: "script", instance: null, count: 0, state: null }), n.set(t, r)),
                      r)
                    : { type: "void", instance: null, count: 0, state: null }
            );
        default:
            throw Error(l(444, e));
    }
}
function cg(e) {
    return 'href="' + td(e) + '"';
}
function cE(e) {
    return 'link[rel="stylesheet"][' + e + "]";
}
function cA(e) {
    return h({}, e, { "data-precedence": e.precedence, precedence: null });
}
function cI(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
        ? (r.loading = 1)
        : ((r.preload = t = e.createElement("link")),
          t.addEventListener("load", function () {
              return (r.loading |= 1);
          }),
          t.addEventListener("error", function () {
              return (r.loading |= 2);
          }),
          uF(t, "link", n),
          eQ(t),
          e.head.appendChild(t));
}
function cT(e) {
    return '[src="' + td(e) + '"]';
}
function cy(e) {
    return "script[async]" + e;
}
function cS(e, t, n) {
    if ((t.count++, null === t.instance))
        switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + td(n.href) + '"]');
                if (r) return (t.instance = r), eQ(r), r;
                var i = h({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null,
                });
                return (
                    eQ((r = (e.ownerDocument || e).createElement("style"))),
                    uF(r, "style", i),
                    cv(r, n.precedence, e),
                    (t.instance = r)
                );
            case "stylesheet":
                i = cg(n.href);
                var a = e.querySelector(cE(i));
                if (a) return (t.state.loading |= 4), (t.instance = a), eQ(a), a;
                (r = cA(n)), (i = cr.get(i)) && cC(r, i), eQ((a = (e.ownerDocument || e).createElement("link")));
                var s = a;
                return (
                    (s._p = new Promise(function (e, t) {
                        (s.onload = e), (s.onerror = t);
                    })),
                    uF(a, "link", r),
                    (t.state.loading |= 4),
                    cv(a, n.precedence, e),
                    (t.instance = a)
                );
            case "script":
                if (((a = cT(n.src)), (i = e.querySelector(cy(a))))) return (t.instance = i), eQ(i), i;
                return (
                    (r = n),
                    (i = cr.get(a)) && cb((r = h({}, n)), i),
                    eQ((i = (e = e.ownerDocument || e).createElement("script"))),
                    uF(i, "link", r),
                    e.head.appendChild(i),
                    (t.instance = i)
                );
            case "void":
                return null;
            default:
                throw Error(l(443, t.type));
        }
    return (
        "stylesheet" === t.type &&
            0 == (4 & t.state.loading) &&
            ((r = t.instance), (t.state.loading |= 4), cv(r, n.precedence, e)),
        t.instance
    );
}
function cv(e, t, n) {
    for (
        var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
            i = r.length ? r[r.length - 1] : null,
            a = i,
            s = 0;
        s < r.length;
        s++
    ) {
        var o = r[s];
        if (o.dataset.precedence === t) a = o;
        else if (a !== i) break;
    }
    a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
}
function cC(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.title && (e.title = t.title);
}
function cb(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.integrity && (e.integrity = t.integrity);
}
var cN = null;
function cR(e, t, n) {
    if (null === cN) {
        var r = new Map(),
            i = (cN = new Map());
        i.set(n, r);
    } else (r = (i = cN).get(n)) || ((r = new Map()), i.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
            !(a[eW] || a[eG] || ("link" === e && "stylesheet" === a.getAttribute("rel"))) &&
            "http://www.w3.org/2000/svg" !== a.namespaceURI
        ) {
            var s = a.getAttribute(t) || "";
            s = e + s;
            var o = r.get(s);
            o ? o.push(a) : r.set(s, [a]);
        }
    }
    return r;
}
function cO(e, t, n) {
    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null);
}
function cD(e, t, n) {
    if (1 === n || null != t.itemProp) return !1;
    switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
            return !0;
        case "link":
            if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
            if ("stylesheet" === t.rel) return (e = t.disabled), "string" == typeof t.precedence && null == e;
            return !0;
        case "script":
            if (
                t.async &&
                "function" != typeof t.async &&
                "symbol" != typeof t.async &&
                !t.onLoad &&
                !t.onError &&
                t.src &&
                "string" == typeof t.src
            )
                return !0;
    }
    return !1;
}
function cL(e) {
    return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
}
var cw = null;
function cx() {}
function cP(e, t, n) {
    if (null === cw) throw Error(l(475));
    var r = cw;
    if (
        "stylesheet" === t.type &&
        ("string" != typeof n.media || !1 !== matchMedia(n.media).matches) &&
        0 == (4 & t.state.loading)
    ) {
        if (null === t.instance) {
            var i = cg(n.href),
                a = e.querySelector(cE(i));
            if (a) {
                null !== (e = a._p) &&
                    "object" == typeof e &&
                    "function" == typeof e.then &&
                    (r.count++, (r = ck.bind(r)), e.then(r, r)),
                    (t.state.loading |= 4),
                    (t.instance = a),
                    eQ(a);
                return;
            }
            (a = e.ownerDocument || e), (n = cA(n)), (i = cr.get(i)) && cC(n, i), eQ((a = a.createElement("link")));
            var s = a;
            (s._p = new Promise(function (e, t) {
                (s.onload = e), (s.onerror = t);
            })),
                uF(a, "link", n),
                (t.instance = a);
        }
        null === r.stylesheets && (r.stylesheets = new Map()),
            r.stylesheets.set(t, e),
            (e = t.state.preload) &&
                0 == (3 & t.state.loading) &&
                (r.count++, (t = ck.bind(r)), e.addEventListener("load", t), e.addEventListener("error", t));
    }
}
function cM() {
    if (null === cw) throw Error(l(475));
    var e = cw;
    return (
        e.stylesheets && 0 === e.count && cG(e, e.stylesheets),
        0 < e.count
            ? function (t) {
                  var n = setTimeout(function () {
                      if ((e.stylesheets && cG(e, e.stylesheets), e.unsuspend)) {
                          var t = e.unsuspend;
                          (e.unsuspend = null), t();
                      }
                  }, 6e4);
                  return (
                      (e.unsuspend = t),
                      function () {
                          (e.unsuspend = null), clearTimeout(n);
                      }
                  );
              }
            : null
    );
}
function ck() {
    if ((this.count--, 0 === this.count)) {
        if (this.stylesheets) cG(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            (this.unsuspend = null), e();
        }
    }
}
var cU = null;
function cG(e, t) {
    (e.stylesheets = null),
        null !== e.unsuspend && (e.count++, (cU = new Map()), t.forEach(cV, e), (cU = null), ck.call(e));
}
function cV(e, t) {
    if (!(4 & t.state.loading)) {
        var n = cU.get(e);
        if (n) var r = n.get(null);
        else {
            (n = new Map()), cU.set(e, n);
            for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
                var s = i[a];
                ("LINK" === s.nodeName || "not all" !== s.getAttribute("media")) &&
                    (n.set(s.dataset.precedence, s), (r = s));
            }
            r && n.set(null, r);
        }
        (s = (i = t.instance).getAttribute("data-precedence")),
            (a = n.get(s) || r) === r && n.set(null, i),
            n.set(s, i),
            this.count++,
            (r = ck.bind(this)),
            i.addEventListener("load", r),
            i.addEventListener("error", r),
            a
                ? a.parentNode.insertBefore(i, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild),
            (t.state.loading |= 4);
    }
}
var cF = { $$typeof: v, Provider: null, Consumer: null, _currentValue: V, _currentValue2: V, _threadCount: 0 };
function cB(e, t, n, r, i, a, s, o) {
    (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
        (this.callbackPriority = 0),
        (this.expirationTimes = eR(-1)),
        (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = eR(0)),
        (this.hiddenUpdates = eR(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = s),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = o),
        (this.incompleteTransitions = new Map());
}
function cj(e, t, n, r, i, a, s, o, l, u, c, d) {
    return (
        (e = new cB(e, t, n, s, o, l, u, d)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = rh(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ir()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        iO(a),
        e
    );
}
function cH(e) {
    return e ? (e = rf) : rf;
}
function cY(e, t, n, r, i, a) {
    (i = cH(i)),
        null === r.context ? (r.context = i) : (r.pendingContext = i),
        ((r = iL(t)).payload = { element: n }),
        null !== (a = void 0 === a ? null : a) && (r.callback = a),
        null !== (n = iw(e, r, t)) && (lR(n, e, t), ix(n, e, t));
}
function cW(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function cK(e, t) {
    cW(e, t), (e = e.alternate) && cW(e, t);
}
function cz(e) {
    if (13 === e.tag) {
        var t = rc(e, 0x4000000);
        null !== t && lR(t, e, 0x4000000), cK(e, 0x4000000);
    }
}
var c$ = !0;
function cq(e, t, n, r) {
    var i = U.T;
    U.T = null;
    var a = G.p;
    try {
        (G.p = 2), cQ(e, t, n, r);
    } finally {
        (G.p = a), (U.T = i);
    }
}
function cZ(e, t, n, r) {
    var i = U.T;
    U.T = null;
    var a = G.p;
    try {
        (G.p = 8), cQ(e, t, n, r);
    } finally {
        (G.p = a), (U.T = i);
    }
}
function cQ(e, t, n, r) {
    if (c$) {
        var i = cX(r);
        if (null === i) uR(e, t, r, cJ, n), de(e, r);
        else if (dn(i, e, t, n, r)) r.stopPropagation();
        else if ((de(e, r), 4 & t && -1 < c9.indexOf(e))) {
            for (; null !== i; ) {
                var a = e$(i);
                if (null !== a)
                    switch (a.tag) {
                        case 3:
                            if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                var s = ey(a.pendingLanes);
                                if (0 !== s) {
                                    var o = a;
                                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; s; ) {
                                        var l = 1 << (31 - em(s));
                                        (o.entanglements[1] |= l), (s &= ~l);
                                    }
                                    us(a), 0 == (6 & o6) && ((lp = ei() + 500), uo(0, !1));
                                }
                            }
                            break;
                        case 13:
                            null !== (o = rc(a, 2)) && lR(o, a, 2), lx(), cK(a, 2);
                    }
                if ((null === (a = cX(r)) && uR(e, t, r, cJ, n), a === i)) break;
                i = a;
            }
            null !== i && r.stopPropagation();
        } else uR(e, t, r, null, n);
    }
}
function cX(e) {
    return c0((e = tN(e)));
}
var cJ = null;
function c0(e) {
    if (((cJ = null), null !== (e = ez(e)))) {
        var t = c(e);
        if (null === t) e = null;
        else {
            var n = t.tag;
            if (13 === n) {
                if (null !== (e = d(t))) return e;
                e = null;
            } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        }
    }
    return (cJ = e), null;
}
function c1(e) {
    switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (ea()) {
                case es:
                    return 2;
                case eo:
                    return 8;
                case el:
                case eu:
                    return 32;
                case ec:
                    return 0x10000000;
                default:
                    return 32;
            }
        default:
            return 32;
    }
}
var c2 = !1,
    c3 = null,
    c6 = null,
    c4 = null,
    c5 = new Map(),
    c7 = new Map(),
    c8 = [],
    c9 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
            " ",
        );
function de(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            c3 = null;
            break;
        case "dragenter":
        case "dragleave":
            c6 = null;
            break;
        case "mouseover":
        case "mouseout":
            c4 = null;
            break;
        case "pointerover":
        case "pointerout":
            c5.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            c7.delete(t.pointerId);
    }
}
function dt(e, t, n, r, i, a) {
    return (
        null === e || e.nativeEvent !== a
            ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
              null !== t && null !== (t = e$(t)) && cz(t))
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i)),
        e
    );
}
function dn(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (c3 = dt(c3, e, t, n, r, i)), !0;
        case "dragenter":
            return (c6 = dt(c6, e, t, n, r, i)), !0;
        case "mouseover":
            return (c4 = dt(c4, e, t, n, r, i)), !0;
        case "pointerover":
            var a = i.pointerId;
            return c5.set(a, dt(c5.get(a) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (a = i.pointerId), c7.set(a, dt(c7.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function dr(e) {
    var t = ez(e.target);
    if (null !== t) {
        var n = c(t);
        if (null !== n) {
            if (13 === (t = n.tag)) {
                if (null !== (t = d(n))) {
                    (e.blockedOn = t),
                        ek(e.priority, function () {
                            if (13 === n.tag) {
                                var e = lb(),
                                    t = rc(n, (e = ex(e)));
                                null !== t && lR(t, n, e), cK(n, e);
                            }
                        });
                    return;
                }
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function di(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = cX(e.nativeEvent);
        if (null !== n) return null !== (t = e$(n)) && cz(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (tb = r), n.target.dispatchEvent(r), (tb = null), t.shift();
    }
    return !0;
}
function da(e, t, n) {
    di(e) && n.delete(t);
}
function ds() {
    (c2 = !1),
        null !== c3 && di(c3) && (c3 = null),
        null !== c6 && di(c6) && (c6 = null),
        null !== c4 && di(c4) && (c4 = null),
        c5.forEach(da),
        c7.forEach(da);
}
function dl(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), c2 || ((c2 = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, ds)));
}
var du = null;
function dc(e) {
    du !== e &&
        ((du = e),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
            du === e && (du = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    r = e[t + 1],
                    i = e[t + 2];
                if ("function" != typeof r)
                    if (null === c0(r || n)) continue;
                    else break;
                var a = e$(n);
                null !== a &&
                    (e.splice(t, 3), (t -= 3), aq(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
            }
        }));
}
function dd(e) {
    function t(t) {
        return dl(t, e);
    }
    null !== c3 && dl(c3, e), null !== c6 && dl(c6, e), null !== c4 && dl(c4, e), c5.forEach(t), c7.forEach(t);
    for (var n = 0; n < c8.length; n++) {
        var r = c8[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < c8.length && null === (n = c8[0]).blockedOn; ) dr(n), null === n.blockedOn && c8.shift();
    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (r = 0; r < n.length; r += 3) {
            var i = n[r],
                a = n[r + 1],
                s = i[eV] || null;
            if ("function" == typeof a) s || dc(n);
            else if (s) {
                var o = null;
                if (a && a.hasAttribute("formAction")) {
                    if (((i = a), (s = a[eV] || null))) o = s.formAction;
                    else if (null !== c0(i)) continue;
                } else o = s.action;
                "function" == typeof o ? (n[r + 1] = o) : (n.splice(r, 3), (r -= 3)), dc(n);
            }
        }
}
function d_(e) {
    this._internalRoot = e;
}
function df(e) {
    this._internalRoot = e;
}
(df.prototype.render = d_.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(l(409));
        cY(t.current, lb(), e, t, null, null);
    }),
    (df.prototype.unmount = d_.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cY(e.current, 2, null, e, null, null), lx(), (t[eF] = null);
            }
        }),
    (df.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = eM();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < c8.length && 0 !== t && t < c8[n].priority; n++);
            c8.splice(n, 0, e), 0 === n && dr(e);
        }
    });
var dp = s.version;
if ("19.1.0" !== dp) throw Error(l(527, dp, "19.1.0"));
G.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(l(188));
        throw Error(l(268, (e = Object.keys(e).join(","))));
    }
    return null === (e = null !== (e = f(t)) ? p(e) : null) ? null : e.stateNode;
};
var dh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.0",
};
if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var dm = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dm.isDisabled && dm.supportsFiber)
        try {
            (ef = dm.inject(dh)), (ep = dm);
        } catch (e) {}
}
t.createRoot = function (e, t) {
    if (!u(e)) throw Error(l(299));
    var n = !1,
        r = "",
        i = sb,
        a = sN,
        s = sR,
        o = null;
    return (
        null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
            void 0 !== t.onCaughtError && (a = t.onCaughtError),
            void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
            void 0 !== t.unstable_transitionCallbacks && (o = t.unstable_transitionCallbacks)),
        (t = cj(e, 1, !1, null, null, n, r, i, a, s, o, null)),
        (e[eF] = t.current),
        ub(e),
        new d_(t)
    );
};
