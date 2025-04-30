n.d(t, { Z: () => O }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
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
    _ = n(388032),
    x = n(601060),
    E = n(839526),
    j = n(4046),
    C = n(423741);
let O = r.forwardRef((e, t) => {
    var n, s;
    let { className: O, isFooterVisible: S, isDarkMode: v, isReducedMotion: T, subscriptionTier: N } = e,
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
            !S || T || w || null == Z.current || Z.current.play();
        }, [S, T, w]),
        (0, i.jsx)(c.Gt, {
            value: I,
            children: (0, i.jsxs)('div', {
                ref: t,
                className: l()(x.container, O),
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: x.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: _.intl.string(_.t.lEw32t)
                    }),
                    (0, i.jsx)(h.PK, {
                        subscriptionTier: null != (s = null != N ? N : null == P || null == (n = P.subscription_trial) ? void 0 : n.sku_id) ? s : A,
                        inOfferExperience: R,
                        containerClassName: x.footerCTAContainer,
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: v
                    }),
                    (0, i.jsx)('div', {
                        className: x.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: j.Z,
                            className: x.footerArt,
                            onEnded: () => {
                                k(!0);
                            },
                            ref: Z,
                            children: (0, i.jsx)('source', {
                                src: D ? E.Z : C.Z,
                                type: D ? b.m.MP4 : b.m.WEBM
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: x.leftGradient }),
                    (0, i.jsx)('div', { className: x.rightGradient })
                ]
            })
        })
    );
});
