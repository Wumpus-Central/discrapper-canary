i.d(t, { Zt: () => eB, K4: () => eH });
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
    g = i(625494),
    h = i(269115),
    p = i(259678),
    T = i(939249),
    E = i(789645),
    _ = i(689175),
    f = i(498480),
    v = i(831617),
    A = i(475669),
    x = i(645619),
    I = i(333722),
    S = i(503698),
    R = i.n(S),
    b = i(297264),
    N = i(104510),
    j = i(661531),
    C = i(834730),
    y = i(821609),
    G = i(597770),
    V = i(548118),
    M = i(532794),
    P = i(864310),
    U = i(338548),
    L = i(178368),
    w = i(158045),
    O = i(987144),
    D = i(652215),
    k = i(202541),
    F = i(375708),
    B = i(964948);
let z = function (e) {
    let { className: t, closeLayer: i, guild: l, onCtaVisibilityChange: a } = e,
        c = n.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([L.A], () => L.A.boostSlots),
        g = d?.isPremiumGroupMember(),
        { analyticsLocations: p } = (0, o.Ay)(),
        [T, E] = n.useState(!1),
        _ = n.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === l.id;
                }).length,
            [m, l.id],
        ),
        f = (0, P.A)(e.guild.id).total;
    async function v() {
        E(!0),
            await (0, O.g)({
                analyticsLocations: p,
                analyticsLocation: {
                    page: D.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: D.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: D.ZSU.BUTTON_CTA,
                    objectType: D.AnalyticsObjectTypes.BUY,
                },
                guild: l,
                closeLayer: i,
            }),
            E(!1);
    }
    return (0, s.jsxs)("div", {
        className: R()(B.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: B.$R,
                children: [
                    (0, s.jsx)(V.Ay, { className: B.$f, guild: l, size: V.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: B.CR,
                        children: [
                            (0, s.jsx)(b.D, { className: B.J5, variant: "heading-lg/semibold", children: l.name }),
                            (0, s.jsxs)("div", {
                                className: B.SJ,
                                children: [
                                    (0, s.jsx)(N._, {
                                        color:
                                            f > 0 ? j.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: R()(B.Me, { [B.S3]: f > 0 }),
                                    }),
                                    (0, s.jsx)(C.E, {
                                        className: B.n,
                                        variant: "text-md/semibold",
                                        children: F.intl.format(F.t["pob/cL"], { subscriptions: f }),
                                    }),
                                ],
                            }),
                            _ > 0
                                ? (0, s.jsx)(C.E, {
                                      className: B.EV,
                                      variant: "text-sm/normal",
                                      children: F.intl.format(F.t.Jeto2u, { numSubscriptions: _ }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: B.mY,
                children: [
                    (0, s.jsx)("h1", { className: B.R_, children: F.intl.string(F.t.N4sqzL) }),
                    g ? (0, s.jsx)(U.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: B.Sq,
                        children: [
                            (0, s.jsx)(h.L, {
                                innerRef: c,
                                onChange: a,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: c,
                                    className: B.dp,
                                    children: (0, s.jsx)(y.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: N._,
                                        text: F.intl.string(F.t.gKmQ1G),
                                        onClick: v,
                                        loading: T,
                                        disabled: g,
                                    }),
                                }),
                            }),
                            w.Ay.hasFreeBoosts(d) || w.Ay.isPremium(d, k.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(y.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: G.GiftIcon,
                                      text: F.intl.string(F.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: k.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: p,
                                              analyticsObject: {
                                                  page: D.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: D.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: D.ZSU.BUTTON_ICON,
                                                  objectType: D.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(y.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: F.intl.string(F.t.Q43TvC),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: k.pe.TIER_2,
                                              analyticsLocations: p,
                                              analyticsObject: {
                                                  page: D.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: D.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: D.ZSU.BUTTON_ICON,
                                                  objectType: D.AnalyticsObjectTypes.BUY,
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
var H = i(232122),
    Z = i(366010),
    W = i(736653),
    Q = i(303136),
    K = i(676279),
    J = i(743823);
function Y(e) {
    let { className: t } = e,
        i = (0, W.Ay)(),
        n = (0, Z.q)(i),
        r = (0, K.TM)()
            ? n
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : n
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: J.YL }),
            (0, s.jsx)(
                Q.A,
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
function q(e) {
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
function $(e) {
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
function X(e) {
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
var ee = i(210273),
    et = i(508155),
    ei = i(853513),
    es = i(216754);
function en(e) {
    let { tier: t, isActive: i } = e,
        n = t === D.TVA.TIER_1,
        r = t === D.TVA.TIER_3,
        l = t === D.TVA.TIER_1 ? q : t === D.TVA.TIER_2 ? $ : X;
    return (0, s.jsxs)("div", {
        className: es.MY,
        children: [
            (0, s.jsx)("div", { className: R()(es.hr, { [es.ti]: i, [es.YO]: !i, [es.JQ]: n, [es.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: R()(es.Zj, {
                    [es.jv]: i,
                    [es.ip]: t === D.TVA.TIER_1,
                    [es.p3]: t === D.TVA.TIER_2,
                    [es.wF]: t === D.TVA.TIER_3,
                }),
                children: (0, s.jsx)(l, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function er(e) {
    let { guild: t, definition: i } = e,
        { tier: n, perks: r } = i,
        l = t.premiumTier >= n,
        a = D.M2T[n];
    return (0, s.jsxs)("div", {
        className: R()(es.Nr, { [es.Bm]: l, [es.c]: !l }),
        children: [
            (0, s.jsx)(en, { tier: n, isActive: l }),
            (0, s.jsxs)("div", {
                className: es.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: es.$h,
                        children: [
                            (0, s.jsx)(b.D, {
                                className: R()(es.JJ, { [es.eX]: !l }),
                                variant: "heading-xl/semibold",
                                color: l ? "text-strong" : void 0,
                                children: F.intl.string(
                                    n === D.TVA.TIER_1 ? F.t.nzXtaS : n === D.TVA.TIER_2 ? F.t["h33/uW"] : F.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: es.yC,
                                children: [
                                    (0, s.jsx)(N._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(C.E, {
                                        variant: "text-md/medium",
                                        children: F.intl.format(F.t["pob/cL"], { subscriptions: a }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: es.PJ,
                        children: [
                            r.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, ee.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: R()(es.bK, { [es.o]: !l }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: es.kf,
                                                color: l ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(C.E, {
                                                variant: "text-md/medium",
                                                color: l ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, s.jsx)(C.E, {
                                className: es.wx,
                                variant: "text-md/medium",
                                children: F.intl.string(ei.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function el(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: R()(es.iE, i),
        children: et.t.map((e) => (0, s.jsx)(er, { guild: t, definition: e }, e.tier)),
    });
}
var ea = i(53466),
    eo = i(172218),
    ec = i(717421),
    ed = i(289704),
    eu = i(628284),
    em = i(812993),
    eg = i(775602),
    eh = i(868652),
    ep = i(363487);
i(321073);
var eT = i(512750),
    eE = i(948134),
    e_ = i(628049),
    ef = i(568065),
    ev = i(275695);
let eA =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    ex = new Set([...Array.from(ef.aH), ...Array.from(ef.m_), eT.FB]);
var eI = i(998418),
    eS = i(828162);
i(667532);
var eR = i(975571),
    eb = i(187832);
function eN(e) {
    let {
            guildId: t,
            activeStatus: i,
            title: l,
            description: c,
            cost: u,
            costDecorator: m,
            staticImageUrl: g,
            animatedImageUrl: h,
            powerup: p,
            badge: T,
            onClose: E,
        } = e,
        { analyticsLocations: _ } = (0, o.Ay)(),
        f = i !== ef.b_.INACTIVE,
        v = (0, ep.A)(t),
        A = (0, r.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        x = n.useRef(null),
        [I, S] = n.useState(!1),
        [G, V] = n.useState(!1),
        [M, P] = n.useState(!1),
        U = G || M,
        L = n.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, O.g)({
                    analyticsLocation: {
                        page: D.liQ.GUILD_POWERUPS_MARKETING,
                        section: D.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: _,
                    guild: e,
                });
        }, [t, _]),
        w = n.useCallback(() => {
            E(), (0, eS.A)(t, a.A.GUILD_POWERUPS_MARKETING, p.skuId);
        }, [t, p.skuId, E]),
        k = { tension: 400, friction: 30 },
        B = (0, ec.z)({ scale: U ? 0.85 : 1, y: U ? -32 : 0, config: k }),
        z = (0, ec.z)({ scale: U ? 0.7 : 1, y: U ? -35 : 0, config: k }),
        H = (0, ec.z)({ y: U ? -32 : 0, config: k }),
        Z = (0, ec.z)({ opacity: +!!U, transform: U ? "translateY(0)" : "translateY(16px)", config: k }),
        W = n.useCallback((e) => {
            e && S(!0);
        }, []),
        Q = n.useCallback(() => {
            P(!0);
        }, []),
        K = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || P(!1);
        }, []),
        J = (0, eo.K)(W),
        Y = p.skuId === e_.W5;
    return (0, s.jsxs)("div", {
        className: R()(eb.Nr, { [eb.fM]: I }),
        onFocus: Q,
        onBlur: K,
        onMouseEnter: () => V(!0),
        onMouseLeave: () => V(!1),
        children: [
            (0, s.jsx)("div", { className: eb.sL, ref: J }),
            (0, s.jsx)("div", {
                className: eb.kQ,
                children: Y
                    ? (0, s.jsx)(ea.animated.div, {
                          className: eb.bm,
                          style: { transform: (0, ea.to)([z.scale, z.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(ed.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: x,
                              fit: "contain",
                              className: eb.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(ea.animated.img, {
                          className: eb.bm,
                          src: U && null != h && "" !== h && !A ? h : g,
                          alt: "",
                          style: { transform: (0, ea.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(ea.animated.div, {
                style: { ...H, transform: H.y.to((e) => `translateY(${e}px)`) },
                className: eb.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eb.P_,
                        children: [
                            (0, s.jsx)(b.D, { className: eb.DD, variant: "heading-lg/semibold", children: l }),
                            (0, s.jsx)(C.E, { className: eb.h_, variant: "text-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eb.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eb.qS,
                                children: [
                                    (0, s.jsx)(N._, { size: "xs", color: j.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(C.E, {
                                        className: eb.Vv,
                                        variant: "text-sm/semibold",
                                        children: F.intl.formatToPlainString(
                                            null != m ? ev.default["G/aTXi"] : ev.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            f &&
                                (0, s.jsxs)("div", {
                                    className: R()(eb.qS, eb.nt),
                                    children: [
                                        (0, s.jsx)(eu.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(C.E, {
                                            className: eb.nt,
                                            variant: "text-sm/semibold",
                                            children: F.intl.string(F.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(ea.animated.div, {
                style: Z,
                className: eb.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eb.x6,
                        children: (0, s.jsx)(y.$, {
                            variant: "primary",
                            text: F.intl.string(F.t.oPAx73),
                            onClick: L,
                            fullWidth: !0,
                        }),
                    }),
                    v &&
                        (0, s.jsx)("div", {
                            className: eb.x6,
                            children: (0, s.jsx)(y.$, {
                                variant: "secondary",
                                text: F.intl.string(F.t.GoCQxU),
                                onClick: w,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === T && (0, s.jsx)(em.Lp, { className: eb.AP, text: F.intl.string(F.t.y2b7CA) }),
            "beta" === T &&
                (0, s.jsx)(em.Lp, {
                    className: eb.AP,
                    text: F.intl.string(F.t.oW0eUd),
                    color: j.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function ej(e) {
    let { guildId: t, powerup: i, costDecorator: n, badge: r, onClose: l } = e,
        a = (0, eI.Ay)(t, i).type;
    return (0, s.jsx)(eN, {
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
let eC = new Map([[e_.W5, "+"]]),
    ey = n.forwardRef((e, t) => {
        var i;
        let l,
            a,
            { guild: o, onClose: c } = e;
        n.useEffect(() => {
            x.A.shouldFetchCatalogForGuild(o.id) && (0, eh.AK)(o.id),
                x.A.shouldFetchPowerupsForGuild(o.id) && (0, eh.Xd)(o.id);
        }, [o.id]);
        let d = (function (e) {
            let t = [...e].reverse(),
                i = t.findIndex((e) => e.skuId === eT.d0);
            if (i > 0) {
                let [e] = t.splice(i, 1);
                t.unshift(e);
            }
            let s = t.findIndex((e) => e.skuId === e_.W5);
            if (-1 !== s && s !== t.length - 1) {
                let [e] = t.splice(s, 1);
                t.push(e);
            }
            return t;
        })(
            ((i = o.id),
            (l = (0, r.bG)([x.A], () => x.A.getStateForGuild(i)?.powerupCatalog?.[ef.o9.PERK])),
            (a = (function (e) {
                let t = (0, v.C$)(e, "useGameServerPerk"),
                    i = (0, r.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                    { gameName: s, gameName2: l } = (0, eE.A)();
                return n.useMemo(
                    () =>
                        t && null != i
                            ? {
                                  skuId: e_.W5,
                                  title: F.intl.string(ev.default["B3OfL/"]),
                                  description: F.intl.format(ev.default["+UqyGU"], { gameName: s, gameName2: l }),
                                  cost: i,
                                  dependencies: [],
                                  type: ef.o9.PERK,
                                  animatedImageUrl: eA,
                                  staticImageUrl: eA,
                              }
                            : null,
                    [t, i, s, l],
                );
            })(i)),
            n.useMemo(() => {
                let e = [...(l ?? [])];
                return null != a && e.push(a), e.filter((e) => !ex.has(e.skuId));
            }, [l, a]) ?? []),
        ).slice(0, 6);
        return 0 === d.length
            ? null
            : (0, s.jsxs)("div", {
                  ref: t,
                  className: eb.iE,
                  children: [
                      (0, s.jsxs)("div", {
                          className: eb.ND,
                          children: [
                              (0, s.jsx)(b.D, {
                                  className: eb.R_,
                                  variant: "heading-xxl/semibold",
                                  children: F.intl.string(ei.default.wjI18Q),
                              }),
                              (0, s.jsx)(C.E, {
                                  className: eb.fV,
                                  variant: "text-md/medium",
                                  children: F.intl.format(ei.default.S562fn, {
                                      helpDeskArticle: eR.A.getArticleURL(D.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: eb.vY,
                          children: d.map((e) =>
                              (0, s.jsx)(
                                  ej,
                                  {
                                      guildId: o.id,
                                      powerup: e,
                                      costDecorator: eC.get(e.skuId),
                                      badge: ef.ys[e.skuId],
                                      onClose: c,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
ey.displayName = "GuildBoostingMarketingPerkCards";
var eG = i(527113),
    eV = i(862482),
    eM = i(944304),
    eP = i(882182);
let eU = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        l = n.useRef(null),
        a = (0, ec.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(ea.animated.div, {
        className: eP.iE,
        style: a,
        children: (0, s.jsx)("div", {
            ref: l,
            className: eP.iJ,
            children: (0, s.jsxs)(p.xp, {
                containerRef: l,
                children: [
                    (0, s.jsxs)("div", {
                        className: eP.OA,
                        children: [
                            (0, s.jsx)(V.Ay, { className: eP.$f, guild: i, size: V.Ay.Sizes.SMALL }),
                            (0, s.jsx)(C.E, { className: eP.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eM.A, {
                        className: eP.lI,
                        guild: i,
                        analyticsLocation: {
                            page: D.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: D.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: D.ZSU.BUTTON_CTA,
                            objectType: D.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !r,
                        size: eV.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eL = i(192308),
    ew = i(65154),
    eO = i(605252),
    eD = i(519636);
function ek(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: l, sourceAnalyticsLocations: a } = e,
        o = n.useCallback(() => {
            (0, eL.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("599467"),
                    i.e("434924"),
                    i.e("621624"),
                    i.e("482815"),
                    i.e("170653"),
                    i.e("430920"),
                    i.e("53374"),
                    i.e("710638"),
                    i.e("257520"),
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
    return (0, s.jsxs)(T.D, {
        className: eO.kL,
        onClick: o,
        "aria-label": F.intl.string(ei.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eO.xn, src: eD.A }),
            (0, s.jsx)("div", { className: eO.Lw }),
            (0, s.jsx)("div", {
                className: eO.Rr,
                children: (0, s.jsx)(ew.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eF(e) {
    let { analyticsLocation: t, guild: i, onClose: l, scrollToPowerupCards: a } = e,
        [c, d] = n.useState(!0),
        u = n.useRef(!1),
        { analyticsLocations: g } = (0, o.Ay)(),
        S = n.useRef(null),
        R = n.useRef(null),
        b = n.useRef(null),
        N = n.useRef(null),
        j = n.useCallback(() => {
            l?.();
        }, [l]),
        C = n.useCallback(() => {
            null != b.current &&
                null != R.current &&
                R.current.scrollIntoViewNode({ node: b.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        y = n.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (m.default.track(D.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: D.liQ.PREMIUM_GUILD_USER_MODAL,
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
        m.default.track(D.HAw.OPEN_MODAL, {
            type: D.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: g,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, g]);
    let G = (0, v.C$)(i.id, "GuildBoostingMarketingRefresh"),
        V = (0, r.bG)([A.A], () => A.A.shouldFetchCatalogForGuild(i.id));
    n.useEffect(() => {
        G && V && (0, f.z9)(i.id);
    }, [i.id, G, V]);
    let M = (0, r.bG)([x.A], () => x.A.hasFetchedPowerupCatalog(i.id));
    return (
        n.useEffect(() => {
            if (a && M) {
                let e = setTimeout(() => {
                    C();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [a, C, M]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != l &&
                    (0, s.jsx)("div", {
                        ref: N,
                        className: J.Yk,
                        children: (0, s.jsx)(p.xp, {
                            containerRef: N,
                            children: (0, s.jsx)(T.D, {
                                className: J.b,
                                onClick: j,
                                "aria-label": F.intl.string(F.t.cpT0Cq),
                                children: (0, s.jsx)(E.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(_.Gt, {
                    ref: R,
                    className: J.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: J.wx,
                            children: [
                                (0, s.jsx)(Y, { className: J.y2 }),
                                (0, s.jsxs)("div", {
                                    className: J.AZ,
                                    children: [
                                        (0, s.jsx)(z, {
                                            guild: i,
                                            closeLayer: j,
                                            onCtaVisibilityChange: d,
                                            className: J.Oh,
                                        }),
                                        (0, s.jsx)(ek, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: g,
                                        }),
                                        (0, s.jsx)(el, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: J.uE,
                            children: (0, s.jsx)(ey, { ref: b, guild: e.guild, onClose: j }),
                        }),
                        (0, s.jsx)("div", {
                            className: J.o6,
                            children: (0, s.jsxs)("div", {
                                className: J.y$,
                                children: [
                                    (0, s.jsx)(eG.A, { className: J.Q, guild: i }),
                                    (0, s.jsx)(I.A, {}),
                                    (0, s.jsx)(H.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(h.L, {
                            innerRef: S,
                            onChange: y,
                            children: (0, s.jsx)("div", { ref: S, className: J.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eU, { guild: i, isVisible: !c, closeLayer: j }),
            ],
        })
    );
}
let eB = "BoostedGuildPerksModalConnected";
function ez(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: g, scrollToPowerupCards: h } = e,
        p = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        T = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        E = (0, l.A)(() => Date.now()),
        { analyticsLocations: _ } = (0, o.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
        f = T?.id,
        v = n.useCallback(() => {
            i(),
                null != f &&
                    m.default.track(D.HAw.MODAL_DISMISSED, {
                        type: D.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: _,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: f,
                        duration_open_ms: Date.now() - E,
                    });
        }, [_, E, c.object, c.section, i, f]);
    return (n.useLayoutEffect(() => {
        g?.(v);
    }, [v, g]),
    null == p || null == T)
        ? null
        : (0, s.jsx)(o.f5, {
              value: _,
              children: (0, s.jsx)(eF, { analyticsLocation: c, onClose: v, guild: T, scrollToPowerupCards: h }),
          });
}
function eH(e) {
    let { guildId: t, location: i, scrollToPowerupCards: n } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: l } = e;
            return (
                null == r.current && (r.current = l),
                (0, s.jsx)(ez, {
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
            layerKey: eB,
            onEscape: () =>
                g._.hasSubscribers(D.jej.MODAL_CLOSE)
                    ? (g._.dispatch(D.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
