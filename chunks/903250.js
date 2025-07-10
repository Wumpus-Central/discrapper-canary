n.d(t, { Z: () => w });
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
    _ = n(304480),
    j = n(104494),
    E = n(639119),
    O = n(105759),
    C = n(736519),
    v = n(422034),
    S = n(710220),
    T = n(635921),
    N = n(474936),
    I = n(869783),
    y = n(388032),
    A = n(909176),
    P = n(181960),
    R = n(313199),
    D = n(821969);
let Z = (e) => {
        let t,
            { trialOffer: n, discountOffer: r } = e,
            s = _.Z.useExperiment({ location: 'OfferPill' });
        if ((null != n ? (t = !0 === s.enabled ? y.intl.string(y.t.gtNqJS) : y.intl.string(y.t.IBYG5e)) : null != r && (t = y.intl.formatToPlainString(y.t.iiLbvr, { percent: r.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: A.premiumOfferPill,
                children: (0, i.jsx)(c.Text, {
                    variant: 'text-xs/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    w = r.forwardRef((e, t) => {
        var n, r;
        let { className: s, buttonClassName: _, subscriptionTier: y, isDarkMode: w, isEligibleForBogoPromotion: k, videoRef: L } = e,
            { analyticsLocations: B } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_HERO_CTA),
            M = (0, b._O)(),
            U = (0, j.Ng)(),
            V = (0, j.Wp)(U, N.Si.TIER_2) ? N.Si.TIER_2 : void 0,
            G = (0, E.N)(),
            F = (0, f.Nx)(),
            H = (0, l.e7)([h.Z], () => h.Z.affinities),
            z = (0, O.Z)(),
            W = null != z,
            Y = w ? o.Tt.WHITE : o.Tt.BRAND,
            K = H.length > 0,
            q = (0, x.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            X = (0, x.J1)(q),
            J = (0, g.rO)(),
            Q = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, i.jsx)(m.Gt, {
            value: B,
            children: (0, i.jsxs)('div', {
                className: a()(A.container, A.heroHeadingContainer, s),
                ref: t,
                'data-testid': 'marketing-page-hero-header',
                children: [
                    (0, i.jsx)('div', {
                        className: A.container,
                        children: (0, i.jsxs)('div', {
                            className: A.marketingPageTextContainer,
                            children: [
                                F &&
                                    (0, i.jsx)(Z, {
                                        trialOffer: G,
                                        discountOffer: U
                                    }),
                                (0, i.jsx)(c.X6q, {
                                    className: A.marketingPageHeading,
                                    variant: 'display-sm',
                                    color: 'header-primary',
                                    children: X
                                }),
                                W
                                    ? (0, i.jsx)(S.Z, { referrer: z })
                                    : K &&
                                      (0, i.jsx)('div', {
                                          className: A.affinityDescriptionContainer,
                                          children: (0, i.jsx)(v.Z, {
                                              textColor: 'text-default',
                                              smallerText: !1,
                                              isApplicationHome: !0
                                          })
                                      }),
                                M
                                    ? (0, i.jsx)('div', {
                                          className: a()(A.buttonContainer, A.marketingPageCTAContainer, { [A.marketingPageCTAMargin]: !(K || W) }),
                                          children: (0, i.jsx)(C.Z, {
                                              className: a()(A.button, _),
                                              color: Y
                                          })
                                      })
                                    : (0, i.jsx)(T.PK, {
                                          subscriptionTier: null != (r = null != y ? y : null == G || null == (n = G.subscription_trial) ? void 0 : n.sku_id) ? r : V,
                                          inOfferExperience: F,
                                          containerClassName: a()(A.marketingPageCTAContainer, { [A.marketingPageCTAMargin]: !(K || W) }),
                                          buttonClassName: _,
                                          isApplicationHome: !0,
                                          isDarkMode: w,
                                          isEligibleForBogoPromotion: k
                                      }),
                                (0, i.jsx)(T._O, {
                                    variant: 'text-sm/normal',
                                    withBottomMargin: !1,
                                    isApplicationHome: !0
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: A.heroHeadingV2ArtContainer,
                        children: (0, i.jsx)(p.Z, {
                            autoPlay: !Q,
                            playsInline: !0,
                            preload: Q ? 'none' : 'auto',
                            poster: R.Z,
                            loop: !0,
                            className: A.heroHeadingV2Art,
                            ref: L,
                            children: (0, i.jsx)('source', {
                                src: J ? P.Z : D.Z,
                                type: J ? I.m.MP4 : I.m.WEBM
                            })
                        })
                    })
                ]
            })
        });
    });
