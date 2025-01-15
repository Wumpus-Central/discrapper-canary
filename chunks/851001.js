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
    _ = n(388032),
    E = n(498608),
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
        y = r.useRef(null),
        [B, D] = r.useState(!1);
    return (
        r.useEffect(() => {
            b && !N && !B && null != y.current && y.current.play();
        }, [b, N, B]),
        (0, i.jsx)(c.Gt, {
            value: v,
            children: (0, i.jsxs)('div', {
                className: a()(E.container, s),
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: E.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: _.intl.string(_.t.lEw32t)
                    }),
                    (0, i.jsx)(p.PK, {
                        subscriptionTier: null !== (n = null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : j,
                        inOfferExperience: R,
                        containerClassName: a()(E.footerCTAContainer),
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: I
                    }),
                    (0, i.jsx)('div', {
                        className: E.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: T.Z,
                            className: a()(E.footerArt),
                            onEnded: () => {
                                D(!0);
                            },
                            ref: y,
                            children: (0, i.jsx)('source', {
                                src: P ? C.Z : S.Z,
                                type: P ? f.m.MP4 : f.m.WEBM
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: E.leftGradient }),
                    (0, i.jsx)('div', { className: E.rightGradient })
                ]
            })
        })
    );
};
