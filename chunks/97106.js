r.d(t, { Z: () => a });
var n = r(347941),
    o = Object.prototype.hasOwnProperty;
let a = function (e, t, r, a, i, l) {
    var s = 1 & r,
        u = (0, n.Z)(e),
        c = u.length;
    if (c != (0, n.Z)(t).length && !s) return !1;
    for (var p = c; p--; ) {
        var f = u[p];
        if (!(s ? f in t : o.call(t, f))) return !1;
    }
    var d = l.get(e),
        h = l.get(t);
    if (d && h) return d == t && h == e;
    var b = !0;
    l.set(e, t), l.set(t, e);
    for (var v = s; ++p < c; ) {
        var g = e[(f = u[p])],
            x = t[f];
        if (a) var y = s ? a(x, g, f, t, e, l) : a(g, x, f, e, t, l);
        if (!(void 0 === y ? g === x || i(g, x, r, a, l) : y)) {
            b = !1;
            break;
        }
        v || (v = 'constructor' == f);
    }
    if (b && !v) {
        var m = e.constructor,
            w = t.constructor;
        m != w && 'constructor' in e && 'constructor' in t && !('function' == typeof m && m instanceof m && 'function' == typeof w && w instanceof w) && (b = !1);
    }
    return l.delete(e), l.delete(t), b;
};
