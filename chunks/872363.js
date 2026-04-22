n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(517738),
    o = n(23339),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    h = n(319060),
    m = n(192308),
    A = n(939249),
    g = n(403581),
    p = n(777666),
    _ = n(844222),
    f = n(866323),
    E = n(717421),
    C = n(212245),
    x = n(688810),
    S = n(402216),
    I = n(287809),
    N = n(954571),
    v = n(927578),
    T = n(650338),
    y = n(821715),
    b = n(652215),
    j = n(788868),
    R = n(985018),
    M = n(18238);
let L = (0, o.xI)(h.A.LIVE_INDICATOR_BORDER_RADIUS),
    D = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    P = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    O = { opacity: 0 },
    w = { opacity: 1 },
    U = { borderRadius: `${L}px ${L}px ${L}px ${L}px` },
    k = { borderRadius: `0px ${L}px ${L}px 0px` },
    G = { mass: 1, tension: 500, friction: 18, clamp: !0 },
    F = (e) => {
        let t,
            a,
            {
                participant: r,
                isUpsellEnabled: o,
                shape: h,
                size: _,
                didTrackUpsellViewed: f,
                setDidTrackUpsellViewed: E,
                className: L,
                premiumIndicator: D,
                quality: P,
            } = e,
            { analyticsLocations: O } = (0, x.Ay)(),
            w = null != (0, y.A)(r);
        try {
            t = (0, T.HB)(P);
        } catch (e) {
            t = !1;
        }
        try {
            a = (0, T.OI)(P);
        } catch (e) {
            a = !1;
        }
        let U = t || a,
            { location: k } = (0, C.p)(),
            G = (0, c.bG)([I.default], () => I.default.getCurrentUser()),
            F = o && !v.Ay.isPremium(G, j.PremiumTypes.TIER_1) && !v.Ay.canStreamQuality(v.Ay.StreamQuality.MID, G),
            H = l.useCallback(() => {
                F &&
                    U &&
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: k });
                    });
            }, [F, U, k]);
        if (
            (l.useEffect(() => {
                !f &&
                    U &&
                    (N.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: j.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: O,
                    }),
                    E(!0));
            }, [t, a, U, f, E, O]),
            null == P)
        )
            return null;
        let B = (0, i.jsx)(u.m, {
            text: w ? R.intl.string(R.t.q8TiVt) : U ? R.intl.string(R.t.IHgpEn) : R.intl.string(R.t.vLb0VW),
            position: "bottom",
            children: (0, i.jsxs)(A.D, {
                onClick: H,
                className: s()(M.t5, _, S.u1[h], w ? M.Y5 : M.Lc, { [M.vk]: F && U }),
                children: [
                    U ? (0, i.jsx)(g.t, { size: "md", color: "currentColor", className: M.fY }) : null,
                    (0, i.jsx)("span", { className: M.UD, children: (0, T.ME)(P.maxResolution) }),
                    (0, i.jsx)("span", { children: (0, T.Bs)(P.maxFrameRate) }),
                ],
            }),
        });
        return (0, i.jsx)(p.Lp, {
            text: B,
            className: s()(L, M.AA, { [M.Dc]: U && D }),
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            shape: S.u1[h],
        });
    },
    H = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: c, premiumIndicator: d } = e,
            [u, h] = l.useState(!1),
            m = (0, T.N5)(t),
            { reducedMotion: A } = l.useContext(_.C),
            g = n && null != m,
            C = (0, f.p)(
                g,
                { enter: { from: A.enabled ? O : D, to: A.enabled ? w : P }, leave: A.enabled ? O : D, config: G },
                "animate-always",
            ),
            x = (0, E.z)({ to: g ? k : U, config: G }, "animate-always");
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, i.jsxs)("div", {
                className: s()(M.dr, n),
                ...l,
                children: [
                    C((e, n) =>
                        n
                            ? (0, i.jsx)(r.animated.div, {
                                  style: e,
                                  children: (0, i.jsx)(F, {
                                      className: M.LZ,
                                      participant: t,
                                      size: o,
                                      shape: p.EG.ROUND_LEFT,
                                      isUpsellEnabled: a,
                                      didTrackUpsellViewed: u,
                                      setDidTrackUpsellViewed: h,
                                      premiumIndicator: d,
                                      quality: m,
                                  }),
                              })
                            : null,
                    ),
                    (0, i.jsx)(r.animated.div, {
                        style: x,
                        className: M.Ok,
                        children: (0, i.jsx)(S.Ay, {
                            look: S.gv.RED,
                            size: o,
                            shape: g ? p.EG.ROUND_RIGHT : p.EG.ROUND,
                        }),
                    }),
                ],
            });
        })({ className: c });
    };
