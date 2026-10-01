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
    _ = i(269115),
    E = i(559106),
    g = i(939249),
    A = i(789645),
    h = i(689175),
    p = i(498480),
    I = i(831617),
    f = i(475669),
    N = i(645619),
    R = i(877624),
    S = i(406810),
    x = i(834730),
    v = i(28863),
    b = i(549996),
    G = i(807098),
    C = i(637706),
    j = i(788883),
    M = i(7667),
    O = i(990854);
function P() {
    let e = (0, b.c)(R.C.GUILD_BOOST_MARKETING_PAGE_BANNER),
        t =
            null != e && "guildBoostMarketingPageBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.guildBoostMarketingPageBanner
                : null,
        i = (0, G.T)(t?.asset),
        { countdownText: n, terms: r } = (0, M.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let l = (0, C.C)(t.helpArticle, ""),
        a = [t.body, r].filter((e) => "" !== e).join(" ");
    return (0, s.jsxs)("div", {
        className: O.kL,
        children: [
            (0, s.jsx)(j.A, {
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
                                (0, s.jsx)(x.E, { variant: "text-xs/semibold", color: "text-default", children: n }),
                            ],
                        }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(x.E, { variant: "text-md/semibold", color: "text-default", children: t.header }),
                            (0, s.jsxs)(x.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [
                                    a,
                                    null != l &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                "" !== a && " ",
                                                (0, s.jsx)(v.Anchor, {
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
    H = i(864310),
    K = i(338548),
    W = i(178368),
    Q = i(158045),
    Y = i(987144),
    Z = i(652215),
    J = i(202541),
    q = i(375708),
    $ = i(673555);
let X = function (e) {
    let { className: t, closeLayer: i, guild: l, onCtaVisibilityChange: a } = e,
        c = n.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([W.A], () => W.A.boostSlots),
        T = d?.isPremiumGroupMember(),
        { analyticsLocations: E } = (0, o.Ay)(),
        [g, A] = n.useState(!1),
        h = n.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === l.id;
                }).length,
            [m, l.id],
        ),
        p = (0, H.A)(e.guild.id).total;
    async function I() {
        (A(!0),
            await (0, Y.g)({
                analyticsLocations: E,
                analyticsLocation: {
                    page: Z.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: Z.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: Z.ZSU.BUTTON_CTA,
                    objectType: Z.AnalyticsObjectTypes.BUY,
                },
                guild: l,
                closeLayer: i,
            }),
            A(!1));
    }
    return (0, s.jsxs)("div", {
        className: V()($.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: $.$R,
                children: [
                    (0, s.jsx)(F.Ay, { className: $.$f, guild: l, size: F.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: $.CR,
                        children: [
                            (0, s.jsx)(L.D, { className: $.J5, variant: "heading-lg/semibold", children: l.name }),
                            (0, s.jsxs)("div", {
                                className: $.SJ,
                                children: [
                                    (0, s.jsx)(D._, {
                                        color:
                                            p > 0 ? k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: V()($.Me, { [$.S3]: p > 0 }),
                                    }),
                                    (0, s.jsx)(x.E, {
                                        className: $.n,
                                        variant: "text-md/semibold",
                                        children: q.intl.format(q.t["pob/cL"], { subscriptions: p }),
                                    }),
                                ],
                            }),
                            h > 0
                                ? (0, s.jsx)(x.E, {
                                      className: $.EV,
                                      variant: "text-sm/normal",
                                      children: q.intl.format(q.t.Jeto2u, { numSubscriptions: h }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: $.mY,
                children: [
                    (0, s.jsx)("h1", { className: $.R_, children: q.intl.string(q.t.N4sqzL) }),
                    T ? (0, s.jsx)(K.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: $.Sq,
                        children: [
                            (0, s.jsx)(_.L, {
                                innerRef: c,
                                onChange: a,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: c,
                                    className: $.dp,
                                    children: (0, s.jsx)(B.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: D._,
                                        text: q.intl.string(q.t.gKmQ1G),
                                        onClick: I,
                                        loading: g,
                                        disabled: T,
                                    }),
                                }),
                            }),
                            Q.Ay.hasFreeBoosts(d) || Q.Ay.isPremium(d, J.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(B.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: w.GiftIcon,
                                      text: q.intl.string(q.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, z.A)({
                                              subscriptionTier: J.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: Z.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: Z.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: Z.ZSU.BUTTON_ICON,
                                                  objectType: Z.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(B.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: q.intl.string(q.t.Q43TvC),
                                      onClick: function () {
                                          (0, z.A)({
                                              initialPlanId: null,
                                              subscriptionTier: J.pe.TIER_2,
                                              analyticsLocations: E,
                                              analyticsObject: {
                                                  page: Z.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: Z.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: Z.ZSU.BUTTON_ICON,
                                                  objectType: Z.AnalyticsObjectTypes.BUY,
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
var ee = i(232122),
    et = i(366010),
    ei = i(736653),
    es = i(303136),
    en = i(676279),
    er = i(432528);
function el(e) {
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
function ea(e) {
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
function eo(e) {
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
function ec(e) {
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
var ed = i(210273),
    eu = i(508155),
    em = i(25525),
    eT = i(381881);
function e_(e) {
    let { tier: t, isActive: i } = e,
        n = t === Z.TVA.TIER_1,
        r = t === Z.TVA.TIER_3,
        l = t === Z.TVA.TIER_1 ? ea : t === Z.TVA.TIER_2 ? eo : ec;
    return (0, s.jsxs)("div", {
        className: eT.MY,
        children: [
            (0, s.jsx)("div", { className: V()(eT.hr, { [eT.ti]: i, [eT.YO]: !i, [eT.JQ]: n, [eT.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: V()(eT.Zj, {
                    [eT.jv]: i,
                    [eT.ip]: t === Z.TVA.TIER_1,
                    [eT.p3]: t === Z.TVA.TIER_2,
                    [eT.wF]: t === Z.TVA.TIER_3,
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
        a = Z.M2T[n];
    return (0, s.jsxs)("div", {
        className: V()(eT.Nr, { [eT.Bm]: l, [eT.c]: !l }),
        children: [
            (0, s.jsx)(e_, { tier: n, isActive: l }),
            (0, s.jsxs)("div", {
                className: eT.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: eT.$h,
                        children: [
                            (0, s.jsx)(L.D, {
                                className: V()(eT.JJ, { [eT.eX]: !l }),
                                variant: "heading-xl/semibold",
                                color: l ? "text-strong" : void 0,
                                children: q.intl.string(
                                    n === Z.TVA.TIER_1 ? q.t.nzXtaS : n === Z.TVA.TIER_2 ? q.t["h33/uW"] : q.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: eT.yC,
                                children: [
                                    (0, s.jsx)(D._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(x.E, {
                                        variant: "text-md/medium",
                                        children: q.intl.format(q.t["pob/cL"], { subscriptions: a }),
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
                                let i = (0, ed.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: V()(eT.bK, { [eT.o]: !l }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: eT.kf,
                                                color: l ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: l ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, s.jsx)(x.E, {
                                className: eT.wx,
                                variant: "text-md/medium",
                                children: q.intl.string(em.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eg(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: V()(eT.iE, i),
        children: eu.t.map((e) => (0, s.jsx)(eE, { guild: t, definition: e }, e.tier)),
    });
}
var eA = i(202091),
    eh = i(172218),
    ep = i(717421),
    eI = i(289704),
    ef = i(628284),
    eN = i(812993),
    eR = i(775602),
    eS = i(868652),
    ex = i(363487);
i(321073);
var ev = i(512750),
    eb = i(948134),
    eG = i(628049),
    eC = i(568065),
    ej = i(394107);
let eM =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
var eO = i(383272);
let eP = new Set([...Array.from(eC.aH), ...Array.from(eC.m_), ev.FB]);
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
            animatedImageUrl: _,
            powerup: E,
            badge: g,
            onClose: A,
        } = e,
        { analyticsLocations: h } = (0, o.Ay)(),
        p = i !== eC.b_.INACTIVE,
        I = (0, ex.A)(t),
        f = (0, r.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        N = n.useRef(null),
        [R, S] = n.useState(!1),
        [v, b] = n.useState(!1),
        [G, C] = n.useState(!1),
        j = v || G,
        M = n.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, Y.g)({
                    analyticsLocation: {
                        page: Z.liQ.GUILD_POWERUPS_MARKETING,
                        section: Z.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: h,
                    guild: e,
                });
        }, [t, h]),
        O = n.useCallback(() => {
            (A(), (0, ey.A)(t, a.A.GUILD_POWERUPS_MARKETING, E.skuId));
        }, [t, E.skuId, A]),
        P = { tension: 400, friction: 30 },
        U = (0, ep.z)({ scale: j ? 0.85 : 1, y: j ? -32 : 0, config: P }),
        y = (0, ep.z)({ scale: j ? 0.7 : 1, y: j ? -35 : 0, config: P }),
        w = (0, ep.z)({ y: j ? -32 : 0, config: P }),
        F = (0, ep.z)({ opacity: +!!j, transform: j ? "translateY(0)" : "translateY(16px)", config: P }),
        z = n.useCallback((e) => {
            e && S(!0);
        }, []),
        H = n.useCallback(() => {
            C(!0);
        }, []),
        K = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || C(!1);
        }, []),
        W = (0, eh.K)(z),
        Q = E.skuId === eG.W5;
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
                    ? (0, s.jsx)(eA.animated.div, {
                          className: eL.bm,
                          style: { transform: (0, eA.to)([y.scale, y.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(eI.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: N,
                              fit: "contain",
                              className: eL.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(eA.animated.img, {
                          className: eL.bm,
                          src: j && null != _ && "" !== _ && !f ? _ : T,
                          alt: "",
                          style: { transform: (0, eA.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(eA.animated.div, {
                style: { ...w, transform: w.y.to((e) => `translateY(${e}px)`) },
                className: eL.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eL.P_,
                        children: [
                            (0, s.jsx)(L.D, { className: eL.DD, variant: "heading-lg/semibold", children: l }),
                            (0, s.jsx)(x.E, { className: eL.h_, variant: "text-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eL.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eL.qS,
                                children: [
                                    (0, s.jsx)(D._, { size: "xs", color: k.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(x.E, {
                                        className: eL.Vv,
                                        variant: "text-sm/semibold",
                                        children: q.intl.formatToPlainString(
                                            null != m ? ej.default["G/aTXi"] : ej.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            p &&
                                (0, s.jsxs)("div", {
                                    className: V()(eL.qS, eL.nt),
                                    children: [
                                        (0, s.jsx)(ef.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(x.E, {
                                            className: eL.nt,
                                            variant: "text-sm/semibold",
                                            children: q.intl.string(q.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(eA.animated.div, {
                style: F,
                className: eL.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eL.x6,
                        children: (0, s.jsx)(B.$, {
                            variant: "primary",
                            text: q.intl.string(q.t.oPAx73),
                            onClick: M,
                            fullWidth: !0,
                        }),
                    }),
                    I &&
                        (0, s.jsx)("div", {
                            className: eL.x6,
                            children: (0, s.jsx)(B.$, {
                                variant: "secondary",
                                text: q.intl.string(q.t.GoCQxU),
                                onClick: O,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === g && (0, s.jsx)(eN.Lp, { className: eL.AP, text: q.intl.string(q.t.y2b7CA) }),
            "beta" === g &&
                (0, s.jsx)(eN.Lp, {
                    className: eL.AP,
                    text: q.intl.string(q.t.oW0eUd),
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
let eB = new Map([[eG.W5, "+"]]),
    ew = n.forwardRef((e, t) => {
        var i;
        let l,
            a,
            o,
            c,
            { guild: d, onClose: u } = e;
        n.useEffect(() => {
            (N.A.shouldFetchCatalogForGuild(d.id) && (0, eS.AK)(d.id),
                N.A.shouldFetchPowerupsForGuild(d.id) && (0, eS.Xd)(d.id));
        }, [d.id]);
        let m = (function (e) {
            let t = [...e].reverse(),
                i = t.findIndex((e) => e.skuId === ev.d0);
            if (i > 0) {
                let [e] = t.splice(i, 1);
                t.unshift(e);
            }
            let s = t.findIndex((e) => e.skuId === eG.W5);
            if (-1 !== s && s !== t.length - 1) {
                let [e] = t.splice(s, 1);
                t.push(e);
            }
            return t;
        })(
            ((i = d.id),
            (l = (0, r.bG)([N.A], () => N.A.getStateForGuild(i)?.powerupCatalog?.[eC.o9.PERK])),
            (a = (function (e) {
                let t = (0, I.C$)(e, "useGameServerPerk"),
                    i = (0, r.bG)([f.A], () => f.A.getLowestGameCostForGuild(e)),
                    { gameName: s, gameName2: l } = (0, eb.A)();
                return n.useMemo(
                    () =>
                        t && null != i
                            ? {
                                  skuId: eG.W5,
                                  title: q.intl.string(ej.default["B3OfL/"]),
                                  description: q.intl.format(ej.default["+UqyGU"], { gameName: s, gameName2: l }),
                                  cost: i,
                                  dependencies: [],
                                  type: eC.o9.PERK,
                                  animatedImageUrl: eM,
                                  staticImageUrl: eM,
                              }
                            : null,
                    [t, i, s, l],
                );
            })(i)),
            (o = (0, eO.lY)(i, "useMarketablePowerupPerks")),
            (c = n.useMemo(() => {
                let e = new Set(eP);
                return (o && e.add(ev.d0), e);
            }, [o])),
            n.useMemo(() => {
                let e = [...(l ?? [])];
                return (null != a && e.push(a), e.filter((e) => !c.has(e.skuId)));
            }, [l, a, c]) ?? []),
        ).slice(0, 6);
        return 0 === m.length
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
                                  children: q.intl.string(em.default.wjI18Q),
                              }),
                              (0, s.jsx)(x.E, {
                                  className: eL.fV,
                                  variant: "text-md/medium",
                                  children: q.intl.format(em.default.S562fn, {
                                      helpDeskArticle: eV.A.getArticleURL(Z.MVz.GUILD_BOOSTING_FAQ),
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
                                      guildId: d.id,
                                      powerup: e,
                                      costDecorator: eB.get(e.skuId),
                                      badge: eC.ys[e.skuId],
                                      onClose: u,
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
        a = (0, ep.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(eA.animated.div, {
        className: eK.iE,
        style: a,
        children: (0, s.jsx)("div", {
            ref: l,
            className: eK.iJ,
            children: (0, s.jsxs)(E.xp, {
                containerRef: l,
                children: [
                    (0, s.jsxs)("div", {
                        className: eK.OA,
                        children: [
                            (0, s.jsx)(F.Ay, { className: eK.$f, guild: i, size: F.Ay.Sizes.SMALL }),
                            (0, s.jsx)(x.E, { className: eK.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eH.A, {
                        className: eK.lI,
                        guild: i,
                        analyticsLocation: {
                            page: Z.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: Z.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: Z.ZSU.BUTTON_CTA,
                            objectType: Z.AnalyticsObjectTypes.BUY,
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
    return (0, s.jsxs)(g.D, {
        className: eZ.kL,
        onClick: o,
        "aria-label": q.intl.string(em.default["103aY+"]),
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
        x = n.useRef(null),
        v = n.useRef(null),
        b = n.useCallback(() => {
            l?.();
        }, [l]),
        G = n.useCallback(() => {
            null != x.current &&
                null != S.current &&
                S.current.scrollIntoViewNode({ node: x.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        C = n.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (m.default.track(Z.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: Z.liQ.PREMIUM_GUILD_USER_MODAL,
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
        m.default.track(Z.HAw.OPEN_MODAL, {
            type: Z.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: T,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, T]);
    let j = (0, I.C$)(i.id, "GuildBoostingMarketingRefresh"),
        M = (0, r.bG)([f.A], () => f.A.shouldFetchCatalogForGuild(i.id));
    n.useEffect(() => {
        j && M && (0, p.z9)(i.id);
    }, [i.id, j, M]);
    let O = (0, r.bG)([N.A], () => N.A.hasFetchedPowerupCatalog(i.id));
    return (
        n.useEffect(() => {
            if (a && O) {
                let e = setTimeout(() => {
                    G();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [a, G, O]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != l &&
                    (0, s.jsx)("div", {
                        ref: v,
                        className: er.Yk,
                        children: (0, s.jsx)(E.xp, {
                            containerRef: v,
                            children: (0, s.jsx)(g.D, {
                                className: er.b,
                                onClick: b,
                                "aria-label": q.intl.string(q.t.cpT0Cq),
                                children: (0, s.jsx)(A.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(h.Gt, {
                    ref: S,
                    className: er.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: er.wx,
                            children: [
                                (0, s.jsx)(el, { className: er.y2 }),
                                (0, s.jsxs)("div", {
                                    className: er.AZ,
                                    children: [
                                        (0, s.jsx)(X, {
                                            guild: i,
                                            closeLayer: b,
                                            onCtaVisibilityChange: d,
                                            className: er.Oh,
                                        }),
                                        (0, s.jsx)(P, {}),
                                        (0, s.jsx)(eq, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: T,
                                        }),
                                        (0, s.jsx)(eg, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: er.uE,
                            children: (0, s.jsx)(ew, { ref: x, guild: e.guild, onClose: b }),
                        }),
                        (0, s.jsx)("div", {
                            className: er.o6,
                            children: (0, s.jsxs)("div", {
                                className: er.y$,
                                children: [
                                    (0, s.jsx)(eF.A, { className: er.Q, guild: i }),
                                    (0, s.jsx)(U.A, {}),
                                    (0, s.jsx)(ee.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(_.L, {
                            innerRef: R,
                            onChange: C,
                            children: (0, s.jsx)("div", { ref: R, className: er.mR }),
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
    let { guildId: t, close: i, location: c, registerDismissModalHandler: T, scrollToPowerupCards: _ } = e,
        E = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        g = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        A = (0, l.A)(() => Date.now()),
        { analyticsLocations: h } = (0, o.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
        p = g?.id,
        I = n.useCallback(() => {
            (i(),
                null != p &&
                    m.default.track(Z.HAw.MODAL_DISMISSED, {
                        type: Z.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: h,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: p,
                        duration_open_ms: Date.now() - A,
                    }));
        }, [h, A, c.object, c.section, i, p]);
    return (n.useLayoutEffect(() => {
        T?.(I);
    }, [I, T]),
    null == E || null == g)
        ? null
        : (0, s.jsx)(o.f5, {
              value: h,
              children: (0, s.jsx)(e$, { analyticsLocation: c, onClose: I, guild: g, scrollToPowerupCards: _ }),
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
                T._.hasSubscribers(Z.jej.MODAL_CLOSE)
                    ? (T._.dispatch(Z.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
