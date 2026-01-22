var r = n(557939),
    i = n(860511),
    a = n(446474),
    s = n(257943),
    o = n(273802),
    l = n(739305),
    c = n(607167),
    u = n(61132),
    d = n(231977),
    f = n(706938),
    p = n(324794),
    _ = n(370001),
    h = n(794729),
    m = n(777718),
    g = n(590838),
    E = n(706598),
    b = n(210140),
    y = n(324988),
    O = n(598349),
    A = n(837082),
    v = n(482779),
    S = n(524152),
    I = n(458680),
    T = n(855835).f,
    C = n(187294),
    N = n(721670).forEach,
    R = n(274574),
    w = n(485155),
    P = n(4940),
    D = n(873078),
    x = n(412405),
    L = n(883972),
    j = n(486724),
    M = L.get,
    k = L.set,
    U = L.enforce,
    G = P.f,
    V = D.f,
    F = i.RangeError,
    B = c.ArrayBuffer,
    H = B.prototype,
    Y = c.DataView,
    W = l.NATIVE_ARRAY_BUFFER_VIEWS,
    K = l.TYPED_ARRAY_TAG,
    z = l.TypedArray,
    q = l.TypedArrayPrototype,
    X = l.isTypedArray,
    Z = "BYTES_PER_ELEMENT",
    Q = "Wrong length",
    $ = function (e, t) {
        w(e, t, {
            configurable: !0,
            get: function () {
                return M(this)[t];
            },
        });
    },
    J = function (e) {
        var t;
        return S(H, e) || "ArrayBuffer" === (t = y(e)) || "SharedArrayBuffer" === t;
    },
    ee = function (e, t) {
        return X(e) && !A(t) && t in e && p(+t) && t >= 0;
    },
    et = function (e, t) {
        return ee(e, (t = E(t))) ? d(2, e[t]) : V(e, t);
    },
    en = function (e, t, n) {
        return ee(e, (t = E(t))) &&
            O(n) &&
            b(n, "value") &&
            !b(n, "get") &&
            !b(n, "set") &&
            !n.configurable &&
            (!b(n, "writable") || n.writable) &&
            (!b(n, "enumerable") || n.enumerable)
            ? ((e[t] = n.value), e)
            : G(e, t, n);
    };
s
    ? (W || ((D.f = et), (P.f = en), $(q, "buffer"), $(q, "byteOffset"), $(q, "byteLength"), $(q, "length")),
      r(
          {
              target: "Object",
              stat: !0,
              forced: !W,
          },
          {
              getOwnPropertyDescriptor: et,
              defineProperty: en,
          },
      ),
      (e.exports = function (e, t, n) {
          var s = e.match(/\d+/)[0] / 8,
              l = e + (n ? "Clamped" : "") + "Array",
              c = "get" + e,
              d = "set" + e,
              p = i[l],
              E = p,
              b = E && E.prototype,
              y = {},
              A = function (e, t) {
                  var n = M(e);
                  return n.view[c](t * s + n.byteOffset, !0);
              },
              S = function (e, t, r) {
                  var i = M(e);
                  i.view[d](t * s + i.byteOffset, n ? g(r) : r, !0);
              },
              w = function (e, t) {
                  G(e, t, {
                      get: function () {
                          return A(this, t);
                      },
                      set: function (e) {
                          return S(this, t, e);
                      },
                      enumerable: !0,
                  });
              };
          W
              ? o &&
                ((E = t(function (e, t, n, r) {
                    return (
                        u(e, b),
                        j(
                            (function () {
                                return O(t)
                                    ? J(t)
                                        ? void 0 !== r
                                            ? new p(t, m(n, s), r)
                                            : void 0 !== n
                                              ? new p(t, m(n, s))
                                              : new p(t)
                                        : X(t)
                                          ? x(E, t)
                                          : a(C, E, t)
                                    : new p(h(t));
                            })(),
                            e,
                            E,
                        )
                    );
                })),
                I && I(E, z),
                N(T(p), function (e) {
                    e in E || f(E, e, p[e]);
                }),
                (E.prototype = b))
              : ((E = t(function (e, t, n, r) {
                    u(e, b);
                    var i,
                        o,
                        l,
                        c = 0,
                        d = 0;
                    if (O(t))
                        if (J(t)) {
                            (i = t), (d = m(n, s));
                            var f = t.byteLength;
                            if (void 0 === r) {
                                if (f % s || (o = f - d) < 0) throw new F(Q);
                            } else if ((o = _(r) * s) + d > f) throw new F(Q);
                            l = o / s;
                        } else if (X(t)) return x(E, t);
                        else return a(C, E, t);
                    else i = new B((o = (l = h(t)) * s));
                    for (
                        k(e, {
                            buffer: i,
                            byteOffset: d,
                            byteLength: o,
                            length: l,
                            view: new Y(i),
                        });
                        c < l;
                    )
                        w(e, c++);
                })),
                I && I(E, z),
                (b = E.prototype = v(q))),
              b.constructor !== E && f(b, "constructor", E),
              (U(b).TypedArrayConstructor = E),
              K && f(b, K, l);
          var P = E !== p;
          (y[l] = E),
              r(
                  {
                      global: !0,
                      constructor: !0,
                      forced: P,
                      sham: !W,
                  },
                  y,
              ),
              Z in E || f(E, Z, s),
              Z in b || f(b, Z, s),
              R(l);
      }))
    : (e.exports = function () {});
