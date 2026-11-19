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
        h = u && "failed" !== y ? v : void 0;
    (0, o.A)(() => T((e) => e ?? "failed"), null != h && null == y ? 2e3 : null);
    let A = (0, f.C)(p(t, n, s)),
        N = A ?? f.P,
        [E, S] = r.useState(!1),
        C = r.useCallback(() => S(!0), []),
        k = E && null != A && (null == h || "loaded" === y),
        [R, j] = r.useState(null);
    r.useEffect(() => {
        k && (j(a ? "fade-in" : "with-start"), d());
    }, [k]);
    let w = r.useMemo(
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
              className: i()(g.qd, (null == R || !a) && g.R, "fade-in" === R && g.qG),
              style: w,
              children: (0, l.jsxs)("div", {
                  className: i()(g.qS, _),
                  children: [
                      (0, l.jsx)("img", {
                          className: i()(g.Qw, null != h && "loaded" === y && g.e0),
                          src: x,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: C,
                          onError: C,
                      }),
                      null != h &&
                          (0, l.jsx)("div", {
                              className: g.gN,
                              children: (0, l.jsx)("img", {
                                  className: g.G,
                                  src: h,
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
                h = t.badge_id === u.$.PREMIUM_TENURE && !_,
                A = o + x(y),
                [N, E] = r.useState(0),
                S = r.useCallback(() => E((e) => e + 1), []),
                [C, k] = r.useState(!1),
                R = N >= (T ? 2 : 1),
                j = c && (R || C),
                [w, U] = r.useState(!1);
            !j || R || w || U(!0);
            let $ = j && !_ && !w;
            (r.useEffect(() => {
                if (!c) return;
                let e = setTimeout(() => k(!0), 3e3);
                return () => clearTimeout(e);
            }, [c]),
                r.useEffect(() => {
                    j && m?.(w);
                }, [j]));
            let O = r.useMemo(() => ({ "--custom-badge-unlock-swap": `${A}ms` }), [A]);
            return (0, l.jsxs)("div", {
                className: i()(g.Os, "large" === a ? g.as : g.EX, $ && (y ? g.xH : g.YC)),
                style: O,
                children: [
                    T &&
                        !w &&
                        (0, l.jsx)(v, {
                            badge: t,
                            tier: f,
                            isStarted: j,
                            isAmbient: h,
                            isPreviousTier: !0,
                            onLoad: S,
                            className: i()($ && g.rH),
                            fillClassName: i()(g.Nl, $ && g.Rt),
                        }),
                    (0, l.jsx)(v, {
                        badge: t,
                        tier: p,
                        isStarted: j,
                        isAmbient: h,
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
