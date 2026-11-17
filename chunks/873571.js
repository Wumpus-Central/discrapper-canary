var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(855986),
    s = n(775602),
    o = n(998304),
    c = n(49253),
    d = n(988341),
    m = n(97192),
    _ = n(589801);
function f(e, t) {
    return { previousTier: (0, d.YU)(e, t), currentTier: (0, d.DW)(e) };
}
function g(e, t, n) {
    return n ? t?.simple_icon_raster_url : (t?.simple_icon_raster_url ?? e.simple_icon_raster_url);
}
function p(e) {
    return 250 * !!e;
}
function b(e) {
    let { badge: t, tier: n, isStarted: a, isPreviousTier: u = !1, onLoad: s, className: d, fillClassName: f } = e,
        p = u ? (n?.complex_icon_static_url ?? n?.simple_icon_url) : (0, c.NC)(t, n, !0).imageUrl,
        b = (0, m.C)(g(t, n, u)),
        x = b ?? m.P,
        [y, v] = l.useState(!1),
        h = l.useCallback(() => v(!0), []),
        T = y && null != b,
        [S, A] = l.useState(null);
    l.useEffect(() => {
        T && (A(a ? "fade-in" : "with-start"), s());
    }, [T]);
    let E = l.useMemo(
        () => ({
            "--custom-badge-unlock-color": x,
            "--custom-badge-unlock-halo": (0, o.KU)(x, 0.6),
            "--custom-badge-unlock-art": null != p ? `url("${p}")` : "none",
        }),
        [x, p],
    );
    return null == p
        ? null
        : (0, r.jsx)("div", {
              className: i()(_.qd, (null == S || !a) && _.R, "fade-in" === S && _.qG),
              style: E,
              children: (0, r.jsxs)("div", {
                  className: i()(_.qS, d),
                  children: [
                      (0, r.jsx)("img", {
                          className: _.Qw,
                          src: p,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: h,
                          onError: h,
                      }),
                      (0, r.jsx)("div", { className: i()(_.ys, f), children: (0, r.jsx)("div", { className: _.GS }) }),
                  ],
              }),
          });
}
n.d(
    t,
    {},
    {
        AO: g,
        Ay: function (e) {
            let { badge: t, previousTierKey: n, size: a, startDelay: o, canStart: c = !0, onStart: d } = e,
                m = (0, u.bG)([s.Ay], () => s.Ay.useReducedMotion),
                { previousTier: g, currentTier: x } = f(t, n),
                y = null != g,
                v = y && !m,
                h = o + p(y),
                [T, S] = l.useState(0),
                A = l.useCallback(() => S((e) => e + 1), []),
                [E, N] = l.useState(!1),
                C = T >= (v ? 2 : 1),
                k = c && (C || E),
                [w, R] = l.useState(!1);
            !k || C || w || R(!0);
            let j = k && !m && !w;
            (l.useEffect(() => {
                if (!c) return;
                let e = setTimeout(() => N(!0), 3e3);
                return () => clearTimeout(e);
            }, [c]),
                l.useEffect(() => {
                    k && d?.(w);
                }, [k]));
            let U = l.useMemo(() => ({ "--custom-badge-unlock-swap": `${h}ms` }), [h]);
            return (0, r.jsxs)("div", {
                className: i()(_.Os, "large" === a ? _.as : _.EX, j && (y ? _.xH : _.YC)),
                style: U,
                children: [
                    v &&
                        !w &&
                        (0, r.jsx)(b, {
                            badge: t,
                            tier: g,
                            isStarted: k,
                            isPreviousTier: !0,
                            onLoad: A,
                            className: i()(j && _.rH),
                            fillClassName: i()(_.Nl, j && _.Rt),
                        }),
                    (0, r.jsx)(b, {
                        badge: t,
                        tier: x,
                        isStarted: k,
                        onLoad: A,
                        className: i()(j && _.CN),
                        fillClassName: i()(j && _.Eq),
                    }),
                ],
            });
        },
        VR: f,
        ux: p,
    },
);
