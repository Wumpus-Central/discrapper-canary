n.d(t, { Z: () => p });
var i = n(740078),
    r = n(126387),
    a = n(205208),
    s = n(792278),
    o = n(464826),
    l = n(493623),
    u = n(343713),
    c = n(510104),
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
            v = n.boundary,
            y = n.rootBoundary,
            I = n.altBoundary,
            T = n.padding,
            b = n.tether,
            S = void 0 === b || b,
            A = n.tetherOffset,
            N = void 0 === A ? 0 : A,
            C = (0, c.Z)(t, {
                boundary: v,
                rootBoundary: y,
                padding: T,
                altBoundary: I
            }),
            R = (0, r.Z)(t.placement),
            O = (0, d.Z)(t.placement),
            D = !O,
            L = (0, a.Z)(R),
            x = (0, s.Z)(L),
            w = t.modifiersData.popperOffsets,
            P = t.rects.reference,
            M = t.rects.popper,
            k = 'function' == typeof N ? N(Object.assign({}, t.rects, { placement: t.placement })) : N,
            U =
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
            G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            B = {
                x: 0,
                y: 0
            };
        if (w) {
            if (m) {
                var Z,
                    F = 'y' === L ? i.we : i.t$,
                    V = 'y' === L ? i.I : i.F2,
                    j = 'y' === L ? 'height' : 'width',
                    H = w[L],
                    Y = H + C[F],
                    W = H - C[V],
                    K = S ? -M[j] / 2 : 0,
                    z = O === i.BL ? P[j] : M[j],
                    q = O === i.BL ? -M[j] : -P[j],
                    Q = t.elements.arrow,
                    X =
                        S && Q
                            ? (0, l.Z)(Q)
                            : {
                                  width: 0,
                                  height: 0
                              },
                    J = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, f.Z)(),
                    $ = J[F],
                    ee = J[V],
                    et = (0, o.u)(0, P[j], X[j]),
                    en = D ? P[j] / 2 - K - et - $ - U.mainAxis : z - et - $ - U.mainAxis,
                    ei = D ? -P[j] / 2 + K + et + ee + U.mainAxis : q + et + ee + U.mainAxis,
                    er = t.elements.arrow && (0, u.Z)(t.elements.arrow),
                    ea = er ? ('y' === L ? er.clientTop || 0 : er.clientLeft || 0) : 0,
                    es = null != (Z = null == G ? void 0 : G[L]) ? Z : 0,
                    eo = H + en - es - ea,
                    el = H + ei - es,
                    eu = (0, o.u)(S ? (0, _.VV)(Y, eo) : Y, H, S ? (0, _.Fp)(W, el) : W);
                (w[L] = eu), (B[L] = eu - H);
            }
            if (E) {
                var ec,
                    ed = 'x' === L ? i.we : i.t$,
                    ef = 'x' === L ? i.I : i.F2,
                    e_ = w[x],
                    ep = 'y' === x ? 'height' : 'width',
                    eh = e_ + C[ed],
                    em = e_ - C[ef],
                    eg = -1 !== [i.we, i.t$].indexOf(R),
                    eE = null != (ec = null == G ? void 0 : G[x]) ? ec : 0,
                    ev = eg ? eh : e_ - P[ep] - M[ep] - eE + U.altAxis,
                    ey = eg ? e_ + P[ep] + M[ep] - eE - U.altAxis : em,
                    eI = S && eg ? (0, o.q)(ev, e_, ey) : (0, o.u)(S ? ev : eh, e_, S ? ey : em);
                (w[x] = eI), (B[x] = eI - e_);
            }
            t.modifiersData[p] = B;
        }
    },
    requiresIfExists: ['offset']
};
