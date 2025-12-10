var r = n(56135),
    i = n(888968),
    a = n(649786),
    o = n(718332),
    s = n(320114),
    l = n(82075),
    c = 1,
    u = 2,
    d = "[object Boolean]",
    f = "[object Date]",
    p = "[object Error]",
    _ = "[object Map]",
    m = "[object Number]",
    h = "[object RegExp]",
    g = "[object Set]",
    E = "[object String]",
    b = "[object Symbol]",
    y = "[object ArrayBuffer]",
    O = "[object DataView]",
    v = r ? r.prototype : void 0,
    S = v ? v.valueOf : void 0;
e.exports = function (e, t, n, r, v, I, T) {
    switch (n) {
        case O:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case y:
            if (e.byteLength != t.byteLength || !I(new i(e), new i(t))) break;
            return !0;
        case d:
        case f:
        case m:
            return a(+e, +t);
        case p:
            return e.name == t.name && e.message == t.message;
        case h:
        case E:
            return e == t + "";
        case _:
            var C = s;
        case g:
            var A = r & c;
            if ((C || (C = l), e.size != t.size && !A)) break;
            var N = T.get(e);
            if (N) return N == t;
            (r |= u), T.set(e, t);
            var P = o(C(e), C(t), r, v, I, T);
            return T.delete(e), P;
        case b:
            if (S) return S.call(e) == S.call(t);
    }
    return !1;
};
