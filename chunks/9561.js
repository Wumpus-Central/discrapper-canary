n.d(t, {
    A: () => d,
});
var r = n(709943),
    i = n(559751),
    a = n(482786),
    s = n(528346),
    o = n(683834),
    l = n(140851),
    c = n(499702);

function u(e) {
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
                    f = void 0 === d || d,
                    p = n.altAxis,
                    _ = void 0 === p || p,
                    h = n.fallbackPlacements,
                    m = n.padding,
                    g = n.boundary,
                    E = n.rootBoundary,
                    b = n.altBoundary,
                    y = n.flipVariations,
                    O = void 0 === y || y,
                    A = n.allowedAutoPlacements,
                    v = t.options.placement,
                    S = (0, i.A)(v),
                    I = S === v,
                    T = h || (I || !O ? [(0, r.A)(v)] : u(v)),
                    C = [v].concat(T).reduce(function (e, n) {
                        return e.concat(
                            (0, i.A)(n) === l.qZ
                                ? (0, o.A)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: m,
                                      flipVariations: O,
                                      allowedAutoPlacements: A,
                                  })
                                : n,
                        );
                    }, []),
                    N = t.rects.reference,
                    R = t.rects.popper,
                    w = new Map(),
                    P = !0,
                    D = C[0],
                    x = 0;
                x < C.length;
                x++
            ) {
                var L = C[x],
                    j = (0, i.A)(L),
                    M = (0, c.A)(L) === l.ni,
                    k = [l.Mn, l.sQ].indexOf(j) >= 0,
                    U = k ? "width" : "height",
                    G = (0, s.A)(t, {
                        placement: L,
                        boundary: g,
                        rootBoundary: E,
                        altBoundary: b,
                        padding: m,
                    }),
                    V = k ? (M ? l.pG : l.kb) : M ? l.sQ : l.Mn;
                N[U] > R[U] && (V = (0, r.A)(V));
                var F = (0, r.A)(V),
                    B = [];
                if (
                    (f && B.push(G[j] <= 0),
                    _ && B.push(G[V] <= 0, G[F] <= 0),
                    B.every(function (e) {
                        return e;
                    }))
                ) {
                    (D = L), (P = !1);
                    break;
                }
                w.set(L, B);
            }
            if (P)
                for (
                    var H = O ? 3 : 1,
                        Y = function (e) {
                            var t = C.find(function (t) {
                                var n = w.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (D = t), "break";
                        },
                        W = H;
                    W > 0 && "break" !== Y(W);
                    W--
                );
            t.placement !== D && ((t.modifiersData[a]._skip = !0), (t.placement = D), (t.reset = !0));
        }
    },
    requiresIfExists: ["offset"],
    data: {
        _skip: !1,
    },
};
