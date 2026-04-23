"use strict";
r.d(t, { A: () => w });
var n = r(894849),
    o = r(499896),
    a = r(949791),
    i = r(218850),
    l = r(488796),
    s = r(464117),
    u = r(161632),
    c = "[object Map]",
    p = "[object Promise]",
    d = "[object Set]",
    f = "[object WeakMap]",
    h = "[object DataView]",
    b = (0, u.A)(n.A),
    v = (0, u.A)(o.A),
    g = (0, u.A)(a.A),
    x = (0, u.A)(i.A),
    y = (0, u.A)(l.A),
    m = s.A;
((n.A && m(new n.A(new ArrayBuffer(1))) != h) ||
    (o.A && m(new o.A()) != c) ||
    (a.A && m(a.A.resolve()) != p) ||
    (i.A && m(new i.A()) != d) ||
    (l.A && m(new l.A()) != f)) &&
    (m = function (e) {
        var t = (0, s.A)(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? (0, u.A)(r) : "";
        if (n)
            switch (n) {
                case b:
                    return h;
                case v:
                    return c;
                case g:
                    return p;
                case x:
                    return d;
                case y:
                    return f;
            }
        return t;
    });
let w = m;
