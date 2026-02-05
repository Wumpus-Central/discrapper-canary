"use strict";
n.d(t, { cd: () => l });
var r = n(550505),
    i = n(318503),
    a = n(869922),
    s = n(587100);
function o(e, t = 100, n = Infinity) {
    try {
        return u("", e, t, n);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
function l(e, t = 3, n = 102400) {
    let r = o(e, t);
    return f(r) > n ? l(e, t - 1, n) : r;
}
function u(e, t, n = Infinity, r = Infinity, s = (0, i.s)()) {
    let [o, l] = s;
    if (null == t || (["number", "boolean", "string"].includes(typeof t) && !Number.isNaN(t))) return t;
    let d = c(e, t);
    if (!d.startsWith("[object ")) return d;
    if (t.__sentry_skip_normalization__) return t;
    let _ =
        "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
    if (0 === _) return d.replace("object ", "");
    if (o(t)) return "[Circular ~]";
    let f = t;
    if (f && "function" == typeof f.toJSON)
        try {
            let e = f.toJSON();
            return u("", e, _ - 1, r, s);
        } catch (e) {}
    let p = Array.isArray(t) ? [] : {},
        h = 0,
        m = (0, a.W4)(t);
    for (let e in m) {
        if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
        if (h >= r) {
            p[e] = "[MaxProperties ~]";
            break;
        }
        let t = m[e];
        (p[e] = u(e, t, _ - 1, r, s)), h++;
    }
    return l(t), p;
}
function c(e, t) {
    try {
        if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
        if ("domainEmitter" === e) return "[DomainEmitter]";
        if ("u" > typeof global && t === global) return "[Global]";
        if ("u" > typeof window && t === window) return "[Window]";
        if ("u" > typeof document && t === document) return "[Document]";
        if ((0, r.L2)(t)) return "[VueViewModel]";
        if ((0, r.mE)(t)) return "[SyntheticEvent]";
        if ("number" == typeof t && t != t) return "[NaN]";
        if ("function" == typeof t) return `[Function: ${(0, s.qQ)(t)}]`;
        if ("symbol" == typeof t) return `[${String(t)}]`;
        if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
        let n = d(t);
        if (/^HTML(\w*)Element$/.test(n)) return `[HTMLElement: ${n}]`;
        return `[object ${n}]`;
    } catch (e) {
        return `**non-serializable** (${e})`;
    }
}
function d(e) {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : "null prototype";
}
function _(e) {
    return ~-encodeURI(e).split(/%..|./).length;
}
function f(e) {
    return _(JSON.stringify(e));
}
