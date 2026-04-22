var r = n(220350),
    i = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, s, a, o) {
    var l = 1 & n,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !l) return !1;
    for (var c = d; c--; ) {
        var _ = u[c];
        if (!(l ? _ in t : i.call(t, _))) return !1;
    }
    var f = o.get(e),
        E = o.get(t);
    if (f && E) return f == t && E == e;
    var h = !0;
    o.set(e, t), o.set(t, e);
    for (var p = l; ++c < d; ) {
        var m = e[(_ = u[c])],
            g = t[_];
        if (s) var A = l ? s(g, m, _, t, e, o) : s(m, g, _, e, t, o);
        if (!(void 0 === A ? m === g || a(m, g, n, s, o) : A)) {
            h = !1;
            break;
        }
        p || (p = "constructor" == _);
    }
    if (h && !p) {
        var I = e.constructor,
            T = t.constructor;
        I != T &&
            "constructor" in e &&
            "constructor" in t &&
            !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) &&
            (h = !1);
    }
    return o.delete(e), o.delete(t), h;
};
