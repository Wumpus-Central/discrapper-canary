n.d(t, { Z: () => T });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(357355),
    m = n(140465),
    g = n(775412),
    p = n(51574),
    h = n(104494),
    f = n(639119),
    b = n(105759),
    _ = n(736519),
    x = n(422034),
    E = n(710220),
    j = n(635921),
    C = n(474936),
    O = n(388032),
    S = n(909176);
let v = (e) => {
        let t,
            { trialOffer: n, discountOffer: r } = e;
        if ((null != n ? (t = O.intl.string(O.t.IBYG5e)) : null != r && (t = O.intl.formatToPlainString(O.t.iiLbvr, { percent: r.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: S.premiumOfferPill,
                children: (0, i.jsx)(o.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    T = r.forwardRef((e, t) => {
        var n, r;
        let { isFullscreen: s, className: T, buttonClassName: I, subscriptionTier: N, entrypoint: y, isDarkMode: A, isEligibleForBogoPromotion: P } = e,
            { analyticsLocations: R } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, g._O)(),
            Z = (0, h.Ng)(),
            w = (0, h.Wp)(Z, C.Si.TIER_2) ? C.Si.TIER_2 : void 0,
            k = (0, f.N)(),
            L = (0, m.Nx)(),
            B = (0, a.e7)([u.Z], () => u.Z.affinities),
            M = (0, b.Z)(),
            U = y === C.EZ.ApplicationStoreHome,
            V = U && null != M,
            G = A ? o.Ttl.WHITE : o.Ttl.BRAND,
            F = B.length > 0,
            H = (0, p.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            z = (() => {
                switch (H) {
                    case p.zS.V4:
                        return O.intl.string(O.t['EW+VIS']);
                    case p.zS.V5:
                        return O.intl.string(O.t['eG+cW1']);
                    default:
                        return O.intl.string(O.t.YCZldH);
                }
            })();
        return (0, i.jsx)(d.Gt, {
            value: R,
            children: (0, i.jsx)('div', {
                ref: t,
                className: l()(S.container, S.marketingPageContainer, T),
                'data-testid': 'marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: S.marketingPageTextContainer,
                    children: [
                        L &&
                            (0, i.jsx)(v, {
                                trialOffer: k,
                                discountOffer: Z
                            }),
                        (0, i.jsx)(o.X6q, {
                            className: S.marketingPageHeading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: z
                        }),
                        V
                            ? (0, i.jsx)(E.Z, {
                                  referrer: M,
                                  isApplicationHome: U
                              })
                            : F &&
                              (0, i.jsx)('div', {
                                  className: S.affinityDescriptionContainer,
                                  children: (0, i.jsx)(x.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !s,
                                      isApplicationHome: U
                                  })
                              }),
                        D
                            ? (0, i.jsx)('div', {
                                  className: l()(S.buttonContainer, S.marketingPageCTAContainer, { [S.marketingPageCTAMargin]: !(F || V) }),
                                  children: (0, i.jsx)(_.Z, {
                                      className: l()(S.button, I),
                                      color: G
                                  })
                              })
                            : (0, i.jsx)(j.PK, {
                                  subscriptionTier: null != (r = null != N ? N : null == k || null == (n = k.subscription_trial) ? void 0 : n.sku_id) ? r : w,
                                  inOfferExperience: L,
                                  containerClassName: l()(S.marketingPageCTAContainer, { [S.marketingPageCTAMargin]: !(F || V) }),
                                  buttonClassName: I,
                                  isApplicationHome: U,
                                  isDarkMode: A,
                                  isEligibleForBogoPromotion: P
                              }),
                        (0, i.jsx)(j._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isApplicationHome: U
                        })
                    ]
                })
            })
        });
    });
