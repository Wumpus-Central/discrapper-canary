var r = Array.prototype.slice,
    i = n(66529),
    s = n(295394),
    a = (e.exports = function (e, t, n) {
        return (
            n || (n = {}),
            e === t ||
                (e instanceof Date && t instanceof Date
                    ? e.getTime() === t.getTime()
                    : e && t && ("object" == typeof e || "object" == typeof t)
                      ? (function (e, t, n) {
                            if (null == e || null == t || e.prototype !== t.prototype) return !1;
                            if (s(e)) return !!s(t) && a((e = r.call(e)), (t = r.call(t)), n);
                            if (o(e)) {
                                if (!o(t) || e.length !== t.length) return !1;
                                for (l = 0; l < e.length; l++) if (e[l] !== t[l]) return !1;
                                return !0;
                            }
                            try {
                                var l,
                                    u,
                                    d = i(e),
                                    c = i(t);
                            } catch (e) {
                                return !1;
                            }
                            if (d.length != c.length) return !1;
                            for (d.sort(), c.sort(), l = d.length - 1; l >= 0; l--) if (d[l] != c[l]) return !1;
                            for (l = d.length - 1; l >= 0; l--) if (!a(e[(u = d[l])], t[u], n)) return !1;
                            return typeof e == typeof t;
                        })(e, t, n)
                      : n.strict
                        ? e === t
                        : e == t)
        );
    });
function o(e) {
    return (
        !!e &&
        "object" == typeof e &&
        "number" == typeof e.length &&
        "function" == typeof e.copy &&
        "function" == typeof e.slice &&
        (!(e.length > 0) || "number" == typeof e[0])
    );
}
