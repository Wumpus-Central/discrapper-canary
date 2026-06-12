var i = n(127375),
    r = n(382708),
    s = n(360087);
e.exports = function (e, t, n, a, o, l) {
    var u = 1 & n,
        c = e.length,
        d = t.length;
    if (c != d && !(u && d > c)) return !1;
    var _ = l.get(e),
        h = l.get(t);
    if (_ && h) return _ == t && h == e;
    var f = -1,
        p = !0,
        E = 2 & n ? new i() : void 0;
    for (l.set(e, t), l.set(t, e); ++f < c; ) {
        var m = e[f],
            g = t[f];
        if (a) var A = u ? a(g, m, f, t, e, l) : a(m, g, f, e, t, l);
        if (void 0 !== A) {
            if (A) continue;
            p = !1;
            break;
        }
        if (E) {
            if (
                !r(t, function (e, t) {
                    if (!s(E, t) && (m === e || o(m, e, n, a, l))) return E.push(t);
                })
            ) {
                p = !1;
                break;
            }
        } else if (!(m === g || o(m, g, n, a, l))) {
            p = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), p;
};
