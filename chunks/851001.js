n.d(t, { Z: () => C }), n(388685);
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
    _ = n(388032),
    N = n(629514),
    x = n(839526),
    E = n(4046),
    j = n(423741);
let C = i.forwardRef((e, t) => {
    var n, s;
    let { className: C, isFooterVisible: O, isDarkMode: S, isReducedMotion: v, subscriptionTier: T } = e,
        { analyticsLocations: I } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        y = (0, g.Ng)(),
        A = (0, g.Wp)(y, f.Si.TIER_2) ? f.Si.TIER_2 : void 0,
        P = (0, p.N)(),
        R = (0, m.Nx)(),
        D = (0, u.rO)(),
        Z = i.useRef(null),
        [w, k] = i.useState(!1);
    return (
        i.useEffect(() => {
            !O || v || w || null == Z.current || Z.current.play();
        }, [O, v, w]),
        (0, r.jsx)(c.Gt, {
            value: I,
            children: (0, r.jsxs)('div', {
                ref: t,
                className: a()(N.container, C),
                children: [
                    (0, r.jsx)(l.X6q, {
                        className: N.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: _.NW.string(_.t.lEw32t)
                    }),
                    (0, r.jsx)(h.PK, {
                        subscriptionTier: null != (s = null != T ? T : null == P || null == (n = P.subscription_trial) ? void 0 : n.sku_id) ? s : A,
                        inOfferExperience: R,
                        containerClassName: N.footerCTAContainer,
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: S
                    }),
                    (0, r.jsx)('div', {
                        className: N.footerArtContainer,
                        children: (0, r.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: E.Z,
                            className: N.footerArt,
                            onEnded: () => {
                                k(!0);
                            },
                            ref: Z,
                            children: (0, r.jsx)('source', {
                                src: D ? x.Z : j.Z,
                                type: D ? b.m.MP4 : b.m.WEBM
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: N.leftGradient }),
                    (0, r.jsx)('div', { className: N.rightGradient })
                ]
            })
        })
    );
});
