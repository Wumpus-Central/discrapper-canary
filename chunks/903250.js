n.d(t, { Z: () => N });
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
    O = n(635921),
    C = n(474936),
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
    N = r.forwardRef((e, t) => {
        var n, r;
        let { className: s, buttonClassName: h, subscriptionTier: S, isDarkMode: N, isEligibleForBogoPromotion: I } = e,
            { analyticsLocations: y } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            A = (0, g._O)(),
            P = (0, f.Ng)(),
            R = (0, f.Wp)(P, C.Si.TIER_2) ? C.Si.TIER_2 : void 0,
            D = (0, b.N)(),
            Z = (0, m.Nx)(),
            w = (0, a.e7)([u.Z], () => u.Z.affinities),
            k = (0, _.Z)(),
            L = null != k,
            B = N ? o.Ttl.WHITE : o.Ttl.BRAND,
            M = w.length > 0,
            U = (0, p.ZP)({ location: 'PremiumMarketingHeroHeading' }),
            V = (0, p.J1)(U);
        return (0, i.jsx)(d.Gt, {
            value: y,
            children: (0, i.jsx)('div', {
                ref: t,
                className: l()(v.container, v.marketingPageContainer, s),
                'data-testid': 'marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: v.marketingPageTextContainer,
                    children: [
                        Z &&
                            (0, i.jsx)(T, {
                                trialOffer: D,
                                discountOffer: P
                            }),
                        (0, i.jsx)(o.X6q, {
                            className: v.marketingPageHeading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: V
                        }),
                        L
                            ? (0, i.jsx)(j.Z, { referrer: k })
                            : M &&
                              (0, i.jsx)('div', {
                                  className: v.affinityDescriptionContainer,
                                  children: (0, i.jsx)(E.Z, {
                                      textColor: 'text-default',
                                      smallerText: !1,
                                      isApplicationHome: !0
                                  })
                              }),
                        A
                            ? (0, i.jsx)('div', {
                                  className: l()(v.buttonContainer, v.marketingPageCTAContainer, { [v.marketingPageCTAMargin]: !(M || L) }),
                                  children: (0, i.jsx)(x.Z, {
                                      className: l()(v.button, h),
                                      color: B
                                  })
                              })
                            : (0, i.jsx)(O.PK, {
                                  subscriptionTier: null != (r = null != S ? S : null == D || null == (n = D.subscription_trial) ? void 0 : n.sku_id) ? r : R,
                                  inOfferExperience: Z,
                                  containerClassName: l()(v.marketingPageCTAContainer, { [v.marketingPageCTAMargin]: !(M || L) }),
                                  buttonClassName: h,
                                  isApplicationHome: !0,
                                  isDarkMode: N,
                                  isEligibleForBogoPromotion: I
                              }),
                        (0, i.jsx)(O._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isApplicationHome: !0
                        })
                    ]
                })
            })
        });
    });
