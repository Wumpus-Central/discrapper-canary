n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(70097),
    u = n(526167),
    m = n(140465),
    g = n(104494),
    p = n(639119),
    h = n(635921),
    f = n(474936),
    b = n(869783),
    N = n(388032),
    x = n(601060),
    _ = n(839526),
    E = n(4046),
    j = n(423741);
let O = i.forwardRef((e, t) => {
    var n, s;
    let { className: O, isFooterVisible: C, isDarkMode: S, isReducedMotion: v } = e,
        { analyticsLocations: T } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        I = (0, g.Ng)(),
        y = (0, g.Wp)(I, f.Si.TIER_2) ? f.Si.TIER_2 : void 0,
        A = (0, p.N)(),
        P = (0, m.Nx)(),
        R = (0, u.rO)(),
        D = i.useRef(null),
        [Z, w] = i.useState(!1);
    return (
        i.useEffect(() => {
            !C || v || Z || null == D.current || D.current.play();
        }, [C, v, Z]),
        (0, r.jsx)(c.Gt, {
            value: T,
            children: (0, r.jsxs)('div', {
                ref: t,
                className: a()(x.container, O),
                children: [
                    (0, r.jsx)(l.X6q, {
                        className: x.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: N.NW.string(N.t.lEw32t)
                    }),
                    (0, r.jsx)(h.PK, {
                        subscriptionTier: null != (s = null == A || null == (n = A.subscription_trial) ? void 0 : n.sku_id) ? s : y,
                        inOfferExperience: P,
                        containerClassName: x.footerCTAContainer,
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: S
                    }),
                    (0, r.jsx)('div', {
                        className: x.footerArtContainer,
                        children: (0, r.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: E.Z,
                            className: x.footerArt,
                            onEnded: () => {
                                w(!0);
                            },
                            ref: D,
                            children: (0, r.jsx)('source', {
                                src: R ? _.Z : j.Z,
                                type: R ? b.m.MP4 : b.m.WEBM
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: x.leftGradient }),
                    (0, r.jsx)('div', { className: x.rightGradient })
                ]
            })
        })
    );
});
