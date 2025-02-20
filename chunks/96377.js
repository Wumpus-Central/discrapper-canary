n.d(t, { Z: () => _ });
var r = n(740078),
    i = n(126387),
    o = n(205208),
    a = n(792278),
    s = n(464826),
    l = n(493623),
    c = n(343713),
    u = n(510104),
    d = n(632471),
    f = n(607033),
    p = n(894417);
let _ = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            _ = e.name,
            h = n.mainAxis,
            m = void 0 === h || h,
            g = n.altAxis,
            E = void 0 !== g && g,
            v = n.boundary,
            b = n.rootBoundary,
            y = n.altBoundary,
            O = n.padding,
            S = n.tether,
            I = void 0 === S || S,
            T = n.tetherOffset,
            N = void 0 === T ? 0 : T,
            A = (0, u.Z)(t, {
                boundary: v,
                rootBoundary: b,
                padding: O,
                altBoundary: y
            }),
            C = (0, i.Z)(t.placement),
            R = (0, d.Z)(t.placement),
            P = !R,
            w = (0, o.Z)(C),
            D = (0, a.Z)(w),
            x = t.modifiersData.popperOffsets,
            L = t.rects.reference,
            M = t.rects.popper,
            k = 'function' == typeof N ? N(Object.assign({}, t.rects, { placement: t.placement })) : N,
            j =
                'number' == typeof k
                    ? {
                          mainAxis: k,
                          altAxis: k
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0
                          },
                          k
                      ),
            U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            G = {
                x: 0,
                y: 0
            };
        if (x) {
            if (m) {
                var B,
                    Z = 'y' === w ? r.we : r.t$,
                    F = 'y' === w ? r.I : r.F2,
                    V = 'y' === w ? 'height' : 'width',
                    H = x[w],
                    W = H + A[Z],
                    Y = H - A[F],
                    K = I ? -M[V] / 2 : 0,
                    z = R === r.BL ? L[V] : M[V],
                    q = R === r.BL ? -M[V] : -L[V],
                    Q = t.elements.arrow,
                    X =
                        I && Q
                            ? (0, l.Z)(Q)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    J = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, f.Z)(),
                    $ = J[Z],
                    ee = J[F],
                    et = (0, s.u)(0, L[V], X[V]),
                    en = P ? L[V] / 2 - K - et - $ - j.mainAxis : z - et - $ - j.mainAxis,
                    er = P ? -L[V] / 2 + K + et + ee + j.mainAxis : q + et + ee + j.mainAxis,
                    ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
                    eo = ei ? ('y' === w ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    ea = null != (B = null == U ? void 0 : U[w]) ? B : 0,
                    es = H + en - ea - eo,
                    el = H + er - ea,
                    ec = (0, s.u)(I ? (0, p.VV)(W, es) : W, H, I ? (0, p.Fp)(Y, el) : Y);
                (x[w] = ec), (G[w] = ec - H);
            }
            if (E) {
                var eu,
                    ed = 'x' === w ? r.we : r.t$,
                    ef = 'x' === w ? r.I : r.F2,
                    ep = x[D],
                    e_ = 'y' === D ? 'height' : 'width',
                    eh = ep + A[ed],
                    em = ep - A[ef],
                    eg = -1 !== [r.we, r.t$].indexOf(C),
                    eE = null != (eu = null == U ? void 0 : U[D]) ? eu : 0,
                    ev = eg ? eh : ep - L[e_] - M[e_] - eE + j.altAxis,
                    eb = eg ? ep + L[e_] + M[e_] - eE - j.altAxis : em,
                    ey = I && eg ? (0, s.q)(ev, ep, eb) : (0, s.u)(I ? ev : eh, ep, I ? eb : em);
                (x[D] = ey), (G[D] = ey - ep);
            }
            t.modifiersData[_] = G;
        }
    },
    requiresIfExists: ['offset']
};
