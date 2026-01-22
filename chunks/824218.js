n.d(t, { cd: () => l });
var r = n(550505),
    i = n(318503),
    a = n(869922),
    s = n(587100);
function o(e, t = 100, n = Infinity) {
    try {
        return c("", e, t, n);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
function l(e, t = 3, n = 102400) {
    let r = o(e, t);
    return p(r) > n ? l(e, t - 1, n) : r;
}
function c(e, t, n = Infinity, r = Infinity, s = (0, i.s)()) {
    let [o, l] = s;
    if (null == t || (["number", "boolean", "string"].includes(typeof t) && !Number.isNaN(t))) return t;
    let d = u(e, t);
    if (!d.startsWith("[object ")) return d;
    if (t.__sentry_skip_normalization__) return t;
    let f =
        "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : n;
    if (0 === f) return d.replace("object ", "");
    if (o(t)) return "[Circular ~]";
    let p = t;
    if (p && "function" == typeof p.toJSON)
        try {
            let e = p.toJSON();
            return c("", e, f - 1, r, s);
        } catch (e) {}
    let _ = Array.isArray(t) ? [] : {},
        h = 0,
        m = (0, a.W4)(t);
    for (let e in m) {
        if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
        if (h >= r) {
            _[e] = "[MaxProperties ~]";
            break;
        }
        let t = m[e];
        (_[e] = c(e, t, f - 1, r, s)), h++;
    }
    return l(t), _;
}
function u(e, t) {
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
function f(e) {
    return ~-encodeURI(e).split(/%..|./).length;
}
function p(e) {
    return f(JSON.stringify(e));
}
