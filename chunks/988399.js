r.d(t, { qu: () => eE, Nz: () => eA, pw: () => e_, ZP: () => ev, Lg: () => eI, nH: () => ef });
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
    A = r(40185),
    v = r(526292),
    R = r(552736),
    _ = r(778712),
    E = r(775602),
    P = r(937008),
    N = r(810498),
    C = r(298305),
    y = r(731113);
function M() {
    let e = (0, o.bG)([E.A], () => E.A.useReducedMotion),
        { claimableRewards: t } = (0, P.Pv)(),
        r = (0, R.A)(),
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
                    size: _._3.SIZE_80,
                }),
            }),
        ],
    });
}
var b = r(286320),
    w = r(422936),
    S = r(234419),
    U = r(511484),
    L = r(774774),
    O = r(231265),
    G = r(349563),
    D = r(90526),
    H = r(97808),
    F = r(854627),
    k = r(985018),
    V = r(666237);
function Z() {
    let e = (0, b.b)().slice(0, 3),
        t = e[0],
        { avatarSrc: r, eventHandlers: i } = (0, F.A)({ userId: t?.id, size: _._3.SIZE_24, animateOnHover: !0 }),
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
              className: V.kL,
              children: [
                  (0, n.jsx)(H.eu, {
                      className: V.__invalid_icon,
                      src: r,
                      "aria-label": t.username,
                      size: _._3.SIZE_24,
                      ...i,
                  }),
                  (0, n.jsx)(d.E, { className: V.Qq, variant: "text-sm/normal", color: "always-white", children: l }),
              ],
          });
}
var B = r(214947),
    W = r(403581),
    J = r(104510),
    K = r(22231),
    z = r(95635),
    Y = r(343032),
    q = r(460905),
    Q = r(183623),
    $ = r(861004),
    X = r(927578),
    ee = r(788868),
    et = r(88001),
    er = r(466919);
