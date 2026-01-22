var r = n(220350),
    i = 1,
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, s, o, l) {
    var c = n & i,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !c) return !1;
    for (var f = d; f--; ) {
        var p = u[f];
        if (!(c ? p in t : a.call(t, p))) return !1;
    }
    var _ = l.get(e),
        h = l.get(t);
    if (_ && h) return _ == t && h == e;
    var m = !0;
    l.set(e, t), l.set(t, e);
    for (var g = c; ++f < d; ) {
        var E = e[(p = u[f])],
            b = t[p];
        if (s) var y = c ? s(b, E, p, t, e, l) : s(E, b, p, e, t, l);
        if (!(void 0 === y ? E === b || o(E, b, n, s, l) : y)) {
            m = !1;
            break;
        }
        g || (g = "constructor" == p);
    }
    if (m && !g) {
        var O = e.constructor,
            A = t.constructor;
        O != A &&
            "constructor" in e &&
            "constructor" in t &&
            !("function" == typeof O && O instanceof O && "function" == typeof A && A instanceof A) &&
            (m = !1);
    }
    return l.delete(e), l.delete(t), m;
};
