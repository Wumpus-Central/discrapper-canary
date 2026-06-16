"use strict";
var n = e(308227),
    o = e(421236),
    s = e(375797),
    i = e(309270),
    u = e(965746).f,
    c = e(800403),
    a = e(452162),
    f = e(241091),
    p = e(180734),
    l = e(512008);
e(574236);
var v = function (t) {
    var r = function (e, n, s) {
        if (this instanceof r) {
            switch (arguments.length) {
                case 0:
                    return new t();
                case 1:
                    return new t(e);
                case 2:
                    return new t(e, n);
            }
            return new t(e, n, s);
        }
        return o(t, this, arguments);
    };
    return (r.prototype = t.prototype), r;
};
t.exports = function (t, r) {
    var e,
        o,
        y,
        h,
        x,
        d,
        g,
        b,
        m,
        S = t.target,
        w = t.global,
        O = t.stat,
        j = t.proto,
        A = w ? n : O ? n[S] : n[S] && n[S].prototype,
        E = w ? a : a[S] || p(a, S, {})[S],
        T = E.prototype;
    for (h in r)
        (o = !(e = c(w ? h : S + (O ? "." : "#") + h, t.forced)) && A && l(A, h)),
            (d = E[h]),
            o && (g = t.dontCallGetSet ? (m = u(A, h)) && m.value : A[h]),
            (x = o && g ? g : r[h]),
            (e || j || typeof d != typeof x) &&
                ((b = t.bind && o ? f(x, n) : t.wrap && o ? v(x) : j && i(x) ? s(x) : x),
                (t.sham || (x && x.sham) || (d && d.sham)) && p(b, "sham", !0),
                p(E, h, b),
                j &&
                    (l(a, (y = S + "Prototype")) || p(a, y, {}),
                    p(a[y], h, x),
                    t.real && T && (e || !T[h]) && p(T, h, x)));
};
