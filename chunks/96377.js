var i = r(740078),
    a = r(126387),
    o = r(205208),
    s = r(792278),
    l = r(464826),
    u = r(493623),
    c = r(343713),
    d = r(510104),
    f = r(632471),
    p = r(607033),
    h = r(894417);
function _(e) {
    var n = e.state,
        r = e.options,
        _ = e.name,
        m = r.mainAxis,
        g = void 0 === m || m,
        E = r.altAxis,
        v = void 0 !== E && E,
        y = r.boundary,
        b = r.rootBoundary,
        I = r.altBoundary,
        T = r.padding,
        S = r.tether,
        A = void 0 === S || S,
        C = r.tetherOffset,
        N = void 0 === C ? 0 : C,
        R = (0, d.Z)(n, {
            boundary: y,
            rootBoundary: b,
            padding: T,
            altBoundary: I
        }),
        O = (0, a.Z)(n.placement),
        D = (0, f.Z)(n.placement),
        L = !D,
        x = (0, o.Z)(O),
        w = (0, s.Z)(x),
        P = n.modifiersData.popperOffsets,
        M = n.rects.reference,
        k = n.rects.popper,
        U = 'function' == typeof N ? N(Object.assign({}, n.rects, { placement: n.placement })) : N,
        B =
            'number' == typeof U
                ? {
                      mainAxis: U,
                      altAxis: U
                  }
                : Object.assign(
                      {
                          mainAxis: 0,
                          altAxis: 0
                      },
                      U
                  ),
        G = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
        Z = {
            x: 0,
            y: 0
        };
    if (!!P) {
        if (g) {
            var F,
                V = 'y' === x ? i.we : i.t$,
                j = 'y' === x ? i.I : i.F2,
                H = 'y' === x ? 'height' : 'width',
                Y = P[x],
                W = Y + R[V],
                K = Y - R[j],
                z = A ? -k[H] / 2 : 0,
                q = D === i.BL ? M[H] : k[H],
                Q = D === i.BL ? -k[H] : -M[H],
                X = n.elements.arrow,
                J =
                    A && X
                        ? (0, u.Z)(X)
                        : {
                              width: 0,
                              height: 0
                          },
                $ = n.modifiersData['arrow#persistent'] ? n.modifiersData['arrow#persistent'].padding : (0, p.Z)(),
                ee = $[V],
                et = $[j],
                en = (0, l.u)(0, M[H], J[H]),
                er = L ? M[H] / 2 - z - en - ee - B.mainAxis : q - en - ee - B.mainAxis,
                ei = L ? -M[H] / 2 + z + en + et + B.mainAxis : Q + en + et + B.mainAxis,
                ea = n.elements.arrow && (0, c.Z)(n.elements.arrow),
                eo = ea ? ('y' === x ? ea.clientTop || 0 : ea.clientLeft || 0) : 0,
                es = null != (F = null == G ? void 0 : G[x]) ? F : 0,
                el = Y + er - es - eo,
                eu = Y + ei - es,
                ec = (0, l.u)(A ? (0, h.VV)(W, el) : W, Y, A ? (0, h.Fp)(K, eu) : K);
            (P[x] = ec), (Z[x] = ec - Y);
        }
        if (v) {
            var ed,
                ef = 'x' === x ? i.we : i.t$,
                ep = 'x' === x ? i.I : i.F2,
                eh = P[w],
                e_ = 'y' === w ? 'height' : 'width',
                em = eh + R[ef],
                eg = eh - R[ep],
                eE = -1 !== [i.we, i.t$].indexOf(O),
                ev = null != (ed = null == G ? void 0 : G[w]) ? ed : 0,
                ey = eE ? em : eh - M[e_] - k[e_] - ev + B.altAxis,
                eb = eE ? eh + M[e_] + k[e_] - ev - B.altAxis : eg,
                eI = A && eE ? (0, l.q)(ey, eh, eb) : (0, l.u)(A ? ey : em, eh, A ? eb : eg);
            (P[w] = eI), (Z[w] = eI - eh);
        }
        n.modifiersData[_] = Z;
    }
}
n.Z = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: _,
    requiresIfExists: ['offset']
};
