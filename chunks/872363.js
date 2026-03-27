n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(880013),
    o = n(23339),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    h = n(319060),
    m = n(397927),
    A = n(212245),
    g = n(688810),
    p = n(402216),
    f = n(287809),
    _ = n(954571),
    E = n(927578),
    x = n(650338),
    C = n(821715),
    S = n(652215),
    I = n(788868),
    T = n(985018),
    N = n(404223);
let v = (0, o.xI)(h.A.LIVE_INDICATOR_BORDER_RADIUS),
    b = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    y = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    j = { opacity: 0 },
    R = { opacity: 1 },
    M = { borderRadius: `${v}px ${v}px ${v}px ${v}px` },
    D = { borderRadius: `0px ${v}px ${v}px 0px` },
    O = { mass: 1, tension: 500, friction: 18, clamp: !0 },
    L = (e) => {
        let t,
            s,
            {
                participant: r,
                isUpsellEnabled: o,
                shape: h,
                size: v,
                didTrackUpsellViewed: b,
                setDidTrackUpsellViewed: y,
                className: j,
                premiumIndicator: R,
                quality: M,
            } = e,
            { analyticsLocations: D } = (0, g.Ay)(),
            O = null != (0, C.A)(r);
        try {
            t = (0, x.HB)(M);
        } catch (e) {
            t = !1;
        }
        try {
            s = (0, x.OI)(M);
        } catch (e) {
            s = !1;
        }
        let L = t || s,
            { location: P } = (0, A.p)(),
            w = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
            k = o && !E.Ay.isPremium(w, I.PremiumTypes.TIER_1) && !E.Ay.canStreamQuality(E.Ay.StreamQuality.MID, w),
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
                !b &&
                    L &&
                    (_.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: I.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: s,
                        location_stack: D,
                    }),
                    y(!0));
            }, [t, s, L, b, y, D]),
            null == M)
        )
            return null;
        let G = (0, i.jsx)(u.m, {
            text: O ? T.intl.string(T.t.q8TiVt) : L ? T.intl.string(T.t.IHgpEn) : T.intl.string(T.t.vLb0VW),
            position: "bottom",
            children: (0, i.jsxs)(m.DUT, {
                onClick: U,
                className: a()(N.t5, v, p.u1[h], O ? N.Y5 : N.Lc, { [N.vk]: k && L }),
                children: [
                    L ? (0, i.jsx)(m.tvc, { size: "md", color: "currentColor", className: N.fY }) : null,
                    (0, i.jsx)("span", { className: N.UD, children: (0, x.ME)(M.maxResolution) }),
                    (0, i.jsx)("span", { children: (0, x.Bs)(M.maxFrameRate) }),
                ],
            }),
        });
        return (0, i.jsx)(m.LpS, {
            text: G,
            className: a()(j, N.AA, { [N.Dc]: L && R }),
            color: d.A.unsafe_rawColors.PRIMARY_500.css,
            shape: p.u1[h],
        });
    },
    P = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: s = !0, size: o, className: c, premiumIndicator: d } = e,
            [u, h] = l.useState(!1),
            A = (0, x.N5)(t),
            { reducedMotion: g } = l.useContext(m.CZY),
            f = n && null != A,
            _ = (0, m.pnh)(
                f,
                { enter: { from: g.enabled ? j : b, to: g.enabled ? R : y }, leave: g.enabled ? j : b, config: O },
                "animate-always",
            ),
            E = (0, m.zhh)({ to: f ? D : M, config: O }, "animate-always");
        return ((e) => {
            let { className: n, popoutProps: l } = e;
            return (0, i.jsxs)("div", {
                className: a()(N.dr, n),
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
                                      isUpsellEnabled: s,
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
                        children: (0, i.jsx)(p.Ay, {
                            look: p.gv.RED,
                            size: o,
                            shape: f ? m.EGs.ROUND_RIGHT : m.EGs.ROUND,
                        }),
                    }),
                ],
            });
        })({ className: c });
    };
