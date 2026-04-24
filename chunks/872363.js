"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(419354),
    o = n(23339),
    d = n(17928),
    c = n(661531),
    u = n(990078),
    m = n(319060),
    p = n(192308),
    _ = n(939249),
    h = n(403581),
    g = n(777666),
    b = n(844222),
    y = n(866323),
    f = n(717421),
    A = n(212245),
    S = n(688810),
    E = n(402216),
    x = n(287809),
    C = n(954571),
    v = n(927578),
    N = n(650338),
    D = n(821715),
    I = n(652215),
    L = n(788868),
    F = n(985018),
    R = n(18238);
let j = (0, o.xI)(m.A.LIVE_INDICATOR_BORDER_RADIUS),
    T = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    k = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    M = { opacity: 0 },
    O = { opacity: 1 },
    G = { borderRadius: `${j}px ${j}px ${j}px ${j}px` },
    w = { borderRadius: `0px ${j}px ${j}px 0px` },
    B = { mass: 1, tension: 500, friction: 18, clamp: !0 },
    P = (e) => {
        let t,
            a,
            {
                participant: l,
                isUpsellEnabled: o,
                shape: m,
                size: b,
                didTrackUpsellViewed: y,
                setDidTrackUpsellViewed: f,
                className: j,
                premiumIndicator: T,
                quality: k,
            } = e,
            { analyticsLocations: M } = (0, S.Ay)(),
            O = null != (0, D.A)(l);
        try {
            t = (0, N.HB)(k);
        } catch (e) {
            t = !1;
        }
        try {
            a = (0, N.OI)(k);
        } catch (e) {
            a = !1;
        }
        let G = t || a,
            { location: w } = (0, A.p)(),
            B = (0, d.bG)([x.default], () => x.default.getCurrentUser()),
            P = o && !v.Ay.isPremium(B, L.PremiumTypes.TIER_1) && !v.Ay.canStreamQuality(v.Ay.StreamQuality.MID, B),
            U = r.useCallback(() => {
                P &&
                    G &&
                    (0, p.openModalLazy)(async () => {
                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: w });
                    });
            }, [P, G, w]);
        if (
            (r.useEffect(() => {
                !y &&
                    G &&
                    (C.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: L.e.STREAM_QUALITY_INDICATOR,
                        has_premium_stream_fps: t,
                        has_premium_stream_resolution: a,
                        location_stack: M,
                    }),
                    f(!0));
            }, [t, a, G, y, f, M]),
            null == k)
        )
            return null;
        let H = (0, i.jsx)(u.m, {
            text: O ? F.intl.string(F.t.q8TiVt) : G ? F.intl.string(F.t.IHgpEn) : F.intl.string(F.t.vLb0VW),
            position: "bottom",
            children: (0, i.jsxs)(_.D, {
                onClick: U,
                className: s()(R.t5, b, E.u1[m], O ? R.Y5 : R.Lc, { [R.vk]: P && G }),
                children: [
                    G ? (0, i.jsx)(h.t, { size: "md", color: "currentColor", className: R.fY }) : null,
                    (0, i.jsx)("span", { className: R.UD, children: (0, N.ME)(k.maxResolution) }),
                    (0, i.jsx)("span", { children: (0, N.Bs)(k.maxFrameRate) }),
                ],
            }),
        });
        return (0, i.jsx)(g.Lp, {
            text: H,
            className: s()(j, R.AA, { [R.Dc]: G && T }),
            color: c.A.unsafe_rawColors.PRIMARY_500.css,
            shape: E.u1[m],
        });
    },
    U = (e) => {
        let { participant: t, showQuality: n, isUpsellEnabled: a = !0, size: o, className: d, premiumIndicator: c } = e,
            [u, m] = r.useState(!1),
            p = (0, N.N5)(t),
            { reducedMotion: _ } = r.useContext(b.C),
            h = n && null != p,
            A = (0, y.p)(
                h,
                { enter: { from: _.enabled ? M : T, to: _.enabled ? O : k }, leave: _.enabled ? M : T, config: B },
                "animate-always",
            ),
            S = (0, f.z)({ to: h ? w : G, config: B }, "animate-always");
        return ((e) => {
            let { className: n, popoutProps: r } = e;
            return (0, i.jsxs)("div", {
                className: s()(R.dr, n),
                ...r,
                children: [
                    A((e, n) =>
                        n
                            ? (0, i.jsx)(l.animated.div, {
                                  style: e,
                                  children: (0, i.jsx)(P, {
                                      className: R.LZ,
                                      participant: t,
                                      size: o,
                                      shape: g.EG.ROUND_LEFT,
                                      isUpsellEnabled: a,
                                      didTrackUpsellViewed: u,
                                      setDidTrackUpsellViewed: m,
                                      premiumIndicator: c,
                                      quality: p,
                                  }),
                              })
                            : null,
                    ),
                    (0, i.jsx)(l.animated.div, {
                        style: S,
                        className: R.Ok,
                        children: (0, i.jsx)(E.Ay, {
                            look: E.gv.RED,
                            size: o,
                            shape: h ? g.EG.ROUND_RIGHT : g.EG.ROUND,
                        }),
                    }),
                ],
            });
        })({ className: d });
    };
