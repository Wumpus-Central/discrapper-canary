n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(70097),
    u = n(526167),
    m = n(140465),
    h = n(104494),
    g = n(639119),
    _ = n(635921),
    x = n(474936),
    p = n(869783),
    E = n(388032),
    C = n(255346),
    f = n(839526),
    T = n(4046),
    N = n(423741);
let S = (e) => {
    var t, n;
    let { className: r, isFooterVisible: S, isDarkMode: I, isReducedMotion: b } = e,
        { analyticsLocations: v } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        j = (0, h.Ng)(),
        A = (0, h.Wp)(j, x.Si.TIER_2) ? x.Si.TIER_2 : void 0,
        O = (0, g.N)(),
        R = (0, m.Nx)(),
        P = (0, u.rO)(),
        D = s.useRef(null),
        [y, Z] = s.useState(!1);
    return (
        s.useEffect(() => {
            !S || b || y || null == D.current || D.current.play();
        }, [S, b, y]),
        (0, i.jsx)(c.Gt, {
            value: v,
            children: (0, i.jsxs)('div', {
                className: l()(C.container, r),
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: C.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: E.intl.string(E.t.lEw32t)
                    }),
                    (0, i.jsx)(_.PK, {
                        subscriptionTier: null !== (n = null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : A,
                        inOfferExperience: R,
                        containerClassName: l()(C.footerCTAContainer),
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: I
                    }),
                    (0, i.jsx)('div', {
                        className: C.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: T.Z,
                            className: l()(C.footerArt),
                            onEnded: () => {
                                Z(!0);
                            },
                            ref: D,
                            children: (0, i.jsx)('source', {
                                src: P ? f.Z : N.Z,
                                type: P ? p.m.MP4 : p.m.WEBM
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: C.leftGradient }),
                    (0, i.jsx)('div', { className: C.rightGradient })
                ]
            })
        })
    );
};
