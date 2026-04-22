"use strict";
n.d(t, { Wj: () => c, e: () => d, h1: () => u, hZ: () => l, yE: () => _ });
var r = n(284009),
    i = n.n(r),
    s = n(357758),
    a = n(810531),
    o = n(52133);
function l(e, t, n) {
    return f(e[t], n) ? e : { ...e, [t]: n };
}
function u(e, t) {
    let n = null;
    for (let r in t) {
        let i = e[r],
            s = t[r];
        void 0 === s || f(i, s) || (null == n ? (n = { ...e, [r]: s }) : (n[r] = s));
    }
    return null != n ? n : e;
}
function d(e, t, n) {
    return (i()(null == t || t[a.L] === e, "Existing record type does not match the expected type"),
    null != t &&
        (function (e, t) {
            if (e === t) return !0;
            for (let n of Object.keys(e)) if (!f(e[n], t[n])) return !1;
            return !0;
        })(t, n))
        ? t
        : _(e, n);
}
function c(e, t) {
    return "object" == typeof t && null != t && (a.L in t && t[a.L]) === e;
}
function _(e, t) {
    return (t[a.L] = e), t;
}
function f(e, t) {
    return null == e || null == t
        ? e === t
        : e === t ||
              (e instanceof Date && t instanceof Date
                  ? e.getTime() === t.getTime()
                  : e instanceof Set && t instanceof Set
                    ? (0, s._)(e, t)
                    : Array.isArray(e) && Array.isArray(t)
                      ? (0, o.v)(e, t)
                      : "object" == typeof e && "object" == typeof t && (0, o.A)(e, t));
}
