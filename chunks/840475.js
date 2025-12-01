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
    p = n(449285),
    _ = n(436207),
    m = n(556585),
    h = n(573078),
    g = n(568033),
    E = n(961050),
    b = n(769827),
    y = n(751736),
    O = n(744569),
    v = n(199838),
    S = v.enforce,
    I = v.get,
    T = l.Int8Array,
    A = T && T.prototype,
    C = l.Uint8ClampedArray,
    N = C && C.prototype,
    P = T && E(T),
    R = A && E(A),
    w = Object.prototype,
    D = l.TypeError,
    x = y("toStringTag"),
    L = O("TYPED_ARRAY_TAG"),
    j = "TypedArrayConstructor",
    M = o && !!b && "Opera" !== f(l.opera),
    k = !1,
    U = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
    },
    G = {
        BigInt64Array: 8,
        BigUint64Array: 8,
    },
    Z = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return "DataView" === t || d(U, t) || d(G, t);
    },
    B = function (e) {
        var t = E(e);
        if (u(t)) {
            var n = I(t);
            return n && d(n, j) ? n[j] : B(t);
        }
    },
    F = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return d(U, t) || d(G, t);
    },
    V = function (e) {
        if (F(e)) return e;
        throw new D("Target is not a typed array");
    },
    H = function (e) {
        if (c(e) && (!b || g(P, e))) return e;
        throw new D(p(e) + " is not a typed array constructor");
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
            (!R[e] || n) && m(R, e, n ? t : (M && A[e]) || t, r);
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
                    return m(P, e, n ? t : (M && P[e]) || t);
                } catch (e) {}
            }
            for (r in U) (i = l[r]) && (!i[e] || n) && m(i, e, t);
        }
    };
for (r in U) (a = (i = l[r]) && i.prototype) ? (S(a)[j] = i) : (M = !1);
for (r in G) (a = (i = l[r]) && i.prototype) && (S(a)[j] = i);
if (
    (!M || !c(P) || P === Function.prototype) &&
    ((P = function () {
        throw new D("Incorrect invocation");
    }),
    M)
)
    for (r in U) l[r] && b(l[r], P);
if ((!M || !R || R === w) && ((R = P.prototype), M)) for (r in U) l[r] && b(l[r].prototype, R);
if ((M && E(N) !== R && b(N, R), s && !d(R, x)))
    for (r in ((k = !0),
    h(R, x, {
        configurable: !0,
        get: function () {
            return u(this) ? this[L] : void 0;
        },
    }),
    U))
        l[r] && _(l[r], L, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: M,
    TYPED_ARRAY_TAG: k && L,
    aTypedArray: V,
    aTypedArrayConstructor: H,
    exportTypedArrayMethod: Y,
    exportTypedArrayStaticMethod: W,
    getTypedArrayConstructor: B,
    isView: Z,
    isTypedArray: F,
    TypedArray: P,
    TypedArrayPrototype: R,
};
