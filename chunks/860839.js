r.d(t, { qu: () => eE, Nz: () => eA, pw: () => ev, ZP: () => eR, Lg: () => eI, nH: () => ef });
var i,
    n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    o = r(17928),
    c = r(462887),
    d = r(834730),
    u = r(144165),
    m = r(736653),
    g = r(793574),
    x = r(688810),
    p = r(904788),
    T = r(773669),
    h = r(287809),
    I = r(166403),
    f = r(224016),
    j = r(217392),
    A = r(960851),
    R = r(526292),
    _ = r(552736),
    v = r(778712),
    E = r(775602),
    P = r(937008),
    N = r(380619),
    C = r(298305),
    y = r(731113);
function M() {
    let e = (0, o.bG)([E.A], () => E.A.useReducedMotion),
        { claimableRewards: t } = (0, P.Pv)(),
        r = (0, _.A)(),
        i = r?.planSelection;
    if (null == i || null == t || 0 === t.length) return null;
    let a = (0, N.gc)(i.getBannerImageUrl?.()),
        s = (0, N.K5)(i.gradientConfig, { defaultAngle: 180 });
    return (0, n.jsxs)("div", {
        className: y.us,
        style: a ?? s,
        children: [
            (0, n.jsxs)("div", {
                className: y.ZR,
                children: [
                    (0, n.jsx)(d.E, { variant: "text-sm/semibold", color: "always-white", children: i.heading() }),
                    null != i.subheading &&
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: i.subheading(t.length),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: y.my,
                children: (0, n.jsx)(C.A, {
                    maxRewardImageSrc: i.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: v._3.SIZE_80,
                }),
            }),
        ],
    });
}
var b = r(286320),
    S = r(422936),
    U = r(234419),
    w = r(511484),
    L = r(774774),
    O = r(231265),
    G = r(349563),
    D = r(97808),
    H = r(854627),
    k = r(375708),
    F = r(903110);
function V() {
    let e = (0, b.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: r, eventHandlers: i } = (0, H.A)({ userId: t?.id, size: v._3.SIZE_24, animateOnHover: !0 }),
        s = (e) => (null != e.globalName ? e.globalName : e.username),
        l = a.useMemo(
            () =>
                e.length >= 2
                    ? k.intl.formatToPlainString(k.t.c7ETJH, { username: s(e[0]) })
                    : 1 === e.length
                      ? k.intl.formatToPlainString(k.t.dpjXPL, { username: s(e[0]) })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, n.jsxs)("div", {
              className: F.kL,
              children: [
                  (0, n.jsx)(D.eu, {
                      className: F.__invalid_icon,
                      src: r,
                      "aria-label": t.username,
                      size: v._3.SIZE_24,
                      ...i,
                  }),
                  (0, n.jsx)(d.E, { className: F.Qq, variant: "text-sm/normal", color: "always-white", children: l }),
              ],
          });
}
var B = r(214947),
    Z = r(403581),
    W = r(104510),
    J = r(22231),
    K = r(95635),
    z = r(343032),
    Y = r(460905),
    q = r(183623),
    Q = r(861004),
    $ = r(428262),
    X = r(788868),
    ee = r(88001),
    et = r(466919);
let er = [
        { Icon: B.$, getText: () => k.intl.formatToPlainString(et.default.eP3Ar7, { totalSeats: ee.aw }) },
        { Icon: Z.t, getText: () => k.intl.string(et.default.woz1Kg) },
        { Icon: W._, getText: () => k.intl.string(et.default.QnbVrt) },
        { Icon: J.R, getText: () => k.intl.string(et.default["409DEa"]) },
    ],
    ei = [
        { Icon: B.$, getText: () => k.intl.formatToPlainString(et.default.eP3Ar7, { totalSeats: ee.aw }) },
        {
            Icon: K.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: Y.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: W._, getText: () => k.intl.formatToPlainString(et.default.HVCRVf, { numBoosts: X.M4 }) },
        { Icon: Q.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    en = [
        {
            Icon: K.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: Y.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: Q.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ];
var ea = r(933832),
    es = r(252424);
let el = [
        { Icon: ea.A, getText: () => k.intl.string(k.t.kpMomJ) },
        {
            Icon: ea.A,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: ea.A, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: ea.A, getText: () => k.intl.string(k.t.zTk8Ul) },
    ],
    eo = [
        {
            Icon: W._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return k.intl.formatToPlainString(k.t["T9RTr/"], {
                    numBoosts: X.M4,
                    percentageOff: (0, es.l9)(e, X.oX / 100),
                });
            },
        },
        {
            Icon: K.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: Q.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    ec = [
        {
            Icon: K.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: z.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: Q.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    ed = [
        {
            Icon: K.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: z.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: W._, getText: () => k.intl.string(k.t.cdfuUU) },
        { Icon: Q.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    eu = [
        { Icon: ea.A, getText: () => k.intl.string(k.t.KjrZ8Z) },
        {
            Icon: ea.A,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: ea.A, getText: () => k.intl.string(k.t.Uukj4o) },
    ],
    em = [
        {
            Icon: K.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, $.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: Y.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: z.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: Z.t, getText: () => k.intl.string(k.t["8ukxAW"]) },
    ];
var eg = r(222719),
    ex = r(838541),
    ep = r(111932),
    eT = r(115599);
function eh(e) {
    let {
        Icon: t,
        text: r,
        isNew: i = !1,
        className: a,
        textVariant: s,
        isApplicationHome: o,
        enablePremiumBrandRefresh: c,
    } = e;
    return (0, n.jsxs)("div", {
        className: l()(a, { [eT.featureItem]: c, [eT.featureItemApplicationHome]: c && o }),
        children: [
            (0, n.jsx)(t, { className: c ? ep.hi : ep.Kk, color: "currentColor" }),
            (0, n.jsx)(d.E, {
                variant: s ?? "text-md/normal",
                color: c || o ? "currentColor" : "always-white",
                children: r,
            }),
            i
                ? (0, n.jsx)(p.A, {
                      className: ep.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function eI(e) {
    let { isApplicationHome: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            t &&
                (0, n.jsx)(d.E, {
                    variant: "text-sm/bold",
                    className: eT.tier2ApplicationHomeSubheader,
                    children: k.intl.string(et.default.ItfIa5),
                }),
            er.map((e, r) => {
                let { Icon: i, getText: a } = e;
                return (0, n.jsx)(eh, { Icon: i, text: a(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, r);
            }),
        ],
    });
}
function ef(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: r } = e,
        i = t && !r ? eu : em;
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: s } = e;
            return (0, n.jsx)(
                eh,
                {
                    Icon: a,
                    text: s(),
                    className: t && !r ? ep.dT : ep.HW,
                    textVariant: t && !r ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: r,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function ej(e) {
    let { showWumpus: t, ctaButton: r, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: c } = e,
        d = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        m = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        g = (0, U.V)(),
        x = g?.subscription_trial?.sku_id,
        p = !!d?.hasActiveTrial,
        T = p ? m?.premiumType : null,
        f = null != x || p,
        A = (0, L.Lj)(T, x);
    return (0, n.jsxs)("div", {
        className: l()(ep.Vd, ep.Nr, a, { [ep.vt]: !s && f, [ep.lr]: !s && f }),
        children: [
            !s &&
                null != A &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(L.e4, { text: A, className: ep.LW, colorOptions: L.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, n.jsx)("div", { className: ep.o4 }),
                    ],
                }),
            t
                ? (0, n.jsx)("div", {
                      className: ep.wp,
                      children: (0, n.jsx)(u._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: k.intl.string(k.t["02VBaY"]),
                          mediaLayoutType: ex.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ep.Fm,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(j.A, { className: l()(ep.DD, ep.ZD) }),
                            (0, n.jsx)(eg.A, {
                                isGift: s,
                                premiumTier: X.PremiumTypes.TIER_0,
                                offerType: X.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: x === X.pe.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: c,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(ef, {}) }),
                ],
            }),
            s || x !== X.pe.TIER_0 ? null : (0, n.jsx)(G.Wy, { tier: X.PremiumTypes.TIER_0 }),
            r,
        ],
    });
}
var eA =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.BOOSTING = 1)] = "BOOSTING"),
    (i[(i.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (i[(i.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (i[(i.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (i[(i.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    i);
function eR(e) {
    let {
            featureSet: t = 0,
            isModal: r = !1,
            isGift: i = !1,
            enablePremiumBrandRefresh: a = !1,
            isApplicationHome: s = !1,
            firstFeatureItemClassName: c,
        } = e,
        u = (0, o.bG)([T.default], () => T.default.locale),
        m = (0, b.b)(),
        g = !a && r && !i && m.length > 0,
        x = 3 === t || (0 === t && a && s),
        p = (() => {
            switch (t) {
                case 3:
                    return el;
                case 1:
                    return eo;
                case 2:
                    return ec;
                case 4:
                    return ei;
                case 5:
                    return en;
                default:
                    return ed;
            }
        })();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            x &&
                (0, n.jsx)(d.E, {
                    variant: "text-sm/bold",
                    className: a ? eT.tier2ApplicationHomeSubheader : ep.RQ,
                    children: k.intl.string(k.t.AozD3Q),
                }),
            p.map((e, r) => {
                let { Icon: i, getText: o } = e;
                return (0, n.jsx)(
                    eh,
                    {
                        Icon: i,
                        text: o(u),
                        className: l()(3 === t ? ep.dT : ep.HW, 0 === r ? c : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: s,
                        enablePremiumBrandRefresh: a,
                    },
                    r,
                );
            }),
            g && (3 === t || 0 === t) && (0, n.jsx)(V, {}),
        ],
    });
}
function e_(e) {
    let {
            showWumpus: t,
            ctaButton: r,
            showYearlyPrice: i,
            featureSet: a = 0,
            className: s,
            isGift: g = !1,
            isModal: x = !1,
            priceOptions: p,
            showPromotionalGiftBanner: T = !1,
        } = e,
        j = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        v = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        E = (0, U.V)(),
        P = E?.subscription_trial?.sku_id,
        N = j?.hasActiveTrial ? v?.premiumType : null,
        C = (0, R.ar)(),
        y = (0, S.O)(),
        b = (0, R.k5)(),
        D = null != P || null != N ? X.Vk.PREMIUM_TRIAL : null != y || b ? X.Vk.PREMIUM_DISCOUNT : null,
        H = (0, A.cg)(),
        F = !g && C,
        V = (0, _.A)()?.planSelection,
        B = V?.getBackgroundImageUrl?.(),
        Z = V?.getCardImageUrl?.(),
        W = (0, O._)(),
        J = (0, c.q)((0, m.Ay)()),
        K = J ? L.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : L.at.PREMIUM_TIER_2_WHITE_FILL,
        z = (0, L.rm)(b, N, y, E, P),
        Y = F && !J ? ep.on : void 0;
    return (0, n.jsxs)("div", {
        className: l()(ep.Nr, ep.hA, s, { [ep.J5]: F, [ep.lr]: F, [ep.jx]: T, [ep.ud]: T && null != Z }),
        children: [
            T && null !== Z && (0, n.jsx)("img", { className: ep.Cr, alt: "", src: Z }),
            T && null !== B && (0, n.jsx)("img", { className: ep.gx, alt: "", src: B }),
            !g &&
                null != z &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(L.e4, { text: z, className: ep.LW, colorOptions: K }),
                        (0, n.jsx)("div", { className: Y }),
                    ],
                }),
            t
                ? (0, n.jsx)("div", {
                      className: ep.wp,
                      children: (0, n.jsx)(u._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: k.intl.string(k.t.XP8vWR),
                          mediaLayoutType: ex.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ep.Fm,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(f.A, { className: l()(ep.DD, ep.$l) }),
                            !g &&
                                P !== X.pe.TIER_2 &&
                                H &&
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(d.E, {
                                        variant: "text-xs/bold",
                                        className: ep.zu,
                                        children: W,
                                    }),
                                }),
                            (0, n.jsx)(eg.A, {
                                isGift: g,
                                premiumTier: X.PremiumTypes.TIER_2,
                                offerType: D,
                                offerTierMatchesCard: P === X.pe.TIER_2 || (0, w.U9)(y, X.pe.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: p,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(eR, { featureSet: a, isModal: x, isGift: g }) }),
                ],
            }),
            g || (P !== X.pe.TIER_2 && null == y) ? null : (0, n.jsx)(G.Wy, { tier: X.PremiumTypes.TIER_2 }),
            r,
            T && (0, n.jsx)(M, {}),
        ],
    });
}
let ev = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function eE(e) {
    let { innerRef: t, className: r, tier0CTAButton: i, tier2CTAButton: a } = e,
        { analyticsLocations: s } = (0, x.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        o = ev(t);
    return (0, n.jsx)(x.f5, {
        value: s,
        children: (0, n.jsxs)("div", {
            ref: o,
            className: l()(ep.Zo, r),
            children: [
                (0, n.jsx)(ej, { showWumpus: !0, ctaButton: i }),
                (0, n.jsx)(e_, { showWumpus: !0, ctaButton: a }),
            ],
        }),
    });
}
