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
    C = n(422034),
    E = n(710220),
    O = n(635921),
    v = n(638631),
    S = n(869783),
    T = n(388032),
    I = n(909176),
    N = n(181960),
    y = n(313199),
    A = n(821969);
let P = r.forwardRef((e, t) => {
    let { className: n, buttonClassName: r, subscriptionTier: s, isDarkMode: P, isEligibleForBogoPromotion: R, videoRef: D } = e,
        { analyticsLocations: Z } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
        w = (0, b._O)(),
        k = (0, f.Nx)(),
        L = (0, l.e7)([h.Z], () => h.Z.affinities),
        M = (0, _.Z)(),
        B = null != M,
        U = P ? o.Tt.WHITE : o.Tt.BRAND,
        V = L.length > 0,
        G = (0, x.Z)({ location: 'HeroHeading' }) ? T.intl.string(T.t['EW+VIS']) : T.intl.string(T.t.YCZldH),
        F = (0, g.rO)(),
        H = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, i.jsx)(m.Gt, {
        value: Z,
        children: (0, i.jsxs)('div', {
            className: a()(I.container, I.heroHeadingContainer, n),
            ref: t,
            'data-testid': 'marketing-page-hero-header',
            children: [
                (0, i.jsx)('div', {
                    className: I.container,
                    children: (0, i.jsxs)('div', {
                        className: I.marketingPageTextContainer,
                        children: [
                            k && (0, i.jsx)(v.Z, {}),
                            (0, i.jsx)(c.X6q, {
                                className: I.marketingPageHeading,
                                variant: 'display-sm',
                                color: 'header-primary',
                                children: G
                            }),
                            B
                                ? (0, i.jsx)(E.Z, { referrer: M })
                                : V &&
                                  (0, i.jsx)('div', {
                                      className: I.affinityDescriptionContainer,
                                      children: (0, i.jsx)(C.Z, {
                                          textColor: 'text-default',
                                          smallerText: !1,
                                          isApplicationHome: !0
                                      })
                                  }),
                            w
                                ? (0, i.jsx)('div', {
                                      className: a()(I.buttonContainer, I.marketingPageCTAContainer, { [I.marketingPageCTAMargin]: !(V || B) }),
                                      children: (0, i.jsx)(j.Z, {
                                          className: a()(I.button, r),
                                          color: U
                                      })
                                  })
                                : (0, i.jsx)(O.PK, {
                                      subscriptionTier: s,
                                      inOfferExperience: k,
                                      containerClassName: a()(I.marketingPageCTAContainer, { [I.marketingPageCTAMargin]: !(V || B) }),
                                      buttonClassName: r,
                                      isApplicationHome: !0,
                                      isDarkMode: P,
                                      isEligibleForBogoPromotion: R
                                  }),
                            (0, i.jsx)(O._O, {
                                variant: 'text-sm/normal',
                                withBottomMargin: !1,
                                isApplicationHome: !0
                            })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: I.heroHeadingV2ArtContainer,
                    children: (0, i.jsx)(p.Z, {
                        autoPlay: !H,
                        playsInline: !0,
                        preload: H ? 'none' : 'auto',
                        poster: y.Z,
                        loop: !0,
                        className: I.heroHeadingV2Art,
                        ref: D,
                        children: (0, i.jsx)('source', {
                            src: F ? N.Z : A.Z,
                            type: F ? S.m.MP4 : S.m.WEBM
                        })
                    })
                })
            ]
        })
    });
});
