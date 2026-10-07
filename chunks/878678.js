i.d(t, { Zt: () => eX, K4: () => e1 });
var s = i(477900),
    n = i(582128),
    r = i(17928),
    a = i(444927),
    l = i(793574),
    o = i(688810),
    c = i(361158),
    d = i(71393),
    u = i(287809),
    m = i(174459),
    g = i(625494),
    T = i(269115),
    E = i(559106),
    _ = i(939249),
    p = i(789645),
    h = i(689175),
    f = i(498480),
    A = i(831617),
    x = i(475669),
    S = i(645619),
    I = i(877624),
    R = i(406810),
    v = i(834730),
    N = i(28863),
    j = i(549996),
    b = i(807098),
    C = i(637706),
    G = i(788883),
    y = i(7667),
    P = i(990854);
function M() {
    let e = (0, j.c)(I.C.GUILD_BOOST_MARKETING_PAGE_BANNER),
        t =
            null != e && "guildBoostMarketingPageBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostMarketingPageBanner
                : null,
        i = (0, b.T)(t?.asset),
        { countdownText: n, terms: r } = (0, y.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let a = (0, C.C)(t.helpArticle, ""),
        l = [t.body, r].filter((e) => "" !== e).join(" ");
    return (0, s.jsxs)("div", {
        className: P.kL,
        children: [
            (0, s.jsx)(G.A, {
                componentType: I.C.GUILD_BOOST_MARKETING_PAGE_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != i && "" !== i && (0, s.jsx)("img", { src: i, className: P.LY, alt: "" }),
            (0, s.jsxs)("div", {
                className: P.er,
                children: [
                    null != n &&
                        (0, s.jsxs)("div", {
                            className: P.qW,
                            children: [
                                (0, s.jsx)(R.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: P.y,
                                }),
                                (0, s.jsx)(v.E, { variant: "text-xs/semibold", color: "text-default", children: n }),
                            ],
                        }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(v.E, { variant: "text-md/semibold", color: "text-default", children: t.header }),
                            (0, s.jsxs)(v.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [
                                    l,
                                    null != a &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                "" !== l && " ",
                                                (0, s.jsx)(N.Anchor, {
                                                    className: P.nf,
                                                    href: a.url,
                                                    children: a.linkText,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var V = i(333722),
    U = i(503698),
    O = i.n(U),
    L = i(297264),
    D = i(104510),
    k = i(661531),
    w = i(821609),
    B = i(597770),
    z = i(548118),
    F = i(75678),
    Q = i(864310),
    H = i(338548),
    W = i(178368),
    K = i(927578),
    Y = i(987144),
    q = i(652215),
    J = i(202541),
    Z = i(375708),
    $ = i(673555);
let X = function (e) {
    let { className: t, closeLayer: i, guild: a, onCtaVisibilityChange: l } = e,
        c = n.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([W.A], () => W.A.boostSlots),
        g = d?.isPremiumGroupMember(),
        { analyticsLocations: E } = (0, o.Ay)(),
        [_, p] = n.useState(!1),
        h = n.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [m, a.id],
        ),
        f = (0, Q.A)(e.guild.id).total;
    async function A() {
        (p(!0),
            await (0, Y.g)({
                analyticsLocations: E,
                analyticsLocation: {
                    page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: q.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: q.ZSU.BUTTON_CTA,
                    objectType: q.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: i,
            }),
            p(!1));
    }
    return (0, s.jsxs)("div", {
        className: O()($.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: $.$R,
                children: [
                    (0, s.jsx)(z.Ay, { className: $.$f, guild: a, size: z.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: $.CR,
                        children: [
                            (0, s.jsx)(L.D, { className: $.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, s.jsxs)("div", {
                                className: $.SJ,
                                children: [
                                    (0, s.jsx)(D._, {
                                        color:
                                            f > 0 ? k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: O()($.Me, { [$.S3]: f > 0 }),
                                    }),
                                    (0, s.jsx)(v.E, {
                                        className: $.n,
                                        variant: "text-md/semibold",
                                        children: Z.intl.format(Z.t["pob/cL"], { subscriptions: f }),
                                    }),
                                ],
                            }),
                            h > 0
                                ? (0, s.jsx)(v.E, {
                                      className: $.EV,
                                      variant: "text-sm/normal",
                                      children: Z.intl.format(Z.t.Jeto2u, { numSubscriptions: h }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: $.mY,
                children: [
                    (0, s.jsx)("h1", { className: $.R_, children: Z.intl.string(Z.t.N4sqzL) }),
                    g ? (0, s.jsx)(H.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: $.Sq,
                        children: [
                            (0, s.jsx)(T.L, {
                                innerRef: c,
                                onChange: l,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: c,
                                    className: $.dp,
                                    children: (0, s.jsx)(w.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: D._,
                                        text: Z.intl.string(Z.t.gKmQ1G),
                                        onClick: A,
                                        loading: _,
                                        disabled: g,
                                    }),
                                }),
                            }),
                            K.Ay.hasFreeBoosts(d) || K.Ay.isPremium(d, J.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: B.GiftIcon,
                                      text: Z.intl.string(Z.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, F.A)({
                                              subscriptionTier: J.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: q.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: q.ZSU.BUTTON_ICON,
                                                  objectType: q.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(w.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: Z.intl.string(Z.t.Q43TvC),
                                      onClick: function () {
                                          (0, F.A)({
                                              initialPlanId: null,
                                              subscriptionTier: J.pe.TIER_2,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: q.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: q.ZSU.BUTTON_ICON,
                                                  objectType: q.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                      disabled: g,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ee = i(232122),
    et = i(366010),
    ei = i(736653),
    es = i(303136),
    en = i(676279),
    er = i(432528);
function ea(e) {
    let { className: t } = e,
        i = (0, ei.Ay)(),
        n = (0, et.q)(i),
        r = (0, en.TM)()
            ? n
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : n
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: er.YL }),
            (0, s.jsx)(
                es.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, s.jsx)("source", { src: r }),
                },
                r,
            ),
        ],
    });
}
function el(e) {
    let { alt: t, ariaLabel: i, ariaHidden: n, role: r, size: a = 64 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: a },
        src: "https://cdn.discordapp.com/assets/content/33e98755a49cf85d07b8189a0001926c17d91599d53662a39999329f5253254f.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function eo(e) {
    let { alt: t, ariaLabel: i, ariaHidden: n, role: r, size: a = 64 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: a },
        src: "https://cdn.discordapp.com/assets/content/3bc18204c2bf43975ded85a602c7816d032bc07cf9b1d5589e52404f9bc1d687.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function ec(e) {
    let { alt: t, ariaLabel: i, ariaHidden: n, role: r, size: a = 64 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: a },
        src: "https://cdn.discordapp.com/assets/content/cb869ee40a8ed5d6210e69a02cebbf03025be47006b310ec2564f74f6ad1dff8.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var ed = i(210273),
    eu = i(508155),
    em = i(25525),
    eg = i(381881);
function eT(e) {
    let { tier: t, isActive: i } = e,
        n = t === q.TVA.TIER_1,
        r = t === q.TVA.TIER_3,
        a = t === q.TVA.TIER_1 ? el : t === q.TVA.TIER_2 ? eo : ec;
    return (0, s.jsxs)("div", {
        className: eg.MY,
        children: [
            (0, s.jsx)("div", { className: O()(eg.hr, { [eg.ti]: i, [eg.YO]: !i, [eg.JQ]: n, [eg.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: O()(eg.Zj, {
                    [eg.jv]: i,
                    [eg.ip]: t === q.TVA.TIER_1,
                    [eg.p3]: t === q.TVA.TIER_2,
                    [eg.wF]: t === q.TVA.TIER_3,
                }),
                children: (0, s.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function eE(e) {
    let { guild: t, definition: i } = e,
        { tier: n, perks: r } = i,
        a = t.premiumTier >= n,
        l = q.M2T[n];
    return (0, s.jsxs)("div", {
        className: O()(eg.Nr, { [eg.Bm]: a, [eg.c]: !a }),
        children: [
            (0, s.jsx)(eT, { tier: n, isActive: a }),
            (0, s.jsxs)("div", {
                className: eg.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: eg.$h,
                        children: [
                            (0, s.jsx)(L.D, {
                                className: O()(eg.JJ, { [eg.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: Z.intl.string(
                                    n === q.TVA.TIER_1 ? Z.t.nzXtaS : n === q.TVA.TIER_2 ? Z.t["h33/uW"] : Z.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: eg.yC,
                                children: [
                                    (0, s.jsx)(D._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(v.E, {
                                        variant: "text-md/medium",
                                        children: Z.intl.format(Z.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eg.PJ,
                        children: [
                            r.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, ed.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: O()(eg.bK, { [eg.o]: !a }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: eg.kf,
                                                color: a ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(v.E, {
                                                variant: "text-md/medium",
                                                color: a ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, s.jsx)(v.E, {
                                className: eg.wx,
                                variant: "text-md/medium",
                                children: Z.intl.string(em.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: O()(eg.iE, i),
        children: eu.t.map((e) => (0, s.jsx)(eE, { guild: t, definition: e }, e.tier)),
    });
}
var ep = i(202091),
    eh = i(172218),
    ef = i(717421),
    eA = i(289704),
    ex = i(628284),
    eS = i(508770),
    eI = i(775602),
    eR = i(868652),
    ev = i(363487);
i(321073);
var eN = i(512750),
    ej = i(948134),
    eb = i(628049),
    eC = i(568065),
    eG = i(394107);
let ey =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var eP = i(383272);
let eM = new Set([...Array.from(eC.aH), ...Array.from(eC.m_), eN.FB]);
var eV = i(998418),
    eU = i(828162);
i(667532);
var eO = i(975571),
    eL = i(658937);
function eD(e) {
    let {
            guildId: t,
            activeStatus: i,
            title: a,
            description: c,
            cost: u,
            costDecorator: m,
            staticImageUrl: g,
            animatedImageUrl: T,
            powerup: E,
            badge: _,
            onClose: p,
        } = e,
        { analyticsLocations: h } = (0, o.Ay)(),
        f = i !== eC.b_.INACTIVE,
        A = (0, ev.A)(t),
        x = (0, r.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        S = n.useRef(null),
        [I, R] = n.useState(!1),
        [N, j] = n.useState(!1),
        [b, C] = n.useState(!1),
        G = N || b,
        y = n.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, Y.g)({
                    analyticsLocation: {
                        page: q.liQ.GUILD_POWERUPS_MARKETING,
                        section: q.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: h,
                    guild: e,
                });
        }, [t, h]),
        P = n.useCallback(() => {
            (p(), (0, eU.A)(t, l.A.GUILD_POWERUPS_MARKETING, E.skuId));
        }, [t, E.skuId, p]),
        M = { tension: 400, friction: 30 },
        V = (0, ef.z)({ scale: G ? 0.85 : 1, y: G ? -32 : 0, config: M }),
        U = (0, ef.z)({ scale: G ? 0.7 : 1, y: G ? -35 : 0, config: M }),
        B = (0, ef.z)({ y: G ? -32 : 0, config: M }),
        z = (0, ef.z)({ opacity: +!!G, transform: G ? "translateY(0)" : "translateY(16px)", config: M }),
        F = n.useCallback((e) => {
            e && R(!0);
        }, []),
        Q = n.useCallback(() => {
            C(!0);
        }, []),
        H = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || C(!1);
        }, []),
        W = (0, eh.K)(F),
        K = E.skuId === eb.W5;
    return (0, s.jsxs)("div", {
        className: O()(eL.Nr, { [eL.fM]: I }),
        onFocus: Q,
        onBlur: H,
        onMouseEnter: () => j(!0),
        onMouseLeave: () => j(!1),
        children: [
            (0, s.jsx)("div", { className: eL.sL, ref: W }),
            (0, s.jsx)("div", {
                className: eL.kQ,
                children: K
                    ? (0, s.jsx)(ep.animated.div, {
                          className: eL.bm,
                          style: { transform: (0, ep.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(eA.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: S,
                              fit: "contain",
                              className: eL.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(ep.animated.img, {
                          className: eL.bm,
                          src: G && null != T && "" !== T && !x ? T : g,
                          alt: "",
                          style: { transform: (0, ep.to)([V.scale, V.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(ep.animated.div, {
                style: { ...B, transform: B.y.to((e) => `translateY(${e}px)`) },
                className: eL.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eL.P_,
                        children: [
                            (0, s.jsx)(L.D, { className: eL.DD, variant: "heading-lg/semibold", children: a }),
                            (0, s.jsx)(v.E, { className: eL.h_, variant: "text-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eL.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eL.qS,
                                children: [
                                    (0, s.jsx)(D._, { size: "xs", color: k.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(v.E, {
                                        className: eL.Vv,
                                        variant: "text-sm/semibold",
                                        children: Z.intl.formatToPlainString(
                                            null != m ? eG.default["G/aTXi"] : eG.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            f &&
                                (0, s.jsxs)("div", {
                                    className: O()(eL.qS, eL.nt),
                                    children: [
                                        (0, s.jsx)(ex.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(v.E, {
                                            className: eL.nt,
                                            variant: "text-sm/semibold",
                                            children: Z.intl.string(Z.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(ep.animated.div, {
                style: z,
                className: eL.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eL.x6,
                        children: (0, s.jsx)(w.$, {
                            variant: "primary",
                            text: Z.intl.string(Z.t.oPAx73),
                            onClick: y,
                            fullWidth: !0,
                        }),
                    }),
                    A &&
                        (0, s.jsx)("div", {
                            className: eL.x6,
                            children: (0, s.jsx)(w.$, {
                                variant: "secondary",
                                text: Z.intl.string(Z.t.GoCQxU),
                                onClick: P,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === _ &&
                (0, s.jsx)("div", { className: eL.AP, children: (0, s.jsx)(eS.E, { type: "new", variant: "brand" }) }),
            "beta" === _ &&
                (0, s.jsx)("div", { className: eL.AP, children: (0, s.jsx)(eS.E, { type: "beta", variant: "brand" }) }),
        ],
    });
}
function ek(e) {
    let { guildId: t, powerup: i, costDecorator: n, badge: r, onClose: a } = e,
        l = (0, eV.Ay)(t, i).type;
    return (0, s.jsx)(eD, {
        guildId: t,
        activeStatus: l,
        title: i.title,
        description: i.description,
        cost: i.cost,
        staticImageUrl: i.staticImageUrl,
        animatedImageUrl: i.animatedImageUrl,
        powerup: i,
        costDecorator: n,
        badge: r,
        onClose: a,
    });
}
let ew = new Map([[eb.W5, "+"]]);
function eB(e) {
    var t;
    let i,
        a,
        l,
        o,
        { guild: c, onClose: d, ref: u } = e;
    n.useEffect(() => {
        (S.A.shouldFetchCatalogForGuild(c.id) && (0, eR.AK)(c.id),
            S.A.shouldFetchPowerupsForGuild(c.id) && (0, eR.Xd)(c.id));
    }, [c.id]);
    let m = (function (e) {
        let t = [...e].reverse(),
            i = t.findIndex((e) => e.skuId === eN.d0);
        if (i > 0) {
            let [e] = t.splice(i, 1);
            t.unshift(e);
        }
        let s = t.findIndex((e) => e.skuId === eb.W5);
        if (-1 !== s && s !== t.length - 1) {
            let [e] = t.splice(s, 1);
            t.push(e);
        }
        return t;
    })(
        ((t = c.id),
        (i = (0, r.bG)([S.A], () => S.A.getStateForGuild(t)?.powerupCatalog?.[eC.o9.PERK])),
        (a = (function (e) {
            let t = (0, A.C$)(e, "useGameServerPerk"),
                i = (0, r.bG)([x.A], () => x.A.getLowestGameCostForGuild(e)),
                { gameName: s, gameName2: a } = (0, ej.A)();
            return n.useMemo(
                () =>
                    t && null != i
                        ? {
                              skuId: eb.W5,
                              title: Z.intl.string(eG.default["B3OfL/"]),
                              description: Z.intl.format(eG.default["+UqyGU"], { gameName: s, gameName2: a }),
                              cost: i,
                              dependencies: [],
                              type: eC.o9.PERK,
                              animatedImageUrl: ey,
                              staticImageUrl: ey,
                          }
                        : null,
                [t, i, s, a],
            );
        })(t)),
        (l = (0, eP.lY)(t, "useMarketablePowerupPerks")),
        (o = n.useMemo(() => {
            let e = new Set(eM);
            return (l && e.add(eN.d0), e);
        }, [l])),
        n.useMemo(() => {
            let e = [...(i ?? [])];
            return (null != a && e.push(a), e.filter((e) => !o.has(e.skuId)));
        }, [i, a, o]) ?? []),
    ).slice(0, 6);
    return 0 === m.length
        ? null
        : (0, s.jsxs)("div", {
              ref: u,
              className: eL.iE,
              children: [
                  (0, s.jsxs)("div", {
                      className: eL.ND,
                      children: [
                          (0, s.jsx)(L.D, {
                              className: eL.R_,
                              variant: "heading-xxl/semibold",
                              children: Z.intl.string(em.default.wjI18Q),
                          }),
                          (0, s.jsx)(v.E, {
                              className: eL.fV,
                              variant: "text-md/medium",
                              children: Z.intl.format(em.default.S562fn, {
                                  helpDeskArticle: eO.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: eL.vY,
                      children: m.map((e) =>
                          (0, s.jsx)(
                              ek,
                              {
                                  guildId: c.id,
                                  powerup: e,
                                  costDecorator: ew.get(e.skuId),
                                  badge: eC.ys[e.skuId],
                                  onClose: d,
                              },
                              `perk-card-${e.skuId}`,
                          ),
                      ),
                  }),
              ],
          });
}
eB.displayName = "GuildBoostingMarketingPerkCards";
var ez = i(527113),
    eF = i(862482),
    eQ = i(944304),
    eH = i(430815);
let eW = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        a = n.useRef(null),
        l = (0, ef.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(ep.animated.div, {
        className: eH.iE,
        style: l,
        children: (0, s.jsx)("div", {
            ref: a,
            className: eH.iJ,
            children: (0, s.jsxs)(E.xp, {
                containerRef: a,
                children: [
                    (0, s.jsxs)("div", {
                        className: eH.OA,
                        children: [
                            (0, s.jsx)(z.Ay, { className: eH.$f, guild: i, size: z.Ay.Sizes.SMALL }),
                            (0, s.jsx)(v.E, { className: eH.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eQ.A, {
                        className: eH.lI,
                        guild: i,
                        analyticsLocation: {
                            page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: q.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: q.ZSU.BUTTON_CTA,
                            objectType: q.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !r,
                        size: eF.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eK = i(192308),
    eY = i(65154),
    eq = i(149881),
    eJ = i(519636);
function eZ(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: a, sourceAnalyticsLocations: l } = e,
        o = n.useCallback(() => {
            (0, eK.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("734818"),
                    i.e("216870"),
                    i.e("601031"),
                    i.e("809915"),
                    i.e("621624"),
                    i.e("592731"),
                    i.e("53374"),
                    i.e("482815"),
                    i.e("170653"),
                    i.e("784103"),
                    i.e("198323"),
                    i.e("817852"),
                    i.e("643612"),
                    i.e("334127"),
                    i.e("710638"),
                    i.e("912773"),
                    i.e("585810"),
                ]).then(i.bind(i, 872233));
                return (i) =>
                    (0, s.jsx)(e, {
                        ...i,
                        guildId: t.id,
                        analyticsLocation: r,
                        videoPlacement: a,
                        sourceAnalyticsLocations: l,
                    });
            });
        }, [r, t.id, l, a]);
    return (0, s.jsxs)(_.D, {
        className: eq.kL,
        onClick: o,
        "aria-label": Z.intl.string(em.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eq.xn, src: eJ.A }),
            (0, s.jsx)("div", { className: eq.Lw }),
            (0, s.jsx)("div", {
                className: eq.Rr,
                children: (0, s.jsx)(eY.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function e$(e) {
    let { analyticsLocation: t, guild: i, onClose: a, scrollToPowerupCards: l } = e,
        [c, d] = n.useState(!0),
        u = n.useRef(!1),
        { analyticsLocations: g } = (0, o.Ay)(),
        I = n.useRef(null),
        R = n.useRef(null),
        v = n.useRef(null),
        N = n.useRef(null),
        j = n.useCallback(() => {
            a?.();
        }, [a]),
        b = n.useCallback(() => {
            null != v.current &&
                null != R.current &&
                R.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        C = n.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (m.default.track(q.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: q.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: g,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: i.id,
                    }),
                    (u.current = !0));
            },
            [t, g, i.id],
        );
    n.useEffect(() => {
        m.default.track(q.HAw.OPEN_MODAL, {
            type: q.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: g,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, g]);
    let G = (0, A.C$)(i.id, "GuildBoostingMarketingRefresh"),
        y = (0, r.bG)([x.A], () => x.A.shouldFetchCatalogForGuild(i.id));
    n.useEffect(() => {
        G && y && (0, f.z9)(i.id);
    }, [i.id, G, y]);
    let P = (0, r.bG)([S.A], () => S.A.hasFetchedPowerupCatalog(i.id));
    return (
        n.useEffect(() => {
            if (l && P) {
                let e = setTimeout(() => {
                    b();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [l, b, P]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != a &&
                    (0, s.jsx)("div", {
                        ref: N,
                        className: er.Yk,
                        children: (0, s.jsx)(E.xp, {
                            containerRef: N,
                            children: (0, s.jsx)(_.D, {
                                className: er.b,
                                onClick: j,
                                "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                children: (0, s.jsx)(p.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(h.Gt, {
                    ref: R,
                    className: er.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: er.wx,
                            children: [
                                (0, s.jsx)(ea, { className: er.y2 }),
                                (0, s.jsxs)("div", {
                                    className: er.AZ,
                                    children: [
                                        (0, s.jsx)(X, {
                                            guild: i,
                                            closeLayer: j,
                                            onCtaVisibilityChange: d,
                                            className: er.Oh,
                                        }),
                                        (0, s.jsx)(M, {}),
                                        (0, s.jsx)(eZ, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: g,
                                        }),
                                        (0, s.jsx)(e_, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: er.uE,
                            children: (0, s.jsx)(eB, { ref: v, guild: e.guild, onClose: j }),
                        }),
                        (0, s.jsx)("div", {
                            className: er.o6,
                            children: (0, s.jsxs)("div", {
                                className: er.y$,
                                children: [
                                    (0, s.jsx)(ez.A, { className: er.Q, guild: i }),
                                    (0, s.jsx)(V.A, {}),
                                    (0, s.jsx)(ee.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(T.L, {
                            innerRef: I,
                            onChange: C,
                            children: (0, s.jsx)("div", { ref: I, className: er.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eW, { guild: i, isVisible: !c, closeLayer: j }),
            ],
        })
    );
}
let eX = "BoostedGuildPerksModalConnected";
function e0(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: g, scrollToPowerupCards: T } = e,
        E = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        _ = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        p = (0, a.A)(() => Date.now()),
        { analyticsLocations: h } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
        f = _?.id,
        A = n.useCallback(() => {
            (i(),
                null != f &&
                    m.default.track(q.HAw.MODAL_DISMISSED, {
                        type: q.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: h,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: f,
                        duration_open_ms: Date.now() - p,
                    }));
        }, [h, p, c.object, c.section, i, f]);
    return (n.useLayoutEffect(() => {
        g?.(A);
    }, [A, g]),
    null == E || null == _)
        ? null
        : (0, s.jsx)(o.f5, {
              value: h,
              children: (0, s.jsx)(e$, { analyticsLocation: c, onClose: A, guild: _, scrollToPowerupCards: T }),
          });
}
function e1(e) {
    let { guildId: t, location: i, scrollToPowerupCards: n } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == r.current && (r.current = a),
                (0, s.jsx)(e0, {
                    close: a,
                    guildId: t,
                    location: i,
                    registerDismissModalHandler: (e) => {
                        r.current = e;
                    },
                    scrollToPowerupCards: n,
                })
            );
        },
        {
            layerKey: eX,
            onEscape: () =>
                g._.hasSubscribers(q.jej.MODAL_CLOSE)
                    ? (g._.dispatch(q.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
