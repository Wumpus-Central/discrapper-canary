i.d(t, { Zt: () => e0, K4: () => e2 });
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
    M = i(7667),
    y = i(990854);
function P() {
    let e = (0, j.c)(I.C.GUILD_BOOST_MARKETING_PAGE_BANNER),
        t =
            null != e && "guildBoostMarketingPageBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostMarketingPageBanner
                : null,
        i = (0, b.T)(t?.asset),
        { countdownText: n, terms: r } = (0, M.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let a = (0, C.C)(t.helpArticle, ""),
        l = [t.body, r].filter((e) => "" !== e).join(" ");
    return (0, s.jsxs)("div", {
        className: y.kL,
        children: [
            (0, s.jsx)(G.A, {
                componentType: I.C.GUILD_BOOST_MARKETING_PAGE_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != i && "" !== i && (0, s.jsx)("img", { src: i, className: y.LY, alt: "" }),
            (0, s.jsxs)("div", {
                className: y.er,
                children: [
                    null != n &&
                        (0, s.jsxs)("div", {
                            className: y.qW,
                            children: [
                                (0, s.jsx)(R.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: y.y,
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
                                                    className: y.nf,
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
    H = i(864310),
    Q = i(338548),
    W = i(178368),
    K = i(158045),
    Y = i(987144),
    q = i(652215),
    J = i(202541),
    Z = i(660183),
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
        f = (0, H.A)(e.guild.id).total;
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
                    g ? (0, s.jsx)(Q.A, { alwaysWhite: !0 }) : null,
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
var el = i(62617);
function eo(e) {
    let { alt: t, ariaLabel: i, ariaHidden: r, role: a, size: l = 64 } = e,
        o = n.useMemo(() => (0, el.H)({ width: l, height: l, intrinsicWidth: 64, intrinsicHeight: 64 }), [l]);
    return (0, s.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/33e98755a49cf85d07b8189a0001926c17d91599d53662a39999329f5253254f.svg",
        className: (0, el.Z)(),
        alt: t,
        "aria-label": i,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
function ec(e) {
    let { alt: t, ariaLabel: i, ariaHidden: r, role: a, size: l = 64 } = e,
        o = n.useMemo(() => (0, el.H)({ width: l, height: l, intrinsicWidth: 64, intrinsicHeight: 64 }), [l]);
    return (0, s.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/3bc18204c2bf43975ded85a602c7816d032bc07cf9b1d5589e52404f9bc1d687.svg",
        className: (0, el.Z)(),
        alt: t,
        "aria-label": i,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
function ed(e) {
    let { alt: t, ariaLabel: i, ariaHidden: r, role: a, size: l = 64 } = e,
        o = n.useMemo(() => (0, el.H)({ width: l, height: l, intrinsicWidth: 64, intrinsicHeight: 64 }), [l]);
    return (0, s.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/cb869ee40a8ed5d6210e69a02cebbf03025be47006b310ec2564f74f6ad1dff8.svg",
        className: (0, el.Z)(),
        alt: t,
        "aria-label": i,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
var eu = i(210273),
    em = i(508155),
    eg = i(25525),
    eT = i(381881);
function eE(e) {
    let { tier: t, isActive: i } = e,
        n = t === q.TVA.TIER_1,
        r = t === q.TVA.TIER_3,
        a = t === q.TVA.TIER_1 ? eo : t === q.TVA.TIER_2 ? ec : ed;
    return (0, s.jsxs)("div", {
        className: eT.MY,
        children: [
            (0, s.jsx)("div", { className: O()(eT.hr, { [eT.ti]: i, [eT.YO]: !i, [eT.JQ]: n, [eT.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: O()(eT.Zj, {
                    [eT.jv]: i,
                    [eT.ip]: t === q.TVA.TIER_1,
                    [eT.p3]: t === q.TVA.TIER_2,
                    [eT.wF]: t === q.TVA.TIER_3,
                }),
                children: (0, s.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function e_(e) {
    let { guild: t, definition: i } = e,
        { tier: n, perks: r } = i,
        a = t.premiumTier >= n,
        l = q.M2T[n];
    return (0, s.jsxs)("div", {
        className: O()(eT.Nr, { [eT.Bm]: a, [eT.c]: !a }),
        children: [
            (0, s.jsx)(eE, { tier: n, isActive: a }),
            (0, s.jsxs)("div", {
                className: eT.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: eT.$h,
                        children: [
                            (0, s.jsx)(L.D, {
                                className: O()(eT.JJ, { [eT.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: Z.intl.string(
                                    n === q.TVA.TIER_1 ? Z.t.nzXtaS : n === q.TVA.TIER_2 ? Z.t["h33/uW"] : Z.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: eT.yC,
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
                        className: eT.PJ,
                        children: [
                            r.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, eu.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: O()(eT.bK, { [eT.o]: !a }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: eT.kf,
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
                                className: eT.wx,
                                variant: "text-md/medium",
                                children: Z.intl.string(eg.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: O()(eT.iE, i),
        children: em.t.map((e) => (0, s.jsx)(e_, { guild: t, definition: e }, e.tier)),
    });
}
var eh = i(202091),
    ef = i(172218),
    eA = i(717421),
    ex = i(289704),
    eS = i(628284),
    eI = i(62010),
    eR = i(775602),
    ev = i(868652),
    eN = i(363487);
i(321073);
var ej = i(512750),
    eb = i(948134),
    eC = i(628049),
    eG = i(568065),
    eM = i(394107);
let ey =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var eP = i(383272);
let eV = new Set([...Array.from(eG.aH), ...Array.from(eG.m_), ej.FB]);
var eU = i(998418),
    eO = i(828162);
i(667532);
var eL = i(975571),
    eD = i(658937);
function ek(e) {
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
        f = i !== eG.b_.INACTIVE,
        A = (0, eN.A)(t),
        x = (0, r.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        S = n.useRef(null),
        [I, R] = n.useState(!1),
        [N, j] = n.useState(!1),
        [b, C] = n.useState(!1),
        G = N || b,
        M = n.useCallback(() => {
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
        y = n.useCallback(() => {
            (p(), (0, eO.A)(t, l.A.GUILD_POWERUPS_MARKETING, E.skuId));
        }, [t, E.skuId, p]),
        P = { tension: 400, friction: 30 },
        V = (0, eA.z)({ scale: G ? 0.85 : 1, y: G ? -32 : 0, config: P }),
        U = (0, eA.z)({ scale: G ? 0.7 : 1, y: G ? -35 : 0, config: P }),
        B = (0, eA.z)({ y: G ? -32 : 0, config: P }),
        z = (0, eA.z)({ opacity: +!!G, transform: G ? "translateY(0)" : "translateY(16px)", config: P }),
        F = n.useCallback((e) => {
            e && R(!0);
        }, []),
        H = n.useCallback(() => {
            C(!0);
        }, []),
        Q = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || C(!1);
        }, []),
        W = (0, ef.K)(F),
        K = E.skuId === eC.W5;
    return (0, s.jsxs)("div", {
        className: O()(eD.Nr, { [eD.fM]: I }),
        onFocus: H,
        onBlur: Q,
        onMouseEnter: () => j(!0),
        onMouseLeave: () => j(!1),
        children: [
            (0, s.jsx)("div", { className: eD.sL, ref: W }),
            (0, s.jsx)("div", {
                className: eD.kQ,
                children: K
                    ? (0, s.jsx)(eh.animated.div, {
                          className: eD.bm,
                          style: { transform: (0, eh.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(ex.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: S,
                              fit: "contain",
                              className: eD.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(eh.animated.img, {
                          className: eD.bm,
                          src: G && null != T && "" !== T && !x ? T : g,
                          alt: "",
                          style: { transform: (0, eh.to)([V.scale, V.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(eh.animated.div, {
                style: { ...B, transform: B.y.to((e) => `translateY(${e}px)`) },
                className: eD.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eD.P_,
                        children: [
                            (0, s.jsx)(L.D, { className: eD.DD, variant: "heading-lg/semibold", children: a }),
                            (0, s.jsx)(v.E, { className: eD.h_, variant: "text-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eD.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eD.qS,
                                children: [
                                    (0, s.jsx)(D._, { size: "xs", color: k.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(v.E, {
                                        className: eD.Vv,
                                        variant: "text-sm/semibold",
                                        children: Z.intl.formatToPlainString(
                                            null != m ? eM.default["G/aTXi"] : eM.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            f &&
                                (0, s.jsxs)("div", {
                                    className: O()(eD.qS, eD.nt),
                                    children: [
                                        (0, s.jsx)(eS.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(v.E, {
                                            className: eD.nt,
                                            variant: "text-sm/semibold",
                                            children: Z.intl.string(Z.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(eh.animated.div, {
                style: z,
                className: eD.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eD.x6,
                        children: (0, s.jsx)(w.$, {
                            variant: "primary",
                            text: Z.intl.string(Z.t.oPAx73),
                            onClick: M,
                            fullWidth: !0,
                        }),
                    }),
                    A &&
                        (0, s.jsx)("div", {
                            className: eD.x6,
                            children: (0, s.jsx)(w.$, {
                                variant: "secondary",
                                text: Z.intl.string(Z.t.GoCQxU),
                                onClick: y,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === _ &&
                (0, s.jsx)("div", { className: eD.AP, children: (0, s.jsx)(eI.E, { type: "new", variant: "brand" }) }),
            "beta" === _ &&
                (0, s.jsx)("div", { className: eD.AP, children: (0, s.jsx)(eI.E, { type: "beta", variant: "brand" }) }),
        ],
    });
}
function ew(e) {
    let { guildId: t, powerup: i, costDecorator: n, badge: r, onClose: a } = e,
        l = (0, eU.Ay)(t, i).type;
    return (0, s.jsx)(ek, {
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
let eB = new Map([[eC.W5, "+"]]);
function ez(e) {
    var t;
    let i,
        a,
        l,
        o,
        { guild: c, onClose: d, ref: u } = e;
    n.useEffect(() => {
        (S.A.shouldFetchCatalogForGuild(c.id) && (0, ev.AK)(c.id),
            S.A.shouldFetchPowerupsForGuild(c.id) && (0, ev.Xd)(c.id));
    }, [c.id]);
    let m = (function (e) {
        let t = [...e].reverse(),
            i = t.findIndex((e) => e.skuId === ej.d0);
        if (i > 0) {
            let [e] = t.splice(i, 1);
            t.unshift(e);
        }
        let s = t.findIndex((e) => e.skuId === eC.W5);
        if (-1 !== s && s !== t.length - 1) {
            let [e] = t.splice(s, 1);
            t.push(e);
        }
        return t;
    })(
        ((t = c.id),
        (i = (0, r.bG)([S.A], () => S.A.getStateForGuild(t)?.powerupCatalog?.[eG.o9.PERK])),
        (a = (function (e) {
            let t = (0, A.C$)(e, "useGameServerPerk"),
                i = (0, r.bG)([x.A], () => x.A.getLowestGameCostForGuild(e)),
                { gameName: s, gameName2: a } = (0, eb.A)();
            return n.useMemo(
                () =>
                    t && null != i
                        ? {
                              skuId: eC.W5,
                              title: Z.intl.string(eM.default["B3OfL/"]),
                              description: Z.intl.format(eM.default["+UqyGU"], { gameName: s, gameName2: a }),
                              cost: i,
                              dependencies: [],
                              type: eG.o9.PERK,
                              animatedImageUrl: ey,
                              staticImageUrl: ey,
                          }
                        : null,
                [t, i, s, a],
            );
        })(t)),
        (l = (0, eP.lY)(t, "useMarketablePowerupPerks")),
        (o = n.useMemo(() => {
            let e = new Set(eV);
            return (l && e.add(ej.d0), e);
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
              className: eD.iE,
              children: [
                  (0, s.jsxs)("div", {
                      className: eD.ND,
                      children: [
                          (0, s.jsx)(L.D, {
                              className: eD.R_,
                              variant: "heading-xxl/semibold",
                              children: Z.intl.string(eg.default.wjI18Q),
                          }),
                          (0, s.jsx)(v.E, {
                              className: eD.fV,
                              variant: "text-md/medium",
                              children: Z.intl.format(eg.default.S562fn, {
                                  helpDeskArticle: eL.A.getArticleURL(q.MVz.GUILD_BOOSTING_FAQ),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: eD.vY,
                      children: m.map((e) =>
                          (0, s.jsx)(
                              ew,
                              {
                                  guildId: c.id,
                                  powerup: e,
                                  costDecorator: eB.get(e.skuId),
                                  badge: eG.ys[e.skuId],
                                  onClose: d,
                              },
                              `perk-card-${e.skuId}`,
                          ),
                      ),
                  }),
              ],
          });
}
ez.displayName = "GuildBoostingMarketingPerkCards";
var eF = i(527113),
    eH = i(862482),
    eQ = i(944304),
    eW = i(430815);
let eK = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        a = n.useRef(null),
        l = (0, eA.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(eh.animated.div, {
        className: eW.iE,
        style: l,
        children: (0, s.jsx)("div", {
            ref: a,
            className: eW.iJ,
            children: (0, s.jsxs)(E.xp, {
                containerRef: a,
                children: [
                    (0, s.jsxs)("div", {
                        className: eW.OA,
                        children: [
                            (0, s.jsx)(z.Ay, { className: eW.$f, guild: i, size: z.Ay.Sizes.SMALL }),
                            (0, s.jsx)(v.E, { className: eW.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eQ.A, {
                        className: eW.lI,
                        guild: i,
                        analyticsLocation: {
                            page: q.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: q.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: q.ZSU.BUTTON_CTA,
                            objectType: q.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !r,
                        size: eH.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eY = i(192308),
    eq = i(65154),
    eJ = i(149881),
    eZ = i(519636);
function e$(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: a, sourceAnalyticsLocations: l } = e,
        o = n.useCallback(() => {
            (0, eY.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("734818"),
                    i.e("216870"),
                    i.e("601031"),
                    i.e("809915"),
                    i.e("398793"),
                    i.e("621624"),
                    i.e("592731"),
                    i.e("53374"),
                    i.e("482815"),
                    i.e("170653"),
                    i.e("256616"),
                    i.e("784103"),
                    i.e("643612"),
                    i.e("817852"),
                    i.e("133179"),
                    i.e("614784"),
                    i.e("334127"),
                    i.e("912773"),
                    i.e("710638"),
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
        className: eJ.kL,
        onClick: o,
        "aria-label": Z.intl.string(eg.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eJ.xn, src: eZ.A }),
            (0, s.jsx)("div", { className: eJ.Lw }),
            (0, s.jsx)("div", {
                className: eJ.Rr,
                children: (0, s.jsx)(eq.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eX(e) {
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
        M = (0, r.bG)([x.A], () => x.A.shouldFetchCatalogForGuild(i.id));
    n.useEffect(() => {
        G && M && (0, f.z9)(i.id);
    }, [i.id, G, M]);
    let y = (0, r.bG)([S.A], () => S.A.hasFetchedPowerupCatalog(i.id));
    return (
        n.useEffect(() => {
            if (l && y) {
                let e = setTimeout(() => {
                    b();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [l, b, y]),
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
                                        (0, s.jsx)(P, {}),
                                        (0, s.jsx)(e$, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: g,
                                        }),
                                        (0, s.jsx)(ep, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: er.uE,
                            children: (0, s.jsx)(ez, { ref: v, guild: e.guild, onClose: j }),
                        }),
                        (0, s.jsx)("div", {
                            className: er.o6,
                            children: (0, s.jsxs)("div", {
                                className: er.y$,
                                children: [
                                    (0, s.jsx)(eF.A, { className: er.Q, guild: i }),
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
                (0, s.jsx)(eK, { guild: i, isVisible: !c, closeLayer: j }),
            ],
        })
    );
}
let e0 = "BoostedGuildPerksModalConnected";
function e1(e) {
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
              children: (0, s.jsx)(eX, { analyticsLocation: c, onClose: A, guild: _, scrollToPowerupCards: T }),
          });
}
function e2(e) {
    let { guildId: t, location: i, scrollToPowerupCards: n } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == r.current && (r.current = a),
                (0, s.jsx)(e1, {
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
            layerKey: e0,
            onEscape: () =>
                g._.hasSubscribers(q.jej.MODAL_CLOSE)
                    ? (g._.dispatch(q.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
