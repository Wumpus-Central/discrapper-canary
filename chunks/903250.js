n.d(t, { Z: () => I });
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
    h = n(304480),
    f = n(104494),
    b = n(639119),
    _ = n(105759),
    x = n(736519),
    E = n(422034),
    j = n(710220),
    C = n(635921),
    O = n(474936),
    S = n(388032),
    v = n(909176);
let T = (e) => {
        let t,
            { trialOffer: n, discountOffer: r } = e,
            s = h.Z.useExperiment({ location: 'OfferPill' });
        if ((null != n ? (t = !0 === s.enabled ? S.intl.string(S.t.gtNqJS) : S.intl.string(S.t.IBYG5e)) : null != r && (t = S.intl.formatToPlainString(S.t.iiLbvr, { percent: r.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: v.premiumOfferPill,
                children: (0, i.jsx)(o.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    I = r.forwardRef((e, t) => {
        var n, r;
        let { isFullscreen: s, className: h, buttonClassName: S, subscriptionTier: I, entrypoint: N, isDarkMode: y, isEligibleForBogoPromotion: A } = e,
            { analyticsLocations: P } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            R = (0, g._O)(),
            D = (0, f.Ng)(),
            Z = (0, f.Wp)(D, O.Si.TIER_2) ? O.Si.TIER_2 : void 0,
            w = (0, b.N)(),
            k = (0, m.Nx)(),
            L = (0, a.e7)([u.Z], () => u.Z.affinities),
            B = (0, _.Z)(),
            M = N === O.EZ.ApplicationStoreHome,
            U = M && null != B,
            V = y ? o.Ttl.WHITE : o.Ttl.BRAND,
            G = L.length > 0,
            F = (0, p.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            H = (0, p.J1)(F);
        return (0, i.jsx)(d.Gt, {
            value: P,
            children: (0, i.jsx)('div', {
                ref: t,
                className: l()(v.container, v.marketingPageContainer, h),
                'data-testid': 'marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: v.marketingPageTextContainer,
                    children: [
                        k &&
                            (0, i.jsx)(T, {
                                trialOffer: w,
                                discountOffer: D
                            }),
                        (0, i.jsx)(o.X6q, {
                            className: v.marketingPageHeading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: H
                        }),
                        U
                            ? (0, i.jsx)(j.Z, {
                                  referrer: B,
                                  isApplicationHome: M
                              })
                            : G &&
                              (0, i.jsx)('div', {
                                  className: v.affinityDescriptionContainer,
                                  children: (0, i.jsx)(E.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !s,
                                      isApplicationHome: M
                                  })
                              }),
                        R
                            ? (0, i.jsx)('div', {
                                  className: l()(v.buttonContainer, v.marketingPageCTAContainer, { [v.marketingPageCTAMargin]: !(G || U) }),
                                  children: (0, i.jsx)(x.Z, {
                                      className: l()(v.button, S),
                                      color: V
                                  })
                              })
                            : (0, i.jsx)(C.PK, {
                                  subscriptionTier: null != (r = null != I ? I : null == w || null == (n = w.subscription_trial) ? void 0 : n.sku_id) ? r : Z,
                                  inOfferExperience: k,
                                  containerClassName: l()(v.marketingPageCTAContainer, { [v.marketingPageCTAMargin]: !(G || U) }),
                                  buttonClassName: S,
                                  isApplicationHome: M,
                                  isDarkMode: y,
                                  isEligibleForBogoPromotion: A
                              }),
                        (0, i.jsx)(C._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isApplicationHome: M
                        })
                    ]
                })
            })
        });
    });
