n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(70097),
    u = n(526167),
    m = n(140465),
    g = n(104494),
    _ = n(639119),
    p = n(635921),
    f = n(474936),
    h = n(869783),
    x = n(388032),
    E = n(525491),
    C = n(839526),
    b = n(4046),
    v = n(423741);
let T = (e) => {
    var t, n;
    let { className: a, isFooterVisible: T, isDarkMode: N, isReducedMotion: I } = e,
        { analyticsLocations: R } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        j = (0, g.Ng)(),
        S = (0, g.Wp)(j, f.Si.TIER_2) ? f.Si.TIER_2 : void 0,
        A = (0, _.N)(),
        P = (0, m.Nx)(),
        Z = (0, u.rO)(),
        w = r.useRef(null),
        [M, B] = r.useState(!1);
    return (
        r.useEffect(() => {
            !T || I || M || null == w.current || w.current.play();
        }, [T, I, M]),
        (0, i.jsx)(c.Gt, {
            value: R,
            children: (0, i.jsxs)('div', {
                className: s()(E.container, a),
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: E.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: x.intl.string(x.t.lEw32t)
                    }),
                    (0, i.jsx)(p.PK, {
                        subscriptionTier: null !== (n = null == A ? void 0 : null === (t = A.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : S,
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
                            poster: b.Z,
                            className: s()(E.footerArt),
                            onEnded: () => {
                                B(!0);
                            },
                            ref: w,
                            children: (0, i.jsx)('source', {
                                src: Z ? C.Z : v.Z,
                                type: Z ? h.m.MP4 : h.m.WEBM
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
