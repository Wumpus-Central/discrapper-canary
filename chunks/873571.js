var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(70283),
    u = n(855986),
    o = n(220839),
    d = n(775602),
    c = n(998304),
    m = n(49253),
    _ = n(988341),
    f = n(97192),
    b = n(589801);
function g(e, t) {
    return { previousTier: (0, _.YU)(e, t), currentTier: (0, _.DW)(e) };
}
function p(e, t, n) {
    return n ? t?.simple_icon_raster_url : (t?.simple_icon_raster_url ?? e.simple_icon_raster_url);
}
function x(e) {
    return 250 * !!e;
}
function v(e) {
    let {
            badge: t,
            tier: n,
            isStarted: a,
            isAmbient: s,
            isPreviousTier: u = !1,
            onLoad: d,
            className: _,
            fillClassName: g,
        } = e,
        x = u ? (n?.complex_icon_static_url ?? n?.simple_icon_url) : (0, m.NC)(t, n, !0).imageUrl,
        v = u ? n?.complex_icon_animated_url : (0, m.NC)(t, n, !1).animatedUrl,
        [S, y] = r.useState(null),
        T = s && "failed" !== S ? v : void 0;
    (0, o.A)(() => y((e) => e ?? "failed"), null != T && null == S ? 2e3 : null);
    let A = (0, f.C)(p(t, n, u)),
        N = A ?? f.P,
        [h, E] = r.useState(!1),
        C = r.useCallback(() => E(!0), []),
        R = h && null != A && (null == T || "loaded" === S),
        [k, U] = r.useState(!1);
    r.useEffect(() => {
        R && (U(!0), d());
    }, [R]);
    let j = r.useMemo(
        () => ({
            "--custom-badge-unlock-color": N,
            "--custom-badge-unlock-halo": (0, c.KU)(N, 0.6),
            "--custom-badge-unlock-art": null != x ? `url("${x}")` : "none",
        }),
        [N, x],
    );
    return null == x
        ? null
        : (0, l.jsx)("div", {
              className: i()(b.qd, k && a ? b.qG : b.R),
              style: j,
              children: (0, l.jsxs)("div", {
                  className: i()(b.qS, _),
                  children: [
                      (0, l.jsx)("img", {
                          className: i()(b.Qw, null != T && "loaded" === S && b.e0),
                          src: x,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: C,
                          onError: C,
                      }),
                      null != T &&
                          (0, l.jsx)("div", {
                              className: b.gN,
                              children: (0, l.jsx)("img", {
                                  className: b.G,
                                  src: T,
                                  alt: "",
                                  draggable: !1,
                                  onLoad: () => y("loaded"),
                                  onError: () => y("failed"),
                              }),
                          }),
                      (0, l.jsx)("div", { className: i()(b.ys, g), children: (0, l.jsx)("div", { className: b.GS }) }),
                  ],
              }),
          });
}
n.d(
    t,
    {},
    {
        AO: p,
        Ay: function (e) {
            let { badge: t, previousTierKey: n, size: a, startDelay: o, canStart: c = !0, onStart: m } = e,
                _ = (0, u.bG)([d.Ay], () => d.Ay.useReducedMotion),
                { previousTier: f, currentTier: p } = g(t, n),
                S = null != f,
                y = S && !_,
                T = t.badge_id === s.$.PREMIUM_TENURE && !_,
                A = o + x(S),
                [N, h] = r.useState(0),
                E = r.useCallback(() => h((e) => e + 1), []),
                [C, R] = r.useState(!1),
                k = N >= (y ? 2 : 1),
                U = c && (k || C),
                [j, w] = r.useState(!1);
            !U || k || j || w(!0);
            let O = U && !_ && !j;
            (r.useEffect(() => {
                if (!c) return;
                let e = setTimeout(() => R(!0), 3e3);
                return () => clearTimeout(e);
            }, [c]),
                r.useEffect(() => {
                    U && m?.(j);
                }, [U]));
            let $ = r.useMemo(() => ({ "--custom-badge-unlock-swap": `${A}ms` }), [A]);
            return (0, l.jsxs)("div", {
                className: i()(b.Os, "large" === a ? b.as : b.EX, O && (S ? b.xH : b.YC)),
                style: $,
                children: [
                    y &&
                        !j &&
                        (0, l.jsx)(v, {
                            badge: t,
                            tier: f,
                            isStarted: U,
                            isAmbient: T,
                            isPreviousTier: !0,
                            onLoad: E,
                            className: i()(O && b.rH),
                            fillClassName: i()(b.Nl, O && b.Rt),
                        }),
                    (0, l.jsx)(v, {
                        badge: t,
                        tier: p,
                        isStarted: U,
                        isAmbient: T,
                        onLoad: E,
                        className: i()(O && b.CN),
                        fillClassName: i()(O && b.Eq),
                    }),
                ],
            });
        },
        VR: g,
        ux: x,
    },
);
