"use strict";
r.d(t, { A: () => s });
var n = r(842922),
    o = r(121177),
    a = r(522565),
    i = Math.max,
    l = Math.min;
let s = function (e, t, r) {
    var s,
        u,
        c,
        p,
        d,
        f,
        h = 0,
        b = !1,
        v = !1,
        g = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function x(t) {
        var r = s,
            n = u;
        return (s = u = void 0), (h = t), (p = e.apply(n, r));
    }
    function y(e) {
        var r = e - f,
            n = e - h;
        return void 0 === f || r >= t || r < 0 || (v && n >= c);
    }
    function m() {
        var e,
            r,
            n,
            a = (0, o.A)();
        if (y(a)) return w(a);
        d = setTimeout(m, ((e = a - f), (r = a - h), (n = t - e), v ? l(n, c - r) : n));
    }
    function w(e) {
        return ((d = void 0), g && s) ? x(e) : ((s = u = void 0), p);
    }
    function A() {
        var e,
            r = (0, o.A)(),
            n = y(r);
        if (((s = arguments), (u = this), (f = r), n)) {
            if (void 0 === d) return (h = e = f), (d = setTimeout(m, t)), b ? x(e) : p;
            if (v) return clearTimeout(d), (d = setTimeout(m, t)), x(f);
        }
        return void 0 === d && (d = setTimeout(m, t)), p;
    }
    return (
        (t = (0, a.A)(t) || 0),
        (0, n.A)(r) &&
            ((b = !!r.leading),
            (c = (v = "maxWait" in r) ? i((0, a.A)(r.maxWait) || 0, t) : c),
            (g = "trailing" in r ? !!r.trailing : g)),
        (A.cancel = function () {
            void 0 !== d && clearTimeout(d), (h = 0), (s = f = u = d = void 0);
        }),
        (A.flush = function () {
            return void 0 === d ? p : w((0, o.A)());
        }),
        A
    );
};
