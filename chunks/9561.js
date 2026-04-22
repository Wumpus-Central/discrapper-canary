"use strict";
n.d(t, { A: () => d });
var r = n(709943),
    i = n(559751),
    s = n(482786),
    a = n(528346),
    o = n(683834),
    l = n(140851),
    u = n(499702);
let d = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            d = e.name;
        if (!t.modifiersData[d]._skip) {
            for (
                var c = n.mainAxis,
                    _ = void 0 === c || c,
                    f = n.altAxis,
                    E = void 0 === f || f,
                    h = n.fallbackPlacements,
                    p = n.padding,
                    m = n.boundary,
                    g = n.rootBoundary,
                    A = n.altBoundary,
                    I = n.flipVariations,
                    T = void 0 === I || I,
                    S = n.allowedAutoPlacements,
                    y = t.options.placement,
                    N = (0, i.A)(y) === y,
                    O =
                        h ||
                        (N || !T
                            ? [(0, r.A)(y)]
                            : (function (e) {
                                  if ((0, i.A)(e) === l.qZ) return [];
                                  var t = (0, r.A)(e);
                                  return [(0, s.A)(e), t, (0, s.A)(t)];
                              })(y)),
                    R = [y].concat(O).reduce(function (e, n) {
                        return e.concat(
                            (0, i.A)(n) === l.qZ
                                ? (0, o.A)(t, {
                                      placement: n,
                                      boundary: m,
                                      rootBoundary: g,
                                      padding: p,
                                      flipVariations: T,
                                      allowedAutoPlacements: S,
                                  })
                                : n,
                        );
                    }, []),
                    v = t.rects.reference,
                    C = t.rects.popper,
                    b = new Map(),
                    D = !0,
                    L = R[0],
                    w = 0;
                w < R.length;
                w++
            ) {
                var M = R[w],
                    P = (0, i.A)(M),
                    U = (0, u.A)(M) === l.ni,
                    k = [l.Mn, l.sQ].indexOf(P) >= 0,
                    x = k ? "width" : "height",
                    G = (0, a.A)(t, { placement: M, boundary: m, rootBoundary: g, altBoundary: A, padding: p }),
                    V = k ? (U ? l.pG : l.kb) : U ? l.sQ : l.Mn;
                v[x] > C[x] && (V = (0, r.A)(V));
                var F = (0, r.A)(V),
                    B = [];
                if (
                    (_ && B.push(G[P] <= 0),
                    E && B.push(G[V] <= 0, G[F] <= 0),
                    B.every(function (e) {
                        return e;
                    }))
                ) {
                    (L = M), (D = !1);
                    break;
                }
                b.set(M, B);
            }
            if (D)
                for (
                    var H = T ? 3 : 1,
                        Y = function (e) {
                            var t = R.find(function (t) {
                                var n = b.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (L = t), "break";
                        },
                        W = H;
                    W > 0 && "break" !== Y(W);
                    W--
                );
            t.placement !== L && ((t.modifiersData[d]._skip = !0), (t.placement = L), (t.reset = !0));
        }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
