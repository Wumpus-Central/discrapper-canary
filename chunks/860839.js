n.d(t, { qu: () => eM, Nz: () => ev, pw: () => e_, ZP: () => eA, Lg: () => eE, nH: () => eP });
var r,
    l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(17928),
    c = n(462887),
    u = n(834730),
    d = n(144165),
    m = n(140735),
    g = n(707554),
    x = n(736653),
    T = n(793574),
    I = n(688810),
    f = n(904788),
    h = n(773669),
    p = n(287809),
    E = n(166403),
    P = n(224016),
    j = n(217392),
    v = n(960851),
    A = n(526292),
    R = n(552736),
    _ = n(778712),
    M = n(775602),
    N = n(951305),
    S = n(580194),
    y = n(298305),
    C = n(420754);
function L() {
    let e = (0, o.bG)([M.Ay], () => M.Ay.useReducedMotion),
        { claimableRewards: t } = (0, N.Pv)(),
        n = (0, R.A)(),
        r = n?.planSelection;
    if (null == r || null == t || 0 === t.length) return null;
    let i = (0, S.gc)(r.getBannerImageUrl?.()),
        a = (0, S.K5)(r.gradientConfig, { defaultAngle: 180 });
    return (0, l.jsxs)("div", {
        className: C.us,
        style: i ?? a,
        children: [
            (0, l.jsxs)("div", {
                className: C.ZR,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-overlay-light",
                        children: r.heading(),
                    }),
                    null != r.subheading &&
                        (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
                            children: r.subheading(t.length),
                        }),
                ],
            }),
            (0, l.jsx)("div", {
                className: C.my,
                children: (0, l.jsx)(y.A, {
                    maxRewardImageSrc: r.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: _._3.SIZE_80,
                }),
            }),
        ],
    });
}
var U = n(286320),
    b = n(724651),
    G = n(732280),
    k = n(511484),
    O = n(774774),
    w = n(231265),
    D = n(349563),
    F = n(97808),
    H = n(854627),
    Z = n(375708),
    B = n(896423);
