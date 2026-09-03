i.d(t, { Zt: () => eX, K4: () => e1 });
var s = i(477900),
    n = i(582128),
    r = i(17928),
    l = i(444927),
    a = i(793574),
    o = i(688810),
    c = i(361158),
    d = i(71393),
    u = i(287809),
    m = i(174459),
    T = i(625494),
    g = i(269115),
    _ = i(259678),
    E = i(939249),
    h = i(789645),
    p = i(689175),
    A = i(498480),
    f = i(831617),
    I = i(475669),
    N = i(645619),
    R = i(877624),
    S = i(406810),
    v = i(834730),
    x = i(28863),
    b = i(549996),
    C = i(807098),
    j = i(637706),
    G = i(788883),
    M = i(7667),
    O = i(990854);
function P() {
    let e = (0, b.c)(R.C.GUILD_BOOST_MARKETING_PAGE_BANNER),
        t =
            null != e && "guildBoostMarketingPageBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostMarketingPageBanner
                : null,
        i = (0, C.T)(t?.asset),
        { countdownText: n, terms: r } = (0, M.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let l = (0, j.C)(t.helpArticle, ""),
        a = [t.body, r].filter((e) => "" !== e).join(" ");
    return (0, s.jsxs)("div", {
        className: O.kL,
        children: [
            (0, s.jsx)(G.A, {
                componentType: R.C.GUILD_BOOST_MARKETING_PAGE_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != i && "" !== i && (0, s.jsx)("img", { src: i, className: O.LY, alt: "" }),
            (0, s.jsxs)("div", {
                className: O.er,
                children: [
                    null != n &&
                        (0, s.jsxs)("div", {
                            className: O.qW,
                            children: [
                                (0, s.jsx)(S.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: O.y,
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
                                    a,
                                    null != l &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                "" !== a && " ",
                                                (0, s.jsx)(x.Anchor, {
                                                    className: O.nf,
                                                    href: l.url,
                                                    children: l.linkText,
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
var U = i(333722),
    y = i(503698),
    V = i.n(y),
    L = i(297264),
    D = i(104510),
    k = i(661531),
    B = i(821609),
    w = i(597770),
    F = i(548118),
    z = i(532794),
    H = i(56815),
    K = i(864310),
    W = i(338548),
    Q = i(178368),
    Y = i(158045),
    Z = i(987144),
    J = i(652215),
    q = i(202541),
    $ = i(375708),
    X = i(673555);
let ee = function (e) {
    let { className: t, closeLayer: i, guild: l, onCtaVisibilityChange: a } = e,
        c = n.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([Q.A], () => Q.A.boostSlots),
        T = d?.isPremiumGroupMember(),
        { analyticsLocations: _ } = (0, o.Ay)(),
        [E, h] = n.useState(!1),
        p = n.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === l.id;
                }).length,
            [m, l.id],
        ),
        A = (0, K.A)(e.guild.id).total;
    async function f() {
        h(!0),
            await (0, Z.g)({
                analyticsLocations: _,
                analyticsLocation: {
                    page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: J.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: J.ZSU.BUTTON_CTA,
                    objectType: J.AnalyticsObjectTypes.BUY,
                },
                guild: l,
                closeLayer: i,
            }),
            h(!1);
    }
    return (0, s.jsxs)("div", {
        className: V()(X.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: X.$R,
                children: [
                    (0, s.jsx)(F.Ay, { className: X.$f, guild: l, size: F.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: X.CR,
                        children: [
                            (0, s.jsx)(L.D, { className: X.J5, variant: "heading-lg/semibold", children: l.name }),
                            (0, s.jsxs)("div", {
                                className: X.SJ,
                                children: [
                                    (0, s.jsx)(D._, {
                                        color:
                                            A > 0 ? k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: V()(X.Me, { [X.S3]: A > 0 }),
                                    }),
                                    (0, s.jsx)(v.E, {
                                        className: X.n,
                                        variant: "text-md/semibold",
                                        children: $.intl.format($.t["pob/cL"], { subscriptions: A }),
                                    }),
                                ],
                            }),
                            p > 0
                                ? (0, s.jsx)(v.E, {
                                      className: X.EV,
                                      variant: "text-sm/normal",
                                      children: $.intl.format($.t.Jeto2u, { numSubscriptions: p }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: X.mY,
                children: [
                    (0, s.jsx)("h1", { className: X.R_, children: $.intl.string($.t.N4sqzL) }),
                    T ? (0, s.jsx)(W.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: X.Sq,
                        children: [
                            (0, s.jsx)(g.L, {
                                innerRef: c,
                                onChange: a,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: c,
                                    className: X.dp,
                                    children: (0, s.jsx)(B.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: D._,
                                        text: $.intl.string($.t.gKmQ1G),
                                        onClick: f,
                                        loading: E,
                                        disabled: T,
                                    }),
                                }),
                            }),
                            Y.Ay.hasFreeBoosts(d) || Y.Ay.isPremium(d, q.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(B.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: w.GiftIcon,
                                      text: $.intl.string($.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, z.A)({
                                              subscriptionTier: q.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: _,
                                              analyticsObject: {
                                                  page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: J.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: J.ZSU.BUTTON_ICON,
                                                  objectType: J.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                              ...(0, H.Dv)(q.pe.TIER_2, !0, "guild_boosting_marketing_cta_bar"),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(B.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: $.intl.string($.t.Q43TvC),
                                      onClick: function () {
                                          (0, z.A)({
                                              initialPlanId: null,
                                              subscriptionTier: q.pe.TIER_2,
                                              analyticsLocations: _,
                                              analyticsObject: {
                                                  page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: J.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: J.ZSU.BUTTON_ICON,
                                                  objectType: J.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                      disabled: T,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var et = i(232122),
    ei = i(366010),
    es = i(736653),
    en = i(303136),
    er = i(676279),
    el = i(432528);
function ea(e) {
    let { className: t } = e,
        i = (0, es.Ay)(),
        n = (0, ei.q)(i),
        r = (0, er.TM)()
            ? n
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : n
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: el.YL }),
            (0, s.jsx)(
                en.A,
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
function eo(e) {
    let { alt: t, ariaLabel: i, ariaHidden: n, role: r, size: l = 64 } = e;
    return (0, s.jsx)("img", {
        style: { width: l, height: l },
        src: "https://cdn.discordapp.com/assets/content/33e98755a49cf85d07b8189a0001926c17d91599d53662a39999329f5253254f.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function ec(e) {
    let { alt: t, ariaLabel: i, ariaHidden: n, role: r, size: l = 64 } = e;
    return (0, s.jsx)("img", {
        style: { width: l, height: l },
        src: "https://cdn.discordapp.com/assets/content/3bc18204c2bf43975ded85a602c7816d032bc07cf9b1d5589e52404f9bc1d687.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function ed(e) {
    let { alt: t, ariaLabel: i, ariaHidden: n, role: r, size: l = 64 } = e;
    return (0, s.jsx)("img", {
        style: { width: l, height: l },
        src: "https://cdn.discordapp.com/assets/content/cb869ee40a8ed5d6210e69a02cebbf03025be47006b310ec2564f74f6ad1dff8.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
var eu = i(210273),
    em = i(508155),
    eT = i(25525),
    eg = i(381881);
function e_(e) {
    let { tier: t, isActive: i } = e,
        n = t === J.TVA.TIER_1,
        r = t === J.TVA.TIER_3,
        l = t === J.TVA.TIER_1 ? eo : t === J.TVA.TIER_2 ? ec : ed;
    return (0, s.jsxs)("div", {
        className: eg.MY,
        children: [
            (0, s.jsx)("div", { className: V()(eg.hr, { [eg.ti]: i, [eg.YO]: !i, [eg.JQ]: n, [eg.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: V()(eg.Zj, {
                    [eg.jv]: i,
                    [eg.ip]: t === J.TVA.TIER_1,
                    [eg.p3]: t === J.TVA.TIER_2,
                    [eg.wF]: t === J.TVA.TIER_3,
                }),
                children: (0, s.jsx)(l, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function eE(e) {
    let { guild: t, definition: i } = e,
        { tier: n, perks: r } = i,
        l = t.premiumTier >= n,
        a = J.M2T[n];
    return (0, s.jsxs)("div", {
        className: V()(eg.Nr, { [eg.Bm]: l, [eg.c]: !l }),
        children: [
            (0, s.jsx)(e_, { tier: n, isActive: l }),
            (0, s.jsxs)("div", {
                className: eg.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: eg.$h,
                        children: [
                            (0, s.jsx)(L.D, {
                                className: V()(eg.JJ, { [eg.eX]: !l }),
                                variant: "heading-xl/semibold",
                                color: l ? "text-strong" : void 0,
                                children: $.intl.string(
                                    n === J.TVA.TIER_1 ? $.t.nzXtaS : n === J.TVA.TIER_2 ? $.t["h33/uW"] : $.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: eg.yC,
                                children: [
                                    (0, s.jsx)(D._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(v.E, {
                                        variant: "text-md/medium",
                                        children: $.intl.format($.t["pob/cL"], { subscriptions: a }),
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
                                let i = (0, eu.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: V()(eg.bK, { [eg.o]: !l }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: eg.kf,
                                                color: l ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(v.E, {
                                                variant: "text-md/medium",
                                                color: l ? "text-default" : void 0,
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
                                children: $.intl.string(eT.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: V()(eg.iE, i),
        children: em.t.map((e) => (0, s.jsx)(eE, { guild: t, definition: e }, e.tier)),
    });
}
var ep = i(950372),
    eA = i(172218),
    ef = i(717421),
    eI = i(289704),
    eN = i(628284),
    eR = i(812993),
    eS = i(775602),
    ev = i(868652),
    ex = i(363487);
i(321073);
var eb = i(512750),
    eC = i(948134),
    ej = i(628049),
    eG = i(568065),
    eM = i(394107);
let eO =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    eP = new Set([...Array.from(eG.aH), ...Array.from(eG.m_), eb.FB]);
var eU = i(998418),
    ey = i(828162);
i(667532);
var eV = i(975571),
    eL = i(658937);
function eD(e) {
    let {
            guildId: t,
            activeStatus: i,
            title: l,
            description: c,
            cost: u,
            costDecorator: m,
            staticImageUrl: T,
            animatedImageUrl: g,
            powerup: _,
            badge: E,
            onClose: h,
        } = e,
        { analyticsLocations: p } = (0, o.Ay)(),
        A = i !== eG.b_.INACTIVE,
        f = (0, ex.A)(t),
        I = (0, r.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        N = n.useRef(null),
        [R, S] = n.useState(!1),
        [x, b] = n.useState(!1),
        [C, j] = n.useState(!1),
        G = x || C,
        M = n.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, Z.g)({
                    analyticsLocation: {
                        page: J.liQ.GUILD_POWERUPS_MARKETING,
                        section: J.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: p,
                    guild: e,
                });
        }, [t, p]),
        O = n.useCallback(() => {
            h(), (0, ey.A)(t, a.A.GUILD_POWERUPS_MARKETING, _.skuId);
        }, [t, _.skuId, h]),
        P = { tension: 400, friction: 30 },
        U = (0, ef.z)({ scale: G ? 0.85 : 1, y: G ? -32 : 0, config: P }),
        y = (0, ef.z)({ scale: G ? 0.7 : 1, y: G ? -35 : 0, config: P }),
        w = (0, ef.z)({ y: G ? -32 : 0, config: P }),
        F = (0, ef.z)({ opacity: +!!G, transform: G ? "translateY(0)" : "translateY(16px)", config: P }),
        z = n.useCallback((e) => {
            e && S(!0);
        }, []),
        H = n.useCallback(() => {
            j(!0);
        }, []),
        K = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || j(!1);
        }, []),
        W = (0, eA.K)(z),
        Q = _.skuId === ej.W5;
    return (0, s.jsxs)("div", {
        className: V()(eL.Nr, { [eL.fM]: R }),
        onFocus: H,
        onBlur: K,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, s.jsx)("div", { className: eL.sL, ref: W }),
            (0, s.jsx)("div", {
                className: eL.kQ,
                children: Q
                    ? (0, s.jsx)(ep.animated.div, {
                          className: eL.bm,
                          style: { transform: (0, ep.to)([y.scale, y.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(eI.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: N,
                              fit: "contain",
                              className: eL.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(ep.animated.img, {
                          className: eL.bm,
                          src: G && null != g && "" !== g && !I ? g : T,
                          alt: "",
                          style: { transform: (0, ep.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(ep.animated.div, {
                style: { ...w, transform: w.y.to((e) => `translateY(${e}px)`) },
                className: eL.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eL.P_,
                        children: [
                            (0, s.jsx)(L.D, { className: eL.DD, variant: "heading-lg/semibold", children: l }),
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
                                        children: $.intl.formatToPlainString(
                                            null != m ? eM.default["G/aTXi"] : eM.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            A &&
                                (0, s.jsxs)("div", {
                                    className: V()(eL.qS, eL.nt),
                                    children: [
                                        (0, s.jsx)(eN.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(v.E, {
                                            className: eL.nt,
                                            variant: "text-sm/semibold",
                                            children: $.intl.string($.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(ep.animated.div, {
                style: F,
                className: eL.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eL.x6,
                        children: (0, s.jsx)(B.$, {
                            variant: "primary",
                            text: $.intl.string($.t.oPAx73),
                            onClick: M,
                            fullWidth: !0,
                        }),
                    }),
                    f &&
                        (0, s.jsx)("div", {
                            className: eL.x6,
                            children: (0, s.jsx)(B.$, {
                                variant: "secondary",
                                text: $.intl.string($.t.GoCQxU),
                                onClick: O,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === E && (0, s.jsx)(eR.Lp, { className: eL.AP, text: $.intl.string($.t.y2b7CA) }),
            "beta" === E &&
                (0, s.jsx)(eR.Lp, {
                    className: eL.AP,
                    text: $.intl.string($.t.oW0eUd),
                    color: k.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function ek(e) {
    let { guildId: t, powerup: i, costDecorator: n, badge: r, onClose: l } = e,
        a = (0, eU.Ay)(t, i).type;
    return (0, s.jsx)(eD, {
        guildId: t,
        activeStatus: a,
        title: i.title,
        description: i.description,
        cost: i.cost,
        staticImageUrl: i.staticImageUrl,
        animatedImageUrl: i.animatedImageUrl,
        powerup: i,
        costDecorator: n,
        badge: r,
        onClose: l,
    });
}
let eB = new Map([[ej.W5, "+"]]),
    ew = n.forwardRef((e, t) => {
        var i;
        let l,
            a,
            { guild: o, onClose: c } = e;
        n.useEffect(() => {
            N.A.shouldFetchCatalogForGuild(o.id) && (0, ev.AK)(o.id),
                N.A.shouldFetchPowerupsForGuild(o.id) && (0, ev.Xd)(o.id);
        }, [o.id]);
        let d = (function (e) {
            let t = [...e].reverse(),
                i = t.findIndex((e) => e.skuId === eb.d0);
            if (i > 0) {
                let [e] = t.splice(i, 1);
                t.unshift(e);
            }
            let s = t.findIndex((e) => e.skuId === ej.W5);
            if (-1 !== s && s !== t.length - 1) {
                let [e] = t.splice(s, 1);
                t.push(e);
            }
            return t;
        })(
            ((i = o.id),
            (l = (0, r.bG)([N.A], () => N.A.getStateForGuild(i)?.powerupCatalog?.[eG.o9.PERK])),
            (a = (function (e) {
                let t = (0, f.C$)(e, "useGameServerPerk"),
                    i = (0, r.bG)([I.A], () => I.A.getLowestGameCostForGuild(e)),
                    { gameName: s, gameName2: l } = (0, eC.A)();
                return n.useMemo(
                    () =>
                        t && null != i
                            ? {
                                  skuId: ej.W5,
                                  title: $.intl.string(eM.default["B3OfL/"]),
                                  description: $.intl.format(eM.default["+UqyGU"], { gameName: s, gameName2: l }),
                                  cost: i,
                                  dependencies: [],
                                  type: eG.o9.PERK,
                                  animatedImageUrl: eO,
                                  staticImageUrl: eO,
                              }
                            : null,
                    [t, i, s, l],
                );
            })(i)),
            n.useMemo(() => {
                let e = [...(l ?? [])];
                return null != a && e.push(a), e.filter((e) => !eP.has(e.skuId));
            }, [l, a]) ?? []),
        ).slice(0, 6);
        return 0 === d.length
            ? null
            : (0, s.jsxs)("div", {
                  ref: t,
                  className: eL.iE,
                  children: [
                      (0, s.jsxs)("div", {
                          className: eL.ND,
                          children: [
                              (0, s.jsx)(L.D, {
                                  className: eL.R_,
                                  variant: "heading-xxl/semibold",
                                  children: $.intl.string(eT.default.wjI18Q),
                              }),
                              (0, s.jsx)(v.E, {
                                  className: eL.fV,
                                  variant: "text-md/medium",
                                  children: $.intl.format(eT.default.S562fn, {
                                      helpDeskArticle: eV.A.getArticleURL(J.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: eL.vY,
                          children: d.map((e) =>
                              (0, s.jsx)(
                                  ek,
                                  {
                                      guildId: o.id,
                                      powerup: e,
                                      costDecorator: eB.get(e.skuId),
                                      badge: eG.ys[e.skuId],
                                      onClose: c,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
ew.displayName = "GuildBoostingMarketingPerkCards";
var eF = i(527113),
    ez = i(862482),
    eH = i(944304),
    eK = i(430815);
let eW = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        l = n.useRef(null),
        a = (0, ef.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(ep.animated.div, {
        className: eK.iE,
        style: a,
        children: (0, s.jsx)("div", {
            ref: l,
            className: eK.iJ,
            children: (0, s.jsxs)(_.xp, {
                containerRef: l,
                children: [
                    (0, s.jsxs)("div", {
                        className: eK.OA,
                        children: [
                            (0, s.jsx)(F.Ay, { className: eK.$f, guild: i, size: F.Ay.Sizes.SMALL }),
                            (0, s.jsx)(v.E, { className: eK.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eH.A, {
                        className: eK.lI,
                        guild: i,
                        analyticsLocation: {
                            page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: J.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: J.ZSU.BUTTON_CTA,
                            objectType: J.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !r,
                        size: ez.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eQ = i(192308),
    eY = i(65154),
    eZ = i(149881),
    eJ = i(519636);
function eq(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: l, sourceAnalyticsLocations: a } = e,
        o = n.useCallback(() => {
            (0, eQ.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("434168"),
                    i.e("601031"),
                    i.e("482815"),
                    i.e("170653"),
                    i.e("784103"),
                    i.e("643612"),
                    i.e("809915"),
                    i.e("53374"),
                    i.e("710638"),
                    i.e("592731"),
                    i.e("621624"),
                    i.e("585810"),
                ]).then(i.bind(i, 872233));
                return (i) =>
                    (0, s.jsx)(e, {
                        ...i,
                        guildId: t.id,
                        analyticsLocation: r,
                        videoPlacement: l,
                        sourceAnalyticsLocations: a,
                    });
            });
        }, [r, t.id, a, l]);
    return (0, s.jsxs)(E.D, {
        className: eZ.kL,
        onClick: o,
        "aria-label": $.intl.string(eT.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eZ.xn, src: eJ.A }),
            (0, s.jsx)("div", { className: eZ.Lw }),
            (0, s.jsx)("div", {
                className: eZ.Rr,
                children: (0, s.jsx)(eY.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function e$(e) {
    let { analyticsLocation: t, guild: i, onClose: l, scrollToPowerupCards: a } = e,
        [c, d] = n.useState(!0),
        u = n.useRef(!1),
        { analyticsLocations: T } = (0, o.Ay)(),
        R = n.useRef(null),
        S = n.useRef(null),
        v = n.useRef(null),
        x = n.useRef(null),
        b = n.useCallback(() => {
            l?.();
        }, [l]),
        C = n.useCallback(() => {
            null != v.current &&
                null != S.current &&
                S.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        j = n.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (m.default.track(J.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: J.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: T,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: i.id,
                    }),
                    (u.current = !0));
            },
            [t, T, i.id],
        );
    n.useEffect(() => {
        m.default.track(J.HAw.OPEN_MODAL, {
            type: J.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: T,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, T]);
    let G = (0, f.C$)(i.id, "GuildBoostingMarketingRefresh"),
        M = (0, r.bG)([I.A], () => I.A.shouldFetchCatalogForGuild(i.id));
    n.useEffect(() => {
        G && M && (0, A.z9)(i.id);
    }, [i.id, G, M]);
    let O = (0, r.bG)([N.A], () => N.A.hasFetchedPowerupCatalog(i.id));
    return (
        n.useEffect(() => {
            if (a && O) {
                let e = setTimeout(() => {
                    C();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [a, C, O]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != l &&
                    (0, s.jsx)("div", {
                        ref: x,
                        className: el.Yk,
                        children: (0, s.jsx)(_.xp, {
                            containerRef: x,
                            children: (0, s.jsx)(E.D, {
                                className: el.b,
                                onClick: b,
                                "aria-label": $.intl.string($.t.cpT0Cq),
                                children: (0, s.jsx)(h.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(p.Gt, {
                    ref: S,
                    className: el.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: el.wx,
                            children: [
                                (0, s.jsx)(ea, { className: el.y2 }),
                                (0, s.jsxs)("div", {
                                    className: el.AZ,
                                    children: [
                                        (0, s.jsx)(ee, {
                                            guild: i,
                                            closeLayer: b,
                                            onCtaVisibilityChange: d,
                                            className: el.Oh,
                                        }),
                                        (0, s.jsx)(P, {}),
                                        (0, s.jsx)(eq, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: T,
                                        }),
                                        (0, s.jsx)(eh, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: el.uE,
                            children: (0, s.jsx)(ew, { ref: v, guild: e.guild, onClose: b }),
                        }),
                        (0, s.jsx)("div", {
                            className: el.o6,
                            children: (0, s.jsxs)("div", {
                                className: el.y$,
                                children: [
                                    (0, s.jsx)(eF.A, { className: el.Q, guild: i }),
                                    (0, s.jsx)(U.A, {}),
                                    (0, s.jsx)(et.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(g.L, {
                            innerRef: R,
                            onChange: j,
                            children: (0, s.jsx)("div", { ref: R, className: el.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eW, { guild: i, isVisible: !c, closeLayer: b }),
            ],
        })
    );
}
let eX = "BoostedGuildPerksModalConnected";
function e0(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: T, scrollToPowerupCards: g } = e,
        _ = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        E = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        h = (0, l.A)(() => Date.now()),
        { analyticsLocations: p } = (0, o.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
        A = E?.id,
        f = n.useCallback(() => {
            i(),
                null != A &&
                    m.default.track(J.HAw.MODAL_DISMISSED, {
                        type: J.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: p,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: A,
                        duration_open_ms: Date.now() - h,
                    });
        }, [p, h, c.object, c.section, i, A]);
    return (n.useLayoutEffect(() => {
        T?.(f);
    }, [f, T]),
    null == _ || null == E)
        ? null
        : (0, s.jsx)(o.f5, {
              value: p,
              children: (0, s.jsx)(e$, { analyticsLocation: c, onClose: f, guild: E, scrollToPowerupCards: g }),
          });
}
function e1(e) {
    let { guildId: t, location: i, scrollToPowerupCards: n } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: l } = e;
            return (
                null == r.current && (r.current = l),
                (0, s.jsx)(e0, {
                    close: l,
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
                T._.hasSubscribers(J.jej.MODAL_CLOSE)
                    ? (T._.dispatch(J.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
