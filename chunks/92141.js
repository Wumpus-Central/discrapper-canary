var r = n(821164),
    i = 1,
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, o, s, l) {
    var c = n & i,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !c) return !1;
    for (var _ = d; _--; ) {
        var f = u[_];
        if (!(c ? f in t : a.call(t, f))) return !1;
    }
    var p = l.get(e);
    if (p && l.get(t)) return p == t;
    var h = !0;
    (l.set(e, t), l.set(t, e));
    for (var m = c; ++_ < d; ) {
        var g = e[(f = u[_])],
            E = t[f];
        if (o) var b = c ? o(E, g, f, t, e, l) : o(g, E, f, e, t, l);
        if (!(void 0 === b ? g === E || s(g, E, n, o, l) : b)) {
            h = !1;
            break;
        }
        m || (m = 'constructor' == f);
    }
    if (h && !m) {
        var y = e.constructor,
            O = t.constructor;
        y != O && 'constructor' in e && 'constructor' in t && !('function' == typeof y && y instanceof y && 'function' == typeof O && O instanceof O) && (h = !1);
    }
    return (l.delete(e), l.delete(t), h);
};
