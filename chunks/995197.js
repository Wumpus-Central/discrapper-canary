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
function h(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
    for (e = e.child; null !== e; ) {
        if (null !== (t = h(e))) return t;
        e = e.sibling;
    }
    return null;
}
var p = Object.assign,
    g = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    I = Symbol.for("react.fragment"),
    T = Symbol.for("react.strict_mode"),
    y = Symbol.for("react.profiler"),
    S = Symbol.for("react.provider"),
    v = Symbol.for("react.consumer"),
    C = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    R = Symbol.for("react.suspense_list"),
    O = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy");
Symbol.for("react.scope");
var L = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
var w = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var x = Symbol.iterator;
function P(e) {
    return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (x && e[x]) || e["@@iterator"])
          ? e
          : null;
}
var M = Symbol.for("react.client.reference");
function k(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.$$typeof === M ? null : e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case I:
            return "Fragment";
        case y:
            return "Profiler";
        case T:
            return "StrictMode";
        case N:
            return "Suspense";
        case R:
            return "SuspenseList";
        case L:
            return "Activity";
    }
    if ("object" == typeof e)
        switch (e.$$typeof) {
            case A:
                return "Portal";
            case C:
                return (e.displayName || "Context") + ".Provider";
            case v:
                return (e._context.displayName || "Context") + ".Consumer";
            case b:
                var t = e.render;
                return (
                    (e = e.displayName) ||
                        (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e
                );
            case O:
                return null !== (t = e.displayName || null) ? t : k(e.type) || "Memo";
            case D:
                (t = e._payload), (e = e._init);
                try {
                    return k(e(t));
                } catch (e) {}
        }
    return null;
}
var U = Array.isArray,
    G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = { pending: !1, data: null, method: null, action: null },
    B = [],
    j = -1;
function H(e) {
    return { current: e };
}
function Y(e) {
    0 > j || ((e.current = B[j]), (B[j] = null), j--);
}
function W(e, t) {
    (B[++j] = e.current), (e.current = t);
}
var K = H(null),
    $ = H(null),
    z = H(null),
    q = H(null);
function X(e, t) {
    switch ((W(z, t), W($, e), W(K, null), t.nodeType)) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? uK(e) : 0;
            break;
        default:
            if (((e = t.tagName), (t = t.namespaceURI))) e = u$((t = uK(t)), e);
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
    Y(K), W(K, e);
}
function Z() {
    Y(K), Y($), Y(z);
}
function Q(e) {
    null !== e.memoizedState && W(q, e);
    var t = K.current,
        n = u$(t, e.type);
    t !== n && (W($, e), W(K, n));
}
function J(e) {
    $.current === e && (Y(K), Y($)), q.current === e && (Y(q), (cB._currentValue = V));
}
var ee = Object.prototype.hasOwnProperty,
    et = a.unstable_scheduleCallback,
    en = a.unstable_cancelCallback,
    er = a.unstable_shouldYield,
    ei = a.unstable_requestPaint,
    ea = a.unstable_now,
    es = a.unstable_getCurrentPriorityLevel,
    eo = a.unstable_ImmediatePriority,
    el = a.unstable_UserBlockingPriority,
    eu = a.unstable_NormalPriority,
    ec = a.unstable_LowPriority,
    ed = a.unstable_IdlePriority,
    e_ = a.log,
    ef = a.unstable_setDisableYieldValue,
    eh = null,
    ep = null;
function em(e) {
    if (("function" == typeof e_ && ef(e), ep && "function" == typeof ep.setStrictMode))
        try {
            ep.setStrictMode(eh, e);
        } catch (e) {}
}
var eg = Math.clz32 ? Math.clz32 : eI,
    eE = Math.log,
    eA = Math.LN2;
function eI(e) {
    return 0 == (e >>>= 0) ? 32 : (31 - ((eE(e) / eA) | 0)) | 0;
}
var eT = 256,
    ey = 4194304;
