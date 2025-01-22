var i = r(347941),
    a = 1,
    o = Object.prototype.hasOwnProperty;
function s(e, n, r, s, l, u) {
    var c = r & a,
        d = (0, i.Z)(e),
        f = d.length;
    if (f != (0, i.Z)(n).length && !c) return !1;
    for (var p = f; p--; ) {
        var h = d[p];
        if (!(c ? h in n : o.call(n, h))) return !1;
    }
    var _ = u.get(e),
        m = u.get(n);
    if (_ && m) return _ == n && m == e;
    var g = !0;
    u.set(e, n), u.set(n, e);
    for (var E = c; ++p < f; ) {
        var v = e[(h = d[p])],
            y = n[h];
        if (s) var b = c ? s(y, v, h, n, e, u) : s(v, y, h, e, n, u);
        if (!(void 0 === b ? v === y || l(v, y, r, s, u) : b)) {
            g = !1;
            break;
        }
        E || (E = 'constructor' == h);
    }
    if (g && !E) {
        var I = e.constructor,
            T = n.constructor;
        I != T && 'constructor' in e && 'constructor' in n && !('function' == typeof I && I instanceof I && 'function' == typeof T && T instanceof T) && (g = !1);
    }
    return u.delete(e), u.delete(n), g;
}
n.Z = s;
