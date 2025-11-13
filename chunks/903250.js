n.d(t, { Z: () => D });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(70097),
    p = n(526167),
    h = n(357355),
    m = n(140465),
    g = n(775412),
    E = n(105759),
    b = n(736519),
    y = n(422034),
    O = n(710220),
    v = n(635921),
    I = n(638631),
    T = n(869783),
    S = n(388032),
    A = n(876544),
    C = n(181960),
    N = n(313199),
    R = n(821969);
let P = (e, t) => {
        let {
                className: n,
                buttonClassName: i,
                subscriptionTier: a,
                isDarkMode: P,
                isEligibleForBogoPromotion: D,
                videoRef: w,
            } = e,
            { analyticsLocations: x } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            L = (0, g._O)(),
            M = (0, m.Nx)(),
            j = (0, s.e7)([h.Z], () => h.Z.affinities),
            k = (0, E.Z)(),
            U = null != k,
            G = P ? l.Tt.WHITE : l.Tt.BRAND,
            B = j.length > 0,
            Z = S.intl.string(S.t.YCZldK),
            F = (0, p.rO)(),
            V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, r.jsx)(f.Gt, {
            value: x,
            children: (0, r.jsxs)("div", {
                className: o()(A.container, A.heroHeadingContainer, n),
                ref: t,
                "data-testid": "marketing-page-hero-header",
                children: [
                    (0, r.jsx)("div", {
                        className: A.container,
                        children: (0, r.jsxs)("div", {
                            className: A.marketingPageTextContainer,
                            children: [
                                M && (0, r.jsx)(I.Z, {}),
                                (0, r.jsx)(c.Heading, {
                                    className: A.marketingPageHeading,
                                    variant: "display-sm",
                                    color: "header-primary",
                                    children: Z,
                                }),
                                U
                                    ? (0, r.jsx)(O.Z, { referrer: k })
                                    : B &&
                                      (0, r.jsx)("div", {
                                          className: A.affinityDescriptionContainer,
                                          children: (0, r.jsx)(y.Z, {
                                              textColor: "text-default",
                                              smallerText: !1,
                                              isApplicationHome: !0,
                                          }),
                                      }),
                                L
                                    ? (0, r.jsx)("div", {
                                          className: o()(A.buttonContainer, A.marketingPageCTAContainer, {
                                              [A.marketingPageCTAMargin]: !(B || U),
                                          }),
                                          children: (0, r.jsx)(b.Z, {
                                              className: o()(A.button, i),
                                              color: G,
                                          }),
                                      })
                                    : (0, r.jsx)(v.PK, {
                                          subscriptionTier: a,
                                          inOfferExperience: M,
                                          containerClassName: o()(A.marketingPageCTAContainer, {
                                              [A.marketingPageCTAMargin]: !(B || U),
                                          }),
                                          buttonClassName: i,
                                          isApplicationHome: !0,
                                          isDarkMode: P,
                                          isEligibleForBogoPromotion: D,
                                      }),
                                (0, r.jsx)(v._O, {
                                    variant: "text-sm/normal",
                                    withBottomMargin: !1,
                                    isApplicationHome: !0,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: A.heroHeadingV2ArtContainer,
                        children: (0, r.jsx)(_.Z, {
                            autoPlay: !V,
                            playsInline: !0,
                            preload: V ? "none" : "auto",
                            poster: N.Z,
                            loop: !0,
                            className: A.heroHeadingV2Art,
                            ref: w,
                            children: (0, r.jsx)("source", {
                                src: F ? C.Z : R.Z,
                                type: F ? T.m.MP4 : T.m.WEBM,
                            }),
                        }),
                    }),
                ],
            }),
        });
    },
    D = i.forwardRef(P);
