"use strict";
n.d(t, { Ay: () => n4, WU: () => n6, x6: () => n3 }), n(321073), n(323874), n(14289), n(35956);
var i,
    r,
    s,
    a = n(627968),
    o = n(64700),
    l = n(503698),
    u = n.n(l),
    c = n(873263),
    d = n(17928),
    _ = n(269115),
    h = n(289873),
    f = n(689175),
    p = n(315629),
    E = n(228366),
    m = n(793574),
    g = n(688810),
    A = n(949030),
    I = n(611924),
    T = n(961250),
    S = n(366505),
    y = n(841595),
    N = n(903209),
    v = n(166403),
    C = n(174459),
    R = n(881489),
    O = n(131168),
    b = n(482589),
    D = n(410516),
    L = n(534514),
    w = n(31502),
    M = n(562708),
    P = n(192308),
    x = n(821609),
    k = n(885574),
    U = n(834730),
    G = n(43990),
    F = n(993077),
    V = n(139286),
    B = n(872725),
    H = n(920050),
    j = n(792656),
    Y = n(985603),
    W = n(777376),
    K = n(185797),
    $ = n(652215),
    z = n(788868),
    q = n(237146),
    X = n(375708),
    Z = n(74776);
function Q(e) {
    let { openRewardModal: t } = e,
        n = (0, K.F)();
    if (n.kind === K.L.SUBSCRIBE)
        return (0, a.jsxs)("div", {
            className: Z.R$,
            children: [
                (0, a.jsx)(j.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: z.pe.TIER_2,
                }),
                (0, a.jsx)(x.$, { variant: "secondary", size: "md", text: X.intl.string(X.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === W.p1.CLAIMED
            ? { text: X.intl.string(q.default.Plwzgf) }
            : { text: X.intl.string(X.t.hvVgAZ) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: Z.R$,
                children: [
                    (0, a.jsx)(x.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: n.text,
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        onClick: n.onClick,
                        disabled: n.disabled,
                        loading: n.loading,
                    }),
                    (0, a.jsx)(x.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: n.requestInProgress,
                    }),
                ],
            }),
            n.claimStatus === W.p1.CLAIM_IN_PROGRESS &&
                (0, a.jsxs)("div", {
                    className: Z.ed,
                    children: [
                        (0, a.jsx)(k.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, a.jsx)(U.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: X.intl.string(q.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function J(e) {
    let { glowing: t = !1 } = e;
    (0, V.A)({
        type: M.ImpressionTypes.VIEW,
        name: M.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: H.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: Y.FZ },
    });
    let { analyticsLocations: i } = (0, g.Ay)(m.A.CROISSANT_PREMIUM_HERO_CARD),
        r = o.useCallback(() => {
            (0, P.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16848"), n.e("30221"), n.e("10622"), n.e("77632")]).then(
                    n.bind(n, 836291),
                );
                return (t) => (0, a.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, a.jsx)(G.N, {
        theme: $.NJ8.DARKER,
        children: (e) =>
            (0, a.jsx)(g.f5, {
                value: i,
                children: (0, a.jsx)("div", {
                    className: u()(e, Z.kL),
                    children: (0, a.jsx)(B.A, {
                        cardType: F.s.CUSTOM,
                        cardClassName: Z.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, a.jsxs)("div", {
                            className: Z.XF,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: Z.j,
                                    children: [
                                        (0, a.jsx)("div", { className: Z._g }),
                                        (0, a.jsx)("div", { className: Z.$h }),
                                        (0, a.jsx)("div", { className: Z.Rv }),
                                        (0, a.jsx)("div", { className: Z.Lw }),
                                        (0, a.jsx)("div", { className: Z.mR }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: Z.Qs,
                                    children: [
                                        (0, a.jsx)("img", {
                                            className: Z.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, a.jsx)(L.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: Z.DD,
                                            children: X.intl.string(q.default.RGT513),
                                        }),
                                        (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: Z.h_,
                                            children: X.intl.string(q.default["+pTnsf"]),
                                        }),
                                        (0, a.jsx)(Q, { openRewardModal: r }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var ee = n(744064);
function et(e) {
    let { className: t, containerClassName: n } = e,
        i = (0, K.F)(),
        r =
            i.kind === K.L.SUBSCRIBE
                ? { subscriptionRequired: !0 }
                : {
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, a.jsx)(ee.S, {
        id: H.XBOX_PREMIUM_PERK_CARD_ID,
        title: X.intl.string(q.default.UVL9tD),
        description: X.intl.string(q.default["I+IXr0"]),
        ...r,
        className: t,
        containerClassName: n,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, a.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: Y.FZ },
    });
}
function en(e) {
    let { analyticsLocations: t } = (0, g.Ay)(m.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, a.jsx)(g.f5, { value: t, children: (0, a.jsx)(et, { ...e }) });
}
var ei = n(367791),
    er = n(672193);
function es(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: r, grid: s, gridClassName: o } = e,
        l = er.Ui;
    return (0, a.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            r,
            null != s ? (0, a.jsx)("div", { className: u()(l, null != r && ei.Jx, o), children: s }) : null,
        ],
    });
}
var ea = n(975571),
    eo = n(149995),
    el = n(398523),
    eu = n(881373),
    ec = n(581921),
    ed = n(852218),
    e_ = n(382259),
    eh = n(962995);
function ef() {
    let { analyticsLocations: e } = (0, g.Ay)(m.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, eu.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = el.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, eo.Zk)({ location: "useHardwarePartnerPerkCards" }),
        r = (0, eo.S9)({ location: "useHardwarePartnerPerkCards" }),
        s = (0, w.l)("useHardwarePartnerPerkCards"),
        { currentDate: l, nDaysInMonth: u } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = s ? void 0 : X.intl.string(X.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: H.LOGITECH_3PP_CARD_ID,
                      title: X.intl.string(eh.default.OlObRa),
                      description: X.intl.format(eh.default.ZGOJ8R, {
                          discountPercent: eu.aW,
                          termsUrl: ea.A.getArticleURL($.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: l.getDate() / u,
                      ctaText: X.intl.string(X.t.w7s5Qr),
                      onCtaClick: () => (0, ec.P)({ partnerId: ed.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, a.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: ed.XY },
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: H.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: X.intl.string(X.t.m7PucM),
                      description: i
                          ? r
                              ? X.intl.format(X.t["1Zw6xL"], {})
                              : X.intl.format(X.t.KWdCO0, {})
                          : X.intl.format(X.t.zh1X7u, {}),
                      descriptionNote:
                          !r && i
                              ? X.intl.format(X.t.vblnHk, {
                                    partnerName: ed.CD[ed.Cs].label,
                                    helpdeskArticle: ea.A.getArticleURL($.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      pillText: o,
                      caption: (0, a.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: l.getDate() / u,
                      ctaText: X.intl.string(X.t.w7s5Qr),
                      onCtaClick: () => (0, e_.u)({ analyticsLocations: e, partnerIds: [ed.KS, ed.Cs] }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: ed.KS },
                  }
                : null,
        };
    }, [s, e, l, t, u, n, i, r]);
}
var ep = n(102338);
let eE = "xgpp";
function em(e) {
    let { glowingSectionId: t, glowingPerkId: n } = e,
        i = (0, w.l)("premium_subscriber_home_rewards"),
        { logitechCard: r, steelseriesCard: s } = ef();
    if (!i) return null;
    let o = null != r || null != s;
    return (0, a.jsx)(es, {
        id: eE,
        sectionClassName: u()(ep.uW, ep.Uv, ep.qr),
        heading: (0, a.jsx)(L.D, {
            variant: "display-sm",
            className: u()(er.R_, ei.U6),
            children: X.intl.string(X.t.NG1e6l),
        }),
        beforeGrid: (0, a.jsx)("div", { className: ei.JE, children: (0, a.jsx)(J, { glowing: t === eE }) }),
        grid: o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(en, { containerClassName: er.Nr }),
                      null != r && (0, a.jsx)(ee.S, { ...r, containerClassName: er.Nr, glowing: n === r.id }),
                      null != s && (0, a.jsx)(ee.S, { ...s, containerClassName: er.Nr, glowing: n === s.id }),
                  ],
              })
            : null,
    });
}
var eg = n(65470),
    eA = n(797221);
let eI = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: r } = (0, g.Ay)(n);
    return (0, a.jsx)(g.f5, {
        value: r,
        children: (0, a.jsxs)(p.h, {
            className: u()(eA.kL, eA.pm, t),
            color: "purple",
            children: [
                (0, a.jsxs)("div", {
                    className: eA.FS,
                    children: [
                        (0, a.jsx)(L.D, {
                            variant: "heading-xxl/bold",
                            className: eA.R_,
                            children: X.intl.string(X.t.Ve9Ge6),
                        }),
                        (0, a.jsx)(U.E, { variant: "text-md/medium", children: X.intl.string(X.t.yQ06u1) }),
                        (0, a.jsx)("div", {
                            className: eA.SB,
                            children: (0, a.jsx)(eg.A, {
                                buttonTextOverride: X.intl.string(X.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eA._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eT = n(877624);
let eS =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function ey(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: eS,
        srcSet: `${eS} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var eN = n(502572),
    ev = n(331322),
    eC = n(403581),
    eR = n(775602),
    eO = n(366999),
    eb = n(531260),
    eD = n(780964),
    eL = n(766075),
    ew = n(786300),
    eM = n(428262),
    eP = n(960851),
    ex = n(89366),
    ek = n(945810),
    eU =
        (((i = {}).CONTROL = "control"),
        (i.TREATMENT_A = "treatment_a"),
        (i.TREATMENT_B = "treatment_b"),
        (i.TREATMENT_C = "treatment_c"),
        i);
let eG = (0, ek.mj)({
    name: "2026-05-nitro-home-header",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "treatment_a" },
        2: { treatment: "treatment_b" },
        3: { treatment: "treatment_c" },
    },
});
var eF = n(504836),
    eV = n(422936),
    eB = n(234419),
    eH = n(549996),
    ej = n(810660),
    eY = n(175569),
    eW = n(371764),
    eK = n(949964),
    e$ = n(103411),
    ez = n(778712),
    eq = n(97808),
    eX = n(590251),
    eZ = n(144165),
    eQ = n(854627),
    eJ = n(427262),
    e0 = n(851746),
    e1 = n(326084),
    e2 = n(664654);
function e3() {
    var e, t, n;
    let { referralSentUsers: i } = (0, e2.J)(),
        r = (0, d.bG)([e0.A], () => e0.A.getRecipientStatus()),
        s = (0, d.bG)([e0.A], () => e0.A.getHasEligibleFriends()),
        a = r.size === e2.Z,
        o =
            ((e = !1 !== s),
            (t = i.length),
            (n = r.size === e2.Z && [...r.values()].every((e) => e === e1.aK.REDEEMED)),
            e
                ? t === e2.Z
                    ? n
                        ? X.intl.format(X.t["1aEjsH"], { helpdeskArticle: ea.A.getArticleURL($.MVz.REFERRAL_PROGRAM) })
                        : X.intl.format(X.t["+u3AOO"], { helpdeskArticle: ea.A.getArticleURL($.MVz.REFERRAL_PROGRAM) })
                    : X.intl.format(X.t["omMr+V"], { helpdeskArticle: ea.A.getArticleURL($.MVz.REFERRAL_PROGRAM) })
                : X.intl.format(X.t["zWhX/Q"], { helpdeskArticle: ea.A.getArticleURL($.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: r.size, hasEligibleFriends: s, allSent: a, bodyText: o };
}
var e6 = n(212737),
    e4 = n(849812);
let e5 = (e) => {
        let { startingScreen: t, analyticsLocations: i } = e;
        C.default.track($.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
            (0, P.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                return (n) => (0, a.jsx)(e, { ...n, startingScreen: t });
            });
    },
    e7 = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, eQ.A)({ userId: t.id, size: ez._3.SIZE_24 });
        return (0, a.jsx)(
            eq.eu,
            { className: e4.bj, src: n, "aria-label": (0, eJ.mG)(t), size: ez._3.SIZE_24, ...i },
            t.id,
        );
    },
    e8 = (e) => {
        let { slotIndex: t } = e;
        return (0, a.jsx)("div", { className: e4.p, children: t });
    },
    e9 = (e) => {
        let { referralSentUsers: t, className: n } = e;
        return (0, a.jsx)("div", {
            className: u()(e4.L$, n),
            children: (() => {
                let e = [];
                for (let n = 0; n < e2.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, a.jsx)(e7, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, a.jsx)(e8, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    te = (e) => {
        let { nReferralsSent: t, imageSize: n = 93, backgroundClassName: i, ringClassName: r } = e;
        return (0, a.jsx)(eX.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: i ?? e4.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: r ?? e4.e0,
            overlayClassName: t === e2.Z ? e4.ys : void 0,
            children: (0, a.jsx)(eZ._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: n,
                width: n,
                zoomable: !1,
            }),
        });
    },
    tt = (e) => {
        let { className: t } = e,
            { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: s, bodyText: o } = e3();
        return (0, a.jsxs)("div", {
            className: u()(e4.kL, t),
            children: [
                (0, a.jsx)("div", { className: e4.G3, children: (0, a.jsx)(te, { nReferralsSent: i }) }),
                (0, a.jsxs)("div", {
                    className: e4.IH,
                    children: [
                        (0, a.jsx)(e9, { referralSentUsers: n, className: e4.GV }),
                        (0, a.jsxs)("div", {
                            className: e4.n4,
                            children: [
                                (0, a.jsx)(L.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: X.intl.string(X.t.USo4s7),
                                }),
                                (0, a.jsx)(U.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                            ],
                        }),
                        (0, a.jsx)(x.$, {
                            variant: "primary",
                            disabled: !1 === r || !0 === s,
                            text: X.intl.string(X.t.Lm2nFc),
                            onClick: () =>
                                e5({
                                    startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var tn = n(989349),
    ti = n.n(tn),
    tr = n(496431),
    ts = n(116689);
let ta = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, tr.A)(ti()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: r, hours: s, minutes: o, seconds: l } = i,
        c = [
            { unitValue: r, unitType: "days" },
            { unitValue: s, unitType: "hours" },
            { unitValue: o, unitType: "minutes" },
            { unitValue: l, unitType: "seconds" },
        ];
    return (0, a.jsxs)("div", {
        className: u()(ts.Xl, n),
        children: [
            (0, a.jsx)(U.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: X.intl.string(X.t["/ARFVE"]),
            }),
            (0, a.jsx)("div", {
                className: ts.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: ts.bh,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: ts.kB,
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        className: ts.B2,
                                                        children: (0, a.jsx)(U.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: ts.B2,
                                                        children: (0, a.jsx)(U.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: r,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(U.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return X.intl.string(X.t.ixASa2);
                                                        case "hours":
                                                            return X.intl.string(X.t["8sNvNn"]);
                                                        case "minutes":
                                                            return X.intl.string(X.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return X.intl.string(X.t.JhaiLW);
                                                        default:
                                                            return "";
                                                    }
                                                })(e.unitType),
                                            }),
                                        ],
                                    },
                                    e.unitType,
                                ),
                                !t &&
                                    (0, a.jsx)(U.E, {
                                        className: ts.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === c.length - 1),
                ),
            }),
        ],
    });
};
var to = n(473702),
    tl = n(609425),
    tu = n(368919),
    tc = n(287809),
    td = n(12052);
function t_() {
    let e = (0, d.bG)([tc.default], () => tc.default.getCurrentUser()),
        t = (0, tl.A)(),
        { avatarSrc: n, avatarDecorationSrc: i, eventHandlers: r } = (0, eQ.A)({ userId: e?.id, size: ez._3.SIZE_56 });
    if (null == e) return null;
    let s = (0, eJ.mG)(e);
    return (0, a.jsxs)("div", {
        className: td.kL,
        children: [
            (0, a.jsx)("div", {
                className: td.my,
                children: (0, a.jsx)(eq.eu, {
                    src: n,
                    avatarDecoration: i,
                    size: ez._3.SIZE_56,
                    "aria-label": s,
                    ...r,
                }),
            }),
            (0, a.jsx)("div", { className: td.QC, children: (0, a.jsx)(tu.A, { userName: s, displayNameStyles: t }) }),
        ],
    });
}
var th = n(707554),
    tf = n(218199);
let tp = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, a.jsx)(th.F, {
        forceLevel: 1,
        children: (0, a.jsx)(L.D, { className: u()(tf.w, t, i && tf.n), variant: "display-md", color: n, children: r }),
    });
};
var tE = n(690093);
function tm(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: s, bodyText: o } = e3();
    return (0, a.jsxs)("div", {
        className: u()(tE.kL, t),
        children: [
            (0, a.jsx)("div", {
                className: tE.G3,
                children: (0, a.jsx)(te, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tE.HP,
                    ringClassName: tE.pZ,
                }),
            }),
            (0, a.jsxs)("div", {
                className: tE.IH,
                children: [
                    (0, a.jsxs)("div", {
                        className: tE.n4,
                        children: [
                            (0, a.jsx)(L.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: X.intl.string(X.t.USo4s7),
                            }),
                            (0, a.jsx)(U.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, a.jsx)(e9, { referralSentUsers: n, className: tE.t7 }),
                ],
            }),
            (0, a.jsx)(x.$, {
                variant: "primary",
                disabled: !1 === r || !0 === s,
                text: X.intl.string(X.t.Lm2nFc),
                onClick: () =>
                    e5({ startingScreen: e6.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tg = n(702841),
    tA = n(676279),
    tI = n(20458),
    tT = n(141502);
let tS = (e) => {
    let {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: n,
            flyingWumpusAssetClassName: i,
            boltContainerClassName: r,
            carContainerClassName: s,
            hammerContainerClassName: o,
            keyContainerClassName: l,
            starContainerClassName: u,
            boltAssetClassName: c,
            carAssetClassName: d,
            hammerAssetClassName: _,
            keyAssetClassName: h,
            starAssetClassName: f,
            animationSpeedScale: p = 1,
        } = e,
        E = (0, tg.bG)([eR.A], () => eR.A.useReducedMotion),
        m = (0, tA.TM)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tT.A, {
                supportHEVCAlpha: m,
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                containerClassName: n,
                assetClassName: i,
                animationSpeedScale: p,
            }),
            (0, a.jsx)(tI.A, {
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                boltContainerClassName: r,
                carContainerClassName: s,
                hammerContainerClassName: o,
                keyContainerClassName: l,
                starContainerClassName: u,
                boltAssetClassName: c,
                carAssetClassName: d,
                hammerAssetClassName: _,
                keyAssetClassName: h,
                starAssetClassName: f,
                animationSpeedScale: p,
            }),
        ],
    });
};
var ty = n(43588);
let tN = (e) => {
    let { containerVisibilityPercentage: t, compact: n } = e;
    return (0, a.jsx)(tS, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(ty.wG, n && ty.Vx),
        flyingWumpusAssetClassName: u()(ty.lu, n && ty.ov),
        boltContainerClassName: u()(ty.nJ, n && ty.Wc),
        hammerContainerClassName: u()(ty.Gj, n && ty.XA),
        keyContainerClassName: u()(ty.FV, n && ty.oZ),
        starContainerClassName: u()(ty.E1, n && ty.LN),
        boltAssetClassName: u()(ty.j7, n && ty.QN),
        hammerAssetClassName: u()(ty.Wv, n && ty.B9),
        keyAssetClassName: u()(ty.rs, n && ty.I1),
        starAssetClassName: u()(ty.OY, n && ty.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tv = (((r = {}).MORNING = "morning"), (r.AFTERNOON = "afternoon"), (r.EVENING = "evening"), r);
function tC() {
    let e,
        t = { [tv.MORNING]: X.t["Wvc/I+"], [tv.AFTERNOON]: X.t["d+0STx"], [tv.EVENING]: X.t.CqsxKI };
    return X.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tv.MORNING : e >= 12 && e < 17 ? tv.AFTERNOON : tv.EVENING],
    );
}
var tR = n(97584),
    tO = n(202241);
let tb = (e) => {
        let { containerVisibilityPercentage: t, compact: n } = e;
        return (0, a.jsx)(tS, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: u()(tO.wG, n && tO.Vx),
            flyingWumpusAssetClassName: u()(tO.lu, n && tO.ov),
            boltContainerClassName: u()(tO.nJ, n && tO.Wc),
            hammerContainerClassName: u()(tO.Gj, n && tO.XA),
            keyContainerClassName: u()(tO.FV, n && tO.oZ),
            starContainerClassName: u()(tO.E1, n && tO.LN),
            boltAssetClassName: u()(tO.j7, n && tO.QN),
            hammerAssetClassName: u()(tO.Wv, n && tO.B9),
            keyAssetClassName: u()(tO.rs, n && tO.I1),
            starAssetClassName: u()(tO.OY, n && tO.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tD = {
        [eU.TREATMENT_A]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = (0, d.bG)([eR.A], () => eR.A.useReducedMotion),
                { visibilityPercentageRef: l, visibilityPercentage: c } = (0, ej.U)(!o),
                _ = tC();
            return (0, a.jsx)("div", {
                className: u()(tR.kL, tR.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(tR.W2, tR.HQ),
                    ref: l,
                    children: [
                        (0, a.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            className: tR.ZU,
                            children: [
                                i && n,
                                (0, a.jsxs)(ev.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, a.jsx)(tp, {
                                            className: tR.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: _,
                                        }),
                                        (0, a.jsx)(t_, {}),
                                    ],
                                }),
                                s && (0, a.jsx)(tm, {}),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: tR.y3,
                            children: (0, a.jsx)(tN, { containerVisibilityPercentage: c, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [eU.TREATMENT_B]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = (0, d.bG)([eR.A], () => eR.A.useReducedMotion),
                { visibilityPercentageRef: l, visibilityPercentage: c } = (0, ej.U)(!o),
                _ = X.intl.string(X.t.ifwQZb);
            return (0, a.jsx)("div", {
                className: u()(tR.kL, tR.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(tR.W2, tR.m8),
                    ref: l,
                    children: [
                        (0, a.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            className: tR.Y0,
                            children: [
                                i && n,
                                (0, a.jsx)("div", {
                                    className: u()(tR.N1, tR.v8),
                                    children: (0, a.jsx)(tp, {
                                        className: tR.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: _,
                                    }),
                                }),
                                s && (0, a.jsx)(tm, {}),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: tR.BF,
                            children: (0, a.jsx)(tb, { containerVisibilityPercentage: c, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [eU.TREATMENT_C]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = tC();
            return (0, a.jsx)("div", {
                className: u()(tR.kL, tR.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(tR.W2, tR.J_),
                    children: [
                        (0, a.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            fullWidth: !1,
                            className: tR.$S,
                            children: [
                                i && n,
                                (0, a.jsxs)(ev.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, a.jsx)(tp, {
                                            className: tR.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: o,
                                        }),
                                        (0, a.jsx)(t_, {}),
                                    ],
                                }),
                            ],
                        }),
                        s && (0, a.jsx)("div", { className: tR.Pq, children: (0, a.jsx)(tm, {}) }),
                    ],
                }),
            });
        },
    };
function tL(e) {
    let { treatment: t, ...n } = e,
        i = tD[t];
    return null != i ? (0, a.jsx)(i, { ...n }) : null;
}
var tw = n(652533),
    tM = n(447764),
    tP = n(180894);
let tx = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, tg.bG)([eR.A], () => eR.A.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: tM.BI,
                children: (0, a.jsx)(tw.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: tw.$G },
                    yAxisAnimationData: { range: 20, duration: tw.Mp, path: tw.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: tw.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, a.jsx)("img", { src: tP.A, alt: "", className: tM.Q }),
                }),
            }),
            (0, a.jsx)(tI.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: tM.Gj,
                keyContainerClassName: tM.FV,
                starContainerClassName: tM.E1,
                hammerAssetClassName: tM.Wv,
                keyAssetClassName: tM.rs,
                starAssetClassName: tM.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var tk = n(725807),
    tU = n(774774),
    tG = n(975916);
let tF = () => {
    let e = { section: $.JJy.REVERSE_TRIAL_BANNER };
    return (0, a.jsxs)("div", {
        className: tG.vK,
        children: [
            (0, a.jsx)(tU.e4, { text: X.intl.string(X.t.qYKftX), className: tG.Io }),
            (0, a.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tG._u,
            }),
            (0, a.jsx)("div", {
                className: tG.IP,
                children: (0, a.jsx)(U.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: X.intl.format(X.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, a.jsx)(tk.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tG.aA,
                shinyButtonClassName: tG.Xp,
            }),
        ],
    });
};
var tV = n(18671);
let tB = () => {
        let e = (0, tg.bG)([eR.A], () => eR.A.useReducedMotion);
        return (0, a.jsx)(tI.A, {
            isMotionReduced: e,
            blurScale: 0.4,
            starContainerClassName: tV.cI,
            hammerContainerClassName: tV.qg,
            keyContainerClassName: tV.h2,
            boltContainerClassName: tV.Bz,
            starAssetClassName: tV.ks,
            hammerAssetClassName: tV.GY,
            keyAssetClassName: tV.p4,
            boltAssetClassName: tV.vy,
        });
    },
    tH = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            r = (0, R.Zb)(t);
        return (0, a.jsx)("div", {
            className: u()(tR.kL, n),
            ref: i,
            children: (0, a.jsxs)("div", {
                className: tR.ap,
                children: [
                    (0, a.jsxs)(ev.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, a.jsx)(eY.A, { text: X.intl.string(X.t.yhldRB) }),
                            (0, a.jsxs)(ev.B, {
                                align: "start",
                                gap: 12,
                                className: tR.rG,
                                children: [
                                    (0, a.jsx)(tp, { children: X.intl.format(X.t.FwjP6W, { days: r }) }),
                                    (0, a.jsx)(U.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: X.intl.string(X.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(ev.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, a.jsx)(j.A, {
                                        size: "md",
                                        buttonTextOverride: X.intl.string(X.t["2+luBl"]),
                                        iconOverride: eC.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, a.jsx)(x.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: X.intl.string(X.t.Af7ye6),
                                        onClick: () => (0, eL.openUserSettings)(eD.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tR.Hk,
                        children: [(0, a.jsx)(ey, { alt: "", width: "100%", height: "auto" }), (0, a.jsx)(tB, {})],
                    }),
                ],
            }),
        });
    },
    tj = (e) => {
        let t,
            { className: i, isEligibleForBogoPromotion: r, isInReverseTrial: s, shouldShowReferralProgressBar: o } = e,
            {
                headingText: l,
                headingTop: c,
                showPill: _,
                shouldShowChurnVariant: h,
                premiumSubscription: f,
                userDiscountOffer: p,
                discountedPrice: E,
                buttonVisibilityRef: A,
            } = tW(),
            { treatment: I, isInNitroHomeHeaderTreatment: T } = {
                treatment: (t = eG.useConfig({ location: "subscriber_home_hero" })).treatment,
                isInNitroHomeHeaderTreatment: "control" !== t.treatment,
            },
            { analyticsLocations: S } = (0, g.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA),
            y = (0, eH.c)(eT.C.MARKETING_PAGE_BANNER),
            N = T && !h,
            v = null;
        null != y && "marketingPageBanner" === y.properties.properties.oneofKind
            ? (v = (0, a.jsx)(eW.x, {
                  componentId: y.id,
                  promotionBannerMarketingComponentFields: y.properties.properties.marketingPageBanner,
              }))
            : r
              ? (v = (0, a.jsx)(eK.A, { variant: eK.c.SUBSCRIBER_HOME }))
              : s
                ? (v = (0, a.jsx)(tF, {}))
                : o && !N && (v = (0, a.jsx)(tt, {}));
        let C = (0, eB.V)(),
            R = (0, eV.O)(),
            O = (0, D.U9)(R, z.pe.TIER_2) ? z.pe.TIER_2 : void 0,
            b = null != f && f.status !== $.Dmq.ACCOUNT_HOLD && f.hasAnyPremiumNitro,
            L = (0, eb.A)(),
            w = L.isFractionalPremiumActive && !b && null == v && !h,
            M = (0, d.bG)([eR.A], () => eR.A.useReducedMotion),
            { visibilityPercentageRef: k, visibilityPercentage: G } = (0, ej.U)(!M);
        return s
            ? (0, a.jsx)(tH, { fpEndsAt: L.currentEntitlementEndsAt, className: i, buttonVisibilityRef: A })
            : N
              ? (0, a.jsx)(tL, {
                    treatment: I,
                    className: i,
                    headingTop: c,
                    showPill: _,
                    buttonVisibilityRef: A,
                    shouldShowReferralProgressBar: o,
                })
              : (0, a.jsx)("div", {
                    className: u()(tR.kL, i),
                    "data-testid": "subscriber-nitro-home-hero-header",
                    ref: A,
                    children: (0, a.jsxs)("div", {
                        className: tR.Qs,
                        ref: k,
                        children: [
                            _ && c,
                            (0, a.jsxs)("div", {
                                className: tR.N1,
                                children: [
                                    (0, a.jsx)(tx, { containerVisibilityPercentage: G }),
                                    h &&
                                        p?.expiresAt != null &&
                                        (0, a.jsx)(ta, { expiresAt: p.expiresAt.toISOString(), className: tR.IZ }),
                                    (0, a.jsx)(tp, {
                                        children:
                                            h && null != p
                                                ? X.intl.format(X.t["3yZP0G"], { percent: p.discount.amount })
                                                : l,
                                    }),
                                    h &&
                                        null != p &&
                                        null != E &&
                                        (0, a.jsx)(U.E, {
                                            className: tR.jG,
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            children: X.intl.format(X.t["3Q4wCy"], {
                                                discountedPrice: E,
                                                billingPeriod: (0, eM.Ke)(p.discount.userUsageLimitInterval),
                                                numMonths: p.discount.userUsageLimit,
                                            }),
                                        }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: w || h ? tR.UJ : void 0,
                                children: [
                                    w &&
                                        (0, a.jsx)(j.A, {
                                            size: "md",
                                            hasActivePromotion: !!r,
                                            subscriptionTier: C?.subscription_trial?.sku_id ?? O,
                                        }),
                                    h &&
                                        null != f &&
                                        (0, a.jsx)(x.$, {
                                            variant: "expressive",
                                            icon: eC.t,
                                            size: "md",
                                            text: X.intl.string(X.t.zrCzVB),
                                            onClick: () => {
                                                var e;
                                                return (
                                                    (e = to.g.CONFIRM_DISCOUNT),
                                                    void (0, P.openModalLazy)(async () => {
                                                        let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                            await Promise.all([
                                                                n.e("34218"),
                                                                n.e("71632"),
                                                                n.e("26963"),
                                                                n.e("46334"),
                                                                n.e("87755"),
                                                                n.e("23950"),
                                                                n.e("67362"),
                                                                n.e("95720"),
                                                                n.e("30571"),
                                                                n.e("71664"),
                                                                n.e("11954"),
                                                                n.e("40942"),
                                                                n.e("4207"),
                                                                n.e("84045"),
                                                                n.e("32285"),
                                                                n.e("62924"),
                                                                n.e("94307"),
                                                                n.e("2677"),
                                                                n.e("32993"),
                                                                n.e("54353"),
                                                                n.e("13309"),
                                                                n.e("87550"),
                                                                n.e("55644"),
                                                                n.e("75430"),
                                                                n.e("71934"),
                                                                n.e("70573"),
                                                                n.e("28379"),
                                                                n.e("76568"),
                                                                n.e("39995"),
                                                                n.e("25568"),
                                                                n.e("29272"),
                                                                n.e("394"),
                                                                n.e("26105"),
                                                                n.e("46461"),
                                                                n.e("64509"),
                                                                n.e("16581"),
                                                                n.e("23924"),
                                                                n.e("42205"),
                                                                n.e("71091"),
                                                                n.e("207"),
                                                                n.e("91680"),
                                                                n.e("57036"),
                                                                n.e("57174"),
                                                                n.e("98839"),
                                                                n.e("10471"),
                                                                n.e("11301"),
                                                                n.e("61737"),
                                                                n.e("68261"),
                                                                n.e("64827"),
                                                                n.e("7167"),
                                                                n.e("96643"),
                                                                n.e("92789"),
                                                                n.e("2368"),
                                                                n.e("21335"),
                                                                n.e("47834"),
                                                                n.e("11735"),
                                                                n.e("6338"),
                                                                n.e("5636"),
                                                                n.e("45638"),
                                                                n.e("88941"),
                                                                n.e("61379"),
                                                                n.e("25693"),
                                                                n.e("32606"),
                                                                n.e("43039"),
                                                                n.e("28154"),
                                                                n.e("21690"),
                                                                n.e("88077"),
                                                                n.e("4369"),
                                                                n.e("32817"),
                                                                n.e("13681"),
                                                                n.e("53729"),
                                                                n.e("48804"),
                                                                n.e("10004"),
                                                                n.e("55314"),
                                                                n.e("89094"),
                                                                n.e("29177"),
                                                                n.e("32551"),
                                                                n.e("76881"),
                                                                n.e("23353"),
                                                                n.e("50015"),
                                                                n.e("38835"),
                                                                n.e("11523"),
                                                                n.e("44695"),
                                                                n.e("44376"),
                                                                n.e("31644"),
                                                                n.e("45723"),
                                                                n.e("70697"),
                                                                n.e("18546"),
                                                                n.e("53930"),
                                                                n.e("90244"),
                                                                n.e("18943"),
                                                                n.e("70653"),
                                                                n.e("53614"),
                                                                n.e("31825"),
                                                                n.e("36320"),
                                                                n.e("20320"),
                                                                n.e("84967"),
                                                                n.e("31390"),
                                                                n.e("47017"),
                                                                n.e("90889"),
                                                                n.e("99657"),
                                                                n.e("26780"),
                                                                n.e("44265"),
                                                                n.e("99141"),
                                                                n.e("84103"),
                                                                n.e("17225"),
                                                                n.e("30920"),
                                                                n.e("99941"),
                                                                n.e("25990"),
                                                                n.e("58821"),
                                                                n.e("11527"),
                                                                n.e("63095"),
                                                                n.e("52266"),
                                                                n.e("68647"),
                                                                n.e("35344"),
                                                                n.e("16900"),
                                                                n.e("63070"),
                                                                n.e("64615"),
                                                                n.e("96443"),
                                                                n.e("66322"),
                                                                n.e("75134"),
                                                                n.e("57598"),
                                                                n.e("55184"),
                                                                n.e("23216"),
                                                                n.e("87079"),
                                                                n.e("14805"),
                                                                n.e("73547"),
                                                                n.e("99593"),
                                                                n.e("84456"),
                                                                n.e("47555"),
                                                                n.e("21435"),
                                                                n.e("61935"),
                                                                n.e("62168"),
                                                                n.e("69875"),
                                                                n.e("58157"),
                                                                n.e("15754"),
                                                                n.e("44111"),
                                                                n.e("77084"),
                                                                n.e("75361"),
                                                                n.e("52557"),
                                                                n.e("95093"),
                                                                n.e("71234"),
                                                                n.e("60177"),
                                                                n.e("74074"),
                                                                n.e("1006"),
                                                                n.e("23276"),
                                                                n.e("30938"),
                                                                n.e("48720"),
                                                                n.e("56689"),
                                                                n.e("59880"),
                                                                n.e("74016"),
                                                                n.e("12168"),
                                                                n.e("94161"),
                                                                n.e("13051"),
                                                                n.e("80347"),
                                                                n.e("10741"),
                                                                n.e("80166"),
                                                            ]).then(n.bind(n, 293061));
                                                        return (n) =>
                                                            (0, a.jsx)(t, {
                                                                ...n,
                                                                analyticsLocations: S,
                                                                initialStep: e,
                                                                premiumSubscription: f,
                                                            });
                                                    })
                                                );
                                            },
                                        }),
                                    (0, a.jsx)(eg.A, {
                                        variant: w || h ? "secondary" : "expressive",
                                        size: "md",
                                        buttonTextOverride: X.intl.string(X.t["3KomGa"]),
                                    }),
                                ],
                            }),
                            v,
                        ],
                    }),
                });
    },
    [tY, tW] = (0, ew.A)(),
    tK = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: s } = (0, g.Ay)(m.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, R.ds)(),
            l = (0, eP.cg)(),
            u = (0, ex.QQ)(),
            c = (0, d.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
            _ = (0, eF.Z)({ location: "subscriber_home_hero" }),
            h = null != c && c.status === $.Dmq.CANCELED && null != i,
            f = u && !(h && _),
            p = X.intl.string(X.t.qYKftX),
            E = (0, e$.m)(),
            A = X.intl.string(X.t.ifwQZb),
            { fractionalState: I, endsAt: T } = (0, eb.A)(),
            S = (0, eO.Ay)(T, eO.yE.CREDITS_ENDS_IN),
            y = null;
        if (I === z.xc.NONE || o) y = (0, a.jsx)(eY.A, { text: p });
        else {
            f = !0;
            let e = X.intl.format(X.t["yR+oDD"], {
                helpCenterLink: ea.A.getArticleURL($.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            y = (0, a.jsx)(eN.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tR.YL,
                position: "right",
                children: (e) =>
                    (0, a.jsx)("div", {
                        ...e,
                        className: tR.V_,
                        children: (0, a.jsx)("div", { className: tR.eL, children: (0, a.jsx)(eY.A, { text: S }) }),
                    }),
            });
        }
        return (0, a.jsx)(g.f5, {
            value: s,
            children: (0, a.jsx)(tY.Provider, {
                value: {
                    headingText: A,
                    headingTop: y,
                    showPill: f,
                    shouldShowChurnVariant: h,
                    premiumSubscription: c,
                    userDiscountOffer: i,
                    discountedPrice: r,
                    buttonVisibilityRef: n,
                },
                children: (0, a.jsx)(tj, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: E,
                }),
            }),
        });
    };
var t$ = n(922139),
    tz = n(717421),
    tq = n(98812),
    tX = n(67423);
let tZ = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: r, discountedPrice: s } = e,
        { analyticsLocations: o } = (0, g.Ay)(m.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, tz.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, a.jsx)(t$.animated.div, {
        className: u()(tq.iE, { [tq.q4]: !t }),
        style: l,
        children: (0, a.jsxs)("div", {
            className: tq.iJ,
            children: [
                (0, a.jsx)("img", { alt: "", src: tX, className: tq.oU }),
                (0, a.jsxs)("div", {
                    className: tq.iQ,
                    children: [
                        (0, a.jsx)(L.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: X.intl.format(X.t["3yZP0G"], { percent: r.discount.amount }),
                        }),
                        (0, a.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: X.intl.format(X.t["3Q4wCy"], {
                                numMonths: r.discount.userUsageLimit,
                                discountedPrice: s,
                                billingPeriod: (0, eM.Ke)(r.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(x.$, {
                    variant: "expressive",
                    icon: eC.t,
                    size: "md",
                    text: X.intl.string(X.t.zrCzVB),
                    onClick: () =>
                        void (0, P.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("34218"),
                                n.e("71632"),
                                n.e("26963"),
                                n.e("46334"),
                                n.e("87755"),
                                n.e("23950"),
                                n.e("67362"),
                                n.e("95720"),
                                n.e("30571"),
                                n.e("71664"),
                                n.e("11954"),
                                n.e("40942"),
                                n.e("4207"),
                                n.e("84045"),
                                n.e("32285"),
                                n.e("62924"),
                                n.e("94307"),
                                n.e("2677"),
                                n.e("32993"),
                                n.e("54353"),
                                n.e("13309"),
                                n.e("87550"),
                                n.e("55644"),
                                n.e("75430"),
                                n.e("71934"),
                                n.e("70573"),
                                n.e("28379"),
                                n.e("76568"),
                                n.e("39995"),
                                n.e("25568"),
                                n.e("29272"),
                                n.e("394"),
                                n.e("26105"),
                                n.e("46461"),
                                n.e("64509"),
                                n.e("16581"),
                                n.e("23924"),
                                n.e("42205"),
                                n.e("71091"),
                                n.e("207"),
                                n.e("91680"),
                                n.e("57036"),
                                n.e("57174"),
                                n.e("98839"),
                                n.e("10471"),
                                n.e("11301"),
                                n.e("61737"),
                                n.e("68261"),
                                n.e("64827"),
                                n.e("7167"),
                                n.e("96643"),
                                n.e("92789"),
                                n.e("2368"),
                                n.e("21335"),
                                n.e("47834"),
                                n.e("11735"),
                                n.e("6338"),
                                n.e("5636"),
                                n.e("45638"),
                                n.e("88941"),
                                n.e("61379"),
                                n.e("25693"),
                                n.e("32606"),
                                n.e("43039"),
                                n.e("28154"),
                                n.e("21690"),
                                n.e("88077"),
                                n.e("4369"),
                                n.e("32817"),
                                n.e("13681"),
                                n.e("53729"),
                                n.e("48804"),
                                n.e("10004"),
                                n.e("55314"),
                                n.e("89094"),
                                n.e("29177"),
                                n.e("32551"),
                                n.e("76881"),
                                n.e("23353"),
                                n.e("50015"),
                                n.e("38835"),
                                n.e("11523"),
                                n.e("44695"),
                                n.e("44376"),
                                n.e("31644"),
                                n.e("45723"),
                                n.e("70697"),
                                n.e("18546"),
                                n.e("53930"),
                                n.e("90244"),
                                n.e("18943"),
                                n.e("70653"),
                                n.e("53614"),
                                n.e("31825"),
                                n.e("36320"),
                                n.e("20320"),
                                n.e("84967"),
                                n.e("31390"),
                                n.e("47017"),
                                n.e("90889"),
                                n.e("99657"),
                                n.e("26780"),
                                n.e("44265"),
                                n.e("99141"),
                                n.e("84103"),
                                n.e("17225"),
                                n.e("30920"),
                                n.e("99941"),
                                n.e("25990"),
                                n.e("58821"),
                                n.e("11527"),
                                n.e("63095"),
                                n.e("52266"),
                                n.e("68647"),
                                n.e("35344"),
                                n.e("16900"),
                                n.e("63070"),
                                n.e("64615"),
                                n.e("96443"),
                                n.e("66322"),
                                n.e("75134"),
                                n.e("57598"),
                                n.e("55184"),
                                n.e("23216"),
                                n.e("87079"),
                                n.e("14805"),
                                n.e("73547"),
                                n.e("99593"),
                                n.e("84456"),
                                n.e("47555"),
                                n.e("21435"),
                                n.e("61935"),
                                n.e("62168"),
                                n.e("69875"),
                                n.e("58157"),
                                n.e("15754"),
                                n.e("44111"),
                                n.e("77084"),
                                n.e("75361"),
                                n.e("52557"),
                                n.e("95093"),
                                n.e("71234"),
                                n.e("60177"),
                                n.e("74074"),
                                n.e("1006"),
                                n.e("23276"),
                                n.e("30938"),
                                n.e("48720"),
                                n.e("56689"),
                                n.e("59880"),
                                n.e("74016"),
                                n.e("12168"),
                                n.e("94161"),
                                n.e("13051"),
                                n.e("80347"),
                                n.e("10741"),
                                n.e("80166"),
                            ]).then(n.bind(n, 293061));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: o,
                                    initialStep: to.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var tQ = n(761508),
    tJ = n(449543);
function t0(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t1(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t2(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var t3 = n(345394);
function t6(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: t3.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t4(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t5(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t7(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t8(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t9(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var ne = n(661531),
    nt = n(996682);
function nn(e) {
    let {
        color: t = ne.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: r,
        width: s = 100,
        height: o = 80,
    } = e;
    return (0, a.jsxs)("svg", {
        ...(0, nt.A)({ "aria-label": n, "aria-hidden": i, role: r }),
        width: s,
        height: o,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, a.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, a.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                    id: "a",
                    children: (0, a.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function ni(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nr = n(78701);
function ns(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: nr.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var na = n(462887),
    no = n(736653),
    nl = n(259065),
    nu = n(206835),
    nc = n(976860),
    nd = n(591179),
    n_ = n(462463),
    nh = n(878784),
    nf = n(425713),
    np = n(975807),
    nE = n(562819),
    nm = n(892035),
    ng = n(793943),
    nA = n(95035),
    nI = n(532794),
    nT = n(192444),
    nS = n(862990),
    ny = n(892227),
    nN = n(81466),
    nv = n(318254),
    nC = n(490285),
    nR = n(875679);
let nO = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, S.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ny.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, a.jsxs)("div", {
        className: nR.kL,
        children: [
            null != n &&
                (0, a.jsxs)("div", {
                    className: nR.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.Pf,
                            children: [
                                (0, a.jsx)(nN.C, { size: "sm", color: ne.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: X.intl.string(nC.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, a.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: X.intl.format(nC.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, a.jsx)("div", { className: nR.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, a.jsxs)("div", {
                    className: nR.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nR.Pf,
                            children: [
                                (0, a.jsx)(nv.C, { size: "sm", color: ne.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: X.intl.string(nC.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, a.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: X.intl.format(nC.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nb = n(655752),
    nD = n(764231),
    nL = n(627380),
    nw = n(30084),
    nM = n(792641),
    nP = n(714206),
    nx = n(88001),
    nk = n(758836),
    nU = n(190107),
    nG = n(466919),
    nF = n(555599),
    nV = n(817577);
let nB =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    nH =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    nj =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nY() {
    let { analyticsLocations: e } = (0, g.Ay)(m.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, nd.X)("useWhatsNewPerkCards"),
        i = (0, nS.O9)(),
        { logitechCard: r, steelseriesCard: s } = ef(),
        l = (0, w.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: c } = (0, nm.z$)("useWhatsNewPerkCards"),
        _ = (0, d.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        h = _?.hasActiveTrial ?? !1,
        f = (0, n_.A)({ analyticsLocations: e }),
        p = (0, o.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, nl.L)({ analyticsLocations: e }),
            );
        }, [e]),
        E = (0, o.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, nE.L)({ analyticsLocations: e }),
            );
        }, [e]),
        A = (0, o.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        I = () => {
            (0, np.A)(nx.TE);
        },
        T = (0, o.useCallback)(() => {
            h
                ? (0, P.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, a.jsx)(e, { ...t });
                  })
                : (0, nI.A)({
                      subscriptionTier: z.pe.TIER_2,
                      initialPlanId: z.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, h]),
        y = (function (e) {
            let { fractionalState: t } = (0, eb.A)(),
                n = t === z.xc.FP_ONLY,
                i = (0, nh.$F)(),
                r = (0, nh.Xb)(),
                s = i?.status === nh.Wo.UPCOMING || n,
                a = (0, nf.N)(i?.id),
                l = (function () {
                    let e = (0, nh.$F)(),
                        t = (0, nb.P)(),
                        n = (0, nh.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = ti()(),
                        r = ti()(n),
                        s = e.status === nh.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                c = (0, d.bG)([eR.A], () => eR.A.useReducedMotion) && !s,
                _ = (0, nL.t)(),
                h = (0, nb.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != h ? X.intl.string(h.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, nD.T)(z.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === nh.Wo.UPCOMING
                              ? X.intl.formatToPlainString(X.t.a1eKDi, { days: _?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return X.intl.formatToPlainString(X.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return X.intl.formatToPlainString(X.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(_, o) ??
                                (0, nD.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let d = null;
                return (
                    null != a ? (d = s || c ? a.standard : a.ambientLarge) : n && (d = nP),
                    {
                        id: H.TENURE_BADGE_CARD_ID,
                        title: null != i ? X.intl.string(i.nameUnformattedNitro) : n ? X.intl.string(X.t.tx9Fvw) : "",
                        pillText: X.intl.string(X.t["jyYgZ+"]),
                        primaryAsset: d,
                        primaryAssetClassName: u()(nM.pq, { [nM.n6]: s, [nM.kE]: c }),
                        caption: null != r ? X.intl.formatToPlainString(X.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: l ?? void 0,
                        ctaText: X.intl.string(X.t.jVcuVY),
                        onCtaClick: () => (0, nw.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, a, s, c, r, l, n, _, h, e]);
        })(e),
        { shouldShowBonusOrbsUX: N, multiplier: C } = (0, nT.lk)(nU.rE.NITRO_HOME_MARKETING),
        { isEligible: R, programReward: O } = (0, S.F)({ location: "useWhatsNewPerkCards" }),
        b = R && null != O && null != O.reward_amount && O.reward_amount > 0;
    return (0, o.useMemo)(() => {
        let e = [
                l ? null : r,
                l ? null : s,
                b
                    ? {
                          id: H.NITRO_ORBS_REWARDS_CARD_ID,
                          title: X.intl.string(nC.default.hx5AFp),
                          description: X.intl.format(nC.default.wq3CF2, { orbsCount: O.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(nF.lH, nF.yK),
                          footerContent: (0, a.jsx)(nO, {}),
                          ctaText: X.intl.string(nC.default.BxjHiu),
                          onCtaClick: () => (0, nc.pX)($.BVt.COLLECTIBLES_SHOP_WITH_TAB(nk.G2.ORBS)),
                      }
                    : null,
                N
                    ? {
                          id: H.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: X.intl.string(X.t.Csf5Ol),
                          description: X.intl.format(X.t.NpUfej, { bonusOrbMultiplier: C }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: X.intl.string(X.t.jVcuVY),
                          onCtaClick: () => (0, nc.pX)($.BVt.QUEST_HOME),
                          primaryAssetClassName: nF.Nf,
                      }
                    : null,
                i
                    ? {
                          id: H.PREMIUM_GROUP_CARD_ID,
                          title: X.intl.string(nG.default.YkvksF),
                          description: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  X.intl.formatToPlainString(nG.default.JlyGQj, {
                                      totalSeats: nx.aw,
                                      premiumGroupProductName: (0, nx.DP)(),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: nF.LF,
                                      children: (0, a.jsx)(nA.A, {
                                          onClick: I,
                                          children: X.intl.string(nG.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: X.intl.string(X.t.oW0eUd),
                          primaryAsset: nV,
                          ctaIcon: eC.t,
                          ctaIconPosition: "start",
                          ctaText: X.intl.string(X.t.IJI7yk),
                          onCtaClick: T,
                      }
                    : null,
                {
                    id: H.DISPLAY_NAME_STYLES_CARD_ID,
                    title: X.intl.string(X.t.OLtTrt),
                    description: X.intl.string(X.t["di/pXR"]),
                    onCtaClick: t ? f : p,
                    ctaText: X.intl.string(X.t.jVcuVY),
                    primaryAsset: nB,
                },
                {
                    id: H.CLIENT_THEMES_CARD_ID,
                    title: X.intl.string(X.t.acc6h6),
                    description: X.intl.formatToPlainString(X.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nj,
                    ctaText: X.intl.string(X.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ng.nf)(ng.HP.CUSTOM_THEME);
                    },
                },
                c
                    ? null
                    : {
                          id: H.PERMADECOS_CARD_ID,
                          title: X.intl.string(X.t.L14NZN),
                          description: X.intl.string(X.t.eCZkAI),
                          primaryAsset: (0, a.jsx)(ns, { alt: "", ariaHidden: !0 }),
                          ctaText: X.intl.string(X.t.jVcuVY),
                          onCtaClick: t ? f : E,
                      },
                {
                    id: H.CUSTOM_APP_ICONS_CARD_ID,
                    title: X.intl.string(X.t["GU+wqh"]),
                    description: X.intl.string(X.t["1uPk1Z"]),
                    primaryAsset: nH,
                    ctaText: X.intl.string(X.t.y9TxXV),
                    onCtaClick: A,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            o = n ? 5 : 6;
        return (
            e.splice(+!!n, 0, y),
            c &&
                e.splice(1, 0, {
                    id: H.PROFILE_FRAMES_CARD_ID,
                    title: X.intl.string(X.t.SGBDnu),
                    description: X.intl.string(X.t.cMgegQ),
                    pillText: X.intl.string(X.t.y2b7CA),
                    primaryAsset:
                        "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                    primaryAssetClassName: u()(nF.lH, nF.yK),
                    ctaText: X.intl.string(X.t.jVcuVY),
                    onCtaClick: () => (0, nc.pX)($.BVt.COLLECTIBLES_SHOP_WITH_TAB(nk.G2.PROFILE_FRAMES)),
                }),
            e.length > o && e.splice(o, e.length - o),
            e
        );
    }, [y, b, O, i, N, C, p, A, E, T, f, t, r, s, l, c]);
}
var nW = n(355097),
    nK = n(64514),
    n$ = n(121818),
    nz =
        (((s = {}).BEST_OF_NITRO = "bestof"),
        (s.APPEARANCE_STYLE = "appearance"),
        (s.UPGRADES = "upgrades"),
        (s.VIP_EXTRAS = "vip"),
        s);
let nq = [
    { id: "bestof", label: () => X.intl.string(X.t.q1u7nQ) },
    { id: "appearance", label: () => X.intl.string(X.t.CUnZkZ) },
    { id: "upgrades", label: () => X.intl.string(X.t.KC5q8v) },
    { id: "vip", label: () => X.intl.string(X.t.DjEAcv) },
];
var nX = n(758495);
let nZ = (e) => {
    e.stopPropagation();
};
function nQ(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, no.DP)(),
                t = (0, nd.X)("useFavoritesPerkCards"),
                n = (0, nh.Lh)(),
                i = (0, nf.N)(n)?.standard ?? null,
                { analyticsLocations: r } = (0, g.Ay)(m.A.PREMIUM_MARKETING_PERK_CARD),
                s = (0, nu.A)({ scrollPosition: nW._F.TRY_IT_OUT, analyticsLocations: r }),
                l = (0, o.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: r });
                }, [r]),
                u = (0, o.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: r });
                }, [r]),
                c = (0, o.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: r });
                }, [r]),
                d = (0, o.useCallback)(() => {
                    (0, nc.pX)($.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, o.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.SOUNDBOARD_CATEGORY, { analyticsLocations: r });
                }, [r]),
                h = (0, n_.A)({ analyticsLocations: r }),
                f = (0, o.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: r }, () =>
                        (0, nl.L)({ analyticsLocations: r }),
                    );
                }, [r]),
                p = nY(),
                E = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                A = (0, o.useMemo)(
                    () => [
                        {
                            id: H.SERVER_BOOSTS_CARD_ID,
                            title: X.intl.formatToPlainString(X.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: X.intl.formatToPlainString(X.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: X.intl.string(X.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, a.jsx)(t0, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.PROFILES_CARD_ID,
                            title: X.intl.string(X.t.xDRab3),
                            description: X.intl.string(X.t.yn6fWA),
                            ctaText: X.intl.string(X.t.jVcuVY),
                            onCtaClick: t ? h : s,
                            primaryAsset: (0, a.jsx)(t1, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: H.HD_VIDEO_CARD_ID,
                            title: X.intl.string(X.t["/mQ5gg"]),
                            description: X.intl.string(X.t["7WwAXh"]),
                            primaryAsset: (0, a.jsx)(t2, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.CLIENT_THEMES_CARD_ID,
                            title: X.intl.string(X.t.acc6h6),
                            description: X.intl.formatToPlainString(X.t.WQazjs, { themeCount: 20 }),
                            ctaText: X.intl.string(X.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: nj,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: H.MORE_EMOJIS_CARD_ID,
                            title: X.intl.string(X.t.D8vIDT),
                            description: X.intl.string(X.t.DRMecB),
                            primaryAsset: (0, a.jsx)(t6, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.LARGE_UPLOADS_CARD_ID,
                            title: X.intl.string(X.t.nL1WZV),
                            description: X.intl.formatToPlainString(X.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, a.jsx)(t4, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.CUSTOM_APP_ICONS_CARD_ID,
                            title: X.intl.string(X.t["GU+wqh"]),
                            description: X.intl.string(X.t["1uPk1Z"]),
                            ctaText: X.intl.string(X.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nH,
                            categories: ["appearance"],
                        },
                        {
                            id: H.ENTRANCE_SOUNDS_CARD_ID,
                            title: X.intl.string(X.t.WJfCPi),
                            description: X.intl.string(X.t.liQKJR),
                            ctaText: X.intl.string(X.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: H.DISPLAY_NAME_STYLES_CARD_ID,
                            title: X.intl.string(X.t.OLtTrt),
                            description: X.intl.string(X.t["di/pXR"]),
                            onCtaClick: t ? h : f,
                            ctaText: X.intl.string(X.t.jVcuVY),
                            primaryAsset: nB,
                            categories: ["appearance"],
                        },
                        {
                            id: H.CUSTOM_SOUNDS_CARD_ID,
                            title: X.intl.string(X.t["Cu/oFd"]),
                            description: X.intl.string(X.t.czj2aa),
                            primaryAsset: (0, a.jsx)(t5, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: H.SPECIAL_STICKERS_CARD_ID,
                            title: X.intl.string(X.t.MQoVeb),
                            description: X.intl.string(X.t.HGCLZX),
                            primaryAsset: (0, a.jsx)("div", {
                                className: nF.Uc,
                                children: (0, a.jsx)(t7, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: H.SUPER_REACTIONS_CARD_ID,
                            title: X.intl.string(X.t.qERvAA),
                            description: X.intl.string(X.t.WkUWzx),
                            primaryAsset: (0, a.jsx)(t8, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: H.VIDEO_BACKGROUNDS_CARD_ID,
                            title: X.intl.string(X.t.ssVDYQ),
                            description: X.intl.string(X.t.aUSRMa),
                            primaryAsset: (0, na.M)(e) ? nK : n$,
                            categories: ["upgrades"],
                        },
                        {
                            id: H.EARLY_ACCESS_CARD_ID,
                            title: X.intl.string(X.t["g/KRY6"]),
                            description: X.intl.string(X.t.JzAmJc),
                            primaryAsset: (0, a.jsx)(t9, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: H.BADGE_CARD_ID,
                            title: X.intl.string(X.t.Bn3CtB),
                            description: X.intl.string(X.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, a.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, a.jsx)(nn, { color: ne.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: H.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: X.intl.string(X.t["MTD+7w"]),
                            description: X.intl.string(X.t.Bhs0s6),
                            ctaText: X.intl.string(X.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, a.jsx)(ni, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: H.PERMADECOS_CARD_ID,
                            title: X.intl.string(X.t.L14NZN),
                            description: X.intl.string(X.t.eCZkAI),
                            primaryAsset: (0, a.jsx)(ns, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, s, l, u, c, d, _, f, h, t],
                );
            return (0, o.useMemo)(() => A.filter((e) => null != e && !E.includes(e.id)), [A, E]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [r, s] = (0, o.useState)(i?.categories[0] ?? nz.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => n.filter((e) => null != e && e.categories.includes(r)), [n, r]);
    return (0, a.jsxs)("div", {
        className: nX.uW,
        children: [
            (0, a.jsx)(L.D, { variant: "display-sm", className: nX.R_, children: X.intl.string(X.t["Uh3+CA"]) }),
            (0, a.jsx)(tQ.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: s,
                className: nX.Lq,
                "aria-label": X.intl.string(X.t["Uh3+CA"]),
                children: nq.map((e) =>
                    (0, a.jsx)(tQ.V.Item, { id: e.id, className: nX.IC, children: e.label() }, e.id),
                ),
            }),
            (0, a.jsx)(
                tJ.A,
                {
                    gap: 20,
                    className: nX.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, a.jsx)(
                                ee.S,
                                { ...e, glowing: t === e.id, containerClassName: nX.Ui, onFocus: nZ },
                                e.id,
                            );
                    }),
                },
                r,
            ),
        ],
    });
}
function nJ(e) {
    let { glowingPerkId: t = null } = e,
        n = nY();
    return (0, a.jsx)(es, {
        sectionClassName: er.uW,
        heading: (0, a.jsx)(L.D, { variant: "display-sm", className: er.R_, children: X.intl.string(X.t.Aw5DRm) }),
        grid: (0, a.jsx)(a.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, a.jsx)(
                    ee.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(er.Nr, { [er.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var n0 = n(994763),
    n1 = n(946062),
    n2 = n(79119);
let n3 = "section",
    n6 = "perk",
    n4 = (e) => {
        let { userId: t } = e,
            n = (0, R.ds)(),
            i = (0, c.zy)();
        o.useEffect(() => {
            E.h.wait(async () => {
                let e = [(0, T.Ay)()];
                null != t && e.push((0, N.A)(t)), await Promise.all(e);
            });
        }, [t]),
            o.useEffect(() => {
                F(!0);
            }, []),
            (0, b.j)(),
            (0, I.P)(A.b);
        let r = o.useRef(null),
            s = o.useRef(null),
            l = (0, d.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
            { isReady: L, programReward: w } = (0, S.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: M,
                glowingSectionId: P,
                glowingPerkId: x,
                scrollBlock: k,
                scrollInline: U,
            } = o.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get(n6),
                    n = e.get(n3);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        (0, n0.z)(M ?? "", null != M, k, U);
        let [G, F] = o.useState(!1),
            V = (0, O.p)(),
            B = o.useRef(null),
            [H, j] = o.useState(!1),
            Y = null != V && null != l && l.status === $.Dmq.CANCELED,
            W = (0, D.iU)(z.gD.PREMIUM_MONTH_TIER_2, V, l),
            K = !H && Y,
            { analyticsLocations: q } = (0, g.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [Z, Q] = o.useState(!1);
        return null != (0, d.bG)([y.A], () => (null != t ? y.A.getUserProfile(t) : null)) && (L || null != w)
            ? (0, a.jsxs)(f.Gt, {
                  className: n1.xW,
                  ref: r,
                  children: [
                      (0, a.jsx)(p.h, {
                          color: "nitro-pink",
                          className: u()(n1.kL, n1.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, a.jsxs)(g.f5, {
                              value: q,
                              children: [
                                  (0, a.jsx)(_.L, {
                                      innerRef: B,
                                      onChange: (e) => j(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, a.jsx)(tK, {
                                          buttonVisibilityRef: B,
                                          className: n1.v1,
                                          userDiscountOffer: V,
                                          discountedPrice: W,
                                      }),
                                  }),
                                  (0, a.jsx)(em, { glowingPerkId: x, glowingSectionId: P }),
                                  (0, a.jsx)(nJ, { glowingPerkId: x }),
                                  (0, a.jsx)(nQ, { glowingPerkId: x }),
                                  (0, a.jsx)(eI, {
                                      className: n1.Zy,
                                      location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: $.liQ.NITRO_HOME, section: $.JJy.GIFT_BANNER },
                                  }),
                                  (0, a.jsx)("div", { className: n1.hz }),
                                  (0, a.jsx)(_.L, {
                                      innerRef: s,
                                      onChange: (e) => {
                                          e &&
                                              !Z &&
                                              (C.default.track($.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: q,
                                              }),
                                              Q(!0));
                                      },
                                      children: (0, a.jsx)("div", { ref: s, className: n1._Z }),
                                  }),
                                  (0, a.jsx)("img", {
                                      src: n2,
                                      className: n1.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: X.intl.string(X.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      Y &&
                          null != W &&
                          (0, a.jsx)(tZ, {
                              isVisible: K && G,
                              premiumSubscription: l,
                              churnDiscountOffer: V,
                              discountedPrice: W,
                          }),
                  ],
              })
            : (0, a.jsx)("div", { className: u()(n1.kL, n1.Lq), children: (0, a.jsx)(h.y, {}) });
    };
