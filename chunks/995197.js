"use strict";
var r,
    i = n(72290),
    s = n(411071),
    a = n(64700),
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
function c(e) {
    if (u(e) !== e) throw Error(l(188));
}
var _ = Object.assign,
    f = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    A = Symbol.for("react.provider"),
    I = Symbol.for("react.consumer"),
    T = Symbol.for("react.context"),
    S = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    N = Symbol.for("react.suspense_list"),
    O = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy");
Symbol.for("react.scope");
var v = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
var C = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var b = Symbol.iterator;
function D(e) {
    return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (b && e[b]) || e["@@iterator"])
          ? e
          : null;
}
var L = Symbol.for("react.client.reference"),
    w = Array.isArray,
    M = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = { pending: !1, data: null, method: null, action: null },
    k = [],
    x = -1;
function G(e) {
    return { current: e };
}
function V(e) {
    0 > x || ((e.current = k[x]), (k[x] = null), x--);
}
function F(e, t) {
    (k[++x] = e.current), (e.current = t);
}
var B = G(null),
    H = G(null),
    Y = G(null),
    W = G(null);
function j(e, t) {
    switch ((F(Y, t), F(H, e), F(B, null), t.nodeType)) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? ua(e) : 0;
            break;
        default:
            if (((e = t.tagName), (t = t.namespaceURI))) e = uo((t = ua(t)), e);
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
    V(B), F(B, e);
}
function K() {
    V(B), V(H), V(Y);
}
function $(e) {
    null !== e.memoizedState && F(W, e);
    var t = B.current,
        n = uo(t, e.type);
    t !== n && (F(H, e), F(B, n));
}
function z(e) {
    H.current === e && (V(B), V(H)), W.current === e && (V(W), (uX._currentValue = U));
}
var q = Object.prototype.hasOwnProperty,
    X = s.unstable_scheduleCallback,
    Q = s.unstable_cancelCallback,
    J = s.unstable_shouldYield,
    Z = s.unstable_requestPaint,
    ee = s.unstable_now,
    et = s.unstable_getCurrentPriorityLevel,
    en = s.unstable_ImmediatePriority,
    er = s.unstable_UserBlockingPriority,
    ei = s.unstable_NormalPriority,
    es = s.unstable_LowPriority,
    ea = s.unstable_IdlePriority,
    eo = s.log,
    el = s.unstable_setDisableYieldValue,
    eu = null,
    ed = null;
function ec(e) {
    if (("function" == typeof eo && el(e), ed && "function" == typeof ed.setStrictMode))
        try {
            ed.setStrictMode(eu, e);
        } catch (e) {}
}
var e_ = Math.clz32
        ? Math.clz32
        : function (e) {
              return 0 == (e >>>= 0) ? 32 : (31 - ((ef(e) / eE) | 0)) | 0;
          },
    ef = Math.log,
    eE = Math.LN2,
    eh = 256,
    ep = 4194304;
