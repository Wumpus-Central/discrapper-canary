n.d(t, { qu: () => eR, Nz: () => ej, pw: () => eP, ZP: () => e_, Lg: () => eh, nH: () => ef });
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    c = n(17928),
    o = n(462887),
    u = n(834730),
    m = n(144165),
    d = n(736653),
    g = n(793574),
    x = n(688810),
    T = n(904788),
    I = n(773669),
    p = n(287809),
    h = n(166403),
    f = n(224016),
    E = n(217392),
    j = n(960851),
    _ = n(526292),
    A = n(552736),
    P = n(778712),
    R = n(775602),
    v = n(937008),
    N = n(380619),
    M = n(298305),
    y = n(731113);
function C() {
    let e = (0, c.bG)([R.Ay], () => R.Ay.useReducedMotion),
        { claimableRewards: t } = (0, v.Pv)(),
        n = (0, A.A)(),
        r = n?.planSelection;
    if (null == r || null == t || 0 === t.length) return null;
    let l = (0, N.gc)(r.getBannerImageUrl?.()),
        a = (0, N.K5)(r.gradientConfig, { defaultAngle: 180 });
    return (0, i.jsxs)("div", {
        className: y.us,
        style: l ?? a,
        children: [
            (0, i.jsxs)("div", {
                className: y.ZR,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-sm/semibold", color: "always-white", children: r.heading() }),
                    null != r.subheading &&
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: r.subheading(t.length),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: y.my,
                children: (0, i.jsx)(M.A, {
                    maxRewardImageSrc: r.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: P._3.SIZE_80,
                }),
            }),
        ],
    });
}
var U = n(286320),
    S = n(422936),
    L = n(234419),
    b = n(410516),
    w = n(774774),
    O = n(231265),
    k = n(349563),
    F = n(97808),
    D = n(854627),
    G = n(375708),
    H = n(903110);
function Z() {
    let e = (0, U.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: r } = (0, D.A)({ userId: t?.id, size: P._3.SIZE_24, animateOnHover: !0 }),
        a = (e) => (null != e.globalName ? e.globalName : e.username),
        s = l.useMemo(
            () =>
                e.length >= 2
                    ? G.intl.formatToPlainString(G.t.c7ETJH, { username: a(e[0]) })
                    : 1 === e.length
                      ? G.intl.formatToPlainString(G.t.dpjXPL, { username: a(e[0]) })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, i.jsxs)("div", {
              className: H.kL,
              children: [
                  (0, i.jsx)(F.eu, {
                      className: H.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: P._3.SIZE_24,
                      ...r,
                  }),
                  (0, i.jsx)(u.E, { className: H.Qq, variant: "text-sm/normal", color: "always-white", children: s }),
              ],
          });
}
var V = n(214947),
    J = n(403581),
    W = n(104510),
    B = n(22231),
    Y = n(95635),
    z = n(343032),
    K = n(460905),
    Q = n(183623),
    q = n(861004),
    X = n(428262),
    $ = n(788868),
    ee = n(88001),
    et = n(466919);
