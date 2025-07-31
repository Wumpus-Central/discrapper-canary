n.d(t, { Z: () => P });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    p = n(70097),
    g = n(526167),
    h = n(357355),
    f = n(140465),
    b = n(775412),
    x = n(47280),
    _ = n(105759),
    j = n(736519),
    O = n(422034),
    E = n(710220),
    C = n(635921),
    v = n(638631),
    S = n(869783),
    T = n(388032),
    N = n(909176),
    I = n(181960),
    y = n(313199),
    A = n(821969);
let P = r.forwardRef((e, t) => {
    let { className: n, buttonClassName: r, subscriptionTier: s, isDarkMode: P, isEligibleForBogoPromotion: R, videoRef: D } = e,
        { analyticsLocations: Z } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
        w = (0, b._O)(),
        k = (0, f.Nx)(),
        L = (0, l.e7)([h.Z], () => h.Z.affinities),
        B = (0, _.Z)(),
        M = null != B,
        U = P ? o.Tt.WHITE : o.Tt.BRAND,
        V = L.length > 0,
        G = (0, x.Z)({ location: 'HeroHeading' }) ? T.intl.string(T.t['EW+VIS']) : T.intl.string(T.t.YCZldH),
        F = (0, g.rO)(),
        H = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(m.Gt, {
        value: Z,
        children: (0, i.jsxs)('div', {
            className: a()(N.container, N.heroHeadingContainer, n),
            ref: t,
            'data-testid': 'marketing-page-hero-header',
            children: [
                (0, i.jsx)('div', {
                    className: N.container,
                    children: (0, i.jsxs)('div', {
                        className: N.marketingPageTextContainer,
                        children: [
                            k && (0, i.jsx)(v.Z, {}),
                            (0, i.jsx)(c.X6q, {
                                className: N.marketingPageHeading,
                                variant: 'display-sm',
                                color: 'header-primary',
                                children: G
                            }),
                            M
                                ? (0, i.jsx)(E.Z, { referrer: B })
                                : V &&
                                  (0, i.jsx)('div', {
                                      className: N.affinityDescriptionContainer,
                                      children: (0, i.jsx)(O.Z, {
                                          textColor: 'text-default',
                                          smallerText: !1,
                                          isApplicationHome: !0
                                      })
                                  }),
                            w
                                ? (0, i.jsx)('div', {
                                      className: a()(N.buttonContainer, N.marketingPageCTAContainer, { [N.marketingPageCTAMargin]: !(V || M) }),
                                      children: (0, i.jsx)(j.Z, {
                                          className: a()(N.button, r),
                                          color: U
                                      })
                                  })
                                : (0, i.jsx)(C.PK, {
                                      subscriptionTier: s,
                                      inOfferExperience: k,
                                      containerClassName: a()(N.marketingPageCTAContainer, { [N.marketingPageCTAMargin]: !(V || M) }),
                                      buttonClassName: r,
                                      isApplicationHome: !0,
                                      isDarkMode: P,
                                      isEligibleForBogoPromotion: R
                                  }),
                            (0, i.jsx)(C._O, {
                                variant: 'text-sm/normal',
                                withBottomMargin: !1,
                                isApplicationHome: !0
                            })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: N.heroHeadingV2ArtContainer,
                    children: (0, i.jsx)(p.Z, {
                        autoPlay: !H,
                        playsInline: !0,
                        preload: H ? 'none' : 'auto',
                        poster: y.Z,
                        loop: !0,
                        className: N.heroHeadingV2Art,
                        ref: D,
                        children: (0, i.jsx)('source', {
                            src: F ? I.Z : A.Z,
                            type: F ? S.m.MP4 : S.m.WEBM
                        })
                    })
                })
            ]
        })
    });
});
