n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(407045),
    o = n(23339),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    h = n(319060),
    m = n(397927),
    A = n(212245),
    g = n(688810),
    _ = n(402216),
    p = n(287809),
    f = n(954571),
    E = n(927578),
    C = n(650338),
    x = n(821715),
    S = n(652215),
    I = n(788868),
    T = n(985018),
    v = n(18238);
let N = (0, o.xI)(h.A.LIVE_INDICATOR_BORDER_RADIUS),
    y = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    b = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    j = { opacity: 0 },
    R = { opacity: 1 },
    M = { borderRadius: `${N}px ${N}px ${N}px ${N}px` },
    L = { borderRadius: `0px ${N}px ${N}px 0px` },
    O = { mass: 1, tension: 500, friction: 18, clamp: !0 },
    D = (e) => {
        let t,
            a,
            {
                participant: r,
                isUpsellEnabled: o,
                shape: h,
                size: N,
                didTrackUpsellViewed: y,
                setDidTrackUpsellViewed: b,
                className: j,
                premiumIndicator: R,
                quality: M,
            } = e,
            { analyticsLocations: L } = (0, g.Ay)(),
            O = null != (0, x.A)(r);
        try {
            t = (0, C.HB)(M);
        } catch (e) {
            t = !1;
        }
        try {
            a = (0, C.OI)(M);
        } catch (e) {
            a = !1;
        }
        let D = t || a,
            { location: P } = (0, A.p)(),
            k = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
            w = o && !E.Ay.isPremium(k, I.PremiumTypes.TIER_1) && !E.Ay.canStreamQuality(E.Ay.StreamQuality.MID, k),
            U = l.useCallback(() => {
                w &&
                    D &&
                    (0, m.mMO)(async () => {
                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: P });
                    });
            }, [w, D, P]);
        if (
            (l.useEffect(() => {
                !y &&
                    D &&
                    (f.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: I.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: L,
                    }),
                    b(!0));
            }, [t, a, D, y, b, L]),
            null == M)
        )
            return null;
        let G = (0, i.jsx)(u.m, {
            text: O ? T.intl.string(T.t.q8TiVt) : D ? T.intl.string(T.t.IHgpEn) : T.intl.string(T.t.vLb0VW),
            position: "bottom",
            children: (0, i.jsxs)(m.DUT, {
                onClick: U,
                className: s()(v.t5, N, _.u1[h], O ? v.Y5 : v.Lc, { [v.vk]: w && D }),
                children: [
                    D ? (0, i.jsx)(m.tvc, { size: "md", color: "currentColor", className: v.fY }) : null,
                    (0, i.jsx)("span", { className: v.UD, children: (0, C.ME)(M.maxResolution) }),
                    (0, i.jsx)("span", { children: (0, C.Bs)(M.maxFrameRate) }),
                ],
            }),
        });
        return (0, i.jsx)(m.LpS, {
            text: G,
            className: s()(j, v.AA, { [v.Dc]: D && R }),
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            shape: _.u1[h],
        });
    },
    P = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: c, premiumIndicator: d } = e,
            [u, h] = l.useState(!1),
            A = (0, C.N5)(t),
            { reducedMotion: g } = l.useContext(m.CZY),
            p = n && null != A,
            f = (0, m.pnh)(
                p,
                { enter: { from: g.enabled ? j : y, to: g.enabled ? R : b }, leave: g.enabled ? j : y, config: O },
                "animate-always",
            ),
            E = (0, m.zhh)({ to: p ? L : M, config: O }, "animate-always");
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, i.jsxs)("div", {
                className: s()(v.dr, n),
                ...l,
                children: [
                    f((e, n) =>
                        n
                            ? (0, i.jsx)(r.animated.div, {
                                  style: e,
                                  children: (0, i.jsx)(D, {
                                      className: v.LZ,
                                      participant: t,
                                      size: o,
                                      shape: m.EGs.ROUND_LEFT,
                                      isUpsellEnabled: a,
                                      didTrackUpsellViewed: u,
                                      setDidTrackUpsellViewed: h,
                                      premiumIndicator: d,
                                      quality: A,
                                  }),
                              })
                            : null,
                    ),
                    (0, i.jsx)(r.animated.div, {
                        style: E,
                        className: v.Ok,
                        children: (0, i.jsx)(_.Ay, {
                            look: _.gv.RED,
                            size: o,
                            shape: p ? m.EGs.ROUND_RIGHT : m.EGs.ROUND,
                        }),
                    }),
                ],
            });
        })({ className: c });
    };
