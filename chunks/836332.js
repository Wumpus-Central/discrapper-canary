(n.d(t, { Z: () => j }), n(388685));
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
    p = n(635921),
    g = n(869783),
    h = n(388032),
    f = n(578504),
    b = n(839526),
    x = n(4046),
    _ = n(423741);
let j = r.forwardRef((e, t) => {
    let { className: n, isFooterVisible: s, isDarkMode: j, isReducedMotion: E, subscriptionTier: O } = e,
        { analyticsLocations: C } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        v = (0, m.Nx)(),
        S = (0, u.rO)(),
        T = r.useRef(null),
        [N, I] = r.useState(!1);
    return (
        r.useEffect(() => {
            !s || E || N || null == T.current || T.current.play();
        }, [s, E, N]),
        (0, i.jsx)(c.Gt, {
            value: C,
            children: (0, i.jsxs)('div', {
                ref: t,
                className: a()(f.container, n),
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: f.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: h.intl.string(h.t.lEw32t)
                    }),
                    (0, i.jsx)(p.PK, {
                        subscriptionTier: O,
                        inOfferExperience: v,
                        containerClassName: f.footerCTAContainer,
                        isApplicationHome: !0,
                        isDarkMode: j
                    }),
                    (0, i.jsx)('div', {
                        className: f.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            muted: !0,
                            preload: 'auto',
                            poster: x.Z,
                            className: f.footerArt,
                            onEnded: () => {
                                I(!0);
                            },
                            ref: T,
                            children: (0, i.jsx)('source', {
                                src: S ? b.Z : _.Z,
                                type: S ? g.m.MP4 : g.m.WEBM
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: f.leftGradient }),
                    (0, i.jsx)('div', { className: f.rightGradient })
                ]
            })
        })
    );
});
