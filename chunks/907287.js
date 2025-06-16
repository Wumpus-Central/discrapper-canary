var r = n(990393),
    i = 1,
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, o, s, l) {
    var c = n & i,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !c) return !1;
    for (var f = d; f--; ) {
        var _ = u[f];
        if (!(c ? _ in t : a.call(t, _))) return !1;
    }
    var p = l.get(e),
        h = l.get(t);
    if (p && h) return p == t && h == e;
    var m = !0;
    l.set(e, t), l.set(t, e);
    for (var g = c; ++f < d; ) {
        var E = e[(_ = u[f])],
            b = t[_];
        if (o) var y = c ? o(b, E, _, t, e, l) : o(E, b, _, e, t, l);
        if (!(void 0 === y ? E === b || s(E, b, n, o, l) : y)) {
            m = !1;
            break;
        }
        g || (g = 'constructor' == _);
    }
    if (m && !g) {
        var O = e.constructor,
            v = t.constructor;
        O != v && 'constructor' in e && 'constructor' in t && !('function' == typeof O && O instanceof O && 'function' == typeof v && v instanceof v) && (m = !1);
    }
    return l.delete(e), l.delete(t), m;
};
