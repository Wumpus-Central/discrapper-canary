a.d(t, { A: () => Y });
var s = a(477900),
    l = a(582128),
    r = a(503698),
    i = a.n(r),
    n = a(221877),
    c = a(23339),
    o = a(17928),
    _ = a(661531),
    u = a(319060),
    p = a(192308),
    d = a(403581),
    E = a(866665),
    m = a(939249),
    A = a(812993),
    y = a(844222),
    I = a(866323),
    R = a(717421),
    x = a(212245),
    T = a(688810),
    L = a(402216),
    O = a(10392),
    S = a(82498),
    h = a(287809),
    U = a(174459),
    N = a(158045),
    D = a(650338),
    f = a(821715),
    C = a(652215),
    M = a(202541),
    P = a(375708),
    b = a(288507);
let j = (0, c.xI)(u.A.LIVE_INDICATOR_BORDER_RADIUS),
    k = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    V = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    v = { opacity: 0 },
    g = { opacity: 1 },
    w = { borderRadius: `${j}px ${j}px ${j}px ${j}px` },
    H = { borderRadius: `0px ${j}px ${j}px 0px` },
    G = { mass: 1, tension: 500, friction: 18, clamp: !0 };
function W(e) {
    let t,
        r,
        {
            participant: n,
            isUpsellEnabled: c,
            shape: u,
            size: y,
            didTrackUpsellViewed: I,
            setDidTrackUpsellViewed: R,
            className: j,
            premiumIndicator: k,
            quality: V,
        } = e,
        { analyticsLocations: v } = (0, T.Ay)(),
        g = null != (0, f.A)(n);
    try {
        t = (0, D.HB)(V);
    } catch (e) {
        t = !1;
    }
    try {
        r = (0, D.OI)(V);
    } catch (e) {
        r = !1;
    }
    let w = t || r,
        { location: H } = (0, x.p)(),
        G = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        W = c && !N.Ay.isPremium(G, M.PremiumTypes.TIER_1) && !N.Ay.canStreamQuality(N.Ay.StreamQuality.MID, G),
        Y = l.useCallback(() => {
            W &&
                w &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([a.e("493475"), a.e("18630")]).then(a.bind(a, 826789));
                    return (t) => (0, s.jsx)(e, { ...t, analyticsSource: H });
                });
        }, [W, w, H]);
    if (
        (l.useEffect(() => {
            !I &&
                w &&
                (U.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: M.e.STREAM_QUALITY_INDICATOR,
                    has_premium_stream_fps: t,
                    has_premium_stream_resolution: r,
                    location_stack: v,
                }),
                (0, O.sq)(C.U7l.PREMIUM_UPSELL_VIEWED, v, () => (0, S.uq)(M.e.STREAM_QUALITY_INDICATOR, t, r)),
                R(!0));
        }, [t, r, w, I, R, v]),
        null == V)
    )
        return null;
    let F = W && w,
        Q = i()(b.t5, y, L.u1[u], g ? b.Y5 : b.Lc, { [b.vk]: F }),
        $ = (0, s.jsxs)(s.Fragment, {
            children: [
                w ? (0, s.jsx)(d.t, { size: "md", color: "currentColor", className: b.fY }) : null,
                (0, s.jsx)("span", { className: b.UD, children: (0, D.ME)(V.maxResolution) }),
                (0, s.jsx)("span", { children: (0, D.Bs)(V.maxFrameRate) }),
            ],
        }),
        z = (0, s.jsx)(E.m, {
            text: g ? P.intl.string(P.t.q8TiVt) : w ? P.intl.string(P.t.IHgpEn) : P.intl.string(P.t.vLb0VW),
            position: "bottom",
            children: F
                ? (0, s.jsx)(m.D, { onClick: Y, className: Q, children: $ })
                : (0, s.jsx)("span", { className: Q, children: $ }),
        });
    return (0, s.jsx)(A.Lp, {
        text: z,
        className: i()(j, b.AA, { [b.Dc]: w && k }),
        color: _.A.unsafe_rawColors.PRIMARY_500.css,
        shape: L.u1[u],
    });
}
let Y = (e) => {
    let { participant: t, showQuality: a, isUpsellEnabled: r = !0, size: c, className: o, premiumIndicator: _ } = e,
        [u, p] = l.useState(!1),
        d = (0, D.N5)(t),
        { reducedMotion: E } = l.useContext(y.C),
        m = a && null != d,
        x = (0, I.p)(
            m,
            { enter: { from: E.enabled ? v : k, to: E.enabled ? g : V }, leave: E.enabled ? v : k, config: G },
            "animate-always",
        ),
        T = (0, R.z)({ to: m ? H : w, config: G }, "animate-always");
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
                              children: (0, s.jsx)(W, {
                                  className: b.LZ,
                                  participant: t,
                                  size: c,
                                  shape: A.EG.ROUND_LEFT,
                                  isUpsellEnabled: r,
                                  didTrackUpsellViewed: u,
                                  setDidTrackUpsellViewed: p,
                                  premiumIndicator: _,
                                  quality: d,
                              }),
                          })
                        : null,
                ),
                (0, s.jsx)(n.animated.div, {
                    style: T,
                    className: b.Ok,
                    children: (0, s.jsx)(L.Ay, { look: L.gv.RED, size: c, shape: m ? A.EG.ROUND_RIGHT : A.EG.ROUND }),
                }),
            ],
        });
    })({ className: o });
};
