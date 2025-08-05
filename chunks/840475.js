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
    T = v.get,
    S = l.Int8Array,
    A = S && S.prototype,
    N = l.Uint8ClampedArray,
    C = N && N.prototype,
    w = S && E(S),
    R = A && E(A),
    P = Object.prototype,
    D = l.TypeError,
    L = y('toStringTag'),
    x = O('TYPED_ARRAY_TAG'),
    k = 'TypedArrayConstructor',
    j = o && !!b && 'Opera' !== f(l.opera),
    M = !1,
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
    Z = function (e) {
        var t = E(e);
        if (u(t)) {
            var n = T(t);
            return n && d(n, k) ? n[k] : Z(t);
        }
    },
    F = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return d(U, t) || d(G, t);
    },
    V = function (e) {
        if (F(e)) return e;
        throw new D('Target is not a typed array');
    },
    H = function (e) {
        if (c(e) && (!b || g(w, e))) return e;
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
            (!R[e] || n) && h(R, e, n ? t : (j && A[e]) || t, r);
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
                if (w[e] && !n) return;
                try {
                    return h(w, e, n ? t : (j && w[e]) || t);
                } catch (e) {}
            }
            for (r in U) (i = l[r]) && (!i[e] || n) && h(i, e, t);
        }
    };
for (r in U) (a = (i = l[r]) && i.prototype) ? (I(a)[k] = i) : (j = !1);
for (r in G) (a = (i = l[r]) && i.prototype) && (I(a)[k] = i);
if (
    (!j || !c(w) || w === Function.prototype) &&
    ((w = function () {
        throw new D('Incorrect invocation');
    }),
    j)
)
    for (r in U) l[r] && b(l[r], w);
if ((!j || !R || R === P) && ((R = w.prototype), j)) for (r in U) l[r] && b(l[r].prototype, R);
if ((j && E(C) !== R && b(C, R), s && !d(R, L)))
    for (r in ((M = !0),
    m(R, L, {
        configurable: !0,
        get: function () {
            return u(this) ? this[x] : void 0;
        }
    }),
    U))
        l[r] && p(l[r], x, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: j,
    TYPED_ARRAY_TAG: M && x,
    aTypedArray: V,
    aTypedArrayConstructor: H,
    exportTypedArrayMethod: Y,
    exportTypedArrayStaticMethod: W,
    getTypedArrayConstructor: Z,
    isView: B,
    isTypedArray: F,
    TypedArray: w,
    TypedArrayPrototype: R
};
