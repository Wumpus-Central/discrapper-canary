n.d(t, { Z: () => v });
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
    p = n(104494),
    h = n(639119),
    f = n(105759),
    b = n(736519),
    _ = n(422034),
    x = n(710220),
    E = n(635921),
    j = n(474936),
    C = n(388032),
    O = n(909176);
let S = (e) => {
        let t,
            { trialOffer: n, discountOffer: r } = e;
        if ((null != n ? (t = C.intl.string(C.t.IBYG5e)) : null != r && (t = C.intl.formatToPlainString(C.t.iiLbvr, { percent: r.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: O.premiumOfferPill,
                children: (0, i.jsx)(o.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    v = r.forwardRef((e, t) => {
        var n, r;
        let { isFullscreen: s, className: v, buttonClassName: T, subscriptionTier: I, entrypoint: N, isDarkMode: y, isEligibleForBogoPromotion: A } = e,
            { analyticsLocations: P } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            R = (0, g._O)(),
            D = (0, p.Ng)(),
            Z = (0, p.Wp)(D, j.Si.TIER_2) ? j.Si.TIER_2 : void 0,
            w = (0, h.N)(),
            k = (0, m.Nx)(),
            L = (0, a.e7)([u.Z], () => u.Z.affinities),
            B = (0, f.Z)(),
            M = N === j.EZ.ApplicationStoreHome,
            U = M && null != B,
            V = y ? o.Ttl.WHITE : o.Ttl.BRAND,
            G = L.length > 0;
        return (0, i.jsx)(d.Gt, {
            value: P,
            children: (0, i.jsx)('div', {
                ref: t,
                className: l()(O.container, O.marketingPageContainer, v),
                'data-testid': 'marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: O.marketingPageTextContainer,
                    children: [
                        k &&
                            (0, i.jsx)(S, {
                                trialOffer: w,
                                discountOffer: D
                            }),
                        (0, i.jsx)(o.X6q, {
                            className: O.marketingPageHeading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: C.intl.string(C.t.YCZldH)
                        }),
                        U
                            ? (0, i.jsx)(x.Z, {
                                  referrer: B,
                                  isApplicationHome: M
                              })
                            : G &&
                              (0, i.jsx)('div', {
                                  className: O.affinityDescriptionContainer,
                                  children: (0, i.jsx)(_.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !s,
                                      isApplicationHome: M
                                  })
                              }),
                        R
                            ? (0, i.jsx)('div', {
                                  className: l()(O.buttonContainer, O.marketingPageCTAContainer, { [O.marketingPageCTAMargin]: !(G || U) }),
                                  children: (0, i.jsx)(b.Z, {
                                      className: l()(O.button, T),
                                      color: V
                                  })
                              })
                            : (0, i.jsx)(E.PK, {
                                  subscriptionTier: null != (r = null != I ? I : null == w || null == (n = w.subscription_trial) ? void 0 : n.sku_id) ? r : Z,
                                  inOfferExperience: k,
                                  containerClassName: l()(O.marketingPageCTAContainer, { [O.marketingPageCTAMargin]: !(G || U) }),
                                  buttonClassName: T,
                                  isApplicationHome: M,
                                  isDarkMode: y,
                                  isEligibleForBogoPromotion: A
                              }),
                        (0, i.jsx)(E._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isApplicationHome: M
                        })
                    ]
                })
            })
        });
    });
