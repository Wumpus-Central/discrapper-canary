var i = n(220350),
    r = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, s, a, o) {
    var l = 1 & n,
        u = i(e),
        c = u.length;
    if (c != i(t).length && !l) return !1;
    for (var d = c; d--; ) {
        var _ = u[d];
        if (!(l ? _ in t : r.call(t, _))) return !1;
    }
    var h = o.get(e),
        f = o.get(t);
    if (h && f) return h == t && f == e;
    var p = !0;
    o.set(e, t), o.set(t, e);
    for (var E = l; ++d < c; ) {
        var m = e[(_ = u[d])],
            g = t[_];
        if (s) var A = l ? s(g, m, _, t, e, o) : s(m, g, _, e, t, o);
        if (!(void 0 === A ? m === g || a(m, g, n, s, o) : A)) {
            p = !1;
            break;
        }
        E || (E = "constructor" == _);
    }
    if (p && !E) {
        var I = e.constructor,
            T = t.constructor;
        I != T &&
            "constructor" in e &&
            "constructor" in t &&
            !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) &&
            (p = !1);
    }
    return o.delete(e), o.delete(t), p;
};
