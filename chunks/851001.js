n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(70097),
    u = n(526167),
    m = n(140465),
    g = n(104494),
    h = n(639119),
    p = n(635921),
    x = n(474936),
    f = n(869783),
    E = n(388032),
    _ = n(255346),
    C = n(839526),
    T = n(4046),
    S = n(423741);
t.Z = (e) => {
    var t, n;
    let { className: s, isFooterVisible: b, isDarkMode: I, isReducedMotion: N } = e,
        { analyticsLocations: v } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        A = (0, g.Ng)(),
        j = (0, g.Wp)(A, x.Si.TIER_2) ? x.Si.TIER_2 : void 0,
        O = (0, h.N)(),
        R = (0, m.Nx)(),
        P = (0, u.rO)(),
        D = r.useRef(null),
        [y, B] = r.useState(!1);
    return (
        r.useEffect(() => {
            b && !N && !y && null != D.current && D.current.play();
        }, [b, N, y]),
        (0, i.jsx)(c.Gt, {
            value: v,
            children: (0, i.jsxs)('div', {
                className: a()(_.container, s),
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: _.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: E.intl.string(E.t.lEw32t)
                    }),
                    (0, i.jsx)(p.PK, {
                        subscriptionTier: null !== (n = null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : j,
                        inOfferExperience: R,
                        containerClassName: a()(_.footerCTAContainer),
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: I
                    }),
                    (0, i.jsx)('div', {
                        className: _.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: T.Z,
                            className: a()(_.footerArt),
                            onEnded: () => {
                                B(!0);
                            },
                            ref: D,
                            children: (0, i.jsx)('source', {
                                src: P ? C.Z : S.Z,
                                type: P ? f.m.MP4 : f.m.WEBM
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: _.leftGradient }),
                    (0, i.jsx)('div', { className: _.rightGradient })
                ]
            })
        })
    );
};
