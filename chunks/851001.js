n.d(t, { Z: () => C }), n(47120);
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
    x = n(613995),
    _ = n(839526),
    E = n(4046),
    j = n(423741);
let C = (e) => {
    var t, n;
    let { className: s, isFooterVisible: C, isDarkMode: O, isReducedMotion: v } = e,
        { analyticsLocations: S } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        T = (0, g.Ng)(),
        I = (0, g.Wp)(T, f.Si.TIER_2) ? f.Si.TIER_2 : void 0,
        y = (0, p.N)(),
        A = (0, m.Nx)(),
        P = (0, u.rO)(),
        R = i.useRef(null),
        [D, Z] = i.useState(!1);
    return (
        i.useEffect(() => {
            !C || v || D || null == R.current || R.current.play();
        }, [C, v, D]),
        (0, r.jsx)(c.Gt, {
            value: S,
            children: (0, r.jsxs)('div', {
                className: a()(x.container, s),
                children: [
                    (0, r.jsx)(l.X6q, {
                        className: x.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: N.NW.string(N.t.lEw32t)
                    }),
                    (0, r.jsx)(h.PK, {
                        subscriptionTier: null !== (n = null == y ? void 0 : null === (t = y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : I,
                        inOfferExperience: A,
                        containerClassName: a()(x.footerCTAContainer),
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: O
                    }),
                    (0, r.jsx)('div', {
                        className: x.footerArtContainer,
                        children: (0, r.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: E.Z,
                            className: a()(x.footerArt),
                            onEnded: () => {
                                Z(!0);
                            },
                            ref: R,
                            children: (0, r.jsx)('source', {
                                src: P ? _.Z : j.Z,
                                type: P ? b.m.MP4 : b.m.WEBM
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: x.leftGradient }),
                    (0, r.jsx)('div', { className: x.rightGradient })
                ]
            })
        })
    );
};
