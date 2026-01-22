var r = n(782017),
    i = n(566709),
    a = n(823453),
    s = n(842932),
    o = n(488165),
    l = "[object Boolean]",
    c = "[object Date]",
    u = "[object Map]",
    d = "[object Number]",
    f = "[object RegExp]",
    p = "[object Set]",
    _ = "[object String]",
    h = "[object Symbol]",
    m = "[object ArrayBuffer]",
    g = "[object DataView]",
    E = "[object Float32Array]",
    b = "[object Float64Array]",
    y = "[object Int8Array]",
    O = "[object Int16Array]",
    A = "[object Int32Array]",
    v = "[object Uint8Array]",
    S = "[object Uint8ClampedArray]",
    I = "[object Uint16Array]",
    T = "[object Uint32Array]";
e.exports = function (e, t, n) {
    var C = e.constructor;
    switch (t) {
        case m:
            return r(e);
        case l:
        case c:
            return new C(+e);
        case g:
            return i(e, n);
        case E:
        case b:
        case y:
        case O:
        case A:
        case v:
        case S:
        case I:
        case T:
            return o(e, n);
        case u:
            return new C();
        case d:
        case _:
            return new C(e);
        case f:
            return a(e);
        case p:
            return new C();
        case h:
            return s(e);
    }
};
