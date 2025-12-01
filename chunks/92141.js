var r = n(821164),
    i = 1,
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, o, s, l) {
    var c = n & i,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !c) return !1;
    for (var f = d; f--; ) {
        var p = u[f];
        if (!(c ? p in t : a.call(t, p))) return !1;
    }
    var _ = l.get(e);
    if (_ && l.get(t)) return _ == t;
    var m = !0;
    l.set(e, t), l.set(t, e);
    for (var h = c; ++f < d; ) {
        var g = e[(p = u[f])],
            E = t[p];
        if (o) var b = c ? o(E, g, p, t, e, l) : o(g, E, p, e, t, l);
        if (!(void 0 === b ? g === E || s(g, E, n, o, l) : b)) {
            m = !1;
            break;
        }
        h || (h = "constructor" == p);
    }
    if (m && !h) {
        var y = e.constructor,
            O = t.constructor;
        y != O &&
            "constructor" in e &&
            "constructor" in t &&
            !("function" == typeof y && y instanceof y && "function" == typeof O && O instanceof O) &&
            (m = !1);
    }
    return l.delete(e), l.delete(t), m;
};
