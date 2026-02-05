"use strict";
n.d(t, { A: () => d });
var r = n(709943),
    i = n(559751),
    a = n(482786),
    s = n(528346),
    o = n(683834),
    l = n(140851),
    u = n(499702);
function c(e) {
    if ((0, i.A)(e) === l.qZ) return [];
    var t = (0, r.A)(e);
    return [(0, a.A)(e), t, (0, a.A)(t)];
}
let d = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            a = e.name;
        if (!t.modifiersData[a]._skip) {
            for (
                var d = n.mainAxis,
                    _ = void 0 === d || d,
                    f = n.altAxis,
                    p = void 0 === f || f,
                    h = n.fallbackPlacements,
                    m = n.padding,
                    g = n.boundary,
                    E = n.rootBoundary,
                    A = n.altBoundary,
                    I = n.flipVariations,
                    T = void 0 === I || I,
                    y = n.allowedAutoPlacements,
                    S = t.options.placement,
                    v = (0, i.A)(S),
                    C = v === S,
                    b = h || (C || !T ? [(0, r.A)(S)] : c(S)),
                    N = [S].concat(b).reduce(function (e, n) {
                        return e.concat(
                            (0, i.A)(n) === l.qZ
                                ? (0, o.A)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: m,
                                      flipVariations: T,
                                      allowedAutoPlacements: y,
                                  })
                                : n,
                        );
                    }, []),
                    R = t.rects.reference,
                    O = t.rects.popper,
                    D = new Map(),
                    L = !0,
                    w = N[0],
                    x = 0;
                x < N.length;
                x++
            ) {
                var P = N[x],
                    M = (0, i.A)(P),
                    k = (0, u.A)(P) === l.ni,
                    U = [l.Mn, l.sQ].indexOf(M) >= 0,
                    G = U ? "width" : "height",
                    V = (0, s.A)(t, { placement: P, boundary: g, rootBoundary: E, altBoundary: A, padding: m }),
                    F = U ? (k ? l.pG : l.kb) : k ? l.sQ : l.Mn;
                R[G] > O[G] && (F = (0, r.A)(F));
                var B = (0, r.A)(F),
                    j = [];
                if (
                    (_ && j.push(V[M] <= 0),
                    p && j.push(V[F] <= 0, V[B] <= 0),
                    j.every(function (e) {
                        return e;
                    }))
                ) {
                    (w = P), (L = !1);
                    break;
                }
                D.set(P, j);
            }
            if (L)
                for (
                    var H = T ? 3 : 1,
                        Y = function (e) {
                            var t = N.find(function (t) {
                                var n = D.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (w = t), "break";
                        },
                        W = H;
                    W > 0 && "break" !== Y(W);
                    W--
                );
            t.placement !== w && ((t.modifiersData[a]._skip = !0), (t.placement = w), (t.reset = !0));
        }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
