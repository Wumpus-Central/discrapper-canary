n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(70097),
    u = n(526167),
    g = n(140465),
    m = n(104494),
    f = n(639119),
    p = n(635921),
    _ = n(474936),
    h = n(869783),
    x = n(388032),
    E = n(255346),
    b = n(839526),
    C = n(4046),
    v = n(423741);
t.Z = (e) => {
    var t, n;
    let { className: a, isFooterVisible: T, isDarkMode: N, isReducedMotion: I } = e,
        { analyticsLocations: S } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        R = (0, m.Ng)(),
        j = (0, m.Wp)(R, _.Si.TIER_2) ? _.Si.TIER_2 : void 0,
        A = (0, f.N)(),
        P = (0, g.Nx)(),
        O = (0, u.rO)(),
        Z = r.useRef(null),
        [M, B] = r.useState(!1);
    return (
        r.useEffect(() => {
            T && !I && !M && null != Z.current && Z.current.play();
        }, [T, I, M]),
        (0, i.jsx)(c.Gt, {
            value: S,
            children: (0, i.jsxs)('div', {
                className: s()(E.container, a),
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: E.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: x.intl.string(x.t.lEw32t)
                    }),
                    (0, i.jsx)(p.PK, {
                        subscriptionTier: null !== (n = null == A ? void 0 : null === (t = A.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : j,
                        inOfferExperience: P,
                        containerClassName: s()(E.footerCTAContainer),
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: N
                    }),
                    (0, i.jsx)('div', {
                        className: E.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: C.Z,
                            className: s()(E.footerArt),
                            onEnded: () => {
                                B(!0);
                            },
                            ref: Z,
                            children: (0, i.jsx)('source', {
                                src: O ? b.Z : v.Z,
                                type: O ? h.m.MP4 : h.m.WEBM
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
