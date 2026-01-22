var r = n(127375),
    i = n(382708),
    a = n(360087),
    s = 1,
    o = 2;
e.exports = function (e, t, n, l, c, u) {
    var d = n & s,
        f = e.length,
        p = t.length;
    if (f != p && !(d && p > f)) return !1;
    var _ = u.get(e),
        h = u.get(t);
    if (_ && h) return _ == t && h == e;
    var m = -1,
        g = !0,
        E = n & o ? new r() : void 0;
    for (u.set(e, t), u.set(t, e); ++m < f; ) {
        var b = e[m],
            y = t[m];
        if (l) var O = d ? l(y, b, m, t, e, u) : l(b, y, m, e, t, u);
        if (void 0 !== O) {
            if (O) continue;
            g = !1;
            break;
        }
        if (E) {
            if (
                !i(t, function (e, t) {
                    if (!a(E, t) && (b === e || c(b, e, n, l, u))) return E.push(t);
                })
            ) {
                g = !1;
                break;
            }
        } else if (!(b === y || c(b, y, n, l, u))) {
            g = !1;
            break;
        }
    }
    return u.delete(e), u.delete(t), g;
};
