n.d(t, { Z: () => Z });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(70097),
    p = n(526167),
    g = n(357355),
    h = n(140465),
    f = n(775412),
    b = n(51574),
    x = n(304480),
    _ = n(104494),
    E = n(639119),
    j = n(105759),
    O = n(736519),
    C = n(422034),
    S = n(710220),
    v = n(635921),
    T = n(474936),
    N = n(869783),
    I = n(388032),
    y = n(909176),
    A = n(181960),
    P = n(313199),
    R = n(821969);
let D = (e) => {
        let t,
            { trialOffer: n, discountOffer: r } = e,
            s = x.Z.useExperiment({ location: 'OfferPill' });
        if ((null != n ? (t = !0 === s.enabled ? I.intl.string(I.t.gtNqJS) : I.intl.string(I.t.IBYG5e)) : null != r && (t = I.intl.formatToPlainString(I.t.iiLbvr, { percent: r.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: y.premiumOfferPill,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-xs/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    Z = r.forwardRef((e, t) => {
        var n, r;
        let { className: s, buttonClassName: x, subscriptionTier: I, isDarkMode: Z, isEligibleForBogoPromotion: w, videoRef: k } = e,
            { analyticsLocations: L } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            B = (0, f._O)(),
            M = (0, _.Ng)(),
            U = (0, _.Wp)(M, T.Si.TIER_2) ? T.Si.TIER_2 : void 0,
            V = (0, E.N)(),
            G = (0, h.Nx)(),
            F = (0, a.e7)([g.Z], () => g.Z.affinities),
            H = (0, j.Z)(),
            z = null != H,
            Y = Z ? o.Ttl.WHITE : o.Ttl.BRAND,
            W = F.length > 0,
            K = (0, b.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            q = (0, b.J1)(K),
            X = (0, p.rO)(),
            Q = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, i.jsx)(u.Gt, {
            value: L,
            children: (0, i.jsxs)('div', {
                className: l()(y.container, y.heroHeadingContainer, s),
                ref: t,
                'data-testid': 'marketing-page-hero-header',
                children: [
                    (0, i.jsx)('div', {
                        className: y.container,
                        children: (0, i.jsxs)('div', {
                            className: y.marketingPageTextContainer,
                            children: [
                                G &&
                                    (0, i.jsx)(D, {
                                        trialOffer: V,
                                        discountOffer: M
                                    }),
                                (0, i.jsx)(o.X6q, {
                                    className: y.marketingPageHeading,
                                    variant: 'display-sm',
                                    color: 'header-primary',
                                    children: q
                                }),
                                z
                                    ? (0, i.jsx)(S.Z, { referrer: H })
                                    : W &&
                                      (0, i.jsx)('div', {
                                          className: y.affinityDescriptionContainer,
                                          children: (0, i.jsx)(C.Z, {
                                              textColor: 'text-default',
                                              smallerText: !1,
                                              isApplicationHome: !0
                                          })
                                      }),
                                B
                                    ? (0, i.jsx)('div', {
                                          className: l()(y.buttonContainer, y.marketingPageCTAContainer, { [y.marketingPageCTAMargin]: !(W || z) }),
                                          children: (0, i.jsx)(O.Z, {
                                              className: l()(y.button, x),
                                              color: Y
                                          })
                                      })
                                    : (0, i.jsx)(v.PK, {
                                          subscriptionTier: null != (r = null != I ? I : null == V || null == (n = V.subscription_trial) ? void 0 : n.sku_id) ? r : U,
                                          inOfferExperience: G,
                                          containerClassName: l()(y.marketingPageCTAContainer, { [y.marketingPageCTAMargin]: !(W || z) }),
                                          buttonClassName: x,
                                          isApplicationHome: !0,
                                          isDarkMode: Z,
                                          isEligibleForBogoPromotion: w
                                      }),
                                (0, i.jsx)(v._O, {
                                    variant: 'text-sm/normal',
                                    withBottomMargin: !1,
                                    isApplicationHome: !0
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: y.heroHeadingV2ArtContainer,
                        children: (0, i.jsx)(m.Z, {
                            autoPlay: !Q,
                            playsInline: !0,
                            preload: Q ? 'none' : 'auto',
                            poster: P.Z,
                            loop: !0,
                            className: y.heroHeadingV2Art,
                            ref: k,
                            children: (0, i.jsx)('source', {
                                src: X ? A.Z : R.Z,
                                type: X ? N.m.MP4 : N.m.WEBM
                            })
                        })
                    })
                ]
            })
        });
    });
