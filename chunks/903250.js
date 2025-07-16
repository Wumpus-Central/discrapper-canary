n.d(t, { Z: () => A });
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
    x = n(51574),
    _ = n(105759),
    j = n(736519),
    E = n(422034),
    O = n(710220),
    C = n(635921),
    v = n(638631),
    S = n(869783),
    T = n(909176),
    N = n(181960),
    I = n(313199),
    y = n(821969);
let A = r.forwardRef((e, t) => {
    let { className: n, buttonClassName: r, subscriptionTier: s, isDarkMode: A, isEligibleForBogoPromotion: P, videoRef: R } = e,
        { analyticsLocations: D } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
        Z = (0, b._O)(),
        w = (0, f.Nx)(),
        k = (0, l.e7)([h.Z], () => h.Z.affinities),
        L = (0, _.Z)(),
        B = null != L,
        M = A ? o.Tt.WHITE : o.Tt.BRAND,
        U = k.length > 0,
        V = (0, x.ZP)({ location: 'PremiumMarketingHeroHeading' }),
        G = (0, x.J1)(V),
        F = (0, g.rO)(),
        H = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(m.Gt, {
        value: D,
        children: (0, i.jsxs)('div', {
            className: a()(T.container, T.heroHeadingContainer, n),
            ref: t,
            'data-testid': 'marketing-page-hero-header',
            children: [
                (0, i.jsx)('div', {
                    className: T.container,
                    children: (0, i.jsxs)('div', {
                        className: T.marketingPageTextContainer,
                        children: [
                            w && (0, i.jsx)(v.Z, {}),
                            (0, i.jsx)(c.X6q, {
                                className: T.marketingPageHeading,
                                variant: 'display-sm',
                                color: 'header-primary',
                                children: G
                            }),
                            B
                                ? (0, i.jsx)(O.Z, { referrer: L })
                                : U &&
                                  (0, i.jsx)('div', {
                                      className: T.affinityDescriptionContainer,
                                      children: (0, i.jsx)(E.Z, {
                                          textColor: 'text-default',
                                          smallerText: !1,
                                          isApplicationHome: !0
                                      })
                                  }),
                            Z
                                ? (0, i.jsx)('div', {
                                      className: a()(T.buttonContainer, T.marketingPageCTAContainer, { [T.marketingPageCTAMargin]: !(U || B) }),
                                      children: (0, i.jsx)(j.Z, {
                                          className: a()(T.button, r),
                                          color: M
                                      })
                                  })
                                : (0, i.jsx)(C.PK, {
                                      subscriptionTier: s,
                                      inOfferExperience: w,
                                      containerClassName: a()(T.marketingPageCTAContainer, { [T.marketingPageCTAMargin]: !(U || B) }),
                                      buttonClassName: r,
                                      isApplicationHome: !0,
                                      isDarkMode: A,
                                      isEligibleForBogoPromotion: P
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
                    className: T.heroHeadingV2ArtContainer,
                    children: (0, i.jsx)(p.Z, {
                        autoPlay: !H,
                        playsInline: !0,
                        preload: H ? 'none' : 'auto',
                        poster: I.Z,
                        loop: !0,
                        className: T.heroHeadingV2Art,
                        ref: R,
                        children: (0, i.jsx)('source', {
                            src: F ? N.Z : y.Z,
                            type: F ? S.m.MP4 : S.m.WEBM
                        })
                    })
                })
            ]
        })
    });
});
