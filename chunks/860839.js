n.d(t, { qu: () => eN, Nz: () => e_, pw: () => ev, ZP: () => eP, Lg: () => ej, nH: () => eA });
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    c = n(17928),
    o = n(462887),
    u = n(834730),
    m = n(144165),
    d = n(140735),
    g = n(707554),
    x = n(736653),
    T = n(793574),
    I = n(688810),
    p = n(904788),
    h = n(773669),
    f = n(287809),
    j = n(166403),
    A = n(224016),
    E = n(217392),
    _ = n(960851),
    P = n(526292),
    R = n(552736),
    v = n(778712),
    N = n(775602),
    M = n(937008),
    y = n(380619),
    C = n(298305),
    U = n(731113);
function S() {
    let e = (0, c.bG)([N.Ay], () => N.Ay.useReducedMotion),
        { claimableRewards: t } = (0, M.Pv)(),
        n = (0, R.A)(),
        r = n?.planSelection;
    if (null == r || null == t || 0 === t.length) return null;
    let l = (0, y.gc)(r.getBannerImageUrl?.()),
        s = (0, y.K5)(r.gradientConfig, { defaultAngle: 180 });
    return (0, i.jsxs)("div", {
        className: U.us,
        style: l ?? s,
        children: [
            (0, i.jsxs)("div", {
                className: U.ZR,
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
                className: U.my,
                children: (0, i.jsx)(C.A, {
                    maxRewardImageSrc: r.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: v._3.SIZE_80,
                }),
            }),
        ],
    });
}
var L = n(286320),
    b = n(422936),
    w = n(234419),
    O = n(410516),
    k = n(774774),
    F = n(231265),
    D = n(349563),
    G = n(97808),
    H = n(854627),
    Z = n(375708),
    V = n(903110);
function J() {
    let e = (0, L.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: n, eventHandlers: r } = (0, H.A)({ userId: t?.id, size: v._3.SIZE_24, animateOnHover: !0 }),
        s = (e) => (null != e.globalName ? e.globalName : e.username),
        a = l.useMemo(
            () =>
                e.length >= 2
                    ? Z.intl.formatToPlainString(Z.t.c7ETJH, { username: s(e[0]) })
                    : 1 === e.length
                      ? Z.intl.formatToPlainString(Z.t.dpjXPL, { username: s(e[0]) })
                      : "",
            [e],
        );
    return 0 === e.length
        ? null
        : (0, i.jsxs)("div", {
              className: V.kL,
              children: [
                  (0, i.jsx)(G.eu, {
                      className: V.__invalid_icon,
                      src: n,
                      "aria-label": t.username,
                      size: v._3.SIZE_24,
                      ...r,
                  }),
                  (0, i.jsx)(u.E, { className: V.Qq, variant: "text-sm/normal", color: "always-white", children: a }),
              ],
          });
}
var W = n(214947),
    B = n(403581),
    Y = n(104510),
    z = n(22231),
    K = n(95635),
    Q = n(343032),
    q = n(460905),
    X = n(183623),
    $ = n(861004),
    ee = n(428262),
    et = n(788868),
    en = n(88001),
    er = n(466919);
