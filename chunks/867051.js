var i = n(284009),
    r = n.n(i),
    a = n(357758),
    s = n(810531),
    l = n(52133);
function o(e, t) {
    return ((t[s.L] = e), t);
}
function d(e, t) {
    return null == e || null == t
        ? e === t
        : e === t ||
              (e instanceof Date && t instanceof Date
                  ? e.getTime() === t.getTime()
                  : e instanceof Set && t instanceof Set
                    ? (0, a._)(e, t)
                    : Array.isArray(e) && Array.isArray(t)
                      ? (0, l.v)(e, t)
                      : "object" == typeof e && "object" == typeof t && (0, l.A)(e, t));
}
n.d(
    t,
    {},
    {
        Wj: function (e, t) {
            return "object" == typeof t && null != t && (s.L in t && t[s.L]) === e;
        },
        e: function (e, t, n) {
            return (r()(null == t || t[s.L] === e, "Existing record type does not match the expected type"),
            null != t &&
                (function (e, t) {
                    if (e === t) return !0;
                    for (let n of Object.keys(e)) if (!d(e[n], t[n])) return !1;
                    return !0;
                })(t, n))
                ? t
                : o(e, n);
        },
        h1: function (e, t) {
            let n = null;
            for (let i in t) {
                let r = e[i],
                    a = t[i];
                void 0 === a || d(r, a) || (null == n ? (n = { ...e, [i]: a }) : (n[i] = a));
            }
            return null != n ? n : e;
        },
        hZ: function (e, t, n) {
            return d(e[t], n) ? e : { ...e, [t]: n };
        },
        yE: o,
    },
);
