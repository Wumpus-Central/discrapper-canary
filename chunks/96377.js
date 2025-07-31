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
    _ = n(607033),
    f = n(894417);
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
            R = (0, d.Z)(t.placement),
            P = !R,
            w = (0, a.Z)(C),
            D = (0, o.Z)(w),
            L = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            k = t.rects.popper,
            M = 'function' == typeof A ? A(Object.assign({}, t.rects, { placement: t.placement })) : A,
            j =
                'number' == typeof M
                    ? {
                          mainAxis: M,
                          altAxis: M
                      }
                    : Object.assign(
                          {
                              mainAxis: 0,
                              altAxis: 0
                          },
                          M
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
                    K = T ? -k[Z] / 2 : 0,
                    z = R === r.BL ? x[Z] : k[Z],
                    q = R === r.BL ? -k[Z] : -x[Z],
                    X = t.elements.arrow,
                    Q =
                        T && X
                            ? (0, l.Z)(X)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    J = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, _.Z)(),
                    $ = J[V],
                    ee = J[F],
                    et = (0, s.u)(0, x[Z], Q[Z]),
                    en = P ? x[Z] / 2 - K - et - $ - j.mainAxis : z - et - $ - j.mainAxis,
                    er = P ? -x[Z] / 2 + K + et + ee + j.mainAxis : q + et + ee + j.mainAxis,
                    ei = t.elements.arrow && (0, c.Z)(t.elements.arrow),
                    ea = ei ? ('y' === w ? ei.clientTop || 0 : ei.clientLeft || 0) : 0,
                    eo = null != (B = null == U ? void 0 : U[w]) ? B : 0,
                    es = H + en - eo - ea,
                    el = H + er - eo,
                    ec = (0, s.u)(T ? (0, f.VV)(Y, es) : Y, H, T ? (0, f.Fp)(W, el) : W);
                ((L[w] = ec), (G[w] = ec - H));
            }
            if (E) {
                var eu,
                    ed = 'x' === w ? r.we : r.t$,
                    e_ = 'x' === w ? r.I : r.F2,
                    ef = L[D],
                    ep = 'y' === D ? 'height' : 'width',
                    eh = ef + N[ed],
                    em = ef - N[e_],
                    eg = -1 !== [r.we, r.t$].indexOf(C),
                    eE = null != (eu = null == U ? void 0 : U[D]) ? eu : 0,
                    eb = eg ? eh : ef - x[ep] - k[ep] - eE + j.altAxis,
                    ey = eg ? ef + x[ep] + k[ep] - eE - j.altAxis : em,
                    eO = T && eg ? (0, s.q)(eb, ef, ey) : (0, s.u)(T ? eb : eh, ef, T ? ey : em);
                ((L[D] = eO), (G[D] = eO - ef));
            }
            t.modifiersData[p] = G;
        }
    },
    requiresIfExists: ['offset']
};
