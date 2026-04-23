"use strict";
n.d(t, { A: () => c });
var r = n(709943),
    i = n(559751),
    s = n(482786),
    a = n(528346),
    o = n(683834),
    l = n(140851),
    u = n(499702);
let c = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            c = e.name;
        if (!t.modifiersData[c]._skip) {
            for (
                var d = n.mainAxis,
                    _ = void 0 === d || d,
                    f = n.altAxis,
                    p = void 0 === f || f,
                    h = n.fallbackPlacements,
                    E = n.padding,
                    m = n.boundary,
                    g = n.rootBoundary,
                    A = n.altBoundary,
                    I = n.flipVariations,
                    T = void 0 === I || I,
                    S = n.allowedAutoPlacements,
                    y = t.options.placement,
                    N = (0, i.A)(y) === y,
                    v =
                        h ||
                        (N || !T
                            ? [(0, r.A)(y)]
                            : (function (e) {
                                  if ((0, i.A)(e) === l.qZ) return [];
                                  var t = (0, r.A)(e);
                                  return [(0, s.A)(e), t, (0, s.A)(t)];
                              })(y)),
                    C = [y].concat(v).reduce(function (e, n) {
                        return e.concat(
                            (0, i.A)(n) === l.qZ
                                ? (0, o.A)(t, {
                                      placement: n,
                                      boundary: m,
                                      rootBoundary: g,
                                      padding: E,
                                      flipVariations: T,
                                      allowedAutoPlacements: S,
                                  })
                                : n,
                        );
                    }, []),
                    O = t.rects.reference,
                    R = t.rects.popper,
                    b = new Map(),
                    D = !0,
                    L = C[0],
                    w = 0;
                w < C.length;
                w++
            ) {
                var M = C[w],
                    P = (0, i.A)(M),
                    x = (0, u.A)(M) === l.ni,
                    k = [l.Mn, l.sQ].indexOf(P) >= 0,
                    U = k ? "width" : "height",
                    G = (0, a.A)(t, { placement: M, boundary: m, rootBoundary: g, altBoundary: A, padding: E }),
                    F = k ? (x ? l.pG : l.kb) : x ? l.sQ : l.Mn;
                O[U] > R[U] && (F = (0, r.A)(F));
                var V = (0, r.A)(F),
                    B = [];
                if (
                    (_ && B.push(G[P] <= 0),
                    p && B.push(G[F] <= 0, G[V] <= 0),
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
                        j = function (e) {
                            var t = C.find(function (t) {
                                var n = b.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (L = t), "break";
                        },
                        Y = H;
                    Y > 0 && "break" !== j(Y);
                    Y--
                );
            t.placement !== L && ((t.modifiersData[c]._skip = !0), (t.placement = L), (t.reset = !0));
        }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
