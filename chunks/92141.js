var r = n(821164),
    i = 1,
    o = Object.prototype.hasOwnProperty;
function a(e, t, n, a, s, l) {
    var c = n & i,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !c) return !1;
    for (var f = d; f--; ) {
        var p = u[f];
        if (!(c ? p in t : o.call(t, p))) return !1;
    }
    var _ = l.get(e);
    if (_ && l.get(t)) return _ == t;
    var h = !0;
    l.set(e, t), l.set(t, e);
    for (var m = c; ++f < d; ) {
        var g = e[(p = u[f])],
            E = t[p];
        if (a) var v = c ? a(E, g, p, t, e, l) : a(g, E, p, e, t, l);
        if (!(void 0 === v ? g === E || s(g, E, n, a, l) : v)) {
            h = !1;
            break;
        }
        m || (m = 'constructor' == p);
    }
    if (h && !m) {
        var b = e.constructor,
            y = t.constructor;
        b != y && 'constructor' in e && 'constructor' in t && !('function' == typeof b && b instanceof b && 'function' == typeof y && y instanceof y) && (h = !1);
    }
    return l.delete(e), l.delete(t), h;
}
e.exports = a;
