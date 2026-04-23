"use strict";
r.d(t, { A: () => p });
var n = r(477891),
    o = r(638205),
    a = r(656855),
    i = r(615464),
    l = r(817548),
    s = r(676750),
    u = n.A ? n.A.prototype : void 0,
    c = u ? u.valueOf : void 0;
let p = function (e, t, r, n, u, p, d) {
    switch (r) {
        case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case "[object ArrayBuffer]":
            if (e.byteLength != t.byteLength || !p(new o.A(e), new o.A(t))) break;
            return !0;
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
            return (0, a.A)(+e, +t);
        case "[object Error]":
            return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
            return e == t + "";
        case "[object Map]":
            var f = l.A;
        case "[object Set]":
            var h = 1 & n;
            if ((f || (f = s.A), e.size != t.size && !h)) break;
            var b = d.get(e);
            if (b) return b == t;
            (n |= 2), d.set(e, t);
            var v = (0, i.A)(f(e), f(t), n, u, p, d);
            return d.delete(e), v;
        case "[object Symbol]":
            if (c) return c.call(e) == c.call(t);
    }
    return !1;
};
