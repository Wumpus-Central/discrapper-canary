"use strict";
n.d(t, { Wj: () => d, e: () => c, h1: () => u, hZ: () => l, yE: () => _ });
var r = n(284009),
    i = n.n(r),
    a = n(357758),
    s = n(810531),
    o = n(52133);
function l(e, t, n) {
    return f(e[t], n) ? e : { ...e, [t]: n };
}
function u(e, t) {
    let n = null;
    for (let r in t) {
        let i = e[r],
            a = t[r];
        void 0 === a || f(i, a) || (null == n ? (n = { ...e, [r]: a }) : (n[r] = a));
    }
    return null != n ? n : e;
}
function c(e, t, n) {
    return (i()(null == t || t[s.L] === e, "Existing record type does not match the expected type"),
    null != t && p(t, n))
        ? t
        : _(e, n);
}
function d(e, t) {
    return "object" == typeof t && null != t && (s.L in t && t[s.L]) === e;
}
function _(e, t) {
    return (t[s.L] = e), t;
}
function f(e, t) {
    return null == e || null == t
        ? e === t
        : e === t ||
              (e instanceof Date && t instanceof Date
                  ? e.getTime() === t.getTime()
                  : e instanceof Set && t instanceof Set
                    ? (0, a._)(e, t)
                    : Array.isArray(e) && Array.isArray(t)
                      ? (0, o.v)(e, t)
                      : "object" == typeof e && "object" == typeof t && (0, o.A)(e, t));
}
function p(e, t) {
    if (e === t) return !0;
    for (let n of Object.keys(e)) {
        let r = n;
        if (!f(e[r], t[r])) return !1;
    }
    return !0;
}
