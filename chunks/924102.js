r.d(t, { Z: () => s });
var n = r(675717),
    o = r(595250),
    a = r(220955),
    i = Math.max,
    l = Math.min;
let s = function (e, t, r) {
    var s,
        u,
        c,
        p,
        f,
        d,
        h = 0,
        b = !1,
        v = !1,
        g = !0;
    if ('function' != typeof e) throw TypeError('Expected a function');
    function x(t) {
        var r = s,
            n = u;
        return (s = u = void 0), (h = t), (p = e.apply(n, r));
    }
    function y(e) {
        var r = e - d,
            n = e - h;
        return void 0 === d || r >= t || r < 0 || (v && n >= c);
    }
    function m() {
        var e,
            r,
            n,
            a = (0, o.Z)();
        if (y(a)) return w(a);
        f = setTimeout(m, ((e = a - d), (r = a - h), (n = t - e), v ? l(n, c - r) : n));
    }
    function w(e) {
        return ((f = void 0), g && s) ? x(e) : ((s = u = void 0), p);
    }
    function Z() {
        var e,
            r = (0, o.Z)(),
            n = y(r);
        if (((s = arguments), (u = this), (d = r), n)) {
            if (void 0 === f) return (h = e = d), (f = setTimeout(m, t)), b ? x(e) : p;
            if (v) return clearTimeout(f), (f = setTimeout(m, t)), x(d);
        }
        return void 0 === f && (f = setTimeout(m, t)), p;
    }
    return (
        (t = (0, a.Z)(t) || 0),
        (0, n.Z)(r) && ((b = !!r.leading), (c = (v = 'maxWait' in r) ? i((0, a.Z)(r.maxWait) || 0, t) : c), (g = 'trailing' in r ? !!r.trailing : g)),
        (Z.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (s = d = u = f = void 0);
        }),
        (Z.flush = function () {
            return void 0 === f ? p : w((0, o.Z)());
        }),
        Z
    );
};
