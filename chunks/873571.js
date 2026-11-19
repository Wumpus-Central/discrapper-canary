var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(70283),
    s = n(855986),
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
            isAmbient: u,
            isPreviousTier: s = !1,
            onLoad: d,
            className: _,
            fillClassName: b,
        } = e,
        x = s ? (n?.complex_icon_static_url ?? n?.simple_icon_url) : (0, m.NC)(t, n, !0).imageUrl,
        v = s ? n?.complex_icon_animated_url : (0, m.NC)(t, n, !1).animatedUrl,
        [y, T] = r.useState(null),
        A = u && "failed" !== y ? v : void 0;
    (0, o.A)(() => T((e) => e ?? "failed"), null != A && null == y ? 2e3 : null);
    let N = (0, f.C)(p(t, n, s)),
        h = N ?? f.P,
        [E, S] = r.useState(!1),
        C = r.useCallback(() => S(!0), []),
        k = E && null != N && (null == A || "loaded" === y),
        [R, j] = r.useState(!1);
    r.useEffect(() => {
        k && (j(!0), d());
    }, [k]);
    let U = r.useMemo(
        () => ({
            "--custom-badge-unlock-color": h,
            "--custom-badge-unlock-halo": (0, c.KU)(h, 0.6),
            "--custom-badge-unlock-art": null != x ? `url("${x}")` : "none",
        }),
        [h, x],
    );
    return null == x
        ? null
        : (0, l.jsx)("div", {
              className: i()(g.qd, R && a ? g.qG : g.R),
              style: U,
              children: (0, l.jsxs)("div", {
                  className: i()(g.qS, _),
                  children: [
                      (0, l.jsx)("img", {
                          className: i()(g.Qw, null != A && "loaded" === y && g.e0),
                          src: x,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: C,
                          onError: C,
                      }),
                      null != A &&
                          (0, l.jsx)("div", {
                              className: g.gN,
                              children: (0, l.jsx)("img", {
                                  className: g.G,
                                  src: A,
                                  alt: "",
                                  draggable: !1,
                                  onLoad: () => T("loaded"),
                                  onError: () => T("failed"),
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
                _ = (0, s.bG)([d.Ay], () => d.Ay.useReducedMotion),
                { previousTier: f, currentTier: p } = b(t, n),
                y = null != f,
                T = y && !_,
                A = t.badge_id === u.$.PREMIUM_TENURE && !_,
                N = o + x(y),
                [h, E] = r.useState(0),
                S = r.useCallback(() => E((e) => e + 1), []),
                [C, k] = r.useState(!1),
                R = h >= (T ? 2 : 1),
                j = c && (R || C),
                [U, w] = r.useState(!1);
            !j || R || U || w(!0);
            let $ = j && !_ && !U;
            (r.useEffect(() => {
                if (!c) return;
                let e = setTimeout(() => k(!0), 3e3);
                return () => clearTimeout(e);
            }, [c]),
                r.useEffect(() => {
                    j && m?.(U);
                }, [j]));
            let O = r.useMemo(() => ({ "--custom-badge-unlock-swap": `${N}ms` }), [N]);
            return (0, l.jsxs)("div", {
                className: i()(g.Os, "large" === a ? g.as : g.EX, $ && (y ? g.xH : g.YC)),
                style: O,
                children: [
                    T &&
                        !U &&
                        (0, l.jsx)(v, {
                            badge: t,
                            tier: f,
                            isStarted: j,
                            isAmbient: A,
                            isPreviousTier: !0,
                            onLoad: S,
                            className: i()($ && g.rH),
                            fillClassName: i()(g.Nl, $ && g.Rt),
                        }),
                    (0, l.jsx)(v, {
                        badge: t,
                        tier: p,
                        isStarted: j,
                        isAmbient: A,
                        onLoad: S,
                        className: i()($ && g.CN),
                        fillClassName: i()($ && g.Eq),
                    }),
                ],
            });
        },
        VR: b,
        ux: x,
    },
);