function V() {
    let e = (0, U.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: r } = (0, H.A)({ userId: t?.id, size: _._3.SIZE_24, animateOnHover: !0 });
    function a(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let s = i.useMemo(
        () =>
            e.length >= 2
                ? Z.intl.formatToPlainString(Z.t.c7ETJH, { username: a(e[0]) })
                : 1 === e.length
                  ? Z.intl.formatToPlainString(Z.t.dpjXPL, { username: a(e[0]) })
                  : "",
        [e],
    );
    return 0 === e.length
        ? null
        : (0, l.jsxs)("div", {
              className: B.kL,
              children: [
                  (0, l.jsx)(F.eu, {
                      className: B.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: _._3.SIZE_24,
                      ...r,
                  }),
                  (0, l.jsx)(u.E, {
                      className: B.Qq,
                      variant: "text-sm/normal",
                      color: "text-overlay-light",
                      children: s,
                  }),
              ],
          });
}
var W = n(214947),
    J = n(403581),
    z = n(104510),
    Y = n(22231),
    K = n(95635),
    Q = n(343032),
    q = n(460905),
    X = n(183623),
    $ = n(861004),
    ee = n(158045),
    et = n(202541),
    en = n(88001),
    er = n(109447);
let el = [
        { Icon: W.$, getText: () => Z.intl.formatToPlainString(er.default.eP3Ar7, { totalSeats: en.aw }) },
        { Icon: J.t, getText: () => Z.intl.string(er.default.woz1Kg) },
        { Icon: z._, getText: () => Z.intl.string(er.default.QnbVrt) },
        { Icon: Y.PencilIcon, getText: () => Z.intl.string(er.default["409DEa"]) },
    ],
    ei = [
        { Icon: W.$, getText: () => Z.intl.formatToPlainString(er.default.eP3Ar7, { totalSeats: en.aw }) },
        {
            Icon: K.UploadIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: z._, getText: () => Z.intl.formatToPlainString(er.default.HVCRVf, { numBoosts: et.M4 }) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ],
    ea = [
        {
            Icon: K.UploadIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ];
var es = n(933832),
    eo = n(252424);
let ec = [
        { Icon: es.CheckmarkLargeIcon, getText: () => Z.intl.string(Z.t.kpMomJ) },
        {
            Icon: es.CheckmarkLargeIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: es.CheckmarkLargeIcon, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: es.CheckmarkLargeIcon, getText: () => Z.intl.string(Z.t.zTk8Ul) },
    ],
    eu = [
        {
            Icon: z._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return Z.intl.formatToPlainString(Z.t["T9RTr/"], {
                    numBoosts: et.M4,
                    percentageOff: (0, eo.l9)(e, et.oX / 100),
                });
            },
        },
        {
            Icon: K.UploadIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ],
    ed = [
        {
            Icon: K.UploadIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ],
    em = [
        {
            Icon: K.UploadIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: z._, getText: () => Z.intl.string(Z.t.cdfuUU) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ],
    eg = [
        { Icon: es.CheckmarkLargeIcon, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        {
            Icon: es.CheckmarkLargeIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: es.CheckmarkLargeIcon, getText: () => Z.intl.string(Z.t.Uukj4o) },
    ],
    ex = [
        {
            Icon: K.UploadIcon,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: J.t, getText: () => Z.intl.string(Z.t["8ukxAW"]) },
    ];
var eT = n(222719),
    eI = n(838541),
    ef = n(145359),
    eh = n(174788);
function ep(e) {
    let {
        Icon: t,
        text: n,
        isNew: r = !1,
        className: i,
        textVariant: a,
        isApplicationHome: o,
        enablePremiumBrandRefresh: c,
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(i, { [eh.featureItem]: c, [eh.featureItemApplicationHome]: c && o }),
        children: [
            (0, l.jsx)(t, { className: c ? ef.hi : ef.Kk, color: "currentColor" }),
            (0, l.jsx)(u.E, {
                variant: a ?? "text-md/normal",
                color: c || o ? "currentColor" : "text-overlay-light",
                children: n,
            }),
            r
                ? (0, l.jsx)(f.A, {
                      className: ef.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function eE(e) {
    let { isApplicationHome: t, textVariant: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t &&
                (0, l.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: eh.tier2ApplicationHomeSubheader,
                    children: Z.intl.string(er.default.ItfIa5),
                }),
            el.map((e, r) => {
                let { Icon: i, getText: a } = e;
                return (0, l.jsx)(
                    ep,
                    { Icon: i, text: a(), textVariant: n, enablePremiumBrandRefresh: !0, isApplicationHome: t },
                    r,
                );
            }),
        ],
    });
}
function eP(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n, textVariant: r } = e,
        i = t && !n ? eg : ex;
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, i) => {
            let { Icon: a, getText: s } = e;
            return (0, l.jsx)(
                ep,
                {
                    Icon: a,
                    text: s(),
                    className: t && !n ? ef.dT : ef.HW,
                    textVariant: r ?? (t && !n ? "text-sm/normal" : void 0),
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function ej(e) {
    let { showWumpus: t, ctaButton: n, showYearlyPrice: r, className: i, isGift: a = !1, priceOptions: c } = e,
        u = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        x = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        T = (0, G.V)(),
        I = T?.subscriptionTrial?.skuId,
        f = !!u?.hasActiveTrial,
        h = f ? x?.premiumType : null,
        P = null != I || f,
        v = (0, O.Lj)(h, I);
    return (0, l.jsxs)("div", {
        className: s()(ef.Vd, ef.Nr, i, { [ef.vt]: !a && P, [ef.lr]: !a && P }),
        children: [
            !a &&
                null != v &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(O.e4, { text: v, className: ef.LW, colorOptions: O.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, l.jsx)("div", { className: ef.o4 }),
                    ],
                }),
            t
                ? (0, l.jsx)("div", {
                      className: ef.wp,
                      children: (0, l.jsx)(d._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: Z.intl.string(Z.t["02VBaY"]),
                          mediaLayoutType: eI.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ef.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: Z.intl.string(Z.t["t9uG/o"]) }) }),
                            (0, l.jsx)(j.A, { className: s()(ef.DD, ef.ZD) }),
                            (0, l.jsx)(eT.A, {
                                isGift: a,
                                premiumTier: et.PremiumTypes.TIER_0,
                                offerType: et.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: I === et.pe.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: c,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(eP, {}) }),
                ],
            }),
            a || I !== et.pe.TIER_0 ? null : (0, l.jsx)(D.Wy, { tier: et.PremiumTypes.TIER_0 }),
            n,
        ],
    });
}
var ev =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.BOOSTING = 1)] = "BOOSTING"),
    (r[(r.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (r[(r.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (r[(r.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (r[(r.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    r);
function eA(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1,
            enablePremiumBrandRefresh: i = !1,
            isApplicationHome: a = !1,
            firstFeatureItemClassName: c,
            textVariant: d,
        } = e,
        m = (0, o.bG)([h.default], () => h.default.locale),
        g = (0, U.b)(),
        x = !i && n && !r && g.length > 0,
        T = 3 === t || (0 === t && i && a),
        I = (function () {
            switch (t) {
                case 3:
                    return ec;
                case 1:
                    return eu;
                case 2:
                    return ed;
                case 4:
                    return ei;
                case 5:
                    return ea;
                default:
                    return em;
            }
        })();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            T &&
                (0, l.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: i ? eh.tier2ApplicationHomeSubheader : ef.RQ,
                    children: Z.intl.string(Z.t.AozD3Q),
                }),
            I.map((e, n) => {
                let { Icon: r, getText: o } = e;
                return (0, l.jsx)(
                    ep,
                    {
                        Icon: r,
                        text: o(m),
                        className: s()(3 === t ? ef.dT : ef.HW, 0 === n ? c : void 0),
                        textVariant: d ?? (3 === t ? "text-sm/normal" : void 0),
                        isApplicationHome: a,
                        enablePremiumBrandRefresh: i,
                    },
                    n,
                );
            }),
            x && (3 === t || 0 === t) && (0, l.jsx)(V, {}),
        ],
    });
}
function eR(e) {
    let {
            showWumpus: t,
            ctaButton: n,
            showYearlyPrice: r,
            featureSet: i = 0,
            className: a,
            isGift: T = !1,
            isModal: I = !1,
            priceOptions: f,
            showPromotionalGiftBanner: h = !1,
        } = e,
        j = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        _ = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        M = (0, G.V)(),
        N = M?.subscriptionTrial?.skuId,
        S = j?.hasActiveTrial ? _?.premiumType : null,
        y = (0, A.ar)(),
        C = (0, b.O)(),
        U = (0, A.k5)(),
        F = null != N || null != S ? et.Vk.PREMIUM_TRIAL : null != C || U ? et.Vk.PREMIUM_DISCOUNT : null,
        H = (0, v.cg)(),
        B = !T && y,
        V = (0, R.A)()?.planSelection,
        W = V?.getBackgroundImageUrl?.(),
        J = V?.getCardImageUrl?.(),
        z = (0, w._)(),
        Y = (0, c.q)((0, x.Ay)()),
        K = Y ? O.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : O.at.PREMIUM_TIER_2_WHITE_FILL,
        Q = (0, O.rm)(U, S, C, M, N),
        q = B && !Y ? ef.on : void 0;
    return (0, l.jsxs)("div", {
        className: s()(ef.Nr, ef.hA, a, { [ef.J5]: B, [ef.lr]: B, [ef.jx]: h, [ef.ud]: h && null != J }),
        children: [
            h && null !== J && (0, l.jsx)("img", { className: ef.Cr, alt: "", src: J }),
            h && null !== W && (0, l.jsx)("img", { className: ef.gx, alt: "", src: W }),
            !T &&
                null != Q &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(O.e4, { text: Q, className: ef.LW, colorOptions: K }),
                        (0, l.jsx)("div", { className: q }),
                    ],
                }),
            t
                ? (0, l.jsx)("div", {
                      className: ef.wp,
                      children: (0, l.jsx)(d._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: Z.intl.string(Z.t.XP8vWR),
                          mediaLayoutType: eI.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ef.Fm,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(m.A, { children: (0, l.jsx)(g.H, { children: Z.intl.string(Z.t.lG6a5x) }) }),
                            (0, l.jsx)(P.A, { className: s()(ef.DD, ef.$l) }),
                            !T &&
                                N !== et.pe.TIER_2 &&
                                H &&
                                (0, l.jsx)("div", {
                                    children: (0, l.jsx)(u.E, {
                                        variant: "text-xs/bold",
                                        className: ef.zu,
                                        children: z,
                                    }),
                                }),
                            (0, l.jsx)(eT.A, {
                                isGift: T,
                                premiumTier: et.PremiumTypes.TIER_2,
                                offerType: F,
                                offerTierMatchesCard: N === et.pe.TIER_2 || (0, k.U9)(C, et.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: f,
                                headingVariant: "heading-md/normal",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(eA, { featureSet: i, isModal: I, isGift: T }) }),
                ],
            }),
            T || (N !== et.pe.TIER_2 && null == C) ? null : (0, l.jsx)(D.Wy, { tier: et.PremiumTypes.TIER_2 }),
            n,
            h && (0, l.jsx)(L, {}),
        ],
    });
}
function e_(e) {
    return (t) => {
        null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
    };
}
function eM(e) {
    let { innerRef: t, className: n, tier0CTAButton: r, tier2CTAButton: i } = e,
        { analyticsLocations: a } = (0, I.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        o = e_(t);
    return (0, l.jsx)(I.f5, {
        value: a,
        children: (0, l.jsxs)("div", {
            ref: o,
            className: s()(ef.Zo, n),
            children: [
                (0, l.jsx)(ej, { showWumpus: !0, ctaButton: r }),
                (0, l.jsx)(eR, { showWumpus: !0, ctaButton: i }),
            ],
        }),
    });
}
