n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(607470),
    A = n(676279),
    g = n(560138),
    h = n(526292),
    x = n(89366),
    p = n(236834),
    E = n(194509),
    C = n(224850),
    T = n(797255),
    S = n(288351),
    I = n(320908),
    f = n(693591),
    N = n(985018),
    b = n(986970),
    j = n(182514),
    v = n(619947),
    O = n(733907);
let R = s.forwardRef((e, t) => {
    let {
            className: n,
            buttonClassName: s,
            subscriptionTier: a,
            isDarkMode: R,
            isEligibleForBogoPromotion: y,
            videoRef: P,
        } = e,
        { analyticsLocations: L } = (0, _.Ay)(u.A.PREMIUM_MARKETING_HERO_CTA),
        D = (0, x.QQ)(),
        M = (0, h.ar)(),
        G = (0, r.bG)([g.A], () => g.A.affinities),
        U = (0, p.A)(),
        k = null != U,
        V = R ? o.XD.WHITE : o.XD.BRAND,
        H = G.length > 0,
        w = N.intl.string(N.t.YCZldK),
        B = (0, A.TM)(),
        Y = (0, r.bG)([d.A], () => d.A.useReducedMotion);
    return (0, i.jsx)(_.f5, {
        value: L,
        children: (0, i.jsxs)("div", {
            className: l()(b.kL, b.qY, n),
            ref: t,
            "data-testid": "marketing-page-hero-header",
            children: [
                (0, i.jsx)("div", {
                    className: b.kL,
                    children: (0, i.jsxs)("div", {
                        className: b.s8,
                        children: [
                            M && (0, i.jsx)(S.A, {}),
                            (0, i.jsx)(c.Heading, {
                                className: b.WT,
                                variant: "display-sm",
                                color: "text-strong",
                                children: w,
                            }),
                            k
                                ? (0, i.jsx)(T.A, { referrer: U })
                                : H &&
                                  (0, i.jsx)("div", {
                                      className: b.kb,
                                      children: (0, i.jsx)(C.A, {
                                          textColor: "text-default",
                                          smallerText: !1,
                                          isApplicationHome: !0,
                                      }),
                                  }),
                            D
                                ? (0, i.jsx)("div", {
                                      className: l()(b.UD, b.$F, { [b.In]: !(H || k) }),
                                      children: (0, i.jsx)(E.A, { className: l()(b.x6, s), color: V }),
                                  })
                                : (0, i.jsx)(I.KN, {
                                      subscriptionTier: a,
                                      inOfferExperience: M,
                                      containerClassName: l()(b.$F, { [b.In]: !(H || k) }),
                                      buttonClassName: s,
                                      isApplicationHome: !0,
                                      isDarkMode: R,
                                      isEligibleForBogoPromotion: y,
                                  }),
                            (0, i.jsx)(I.U9, {
                                variant: "text-sm/normal",
                                withBottomMargin: !1,
                                isApplicationHome: !0,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)("div", {
                    className: b.TT,
                    children: (0, i.jsx)(m.A, {
                        autoPlay: !Y,
                        playsInline: !0,
                        preload: Y ? "none" : "auto",
                        poster: v.A,
                        loop: !0,
                        className: b.gm,
                        ref: P,
                        children: (0, i.jsx)("source", { src: B ? j.A : O.A, type: B ? f.a.MP4 : f.a.WEBM }),
                    }),
                }),
            ],
        }),
    });
});
