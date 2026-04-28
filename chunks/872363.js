a.d(t, { A: () => G });
var s = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    n = a(123924),
    c = a(23339),
    o = a(17928),
    p = a(661531),
    u = a(990078),
    _ = a(319060),
    d = a(192308),
    m = a(939249),
    E = a(403581),
    A = a(777666),
    y = a(844222),
    I = a(866323),
    R = a(717421),
    x = a(212245),
    T = a(688810),
    L = a(402216),
    O = a(287809),
    S = a(954571),
    h = a(927578),
    N = a(650338),
    f = a(821715),
    D = a(652215),
    U = a(788868),
    C = a(985018),
    b = a(18238);
let P = (0, c.xI)(_.A.LIVE_INDICATOR_BORDER_RADIUS),
    k = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    M = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    j = { opacity: 0 },
    v = { opacity: 1 },
    V = { borderRadius: `${P}px ${P}px ${P}px ${P}px` },
    w = { borderRadius: `0px ${P}px ${P}px 0px` },
    g = { mass: 1, tension: 500, friction: 18, clamp: !0 },
    H = (e) => {
        let t,
            r,
            {
                participant: n,
                isUpsellEnabled: c,
                shape: _,
                size: y,
                didTrackUpsellViewed: I,
                setDidTrackUpsellViewed: R,
                className: P,
                premiumIndicator: k,
                quality: M,
            } = e,
            { analyticsLocations: j } = (0, T.Ay)(),
            v = null != (0, f.A)(n);
        try {
            t = (0, N.HB)(M);
        } catch (e) {
            t = !1;
        }
        try {
            r = (0, N.OI)(M);
        } catch (e) {
            r = !1;
        }
        let V = t || r,
            { location: w } = (0, x.p)(),
            g = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
            H = c && !h.Ay.isPremium(g, U.PremiumTypes.TIER_1) && !h.Ay.canStreamQuality(h.Ay.StreamQuality.MID, g),
            G = l.useCallback(() => {
                H &&
                    V &&
                    (0, d.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([a.e("93475"), a.e("18630")]).then(a.bind(a, 826789));
                        return (t) => (0, s.jsx)(e, { ...t, analyticsSource: w });
                    });
            }, [H, V, w]);
        if (
            (l.useEffect(() => {
                !I &&
                    V &&
                    (S.default.track(D.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: U.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: r,
                        location_stack: j,
                    }),
                    R(!0));
            }, [t, r, V, I, R, j]),
            null == M)
        )
            return null;
        let W = (0, s.jsx)(u.m, {
            text: v ? C.intl.string(C.t.q8TiVt) : V ? C.intl.string(C.t.IHgpEn) : C.intl.string(C.t.vLb0VW),
            position: "bottom",
            children: (0, s.jsxs)(m.D, {
                onClick: G,
                className: i()(b.t5, y, L.u1[_], v ? b.Y5 : b.Lc, { [b.vk]: H && V }),
                children: [
                    V ? (0, s.jsx)(E.t, { size: "md", color: "currentColor", className: b.fY }) : null,
                    (0, s.jsx)("span", { className: b.UD, children: (0, N.ME)(M.maxResolution) }),
                    (0, s.jsx)("span", { children: (0, N.Bs)(M.maxFrameRate) }),
                ],
            }),
        });
        return (0, s.jsx)(A.Lp, {
            text: W,
            className: i()(P, b.AA, { [b.Dc]: V && k }),
            color: p.A.unsafe_rawColors.PRIMARY_500.css,
            shape: L.u1[_],
        });
    },
    G = (e) => {
        let { participant: t, showQuality: a, isUpsellEnabled: r = !0, size: c, className: o, premiumIndicator: p } = e,
            [u, _] = l.useState(!1),
            d = (0, N.N5)(t),
            { reducedMotion: m } = l.useContext(y.C),
            E = a && null != d,
            x = (0, I.p)(
                E,
                { enter: { from: m.enabled ? j : k, to: m.enabled ? v : M }, leave: m.enabled ? j : k, config: g },
                "animate-always",
            ),
            T = (0, R.z)({ to: E ? w : V, config: g }, "animate-always");
        return ((e) => {
            let { className: a, popoutProps: l } = e;
            return (0, s.jsxs)("div", {
                className: i()(b.dr, a),
                ...l,
                children: [
                    x((e, a) =>
                        a
                            ? (0, s.jsx)(n.animated.div, {
                                  style: e,
                                  children: (0, s.jsx)(H, {
                                      className: b.LZ,
                                      participant: t,
                                      size: c,
                                      shape: A.EG.ROUND_LEFT,
                                      isUpsellEnabled: r,
                                      didTrackUpsellViewed: u,
                                      setDidTrackUpsellViewed: _,
                                      premiumIndicator: p,
                                      quality: d,
                                  }),
                              })
                            : null,
                    ),
                    (0, s.jsx)(n.animated.div, {
                        style: T,
                        className: b.Ok,
                        children: (0, s.jsx)(L.Ay, {
                            look: L.gv.RED,
                            size: c,
                            shape: E ? A.EG.ROUND_RIGHT : A.EG.ROUND,
                        }),
                    }),
                ],
            });
        })({ className: o });
    };
