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
    g = n(589801);
function b(e, t) {
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
            fillClassName: b,
        } = e,
        x = u ? (n?.complex_icon_static_url ?? n?.simple_icon_url) : (0, m.NC)(t, n, !0).imageUrl,
        v = u ? n?.complex_icon_animated_url : (0, m.NC)(t, n, !1).animatedUrl,
        [y, S] = r.useState(null),
        N = s && "failed" !== y ? v : void 0;
    (0, o.A)(() => S((e) => e ?? "failed"), null != N && null == y ? 2e3 : null);
    let T = (0, f.C)(p(t, n, u)),
        A = T ?? f.P,
        [h, E] = r.useState(!1),
        C = r.useCallback(() => E(!0), []),
        R = h && null != T && (null == N || "loaded" === y),
        [k, U] = r.useState(!1);
    r.useEffect(() => {
        R && (U(!0), d());
    }, [R]);
    let j = r.useMemo(
        () => ({
            "--custom-badge-unlock-color": A,
            "--custom-badge-unlock-halo": (0, c.KU)(A, 0.6),
            "--custom-badge-unlock-art": null != x ? `url("${x}")` : "none",
        }),
        [A, x],
    );
    return null == x
        ? null
        : (0, l.jsx)("div", {
              className: i()(g.qd, k && a ? g.qG : g.R),
              style: j,
              children: (0, l.jsxs)("div", {
                  className: i()(g.qS, _),
                  children: [
                      (0, l.jsx)("img", {
                          className: i()(g.Qw, null != N && "loaded" === y && g.e0),
                          src: x,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: C,
                          onError: C,
                      }),
                      null != N &&
                          (0, l.jsx)("div", {
                              className: g.gN,
                              children: (0, l.jsx)("img", {
                                  className: g.G,
                                  src: N,
                                  alt: "",
                                  draggable: !1,
                                  onLoad: () => S("loaded"),
                                  onError: () => S("failed"),
                              }),
                          }),
                      (0, l.jsx)("div", { className: i()(g.ys, b), children: (0, l.jsx)("div", { className: g.GS }) }),
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
                { previousTier: f, currentTier: p } = b(t, n),
                y = null != f,
                S = y && !_,
                N = t.badge_id === s.$.PREMIUM_TENURE && !_,
                T = o + x(y),
                [A, h] = r.useState(0),
                E = r.useCallback(() => h((e) => e + 1), []),
                [C, R] = r.useState(!1),
                k = A >= (S ? 2 : 1),
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
            let $ = r.useMemo(() => ({ "--custom-badge-unlock-swap": `${T}ms` }), [T]);
            return (0, l.jsxs)("div", {
                className: i()(g.Os, "large" === a ? g.as : g.EX, O && (y ? g.xH : g.YC)),
                style: $,
                children: [
                    S &&
                        !j &&
                        (0, l.jsx)(v, {
                            badge: t,
                            tier: f,
                            isStarted: U,
                            isAmbient: N,
                            isPreviousTier: !0,
                            onLoad: E,
                            className: i()(O && g.rH),
                            fillClassName: i()(g.Nl, O && g.Rt),
                        }),
                    (0, l.jsx)(v, {
                        badge: t,
                        tier: p,
                        isStarted: U,
                        isAmbient: N,
                        onLoad: E,
                        className: i()(O && g.CN),
                        fillClassName: i()(O && g.Eq),
                    }),
                ],
            });
        },
        VR: b,
        ux: x,
    },
);
