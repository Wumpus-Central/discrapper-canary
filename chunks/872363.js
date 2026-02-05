n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(92674),
    o = n(23339),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    h = n(319060),
    m = n(397927),
    A = n(212245),
    p = n(688810),
    g = n(402216),
    f = n(287809),
    _ = n(954571),
    E = n(927578),
    C = n(650338),
    x = n(821715),
    S = n(652215),
    T = n(788868),
    I = n(985018),
    N = n(176273);
let v = (0, o.xI)(h.A.LIVE_INDICATOR_BORDER_RADIUS),
    y = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    b = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    R = { opacity: 0 },
    j = { opacity: 1 },
    M = { borderRadius: `${v}px ${v}px ${v}px ${v}px` },
    D = { borderRadius: `0px ${v}px ${v}px 0px` },
    O = { mass: 1, tension: 500, friction: 18, clamp: !0 },
    L = (e) => {
        let t,
            a,
            {
                participant: r,
                isUpsellEnabled: o,
                shape: h,
                size: v,
                didTrackUpsellViewed: y,
                setDidTrackUpsellViewed: b,
                className: R,
                premiumIndicator: j,
                quality: M,
            } = e,
            { analyticsLocations: D } = (0, p.Ay)(),
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
        let L = t || a,
            { location: P } = (0, A.p)(),
            w = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
            k = o && !E.Ay.isPremium(w, T.PremiumTypes.TIER_1) && !E.Ay.canStreamQuality(E.Ay.StreamQuality.MID, w),
            U = l.useCallback(() => {
                k &&
                    L &&
                    (0, m.mMO)(async () => {
                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: P });
                    });
            }, [k, L, P]);
        if (
            (l.useEffect(() => {
                !y &&
                    L &&
                    (_.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: T.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: D,
                    }),
                    b(!0));
            }, [t, a, L, y, b, D]),
            null == M)
        )
            return null;
        let G = (0, i.jsx)(u.m, {
            text: O ? I.intl.string(I.t.q8TiVt) : L ? I.intl.string(I.t.IHgpEn) : I.intl.string(I.t.vLb0VW),
            position: "bottom",
            children: (0, i.jsxs)(m.DUT, {
                onClick: U,
                className: s()(N.t5, v, g.u1[h], O ? N.Y5 : N.Lc, { [N.vk]: k && L }),
                children: [
                    L ? (0, i.jsx)(m.tvc, { size: "md", color: "currentColor", className: N.fY }) : null,
                    (0, i.jsx)("span", { className: N.UD, children: (0, C.ME)(M.maxResolution) }),
                    (0, i.jsx)("span", { children: (0, C.Bs)(M.maxFrameRate) }),
                ],
            }),
        });
        return (0, i.jsx)(m.LpS, {
            text: G,
            className: s()(R, N.AA, { [N.Dc]: L && j }),
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            shape: g.u1[h],
        });
    },
    P = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: c, premiumIndicator: d } = e,
            [u, h] = l.useState(!1),
            A = (0, C.N5)(t),
            { reducedMotion: p } = l.useContext(m.CZY),
            f = n && null != A,
            _ = (0, m.pnh)(
                f,
                { enter: { from: p.enabled ? R : y, to: p.enabled ? j : b }, leave: p.enabled ? R : y, config: O },
                "animate-always",
            ),
            E = (0, m.zhh)({ to: f ? D : M, config: O }, "animate-always");
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, i.jsxs)("div", {
                className: s()(N.dr, n),
                ...l,
                children: [
                    _((e, n) =>
                        n
                            ? (0, i.jsx)(r.animated.div, {
                                  style: e,
                                  children: (0, i.jsx)(L, {
                                      className: N.LZ,
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
                        className: N.Ok,
                        children: (0, i.jsx)(g.Ay, {
                            look: g.gv.RED,
                            size: o,
                            shape: f ? m.EGs.ROUND_RIGHT : m.EGs.ROUND,
                        }),
                    }),
                ],
            });
        })({ className: c });
    };
