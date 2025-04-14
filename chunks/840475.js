var r,
    i,
    o,
    a = n(848120),
    s = n(507604),
    l = n(127849),
    c = n(880181),
    u = n(434431),
    d = n(77025),
    f = n(214027),
    _ = n(449285),
    p = n(436207),
    h = n(556585),
    m = n(573078),
    g = n(568033),
    E = n(961050),
    b = n(769827),
    y = n(751736),
    v = n(744569),
    O = n(199838),
    I = O.enforce,
    S = O.get,
    T = l.Int8Array,
    N = T && T.prototype,
    A = l.Uint8ClampedArray,
    C = A && A.prototype,
    R = T && E(T),
    P = N && E(N),
    w = Object.prototype,
    D = l.TypeError,
    L = y('toStringTag'),
    x = v('TYPED_ARRAY_TAG'),
    M = 'TypedArrayConstructor',
    k = a && !!b && 'Opera' !== f(l.opera),
    j = !1,
    U = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    },
    G = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    B = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return 'DataView' === t || d(U, t) || d(G, t);
    },
    V = function (e) {
        var t = E(e);
        if (u(t)) {
            var n = S(t);
            return n && d(n, M) ? n[M] : V(t);
        }
    },
    F = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return d(U, t) || d(G, t);
    },
    Z = function (e) {
        if (F(e)) return e;
        throw new D('Target is not a typed array');
    },
    H = function (e) {
        if (c(e) && (!b || g(R, e))) return e;
        throw new D(_(e) + ' is not a typed array constructor');
    },
    W = function (e, t, n, r) {
        if (s) {
            if (n)
                for (var i in U) {
                    var o = l[i];
                    if (o && d(o.prototype, e))
                        try {
                            delete o.prototype[e];
                        } catch (n) {
                            try {
                                o.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!P[e] || n) && h(P, e, n ? t : (k && N[e]) || t, r);
        }
    },
    Y = function (e, t, n) {
        var r, i;
        if (s) {
            if (b) {
                if (n) {
                    for (r in U)
                        if ((i = l[r]) && d(i, e))
                            try {
                                delete i[e];
                            } catch (e) {}
                }
                if (R[e] && !n) return;
                try {
                    return h(R, e, n ? t : (k && R[e]) || t);
                } catch (e) {}
            }
            for (r in U) (i = l[r]) && (!i[e] || n) && h(i, e, t);
        }
    };
for (r in U) (o = (i = l[r]) && i.prototype) ? (I(o)[M] = i) : (k = !1);
for (r in G) (o = (i = l[r]) && i.prototype) && (I(o)[M] = i);
if (
    (!k || !c(R) || R === Function.prototype) &&
    ((R = function () {
        throw new D('Incorrect invocation');
    }),
    k)
)
    for (r in U) l[r] && b(l[r], R);
if ((!k || !P || P === w) && ((P = R.prototype), k)) for (r in U) l[r] && b(l[r].prototype, P);
if ((k && E(C) !== P && b(C, P), s && !d(P, L)))
    for (r in ((j = !0),
    m(P, L, {
        configurable: !0,
        get: function () {
            return u(this) ? this[x] : void 0;
        }
    }),
    U))
        l[r] && p(l[r], x, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: k,
    TYPED_ARRAY_TAG: j && x,
    aTypedArray: Z,
    aTypedArrayConstructor: H,
    exportTypedArrayMethod: W,
    exportTypedArrayStaticMethod: Y,
    getTypedArrayConstructor: V,
    isView: B,
    isTypedArray: F,
    TypedArray: R,
    TypedArrayPrototype: P
};
