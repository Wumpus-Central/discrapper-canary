(n.d(t, { Z: () => O }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
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
    x = n(388032),
    _ = n(578504),
    E = n(839526),
    j = n(4046),
    C = n(423741);
let O = r.forwardRef((e, t) => {
    var n, s;
    let { className: O, isFooterVisible: S, isDarkMode: v, isReducedMotion: T, subscriptionTier: N } = e,
        { analyticsLocations: I } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        y = (0, g.Ng)(),
        A = (0, g.Wp)(y, f.Si.TIER_2) ? f.Si.TIER_2 : void 0,
        P = (0, p.N)(),
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
                className: l()(_.container, O),
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: _.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: x.intl.string(x.t.lEw32t)
                    }),
                    (0, i.jsx)(h.PK, {
                        subscriptionTier: null != (s = null != N ? N : null == P || null == (n = P.subscription_trial) ? void 0 : n.sku_id) ? s : A,
                        inOfferExperience: R,
                        containerClassName: _.footerCTAContainer,
                        isApplicationHome: !0,
                        isDarkMode: v
                    }),
                    (0, i.jsx)('div', {
                        className: _.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            muted: !0,
                            preload: 'auto',
                            poster: j.Z,
                            className: _.footerArt,
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
                    (0, i.jsx)('div', { className: _.leftGradient }),
                    (0, i.jsx)('div', { className: _.rightGradient })
                ]
            })
        })
    );
});
