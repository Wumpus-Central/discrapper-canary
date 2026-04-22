var r = n(127375),
    i = n(382708),
    s = n(360087);
e.exports = function (e, t, n, a, o, l) {
    var u = 1 & n,
        d = e.length,
        c = t.length;
    if (d != c && !(u && c > d)) return !1;
    var _ = l.get(e),
        f = l.get(t);
    if (_ && f) return _ == t && f == e;
    var E = -1,
        h = !0,
        p = 2 & n ? new r() : void 0;
    for (l.set(e, t), l.set(t, e); ++E < d; ) {
        var m = e[E],
            g = t[E];
        if (a) var A = u ? a(g, m, E, t, e, l) : a(m, g, E, e, t, l);
        if (void 0 !== A) {
            if (A) continue;
            h = !1;
            break;
        }
        if (p) {
            if (
                !i(t, function (e, t) {
                    if (!s(p, t) && (m === e || o(m, e, n, a, l))) return p.push(t);
                })
            ) {
                h = !1;
                break;
            }
        } else if (!(m === g || o(m, g, n, a, l))) {
            h = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), h;
};
