var r,
    i,
    a,
    o = n(848120),
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
    O = n(744569),
    v = n(199838),
    I = v.enforce,
    S = v.get,
    T = l.Int8Array,
    A = T && T.prototype,
    N = l.Uint8ClampedArray,
    C = N && N.prototype,
    P = T && E(T),
    R = A && E(A),
    w = Object.prototype,
    D = l.TypeError,
    L = y('toStringTag'),
    x = O('TYPED_ARRAY_TAG'),
    k = 'TypedArrayConstructor',
    M = o && !!b && 'Opera' !== f(l.opera),
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
    F = function (e) {
        var t = E(e);
        if (u(t)) {
            var n = S(t);
            return n && d(n, k) ? n[k] : F(t);
        }
    },
    V = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return d(U, t) || d(G, t);
    },
    Z = function (e) {
        if (V(e)) return e;
        throw new D('Target is not a typed array');
    },
    H = function (e) {
        if (c(e) && (!b || g(P, e))) return e;
        throw new D(_(e) + ' is not a typed array constructor');
    },
    Y = function (e, t, n, r) {
        if (s) {
            if (n)
                for (var i in U) {
                    var a = l[i];
                    if (a && d(a.prototype, e))
                        try {
                            delete a.prototype[e];
                        } catch (n) {
                            try {
                                a.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!R[e] || n) && h(R, e, n ? t : (M && A[e]) || t, r);
        }
    },
    W = function (e, t, n) {
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
                if (P[e] && !n) return;
                try {
                    return h(P, e, n ? t : (M && P[e]) || t);
                } catch (e) {}
            }
            for (r in U) (i = l[r]) && (!i[e] || n) && h(i, e, t);
        }
    };
for (r in U) (a = (i = l[r]) && i.prototype) ? (I(a)[k] = i) : (M = !1);
for (r in G) (a = (i = l[r]) && i.prototype) && (I(a)[k] = i);
if (
    (!M || !c(P) || P === Function.prototype) &&
    ((P = function () {
        throw new D('Incorrect invocation');
    }),
    M)
)
    for (r in U) l[r] && b(l[r], P);
if ((!M || !R || R === w) && ((R = P.prototype), M)) for (r in U) l[r] && b(l[r].prototype, R);
if ((M && E(C) !== R && b(C, R), s && !d(R, L)))
    for (r in ((j = !0),
    m(R, L, {
        configurable: !0,
        get: function () {
            return u(this) ? this[x] : void 0;
        }
    }),
    U))
        l[r] && p(l[r], x, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: M,
    TYPED_ARRAY_TAG: j && x,
    aTypedArray: Z,
    aTypedArrayConstructor: H,
    exportTypedArrayMethod: Y,
    exportTypedArrayStaticMethod: W,
    getTypedArrayConstructor: F,
    isView: B,
    isTypedArray: V,
    TypedArray: P,
    TypedArrayPrototype: R
};