let ei = [
        { Icon: W.$, getText: () => Z.intl.formatToPlainString(er.default.eP3Ar7, { totalSeats: en.aw }) },
        { Icon: B.t, getText: () => Z.intl.string(er.default.woz1Kg) },
        { Icon: Y._, getText: () => Z.intl.string(er.default.QnbVrt) },
        { Icon: z.R, getText: () => Z.intl.string(er.default["409DEa"]) },
    ],
    el = [
        { Icon: W.$, getText: () => Z.intl.formatToPlainString(er.default.eP3Ar7, { totalSeats: en.aw }) },
        {
            Icon: K.J,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: Y._, getText: () => Z.intl.formatToPlainString(er.default.HVCRVf, { numBoosts: et.M4 }) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ],
    es = [
        {
            Icon: K.J,
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
var ea = n(933832),
    ec = n(252424);
let eo = [
        { Icon: ea.A, getText: () => Z.intl.string(Z.t.kpMomJ) },
        {
            Icon: ea.A,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: ea.A, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: ea.A, getText: () => Z.intl.string(Z.t.zTk8Ul) },
    ],
    eu = [
        {
            Icon: Y._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return Z.intl.formatToPlainString(Z.t["T9RTr/"], {
                    numBoosts: et.M4,
                    percentageOff: (0, ec.l9)(e, et.oX / 100),
                });
            },
        },
        {
            Icon: K.J,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ],
    em = [
        {
            Icon: K.J,
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
    ed = [
        {
            Icon: K.J,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: X.F, getText: () => Z.intl.string(Z.t.W180bY) },
        { Icon: Y._, getText: () => Z.intl.string(Z.t.cdfuUU) },
        { Icon: $.c, getText: () => Z.intl.string(Z.t.CNIZfy) },
    ],
    eg = [
        { Icon: ea.A, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        {
            Icon: ea.A,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: ea.A, getText: () => Z.intl.string(Z.t.Uukj4o) },
    ],
    ex = [
        {
            Icon: K.J,
            getText: () =>
                Z.intl.formatToPlainString(Z.t.p8QVLT, {
                    maxUploadPremium: (0, ee.EJ)(et.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => Z.intl.string(Z.t.KjrZ8Z) },
        { Icon: Q.i, getText: () => Z.intl.string(Z.t["taMwg/"]) },
        { Icon: B.t, getText: () => Z.intl.string(Z.t["8ukxAW"]) },
    ];
var eT = n(222719),
    eI = n(838541),
    ep = n(111932),
    eh = n(115599);
function ef(e) {
    let {
        Icon: t,
        text: n,
        isNew: r = !1,
        className: l,
        textVariant: s,
        isApplicationHome: c,
        enablePremiumBrandRefresh: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(l, { [eh.featureItem]: o, [eh.featureItemApplicationHome]: o && c }),
        children: [
            (0, i.jsx)(t, { className: o ? ep.hi : ep.Kk, color: "currentColor" }),
            (0, i.jsx)(u.E, {
                variant: s ?? "text-md/normal",
                color: o || c ? "currentColor" : "always-white",
                children: n,
            }),
            r
                ? (0, i.jsx)(p.A, {
                      className: ep.OC,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0,
                  })
                : null,
        ],
    });
}
function ej(e) {
    let { isApplicationHome: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: eh.tier2ApplicationHomeSubheader,
                    children: Z.intl.string(er.default.ItfIa5),
                }),
            ei.map((e, n) => {
                let { Icon: r, getText: l } = e;
                return (0, i.jsx)(ef, { Icon: r, text: l(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, n);
            }),
        ],
    });
}
function eA(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: n } = e,
        r = t && !n ? eg : ex;
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e, r) => {
            let { Icon: l, getText: s } = e;
            return (0, i.jsx)(
                ef,
                {
                    Icon: l,
                    text: s(),
                    className: t && !n ? ep.dT : ep.HW,
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
    let { showWumpus: t, ctaButton: n, showYearlyPrice: r, className: l, isGift: s = !1, priceOptions: o } = e,
        u = (0, c.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        x = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
        T = (0, w.V)(),
        I = T?.subscription_trial?.sku_id,
        p = !!u?.hasActiveTrial,
        h = p ? x?.premiumType : null,
        A = null != I || p,
        _ = (0, k.Lj)(h, I);
    return (0, i.jsxs)("div", {
        className: a()(ep.Vd, ep.Nr, l, { [ep.vt]: !s && A, [ep.lr]: !s && A }),
        children: [
            !s &&
                null != _ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(k.e4, { text: _, className: ep.LW, colorOptions: k.at.PREMIUM_TIER_0_WHITE_FILL }),
                        (0, i.jsx)("div", { className: ep.o4 }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: ep.wp,
                      children: (0, i.jsx)(m._, {
                          src: "/assets/dc589b1488adf4e7.svg",
                          alt: Z.intl.string(Z.t["02VBaY"]),
                          mediaLayoutType: eI.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ep.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.A, { children: (0, i.jsx)(g.H, { children: Z.intl.string(Z.t["t9uG/o"]) }) }),
                            (0, i.jsx)(E.A, { className: a()(ep.DD, ep.ZD) }),
                            (0, i.jsx)(eT.A, {
                                isGift: s,
                                premiumTier: et.PremiumTypes.TIER_0,
                                offerType: et.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: I === et.pe.TIER_0,
                                showYearlyPrice: r,
                                priceOptions: o,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(eA, {}) }),
                ],
            }),
            s || I !== et.pe.TIER_0 ? null : (0, i.jsx)(D.Wy, { tier: et.PremiumTypes.TIER_0 }),
            n,
        ],
    });
}
var e_ =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.BOOSTING = 1)] = "BOOSTING"),
    (r[(r.FRACTIONAL_PREMIUM = 2)] = "FRACTIONAL_PREMIUM"),
    (r[(r.APPLICATION_HOME = 3)] = "APPLICATION_HOME"),
    (r[(r.PREMIUM_GROUP_PRIMARY = 4)] = "PREMIUM_GROUP_PRIMARY"),
    (r[(r.PREMIUM_GROUP_MEMBER = 5)] = "PREMIUM_GROUP_MEMBER"),
    r);
function eP(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1,
            enablePremiumBrandRefresh: l = !1,
            isApplicationHome: s = !1,
            firstFeatureItemClassName: o,
        } = e,
        m = (0, c.bG)([h.default], () => h.default.locale),
        d = (0, L.b)(),
        g = !l && n && !r && d.length > 0,
        x = 3 === t || (0 === t && l && s),
        T = (() => {
            switch (t) {
                case 3:
                    return eo;
                case 1:
                    return eu;
                case 2:
                    return em;
                case 4:
                    return el;
                case 5:
                    return es;
                default:
                    return ed;
            }
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/bold",
                    className: l ? eh.tier2ApplicationHomeSubheader : ep.RQ,
                    children: Z.intl.string(Z.t.AozD3Q),
                }),
            T.map((e, n) => {
                let { Icon: r, getText: c } = e;
                return (0, i.jsx)(
                    ef,
                    {
                        Icon: r,
                        text: c(m),
                        className: a()(3 === t ? ep.dT : ep.HW, 0 === n ? o : void 0),
                        textVariant: 3 === t ? "text-sm/normal" : void 0,
                        isApplicationHome: s,
                        enablePremiumBrandRefresh: l,
                    },
                    n,
                );
            }),
            g && (3 === t || 0 === t) && (0, i.jsx)(J, {}),
        ],
    });
}
function eR(e) {
    let {
            showWumpus: t,
            ctaButton: n,
            showYearlyPrice: r,
            featureSet: l = 0,
            className: s,
            isGift: T = !1,
            isModal: I = !1,
            priceOptions: p,
            showPromotionalGiftBanner: h = !1,
        } = e,
        E = (0, c.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        v = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
        N = (0, w.V)(),
        M = N?.subscription_trial?.sku_id,
        y = E?.hasActiveTrial ? v?.premiumType : null,
        C = (0, P.ar)(),
        U = (0, b.O)(),
        L = (0, P.k5)(),
        G = null != M || null != y ? et.Vk.PREMIUM_TRIAL : null != U || L ? et.Vk.PREMIUM_DISCOUNT : null,
        H = (0, _.cg)(),
        V = !T && C,
        J = (0, R.A)()?.planSelection,
        W = J?.getBackgroundImageUrl?.(),
        B = J?.getCardImageUrl?.(),
        Y = (0, F._)(),
        z = (0, o.q)((0, x.Ay)()),
        K = z ? k.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : k.at.PREMIUM_TIER_2_WHITE_FILL,
        Q = (0, k.rm)(L, y, U, N, M),
        q = V && !z ? ep.on : void 0;
    return (0, i.jsxs)("div", {
        className: a()(ep.Nr, ep.hA, s, { [ep.J5]: V, [ep.lr]: V, [ep.jx]: h, [ep.ud]: h && null != B }),
        children: [
            h && null !== B && (0, i.jsx)("img", { className: ep.Cr, alt: "", src: B }),
            h && null !== W && (0, i.jsx)("img", { className: ep.gx, alt: "", src: W }),
            !T &&
                null != Q &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(k.e4, { text: Q, className: ep.LW, colorOptions: K }),
                        (0, i.jsx)("div", { className: q }),
                    ],
                }),
            t
                ? (0, i.jsx)("div", {
                      className: ep.wp,
                      children: (0, i.jsx)(m._, {
                          src: "/assets/e958f5c07cd6f090.svg",
                          alt: Z.intl.string(Z.t.XP8vWR),
                          mediaLayoutType: eI.dG.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: ep.Fm,
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.A, { children: (0, i.jsx)(g.H, { children: Z.intl.string(Z.t.lG6a5x) }) }),
                            (0, i.jsx)(A.A, { className: a()(ep.DD, ep.$l) }),
                            !T &&
                                M !== et.pe.TIER_2 &&
                                H &&
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(u.E, {
                                        variant: "text-xs/bold",
                                        className: ep.zu,
                                        children: Y,
                                    }),
                                }),
                            (0, i.jsx)(eT.A, {
                                isGift: T,
                                premiumTier: et.PremiumTypes.TIER_2,
                                offerType: G,
                                offerTierMatchesCard: M === et.pe.TIER_2 || (0, O.U9)(U, et.pe.TIER_2),
                                showYearlyPrice: r,
                                priceOptions: p,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { children: (0, i.jsx)(eP, { featureSet: l, isModal: I, isGift: T }) }),
                ],
            }),
            T || (M !== et.pe.TIER_2 && null == U) ? null : (0, i.jsx)(D.Wy, { tier: et.PremiumTypes.TIER_2 }),
            n,
            h && (0, i.jsx)(S, {}),
        ],
    });
}
let ev = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function eN(e) {
    let { innerRef: t, className: n, tier0CTAButton: r, tier2CTAButton: l } = e,
        { analyticsLocations: s } = (0, I.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        c = ev(t);
    return (0, i.jsx)(I.f5, {
        value: s,
        children: (0, i.jsxs)("div", {
            ref: c,
            className: a()(ep.Zo, n),
            children: [
                (0, i.jsx)(eE, { showWumpus: !0, ctaButton: r }),
                (0, i.jsx)(eR, { showWumpus: !0, ctaButton: l }),
            ],
        }),
    });
}