let ei = [
        { Icon: B.$, getText: () => k.intl.formatToPlainString(er.default.eP3Ar7, { totalSeats: et.aw }) },
        { Icon: W.t, getText: () => k.intl.string(er.default.woz1Kg) },
        { Icon: J._, getText: () => k.intl.string(er.default.QnbVrt) },
        { Icon: K.R, getText: () => k.intl.string(er.default["409DEa"]) },
    ],
    en = [
        { Icon: B.$, getText: () => k.intl.formatToPlainString(er.default.eP3Ar7, { totalSeats: et.aw }) },
        {
            Icon: z.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: q.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: J._, getText: () => k.intl.formatToPlainString(er.default.HVCRVf, { numBoosts: ee.M4 }) },
        { Icon: $.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    ea = [
        {
            Icon: z.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: Y.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: q.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: $.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ];
var es = r(933832),
    el = r(252424);
let eo = [
        { Icon: es.A, getText: () => k.intl.string(k.t.kpMomJ) },
        {
            Icon: es.A,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: es.A, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: es.A, getText: () => k.intl.string(k.t.zTk8Ul) },
    ],
    ec = [
        {
            Icon: J._,
            getText: function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                return k.intl.formatToPlainString(k.t["T9RTr/"], {
                    numBoosts: ee.M4,
                    percentageOff: (0, el.l9)(e, ee.oX / 100),
                });
            },
        },
        {
            Icon: z.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: Q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: $.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    ed = [
        {
            Icon: z.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: Y.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: Q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: $.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    eu = [
        {
            Icon: z.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_2, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: Y.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: Q.F, getText: () => k.intl.string(k.t.W180bY) },
        { Icon: J._, getText: () => k.intl.string(k.t.cdfuUU) },
        { Icon: $.c, getText: () => k.intl.string(k.t.CNIZfy) },
    ],
    em = [
        { Icon: es.A, getText: () => k.intl.string(k.t.KjrZ8Z) },
        {
            Icon: es.A,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: es.A, getText: () => k.intl.string(k.t.Uukj4o) },
    ],
    eg = [
        {
            Icon: z.J,
            getText: () =>
                k.intl.formatToPlainString(k.t.p8QVLT, {
                    maxUploadPremium: (0, X.EJ)(ee.PremiumTypes.TIER_0, { useSpace: !1 }),
                }),
        },
        { Icon: q.n, getText: () => k.intl.string(k.t.KjrZ8Z) },
        { Icon: Y.i, getText: () => k.intl.string(k.t["taMwg/"]) },
        { Icon: W.t, getText: () => k.intl.string(k.t["8ukxAW"]) },
    ];
var ex = r(838541),
    ep = r(923883),
    eT = r(79304);
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
                    children: k.intl.string(er.default.ItfIa5),
                }),
            ei.map((e, r) => {
                let { Icon: i, getText: a } = e;
                return (0, n.jsx)(eh, { Icon: i, text: a(), enablePremiumBrandRefresh: !0, isApplicationHome: t }, r);
            }),
        ],
    });
}
function ef(e) {
    let { isApplicationHome: t, enablePremiumBrandRefresh: r } = e,
        i = t && !r ? em : eg;
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
        g = (0, S.V)(),
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
                            (0, n.jsx)(D.A, {
                                isGift: s,
                                premiumTier: ee.PremiumTypes.TIER_0,
                                offerType: ee.Vk.PREMIUM_TRIAL,
                                offerTierMatchesCard: x === ee.pe.TIER_0,
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
            s || x !== ee.pe.TIER_0 ? null : (0, n.jsx)(G.Wy, { tier: ee.PremiumTypes.TIER_0 }),
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
function ev(e) {
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
                    return eo;
                case 1:
                    return ec;
                case 2:
                    return ed;
                case 4:
                    return en;
                case 5:
                    return ea;
                default:
                    return eu;
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
            g && (3 === t || 0 === t) && (0, n.jsx)(Z, {}),
        ],
    });
}
function eR(e) {
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
        _ = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        E = (0, S.V)(),
        P = E?.subscription_trial?.sku_id,
        N = j?.hasActiveTrial ? _?.premiumType : null,
        C = (0, v.ar)(),
        y = (0, w.O)(),
        b = (0, v.k5)(),
        H = null != P || null != N ? ee.Vk.PREMIUM_TRIAL : null != y || b ? ee.Vk.PREMIUM_DISCOUNT : null,
        F = (0, A.cg)(),
        k = !g && C,
        V = (0, R.A)()?.planSelection,
        Z = V?.getBackgroundImageUrl?.(),
        B = V?.getCardImageUrl?.(),
        W = (0, O._)(),
        J = (0, c.q)((0, m.Ay)()),
        K = J ? L.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : L.at.PREMIUM_TIER_2_WHITE_FILL,
        z = (0, L.rm)(b, N, y, E, P),
        Y = k && !J ? ep.on : void 0;
    return (0, n.jsxs)("div", {
        className: l()(ep.Nr, ep.hA, s, { [ep.J5]: k, [ep.lr]: k, [ep.jx]: T, [ep.ud]: T && null != B }),
        children: [
            T && null !== B && (0, n.jsx)("img", { className: ep.Cr, alt: "", src: B }),
            T && null !== Z && (0, n.jsx)("img", { className: ep.gx, alt: "", src: Z }),
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
                                P !== ee.pe.TIER_2 &&
                                F &&
                                (0, n.jsx)("div", {
                                    children: (0, n.jsx)(d.E, {
                                        variant: "text-xs/bold",
                                        className: ep.zu,
                                        children: W,
                                    }),
                                }),
                            (0, n.jsx)(D.A, {
                                isGift: g,
                                premiumTier: ee.PremiumTypes.TIER_2,
                                offerType: H,
                                offerTierMatchesCard: P === ee.pe.TIER_2 || (0, U.U9)(y, ee.pe.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: p,
                                headingVariant: "heading-md/normal",
                                headingColor: "always-white",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { children: (0, n.jsx)(ev, { featureSet: a, isModal: x, isGift: g }) }),
                ],
            }),
            g || (P !== ee.pe.TIER_2 && null == y) ? null : (0, n.jsx)(G.Wy, { tier: ee.PremiumTypes.TIER_2 }),
            r,
            T && (0, n.jsx)(M, {}),
        ],
    });
}
let e_ = (e) => (t) => {
    null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t));
};
function eE(e) {
    let { innerRef: t, className: r, tier0CTAButton: i, tier2CTAButton: a } = e,
        { analyticsLocations: s } = (0, x.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD),
        o = e_(t);
    return (0, n.jsx)(x.f5, {
        value: s,
        children: (0, n.jsxs)("div", {
            ref: o,
            className: l()(ep.Zo, r),
            children: [
                (0, n.jsx)(ej, { showWumpus: !0, ctaButton: i }),
                (0, n.jsx)(eR, { showWumpus: !0, ctaButton: a }),
            ],
        }),
    });
}
