n.d(t, { Z: () => _ });
var r = n(740078),
    i = n(126387),
    a = n(205208),
    o = n(792278),
    s = n(464826),
    l = n(493623),
    c = n(343713),
    u = n(510104),
    d = n(632471),
    f = n(607033),
    p = n(894417);
let _ = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            _ = e.name,
            m = n.mainAxis,
            h = void 0 === m || m,
            g = n.altAxis,
            E = void 0 !== g && g,
            b = n.boundary,
            y = n.rootBoundary,
            O = n.altBoundary,
            v = n.padding,
            S = n.tether,
            I = void 0 === S || S,
            T = n.tetherOffset,
            C = void 0 === T ? 0 : T,
            A = (0, u.Z)(t, {
                boundary: b,
                rootBoundary: y,
                padding: v,
                altBoundary: O,
            }),
            N = (0, i.Z)(t.placement),
            P = (0, d.Z)(t.placement),
            R = !P,
            D = (0, a.Z)(N),
            w = (0, o.Z)(D),
            x = t.modifiersData.popperOffsets,
            L = t.rects.reference,
            j = t.rects.popper,
            M = "function" == typeof C ? C(Object.assign({}, t.rects, { placement: t.placement })) : C,
            k =
                "number" == typeof M
                    ? {
                          mainAxis: M,
                          altAxis: M,
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0,
                          },
                          M,
                      ),
            U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            G = {
                x: 0,
                y: 0,
            };
        if (x) {
            if (h) {
                var Z,
                    B = "y" === D ? r.we : r.t$,
                    F = "y" === D ? r.I : r.F2,
                    V = "y" === D ? "height" : "width",
                    H = x[D],
                    Y = H + A[B],
                    W = H - A[F],
                    K = I ? -j[V] / 2 : 0,
                    z = P === r.BL ? L[V] : j[V],
                    q = P === r.BL ? -j[V] : -L[V],
                    Q = t.elements.arrow,
                    X =
                        I && Q
                            ? (0, l.Z)(Q)
                            : {
                                  width: 0,
                                  height: 0,
                              },
                    J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
                    $ = J[B],
                    ee = J[F],
                    et = (0, s.u)(0, L[V], X[V]),
                    en = R ? L[V] / 2 - K - et - $ - k.mainAxis : z - et - $ - k.mainAxis,
                    er = R ? -L[V] / 2 + K + et + ee + k.mainAxis : q + et + ee + k.mainAxis,
                    ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
                    ea = ei ? ("y" === D ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    eo = null != (Z = null == U ? void 0 : U[D]) ? Z : 0,
                    es = H + en - eo - ea,
                    el = H + er - eo,
                    ec = (0, s.u)(I ? (0, p.VV)(Y, es) : Y, H, I ? (0, p.Fp)(W, el) : W);
                (x[D] = ec), (G[D] = ec - H);
            }
            if (E) {
                var eu,
                    ed = "x" === D ? r.we : r.t$,
                    ef = "x" === D ? r.I : r.F2,
                    ep = x[w],
                    e_ = "y" === w ? "height" : "width",
                    em = ep + A[ed],
                    eh = ep - A[ef],
                    eg = -1 !== [r.we, r.t$].indexOf(N),
                    eE = null != (eu = null == U ? void 0 : U[w]) ? eu : 0,
                    eb = eg ? em : ep - L[e_] - j[e_] - eE + k.altAxis,
                    ey = eg ? ep + L[e_] + j[e_] - eE - k.altAxis : eh,
                    eO = I && eg ? (0, s.q)(eb, ep, ey) : (0, s.u)(I ? eb : em, ep, I ? ey : eh);
                (x[w] = eO), (G[w] = eO - ep);
            }
            t.modifiersData[_] = G;
        }
    },
    requiresIfExists: ["offset"],
};
