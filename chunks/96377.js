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
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
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
            N = (0, u.Z)(t, {
                boundary: b,
                rootBoundary: y,
                padding: v,
                altBoundary: O
            }),
            C = (0, i.Z)(t.placement),
            w = (0, d.Z)(t.placement),
            R = !w,
            P = (0, a.Z)(C),
            D = (0, o.Z)(P),
            L = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            k = t.rects.popper,
            j = 'function' == typeof A ? A(Object.assign({}, t.rects, { placement: t.placement })) : A,
            M =
                'number' == typeof j
                    ? {
                          mainAxis: j,
                          altAxis: j
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0
                          },
                          j
                      ),
            U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            G = {
                x: 0,
                y: 0
            };
        if (L) {
            if (m) {
                var B,
                    Z = 'y' === P ? r.we : r.t$,
                    F = 'y' === P ? r.I : r.F2,
                    V = 'y' === P ? 'height' : 'width',
                    H = L[P],
                    Y = H + N[Z],
                    W = H - N[F],
                    K = T ? -k[V] / 2 : 0,
                    z = w === r.BL ? x[V] : k[V],
                    q = w === r.BL ? -k[V] : -x[V],
                    $ = t.elements.arrow,
                    X =
                        T && $
                            ? (0, l.Z)($)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    Q = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, f.Z)(),
                    J = Q[Z],
                    ee = Q[F],
                    et = (0, s.u)(0, x[V], X[V]),
                    en = R ? x[V] / 2 - K - et - J - M.mainAxis : z - et - J - M.mainAxis,
                    er = R ? -x[V] / 2 + K + et + ee + M.mainAxis : q + et + ee + M.mainAxis,
                    ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
                    ea = ei ? ('y' === P ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    eo = null != (B = null == U ? void 0 : U[P]) ? B : 0,
                    es = H + en - eo - ea,
                    el = H + er - eo,
                    ec = (0, s.u)(T ? (0, _.VV)(Y, es) : Y, H, T ? (0, _.Fp)(W, el) : W);
                ((L[P] = ec), (G[P] = ec - H));
            }
            if (E) {
                var eu,
                    ed = 'x' === P ? r.we : r.t$,
                    ef = 'x' === P ? r.I : r.F2,
                    e_ = L[D],
                    ep = 'y' === D ? 'height' : 'width',
                    eh = e_ + N[ed],
                    em = e_ - N[ef],
                    eg = -1 !== [r.we, r.t$].indexOf(C),
                    eE = null != (eu = null == U ? void 0 : U[D]) ? eu : 0,
                    eb = eg ? eh : e_ - x[ep] - k[ep] - eE + M.altAxis,
                    ey = eg ? e_ + x[ep] + k[ep] - eE - M.altAxis : em,
                    eO = T && eg ? (0, s.q)(eb, e_, ey) : (0, s.u)(T ? eb : eh, e_, T ? ey : em);
                ((L[D] = eO), (G[D] = eO - e_));
            }
            t.modifiersData[p] = G;
        }
    },
    requiresIfExists: ['offset']
};
