i.d(t, { Zt: () => e0, K4: () => e2 });
var n = i(477900),
    s = i(582128),
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
    _ = i(559106),
    E = i(939249),
    A = i(789645),
    h = i(689175),
    p = i(498480),
    f = i(831617),
    I = i(475669),
    N = i(645619),
    R = i(877624),
    S = i(406810),
    v = i(834730),
    x = i(28863),
    b = i(549996),
    C = i(807098),
    G = i(637706),
    j = i(788883),
    M = i(7667),
    O = i(990854);
function P() {
    let e = (0, b.c)(R.C.GUILD_BOOST_MARKETING_PAGE_BANNER),
        t =
            null != e && "guildBoostMarketingPageBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostMarketingPageBanner
                : null,
        i = (0, C.T)(t?.asset),
        { countdownText: s, terms: r } = (0, M.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let l = (0, G.C)(t.helpArticle, ""),
        a = [t.body, r].filter((e) => "" !== e).join(" ");
    return (0, n.jsxs)("div", {
        className: O.kL,
        children: [
            (0, n.jsx)(j.A, {
                componentType: R.C.GUILD_BOOST_MARKETING_PAGE_BANNER,
                componentId: e.id,
                promotionId: e.promotionId,
            }),
            null != i && "" !== i && (0, n.jsx)("img", { src: i, className: O.LY, alt: "" }),
            (0, n.jsxs)("div", {
                className: O.er,
                children: [
                    null != s &&
                        (0, n.jsxs)("div", {
                            className: O.qW,
                            children: [
                                (0, n.jsx)(S.ClockIcon, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: "currentColor",
                                    className: O.y,
                                }),
                                (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-default", children: s }),
                            ],
                        }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(v.E, { variant: "text-md/semibold", color: "text-default", children: t.header }),
                            (0, n.jsxs)(v.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [
                                    a,
                                    null != l &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                "" !== a && " ",
                                                (0, n.jsx)(x.Anchor, {
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
    z = i(75678),
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
        c = s.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([Q.A], () => Q.A.boostSlots),
        T = d?.isPremiumGroupMember(),
        { analyticsLocations: _ } = (0, o.Ay)(),
        [E, A] = s.useState(!1),
        h = s.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === l.id;
                }).length,
            [m, l.id],
        ),
        p = (0, K.A)(e.guild.id).total;
    async function f() {
        (A(!0),
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
            A(!1));
    }
    return (0, n.jsxs)("div", {
        className: V()(X.kL, t),
        children: [
            (0, n.jsxs)("div", {
                className: X.$R,
                children: [
                    (0, n.jsx)(F.Ay, { className: X.$f, guild: l, size: F.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, n.jsxs)("div", {
                        className: X.CR,
                        children: [
                            (0, n.jsx)(L.D, { className: X.J5, variant: "heading-lg/semibold", children: l.name }),
                            (0, n.jsxs)("div", {
                                className: X.SJ,
                                children: [
                                    (0, n.jsx)(D._, {
                                        color:
                                            p > 0 ? k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: V()(X.Me, { [X.S3]: p > 0 }),
                                    }),
                                    (0, n.jsx)(v.E, {
                                        className: X.n,
                                        variant: "text-md/semibold",
                                        children: $.intl.format($.t["pob/cL"], { subscriptions: p }),
                                    }),
                                ],
                            }),
                            h > 0
                                ? (0, n.jsx)(v.E, {
                                      className: X.EV,
                                      variant: "text-sm/normal",
                                      children: $.intl.format($.t.Jeto2u, { numSubscriptions: h }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: X.mY,
                children: [
                    (0, n.jsx)("h1", { className: X.R_, children: $.intl.string($.t.N4sqzL) }),
                    T ? (0, n.jsx)(W.A, { alwaysWhite: !0 }) : null,
                    (0, n.jsxs)("div", {
                        className: X.Sq,
                        children: [
                            (0, n.jsx)(g.L, {
                                innerRef: c,
                                onChange: a,
                                threshold: 0.9,
                                children: (0, n.jsx)("div", {
                                    ref: c,
                                    className: X.dp,
                                    children: (0, n.jsx)(B.$, {
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
                                ? (0, n.jsx)(B.$, {
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
                                : (0, n.jsx)(B.$, {
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
    en = i(736653),
    es = i(303136),
    er = i(676279),
    el = i(432528);
function ea(e) {
    let { className: t } = e,
        i = (0, en.Ay)(),
        s = (0, ei.q)(i),
        r = (0, er.TM)()
            ? s
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : s
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, n.jsxs)("div", {
        className: t,
        children: [
            (0, n.jsx)("div", { className: el.YL }),
            (0, n.jsx)(
                es.A,
                {
                    fallbackImage: s
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, n.jsx)("source", { src: r }),
                },
                r,
            ),
        ],
    });
}
function eo(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: r, size: l = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: l, height: l },
        src: "https://cdn.discordapp.com/assets/content/33e98755a49cf85d07b8189a0001926c17d91599d53662a39999329f5253254f.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: r ?? "img",
    });
}
function ec(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: r, size: l = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: l, height: l },
        src: "https://cdn.discordapp.com/assets/content/3bc18204c2bf43975ded85a602c7816d032bc07cf9b1d5589e52404f9bc1d687.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: r ?? "img",
    });
}
function ed(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: r, size: l = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: l, height: l },
        src: "https://cdn.discordapp.com/assets/content/cb869ee40a8ed5d6210e69a02cebbf03025be47006b310ec2564f74f6ad1dff8.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: r ?? "img",
    });
}
var eu = i(210273),
    em = i(508155),
    eT = i(356863),
    eg = i(381881);
function e_(e) {
    let { tier: t, isActive: i } = e,
        s = t === J.TVA.TIER_1,
        r = t === J.TVA.TIER_3,
        l = t === J.TVA.TIER_1 ? eo : t === J.TVA.TIER_2 ? ec : ed;
    return (0, n.jsxs)("div", {
        className: eg.MY,
        children: [
            (0, n.jsx)("div", { className: V()(eg.hr, { [eg.ti]: i, [eg.YO]: !i, [eg.JQ]: s, [eg.Uz]: r }) }),
            (0, n.jsx)("div", {
                className: V()(eg.Zj, {
                    [eg.jv]: i,
                    [eg.ip]: t === J.TVA.TIER_1,
                    [eg.p3]: t === J.TVA.TIER_2,
                    [eg.wF]: t === J.TVA.TIER_3,
                }),
                children: (0, n.jsx)(l, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function eE(e) {
    let { guild: t, definition: i } = e,
        { tier: s, perks: r } = i,
        l = t.premiumTier >= s,
        a = J.M2T[s];
    return (0, n.jsxs)("div", {
        className: V()(eg.Nr, { [eg.Bm]: l, [eg.c]: !l }),
        children: [
            (0, n.jsx)(e_, { tier: s, isActive: l }),
            (0, n.jsxs)("div", {
                className: eg.zI,
                children: [
                    (0, n.jsxs)("div", {
                        className: eg.$h,
                        children: [
                            (0, n.jsx)(L.D, {
                                className: V()(eg.JJ, { [eg.eX]: !l }),
                                variant: "heading-xl/semibold",
                                color: l ? "text-strong" : void 0,
                                children: $.intl.string(
                                    s === J.TVA.TIER_1 ? $.t.nzXtaS : s === J.TVA.TIER_2 ? $.t["h33/uW"] : $.t.BfF6ED,
                                ),
                            }),
                            (0, n.jsxs)("div", {
                                className: eg.yC,
                                children: [
                                    (0, n.jsx)(D._, { size: "xs", color: "currentColor" }),
                                    (0, n.jsx)(v.E, {
                                        variant: "text-md/medium",
                                        children: $.intl.format($.t["pob/cL"], { subscriptions: a }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eg.PJ,
                        children: [
                            r.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, eu.X)(e.perkIcon);
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: V()(eg.bK, { [eg.o]: !l }),
                                        children: [
                                            (0, n.jsx)(i, {
                                                className: eg.kf,
                                                color: l ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, n.jsx)(v.E, {
                                                variant: "text-md/medium",
                                                color: l ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, n.jsx)(v.E, {
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
function eA(e) {
    let { guild: t, className: i } = e;
    return (0, n.jsx)("div", {
        className: V()(eg.iE, i),
        children: em.t.map((e) => (0, n.jsx)(eE, { guild: t, definition: e }, e.tier)),
    });
}
var eh = i(202091),
    ep = i(172218),
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
    eG = i(628049),
    ej = i(568065),
    eM = i(344045);
let eO =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var eP = i(383272);
let eU = new Set([...Array.from(ej.aH), ...Array.from(ej.m_), eb.FB]);
var ey = i(998418),
    eV = i(828162);
i(667532);
var eL = i(975571),
    eD = i(658937);
function ek(e) {
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
            onClose: A,
        } = e,
        { analyticsLocations: h } = (0, o.Ay)(),
        p = i !== ej.b_.INACTIVE,
        f = (0, ex.A)(t),
        I = (0, r.bG)([eS.Ay], () => eS.Ay.useReducedMotion),
        N = s.useRef(null),
        [R, S] = s.useState(!1),
        [x, b] = s.useState(!1),
        [C, G] = s.useState(!1),
        j = x || C,
        M = s.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, Z.g)({
                    analyticsLocation: {
                        page: J.liQ.GUILD_POWERUPS_MARKETING,
                        section: J.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: h,
                    guild: e,
                });
        }, [t, h]),
        O = s.useCallback(() => {
            (A(), (0, eV.A)(t, a.A.GUILD_POWERUPS_MARKETING, _.skuId));
        }, [t, _.skuId, A]),
        P = { tension: 400, friction: 30 },
        U = (0, ef.z)({ scale: j ? 0.85 : 1, y: j ? -32 : 0, config: P }),
        y = (0, ef.z)({ scale: j ? 0.7 : 1, y: j ? -35 : 0, config: P }),
        w = (0, ef.z)({ y: j ? -32 : 0, config: P }),
        F = (0, ef.z)({ opacity: +!!j, transform: j ? "translateY(0)" : "translateY(16px)", config: P }),
        z = s.useCallback((e) => {
            e && S(!0);
        }, []),
        H = s.useCallback(() => {
            G(!0);
        }, []),
        K = s.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || G(!1);
        }, []),
        W = (0, ep.K)(z),
        Q = _.skuId === eG.W5;
    return (0, n.jsxs)("div", {
        className: V()(eD.Nr, { [eD.fM]: R }),
        onFocus: H,
        onBlur: K,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: [
            (0, n.jsx)("div", { className: eD.sL, ref: W }),
            (0, n.jsx)("div", {
                className: eD.kQ,
                children: Q
                    ? (0, n.jsx)(eh.animated.div, {
                          className: eD.bm,
                          style: { transform: (0, eh.to)([y.scale, y.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, n.jsx)(eI.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: N,
                              fit: "contain",
                              className: eD.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, n.jsx)(eh.animated.img, {
                          className: eD.bm,
                          src: j && null != g && "" !== g && !I ? g : T,
                          alt: "",
                          style: { transform: (0, eh.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, n.jsxs)(eh.animated.div, {
                style: { ...w, transform: w.y.to((e) => `translateY(${e}px)`) },
                className: eD.Qs,
                children: [
                    (0, n.jsxs)("div", {
                        className: eD.P_,
                        children: [
                            (0, n.jsx)(L.D, { className: eD.DD, variant: "heading-lg/semibold", children: l }),
                            (0, n.jsx)(v.E, { className: eD.h_, variant: "text-md/medium", children: c }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eD.jp,
                        children: [
                            (0, n.jsxs)("div", {
                                className: eD.qS,
                                children: [
                                    (0, n.jsx)(D._, { size: "xs", color: k.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, n.jsx)(v.E, {
                                        className: eD.Vv,
                                        variant: "text-sm/semibold",
                                        children: $.intl.formatToPlainString(
                                            null != m ? eM.default["G/aTXi"] : eM.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            p &&
                                (0, n.jsxs)("div", {
                                    className: V()(eD.qS, eD.nt),
                                    children: [
                                        (0, n.jsx)(eN.y, { size: "xs", color: "currentColor" }),
                                        (0, n.jsx)(v.E, {
                                            className: eD.nt,
                                            variant: "text-sm/semibold",
                                            children: $.intl.string($.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)(eh.animated.div, {
                style: F,
                className: eD.NC,
                children: [
                    (0, n.jsx)("div", {
                        className: eD.x6,
                        children: (0, n.jsx)(B.$, {
                            variant: "primary",
                            text: $.intl.string($.t.oPAx73),
                            onClick: M,
                            fullWidth: !0,
                        }),
                    }),
                    f &&
                        (0, n.jsx)("div", {
                            className: eD.x6,
                            children: (0, n.jsx)(B.$, {
                                variant: "secondary",
                                text: $.intl.string($.t.GoCQxU),
                                onClick: O,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === E && (0, n.jsx)(eR.Lp, { className: eD.AP, text: $.intl.string($.t.y2b7CA) }),
            "beta" === E &&
                (0, n.jsx)(eR.Lp, {
                    className: eD.AP,
                    text: $.intl.string($.t.oW0eUd),
                    color: k.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eB(e) {
    let { guildId: t, powerup: i, costDecorator: s, badge: r, onClose: l } = e,
        a = (0, ey.Ay)(t, i).type;
    return (0, n.jsx)(ek, {
        guildId: t,
        activeStatus: a,
        title: i.title,
        description: i.description,
        cost: i.cost,
        staticImageUrl: i.staticImageUrl,
        animatedImageUrl: i.animatedImageUrl,
        powerup: i,
        costDecorator: s,
        badge: r,
        onClose: l,
    });
}
let ew = new Map([[eG.W5, "+"]]),
    eF = s.forwardRef((e, t) => {
        var i;
        let l,
            a,
            o,
            c,
            { guild: d, onClose: u } = e;
        s.useEffect(() => {
            (N.A.shouldFetchCatalogForGuild(d.id) && (0, ev.AK)(d.id),
                N.A.shouldFetchPowerupsForGuild(d.id) && (0, ev.Xd)(d.id));
        }, [d.id]);
        let m = (function (e) {
            let t = [...e].reverse(),
                i = t.findIndex((e) => e.skuId === eb.d0);
            if (i > 0) {
                let [e] = t.splice(i, 1);
                t.unshift(e);
            }
            let n = t.findIndex((e) => e.skuId === eG.W5);
            if (-1 !== n && n !== t.length - 1) {
                let [e] = t.splice(n, 1);
                t.push(e);
            }
            return t;
        })(
            ((i = d.id),
            (l = (0, r.bG)([N.A], () => N.A.getStateForGuild(i)?.powerupCatalog?.[ej.o9.PERK])),
            (a = (function (e) {
                let t = (0, f.C$)(e, "useGameServerPerk"),
                    i = (0, r.bG)([I.A], () => I.A.getLowestGameCostForGuild(e)),
                    { gameName: n, gameName2: l } = (0, eC.A)();
                return s.useMemo(
                    () =>
                        t && null != i
                            ? {
                                  skuId: eG.W5,
                                  title: $.intl.string(eM.default["B3OfL/"]),
                                  description: $.intl.format(eM.default["+UqyGU"], { gameName: n, gameName2: l }),
                                  cost: i,
                                  dependencies: [],
                                  type: ej.o9.PERK,
                                  animatedImageUrl: eO,
                                  staticImageUrl: eO,
                              }
                            : null,
                    [t, i, n, l],
                );
            })(i)),
            (o = (0, eP.lY)(i, "useMarketablePowerupPerks")),
            (c = s.useMemo(() => {
                let e = new Set(eU);
                return (o && e.add(eb.d0), e);
            }, [o])),
            s.useMemo(() => {
                let e = [...(l ?? [])];
                return (null != a && e.push(a), e.filter((e) => !c.has(e.skuId)));
            }, [l, a, c]) ?? []),
        ).slice(0, 6);
        return 0 === m.length
            ? null
            : (0, n.jsxs)("div", {
                  ref: t,
                  className: eD.iE,
                  children: [
                      (0, n.jsxs)("div", {
                          className: eD.ND,
                          children: [
                              (0, n.jsx)(L.D, {
                                  className: eD.R_,
                                  variant: "heading-xxl/semibold",
                                  children: $.intl.string(eT.default.wjI18Q),
                              }),
                              (0, n.jsx)(v.E, {
                                  className: eD.fV,
                                  variant: "text-md/medium",
                                  children: $.intl.format(eT.default.S562fn, {
                                      helpDeskArticle: eL.A.getArticleURL(J.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          className: eD.vY,
                          children: m.map((e) =>
                              (0, n.jsx)(
                                  eB,
                                  {
                                      guildId: d.id,
                                      powerup: e,
                                      costDecorator: ew.get(e.skuId),
                                      badge: ej.ys[e.skuId],
                                      onClose: u,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eF.displayName = "GuildBoostingMarketingPerkCards";
var ez = i(527113),
    eH = i(862482),
    eK = i(944304),
    eW = i(430815);
let eQ = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        l = s.useRef(null),
        a = (0, ef.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, n.jsx)(eh.animated.div, {
        className: eW.iE,
        style: a,
        children: (0, n.jsx)("div", {
            ref: l,
            className: eW.iJ,
            children: (0, n.jsxs)(_.xp, {
                containerRef: l,
                children: [
                    (0, n.jsxs)("div", {
                        className: eW.OA,
                        children: [
                            (0, n.jsx)(F.Ay, { className: eW.$f, guild: i, size: F.Ay.Sizes.SMALL }),
                            (0, n.jsx)(v.E, { className: eW.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, n.jsx)(eK.A, {
                        className: eW.lI,
                        guild: i,
                        analyticsLocation: {
                            page: J.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: J.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: J.ZSU.BUTTON_CTA,
                            objectType: J.AnalyticsObjectTypes.BUY,
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
    eZ = i(65154),
    eJ = i(149881),
    eq = i(519636);
function e$(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: l, sourceAnalyticsLocations: a } = e,
        o = s.useCallback(() => {
            (0, eY.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("434168"),
                    i.e("601031"),
                    i.e("482815"),
                    i.e("170653"),
                    i.e("784103"),
                    i.e("390098"),
                    i.e("809915"),
                    i.e("53374"),
                    i.e("710638"),
                    i.e("592731"),
                    i.e("621624"),
                    i.e("585810"),
                ]).then(i.bind(i, 872233));
                return (i) =>
                    (0, n.jsx)(e, {
                        ...i,
                        guildId: t.id,
                        analyticsLocation: r,
                        videoPlacement: l,
                        sourceAnalyticsLocations: a,
                    });
            });
        }, [r, t.id, a, l]);
    return (0, n.jsxs)(E.D, {
        className: eJ.kL,
        onClick: o,
        "aria-label": $.intl.string(eT.default["103aY+"]),
        children: [
            (0, n.jsx)("img", { alt: "", className: eJ.xn, src: eq.A }),
            (0, n.jsx)("div", { className: eJ.Lw }),
            (0, n.jsx)("div", {
                className: eJ.Rr,
                children: (0, n.jsx)(eZ.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eX(e) {
    let { analyticsLocation: t, guild: i, onClose: l, scrollToPowerupCards: a } = e,
        [c, d] = s.useState(!0),
        u = s.useRef(!1),
        { analyticsLocations: T } = (0, o.Ay)(),
        R = s.useRef(null),
        S = s.useRef(null),
        v = s.useRef(null),
        x = s.useRef(null),
        b = s.useCallback(() => {
            l?.();
        }, [l]),
        C = s.useCallback(() => {
            null != v.current &&
                null != S.current &&
                S.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        G = s.useCallback(
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
    s.useEffect(() => {
        m.default.track(J.HAw.OPEN_MODAL, {
            type: J.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: T,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, T]);
    let j = (0, f.C$)(i.id, "GuildBoostingMarketingRefresh"),
        M = (0, r.bG)([I.A], () => I.A.shouldFetchCatalogForGuild(i.id));
    s.useEffect(() => {
        j && M && (0, p.z9)(i.id);
    }, [i.id, j, M]);
    let O = (0, r.bG)([N.A], () => N.A.hasFetchedPowerupCatalog(i.id));
    return (
        s.useEffect(() => {
            if (a && O) {
                let e = setTimeout(() => {
                    C();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [a, C, O]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                null != l &&
                    (0, n.jsx)("div", {
                        ref: x,
                        className: el.Yk,
                        children: (0, n.jsx)(_.xp, {
                            containerRef: x,
                            children: (0, n.jsx)(E.D, {
                                className: el.b,
                                onClick: b,
                                "aria-label": $.intl.string($.t.cpT0Cq),
                                children: (0, n.jsx)(A.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, n.jsxs)(h.Gt, {
                    ref: S,
                    className: el.XG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: el.wx,
                            children: [
                                (0, n.jsx)(ea, { className: el.y2 }),
                                (0, n.jsxs)("div", {
                                    className: el.AZ,
                                    children: [
                                        (0, n.jsx)(ee, {
                                            guild: i,
                                            closeLayer: b,
                                            onCtaVisibilityChange: d,
                                            className: el.Oh,
                                        }),
                                        (0, n.jsx)(P, {}),
                                        (0, n.jsx)(e$, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: T,
                                        }),
                                        (0, n.jsx)(eA, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: el.uE,
                            children: (0, n.jsx)(eF, { ref: v, guild: e.guild, onClose: b }),
                        }),
                        (0, n.jsx)("div", {
                            className: el.o6,
                            children: (0, n.jsxs)("div", {
                                className: el.y$,
                                children: [
                                    (0, n.jsx)(ez.A, { className: el.Q, guild: i }),
                                    (0, n.jsx)(U.A, {}),
                                    (0, n.jsx)(et.A, {}),
                                ],
                            }),
                        }),
                        (0, n.jsx)(g.L, {
                            innerRef: R,
                            onChange: G,
                            children: (0, n.jsx)("div", { ref: R, className: el.mR }),
                        }),
                    ],
                }),
                (0, n.jsx)(eQ, { guild: i, isVisible: !c, closeLayer: b }),
            ],
        })
    );
}
let e0 = "BoostedGuildPerksModalConnected";
function e1(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: T, scrollToPowerupCards: g } = e,
        _ = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        E = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        A = (0, l.A)(() => Date.now()),
        { analyticsLocations: h } = (0, o.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
        p = E?.id,
        f = s.useCallback(() => {
            (i(),
                null != p &&
                    m.default.track(J.HAw.MODAL_DISMISSED, {
                        type: J.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: h,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: p,
                        duration_open_ms: Date.now() - A,
                    }));
        }, [h, A, c.object, c.section, i, p]);
    return (s.useLayoutEffect(() => {
        T?.(f);
    }, [f, T]),
    null == _ || null == E)
        ? null
        : (0, n.jsx)(o.f5, {
              value: h,
              children: (0, n.jsx)(eX, { analyticsLocation: c, onClose: f, guild: E, scrollToPowerupCards: g }),
          });
}
function e2(e) {
    let { guildId: t, location: i, scrollToPowerupCards: s } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: l } = e;
            return (
                null == r.current && (r.current = l),
                (0, n.jsx)(e1, {
                    close: l,
                    guildId: t,
                    location: i,
                    registerDismissModalHandler: (e) => {
                        r.current = e;
                    },
                    scrollToPowerupCards: s,
                })
            );
        },
        {
            layerKey: e0,
            onEscape: () =>
                T._.hasSubscribers(J.jej.MODAL_CLOSE)
                    ? (T._.dispatch(J.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
