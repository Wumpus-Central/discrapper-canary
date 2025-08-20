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
    E = n(47280),
    b = n(105759),
    y = n(736519),
    O = n(422034),
    v = n(710220),
    I = n(635921),
    T = n(638631),
    S = n(869783),
    A = n(388032),
    C = n(876544),
    N = n(181960),
    R = n(313199),
    P = n(821969);
let w = (e, t) => {
        let {
                className: n,
                buttonClassName: i,
                subscriptionTier: a,
                isDarkMode: w,
                isEligibleForBogoPromotion: D,
                videoRef: x,
            } = e,
            { analyticsLocations: L } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            j = (0, g._O)(),
            M = (0, m.Nx)(),
            k = (0, s.e7)([h.Z], () => h.Z.affinities),
            U = (0, b.Z)(),
            G = null != U,
            B = w ? l.Tt.WHITE : l.Tt.BRAND,
            Z = k.length > 0,
            V = (0, E.ZP)({ location: "HeroHeading" }) ? A.intl.string(A.t["EW+VIS"]) : A.intl.string(A.t.YCZldH),
            F = (0, p.rO)(),
            H = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, r.jsx)(f.Gt, {
            value: L,
            children: (0, r.jsxs)("div", {
                className: o()(C.container, C.heroHeadingContainer, n),
                ref: t,
                "data-testid": "marketing-page-hero-header",
                children: [
                    (0, r.jsx)("div", {
                        className: C.container,
                        children: (0, r.jsxs)("div", {
                            className: C.marketingPageTextContainer,
                            children: [
                                M && (0, r.jsx)(T.Z, {}),
                                (0, r.jsx)(c.X6q, {
                                    className: C.marketingPageHeading,
                                    variant: "display-sm",
                                    color: "header-primary",
                                    children: V,
                                }),
                                G
                                    ? (0, r.jsx)(v.Z, { referrer: U })
                                    : Z &&
                                      (0, r.jsx)("div", {
                                          className: C.affinityDescriptionContainer,
                                          children: (0, r.jsx)(O.Z, {
                                              textColor: "text-default",
                                              smallerText: !1,
                                              isApplicationHome: !0,
                                          }),
                                      }),
                                j
                                    ? (0, r.jsx)("div", {
                                          className: o()(C.buttonContainer, C.marketingPageCTAContainer, {
                                              [C.marketingPageCTAMargin]: !(Z || G),
                                          }),
                                          children: (0, r.jsx)(y.Z, {
                                              className: o()(C.button, i),
                                              color: B,
                                          }),
                                      })
                                    : (0, r.jsx)(I.PK, {
                                          subscriptionTier: a,
                                          inOfferExperience: M,
                                          containerClassName: o()(C.marketingPageCTAContainer, {
                                              [C.marketingPageCTAMargin]: !(Z || G),
                                          }),
                                          buttonClassName: i,
                                          isApplicationHome: !0,
                                          isDarkMode: w,
                                          isEligibleForBogoPromotion: D,
                                      }),
                                (0, r.jsx)(I._O, {
                                    variant: "text-sm/normal",
                                    withBottomMargin: !1,
                                    isApplicationHome: !0,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: C.heroHeadingV2ArtContainer,
                        children: (0, r.jsx)(_.Z, {
                            autoPlay: !H,
                            playsInline: !0,
                            preload: H ? "none" : "auto",
                            poster: R.Z,
                            loop: !0,
                            className: C.heroHeadingV2Art,
                            ref: x,
                            children: (0, r.jsx)("source", {
                                src: F ? N.Z : P.Z,
                                type: F ? S.m.MP4 : S.m.WEBM,
                            }),
                        }),
                    }),
                ],
            }),
        });
    },
    D = i.forwardRef(w);
