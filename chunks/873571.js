var n = l(477900),
    r = l(582128),
    a = l(503698),
    i = l.n(a),
    u = l(70283),
    s = l(855986),
    o = l(220839),
    d = l(775602),
    c = l(998304),
    m = l(49253),
    _ = l(988341),
    f = l(97192),
    g = l(589801);
function b(e, t) {
    return { previousTier: (0, _.YU)(e, t), currentTier: (0, _.DW)(e) };
}
function p(e, t, l) {
    return l ? t?.simple_icon_raster_url : (t?.simple_icon_raster_url ?? e.simple_icon_raster_url);
}
function x(e) {
    return 250 * !!e;
}
function v(e) {
    let {
            badge: t,
            tier: l,
            isStarted: a,
            isAmbient: u,
            isPreviousTier: s = !1,
            onLoad: d,
            className: _,
            fillClassName: b,
        } = e,
        x = s ? (l?.complex_icon_static_url ?? l?.simple_icon_url) : (0, m.NC)(t, l, !0).imageUrl,
        v = s ? l?.complex_icon_animated_url : (0, m.NC)(t, l, !1).animatedUrl,
        [y, h] = r.useState(null),
        A = u && "failed" !== y ? v : void 0;
    (0, o.A)(() => h((e) => e ?? "failed"), null != A && null == y ? 2e3 : null);
    let N = (0, f.C)(p(t, l, s)),
        T = N ?? f.P,
        [E, S] = r.useState(!1),
        C = r.useCallback(() => S(!0), []),
        k = E && null != N && (null == A || "loaded" === y),
        [R, j] = r.useState(null);
    r.useEffect(() => {
        k && (j(a ? "fade-in" : "with-start"), d());
    }, [k]);
    let w = r.useMemo(
        () => ({
            "--custom-badge-unlock-color": T,
            "--custom-badge-unlock-halo": (0, c.KU)(T, 0.6),
            "--custom-badge-unlock-art": null != x ? `url("${x}")` : "none",
        }),
        [T, x],
    );
    return null == x
        ? null
        : (0, n.jsx)("div", {
              className: i()(g.qd, (null == R || !a) && g.R, "fade-in" === R && g.qG),
              style: w,
              children: (0, n.jsxs)("div", {
                  className: i()(g.qS, _),
                  children: [
                      (0, n.jsx)("img", {
                          className: i()(g.Qw, null != A && "loaded" === y && g.e0),
                          src: x,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: C,
                          onError: C,
                      }),
                      null != A &&
                          (0, n.jsx)("div", {
                              className: g.gN,
                              children: (0, n.jsx)("img", {
                                  className: g.G,
                                  src: A,
                                  alt: "",
                                  draggable: !1,
                                  onLoad: () => h("loaded"),
                                  onError: () => h("failed"),
                              }),
                          }),
                      (0, n.jsx)("div", { className: i()(g.ys, b), children: (0, n.jsx)("div", { className: g.GS }) }),
                  ],
              }),
          });
}
l.d(
    t,
    {},
    {
        AO: p,
        Ay: function (e) {
            let { badge: t, previousTierKey: l, size: a, startDelay: o, canStart: c = !0, onStart: m } = e,
                _ = (0, s.bG)([d.Ay], () => d.Ay.useReducedMotion),
                { previousTier: f, currentTier: p } = b(t, l),
                y = null != f,
                h = y && !_,
                A = t.badge_id === u.$.PREMIUM_TENURE && !_,
                N = o + x(y),
                [T, E] = r.useState(0),
                S = r.useCallback(() => E((e) => e + 1), []),
                [C, k] = r.useState(!1),
                R = T >= (h ? 2 : 1),
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
            let P = r.useMemo(() => ({ "--custom-badge-unlock-swap": `${N}ms` }), [N]);
            return (0, n.jsxs)("div", {
                className: i()(g.Os, "large" === a ? g.as : g.EX, $ && (y ? g.xH : g.YC)),
                style: P,
                children: [
                    h &&
                        !w &&
                        (0, n.jsx)(v, {
                            badge: t,
                            tier: f,
                            isStarted: j,
                            isAmbient: A,
                            isPreviousTier: !0,
                            onLoad: S,
                            className: i()($ && g.rH),
                            fillClassName: i()(g.Nl, $ && g.Rt),
                        }),
                    (0, n.jsx)(v, {
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
