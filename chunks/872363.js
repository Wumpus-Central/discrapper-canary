var s = a(477900),
    l = a(582128),
    i = a(503698),
    r = a.n(i),
    n = a(120692),
    c = a(23339),
    o = a(855986),
    _ = a(646514),
    d = a(319060),
    u = a(192308),
    p = a(403581),
    m = a(866665),
    A = a(939249),
    E = a(844222),
    y = a(866323),
    I = a(717421),
    R = a(212245),
    x = a(688810),
    T = a(402216),
    L = a(739053),
    S = a(82498),
    O = a(287809),
    h = a(129230),
    U = a(722178),
    f = a(650338),
    D = a(821715),
    N = a(286134),
    C = a(652215),
    M = a(682901),
    P = a(792996),
    b = a(288507);
let j = (0, c.xI)(d.A.LIVE_INDICATOR_BORDER_RADIUS),
    k = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    v = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    V = { opacity: 0 },
    g = { opacity: 1 },
    w = { borderRadius: `${j}px ${j}px ${j}px ${j}px` },
    H = { borderRadius: `0px ${j}px ${j}px 0px` },
    Y = { mass: 1, tension: 500, friction: 18, clamp: !0 };
function Q(e) {
    let t,
        i,
        {
            participant: n,
            isUpsellEnabled: c,
            shape: d,
            size: E,
            didTrackUpsellViewed: y,
            setDidTrackUpsellViewed: I,
            className: T,
            premiumIndicator: j,
            quality: k,
        } = e,
        { analyticsLocations: v } = (0, x.Ay)(),
        V = null != (0, D.A)(n);
    try {
        t = (0, f.HB)(k);
    } catch (e) {
        t = !1;
    }
    try {
        i = (0, f.OI)(k);
    } catch (e) {
        i = !1;
    }
    let g = t || i,
        { location: w } = (0, R.p)(),
        H = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        Y = c && !U.Ay.isPremium(H, M.PremiumTypes.TIER_1) && !U.Ay.canStreamQuality(U.Ay.StreamQuality.MID, H),
        Q = l.useCallback(() => {
            Y &&
                g &&
                (0, u.mM)(async () => {
                    let { default: e } = await Promise.all([a.e(668867), a.e(18630)]).then(a.bind(a, 826789));
                    return (t) => (0, s.jsx)(e, { ...t, analyticsSource: w });
                });
        }, [Y, g, w]);
    if (
        (l.useEffect(() => {
            !y &&
                g &&
                (h.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: M.e.STREAM_QUALITY_INDICATOR,
                    has_premium_stream_fps: t,
                    has_premium_stream_resolution: i,
                    location_stack: v,
                }),
                (0, L.sq)(C.U7l.PREMIUM_UPSELL_VIEWED, v, () => (0, S.uq)(M.e.STREAM_QUALITY_INDICATOR, t, i)),
                I(!0));
        }, [t, i, g, y, I, v]),
        null == k)
    )
        return null;
    let W = Y && g,
        F = r()(b.t5, d, V ? b.Y5 : b.Lc, { [b.vk]: W, [b.CF]: E === N.oY.SMALL }),
        $ = (0, s.jsxs)(s.Fragment, {
            children: [
                g ? (0, s.jsx)(p.t, { size: "md", color: "currentColor", className: b.fY }) : null,
                (0, s.jsx)("span", { className: b.UD, children: (0, f.ME)(k.maxResolution) }),
                (0, s.jsx)("span", { children: (0, f.Bs)(k.maxFrameRate) }),
            ],
        }),
        z = (0, s.jsx)(m.m, {
            text: V ? P.intl.string(P.t.q8TiVt) : g ? P.intl.string(P.t.IHgpEn) : P.intl.string(P.t.vLb0VW),
            position: "bottom",
            children: W
                ? (0, s.jsx)(A.D, { onClick: Q, className: F, children: $ })
                : (0, s.jsx)("span", { className: F, children: $ }),
        });
    return (0, s.jsx)(N.Ay, {
        text: z,
        className: r()(T, { [b.Dc]: g && j }),
        color: _.A.unsafe_rawColors.PRIMARY_500.css,
        shape: d,
        size: E,
    });
}
a.d(
    t,
    {},
    {
        A: (e) => {
            let {
                    participant: t,
                    showQuality: a,
                    isUpsellEnabled: i = !0,
                    size: c,
                    className: o,
                    premiumIndicator: _,
                } = e,
                [d, u] = l.useState(!1),
                p = (0, f.N5)(t),
                { reducedMotion: m } = l.useContext(E.C),
                A = a && null != p,
                R = (0, y.p)(
                    A,
                    { enter: { from: m.enabled ? V : k, to: m.enabled ? g : v }, leave: m.enabled ? V : k, config: Y },
                    "animate-always",
                ),
                x = (0, I.z)({ to: A ? H : w, config: Y }, "animate-always");
            return ((e) => {
                let { className: a, popoutProps: l } = e;
                return (0, s.jsxs)("div", {
                    className: r()(b.dr, a),
                    ...l,
                    children: [
                        R((e, a) =>
                            a
                                ? (0, s.jsx)(n.animated.div, {
                                      style: e,
                                      children: (0, s.jsx)(Q, {
                                          participant: t,
                                          size: c,
                                          shape: N.Qo.ROUND_LEFT,
                                          isUpsellEnabled: i,
                                          didTrackUpsellViewed: d,
                                          setDidTrackUpsellViewed: u,
                                          premiumIndicator: _,
                                          quality: p,
                                      }),
                                  })
                                : null,
                        ),
                        (0, s.jsx)(n.animated.div, {
                            style: x,
                            className: b.Ok,
                            children: (0, s.jsx)(T.Ay, {
                                look: T.gv.RED,
                                size: c,
                                shape: A ? N.Qo.ROUND_RIGHT : void 0,
                            }),
                        }),
                    ],
                });
            })({ className: o });
        },
    },
);
