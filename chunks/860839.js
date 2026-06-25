"use strict";
n.d(t, { qu: () => eR, Nz: () => ey, pw: () => ev, ZP: () => eC, Lg: () => eI, nH: () => eT });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    u = n(462887),
    c = n(834730),
    d = n(144165),
    _ = n(140735),
    h = n(707554),
    f = n(736653),
    p = n(793574),
    E = n(688810),
    m = n(904788),
    g = n(773669),
    A = n(287809),
    I = n(166403),
    T = n(224016),
    S = n(217392),
    y = n(960851),
    C = n(526292),
    N = n(552736),
    v = n(778712),
    R = n(775602),
    O = n(937008),
    b = n(380619),
    D = n(298305),
    L = n(584937);
function w() {
    let e = (0, l.bG)([R.Ay], () => R.Ay.useReducedMotion),
        { claimableRewards: t } = (0, O.Pv)(),
        n = (0, N.A)(),
        i = n?.planSelection;
    if (null == i || null == t || 0 === t.length) return null;
    let s = (0, b.gc)(i.getBannerImageUrl?.()),
        a = (0, b.K5)(i.gradientConfig, { defaultAngle: 180 });
    return (0, r.jsxs)("div", {
        className: L.us,
        style: s ?? a,
        children: [
            (0, r.jsxs)("div", {
                className: L.ZR,
                children: [
                    (0, r.jsx)(c.E, { variant: "text-sm/semibold", color: "always-white", children: i.heading() }),
                    null != i.subheading &&
                        (0, r.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: i.subheading(t.length),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: L.my,
                children: (0, r.jsx)(D.A, {
                    maxRewardImageSrc: i.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: v._3.SIZE_80,
                }),
            }),
        ],
    });
}
var M = n(286320),
    P = n(422936),
    x = n(234419),
    k = n(410516),
    U = n(774774),
    G = n(231265),
    F = n(349563),
    V = n(97808),
    B = n(854627),
    j = n(375708),
    H = n(9030);
function Y() {
    let e = (0, M.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: i } = (0, B.A)({ userId: t?.id, size: v._3.SIZE_24, animateOnHover: !0 });
    function a(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let o = s.useMemo(
        () =>
            e.length >= 2
                ? j.intl.formatToPlainString(j.t.c7ETJH, { username: a(e[0]) })
                : 1 === e.length
                  ? j.intl.formatToPlainString(j.t.dpjXPL, { username: a(e[0]) })
                  : "",
        [e],
    );
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: H.kL,
              children: [
                  (0, r.jsx)(V.eu, {
                      className: H.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: v._3.SIZE_24,
                      ...i,
                  }),
                  (0, r.jsx)(c.E, { className: H.Qq, variant: "text-sm/normal", color: "always-white", children: o }),
              ],
          });
}
var W = n(214947),
    K = n(403581),
    $ = n(104510),
    z = n(22231),
    q = n(95635),
    Z = n(343032),
    X = n(460905),
    Q = n(183623),
    J = n(861004),
    ee = n(428262),
    et = n(788868),
    en = n(88001),
    ei = n(963458);
let er = [
        { Icon: W.$, getText: () => j.intl.formatToPlainString(ei.default.eP3Ar7, { totalSeats: en.aw }) },
        { Icon: K.t, getText: () => j.intl.string(ei.default.woz1Kg) },
        { Icon: $._, getText: () => j.intl.string(ei.default.QnbVrt) },
        { Icon: z.R, getText: () => j.intl.string(ei.default["409DEa"]) },
    ],
    es = [
        { Icon: W.$, getText: () => j.intl.formatToPlainString(ei.default.eP3Ar7, { totalSeats: en.aw }) },
        {
            Icon: q.J,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Z.i, getText: () => j.intl.string(j.t["taMwg/"]) },
        { Icon: X.n, getText: () => j.intl.string(j.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => j.intl.string(j.t.W180bY) },
        { Icon: $._, getText: () => j.intl.formatToPlainString(ei.default.HVCRVf, { numBoosts: et.M4 }) },
        { Icon: J.c, getText: () => j.intl.string(j.t.CNIZfy) },
    ],
    ea = [
        {
            Icon: q.J,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Z.i, getText: () => j.intl.string(j.t["taMwg/"]) },
        { Icon: X.n, getText: () => j.intl.string(j.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => j.intl.string(j.t.W180bY) },
        { Icon: J.c, getText: () => j.intl.string(j.t.CNIZfy) },
    ];
var eo = n(933832),
    el = n(252424);
let eu = [
        { Icon: eo.A, getText: () => j.intl.string(j.t.kpMomJ) },
        {
            Icon: eo.A,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: eo.A, getText: () => j.intl.string(j.t.W180bY) },
        { Icon: eo.A, getText: () => j.intl.string(j.t.zTk8Ul) },
    ],
    ec = [
        {
            Icon: $._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return j.intl.formatToPlainString(j.t["T9RTr/"], {
                    numBoosts: et.M4,
                    percentageOff: (0, el.l9)(e, et.oX / 100),
                });
            },
        },
        {
            Icon: q.J,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: X.n, getText: () => j.intl.string(j.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => j.intl.string(j.t.W180bY) },
        { Icon: J.c, getText: () => j.intl.string(j.t.CNIZfy) },
    ],
    ed = [
        {
            Icon: q.J,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: X.n, getText: () => j.intl.string(j.t.KjrZ8Z) },
        { Icon: Z.i, getText: () => j.intl.string(j.t["taMwg/"]) },
        { Icon: Q.F, getText: () => j.intl.string(j.t.W180bY) },
        { Icon: J.c, getText: () => j.intl.string(j.t.CNIZfy) },
    ],
    e_ = [
        {
            Icon: q.J,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: X.n, getText: () => j.intl.string(j.t.KjrZ8Z) },
        { Icon: Z.i, getText: () => j.intl.string(j.t["taMwg/"]) },
        { Icon: Q.F, getText: () => j.intl.string(j.t.W180bY) },
        { Icon: $._, getText: () => j.intl.string(j.t.cdfuUU) },
        { Icon: J.c, getText: () => j.intl.string(j.t.CNIZfy) },
    ],
    eh = [
        { Icon: eo.A, getText: () => j.intl.string(j.t.KjrZ8Z) },
        {
            Icon: eo.A,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: eo.A, getText: () => j.intl.string(j.t.Uukj4o) },
    ],
    ef = [
        {
            Icon: q.J,
            getText: () =>
                j.intl.formatToPlainString(j.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: X.n, getText: () => j.intl.string(j.t.KjrZ8Z) },
        { Icon: Z.i, getText: () => j.intl.string(j.t["taMwg/"]) },
        { Icon: K.t, getText: () => j.intl.string(j.t["8ukxAW"]) },
    ];
var ep = n(765516),
    eE = n(838541),
    em = n(406012),
    eg = n(778831);
function eA(e) {
    let {
        Icon: t,
        text: n,
        isNew: i = !1,
        className: s,
        textVariant: a,
        isApplicationHome: l,
        enablePremiumBrandRefresh: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: o()(s, { [eg.featureItem]: u, [eg.featureItemApplicationHome]: u && l }),
        children: [
            (0, r.jsx)(t, { className: u ? em.hi : em.Kk, color: "currentColor" }),
            (0, r.jsx)(c.E, {
                variant: a ?? "text-md/normal",
                color: u || l ? "currentColor" : "always-white",
                children: n,
            }),
            i
                ? (0, r.jsx)(m.A, {
                      className: em.OC,
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t &&
                (0, r.jsx)(c.E, {
                    variant: "text-sm/bold",
                    className: eg.tier2ApplicationHomeSubheader,
                    children: j.intl.string(ei.default.ItfIa5),
                }),
            er.map((e, n) => {
                let { Icon: i, getText: s } = e;
                return (0, r.jsx)(eA, { Icon: i, text: s(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, n);
            }),
        ],
    });
}
function eT(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n } = e,
        i = t && !n ? eh : ef;
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e, i) => {
            let { Icon: s, getText: a } = e;
            return (0, r.jsx)(
                eA,
                {
                    Icon: s,
                    text: a(),
                    className: t && !n ? em.dT : em.HW,
                    textVariant: t && !n ? "text-sm/normal" : void 0,
                    enablePremiumBrandRefresh: n,
                    isApplicationHome: t,
                },
                i,
            );
        }),
    });
}
function eS(e) {
    let { showWumpus: t, ctaButton: n, showYearlyPrice: i, className: s, isGift: a = !1, priceOptions: u } = e,
        c = (0, l.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        f = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        p = (0, x.V)(),
        E = p?.subscription_trial?.sku_id,
        m = !!c?.hasActiveTrial,
        g = m ? f?.premiumType : null,
        T = null != E || m,
        y = (0, U.Lj)(g, E);
    return (0, r.jsxs)("div", {
        className: o()(em.Vd, em.Nr, s, { [em.vt]: !a && T, [em.lr]: !a && T }),
        children: [
            !a &&
                null != y &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(U.e4, { text: y, className: em.LW, colorOptions: U.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, r.jsx)("div", { className: em.o4 }),
                    ],
                }),
            t
                ? (0, r.jsx)("div", {
                      className: em.wp,
                      children: (0, r.jsx)(d._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: j.intl.string(j.t["02VBaY"]),
                          mediaLayoutType: eE.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: em.Fm,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(_.A, { children: (0, r.jsx)(h.H, { children: j.intl.string(j.t["t9uG/o"]) }) }),
                            (0, r.jsx)(S.A, { className: o()(em.DD, em.ZD) }),
                            (0, r.jsx)(ep.A, {
                                isGift: a,
                                premiumTier: et.PremiumTypes.TIER_0,
                                offerType: et.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: E === et.pe.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: u,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { children: (0, r.jsx)(eT, {}) }),
                ],
            }),
            a || E !== et.pe.TIER_0 ? null : (0, r.jsx)(F.Wy, { tier: et.PremiumTypes.TIER_0 }),
            n,
        ],
    });
}
var ey =
    (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
    (i[(i.BOOSTING = 1)] = "BOOSTING"),
    (i[(i.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (i[(i.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (i[(i.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (i[(i.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    i);
function eC(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: i = !1,
            enablePremiumBrandRefresh: s = !1,
            isApplicationHome: a = !1,
            firstFeatureItemClassName: u,
        } = e,
        d = (0, l.bG)([g.default], () => g.default.locale),
        _ = (0, M.b)(),
        h = !s && n && !i && _.length > 0,
        f = 3 === t || (0 === t && s && a),
        p = (function () {
            switch (t) {
                case 3:
                    return eu;
                case 1:
                    return ec;
                case 2:
                    return ed;
                case 4:
                    return es;
                case 5:
                    return ea;
                default:
                    return e_;
            }
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f &&
                (0, r.jsx)(c.E, {
                    variant: "text-sm/bold",
                    className: s ? eg.tier2ApplicationHomeSubheader : em.RQ,
                    children: j.intl.string(j.t.AozD3Q),
                }),
            p.map((e, n) => {
                let { Icon: i, getText: l } = e;
                return (0, r.jsx)(
                    eA,
                    {
                        Icon: i,
                        text: l(d),
                        className: o()(3 === t ? em.dT : em.HW, 0 === n ? u : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: a,
                        enablePremiumBrandRefresh: s,
                    },
                    n,
                );
            }),
            h && (3 === t || 0 === t) && (0, r.jsx)(Y, {}),
        ],
    });
}
function eN(e) {
    let {
            showWumpus: t,
            ctaButton: n,
            showYearlyPrice: i,
            featureSet: s = 0,
            className: a,
            isGift: p = !1,
            isModal: E = !1,
            priceOptions: m,
            showPromotionalGiftBanner: g = !1,
        } = e,
        S = (0, l.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        v = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        R = (0, x.V)(),
        O = R?.subscription_trial?.sku_id,
        b = S?.hasActiveTrial ? v?.premiumType : null,
        D = (0, C.ar)(),
        L = (0, P.O)(),
        M = (0, C.k5)(),
        V = null != O || null != b ? et.Vk.PREMIUM_TRIAL : null != L || M ? et.Vk.PREMIUM_DISCOUNT : null,
        B = (0, y.cg)(),
        H = !p && D,
        Y = (0, N.A)()?.planSelection,
        W = Y?.getBackgroundImageUrl?.(),
        K = Y?.getCardImageUrl?.(),
        $ = (0, G._)(),
        z = (0, u.q)((0, f.Ay)()),
        q = z ? U.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : U.at.PREMIUM_TIER_2_WHITE_FILL,
        Z = (0, U.rm)(M, b, L, R, O),
        X = H && !z ? em.on : void 0;
    return (0, r.jsxs)("div", {
        className: o()(em.Nr, em.hA, a, { [em.J5]: H, [em.lr]: H, [em.jx]: g, [em.ud]: g && null != K }),
        children: [
            g && null !== K && (0, r.jsx)("img", { className: em.Cr, alt: "", src: K }),
            g && null !== W && (0, r.jsx)("img", { className: em.gx, alt: "", src: W }),
            !p &&
                null != Z &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(U.e4, { text: Z, className: em.LW, colorOptions: q }),
                        (0, r.jsx)("div", { className: X }),
                    ],
                }),
            t
                ? (0, r.jsx)("div", {
                      className: em.wp,
                      children: (0, r.jsx)(d._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: j.intl.string(j.t.XP8vWR),
                          mediaLayoutType: eE.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: em.Fm,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(_.A, { children: (0, r.jsx)(h.H, { children: j.intl.string(j.t.lG6a5x) }) }),
                            (0, r.jsx)(T.A, { className: o()(em.DD, em.$l) }),
                            !p &&
                                O !== et.pe.TIER_2 &&
                                B &&
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(c.E, {
                                        variant: "text-xs/bold",
                                        className: em.zu,
                                        children: $,
                                    }),
                                }),
                            (0, r.jsx)(ep.A, {
                                isGift: p,
                                premiumTier: et.PremiumTypes.TIER_2,
                                offerType: V,
                                offerTierMatchesCard: O === et.pe.TIER_2 || (0, k.U9)(L, et.pe.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: m,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { children: (0, r.jsx)(eC, { featureSet: s, isModal: E, isGift: p }) }),
                ],
            }),
            p || (O !== et.pe.TIER_2 && null == L) ? null : (0, r.jsx)(F.Wy, { tier: et.PremiumTypes.TIER_2 }),
            n,
            g && (0, r.jsx)(w, {}),
        ],
    });
}
function ev(e) {
    return (t) => {
        null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
    };
}
function eR(e) {
    let { innerRef: t, className: n, tier0CTAButton: i, tier2CTAButton: s } = e,
        { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_TIER_CARD),
        l = ev(t);
    return (0, r.jsx)(E.f5, {
        value: a,
        children: (0, r.jsxs)("div", {
            ref: l,
            className: o()(em.Zo, n),
            children: [
                (0, r.jsx)(eS, { showWumpus: !0, ctaButton: i }),
                (0, r.jsx)(eN, { showWumpus: !0, ctaButton: s }),
            ],
        }),
    });
}
