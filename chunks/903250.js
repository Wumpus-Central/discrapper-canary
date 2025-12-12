n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    p = n(70097),
    _ = n(526167),
    m = n(357355),
    h = n(140465),
    g = n(775412),
    E = n(105759),
    b = n(736519),
    y = n(422034),
    O = n(710220),
    v = n(635921),
    S = n(638631),
    I = n(869783),
    T = n(388032),
    C = n(876544),
    A = n(181960),
    N = n(313199),
    P = n(821969);
let R = (e, t) => {
        let {
                className: n,
                buttonClassName: i,
                subscriptionTier: o,
                isDarkMode: R,
                isEligibleForBogoPromotion: w,
                videoRef: D,
            } = e,
            { analyticsLocations: x } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
            L = (0, g._O)(),
            j = (0, h.Nx)(),
            M = (0, s.e7)([m.Z], () => m.Z.affinities),
            k = (0, E.Z)(),
            U = null != k,
            G = R ? l.Tt.WHITE : l.Tt.BRAND,
            Z = M.length > 0,
            F = T.intl.string(T.t.YCZldK),
            B = (0, _.rO)(),
            V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, r.jsx)(f.Gt, {
            value: x,
            children: (0, r.jsxs)("div", {
                className: a()(C.container, C.heroHeadingContainer, n),
                ref: t,
                "data-testid": "marketing-page-hero-header",
                children: [
                    (0, r.jsx)("div", {
                        className: C.container,
                        children: (0, r.jsxs)("div", {
                            className: C.marketingPageTextContainer,
                            children: [
                                j && (0, r.jsx)(S.Z, {}),
                                (0, r.jsx)(c.Heading, {
                                    className: C.marketingPageHeading,
                                    variant: "display-sm",
                                    color: "text-strong",
                                    children: F,
                                }),
                                U
                                    ? (0, r.jsx)(O.Z, { referrer: k })
                                    : Z &&
                                      (0, r.jsx)("div", {
                                          className: C.affinityDescriptionContainer,
                                          children: (0, r.jsx)(y.Z, {
                                              textColor: "text-default",
                                              smallerText: !1,
                                              isApplicationHome: !0,
                                          }),
                                      }),
                                L
                                    ? (0, r.jsx)("div", {
                                          className: a()(C.buttonContainer, C.marketingPageCTAContainer, {
                                              [C.marketingPageCTAMargin]: !(Z || U),
                                          }),
                                          children: (0, r.jsx)(b.Z, {
                                              className: a()(C.button, i),
                                              color: G,
                                          }),
                                      })
                                    : (0, r.jsx)(v.PK, {
                                          subscriptionTier: o,
                                          inOfferExperience: j,
                                          containerClassName: a()(C.marketingPageCTAContainer, {
                                              [C.marketingPageCTAMargin]: !(Z || U),
                                          }),
                                          buttonClassName: i,
                                          isApplicationHome: !0,
                                          isDarkMode: R,
                                          isEligibleForBogoPromotion: w,
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
                        className: C.heroHeadingV2ArtContainer,
                        children: (0, r.jsx)(p.Z, {
                            autoPlay: !V,
                            playsInline: !0,
                            preload: V ? "none" : "auto",
                            poster: N.Z,
                            loop: !0,
                            className: C.heroHeadingV2Art,
                            ref: D,
                            children: (0, r.jsx)("source", {
                                src: B ? A.Z : P.Z,
                                type: B ? I.m.MP4 : I.m.WEBM,
                            }),
                        }),
                    }),
                ],
            }),
        });
    },
    w = i.forwardRef(R);