function eS(e) {
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
function ev(e, t, n) {
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
                ? (i = eS(r))
                : 0 != (s &= o)
                  ? (i = eS(s))
                  : n || (0 != (n = o & ~e) && (i = eS(n)))
            : 0 != (o = r & ~a)
              ? (i = eS(o))
              : 0 !== s
                ? (i = eS(s))
                : n || (0 != (n = r & ~e) && (i = eS(n))),
        0 === i
            ? 0
            : 0 !== t && t !== i && 0 == (t & a) && ((a = i & -i) >= (n = t & -t) || (32 === a && 0 != (4194048 & n)))
              ? t
              : i
    );
}
function eC(e, t) {
    return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
}
function eb(e, t) {
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
function eN() {
    var e = eT;
    return 0 == (4194048 & (eT <<= 1)) && (eT = 256), e;
}
function eR() {
    var e = ey;
    return 0 == (0x3c00000 & (ey <<= 1)) && (ey = 4194304), e;
}
function eO(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function eD(e, t) {
    (e.pendingLanes |= t), 0x10000000 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function eL(e, t, n, r, i, a) {
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
        var c = 31 - eg(n),
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
    0 !== r && ew(e, r, 0), 0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(s & ~t));
}
function ew(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - eg(t);
    (e.entangledLanes |= t), (e.entanglements[r] = 0x40000000 | e.entanglements[r] | (4194090 & n));
}
function ex(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - eg(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
function eP(e) {
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
function eM(e) {
    return 2 < (e &= -e) ? (8 < e ? (0 != (0x7ffffff & e) ? 32 : 0x10000000) : 8) : 2;
}
function ek() {
    var e = F.p;
    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : c2(e.type);
}
function eU(e, t) {
    var n = F.p;
    try {
        return (F.p = e), t();
    } finally {
        F.p = n;
    }
}
var eG = Math.random().toString(36).slice(2),
    eF = "__reactFiber$" + eG,
    eV = "__reactProps$" + eG,
    eB = "__reactContainer$" + eG,
    ej = "__reactEvents$" + eG,
    eH = "__reactListeners$" + eG,
    eY = "__reactHandles$" + eG,
    eW = "__reactResources$" + eG,
    eK = "__reactMarker$" + eG;
function e$(e) {
    delete e[eF], delete e[eV], delete e[ej], delete e[eH], delete e[eY];
}
function ez(e) {
    var t = e[eF];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[eB] || n[eF])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ct(e); null !== e; ) {
                    if ((n = e[eF])) return n;
                    e = ct(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function eq(e) {
    if ((e = e[eF] || e[eB])) {
        var t = e.tag;
        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
    }
    return null;
}
function eX(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
    throw Error(l(33));
}
function eZ(e) {
    var t = e[eW];
    return t || (t = e[eW] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
}
function eQ(e) {
    e[eK] = !0;
}
var eJ = new Set(),
    e0 = {};
function e1(e, t) {
    e2(e, t), e2(e + "Capture", t);
}
function e2(e, t) {
    for (e0[e] = t, e = 0; e < t.length; e++) eJ.add(t[e]);
}
var e3 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    e6 = {},
    e4 = {};
function e5(e) {
    return !!ee.call(e4, e) || (!ee.call(e6, e) && (e3.test(e) ? (e4[e] = !0) : ((e6[e] = !0), !1)));
}
function e7(e, t, n) {
    if (e5(t))
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
function e8(e, t, n) {
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
function e9(e, t, n, r) {
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
function te(e) {
    if (void 0 === tK)
        try {
            throw Error();
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            (tK = (t && t[1]) || ""),
                (t$ =
                    -1 < e.stack.indexOf("\n    at")
                        ? " (<anonymous>)"
                        : -1 < e.stack.indexOf("@")
                          ? "@unknown:0:0"
                          : "");
        }
    return "\n" + tK + e + t$;
}
var tt = !1;
function tn(e, t) {
    if (!e || tt) return "";
    tt = !0;
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
        (tt = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? te(n) : "";
}
function tr(e) {
    switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return te(e.type);
        case 16:
            return te("Lazy");
        case 13:
            return te("Suspense");
        case 19:
            return te("SuspenseList");
        case 0:
        case 15:
            return tn(e.type, !1);
        case 11:
            return tn(e.type.render, !1);
        case 1:
            return tn(e.type, !0);
        case 31:
            return te("Activity");
        default:
            return "";
    }
}
function ti(e) {
    try {
        var t = "";
        do (t += tr(e)), (e = e.return);
        while (e);
        return t;
    } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack;
    }
}
function ta(e) {
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
function ts(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
}
function to(e) {
    var t = ts(e) ? "checked" : "value",
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
function tl(e) {
    e._valueTracker || (e._valueTracker = to(e));
}
function tu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ts(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function tc(e) {
    if (void 0 === (e = e || ("u" > typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
var td = /[\n"\\]/g;
function t_(e) {
    return e.replace(td, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
}
function tf(e, t, n, r, i, a, s, o) {
    (e.name = ""),
        null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s
            ? (e.type = s)
            : e.removeAttribute("type"),
        null != t
            ? "number" === s
                ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + ta(t))
                : e.value !== "" + ta(t) && (e.value = "" + ta(t))
            : ("submit" !== s && "reset" !== s) || e.removeAttribute("value"),
        null != t ? tp(e, s, ta(t)) : null != n ? tp(e, s, ta(n)) : null != r && e.removeAttribute("value"),
        null == i && null != a && (e.defaultChecked = !!a),
        null != i && (e.checked = i && "function" != typeof i && "symbol" != typeof i),
        null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o
            ? (e.name = "" + ta(o))
            : e.removeAttribute("name");
}
function th(e, t, n, r, i, a, s, o) {
    if (
        (null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a && (e.type = a),
        null != t || null != n)
    ) {
        if (("submit" === a || "reset" === a) && null == t) return;
        (n = null != n ? "" + ta(n) : ""),
            (t = null != t ? "" + ta(t) : n),
            o || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (r = "function" != typeof (r = null != r ? r : i) && "symbol" != typeof r && !!r),
        (e.checked = o ? e.checked : !!r),
        (e.defaultChecked = !!r),
        null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s && (e.name = s);
}
function tp(e, t, n) {
    ("number" === t && tc(e.ownerDocument) === e) || e.defaultValue === "" + n || (e.defaultValue = "" + n);
}
function tm(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (i = 0, n = "" + ta(n), t = null; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
    }
}
function tg(e, t, n) {
    if (null != t && ((t = "" + ta(t)) !== e.value && (e.value = t), null == n)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
    }
    e.defaultValue = null != n ? "" + ta(n) : "";
}
function tE(e, t, n, r) {
    if (null == t) {
        if (null != r) {
            if (null != n) throw Error(l(92));
            if (U(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
            }
            n = r;
        }
        null == n && (n = ""), (t = n);
    }
    (e.defaultValue = n = ta(t)), (r = e.textContent) === n && "" !== r && null !== r && (e.value = r);
}
function tA(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var tI = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
    ),
);
function tT(e, t, n) {
    var r = 0 === t.indexOf("--");
    null == n || "boolean" == typeof n || "" === n
        ? r
            ? e.setProperty(t, "")
            : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
        : r
          ? e.setProperty(t, n)
          : "number" != typeof n || 0 === n || tI.has(t)
            ? "float" === t
                ? (e.cssFloat = n)
                : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
}
function ty(e, t, n) {
    if (null != t && "object" != typeof t) throw Error(l(62));
    if (((e = e.style), null != n)) {
        for (var r in n)
            !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? (e.cssFloat = "") : (e[r] = ""));
        for (var i in t) (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && tT(e, i, r);
    } else for (var a in t) t.hasOwnProperty(a) && tT(e, a, t[a]);
}
function tS(e) {
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
var tv = new Map([
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
    tC =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function tb(e) {
    return tC.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
}
var tN = null;
function tR(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var tO = null,
    tD = null;
function tL(e) {
    var t = eq(e);
    if (t && (e = t.stateNode)) {
        var n = e[eV] || null;
        switch (((e = t.stateNode), t.type)) {
            case "input":
                if (
                    (tf(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                    (t = n.name),
                    "radio" === n.type && null != t)
                ) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name="' + t_("" + t) + '"][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = r[eV] || null;
                            if (!i) throw Error(l(90));
                            tf(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                        }
                    }
                    for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && tu(r);
                }
                break;
            case "textarea":
                tg(e, n.value, n.defaultValue);
                break;
            case "select":
                null != (t = n.value) && tm(e, !!n.multiple, t, !1);
        }
    }
}
var tw = !1;
function tx(e, t, n) {
    if (tw) return e(t, n);
    tw = !0;
    try {
        return e(t);
    } finally {
        if (((tw = !1), (null !== tO || null !== tD) && (lP(), tO && ((t = tO), (e = tD), (tD = tO = null), tL(t), e))))
            for (t = 0; t < e.length; t++) tL(e[t]);
    }
}
function tP(e, t) {
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
var tM = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    tk = !1;
if (tM)
    try {
        var tU = {};
        Object.defineProperty(tU, "passive", {
            get: function () {
                tk = !0;
            },
        }),
            window.addEventListener("test", tU, tU),
            window.removeEventListener("test", tU, tU);
    } catch (e) {
        tk = !1;
    }
var tG = null,
    tF = null,
    tV = null;
function tB() {
    if (tV) return tV;
    var e,
        t,
        n = tF,
        r = n.length,
        i = "value" in tG ? tG.value : tG.textContent,
        a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var s = r - e;
    for (t = 1; t <= s && n[r - t] === i[a - t]; t++);
    return (tV = i.slice(e, 1 < t ? 1 - t : void 0));
}
function tj(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function tH() {
    return !0;
}
function tY() {
    return !1;
}
function tW(e) {
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
                ? tH
                : tY),
            (this.isPropagationStopped = tY),
            this
        );
    }
    return (
        p(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = tH));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = tH));
            },
            persist: function () {},
            isPersistent: tH,
        }),
        t
    );
}
var tK,
    t$,
    tz,
    tq,
    tX,
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
    tQ = tW(tZ),
    tJ = p({}, tZ, { view: 0, detail: 0 }),
    t0 = tW(tJ),
    t1 = p({}, tJ, {
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
        getModifierState: nn,
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
                : (e !== tX &&
                      (tX && "mousemove" === e.type
                          ? ((tz = e.screenX - tX.screenX), (tq = e.screenY - tX.screenY))
                          : (tq = tz = 0),
                      (tX = e)),
                  tz);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : tq;
        },
    }),
    t2 = tW(t1),
    t3 = tW(p({}, t1, { dataTransfer: 0 })),
    t6 = tW(p({}, tJ, { relatedTarget: 0 })),
    t4 = tW(p({}, tZ, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    t5 = tW(
        p({}, tZ, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
        }),
    ),
    t7 = tW(p({}, tZ, { data: 0 })),
    t8 = {
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
    t9 = {
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
    ne = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function nt(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ne[e]) && !!t[e];
}
function nn() {
    return nt;
}
var nr = tW(
        p({}, tJ, {
            key: function (e) {
                if (e.key) {
                    var t = t8[e.key] || e.key;
                    if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                    ? 13 === (e = tj(e))
                        ? "Enter"
                        : String.fromCharCode(e)
                    : "keydown" === e.type || "keyup" === e.type
                      ? t9[e.keyCode] || "Unidentified"
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
            getModifierState: nn,
            charCode: function (e) {
                return "keypress" === e.type ? tj(e) : 0;
            },
            keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
                return "keypress" === e.type ? tj(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
        }),
    ),
    ni = tW(
        p({}, t1, {
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
    na = tW(
        p({}, tJ, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: nn,
        }),
    ),
    ns = tW(p({}, tZ, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    no = tW(
        p({}, t1, {
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
    nl = tW(p({}, tZ, { newState: 0, oldState: 0 })),
    nu = [9, 13, 27, 32],
    nc = tM && "CompositionEvent" in window,
    nd = null;
tM && "documentMode" in document && (nd = document.documentMode);
var n_ = tM && "TextEvent" in window && !nd,
    nf = tM && (!nc || (nd && 8 < nd && 11 >= nd)),
    nh = " ",
    np = !1;
function nm(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== nu.indexOf(t.keyCode);
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
function ng(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var nE = !1;
function nA(e, t) {
    switch (e) {
        case "compositionend":
            return ng(t);
        case "keypress":
            if (32 !== t.which) return null;
            return (np = !0), nh;
        case "textInput":
            return (e = t.data) === nh && np ? null : e;
        default:
            return null;
    }
}
function nI(e, t) {
    if (nE)
        return "compositionend" === e || (!nc && nm(e, t)) ? ((e = tB()), (tV = tF = tG = null), (nE = !1), e) : null;
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
            return nf && "ko" !== t.locale ? null : t.data;
    }
}
var nT = {
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
function ny(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!nT[e.type] : "textarea" === t;
}
function nS(e, t, n, r) {
    tO ? (tD ? tD.push(r) : (tD = [r])) : (tO = r),
        0 < (t = uL(t, "onChange")).length &&
            ((n = new tQ("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var nv = null,
    nC = null;
function nb(e) {
    uS(e, 0);
}
function nN(e) {
    if (tu(eX(e))) return e;
}
function nR(e, t) {
    if ("change" === e) return t;
}
var nO = !1;
if (tM) {
    if (tM) {
        var nD = "oninput" in document;
        if (!nD) {
            var nL = document.createElement("div");
            nL.setAttribute("oninput", "return;"), (nD = "function" == typeof nL.oninput);
        }
        r = nD;
    } else r = !1;
    nO = r && (!document.documentMode || 9 < document.documentMode);
}
function nw() {
    nv && (nv.detachEvent("onpropertychange", nx), (nC = nv = null));
}
function nx(e) {
    if ("value" === e.propertyName && nN(nC)) {
        var t = [];
        nS(t, nC, e, tR(e)), tx(nb, t);
    }
}
function nP(e, t, n) {
    "focusin" === e ? (nw(), (nv = t), (nC = n), nv.attachEvent("onpropertychange", nx)) : "focusout" === e && nw();
}
function nM(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return nN(nC);
}
function nk(e, t) {
    if ("click" === e) return nN(t);
}
function nU(e, t) {
    if ("input" === e || "change" === e) return nN(t);
}
function nG(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var nF = "function" == typeof Object.is ? Object.is : nG;
function nV(e, t) {
    if (nF(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ee.call(t, i) || !nF(e[i], t[i])) return !1;
    }
    return !0;
}
function nB(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function nj(e, t) {
    var n,
        r = nB(e);
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
        r = nB(r);
    }
}
function nH(e, t) {
    return (
        !!e &&
        !!t &&
        (e === t ||
            ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                    ? nH(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
    );
}
function nY(e) {
    e =
        null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
            ? e.ownerDocument.defaultView
            : window;
    for (var t = tc(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = tc(e.document);
    }
    return t;
}
function nW(e) {
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
var nK = tM && "documentMode" in document && 11 >= document.documentMode,
    n$ = null,
    nz = null,
    nq = null,
    nX = !1;
function nZ(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    nX ||
        null == n$ ||
        n$ !== tc(r) ||
        ((r =
            "selectionStart" in (r = n$) && nW(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                      anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                          .anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  }),
        (nq && nV(nq, r)) ||
            ((nq = r),
            0 < (r = uL(nz, "onSelect")).length &&
                ((t = new tQ("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = n$))));
}
function nQ(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var nJ = {
        animationend: nQ("Animation", "AnimationEnd"),
        animationiteration: nQ("Animation", "AnimationIteration"),
        animationstart: nQ("Animation", "AnimationStart"),
        transitionrun: nQ("Transition", "TransitionRun"),
        transitionstart: nQ("Transition", "TransitionStart"),
        transitioncancel: nQ("Transition", "TransitionCancel"),
        transitionend: nQ("Transition", "TransitionEnd"),
    },
    n0 = {},
    n1 = {};
function n2(e) {
    if (n0[e]) return n0[e];
    if (!nJ[e]) return e;
    var t,
        n = nJ[e];
    for (t in n) if (n.hasOwnProperty(t) && t in n1) return (n0[e] = n[t]);
    return e;
}
tM &&
    ((n1 = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete nJ.animationend.animation, delete nJ.animationiteration.animation, delete nJ.animationstart.animation),
    "TransitionEvent" in window || delete nJ.transitionend.transition);
var n3 = n2("animationend"),
    n6 = n2("animationiteration"),
    n4 = n2("animationstart"),
    n5 = n2("transitionrun"),
    n7 = n2("transitionstart"),
    n8 = n2("transitioncancel"),
    n9 = n2("transitionend"),
    re = new Map(),
    rt =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function rn(e, t) {
    re.set(e, t), e1(t, [e]);
}
rt.push("scrollEnd");
var rr = new WeakMap();
function ri(e, t) {
    if ("object" == typeof e && null !== e) {
        var n = rr.get(e);
        return void 0 !== n ? n : ((t = { value: e, source: t, stack: ti(t) }), rr.set(e, t), t);
    }
    return { value: e, source: t, stack: ti(t) };
}
var ra = [],
    rs = 0,
    ro = 0;
function rl() {
    for (var e = rs, t = (ro = rs = 0); t < e; ) {
        var n = ra[t];
        ra[t++] = null;
        var r = ra[t];
        ra[t++] = null;
        var i = ra[t];
        ra[t++] = null;
        var a = ra[t];
        if (((ra[t++] = null), null !== r && null !== i)) {
            var s = r.pending;
            null === s ? (i.next = i) : ((i.next = s.next), (s.next = i)), (r.pending = i);
        }
        0 !== a && r_(n, i, a);
    }
}
function ru(e, t, n, r) {
    (ra[rs++] = e),
        (ra[rs++] = t),
        (ra[rs++] = n),
        (ra[rs++] = r),
        (ro |= r),
        (e.lanes |= r),
        null !== (e = e.alternate) && (e.lanes |= r);
}
function rc(e, t, n, r) {
    return ru(e, t, n, r), rf(e);
}
function rd(e, t) {
    return ru(e, null, null, t), rf(e);
}
function r_(e, t, n) {
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
              ((i = 31 - eg(n)),
              null === (r = (e = a.hiddenUpdates)[i]) ? (e[i] = [t]) : r.push(t),
              (t.lane = 0x20000000 | n)),
          a)
        : null;
}
function rf(e) {
    if (50 < lC) throw ((lC = 0), (lb = null), Error(l(185)));
    for (var t = e.return; null !== t; ) t = (e = t).return;
    return 3 === e.tag ? e.stateNode : null;
}
var rh = {};
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
function rm(e, t, n, r) {
    return new rp(e, t, n, r);
}
function rg(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function rE(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = rm(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function rA(e, t) {
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
function rI(e, t, n, r, i, a) {
    var s = 0;
    if (((r = e), "function" == typeof e)) rg(e) && (s = 1);
    else if ("string" == typeof e) s = cL(e, n, K.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
    else
        e: switch (e) {
            case L:
                return ((e = rm(31, n, t, i)).elementType = L), (e.lanes = a), e;
            case I:
                return rT(n.children, i, a, t);
            case T:
                (s = 8), (i |= 24);
                break;
            case y:
                return ((e = rm(12, n, t, 2 | i)).elementType = y), (e.lanes = a), e;
            case N:
                return ((e = rm(13, n, t, i)).elementType = N), (e.lanes = a), e;
            case R:
                return ((e = rm(19, n, t, i)).elementType = R), (e.lanes = a), e;
            default:
                if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case S:
                        case C:
                            s = 10;
                            break e;
                        case v:
                            s = 9;
                            break e;
                        case b:
                            s = 11;
                            break e;
                        case O:
                            s = 14;
                            break e;
                        case D:
                            (s = 16), (r = null);
                            break e;
                    }
                (s = 29), (n = Error(l(130, null === e ? "null" : typeof e, ""))), (r = null);
        }
    return ((t = rm(s, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t;
}
function rT(e, t, n, r) {
    return ((e = rm(7, e, r, t)).lanes = n), e;
}
function ry(e, t, n) {
    return ((e = rm(6, e, null, t)).lanes = n), e;
}
function rS(e, t, n) {
    return (
        ((t = rm(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
var rv = [],
    rC = 0,
    rb = null,
    rN = 0,
    rR = [],
    rO = 0,
    rD = null,
    rL = 1,
    rw = "";
function rx(e, t) {
    (rv[rC++] = rN), (rv[rC++] = rb), (rb = e), (rN = t);
}
function rP(e, t, n) {
    (rR[rO++] = rL), (rR[rO++] = rw), (rR[rO++] = rD), (rD = e);
    var r = rL;
    e = rw;
    var i = 32 - eg(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var a = 32 - eg(t) + i;
    if (30 < a) {
        var s = i - (i % 5);
        (a = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (i -= s),
            (rL = (1 << (32 - eg(t) + i)) | (n << i) | r),
            (rw = a + e);
    } else (rL = (1 << a) | (n << i) | r), (rw = e);
}
function rM(e) {
    null !== e.return && (rx(e, 1), rP(e, 1, 0));
}
function rk(e) {
    for (; e === rb; ) (rb = rv[--rC]), (rv[rC] = null), (rN = rv[--rC]), (rv[rC] = null);
    for (; e === rD; )
        (rD = rR[--rO]), (rR[rO] = null), (rw = rR[--rO]), (rR[rO] = null), (rL = rR[--rO]), (rR[rO] = null);
}
var rU = null,
    rG = null,
    rF = !1,
    rV = null,
    rB = !1,
    rj = Error(l(519));
function rH(e) {
    throw (rq(ri(Error(l(418, "")), e)), rj);
}
function rY(e) {
    var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
    switch (((t[eF] = e), (t[eV] = r), n)) {
        case "dialog":
            uv("cancel", t), uv("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            uv("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < uT.length; n++) uv(uT[n], t);
            break;
        case "source":
            uv("error", t);
            break;
        case "img":
        case "image":
        case "link":
            uv("error", t), uv("load", t);
            break;
        case "details":
            uv("toggle", t);
            break;
        case "input":
            uv("invalid", t), th(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), tl(t);
            break;
        case "select":
            uv("invalid", t);
            break;
        case "textarea":
            uv("invalid", t), tE(t, r.value, r.defaultValue, r.children), tl(t);
    }
    ("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
    t.textContent === "" + n ||
    !0 === r.suppressHydrationWarning ||
    uU(t.textContent, n)
        ? (null != r.popover && (uv("beforetoggle", t), uv("toggle", t)),
          null != r.onScroll && uv("scroll", t),
          null != r.onScrollEnd && uv("scrollend", t),
          null != r.onClick && (t.onclick = uG),
          (t = !0))
        : (t = !1),
        t || rH(e);
}
function rW(e) {
    for (rU = e.return; rU; )
        switch (rU.tag) {
            case 5:
            case 13:
                rB = !1;
                return;
            case 27:
            case 3:
                rB = !0;
                return;
            default:
                rU = rU.return;
        }
}
function rK(e) {
    if (e !== rU) return !1;
    if (!rF) return rW(e), (rF = !0), !1;
    var t,
        n = e.tag;
    if (
        ((t = 3 !== n && 27 !== n) &&
            ((t = 5 === n) && (t = "form" === (t = e.type) || "button" === t || uz(e.type, e.memoizedProps)), (t = !t)),
        t && rG && rH(e),
        rW(e),
        13 === n)
    ) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
        e: {
            for (n = 0, e = e.nextSibling; e; ) {
                if (8 === e.nodeType)
                    if ("/$" === (t = e.data)) {
                        if (0 === n) {
                            rG = u9(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
            }
            rG = null;
        }
    } else
        27 === n
            ? ((n = rG), u2(e.type) ? ((e = ce), (ce = null), (rG = e)) : (rG = n))
            : (rG = rU ? u9(e.stateNode.nextSibling) : null);
    return !0;
}
function r$() {
    (rG = rU = null), (rF = !1);
}
function rz() {
    var e = rV;
    return null !== e && (null === l_ ? (l_ = e) : l_.push.apply(l_, e), (rV = null)), e;
}
function rq(e) {
    null === rV ? (rV = [e]) : rV.push(e);
}
var rX = H(null),
    rZ = null,
    rQ = null;
function rJ(e, t, n) {
    W(rX, t._currentValue), (t._currentValue = n);
}
function r0(e) {
    (e._currentValue = rX.current), Y(rX);
}
function r1(e, t, n) {
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
function r2(e, t, n, r) {
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
                            r1(a.return, n, e),
                            r || (s = null);
                        break e;
                    }
                a = o.next;
            }
        } else if (18 === i.tag) {
            if (null === (s = i.return)) throw Error(l(341));
            (s.lanes |= n), null !== (a = s.alternate) && (a.lanes |= n), r1(s, n, e), (s = null);
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
function r3(e, t, n, r) {
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
                nF(i.pendingProps.value, s.value) || (null !== e ? e.push(o) : (e = [o]));
            }
        } else if (i === q.current) {
            if (null === (s = i.alternate)) throw Error(l(387));
            s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(cB) : (e = [cB]));
        }
        i = i.return;
    }
    null !== e && r2(t, e, n, r), (t.flags |= 262144);
}
function r6(e) {
    for (e = e.firstContext; null !== e; ) {
        if (!nF(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
    }
    return !1;
}
function r4(e) {
    (rZ = e), (rQ = null), null !== (e = e.dependencies) && (e.firstContext = null);
}
function r5(e) {
    return r8(rZ, e);
}
function r7(e, t) {
    return null === rZ && r4(e), r8(e, t);
}
function r8(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), null === rQ)) {
        if (null === e) throw Error(l(308));
        (rQ = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else rQ = rQ.next = t;
    return n;
}
var r9 =
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
    ie = a.unstable_scheduleCallback,
    it = a.unstable_NormalPriority,
    ir = { $$typeof: C, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
function ii() {
    return { controller: new r9(), data: new Map(), refCount: 0 };
}
function ia(e) {
    e.refCount--,
        0 === e.refCount &&
            ie(it, function () {
                e.controller.abort();
            });
}
var is = null,
    io = 0,
    il = 0,
    iu = null;
function ic(e, t) {
    if (null === is) {
        var n = (is = []);
        (io = 0),
            (il = up()),
            (iu = {
                status: "pending",
                value: void 0,
                then: function (e) {
                    n.push(e);
                },
            });
    }
    return io++, t.then(id, id), t;
}
function id() {
    if (0 == --io && null !== is) {
        null !== iu && (iu.status = "fulfilled");
        var e = is;
        (is = null), (il = 0), (iu = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
}
function i_(e, t) {
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
var ih = G.S;
G.S = function (e, t) {
    "object" == typeof t && null !== t && "function" == typeof t.then && ic(e, t), null !== ih && ih(e, t);
};
var ip = H(null);
function im() {
    var e = ip.current;
    return null !== e ? e : o5.pooledCache;
}
function ig(e, t) {
    null === t ? W(ip, ip.current) : W(ip, t.pool);
}
function iE() {
    var e = im();
    return null === e ? null : { parent: ir._currentValue, pool: e };
}
var iA = Error(l(460)),
    iI = Error(l(474)),
    iT = Error(l(542)),
    iy = { then: function () {} };
function iS(e) {
    return "fulfilled" === (e = e.status) || "rejected" === e;
}
function iv() {}
function iC(e, t, n) {
    switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(iv, iv), (t = n)), t.status)) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw (iR((e = t.reason)), e);
        default:
            if ("string" == typeof t.status) t.then(iv, iv);
            else {
                if (null !== (e = o5) && 100 < e.shellSuspendCounter) throw Error(l(482));
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
                    throw (iR((e = t.reason)), e);
            }
            throw ((ib = t), iA);
    }
}
var ib = null;
function iN() {
    if (null === ib) throw Error(l(459));
    var e = ib;
    return (ib = null), e;
}
function iR(e) {
    if (e === iA || e === iT) throw Error(l(483));
}
var iO = !1;
function iD(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
    };
}
function iL(e, t) {
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
function iw(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function ix(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & o4))) {
        var i = r.pending;
        return (
            null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            (t = rf(e)),
            r_(e, null, n),
            t
        );
    }
    return ru(e, r, t, n), rf(e);
}
function iP(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194048 & n))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ex(e, n);
    }
}
function iM(e, t) {
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
var ik = !1;
function iU() {
    if (ik) {
        var e = iu;
        if (null !== e) throw e;
    }
}
function iG(e, t, n, r) {
    ik = !1;
    var i = e.updateQueue;
    iO = !1;
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
            if (f ? (o8 & _) === _ : (r & _) === _) {
                0 !== _ && _ === il && (ik = !0),
                    null !== c &&
                        (c = c.next = { lane: 0, tag: o.tag, payload: o.payload, callback: null, next: null });
                e: {
                    var h = e,
                        g = o;
                    _ = t;
                    var E = n;
                    switch (g.tag) {
                        case 1:
                            if ("function" == typeof (h = g.payload)) {
                                d = h.call(E, d, _);
                                break e;
                            }
                            d = h;
                            break e;
                        case 3:
                            h.flags = (-65537 & h.flags) | 128;
                        case 0:
                            if (null == (_ = "function" == typeof (h = g.payload) ? h.call(E, d, _) : h)) break e;
                            d = p({}, d, _);
                            break e;
                        case 2:
                            iO = !0;
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
            (ls |= s),
            (e.lanes = s),
            (e.memoizedState = d);
    }
}
function iF(e, t) {
    if ("function" != typeof e) throw Error(l(191, e));
    e.call(t);
}
function iV(e, t) {
    var n = e.callbacks;
    if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) iF(n[e], t);
}
var iB = H(null),
    ij = H(0);
function iH(e, t) {
    W(ij, (e = li)), W(iB, t), (li = e | t.baseLanes);
}
function iY() {
    W(ij, li), W(iB, iB.current);
}
function iW() {
    (li = ij.current), Y(iB), Y(ij);
}
var iK = 0,
    i$ = null,
    iz = null,
    iq = null,
    iX = !1,
    iZ = !1,
    iQ = !1,
    iJ = 0,
    i0 = 0,
    i1 = null,
    i2 = 0;
function i3() {
    throw Error(l(321));
}
function i6(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nF(e[n], t[n])) return !1;
    return !0;
}
function i4(e, t, n, r, i, a) {
    return (
        (iK = a),
        (i$ = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (G.H = null === e || null === e.memoizedState ? st : sn),
        (iQ = !1),
        (a = n(r, i)),
        (iQ = !1),
        iZ && (a = i7(t, n, r, i)),
        i5(e),
        a
    );
}
function i5(e) {
    G.H = se;
    var t = null !== iz && null !== iz.next;
    if (((iK = 0), (iq = iz = i$ = null), (iX = !1), (i0 = 0), (i1 = null), t)) throw Error(l(300));
    null === e || sU || (null !== (e = e.dependencies) && r6(e) && (sU = !0));
}
function i7(e, t, n, r) {
    i$ = e;
    var i = 0;
    do {
        if ((iZ && (i1 = null), (i0 = 0), (iZ = !1), 25 <= i)) throw Error(l(301));
        if (((i += 1), (iq = iz = null), null != e.updateQueue)) {
            var a = e.updateQueue;
            (a.lastEffect = null), (a.events = null), (a.stores = null), null != a.memoCache && (a.memoCache.index = 0);
        }
        (G.H = sr), (a = t(n, r));
    } while (iZ);
    return a;
}
function i8() {
    var e = G.H,
        t = e.useState()[0];
    return (
        (t = "function" == typeof t.then ? aa(t) : t),
        (e = e.useState()[0]),
        (null !== iz ? iz.memoizedState : null) !== e && (i$.flags |= 1024),
        t
    );
}
function i9() {
    var e = 0 !== iJ;
    return (iJ = 0), e;
}
function ae(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function at(e) {
    if (iX) {
        for (e = e.memoizedState; null !== e; ) {
            var t = e.queue;
            null !== t && (t.pending = null), (e = e.next);
        }
        iX = !1;
    }
    (iK = 0), (iq = iz = i$ = null), (iZ = !1), (i0 = iJ = 0), (i1 = null);
}
function an() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === iq ? (i$.memoizedState = iq = e) : (iq = iq.next = e), iq;
}
function ar() {
    if (null === iz) {
        var e = i$.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = iz.next;
    var t = null === iq ? i$.memoizedState : iq.next;
    if (null !== t) (iq = t), (iz = e);
    else {
        if (null === e) {
            if (null === i$.alternate) throw Error(l(467));
            throw Error(l(310));
        }
        (e = {
            memoizedState: (iz = e).memoizedState,
            baseState: iz.baseState,
            baseQueue: iz.baseQueue,
            queue: iz.queue,
            next: null,
        }),
            null === iq ? (i$.memoizedState = iq = e) : (iq = iq.next = e);
    }
    return iq;
}
function ai() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function aa(e) {
    var t = i0;
    return (
        (i0 += 1),
        null === i1 && (i1 = []),
        (e = iC(i1, e, t)),
        (t = i$),
        null === (null === iq ? t.memoizedState : iq.next) &&
            (G.H = null === (t = t.alternate) || null === t.memoizedState ? st : sn),
        e
    );
}
function as(e) {
    if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return aa(e);
        if (e.$$typeof === C) return r5(e);
    }
    throw Error(l(438, String(e)));
}
function ao(e) {
    var t = null,
        n = i$.updateQueue;
    if ((null !== n && (t = n.memoCache), null == t)) {
        var r = i$.alternate;
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
        null === n && ((n = ai()), (i$.updateQueue = n)),
        (n.memoCache = t),
        void 0 === (n = t.data[t.index]))
    )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = w;
    return t.index++, n;
}
function al(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function au(e) {
    return ac(ar(), iz, e);
}
function ac(e, t, n) {
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
            if (_ !== c.lane ? (o8 & _) === _ : (iK & _) === _) {
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
                        _ === il && (d = !0);
                else if ((iK & f) === f) {
                    (c = c.next), f === il && (d = !0);
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
                        (i$.lanes |= f),
                        (ls |= f);
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
                    (i$.lanes |= _),
                    (ls |= _);
            c = c.next;
        } while (null !== c && c !== t);
        if ((null === u ? (s = a) : (u.next = o), !nF(a, e.memoizedState) && ((sU = !0), d && null !== (n = iu))))
            throw n;
        (e.memoizedState = a), (e.baseState = s), (e.baseQueue = u), (r.lastRenderedState = a);
    }
    return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
}
function ad(e) {
    var t = ar(),
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
        nF(a, t.memoizedState) || (sU = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
    }
    return [a, r];
}
function a_(e, t, n) {
    var r = i$,
        i = ar(),
        a = rF;
    if (a) {
        if (void 0 === n) throw Error(l(407));
        n = n();
    } else n = t();
    var s = !nF((iz || i).memoizedState, n);
    if (
        (s && ((i.memoizedState = n), (sU = !0)),
        (i = i.queue),
        ak(2048, 8, ap.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || s || (null !== iq && 1 & iq.memoizedState.tag))
    ) {
        if (((r.flags |= 2048), aw(9, ax(), ah.bind(null, r, i, n, t), null), null === o5)) throw Error(l(349));
        a || 0 != (124 & iK) || af(r, t, n);
    }
    return n;
}
function af(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = i$.updateQueue)
            ? ((t = ai()), (i$.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
}
function ah(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), am(t) && ag(e);
}
function ap(e, t, n) {
    return n(function () {
        am(t) && ag(e);
    });
}
function am(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nF(e, n);
    } catch (e) {
        return !0;
    }
}
function ag(e) {
    var t = rd(e, 2);
    null !== t && lO(t, e, 2);
}
function aE(e) {
    var t = an();
    if ("function" == typeof e) {
        var n = e;
        if (((e = n()), iQ)) {
            em(!0);
            try {
                n();
            } finally {
                em(!1);
            }
        }
    }
    return (
        (t.memoizedState = t.baseState = e),
        (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: e }),
        t
    );
}
function aA(e, t, n, r) {
    return (e.baseState = n), ac(e, iz, "function" == typeof r ? r : al);
}
function aI(e, t, n, r, i) {
    if (a7(e)) throw Error(l(485));
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
        null !== G.T ? n(!0) : (a.isTransition = !1),
            r(a),
            null === (n = t.pending)
                ? ((a.next = t.pending = a), aT(t, a))
                : ((a.next = n.next), (t.pending = n.next = a));
    }
}
function aT(e, t) {
    var n = t.action,
        r = t.payload,
        i = e.state;
    if (t.isTransition) {
        var a = G.T,
            s = {};
        G.T = s;
        try {
            var o = n(i, r),
                l = G.S;
            null !== l && l(s, o), ay(e, t, o);
        } catch (n) {
            av(e, t, n);
        } finally {
            G.T = a;
        }
    } else
        try {
            (a = n(i, r)), ay(e, t, a);
        } catch (n) {
            av(e, t, n);
        }
}
function ay(e, t, n) {
    null !== n && "object" == typeof n && "function" == typeof n.then
        ? n.then(
              function (n) {
                  aS(e, t, n);
              },
              function (n) {
                  return av(e, t, n);
              },
          )
        : aS(e, t, n);
}
function aS(e, t, n) {
    (t.status = "fulfilled"),
        (t.value = n),
        aC(t),
        (e.state = n),
        null !== (t = e.pending) && ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), aT(e, n)));
}
function av(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), null !== r)) {
        r = r.next;
        do (t.status = "rejected"), (t.reason = n), aC(t), (t = t.next);
        while (t !== r);
    }
    e.action = null;
}
function aC(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
}
function ab(e, t) {
    return t;
}
function aN(e, t) {
    if (rF) {
        var n = o5.formState;
        if (null !== n) {
            e: {
                var r = i$;
                if (rF) {
                    if (rG) {
                        a: {
                            for (var i = rG, a = rB; 8 !== i.nodeType; )
                                if (!a || null === (i = u9(i.nextSibling))) {
                                    i = null;
                                    break a;
                                }
                            i = "F!" === (a = i.data) || "F" === a ? i : null;
                        }
                        if (i) {
                            (rG = u9(i.nextSibling)), (r = "F!" === i.data);
                            break e;
                        }
                    }
                    rH(r);
                }
                r = !1;
            }
            r && (t = n[0]);
        }
    }
    return (
        ((n = an()).memoizedState = n.baseState = t),
        (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ab, lastRenderedState: t }),
        (n.queue = r),
        (n = a6.bind(null, i$, r)),
        (r.dispatch = n),
        (r = aE(!1)),
        (a = a5.bind(null, i$, !1, r.queue)),
        (r = an()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = aI.bind(null, i$, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
    );
}
function aR(e) {
    return aO(ar(), iz, e);
}
function aO(e, t, n) {
    if (((t = ac(e, t, ab)[0]), (e = au(al)[0]), "object" == typeof t && null !== t && "function" == typeof t.then))
        try {
            var r = aa(t);
        } catch (e) {
            if (e === iA) throw iT;
            throw e;
        }
    else r = t;
    var i = (t = ar()).queue,
        a = i.dispatch;
    return n !== t.memoizedState && ((i$.flags |= 2048), aw(9, ax(), aD.bind(null, i, n), null)), [r, a, e];
}
function aD(e, t) {
    e.action = t;
}
function aL(e) {
    var t = ar(),
        n = iz;
    if (null !== n) return aO(t, n, e);
    ar(), (t = t.memoizedState);
    var r = (n = ar()).queue.dispatch;
    return (n.memoizedState = e), [t, r, !1];
}
function aw(e, t, n, r) {
    return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        null === (t = i$.updateQueue) && ((t = ai()), (i$.updateQueue = t)),
        null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function ax() {
    return { destroy: void 0, resource: void 0 };
}
function aP() {
    return ar().memoizedState;
}
function aM(e, t, n, r) {
    var i = an();
    (r = void 0 === r ? null : r), (i$.flags |= e), (i.memoizedState = aw(1 | t, ax(), n, r));
}
function ak(e, t, n, r) {
    var i = ar();
    r = void 0 === r ? null : r;
    var a = i.memoizedState.inst;
    null !== iz && null !== r && i6(r, iz.memoizedState.deps)
        ? (i.memoizedState = aw(t, a, n, r))
        : ((i$.flags |= e), (i.memoizedState = aw(1 | t, a, n, r)));
}
function aU(e, t) {
    aM(8390656, 8, e, t);
}
function aG(e, t) {
    ak(2048, 8, e, t);
}
function aF(e, t) {
    return ak(4, 2, e, t);
}
function aV(e, t) {
    return ak(4, 4, e, t);
}
function aB(e, t) {
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
function aj(e, t, n) {
    (n = null != n ? n.concat([e]) : null), ak(4, 4, aB.bind(null, t, e), n);
}
function aH() {}
function aY(e, t) {
    var n = ar();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== t && i6(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function aW(e, t) {
    var n = ar();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    if (null !== t && i6(t, r[1])) return r[0];
    if (((r = e()), iQ)) {
        em(!0);
        try {
            e();
        } finally {
            em(!1);
        }
    }
    return (n.memoizedState = [r, t]), r;
}
function aK(e, t, n) {
    return void 0 === n || 0 != (0x40000000 & iK)
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = lR()), (i$.lanes |= e), (ls |= e), n);
}
function a$(e, t, n, r) {
    return nF(n, t)
        ? n
        : null !== iB.current
          ? (nF((e = aK(e, n, r)), t) || (sU = !0), e)
          : 0 == (42 & iK)
            ? ((sU = !0), (e.memoizedState = n))
            : ((e = lR()), (i$.lanes |= e), (ls |= e), t);
}
function az(e, t, n, r, i) {
    var a = F.p;
    F.p = 0 !== a && 8 > a ? a : 8;
    var s = G.T,
        o = {};
    (G.T = o), a5(e, !1, t, n);
    try {
        var l = i(),
            u = G.S;
        if ((null !== u && u(o, l), null !== l && "object" == typeof l && "function" == typeof l.then)) {
            var c = i_(l, r);
            a4(e, t, c, lN(e));
        } else a4(e, t, r, lN(e));
    } catch (n) {
        a4(e, t, { then: function () {}, status: "rejected", reason: n }, lN());
    } finally {
        (F.p = a), (G.T = s);
    }
}
function aq() {}
function aX(e, t, n, r) {
    if (5 !== e.tag) throw Error(l(476));
    var i = aZ(e).queue;
    az(
        e,
        i,
        t,
        V,
        null === n
            ? aq
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
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: V },
            next: null,
        }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: n },
            next: null,
        }),
        (e.memoizedState = t),
        null !== (e = e.alternate) && (e.memoizedState = t),
        t
    );
}
function aQ(e) {
    var t = aZ(e).next.queue;
    a4(e, t, {}, lN());
}
function aJ() {
    return r5(cB);
}
function a0() {
    return ar().memoizedState;
}
function a1() {
    return ar().memoizedState;
}
function a2(e) {
    for (var t = e.return; null !== t; ) {
        switch (t.tag) {
            case 24:
            case 3:
                var n = lN(),
                    r = ix(t, (e = iw(n)), n);
                null !== r && (lO(r, t, n), iP(r, t, n)), (t = { cache: ii() }), (e.payload = t);
                return;
        }
        t = t.return;
    }
}
function a3(e, t, n) {
    var r = lN();
    (n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
        a7(e) ? a8(t, n) : null !== (n = rc(e, t, n, r)) && (lO(n, e, r), a9(n, t, r));
}
function a6(e, t, n) {
    a4(e, t, n, lN());
}
function a4(e, t, n, r) {
    var i = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (a7(e)) a8(t, i);
    else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
            try {
                var s = t.lastRenderedState,
                    o = a(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = o), nF(o, s)))
                    return ru(e, t, i, 0), null === o5 && rl(), !1;
            } catch (e) {
            } finally {
            }
        if (null !== (n = rc(e, t, i, r))) return lO(n, e, r), a9(n, t, r), !0;
    }
    return !1;
}
function a5(e, t, n, r) {
    if (((r = { lane: 2, revertLane: up(), action: r, hasEagerState: !1, eagerState: null, next: null }), a7(e))) {
        if (t) throw Error(l(479));
    } else null !== (t = rc(e, n, r, 2)) && lO(t, e, 2);
}
function a7(e) {
    var t = e.alternate;
    return e === i$ || (null !== t && t === i$);
}
function a8(e, t) {
    iZ = iX = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function a9(e, t, n) {
    if (0 != (4194048 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (t.lanes = n |= r), ex(e, n);
    }
}
var se = {
        readContext: r5,
        use: as,
        useCallback: i3,
        useContext: i3,
        useEffect: i3,
        useImperativeHandle: i3,
        useLayoutEffect: i3,
        useInsertionEffect: i3,
        useMemo: i3,
        useReducer: i3,
        useRef: i3,
        useState: i3,
        useDebugValue: i3,
        useDeferredValue: i3,
        useTransition: i3,
        useSyncExternalStore: i3,
        useId: i3,
        useHostTransitionStatus: i3,
        useFormState: i3,
        useActionState: i3,
        useOptimistic: i3,
        useMemoCache: i3,
        useCacheRefresh: i3,
    },
    st = {
        readContext: r5,
        use: as,
        useCallback: function (e, t) {
            return (an().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: r5,
        useEffect: aU,
        useImperativeHandle: function (e, t, n) {
            (n = null != n ? n.concat([e]) : null), aM(4194308, 4, aB.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return aM(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            aM(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = an();
            t = void 0 === t ? null : t;
            var r = e();
            if (iQ) {
                em(!0);
                try {
                    e();
                } finally {
                    em(!1);
                }
            }
            return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
            var r = an();
            if (void 0 !== n) {
                var i = n(t);
                if (iQ) {
                    em(!0);
                    try {
                        n(t);
                    } finally {
                        em(!1);
                    }
                }
            } else i = t;
            return (
                (r.memoizedState = r.baseState = i),
                (r.queue = e =
                    { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
                (e = e.dispatch = a3.bind(null, i$, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return (an().memoizedState = { current: e });
        },
        useState: function (e) {
            var t = (e = aE(e)).queue,
                n = a6.bind(null, i$, t);
            return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: aH,
        useDeferredValue: function (e, t) {
            return aK(an(), e, t);
        },
        useTransition: function () {
            var e = aE(!1);
            return (e = az.bind(null, i$, e.queue, !0, !1)), (an().memoizedState = e), [!1, e];
        },
        useSyncExternalStore: function (e, t, n) {
            var r = i$,
                i = an();
            if (rF) {
                if (void 0 === n) throw Error(l(407));
                n = n();
            } else {
                if (((n = t()), null === o5)) throw Error(l(349));
                0 != (124 & o8) || af(r, t, n);
            }
            i.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
                (i.queue = a),
                aU(ap.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                aw(9, ax(), ah.bind(null, r, a, n, t), null),
                n
            );
        },
        useId: function () {
            var e = an(),
                t = o5.identifierPrefix;
            if (rF) {
                var n = rw,
                    r = rL;
                (t = "\xab" + t + "R" + (n = (r & ~(1 << (32 - eg(r) - 1))).toString(32) + n)),
                    0 < (n = iJ++) && (t += "H" + n.toString(32)),
                    (t += "\xbb");
            } else t = "\xab" + t + "r" + (n = i2++).toString(32) + "\xbb";
            return (e.memoizedState = t);
        },
        useHostTransitionStatus: aJ,
        useFormState: aN,
        useActionState: aN,
        useOptimistic: function (e) {
            var t = an();
            t.memoizedState = t.baseState = e;
            var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
            return (t.queue = n), (t = a5.bind(null, i$, !0, n)), (n.dispatch = t), [e, t];
        },
        useMemoCache: ao,
        useCacheRefresh: function () {
            return (an().memoizedState = a2.bind(null, i$));
        },
    },
    sn = {
        readContext: r5,
        use: as,
        useCallback: aY,
        useContext: r5,
        useEffect: aG,
        useImperativeHandle: aj,
        useInsertionEffect: aF,
        useLayoutEffect: aV,
        useMemo: aW,
        useReducer: au,
        useRef: aP,
        useState: function () {
            return au(al);
        },
        useDebugValue: aH,
        useDeferredValue: function (e, t) {
            return a$(ar(), iz.memoizedState, e, t);
        },
        useTransition: function () {
            var e = au(al)[0],
                t = ar().memoizedState;
            return ["boolean" == typeof e ? e : aa(e), t];
        },
        useSyncExternalStore: a_,
        useId: a0,
        useHostTransitionStatus: aJ,
        useFormState: aR,
        useActionState: aR,
        useOptimistic: function (e, t) {
            return aA(ar(), iz, e, t);
        },
        useMemoCache: ao,
        useCacheRefresh: a1,
    },
    sr = {
        readContext: r5,
        use: as,
        useCallback: aY,
        useContext: r5,
        useEffect: aG,
        useImperativeHandle: aj,
        useInsertionEffect: aF,
        useLayoutEffect: aV,
        useMemo: aW,
        useReducer: ad,
        useRef: aP,
        useState: function () {
            return ad(al);
        },
        useDebugValue: aH,
        useDeferredValue: function (e, t) {
            var n = ar();
            return null === iz ? aK(n, e, t) : a$(n, iz.memoizedState, e, t);
        },
        useTransition: function () {
            var e = ad(al)[0],
                t = ar().memoizedState;
            return ["boolean" == typeof e ? e : aa(e), t];
        },
        useSyncExternalStore: a_,
        useId: a0,
        useHostTransitionStatus: aJ,
        useFormState: aL,
        useActionState: aL,
        useOptimistic: function (e, t) {
            var n = ar();
            return null !== iz ? aA(n, iz, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: ao,
        useCacheRefresh: a1,
    },
    si = null,
    sa = 0;
function ss(e) {
    var t = sa;
    return (sa += 1), null === si && (si = []), iC(si, e, t);
}
function so(e, t) {
    e.ref = void 0 !== (t = t.props.ref) ? t : null;
}
function sl(e, t) {
    if (t.$$typeof === g) throw Error(l(525));
    throw Error(
        l(
            31,
            "[object Object]" === (e = Object.prototype.toString.call(t))
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
        ),
    );
}
function su(e) {
    return (0, e._init)(e._payload);
}
function sc(e) {
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
        return ((e = rE(e, t)).index = 0), (e.sibling = null), e;
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
        return null === t || 6 !== t.tag ? ((t = ry(n, e.mode, r)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function u(e, t, n, r) {
        var a = n.type;
        return a === I
            ? d(e, t, n.props.children, r, n.key)
            : (null !== t &&
              (t.elementType === a || ("object" == typeof a && null !== a && a.$$typeof === D && su(a) === t.type))
                  ? so((t = i(t, n.props)), n)
                  : so((t = rI(n.type, n.key, n.props, null, e.mode, r)), n),
              (t.return = e),
              t);
    }
    function c(e, t, n, r) {
        return (
            null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
                ? ((t = rS(n, e.mode, r)).return = e)
                : ((t = i(t, n.children || [])).return = e),
            t
        );
    }
    function d(e, t, n, r, a) {
        return null === t || 7 !== t.tag ? ((t = rT(n, e.mode, r, a)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function _(e, t, n) {
        if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
            return ((t = ry("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case E:
                    return so((n = rI(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n;
                case A:
                    return ((t = rS(t, e.mode, n)).return = e), t;
                case D:
                    return _(e, (t = (0, t._init)(t._payload)), n);
            }
            if (U(t) || P(t)) return ((t = rT(t, e.mode, n, null)).return = e), t;
            if ("function" == typeof t.then) return _(e, ss(t), n);
            if (t.$$typeof === C) return _(e, r7(e, t), n);
            sl(e, t);
        }
        return null;
    }
    function f(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if (("string" == typeof n && "" !== n) || "number" == typeof n || "bigint" == typeof n)
            return null !== i ? null : o(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case E:
                    return n.key === i ? u(e, t, n, r) : null;
                case A:
                    return n.key === i ? c(e, t, n, r) : null;
                case D:
                    return f(e, t, (n = (i = n._init)(n._payload)), r);
            }
            if (U(n) || P(n)) return null !== i ? null : d(e, t, n, r, null);
            if ("function" == typeof n.then) return f(e, t, ss(n), r);
            if (n.$$typeof === C) return f(e, t, r7(e, n), r);
            sl(e, n);
        }
        return null;
    }
    function h(e, t, n, r, i) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r)
            return o(t, (e = e.get(n) || null), "" + r, i);
        if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case E:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case A:
                    return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case D:
                    return h(e, t, n, (r = (0, r._init)(r._payload)), i);
            }
            if (U(r) || P(r)) return d(t, (e = e.get(n) || null), r, i, null);
            if ("function" == typeof r.then) return h(e, t, n, ss(r), i);
            if (r.$$typeof === C) return h(e, t, n, r7(t, r), i);
            sl(t, r);
        }
        return null;
    }
    function p(i, s, o, l) {
        for (var u = null, c = null, d = s, p = (s = 0), g = null; null !== d && p < o.length; p++) {
            d.index > p ? ((g = d), (d = null)) : (g = d.sibling);
            var E = f(i, d, o[p], l);
            if (null === E) {
                null === d && (d = g);
                break;
            }
            e && d && null === E.alternate && t(i, d),
                (s = a(E, s, p)),
                null === c ? (u = E) : (c.sibling = E),
                (c = E),
                (d = g);
        }
        if (p === o.length) return n(i, d), rF && rx(i, p), u;
        if (null === d) {
            for (; p < o.length; p++)
                null !== (d = _(i, o[p], l)) && ((s = a(d, s, p)), null === c ? (u = d) : (c.sibling = d), (c = d));
            return rF && rx(i, p), u;
        }
        for (d = r(d); p < o.length; p++)
            null !== (g = h(d, i, p, o[p], l)) &&
                (e && null !== g.alternate && d.delete(null === g.key ? p : g.key),
                (s = a(g, s, p)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
        return (
            e &&
                d.forEach(function (e) {
                    return t(i, e);
                }),
            rF && rx(i, p),
            u
        );
    }
    function g(i, s, o, u) {
        if (null == o) throw Error(l(151));
        for (
            var c = null, d = null, p = s, g = (s = 0), E = null, A = o.next();
            null !== p && !A.done;
            g++, A = o.next()
        ) {
            p.index > g ? ((E = p), (p = null)) : (E = p.sibling);
            var I = f(i, p, A.value, u);
            if (null === I) {
                null === p && (p = E);
                break;
            }
            e && p && null === I.alternate && t(i, p),
                (s = a(I, s, g)),
                null === d ? (c = I) : (d.sibling = I),
                (d = I),
                (p = E);
        }
        if (A.done) return n(i, p), rF && rx(i, g), c;
        if (null === p) {
            for (; !A.done; g++, A = o.next())
                null !== (A = _(i, A.value, u)) && ((s = a(A, s, g)), null === d ? (c = A) : (d.sibling = A), (d = A));
            return rF && rx(i, g), c;
        }
        for (p = r(p); !A.done; g++, A = o.next())
            null !== (A = h(p, i, g, A.value, u)) &&
                (e && null !== A.alternate && p.delete(null === A.key ? g : A.key),
                (s = a(A, s, g)),
                null === d ? (c = A) : (d.sibling = A),
                (d = A));
        return (
            e &&
                p.forEach(function (e) {
                    return t(i, e);
                }),
            rF && rx(i, g),
            c
        );
    }
    function T(e, r, a, o) {
        if (
            ("object" == typeof a && null !== a && a.type === I && null === a.key && (a = a.props.children),
            "object" == typeof a && null !== a)
        ) {
            switch (a.$$typeof) {
                case E:
                    e: {
                        for (var u = a.key; null !== r; ) {
                            if (r.key === u) {
                                if ((u = a.type) === I) {
                                    if (7 === r.tag) {
                                        n(e, r.sibling), ((o = i(r, a.props.children)).return = e), (e = o);
                                        break e;
                                    }
                                } else if (
                                    r.elementType === u ||
                                    ("object" == typeof u && null !== u && u.$$typeof === D && su(u) === r.type)
                                ) {
                                    n(e, r.sibling), so((o = i(r, a.props)), a), (o.return = e), (e = o);
                                    break e;
                                }
                                n(e, r);
                                break;
                            }
                            t(e, r), (r = r.sibling);
                        }
                        a.type === I
                            ? ((o = rT(a.props.children, e.mode, o, a.key)).return = e)
                            : (so((o = rI(a.type, a.key, a.props, null, e.mode, o)), a), (o.return = e)),
                            (e = o);
                    }
                    return s(e);
                case A:
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
                        ((o = rS(a, e.mode, o)).return = e), (e = o);
                    }
                    return s(e);
                case D:
                    return T(e, r, (a = (u = a._init)(a._payload)), o);
            }
            if (U(a)) return p(e, r, a, o);
            if (P(a)) {
                if ("function" != typeof (u = P(a))) throw Error(l(150));
                return g(e, r, (a = u.call(a)), o);
            }
            if ("function" == typeof a.then) return T(e, r, ss(a), o);
            if (a.$$typeof === C) return T(e, r, r7(e, a), o);
            sl(e, a);
        }
        return ("string" == typeof a && "" !== a) || "number" == typeof a || "bigint" == typeof a
            ? ((a = "" + a),
              null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((o = i(r, a)).return = e))
                  : (n(e, r), ((o = ry(a, e.mode, o)).return = e)),
              s((e = o)))
            : n(e, r);
    }
    return function (e, t, n, r) {
        try {
            sa = 0;
            var i = T(e, t, n, r);
            return (si = null), i;
        } catch (t) {
            if (t === iA || t === iT) throw t;
            var a = rm(29, t, null, e.mode);
            return (a.lanes = r), (a.return = e), a;
        } finally {
        }
    };
}
var sd = sc(!0),
    s_ = sc(!1),
    sf = H(null),
    sh = null;
function sp(e) {
    var t = e.alternate;
    W(sA, 1 & sA.current),
        W(sf, e),
        null === sh && (null === t || null !== iB.current ? (sh = e) : null !== t.memoizedState && (sh = e));
}
function sm(e) {
    if (22 === e.tag) {
        if ((W(sA, sA.current), W(sf, e), null === sh)) {
            var t = e.alternate;
            null !== t && null !== t.memoizedState && (sh = e);
        }
    } else sg(e);
}
function sg() {
    W(sA, sA.current), W(sf, sf.current);
}
function sE(e) {
    Y(sf), sh === e && (sh = null), Y(sA);
}
var sA = H(0);
function sI(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || u7(n))) return t;
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
function sT(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : p({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var sy = {
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = lN(),
            i = iw(r);
        (i.payload = t), null != n && (i.callback = n), null !== (t = ix(e, i, r)) && (lO(t, e, r), iP(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = lN(),
            i = iw(r);
        (i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = ix(e, i, r)) && (lO(t, e, r), iP(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = lN(),
            r = iw(n);
        (r.tag = 2), null != t && (r.callback = t), null !== (t = ix(e, r, n)) && (lO(t, e, n), iP(t, e, n));
    },
};
function sS(e, t, n, r, i, a, s) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, s)
        : !t.prototype || !t.prototype.isPureReactComponent || !nV(n, r) || !nV(i, a);
}
function sv(e, t, n, r) {
    (e = t.state),
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && sy.enqueueReplaceState(t, t.state, null);
}
function sC(e, t) {
    var n = t;
    if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
    if ((e = e.defaultProps)) for (var i in (n === t && (n = p({}, n)), e)) void 0 === n[i] && (n[i] = e[i]);
    return n;
}
var sb =
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
function sN(e) {
    sb(e);
}
function sR(e) {
    console.error(e);
}
function sO(e) {
    sb(e);
}
function sD(e, t) {
    try {
        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function sL(e, t, n) {
    try {
        (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function sw(e, t, n) {
    return (
        ((n = iw(n)).tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
            sD(e, t);
        }),
        n
    );
}
function sx(e) {
    return ((e = iw(e)).tag = 3), e;
}
function sP(e, t, n, r) {
    var i = n.type.getDerivedStateFromError;
    if ("function" == typeof i) {
        var a = r.value;
        (e.payload = function () {
            return i(a);
        }),
            (e.callback = function () {
                sL(t, n, r);
            });
    }
    var s = n.stateNode;
    null !== s &&
        "function" == typeof s.componentDidCatch &&
        (e.callback = function () {
            sL(t, n, r), "function" != typeof i && (null === lg ? (lg = new Set([this])) : lg.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
        });
}
function sM(e, t, n, r, i) {
    if (((n.flags |= 32768), null !== r && "object" == typeof r && "function" == typeof r.then)) {
        if ((null !== (t = n.alternate) && r3(t, n, i, !0), null !== (n = sf.current))) {
            switch (n.tag) {
                case 13:
                    return (
                        null === sh ? lV() : null === n.alternate && 0 === la && (la = 3),
                        (n.flags &= -257),
                        (n.flags |= 65536),
                        (n.lanes = i),
                        r === iy
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r), l4(e, r, i)),
                        !1
                    );
                case 22:
                    return (
                        (n.flags |= 65536),
                        r === iy
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                  ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }),
                                    (n.updateQueue = t))
                                  : null === (n = t.retryQueue)
                                    ? (t.retryQueue = new Set([r]))
                                    : n.add(r),
                              l4(e, r, i)),
                        !1
                    );
            }
            throw Error(l(435, n.tag));
        }
        return l4(e, r, i), lV(), !1;
    }
    if (rF)
        return (
            null !== (t = sf.current)
                ? (0 == (65536 & t.flags) && (t.flags |= 256),
                  (t.flags |= 65536),
                  (t.lanes = i),
                  r !== rj && rq(ri((e = Error(l(422), { cause: r })), n)))
                : (r !== rj && rq(ri((t = Error(l(423), { cause: r })), n)),
                  (e = e.current.alternate),
                  (e.flags |= 65536),
                  (i &= -i),
                  (e.lanes |= i),
                  (r = ri(r, n)),
                  (i = sw(e.stateNode, r, i)),
                  iM(e, i),
                  4 !== la && (la = 2)),
            !1
        );
    var a = Error(l(520), { cause: r });
    if (((a = ri(a, n)), null === ld ? (ld = [a]) : ld.push(a), 4 !== la && (la = 2), null === t)) return !0;
    (r = ri(r, n)), (n = t);
    do {
        switch (n.tag) {
            case 3:
                return (n.flags |= 65536), (e = i & -i), (n.lanes |= e), (e = sw(n.stateNode, r, e)), iM(n, e), !1;
            case 1:
                if (
                    ((t = n.type),
                    (a = n.stateNode),
                    0 == (128 & n.flags) &&
                        ("function" == typeof t.getDerivedStateFromError ||
                            (null !== a && "function" == typeof a.componentDidCatch && (null === lg || !lg.has(a)))))
                )
                    return (n.flags |= 65536), (i &= -i), (n.lanes |= i), sP((i = sx(i)), e, n, r), iM(n, i), !1;
        }
        n = n.return;
    } while (null !== n);
    return !1;
}
var sk = Error(l(461)),
    sU = !1;
function sG(e, t, n, r) {
    t.child = null === e ? s_(t, null, n, r) : sd(t, e.child, n, r);
}
function sF(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    if ("ref" in r) {
        var s = {};
        for (var o in r) "ref" !== o && (s[o] = r[o]);
    } else s = r;
    return (r4(t), (r = i4(e, t, n, s, a, i)), (o = i9()), null === e || sU)
        ? (rF && o && rM(t), (t.flags |= 1), sG(e, t, r, i), t.child)
        : (ae(e, t, i), s4(e, t, i));
}
function sV(e, t, n, r, i) {
    if (null === e) {
        var a = n.type;
        return "function" != typeof a || rg(a) || void 0 !== a.defaultProps || null !== n.compare
            ? (((e = rI(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = a), sB(e, t, a, r, i));
    }
    if (((a = e.child), !s5(e, i))) {
        var s = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nV)(s, r) && e.ref === t.ref) return s4(e, t, i);
    }
    return (t.flags |= 1), ((e = rE(a, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function sB(e, t, n, r, i) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (nV(a, r) && e.ref === t.ref)
            if (((sU = !1), (t.pendingProps = r = a), !s5(e, i))) return (t.lanes = e.lanes), s4(e, t, i);
            else 0 != (131072 & e.flags) && (sU = !0);
    }
    return sW(e, t, n, r, i);
}
function sj(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        a = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode) {
        if (0 != (128 & t.flags)) {
            if (((r = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (a = 0, i = t.child = e.child; null !== i; ) (a = a | i.lanes | i.childLanes), (i = i.sibling);
                t.childLanes = a & ~r;
            } else (t.childLanes = 0), (t.child = null);
            return sH(e, t, r, n);
        }
        if (0 == (0x20000000 & n))
            return (t.lanes = t.childLanes = 0x20000000), sH(e, t, null !== a ? a.baseLanes | n : n, n);
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
            null !== e && ig(t, null !== a ? a.cachePool : null),
            null !== a ? iH(t, a) : iY(),
            sm(t);
    } else
        null !== a
            ? (ig(t, a.cachePool), iH(t, a), sg(t), (t.memoizedState = null))
            : (null !== e && ig(t, null), iY(), sg(t));
    return sG(e, t, i, n), t.child;
}
function sH(e, t, n, r) {
    var i = im();
    return (
        (t.memoizedState = {
            baseLanes: n,
            cachePool: (i = null === i ? null : { parent: ir._currentValue, pool: i }),
        }),
        null !== e && ig(t, null),
        iY(),
        sm(t),
        null !== e && r3(e, t, r, !0),
        null
    );
}
function sY(e, t) {
    var n = t.ref;
    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
    else {
        if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
        (null === e || e.ref !== n) && (t.flags |= 4194816);
    }
}
function sW(e, t, n, r, i) {
    return (r4(t), (n = i4(e, t, n, r, void 0, i)), (r = i9()), null === e || sU)
        ? (rF && r && rM(t), (t.flags |= 1), sG(e, t, n, i), t.child)
        : (ae(e, t, i), s4(e, t, i));
}
function sK(e, t, n, r, i, a) {
    return (r4(t), (t.updateQueue = null), (n = i7(t, r, n, i)), i5(e), (r = i9()), null === e || sU)
        ? (rF && r && rM(t), (t.flags |= 1), sG(e, t, n, a), t.child)
        : (ae(e, t, a), s4(e, t, a));
}
function s$(e, t, n, r, i) {
    if ((r4(t), null === t.stateNode)) {
        var a = rh,
            s = n.contextType;
        "object" == typeof s && null !== s && (a = r5(s)),
            (t.memoizedState = null !== (a = new n(r, a)).state && void 0 !== a.state ? a.state : null),
            (a.updater = sy),
            (t.stateNode = a),
            (a._reactInternals = t),
            ((a = t.stateNode).props = r),
            (a.state = t.memoizedState),
            (a.refs = {}),
            iD(t),
            (s = n.contextType),
            (a.context = "object" == typeof s && null !== s ? r5(s) : rh),
            (a.state = t.memoizedState),
            "function" == typeof (s = n.getDerivedStateFromProps) && (sT(t, n, s, r), (a.state = t.memoizedState)),
            "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount) ||
                ((s = a.state),
                "function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                s !== a.state && sy.enqueueReplaceState(a, a.state, null),
                iG(t, r, a, i),
                iU(),
                (a.state = t.memoizedState)),
            "function" == typeof a.componentDidMount && (t.flags |= 4194308),
            (r = !0);
    } else if (null === e) {
        a = t.stateNode;
        var o = t.memoizedProps,
            l = sC(n, o);
        a.props = l;
        var u = a.context,
            c = n.contextType;
        (s = rh), "object" == typeof c && null !== c && (s = r5(c));
        var d = n.getDerivedStateFromProps;
        (c = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate),
            (o = t.pendingProps !== o),
            c ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                ((o || u !== s) && sv(t, a, r, s)),
            (iO = !1);
        var _ = t.memoizedState;
        (a.state = _),
            iG(t, r, a, i),
            iU(),
            (u = t.memoizedState),
            o || _ !== u || iO
                ? ("function" == typeof d && (sT(t, n, d, r), (u = t.memoizedState)),
                  (l = iO || sS(t, n, l, r, _, u, s))
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
            iL(e, t),
            (c = sC(n, (s = t.memoizedProps))),
            (a.props = c),
            (d = t.pendingProps),
            (_ = a.context),
            (u = n.contextType),
            (l = rh),
            "object" == typeof u && null !== u && (l = r5(u)),
            (u =
                "function" == typeof (o = n.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof a.componentWillReceiveProps) ||
                ((s !== d || _ !== l) && sv(t, a, r, l)),
            (iO = !1),
            (_ = t.memoizedState),
            (a.state = _),
            iG(t, r, a, i),
            iU();
        var f = t.memoizedState;
        s !== d || _ !== f || iO || (null !== e && null !== e.dependencies && r6(e.dependencies))
            ? ("function" == typeof o && (sT(t, n, o, r), (f = t.memoizedState)),
              (c = iO || sS(t, n, c, r, _, f, l) || (null !== e && null !== e.dependencies && r6(e.dependencies)))
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
        sY(e, t),
        (r = 0 != (128 & t.flags)),
        a || r
            ? ((a = t.stateNode),
              (n = r && "function" != typeof n.getDerivedStateFromError ? null : a.render()),
              (t.flags |= 1),
              null !== e && r ? ((t.child = sd(t, e.child, null, i)), (t.child = sd(t, null, n, i))) : sG(e, t, n, i),
              (t.memoizedState = a.state),
              (e = t.child))
            : (e = s4(e, t, i)),
        e
    );
}
function sz(e, t, n, r) {
    return r$(), (t.flags |= 256), sG(e, t, n, r), t.child;
}
var sq = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
function sX(e) {
    return { baseLanes: e, cachePool: iE() };
}
function sZ(e, t, n) {
    return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= lu), e;
}
function sQ(e, t, n) {
    var r,
        i = t.pendingProps,
        a = !1,
        s = 0 != (128 & t.flags);
    if (
        ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & sA.current)),
        r && ((a = !0), (t.flags &= -129)),
        (r = 0 != (32 & t.flags)),
        (t.flags &= -33),
        null === e)
    ) {
        if (rF) {
            if ((a ? sp(t) : sg(t), rF)) {
                var o,
                    u = rG;
                if ((o = u)) {
                    s: {
                        for (o = u, u = rB; 8 !== o.nodeType; )
                            if (!u || null === (o = u9(o.nextSibling))) {
                                u = null;
                                break s;
                            }
                        u = o;
                    }
                    null !== u
                        ? ((t.memoizedState = {
                              dehydrated: u,
                              treeContext: null !== rD ? { id: rL, overflow: rw } : null,
                              retryLane: 0x20000000,
                              hydrationErrors: null,
                          }),
                          ((o = rm(18, null, null, 0)).stateNode = u),
                          (o.return = t),
                          (t.child = o),
                          (rU = t),
                          (rG = null),
                          (o = !0))
                        : (o = !1);
                }
                o || rH(t);
            }
            if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                return u7(u) ? (t.lanes = 32) : (t.lanes = 0x20000000), null;
            sE(t);
        }
        return ((u = i.children), (i = i.fallback), a)
            ? (sg(t),
              (u = s0({ mode: "hidden", children: u }, (a = t.mode))),
              (i = rT(i, a, n, null)),
              (u.return = t),
              (i.return = t),
              (u.sibling = i),
              (t.child = u),
              ((a = t.child).memoizedState = sX(n)),
              (a.childLanes = sZ(e, r, n)),
              (t.memoizedState = sq),
              i)
            : (sp(t), sJ(t, u));
    }
    if (null !== (o = e.memoizedState) && null !== (u = o.dehydrated)) {
        if (s)
            256 & t.flags
                ? (sp(t), (t.flags &= -257), (t = s1(e, t, n)))
                : null !== t.memoizedState
                  ? (sg(t), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (sg(t),
                    (a = i.fallback),
                    (u = t.mode),
                    (i = s0({ mode: "visible", children: i.children }, u)),
                    (a = rT(a, u, n, null)),
                    (a.flags |= 2),
                    (i.return = t),
                    (a.return = t),
                    (i.sibling = a),
                    (t.child = i),
                    sd(t, e.child, null, n),
                    ((i = t.child).memoizedState = sX(n)),
                    (i.childLanes = sZ(e, r, n)),
                    (t.memoizedState = sq),
                    (t = a));
        else if ((sp(t), u7(u))) {
            if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
            (r = c),
                ((i = Error(l(419))).stack = ""),
                (i.digest = r),
                rq({ value: i, source: null, stack: null }),
                (t = s1(e, t, n));
        } else if ((sU || r3(e, t, n, !1), (r = 0 != (n & e.childLanes)), sU || r)) {
            if (
                null !== (r = o5) &&
                0 !== (i = 0 != ((i = 0 != (42 & (i = n & -n)) ? 1 : eP(i)) & (r.suspendedLanes | n)) ? 0 : i) &&
                i !== o.retryLane
            )
                throw ((o.retryLane = i), rd(e, i), lO(r, e, i), sk);
            "$?" === u.data || lV(), (t = s1(e, t, n));
        } else
            "$?" === u.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = o.treeContext),
                  (rG = u9(u.nextSibling)),
                  (rU = t),
                  (rF = !0),
                  (rV = null),
                  (rB = !1),
                  null !== e &&
                      ((rR[rO++] = rL), (rR[rO++] = rw), (rR[rO++] = rD), (rL = e.id), (rw = e.overflow), (rD = t)),
                  (t = sJ(t, i.children)),
                  (t.flags |= 4096));
        return t;
    }
    return a
        ? (sg(t),
          (a = i.fallback),
          (u = t.mode),
          (c = (o = e.child).sibling),
          ((i = rE(o, { mode: "hidden", children: i.children })).subtreeFlags = 0x3e00000 & o.subtreeFlags),
          null !== c ? (a = rE(c, a)) : ((a = rT(a, u, n, null)), (a.flags |= 2)),
          (a.return = t),
          (i.return = t),
          (i.sibling = a),
          (t.child = i),
          (i = a),
          (a = t.child),
          null === (u = e.child.memoizedState)
              ? (u = sX(n))
              : (null !== (o = u.cachePool)
                    ? ((c = ir._currentValue), (o = o.parent !== c ? { parent: c, pool: c } : o))
                    : (o = iE()),
                (u = { baseLanes: u.baseLanes | n, cachePool: o })),
          (a.memoizedState = u),
          (a.childLanes = sZ(e, r, n)),
          (t.memoizedState = sq),
          i)
        : (sp(t),
          (e = (n = e.child).sibling),
          ((n = rE(n, { mode: "visible", children: i.children })).return = t),
          (n.sibling = null),
          null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
}
function sJ(e, t) {
    return ((t = s0({ mode: "visible", children: t }, e.mode)).return = e), (e.child = t);
}
function s0(e, t) {
    return (
        ((e = rm(22, e, null, t)).lanes = 0),
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        e
    );
}
function s1(e, t, n) {
    return sd(t, e.child, null, n), (e = sJ(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function s2(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), r1(e.return, t, n);
}
function s3(e, t, n, r, i) {
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
function s6(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
    if ((sG(e, t, r.children, n), 0 != (2 & (r = sA.current)))) (r = (1 & r) | 2), (t.flags |= 128);
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && s2(e, n, t);
                else if (19 === e.tag) s2(e, n, t);
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
    switch ((W(sA, r), i)) {
        case "forwards":
            for (i = null, n = t.child; null !== n; )
                null !== (e = n.alternate) && null === sI(e) && (i = n), (n = n.sibling);
            null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                s3(t, !1, i, n, a);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === sI(e)) {
                    t.child = i;
                    break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
            }
            s3(t, !0, n, null, a);
            break;
        case "together":
            s3(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null;
    }
    return t.child;
}
function s4(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (ls |= t.lanes), 0 == (n & t.childLanes))) {
        if (null === e) return null;
        else if ((r3(e, t, n, !1), 0 == (n & t.childLanes))) return null;
    }
    if (null !== e && t.child !== e.child) throw Error(l(153));
    if (null !== t.child) {
        for (n = rE((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = rE(e, e.pendingProps)).return = t);
        n.sibling = null;
    }
    return t.child;
}
function s5(e, t) {
    return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && r6(e));
}
function s7(e, t, n) {
    switch (t.tag) {
        case 3:
            X(t, t.stateNode.containerInfo), rJ(t, ir, e.memoizedState.cache), r$();
            break;
        case 27:
        case 5:
            Q(t);
            break;
        case 4:
            X(t, t.stateNode.containerInfo);
            break;
        case 10:
            rJ(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var r = t.memoizedState;
            if (null !== r) {
                if (null !== r.dehydrated) return sp(t), (t.flags |= 128), null;
                if (0 != (n & t.child.childLanes)) return sQ(e, t, n);
                return sp(t), null !== (e = s4(e, t, n)) ? e.sibling : null;
            }
            sp(t);
            break;
        case 19:
            var i = 0 != (128 & e.flags);
            if (((r = 0 != (n & t.childLanes)) || (r3(e, t, n, !1), (r = 0 != (n & t.childLanes))), i)) {
                if (r) return s6(e, t, n);
                t.flags |= 128;
            }
            if (
                (null !== (i = t.memoizedState) && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                W(sA, sA.current),
                !r)
            )
                return null;
            break;
        case 22:
        case 23:
            return (t.lanes = 0), sj(e, t, n);
        case 24:
            rJ(t, ir, e.memoizedState.cache);
    }
    return s4(e, t, n);
}
function s8(e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps) sU = !0;
        else {
            if (!s5(e, n) && 0 == (128 & t.flags)) return (sU = !1), s7(e, t, n);
            sU = 0 != (131072 & e.flags);
        }
    else (sU = !1), rF && 0 != (1048576 & t.flags) && rP(t, rN, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 16:
            e: {
                e = t.pendingProps;
                var r = t.elementType,
                    i = r._init;
                if (((r = i(r._payload)), (t.type = r), "function" == typeof r))
                    rg(r)
                        ? ((e = sC(r, e)), (t.tag = 1), (t = s$(null, t, r, e, n)))
                        : ((t.tag = 0), (t = sW(null, t, r, e, n)));
                else {
                    if (null != r) {
                        if ((i = r.$$typeof) === b) {
                            (t.tag = 11), (t = sF(null, t, r, e, n));
                            break e;
                        } else if (i === O) {
                            (t.tag = 14), (t = sV(null, t, r, e, n));
                            break e;
                        }
                    }
                    throw Error(l(306, (t = k(r) || r), ""));
                }
            }
            return t;
        case 0:
            return sW(e, t, t.type, t.pendingProps, n);
        case 1:
            return (i = sC((r = t.type), t.pendingProps)), s$(e, t, r, i, n);
        case 3:
            e: {
                if ((X(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                (i = a.element), iL(e, t), iG(t, r, null, n);
                var s = t.memoizedState;
                if (
                    (rJ(t, ir, (r = s.cache)),
                    r !== a.cache && r2(t, [ir], n, !0),
                    iU(),
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
                        rq((i = ri(Error(l(424)), t))), (t = sz(e, t, r, n));
                        break e;
                    } else
                        for (
                            rG = u9(
                                (e =
                                    9 === (e = t.stateNode.containerInfo).nodeType
                                        ? e.body
                                        : "HTML" === e.nodeName
                                          ? e.ownerDocument.body
                                          : e).firstChild,
                            ),
                                rU = t,
                                rF = !0,
                                rV = null,
                                rB = !0,
                                n = s_(t, null, r, n),
                                t.child = n;
                            n;
                        )
                            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                else {
                    if ((r$(), r === i)) {
                        t = s4(e, t, n);
                        break e;
                    }
                    sG(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 26:
            return (
                sY(e, t),
                null === e
                    ? (n = cg(t.type, null, t.pendingProps, null))
                        ? (t.memoizedState = n)
                        : rF ||
                          ((n = t.type),
                          (e = t.pendingProps),
                          ((r = uW(z.current).createElement(n))[eF] = t),
                          (r[eV] = e),
                          uB(r, n, e),
                          eQ(r),
                          (t.stateNode = r))
                    : (t.memoizedState = cg(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                null
            );
        case 27:
            return (
                Q(t),
                null === e &&
                    rF &&
                    ((r = t.stateNode = cn(t.type, t.pendingProps, z.current)),
                    (rU = t),
                    (rB = !0),
                    (i = rG),
                    u2(t.type) ? ((ce = i), (rG = u9(r.firstChild))) : (rG = i)),
                sG(e, t, t.pendingProps.children, n),
                sY(e, t),
                null === e && (t.flags |= 4194304),
                t.child
            );
        case 5:
            return (
                null === e &&
                    rF &&
                    ((i = r = rG) &&
                        (null !== (r = u4(r, t.type, t.pendingProps, rB))
                            ? ((t.stateNode = r), (rU = t), (rG = u9(r.firstChild)), (rB = !1), (i = !0))
                            : (i = !1)),
                    i || rH(t)),
                Q(t),
                (i = t.type),
                (a = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (r = a.children),
                uz(i, a) ? (r = null) : null !== s && uz(i, s) && (t.flags |= 32),
                null !== t.memoizedState && (cB._currentValue = i = i4(e, t, i8, null, null, n)),
                sY(e, t),
                sG(e, t, r, n),
                t.child
            );
        case 6:
            return (
                null === e &&
                    rF &&
                    ((e = n = rG) &&
                        (null !== (n = u5(n, t.pendingProps, rB))
                            ? ((t.stateNode = n), (rU = t), (rG = null), (e = !0))
                            : (e = !1)),
                    e || rH(t)),
                null
            );
        case 13:
            return sQ(e, t, n);
        case 4:
            return (
                X(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = sd(t, null, r, n)) : sG(e, t, r, n),
                t.child
            );
        case 11:
            return sF(e, t, t.type, t.pendingProps, n);
        case 7:
            return sG(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return sG(e, t, t.pendingProps.children, n), t.child;
        case 10:
            return (r = t.pendingProps), rJ(t, t.type, r.value), sG(e, t, r.children, n), t.child;
        case 9:
            return (
                (i = t.type._context),
                (r = t.pendingProps.children),
                r4(t),
                (r = r((i = r5(i)))),
                (t.flags |= 1),
                sG(e, t, r, n),
                t.child
            );
        case 14:
            return sV(e, t, t.type, t.pendingProps, n);
        case 15:
            return sB(e, t, t.type, t.pendingProps, n);
        case 19:
            return s6(e, t, n);
        case 31:
            return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e ? ((n = s0(r, n)).ref = t.ref) : ((n = rE(e.child, r)).ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n)
            );
        case 22:
            return sj(e, t, n);
        case 24:
            return (
                r4(t),
                (r = r5(ir)),
                null === e
                    ? (null === (i = im()) &&
                          ((i = o5),
                          (a = ii()),
                          (i.pooledCache = a),
                          a.refCount++,
                          null !== a && (i.pooledCacheLanes |= n),
                          (i = a)),
                      (t.memoizedState = { parent: r, cache: i }),
                      iD(t),
                      rJ(t, ir, i))
                    : (0 != (e.lanes & n) && (iL(e, t), iG(t, null, null, n), iU()),
                      (i = e.memoizedState),
                      (a = t.memoizedState),
                      i.parent !== r
                          ? ((i = { parent: r, cache: r }),
                            (t.memoizedState = i),
                            0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i),
                            rJ(t, ir, r))
                          : (rJ(t, ir, (r = a.cache)), r !== i.cache && r2(t, [ir], n, !0))),
                sG(e, t, t.pendingProps.children, n),
                t.child
            );
        case 29:
            throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
}
function s9(e) {
    e.flags |= 4;
}
function oe(e, t) {
    if ("stylesheet" !== t.type || 0 != (4 & t.state.loading)) e.flags &= -0x1000001;
    else if (((e.flags |= 0x1000000), !cw(t))) {
        if (
            null !== (t = sf.current) &&
            ((4194048 & o8) === o8 ? null !== sh : ((0x3c00000 & o8) !== o8 && 0 == (0x20000000 & o8)) || t !== sh)
        )
            throw ((ib = iy), iI);
        e.flags |= 8192;
    }
}
function ot(e, t) {
    null !== t && (e.flags |= 4),
        16384 & e.flags && ((t = 22 !== e.tag ? eR() : 0x20000000), (e.lanes |= t), (lc |= t));
}
function on(e, t) {
    if (!rF)
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
function or(e) {
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
function oi(e, t, n) {
    var r = t.pendingProps;
    switch ((rk(t), t.tag)) {
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
            return or(t), null;
        case 3:
            return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                r0(ir),
                Z(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null === e || null === e.child) &&
                    (rK(t)
                        ? s9(t)
                        : null === e ||
                          (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                          ((t.flags |= 1024), rz())),
                or(t),
                null
            );
        case 26:
            return (
                (n = t.memoizedState),
                null === e
                    ? (s9(t), null !== n ? (or(t), oe(t, n)) : (or(t), (t.flags &= -0x1000001)))
                    : n
                      ? n !== e.memoizedState
                          ? (s9(t), or(t), oe(t, n))
                          : (or(t), (t.flags &= -0x1000001))
                      : (e.memoizedProps !== r && s9(t), or(t), (t.flags &= -0x1000001)),
                null
            );
        case 27:
            J(t), (n = z.current);
            var i = t.type;
            if (null !== e && null != t.stateNode) e.memoizedProps !== r && s9(t);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(l(166));
                    return or(t), null;
                }
                (e = K.current), rK(t) ? rY(t, e) : ((e = cn(i, r, n)), (t.stateNode = e), s9(t));
            }
            return or(t), null;
        case 5:
            if ((J(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && s9(t);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(l(166));
                    return or(t), null;
                }
                if (((e = K.current), rK(t))) rY(t, e);
                else {
                    switch (((i = uW(z.current)), e)) {
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
                    (e[eF] = t), (e[eV] = r);
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
                    switch (((t.stateNode = e), uB(e, n, r), n)) {
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
                    e && s9(t);
                }
            }
            return or(t), (t.flags &= -0x1000001), null;
        case 6:
            if (e && null != t.stateNode) e.memoizedProps !== r && s9(t);
            else {
                if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                if (((e = z.current), rK(t))) {
                    if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (i = rU)))
                        switch (i.tag) {
                            case 27:
                            case 5:
                                r = i.memoizedProps;
                        }
                    (e[eF] = t),
                        (e = !!(
                            e.nodeValue === n ||
                            (null !== r && !0 === r.suppressHydrationWarning) ||
                            uU(e.nodeValue, n)
                        )) || rH(t);
                } else ((e = uW(e).createTextNode(r))[eF] = t), (t.stateNode = e);
            }
            return or(t), null;
        case 13:
            if (
                ((r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
                if (((i = rK(t)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                        if (!i) throw Error(l(318));
                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                        i[eF] = t;
                    } else r$(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                    or(t), (i = !1);
                } else
                    (i = rz()),
                        null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = i),
                        (i = !0);
                if (!i) {
                    if (256 & t.flags) return sE(t), t;
                    return sE(t), null;
                }
            }
            if ((sE(t), 0 != (128 & t.flags))) return (t.lanes = n), t;
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
            return n !== e && n && (t.child.flags |= 8192), ot(t, t.updateQueue), or(t), null;
        case 4:
            return Z(), null === e && uN(t.stateNode.containerInfo), or(t), null;
        case 10:
            return r0(t.type), or(t), null;
        case 19:
            if ((Y(sA), null === (i = t.memoizedState))) return or(t), null;
            if (((r = 0 != (128 & t.flags)), null === (a = i.rendering)))
                if (r) on(i, !1);
                else {
                    if (0 !== la || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                            if (null !== (a = sI(e))) {
                                for (
                                    t.flags |= 128,
                                        on(i, !1),
                                        e = a.updateQueue,
                                        t.updateQueue = e,
                                        ot(t, e),
                                        t.subtreeFlags = 0,
                                        e = n,
                                        n = t.child;
                                    null !== n;
                                )
                                    rA(n, e), (n = n.sibling);
                                return W(sA, (1 & sA.current) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    null !== i.tail && ea() > lp && ((t.flags |= 128), (r = !0), on(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (null !== (e = sI(a))) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (e = e.updateQueue),
                            (t.updateQueue = e),
                            ot(t, e),
                            on(i, !0),
                            null === i.tail && "hidden" === i.tailMode && !a.alternate && !rF)
                        )
                            return or(t), null;
                    } else
                        2 * ea() - i.renderingStartTime > lp &&
                            0x20000000 !== n &&
                            ((t.flags |= 128), (r = !0), on(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : (null !== (e = i.last) ? (e.sibling = a) : (t.child = a), (i.last = a));
            }
            if (null !== i.tail)
                return (
                    (t = i.tail),
                    (i.rendering = t),
                    (i.tail = t.sibling),
                    (i.renderingStartTime = ea()),
                    (t.sibling = null),
                    (e = sA.current),
                    W(sA, r ? (1 & e) | 2 : 1 & e),
                    t
                );
            return or(t), null;
        case 22:
        case 23:
            return (
                sE(t),
                iW(),
                (r = null !== t.memoizedState),
                null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                r
                    ? 0 != (0x20000000 & n) && 0 == (128 & t.flags) && (or(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                    : or(t),
                null !== (n = t.updateQueue) && ot(t, n.retryQueue),
                (n = null),
                null !== e &&
                    null !== e.memoizedState &&
                    null !== e.memoizedState.cachePool &&
                    (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && Y(ip),
                null
            );
        case 24:
            return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                r0(ir),
                or(t),
                null
            );
        case 25:
        case 30:
            return null;
    }
    throw Error(l(156, t.tag));
}
function oa(e, t) {
    switch ((rk(t), t.tag)) {
        case 1:
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 3:
            return (
                r0(ir), Z(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
        case 26:
        case 27:
        case 5:
            return J(t), null;
        case 13:
            if ((sE(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(l(340));
                r$();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 19:
            return Y(sA), null;
        case 4:
            return Z(), null;
        case 10:
            return r0(t.type), null;
        case 22:
        case 23:
            return sE(t), iW(), null !== e && Y(ip), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
        case 24:
            return r0(ir), null;
        default:
            return null;
    }
}
function os(e, t) {
    switch ((rk(t), t.tag)) {
        case 3:
            r0(ir), Z();
            break;
        case 26:
        case 27:
        case 5:
            J(t);
            break;
        case 4:
            Z();
            break;
        case 13:
            sE(t);
            break;
        case 19:
            Y(sA);
            break;
        case 10:
            r0(t.type);
            break;
        case 22:
        case 23:
            sE(t), iW(), null !== e && Y(ip);
            break;
        case 24:
            r0(ir);
    }
}
function oo(e, t) {
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
        l6(t, t.return, e);
    }
}
function ol(e, t, n) {
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
                            l6(i, l, e);
                        }
                    }
                }
                r = r.next;
            } while (r !== a);
        }
    } catch (e) {
        l6(t, t.return, e);
    }
}
function ou(e) {
    var t = e.updateQueue;
    if (null !== t) {
        var n = e.stateNode;
        try {
            iV(t, n);
        } catch (t) {
            l6(e, e.return, t);
        }
    }
}
function oc(e, t, n) {
    (n.props = sC(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
        n.componentWillUnmount();
    } catch (n) {
        l6(e, t, n);
    }
}
function od(e, t) {
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
        l6(e, t, n);
    }
}
function o_(e, t) {
    var n = e.ref,
        r = e.refCleanup;
    if (null !== n)
        if ("function" == typeof r)
            try {
                r();
            } catch (n) {
                l6(e, t, n);
            } finally {
                (e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null);
            }
        else if ("function" == typeof n)
            try {
                n(null);
            } catch (n) {
                l6(e, t, n);
            }
        else n.current = null;
}
function of(e) {
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
        l6(e, e.return, t);
    }
}
function oh(e, t, n) {
    try {
        var r = e.stateNode;
        uj(r, e.type, n, t), (r[eV] = t);
    } catch (t) {
        l6(e, e.return, t);
    }
}
function op(e) {
    return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && u2(e.type)) || 4 === e.tag;
}
function om(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || op(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if ((27 === e.tag && u2(e.type)) || 2 & e.flags || null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function og(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
        (e = e.stateNode),
            t
                ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t)
                : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = uG));
    else if (4 !== r && (27 === r && u2(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child)))
        for (og(e, t, n), e = e.sibling; null !== e; ) og(e, t, n), (e = e.sibling);
}
function oE(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && (27 === r && u2(e.type) && (n = e.stateNode), null !== (e = e.child)))
        for (oE(e, t, n), e = e.sibling; null !== e; ) oE(e, t, n), (e = e.sibling);
}
function oA(e) {
    var t = e.stateNode,
        n = e.memoizedProps;
    try {
        for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
        uB(t, r, n), (t[eF] = e), (t[eV] = n);
    } catch (t) {
        l6(e, e.return, t);
    }
}
var oI = !1,
    oT = !1,
    oy = !1,
    oS = "function" == typeof WeakSet ? WeakSet : Set,
    ov = null;
function oC(e, t) {
    if (((e = e.containerInfo), (uH = cq), nW((e = nY(e))))) {
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
                        h = null;
                    a: for (;;) {
                        for (
                            ;
                            f !== n || (0 !== a && 3 !== f.nodeType) || (u = o + a),
                                f !== s || (0 !== r && 3 !== f.nodeType) || (c = o + r),
                                3 === f.nodeType && (o += f.nodeValue.length),
                                null !== (i = f.firstChild);
                        )
                            (h = f), (f = i);
                        for (;;) {
                            if (f === e) break a;
                            if (
                                (h === n && ++d === a && (u = o),
                                h === s && ++_ === r && (c = o),
                                null !== (i = f.nextSibling))
                            )
                                break;
                            h = (f = h).parentNode;
                        }
                        f = i;
                    }
                    n = -1 === u || -1 === c ? null : { start: u, end: c };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (uY = { focusedElem: e, selectionRange: n }, cq = !1, ov = t; null !== ov; )
        if (((e = (t = ov).child), 0 != (1024 & t.subtreeFlags) && null !== e)) (e.return = t), (ov = e);
        else
            for (; null !== ov; ) {
                switch (((s = (t = ov).alternate), (e = t.flags), t.tag)) {
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
                                var p = sC(n.type, a, n.elementType === n.type);
                                (e = r.getSnapshotBeforeUpdate(p, s)), (r.__reactInternalSnapshotBeforeUpdate = e);
                            } catch (e) {
                                l6(n, n.return, e);
                            }
                        }
                        break;
                    case 3:
                        if (0 != (1024 & e)) {
                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) u6(e);
                            else if (1 === n)
                                switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        u6(e);
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
                    (e.return = t.return), (ov = e);
                    break;
                }
                ov = t.return;
            }
}
function ob(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
        case 0:
        case 11:
        case 15:
            oV(e, n), 4 & r && oo(5, n);
            break;
        case 1:
            if ((oV(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                    try {
                        e.componentDidMount();
                    } catch (e) {
                        l6(n, n.return, e);
                    }
                else {
                    var i = sC(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                    } catch (e) {
                        l6(n, n.return, e);
                    }
                }
            64 & r && ou(n), 512 & r && od(n, n.return);
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
                    l6(n, n.return, e);
                }
            }
            break;
        case 27:
            null === t && 4 & r && oA(n);
        case 26:
        case 5:
            oV(e, n), null === t && 4 & r && of(n), 512 & r && od(n, n.return);
            break;
        case 12:
        default:
            oV(e, n);
            break;
        case 13:
            oV(e, n),
                4 & r && ow(e, n),
                64 & r &&
                    null !== (e = n.memoizedState) &&
                    null !== (e = e.dehydrated) &&
                    u8(e, (n = l8.bind(null, n)));
            break;
        case 22:
            if (!(r = null !== n.memoizedState || oI)) {
                (t = (null !== t && null !== t.memoizedState) || oT), (i = oI);
                var a = oT;
                (oI = r), (oT = t) && !a ? oj(e, n, 0 != (8772 & n.subtreeFlags)) : oV(e, n), (oI = i), (oT = a);
            }
        case 30:
    }
}
function oN(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), oN(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag && null !== (t = e.stateNode) && e$(t),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
var oR = null,
    oO = !1;
function oD(e, t, n) {
    for (n = n.child; null !== n; ) oL(e, t, n), (n = n.sibling);
}
function oL(e, t, n) {
    if (ep && "function" == typeof ep.onCommitFiberUnmount)
        try {
            ep.onCommitFiberUnmount(eh, n);
        } catch (e) {}
    switch (n.tag) {
        case 26:
            oT || o_(n, t),
                oD(e, t, n),
                n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
            break;
        case 27:
            oT || o_(n, t);
            var r = oR,
                i = oO;
            u2(n.type) && ((oR = n.stateNode), (oO = !1)), oD(e, t, n), cr(n.stateNode), (oR = r), (oO = i);
            break;
        case 5:
            oT || o_(n, t);
        case 6:
            if (((r = oR), (i = oO), (oR = null), oD(e, t, n), (oR = r), (oO = i), null !== oR))
                if (oO)
                    try {
                        (9 === oR.nodeType ? oR.body : "HTML" === oR.nodeName ? oR.ownerDocument.body : oR).removeChild(
                            n.stateNode,
                        );
                    } catch (e) {
                        l6(n, t, e);
                    }
                else
                    try {
                        oR.removeChild(n.stateNode);
                    } catch (e) {
                        l6(n, t, e);
                    }
            break;
        case 18:
            null !== oR &&
                (oO
                    ? (u3(
                          9 === (e = oR).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e,
                          n.stateNode,
                      ),
                      d_(e))
                    : u3(oR, n.stateNode));
            break;
        case 4:
            (r = oR), (i = oO), (oR = n.stateNode.containerInfo), (oO = !0), oD(e, t, n), (oR = r), (oO = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            oT || ol(2, n, t), oT || ol(4, n, t), oD(e, t, n);
            break;
        case 1:
            oT || (o_(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount && oc(n, t, r)), oD(e, t, n);
            break;
        case 21:
        default:
            oD(e, t, n);
            break;
        case 22:
            (oT = (r = oT) || null !== n.memoizedState), oD(e, t, n), (oT = r);
    }
}
function ow(e, t) {
    if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState) &&
        null !== (e = e.dehydrated)
    )
        try {
            d_(e);
        } catch (e) {
            l6(t, t.return, e);
        }
}
function ox(e) {
    switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return null === t && (t = e.stateNode = new oS()), t;
        case 22:
            return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new oS()), t;
        default:
            throw Error(l(435, e.tag));
    }
}
function oP(e, t) {
    var n = ox(e);
    t.forEach(function (t) {
        var r = l9.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
    });
}
function oM(e, t) {
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
                        if (u2(o.type)) {
                            (oR = o.stateNode), (oO = !1);
                            break e;
                        }
                        break;
                    case 5:
                        (oR = o.stateNode), (oO = !1);
                        break e;
                    case 3:
                    case 4:
                        (oR = o.stateNode.containerInfo), (oO = !0);
                        break e;
                }
                o = o.return;
            }
            if (null === oR) throw Error(l(160));
            oL(a, s, i), (oR = null), (oO = !1), null !== (a = i.alternate) && (a.return = null), (i.return = null);
        }
    if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) oU(t, e), (t = t.sibling);
}
var ok = null;
function oU(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            oM(t, e), oG(e), 4 & r && (ol(3, e, e.return), oo(3, e), ol(5, e, e.return));
            break;
        case 1:
            oM(t, e),
                oG(e),
                512 & r && (oT || null === n || o_(n, n.return)),
                64 & r &&
                    oI &&
                    null !== (e = e.updateQueue) &&
                    null !== (r = e.callbacks) &&
                    ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
            break;
        case 26:
            var i = ok;
            if ((oM(t, e), oG(e), 512 & r && (oT || null === n || o_(n, n.return)), 4 & r)) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                    if (null === r)
                        if (null === e.stateNode) {
                            e: {
                                (r = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i);
                                a: switch (r) {
                                    case "title":
                                        (!(a = i.getElementsByTagName("title")[0]) ||
                                            a[eK] ||
                                            a[eF] ||
                                            "http://www.w3.org/2000/svg" === a.namespaceURI ||
                                            a.hasAttribute("itemprop")) &&
                                            ((a = i.createElement(r)),
                                            i.head.insertBefore(a, i.querySelector("head > title"))),
                                            uB(a, r, n),
                                            (a[eF] = e),
                                            eQ(a),
                                            (r = a);
                                        break e;
                                    case "link":
                                        var s = cO("link", "href", i).get(r + (n.href || ""));
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
                                        uB((a = i.createElement(r)), r, n), i.head.appendChild(a);
                                        break;
                                    case "meta":
                                        if ((s = cO("meta", "content", i).get(r + (n.content || "")))) {
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
                                        uB((a = i.createElement(r)), r, n), i.head.appendChild(a);
                                        break;
                                    default:
                                        throw Error(l(468, r));
                                }
                                (a[eF] = e), eQ(a), (r = a);
                            }
                            e.stateNode = r;
                        } else cD(i, e.type, e.stateNode);
                    else e.stateNode = cv(i, r, e.memoizedProps);
                else
                    a !== r
                        ? (null === a ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : a.count--,
                          null === r ? cD(i, e.type, e.stateNode) : cv(i, r, e.memoizedProps))
                        : null === r && null !== e.stateNode && oh(e, e.memoizedProps, n.memoizedProps);
            }
            break;
        case 27:
            oM(t, e),
                oG(e),
                512 & r && (oT || null === n || o_(n, n.return)),
                null !== n && 4 & r && oh(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if ((oM(t, e), oG(e), 512 & r && (oT || null === n || o_(n, n.return)), 32 & e.flags)) {
                i = e.stateNode;
                try {
                    tA(i, "");
                } catch (t) {
                    l6(e, e.return, t);
                }
            }
            4 & r && null != e.stateNode && ((i = e.memoizedProps), oh(e, i, null !== n ? n.memoizedProps : i)),
                1024 & r && (oy = !0);
            break;
        case 6:
            if ((oM(t, e), oG(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                    n.nodeValue = r;
                } catch (t) {
                    l6(e, e.return, t);
                }
            }
            break;
        case 3:
            if (
                ((cR = null),
                (i = ok),
                (ok = cs(t.containerInfo)),
                oM(t, e),
                (ok = i),
                oG(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
            )
                try {
                    d_(t.containerInfo);
                } catch (t) {
                    l6(e, e.return, t);
                }
            oy && ((oy = !1), oF(e));
            break;
        case 4:
            (r = ok), (ok = cs(e.stateNode.containerInfo)), oM(t, e), oG(e), (ok = r);
            break;
        case 12:
        default:
            oM(t, e), oG(e);
            break;
        case 13:
            oM(t, e),
                oG(e),
                8192 & e.child.flags &&
                    (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                    (lh = ea()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), oP(e, r));
            break;
        case 22:
            i = null !== e.memoizedState;
            var u = null !== n && null !== n.memoizedState,
                c = oI,
                d = oT;
            if (((oI = c || i), (oT = d || u), oM(t, e), (oT = d), (oI = c), oG(e), 8192 & r))
                e: for (
                    (t = e.stateNode)._visibility = i ? -2 & t._visibility : 1 | t._visibility,
                        i && (null === n || u || oI || oT || oB(e)),
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
                                l6(u, u.return, e);
                            }
                        }
                    } else if (6 === t.tag) {
                        if (null === n) {
                            u = t;
                            try {
                                u.stateNode.nodeValue = i ? "" : u.memoizedProps;
                            } catch (e) {
                                l6(u, u.return, e);
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
            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), oP(e, n));
            break;
        case 19:
            oM(t, e), oG(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), oP(e, r));
        case 30:
        case 21:
    }
}
function oG(e) {
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
                        a = om(e);
                    oE(e, a, i);
                    break;
                case 5:
                    var s = n.stateNode;
                    32 & n.flags && (tA(s, ""), (n.flags &= -33));
                    var o = om(e);
                    oE(e, o, s);
                    break;
                case 3:
                case 4:
                    var u = n.stateNode.containerInfo,
                        c = om(e);
                    og(e, c, u);
                    break;
                default:
                    throw Error(l(161));
            }
        } catch (t) {
            l6(e, e.return, t);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function oF(e) {
    if (1024 & e.subtreeFlags)
        for (e = e.child; null !== e; ) {
            var t = e;
            oF(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling);
        }
}
function oV(e, t) {
    if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) ob(e, t.alternate, t), (t = t.sibling);
}
function oB(e) {
    for (e = e.child; null !== e; ) {
        var t = e;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ol(4, t, t.return), oB(t);
                break;
            case 1:
                o_(t, t.return);
                var n = t.stateNode;
                "function" == typeof n.componentWillUnmount && oc(t, t.return, n), oB(t);
                break;
            case 27:
                cr(t.stateNode);
            case 26:
            case 5:
                o_(t, t.return), oB(t);
                break;
            case 22:
                null === t.memoizedState && oB(t);
                break;
            default:
                oB(t);
        }
        e = e.sibling;
    }
}
function oj(e, t, n) {
    for (n = n && 0 != (8772 & t.subtreeFlags), t = t.child; null !== t; ) {
        var r = t.alternate,
            i = e,
            a = t,
            s = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                oj(i, a, n), oo(4, a);
                break;
            case 1:
                if ((oj(i, a, n), "function" == typeof (i = (r = a).stateNode).componentDidMount))
                    try {
                        i.componentDidMount();
                    } catch (e) {
                        l6(r, r.return, e);
                    }
                if (null !== (i = (r = a).updateQueue)) {
                    var o = r.stateNode;
                    try {
                        var l = i.shared.hiddenCallbacks;
                        if (null !== l) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) iF(l[i], o);
                    } catch (e) {
                        l6(r, r.return, e);
                    }
                }
                n && 64 & s && ou(a), od(a, a.return);
                break;
            case 27:
                oA(a);
            case 26:
            case 5:
                oj(i, a, n), n && null === r && 4 & s && of(a), od(a, a.return);
                break;
            case 12:
            default:
                oj(i, a, n);
                break;
            case 13:
                oj(i, a, n), n && 4 & s && ow(i, a);
                break;
            case 22:
                null === a.memoizedState && oj(i, a, n), od(a, a.return);
            case 30:
        }
        t = t.sibling;
    }
}
function oH(e, t) {
    var n = null;
    null !== e &&
        null !== e.memoizedState &&
        null !== e.memoizedState.cachePool &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
        e !== n && (null != e && e.refCount++, null != n && ia(n));
}
function oY(e, t) {
    (e = null),
        null !== t.alternate && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ia(e));
}
function oW(e, t, n, r) {
    if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) oK(e, t, n, r), (t = t.sibling);
}
function oK(e, t, n, r) {
    var i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
            oW(e, t, n, r), 2048 & i && oo(9, t);
            break;
        case 1:
        case 13:
        default:
            oW(e, t, n, r);
            break;
        case 3:
            oW(e, t, n, r),
                2048 & i &&
                    ((e = null),
                    null !== t.alternate && (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && ia(e)));
            break;
        case 12:
            if (2048 & i) {
                oW(e, t, n, r), (e = t.stateNode);
                try {
                    var a = t.memoizedProps,
                        s = a.id,
                        o = a.onPostCommit;
                    "function" == typeof o &&
                        o(s, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (e) {
                    l6(t, t.return, e);
                }
            } else oW(e, t, n, r);
            break;
        case 23:
            break;
        case 22:
            (a = t.stateNode),
                (s = t.alternate),
                null !== t.memoizedState
                    ? 2 & a._visibility
                        ? oW(e, t, n, r)
                        : oz(e, t)
                    : 2 & a._visibility
                      ? oW(e, t, n, r)
                      : ((a._visibility |= 2), o$(e, t, n, r, 0 != (10256 & t.subtreeFlags))),
                2048 & i && oH(s, t);
            break;
        case 24:
            oW(e, t, n, r), 2048 & i && oY(t.alternate, t);
    }
}
function o$(e, t, n, r, i) {
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
                o$(a, s, o, l, i), oo(8, s);
                break;
            case 23:
                break;
            case 22:
                var c = s.stateNode;
                null !== s.memoizedState
                    ? 2 & c._visibility
                        ? o$(a, s, o, l, i)
                        : oz(a, s)
                    : ((c._visibility |= 2), o$(a, s, o, l, i)),
                    i && 2048 & u && oH(s.alternate, s);
                break;
            case 24:
                o$(a, s, o, l, i), i && 2048 & u && oY(s.alternate, s);
                break;
            default:
                o$(a, s, o, l, i);
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
                    oz(n, r), 2048 & i && oH(r.alternate, r);
                    break;
                case 24:
                    oz(n, r), 2048 & i && oY(r.alternate, r);
                    break;
                default:
                    oz(n, r);
            }
            t = t.sibling;
        }
}
var oq = 8192;
function oX(e) {
    if (e.subtreeFlags & oq) for (e = e.child; null !== e; ) oZ(e), (e = e.sibling);
}
function oZ(e) {
    switch (e.tag) {
        case 26:
            oX(e), e.flags & oq && null !== e.memoizedState && cM(ok, e.memoizedState, e.memoizedProps);
            break;
        case 5:
        default:
            oX(e);
            break;
        case 3:
        case 4:
            var t = ok;
            (ok = cs(e.stateNode.containerInfo)), oX(e), (ok = t);
            break;
        case 22:
            null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                    ? ((t = oq), (oq = 0x1000000), oX(e), (oq = t))
                    : oX(e));
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
function oJ(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (ov = r), o2(r, e);
            }
        oQ(e);
    }
    if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) o0(e), (e = e.sibling);
}
function o0(e) {
    switch (e.tag) {
        case 0:
        case 11:
        case 15:
            oJ(e), 2048 & e.flags && ol(9, e, e.return);
            break;
        case 3:
        case 12:
        default:
            oJ(e);
            break;
        case 22:
            var t = e.stateNode;
            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), o1(e))
                : oJ(e);
    }
}
function o1(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (ov = r), o2(r, e);
            }
        oQ(e);
    }
    for (e = e.child; null !== e; ) {
        switch ((t = e).tag) {
            case 0:
            case 11:
            case 15:
                ol(8, t, t.return), o1(t);
                break;
            case 22:
                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), o1(t));
                break;
            default:
                o1(t);
        }
        e = e.sibling;
    }
}
function o2(e, t) {
    for (; null !== ov; ) {
        var n = ov;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                ol(8, n, t);
                break;
            case 23:
            case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                    var r = n.memoizedState.cachePool.pool;
                    null != r && r.refCount++;
                }
                break;
            case 24:
                ia(n.memoizedState.cache);
        }
        if (null !== (r = n.child)) (r.return = n), (ov = r);
        else
            for (n = e; null !== ov; ) {
                var i = (r = ov).sibling,
                    a = r.return;
                if ((oN(r), r === n)) {
                    ov = null;
                    break;
                }
                if (null !== i) {
                    (i.return = a), (ov = i);
                    break;
                }
                ov = a;
            }
    }
}
var o3 = {
        getCacheForType: function (e) {
            var t = r5(ir),
                n = t.data.get(e);
            return void 0 === n && ((n = e()), t.data.set(e, n)), n;
        },
    },
    o6 = "function" == typeof WeakMap ? WeakMap : Map,
    o4 = 0,
    o5 = null,
    o7 = null,
    o8 = 0,
    o9 = 0,
    le = null,
    lt = !1,
    ln = !1,
    lr = !1,
    li = 0,
    la = 0,
    ls = 0,
    lo = 0,
    ll = 0,
    lu = 0,
    lc = 0,
    ld = null,
    l_ = null,
    lf = !1,
    lh = 0,
    lp = 1 / 0,
    lm = null,
    lg = null,
    lE = 0,
    lA = null,
    lI = null,
    lT = 0,
    ly = 0,
    lS = null,
    lv = null,
    lC = 0,
    lb = null;
function lN() {
    if (0 != (2 & o4) && 0 !== o8) return o8 & -o8;
    if (null !== G.T) {
        var e = il;
        return 0 !== e ? e : up();
    }
    return ek();
}
function lR() {
    0 === lu && (lu = 0 == (0x20000000 & o8) || rF ? eN() : 0x20000000);
    var e = sf.current;
    return null !== e && (e.flags |= 32), lu;
}
function lO(e, t, n) {
    ((e === o5 && (2 === o9 || 9 === o9)) || null !== e.cancelPendingCommit) && (lk(e, 0), lx(e, o8, lu, !1)),
        eD(e, n),
        (0 == (2 & o4) || e !== o5) && (e === o5 && (0 == (2 & o4) && (lo |= n), 4 === la && lx(e, o8, lu, !1)), uo(e));
}
function lD(e, t, n) {
    if (0 != (6 & o4)) throw Error(l(327));
    for (
        var r = (!n && 0 == (124 & t) && 0 == (t & e.expiredLanes)) || eC(e, t), i = r ? lH(e, t) : lB(e, t, !0), a = r;
        ;
    ) {
        if (0 === i) ln && !r && lx(e, t, 0, !1);
        else {
            if (((n = e.current.alternate), a && !lw(n))) {
                (i = lB(e, t, !1)), (a = !1);
                continue;
            }
            if (2 === i) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var s = 0;
                else s = 0 != (s = -0x20000001 & e.pendingLanes) ? s : 0x20000000 & s ? 0x20000000 : 0;
                if (0 !== s) {
                    t = s;
                    e: {
                        var o = e;
                        i = ld;
                        var u = o.current.memoizedState.isDehydrated;
                        if ((u && (lk(o, s).flags |= 256), 2 !== (s = lB(o, s, !1)))) {
                            if (lr && !u) {
                                (o.errorRecoveryDisabledLanes |= a), (lo |= a), (i = 4);
                                break e;
                            }
                            (a = l_), (l_ = i), null !== a && (null === l_ ? (l_ = a) : l_.push.apply(l_, a));
                        }
                        i = s;
                    }
                    if (((a = !1), 2 !== i)) continue;
                }
            }
            if (1 === i) {
                lk(e, 0), lx(e, t, 0, !0);
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
                        lx(r, t, lu, !lt);
                        break e;
                    case 2:
                        l_ = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329));
                }
                if ((0x3c00000 & t) === t && 10 < (i = lh + 300 - ea())) {
                    if ((lx(r, t, lu, !lt), 0 !== ev(r, 0, !0))) break e;
                    r.timeoutHandle = uZ(lL.bind(null, r, n, l_, lm, lf, t, lu, lo, lc, lt, a, 2, -0, 0), i);
                    break e;
                }
                lL(r, n, l_, lm, lf, t, lu, lo, lc, lt, a, 0, -0, 0);
            }
        }
        break;
    }
    uo(e);
}
function lL(e, t, n, r, i, a, s, o, l, u, c, d, _, f) {
    if (
        ((e.timeoutHandle = -1),
        (8192 & (d = t.subtreeFlags) || 0x1002000 == (0x1002000 & d)) &&
            ((cx = { stylesheets: null, count: 0, unsuspend: cP }), oZ(t), null !== (d = ck())))
    ) {
        (e.cancelPendingCommit = d(lX.bind(null, e, t, a, n, r, i, s, o, l, c, 1, _, f))), lx(e, a, s, !u);
        return;
    }
    lX(e, t, a, n, r, i, s, o, l);
}
function lw(e) {
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
                    if (!nF(a(), i)) return !1;
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
function lx(e, t, n, r) {
    (t &= ~ll),
        (t &= ~lo),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
    for (var i = t; 0 < i; ) {
        var a = 31 - eg(i),
            s = 1 << a;
        (r[a] = -1), (i &= ~s);
    }
    0 !== n && ew(e, n, t);
}
function lP() {
    return 0 != (6 & o4) || (ul(0, !1), !1);
}
function lM() {
    if (null !== o7) {
        if (0 === o9) var e = o7.return;
        else (e = o7), (rQ = rZ = null), at(e), (si = null), (sa = 0), (e = o7);
        for (; null !== e; ) os(e.alternate, e), (e = e.return);
        o7 = null;
    }
}
function lk(e, t) {
    var n = e.timeoutHandle;
    -1 !== n && ((e.timeoutHandle = -1), uQ(n)),
        null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
        lM(),
        (o5 = e),
        (o7 = n = rE(e.current, null)),
        (o8 = t),
        (o9 = 0),
        (le = null),
        (lt = !1),
        (ln = eC(e, t)),
        (lr = !1),
        (lc = lu = ll = lo = ls = la = 0),
        (l_ = ld = null),
        (lf = !1),
        0 != (8 & t) && (t |= 32 & t);
    var r = e.entangledLanes;
    if (0 !== r)
        for (e = e.entanglements, r &= t; 0 < r; ) {
            var i = 31 - eg(r),
                a = 1 << i;
            (t |= e[i]), (r &= ~a);
        }
    return (li = t), rl(), n;
}
function lU(e, t) {
    (i$ = null),
        (G.H = se),
        t === iA || t === iT
            ? ((t = iN()), (o9 = 3))
            : t === iI
              ? ((t = iN()), (o9 = 4))
              : (o9 = t === sk ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1),
        (le = t),
        null === o7 && ((la = 1), sD(e, ri(t, e.current)));
}
function lG() {
    var e = G.H;
    return (G.H = se), null === e ? se : e;
}
function lF() {
    var e = G.A;
    return (G.A = o3), e;
}
function lV() {
    (la = 4),
        lt || ((4194048 & o8) !== o8 && null !== sf.current) || (ln = !0),
        (0 == (0x7ffffff & ls) && 0 == (0x7ffffff & lo)) || null === o5 || lx(o5, o8, lu, !1);
}
function lB(e, t, n) {
    var r = o4;
    o4 |= 2;
    var i = lG(),
        a = lF();
    (o5 !== e || o8 !== t) && ((lm = null), lk(e, t)), (t = !1);
    var s = la;
    e: for (;;)
        try {
            if (0 !== o9 && null !== o7) {
                var o = o7,
                    l = le;
                switch (o9) {
                    case 8:
                        lM(), (s = 6);
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        null === sf.current && (t = !0);
                        var u = o9;
                        if (((o9 = 0), (le = null), l$(e, o, l, u), n && ln)) {
                            s = 0;
                            break e;
                        }
                        break;
                    default:
                        (u = o9), (o9 = 0), (le = null), l$(e, o, l, u);
                }
            }
            lj(), (s = la);
            break;
        } catch (t) {
            lU(e, t);
        }
    return (
        t && e.shellSuspendCounter++,
        (rQ = rZ = null),
        (o4 = r),
        (G.H = i),
        (G.A = a),
        null === o7 && ((o5 = null), (o8 = 0), rl()),
        s
    );
}
function lj() {
    for (; null !== o7; ) lW(o7);
}
function lH(e, t) {
    var n = o4;
    o4 |= 2;
    var r = lG(),
        i = lF();
    o5 !== e || o8 !== t ? ((lm = null), (lp = ea() + 500), lk(e, t)) : (ln = eC(e, t));
    e: for (;;)
        try {
            if (0 !== o9 && null !== o7) {
                t = o7;
                var a = le;
                a: switch (o9) {
                    case 1:
                        (o9 = 0), (le = null), l$(e, t, a, 1);
                        break;
                    case 2:
                    case 9:
                        if (iS(a)) {
                            (o9 = 0), (le = null), lK(t);
                            break;
                        }
                        (t = function () {
                            (2 !== o9 && 9 !== o9) || o5 !== e || (o9 = 7), uo(e);
                        }),
                            a.then(t, t);
                        break e;
                    case 3:
                        o9 = 7;
                        break e;
                    case 4:
                        o9 = 5;
                        break e;
                    case 7:
                        iS(a) ? ((o9 = 0), (le = null), lK(t)) : ((o9 = 0), (le = null), l$(e, t, a, 7));
                        break;
                    case 5:
                        var s = null;
                        switch (o7.tag) {
                            case 26:
                                s = o7.memoizedState;
                            case 5:
                            case 27:
                                var o = o7;
                                if (s ? cw(s) : 1) {
                                    (o9 = 0), (le = null);
                                    var u = o.sibling;
                                    if (null !== u) o7 = u;
                                    else {
                                        var c = o.return;
                                        null !== c ? ((o7 = c), lz(c)) : (o7 = null);
                                    }
                                    break a;
                                }
                        }
                        (o9 = 0), (le = null), l$(e, t, a, 5);
                        break;
                    case 6:
                        (o9 = 0), (le = null), l$(e, t, a, 6);
                        break;
                    case 8:
                        lM(), (la = 6);
                        break e;
                    default:
                        throw Error(l(462));
                }
            }
            lY();
            break;
        } catch (t) {
            lU(e, t);
        }
    return ((rQ = rZ = null), (G.H = r), (G.A = i), (o4 = n), null !== o7) ? 0 : ((o5 = null), (o8 = 0), rl(), la);
}
function lY() {
    for (; null !== o7 && !er(); ) lW(o7);
}
function lW(e) {
    var t = s8(e.alternate, e, li);
    (e.memoizedProps = e.pendingProps), null === t ? lz(e) : (o7 = t);
}
function lK(e) {
    var t = e,
        n = t.alternate;
    switch (t.tag) {
        case 15:
        case 0:
            t = sK(n, t, t.pendingProps, t.type, void 0, o8);
            break;
        case 11:
            t = sK(n, t, t.pendingProps, t.type.render, t.ref, o8);
            break;
        case 5:
            at(t);
        default:
            os(n, t), (t = s8(n, (t = o7 = rA(t, li)), li));
    }
    (e.memoizedProps = e.pendingProps), null === t ? lz(e) : (o7 = t);
}
function l$(e, t, n, r) {
    (rQ = rZ = null), at(t), (si = null), (sa = 0);
    var i = t.return;
    try {
        if (sM(e, i, t, n, o8)) {
            (la = 1), sD(e, ri(n, e.current)), (o7 = null);
            return;
        }
    } catch (t) {
        if (null !== i) throw ((o7 = i), t);
        (la = 1), sD(e, ri(n, e.current)), (o7 = null);
        return;
    }
    32768 & t.flags
        ? (rF || 1 === r
              ? (e = !0)
              : ln || 0 != (0x20000000 & o8)
                ? (e = !1)
                : ((lt = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = sf.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
          lq(t, e))
        : lz(t);
}
function lz(e) {
    var t = e;
    do {
        if (0 != (32768 & t.flags)) return void lq(t, lt);
        e = t.return;
        var n = oi(t.alternate, t, li);
        if (null !== n) {
            o7 = n;
            return;
        }
        if (null !== (t = t.sibling)) {
            o7 = t;
            return;
        }
        o7 = t = e;
    } while (null !== t);
    0 === la && (la = 5);
}
function lq(e, t) {
    do {
        var n = oa(e.alternate, e);
        if (null !== n) {
            (n.flags &= 32767), (o7 = n);
            return;
        }
        if (
            (null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && null !== (e = e.sibling))
        ) {
            o7 = e;
            return;
        }
        o7 = e = n;
    } while (null !== e);
    (la = 6), (o7 = null);
}
function lX(e, t, n, r, i, a, s, o, u) {
    e.cancelPendingCommit = null;
    do l1();
    while (0 !== lE);
    if (0 != (6 & o4)) throw Error(l(327));
    if (null !== t) {
        if (t === e.current) throw Error(l(177));
        if (
            (eL(e, n, (a = t.lanes | t.childLanes | ro), s, o, u),
            e === o5 && ((o7 = o5 = null), (o8 = 0)),
            (lI = t),
            (lA = e),
            (lT = n),
            (ly = a),
            (lS = i),
            (lv = r),
            0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  ue(eu, function () {
                      return l2(!0), null;
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
            (r = 0 != (13878 & t.flags)),
            0 != (13878 & t.subtreeFlags) || r)
        ) {
            (r = G.T), (G.T = null), (i = F.p), (F.p = 2), (s = o4), (o4 |= 4);
            try {
                oC(e, t, n);
            } finally {
                (o4 = s), (F.p = i), (G.T = r);
            }
        }
        (lE = 1), lZ(), lQ(), lJ();
    }
}
function lZ() {
    if (1 === lE) {
        lE = 0;
        var e = lA,
            t = lI,
            n = 0 != (13878 & t.flags);
        if (0 != (13878 & t.subtreeFlags) || n) {
            (n = G.T), (G.T = null);
            var r = F.p;
            F.p = 2;
            var i = o4;
            o4 |= 4;
            try {
                oU(t, e);
                var a = uY,
                    s = nY(e.containerInfo),
                    o = a.focusedElem,
                    l = a.selectionRange;
                if (s !== o && o && o.ownerDocument && nH(o.ownerDocument.documentElement, o)) {
                    if (null !== l && nW(o)) {
                        var u = l.start,
                            c = l.end;
                        if ((void 0 === c && (c = u), "selectionStart" in o))
                            (o.selectionStart = u), (o.selectionEnd = Math.min(c, o.value.length));
                        else {
                            var d = o.ownerDocument || document,
                                _ = (d && d.defaultView) || window;
                            if (_.getSelection) {
                                var f = _.getSelection(),
                                    h = o.textContent.length,
                                    p = Math.min(l.start, h),
                                    g = void 0 === l.end ? p : Math.min(l.end, h);
                                !f.extend && p > g && ((s = g), (g = p), (p = s));
                                var E = nj(o, p),
                                    A = nj(o, g);
                                if (
                                    E &&
                                    A &&
                                    (1 !== f.rangeCount ||
                                        f.anchorNode !== E.node ||
                                        f.anchorOffset !== E.offset ||
                                        f.focusNode !== A.node ||
                                        f.focusOffset !== A.offset)
                                ) {
                                    var I = d.createRange();
                                    I.setStart(E.node, E.offset),
                                        f.removeAllRanges(),
                                        p > g
                                            ? (f.addRange(I), f.extend(A.node, A.offset))
                                            : (I.setEnd(A.node, A.offset), f.addRange(I));
                                }
                            }
                        }
                    }
                    for (d = [], f = o; (f = f.parentNode); )
                        1 === f.nodeType && d.push({ element: f, left: f.scrollLeft, top: f.scrollTop });
                    for ("function" == typeof o.focus && o.focus(), o = 0; o < d.length; o++) {
                        var T = d[o];
                        (T.element.scrollLeft = T.left), (T.element.scrollTop = T.top);
                    }
                }
                (cq = !!uH), (uY = uH = null);
            } finally {
                (o4 = i), (F.p = r), (G.T = n);
            }
        }
        (e.current = t), (lE = 2);
    }
}
function lQ() {
    if (2 === lE) {
        lE = 0;
        var e = lA,
            t = lI,
            n = 0 != (8772 & t.flags);
        if (0 != (8772 & t.subtreeFlags) || n) {
            (n = G.T), (G.T = null);
            var r = F.p;
            F.p = 2;
            var i = o4;
            o4 |= 4;
            try {
                ob(e, t.alternate, t);
            } finally {
                (o4 = i), (F.p = r), (G.T = n);
            }
        }
        lE = 3;
    }
}
function lJ() {
    if (4 === lE || 3 === lE) {
        (lE = 0), ei();
        var e = lA,
            t = lI,
            n = lT,
            r = lv;
        0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
            ? (lE = 5)
            : ((lE = 0), (lI = lA = null), l0(e, e.pendingLanes));
        var i = e.pendingLanes;
        if ((0 === i && (lg = null), eM(n), (t = t.stateNode), ep && "function" == typeof ep.onCommitFiberRoot))
            try {
                ep.onCommitFiberRoot(eh, t, void 0, 128 == (128 & t.current.flags));
            } catch (e) {}
        if (null !== r) {
            (t = G.T), (i = F.p), (F.p = 2), (G.T = null);
            try {
                for (var a = e.onRecoverableError, s = 0; s < r.length; s++) {
                    var o = r[s];
                    a(o.value, { componentStack: o.stack });
                }
            } finally {
                (G.T = t), (F.p = i);
            }
        }
        0 != (3 & lT) && l1(),
            uo(e),
            (i = e.pendingLanes),
            0 != (4194090 & n) && 0 != (42 & i) ? (e === lb ? lC++ : ((lC = 0), (lb = e))) : (lC = 0),
            ul(0, !1);
    }
}
function l0(e, t) {
    0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), ia(t));
}
function l1(e) {
    return lZ(), lQ(), lJ(), l2(e);
}
function l2() {
    if (5 !== lE) return !1;
    var e = lA,
        t = ly;
    ly = 0;
    var n = eM(lT),
        r = G.T,
        i = F.p;
    try {
        (F.p = 32 > n ? 32 : n), (G.T = null), (n = lS), (lS = null);
        var a = lA,
            s = lT;
        if (((lE = 0), (lI = lA = null), (lT = 0), 0 != (6 & o4))) throw Error(l(331));
        var o = o4;
        if (
            ((o4 |= 4),
            o0(a.current),
            oK(a, a.current, s, n),
            (o4 = o),
            ul(0, !1),
            ep && "function" == typeof ep.onPostCommitFiberRoot)
        )
            try {
                ep.onPostCommitFiberRoot(eh, a);
            } catch (e) {}
        return !0;
    } finally {
        (F.p = i), (G.T = r), l0(e, t);
    }
}
function l3(e, t, n) {
    (t = ri(n, t)), (t = sw(e.stateNode, t, 2)), null !== (e = ix(e, t, 2)) && (eD(e, 2), uo(e));
}
function l6(e, t, n) {
    if (3 === e.tag) l3(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                l3(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    "function" == typeof t.type.getDerivedStateFromError ||
                    ("function" == typeof r.componentDidCatch && (null === lg || !lg.has(r)))
                ) {
                    (e = ri(n, e)), null !== (r = ix(t, (n = sx(2)), 2)) && (sP(n, r, t, e), eD(r, 2), uo(r));
                    break;
                }
            }
            t = t.return;
        }
}
function l4(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new o6();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || ((lr = !0), i.add(n), (e = l5.bind(null, e, t, n)), t.then(e, e));
}
function l5(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        o5 === e &&
            (o8 & n) === n &&
            (4 === la || (3 === la && (0x3c00000 & o8) === o8 && 300 > ea() - lh)
                ? 0 == (2 & o4) && lk(e, 0)
                : (ll |= n),
            lc === o8 && (lc = 0)),
        uo(e);
}
function l7(e, t) {
    0 === t && (t = eR()), null !== (e = rd(e, t)) && (eD(e, t), uo(e));
}
function l8(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), l7(e, n);
}
function l9(e, t) {
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
    null !== r && r.delete(t), l7(e, n);
}
function ue(e, t) {
    return et(e, t);
}
var ut = null,
    un = null,
    ur = !1,
    ui = !1,
    ua = !1,
    us = 0;
function uo(e) {
    e !== un && null === e.next && (null === un ? (ut = un = e) : (un = un.next = e)),
        (ui = !0),
        ur || ((ur = !0), uh());
}
function ul(e, t) {
    if (!ua && ui) {
        ua = !0;
        do
            for (var n = !1, r = ut; null !== r; ) {
                if (!t)
                    if (0 !== e) {
                        var i = r.pendingLanes;
                        if (0 === i) var a = 0;
                        else {
                            var s = r.suspendedLanes,
                                o = r.pingedLanes;
                            a =
                                0xc000095 & (a = ((1 << (31 - eg(42 | e) + 1)) - 1) & (i & ~(s & ~o)))
                                    ? (0xc000095 & a) | 1
                                    : a
                                      ? 2 | a
                                      : 0;
                        }
                        0 !== a && ((n = !0), uf(r, a));
                    } else
                        (a = o8),
                            0 ==
                                (3 &
                                    (a = ev(
                                        r,
                                        r === o5 ? a : 0,
                                        null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                                    ))) ||
                                eC(r, a) ||
                                ((n = !0), uf(r, a));
                r = r.next;
            }
        while (n);
        ua = !1;
    }
}
function uu() {
    uc();
}
function uc() {
    ui = ur = !1;
    var e = 0;
    0 !== us && (uX() && (e = us), (us = 0));
    for (var t = ea(), n = null, r = ut; null !== r; ) {
        var i = r.next,
            a = ud(r, t);
        0 === a
            ? ((r.next = null), null === n ? (ut = i) : (n.next = i), null === i && (un = n))
            : ((n = r), (0 !== e || 0 != (3 & a)) && (ui = !0)),
            (r = i);
    }
    ul(e, !1);
}
function ud(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = -0x3c00001 & e.pendingLanes; 0 < a; ) {
        var s = 31 - eg(a),
            o = 1 << s,
            l = i[s];
        -1 === l ? (0 == (o & n) || 0 != (o & r)) && (i[s] = eb(o, t)) : l <= t && (e.expiredLanes |= o), (a &= ~o);
    }
    if (
        ((t = o5),
        (n = o8),
        (n = ev(e, e === t ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
        (r = e.callbackNode),
        0 === n || (e === t && (2 === o9 || 9 === o9)) || null !== e.cancelPendingCommit)
    )
        return null !== r && null !== r && en(r), (e.callbackNode = null), (e.callbackPriority = 0);
    if (0 == (3 & n) || eC(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch ((null !== r && en(r), eM(n))) {
            case 2:
            case 8:
                n = el;
                break;
            case 32:
            default:
                n = eu;
                break;
            case 0x10000000:
                n = ed;
        }
        return (n = et(n, (r = u_.bind(null, e)))), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return null !== r && null !== r && en(r), (e.callbackPriority = 2), (e.callbackNode = null), 2;
}
function u_(e, t) {
    if (0 !== lE && 5 !== lE) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (l1(!0) && e.callbackNode !== n) return null;
    var r = o8;
    return 0 === (r = ev(e, e === o5 ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
        ? null
        : (lD(e, r, t), ud(e, ea()), null != e.callbackNode && e.callbackNode === n ? u_.bind(null, e) : null);
}
function uf(e, t) {
    if (l1()) return null;
    lD(e, t, !0);
}
function uh() {
    u0(function () {
        0 != (6 & o4) ? et(eo, uu) : uc();
    });
}
function up() {
    return 0 === us && (us = eN()), us;
}
function um(e) {
    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : tb("" + e);
}
function ug(e, t) {
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
function uE(e, t, n, r, i) {
    if ("submit" === t && n && n.stateNode === i) {
        var a = um((i[eV] || null).action),
            s = r.submitter;
        s &&
            null !== (t = (t = s[eV] || null) ? um(t.formAction) : s.getAttribute("formAction")) &&
            ((a = t), (s = null));
        var o = new tQ("action", "action", null, r, i);
        e.push({
            event: o,
            listeners: [
                {
                    instance: null,
                    listener: function () {
                        if (r.defaultPrevented) {
                            if (0 !== us) {
                                var e = s ? ug(i, s) : new FormData(i);
                                aX(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                            }
                        } else
                            "function" == typeof a &&
                                (o.preventDefault(),
                                aX(
                                    n,
                                    {
                                        pending: !0,
                                        data: (e = s ? ug(i, s) : new FormData(i)),
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
for (var uA = 0; uA < rt.length; uA++) {
    var uI = rt[uA];
    rn(uI.toLowerCase(), "on" + (uI[0].toUpperCase() + uI.slice(1)));
}
rn(n3, "onAnimationEnd"),
    rn(n6, "onAnimationIteration"),
    rn(n4, "onAnimationStart"),
    rn("dblclick", "onDoubleClick"),
    rn("focusin", "onFocus"),
    rn("focusout", "onBlur"),
    rn(n5, "onTransitionRun"),
    rn(n7, "onTransitionStart"),
    rn(n8, "onTransitionCancel"),
    rn(n9, "onTransitionEnd"),
    e2("onMouseEnter", ["mouseout", "mouseover"]),
    e2("onMouseLeave", ["mouseout", "mouseover"]),
    e2("onPointerEnter", ["pointerout", "pointerover"]),
    e2("onPointerLeave", ["pointerout", "pointerover"]),
    e1("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    e1("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    e1("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    e1("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    e1("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    e1("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var uT =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    uy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uT));
function uS(e, t) {
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
                        sb(e);
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
                        sb(e);
                    }
                    (i.currentTarget = null), (a = l);
                }
        }
    }
}
function uv(e, t) {
    var n = t[ej];
    void 0 === n && (n = t[ej] = new Set());
    var r = e + "__bubble";
    n.has(r) || (uR(t, e, 2, !1), n.add(r));
}
function uC(e, t, n) {
    var r = 0;
    t && (r |= 4), uR(n, e, r, t);
}
var ub = "_reactListening" + Math.random().toString(36).slice(2);
function uN(e) {
    if (!e[ub]) {
        (e[ub] = !0),
            eJ.forEach(function (t) {
                "selectionchange" !== t && (uy.has(t) || uC(t, !1, e), uC(t, !0, e));
            });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[ub] || ((t[ub] = !0), uC("selectionchange", !1, t));
    }
}
function uR(e, t, n, r) {
    switch (c2(t)) {
        case 2:
            var i = cX;
            break;
        case 8:
            i = cZ;
            break;
        default:
            i = cQ;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        tk && ("touchstart" === t || "touchmove" === t || "wheel" === t) && (i = !0),
        r
            ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
}
function uO(e, t, n, r, i) {
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
    tx(function () {
        var r = a,
            i = tR(n),
            s = [];
        e: {
            var o = re.get(e);
            if (void 0 !== o) {
                var l = tQ,
                    u = e;
                switch (e) {
                    case "keypress":
                        if (0 === tj(n)) break e;
                    case "keydown":
                    case "keyup":
                        l = nr;
                        break;
                    case "focusin":
                        (u = "focus"), (l = t6);
                        break;
                    case "focusout":
                        (u = "blur"), (l = t6);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        l = t6;
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
                        l = t2;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        l = t3;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        l = na;
                        break;
                    case n3:
                    case n6:
                    case n4:
                        l = t4;
                        break;
                    case n9:
                        l = ns;
                        break;
                    case "scroll":
                    case "scrollend":
                        l = t0;
                        break;
                    case "wheel":
                        l = no;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        l = t5;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        l = ni;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        l = nl;
                }
                var d = 0 != (4 & t),
                    _ = !d && ("scroll" === e || "scrollend" === e),
                    f = d ? (null !== o ? o + "Capture" : null) : o;
                d = [];
                for (var h, p = r; null !== p; ) {
                    var g = p;
                    if (
                        ((h = g.stateNode),
                        (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                            null === h ||
                            null === f ||
                            (null != (g = tP(p, f)) && d.push(uD(p, g, h))),
                        _)
                    )
                        break;
                    p = p.return;
                }
                0 < d.length && ((o = new l(o, u, null, n, i)), s.push({ event: o, listeners: d }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((o = "mouseover" === e || "pointerover" === e),
                (l = "mouseout" === e || "pointerout" === e),
                !(o && n !== tN && (u = n.relatedTarget || n.fromElement) && (ez(u) || u[eB]))) &&
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
                    ((d = t2),
                    (g = "onMouseLeave"),
                    (f = "onMouseEnter"),
                    (p = "mouse"),
                    ("pointerout" === e || "pointerover" === e) &&
                        ((d = ni), (g = "onPointerLeave"), (f = "onPointerEnter"), (p = "pointer")),
                    (_ = null == l ? o : eX(l)),
                    (h = null == u ? o : eX(u)),
                    ((o = new d(g, p + "leave", l, n, i)).target = _),
                    (o.relatedTarget = h),
                    (g = null),
                    ez(i) === r && (((d = new d(f, p + "enter", u, n, i)).target = h), (d.relatedTarget = _), (g = d)),
                    (_ = g),
                    l && u)
                )
                    a: {
                        for (d = l, f = u, p = 0, h = d; h; h = uw(h)) p++;
                        for (h = 0, g = f; g; g = uw(g)) h++;
                        for (; 0 < p - h; ) (d = uw(d)), p--;
                        for (; 0 < h - p; ) (f = uw(f)), h--;
                        for (; p--; ) {
                            if (d === f || (null !== f && d === f.alternate)) break a;
                            (d = uw(d)), (f = uw(f));
                        }
                        d = null;
                    }
                else d = null;
                null !== l && ux(s, o, l, d, !1), null !== u && null !== _ && ux(s, _, u, d, !0);
            }
            e: {
                if (
                    "select" === (l = (o = r ? eX(r) : window).nodeName && o.nodeName.toLowerCase()) ||
                    ("input" === l && "file" === o.type)
                )
                    var E,
                        A = nR;
                else if (ny(o))
                    if (nO) A = nU;
                    else {
                        A = nM;
                        var I = nP;
                    }
                else
                    (l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type)
                        ? (A = nk)
                        : r && tS(r.elementType) && (A = nR);
                if (A && (A = A(e, r))) {
                    nS(s, A, n, i);
                    break e;
                }
                I && I(e, o, r),
                    "focusout" === e &&
                        r &&
                        "number" === o.type &&
                        null != r.memoizedProps.value &&
                        tp(o, "number", o.value);
            }
            switch (((I = r ? eX(r) : window), e)) {
                case "focusin":
                    (ny(I) || "true" === I.contentEditable) && ((n$ = I), (nz = r), (nq = null));
                    break;
                case "focusout":
                    nq = nz = n$ = null;
                    break;
                case "mousedown":
                    nX = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (nX = !1), nZ(s, n, i);
                    break;
                case "selectionchange":
                    if (nK) break;
                case "keydown":
                case "keyup":
                    nZ(s, n, i);
            }
            if (nc)
                a: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break a;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break a;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break a;
                    }
                    T = void 0;
                }
            else
                nE
                    ? nm(e, n) && (T = "onCompositionEnd")
                    : "keydown" === e && 229 === n.keyCode && (T = "onCompositionStart");
            T &&
                (nf &&
                    "ko" !== n.locale &&
                    (nE || "onCompositionStart" !== T
                        ? "onCompositionEnd" === T && nE && (E = tB())
                        : ((tF = "value" in (tG = i) ? tG.value : tG.textContent), (nE = !0))),
                0 < (I = uL(r, T)).length &&
                    ((T = new t7(T, e, null, n, i)),
                    s.push({ event: T, listeners: I }),
                    E ? (T.data = E) : null !== (E = ng(n)) && (T.data = E))),
                (E = n_ ? nA(e, n) : nI(e, n)) &&
                    0 < (T = uL(r, "onBeforeInput")).length &&
                    ((I = new t7("onBeforeInput", "beforeinput", null, n, i)),
                    s.push({ event: I, listeners: T }),
                    (I.data = E)),
                uE(s, e, r, n, i);
        }
        uS(s, t);
    });
}
function uD(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function uL(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
        var i = e,
            a = i.stateNode;
        if (
            ((5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
                null === a ||
                (null != (i = tP(e, n)) && r.unshift(uD(e, i, a)), null != (i = tP(e, t)) && r.push(uD(e, i, a))),
            3 === e.tag)
        )
            return r;
        e = e.return;
    }
    return [];
}
function uw(e) {
    if (null === e) return null;
    do e = e.return;
    while (e && 5 !== e.tag && 27 !== e.tag);
    return e || null;
}
function ux(e, t, n, r, i) {
    for (var a = t._reactName, s = []; null !== n && n !== r; ) {
        var o = n,
            l = o.alternate,
            u = o.stateNode;
        if (((o = o.tag), null !== l && l === r)) break;
        (5 !== o && 26 !== o && 27 !== o) ||
            null === u ||
            ((l = u),
            i
                ? null != (u = tP(n, a)) && s.unshift(uD(n, u, l))
                : i || (null != (u = tP(n, a)) && s.push(uD(n, u, l)))),
            (n = n.return);
    }
    0 !== s.length && e.push({ event: t, listeners: s });
}
var uP = /\r\n?/g,
    uM = /\u0000|\uFFFD/g;
function uk(e) {
    return ("string" == typeof e ? e : "" + e).replace(uP, "\n").replace(uM, "");
}
function uU(e, t) {
    return (t = uk(t)), uk(e) === t;
}
function uG() {}
function uF(e, t, n, r, i, a) {
    switch (n) {
        case "children":
            "string" == typeof r
                ? "body" === t || ("textarea" === t && "" === r) || tA(e, r)
                : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && tA(e, "" + r);
            break;
        case "className":
            e8(e, "class", r);
            break;
        case "tabIndex":
            e8(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            e8(e, n, r);
            break;
        case "style":
            ty(e, r, a);
            break;
        case "data":
            if ("object" !== t) {
                e8(e, "data", r);
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
            (r = tb("" + r)), e.setAttribute(n, r);
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
                        ? ("input" !== t && uF(e, t, "name", i.name, i, null),
                          uF(e, t, "formEncType", i.formEncType, i, null),
                          uF(e, t, "formMethod", i.formMethod, i, null),
                          uF(e, t, "formTarget", i.formTarget, i, null))
                        : (uF(e, t, "encType", i.encType, i, null),
                          uF(e, t, "method", i.method, i, null),
                          uF(e, t, "target", i.target, i, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
            ) {
                e.removeAttribute(n);
                break;
            }
            (r = tb("" + r)), e.setAttribute(n, r);
            break;
        case "onClick":
            null != r && (e.onclick = uG);
            break;
        case "onScroll":
            null != r && uv("scroll", e);
            break;
        case "onScrollEnd":
            null != r && uv("scrollend", e);
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
            (n = tb("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
            uv("beforetoggle", e), uv("toggle", e), e7(e, "popover", r);
            break;
        case "xlinkActuate":
            e9(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            e9(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            e9(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            e9(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            e9(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            e9(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            e9(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            e9(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            e9(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            e7(e, "is", r);
            break;
        default:
            (2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) ||
                e7(e, (n = tv.get(n) || n), r);
    }
}
function uV(e, t, n, r, i, a) {
    switch (n) {
        case "style":
            ty(e, r, a);
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
            "string" == typeof r ? tA(e, r) : ("number" == typeof r || "bigint" == typeof r) && tA(e, "" + r);
            break;
        case "onScroll":
            null != r && uv("scroll", e);
            break;
        case "onScrollEnd":
            null != r && uv("scrollend", e);
            break;
        case "onClick":
            null != r && (e.onclick = uG);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
            break;
        default:
            if (!e0.hasOwnProperty(n))
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
                    n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, "") : e7(e, n, r);
                }
    }
}
function uB(e, t, n) {
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
            uv("error", e), uv("load", e);
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
                                uF(e, t, r, s, n, null);
                        }
                }
            a && uF(e, t, "srcSet", n.srcSet, n, null), i && uF(e, t, "src", n.src, n, null);
            return;
        case "input":
            uv("invalid", e);
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
                                uF(e, t, i, d, n, null);
                        }
                }
            th(e, r, o, u, c, s, a, !1), tl(e);
            return;
        case "select":
            for (a in (uv("invalid", e), (i = s = r = null), n))
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
                            uF(e, t, a, o, n, null);
                    }
            (t = r), (n = s), (e.multiple = !!i), null != t ? tm(e, !!i, t, !1) : null != n && tm(e, !!i, n, !0);
            return;
        case "textarea":
            for (s in (uv("invalid", e), (r = a = i = null), n))
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
                            uF(e, t, s, o, n, null);
                    }
            tE(e, i, a, r), tl(e);
            return;
        case "option":
            for (u in n)
                n.hasOwnProperty(u) &&
                    null != (i = n[u]) &&
                    ("selected" === u
                        ? (e.selected = i && "function" != typeof i && "symbol" != typeof i)
                        : uF(e, t, u, i, n, null));
            return;
        case "dialog":
            uv("beforetoggle", e), uv("toggle", e), uv("cancel", e), uv("close", e);
            break;
        case "iframe":
        case "object":
            uv("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < uT.length; i++) uv(uT[i], e);
            break;
        case "image":
            uv("error", e), uv("load", e);
            break;
        case "details":
            uv("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            uv("error", e), uv("load", e);
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
                            uF(e, t, c, i, n, null);
                    }
            return;
        default:
            if (tS(t)) {
                for (d in n) n.hasOwnProperty(d) && void 0 !== (i = n[d]) && uV(e, t, d, i, n, void 0);
                return;
            }
    }
    for (o in n) n.hasOwnProperty(o) && null != (i = n[o]) && uF(e, t, o, i, n, null);
}
function uj(e, t, n, r) {
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
            for (h in n) {
                var _ = n[h];
                if (n.hasOwnProperty(h) && null != _)
                    switch (h) {
                        case "checked":
                        case "value":
                            break;
                        case "defaultValue":
                            u = _;
                        default:
                            r.hasOwnProperty(h) || uF(e, t, h, null, r, _);
                    }
            }
            for (var f in r) {
                var h = r[f];
                if (((_ = n[f]), r.hasOwnProperty(f) && (null != h || null != _)))
                    switch (f) {
                        case "type":
                            a = h;
                            break;
                        case "name":
                            i = h;
                            break;
                        case "checked":
                            c = h;
                            break;
                        case "defaultChecked":
                            d = h;
                            break;
                        case "value":
                            s = h;
                            break;
                        case "defaultValue":
                            o = h;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (null != h) throw Error(l(137, t));
                            break;
                        default:
                            h !== _ && uF(e, t, f, h, r, _);
                    }
            }
            tf(e, s, o, u, c, d, a, i);
            return;
        case "select":
            for (a in ((h = s = o = f = null), n))
                if (((u = n[a]), n.hasOwnProperty(a) && null != u))
                    switch (a) {
                        case "value":
                            break;
                        case "multiple":
                            h = u;
                        default:
                            r.hasOwnProperty(a) || uF(e, t, a, null, r, u);
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
                            a !== u && uF(e, t, i, a, r, u);
                    }
            (t = o),
                (n = s),
                (r = h),
                null != f
                    ? tm(e, !!n, f, !1)
                    : !!r != !!n && (null != t ? tm(e, !!n, t, !0) : tm(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            for (o in ((h = f = null), n))
                if (((i = n[o]), n.hasOwnProperty(o) && null != i && !r.hasOwnProperty(o)))
                    switch (o) {
                        case "value":
                        case "children":
                            break;
                        default:
                            uF(e, t, o, null, r, i);
                    }
            for (s in r)
                if (((i = r[s]), (a = n[s]), r.hasOwnProperty(s) && (null != i || null != a)))
                    switch (s) {
                        case "value":
                            f = i;
                            break;
                        case "defaultValue":
                            h = i;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != i) throw Error(l(91));
                            break;
                        default:
                            i !== a && uF(e, t, s, i, r, a);
                    }
            tg(e, f, h);
            return;
        case "option":
            for (var p in n)
                (f = n[p]),
                    n.hasOwnProperty(p) &&
                        null != f &&
                        !r.hasOwnProperty(p) &&
                        ("selected" === p ? (e.selected = !1) : uF(e, t, p, null, r, f));
            for (u in r)
                (f = r[u]),
                    (h = n[u]),
                    r.hasOwnProperty(u) &&
                        f !== h &&
                        (null != f || null != h) &&
                        ("selected" === u
                            ? (e.selected = f && "function" != typeof f && "symbol" != typeof f)
                            : uF(e, t, u, f, r, h));
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
            for (var g in n)
                (f = n[g]), n.hasOwnProperty(g) && null != f && !r.hasOwnProperty(g) && uF(e, t, g, null, r, f);
            for (c in r)
                if (((f = r[c]), (h = n[c]), r.hasOwnProperty(c) && f !== h && (null != f || null != h)))
                    switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (null != f) throw Error(l(137, t));
                            break;
                        default:
                            uF(e, t, c, f, r, h);
                    }
            return;
        default:
            if (tS(t)) {
                for (var E in n)
                    (f = n[E]),
                        n.hasOwnProperty(E) && void 0 !== f && !r.hasOwnProperty(E) && uV(e, t, E, void 0, r, f);
                for (d in r)
                    (f = r[d]),
                        (h = n[d]),
                        r.hasOwnProperty(d) && f !== h && (void 0 !== f || void 0 !== h) && uV(e, t, d, f, r, h);
                return;
            }
    }
    for (var A in n) (f = n[A]), n.hasOwnProperty(A) && null != f && !r.hasOwnProperty(A) && uF(e, t, A, null, r, f);
    for (_ in r)
        (f = r[_]), (h = n[_]), r.hasOwnProperty(_) && f !== h && (null != f || null != h) && uF(e, t, _, f, r, h);
}
var uH = null,
    uY = null;
function uW(e) {
    return 9 === e.nodeType ? e : e.ownerDocument;
}
function uK(e) {
    switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0;
    }
}
function u$(e, t) {
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
var uq = null;
function uX() {
    var e = window.event;
    return e && "popstate" === e.type ? e !== uq && ((uq = e), !0) : ((uq = null), !1);
}
var uZ = "function" == typeof setTimeout ? setTimeout : void 0,
    uQ = "function" == typeof clearTimeout ? clearTimeout : void 0,
    uJ = "function" == typeof Promise ? Promise : void 0,
    u0 =
        "function" == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== uJ
              ? function (e) {
                    return uJ.resolve(null).then(e).catch(u1);
                }
              : uZ;
function u1(e) {
    setTimeout(function () {
        throw e;
    });
}
function u2(e) {
    return "head" === e;
}
function u3(e, t) {
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
                    if ((1 & n && cr(s.documentElement), 2 & n && cr(s.body), 4 & n))
                        for (cr((n = s.head)), s = n.firstChild; s; ) {
                            var o = s.nextSibling,
                                l = s.nodeName;
                            s[eK] ||
                                "SCRIPT" === l ||
                                "STYLE" === l ||
                                ("LINK" === l && "stylesheet" === s.rel.toLowerCase()) ||
                                n.removeChild(s),
                                (s = o);
                        }
                }
                if (0 === i) {
                    e.removeChild(a), d_(t);
                    return;
                }
                i--;
            } else "$" === n || "$?" === n || "$!" === n ? i++ : (r = n.charCodeAt(0) - 48);
        else r = 0;
        n = a;
    } while (n);
    d_(t);
}
function u6(e) {
    var t = e.firstChild;
    for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
            case "HTML":
            case "HEAD":
            case "BODY":
                u6(n), e$(n);
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
function u4(e, t, n, r) {
    for (; 1 === e.nodeType; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
        } else if (r) {
            if (!e[eK])
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
        if (null === (e = u9(e.nextSibling))) break;
    }
    return null;
}
function u5(e, t, n) {
    if ("" === t) return null;
    for (; 3 !== e.nodeType; )
        if (
            ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) ||
            null === (e = u9(e.nextSibling))
        )
            return null;
    return e;
}
function u7(e) {
    return "$!" === e.data || ("$?" === e.data && "complete" === e.ownerDocument.readyState);
}
function u8(e, t) {
    var n = e.ownerDocument;
    if ("$?" !== e.data || "complete" === n.readyState) t();
    else {
        var r = function () {
            t(), n.removeEventListener("DOMContentLoaded", r);
        };
        n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
    }
}
function u9(e) {
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
var ce = null;
function ct(e) {
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
function cn(e, t, n) {
    switch (((t = uW(n)), e)) {
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
function cr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    e$(e);
}
var ci = new Map(),
    ca = new Set();
function cs(e) {
    return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
}
var co = F.d;
F.d = {
    f: function e() {
        var e = co.f(),
            t = lP();
        return e || t;
    },
    r: function e(e) {
        var t = eq(e);
        null !== t && 5 === t.tag && "form" === t.type ? aQ(t) : co.r(e);
    },
    D: cc,
    C: cd,
    L: c_,
    m: cf,
    X: cp,
    S: ch,
    M: cm,
};
var cl = "u" < typeof document ? null : document;
function cu(e, t, n) {
    var r = cl;
    if (r && "string" == typeof t && t) {
        var i = t_(t);
        (i = 'link[rel="' + e + '"][href="' + i + '"]'),
            "string" == typeof n && (i += '[crossorigin="' + n + '"]'),
            ca.has(i) ||
                (ca.add(i),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(i) &&
                    (uB((t = r.createElement("link")), "link", e), eQ(t), r.head.appendChild(t)));
    }
}
function cc(e) {
    co.D(e), cu("dns-prefetch", e, null);
}
function cd(e, t) {
    co.C(e, t), cu("preconnect", e, t);
}
function c_(e, t, n) {
    co.L(e, t, n);
    var r = cl;
    if (r && e && t) {
        var i = 'link[rel="preload"][as="' + t_(t) + '"]';
        "image" === t && n && n.imageSrcSet
            ? ((i += '[imagesrcset="' + t_(n.imageSrcSet) + '"]'),
              "string" == typeof n.imageSizes && (i += '[imagesizes="' + t_(n.imageSizes) + '"]'))
            : (i += '[href="' + t_(e) + '"]');
        var a = i;
        switch (t) {
            case "style":
                a = cE(e);
                break;
            case "script":
                a = cy(e);
        }
        ci.has(a) ||
            ((e = p({ rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
            ci.set(a, e),
            null !== r.querySelector(i) ||
                ("style" === t && r.querySelector(cA(a))) ||
                ("script" === t && r.querySelector(cS(a))) ||
                (uB((t = r.createElement("link")), "link", e), eQ(t), r.head.appendChild(t)));
    }
}
function cf(e, t) {
    co.m(e, t);
    var n = cl;
    if (n && e) {
        var r = t && "string" == typeof t.as ? t.as : "script",
            i = 'link[rel="modulepreload"][as="' + t_(r) + '"][href="' + t_(e) + '"]',
            a = i;
        switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                a = cy(e);
        }
        if (!ci.has(a) && ((e = p({ rel: "modulepreload", href: e }, t)), ci.set(a, e), null === n.querySelector(i))) {
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(cS(a))) return;
            }
            uB((r = n.createElement("link")), "link", e), eQ(r), n.head.appendChild(r);
        }
    }
}
function ch(e, t, n) {
    co.S(e, t, n);
    var r = cl;
    if (r && e) {
        var i = eZ(r).hoistableStyles,
            a = cE(e);
        t = t || "default";
        var s = i.get(a);
        if (!s) {
            var o = { loading: 0, preload: null };
            if ((s = r.querySelector(cA(a)))) o.loading = 5;
            else {
                (e = p({ rel: "stylesheet", href: e, "data-precedence": t }, n)), (n = ci.get(a)) && cb(e, n);
                var l = (s = r.createElement("link"));
                eQ(l),
                    uB(l, "link", e),
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
                    cC(s, t, r);
            }
            (s = { type: "stylesheet", instance: s, count: 1, state: o }), i.set(a, s);
        }
    }
}
function cp(e, t) {
    co.X(e, t);
    var n = cl;
    if (n && e) {
        var r = eZ(n).hoistableScripts,
            i = cy(e),
            a = r.get(i);
        a ||
            ((a = n.querySelector(cS(i))) ||
                ((e = p({ src: e, async: !0 }, t)),
                (t = ci.get(i)) && cN(e, t),
                eQ((a = n.createElement("script"))),
                uB(a, "link", e),
                n.head.appendChild(a)),
            (a = { type: "script", instance: a, count: 1, state: null }),
            r.set(i, a));
    }
}
function cm(e, t) {
    co.M(e, t);
    var n = cl;
    if (n && e) {
        var r = eZ(n).hoistableScripts,
            i = cy(e),
            a = r.get(i);
        a ||
            ((a = n.querySelector(cS(i))) ||
                ((e = p({ src: e, async: !0, type: "module" }, t)),
                (t = ci.get(i)) && cN(e, t),
                eQ((a = n.createElement("script"))),
                uB(a, "link", e),
                n.head.appendChild(a)),
            (a = { type: "script", instance: a, count: 1, state: null }),
            r.set(i, a));
    }
}
function cg(e, t, n, r) {
    var i = (i = z.current) ? cs(i) : null;
    if (!i) throw Error(l(446));
    switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return "string" == typeof n.precedence && "string" == typeof n.href
                ? ((t = cE(n.href)),
                  (r = (n = eZ(i).hoistableStyles).get(t)) ||
                      ((r = { type: "style", instance: null, count: 0, state: null }), n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                e = cE(n.href);
                var a = eZ(i).hoistableStyles,
                    s = a.get(e);
                if (
                    (s ||
                        ((i = i.ownerDocument || i),
                        (s = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
                        a.set(e, s),
                        (a = i.querySelector(cA(e))) && !a._p && ((s.instance = a), (s.state.loading = 5)),
                        ci.has(e) ||
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
                            ci.set(e, n),
                            a || cT(i, e, n, s.state))),
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
                    ? ((t = cy(n)),
                      (r = (n = eZ(i).hoistableScripts).get(t)) ||
                          ((r = { type: "script", instance: null, count: 0, state: null }), n.set(t, r)),
                      r)
                    : { type: "void", instance: null, count: 0, state: null }
            );
        default:
            throw Error(l(444, e));
    }
}
function cE(e) {
    return 'href="' + t_(e) + '"';
}
function cA(e) {
    return 'link[rel="stylesheet"][' + e + "]";
}
function cI(e) {
    return p({}, e, { "data-precedence": e.precedence, precedence: null });
}
function cT(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
        ? (r.loading = 1)
        : ((r.preload = t = e.createElement("link")),
          t.addEventListener("load", function () {
              return (r.loading |= 1);
          }),
          t.addEventListener("error", function () {
              return (r.loading |= 2);
          }),
          uB(t, "link", n),
          eQ(t),
          e.head.appendChild(t));
}
function cy(e) {
    return '[src="' + t_(e) + '"]';
}
function cS(e) {
    return "script[async]" + e;
}
function cv(e, t, n) {
    if ((t.count++, null === t.instance))
        switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + t_(n.href) + '"]');
                if (r) return (t.instance = r), eQ(r), r;
                var i = p({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null,
                });
                return (
                    eQ((r = (e.ownerDocument || e).createElement("style"))),
                    uB(r, "style", i),
                    cC(r, n.precedence, e),
                    (t.instance = r)
                );
            case "stylesheet":
                i = cE(n.href);
                var a = e.querySelector(cA(i));
                if (a) return (t.state.loading |= 4), (t.instance = a), eQ(a), a;
                (r = cI(n)), (i = ci.get(i)) && cb(r, i), eQ((a = (e.ownerDocument || e).createElement("link")));
                var s = a;
                return (
                    (s._p = new Promise(function (e, t) {
                        (s.onload = e), (s.onerror = t);
                    })),
                    uB(a, "link", r),
                    (t.state.loading |= 4),
                    cC(a, n.precedence, e),
                    (t.instance = a)
                );
            case "script":
                if (((a = cy(n.src)), (i = e.querySelector(cS(a))))) return (t.instance = i), eQ(i), i;
                return (
                    (r = n),
                    (i = ci.get(a)) && cN((r = p({}, n)), i),
                    eQ((i = (e = e.ownerDocument || e).createElement("script"))),
                    uB(i, "link", r),
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
            ((r = t.instance), (t.state.loading |= 4), cC(r, n.precedence, e)),
        t.instance
    );
}
function cC(e, t, n) {
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
function cb(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.title && (e.title = t.title);
}
function cN(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.integrity && (e.integrity = t.integrity);
}
var cR = null;
function cO(e, t, n) {
    if (null === cR) {
        var r = new Map(),
            i = (cR = new Map());
        i.set(n, r);
    } else (r = (i = cR).get(n)) || ((r = new Map()), i.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
            !(a[eK] || a[eF] || ("link" === e && "stylesheet" === a.getAttribute("rel"))) &&
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
function cD(e, t, n) {
    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null);
}
function cL(e, t, n) {
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
function cw(e) {
    return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
}
var cx = null;
function cP() {}
function cM(e, t, n) {
    if (null === cx) throw Error(l(475));
    var r = cx;
    if (
        "stylesheet" === t.type &&
        ("string" != typeof n.media || !1 !== matchMedia(n.media).matches) &&
        0 == (4 & t.state.loading)
    ) {
        if (null === t.instance) {
            var i = cE(n.href),
                a = e.querySelector(cA(i));
            if (a) {
                null !== (e = a._p) &&
                    "object" == typeof e &&
                    "function" == typeof e.then &&
                    (r.count++, (r = cU.bind(r)), e.then(r, r)),
                    (t.state.loading |= 4),
                    (t.instance = a),
                    eQ(a);
                return;
            }
            (a = e.ownerDocument || e), (n = cI(n)), (i = ci.get(i)) && cb(n, i), eQ((a = a.createElement("link")));
            var s = a;
            (s._p = new Promise(function (e, t) {
                (s.onload = e), (s.onerror = t);
            })),
                uB(a, "link", n),
                (t.instance = a);
        }
        null === r.stylesheets && (r.stylesheets = new Map()),
            r.stylesheets.set(t, e),
            (e = t.state.preload) &&
                0 == (3 & t.state.loading) &&
                (r.count++, (t = cU.bind(r)), e.addEventListener("load", t), e.addEventListener("error", t));
    }
}
function ck() {
    if (null === cx) throw Error(l(475));
    var e = cx;
    return (
        e.stylesheets && 0 === e.count && cF(e, e.stylesheets),
        0 < e.count
            ? function (t) {
                  var n = setTimeout(function () {
                      if ((e.stylesheets && cF(e, e.stylesheets), e.unsuspend)) {
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
function cU() {
    if ((this.count--, 0 === this.count)) {
        if (this.stylesheets) cF(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            (this.unsuspend = null), e();
        }
    }
}
var cG = null;
function cF(e, t) {
    (e.stylesheets = null),
        null !== e.unsuspend && (e.count++, (cG = new Map()), t.forEach(cV, e), (cG = null), cU.call(e));
}
function cV(e, t) {
    if (!(4 & t.state.loading)) {
        var n = cG.get(e);
        if (n) var r = n.get(null);
        else {
            (n = new Map()), cG.set(e, n);
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
            (r = cU.bind(this)),
            i.addEventListener("load", r),
            i.addEventListener("error", r),
            a
                ? a.parentNode.insertBefore(i, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild),
            (t.state.loading |= 4);
    }
}
var cB = { $$typeof: C, Provider: null, Consumer: null, _currentValue: V, _currentValue2: V, _threadCount: 0 };
function cj(e, t, n, r, i, a, s, o) {
    (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
        (this.callbackPriority = 0),
        (this.expirationTimes = eO(-1)),
        (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = eO(0)),
        (this.hiddenUpdates = eO(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = s),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = o),
        (this.incompleteTransitions = new Map());
}
function cH(e, t, n, r, i, a, s, o, l, u, c, d) {
    return (
        (e = new cj(e, t, n, s, o, l, u, d)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = rm(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ii()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        iD(a),
        e
    );
}
function cY(e) {
    return e ? (e = rh) : rh;
}
function cW(e, t, n, r, i, a) {
    (i = cY(i)),
        null === r.context ? (r.context = i) : (r.pendingContext = i),
        ((r = iw(t)).payload = { element: n }),
        null !== (a = void 0 === a ? null : a) && (r.callback = a),
        null !== (n = ix(e, r, t)) && (lO(n, e, t), iP(n, e, t));
}
function cK(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function c$(e, t) {
    cK(e, t), (e = e.alternate) && cK(e, t);
}
function cz(e) {
    if (13 === e.tag) {
        var t = rd(e, 0x4000000);
        null !== t && lO(t, e, 0x4000000), c$(e, 0x4000000);
    }
}
var cq = !0;
function cX(e, t, n, r) {
    var i = G.T;
    G.T = null;
    var a = F.p;
    try {
        (F.p = 2), cQ(e, t, n, r);
    } finally {
        (F.p = a), (G.T = i);
    }
}
function cZ(e, t, n, r) {
    var i = G.T;
    G.T = null;
    var a = F.p;
    try {
        (F.p = 8), cQ(e, t, n, r);
    } finally {
        (F.p = a), (G.T = i);
    }
}
function cQ(e, t, n, r) {
    if (cq) {
        var i = cJ(r);
        if (null === i) uO(e, t, r, c0, n), dt(e, r);
        else if (dr(i, e, t, n, r)) r.stopPropagation();
        else if ((dt(e, r), 4 & t && -1 < de.indexOf(e))) {
            for (; null !== i; ) {
                var a = eq(i);
                if (null !== a)
                    switch (a.tag) {
                        case 3:
                            if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                var s = eS(a.pendingLanes);
                                if (0 !== s) {
                                    var o = a;
                                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; s; ) {
                                        var l = 1 << (31 - eg(s));
                                        (o.entanglements[1] |= l), (s &= ~l);
                                    }
                                    uo(a), 0 == (6 & o4) && ((lp = ea() + 500), ul(0, !1));
                                }
                            }
                            break;
                        case 13:
                            null !== (o = rd(a, 2)) && lO(o, a, 2), lP(), c$(a, 2);
                    }
                if ((null === (a = cJ(r)) && uO(e, t, r, c0, n), a === i)) break;
                i = a;
            }
            null !== i && r.stopPropagation();
        } else uO(e, t, r, null, n);
    }
}
function cJ(e) {
    return c1((e = tR(e)));
}
var c0 = null;
function c1(e) {
    if (((c0 = null), null !== (e = ez(e)))) {
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
    return (c0 = e), null;
}
function c2(e) {
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
            switch (es()) {
                case eo:
                    return 2;
                case el:
                    return 8;
                case eu:
                case ec:
                    return 32;
                case ed:
                    return 0x10000000;
                default:
                    return 32;
            }
        default:
            return 32;
    }
}
var c3 = !1,
    c6 = null,
    c4 = null,
    c5 = null,
    c7 = new Map(),
    c8 = new Map(),
    c9 = [],
    de =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
            " ",
        );
function dt(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            c6 = null;
            break;
        case "dragenter":
        case "dragleave":
            c4 = null;
            break;
        case "mouseover":
        case "mouseout":
            c5 = null;
            break;
        case "pointerover":
        case "pointerout":
            c7.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            c8.delete(t.pointerId);
    }
}
function dn(e, t, n, r, i, a) {
    return (
        null === e || e.nativeEvent !== a
            ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
              null !== t && null !== (t = eq(t)) && cz(t))
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i)),
        e
    );
}
function dr(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (c6 = dn(c6, e, t, n, r, i)), !0;
        case "dragenter":
            return (c4 = dn(c4, e, t, n, r, i)), !0;
        case "mouseover":
            return (c5 = dn(c5, e, t, n, r, i)), !0;
        case "pointerover":
            var a = i.pointerId;
            return c7.set(a, dn(c7.get(a) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (a = i.pointerId), c8.set(a, dn(c8.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function di(e) {
    var t = ez(e.target);
    if (null !== t) {
        var n = c(t);
        if (null !== n) {
            if (13 === (t = n.tag)) {
                if (null !== (t = d(n))) {
                    (e.blockedOn = t),
                        eU(e.priority, function () {
                            if (13 === n.tag) {
                                var e = lN(),
                                    t = rd(n, (e = eP(e)));
                                null !== t && lO(t, n, e), c$(n, e);
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
function da(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = cJ(e.nativeEvent);
        if (null !== n) return null !== (t = eq(n)) && cz(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (tN = r), n.target.dispatchEvent(r), (tN = null), t.shift();
    }
    return !0;
}
function ds(e, t, n) {
    da(e) && n.delete(t);
}
function dl() {
    (c3 = !1),
        null !== c6 && da(c6) && (c6 = null),
        null !== c4 && da(c4) && (c4 = null),
        null !== c5 && da(c5) && (c5 = null),
        c7.forEach(ds),
        c8.forEach(ds);
}
function du(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), c3 || ((c3 = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, dl)));
}
var dc = null;
function dd(e) {
    dc !== e &&
        ((dc = e),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
            dc === e && (dc = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    r = e[t + 1],
                    i = e[t + 2];
                if ("function" != typeof r)
                    if (null === c1(r || n)) continue;
                    else break;
                var a = eq(n);
                null !== a &&
                    (e.splice(t, 3), (t -= 3), aX(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
            }
        }));
}
function d_(e) {
    function t(t) {
        return du(t, e);
    }
    null !== c6 && du(c6, e), null !== c4 && du(c4, e), null !== c5 && du(c5, e), c7.forEach(t), c8.forEach(t);
    for (var n = 0; n < c9.length; n++) {
        var r = c9[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < c9.length && null === (n = c9[0]).blockedOn; ) di(n), null === n.blockedOn && c9.shift();
    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (r = 0; r < n.length; r += 3) {
            var i = n[r],
                a = n[r + 1],
                s = i[eV] || null;
            if ("function" == typeof a) s || dd(n);
            else if (s) {
                var o = null;
                if (a && a.hasAttribute("formAction")) {
                    if (((i = a), (s = a[eV] || null))) o = s.formAction;
                    else if (null !== c1(i)) continue;
                } else o = s.action;
                "function" == typeof o ? (n[r + 1] = o) : (n.splice(r, 3), (r -= 3)), dd(n);
            }
        }
}
function df(e) {
    this._internalRoot = e;
}
function dh(e) {
    this._internalRoot = e;
}
(dh.prototype.render = df.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(l(409));
        cW(t.current, lN(), e, t, null, null);
    }),
    (dh.prototype.unmount = df.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cW(e.current, 2, null, e, null, null), lP(), (t[eB] = null);
            }
        }),
    (dh.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ek();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < c9.length && 0 !== t && t < c9[n].priority; n++);
            c9.splice(n, 0, e), 0 === n && di(e);
        }
    });
var dp = s.version;
if ("19.1.0" !== dp) throw Error(l(527, dp, "19.1.0"));
F.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(l(188));
        throw Error(l(268, (e = Object.keys(e).join(","))));
    }
    return null === (e = null !== (e = f(t)) ? h(e) : null) ? null : e.stateNode;
};
var dm = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.1.0",
};
if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var dg = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dg.isDisabled && dg.supportsFiber)
        try {
            (eh = dg.inject(dm)), (ep = dg);
        } catch (e) {}
}
t.createRoot = function (e, t) {
    if (!u(e)) throw Error(l(299));
    var n = !1,
        r = "",
        i = sN,
        a = sR,
        s = sO,
        o = null;
    return (
        null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
            void 0 !== t.onCaughtError && (a = t.onCaughtError),
            void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
            void 0 !== t.unstable_transitionCallbacks && (o = t.unstable_transitionCallbacks)),
        (t = cH(e, 1, !1, null, null, n, r, i, a, s, o, null)),
        (e[eB] = t.current),
        uN(e),
        new df(t)
    );
};
