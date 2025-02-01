var i = n(56135),
    r = n(888968),
    a = n(649786),
    s = n(718332),
    o = n(320114),
    l = n(82075),
    u = 1,
    c = 2,
    d = '[object Boolean]',
    f = '[object Date]',
    _ = '[object Error]',
    p = '[object Map]',
    h = '[object Number]',
    m = '[object RegExp]',
    g = '[object Set]',
    E = '[object String]',
    v = '[object Symbol]',
    y = '[object ArrayBuffer]',
    I = '[object DataView]',
    T = i ? i.prototype : void 0,
    b = T ? T.valueOf : void 0;
function S(e, t, n, i, T, S, A) {
    switch (n) {
        case I:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case y:
            if (e.byteLength != t.byteLength || !S(new r(e), new r(t))) break;
            return !0;
        case d:
        case f:
        case h:
            return a(+e, +t);
        case _:
            return e.name == t.name && e.message == t.message;
        case m:
        case E:
            return e == t + '';
        case p:
            var N = o;
        case g:
            var C = i & u;
            if ((N || (N = l), e.size != t.size && !C)) break;
            var R = A.get(e);
            if (R) return R == t;
            (i |= c), A.set(e, t);
            var O = s(N(e), N(t), i, T, S, A);
            return A.delete(e), O;
        case v:
            if (b) return b.call(e) == b.call(t);
    }
    return !1;
}
e.exports = S;
