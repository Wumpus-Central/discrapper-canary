n.d(t, { qu: () => ev, Lg: () => eT, nH: () => ep, ZP: () => ej, Nz: () => ef, pw: () => eE });
var r,
    i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(855986),
    c = n(462887),
    u = n(834730),
    m = n(251843),
    d = n(140735),
    g = n(707554),
    I = n(736653),
    x = n(793574),
    T = n(688810),
    p = n(536071),
    h = n(773669),
    f = n(287809),
    j = n(166403),
    A = n(224016),
    E = n(217392),
    v = n(526292),
    R = n(778712),
    P = n(775602),
    _ = n(418200),
    y = n(810498),
    N = n(298305),
    M = n(420754);
function S() {
    let e = (0, o.bG)([P.Ay], () => P.Ay.useReducedMotion),
        { claimableRewards: t } = (0, _.Pv)(),
        n;
    if (null == n || null == t || 0 === t.length) return null;
    let r = (0, y.gc)(n.getBannerImageUrl?.()),
        l = (0, y.K5)(n.gradientConfig, { defaultAngle: 180 });
    return (0, i.jsxs)("div", {
        className: M.us,
        style: r ?? l,
        children: [
            (0, i.jsxs)("div", {
                className: M.ZR,
                children: [
                    (0, i.jsx)(u.E, {
                        variant: "body-sm/semibold",
                        color: "text-overlay-light",
                        children: n.heading(),
                    }),
                    null != n.subheading &&
                        (0, i.jsx)(u.E, {
                            variant: "body-sm/normal",
                            color: "text-overlay-light",
                            children: n.subheading(t.length),
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                className: M.my,
                children: (0, i.jsx)(N.A, {
                    maxRewardImageSrc: n.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: R._3.SIZE_80,
                }),
            }),
        ],
    });
}
var C = n(589152),
    U = n(423814),
    b = n(77528),
    L = n(511484),
    k = n(774774),
    O = n(349563),
    w = n(97808),
    G = n(854627),
    D = n(792996),
    F = n(896423);
function H() {
    let e = (0, C.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: r } = (0, G.A)({ userId: t?.id, size: R._3.SIZE_24, animateOnHover: !0 });
    function a(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let s = l.useMemo(
        () =>
            e.length >= 2
                ? D.intl.formatToPlainString(D.t.c7ETJH, { username: a(e[0]) })
                : 1 === e.length
                  ? D.intl.formatToPlainString(D.t.dpjXPL, { username: a(e[0]) })
                  : "",
        [e],
    );
    return 0 === e.length
        ? null
        : (0, i.jsxs)("div", {
              className: F.kL,
              children: [
                  (0, i.jsx)(w.eu, {
                      className: F.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: R._3.SIZE_24,
                      ...r,
                  }),
                  (0, i.jsx)(u.E, {
                      className: F.Qq,
                      variant: "body-sm/normal",
                      color: "text-overlay-light",
                      children: s,
                  }),
              ],
          });
}
var Z = n(214947),
    V = n(403581),
    W = n(104510),
    B = n(22231),
    Y = n(95635),
    z = n(343032),
    K = n(460905),
    J = n(183623),
    Q = n(861004),
    q = n(448645),
    X = n(682901);
n(88001);
var $ = n(107198);
let ee = [
        { Icon: Z.FriendsIcon, getText: () => D.intl.formatToPlainString($.default.eP3Ar7, { totalSeats: 6 }) },
        { Icon: V.NitroWheelIcon, getText: () => D.intl.string($.default.woz1Kg) },
        { Icon: W.BoostGemIcon, getText: () => D.intl.string($.default.QnbVrt) },
        { Icon: B.PencilIcon, getText: () => D.intl.string($.default["409DEa"]) },
    ],
    et = [
        { Icon: Z.FriendsIcon, getText: () => D.intl.formatToPlainString($.default.eP3Ar7, { totalSeats: 6 }) },
        {
            Icon: Y.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.SuperReactionIcon, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: K.ReactionIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: J.ScreenArrowIcon, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: W.BoostGemIcon, getText: () => D.intl.formatToPlainString($.default.HVCRVf, { numBoosts: 2 }) },
        { Icon: Q.UserSquareIcon, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    en = [
        {
            Icon: Y.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: z.SuperReactionIcon, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: K.ReactionIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: J.ScreenArrowIcon, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: Q.UserSquareIcon, getText: () => D.intl.string(D.t.CNIZfy) },
    ];
var er = n(118751),
    ei = n(933832);
let el = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.kpMomJ) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.zTk8Ul) },
    ],
    ea = [
        {
            Icon: W.BoostGemIcon,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return D.intl.formatToPlainString(D.t["T9RTr/"], { numBoosts: 2, percentageOff: (0, er.l9)(e, 0.3) });
            },
        },
        {
            Icon: Y.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.ReactionIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: J.ScreenArrowIcon, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: Q.UserSquareIcon, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    es = [
        {
            Icon: Y.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.ReactionIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: z.SuperReactionIcon, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: J.ScreenArrowIcon, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: Q.UserSquareIcon, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    eo = [
        {
            Icon: Y.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: K.ReactionIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: z.SuperReactionIcon, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: J.ScreenArrowIcon, getText: () => D.intl.string(D.t.W180bY) },
        { Icon: W.BoostGemIcon, getText: () => D.intl.string(D.t.cdfuUU) },
        { Icon: Q.UserSquareIcon, getText: () => D.intl.string(D.t.CNIZfy) },
    ],
    ec = [
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        {
            Icon: ei.CheckmarkLargeIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: ei.CheckmarkLargeIcon, getText: () => D.intl.string(D.t.Uukj4o) },
    ],
    eu = [
        {
            Icon: Y.UploadIcon,
            getText: () =>
                D.intl.formatToPlainString(D.t.p8QVLT, {
                    maxUploadPremium: (0, q.EJ)(X.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: K.ReactionIcon, getText: () => D.intl.string(D.t.KjrZ8Z) },
        { Icon: z.SuperReactionIcon, getText: () => D.intl.string(D.t["taMwg/"]) },
        { Icon: V.NitroWheelIcon, getText: () => D.intl.string(D.t["8ukxAW"]) },
    ];
var em = n(222719),
    ed = n(838541),
    eg = n(367740),
    eI = n(174788);
function ex(e) {
    let {
        Icon: t,
        text: n,
        isNew: r = !1,
        className: l,
        textVariant: a,
        isApplicationHome: o,
        enablePremiumBrandRefresh: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(l, { [eI.featureItem]: c, [eI.featureItemApplicationHome]: c && o }),
        children: [
            (0, i.jsx)(t, { className: c ? eg.hi : eg.Kk, color: "currentColor" }),
            (0, i.jsx)(u.E, {
                variant: a ?? "body-md/normal",
                color: c || o ? "currentColor" : "text-overlay-light",
                children: n,
            }),
            r ? (0, i.jsx)(p.A, { className: eg.OC, forceUseColorForSparkles: !0, variant: "inverted" }) : null,
        ],
    });
}
function eT(e) {
    let { isApplicationHome: t, textVariant: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                (0, i.jsx)(u.E, {
                    variant: "body-sm/semibold",
                    className: eI.tier2ApplicationHomeSubheader,
                    children: D.intl.string($.default.ItfIa5),
                }),
            ee.map((e, r) => {
                let { Icon: l, getText: a } = e;
                return (0, i.jsx)(
                    ex,
                    { Icon: l, text: a(), textVariant: n, enablePremiumBrandRefresh: !0, isApplicationHome: t },
                    r,
                );
            }),
        ],
    });
}
function ep(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n, textVariant: r } = e,
        l = t && !n ? ec : eu;
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, l) => {
            let { Icon: a, getText: s } = e;
            return (0, i.jsx)(
                ex,
                {
                    Icon: a,
                    text: s(),
                    className: t && !n ? eg.dT : eg.HW,
                    textVariant: r ?? (t && !n ? "body-sm/normal" : void 0),
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                l,
            );
        }),
    });
}
function eh(e) {
    let { showWumpus: t, ctaButton: n, showYearlyPrice: r, className: l, isGift: a = !1, priceOptions: c } = e,
        u = (0, o.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        I = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        x = (0, b.V)(),
        T = x?.subscriptionTrial?.skuId,
        p = !!u?.hasActiveTrial,
        h = p ? I?.premiumType : null,
        A = null != T || p,
        v = (0, k.Lj)(h, T);
    return (0, i.jsxs)("div", {
        className: s()(eg.Vd, eg.Nr, l, { [eg.vt]: !a && A, [eg.lr]: !a && A }),
        children: [
            !a &&
                null != v &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(k.e4, { text: v, className: eg.LW, colorOptions: k.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, i.jsx)("div", { className: eg.o4 }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: eg.wp,
                      children: (0, i.jsx)(m._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: D.intl.string(D.t["02VBaY"]),
                          mediaLayoutType: ed.d.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: eg.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.A, { children: (0, i.jsx)(g.H, { children: D.intl.string(D.t["t9uG/o"]) }) }),
                            (0, i.jsx)(E.A, { className: s()(eg.DD, eg.ZD) }),
                            (0, i.jsx)(em.A, {
                                isGift: a,
                                premiumTier: X.PremiumTypes.TIER_0,
                                offerType: X.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: T === X.pe.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: c,
                                headingVariant: "heading-sm/medium",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(ep, {}) }),
                ],
            }),
            a || T !== X.pe.TIER_0 ? null : (0, i.jsx)(O.Wy, { tier: X.PremiumTypes.TIER_0 }),
            n,
        ],
    });
}
var ef =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.BOOSTING = 1)] = "BOOSTING"),
    (r[(r.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (r[(r.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (r[(r.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (r[(r.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    r);
function ej(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1,
            enablePremiumBrandRefresh: l = !1,
            isApplicationHome: a = !1,
            firstFeatureItemClassName: c,
            textVariant: m,
        } = e,
        d = (0, o.bG)([h.default], () => h.default.locale),
        g = (0, C.b)(),
        I = !l && n && !r && g.length > 0,
        x = 3 === t || (0 === t && l && a),
        T = (function () {
            switch (t) {
                case 3:
                    return el;
                case 1:
                    return ea;
                case 2:
                    return es;
                case 4:
                    return et;
                case 5:
                    return en;
                default:
                    return eo;
            }
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x &&
                (0, i.jsx)(u.E, {
                    variant: "body-sm/semibold",
                    className: l ? eI.tier2ApplicationHomeSubheader : eg.RQ,
                    children: D.intl.string(D.t.AozD3Q),
                }),
            T.map((e, n) => {
                let { Icon: r, getText: o } = e;
                return (0, i.jsx)(
                    ex,
                    {
                        Icon: r,
                        text: o(d),
                        className: s()(3 === t ? eg.dT : eg.HW, 0 === n ? c : void 0),
                        textVariant: m ?? (3 === t ? "body-sm/normal" : void 0),
                        isApplicationHome: a,
                        enablePremiumBrandRefresh: l,
                    },
                    n,
                );
            }),
            I && (3 === t || 0 === t) && (0, i.jsx)(H, {}),
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
            isGift: u = !1,
            isModal: x = !1,
            priceOptions: T,
            showPromotionalGiftBanner: p = !1,
        } = e,
        h = (0, o.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        E = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        R = (0, b.V)(),
        P = R?.subscriptionTrial?.skuId,
        _ = h?.hasActiveTrial ? E?.premiumType : null,
        y = (0, v.ar)(),
        N = (0, U.O)(),
        M = (0, v.k5)(),
        C = null != P || null != _ ? X.Vk.PREMIUM_TRIAL : null != N || M ? X.Vk.PREMIUM_DISCOUNT : null,
        w = !u && y,
        G,
        F = G?.getBackgroundImageUrl?.(),
        H = G?.getCardImageUrl?.(),
        Z = (0, c.q)((0, I.Ay)()),
        V = Z ? k.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : k.at.PREMIUM_TIER_2_WHITE_FILL,
        W = (0, k.rm)(M, _, N, R, P),
        B = w && !Z ? eg.on : void 0;
    return (0, i.jsxs)("div", {
        className: s()(eg.Nr, eg.hA, a, { [eg.J5]: w, [eg.lr]: w, [eg.jx]: p, [eg.ud]: p && null != H }),
        children: [
            p && null !== H && (0, i.jsx)("img", { className: eg.Cr, alt: "", src: H }),
            p && null !== F && (0, i.jsx)("img", { className: eg.gx, alt: "", src: F }),
            !u &&
                null != W &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(k.e4, { text: W, className: eg.LW, colorOptions: V }),
                        (0, i.jsx)("div", { className: B }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: eg.wp,
                      children: (0, i.jsx)(m._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: D.intl.string(D.t.XP8vWR),
                          mediaLayoutType: ed.d.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: eg.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.A, { children: (0, i.jsx)(g.H, { children: D.intl.string(D.t.lG6a5x) }) }),
                            (0, i.jsx)(A.A, { className: s()(eg.DD, eg.$l) }),
                            (0, i.jsx)(em.A, {
                                isGift: u,
                                premiumTier: X.PremiumTypes.TIER_2,
                                offerType: C,
                                offerTierMatchesCard: P === X.pe.TIER_2 || (0, L.U9)(N, X.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: T,
                                headingVariant: "heading-sm/medium",
                                headingColor: "text-overlay-light",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(ej, { featureSet: l, isModal: x, isGift: u }) }),
                ],
            }),
            u || (P !== X.pe.TIER_2 && null == N) ? null : (0, i.jsx)(O.Wy, { tier: X.PremiumTypes.TIER_2 }),
            n,
            p && (0, i.jsx)(S, {}),
        ],
    });
}
function eE(e) {
    return (t) => {
        null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
    };
}
function ev(e) {
    let { innerRef: t, className: n, tier0CTAButton: r, tier2CTAButton: l } = e,
        { analyticsLocations: a } = (0, T.Ay)(x.A.PREMIUM_MARKETING_TIER_CARD),
        o = eE(t);
    return (0, i.jsx)(T.f5, {
        value: a,
        children: (0, i.jsxs)("div", {
            ref: o,
            className: s()(eg.Zo, n),
            children: [
                (0, i.jsx)(eh, { showWumpus: !0, ctaButton: r }),
                (0, i.jsx)(eA, { showWumpus: !0, ctaButton: l }),
            ],
        }),
    });
}
