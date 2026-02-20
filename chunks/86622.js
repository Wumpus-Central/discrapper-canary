"use strict";
n.d(t, { cd: () => l });
var r = n(875565),
    i = n(314875),
    s = n(690094),
    a = n(968072);
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
function u(e, t, n = Infinity, r = Infinity, a = (0, i.s)()) {
    let [o, l] = a;
    if (null == t || ["boolean", "string"].includes(typeof t) || ("number" == typeof t && Number.isFinite(t))) return t;
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
            return u("", e, _ - 1, r, a);
        } catch (e) {}
    let p = Array.isArray(t) ? [] : {},
        h = 0,
        m = (0, s.W4)(t);
    for (let e in m) {
        if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
        if (h >= r) {
            p[e] = "[MaxProperties ~]";
            break;
        }
        let t = m[e];
        (p[e] = u(e, t, _ - 1, r, a)), h++;
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
        if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
        if ("function" == typeof t) return `[Function: ${(0, a.qQ)(t)}]`;
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
