a.d(t, { A: () => W });
var s = a(477900),
    l = a(582128),
    r = a(503698),
    i = a.n(r),
    n = a(308941),
    c = a(23339),
    o = a(17928),
    _ = a(661531),
    d = a(319060),
    p = a(192308),
    u = a(403581),
    A = a(866665),
    E = a(939249),
    m = a(844222),
    y = a(866323),
    I = a(717421),
    R = a(212245),
    x = a(688810),
    T = a(402216),
    L = a(10392),
    S = a(82498),
    O = a(287809),
    h = a(174459),
    U = a(158045),
    D = a(650338),
    N = a(821715),
    f = a(286134),
    C = a(652215),
    M = a(202541),
    P = a(105292),
    b = a(288507);
let j = (0, c.xI)(d.A.LIVE_INDICATOR_BORDER_RADIUS),
    k = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    V = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    v = { opacity: 0 },
    g = { opacity: 1 },
    w = { borderRadius: `${j}px ${j}px ${j}px ${j}px` },
    H = { borderRadius: `0px ${j}px ${j}px 0px` },
    Q = { mass: 1, tension: 500, friction: 18, clamp: !0 };
function Y(e) {
    let t,
        r,
        {
            participant: n,
            isUpsellEnabled: c,
            shape: d,
            size: m,
            didTrackUpsellViewed: y,
            setDidTrackUpsellViewed: I,
            className: T,
            premiumIndicator: j,
            quality: k,
        } = e,
        { analyticsLocations: V } = (0, x.Ay)(),
        v = null != (0, N.A)(n);
    try {
        t = (0, D.HB)(k);
    } catch (e) {
        t = !1;
    }
    try {
        r = (0, D.OI)(k);
    } catch (e) {
        r = !1;
    }
    let g = t || r,
        { location: w } = (0, R.p)(),
        H = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        Q = c && !U.Ay.isPremium(H, M.PremiumTypes.TIER_1) && !U.Ay.canStreamQuality(U.Ay.StreamQuality.MID, H),
        Y = l.useCallback(() => {
            Q &&
                g &&
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([a.e("493475"), a.e("18630")]).then(a.bind(a, 826789));
                    return (t) => (0, s.jsx)(e, { ...t, analyticsSource: w });
                });
        }, [Q, g, w]);
    if (
        (l.useEffect(() => {
            !y &&
                g &&
                (h.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: M.e.STREAM_QUALITY_INDICATOR,
                    has_premium_stream_fps: t,
                    has_premium_stream_resolution: r,
                    location_stack: V,
                }),
                (0, L.sq)(C.U7l.PREMIUM_UPSELL_VIEWED, V, () => (0, S.uq)(M.e.STREAM_QUALITY_INDICATOR, t, r)),
                I(!0));
        }, [t, r, g, y, I, V]),
        null == k)
    )
        return null;
    let W = Q && g,
        F = i()(b.t5, d, v ? b.Y5 : b.Lc, { [b.vk]: W, [b.CF]: m === f.oY.SMALL }),
        z = (0, s.jsxs)(s.Fragment, {
            children: [
                g ? (0, s.jsx)(u.t, { size: "md", color: "currentColor", className: b.fY }) : null,
                (0, s.jsx)("span", { className: b.UD, children: (0, D.ME)(k.maxResolution) }),
                (0, s.jsx)("span", { children: (0, D.Bs)(k.maxFrameRate) }),
            ],
        }),
        $ = (0, s.jsx)(A.m, {
            text: v ? P.intl.string(P.t.q8TiVt) : g ? P.intl.string(P.t.IHgpEn) : P.intl.string(P.t.vLb0VW),
            position: "bottom",
            children: W
                ? (0, s.jsx)(E.D, { onClick: Y, className: F, children: z })
                : (0, s.jsx)("span", { className: F, children: z }),
        });
    return (0, s.jsx)(f.Ay, {
        text: $,
        className: i()(T, { [b.Dc]: g && j }),
        color: _.A.unsafe_rawColors.PRIMARY_500.css,
        shape: d,
        size: m,
    });
}
let W = (e) => {
    let { participant: t, showQuality: a, isUpsellEnabled: r = !0, size: c, className: o, premiumIndicator: _ } = e,
        [d, p] = l.useState(!1),
        u = (0, D.N5)(t),
        { reducedMotion: A } = l.useContext(m.C),
        E = a && null != u,
        R = (0, y.p)(
            E,
            { enter: { from: A.enabled ? v : k, to: A.enabled ? g : V }, leave: A.enabled ? v : k, config: Q },
            "animate-always",
        ),
        x = (0, I.z)({ to: E ? H : w, config: Q }, "animate-always");
    return ((e) => {
        let { className: a, popoutProps: l } = e;
        return (0, s.jsxs)("div", {
            className: i()(b.dr, a),
            ...l,
            children: [
                R((e, a) =>
                    a
                        ? (0, s.jsx)(n.animated.div, {
                              style: e,
                              children: (0, s.jsx)(Y, {
                                  participant: t,
                                  size: c,
                                  shape: f.Qo.ROUND_LEFT,
                                  isUpsellEnabled: r,
                                  didTrackUpsellViewed: d,
                                  setDidTrackUpsellViewed: p,
                                  premiumIndicator: _,
                                  quality: u,
                              }),
                          })
                        : null,
                ),
                (0, s.jsx)(n.animated.div, {
                    style: x,
                    className: b.Ok,
                    children: (0, s.jsx)(T.Ay, { look: T.gv.RED, size: c, shape: E ? f.Qo.ROUND_RIGHT : f.Qo.ROUND }),
                }),
            ],
        });
    })({ className: o });
};
