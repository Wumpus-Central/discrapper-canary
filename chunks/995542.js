var i = r(56135),
    a = r(888968),
    o = r(649786),
    s = r(718332),
    l = r(320114),
    u = r(82075),
    c = 1,
    d = 2,
    f = '[object Boolean]',
    p = '[object Date]',
    h = '[object Error]',
    _ = '[object Map]',
    m = '[object Number]',
    g = '[object RegExp]',
    E = '[object Set]',
    v = '[object String]',
    y = '[object Symbol]',
    b = '[object ArrayBuffer]',
    I = '[object DataView]',
    T = i ? i.prototype : void 0,
    S = T ? T.valueOf : void 0;
function A(e, n, r, i, T, A, C) {
    switch (r) {
        case I:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) break;
            (e = e.buffer), (n = n.buffer);
        case b:
            if (e.byteLength != n.byteLength || !A(new a(e), new a(n))) break;
            return !0;
        case f:
        case p:
        case m:
            return o(+e, +n);
        case h:
            return e.name == n.name && e.message == n.message;
        case g:
        case v:
            return e == n + '';
        case _:
            var N = l;
        case E:
            var R = i & c;
            if ((N || (N = u), e.size != n.size && !R)) break;
            var O = C.get(e);
            if (O) return O == n;
            (i |= d), C.set(e, n);
            var D = s(N(e), N(n), i, T, A, C);
            return C.delete(e), D;
        case y:
            if (S) return S.call(e) == S.call(n);
    }
    return !1;
}
e.exports = A;