let en = [
        { Icon: V.$, getText: () => G.intl.formatToPlainString(et.default.eP3Ar7, { totalSeats: ee.aw }) },
        { Icon: J.t, getText: () => G.intl.string(et.default.woz1Kg) },
        { Icon: W._, getText: () => G.intl.string(et.default.QnbVrt) },
        { Icon: B.R, getText: () => G.intl.string(et.default["409DEa"]) },
    ],
    er = [
        { Icon: V.$, getText: () => G.intl.formatToPlainString(et.default.eP3Ar7, { totalSeats: ee.aw }) },
        {
            Icon: Y.J,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.i, getText: () => G.intl.string(G.t["taMwg/"]) },
        { Icon: K.n, getText: () => G.intl.string(G.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => G.intl.string(G.t.W180bY) },
        { Icon: W._, getText: () => G.intl.formatToPlainString(et.default.HVCRVf, { numBoosts: $.M4 }) },
        { Icon: q.c, getText: () => G.intl.string(G.t.CNIZfy) },
    ],
    ei = [
        {
            Icon: Y.J,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.i, getText: () => G.intl.string(G.t["taMwg/"]) },
        { Icon: K.n, getText: () => G.intl.string(G.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => G.intl.string(G.t.W180bY) },
        { Icon: q.c, getText: () => G.intl.string(G.t.CNIZfy) },
    ];
var el = n(933832),
    ea = n(252424);
let es = [
        { Icon: el.A, getText: () => G.intl.string(G.t.kpMomJ) },
        {
            Icon: el.A,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: el.A, getText: () => G.intl.string(G.t.W180bY) },
        { Icon: el.A, getText: () => G.intl.string(G.t.zTk8Ul) },
    ],
    ec = [
        {
            Icon: W._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return G.intl.formatToPlainString(G.t["T9RTr/"], {
                    numBoosts: $.M4,
                    percentageOff: (0, ea.l9)(e, $.oX / 100),
                });
            },
        },
        {
            Icon: Y.J,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.n, getText: () => G.intl.string(G.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => G.intl.string(G.t.W180bY) },
        { Icon: q.c, getText: () => G.intl.string(G.t.CNIZfy) },
    ],
    eo = [
        {
            Icon: Y.J,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.n, getText: () => G.intl.string(G.t.KjrZ8Z) },
        { Icon: z.i, getText: () => G.intl.string(G.t["taMwg/"]) },
        { Icon: Q.F, getText: () => G.intl.string(G.t.W180bY) },
        { Icon: q.c, getText: () => G.intl.string(G.t.CNIZfy) },
    ],
    eu = [
        {
            Icon: Y.J,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.n, getText: () => G.intl.string(G.t.KjrZ8Z) },
        { Icon: z.i, getText: () => G.intl.string(G.t["taMwg/"]) },
        { Icon: Q.F, getText: () => G.intl.string(G.t.W180bY) },
        { Icon: W._, getText: () => G.intl.string(G.t.cdfuUU) },
        { Icon: q.c, getText: () => G.intl.string(G.t.CNIZfy) },
    ],
    em = [
        { Icon: el.A, getText: () => G.intl.string(G.t.KjrZ8Z) },
        {
            Icon: el.A,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: el.A, getText: () => G.intl.string(G.t.Uukj4o) },
    ],
    ed = [
        {
            Icon: Y.J,
            getText: () =>
                G.intl.formatToPlainString(G.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)($.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: K.n, getText: () => G.intl.string(G.t.KjrZ8Z) },
        { Icon: z.i, getText: () => G.intl.string(G.t["taMwg/"]) },
        { Icon: J.t, getText: () => G.intl.string(G.t["8ukxAW"]) },
    ];
var eg = n(222719),
    ex = n(838541),
    eT = n(111932),
    eI = n(115599);
function ep(e) {
    let {
        Icon: t,
        text: n,
        isNew: r = !1,
        className: l,
        textVariant: a,
        isApplicationHome: c,
        enablePremiumBrandRefresh: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(l, { [eI.featureItem]: o, [eI.featureItemApplicationHome]: o && c }),
        children: [
            (0, i.jsx)(t, { className: o ? eT.hi : eT.Kk, color: "currentColor" }),
            (0, i.jsx)(u.E, {
                variant: a ?? "text-md/normal",
                color: o || c ? "currentColor" : "always-white",
                children: n,
            }),
            r
                ? (0, i.jsx)(T.A, {
                      className: eT.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function eh(e) {
    let { isApplicationHome: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: eI.tier2ApplicationHomeSubheader,
                    children: G.intl.string(et.default.ItfIa5),
                }),
            en.map((e, n) => {
                let { Icon: r, getText: l } = e;
                return (0, i.jsx)(ep, { Icon: r, text: l(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, n);
            }),
        ],
    });
}
function ef(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n } = e,
        r = t && !n ? em : ed;
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e, r) => {
            let { Icon: l, getText: a } = e;
            return (0, i.jsx)(
                ep,
                {
                    Icon: l,
                    text: a(),
                    className: t && !n ? eT.dT : eT.HW,
                    textVariant: t && !n ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                r,
            );
        }),
    });
}
function eE(e) {
    let { showWumpus: t, ctaButton: n, showYearlyPrice: r, className: l, isGift: a = !1, priceOptions: o } = e,
        u = (0, c.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        d = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        g = (0, L.V)(),
        x = g?.subscription_trial?.sku_id,
        T = !!u?.hasActiveTrial,
        I = T ? d?.premiumType : null,
        f = null != x || T,
        j = (0, w.Lj)(I, x);
    return (0, i.jsxs)("div", {
        className: s()(eT.Vd, eT.Nr, l, { [eT.vt]: !a && f, [eT.lr]: !a && f }),
        children: [
            !a &&
                null != j &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(w.e4, { text: j, className: eT.LW, colorOptions: w.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, i.jsx)("div", { className: eT.o4 }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: eT.wp,
                      children: (0, i.jsx)(m._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: G.intl.string(G.t["02VBaY"]),
                          mediaLayoutType: ex.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: eT.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(E.A, { className: s()(eT.DD, eT.ZD) }),
                            (0, i.jsx)(eg.A, {
                                isGift: a,
                                premiumTier: $.PremiumTypes.TIER_0,
                                offerType: $.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: x === $.pe.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: o,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(ef, {}) }),
                ],
            }),
            a || x !== $.pe.TIER_0 ? null : (0, i.jsx)(k.Wy, { tier: $.PremiumTypes.TIER_0 }),
            n,
        ],
    });
}
var ej =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.BOOSTING = 1)] = "BOOSTING"),
    (r[(r.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (r[(r.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (r[(r.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (r[(r.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    r);
function e_(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1,
            enablePremiumBrandRefresh: l = !1,
            isApplicationHome: a = !1,
            firstFeatureItemClassName: o,
        } = e,
        m = (0, c.bG)([I.default], () => I.default.locale),
        d = (0, U.b)(),
        g = !l && n && !r && d.length > 0,
        x = 3 === t || (0 === t && l && a),
        T = (() => {
            switch (t) {
                case 3:
                    return es;
                case 1:
                    return ec;
                case 2:
                    return eo;
                case 4:
                    return er;
                case 5:
                    return ei;
                default:
                    return eu;
            }
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: l ? eI.tier2ApplicationHomeSubheader : eT.RQ,
                    children: G.intl.string(G.t.AozD3Q),
                }),
            T.map((e, n) => {
                let { Icon: r, getText: c } = e;
                return (0, i.jsx)(
                    ep,
                    {
                        Icon: r,
                        text: c(m),
                        className: s()(3 === t ? eT.dT : eT.HW, 0 === n ? o : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: a,
                        enablePremiumBrandRefresh: l,
                    },
                    n,
                );
            }),
            g && (3 === t || 0 === t) && (0, i.jsx)(Z, {}),
        ],
    });
}
function eA(e) {
    let {
            showWumpus: t,
            ctaButton: n,
            showYearlyPrice: r,
            featureSet: l = 0,
            className: a,
            isGift: g = !1,
            isModal: x = !1,
            priceOptions: T,
            showPromotionalGiftBanner: I = !1,
        } = e,
        E = (0, c.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        P = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        R = (0, L.V)(),
        v = R?.subscription_trial?.sku_id,
        N = E?.hasActiveTrial ? P?.premiumType : null,
        M = (0, _.ar)(),
        y = (0, S.O)(),
        U = (0, _.k5)(),
        F = null != v || null != N ? $.Vk.PREMIUM_TRIAL : null != y || U ? $.Vk.PREMIUM_DISCOUNT : null,
        D = (0, j.cg)(),
        H = !g && M,
        Z = (0, A.A)()?.planSelection,
        V = Z?.getBackgroundImageUrl?.(),
        J = Z?.getCardImageUrl?.(),
        W = (0, O._)(),
        B = (0, o.q)((0, d.Ay)()),
        Y = B ? w.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : w.at.PREMIUM_TIER_2_WHITE_FILL,
        z = (0, w.rm)(U, N, y, R, v),
        K = H && !B ? eT.on : void 0;
    return (0, i.jsxs)("div", {
        className: s()(eT.Nr, eT.hA, a, { [eT.J5]: H, [eT.lr]: H, [eT.jx]: I, [eT.ud]: I && null != J }),
        children: [
            I && null !== J && (0, i.jsx)("img", { className: eT.Cr, alt: "", src: J }),
            I && null !== V && (0, i.jsx)("img", { className: eT.gx, alt: "", src: V }),
            !g &&
                null != z &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(w.e4, { text: z, className: eT.LW, colorOptions: Y }),
                        (0, i.jsx)("div", { className: K }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: eT.wp,
                      children: (0, i.jsx)(m._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: G.intl.string(G.t.XP8vWR),
                          mediaLayoutType: ex.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: eT.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(f.A, { className: s()(eT.DD, eT.$l) }),
                            !g &&
                                v !== $.pe.TIER_2 &&
                                D &&
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(u.E, {
                                        variant: "text-xs/bold",
                                        className: eT.zu,
                                        children: W,
                                    }),
                                }),
                            (0, i.jsx)(eg.A, {
                                isGift: g,
                                premiumTier: $.PremiumTypes.TIER_2,
                                offerType: F,
                                offerTierMatchesCard: v === $.pe.TIER_2 || (0, b.U9)(y, $.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: T,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(e_, { featureSet: l, isModal: x, isGift: g }) }),
                ],
            }),
            g || (v !== $.pe.TIER_2 && null == y) ? null : (0, i.jsx)(k.Wy, { tier: $.PremiumTypes.TIER_2 }),
            n,
            I && (0, i.jsx)(C, {}),
        ],
    });
}
let eP = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function eR(e) {
    let { innerRef: t, className: n, tier0CTAButton: r, tier2CTAButton: l } = e,
        { analyticsLocations: a } = (0, x.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        c = eP(t);
    return (0, i.jsx)(x.f5, {
        value: a,
        children: (0, i.jsxs)("div", {
            ref: c,
            className: s()(eT.Zo, n),
            children: [
                (0, i.jsx)(eE, { showWumpus: !0, ctaButton: r }),
                (0, i.jsx)(eA, { showWumpus: !0, ctaButton: l }),
            ],
        }),
    });
}
