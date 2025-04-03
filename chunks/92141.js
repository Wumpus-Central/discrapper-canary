var r = n(821164),
    i = 1,
    o = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, a, s, l) {
    var c = n & i,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !c) return !1;
    for (var f = d; f--; ) {
        var _ = u[f];
        if (!(c ? _ in t : o.call(t, _))) return !1;
    }
    var p = l.get(e);
    if (p && l.get(t)) return p == t;
    var h = !0;
    l.set(e, t), l.set(t, e);
    for (var m = c; ++f < d; ) {
        var g = e[(_ = u[f])],
            E = t[_];
        if (a) var b = c ? a(E, g, _, t, e, l) : a(g, E, _, e, t, l);
        if (!(void 0 === b ? g === E || s(g, E, n, a, l) : b)) {
            h = !1;
            break;
        }
        m || (m = 'constructor' == _);
    }
    if (h && !m) {
        var y = e.constructor,
            v = t.constructor;
        y != v && 'constructor' in e && 'constructor' in t && !('function' == typeof y && y instanceof y && 'function' == typeof v && v instanceof v) && (h = !1);
    }
    return l.delete(e), l.delete(t), h;
};
