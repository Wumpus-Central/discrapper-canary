var r = Array.prototype.slice,
    i = n(66529),
    a = n(295394),
    s = (e.exports = function (e, t, n) {
        return (
            n || (n = {}),
            e === t ||
                (e instanceof Date && t instanceof Date
                    ? e.getTime() === t.getTime()
                    : e && t && ("object" == typeof e || "object" == typeof t)
                      ? c(e, t, n)
                      : n.strict
                        ? e === t
                        : e == t)
        );
    });
function o(e) {
    return null == e;
}
function l(e) {
    return (
        !!e &&
        "object" == typeof e &&
        "number" == typeof e.length &&
        "function" == typeof e.copy &&
        "function" == typeof e.slice &&
        (!(e.length > 0) || "number" == typeof e[0])
    );
}
function c(e, t, n) {
    var c, u;
    if (o(e) || o(t) || e.prototype !== t.prototype) return !1;
    if (a(e)) return !!a(t) && s((e = r.call(e)), (t = r.call(t)), n);
    if (l(e)) {
        if (!l(t) || e.length !== t.length) return !1;
        for (c = 0; c < e.length; c++) if (e[c] !== t[c]) return !1;
        return !0;
    }
    try {
        var d = i(e),
            f = i(t);
    } catch (e) {
        return !1;
    }
    if (d.length != f.length) return !1;
    for (d.sort(), f.sort(), c = d.length - 1; c >= 0; c--) if (d[c] != f[c]) return !1;
    for (c = d.length - 1; c >= 0; c--) if (!s(e[(u = d[c])], t[u], n)) return !1;
    return typeof e == typeof t;
}
