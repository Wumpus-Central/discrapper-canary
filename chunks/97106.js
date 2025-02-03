n.d(t, { Z: () => s });
var i = n(347941),
    r = 1,
    a = Object.prototype.hasOwnProperty;
let s = function (e, t, n, s, o, l) {
    var u = n & r,
        c = (0, i.Z)(e),
        d = c.length;
    if (d != (0, i.Z)(t).length && !u) return !1;
    for (var f = d; f--; ) {
        var _ = c[f];
        if (!(u ? _ in t : a.call(t, _))) return !1;
    }
    var p = l.get(e),
        h = l.get(t);
    if (p && h) return p == t && h == e;
    var m = !0;
    l.set(e, t), l.set(t, e);
    for (var g = u; ++f < d; ) {
        var E = e[(_ = c[f])],
            v = t[_];
        if (s) var y = u ? s(v, E, _, t, e, l) : s(E, v, _, e, t, l);
        if (!(void 0 === y ? E === v || o(E, v, n, s, l) : y)) {
            m = !1;
            break;
        }
        g || (g = 'constructor' == _);
    }
    if (m && !g) {
        var I = e.constructor,
            b = t.constructor;
        I != b && 'constructor' in e && 'constructor' in t && !('function' == typeof I && I instanceof I && 'function' == typeof b && b instanceof b) && (m = !1);
    }
    return l.delete(e), l.delete(t), m;
};
