var i = n(821164),
    r = 1,
    a = Object.prototype.hasOwnProperty;
function s(e, t, n, s, o, l) {
    var u = n & r,
        c = i(e),
        d = c.length;
    if (d != i(t).length && !u) return !1;
    for (var f = d; f--; ) {
        var _ = c[f];
        if (!(u ? _ in t : a.call(t, _))) return !1;
    }
    var p = l.get(e);
    if (p && l.get(t)) return p == t;
    var h = !0;
    l.set(e, t), l.set(t, e);
    for (var m = u; ++f < d; ) {
        var g = e[(_ = c[f])],
            E = t[_];
        if (s) var v = u ? s(E, g, _, t, e, l) : s(g, E, _, e, t, l);
        if (!(void 0 === v ? g === E || o(g, E, n, s, l) : v)) {
            h = !1;
            break;
        }
        m || (m = 'constructor' == _);
    }
    if (h && !m) {
        var y = e.constructor,
            I = t.constructor;
        y != I && 'constructor' in e && 'constructor' in t && !('function' == typeof y && y instanceof y && 'function' == typeof I && I instanceof I) && (h = !1);
    }
    return l.delete(e), l.delete(t), h;
}
e.exports = s;
