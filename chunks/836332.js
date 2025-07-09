(n.d(t, { Z: () => C }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(70097),
    u = n(526167),
    m = n(140465),
    p = n(104494),
    g = n(639119),
    h = n(635921),
    f = n(474936),
    b = n(869783),
    x = n(388032),
    _ = n(578504),
    j = n(839526),
    E = n(4046),
    O = n(423741);
let C = r.forwardRef((e, t) => {
    var n, s;
    let { className: C, isFooterVisible: v, isDarkMode: S, isReducedMotion: T, subscriptionTier: N } = e,
        { analyticsLocations: I } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        y = (0, p.Ng)(),
        A = (0, p.Wp)(y, f.Si.TIER_2) ? f.Si.TIER_2 : void 0,
        P = (0, g.N)(),
        R = (0, m.Nx)(),
        D = (0, u.rO)(),
        Z = r.useRef(null),
        [w, k] = r.useState(!1);
    return (
        r.useEffect(() => {
            !v || T || w || null == Z.current || Z.current.play();
        }, [v, T, w]),
        (0, i.jsx)(c.Gt, {
            value: I,
            children: (0, i.jsxs)('div', {
                ref: t,
                className: a()(_.container, C),
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: _.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: x.intl.string(x.t.lEw32t)
                    }),
                    (0, i.jsx)(h.PK, {
                        subscriptionTier: null != (s = null != N ? N : null == P || null == (n = P.subscription_trial) ? void 0 : n.sku_id) ? s : A,
                        inOfferExperience: R,
                        containerClassName: _.footerCTAContainer,
                        isApplicationHome: !0,
                        isDarkMode: S
                    }),
                    (0, i.jsx)('div', {
                        className: _.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            muted: !0,
                            preload: 'auto',
                            poster: E.Z,
                            className: _.footerArt,
                            onEnded: () => {
                                k(!0);
                            },
                            ref: Z,
                            children: (0, i.jsx)('source', {
                                src: D ? j.Z : O.Z,
                                type: D ? b.m.MP4 : b.m.WEBM
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: _.leftGradient }),
                    (0, i.jsx)('div', { className: _.rightGradient })
                ]
            })
        })
    );
});
