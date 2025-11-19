n.d(t, { Z: () => p });
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
    _ = n(894417);
let p = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
        var t = e.state,
            n = e.options,
            p = e.name,
            h = n.mainAxis,
            m = void 0 === h || h,
            g = n.altAxis,
            E = void 0 !== g && g,
            b = n.boundary,
            y = n.rootBoundary,
            O = n.altBoundary,
            v = n.padding,
            I = n.tether,
            T = void 0 === I || I,
            S = n.tetherOffset,
            A = void 0 === S ? 0 : S,
            C = (0, u.Z)(t, {
                boundary: b,
                rootBoundary: y,
                padding: v,
                altBoundary: O,
            }),
            N = (0, i.Z)(t.placement),
            R = (0, d.Z)(t.placement),
            P = !R,
            D = (0, a.Z)(N),
            w = (0, o.Z)(D),
            L = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            M = t.rects.popper,
            j = "function" == typeof A ? A(Object.assign({}, t.rects, { placement: t.placement })) : A,
            k =
                "number" == typeof j
                    ? {
                          mainAxis: j,
                          altAxis: j,
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0,
                          },
                          j,
                      ),
            U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            G = {
                x: 0,
                y: 0,
            };
        if (L) {
            if (m) {
                var B,
                    Z = "y" === D ? r.we : r.t$,
                    F = "y" === D ? r.I : r.F2,
                    V = "y" === D ? "height" : "width",
                    H = L[D],
                    Y = H + C[Z],
                    W = H - C[F],
                    K = T ? -M[V] / 2 : 0,
                    z = R === r.BL ? x[V] : M[V],
                    q = R === r.BL ? -M[V] : -x[V],
                    X = t.elements.arrow,
                    Q =
                        T && X
                            ? (0, l.Z)(X)
                            : {
                                  width: 0,
                                  height: 0,
                              },
                    J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
                    $ = J[Z],
                    ee = J[F],
                    et = (0, s.u)(0, x[V], Q[V]),
                    en = P ? x[V] / 2 - K - et - $ - k.mainAxis : z - et - $ - k.mainAxis,
                    er = P ? -x[V] / 2 + K + et + ee + k.mainAxis : q + et + ee + k.mainAxis,
                    ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
                    ea = ei ? ("y" === D ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    eo = null != (B = null == U ? void 0 : U[D]) ? B : 0,
                    es = H + en - eo - ea,
                    el = H + er - eo,
                    ec = (0, s.u)(T ? (0, _.VV)(Y, es) : Y, H, T ? (0, _.Fp)(W, el) : W);
                (L[D] = ec), (G[D] = ec - H);
            }
            if (E) {
                var eu,
                    ed = "x" === D ? r.we : r.t$,
                    ef = "x" === D ? r.I : r.F2,
                    e_ = L[w],
                    ep = "y" === w ? "height" : "width",
                    eh = e_ + C[ed],
                    em = e_ - C[ef],
                    eg = -1 !== [r.we, r.t$].indexOf(N),
                    eE = null != (eu = null == U ? void 0 : U[w]) ? eu : 0,
                    eb = eg ? eh : e_ - x[ep] - M[ep] - eE + k.altAxis,
                    ey = eg ? e_ + x[ep] + M[ep] - eE - k.altAxis : em,
                    eO = T && eg ? (0, s.q)(eb, e_, ey) : (0, s.u)(T ? eb : eh, e_, T ? ey : em);
                (L[w] = eO), (G[w] = eO - e_);
            }
            t.modifiersData[p] = G;
        }
    },
    requiresIfExists: ["offset"],
};
