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
            S = void 0 === I || I,
            T = n.tetherOffset,
            A = void 0 === T ? 0 : T,
            N = (0, u.Z)(t, {
                boundary: b,
                rootBoundary: y,
                padding: v,
                altBoundary: O
            }),
            C = (0, i.Z)(t.placement),
            R = (0, d.Z)(t.placement),
            P = !R,
            w = (0, a.Z)(C),
            D = (0, o.Z)(w),
            L = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            M = t.rects.popper,
            k = 'function' == typeof A ? A(Object.assign({}, t.rects, { placement: t.placement })) : A,
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
        if (L) {
            if (m) {
                var B,
                    V = 'y' === w ? r.we : r.t$,
                    F = 'y' === w ? r.I : r.F2,
                    Z = 'y' === w ? 'height' : 'width',
                    H = L[w],
                    Y = H + N[V],
                    W = H - N[F],
                    K = S ? -M[Z] / 2 : 0,
                    z = R === r.BL ? x[Z] : M[Z],
                    q = R === r.BL ? -M[Z] : -x[Z],
                    Q = t.elements.arrow,
                    X =
                        S && Q
                            ? (0, l.Z)(Q)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    J = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, f.Z)(),
                    $ = J[V],
                    ee = J[F],
                    et = (0, s.u)(0, x[Z], X[Z]),
                    en = P ? x[Z] / 2 - K - et - $ - j.mainAxis : z - et - $ - j.mainAxis,
                    er = P ? -x[Z] / 2 + K + et + ee + j.mainAxis : q + et + ee + j.mainAxis,
                    ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
                    ea = ei ? ('y' === w ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    eo = null != (B = null == U ? void 0 : U[w]) ? B : 0,
                    es = H + en - eo - ea,
                    el = H + er - eo,
                    ec = (0, s.u)(S ? (0, _.VV)(Y, es) : Y, H, S ? (0, _.Fp)(W, el) : W);
                (L[w] = ec), (G[w] = ec - H);
            }
            if (E) {
                var eu,
                    ed = 'x' === w ? r.we : r.t$,
                    ef = 'x' === w ? r.I : r.F2,
                    e_ = L[D],
                    ep = 'y' === D ? 'height' : 'width',
                    eh = e_ + N[ed],
                    em = e_ - N[ef],
                    eg = -1 !== [r.we, r.t$].indexOf(C),
                    eE = null != (eu = null == U ? void 0 : U[D]) ? eu : 0,
                    eb = eg ? eh : e_ - x[ep] - M[ep] - eE + j.altAxis,
                    ey = eg ? e_ + x[ep] + M[ep] - eE - j.altAxis : em,
                    eO = S && eg ? (0, s.q)(eb, e_, ey) : (0, s.u)(S ? eb : eh, e_, S ? ey : em);
                (L[D] = eO), (G[D] = eO - e_);
            }
            t.modifiersData[p] = G;
        }
    },
    requiresIfExists: ['offset']
};
