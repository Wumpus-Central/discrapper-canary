var n = Array.prototype.slice,
    i = r(66529),
    o = r(295394),
    a = (e.exports = function (e, t, r) {
        return (
            r || (r = {}),
            e === t ||
                (e instanceof Date && t instanceof Date
                    ? e.getTime() === t.getTime()
                    : e && t && ("object" == typeof e || "object" == typeof t)
                      ? (function (e, t, r) {
                            if (null == e || null == t || e.prototype !== t.prototype) return !1;
                            if (o(e)) return !!o(t) && a((e = n.call(e)), (t = n.call(t)), r);
                            if (s(e)) {
                                if (!s(t) || e.length !== t.length) return !1;
                                for (l = 0; l < e.length; l++) if (e[l] !== t[l]) return !1;
                                return !0;
                            }
                            try {
                                var l,
                                    u,
                                    c = i(e),
                                    f = i(t);
                            } catch (e) {
                                return !1;
                            }
                            if (c.length != f.length) return !1;
                            for (c.sort(), f.sort(), l = c.length - 1; l >= 0; l--) if (c[l] != f[l]) return !1;
                            for (l = c.length - 1; l >= 0; l--) if (!a(e[(u = c[l])], t[u], r)) return !1;
                            return typeof e == typeof t;
                        })(e, t, r)
                      : r.strict
                        ? e === t
                        : e == t)
        );
    });
function s(e) {
    return (
        !!e &&
        "object" == typeof e &&
        "number" == typeof e.length &&
        "function" == typeof e.copy &&
        "function" == typeof e.slice &&
        (!(e.length > 0) || "number" == typeof e[0])
    );
}