function em(e) {
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
function eg(e, t, n) {
    var r = e.pendingLanes;
    if (0 === r) return 0;
    var i = 0,
        s = e.suspendedLanes,
        a = e.pingedLanes;
    e = e.warmLanes;
    var o = 0x7ffffff & r;
    return (
        0 !== o
            ? 0 != (r = o & ~s)
                ? (i = em(r))
                : 0 != (a &= o)
                  ? (i = em(a))
                  : n || (0 != (n = o & ~e) && (i = em(n)))
            : 0 != (o = r & ~s)
              ? (i = em(o))
              : 0 !== a
                ? (i = em(a))
                : n || (0 != (n = r & ~e) && (i = em(n))),
        0 === i
            ? 0
            : 0 !== t && t !== i && 0 == (t & s) && ((s = i & -i) >= (n = t & -t) || (32 === s && 0 != (4194048 & n)))
              ? t
              : i
    );
}
function eA(e, t) {
    return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
}
function eI() {
    var e = eh;
    return 0 == (4194048 & (eh <<= 1)) && (eh = 256), e;
}
function eT() {
    var e = ep;
    return 0 == (0x3c00000 & (ep <<= 1)) && (ep = 4194304), e;
}
function eS(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function ey(e, t) {
    (e.pendingLanes |= t), 0x10000000 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function eN(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - e_(t);
    (e.entangledLanes |= t), (e.entanglements[r] = 0x40000000 | e.entanglements[r] | (4194090 & n));
}
function eO(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - e_(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
function eR(e) {
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
function ev(e) {
    return 2 < (e &= -e) ? (8 < e ? (0 != (0x7ffffff & e) ? 32 : 0x10000000) : 8) : 2;
}
function eC() {
    var e = P.p;
    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : u9(e.type);
}
var eb = Math.random().toString(36).slice(2),
    eD = "__reactFiber$" + eb,
    eL = "__reactProps$" + eb,
    ew = "__reactContainer$" + eb,
    eM = "__reactEvents$" + eb,
    eP = "__reactListeners$" + eb,
    eU = "__reactHandles$" + eb,
    ek = "__reactResources$" + eb,
    ex = "__reactMarker$" + eb;
function eG(e) {
    delete e[eD], delete e[eL], delete e[eM], delete e[eP], delete e[eU];
}
function eV(e) {
    var t = e[eD];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ew] || n[eD])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = uT(e); null !== e; ) {
                    if ((n = e[eD])) return n;
                    e = uT(e);
                }
            return t;
        }
        n = (e = n).parentNode;
    }
    return null;
}
function eF(e) {
    if ((e = e[eD] || e[ew])) {
        var t = e.tag;
        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
    }
    return null;
}
function eB(e) {
    var t = e.tag;
    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
    throw Error(l(33));
}
function eH(e) {
    var t = e[ek];
    return t || (t = e[ek] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
}
function eY(e) {
    e[ex] = !0;
}
var eW = new Set(),
    ej = {};
function eK(e, t) {
    e$(e, t), e$(e + "Capture", t);
}
function e$(e, t) {
    for (ej[e] = t, e = 0; e < t.length; e++) eW.add(t[e]);
}
var ez = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    eq = {},
    eX = {};
function eQ(e, t, n) {
    if (q.call(eX, t) || (!q.call(eq, t) && (ez.test(t) ? (eX[t] = !0) : ((eq[t] = !0), !1))))
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
function eJ(e, t, n) {
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
function eZ(e, t, n, r) {
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
function e0(e) {
    if (void 0 === tP)
        try {
            throw Error();
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            (tP = (t && t[1]) || ""),
                (tU =
                    -1 < e.stack.indexOf("\n    at")
                        ? " (<anonymous>)"
                        : -1 < e.stack.indexOf("@")
                          ? "@unknown:0:0"
                          : "");
        }
    return "\n" + tP + e + tU;
}
var e1 = !1;
function e2(e, t) {
    if (!e || e1) return "";
    e1 = !0;
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
        var s = r.DetermineComponentFrameRoot(),
            a = s[0],
            o = s[1];
        if (a && o) {
            var l = a.split("\n"),
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
                                var d = "\n" + l[r].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        d.includes("<anonymous>") &&
                                        (d = d.replace("<anonymous>", e.displayName)),
                                    d
                                );
                            }
                        while (1 <= r && 0 <= i);
                    break;
                }
        }
    } finally {
        (e1 = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? e0(n) : "";
}
function e3(e) {
    try {
        var t = "";
        do
            (t += (function (e) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        return e0(e.type);
                    case 16:
                        return e0("Lazy");
                    case 13:
                        return e0("Suspense");
                    case 19:
                        return e0("SuspenseList");
                    case 0:
                    case 15:
                        return e2(e.type, !1);
                    case 11:
                        return e2(e.type.render, !1);
                    case 1:
                        return e2(e.type, !0);
                    case 31:
                        return e0("Activity");
                    default:
                        return "";
                }
            })(e)),
                (e = e.return);
        while (e);
        return t;
    } catch (e) {
        return "\nError generating stack: " + e.message + "\n" + e.stack;
    }
}
function e6(e) {
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
function e4(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
}
function e5(e) {
    e._valueTracker ||
        (e._valueTracker = (function (e) {
            var t = e4(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var i = n.get,
                    s = n.set;
                return (
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                            return i.call(this);
                        },
                        set: function (e) {
                            (r = "" + e), s.call(this, e);
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
        })(e));
}
function e7(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = e4(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function e8(e) {
    if (void 0 === (e = e || ("u" > typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
var e9 = /[\n"\\]/g;
function te(e) {
    return e.replace(e9, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
}
function tt(e, t, n, r, i, s, a, o) {
    (e.name = ""),
        null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a
            ? (e.type = a)
            : e.removeAttribute("type"),
        null != t
            ? "number" === a
                ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + e6(t))
                : e.value !== "" + e6(t) && (e.value = "" + e6(t))
            : ("submit" !== a && "reset" !== a) || e.removeAttribute("value"),
        null != t ? tr(e, a, e6(t)) : null != n ? tr(e, a, e6(n)) : null != r && e.removeAttribute("value"),
        null == i && null != s && (e.defaultChecked = !!s),
        null != i && (e.checked = i && "function" != typeof i && "symbol" != typeof i),
        null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o
            ? (e.name = "" + e6(o))
            : e.removeAttribute("name");
}
function tn(e, t, n, r, i, s, a, o) {
    if (
        (null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s && (e.type = s),
        null != t || null != n)
    ) {
        if (("submit" === s || "reset" === s) && null == t) return;
        (n = null != n ? "" + e6(n) : ""),
            (t = null != t ? "" + e6(t) : n),
            o || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (r = "function" != typeof (r = null != r ? r : i) && "symbol" != typeof r && !!r),
        (e.checked = o ? e.checked : !!r),
        (e.defaultChecked = !!r),
        null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a && (e.name = a);
}
function tr(e, t, n) {
    ("number" === t && e8(e.ownerDocument) === e) || e.defaultValue === "" + n || (e.defaultValue = "" + n);
}
function ti(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (i = 0, n = "" + e6(n), t = null; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
    }
}
function ts(e, t, n) {
    if (null != t && ((t = "" + e6(t)) !== e.value && (e.value = t), null == n)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
    }
    e.defaultValue = null != n ? "" + e6(n) : "";
}
function ta(e, t, n, r) {
    if (null == t) {
        if (null != r) {
            if (null != n) throw Error(l(92));
            if (w(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
            }
            n = r;
        }
        null == n && (n = ""), (t = n);
    }
    (e.defaultValue = n = e6(t)), (r = e.textContent) === n && "" !== r && null !== r && (e.value = r);
}
function to(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var tl = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
    ),
);
function tu(e, t, n) {
    var r = 0 === t.indexOf("--");
    null == n || "boolean" == typeof n || "" === n
        ? r
            ? e.setProperty(t, "")
            : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
        : r
          ? e.setProperty(t, n)
          : "number" != typeof n || 0 === n || tl.has(t)
            ? "float" === t
                ? (e.cssFloat = n)
                : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
}
function td(e, t, n) {
    if (null != t && "object" != typeof t) throw Error(l(62));
    if (((e = e.style), null != n)) {
        for (var r in n)
            !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? (e.cssFloat = "") : (e[r] = ""));
        for (var i in t) (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && tu(e, i, r);
    } else for (var s in t) t.hasOwnProperty(s) && tu(e, s, t[s]);
}
function tc(e) {
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
var t_ = new Map([
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
    tf =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function tE(e) {
    return tf.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
}
var th = null;
function tp(e) {
    return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    );
}
var tm = null,
    tg = null;
function tA(e) {
    var t = eF(e);
    if (t && (e = t.stateNode)) {
        var n = e[eL] || null;
        switch (((e = t.stateNode), t.type)) {
            case "input":
                if (
                    (tt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                    (t = n.name),
                    "radio" === n.type && null != t)
                ) {
                    for (n = e; n.parentNode; ) n = n.parentNode;
                    for (
                        n = n.querySelectorAll('input[name="' + te("" + t) + '"][type="radio"]'), t = 0;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = r[eL] || null;
                            if (!i) throw Error(l(90));
                            tt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                        }
                    }
                    for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && e7(r);
                }
                break;
            case "textarea":
                ts(e, n.value, n.defaultValue);
                break;
            case "select":
                null != (t = n.value) && ti(e, !!n.multiple, t, !1);
        }
    }
}
var tI = !1;
function tT(e, t, n) {
    if (tI) return e(t, n);
    tI = !0;
    try {
        return e(t);
    } finally {
        if (((tI = !1), (null !== tm || null !== tg) && (lt(), tm && ((t = tm), (e = tg), (tg = tm = null), tA(t), e))))
            for (t = 0; t < e.length; t++) tA(e[t]);
    }
}
function tS(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = n[eL] || null;
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
var ty = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    tN = !1;
if (ty)
    try {
        var tO = {};
        Object.defineProperty(tO, "passive", {
            get: function () {
                tN = !0;
            },
        }),
            window.addEventListener("test", tO, tO),
            window.removeEventListener("test", tO, tO);
    } catch (e) {
        tN = !1;
    }
var tR = null,
    tv = null,
    tC = null;
function tb() {
    if (tC) return tC;
    var e,
        t,
        n = tv,
        r = n.length,
        i = "value" in tR ? tR.value : tR.textContent,
        s = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[s - t]; t++);
    return (tC = i.slice(e, 1 < t ? 1 - t : void 0));
}
function tD(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    );
}
function tL() {
    return !0;
}
function tw() {
    return !1;
}
function tM(e) {
    function t(t, n, r, i, s) {
        for (var a in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null),
        e))
            e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
        return (
            (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue)
                ? tL
                : tw),
            (this.isPropagationStopped = tw),
            this
        );
    }
    return (
        _(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                    (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                    (this.isDefaultPrevented = tL));
            },
            stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                    (e.stopPropagation
                        ? e.stopPropagation()
                        : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                    (this.isPropagationStopped = tL));
            },
            persist: function () {},
            isPersistent: tL,
        }),
        t
    );
}
var tP,
    tU,
    tk,
    tx,
    tG,
    tV = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    tF = tM(tV),
    tB = _({}, tV, { view: 0, detail: 0 }),
    tH = tM(tB),
    tY = _({}, tB, {
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
        getModifierState: t0,
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
                : (e !== tG &&
                      (tG && "mousemove" === e.type
                          ? ((tk = e.screenX - tG.screenX), (tx = e.screenY - tG.screenY))
                          : (tx = tk = 0),
                      (tG = e)),
                  tk);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : tx;
        },
    }),
    tW = tM(tY),
    tj = tM(_({}, tY, { dataTransfer: 0 })),
    tK = tM(_({}, tB, { relatedTarget: 0 })),
    t$ = tM(_({}, tV, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    tz = tM(
        _({}, tV, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
        }),
    ),
    tq = tM(_({}, tV, { data: 0 })),
    tX = {
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
    tQ = {
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
    tJ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tZ(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = tJ[e]) && !!t[e];
}
function t0() {
    return tZ;
}
var t1 = tM(
        _({}, tB, {
            key: function (e) {
                if (e.key) {
                    var t = tX[e.key] || e.key;
                    if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                    ? 13 === (e = tD(e))
                        ? "Enter"
                        : String.fromCharCode(e)
                    : "keydown" === e.type || "keyup" === e.type
                      ? tQ[e.keyCode] || "Unidentified"
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
            getModifierState: t0,
            charCode: function (e) {
                return "keypress" === e.type ? tD(e) : 0;
            },
            keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
                return "keypress" === e.type ? tD(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
        }),
    ),
    t2 = tM(
        _({}, tY, {
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
    t3 = tM(
        _({}, tB, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: t0,
        }),
    ),
    t6 = tM(_({}, tV, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    t4 = tM(
        _({}, tY, {
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
    t5 = tM(_({}, tV, { newState: 0, oldState: 0 })),
    t7 = [9, 13, 27, 32],
    t8 = ty && "CompositionEvent" in window,
    t9 = null;
ty && "documentMode" in document && (t9 = document.documentMode);
var ne = ty && "TextEvent" in window && !t9,
    nt = ty && (!t8 || (t9 && 8 < t9 && 11 >= t9)),
    nn = !1;
function nr(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== t7.indexOf(t.keyCode);
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
function ni(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var ns = !1,
    na = {
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
function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!na[e.type] : "textarea" === t;
}
function nl(e, t, n, r) {
    tm ? (tg ? tg.push(r) : (tg = [r])) : (tm = r),
        0 < (t = l2(t, "onChange")).length &&
            ((n = new tF("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var nu = null,
    nd = null;
function nc(e) {
    lz(e, 0);
}
function n_(e) {
    if (e7(eB(e))) return e;
}
function nf(e, t) {
    if ("change" === e) return t;
}
var nE = !1;
if (ty) {
    if (ty) {
        var nh = "oninput" in document;
        if (!nh) {
            var np = document.createElement("div");
            np.setAttribute("oninput", "return;"), (nh = "function" == typeof np.oninput);
        }
        r = nh;
    } else r = !1;
    nE = r && (!document.documentMode || 9 < document.documentMode);
}
function nm() {
    nu && (nu.detachEvent("onpropertychange", ng), (nd = nu = null));
}
function ng(e) {
    if ("value" === e.propertyName && n_(nd)) {
        var t = [];
        nl(t, nd, e, tp(e)), tT(nc, t);
    }
}
function nA(e, t, n) {
    "focusin" === e ? (nm(), (nu = t), (nd = n), nu.attachEvent("onpropertychange", ng)) : "focusout" === e && nm();
}
function nI(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return n_(nd);
}
function nT(e, t) {
    if ("click" === e) return n_(t);
}
function nS(e, t) {
    if ("input" === e || "change" === e) return n_(t);
}
var ny =
    "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
function nN(e, t) {
    if (ny(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!q.call(t, i) || !ny(e[i], t[i])) return !1;
    }
    return !0;
}
function nO(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function nR(e, t) {
    var n,
        r = nO(e);
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
        r = nO(r);
    }
}
function nv(e) {
    e =
        null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
            ? e.ownerDocument.defaultView
            : window;
    for (var t = e8(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = e8(e.document);
    }
    return t;
}
function nC(e) {
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
var nb = ty && "documentMode" in document && 11 >= document.documentMode,
    nD = null,
    nL = null,
    nw = null,
    nM = !1;
function nP(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    nM ||
        null == nD ||
        nD !== e8(r) ||
        ((r =
            "selectionStart" in (r = nD) && nC(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                      anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                          .anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  }),
        (nw && nN(nw, r)) ||
            ((nw = r),
            0 < (r = l2(nL, "onSelect")).length &&
                ((t = new tF("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = nD))));
}
function nU(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var nk = {
        animationend: nU("Animation", "AnimationEnd"),
        animationiteration: nU("Animation", "AnimationIteration"),
        animationstart: nU("Animation", "AnimationStart"),
        transitionrun: nU("Transition", "TransitionRun"),
        transitionstart: nU("Transition", "TransitionStart"),
        transitioncancel: nU("Transition", "TransitionCancel"),
        transitionend: nU("Transition", "TransitionEnd"),
    },
    nx = {},
    nG = {};
function nV(e) {
    if (nx[e]) return nx[e];
    if (!nk[e]) return e;
    var t,
        n = nk[e];
    for (t in n) if (n.hasOwnProperty(t) && t in nG) return (nx[e] = n[t]);
    return e;
}
ty &&
    ((nG = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete nk.animationend.animation, delete nk.animationiteration.animation, delete nk.animationstart.animation),
    "TransitionEvent" in window || delete nk.transitionend.transition);
var nF = nV("animationend"),
    nB = nV("animationiteration"),
    nH = nV("animationstart"),
    nY = nV("transitionrun"),
    nW = nV("transitionstart"),
    nj = nV("transitioncancel"),
    nK = nV("transitionend"),
    n$ = new Map(),
    nz =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function nq(e, t) {
    n$.set(e, t), eK(t, [e]);
}
nz.push("scrollEnd");
var nX = new WeakMap();
function nQ(e, t) {
    if ("object" == typeof e && null !== e) {
        var n = nX.get(e);
        return void 0 !== n ? n : ((t = { value: e, source: t, stack: e3(t) }), nX.set(e, t), t);
    }
    return { value: e, source: t, stack: e3(t) };
}
var nJ = [],
    nZ = 0,
    n0 = 0;
function n1() {
    for (var e = nZ, t = (n0 = nZ = 0); t < e; ) {
        var n = nJ[t];
        nJ[t++] = null;
        var r = nJ[t];
        nJ[t++] = null;
        var i = nJ[t];
        nJ[t++] = null;
        var s = nJ[t];
        if (((nJ[t++] = null), null !== r && null !== i)) {
            var a = r.pending;
            null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)), (r.pending = i);
        }
        0 !== s && n4(n, i, s);
    }
}
function n2(e, t, n, r) {
    (nJ[nZ++] = e),
        (nJ[nZ++] = t),
        (nJ[nZ++] = n),
        (nJ[nZ++] = r),
        (n0 |= r),
        (e.lanes |= r),
        null !== (e = e.alternate) && (e.lanes |= r);
}
function n3(e, t, n, r) {
    return n2(e, t, n, r), n5(e);
}
function n6(e, t) {
    return n2(e, null, null, t), n5(e);
}
function n4(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    null !== r && (r.lanes |= n);
    for (var i = !1, s = e.return; null !== s; )
        (s.childLanes |= n),
            null !== (r = s.alternate) && (r.childLanes |= n),
            22 === s.tag && (null === (e = s.stateNode) || 1 & e._visibility || (i = !0)),
            (e = s),
            (s = s.return);
    return 3 === e.tag
        ? ((s = e.stateNode),
          i &&
              null !== t &&
              ((i = 31 - e_(n)),
              null === (r = (e = s.hiddenUpdates)[i]) ? (e[i] = [t]) : r.push(t),
              (t.lane = 0x20000000 | n)),
          s)
        : null;
}
function n5(e) {
    if (50 < o3) throw ((o3 = 0), (o6 = null), Error(l(185)));
    for (var t = e.return; null !== t; ) t = (e = t).return;
    return 3 === e.tag ? e.stateNode : null;
}
var n7 = {};
function n8(e, t, n, r) {
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
function n9(e, t, n, r) {
    return new n8(e, t, n, r);
}
function re(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
}
function rt(e, t) {
    var n = e.alternate;
    return (
        null === n
            ? (((n = n9(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
function rn(e, t) {
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
function rr(e, t, n, r, i, s) {
    var a = 0;
    if (((r = e), "function" == typeof e)) re(e) && (a = 1);
    else if ("string" == typeof e)
        a = !(function (e, t, n) {
            if (1 === n || null != t.itemProp) return !1;
            switch (e) {
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
                    return !0;
                case "link":
                    if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError)
                        break;
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
        })(e, n, B.current)
            ? "html" === e || "head" === e || "body" === e
                ? 27
                : 5
            : 26;
    else
        e: switch (e) {
            case v:
                return ((e = n9(31, n, t, i)).elementType = v), (e.lanes = s), e;
            case p:
                return ri(n.children, i, s, t);
            case m:
                (a = 8), (i |= 24);
                break;
            case g:
                return ((e = n9(12, n, t, 2 | i)).elementType = g), (e.lanes = s), e;
            case y:
                return ((e = n9(13, n, t, i)).elementType = y), (e.lanes = s), e;
            case N:
                return ((e = n9(19, n, t, i)).elementType = N), (e.lanes = s), e;
            default:
                if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                        case A:
                        case T:
                            a = 10;
                            break e;
                        case I:
                            a = 9;
                            break e;
                        case S:
                            a = 11;
                            break e;
                        case O:
                            a = 14;
                            break e;
                        case R:
                            (a = 16), (r = null);
                            break e;
                    }
                (a = 29), (n = Error(l(130, null === e ? "null" : typeof e, ""))), (r = null);
        }
    return ((t = n9(a, n, t, i)).elementType = e), (t.type = r), (t.lanes = s), t;
}
function ri(e, t, n, r) {
    return ((e = n9(7, e, r, t)).lanes = n), e;
}
function rs(e, t, n) {
    return ((e = n9(6, e, null, t)).lanes = n), e;
}
function ra(e, t, n) {
    return (
        ((t = n9(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
var ro = [],
    rl = 0,
    ru = null,
    rd = 0,
    rc = [],
    r_ = 0,
    rf = null,
    rE = 1,
    rh = "";
function rp(e, t) {
    (ro[rl++] = rd), (ro[rl++] = ru), (ru = e), (rd = t);
}
function rm(e, t, n) {
    (rc[r_++] = rE), (rc[r_++] = rh), (rc[r_++] = rf), (rf = e);
    var r = rE;
    e = rh;
    var i = 32 - e_(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var s = 32 - e_(t) + i;
    if (30 < s) {
        var a = i - (i % 5);
        (s = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (i -= a),
            (rE = (1 << (32 - e_(t) + i)) | (n << i) | r),
            (rh = s + e);
    } else (rE = (1 << s) | (n << i) | r), (rh = e);
}
function rg(e) {
    null !== e.return && (rp(e, 1), rm(e, 1, 0));
}
function rA(e) {
    for (; e === ru; ) (ru = ro[--rl]), (ro[rl] = null), (rd = ro[--rl]), (ro[rl] = null);
    for (; e === rf; )
        (rf = rc[--r_]), (rc[r_] = null), (rh = rc[--r_]), (rc[r_] = null), (rE = rc[--r_]), (rc[r_] = null);
}
var rI = null,
    rT = null,
    rS = !1,
    ry = null,
    rN = !1,
    rO = Error(l(519));
function rR(e) {
    throw (rw(nQ(Error(l(418, "")), e)), rO);
}
function rv(e) {
    var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
    switch (((t[eD] = e), (t[eL] = r), n)) {
        case "dialog":
            lq("cancel", t), lq("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            lq("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < lK.length; n++) lq(lK[n], t);
            break;
        case "source":
            lq("error", t);
            break;
        case "img":
        case "image":
        case "link":
            lq("error", t), lq("load", t);
            break;
        case "details":
            lq("toggle", t);
            break;
        case "input":
            lq("invalid", t), tn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), e5(t);
            break;
        case "select":
            lq("invalid", t);
            break;
        case "textarea":
            lq("invalid", t), ta(t, r.value, r.defaultValue, r.children), e5(t);
    }
    ("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
    t.textContent === "" + n ||
    !0 === r.suppressHydrationWarning ||
    l8(t.textContent, n)
        ? (null != r.popover && (lq("beforetoggle", t), lq("toggle", t)),
          null != r.onScroll && lq("scroll", t),
          null != r.onScrollEnd && lq("scrollend", t),
          null != r.onClick && (t.onclick = l9),
          (t = !0))
        : (t = !1),
        t || rR(e);
}
function rC(e) {
    for (rI = e.return; rI; )
        switch (rI.tag) {
            case 5:
            case 13:
                rN = !1;
                return;
            case 27:
            case 3:
                rN = !0;
                return;
            default:
                rI = rI.return;
        }
}
function rb(e) {
    if (e !== rI) return !1;
    if (!rS) return rC(e), (rS = !0), !1;
    var t,
        n = e.tag;
    if (
        ((t = 3 !== n && 27 !== n) &&
            ((t = 5 === n) && (t = "form" === (t = e.type) || "button" === t || ul(e.type, e.memoizedProps)), (t = !t)),
        t && rT && rR(e),
        rC(e),
        13 === n)
    ) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
        e: {
            for (n = 0, e = e.nextSibling; e; ) {
                if (8 === e.nodeType)
                    if ("/$" === (t = e.data)) {
                        if (0 === n) {
                            rT = uA(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
            }
            rT = null;
        }
    } else
        27 === n
            ? ((n = rT), uh(e.type) ? ((e = uI), (uI = null), (rT = e)) : (rT = n))
            : (rT = rI ? uA(e.stateNode.nextSibling) : null);
    return !0;
}
function rD() {
    (rT = rI = null), (rS = !1);
}
function rL() {
    var e = ry;
    return null !== e && (null === oW ? (oW = e) : oW.push.apply(oW, e), (ry = null)), e;
}
function rw(e) {
    null === ry ? (ry = [e]) : ry.push(e);
}
var rM = G(null),
    rP = null,
    rU = null;
function rk(e, t, n) {
    F(rM, t._currentValue), (t._currentValue = n);
}
function rx(e) {
    (e._currentValue = rM.current), V(rM);
}
function rG(e, t, n) {
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
function rV(e, t, n, r) {
    var i = e.child;
    for (null !== i && (i.return = e); null !== i; ) {
        var s = i.dependencies;
        if (null !== s) {
            var a = i.child;
            s = s.firstContext;
            e: for (; null !== s; ) {
                var o = s;
                s = i;
                for (var u = 0; u < t.length; u++)
                    if (o.context === t[u]) {
                        (s.lanes |= n),
                            null !== (o = s.alternate) && (o.lanes |= n),
                            rG(s.return, n, e),
                            r || (a = null);
                        break e;
                    }
                s = o.next;
            }
        } else if (18 === i.tag) {
            if (null === (a = i.return)) throw Error(l(341));
            (a.lanes |= n), null !== (s = a.alternate) && (s.lanes |= n), rG(a, n, e), (a = null);
        } else a = i.child;
        if (null !== a) a.return = i;
        else
            for (a = i; null !== a; ) {
                if (a === e) {
                    a = null;
                    break;
                }
                if (null !== (i = a.sibling)) {
                    (i.return = a.return), (a = i);
                    break;
                }
                a = a.return;
            }
        i = a;
    }
}
function rF(e, t, n, r) {
    e = null;
    for (var i = t, s = !1; null !== i; ) {
        if (!s) {
            if (0 != (524288 & i.flags)) s = !0;
            else if (0 != (262144 & i.flags)) break;
        }
        if (10 === i.tag) {
            var a = i.alternate;
            if (null === a) throw Error(l(387));
            if (null !== (a = a.memoizedProps)) {
                var o = i.type;
                ny(i.pendingProps.value, a.value) || (null !== e ? e.push(o) : (e = [o]));
            }
        } else if (i === W.current) {
            if (null === (a = i.alternate)) throw Error(l(387));
            a.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(uX) : (e = [uX]));
        }
        i = i.return;
    }
    null !== e && rV(t, e, n, r), (t.flags |= 262144);
}
function rB(e) {
    for (e = e.firstContext; null !== e; ) {
        if (!ny(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
    }
    return !1;
}
function rH(e) {
    (rP = e), (rU = null), null !== (e = e.dependencies) && (e.firstContext = null);
}
function rY(e) {
    return rj(rP, e);
}
function rW(e, t) {
    return null === rP && rH(e), rj(e, t);
}
function rj(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), null === rU)) {
        if (null === e) throw Error(l(308));
        (rU = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else rU = rU.next = t;
    return n;
}
var rK =
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
    r$ = s.unstable_scheduleCallback,
    rz = s.unstable_NormalPriority,
    rq = { $$typeof: T, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
function rX() {
    return { controller: new rK(), data: new Map(), refCount: 0 };
}
function rQ(e) {
    e.refCount--,
        0 === e.refCount &&
            r$(rz, function () {
                e.controller.abort();
            });
}
var rJ = null,
    rZ = 0,
    r0 = 0,
    r1 = null;
function r2() {
    if (0 == --rZ && null !== rJ) {
        null !== r1 && (r1.status = "fulfilled");
        var e = rJ;
        (rJ = null), (r0 = 0), (r1 = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
}
var r3 = M.S;
M.S = function (e, t) {
    "object" == typeof t &&
        null !== t &&
        "function" == typeof t.then &&
        (function (e) {
            if (null === rJ) {
                var t = (rJ = []);
                (rZ = 0),
                    (r0 = lB()),
                    (r1 = {
                        status: "pending",
                        value: void 0,
                        then: function (e) {
                            t.push(e);
                        },
                    });
            }
            rZ++, e.then(r2, r2);
        })(t),
        null !== r3 && r3(e, t);
};
var r6 = G(null);
function r4() {
    var e = r6.current;
    return null !== e ? e : oC.pooledCache;
}
function r5(e, t) {
    null === t ? F(r6, r6.current) : F(r6, t.pool);
}
function r7() {
    var e = r4();
    return null === e ? null : { parent: rq._currentValue, pool: e };
}
var r8 = Error(l(460)),
    r9 = Error(l(474)),
    ie = Error(l(542)),
    it = { then: function () {} };
function ir(e) {
    return "fulfilled" === (e = e.status) || "rejected" === e;
}
function ii() {}
function is(e, t, n) {
    switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(ii, ii), (t = n)), t.status)) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw (il((e = t.reason)), e);
        default:
            if ("string" == typeof t.status) t.then(ii, ii);
            else {
                if (null !== (e = oC) && 100 < e.shellSuspendCounter) throw Error(l(482));
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
                    throw (il((e = t.reason)), e);
            }
            throw ((ia = t), r8);
    }
}
var ia = null;
function io() {
    if (null === ia) throw Error(l(459));
    var e = ia;
    return (ia = null), e;
}
function il(e) {
    if (e === r8 || e === ie) throw Error(l(483));
}
var iu = !1;
function id(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
    };
}
function ic(e, t) {
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
function i_(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function iE(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & ov))) {
        var i = r.pending;
        return (
            null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            (t = n5(e)),
            n4(e, null, n),
            t
        );
    }
    return n2(e, r, t, n), n5(e);
}
function ih(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194048 & n))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), eO(e, n);
    }
}
function ip(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var i = null,
            s = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var a = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                null === s ? (i = s = a) : (s = s.next = a), (n = n.next);
            } while (null !== n);
            null === s ? (i = s = t) : (s = s.next = t);
        } else i = s = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            callbacks: r.callbacks,
        }),
            (e.updateQueue = n);
        return;
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
var im = !1;
function ig() {
    if (im) {
        var e = r1;
        if (null !== e) throw e;
    }
}
function iA(e, t, n, r) {
    im = !1;
    var i = e.updateQueue;
    iu = !1;
    var s = i.firstBaseUpdate,
        a = i.lastBaseUpdate,
        o = i.shared.pending;
    if (null !== o) {
        i.shared.pending = null;
        var l = o,
            u = l.next;
        (l.next = null), null === a ? (s = u) : (a.next = u), (a = l);
        var d = e.alternate;
        null !== d &&
            (o = (d = d.updateQueue).lastBaseUpdate) !== a &&
            (null === o ? (d.firstBaseUpdate = u) : (o.next = u), (d.lastBaseUpdate = l));
    }
    if (null !== s) {
        var c = i.baseState;
        for (a = 0, d = u = l = null, o = s; ; ) {
            var f = -0x20000001 & o.lane,
                E = f !== o.lane;
            if (E ? (oD & f) === f : (r & f) === f) {
                0 !== f && f === r0 && (im = !0),
                    null !== d &&
                        (d = d.next = { lane: 0, tag: o.tag, payload: o.payload, callback: null, next: null });
                e: {
                    var h = e,
                        p = o;
                    switch (((f = t), p.tag)) {
                        case 1:
                            if ("function" == typeof (h = p.payload)) {
                                c = h.call(n, c, f);
                                break e;
                            }
                            c = h;
                            break e;
                        case 3:
                            h.flags = (-65537 & h.flags) | 128;
                        case 0:
                            if (null == (f = "function" == typeof (h = p.payload) ? h.call(n, c, f) : h)) break e;
                            c = _({}, c, f);
                            break e;
                        case 2:
                            iu = !0;
                    }
                }
                null !== (f = o.callback) &&
                    ((e.flags |= 64),
                    E && (e.flags |= 8192),
                    null === (E = i.callbacks) ? (i.callbacks = [f]) : E.push(f));
            } else
                (E = { lane: f, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
                    null === d ? ((u = d = E), (l = c)) : (d = d.next = E),
                    (a |= f);
            if (null === (o = o.next))
                if (null === (o = i.shared.pending)) break;
                else (o = (E = o).next), (E.next = null), (i.lastBaseUpdate = E), (i.shared.pending = null);
        }
        null === d && (l = c),
            (i.baseState = l),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = d),
            null === s && (i.shared.lanes = 0),
            (oG |= a),
            (e.lanes = a),
            (e.memoizedState = c);
    }
}
function iI(e, t) {
    if ("function" != typeof e) throw Error(l(191, e));
    e.call(t);
}
function iT(e, t) {
    var n = e.callbacks;
    if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) iI(n[e], t);
}
var iS = G(null),
    iy = G(0);
function iN(e, t) {
    F(iy, (e = ok)), F(iS, t), (ok = e | t.baseLanes);
}
function iO() {
    F(iy, ok), F(iS, iS.current);
}
function iR() {
    (ok = iy.current), V(iS), V(iy);
}
var iv = 0,
    iC = null,
    ib = null,
    iD = null,
    iL = !1,
    iw = !1,
    iM = !1,
    iP = 0,
    iU = 0,
    ik = null,
    ix = 0;
function iG() {
    throw Error(l(321));
}
function iV(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ny(e[n], t[n])) return !1;
    return !0;
}
function iF(e, t, n, r, i, s) {
    return (
        (iv = s),
        (iC = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (M.H = null === e || null === e.memoizedState ? sK : s$),
        (iM = !1),
        (s = n(r, i)),
        (iM = !1),
        iw && (s = iH(t, n, r, i)),
        iB(e),
        s
    );
}
function iB(e) {
    M.H = sj;
    var t = null !== ib && null !== ib.next;
    if (((iv = 0), (iD = ib = iC = null), (iL = !1), (iU = 0), (ik = null), t)) throw Error(l(300));
    null === e || am || (null !== (e = e.dependencies) && rB(e) && (am = !0));
}
function iH(e, t, n, r) {
    iC = e;
    var i = 0;
    do {
        if ((iw && (ik = null), (iU = 0), (iw = !1), 25 <= i)) throw Error(l(301));
        if (((i += 1), (iD = ib = null), null != e.updateQueue)) {
            var s = e.updateQueue;
            (s.lastEffect = null), (s.events = null), (s.stores = null), null != s.memoCache && (s.memoCache.index = 0);
        }
        (M.H = sz), (s = t(n, r));
    } while (iw);
    return s;
}
function iY() {
    var e = M.H,
        t = e.useState()[0];
    return (
        (t = "function" == typeof t.then ? iX(t) : t),
        (e = e.useState()[0]),
        (null !== ib ? ib.memoizedState : null) !== e && (iC.flags |= 1024),
        t
    );
}
function iW() {
    var e = 0 !== iP;
    return (iP = 0), e;
}
function ij(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function iK(e) {
    if (iL) {
        for (e = e.memoizedState; null !== e; ) {
            var t = e.queue;
            null !== t && (t.pending = null), (e = e.next);
        }
        iL = !1;
    }
    (iv = 0), (iD = ib = iC = null), (iw = !1), (iU = iP = 0), (ik = null);
}
function i$() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return null === iD ? (iC.memoizedState = iD = e) : (iD = iD.next = e), iD;
}
function iz() {
    if (null === ib) {
        var e = iC.alternate;
        e = null !== e ? e.memoizedState : null;
    } else e = ib.next;
    var t = null === iD ? iC.memoizedState : iD.next;
    if (null !== t) (iD = t), (ib = e);
    else {
        if (null === e) {
            if (null === iC.alternate) throw Error(l(467));
            throw Error(l(310));
        }
        (e = {
            memoizedState: (ib = e).memoizedState,
            baseState: ib.baseState,
            baseQueue: ib.baseQueue,
            queue: ib.queue,
            next: null,
        }),
            null === iD ? (iC.memoizedState = iD = e) : (iD = iD.next = e);
    }
    return iD;
}
function iq() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function iX(e) {
    var t = iU;
    return (
        (iU += 1),
        null === ik && (ik = []),
        (e = is(ik, e, t)),
        (t = iC),
        null === (null === iD ? t.memoizedState : iD.next) &&
            (M.H = null === (t = t.alternate) || null === t.memoizedState ? sK : s$),
        e
    );
}
function iQ(e) {
    if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return iX(e);
        if (e.$$typeof === T) return rY(e);
    }
    throw Error(l(438, String(e)));
}
function iJ(e) {
    var t = null,
        n = iC.updateQueue;
    if ((null !== n && (t = n.memoCache), null == t)) {
        var r = iC.alternate;
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
        null === n && ((n = iq()), (iC.updateQueue = n)),
        (n.memoCache = t),
        void 0 === (n = t.data[t.index]))
    )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
    return t.index++, n;
}
function iZ(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function i0(e) {
    return i1(iz(), ib, e);
}
function i1(e, t, n) {
    var r = e.queue;
    if (null === r) throw Error(l(311));
    r.lastRenderedReducer = n;
    var i = e.baseQueue,
        s = r.pending;
    if (null !== s) {
        if (null !== i) {
            var a = i.next;
            (i.next = s.next), (s.next = a);
        }
        (t.baseQueue = i = s), (r.pending = null);
    }
    if (((s = e.baseState), null === i)) e.memoizedState = s;
    else {
        t = i.next;
        var o = (a = null),
            u = null,
            d = t,
            c = !1;
        do {
            var _ = -0x20000001 & d.lane;
            if (_ !== d.lane ? (oD & _) === _ : (iv & _) === _) {
                var f = d.revertLane;
                if (0 === f)
                    null !== u &&
                        (u = u.next =
                            {
                                lane: 0,
                                revertLane: 0,
                                action: d.action,
                                hasEagerState: d.hasEagerState,
                                eagerState: d.eagerState,
                                next: null,
                            }),
                        _ === r0 && (c = !0);
                else if ((iv & f) === f) {
                    (d = d.next), f === r0 && (c = !0);
                    continue;
                } else
                    (_ = {
                        lane: 0,
                        revertLane: d.revertLane,
                        action: d.action,
                        hasEagerState: d.hasEagerState,
                        eagerState: d.eagerState,
                        next: null,
                    }),
                        null === u ? ((o = u = _), (a = s)) : (u = u.next = _),
                        (iC.lanes |= f),
                        (oG |= f);
                (_ = d.action), iM && n(s, _), (s = d.hasEagerState ? d.eagerState : n(s, _));
            } else
                (f = {
                    lane: _,
                    revertLane: d.revertLane,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null,
                }),
                    null === u ? ((o = u = f), (a = s)) : (u = u.next = f),
                    (iC.lanes |= _),
                    (oG |= _);
            d = d.next;
        } while (null !== d && d !== t);
        if ((null === u ? (a = s) : (u.next = o), !ny(s, e.memoizedState) && ((am = !0), c && null !== (n = r1))))
            throw n;
        (e.memoizedState = s), (e.baseState = a), (e.baseQueue = u), (r.lastRenderedState = s);
    }
    return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
}
function i2(e) {
    var t = iz(),
        n = t.queue;
    if (null === n) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (null !== i) {
        n.pending = null;
        var a = (i = i.next);
        do (s = e(s, a.action)), (a = a.next);
        while (a !== i);
        ny(s, t.memoizedState) || (am = !0),
            (t.memoizedState = s),
            null === t.baseQueue && (t.baseState = s),
            (n.lastRenderedState = s);
    }
    return [s, r];
}
function i3(e, t, n) {
    var r = iC,
        i = iz(),
        s = rS;
    if (s) {
        if (void 0 === n) throw Error(l(407));
        n = n();
    } else n = t();
    var a = !ny((ib || i).memoizedState, n);
    if (
        (a && ((i.memoizedState = n), (am = !0)),
        (i = i.queue),
        sm(2048, 8, i5.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || a || (null !== iD && 1 & iD.memoizedState.tag))
    ) {
        if (((r.flags |= 2048), sf(9, sE(), i4.bind(null, r, i, n, t), null), null === oC)) throw Error(l(349));
        s || 0 != (124 & iv) || i6(r, t, n);
    }
    return n;
}
function i6(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = iC.updateQueue)
            ? ((t = iq()), (iC.updateQueue = t), (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
}
function i4(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), i7(t) && i8(e);
}
function i5(e, t, n) {
    return n(function () {
        i7(t) && i8(e);
    });
}
function i7(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ny(e, n);
    } catch (e) {
        return !0;
    }
}
function i8(e) {
    var t = n6(e, 2);
    null !== t && o7(t, e, 2);
}
function i9(e) {
    var t = i$();
    if ("function" == typeof e) {
        var n = e;
        if (((e = n()), iM)) {
            ec(!0);
            try {
                n();
            } finally {
                ec(!1);
            }
        }
    }
    return (
        (t.memoizedState = t.baseState = e),
        (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: iZ, lastRenderedState: e }),
        t
    );
}
function se(e, t, n, r) {
    return (e.baseState = n), i1(e, ib, "function" == typeof r ? r : iZ);
}
function st(e, t, n, r, i) {
    if (sH(e)) throw Error(l(485));
    if (null !== (e = t.action)) {
        var s = {
            payload: i,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function (e) {
                s.listeners.push(e);
            },
        };
        null !== M.T ? n(!0) : (s.isTransition = !1),
            r(s),
            null === (n = t.pending)
                ? ((s.next = t.pending = s), sn(t, s))
                : ((s.next = n.next), (t.pending = n.next = s));
    }
}
function sn(e, t) {
    var n = t.action,
        r = t.payload,
        i = e.state;
    if (t.isTransition) {
        var s = M.T,
            a = {};
        M.T = a;
        try {
            var o = n(i, r),
                l = M.S;
            null !== l && l(a, o), sr(e, t, o);
        } catch (n) {
            ss(e, t, n);
        } finally {
            M.T = s;
        }
    } else
        try {
            (s = n(i, r)), sr(e, t, s);
        } catch (n) {
            ss(e, t, n);
        }
}
function sr(e, t, n) {
    null !== n && "object" == typeof n && "function" == typeof n.then
        ? n.then(
              function (n) {
                  si(e, t, n);
              },
              function (n) {
                  return ss(e, t, n);
              },
          )
        : si(e, t, n);
}
function si(e, t, n) {
    (t.status = "fulfilled"),
        (t.value = n),
        sa(t),
        (e.state = n),
        null !== (t = e.pending) && ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), sn(e, n)));
}
function ss(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), null !== r)) {
        r = r.next;
        do (t.status = "rejected"), (t.reason = n), sa(t), (t = t.next);
        while (t !== r);
    }
    e.action = null;
}
function sa(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
}
function so(e, t) {
    return t;
}
function sl(e, t) {
    if (rS) {
        var n = oC.formState;
        if (null !== n) {
            e: {
                var r = iC;
                if (rS) {
                    if (rT) {
                        s: {
                            for (var i = rT, s = rN; 8 !== i.nodeType; )
                                if (!s || null === (i = uA(i.nextSibling))) {
                                    i = null;
                                    break s;
                                }
                            i = "F!" === (s = i.data) || "F" === s ? i : null;
                        }
                        if (i) {
                            (rT = uA(i.nextSibling)), (r = "F!" === i.data);
                            break e;
                        }
                    }
                    rR(r);
                }
                r = !1;
            }
            r && (t = n[0]);
        }
    }
    return (
        ((n = i$()).memoizedState = n.baseState = t),
        (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: so, lastRenderedState: t }),
        (n.queue = r),
        (n = sV.bind(null, iC, r)),
        (r.dispatch = n),
        (r = i9(!1)),
        (s = sB.bind(null, iC, !1, r.queue)),
        (r = i$()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = st.bind(null, iC, i, s, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
    );
}
function su(e) {
    return sd(iz(), ib, e);
}
function sd(e, t, n) {
    if (((t = i1(e, t, so)[0]), (e = i0(iZ)[0]), "object" == typeof t && null !== t && "function" == typeof t.then))
        try {
            var r = iX(t);
        } catch (e) {
            if (e === r8) throw ie;
            throw e;
        }
    else r = t;
    var i = (t = iz()).queue,
        s = i.dispatch;
    return n !== t.memoizedState && ((iC.flags |= 2048), sf(9, sE(), sc.bind(null, i, n), null)), [r, s, e];
}
function sc(e, t) {
    e.action = t;
}
function s_(e) {
    var t = iz(),
        n = ib;
    if (null !== n) return sd(t, n, e);
    iz(), (t = t.memoizedState);
    var r = (n = iz()).queue.dispatch;
    return (n.memoizedState = e), [t, r, !1];
}
function sf(e, t, n, r) {
    return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        null === (t = iC.updateQueue) && ((t = iq()), (iC.updateQueue = t)),
        null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
    );
}
function sE() {
    return { destroy: void 0, resource: void 0 };
}
function sh() {
    return iz().memoizedState;
}
function sp(e, t, n, r) {
    var i = i$();
    (r = void 0 === r ? null : r), (iC.flags |= e), (i.memoizedState = sf(1 | t, sE(), n, r));
}
function sm(e, t, n, r) {
    var i = iz();
    r = void 0 === r ? null : r;
    var s = i.memoizedState.inst;
    null !== ib && null !== r && iV(r, ib.memoizedState.deps)
        ? (i.memoizedState = sf(t, s, n, r))
        : ((iC.flags |= e), (i.memoizedState = sf(1 | t, s, n, r)));
}
function sg(e, t) {
    sp(8390656, 8, e, t);
}
function sA(e, t) {
    sm(2048, 8, e, t);
}
function sI(e, t) {
    return sm(4, 2, e, t);
}
function sT(e, t) {
    return sm(4, 4, e, t);
}
function sS(e, t) {
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
function sy(e, t, n) {
    (n = null != n ? n.concat([e]) : null), sm(4, 4, sS.bind(null, t, e), n);
}
function sN() {}
function sO(e, t) {
    var n = iz();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== t && iV(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function sR(e, t) {
    var n = iz();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    if (null !== t && iV(t, r[1])) return r[0];
    if (((r = e()), iM)) {
        ec(!0);
        try {
            e();
        } finally {
            ec(!1);
        }
    }
    return (n.memoizedState = [r, t]), r;
}
function sv(e, t, n) {
    return void 0 === n || 0 != (0x40000000 & iv)
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = o5()), (iC.lanes |= e), (oG |= e), n);
}
function sC(e, t, n, r) {
    return ny(n, t)
        ? n
        : null !== iS.current
          ? (ny((e = sv(e, n, r)), t) || (am = !0), e)
          : 0 == (42 & iv)
            ? ((am = !0), (e.memoizedState = n))
            : ((e = o5()), (iC.lanes |= e), (oG |= e), t);
}
function sb(e, t, n, r, i) {
    var s = P.p;
    P.p = 0 !== s && 8 > s ? s : 8;
    var a = M.T,
        o = {};
    (M.T = o), sB(e, !1, t, n);
    try {
        var l = i(),
            u = M.S;
        if ((null !== u && u(o, l), null !== l && "object" == typeof l && "function" == typeof l.then)) {
            var d,
                c,
                _ =
                    ((d = []),
                    (c = {
                        status: "pending",
                        value: null,
                        reason: null,
                        then: function (e) {
                            d.push(e);
                        },
                    }),
                    l.then(
                        function () {
                            (c.status = "fulfilled"), (c.value = r);
                            for (var e = 0; e < d.length; e++) (0, d[e])(r);
                        },
                        function (e) {
                            for (c.status = "rejected", c.reason = e, e = 0; e < d.length; e++) (0, d[e])(void 0);
                        },
                    ),
                    c);
            sF(e, t, _, o4(e));
        } else sF(e, t, r, o4(e));
    } catch (n) {
        sF(e, t, { then: function () {}, status: "rejected", reason: n }, o4());
    } finally {
        (P.p = s), (M.T = a);
    }
}
function sD() {}
function sL(e, t, n, r) {
    if (5 !== e.tag) throw Error(l(476));
    var i = sw(e).queue;
    sb(
        e,
        i,
        t,
        U,
        null === n
            ? sD
            : function () {
                  return sM(e), n(r);
              },
    );
}
function sw(e) {
    var t = e.memoizedState;
    if (null !== t) return t;
    var n = {};
    return (
        ((t = {
            memoizedState: U,
            baseState: U,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: iZ, lastRenderedState: U },
            next: null,
        }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: iZ, lastRenderedState: n },
            next: null,
        }),
        (e.memoizedState = t),
        null !== (e = e.alternate) && (e.memoizedState = t),
        t
    );
}
function sM(e) {
    var t = sw(e).next.queue;
    sF(e, t, {}, o4());
}
function sP() {
    return rY(uX);
}
function sU() {
    return iz().memoizedState;
}
function sk() {
    return iz().memoizedState;
}
function sx(e) {
    for (var t = e.return; null !== t; ) {
        switch (t.tag) {
            case 24:
            case 3:
                var n = o4(),
                    r = iE(t, (e = i_(n)), n);
                null !== r && (o7(r, t, n), ih(r, t, n)), (t = { cache: rX() }), (e.payload = t);
                return;
        }
        t = t.return;
    }
}
function sG(e, t, n) {
    var r = o4();
    (n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
        sH(e) ? sY(t, n) : null !== (n = n3(e, t, n, r)) && (o7(n, e, r), sW(n, t, r));
}
function sV(e, t, n) {
    sF(e, t, n, o4());
}
function sF(e, t, n, r) {
    var i = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (sH(e)) sY(t, i);
    else {
        var s = e.alternate;
        if (0 === e.lanes && (null === s || 0 === s.lanes) && null !== (s = t.lastRenderedReducer))
            try {
                var a = t.lastRenderedState,
                    o = s(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = o), ny(o, a)))
                    return n2(e, t, i, 0), null === oC && n1(), !1;
            } catch (e) {
            } finally {
            }
        if (null !== (n = n3(e, t, i, r))) return o7(n, e, r), sW(n, t, r), !0;
    }
    return !1;
}
function sB(e, t, n, r) {
    if (((r = { lane: 2, revertLane: lB(), action: r, hasEagerState: !1, eagerState: null, next: null }), sH(e))) {
        if (t) throw Error(l(479));
    } else null !== (t = n3(e, n, r, 2)) && o7(t, e, 2);
}
function sH(e) {
    var t = e.alternate;
    return e === iC || (null !== t && t === iC);
}
function sY(e, t) {
    iw = iL = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function sW(e, t, n) {
    if (0 != (4194048 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (t.lanes = n |= r), eO(e, n);
    }
}
var sj = {
        readContext: rY,
        use: iQ,
        useCallback: iG,
        useContext: iG,
        useEffect: iG,
        useImperativeHandle: iG,
        useLayoutEffect: iG,
        useInsertionEffect: iG,
        useMemo: iG,
        useReducer: iG,
        useRef: iG,
        useState: iG,
        useDebugValue: iG,
        useDeferredValue: iG,
        useTransition: iG,
        useSyncExternalStore: iG,
        useId: iG,
        useHostTransitionStatus: iG,
        useFormState: iG,
        useActionState: iG,
        useOptimistic: iG,
        useMemoCache: iG,
        useCacheRefresh: iG,
    },
    sK = {
        readContext: rY,
        use: iQ,
        useCallback: function (e, t) {
            return (i$().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: rY,
        useEffect: sg,
        useImperativeHandle: function (e, t, n) {
            (n = null != n ? n.concat([e]) : null), sp(4194308, 4, sS.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return sp(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            sp(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = i$();
            t = void 0 === t ? null : t;
            var r = e();
            if (iM) {
                ec(!0);
                try {
                    e();
                } finally {
                    ec(!1);
                }
            }
            return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
            var r = i$();
            if (void 0 !== n) {
                var i = n(t);
                if (iM) {
                    ec(!0);
                    try {
                        n(t);
                    } finally {
                        ec(!1);
                    }
                }
            } else i = t;
            return (
                (r.memoizedState = r.baseState = i),
                (r.queue = e =
                    { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
                (e = e.dispatch = sG.bind(null, iC, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            return (i$().memoizedState = { current: e });
        },
        useState: function (e) {
            var t = (e = i9(e)).queue,
                n = sV.bind(null, iC, t);
            return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: sN,
        useDeferredValue: function (e, t) {
            return sv(i$(), e, t);
        },
        useTransition: function () {
            var e = i9(!1);
            return (e = sb.bind(null, iC, e.queue, !0, !1)), (i$().memoizedState = e), [!1, e];
        },
        useSyncExternalStore: function (e, t, n) {
            var r = iC,
                i = i$();
            if (rS) {
                if (void 0 === n) throw Error(l(407));
                n = n();
            } else {
                if (((n = t()), null === oC)) throw Error(l(349));
                0 != (124 & oD) || i6(r, t, n);
            }
            i.memoizedState = n;
            var s = { value: n, getSnapshot: t };
            return (
                (i.queue = s),
                sg(i5.bind(null, r, s, e), [e]),
                (r.flags |= 2048),
                sf(9, sE(), i4.bind(null, r, s, n, t), null),
                n
            );
        },
        useId: function () {
            var e = i$(),
                t = oC.identifierPrefix;
            if (rS) {
                var n = rh,
                    r = rE;
                (t = "\xab" + t + "R" + (n = (r & ~(1 << (32 - e_(r) - 1))).toString(32) + n)),
                    0 < (n = iP++) && (t += "H" + n.toString(32)),
                    (t += "\xbb");
            } else t = "\xab" + t + "r" + (n = ix++).toString(32) + "\xbb";
            return (e.memoizedState = t);
        },
        useHostTransitionStatus: sP,
        useFormState: sl,
        useActionState: sl,
        useOptimistic: function (e) {
            var t = i$();
            t.memoizedState = t.baseState = e;
            var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
            return (t.queue = n), (t = sB.bind(null, iC, !0, n)), (n.dispatch = t), [e, t];
        },
        useMemoCache: iJ,
        useCacheRefresh: function () {
            return (i$().memoizedState = sx.bind(null, iC));
        },
    },
    s$ = {
        readContext: rY,
        use: iQ,
        useCallback: sO,
        useContext: rY,
        useEffect: sA,
        useImperativeHandle: sy,
        useInsertionEffect: sI,
        useLayoutEffect: sT,
        useMemo: sR,
        useReducer: i0,
        useRef: sh,
        useState: function () {
            return i0(iZ);
        },
        useDebugValue: sN,
        useDeferredValue: function (e, t) {
            return sC(iz(), ib.memoizedState, e, t);
        },
        useTransition: function () {
            var e = i0(iZ)[0],
                t = iz().memoizedState;
            return ["boolean" == typeof e ? e : iX(e), t];
        },
        useSyncExternalStore: i3,
        useId: sU,
        useHostTransitionStatus: sP,
        useFormState: su,
        useActionState: su,
        useOptimistic: function (e, t) {
            return se(iz(), ib, e, t);
        },
        useMemoCache: iJ,
        useCacheRefresh: sk,
    },
    sz = {
        readContext: rY,
        use: iQ,
        useCallback: sO,
        useContext: rY,
        useEffect: sA,
        useImperativeHandle: sy,
        useInsertionEffect: sI,
        useLayoutEffect: sT,
        useMemo: sR,
        useReducer: i2,
        useRef: sh,
        useState: function () {
            return i2(iZ);
        },
        useDebugValue: sN,
        useDeferredValue: function (e, t) {
            var n = iz();
            return null === ib ? sv(n, e, t) : sC(n, ib.memoizedState, e, t);
        },
        useTransition: function () {
            var e = i2(iZ)[0],
                t = iz().memoizedState;
            return ["boolean" == typeof e ? e : iX(e), t];
        },
        useSyncExternalStore: i3,
        useId: sU,
        useHostTransitionStatus: sP,
        useFormState: s_,
        useActionState: s_,
        useOptimistic: function (e, t) {
            var n = iz();
            return null !== ib ? se(n, ib, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: iJ,
        useCacheRefresh: sk,
    },
    sq = null,
    sX = 0;
function sQ(e) {
    var t = sX;
    return (sX += 1), null === sq && (sq = []), is(sq, e, t);
}
function sJ(e, t) {
    e.ref = void 0 !== (t = t.props.ref) ? t : null;
}
function sZ(e, t) {
    if (t.$$typeof === f) throw Error(l(525));
    throw Error(
        l(
            31,
            "[object Object]" === (e = Object.prototype.toString.call(t))
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
        ),
    );
}
function s0(e) {
    return (0, e._init)(e._payload);
}
function s1(e) {
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
        return ((e = rt(e, t)).index = 0), (e.sibling = null), e;
    }
    function s(t, n, r) {
        return ((t.index = r), e)
            ? null !== (r = t.alternate)
                ? (r = r.index) < n
                    ? ((t.flags |= 0x4000002), n)
                    : r
                : ((t.flags |= 0x4000002), n)
            : ((t.flags |= 1048576), n);
    }
    function a(t) {
        return e && null === t.alternate && (t.flags |= 0x4000002), t;
    }
    function o(e, t, n, r) {
        return null === t || 6 !== t.tag ? ((t = rs(n, e.mode, r)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function u(e, t, n, r) {
        var s = n.type;
        return s === p
            ? c(e, t, n.props.children, r, n.key)
            : (null !== t &&
              (t.elementType === s || ("object" == typeof s && null !== s && s.$$typeof === R && s0(s) === t.type))
                  ? sJ((t = i(t, n.props)), n)
                  : sJ((t = rr(n.type, n.key, n.props, null, e.mode, r)), n),
              (t.return = e),
              t);
    }
    function d(e, t, n, r) {
        return (
            null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
                ? ((t = ra(n, e.mode, r)).return = e)
                : ((t = i(t, n.children || [])).return = e),
            t
        );
    }
    function c(e, t, n, r, s) {
        return null === t || 7 !== t.tag ? ((t = ri(n, e.mode, r, s)).return = e) : ((t = i(t, n)).return = e), t;
    }
    function _(e, t, n) {
        if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
            return ((t = rs("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case E:
                    return sJ((n = rr(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n;
                case h:
                    return ((t = ra(t, e.mode, n)).return = e), t;
                case R:
                    return _(e, (t = (0, t._init)(t._payload)), n);
            }
            if (w(t) || D(t)) return ((t = ri(t, e.mode, n, null)).return = e), t;
            if ("function" == typeof t.then) return _(e, sQ(t), n);
            if (t.$$typeof === T) return _(e, rW(e, t), n);
            sZ(e, t);
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
                case h:
                    return n.key === i ? d(e, t, n, r) : null;
                case R:
                    return f(e, t, (n = (i = n._init)(n._payload)), r);
            }
            if (w(n) || D(n)) return null !== i ? null : c(e, t, n, r, null);
            if ("function" == typeof n.then) return f(e, t, sQ(n), r);
            if (n.$$typeof === T) return f(e, t, rW(e, n), r);
            sZ(e, n);
        }
        return null;
    }
    function m(e, t, n, r, i) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r)
            return o(t, (e = e.get(n) || null), "" + r, i);
        if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case E:
                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case h:
                    return d(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                case R:
                    return m(e, t, n, (r = (0, r._init)(r._payload)), i);
            }
            if (w(r) || D(r)) return c(t, (e = e.get(n) || null), r, i, null);
            if ("function" == typeof r.then) return m(e, t, n, sQ(r), i);
            if (r.$$typeof === T) return m(e, t, n, rW(t, r), i);
            sZ(t, r);
        }
        return null;
    }
    return function (o, u, d, c) {
        try {
            sX = 0;
            var g = (function o(u, d, c, g) {
                if (
                    ("object" == typeof c && null !== c && c.type === p && null === c.key && (c = c.props.children),
                    "object" == typeof c && null !== c)
                ) {
                    switch (c.$$typeof) {
                        case E:
                            e: {
                                for (var A = c.key; null !== d; ) {
                                    if (d.key === A) {
                                        if ((A = c.type) === p) {
                                            if (7 === d.tag) {
                                                n(u, d.sibling), ((g = i(d, c.props.children)).return = u), (u = g);
                                                break e;
                                            }
                                        } else if (
                                            d.elementType === A ||
                                            ("object" == typeof A && null !== A && A.$$typeof === R && s0(A) === d.type)
                                        ) {
                                            n(u, d.sibling), sJ((g = i(d, c.props)), c), (g.return = u), (u = g);
                                            break e;
                                        }
                                        n(u, d);
                                        break;
                                    }
                                    t(u, d), (d = d.sibling);
                                }
                                c.type === p
                                    ? ((g = ri(c.props.children, u.mode, g, c.key)).return = u)
                                    : (sJ((g = rr(c.type, c.key, c.props, null, u.mode, g)), c), (g.return = u)),
                                    (u = g);
                            }
                            return a(u);
                        case h:
                            e: {
                                for (A = c.key; null !== d; ) {
                                    if (d.key === A)
                                        if (
                                            4 === d.tag &&
                                            d.stateNode.containerInfo === c.containerInfo &&
                                            d.stateNode.implementation === c.implementation
                                        ) {
                                            n(u, d.sibling), ((g = i(d, c.children || [])).return = u), (u = g);
                                            break e;
                                        } else {
                                            n(u, d);
                                            break;
                                        }
                                    t(u, d), (d = d.sibling);
                                }
                                ((g = ra(c, u.mode, g)).return = u), (u = g);
                            }
                            return a(u);
                        case R:
                            return o(u, d, (c = (A = c._init)(c._payload)), g);
                    }
                    if (w(c))
                        return (function (i, a, o, l) {
                            for (
                                var u = null, d = null, c = a, E = (a = 0), h = null;
                                null !== c && E < o.length;
                                E++
                            ) {
                                c.index > E ? ((h = c), (c = null)) : (h = c.sibling);
                                var p = f(i, c, o[E], l);
                                if (null === p) {
                                    null === c && (c = h);
                                    break;
                                }
                                e && c && null === p.alternate && t(i, c),
                                    (a = s(p, a, E)),
                                    null === d ? (u = p) : (d.sibling = p),
                                    (d = p),
                                    (c = h);
                            }
                            if (E === o.length) return n(i, c), rS && rp(i, E), u;
                            if (null === c) {
                                for (; E < o.length; E++)
                                    null !== (c = _(i, o[E], l)) &&
                                        ((a = s(c, a, E)), null === d ? (u = c) : (d.sibling = c), (d = c));
                                return rS && rp(i, E), u;
                            }
                            for (c = r(c); E < o.length; E++)
                                null !== (h = m(c, i, E, o[E], l)) &&
                                    (e && null !== h.alternate && c.delete(null === h.key ? E : h.key),
                                    (a = s(h, a, E)),
                                    null === d ? (u = h) : (d.sibling = h),
                                    (d = h));
                            return (
                                e &&
                                    c.forEach(function (e) {
                                        return t(i, e);
                                    }),
                                rS && rp(i, E),
                                u
                            );
                        })(u, d, c, g);
                    if (D(c)) {
                        if ("function" != typeof (A = D(c))) throw Error(l(150));
                        return (function (i, a, o, u) {
                            if (null == o) throw Error(l(151));
                            for (
                                var d = null, c = null, E = a, h = (a = 0), p = null, g = o.next();
                                null !== E && !g.done;
                                h++, g = o.next()
                            ) {
                                E.index > h ? ((p = E), (E = null)) : (p = E.sibling);
                                var A = f(i, E, g.value, u);
                                if (null === A) {
                                    null === E && (E = p);
                                    break;
                                }
                                e && E && null === A.alternate && t(i, E),
                                    (a = s(A, a, h)),
                                    null === c ? (d = A) : (c.sibling = A),
                                    (c = A),
                                    (E = p);
                            }
                            if (g.done) return n(i, E), rS && rp(i, h), d;
                            if (null === E) {
                                for (; !g.done; h++, g = o.next())
                                    null !== (g = _(i, g.value, u)) &&
                                        ((a = s(g, a, h)), null === c ? (d = g) : (c.sibling = g), (c = g));
                                return rS && rp(i, h), d;
                            }
                            for (E = r(E); !g.done; h++, g = o.next())
                                null !== (g = m(E, i, h, g.value, u)) &&
                                    (e && null !== g.alternate && E.delete(null === g.key ? h : g.key),
                                    (a = s(g, a, h)),
                                    null === c ? (d = g) : (c.sibling = g),
                                    (c = g));
                            return (
                                e &&
                                    E.forEach(function (e) {
                                        return t(i, e);
                                    }),
                                rS && rp(i, h),
                                d
                            );
                        })(u, d, (c = A.call(c)), g);
                    }
                    if ("function" == typeof c.then) return o(u, d, sQ(c), g);
                    if (c.$$typeof === T) return o(u, d, rW(u, c), g);
                    sZ(u, c);
                }
                return ("string" == typeof c && "" !== c) || "number" == typeof c || "bigint" == typeof c
                    ? ((c = "" + c),
                      null !== d && 6 === d.tag
                          ? (n(u, d.sibling), ((g = i(d, c)).return = u))
                          : (n(u, d), ((g = rs(c, u.mode, g)).return = u)),
                      a((u = g)))
                    : n(u, d);
            })(o, u, d, c);
            return (sq = null), g;
        } catch (e) {
            if (e === r8 || e === ie) throw e;
            var A = n9(29, e, null, o.mode);
            return (A.lanes = c), (A.return = o), A;
        } finally {
        }
    };
}
var s2 = s1(!0),
    s3 = s1(!1),
    s6 = G(null),
    s4 = null;
function s5(e) {
    var t = e.alternate;
    F(ae, 1 & ae.current),
        F(s6, e),
        null === s4 && (null === t || null !== iS.current ? (s4 = e) : null !== t.memoizedState && (s4 = e));
}
function s7(e) {
    if (22 === e.tag) {
        if ((F(ae, ae.current), F(s6, e), null === s4)) {
            var t = e.alternate;
            null !== t && null !== t.memoizedState && (s4 = e);
        }
    } else s8(e);
}
function s8() {
    F(ae, ae.current), F(s6, s6.current);
}
function s9(e) {
    V(s6), s4 === e && (s4 = null), V(ae);
}
var ae = G(0);
function at(e) {
    for (var t = e; null !== t; ) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || ug(n))) return t;
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
function an(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : _({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
}
var ar = {
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = o4(),
            i = i_(r);
        (i.payload = t), null != n && (i.callback = n), null !== (t = iE(e, i, r)) && (o7(t, e, r), ih(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = o4(),
            i = i_(r);
        (i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            null !== (t = iE(e, i, r)) && (o7(t, e, r), ih(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = o4(),
            r = i_(n);
        (r.tag = 2), null != t && (r.callback = t), null !== (t = iE(e, r, n)) && (o7(t, e, n), ih(t, e, n));
    },
};
function ai(e, t, n, r, i, s, a) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, s, a)
        : !t.prototype || !t.prototype.isPureReactComponent || !nN(n, r) || !nN(i, s);
}
function as(e, t, n, r) {
    (e = t.state),
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ar.enqueueReplaceState(t, t.state, null);
}
function aa(e, t) {
    var n = t;
    if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
    if ((e = e.defaultProps)) for (var i in (n === t && (n = _({}, n)), e)) void 0 === n[i] && (n[i] = e[i]);
    return n;
}
var ao =
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
function al(e) {
    ao(e);
}
function au(e) {
    console.error(e);
}
function ad(e) {
    ao(e);
}
function ac(e, t) {
    try {
        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function a_(e, t, n) {
    try {
        (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
    } catch (e) {
        setTimeout(function () {
            throw e;
        });
    }
}
function af(e, t, n) {
    return (
        ((n = i_(n)).tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
            ac(e, t);
        }),
        n
    );
}
function aE(e) {
    return ((e = i_(e)).tag = 3), e;
}
function ah(e, t, n, r) {
    var i = n.type.getDerivedStateFromError;
    if ("function" == typeof i) {
        var s = r.value;
        (e.payload = function () {
            return i(s);
        }),
            (e.callback = function () {
                a_(t, n, r);
            });
    }
    var a = n.stateNode;
    null !== a &&
        "function" == typeof a.componentDidCatch &&
        (e.callback = function () {
            a_(t, n, r), "function" != typeof i && (null === oq ? (oq = new Set([this])) : oq.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
        });
}
var ap = Error(l(461)),
    am = !1;
function ag(e, t, n, r) {
    t.child = null === e ? s3(t, null, n, r) : s2(t, e.child, n, r);
}
function aA(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    if ("ref" in r) {
        var a = {};
        for (var o in r) "ref" !== o && (a[o] = r[o]);
    } else a = r;
    return (rH(t), (r = iF(e, t, n, a, s, i)), (o = iW()), null === e || am)
        ? (rS && o && rg(t), (t.flags |= 1), ag(e, t, r, i), t.child)
        : (ij(e, t, i), aV(e, t, i));
}
function aI(e, t, n, r, i) {
    if (null === e) {
        var s = n.type;
        return "function" != typeof s || re(s) || void 0 !== s.defaultProps || null !== n.compare
            ? (((e = rr(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = s), aT(e, t, s, r, i));
    }
    if (((s = e.child), !aF(e, i))) {
        var a = s.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nN)(a, r) && e.ref === t.ref) return aV(e, t, i);
    }
    return (t.flags |= 1), ((e = rt(s, r)).ref = t.ref), (e.return = t), (t.child = e);
}
function aT(e, t, n, r, i) {
    if (null !== e) {
        var s = e.memoizedProps;
        if (nN(s, r) && e.ref === t.ref)
            if (((am = !1), (t.pendingProps = r = s), !aF(e, i))) return (t.lanes = e.lanes), aV(e, t, i);
            else 0 != (131072 & e.flags) && (am = !0);
    }
    return aO(e, t, n, r, i);
}
function aS(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode) {
        if (0 != (128 & t.flags)) {
            if (((r = null !== s ? s.baseLanes | n : n), null !== e)) {
                for (s = 0, i = t.child = e.child; null !== i; ) (s = s | i.lanes | i.childLanes), (i = i.sibling);
                t.childLanes = s & ~r;
            } else (t.childLanes = 0), (t.child = null);
            return ay(e, t, r, n);
        }
        if (0 == (0x20000000 & n))
            return (t.lanes = t.childLanes = 0x20000000), ay(e, t, null !== s ? s.baseLanes | n : n, n);
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
            null !== e && r5(t, null !== s ? s.cachePool : null),
            null !== s ? iN(t, s) : iO(),
            s7(t);
    } else
        null !== s
            ? (r5(t, s.cachePool), iN(t, s), s8(t), (t.memoizedState = null))
            : (null !== e && r5(t, null), iO(), s8(t));
    return ag(e, t, i, n), t.child;
}
function ay(e, t, n, r) {
    var i = r4();
    return (
        (t.memoizedState = {
            baseLanes: n,
            cachePool: (i = null === i ? null : { parent: rq._currentValue, pool: i }),
        }),
        null !== e && r5(t, null),
        iO(),
        s7(t),
        null !== e && rF(e, t, r, !0),
        null
    );
}
function aN(e, t) {
    var n = t.ref;
    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
    else {
        if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
        (null === e || e.ref !== n) && (t.flags |= 4194816);
    }
}
function aO(e, t, n, r, i) {
    return (rH(t), (n = iF(e, t, n, r, void 0, i)), (r = iW()), null === e || am)
        ? (rS && r && rg(t), (t.flags |= 1), ag(e, t, n, i), t.child)
        : (ij(e, t, i), aV(e, t, i));
}
function aR(e, t, n, r, i, s) {
    return (rH(t), (t.updateQueue = null), (n = iH(t, r, n, i)), iB(e), (r = iW()), null === e || am)
        ? (rS && r && rg(t), (t.flags |= 1), ag(e, t, n, s), t.child)
        : (ij(e, t, s), aV(e, t, s));
}
function av(e, t, n, r, i) {
    if ((rH(t), null === t.stateNode)) {
        var s = n7,
            a = n.contextType;
        "object" == typeof a && null !== a && (s = rY(a)),
            (t.memoizedState = null !== (s = new n(r, s)).state && void 0 !== s.state ? s.state : null),
            (s.updater = ar),
            (t.stateNode = s),
            (s._reactInternals = t),
            ((s = t.stateNode).props = r),
            (s.state = t.memoizedState),
            (s.refs = {}),
            id(t),
            (a = n.contextType),
            (s.context = "object" == typeof a && null !== a ? rY(a) : n7),
            (s.state = t.memoizedState),
            "function" == typeof (a = n.getDerivedStateFromProps) && (an(t, n, a, r), (s.state = t.memoizedState)),
            "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof s.getSnapshotBeforeUpdate ||
                ("function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount) ||
                ((a = s.state),
                "function" == typeof s.componentWillMount && s.componentWillMount(),
                "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount(),
                a !== s.state && ar.enqueueReplaceState(s, s.state, null),
                iA(t, r, s, i),
                ig(),
                (s.state = t.memoizedState)),
            "function" == typeof s.componentDidMount && (t.flags |= 4194308),
            (r = !0);
    } else if (null === e) {
        s = t.stateNode;
        var o = t.memoizedProps,
            l = aa(n, o);
        s.props = l;
        var u = s.context,
            d = n.contextType;
        (a = n7), "object" == typeof d && null !== d && (a = rY(d));
        var c = n.getDerivedStateFromProps;
        (d = "function" == typeof c || "function" == typeof s.getSnapshotBeforeUpdate),
            (o = t.pendingProps !== o),
            d ||
                ("function" != typeof s.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof s.componentWillReceiveProps) ||
                ((o || u !== a) && as(t, s, r, a)),
            (iu = !1);
        var _ = t.memoizedState;
        (s.state = _),
            iA(t, r, s, i),
            ig(),
            (u = t.memoizedState),
            o || _ !== u || iu
                ? ("function" == typeof c && (an(t, n, c, r), (u = t.memoizedState)),
                  (l = iu || ai(t, n, l, r, _, u, a))
                      ? (d ||
                            ("function" != typeof s.UNSAFE_componentWillMount &&
                                "function" != typeof s.componentWillMount) ||
                            ("function" == typeof s.componentWillMount && s.componentWillMount(),
                            "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()),
                        "function" == typeof s.componentDidMount && (t.flags |= 4194308))
                      : ("function" == typeof s.componentDidMount && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (s.props = r),
                  (s.state = u),
                  (s.context = a),
                  (r = l))
                : ("function" == typeof s.componentDidMount && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            ic(e, t),
            (d = aa(n, (a = t.memoizedProps))),
            (s.props = d),
            (c = t.pendingProps),
            (_ = s.context),
            (u = n.contextType),
            (l = n7),
            "object" == typeof u && null !== u && (l = rY(u)),
            (u =
                "function" == typeof (o = n.getDerivedStateFromProps) ||
                "function" == typeof s.getSnapshotBeforeUpdate) ||
                ("function" != typeof s.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof s.componentWillReceiveProps) ||
                ((a !== c || _ !== l) && as(t, s, r, l)),
            (iu = !1),
            (_ = t.memoizedState),
            (s.state = _),
            iA(t, r, s, i),
            ig();
        var f = t.memoizedState;
        a !== c || _ !== f || iu || (null !== e && null !== e.dependencies && rB(e.dependencies))
            ? ("function" == typeof o && (an(t, n, o, r), (f = t.memoizedState)),
              (d = iu || ai(t, n, d, r, _, f, l) || (null !== e && null !== e.dependencies && rB(e.dependencies)))
                  ? (u ||
                        ("function" != typeof s.UNSAFE_componentWillUpdate &&
                            "function" != typeof s.componentWillUpdate) ||
                        ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(r, f, l),
                        "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, f, l)),
                    "function" == typeof s.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof s.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ("function" != typeof s.componentDidUpdate ||
                        (a === e.memoizedProps && _ === e.memoizedState) ||
                        (t.flags |= 4),
                    "function" != typeof s.getSnapshotBeforeUpdate ||
                        (a === e.memoizedProps && _ === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = f)),
              (s.props = r),
              (s.state = f),
              (s.context = l),
              (r = d))
            : ("function" != typeof s.componentDidUpdate ||
                  (a === e.memoizedProps && _ === e.memoizedState) ||
                  (t.flags |= 4),
              "function" != typeof s.getSnapshotBeforeUpdate ||
                  (a === e.memoizedProps && _ === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return (
        (s = r),
        aN(e, t),
        (r = 0 != (128 & t.flags)),
        s || r
            ? ((s = t.stateNode),
              (n = r && "function" != typeof n.getDerivedStateFromError ? null : s.render()),
              (t.flags |= 1),
              null !== e && r ? ((t.child = s2(t, e.child, null, i)), (t.child = s2(t, null, n, i))) : ag(e, t, n, i),
              (t.memoizedState = s.state),
              (e = t.child))
            : (e = aV(e, t, i)),
        e
    );
}
function aC(e, t, n, r) {
    return rD(), (t.flags |= 256), ag(e, t, n, r), t.child;
}
var ab = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
function aD(e) {
    return { baseLanes: e, cachePool: r7() };
}
function aL(e, t, n) {
    return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= oB), e;
}
function aw(e, t, n) {
    var r,
        i = t.pendingProps,
        s = !1,
        a = 0 != (128 & t.flags);
    if (
        ((r = a) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & ae.current)),
        r && ((s = !0), (t.flags &= -129)),
        (r = 0 != (32 & t.flags)),
        (t.flags &= -33),
        null === e)
    ) {
        if (rS) {
            if ((s ? s5(t) : s8(t), rS)) {
                var o,
                    u = rT;
                if ((o = u)) {
                    a: {
                        for (o = u, u = rN; 8 !== o.nodeType; )
                            if (!u || null === (o = uA(o.nextSibling))) {
                                u = null;
                                break a;
                            }
                        u = o;
                    }
                    null !== u
                        ? ((t.memoizedState = {
                              dehydrated: u,
                              treeContext: null !== rf ? { id: rE, overflow: rh } : null,
                              retryLane: 0x20000000,
                              hydrationErrors: null,
                          }),
                          ((o = n9(18, null, null, 0)).stateNode = u),
                          (o.return = t),
                          (t.child = o),
                          (rI = t),
                          (rT = null),
                          (o = !0))
                        : (o = !1);
                }
                o || rR(t);
            }
            if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                return ug(u) ? (t.lanes = 32) : (t.lanes = 0x20000000), null;
            s9(t);
        }
        return ((u = i.children), (i = i.fallback), s)
            ? (s8(t),
              (u = aP({ mode: "hidden", children: u }, (s = t.mode))),
              (i = ri(i, s, n, null)),
              (u.return = t),
              (i.return = t),
              (u.sibling = i),
              (t.child = u),
              ((s = t.child).memoizedState = aD(n)),
              (s.childLanes = aL(e, r, n)),
              (t.memoizedState = ab),
              i)
            : (s5(t), aM(t, u));
    }
    if (null !== (o = e.memoizedState) && null !== (u = o.dehydrated)) {
        if (a)
            256 & t.flags
                ? (s5(t), (t.flags &= -257), (t = aU(e, t, n)))
                : null !== t.memoizedState
                  ? (s8(t), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (s8(t),
                    (s = i.fallback),
                    (u = t.mode),
                    (i = aP({ mode: "visible", children: i.children }, u)),
                    (s = ri(s, u, n, null)),
                    (s.flags |= 2),
                    (i.return = t),
                    (s.return = t),
                    (i.sibling = s),
                    (t.child = i),
                    s2(t, e.child, null, n),
                    ((i = t.child).memoizedState = aD(n)),
                    (i.childLanes = aL(e, r, n)),
                    (t.memoizedState = ab),
                    (t = s));
        else if ((s5(t), ug(u))) {
            if ((r = u.nextSibling && u.nextSibling.dataset)) var d = r.dgst;
            (r = d),
                ((i = Error(l(419))).stack = ""),
                (i.digest = r),
                rw({ value: i, source: null, stack: null }),
                (t = aU(e, t, n));
        } else if ((am || rF(e, t, n, !1), (r = 0 != (n & e.childLanes)), am || r)) {
            if (
                null !== (r = oC) &&
                0 !== (i = 0 != ((i = 0 != (42 & (i = n & -n)) ? 1 : eR(i)) & (r.suspendedLanes | n)) ? 0 : i) &&
                i !== o.retryLane
            )
                throw ((o.retryLane = i), n6(e, i), o7(r, e, i), ap);
            "$?" === u.data || lo(), (t = aU(e, t, n));
        } else
            "$?" === u.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = o.treeContext),
                  (rT = uA(u.nextSibling)),
                  (rI = t),
                  (rS = !0),
                  (ry = null),
                  (rN = !1),
                  null !== e &&
                      ((rc[r_++] = rE), (rc[r_++] = rh), (rc[r_++] = rf), (rE = e.id), (rh = e.overflow), (rf = t)),
                  (t = aM(t, i.children)),
                  (t.flags |= 4096));
        return t;
    }
    return s
        ? (s8(t),
          (s = i.fallback),
          (u = t.mode),
          (d = (o = e.child).sibling),
          ((i = rt(o, { mode: "hidden", children: i.children })).subtreeFlags = 0x3e00000 & o.subtreeFlags),
          null !== d ? (s = rt(d, s)) : ((s = ri(s, u, n, null)), (s.flags |= 2)),
          (s.return = t),
          (i.return = t),
          (i.sibling = s),
          (t.child = i),
          (i = s),
          (s = t.child),
          null === (u = e.child.memoizedState)
              ? (u = aD(n))
              : (null !== (o = u.cachePool)
                    ? ((d = rq._currentValue), (o = o.parent !== d ? { parent: d, pool: d } : o))
                    : (o = r7()),
                (u = { baseLanes: u.baseLanes | n, cachePool: o })),
          (s.memoizedState = u),
          (s.childLanes = aL(e, r, n)),
          (t.memoizedState = ab),
          i)
        : (s5(t),
          (e = (n = e.child).sibling),
          ((n = rt(n, { mode: "visible", children: i.children })).return = t),
          (n.sibling = null),
          null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
}
function aM(e, t) {
    return ((t = aP({ mode: "visible", children: t }, e.mode)).return = e), (e.child = t);
}
function aP(e, t) {
    return (
        ((e = n9(22, e, null, t)).lanes = 0),
        (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        e
    );
}
function aU(e, t, n) {
    return s2(t, e.child, null, n), (e = aM(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function ak(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), rG(e.return, t, n);
}
function ax(e, t, n, r, i) {
    var s = e.memoizedState;
    null === s
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((s.isBackwards = t),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = r),
          (s.tail = n),
          (s.tailMode = i));
}
function aG(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if ((ag(e, t, r.children, n), 0 != (2 & (r = ae.current)))) (r = (1 & r) | 2), (t.flags |= 128);
    else {
        if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ak(e, n, t);
                else if (19 === e.tag) ak(e, n, t);
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
    switch ((F(ae, r), i)) {
        case "forwards":
            for (i = null, n = t.child; null !== n; )
                null !== (e = n.alternate) && null === at(e) && (i = n), (n = n.sibling);
            null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                ax(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === at(e)) {
                    t.child = i;
                    break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
            }
            ax(t, !0, n, null, s);
            break;
        case "together":
            ax(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null;
    }
    return t.child;
}
function aV(e, t, n) {
    if ((null !== e && (t.dependencies = e.dependencies), (oG |= t.lanes), 0 == (n & t.childLanes))) {
        if (null === e) return null;
        else if ((rF(e, t, n, !1), 0 == (n & t.childLanes))) return null;
    }
    if (null !== e && t.child !== e.child) throw Error(l(153));
    if (null !== t.child) {
        for (n = rt((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = rt(e, e.pendingProps)).return = t);
        n.sibling = null;
    }
    return t.child;
}
function aF(e, t) {
    return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && rB(e));
}
function aB(e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps) am = !0;
        else {
            if (!aF(e, n) && 0 == (128 & t.flags))
                return (
                    (am = !1),
                    (function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                j(t, t.stateNode.containerInfo), rk(t, rq, e.memoizedState.cache), rD();
                                break;
                            case 27:
                            case 5:
                                $(t);
                                break;
                            case 4:
                                j(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                rk(t, t.type, t.memoizedProps.value);
                                break;
                            case 13:
                                var r = t.memoizedState;
                                if (null !== r) {
                                    if (null !== r.dehydrated) return s5(t), (t.flags |= 128), null;
                                    if (0 != (n & t.child.childLanes)) return aw(e, t, n);
                                    return s5(t), null !== (e = aV(e, t, n)) ? e.sibling : null;
                                }
                                s5(t);
                                break;
                            case 19:
                                var i = 0 != (128 & e.flags);
                                if (
                                    ((r = 0 != (n & t.childLanes)) || (rF(e, t, n, !1), (r = 0 != (n & t.childLanes))),
                                    i)
                                ) {
                                    if (r) return aG(e, t, n);
                                    t.flags |= 128;
                                }
                                if (
                                    (null !== (i = t.memoizedState) &&
                                        ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                                    F(ae, ae.current),
                                    !r)
                                )
                                    return null;
                                break;
                            case 22:
                            case 23:
                                return (t.lanes = 0), aS(e, t, n);
                            case 24:
                                rk(t, rq, e.memoizedState.cache);
                        }
                        return aV(e, t, n);
                    })(e, t, n)
                );
            am = 0 != (131072 & e.flags);
        }
    else (am = !1), rS && 0 != (1048576 & t.flags) && rm(t, rd, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 16:
            e: {
                e = t.pendingProps;
                var r = t.elementType,
                    i = r._init;
                if (((r = i(r._payload)), (t.type = r), "function" == typeof r))
                    re(r)
                        ? ((e = aa(r, e)), (t.tag = 1), (t = av(null, t, r, e, n)))
                        : ((t.tag = 0), (t = aO(null, t, r, e, n)));
                else {
                    if (null != r) {
                        if ((i = r.$$typeof) === S) {
                            (t.tag = 11), (t = aA(null, t, r, e, n));
                            break e;
                        } else if (i === O) {
                            (t.tag = 14), (t = aI(null, t, r, e, n));
                            break e;
                        }
                    }
                    throw Error(
                        l(
                            306,
                            (t =
                                (function e(t) {
                                    if (null == t) return null;
                                    if ("function" == typeof t)
                                        return t.$$typeof === L ? null : t.displayName || t.name || null;
                                    if ("string" == typeof t) return t;
                                    switch (t) {
                                        case p:
                                            return "Fragment";
                                        case g:
                                            return "Profiler";
                                        case m:
                                            return "StrictMode";
                                        case y:
                                            return "Suspense";
                                        case N:
                                            return "SuspenseList";
                                        case v:
                                            return "Activity";
                                    }
                                    if ("object" == typeof t)
                                        switch (t.$$typeof) {
                                            case h:
                                                return "Portal";
                                            case T:
                                                return (t.displayName || "Context") + ".Provider";
                                            case I:
                                                return (t._context.displayName || "Context") + ".Consumer";
                                            case S:
                                                var n = t.render;
                                                return (
                                                    (t = t.displayName) ||
                                                        (t =
                                                            "" !== (t = n.displayName || n.name || "")
                                                                ? "ForwardRef(" + t + ")"
                                                                : "ForwardRef"),
                                                    t
                                                );
                                            case O:
                                                return null !== (n = t.displayName || null) ? n : e(t.type) || "Memo";
                                            case R:
                                                (n = t._payload), (t = t._init);
                                                try {
                                                    return e(t(n));
                                                } catch (e) {}
                                        }
                                    return null;
                                })(r) || r),
                            "",
                        ),
                    );
                }
            }
            return t;
        case 0:
            return aO(e, t, t.type, t.pendingProps, n);
        case 1:
            return (i = aa((r = t.type), t.pendingProps)), av(e, t, r, i, n);
        case 3:
            e: {
                if ((j(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var s = t.memoizedState;
                (i = s.element), ic(e, t), iA(t, r, null, n);
                var a = t.memoizedState;
                if (
                    (rk(t, rq, (r = a.cache)),
                    r !== s.cache && rV(t, [rq], n, !0),
                    ig(),
                    (r = a.element),
                    s.isDehydrated)
                )
                    if (
                        ((s = { element: r, isDehydrated: !1, cache: a.cache }),
                        (t.updateQueue.baseState = s),
                        (t.memoizedState = s),
                        256 & t.flags)
                    ) {
                        t = aC(e, t, r, n);
                        break e;
                    } else if (r !== i) {
                        rw((i = nQ(Error(l(424)), t))), (t = aC(e, t, r, n));
                        break e;
                    } else
                        for (
                            rT = uA(
                                (e =
                                    9 === (e = t.stateNode.containerInfo).nodeType
                                        ? e.body
                                        : "HTML" === e.nodeName
                                          ? e.ownerDocument.body
                                          : e).firstChild,
                            ),
                                rI = t,
                                rS = !0,
                                ry = null,
                                rN = !0,
                                n = s3(t, null, r, n),
                                t.child = n;
                            n;
                        )
                            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                else {
                    if ((rD(), r === i)) {
                        t = aV(e, t, n);
                        break e;
                    }
                    ag(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 26:
            return (
                aN(e, t),
                null === e
                    ? (n = uD(t.type, null, t.pendingProps, null))
                        ? (t.memoizedState = n)
                        : rS ||
                          ((n = t.type),
                          (e = t.pendingProps),
                          ((r = us(Y.current).createElement(n))[eD] = t),
                          (r[eL] = e),
                          un(r, n, e),
                          eY(r),
                          (t.stateNode = r))
                    : (t.memoizedState = uD(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                null
            );
        case 27:
            return (
                $(t),
                null === e &&
                    rS &&
                    ((r = t.stateNode = uS(t.type, t.pendingProps, Y.current)),
                    (rI = t),
                    (rN = !0),
                    (i = rT),
                    uh(t.type) ? ((uI = i), (rT = uA(r.firstChild))) : (rT = i)),
                ag(e, t, t.pendingProps.children, n),
                aN(e, t),
                null === e && (t.flags |= 4194304),
                t.child
            );
        case 5:
            return (
                null === e &&
                    rS &&
                    ((i = r = rT) &&
                        (null !==
                        (r = (function (e, t, n, r) {
                            for (; 1 === e.nodeType; ) {
                                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                    if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
                                } else if (r) {
                                    if (!e[ex])
                                        switch (t) {
                                            case "meta":
                                                if (!e.hasAttribute("itemprop")) break;
                                                return e;
                                            case "link":
                                                if (
                                                    ("stylesheet" === (i = e.getAttribute("rel")) &&
                                                        e.hasAttribute("data-precedence")) ||
                                                    i !== n.rel ||
                                                    e.getAttribute("href") !==
                                                        (null == n.href || "" === n.href ? null : n.href) ||
                                                    e.getAttribute("crossorigin") !==
                                                        (null == n.crossOrigin ? null : n.crossOrigin) ||
                                                    e.getAttribute("title") !== (null == n.title ? null : n.title)
                                                )
                                                    break;
                                                return e;
                                            case "style":
                                                if (e.hasAttribute("data-precedence")) break;
                                                return e;
                                            case "script":
                                                if (
                                                    ((i = e.getAttribute("src")) !== (null == n.src ? null : n.src) ||
                                                        e.getAttribute("type") !== (null == n.type ? null : n.type) ||
                                                        e.getAttribute("crossorigin") !==
                                                            (null == n.crossOrigin ? null : n.crossOrigin)) &&
                                                    i &&
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
                                    var i = null == n.name ? null : "" + n.name;
                                    if ("hidden" === n.type && e.getAttribute("name") === i) return e;
                                }
                                if (null === (e = uA(e.nextSibling))) break;
                            }
                            return null;
                        })(r, t.type, t.pendingProps, rN))
                            ? ((t.stateNode = r), (rI = t), (rT = uA(r.firstChild)), (rN = !1), (i = !0))
                            : (i = !1)),
                    i || rR(t)),
                $(t),
                (i = t.type),
                (s = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (r = s.children),
                ul(i, s) ? (r = null) : null !== a && ul(i, a) && (t.flags |= 32),
                null !== t.memoizedState && (uX._currentValue = i = iF(e, t, iY, null, null, n)),
                aN(e, t),
                ag(e, t, r, n),
                t.child
            );
        case 6:
            return (
                null === e &&
                    rS &&
                    ((e = n = rT) &&
                        (null !==
                        (n = (function (e, t, n) {
                            if ("" === t) return null;
                            for (; 3 !== e.nodeType; )
                                if (
                                    ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) ||
                                    null === (e = uA(e.nextSibling))
                                )
                                    return null;
                            return e;
                        })(n, t.pendingProps, rN))
                            ? ((t.stateNode = n), (rI = t), (rT = null), (e = !0))
                            : (e = !1)),
                    e || rR(t)),
                null
            );
        case 13:
            return aw(e, t, n);
        case 4:
            return (
                j(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = s2(t, null, r, n)) : ag(e, t, r, n),
                t.child
            );
        case 11:
            return aA(e, t, t.type, t.pendingProps, n);
        case 7:
            return ag(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return ag(e, t, t.pendingProps.children, n), t.child;
        case 10:
            return (r = t.pendingProps), rk(t, t.type, r.value), ag(e, t, r.children, n), t.child;
        case 9:
            return (
                (i = t.type._context),
                (r = t.pendingProps.children),
                rH(t),
                (r = r((i = rY(i)))),
                (t.flags |= 1),
                ag(e, t, r, n),
                t.child
            );
        case 14:
            return aI(e, t, t.type, t.pendingProps, n);
        case 15:
            return aT(e, t, t.type, t.pendingProps, n);
        case 19:
            return aG(e, t, n);
        case 31:
            return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e ? ((n = aP(r, n)).ref = t.ref) : ((n = rt(e.child, r)).ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n)
            );
        case 22:
            return aS(e, t, n);
        case 24:
            return (
                rH(t),
                (r = rY(rq)),
                null === e
                    ? (null === (i = r4()) &&
                          ((i = oC),
                          (s = rX()),
                          (i.pooledCache = s),
                          s.refCount++,
                          null !== s && (i.pooledCacheLanes |= n),
                          (i = s)),
                      (t.memoizedState = { parent: r, cache: i }),
                      id(t),
                      rk(t, rq, i))
                    : (0 != (e.lanes & n) && (ic(e, t), iA(t, null, null, n), ig()),
                      (i = e.memoizedState),
                      (s = t.memoizedState),
                      i.parent !== r
                          ? ((i = { parent: r, cache: r }),
                            (t.memoizedState = i),
                            0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i),
                            rk(t, rq, r))
                          : (rk(t, rq, (r = s.cache)), r !== i.cache && rV(t, [rq], n, !0))),
                ag(e, t, t.pendingProps.children, n),
                t.child
            );
        case 29:
            throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
}
function aH(e) {
    e.flags |= 4;
}
function aY(e, t) {
    if ("stylesheet" !== t.type || 0 != (4 & t.state.loading)) e.flags &= -0x1000001;
    else if (((e.flags |= 0x1000000), !uY(t))) {
        if (
            null !== (t = s6.current) &&
            ((4194048 & oD) === oD ? null !== s4 : ((0x3c00000 & oD) !== oD && 0 == (0x20000000 & oD)) || t !== s4)
        )
            throw ((ia = it), r9);
        e.flags |= 8192;
    }
}
function aW(e, t) {
    null !== t && (e.flags |= 4),
        16384 & e.flags && ((t = 22 !== e.tag ? eT() : 0x20000000), (e.lanes |= t), (oH |= t));
}
function aj(e, t) {
    if (!rS)
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
function aK(e) {
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
function a$(e, t) {
    switch ((rA(t), t.tag)) {
        case 3:
            rx(rq), K();
            break;
        case 26:
        case 27:
        case 5:
            z(t);
            break;
        case 4:
            K();
            break;
        case 13:
            s9(t);
            break;
        case 19:
            V(ae);
            break;
        case 10:
            rx(t.type);
            break;
        case 22:
        case 23:
            s9(t), iR(), null !== e && V(r6);
            break;
        case 24:
            rx(rq);
    }
}
function az(e, t) {
    try {
        var n = t.updateQueue,
            r = null !== n ? n.lastEffect : null;
        if (null !== r) {
            var i = r.next;
            n = i;
            do {
                if ((n.tag & e) === e) {
                    r = void 0;
                    var s = n.create;
                    n.inst.destroy = r = s();
                }
                n = n.next;
            } while (n !== i);
        }
    } catch (e) {
        lS(t, t.return, e);
    }
}
function aq(e, t, n) {
    try {
        var r = t.updateQueue,
            i = null !== r ? r.lastEffect : null;
        if (null !== i) {
            var s = i.next;
            r = s;
            do {
                if ((r.tag & e) === e) {
                    var a = r.inst,
                        o = a.destroy;
                    if (void 0 !== o) {
                        (a.destroy = void 0), (i = t);
                        try {
                            o();
                        } catch (e) {
                            lS(i, n, e);
                        }
                    }
                }
                r = r.next;
            } while (r !== s);
        }
    } catch (e) {
        lS(t, t.return, e);
    }
}
function aX(e) {
    var t = e.updateQueue;
    if (null !== t) {
        var n = e.stateNode;
        try {
            iT(t, n);
        } catch (t) {
            lS(e, e.return, t);
        }
    }
}
function aQ(e, t, n) {
    (n.props = aa(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
        n.componentWillUnmount();
    } catch (n) {
        lS(e, t, n);
    }
}
function aJ(e, t) {
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
        lS(e, t, n);
    }
}
function aZ(e, t) {
    var n = e.ref,
        r = e.refCleanup;
    if (null !== n)
        if ("function" == typeof r)
            try {
                r();
            } catch (n) {
                lS(e, t, n);
            } finally {
                (e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null);
            }
        else if ("function" == typeof n)
            try {
                n(null);
            } catch (n) {
                lS(e, t, n);
            }
        else n.current = null;
}
function a0(e) {
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
        lS(e, e.return, t);
    }
}
function a1(e, t, n) {
    try {
        var r = e.stateNode;
        (function (e, t, n, r) {
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
                        s = null,
                        a = null,
                        o = null,
                        u = null,
                        d = null,
                        c = null;
                    for (E in n) {
                        var _ = n[E];
                        if (n.hasOwnProperty(E) && null != _)
                            switch (E) {
                                case "checked":
                                case "value":
                                    break;
                                case "defaultValue":
                                    u = _;
                                default:
                                    r.hasOwnProperty(E) || ue(e, t, E, null, r, _);
                            }
                    }
                    for (var f in r) {
                        var E = r[f];
                        if (((_ = n[f]), r.hasOwnProperty(f) && (null != E || null != _)))
                            switch (f) {
                                case "type":
                                    s = E;
                                    break;
                                case "name":
                                    i = E;
                                    break;
                                case "checked":
                                    d = E;
                                    break;
                                case "defaultChecked":
                                    c = E;
                                    break;
                                case "value":
                                    a = E;
                                    break;
                                case "defaultValue":
                                    o = E;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != E) throw Error(l(137, t));
                                    break;
                                default:
                                    E !== _ && ue(e, t, f, E, r, _);
                            }
                    }
                    tt(e, a, o, u, d, c, s, i);
                    return;
                case "select":
                    for (s in ((E = a = o = f = null), n))
                        if (((u = n[s]), n.hasOwnProperty(s) && null != u))
                            switch (s) {
                                case "value":
                                    break;
                                case "multiple":
                                    E = u;
                                default:
                                    r.hasOwnProperty(s) || ue(e, t, s, null, r, u);
                            }
                    for (i in r)
                        if (((s = r[i]), (u = n[i]), r.hasOwnProperty(i) && (null != s || null != u)))
                            switch (i) {
                                case "value":
                                    f = s;
                                    break;
                                case "defaultValue":
                                    o = s;
                                    break;
                                case "multiple":
                                    a = s;
                                default:
                                    s !== u && ue(e, t, i, s, r, u);
                            }
                    (t = o),
                        (n = a),
                        (r = E),
                        null != f
                            ? ti(e, !!n, f, !1)
                            : !!r != !!n && (null != t ? ti(e, !!n, t, !0) : ti(e, !!n, n ? [] : "", !1));
                    return;
                case "textarea":
                    for (o in ((E = f = null), n))
                        if (((i = n[o]), n.hasOwnProperty(o) && null != i && !r.hasOwnProperty(o)))
                            switch (o) {
                                case "value":
                                case "children":
                                    break;
                                default:
                                    ue(e, t, o, null, r, i);
                            }
                    for (a in r)
                        if (((i = r[a]), (s = n[a]), r.hasOwnProperty(a) && (null != i || null != s)))
                            switch (a) {
                                case "value":
                                    f = i;
                                    break;
                                case "defaultValue":
                                    E = i;
                                    break;
                                case "children":
                                    break;
                                case "dangerouslySetInnerHTML":
                                    if (null != i) throw Error(l(91));
                                    break;
                                default:
                                    i !== s && ue(e, t, a, i, r, s);
                            }
                    ts(e, f, E);
                    return;
                case "option":
                    for (var h in n)
                        (f = n[h]),
                            n.hasOwnProperty(h) &&
                                null != f &&
                                !r.hasOwnProperty(h) &&
                                ("selected" === h ? (e.selected = !1) : ue(e, t, h, null, r, f));
                    for (u in r)
                        (f = r[u]),
                            (E = n[u]),
                            r.hasOwnProperty(u) &&
                                f !== E &&
                                (null != f || null != E) &&
                                ("selected" === u
                                    ? (e.selected = f && "function" != typeof f && "symbol" != typeof f)
                                    : ue(e, t, u, f, r, E));
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
                    for (var p in n)
                        (f = n[p]), n.hasOwnProperty(p) && null != f && !r.hasOwnProperty(p) && ue(e, t, p, null, r, f);
                    for (d in r)
                        if (((f = r[d]), (E = n[d]), r.hasOwnProperty(d) && f !== E && (null != f || null != E)))
                            switch (d) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != f) throw Error(l(137, t));
                                    break;
                                default:
                                    ue(e, t, d, f, r, E);
                            }
                    return;
                default:
                    if (tc(t)) {
                        for (var m in n)
                            (f = n[m]),
                                n.hasOwnProperty(m) &&
                                    void 0 !== f &&
                                    !r.hasOwnProperty(m) &&
                                    ut(e, t, m, void 0, r, f);
                        for (c in r)
                            (f = r[c]),
                                (E = n[c]),
                                r.hasOwnProperty(c) &&
                                    f !== E &&
                                    (void 0 !== f || void 0 !== E) &&
                                    ut(e, t, c, f, r, E);
                        return;
                    }
            }
            for (var g in n)
                (f = n[g]), n.hasOwnProperty(g) && null != f && !r.hasOwnProperty(g) && ue(e, t, g, null, r, f);
            for (_ in r)
                (f = r[_]),
                    (E = n[_]),
                    r.hasOwnProperty(_) && f !== E && (null != f || null != E) && ue(e, t, _, f, r, E);
        })(r, e.type, n, t),
            (r[eL] = t);
    } catch (t) {
        lS(e, e.return, t);
    }
}
function a2(e) {
    return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && uh(e.type)) || 4 === e.tag;
}
function a3(e) {
    e: for (;;) {
        for (; null === e.sibling; ) {
            if (null === e.return || a2(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
            if ((27 === e.tag && uh(e.type)) || 2 & e.flags || null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
    }
}
function a6(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && (27 === r && uh(e.type) && (n = e.stateNode), null !== (e = e.child)))
        for (a6(e, t, n), e = e.sibling; null !== e; ) a6(e, t, n), (e = e.sibling);
}
function a4(e) {
    var t = e.stateNode,
        n = e.memoizedProps;
    try {
        for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
        un(t, r, n), (t[eD] = e), (t[eL] = n);
    } catch (t) {
        lS(e, e.return, t);
    }
}
var a5 = !1,
    a7 = !1,
    a8 = !1,
    a9 = "function" == typeof WeakSet ? WeakSet : Set,
    oe = null;
function ot(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
        case 0:
        case 11:
        case 15:
            o_(e, n), 4 & r && az(5, n);
            break;
        case 1:
            if ((o_(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                    try {
                        e.componentDidMount();
                    } catch (e) {
                        lS(n, n.return, e);
                    }
                else {
                    var i = aa(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                    } catch (e) {
                        lS(n, n.return, e);
                    }
                }
            64 & r && aX(n), 512 & r && aJ(n, n.return);
            break;
        case 3:
            if ((o_(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                    switch (n.child.tag) {
                        case 27:
                        case 5:
                        case 1:
                            t = n.child.stateNode;
                    }
                try {
                    iT(e, t);
                } catch (e) {
                    lS(n, n.return, e);
                }
            }
            break;
        case 27:
            null === t && 4 & r && a4(n);
        case 26:
        case 5:
            o_(e, n), null === t && 4 & r && a0(n), 512 & r && aJ(n, n.return);
            break;
        case 12:
        default:
            o_(e, n);
            break;
        case 13:
            o_(e, n),
                4 & r && oa(e, n),
                64 & r &&
                    null !== (e = n.memoizedState) &&
                    null !== (e = e.dehydrated) &&
                    (function (e, t) {
                        var n = e.ownerDocument;
                        if ("$?" !== e.data || "complete" === n.readyState) t();
                        else {
                            var r = function () {
                                t(), n.removeEventListener("DOMContentLoaded", r);
                            };
                            n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
                        }
                    })(e, (n = lR.bind(null, n)));
            break;
        case 22:
            if (!(r = null !== n.memoizedState || a5)) {
                (t = (null !== t && null !== t.memoizedState) || a7), (i = a5);
                var s = a7;
                (a5 = r),
                    (a7 = t) && !s
                        ? (function e(t, n, r) {
                              for (r = r && 0 != (8772 & n.subtreeFlags), n = n.child; null !== n; ) {
                                  var i = n.alternate,
                                      s = t,
                                      a = n,
                                      o = a.flags;
                                  switch (a.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          e(s, a, r), az(4, a);
                                          break;
                                      case 1:
                                          if (
                                              (e(s, a, r),
                                              "function" == typeof (s = (i = a).stateNode).componentDidMount)
                                          )
                                              try {
                                                  s.componentDidMount();
                                              } catch (e) {
                                                  lS(i, i.return, e);
                                              }
                                          if (null !== (s = (i = a).updateQueue)) {
                                              var l = i.stateNode;
                                              try {
                                                  var u = s.shared.hiddenCallbacks;
                                                  if (null !== u)
                                                      for (s.shared.hiddenCallbacks = null, s = 0; s < u.length; s++)
                                                          iI(u[s], l);
                                              } catch (e) {
                                                  lS(i, i.return, e);
                                              }
                                          }
                                          r && 64 & o && aX(a), aJ(a, a.return);
                                          break;
                                      case 27:
                                          a4(a);
                                      case 26:
                                      case 5:
                                          e(s, a, r), r && null === i && 4 & o && a0(a), aJ(a, a.return);
                                          break;
                                      case 12:
                                      default:
                                          e(s, a, r);
                                          break;
                                      case 13:
                                          e(s, a, r), r && 4 & o && oa(s, a);
                                          break;
                                      case 22:
                                          null === a.memoizedState && e(s, a, r), aJ(a, a.return);
                                      case 30:
                                  }
                                  n = n.sibling;
                              }
                          })(e, n, 0 != (8772 & n.subtreeFlags))
                        : o_(e, n),
                    (a5 = i),
                    (a7 = s);
            }
        case 30:
    }
}
var on = null,
    or = !1;
function oi(e, t, n) {
    for (n = n.child; null !== n; ) os(e, t, n), (n = n.sibling);
}
function os(e, t, n) {
    if (ed && "function" == typeof ed.onCommitFiberUnmount)
        try {
            ed.onCommitFiberUnmount(eu, n);
        } catch (e) {}
    switch (n.tag) {
        case 26:
            a7 || aZ(n, t),
                oi(e, t, n),
                n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
            break;
        case 27:
            a7 || aZ(n, t);
            var r = on,
                i = or;
            uh(n.type) && ((on = n.stateNode), (or = !1)), oi(e, t, n), uy(n.stateNode), (on = r), (or = i);
            break;
        case 5:
            a7 || aZ(n, t);
        case 6:
            if (((r = on), (i = or), (on = null), oi(e, t, n), (on = r), (or = i), null !== on))
                if (or)
                    try {
                        (9 === on.nodeType ? on.body : "HTML" === on.nodeName ? on.ownerDocument.body : on).removeChild(
                            n.stateNode,
                        );
                    } catch (e) {
                        lS(n, t, e);
                    }
                else
                    try {
                        on.removeChild(n.stateNode);
                    } catch (e) {
                        lS(n, t, e);
                    }
            break;
        case 18:
            null !== on &&
                (or
                    ? (up(
                          9 === (e = on).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e,
                          n.stateNode,
                      ),
                      dg(e))
                    : up(on, n.stateNode));
            break;
        case 4:
            (r = on), (i = or), (on = n.stateNode.containerInfo), (or = !0), oi(e, t, n), (on = r), (or = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            a7 || aq(2, n, t), a7 || aq(4, n, t), oi(e, t, n);
            break;
        case 1:
            a7 || (aZ(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount && aQ(n, t, r)), oi(e, t, n);
            break;
        case 21:
        default:
            oi(e, t, n);
            break;
        case 22:
            (a7 = (r = a7) || null !== n.memoizedState), oi(e, t, n), (a7 = r);
    }
}
function oa(e, t) {
    if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState) &&
        null !== (e = e.dehydrated)
    )
        try {
            dg(e);
        } catch (e) {
            lS(t, t.return, e);
        }
}
function oo(e, t) {
    var n = (function (e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new a9()), t;
            case 22:
                return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new a9()), t;
            default:
                throw Error(l(435, e.tag));
        }
    })(e);
    t.forEach(function (t) {
        var r = lv.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
    });
}
function ol(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var i = n[r],
                s = e,
                a = t,
                o = a;
            e: for (; null !== o; ) {
                switch (o.tag) {
                    case 27:
                        if (uh(o.type)) {
                            (on = o.stateNode), (or = !1);
                            break e;
                        }
                        break;
                    case 5:
                        (on = o.stateNode), (or = !1);
                        break e;
                    case 3:
                    case 4:
                        (on = o.stateNode.containerInfo), (or = !0);
                        break e;
                }
                o = o.return;
            }
            if (null === on) throw Error(l(160));
            os(s, a, i), (on = null), (or = !1), null !== (s = i.alternate) && (s.return = null), (i.return = null);
        }
    if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) od(t, e), (t = t.sibling);
}
var ou = null;
function od(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ol(t, e), oc(e), 4 & r && (aq(3, e, e.return), az(3, e), aq(5, e, e.return));
            break;
        case 1:
            ol(t, e),
                oc(e),
                512 & r && (a7 || null === n || aZ(n, n.return)),
                64 & r &&
                    a5 &&
                    null !== (e = e.updateQueue) &&
                    null !== (r = e.callbacks) &&
                    ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
            break;
        case 26:
            var i = ou;
            if ((ol(t, e), oc(e), 512 & r && (a7 || null === n || aZ(n, n.return)), 4 & r)) {
                var s = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                    if (null === r)
                        if (null === e.stateNode) {
                            e: {
                                (r = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i);
                                s: switch (r) {
                                    case "title":
                                        (!(s = i.getElementsByTagName("title")[0]) ||
                                            s[ex] ||
                                            s[eD] ||
                                            "http://www.w3.org/2000/svg" === s.namespaceURI ||
                                            s.hasAttribute("itemprop")) &&
                                            ((s = i.createElement(r)),
                                            i.head.insertBefore(s, i.querySelector("head > title"))),
                                            un(s, r, n),
                                            (s[eD] = e),
                                            eY(s),
                                            (r = s);
                                        break e;
                                    case "link":
                                        var a = uB("link", "href", i).get(r + (n.href || ""));
                                        if (a) {
                                            for (var o = 0; o < a.length; o++)
                                                if (
                                                    (s = a[o]).getAttribute("href") ===
                                                        (null == n.href || "" === n.href ? null : n.href) &&
                                                    s.getAttribute("rel") === (null == n.rel ? null : n.rel) &&
                                                    s.getAttribute("title") === (null == n.title ? null : n.title) &&
                                                    s.getAttribute("crossorigin") ===
                                                        (null == n.crossOrigin ? null : n.crossOrigin)
                                                ) {
                                                    a.splice(o, 1);
                                                    break s;
                                                }
                                        }
                                        un((s = i.createElement(r)), r, n), i.head.appendChild(s);
                                        break;
                                    case "meta":
                                        if ((a = uB("meta", "content", i).get(r + (n.content || "")))) {
                                            for (o = 0; o < a.length; o++)
                                                if (
                                                    (s = a[o]).getAttribute("content") ===
                                                        (null == n.content ? null : "" + n.content) &&
                                                    s.getAttribute("name") === (null == n.name ? null : n.name) &&
                                                    s.getAttribute("property") ===
                                                        (null == n.property ? null : n.property) &&
                                                    s.getAttribute("http-equiv") ===
                                                        (null == n.httpEquiv ? null : n.httpEquiv) &&
                                                    s.getAttribute("charset") === (null == n.charSet ? null : n.charSet)
                                                ) {
                                                    a.splice(o, 1);
                                                    break s;
                                                }
                                        }
                                        un((s = i.createElement(r)), r, n), i.head.appendChild(s);
                                        break;
                                    default:
                                        throw Error(l(468, r));
                                }
                                (s[eD] = e), eY(s), (r = s);
                            }
                            e.stateNode = r;
                        } else uH(i, e.type, e.stateNode);
                    else e.stateNode = uk(i, r, e.memoizedProps);
                else
                    s !== r
                        ? (null === s ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : s.count--,
                          null === r ? uH(i, e.type, e.stateNode) : uk(i, r, e.memoizedProps))
                        : null === r && null !== e.stateNode && a1(e, e.memoizedProps, n.memoizedProps);
            }
            break;
        case 27:
            ol(t, e),
                oc(e),
                512 & r && (a7 || null === n || aZ(n, n.return)),
                null !== n && 4 & r && a1(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if ((ol(t, e), oc(e), 512 & r && (a7 || null === n || aZ(n, n.return)), 32 & e.flags)) {
                i = e.stateNode;
                try {
                    to(i, "");
                } catch (t) {
                    lS(e, e.return, t);
                }
            }
            4 & r && null != e.stateNode && ((i = e.memoizedProps), a1(e, i, null !== n ? n.memoizedProps : i)),
                1024 & r && (a8 = !0);
            break;
        case 6:
            if ((ol(t, e), oc(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                    n.nodeValue = r;
                } catch (t) {
                    lS(e, e.return, t);
                }
            }
            break;
        case 3:
            if (
                ((uF = null),
                (i = ou),
                (ou = uR(t.containerInfo)),
                ol(t, e),
                (ou = i),
                oc(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
            )
                try {
                    dg(t.containerInfo);
                } catch (t) {
                    lS(e, e.return, t);
                }
            a8 &&
                ((a8 = !1),
                (function e(t) {
                    if (1024 & t.subtreeFlags)
                        for (t = t.child; null !== t; ) {
                            var n = t;
                            e(n), 5 === n.tag && 1024 & n.flags && n.stateNode.reset(), (t = t.sibling);
                        }
                })(e));
            break;
        case 4:
            (r = ou), (ou = uR(e.stateNode.containerInfo)), ol(t, e), oc(e), (ou = r);
            break;
        case 12:
        default:
            ol(t, e), oc(e);
            break;
        case 13:
            ol(t, e),
                oc(e),
                8192 & e.child.flags &&
                    (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                    (oK = ee()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), oo(e, r));
            break;
        case 22:
            i = null !== e.memoizedState;
            var u = null !== n && null !== n.memoizedState,
                d = a5,
                c = a7;
            if (((a5 = d || i), (a7 = c || u), ol(t, e), (a7 = c), (a5 = d), oc(e), 8192 & r))
                e: for (
                    (t = e.stateNode)._visibility = i ? -2 & t._visibility : 1 | t._visibility,
                        i &&
                            (null === n ||
                                u ||
                                a5 ||
                                a7 ||
                                (function e(t) {
                                    for (t = t.child; null !== t; ) {
                                        var n = t;
                                        switch (n.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                                aq(4, n, n.return), e(n);
                                                break;
                                            case 1:
                                                aZ(n, n.return);
                                                var r = n.stateNode;
                                                "function" == typeof r.componentWillUnmount && aQ(n, n.return, r), e(n);
                                                break;
                                            case 27:
                                                uy(n.stateNode);
                                            case 26:
                                            case 5:
                                                aZ(n, n.return), e(n);
                                                break;
                                            case 22:
                                                null === n.memoizedState && e(n);
                                                break;
                                            default:
                                                e(n);
                                        }
                                        t = t.sibling;
                                    }
                                })(e)),
                        n = null,
                        t = e;
                    ;
                ) {
                    if (5 === t.tag || 26 === t.tag) {
                        if (null === n) {
                            u = n = t;
                            try {
                                if (((s = u.stateNode), i))
                                    (a = s.style),
                                        "function" == typeof a.setProperty
                                            ? a.setProperty("display", "none", "important")
                                            : (a.display = "none");
                                else {
                                    o = u.stateNode;
                                    var _ = u.memoizedProps.style,
                                        f = null != _ && _.hasOwnProperty("display") ? _.display : null;
                                    o.style.display = null == f || "boolean" == typeof f ? "" : ("" + f).trim();
                                }
                            } catch (e) {
                                lS(u, u.return, e);
                            }
                        }
                    } else if (6 === t.tag) {
                        if (null === n) {
                            u = t;
                            try {
                                u.stateNode.nodeValue = i ? "" : u.memoizedProps;
                            } catch (e) {
                                lS(u, u.return, e);
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
            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), oo(e, n));
            break;
        case 19:
            ol(t, e), oc(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), oo(e, r));
        case 30:
        case 21:
    }
}
function oc(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            for (var n, r = e.return; null !== r; ) {
                if (a2(r)) {
                    n = r;
                    break;
                }
                r = r.return;
            }
            if (null == n) throw Error(l(160));
            switch (n.tag) {
                case 27:
                    var i = n.stateNode,
                        s = a3(e);
                    a6(e, s, i);
                    break;
                case 5:
                    var a = n.stateNode;
                    32 & n.flags && (to(a, ""), (n.flags &= -33));
                    var o = a3(e);
                    a6(e, o, a);
                    break;
                case 3:
                case 4:
                    var u = n.stateNode.containerInfo,
                        d = a3(e);
                    !(function e(t, n, r) {
                        var i = t.tag;
                        if (5 === i || 6 === i)
                            (t = t.stateNode),
                                n
                                    ? (9 === r.nodeType
                                          ? r.body
                                          : "HTML" === r.nodeName
                                            ? r.ownerDocument.body
                                            : r
                                      ).insertBefore(t, n)
                                    : ((n =
                                          9 === r.nodeType
                                              ? r.body
                                              : "HTML" === r.nodeName
                                                ? r.ownerDocument.body
                                                : r).appendChild(t),
                                      null != (r = r._reactRootContainer) || null !== n.onclick || (n.onclick = l9));
                        else if (
                            4 !== i &&
                            (27 === i && uh(t.type) && ((r = t.stateNode), (n = null)), null !== (t = t.child))
                        )
                            for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
                    })(e, d, u);
                    break;
                default:
                    throw Error(l(161));
            }
        } catch (t) {
            lS(e, e.return, t);
        }
        e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
}
function o_(e, t) {
    if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) ot(e, t.alternate, t), (t = t.sibling);
}
function of(e, t) {
    var n = null;
    null !== e &&
        null !== e.memoizedState &&
        null !== e.memoizedState.cachePool &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
        e !== n && (null != e && e.refCount++, null != n && rQ(n));
}
function oE(e, t) {
    (e = null),
        null !== t.alternate && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && rQ(e));
}
function oh(e, t, n, r) {
    if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) op(e, t, n, r), (t = t.sibling);
}
function op(e, t, n, r) {
    var i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
            oh(e, t, n, r), 2048 & i && az(9, t);
            break;
        case 1:
        case 13:
        default:
            oh(e, t, n, r);
            break;
        case 3:
            oh(e, t, n, r),
                2048 & i &&
                    ((e = null),
                    null !== t.alternate && (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && rQ(e)));
            break;
        case 12:
            if (2048 & i) {
                oh(e, t, n, r), (e = t.stateNode);
                try {
                    var s = t.memoizedProps,
                        a = s.id,
                        o = s.onPostCommit;
                    "function" == typeof o &&
                        o(a, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (e) {
                    lS(t, t.return, e);
                }
            } else oh(e, t, n, r);
            break;
        case 23:
            break;
        case 22:
            (s = t.stateNode),
                (a = t.alternate),
                null !== t.memoizedState
                    ? 2 & s._visibility
                        ? oh(e, t, n, r)
                        : om(e, t)
                    : 2 & s._visibility
                      ? oh(e, t, n, r)
                      : ((s._visibility |= 2),
                        (function e(t, n, r, i, s) {
                            for (s = s && 0 != (10256 & n.subtreeFlags), n = n.child; null !== n; ) {
                                var a = n,
                                    o = a.flags;
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        e(t, a, r, i, s), az(8, a);
                                        break;
                                    case 23:
                                        break;
                                    case 22:
                                        var l = a.stateNode;
                                        null !== a.memoizedState
                                            ? 2 & l._visibility
                                                ? e(t, a, r, i, s)
                                                : om(t, a)
                                            : ((l._visibility |= 2), e(t, a, r, i, s)),
                                            s && 2048 & o && of(a.alternate, a);
                                        break;
                                    case 24:
                                        e(t, a, r, i, s), s && 2048 & o && oE(a.alternate, a);
                                        break;
                                    default:
                                        e(t, a, r, i, s);
                                }
                                n = n.sibling;
                            }
                        })(e, t, n, r, 0 != (10256 & t.subtreeFlags))),
                2048 & i && of(a, t);
            break;
        case 24:
            oh(e, t, n, r), 2048 & i && oE(t.alternate, t);
    }
}
function om(e, t) {
    if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t; ) {
            var n = t,
                r = n.flags;
            switch (n.tag) {
                case 22:
                    om(e, n), 2048 & r && of(n.alternate, n);
                    break;
                case 24:
                    om(e, n), 2048 & r && oE(n.alternate, n);
                    break;
                default:
                    om(e, n);
            }
            t = t.sibling;
        }
}
var og = 8192;
function oA(e) {
    if (e.subtreeFlags & og) for (e = e.child; null !== e; ) oI(e), (e = e.sibling);
}
function oI(e) {
    switch (e.tag) {
        case 26:
            oA(e),
                e.flags & og &&
                    null !== e.memoizedState &&
                    (function (e, t, n) {
                        if (null === uW) throw Error(l(475));
                        var r = uW;
                        if (
                            "stylesheet" === t.type &&
                            ("string" != typeof n.media || !1 !== matchMedia(n.media).matches) &&
                            0 == (4 & t.state.loading)
                        ) {
                            if (null === t.instance) {
                                var i = uL(n.href),
                                    s = e.querySelector(uw(i));
                                if (s) {
                                    null !== (e = s._p) &&
                                        "object" == typeof e &&
                                        "function" == typeof e.then &&
                                        (r.count++, (r = uK.bind(r)), e.then(r, r)),
                                        (t.state.loading |= 4),
                                        (t.instance = s),
                                        eY(s);
                                    return;
                                }
                                (s = e.ownerDocument || e),
                                    (n = uM(n)),
                                    (i = uN.get(i)) && uG(n, i),
                                    eY((s = s.createElement("link")));
                                var a = s;
                                (a._p = new Promise(function (e, t) {
                                    (a.onload = e), (a.onerror = t);
                                })),
                                    un(s, "link", n),
                                    (t.instance = s);
                            }
                            null === r.stylesheets && (r.stylesheets = new Map()),
                                r.stylesheets.set(t, e),
                                (e = t.state.preload) &&
                                    0 == (3 & t.state.loading) &&
                                    (r.count++,
                                    (t = uK.bind(r)),
                                    e.addEventListener("load", t),
                                    e.addEventListener("error", t));
                        }
                    })(ou, e.memoizedState, e.memoizedProps);
            break;
        case 5:
        default:
            oA(e);
            break;
        case 3:
        case 4:
            var t = ou;
            (ou = uR(e.stateNode.containerInfo)), oA(e), (ou = t);
            break;
        case 22:
            null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                    ? ((t = og), (og = 0x1000000), oA(e), (og = t))
                    : oA(e));
    }
}
function oT(e) {
    var t = e.alternate;
    if (null !== t && null !== (e = t.child)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (null !== e);
    }
}
function oS(e) {
    var t = e.deletions;
    if (0 != (16 & e.flags)) {
        if (null !== t)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (oe = r), oN(r, e);
            }
        oT(e);
    }
    if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) oy(e), (e = e.sibling);
}
function oy(e) {
    switch (e.tag) {
        case 0:
        case 11:
        case 15:
            oS(e), 2048 & e.flags && aq(9, e, e.return);
            break;
        case 3:
        case 12:
        default:
            oS(e);
            break;
        case 22:
            var t = e.stateNode;
            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3),
                  (function e(t) {
                      var n = t.deletions;
                      if (0 != (16 & t.flags)) {
                          if (null !== n)
                              for (var r = 0; r < n.length; r++) {
                                  var i = n[r];
                                  (oe = i), oN(i, t);
                              }
                          oT(t);
                      }
                      for (t = t.child; null !== t; ) {
                          switch ((n = t).tag) {
                              case 0:
                              case 11:
                              case 15:
                                  aq(8, n, n.return), e(n);
                                  break;
                              case 22:
                                  2 & (r = n.stateNode)._visibility && ((r._visibility &= -3), e(n));
                                  break;
                              default:
                                  e(n);
                          }
                          t = t.sibling;
                      }
                  })(e))
                : oS(e);
    }
}
function oN(e, t) {
    for (; null !== oe; ) {
        var n = oe;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                aq(8, n, t);
                break;
            case 23:
            case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                    var r = n.memoizedState.cachePool.pool;
                    null != r && r.refCount++;
                }
                break;
            case 24:
                rQ(n.memoizedState.cache);
        }
        if (null !== (r = n.child)) (r.return = n), (oe = r);
        else
            for (n = e; null !== oe; ) {
                var i = (r = oe).sibling,
                    s = r.return;
                if (
                    (!(function e(t) {
                        var n = t.alternate;
                        null !== n && ((t.alternate = null), e(n)),
                            (t.child = null),
                            (t.deletions = null),
                            (t.sibling = null),
                            5 === t.tag && null !== (n = t.stateNode) && eG(n),
                            (t.stateNode = null),
                            (t.return = null),
                            (t.dependencies = null),
                            (t.memoizedProps = null),
                            (t.memoizedState = null),
                            (t.pendingProps = null),
                            (t.stateNode = null),
                            (t.updateQueue = null);
                    })(r),
                    r === n)
                ) {
                    oe = null;
                    break;
                }
                if (null !== i) {
                    (i.return = s), (oe = i);
                    break;
                }
                oe = s;
            }
    }
}
var oO = {
        getCacheForType: function (e) {
            var t = rY(rq),
                n = t.data.get(e);
            return void 0 === n && ((n = e()), t.data.set(e, n)), n;
        },
    },
    oR = "function" == typeof WeakMap ? WeakMap : Map,
    ov = 0,
    oC = null,
    ob = null,
    oD = 0,
    oL = 0,
    ow = null,
    oM = !1,
    oP = !1,
    oU = !1,
    ok = 0,
    ox = 0,
    oG = 0,
    oV = 0,
    oF = 0,
    oB = 0,
    oH = 0,
    oY = null,
    oW = null,
    oj = !1,
    oK = 0,
    o$ = 1 / 0,
    oz = null,
    oq = null,
    oX = 0,
    oQ = null,
    oJ = null,
    oZ = 0,
    o0 = 0,
    o1 = null,
    o2 = null,
    o3 = 0,
    o6 = null;
function o4() {
    if (0 != (2 & ov) && 0 !== oD) return oD & -oD;
    if (null !== M.T) {
        var e = r0;
        return 0 !== e ? e : lB();
    }
    return eC();
}
function o5() {
    0 === oB && (oB = 0 == (0x20000000 & oD) || rS ? eI() : 0x20000000);
    var e = s6.current;
    return null !== e && (e.flags |= 32), oB;
}
function o7(e, t, n) {
    ((e === oC && (2 === oL || 9 === oL)) || null !== e.cancelPendingCommit) && (lr(e, 0), le(e, oD, oB, !1)),
        ey(e, n),
        (0 == (2 & ov) || e !== oC) && (e === oC && (0 == (2 & ov) && (oV |= n), 4 === ox && le(e, oD, oB, !1)), lP(e));
}
function o8(e, t, n) {
    if (0 != (6 & ov)) throw Error(l(327));
    for (
        var r = (!n && 0 == (124 & t) && 0 == (t & e.expiredLanes)) || eA(e, t),
            i = r
                ? (function (e, t) {
                      var n = ov;
                      ov |= 2;
                      var r = ls(),
                          i = la();
                      oC !== e || oD !== t ? ((oz = null), (o$ = ee() + 500), lr(e, t)) : (oP = eA(e, t));
                      e: for (;;)
                          try {
                              if (0 !== oL && null !== ob) {
                                  t = ob;
                                  var s = ow;
                                  s: switch (oL) {
                                      case 1:
                                          (oL = 0), (ow = null), lc(e, t, s, 1);
                                          break;
                                      case 2:
                                      case 9:
                                          if (ir(s)) {
                                              (oL = 0), (ow = null), ld(t);
                                              break;
                                          }
                                          (t = function () {
                                              (2 !== oL && 9 !== oL) || oC !== e || (oL = 7), lP(e);
                                          }),
                                              s.then(t, t);
                                          break e;
                                      case 3:
                                          oL = 7;
                                          break e;
                                      case 4:
                                          oL = 5;
                                          break e;
                                      case 7:
                                          ir(s)
                                              ? ((oL = 0), (ow = null), ld(t))
                                              : ((oL = 0), (ow = null), lc(e, t, s, 7));
                                          break;
                                      case 5:
                                          var a = null;
                                          switch (ob.tag) {
                                              case 26:
                                                  a = ob.memoizedState;
                                              case 5:
                                              case 27:
                                                  var o = ob;
                                                  if (a ? uY(a) : 1) {
                                                      (oL = 0), (ow = null);
                                                      var u = o.sibling;
                                                      if (null !== u) ob = u;
                                                      else {
                                                          var d = o.return;
                                                          null !== d ? ((ob = d), l_(d)) : (ob = null);
                                                      }
                                                      break s;
                                                  }
                                          }
                                          (oL = 0), (ow = null), lc(e, t, s, 5);
                                          break;
                                      case 6:
                                          (oL = 0), (ow = null), lc(e, t, s, 6);
                                          break;
                                      case 8:
                                          ln(), (ox = 6);
                                          break e;
                                      default:
                                          throw Error(l(462));
                                  }
                              }
                              for (; null !== ob && !J(); ) lu(ob);
                              break;
                          } catch (t) {
                              li(e, t);
                          }
                      return ((rU = rP = null), (M.H = r), (M.A = i), (ov = n), null !== ob)
                          ? 0
                          : ((oC = null), (oD = 0), n1(), ox);
                  })(e, t)
                : ll(e, t, !0),
            s = r;
        ;
    ) {
        if (0 === i) oP && !r && le(e, t, 0, !1);
        else {
            if (
                ((n = e.current.alternate),
                s &&
                    !(function (e) {
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
                                        s = i.getSnapshot;
                                    i = i.value;
                                    try {
                                        if (!ny(s(), i)) return !1;
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
                    })(n))
            ) {
                (i = ll(e, t, !1)), (s = !1);
                continue;
            }
            if (2 === i) {
                if (((s = t), e.errorRecoveryDisabledLanes & s)) var a = 0;
                else a = 0 != (a = -0x20000001 & e.pendingLanes) ? a : 0x20000000 & a ? 0x20000000 : 0;
                if (0 !== a) {
                    t = a;
                    e: {
                        i = oY;
                        var o = e.current.memoizedState.isDehydrated;
                        if ((o && (lr(e, a).flags |= 256), 2 !== (a = ll(e, a, !1)))) {
                            if (oU && !o) {
                                (e.errorRecoveryDisabledLanes |= s), (oV |= s), (i = 4);
                                break e;
                            }
                            (s = oW), (oW = i), null !== s && (null === oW ? (oW = s) : oW.push.apply(oW, s));
                        }
                        i = a;
                    }
                    if (((s = !1), 2 !== i)) continue;
                }
            }
            if (1 === i) {
                lr(e, 0), le(e, t, 0, !0);
                break;
            }
            e: {
                switch (((r = e), (s = i))) {
                    case 0:
                    case 1:
                        throw Error(l(345));
                    case 4:
                        if ((4194048 & t) !== t) break;
                    case 6:
                        le(r, t, oB, !oM);
                        break e;
                    case 2:
                        oW = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(l(329));
                }
                if ((0x3c00000 & t) === t && 10 < (i = oK + 300 - ee())) {
                    if ((le(r, t, oB, !oM), 0 !== eg(r, 0, !0))) break e;
                    r.timeoutHandle = ud(o9.bind(null, r, n, oW, oz, oj, t, oB, oV, oH, oM, s, 2, -0, 0), i);
                    break e;
                }
                o9(r, n, oW, oz, oj, t, oB, oV, oH, oM, s, 0, -0, 0);
            }
        }
        break;
    }
    lP(e);
}
function o9(e, t, n, r, i, s, a, o, u, d, c, _, f, E) {
    if (
        ((e.timeoutHandle = -1),
        (8192 & (_ = t.subtreeFlags) || 0x1002000 == (0x1002000 & _)) &&
            ((uW = { stylesheets: null, count: 0, unsuspend: uj }),
            oI(t),
            null !==
                (_ = (function () {
                    if (null === uW) throw Error(l(475));
                    var e = uW;
                    return (
                        e.stylesheets && 0 === e.count && uz(e, e.stylesheets),
                        0 < e.count
                            ? function (t) {
                                  var n = setTimeout(function () {
                                      if ((e.stylesheets && uz(e, e.stylesheets), e.unsuspend)) {
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
                })())))
    ) {
        (e.cancelPendingCommit = _(lE.bind(null, e, t, s, n, r, i, a, o, u, c, 1, f, E))), le(e, s, a, !d);
        return;
    }
    lE(e, t, s, n, r, i, a, o, u);
}
function le(e, t, n, r) {
    (t &= ~oF),
        (t &= ~oV),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
    for (var i = t; 0 < i; ) {
        var s = 31 - e_(i),
            a = 1 << s;
        (r[s] = -1), (i &= ~a);
    }
    0 !== n && eN(e, n, t);
}
function lt() {
    return 0 != (6 & ov) || (lU(0, !1), !1);
}
function ln() {
    if (null !== ob) {
        if (0 === oL) var e = ob.return;
        else (e = ob), (rU = rP = null), iK(e), (sq = null), (sX = 0), (e = ob);
        for (; null !== e; ) a$(e.alternate, e), (e = e.return);
        ob = null;
    }
}
function lr(e, t) {
    var n = e.timeoutHandle;
    -1 !== n && ((e.timeoutHandle = -1), uc(n)),
        null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
        ln(),
        (oC = e),
        (ob = n = rt(e.current, null)),
        (oD = t),
        (oL = 0),
        (ow = null),
        (oM = !1),
        (oP = eA(e, t)),
        (oU = !1),
        (oH = oB = oF = oV = oG = ox = 0),
        (oW = oY = null),
        (oj = !1),
        0 != (8 & t) && (t |= 32 & t);
    var r = e.entangledLanes;
    if (0 !== r)
        for (e = e.entanglements, r &= t; 0 < r; ) {
            var i = 31 - e_(r),
                s = 1 << i;
            (t |= e[i]), (r &= ~s);
        }
    return (ok = t), n1(), n;
}
function li(e, t) {
    (iC = null),
        (M.H = sj),
        t === r8 || t === ie
            ? ((t = io()), (oL = 3))
            : t === r9
              ? ((t = io()), (oL = 4))
              : (oL = t === ap ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1),
        (ow = t),
        null === ob && ((ox = 1), ac(e, nQ(t, e.current)));
}
function ls() {
    var e = M.H;
    return (M.H = sj), null === e ? sj : e;
}
function la() {
    var e = M.A;
    return (M.A = oO), e;
}
function lo() {
    (ox = 4),
        oM || ((4194048 & oD) !== oD && null !== s6.current) || (oP = !0),
        (0 == (0x7ffffff & oG) && 0 == (0x7ffffff & oV)) || null === oC || le(oC, oD, oB, !1);
}
function ll(e, t, n) {
    var r = ov;
    ov |= 2;
    var i = ls(),
        s = la();
    (oC !== e || oD !== t) && ((oz = null), lr(e, t)), (t = !1);
    var a = ox;
    e: for (;;)
        try {
            if (0 !== oL && null !== ob) {
                var o = ob,
                    l = ow;
                switch (oL) {
                    case 8:
                        ln(), (a = 6);
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        null === s6.current && (t = !0);
                        var u = oL;
                        if (((oL = 0), (ow = null), lc(e, o, l, u), n && oP)) {
                            a = 0;
                            break e;
                        }
                        break;
                    default:
                        (u = oL), (oL = 0), (ow = null), lc(e, o, l, u);
                }
            }
            (function () {
                for (; null !== ob; ) lu(ob);
            })(),
                (a = ox);
            break;
        } catch (t) {
            li(e, t);
        }
    return (
        t && e.shellSuspendCounter++,
        (rU = rP = null),
        (ov = r),
        (M.H = i),
        (M.A = s),
        null === ob && ((oC = null), (oD = 0), n1()),
        a
    );
}
function lu(e) {
    var t = aB(e.alternate, e, ok);
    (e.memoizedProps = e.pendingProps), null === t ? l_(e) : (ob = t);
}
function ld(e) {
    var t = e,
        n = t.alternate;
    switch (t.tag) {
        case 15:
        case 0:
            t = aR(n, t, t.pendingProps, t.type, void 0, oD);
            break;
        case 11:
            t = aR(n, t, t.pendingProps, t.type.render, t.ref, oD);
            break;
        case 5:
            iK(t);
        default:
            a$(n, t), (t = aB(n, (t = ob = rn(t, ok)), ok));
    }
    (e.memoizedProps = e.pendingProps), null === t ? l_(e) : (ob = t);
}
function lc(e, t, n, r) {
    (rU = rP = null), iK(t), (sq = null), (sX = 0);
    var i = t.return;
    try {
        if (
            (function (e, t, n, r, i) {
                if (((n.flags |= 32768), null !== r && "object" == typeof r && "function" == typeof r.then)) {
                    if ((null !== (t = n.alternate) && rF(t, n, i, !0), null !== (n = s6.current))) {
                        switch (n.tag) {
                            case 13:
                                return (
                                    null === s4 ? lo() : null === n.alternate && 0 === ox && (ox = 3),
                                    (n.flags &= -257),
                                    (n.flags |= 65536),
                                    (n.lanes = i),
                                    r === it
                                        ? (n.flags |= 16384)
                                        : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r),
                                          ly(e, r, i)),
                                    !1
                                );
                            case 22:
                                return (
                                    (n.flags |= 65536),
                                    r === it
                                        ? (n.flags |= 16384)
                                        : (null === (t = n.updateQueue)
                                              ? ((t = {
                                                    transitions: null,
                                                    markerInstances: null,
                                                    retryQueue: new Set([r]),
                                                }),
                                                (n.updateQueue = t))
                                              : null === (n = t.retryQueue)
                                                ? (t.retryQueue = new Set([r]))
                                                : n.add(r),
                                          ly(e, r, i)),
                                    !1
                                );
                        }
                        throw Error(l(435, n.tag));
                    }
                    return ly(e, r, i), lo(), !1;
                }
                if (rS)
                    return (
                        null !== (t = s6.current)
                            ? (0 == (65536 & t.flags) && (t.flags |= 256),
                              (t.flags |= 65536),
                              (t.lanes = i),
                              r !== rO && rw(nQ((e = Error(l(422), { cause: r })), n)))
                            : (r !== rO && rw(nQ((t = Error(l(423), { cause: r })), n)),
                              (e = e.current.alternate),
                              (e.flags |= 65536),
                              (i &= -i),
                              (e.lanes |= i),
                              (r = nQ(r, n)),
                              (i = af(e.stateNode, r, i)),
                              ip(e, i),
                              4 !== ox && (ox = 2)),
                        !1
                    );
                var s = Error(l(520), { cause: r });
                if (((s = nQ(s, n)), null === oY ? (oY = [s]) : oY.push(s), 4 !== ox && (ox = 2), null === t))
                    return !0;
                (r = nQ(r, n)), (n = t);
                do {
                    switch (n.tag) {
                        case 3:
                            return (
                                (n.flags |= 65536),
                                (e = i & -i),
                                (n.lanes |= e),
                                (e = af(n.stateNode, r, e)),
                                ip(n, e),
                                !1
                            );
                        case 1:
                            if (
                                ((t = n.type),
                                (s = n.stateNode),
                                0 == (128 & n.flags) &&
                                    ("function" == typeof t.getDerivedStateFromError ||
                                        (null !== s &&
                                            "function" == typeof s.componentDidCatch &&
                                            (null === oq || !oq.has(s)))))
                            )
                                return (
                                    (n.flags |= 65536),
                                    (i &= -i),
                                    (n.lanes |= i),
                                    ah((i = aE(i)), e, n, r),
                                    ip(n, i),
                                    !1
                                );
                    }
                    n = n.return;
                } while (null !== n);
                return !1;
            })(e, i, t, n, oD)
        ) {
            (ox = 1), ac(e, nQ(n, e.current)), (ob = null);
            return;
        }
    } catch (t) {
        if (null !== i) throw ((ob = i), t);
        (ox = 1), ac(e, nQ(n, e.current)), (ob = null);
        return;
    }
    32768 & t.flags
        ? (rS || 1 === r
              ? (e = !0)
              : oP || 0 != (0x20000000 & oD)
                ? (e = !1)
                : ((oM = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = s6.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
          lf(t, e))
        : l_(t);
}
function l_(e) {
    var t = e;
    do {
        if (0 != (32768 & t.flags)) return void lf(t, oM);
        e = t.return;
        var n = (function (e, t, n) {
            var r = t.pendingProps;
            switch ((rA(t), t.tag)) {
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
                    return aK(t), null;
                case 3:
                    return (
                        (n = t.stateNode),
                        (r = null),
                        null !== e && (r = e.memoizedState.cache),
                        t.memoizedState.cache !== r && (t.flags |= 2048),
                        rx(rq),
                        K(),
                        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                        (null === e || null === e.child) &&
                            (rb(t)
                                ? aH(t)
                                : null === e ||
                                  (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                                  ((t.flags |= 1024), rL())),
                        aK(t),
                        null
                    );
                case 26:
                    return (
                        (n = t.memoizedState),
                        null === e
                            ? (aH(t), null !== n ? (aK(t), aY(t, n)) : (aK(t), (t.flags &= -0x1000001)))
                            : n
                              ? n !== e.memoizedState
                                  ? (aH(t), aK(t), aY(t, n))
                                  : (aK(t), (t.flags &= -0x1000001))
                              : (e.memoizedProps !== r && aH(t), aK(t), (t.flags &= -0x1000001)),
                        null
                    );
                case 27:
                    z(t), (n = Y.current);
                    var i = t.type;
                    if (null !== e && null != t.stateNode) e.memoizedProps !== r && aH(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode) throw Error(l(166));
                            return aK(t), null;
                        }
                        (e = B.current), rb(t) ? rv(t, e) : ((e = uS(i, r, n)), (t.stateNode = e), aH(t));
                    }
                    return aK(t), null;
                case 5:
                    if ((z(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && aH(t);
                    else {
                        if (!r) {
                            if (null === t.stateNode) throw Error(l(166));
                            return aK(t), null;
                        }
                        if (((e = B.current), rb(t))) rv(t, e);
                        else {
                            switch (((i = us(Y.current)), e)) {
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
                                            e =
                                                "string" == typeof r.is
                                                    ? i.createElement(n, { is: r.is })
                                                    : i.createElement(n);
                                    }
                            }
                            (e[eD] = t), (e[eL] = r);
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
                            switch (((t.stateNode = e), un(e, n, r), n)) {
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
                            e && aH(t);
                        }
                    }
                    return aK(t), (t.flags &= -0x1000001), null;
                case 6:
                    if (e && null != t.stateNode) e.memoizedProps !== r && aH(t);
                    else {
                        if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                        if (((e = Y.current), rb(t))) {
                            if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (i = rI)))
                                switch (i.tag) {
                                    case 27:
                                    case 5:
                                        r = i.memoizedProps;
                                }
                            (e[eD] = t),
                                (e = !!(
                                    e.nodeValue === n ||
                                    (null !== r && !0 === r.suppressHydrationWarning) ||
                                    l8(e.nodeValue, n)
                                )) || rR(t);
                        } else ((e = us(e).createTextNode(r))[eD] = t), (t.stateNode = e);
                    }
                    return aK(t), null;
                case 13:
                    if (
                        ((r = t.memoizedState),
                        null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
                    ) {
                        if (((i = rb(t)), null !== r && null !== r.dehydrated)) {
                            if (null === e) {
                                if (!i) throw Error(l(318));
                                if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                                i[eD] = t;
                            } else rD(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                            aK(t), (i = !1);
                        } else
                            (i = rL()),
                                null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = i),
                                (i = !0);
                        if (!i) {
                            if (256 & t.flags) return s9(t), t;
                            return s9(t), null;
                        }
                    }
                    if ((s9(t), 0 != (128 & t.flags))) return (t.lanes = n), t;
                    if (((n = null !== r), (e = null !== e && null !== e.memoizedState), n)) {
                        (r = t.child),
                            (i = null),
                            null !== r.alternate &&
                                null !== r.alternate.memoizedState &&
                                null !== r.alternate.memoizedState.cachePool &&
                                (i = r.alternate.memoizedState.cachePool.pool);
                        var s = null;
                        null !== r.memoizedState &&
                            null !== r.memoizedState.cachePool &&
                            (s = r.memoizedState.cachePool.pool),
                            s !== i && (r.flags |= 2048);
                    }
                    return n !== e && n && (t.child.flags |= 8192), aW(t, t.updateQueue), aK(t), null;
                case 4:
                    return K(), null === e && lJ(t.stateNode.containerInfo), aK(t), null;
                case 10:
                    return rx(t.type), aK(t), null;
                case 19:
                    if ((V(ae), null === (i = t.memoizedState))) return aK(t), null;
                    if (((r = 0 != (128 & t.flags)), null === (s = i.rendering)))
                        if (r) aj(i, !1);
                        else {
                            if (0 !== ox || (null !== e && 0 != (128 & e.flags)))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (s = at(e))) {
                                        for (
                                            t.flags |= 128,
                                                aj(i, !1),
                                                e = s.updateQueue,
                                                t.updateQueue = e,
                                                aW(t, e),
                                                t.subtreeFlags = 0,
                                                e = n,
                                                n = t.child;
                                            null !== n;
                                        )
                                            rn(n, e), (n = n.sibling);
                                        return F(ae, (1 & ae.current) | 2), t.child;
                                    }
                                    e = e.sibling;
                                }
                            null !== i.tail &&
                                ee() > o$ &&
                                ((t.flags |= 128), (r = !0), aj(i, !1), (t.lanes = 4194304));
                        }
                    else {
                        if (!r)
                            if (null !== (e = at(s))) {
                                if (
                                    ((t.flags |= 128),
                                    (r = !0),
                                    (e = e.updateQueue),
                                    (t.updateQueue = e),
                                    aW(t, e),
                                    aj(i, !0),
                                    null === i.tail && "hidden" === i.tailMode && !s.alternate && !rS)
                                )
                                    return aK(t), null;
                            } else
                                2 * ee() - i.renderingStartTime > o$ &&
                                    0x20000000 !== n &&
                                    ((t.flags |= 128), (r = !0), aj(i, !1), (t.lanes = 4194304));
                        i.isBackwards
                            ? ((s.sibling = t.child), (t.child = s))
                            : (null !== (e = i.last) ? (e.sibling = s) : (t.child = s), (i.last = s));
                    }
                    if (null !== i.tail)
                        return (
                            (t = i.tail),
                            (i.rendering = t),
                            (i.tail = t.sibling),
                            (i.renderingStartTime = ee()),
                            (t.sibling = null),
                            (e = ae.current),
                            F(ae, r ? (1 & e) | 2 : 1 & e),
                            t
                        );
                    return aK(t), null;
                case 22:
                case 23:
                    return (
                        s9(t),
                        iR(),
                        (r = null !== t.memoizedState),
                        null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                        r
                            ? 0 != (0x20000000 & n) &&
                              0 == (128 & t.flags) &&
                              (aK(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                            : aK(t),
                        null !== (n = t.updateQueue) && aW(t, n.retryQueue),
                        (n = null),
                        null !== e &&
                            null !== e.memoizedState &&
                            null !== e.memoizedState.cachePool &&
                            (n = e.memoizedState.cachePool.pool),
                        (r = null),
                        null !== t.memoizedState &&
                            null !== t.memoizedState.cachePool &&
                            (r = t.memoizedState.cachePool.pool),
                        r !== n && (t.flags |= 2048),
                        null !== e && V(r6),
                        null
                    );
                case 24:
                    return (
                        (n = null),
                        null !== e && (n = e.memoizedState.cache),
                        t.memoizedState.cache !== n && (t.flags |= 2048),
                        rx(rq),
                        aK(t),
                        null
                    );
                case 25:
                case 30:
                    return null;
            }
            throw Error(l(156, t.tag));
        })(t.alternate, t, ok);
        if (null !== n) {
            ob = n;
            return;
        }
        if (null !== (t = t.sibling)) {
            ob = t;
            return;
        }
        ob = t = e;
    } while (null !== t);
    0 === ox && (ox = 5);
}
function lf(e, t) {
    do {
        var n = (function (e, t) {
            switch ((rA(t), t.tag)) {
                case 1:
                    return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
                case 3:
                    return (
                        rx(rq),
                        K(),
                        0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
                    );
                case 26:
                case 27:
                case 5:
                    return z(t), null;
                case 13:
                    if ((s9(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                        if (null === t.alternate) throw Error(l(340));
                        rD();
                    }
                    return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
                case 19:
                    return V(ae), null;
                case 4:
                    return K(), null;
                case 10:
                    return rx(t.type), null;
                case 22:
                case 23:
                    return (
                        s9(t),
                        iR(),
                        null !== e && V(r6),
                        65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
                    );
                case 24:
                    return rx(rq), null;
                default:
                    return null;
            }
        })(e.alternate, e);
        if (null !== n) {
            (n.flags &= 32767), (ob = n);
            return;
        }
        if (
            (null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && null !== (e = e.sibling))
        ) {
            ob = e;
            return;
        }
        ob = e = n;
    } while (null !== e);
    (ox = 6), (ob = null);
}
function lE(e, t, n, r, i, s, a, o, u) {
    e.cancelPendingCommit = null;
    do lA();
    while (0 !== oX);
    if (0 != (6 & ov)) throw Error(l(327));
    if (null !== t) {
        if (t === e.current) throw Error(l(177));
        if (
            (!(function (e, t, n, r, i, s) {
                var a = e.pendingLanes;
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
                for (n = a & ~n; 0 < n; ) {
                    var d = 31 - e_(n),
                        c = 1 << d;
                    (o[d] = 0), (l[d] = -1);
                    var _ = u[d];
                    if (null !== _)
                        for (u[d] = null, d = 0; d < _.length; d++) {
                            var f = _[d];
                            null !== f && (f.lane &= -0x20000001);
                        }
                    n &= ~c;
                }
                0 !== r && eN(e, r, 0), 0 !== s && 0 === i && 0 !== e.tag && (e.suspendedLanes |= s & ~(a & ~t));
            })(e, n, (s = t.lanes | t.childLanes | n0), a, o, u),
            e === oC && ((ob = oC = null), (oD = 0)),
            (oJ = t),
            (oQ = e),
            (oZ = n),
            (o0 = s),
            (o1 = i),
            (o2 = r),
            0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  X(ei, function () {
                      return lI(!0), null;
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
            (r = 0 != (13878 & t.flags)),
            0 != (13878 & t.subtreeFlags) || r)
        ) {
            (r = M.T), (M.T = null), (i = P.p), (P.p = 2), (a = ov), (ov |= 4);
            try {
                !(function (e, t) {
                    if (((e = e.containerInfo), (ur = u2), nC((e = nv(e))))) {
                        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                            e: {
                                var r =
                                    (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                                    n.getSelection();
                                if (r && 0 !== r.rangeCount) {
                                    n = r.anchorNode;
                                    var i,
                                        s = r.anchorOffset,
                                        a = r.focusNode;
                                    r = r.focusOffset;
                                    try {
                                        n.nodeType, a.nodeType;
                                    } catch (e) {
                                        n = null;
                                        break e;
                                    }
                                    var o = 0,
                                        u = -1,
                                        d = -1,
                                        c = 0,
                                        _ = 0,
                                        f = e,
                                        E = null;
                                    s: for (;;) {
                                        for (
                                            ;
                                            f !== n || (0 !== s && 3 !== f.nodeType) || (u = o + s),
                                                f !== a || (0 !== r && 3 !== f.nodeType) || (d = o + r),
                                                3 === f.nodeType && (o += f.nodeValue.length),
                                                null !== (i = f.firstChild);
                                        )
                                            (E = f), (f = i);
                                        for (;;) {
                                            if (f === e) break s;
                                            if (
                                                (E === n && ++c === s && (u = o),
                                                E === a && ++_ === r && (d = o),
                                                null !== (i = f.nextSibling))
                                            )
                                                break;
                                            E = (f = E).parentNode;
                                        }
                                        f = i;
                                    }
                                    n = -1 === u || -1 === d ? null : { start: u, end: d };
                                } else n = null;
                            }
                        n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (ui = { focusedElem: e, selectionRange: n }, u2 = !1, oe = t; null !== oe; )
                        if (((e = (t = oe).child), 0 != (1024 & t.subtreeFlags) && null !== e))
                            (e.return = t), (oe = e);
                        else
                            for (; null !== oe; ) {
                                switch (((a = (t = oe).alternate), (e = t.flags), t.tag)) {
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
                                        if (0 != (1024 & e) && null !== a) {
                                            (e = void 0),
                                                (n = t),
                                                (s = a.memoizedProps),
                                                (a = a.memoizedState),
                                                (r = n.stateNode);
                                            try {
                                                var h = aa(n.type, s, n.elementType === n.type);
                                                (e = r.getSnapshotBeforeUpdate(h, a)),
                                                    (r.__reactInternalSnapshotBeforeUpdate = e);
                                            } catch (e) {
                                                lS(n, n.return, e);
                                            }
                                        }
                                        break;
                                    case 3:
                                        if (0 != (1024 & e)) {
                                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) um(e);
                                            else if (1 === n)
                                                switch (e.nodeName) {
                                                    case "HEAD":
                                                    case "HTML":
                                                    case "BODY":
                                                        um(e);
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
                                    (e.return = t.return), (oe = e);
                                    break;
                                }
                                oe = t.return;
                            }
                })(e, t);
            } finally {
                (ov = a), (P.p = i), (M.T = r);
            }
        }
        (oX = 1), lh(), lp(), lm();
    }
}
function lh() {
    if (1 === oX) {
        oX = 0;
        var e = oQ,
            t = oJ,
            n = 0 != (13878 & t.flags);
        if (0 != (13878 & t.subtreeFlags) || n) {
            (n = M.T), (M.T = null);
            var r = P.p;
            P.p = 2;
            var i = ov;
            ov |= 4;
            try {
                od(t, e);
                var s = ui,
                    a = nv(e.containerInfo),
                    o = s.focusedElem,
                    l = s.selectionRange;
                if (
                    a !== o &&
                    o &&
                    o.ownerDocument &&
                    (function e(t, n) {
                        return (
                            !!t &&
                            !!n &&
                            (t === n ||
                                ((!t || 3 !== t.nodeType) &&
                                    (n && 3 === n.nodeType
                                        ? e(t, n.parentNode)
                                        : "contains" in t
                                          ? t.contains(n)
                                          : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))))
                        );
                    })(o.ownerDocument.documentElement, o)
                ) {
                    if (null !== l && nC(o)) {
                        var u = l.start,
                            d = l.end;
                        if ((void 0 === d && (d = u), "selectionStart" in o))
                            (o.selectionStart = u), (o.selectionEnd = Math.min(d, o.value.length));
                        else {
                            var c = o.ownerDocument || document,
                                _ = (c && c.defaultView) || window;
                            if (_.getSelection) {
                                var f = _.getSelection(),
                                    E = o.textContent.length,
                                    h = Math.min(l.start, E),
                                    p = void 0 === l.end ? h : Math.min(l.end, E);
                                !f.extend && h > p && ((a = p), (p = h), (h = a));
                                var m = nR(o, h),
                                    g = nR(o, p);
                                if (
                                    m &&
                                    g &&
                                    (1 !== f.rangeCount ||
                                        f.anchorNode !== m.node ||
                                        f.anchorOffset !== m.offset ||
                                        f.focusNode !== g.node ||
                                        f.focusOffset !== g.offset)
                                ) {
                                    var A = c.createRange();
                                    A.setStart(m.node, m.offset),
                                        f.removeAllRanges(),
                                        h > p
                                            ? (f.addRange(A), f.extend(g.node, g.offset))
                                            : (A.setEnd(g.node, g.offset), f.addRange(A));
                                }
                            }
                        }
                    }
                    for (c = [], f = o; (f = f.parentNode); )
                        1 === f.nodeType && c.push({ element: f, left: f.scrollLeft, top: f.scrollTop });
                    for ("function" == typeof o.focus && o.focus(), o = 0; o < c.length; o++) {
                        var I = c[o];
                        (I.element.scrollLeft = I.left), (I.element.scrollTop = I.top);
                    }
                }
                (u2 = !!ur), (ui = ur = null);
            } finally {
                (ov = i), (P.p = r), (M.T = n);
            }
        }
        (e.current = t), (oX = 2);
    }
}
function lp() {
    if (2 === oX) {
        oX = 0;
        var e = oQ,
            t = oJ,
            n = 0 != (8772 & t.flags);
        if (0 != (8772 & t.subtreeFlags) || n) {
            (n = M.T), (M.T = null);
            var r = P.p;
            P.p = 2;
            var i = ov;
            ov |= 4;
            try {
                ot(e, t.alternate, t);
            } finally {
                (ov = i), (P.p = r), (M.T = n);
            }
        }
        oX = 3;
    }
}
function lm() {
    if (4 === oX || 3 === oX) {
        (oX = 0), Z();
        var e = oQ,
            t = oJ,
            n = oZ,
            r = o2;
        0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
            ? (oX = 5)
            : ((oX = 0), (oJ = oQ = null), lg(e, e.pendingLanes));
        var i = e.pendingLanes;
        if ((0 === i && (oq = null), ev(n), (t = t.stateNode), ed && "function" == typeof ed.onCommitFiberRoot))
            try {
                ed.onCommitFiberRoot(eu, t, void 0, 128 == (128 & t.current.flags));
            } catch (e) {}
        if (null !== r) {
            (t = M.T), (i = P.p), (P.p = 2), (M.T = null);
            try {
                for (var s = e.onRecoverableError, a = 0; a < r.length; a++) {
                    var o = r[a];
                    s(o.value, { componentStack: o.stack });
                }
            } finally {
                (M.T = t), (P.p = i);
            }
        }
        0 != (3 & oZ) && lA(),
            lP(e),
            (i = e.pendingLanes),
            0 != (4194090 & n) && 0 != (42 & i) ? (e === o6 ? o3++ : ((o3 = 0), (o6 = e))) : (o3 = 0),
            lU(0, !1);
    }
}
function lg(e, t) {
    0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), rQ(t));
}
function lA(e) {
    return lh(), lp(), lm(), lI(e);
}
function lI() {
    if (5 !== oX) return !1;
    var e = oQ,
        t = o0;
    o0 = 0;
    var n = ev(oZ),
        r = M.T,
        i = P.p;
    try {
        (P.p = 32 > n ? 32 : n), (M.T = null), (n = o1), (o1 = null);
        var s = oQ,
            a = oZ;
        if (((oX = 0), (oJ = oQ = null), (oZ = 0), 0 != (6 & ov))) throw Error(l(331));
        var o = ov;
        if (
            ((ov |= 4),
            oy(s.current),
            op(s, s.current, a, n),
            (ov = o),
            lU(0, !1),
            ed && "function" == typeof ed.onPostCommitFiberRoot)
        )
            try {
                ed.onPostCommitFiberRoot(eu, s);
            } catch (e) {}
        return !0;
    } finally {
        (P.p = i), (M.T = r), lg(e, t);
    }
}
function lT(e, t, n) {
    (t = nQ(n, t)), (t = af(e.stateNode, t, 2)), null !== (e = iE(e, t, 2)) && (ey(e, 2), lP(e));
}
function lS(e, t, n) {
    if (3 === e.tag) lT(e, e, n);
    else
        for (; null !== t; ) {
            if (3 === t.tag) {
                lT(t, e, n);
                break;
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if (
                    "function" == typeof t.type.getDerivedStateFromError ||
                    ("function" == typeof r.componentDidCatch && (null === oq || !oq.has(r)))
                ) {
                    (e = nQ(n, e)), null !== (r = iE(t, (n = aE(2)), 2)) && (ah(n, r, t, e), ey(r, 2), lP(r));
                    break;
                }
            }
            t = t.return;
        }
}
function ly(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new oR();
        var i = new Set();
        r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || ((oU = !0), i.add(n), (e = lN.bind(null, e, t, n)), t.then(e, e));
}
function lN(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        oC === e &&
            (oD & n) === n &&
            (4 === ox || (3 === ox && (0x3c00000 & oD) === oD && 300 > ee() - oK)
                ? 0 == (2 & ov) && lr(e, 0)
                : (oF |= n),
            oH === oD && (oH = 0)),
        lP(e);
}
function lO(e, t) {
    0 === t && (t = eT()), null !== (e = n6(e, t)) && (ey(e, t), lP(e));
}
function lR(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), lO(e, n);
}
function lv(e, t) {
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
    null !== r && r.delete(t), lO(e, n);
}
var lC = null,
    lb = null,
    lD = !1,
    lL = !1,
    lw = !1,
    lM = 0;
function lP(e) {
    e !== lb && null === e.next && (null === lb ? (lC = lb = e) : (lb = lb.next = e)),
        (lL = !0),
        lD ||
            ((lD = !0),
            uf(function () {
                0 != (6 & ov) ? X(en, lk) : lx();
            }));
}
function lU(e, t) {
    if (!lw && lL) {
        lw = !0;
        do
            for (var n = !1, r = lC; null !== r; ) {
                if (!t)
                    if (0 !== e) {
                        var i = r.pendingLanes;
                        if (0 === i) var s = 0;
                        else {
                            var a = r.suspendedLanes,
                                o = r.pingedLanes;
                            s =
                                0xc000095 & (s = ((1 << (31 - e_(42 | e) + 1)) - 1) & (i & ~(a & ~o)))
                                    ? (0xc000095 & s) | 1
                                    : s
                                      ? 2 | s
                                      : 0;
                        }
                        0 !== s && ((n = !0), lF(r, s));
                    } else
                        (s = oD),
                            0 ==
                                (3 &
                                    (s = eg(
                                        r,
                                        r === oC ? s : 0,
                                        null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                                    ))) ||
                                eA(r, s) ||
                                ((n = !0), lF(r, s));
                r = r.next;
            }
        while (n);
        lw = !1;
    }
}
function lk() {
    lx();
}
function lx() {
    lL = lD = !1;
    var e,
        t = 0;
    0 !== lM &&
        (((e = window.event) && "popstate" === e.type ? e === uu || ((uu = e), 0) : ((uu = null), 1)) || (t = lM),
        (lM = 0));
    for (var n = ee(), r = null, i = lC; null !== i; ) {
        var s = i.next,
            a = lG(i, n);
        0 === a
            ? ((i.next = null), null === r ? (lC = s) : (r.next = s), null === s && (lb = r))
            : ((r = i), (0 !== t || 0 != (3 & a)) && (lL = !0)),
            (i = s);
    }
    lU(t, !1);
}
function lG(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = -0x3c00001 & e.pendingLanes; 0 < s; ) {
        var a = 31 - e_(s),
            o = 1 << a,
            l = i[a];
        -1 === l
            ? (0 == (o & n) || 0 != (o & r)) &&
              (i[a] = (function (e, t) {
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
              })(o, t))
            : l <= t && (e.expiredLanes |= o),
            (s &= ~o);
    }
    if (
        ((t = oC),
        (n = oD),
        (n = eg(e, e === t ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
        (r = e.callbackNode),
        0 === n || (e === t && (2 === oL || 9 === oL)) || null !== e.cancelPendingCommit)
    )
        return null !== r && null !== r && Q(r), (e.callbackNode = null), (e.callbackPriority = 0);
    if (0 == (3 & n) || eA(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch ((null !== r && Q(r), ev(n))) {
            case 2:
            case 8:
                n = er;
                break;
            case 32:
            default:
                n = ei;
                break;
            case 0x10000000:
                n = ea;
        }
        return (n = X(n, (r = lV.bind(null, e)))), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return null !== r && null !== r && Q(r), (e.callbackPriority = 2), (e.callbackNode = null), 2;
}
function lV(e, t) {
    if (0 !== oX && 5 !== oX) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (lA(!0) && e.callbackNode !== n) return null;
    var r = oD;
    return 0 === (r = eg(e, e === oC ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
        ? null
        : (o8(e, r, t), lG(e, ee()), null != e.callbackNode && e.callbackNode === n ? lV.bind(null, e) : null);
}
function lF(e, t) {
    if (lA()) return null;
    o8(e, t, !0);
}
function lB() {
    return 0 === lM && (lM = eI()), lM;
}
function lH(e) {
    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : tE("" + e);
}
function lY(e, t) {
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
for (var lW = 0; lW < nz.length; lW++) {
    var lj = nz[lW];
    nq(lj.toLowerCase(), "on" + (lj[0].toUpperCase() + lj.slice(1)));
}
nq(nF, "onAnimationEnd"),
    nq(nB, "onAnimationIteration"),
    nq(nH, "onAnimationStart"),
    nq("dblclick", "onDoubleClick"),
    nq("focusin", "onFocus"),
    nq("focusout", "onBlur"),
    nq(nY, "onTransitionRun"),
    nq(nW, "onTransitionStart"),
    nq(nj, "onTransitionCancel"),
    nq(nK, "onTransitionEnd"),
    e$("onMouseEnter", ["mouseout", "mouseover"]),
    e$("onMouseLeave", ["mouseout", "mouseover"]),
    e$("onPointerEnter", ["pointerout", "pointerover"]),
    e$("onPointerLeave", ["pointerout", "pointerover"]),
    eK("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    eK("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    eK("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    eK("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    eK("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    eK("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lK =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    l$ = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lK));
function lz(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var o = r[a],
                        l = o.instance,
                        u = o.currentTarget;
                    if (((o = o.listener), l !== s && i.isPropagationStopped())) break e;
                    (s = o), (i.currentTarget = u);
                    try {
                        s(i);
                    } catch (e) {
                        ao(e);
                    }
                    (i.currentTarget = null), (s = l);
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (
                        ((l = (o = r[a]).instance),
                        (u = o.currentTarget),
                        (o = o.listener),
                        l !== s && i.isPropagationStopped())
                    )
                        break e;
                    (s = o), (i.currentTarget = u);
                    try {
                        s(i);
                    } catch (e) {
                        ao(e);
                    }
                    (i.currentTarget = null), (s = l);
                }
        }
    }
}
function lq(e, t) {
    var n = t[eM];
    void 0 === n && (n = t[eM] = new Set());
    var r = e + "__bubble";
    n.has(r) || (lZ(t, e, 2, !1), n.add(r));
}
function lX(e, t, n) {
    var r = 0;
    t && (r |= 4), lZ(n, e, r, t);
}
var lQ = "_reactListening" + Math.random().toString(36).slice(2);
function lJ(e) {
    if (!e[lQ]) {
        (e[lQ] = !0),
            eW.forEach(function (t) {
                "selectionchange" !== t && (l$.has(t) || lX(t, !1, e), lX(t, !0, e));
            });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[lQ] || ((t[lQ] = !0), lX("selectionchange", !1, t));
    }
}
function lZ(e, t, n, r) {
    switch (u9(t)) {
        case 2:
            var i = u3;
            break;
        case 8:
            i = u6;
            break;
        default:
            i = u4;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        tN && ("touchstart" === t || "touchmove" === t || "wheel" === t) && (i = !0),
        r
            ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
}
function l0(e, t, n, r, i) {
    var s = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
            if (null === r) return;
            var a = r.tag;
            if (3 === a || 4 === a) {
                var o = r.stateNode.containerInfo;
                if (o === i) break;
                if (4 === a)
                    for (a = r.return; null !== a; ) {
                        var l = a.tag;
                        if ((3 === l || 4 === l) && a.stateNode.containerInfo === i) return;
                        a = a.return;
                    }
                for (; null !== o; ) {
                    if (null === (a = eV(o))) return;
                    if (5 === (l = a.tag) || 6 === l || 26 === l || 27 === l) {
                        r = s = a;
                        continue e;
                    }
                    o = o.parentNode;
                }
            }
            r = r.return;
        }
    tT(function () {
        var r = s,
            i = tp(n),
            a = [];
        e: {
            var o = n$.get(e);
            if (void 0 !== o) {
                var l = tF,
                    d = e;
                switch (e) {
                    case "keypress":
                        if (0 === tD(n)) break e;
                    case "keydown":
                    case "keyup":
                        l = t1;
                        break;
                    case "focusin":
                        (d = "focus"), (l = tK);
                        break;
                    case "focusout":
                        (d = "blur"), (l = tK);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        l = tK;
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
                        l = tW;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        l = tj;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        l = t3;
                        break;
                    case nF:
                    case nB:
                    case nH:
                        l = t$;
                        break;
                    case nK:
                        l = t6;
                        break;
                    case "scroll":
                    case "scrollend":
                        l = tH;
                        break;
                    case "wheel":
                        l = t4;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        l = tz;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        l = t2;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        l = t5;
                }
                var c = 0 != (4 & t),
                    _ = !c && ("scroll" === e || "scrollend" === e),
                    f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var E, h = r; null !== h; ) {
                    var p = h;
                    if (
                        ((E = p.stateNode),
                        (5 !== (p = p.tag) && 26 !== p && 27 !== p) ||
                            null === E ||
                            null === f ||
                            (null != (p = tS(h, f)) && c.push(l1(h, p, E))),
                        _)
                    )
                        break;
                    h = h.return;
                }
                0 < c.length && ((o = new l(o, d, null, n, i)), a.push({ event: o, listeners: c }));
            }
        }
        if (0 == (7 & t)) {
            if (
                ((o = "mouseover" === e || "pointerover" === e),
                (l = "mouseout" === e || "pointerout" === e),
                !(o && n !== th && (d = n.relatedTarget || n.fromElement) && (eV(d) || d[ew]))) &&
                (l || o) &&
                ((o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window),
                l
                    ? ((d = n.relatedTarget || n.toElement),
                      (l = r),
                      null !== (d = d ? eV(d) : null) &&
                          ((_ = u(d)), (c = d.tag), d !== _ || (5 !== c && 27 !== c && 6 !== c)) &&
                          (d = null))
                    : ((l = null), (d = r)),
                l !== d)
            ) {
                if (
                    ((c = tW),
                    (p = "onMouseLeave"),
                    (f = "onMouseEnter"),
                    (h = "mouse"),
                    ("pointerout" === e || "pointerover" === e) &&
                        ((c = t2), (p = "onPointerLeave"), (f = "onPointerEnter"), (h = "pointer")),
                    (_ = null == l ? o : eB(l)),
                    (E = null == d ? o : eB(d)),
                    ((o = new c(p, h + "leave", l, n, i)).target = _),
                    (o.relatedTarget = E),
                    (p = null),
                    eV(i) === r && (((c = new c(f, h + "enter", d, n, i)).target = E), (c.relatedTarget = _), (p = c)),
                    (_ = p),
                    l && d)
                )
                    s: {
                        for (c = l, f = d, h = 0, E = c; E; E = l3(E)) h++;
                        for (E = 0, p = f; p; p = l3(p)) E++;
                        for (; 0 < h - E; ) (c = l3(c)), h--;
                        for (; 0 < E - h; ) (f = l3(f)), E--;
                        for (; h--; ) {
                            if (c === f || (null !== f && c === f.alternate)) break s;
                            (c = l3(c)), (f = l3(f));
                        }
                        c = null;
                    }
                else c = null;
                null !== l && l6(a, o, l, c, !1), null !== d && null !== _ && l6(a, _, d, c, !0);
            }
            e: {
                if (
                    "select" === (l = (o = r ? eB(r) : window).nodeName && o.nodeName.toLowerCase()) ||
                    ("input" === l && "file" === o.type)
                )
                    var m,
                        g = nf;
                else if (no(o))
                    if (nE) g = nS;
                    else {
                        g = nI;
                        var A = nA;
                    }
                else
                    (l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type)
                        ? (g = nT)
                        : r && tc(r.elementType) && (g = nf);
                if (g && (g = g(e, r))) {
                    nl(a, g, n, i);
                    break e;
                }
                A && A(e, o, r),
                    "focusout" === e &&
                        r &&
                        "number" === o.type &&
                        null != r.memoizedProps.value &&
                        tr(o, "number", o.value);
            }
            switch (((A = r ? eB(r) : window), e)) {
                case "focusin":
                    (no(A) || "true" === A.contentEditable) && ((nD = A), (nL = r), (nw = null));
                    break;
                case "focusout":
                    nw = nL = nD = null;
                    break;
                case "mousedown":
                    nM = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (nM = !1), nP(a, n, i);
                    break;
                case "selectionchange":
                    if (nb) break;
                case "keydown":
                case "keyup":
                    nP(a, n, i);
            }
            if (t8)
                s: {
                    switch (e) {
                        case "compositionstart":
                            var I = "onCompositionStart";
                            break s;
                        case "compositionend":
                            I = "onCompositionEnd";
                            break s;
                        case "compositionupdate":
                            I = "onCompositionUpdate";
                            break s;
                    }
                    I = void 0;
                }
            else
                ns
                    ? nr(e, n) && (I = "onCompositionEnd")
                    : "keydown" === e && 229 === n.keyCode && (I = "onCompositionStart");
            I &&
                (nt &&
                    "ko" !== n.locale &&
                    (ns || "onCompositionStart" !== I
                        ? "onCompositionEnd" === I && ns && (m = tb())
                        : ((tv = "value" in (tR = i) ? tR.value : tR.textContent), (ns = !0))),
                0 < (A = l2(r, I)).length &&
                    ((I = new tq(I, e, null, n, i)),
                    a.push({ event: I, listeners: A }),
                    m ? (I.data = m) : null !== (m = ni(n)) && (I.data = m))),
                (m = ne
                    ? (function (e, t) {
                          switch (e) {
                              case "compositionend":
                                  return ni(t);
                              case "keypress":
                                  if (32 !== t.which) return null;
                                  return (nn = !0), " ";
                              case "textInput":
                                  return " " === (e = t.data) && nn ? null : e;
                              default:
                                  return null;
                          }
                      })(e, n)
                    : (function (e, t) {
                          if (ns)
                              return "compositionend" === e || (!t8 && nr(e, t))
                                  ? ((e = tb()), (tC = tv = tR = null), (ns = !1), e)
                                  : null;
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
                                  return nt && "ko" !== t.locale ? null : t.data;
                          }
                      })(e, n)) &&
                    0 < (I = l2(r, "onBeforeInput")).length &&
                    ((A = new tq("onBeforeInput", "beforeinput", null, n, i)),
                    a.push({ event: A, listeners: I }),
                    (A.data = m));
            var T = e;
            if ("submit" === T && r && r.stateNode === i) {
                var S = lH((i[eL] || null).action),
                    y = n.submitter;
                y &&
                    null !== (T = (T = y[eL] || null) ? lH(T.formAction) : y.getAttribute("formAction")) &&
                    ((S = T), (y = null));
                var N = new tF("action", "action", null, n, i);
                a.push({
                    event: N,
                    listeners: [
                        {
                            instance: null,
                            listener: function () {
                                if (n.defaultPrevented) {
                                    if (0 !== lM) {
                                        var e = y ? lY(i, y) : new FormData(i);
                                        sL(r, { pending: !0, data: e, method: i.method, action: S }, null, e);
                                    }
                                } else
                                    "function" == typeof S &&
                                        (N.preventDefault(),
                                        sL(
                                            r,
                                            {
                                                pending: !0,
                                                data: (e = y ? lY(i, y) : new FormData(i)),
                                                method: i.method,
                                                action: S,
                                            },
                                            S,
                                            e,
                                        ));
                            },
                            currentTarget: i,
                        },
                    ],
                });
            }
        }
        lz(a, t);
    });
}
function l1(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function l2(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
        var i = e,
            s = i.stateNode;
        if (
            ((5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
                null === s ||
                (null != (i = tS(e, n)) && r.unshift(l1(e, i, s)), null != (i = tS(e, t)) && r.push(l1(e, i, s))),
            3 === e.tag)
        )
            return r;
        e = e.return;
    }
    return [];
}
function l3(e) {
    if (null === e) return null;
    do e = e.return;
    while (e && 5 !== e.tag && 27 !== e.tag);
    return e || null;
}
function l6(e, t, n, r, i) {
    for (var s = t._reactName, a = []; null !== n && n !== r; ) {
        var o = n,
            l = o.alternate,
            u = o.stateNode;
        if (((o = o.tag), null !== l && l === r)) break;
        (5 !== o && 26 !== o && 27 !== o) ||
            null === u ||
            ((l = u),
            i
                ? null != (u = tS(n, s)) && a.unshift(l1(n, u, l))
                : i || (null != (u = tS(n, s)) && a.push(l1(n, u, l)))),
            (n = n.return);
    }
    0 !== a.length && e.push({ event: t, listeners: a });
}
var l4 = /\r\n?/g,
    l5 = /\u0000|\uFFFD/g;
function l7(e) {
    return ("string" == typeof e ? e : "" + e).replace(l4, "\n").replace(l5, "");
}
function l8(e, t) {
    return (t = l7(t)), l7(e) === t;
}
function l9() {}
function ue(e, t, n, r, i, s) {
    switch (n) {
        case "children":
            "string" == typeof r
                ? "body" === t || ("textarea" === t && "" === r) || to(e, r)
                : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && to(e, "" + r);
            break;
        case "className":
            eJ(e, "class", r);
            break;
        case "tabIndex":
            eJ(e, "tabindex", r);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            eJ(e, n, r);
            break;
        case "style":
            td(e, r, s);
            break;
        case "data":
            if ("object" !== t) {
                eJ(e, "data", r);
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
            (r = tE("" + r)), e.setAttribute(n, r);
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
                ("function" == typeof s &&
                    ("formAction" === n
                        ? ("input" !== t && ue(e, t, "name", i.name, i, null),
                          ue(e, t, "formEncType", i.formEncType, i, null),
                          ue(e, t, "formMethod", i.formMethod, i, null),
                          ue(e, t, "formTarget", i.formTarget, i, null))
                        : (ue(e, t, "encType", i.encType, i, null),
                          ue(e, t, "method", i.method, i, null),
                          ue(e, t, "target", i.target, i, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
            ) {
                e.removeAttribute(n);
                break;
            }
            (r = tE("" + r)), e.setAttribute(n, r);
            break;
        case "onClick":
            null != r && (e.onclick = l9);
            break;
        case "onScroll":
            null != r && lq("scroll", e);
            break;
        case "onScrollEnd":
            null != r && lq("scrollend", e);
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
            (n = tE("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
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
            lq("beforetoggle", e), lq("toggle", e), eQ(e, "popover", r);
            break;
        case "xlinkActuate":
            eZ(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
        case "xlinkArcrole":
            eZ(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
        case "xlinkRole":
            eZ(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
        case "xlinkShow":
            eZ(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
        case "xlinkTitle":
            eZ(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
        case "xlinkType":
            eZ(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
        case "xmlBase":
            eZ(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
        case "xmlLang":
            eZ(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
        case "xmlSpace":
            eZ(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
        case "is":
            eQ(e, "is", r);
            break;
        default:
            (2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) ||
                eQ(e, (n = t_.get(n) || n), r);
    }
}
function ut(e, t, n, r, i, s) {
    switch (n) {
        case "style":
            td(e, r, s);
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
            "string" == typeof r ? to(e, r) : ("number" == typeof r || "bigint" == typeof r) && to(e, "" + r);
            break;
        case "onScroll":
            null != r && lq("scroll", e);
            break;
        case "onScrollEnd":
            null != r && lq("scrollend", e);
            break;
        case "onClick":
            null != r && (e.onclick = l9);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
            break;
        default:
            if (!ej.hasOwnProperty(n))
                e: {
                    if (
                        "o" === n[0] &&
                        "n" === n[1] &&
                        ((i = n.endsWith("Capture")),
                        (t = n.slice(2, i ? n.length - 7 : void 0)),
                        "function" == typeof (s = null != (s = e[eL] || null) ? s[n] : null) &&
                            e.removeEventListener(t, s, i),
                        "function" == typeof r)
                    ) {
                        "function" != typeof s &&
                            null !== s &&
                            (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                            e.addEventListener(t, r, i);
                        break e;
                    }
                    n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, "") : eQ(e, n, r);
                }
    }
}
function un(e, t, n) {
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
            lq("error", e), lq("load", e);
            var r,
                i = !1,
                s = !1;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var a = n[r];
                    if (null != a)
                        switch (r) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                s = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(l(137, t));
                            default:
                                ue(e, t, r, a, n, null);
                        }
                }
            s && ue(e, t, "srcSet", n.srcSet, n, null), i && ue(e, t, "src", n.src, n, null);
            return;
        case "input":
            lq("invalid", e);
            var o = (r = a = s = null),
                u = null,
                d = null;
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    var c = n[i];
                    if (null != c)
                        switch (i) {
                            case "name":
                                s = c;
                                break;
                            case "type":
                                a = c;
                                break;
                            case "checked":
                                u = c;
                                break;
                            case "defaultChecked":
                                d = c;
                                break;
                            case "value":
                                r = c;
                                break;
                            case "defaultValue":
                                o = c;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != c) throw Error(l(137, t));
                                break;
                            default:
                                ue(e, t, i, c, n, null);
                        }
                }
            tn(e, r, o, u, d, a, s, !1), e5(e);
            return;
        case "select":
            for (s in (lq("invalid", e), (i = a = r = null), n))
                if (n.hasOwnProperty(s) && null != (o = n[s]))
                    switch (s) {
                        case "value":
                            r = o;
                            break;
                        case "defaultValue":
                            a = o;
                            break;
                        case "multiple":
                            i = o;
                        default:
                            ue(e, t, s, o, n, null);
                    }
            (t = r), (n = a), (e.multiple = !!i), null != t ? ti(e, !!i, t, !1) : null != n && ti(e, !!i, n, !0);
            return;
        case "textarea":
            for (a in (lq("invalid", e), (r = s = i = null), n))
                if (n.hasOwnProperty(a) && null != (o = n[a]))
                    switch (a) {
                        case "value":
                            i = o;
                            break;
                        case "defaultValue":
                            s = o;
                            break;
                        case "children":
                            r = o;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != o) throw Error(l(91));
                            break;
                        default:
                            ue(e, t, a, o, n, null);
                    }
            ta(e, i, s, r), e5(e);
            return;
        case "option":
            for (u in n)
                n.hasOwnProperty(u) &&
                    null != (i = n[u]) &&
                    ("selected" === u
                        ? (e.selected = i && "function" != typeof i && "symbol" != typeof i)
                        : ue(e, t, u, i, n, null));
            return;
        case "dialog":
            lq("beforetoggle", e), lq("toggle", e), lq("cancel", e), lq("close", e);
            break;
        case "iframe":
        case "object":
            lq("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < lK.length; i++) lq(lK[i], e);
            break;
        case "image":
            lq("error", e), lq("load", e);
            break;
        case "details":
            lq("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            lq("error", e), lq("load", e);
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
            for (d in n)
                if (n.hasOwnProperty(d) && null != (i = n[d]))
                    switch (d) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            ue(e, t, d, i, n, null);
                    }
            return;
        default:
            if (tc(t)) {
                for (c in n) n.hasOwnProperty(c) && void 0 !== (i = n[c]) && ut(e, t, c, i, n, void 0);
                return;
            }
    }
    for (o in n) n.hasOwnProperty(o) && null != (i = n[o]) && ue(e, t, o, i, n, null);
}
var ur = null,
    ui = null;
function us(e) {
    return 9 === e.nodeType ? e : e.ownerDocument;
}
function ua(e) {
    switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0;
    }
}
function uo(e, t) {
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
function ul(e, t) {
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
var uu = null,
    ud = "function" == typeof setTimeout ? setTimeout : void 0,
    uc = "function" == typeof clearTimeout ? clearTimeout : void 0,
    u_ = "function" == typeof Promise ? Promise : void 0,
    uf =
        "function" == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== u_
              ? function (e) {
                    return u_.resolve(null).then(e).catch(uE);
                }
              : ud;
function uE(e) {
    setTimeout(function () {
        throw e;
    });
}
function uh(e) {
    return "head" === e;
}
function up(e, t) {
    var n = t,
        r = 0,
        i = 0;
    do {
        var s = n.nextSibling;
        if ((e.removeChild(n), s && 8 === s.nodeType))
            if ("/$" === (n = s.data)) {
                if (0 < r && 8 > r) {
                    n = r;
                    var a = e.ownerDocument;
                    if ((1 & n && uy(a.documentElement), 2 & n && uy(a.body), 4 & n))
                        for (uy((n = a.head)), a = n.firstChild; a; ) {
                            var o = a.nextSibling,
                                l = a.nodeName;
                            a[ex] ||
                                "SCRIPT" === l ||
                                "STYLE" === l ||
                                ("LINK" === l && "stylesheet" === a.rel.toLowerCase()) ||
                                n.removeChild(a),
                                (a = o);
                        }
                }
                if (0 === i) {
                    e.removeChild(s), dg(t);
                    return;
                }
                i--;
            } else "$" === n || "$?" === n || "$!" === n ? i++ : (r = n.charCodeAt(0) - 48);
        else r = 0;
        n = s;
    } while (n);
    dg(t);
}
function um(e) {
    var t = e.firstChild;
    for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
            case "HTML":
            case "HEAD":
            case "BODY":
                um(n), eG(n);
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
function ug(e) {
    return "$!" === e.data || ("$?" === e.data && "complete" === e.ownerDocument.readyState);
}
function uA(e) {
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
var uI = null;
function uT(e) {
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
function uS(e, t, n) {
    switch (((t = us(n)), e)) {
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
function uy(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    eG(e);
}
var uN = new Map(),
    uO = new Set();
function uR(e) {
    return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
}
var uv = P.d;
P.d = {
    f: function () {
        var e = uv.f(),
            t = lt();
        return e || t;
    },
    r: function (e) {
        var t = eF(e);
        null !== t && 5 === t.tag && "form" === t.type ? sM(t) : uv.r(e);
    },
    D: function (e) {
        uv.D(e), ub("dns-prefetch", e, null);
    },
    C: function (e, t) {
        uv.C(e, t), ub("preconnect", e, t);
    },
    L: function (e, t, n) {
        if ((uv.L(e, t, n), uC && e && t)) {
            var r = 'link[rel="preload"][as="' + te(t) + '"]';
            "image" === t && n && n.imageSrcSet
                ? ((r += '[imagesrcset="' + te(n.imageSrcSet) + '"]'),
                  "string" == typeof n.imageSizes && (r += '[imagesizes="' + te(n.imageSizes) + '"]'))
                : (r += '[href="' + te(e) + '"]');
            var i = r;
            switch (t) {
                case "style":
                    i = uL(e);
                    break;
                case "script":
                    i = uP(e);
            }
            uN.has(i) ||
                ((e = _({ rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
                uN.set(i, e),
                null !== uC.querySelector(r) ||
                    ("style" === t && uC.querySelector(uw(i))) ||
                    ("script" === t && uC.querySelector(uU(i))) ||
                    (un((t = uC.createElement("link")), "link", e), eY(t), uC.head.appendChild(t)));
        }
    },
    m: function (e, t) {
        if ((uv.m(e, t), uC && e)) {
            var n = t && "string" == typeof t.as ? t.as : "script",
                r = 'link[rel="modulepreload"][as="' + te(n) + '"][href="' + te(e) + '"]',
                i = r;
            switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    i = uP(e);
            }
            if (
                !uN.has(i) &&
                ((e = _({ rel: "modulepreload", href: e }, t)), uN.set(i, e), null === uC.querySelector(r))
            ) {
                switch (n) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (uC.querySelector(uU(i))) return;
                }
                un((n = uC.createElement("link")), "link", e), eY(n), uC.head.appendChild(n);
            }
        }
    },
    X: function (e, t) {
        if ((uv.X(e, t), uC && e)) {
            var n = eH(uC).hoistableScripts,
                r = uP(e),
                i = n.get(r);
            i ||
                ((i = uC.querySelector(uU(r))) ||
                    ((e = _({ src: e, async: !0 }, t)),
                    (t = uN.get(r)) && uV(e, t),
                    eY((i = uC.createElement("script"))),
                    un(i, "link", e),
                    uC.head.appendChild(i)),
                (i = { type: "script", instance: i, count: 1, state: null }),
                n.set(r, i));
        }
    },
    S: function (e, t, n) {
        if ((uv.S(e, t, n), uC && e)) {
            var r = eH(uC).hoistableStyles,
                i = uL(e);
            t = t || "default";
            var s = r.get(i);
            if (!s) {
                var a = { loading: 0, preload: null };
                if ((s = uC.querySelector(uw(i)))) a.loading = 5;
                else {
                    (e = _({ rel: "stylesheet", href: e, "data-precedence": t }, n)), (n = uN.get(i)) && uG(e, n);
                    var o = (s = uC.createElement("link"));
                    eY(o),
                        un(o, "link", e),
                        (o._p = new Promise(function (e, t) {
                            (o.onload = e), (o.onerror = t);
                        })),
                        o.addEventListener("load", function () {
                            a.loading |= 1;
                        }),
                        o.addEventListener("error", function () {
                            a.loading |= 2;
                        }),
                        (a.loading |= 4),
                        ux(s, t, uC);
                }
                (s = { type: "stylesheet", instance: s, count: 1, state: a }), r.set(i, s);
            }
        }
    },
    M: function (e, t) {
        if ((uv.M(e, t), uC && e)) {
            var n = eH(uC).hoistableScripts,
                r = uP(e),
                i = n.get(r);
            i ||
                ((i = uC.querySelector(uU(r))) ||
                    ((e = _({ src: e, async: !0, type: "module" }, t)),
                    (t = uN.get(r)) && uV(e, t),
                    eY((i = uC.createElement("script"))),
                    un(i, "link", e),
                    uC.head.appendChild(i)),
                (i = { type: "script", instance: i, count: 1, state: null }),
                n.set(r, i));
        }
    },
};
var uC = "u" < typeof document ? null : document;
function ub(e, t, n) {
    if (uC && "string" == typeof t && t) {
        var r = te(t);
        (r = 'link[rel="' + e + '"][href="' + r + '"]'),
            "string" == typeof n && (r += '[crossorigin="' + n + '"]'),
            uO.has(r) ||
                (uO.add(r),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === uC.querySelector(r) &&
                    (un((t = uC.createElement("link")), "link", e), eY(t), uC.head.appendChild(t)));
    }
}
function uD(e, t, n, r) {
    var i = (i = Y.current) ? uR(i) : null;
    if (!i) throw Error(l(446));
    switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return "string" == typeof n.precedence && "string" == typeof n.href
                ? ((t = uL(n.href)),
                  (r = (n = eH(i).hoistableStyles).get(t)) ||
                      ((r = { type: "style", instance: null, count: 0, state: null }), n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
        case "link":
            if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                e = uL(n.href);
                var s,
                    a,
                    o,
                    u,
                    d = eH(i).hoistableStyles,
                    c = d.get(e);
                if (
                    (c ||
                        ((i = i.ownerDocument || i),
                        (c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
                        d.set(e, c),
                        (d = i.querySelector(uw(e))) && !d._p && ((c.instance = d), (c.state.loading = 5)),
                        uN.has(e) ||
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
                            uN.set(e, n),
                            d ||
                                ((s = i),
                                (a = e),
                                (o = n),
                                (u = c.state),
                                s.querySelector('link[rel="preload"][as="style"][' + a + "]")
                                    ? (u.loading = 1)
                                    : ((u.preload = a = s.createElement("link")),
                                      a.addEventListener("load", function () {
                                          return (u.loading |= 1);
                                      }),
                                      a.addEventListener("error", function () {
                                          return (u.loading |= 2);
                                      }),
                                      un(a, "link", o),
                                      eY(a),
                                      s.head.appendChild(a))))),
                    t && null === r)
                )
                    throw Error(l(528, ""));
                return c;
            }
            if (t && null !== r) throw Error(l(529, ""));
            return null;
        case "script":
            return (
                (t = n.async),
                "string" == typeof (n = n.src) && t && "function" != typeof t && "symbol" != typeof t
                    ? ((t = uP(n)),
                      (r = (n = eH(i).hoistableScripts).get(t)) ||
                          ((r = { type: "script", instance: null, count: 0, state: null }), n.set(t, r)),
                      r)
                    : { type: "void", instance: null, count: 0, state: null }
            );
        default:
            throw Error(l(444, e));
    }
}
function uL(e) {
    return 'href="' + te(e) + '"';
}
function uw(e) {
    return 'link[rel="stylesheet"][' + e + "]";
}
function uM(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
}
function uP(e) {
    return '[src="' + te(e) + '"]';
}
function uU(e) {
    return "script[async]" + e;
}
function uk(e, t, n) {
    if ((t.count++, null === t.instance))
        switch (t.type) {
            case "style":
                var r = e.querySelector('style[data-href~="' + te(n.href) + '"]');
                if (r) return (t.instance = r), eY(r), r;
                var i = _({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null,
                });
                return (
                    eY((r = (e.ownerDocument || e).createElement("style"))),
                    un(r, "style", i),
                    ux(r, n.precedence, e),
                    (t.instance = r)
                );
            case "stylesheet":
                i = uL(n.href);
                var s = e.querySelector(uw(i));
                if (s) return (t.state.loading |= 4), (t.instance = s), eY(s), s;
                (r = uM(n)), (i = uN.get(i)) && uG(r, i), eY((s = (e.ownerDocument || e).createElement("link")));
                var a = s;
                return (
                    (a._p = new Promise(function (e, t) {
                        (a.onload = e), (a.onerror = t);
                    })),
                    un(s, "link", r),
                    (t.state.loading |= 4),
                    ux(s, n.precedence, e),
                    (t.instance = s)
                );
            case "script":
                if (((s = uP(n.src)), (i = e.querySelector(uU(s))))) return (t.instance = i), eY(i), i;
                return (
                    (r = n),
                    (i = uN.get(s)) && uV((r = _({}, n)), i),
                    eY((i = (e = e.ownerDocument || e).createElement("script"))),
                    un(i, "link", r),
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
            ((r = t.instance), (t.state.loading |= 4), ux(r, n.precedence, e)),
        t.instance
    );
}
function ux(e, t, n) {
    for (
        var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
            i = r.length ? r[r.length - 1] : null,
            s = i,
            a = 0;
        a < r.length;
        a++
    ) {
        var o = r[a];
        if (o.dataset.precedence === t) s = o;
        else if (s !== i) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
}
function uG(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.title && (e.title = t.title);
}
function uV(e, t) {
    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.integrity && (e.integrity = t.integrity);
}
var uF = null;
function uB(e, t, n) {
    if (null === uF) {
        var r = new Map(),
            i = (uF = new Map());
        i.set(n, r);
    } else (r = (i = uF).get(n)) || ((r = new Map()), i.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var s = n[i];
        if (
            !(s[ex] || s[eD] || ("link" === e && "stylesheet" === s.getAttribute("rel"))) &&
            "http://www.w3.org/2000/svg" !== s.namespaceURI
        ) {
            var a = s.getAttribute(t) || "";
            a = e + a;
            var o = r.get(a);
            o ? o.push(s) : r.set(a, [s]);
        }
    }
    return r;
}
function uH(e, t, n) {
    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null);
}
function uY(e) {
    return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
}
var uW = null;
function uj() {}
function uK() {
    if ((this.count--, 0 === this.count)) {
        if (this.stylesheets) uz(this, this.stylesheets);
        else if (this.unsuspend) {
            var e = this.unsuspend;
            (this.unsuspend = null), e();
        }
    }
}
var u$ = null;
function uz(e, t) {
    (e.stylesheets = null),
        null !== e.unsuspend && (e.count++, (u$ = new Map()), t.forEach(uq, e), (u$ = null), uK.call(e));
}
function uq(e, t) {
    if (!(4 & t.state.loading)) {
        var n = u$.get(e);
        if (n) var r = n.get(null);
        else {
            (n = new Map()), u$.set(e, n);
            for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < i.length; s++) {
                var a = i[s];
                ("LINK" === a.nodeName || "not all" !== a.getAttribute("media")) &&
                    (n.set(a.dataset.precedence, a), (r = a));
            }
            r && n.set(null, r);
        }
        (a = (i = t.instance).getAttribute("data-precedence")),
            (s = n.get(a) || r) === r && n.set(null, i),
            n.set(a, i),
            this.count++,
            (r = uK.bind(this)),
            i.addEventListener("load", r),
            i.addEventListener("error", r),
            s
                ? s.parentNode.insertBefore(i, s.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild),
            (t.state.loading |= 4);
    }
}
var uX = { $$typeof: T, Provider: null, Consumer: null, _currentValue: U, _currentValue2: U, _threadCount: 0 };
function uQ(e, t, n, r, i, s, a, o) {
    (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
        (this.callbackPriority = 0),
        (this.expirationTimes = eS(-1)),
        (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = eS(0)),
        (this.hiddenUpdates = eS(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = s),
        (this.onRecoverableError = a),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = o),
        (this.incompleteTransitions = new Map());
}
function uJ(e, t, n, r, i, s) {
    (i = i ? n7 : n7),
        null === r.context ? (r.context = i) : (r.pendingContext = i),
        ((r = i_(t)).payload = { element: n }),
        null !== (s = void 0 === s ? null : s) && (r.callback = s),
        null !== (n = iE(e, r, t)) && (o7(n, e, t), ih(n, e, t));
}
function uZ(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
    }
}
function u0(e, t) {
    uZ(e, t), (e = e.alternate) && uZ(e, t);
}
function u1(e) {
    if (13 === e.tag) {
        var t = n6(e, 0x4000000);
        null !== t && o7(t, e, 0x4000000), u0(e, 0x4000000);
    }
}
var u2 = !0;
function u3(e, t, n, r) {
    var i = M.T;
    M.T = null;
    var s = P.p;
    try {
        (P.p = 2), u4(e, t, n, r);
    } finally {
        (P.p = s), (M.T = i);
    }
}
function u6(e, t, n, r) {
    var i = M.T;
    M.T = null;
    var s = P.p;
    try {
        (P.p = 8), u4(e, t, n, r);
    } finally {
        (P.p = s), (M.T = i);
    }
}
function u4(e, t, n, r) {
    if (u2) {
        var i = u5(r);
        if (null === i) l0(e, t, r, u7, n), du(e, r);
        else if (
            (function (e, t, n, r, i) {
                switch (t) {
                    case "focusin":
                        return (dt = dd(dt, e, t, n, r, i)), !0;
                    case "dragenter":
                        return (dn = dd(dn, e, t, n, r, i)), !0;
                    case "mouseover":
                        return (dr = dd(dr, e, t, n, r, i)), !0;
                    case "pointerover":
                        var s = i.pointerId;
                        return di.set(s, dd(di.get(s) || null, e, t, n, r, i)), !0;
                    case "gotpointercapture":
                        return (s = i.pointerId), ds.set(s, dd(ds.get(s) || null, e, t, n, r, i)), !0;
                }
                return !1;
            })(i, e, t, n, r)
        )
            r.stopPropagation();
        else if ((du(e, r), 4 & t && -1 < dl.indexOf(e))) {
            for (; null !== i; ) {
                var s = eF(i);
                if (null !== s)
                    switch (s.tag) {
                        case 3:
                            if ((s = s.stateNode).current.memoizedState.isDehydrated) {
                                var a = em(s.pendingLanes);
                                if (0 !== a) {
                                    var o = s;
                                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; a; ) {
                                        var l = 1 << (31 - e_(a));
                                        (o.entanglements[1] |= l), (a &= ~l);
                                    }
                                    lP(s), 0 == (6 & ov) && ((o$ = ee() + 500), lU(0, !1));
                                }
                            }
                            break;
                        case 13:
                            null !== (o = n6(s, 2)) && o7(o, s, 2), lt(), u0(s, 2);
                    }
                if ((null === (s = u5(r)) && l0(e, t, r, u7, n), s === i)) break;
                i = s;
            }
            null !== i && r.stopPropagation();
        } else l0(e, t, r, null, n);
    }
}
function u5(e) {
    return u8((e = tp(e)));
}
var u7 = null;
function u8(e) {
    if (((u7 = null), null !== (e = eV(e)))) {
        var t = u(e);
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
    return (u7 = e), null;
}
function u9(e) {
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
            switch (et()) {
                case en:
                    return 2;
                case er:
                    return 8;
                case ei:
                case es:
                    return 32;
                case ea:
                    return 0x10000000;
                default:
                    return 32;
            }
        default:
            return 32;
    }
}
var de = !1,
    dt = null,
    dn = null,
    dr = null,
    di = new Map(),
    ds = new Map(),
    da = [],
    dl =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
            " ",
        );
function du(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            dt = null;
            break;
        case "dragenter":
        case "dragleave":
            dn = null;
            break;
        case "mouseover":
        case "mouseout":
            dr = null;
            break;
        case "pointerover":
        case "pointerout":
            di.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ds.delete(t.pointerId);
    }
}
function dd(e, t, n, r, i, s) {
    return (
        null === e || e.nativeEvent !== s
            ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }),
              null !== t && null !== (t = eF(t)) && u1(t))
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i)),
        e
    );
}
function dc(e) {
    var t = eV(e.target);
    if (null !== t) {
        var n = u(t);
        if (null !== n) {
            if (13 === (t = n.tag)) {
                if (null !== (t = d(n))) {
                    (e.blockedOn = t),
                        (function (e, t) {
                            var n = P.p;
                            try {
                                return (P.p = e), t();
                            } finally {
                                P.p = n;
                            }
                        })(e.priority, function () {
                            if (13 === n.tag) {
                                var e = o4(),
                                    t = n6(n, (e = eR(e)));
                                null !== t && o7(t, n, e), u0(n, e);
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
function d_(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = u5(e.nativeEvent);
        if (null !== n) return null !== (t = eF(n)) && u1(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (th = r), n.target.dispatchEvent(r), (th = null), t.shift();
    }
    return !0;
}
function df(e, t, n) {
    d_(e) && n.delete(t);
}
function dE() {
    (de = !1),
        null !== dt && d_(dt) && (dt = null),
        null !== dn && d_(dn) && (dn = null),
        null !== dr && d_(dr) && (dr = null),
        di.forEach(df),
        ds.forEach(df);
}
function dh(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), de || ((de = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, dE)));
}
var dp = null;
function dm(e) {
    dp !== e &&
        ((dp = e),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
            dp === e && (dp = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    r = e[t + 1],
                    i = e[t + 2];
                if ("function" != typeof r)
                    if (null === u8(r || n)) continue;
                    else break;
                var s = eF(n);
                null !== s &&
                    (e.splice(t, 3), (t -= 3), sL(s, { pending: !0, data: i, method: n.method, action: r }, r, i));
            }
        }));
}
function dg(e) {
    function t(t) {
        return dh(t, e);
    }
    null !== dt && dh(dt, e), null !== dn && dh(dn, e), null !== dr && dh(dr, e), di.forEach(t), ds.forEach(t);
    for (var n = 0; n < da.length; n++) {
        var r = da[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < da.length && null === (n = da[0]).blockedOn; ) dc(n), null === n.blockedOn && da.shift();
    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (r = 0; r < n.length; r += 3) {
            var i = n[r],
                s = n[r + 1],
                a = i[eL] || null;
            if ("function" == typeof s) a || dm(n);
            else if (a) {
                var o = null;
                if (s && s.hasAttribute("formAction")) {
                    if (((i = s), (a = s[eL] || null))) o = a.formAction;
                    else if (null !== u8(i)) continue;
                } else o = a.action;
                "function" == typeof o ? (n[r + 1] = o) : (n.splice(r, 3), (r -= 3)), dm(n);
            }
        }
}
function dA(e) {
    this._internalRoot = e;
}
function dI(e) {
    this._internalRoot = e;
}
(dI.prototype.render = dA.prototype.render =
    function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(l(409));
        uJ(t.current, o4(), e, t, null, null);
    }),
    (dI.prototype.unmount = dA.prototype.unmount =
        function () {
            var e = this._internalRoot;
            if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uJ(e.current, 2, null, e, null, null), lt(), (t[ew] = null);
            }
        }),
    (dI.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = eC();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < da.length && 0 !== t && t < da[n].priority; n++);
            da.splice(n, 0, e), 0 === n && dc(e);
        }
    });
var dT = a.version;
if ("19.1.0" !== dT) throw Error(l(527, dT, "19.1.0"));
if (
    ((P.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(l(188));
            throw Error(l(268, (e = Object.keys(e).join(","))));
        }
        return null ===
            (e =
                null !==
                (e = (function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = u(e))) throw Error(l(188));
                        return t !== e ? null : e;
                    }
                    for (var n = e, r = t; ; ) {
                        var i = n.return;
                        if (null === i) break;
                        var s = i.alternate;
                        if (null === s) {
                            if (null !== (r = i.return)) {
                                n = r;
                                continue;
                            }
                            break;
                        }
                        if (i.child === s.child) {
                            for (s = i.child; s; ) {
                                if (s === n) return c(i), e;
                                if (s === r) return c(i), t;
                                s = s.sibling;
                            }
                            throw Error(l(188));
                        }
                        if (n.return !== r.return) (n = i), (r = s);
                        else {
                            for (var a = !1, o = i.child; o; ) {
                                if (o === n) {
                                    (a = !0), (n = i), (r = s);
                                    break;
                                }
                                if (o === r) {
                                    (a = !0), (r = i), (n = s);
                                    break;
                                }
                                o = o.sibling;
                            }
                            if (!a) {
                                for (o = s.child; o; ) {
                                    if (o === n) {
                                        (a = !0), (n = s), (r = i);
                                        break;
                                    }
                                    if (o === r) {
                                        (a = !0), (r = s), (n = i);
                                        break;
                                    }
                                    o = o.sibling;
                                }
                                if (!a) throw Error(l(189));
                            }
                        }
                        if (n.alternate !== r) throw Error(l(190));
                    }
                    if (3 !== n.tag) throw Error(l(188));
                    return n.stateNode.current === n ? e : t;
                })(t))
                    ? (function e(t) {
                          var n = t.tag;
                          if (5 === n || 26 === n || 27 === n || 6 === n) return t;
                          for (t = t.child; null !== t; ) {
                              if (null !== (n = e(t))) return n;
                              t = t.sibling;
                          }
                          return null;
                      })(e)
                    : null)
            ? null
            : e.stateNode;
    }),
    "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
) {
    var dS = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dS.isDisabled && dS.supportsFiber)
        try {
            (eu = dS.inject({
                bundleType: 0,
                version: "19.1.0",
                rendererPackageName: "react-dom",
                currentDispatcherRef: M,
                reconcilerVersion: "19.1.0",
            })),
                (ed = dS);
        } catch (e) {}
}
t.createRoot = function (e, t) {
    if (!(n = e) || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)) throw Error(l(299));
    var n,
        r,
        i,
        s,
        a,
        o = !1,
        u = "",
        d = al,
        c = au,
        _ = ad,
        f = null;
    return (
        null != t &&
            (!0 === t.unstable_strictMode && (o = !0),
            void 0 !== t.identifierPrefix && (u = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (d = t.onUncaughtError),
            void 0 !== t.onCaughtError && (c = t.onCaughtError),
            void 0 !== t.onRecoverableError && (_ = t.onRecoverableError),
            void 0 !== t.unstable_transitionCallbacks && (f = t.unstable_transitionCallbacks)),
        (r = e),
        (i = 1),
        (s = !1),
        (a = o),
        (r = new uQ(r, i, s, u, d, c, _, null)),
        (i = 1),
        !0 === a && (i |= 24),
        (a = n9(3, null, null, i)),
        (r.current = a),
        (a.stateNode = r),
        (i = rX()),
        i.refCount++,
        (r.pooledCache = i),
        i.refCount++,
        (a.memoizedState = { element: null, isDehydrated: s, cache: i }),
        id(a),
        (t = r),
        (e[ew] = t.current),
        lJ(e),
        new dA(t)
    );
};
