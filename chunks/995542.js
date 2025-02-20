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
    p = '[object Error]',
    _ = '[object Map]',
    h = '[object Number]',
    m = '[object RegExp]',
    g = '[object Set]',
    E = '[object String]',
    v = '[object Symbol]',
    b = '[object ArrayBuffer]',
    y = '[object DataView]',
    O = r ? r.prototype : void 0,
    S = O ? O.valueOf : void 0;
function I(e, t, n, r, O, I, T) {
    switch (n) {
        case y:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case b:
            if (e.byteLength != t.byteLength || !I(new i(e), new i(t))) break;
            return !0;
        case d:
        case f:
        case h:
            return o(+e, +t);
        case p:
            return e.name == t.name && e.message == t.message;
        case m:
        case E:
            return e == t + '';
        case _:
            var N = s;
        case g:
            var A = r & c;
            if ((N || (N = l), e.size != t.size && !A)) break;
            var C = T.get(e);
            if (C) return C == t;
            (r |= u), T.set(e, t);
            var R = a(N(e), N(t), r, O, I, T);
            return T.delete(e), R;
        case v:
            if (S) return S.call(e) == S.call(t);
    }
    return !1;
}
e.exports = I;
