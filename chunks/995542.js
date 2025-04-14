var r = n(56135),
    i = n(888968),
    o = n(649786),
    a = n(718332),
    s = n(320114),
    l = n(82075),
    c = 1,
    u = 2,
    d = '[object Boolean]',
    f = '[object Date]',
    _ = '[object Error]',
    p = '[object Map]',
    h = '[object Number]',
    m = '[object RegExp]',
    g = '[object Set]',
    E = '[object String]',
    b = '[object Symbol]',
    y = '[object ArrayBuffer]',
    v = '[object DataView]',
    O = r ? r.prototype : void 0,
    I = O ? O.valueOf : void 0;
e.exports = function (e, t, n, r, O, S, T) {
    switch (n) {
        case v:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case y:
            if (e.byteLength != t.byteLength || !S(new i(e), new i(t))) break;
            return !0;
        case d:
        case f:
        case h:
            return o(+e, +t);
        case _:
            return e.name == t.name && e.message == t.message;
        case m:
        case E:
            return e == t + '';
        case p:
            var N = s;
        case g:
            var A = r & c;
            if ((N || (N = l), e.size != t.size && !A)) break;
            var C = T.get(e);
            if (C) return C == t;
            (r |= u), T.set(e, t);
            var R = a(N(e), N(t), r, O, S, T);
            return T.delete(e), R;
        case b:
            if (I) return I.call(e) == I.call(t);
    }
    return !1;
};
