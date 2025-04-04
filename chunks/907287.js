var r = a(990393),
    n = Object.prototype.hasOwnProperty;
t.exports = function (t, e, a, _, o, i) {
    var c = 1 & a,
        s = r(t),
        E = s.length;
    if (E != r(e).length && !c) return !1;
    for (var l = E; l--; ) {
        var u = s[l];
        if (!(c ? u in e : n.call(e, u))) return !1;
    }
    var I = i.get(t),
        R = i.get(e);
    if (I && R) return I == e && R == t;
    var d = !0;
    i.set(t, e), i.set(e, t);
    for (var A = c; ++l < E; ) {
        var f = t[(u = s[l])],
            p = e[u];
        if (_) var N = c ? _(p, f, u, e, t, i) : _(f, p, u, t, e, i);
        if (!(void 0 === N ? f === p || o(f, p, a, _, i) : N)) {
            d = !1;
            break;
        }
        A || (A = 'constructor' == u);
    }
    if (d && !A) {
        var T = t.constructor,
            L = e.constructor;
        T != L && 'constructor' in t && 'constructor' in e && !('function' == typeof T && T instanceof T && 'function' == typeof L && L instanceof L) && (d = !1);
    }
    return i.delete(t), i.delete(e), d;
};
