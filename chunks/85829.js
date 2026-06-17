"use strict";
n.d(t, { Zt: () => ej, K4: () => eY });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(444927),
    o = n(793574),
    l = n(688810),
    u = n(663066),
    c = n(71393),
    d = n(287809),
    _ = n(174459),
    h = n(625494),
    f = n(269115),
    p = n(187322),
    E = n(939249),
    m = n(789645),
    g = n(689175),
    A = n(396748),
    I = n(488803),
    T = n(522055),
    S = n(645619),
    y = n(917064),
    C = n(503698),
    N = n.n(C),
    v = n(534514),
    R = n(104510),
    O = n(661531),
    b = n(834730),
    D = n(821609),
    L = n(597770),
    w = n(548118),
    M = n(532794),
    P = n(864310),
    x = n(338548),
    k = n(178368),
    U = n(428262),
    G = n(987144),
    F = n(652215),
    V = n(788868),
    B = n(375708),
    j = n(111868);
let H = function (e) {
    let { className: t, closeLayer: n, guild: a, onCtaVisibilityChange: o } = e,
        u = r.useRef(null),
        c = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        _ = (0, s.bG)([k.A], () => k.A.boostSlots),
        h = c?.isPremiumGroupMember(),
        { analyticsLocations: p } = (0, l.Ay)(),
        [E, m] = r.useState(!1),
        g = r.useMemo(
            () =>
                Object.keys(_).filter((e) => {
                    let t = _[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [_, a.id],
        ),
        A = (0, P.A)(e.guild.id).total;
    async function I() {
        m(!0),
            await (0, G.g)({
                analyticsLocations: p,
                analyticsLocation: {
                    page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: F.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: F.ZSU.BUTTON_CTA,
                    objectType: F.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: n,
            }),
            m(!1);
    }
    return (0, i.jsxs)("div", {
        className: N()(j.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: j.$R,
                children: [
                    (0, i.jsx)(w.Ay, { className: j.$f, guild: a, size: w.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: j.CR,
                        children: [
                            (0, i.jsx)(v.D, { className: j.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, i.jsxs)("div", {
                                className: j.SJ,
                                children: [
                                    (0, i.jsx)(R._, {
                                        color:
                                            A > 0 ? O.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: N()(j.Me, { [j.S3]: A > 0 }),
                                    }),
                                    (0, i.jsx)(b.E, {
                                        className: j.n,
                                        variant: "text-md/semibold",
                                        children: B.intl.format(B.t["pob/cL"], { subscriptions: A }),
                                    }),
                                ],
                            }),
                            g > 0
                                ? (0, i.jsx)(b.E, {
                                      className: j.EV,
                                      variant: "text-sm/normal",
                                      children: B.intl.format(B.t.Jeto2u, { numSubscriptions: g }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: j.mY,
                children: [
                    (0, i.jsx)("h1", { className: j.R_, children: B.intl.string(B.t.N4sqzL) }),
                    h ? (0, i.jsx)(x.A, { alwaysWhite: !0 }) : null,
                    (0, i.jsxs)("div", {
                        className: j.Sq,
                        children: [
                            (0, i.jsx)(f.L, {
                                innerRef: u,
                                onChange: o,
                                threshold: 0.9,
                                children: (0, i.jsx)("div", {
                                    ref: u,
                                    className: j.dp,
                                    children: (0, i.jsx)(D.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: R._,
                                        text: B.intl.string(B.t.gKmQ1G),
                                        onClick: I,
                                        loading: E,
                                        disabled: h,
                                    }),
                                }),
                            }),
                            U.Ay.hasFreeBoosts(c) || U.Ay.isPremium(c, V.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(D.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: L.o,
                                      text: B.intl.string(B.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: V.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: p,
                                              analyticsObject: {
                                                  page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: F.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: F.ZSU.BUTTON_ICON,
                                                  objectType: F.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, i.jsx)(D.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: B.intl.string(B.t.Q43TvC),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: V.pe.TIER_2,
                                              analyticsLocations: p,
                                              analyticsObject: {
                                                  page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: F.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: F.ZSU.BUTTON_ICON,
                                                  objectType: F.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                      disabled: h,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var Y = n(232122),
    W = n(366010),
    K = n(736653),
    $ = n(303136),
    z = n(676279),
    q = n(510679);
function Z(e) {
    let { className: t } = e,
        n = (0, K.Ay)(),
        r = (0, W.q)(n),
        s = (0, z.TM)()
            ? r
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : r
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: q.YL }),
            (0, i.jsx)(
                $.A,
                {
                    fallbackImage: r
                        ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
                        : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
                    children: (0, i.jsx)("source", { src: s }),
                },
                s,
            ),
        ],
    });
}
function X(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, size: a = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: a, height: a },
        src: "https://cdn.discordapp.com/assets/content/e6e3e8c908888463cade4de8b5847c949b0fe8e67ae29dbe17c2ca314c011a6d.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
function Q(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, size: a = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: a, height: a },
        src: "https://cdn.discordapp.com/assets/content/9e156b8feeea36a8f7b0326e11211797de2e7c2049e9bcd8481e591ac1c119b2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
function J(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, size: a = 64 } = e;
    return (0, i.jsx)("img", {
        style: { width: a, height: a },
        src: "https://cdn.discordapp.com/assets/content/a0a455fb897b41612b171199b4be5f70d02e411e37643a5337c12497d46033a1.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var ee = n(210273),
    et = n(508155),
    en = n(645704),
    ei = n(582778);
function er(e) {
    let { tier: t, isActive: n } = e,
        r = t === F.TVA.TIER_1,
        s = t === F.TVA.TIER_3,
        a = t === F.TVA.TIER_1 ? X : t === F.TVA.TIER_2 ? Q : J;
    return (0, i.jsxs)("div", {
        className: ei.MY,
        children: [
            (0, i.jsx)("div", { className: N()(ei.hr, { [ei.ti]: n, [ei.YO]: !n, [ei.JQ]: r, [ei.Uz]: s }) }),
            (0, i.jsx)("div", {
                className: N()(ei.Zj, {
                    [ei.jv]: n,
                    [ei.ip]: t === F.TVA.TIER_1,
                    [ei.p3]: t === F.TVA.TIER_2,
                    [ei.wF]: t === F.TVA.TIER_3,
                }),
                children: (0, i.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function es(e) {
    let { guild: t, definition: n } = e,
        { tier: r, perks: s } = n,
        a = t.premiumTier >= r,
        o = F.M2T[r];
    return (0, i.jsxs)("div", {
        className: N()(ei.Nr, { [ei.Bm]: a, [ei.c]: !a }),
        children: [
            (0, i.jsx)(er, { tier: r, isActive: a }),
            (0, i.jsxs)("div", {
                className: ei.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: ei.$h,
                        children: [
                            (0, i.jsx)(v.D, {
                                className: N()(ei.JJ, { [ei.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: B.intl.string(
                                    r === F.TVA.TIER_1 ? B.t.nzXtaS : r === F.TVA.TIER_2 ? B.t["h33/uW"] : B.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: ei.yC,
                                children: [
                                    (0, i.jsx)(R._, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(b.E, {
                                        variant: "text-md/medium",
                                        children: B.intl.format(B.t["pob/cL"], { subscriptions: o }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ei.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, ee.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: N()(ei.bK, { [ei.o]: !a }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: ei.kf,
                                                color: a ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-md/medium",
                                                color: a ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, i.jsx)(b.E, {
                                className: ei.wx,
                                variant: "text-md/medium",
                                children: B.intl.string(en.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { guild: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: N()(ei.iE, n),
        children: et.t.map((e) => (0, i.jsx)(es, { guild: t, definition: e }, e.tier)),
    });
}
var eo = n(242841),
    el = n(172218),
    eu = n(717421),
    ec = n(289704),
    ed = n(628284),
    e_ = n(812993),
    eh = n(775602),
    ef = n(868652),
    ep = n(363487);
n(321073);
var eE = n(512750),
    em = n(881756),
    eg = n(568065),
    eA = n(800007),
    eI = n(76660);
let eT =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    eS = new Set([...Array.from(eg.aH), ...Array.from(eg.m_), eE.FB]);
var ey = n(998418),
    eC = n(828162),
    eN = n(975571),
    ev = n(70240);
function eR(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: u,
            cost: d,
            costDecorator: _,
            staticImageUrl: h,
            animatedImageUrl: f,
            powerup: p,
            badge: E,
            onClose: m,
        } = e,
        { analyticsLocations: g } = (0, l.Ay)(),
        A = n !== eg.b_.INACTIVE,
        I = (0, ep.A)(t),
        T = (0, s.bG)([eh.Ay], () => eh.Ay.useReducedMotion),
        S = r.useRef(null),
        [y, C] = r.useState(!1),
        [L, w] = r.useState(!1),
        [M, P] = r.useState(!1),
        x = L || M,
        k = r.useCallback(() => {
            let e = c.A.getGuild(t);
            null != e &&
                (0, G.g)({
                    analyticsLocation: {
                        page: F.liQ.GUILD_POWERUPS_MARKETING,
                        section: F.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: g,
                    guild: e,
                });
        }, [t, g]),
        U = r.useCallback(() => {
            m(), (0, eC.A)(t, o.A.GUILD_POWERUPS_MARKETING, p.skuId);
        }, [t, p.skuId, m]),
        V = { tension: 400, friction: 30 },
        j = (0, eu.z)({ scale: x ? 0.85 : 1, y: x ? -32 : 0, config: V }),
        H = (0, eu.z)({ scale: x ? 0.7 : 1, y: x ? -35 : 0, config: V }),
        Y = (0, eu.z)({ y: x ? -32 : 0, config: V }),
        W = (0, eu.z)({ opacity: +!!x, transform: x ? "translateY(0)" : "translateY(16px)", config: V }),
        K = r.useCallback((e) => {
            e && C(!0);
        }, []),
        $ = r.useCallback(() => {
            P(!0);
        }, []),
        z = r.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || P(!1);
        }, []),
        q = (0, el.K)(K),
        Z = p.skuId === eA.W5;
    return (0, i.jsxs)("div", {
        className: N()(ev.Nr, { [ev.fM]: y }),
        onFocus: $,
        onBlur: z,
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: [
            (0, i.jsx)("div", { className: ev.sL, ref: q }),
            (0, i.jsx)("div", {
                className: ev.kQ,
                children: Z
                    ? (0, i.jsx)(eo.animated.div, {
                          className: ev.bm,
                          style: { transform: (0, eo.to)([H.scale, H.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(ec.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: S,
                              fit: "contain",
                              className: ev.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(eo.animated.img, {
                          className: ev.bm,
                          src: x && null != f && "" !== f && !T ? f : h,
                          alt: "",
                          style: { transform: (0, eo.to)([j.scale, j.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, i.jsxs)(eo.animated.div, {
                style: { ...Y, transform: Y.y.to((e) => `translateY(${e}px)`) },
                className: ev.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: ev.P_,
                        children: [
                            (0, i.jsx)(v.D, { className: ev.DD, variant: "heading-lg/semibold", children: a }),
                            (0, i.jsx)(b.E, { className: ev.h_, variant: "text-md/medium", children: u }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ev.jp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ev.qS,
                                children: [
                                    (0, i.jsx)(R._, { size: "xs", color: O.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, i.jsx)(b.E, {
                                        className: ev.Vv,
                                        variant: "text-sm/semibold",
                                        children: B.intl.formatToPlainString(
                                            null != _ ? eI.default["G/aTXi"] : eI.default.r9pa9K,
                                            { boostCount: d },
                                        ),
                                    }),
                                ],
                            }),
                            A &&
                                (0, i.jsxs)("div", {
                                    className: N()(ev.qS, ev.nt),
                                    children: [
                                        (0, i.jsx)(ed.y, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(b.E, {
                                            className: ev.nt,
                                            variant: "text-sm/semibold",
                                            children: B.intl.string(B.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(eo.animated.div, {
                style: W,
                className: ev.NC,
                children: [
                    (0, i.jsx)("div", {
                        className: ev.x6,
                        children: (0, i.jsx)(D.$, {
                            variant: "primary",
                            text: B.intl.string(B.t.oPAx73),
                            onClick: k,
                            fullWidth: !0,
                        }),
                    }),
                    I &&
                        (0, i.jsx)("div", {
                            className: ev.x6,
                            children: (0, i.jsx)(D.$, {
                                variant: "secondary",
                                text: B.intl.string(B.t.GoCQxU),
                                onClick: U,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === E && (0, i.jsx)(e_.Lp, { className: ev.AP, text: B.intl.string(B.t.y2b7CA) }),
            "beta" === E &&
                (0, i.jsx)(e_.Lp, {
                    className: ev.AP,
                    text: B.intl.string(B.t.oW0eUd),
                    color: O.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eO(e) {
    let { guildId: t, powerup: n, costDecorator: r, badge: s, onClose: a } = e,
        o = (0, ey.Ay)(t, n).type;
    return (0, i.jsx)(eR, {
        guildId: t,
        activeStatus: o,
        title: n.title,
        description: n.description,
        cost: n.cost,
        staticImageUrl: n.staticImageUrl,
        animatedImageUrl: n.animatedImageUrl,
        powerup: n,
        costDecorator: r,
        badge: s,
        onClose: a,
    });
}
let eb = new Map([[eA.W5, "+"]]),
    eD = r.forwardRef((e, t) => {
        var n;
        let a,
            o,
            { guild: l, onClose: u } = e;
        r.useEffect(() => {
            S.A.shouldFetchCatalogForGuild(l.id) && (0, ef.AK)(l.id),
                S.A.shouldFetchPowerupsForGuild(l.id) && (0, ef.Xd)(l.id);
        }, [l.id]);
        let c = Array.from(
            ((n = l.id),
            (a = (0, s.bG)([S.A], () => S.A.getStateForGuild(n)?.powerupCatalog?.[eg.o9.PERK])),
            (o = (function (e) {
                let t = (0, I.C$)(e, "useGameServerPerk"),
                    n = (0, s.bG)([T.A], () => T.A.getLowestGameCostForGuild(e)),
                    { gameName: i, gameName2: a } = (0, em.A)();
                return r.useMemo(
                    () =>
                        t && null != n
                            ? {
                                  skuId: eA.W5,
                                  title: B.intl.string(eI.default["B3OfL/"]),
                                  description: B.intl.format(eI.default["+UqyGU"], { gameName: i, gameName2: a }),
                                  cost: n,
                                  dependencies: [],
                                  type: eg.o9.PERK,
                                  animatedImageUrl: eT,
                                  staticImageUrl: eT,
                              }
                            : null,
                    [t, n, i, a],
                );
            })(n)),
            r.useMemo(() => {
                let e = [...(a ?? [])];
                return null != o && e.push(o), e.filter((e) => !eS.has(e.skuId));
            }, [a, o]) ?? []),
        )
            .reverse()
            .slice(0, 6);
        return 0 === c.length
            ? null
            : (0, i.jsxs)("div", {
                  ref: t,
                  className: ev.iE,
                  children: [
                      (0, i.jsxs)("div", {
                          className: ev.ND,
                          children: [
                              (0, i.jsx)(v.D, {
                                  className: ev.R_,
                                  variant: "heading-xxl/semibold",
                                  children: B.intl.string(en.default.wjI18Q),
                              }),
                              (0, i.jsx)(b.E, {
                                  className: ev.fV,
                                  variant: "text-md/medium",
                                  children: B.intl.format(en.default.S562fn, {
                                      helpDeskArticle: eN.A.getArticleURL(F.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: ev.vY,
                          children: c.map((e) =>
                              (0, i.jsx)(
                                  eO,
                                  {
                                      guildId: l.id,
                                      powerup: e,
                                      costDecorator: eb.get(e.skuId),
                                      badge: eg.ys[e.skuId],
                                      onClose: u,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eD.displayName = "GuildBoostingMarketingPerkCards";
var eL = n(527113),
    ew = n(862482),
    eM = n(944304),
    eP = n(130782);
let ex = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        a = r.useRef(null),
        o = (0, eu.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(eo.animated.div, {
        className: eP.iE,
        style: o,
        children: (0, i.jsx)("div", {
            ref: a,
            className: eP.iJ,
            children: (0, i.jsxs)(p.xp, {
                containerRef: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: eP.OA,
                        children: [
                            (0, i.jsx)(w.Ay, { className: eP.$f, guild: n, size: w.Ay.Sizes.SMALL }),
                            (0, i.jsx)(b.E, { className: eP.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eM.A, {
                        className: eP.lI,
                        guild: n,
                        analyticsLocation: {
                            page: F.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: F.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: F.ZSU.BUTTON_CTA,
                            objectType: F.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !s,
                        size: ew.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var ek = n(192308),
    eU = n(65154),
    eG = n(303676),
    eF = n(519636);
function eV(e) {
    let { guild: t, analyticsLocation: s, videoPlacement: a, sourceAnalyticsLocations: o } = e,
        l = r.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("88340"), n.e("85810")]).then(n.bind(n, 872233));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        analyticsLocation: s,
                        videoPlacement: a,
                        sourceAnalyticsLocations: o,
                    });
            });
        }, [s, t.id, o, a]);
    return (0, i.jsxs)(E.D, {
        className: eG.kL,
        onClick: l,
        "aria-label": B.intl.string(en.default["103aY+"]),
        children: [
            (0, i.jsx)("img", { alt: "", className: eG.xn, src: eF.A }),
            (0, i.jsx)("div", { className: eG.Lw }),
            (0, i.jsx)("div", {
                className: eG.Rr,
                children: (0, i.jsx)(eU.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eB(e) {
    let { analyticsLocation: t, guild: n, onClose: a, scrollToPowerupCards: o } = e,
        [u, c] = r.useState(!0),
        d = r.useRef(!1),
        { analyticsLocations: h } = (0, l.Ay)(),
        C = r.useRef(null),
        N = r.useRef(null),
        v = r.useRef(null),
        R = r.useRef(null),
        O = r.useCallback(() => {
            a?.();
        }, [a]),
        b = r.useCallback(() => {
            null != v.current &&
                null != N.current &&
                N.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        D = r.useCallback(
            (e) => {
                e &&
                    !d.current &&
                    (_.default.track(F.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: F.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: h,
                        location_section: t.section,
                        location_object: t.object,
                        guild_id: n.id,
                    }),
                    (d.current = !0));
            },
            [t, h, n.id],
        );
    r.useEffect(() => {
        _.default.track(F.HAw.OPEN_MODAL, {
            type: F.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: h,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, h]);
    let L = (0, I.C$)(n.id, "GuildBoostingMarketingRefresh"),
        w = (0, s.bG)([T.A], () => T.A.shouldFetchCatalogForGuild(n.id));
    r.useEffect(() => {
        L && w && (0, A.z9)(n.id);
    }, [n.id, L, w]);
    let M = (0, s.bG)([S.A], () => S.A.hasFetchedPowerupCatalog(n.id));
    return (
        r.useEffect(() => {
            if (o && M) {
                let e = setTimeout(() => {
                    b();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [o, b, M]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != a &&
                    (0, i.jsx)("div", {
                        ref: R,
                        className: q.Yk,
                        children: (0, i.jsx)(p.xp, {
                            containerRef: R,
                            children: (0, i.jsx)(E.D, {
                                className: q.b,
                                onClick: O,
                                "aria-label": B.intl.string(B.t.cpT0Cq),
                                children: (0, i.jsx)(m.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, i.jsxs)(g.Gt, {
                    ref: N,
                    className: q.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: q.wx,
                            children: [
                                (0, i.jsx)(Z, { className: q.y2 }),
                                (0, i.jsxs)("div", {
                                    className: q.AZ,
                                    children: [
                                        (0, i.jsx)(H, {
                                            guild: n,
                                            closeLayer: O,
                                            onCtaVisibilityChange: c,
                                            className: q.Oh,
                                        }),
                                        (0, i.jsx)(eV, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: h,
                                        }),
                                        (0, i.jsx)(ea, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: q.uE,
                            children: (0, i.jsx)(eD, { ref: v, guild: e.guild, onClose: O }),
                        }),
                        (0, i.jsx)("div", {
                            className: q.o6,
                            children: (0, i.jsxs)("div", {
                                className: q.y$,
                                children: [
                                    (0, i.jsx)(eL.A, { className: q.Q, guild: n }),
                                    (0, i.jsx)(y.A, {}),
                                    (0, i.jsx)(Y.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(f.L, {
                            innerRef: C,
                            onChange: D,
                            children: (0, i.jsx)("div", { ref: C, className: q.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(ex, { guild: n, isVisible: !u, closeLayer: O }),
            ],
        })
    );
}
let ej = "BoostedGuildPerksModalConnected",
    eH = (e) => {
        let { guildId: t, close: n, location: u, registerDismissModalHandler: h, scrollToPowerupCards: f } = e,
            p = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
            E = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]),
            m = (0, a.A)(() => Date.now()),
            { analyticsLocations: g } = (0, l.Ay)(o.A.BOOSTED_GUILD_PERKS_MODAL),
            A = E?.id,
            I = r.useCallback(() => {
                n(),
                    null != A &&
                        _.default.track(F.HAw.MODAL_DISMISSED, {
                            type: F.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: g,
                            location_section: u.section,
                            location_object: u.object,
                            guild_id: A,
                            duration_open_ms: Date.now() - m,
                        });
            }, [g, m, u.object, u.section, n, A]);
        return (r.useLayoutEffect(() => {
            h?.(I);
        }, [I, h]),
        null == p || null == E)
            ? null
            : (0, i.jsx)(l.f5, {
                  value: g,
                  children: (0, i.jsx)(eB, { analyticsLocation: u, onClose: I, guild: E, scrollToPowerupCards: f }),
              });
    };
function eY(e) {
    let { guildId: t, location: n, scrollToPowerupCards: r } = e,
        s = { current: null };
    (0, u.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == s.current && (s.current = a),
                (0, i.jsx)(eH, {
                    close: a,
                    guildId: t,
                    location: n,
                    registerDismissModalHandler: (e) => {
                        s.current = e;
                    },
                    scrollToPowerupCards: r,
                })
            );
        },
        {
            layerKey: ej,
            onEscape: () =>
                h._.hasSubscribers(F.jej.MODAL_CLOSE)
                    ? (h._.dispatch(F.jej.MODAL_CLOSE), !0)
                    : null != s.current && (s.current(), !0),
        },
    );
}
