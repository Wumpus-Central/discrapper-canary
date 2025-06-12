var r = n(990393),
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
    var p = l.get(e),
        h = l.get(t);
    if (p && h) return p == t && h == e;
    var m = !0;
    l.set(e, t), l.set(t, e);
    for (var g = c; ++_ < d; ) {
        var E = e[(f = u[_])],
            b = t[f];
        if (o) var y = c ? o(b, E, f, t, e, l) : o(E, b, f, e, t, l);
        if (!(void 0 === y ? E === b || s(E, b, n, o, l) : y)) {
            m = !1;
            break;
        }
        g || (g = 'constructor' == f);
    }
    if (m && !g) {
        var O = e.constructor,
            v = t.constructor;
        O != v && 'constructor' in e && 'constructor' in t && !('function' == typeof O && O instanceof O && 'function' == typeof v && v instanceof v) && (m = !1);
    }
    return l.delete(e), l.delete(t), m;
};
