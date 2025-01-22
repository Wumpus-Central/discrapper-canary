var i = r(821164),
    a = 1,
    o = Object.prototype.hasOwnProperty;
function s(e, n, r, s, l, u) {
    var c = r & a,
        d = i(e),
        f = d.length;
    if (f != i(n).length && !c) return !1;
    for (var p = f; p--; ) {
        var h = d[p];
        if (!(c ? h in n : o.call(n, h))) return !1;
    }
    var _ = u.get(e);
    if (_ && u.get(n)) return _ == n;
    var m = !0;
    u.set(e, n), u.set(n, e);
    for (var g = c; ++p < f; ) {
        var E = e[(h = d[p])],
            v = n[h];
        if (s) var y = c ? s(v, E, h, n, e, u) : s(E, v, h, e, n, u);
        if (!(void 0 === y ? E === v || l(E, v, r, s, u) : y)) {
            m = !1;
            break;
        }
        g || (g = 'constructor' == h);
    }
    if (m && !g) {
        var b = e.constructor,
            I = n.constructor;
        b != I && 'constructor' in e && 'constructor' in n && !('function' == typeof b && b instanceof b && 'function' == typeof I && I instanceof I) && (m = !1);
    }
    return u.delete(e), u.delete(n), m;
}
e.exports = s;
