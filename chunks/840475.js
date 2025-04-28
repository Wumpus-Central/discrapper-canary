var e,
    o,
    i,
    u = r(848120),
    c = r(507604),
    a = r(127849),
    f = r(880181),
    s = r(434431),
    l = r(77025),
    p = r(214027),
    d = r(449285),
    _ = r(436207),
    h = r(556585),
    y = r(573078),
    b = r(568033),
    g = r(961050),
    v = r(769827),
    w = r(751736),
    m = r(744569),
    x = r(199838),
    A = x.enforce,
    O = x.get,
    T = a.Int8Array,
    E = T && T.prototype,
    S = a.Uint8ClampedArray,
    I = S && S.prototype,
    R = T && g(T),
    k = E && g(E),
    j = Object.prototype,
    P = a.TypeError,
    M = w('toStringTag'),
    L = m('TYPED_ARRAY_TAG'),
    F = 'TypedArrayConstructor',
    C = u && !!v && 'Opera' !== p(a.opera),
    D = !1,
    B = {
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
    N = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    U = function (t) {
        var n = g(t);
        if (s(n)) {
            var r = O(n);
            return r && l(r, F) ? r[F] : U(n);
        }
    },
    W = function (t) {
        if (!s(t)) return !1;
        var n = p(t);
        return l(B, n) || l(N, n);
    };
for (e in B) (i = (o = a[e]) && o.prototype) ? (A(i)[F] = o) : (C = !1);
for (e in N) (i = (o = a[e]) && o.prototype) && (A(i)[F] = o);
if (
    (!C || !f(R) || R === Function.prototype) &&
    ((R = function () {
        throw new P('Incorrect invocation');
    }),
    C)
)
    for (e in B) a[e] && v(a[e], R);
if ((!C || !k || k === j) && ((k = R.prototype), C)) for (e in B) a[e] && v(a[e].prototype, k);
if ((C && g(I) !== k && v(I, k), c && !l(k, M)))
    for (e in ((D = !0),
    y(k, M, {
        configurable: !0,
        get: function () {
            return s(this) ? this[L] : void 0;
        }
    }),
    B))
        a[e] && _(a[e], L, e);
t.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: C,
    TYPED_ARRAY_TAG: D && L,
    aTypedArray: function (t) {
        if (W(t)) return t;
        throw new P('Target is not a typed array');
    },
    aTypedArrayConstructor: function (t) {
        if (f(t) && (!v || b(R, t))) return t;
        throw new P(d(t) + ' is not a typed array constructor');
    },
    exportTypedArrayMethod: function (t, n, r, e) {
        if (c) {
            if (r)
                for (var o in B) {
                    var i = a[o];
                    if (i && l(i.prototype, t))
                        try {
                            delete i.prototype[t];
                        } catch (r) {
                            try {
                                i.prototype[t] = n;
                            } catch (t) {}
                        }
                }
            (!k[t] || r) && h(k, t, r ? n : (C && E[t]) || n, e);
        }
    },
    exportTypedArrayStaticMethod: function (t, n, r) {
        var e, o;
        if (c) {
            if (v) {
                if (r) {
                    for (e in B)
                        if ((o = a[e]) && l(o, t))
                            try {
                                delete o[t];
                            } catch (t) {}
                }
                if (R[t] && !r) return;
                try {
                    return h(R, t, r ? n : (C && R[t]) || n);
                } catch (t) {}
            }
            for (e in B) (o = a[e]) && (!o[t] || r) && h(o, t, n);
        }
    },
    getTypedArrayConstructor: U,
    isView: function (t) {
        if (!s(t)) return !1;
        var n = p(t);
        return 'DataView' === n || l(B, n) || l(N, n);
    },
    isTypedArray: W,
    TypedArray: R,
    TypedArrayPrototype: k
};
