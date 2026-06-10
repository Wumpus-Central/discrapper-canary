"use strict";
n.d(t, { Zt: () => eH, K4: () => eY });
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
    p = n(939249),
    E = n(789645),
    m = n(689175),
    g = n(396748),
    A = n(488803),
    I = n(522055),
    T = n(645619),
    S = n(917064),
    y = n(503698),
    N = n.n(y),
    v = n(534514),
    C = n(104510),
    R = n(661531),
    O = n(834730),
    b = n(821609),
    D = n(597770),
    L = n(548118),
    w = n(532794),
    M = n(864310),
    P = n(338548),
    x = n(178368),
    k = n(428262),
    U = n(987144),
    G = n(652215),
    F = n(788868),
    V = n(375708),
    B = n(474236);
let H = function (e) {
    let { className: t, closeLayer: n, guild: a, onCtaVisibilityChange: o } = e,
        u = r.useRef(null),
        c = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        _ = (0, s.bG)([x.A], () => x.A.boostSlots),
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
        A = (0, M.A)(e.guild.id).total;
    async function I() {
        m(!0),
            await (0, U.g)({
                analyticsLocations: p,
                analyticsLocation: {
                    page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: G.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: G.ZSU.BUTTON_CTA,
                    objectType: G.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: n,
            }),
            m(!1);
    }
    return (0, i.jsxs)("div", {
        className: N()(B.kL, t),
        children: [
            (0, i.jsxs)("div", {
                className: B.$R,
                children: [
                    (0, i.jsx)(L.Ay, { className: B.$f, guild: a, size: L.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, i.jsxs)("div", {
                        className: B.CR,
                        children: [
                            (0, i.jsx)(v.D, { className: B.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, i.jsxs)("div", {
                                className: B.SJ,
                                children: [
                                    (0, i.jsx)(C._, {
                                        color:
                                            A > 0 ? R.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: N()(B.Me, { [B.S3]: A > 0 }),
                                    }),
                                    (0, i.jsx)(O.E, {
                                        className: B.n,
                                        variant: "text-md/semibold",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: A }),
                                    }),
                                ],
                            }),
                            g > 0
                                ? (0, i.jsx)(O.E, {
                                      className: B.EV,
                                      variant: "text-sm/normal",
                                      children: V.intl.format(V.t.Jeto2u, { numSubscriptions: g }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: B.mY,
                children: [
                    (0, i.jsx)("h1", { className: B.R_, children: V.intl.string(V.t.N4sqzL) }),
                    h ? (0, i.jsx)(P.A, { alwaysWhite: !0 }) : null,
                    (0, i.jsxs)("div", {
                        className: B.Sq,
                        children: [
                            (0, i.jsx)(f.L, {
                                innerRef: u,
                                onChange: o,
                                threshold: 0.9,
                                children: (0, i.jsx)("div", {
                                    ref: u,
                                    className: B.dp,
                                    children: (0, i.jsx)(b.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: C._,
                                        text: V.intl.string(V.t.gKmQ1G),
                                        onClick: I,
                                        loading: E,
                                        disabled: h,
                                    }),
                                }),
                            }),
                            k.Ay.hasFreeBoosts(c) || k.Ay.isPremium(c, F.PremiumTypes.TIER_2)
                                ? (0, i.jsx)(b.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: D.o,
                                      text: V.intl.string(V.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, w.A)({
                                              initialPlanId: null,
                                              subscriptionTier: F.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: p,
                                              analyticsObject: {
                                                  page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: G.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: G.ZSU.BUTTON_ICON,
                                                  objectType: G.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, i.jsx)(b.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: V.intl.string(V.t.Q43TvC),
                                      onClick: function () {
                                          (0, w.A)({
                                              initialPlanId: null,
                                              subscriptionTier: F.pe.TIER_2,
                                              analyticsLocations: p,
                                              analyticsObject: {
                                                  page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: G.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: G.ZSU.BUTTON_ICON,
                                                  objectType: G.AnalyticsObjectTypes.BUY,
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
var j = n(232122),
    Y = n(366010),
    W = n(736653),
    K = n(303136),
    $ = n(676279),
    z = n(215895);
function q(e) {
    let { className: t } = e,
        n = (0, W.Ay)(),
        r = (0, Y.q)(n),
        s = (0, $.TM)()
            ? r
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : r
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: z.YL }),
            (0, i.jsx)(
                K.A,
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
function Z(e) {
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
function Q(e) {
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
var J = n(210273),
    ee = n(508155),
    et = n(853513),
    en = n(111674);
function ei(e) {
    let { tier: t, isActive: n } = e,
        r = t === G.TVA.TIER_1,
        s = t === G.TVA.TIER_3,
        a = t === G.TVA.TIER_1 ? X : t === G.TVA.TIER_2 ? Z : Q;
    return (0, i.jsxs)("div", {
        className: en.MY,
        children: [
            (0, i.jsx)("div", { className: N()(en.hr, { [en.ti]: n, [en.YO]: !n, [en.JQ]: r, [en.Uz]: s }) }),
            (0, i.jsx)("div", {
                className: N()(en.Zj, {
                    [en.jv]: n,
                    [en.ip]: t === G.TVA.TIER_1,
                    [en.p3]: t === G.TVA.TIER_2,
                    [en.wF]: t === G.TVA.TIER_3,
                }),
                children: (0, i.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function er(e) {
    let { guild: t, definition: n } = e,
        { tier: r, perks: s } = n,
        a = t.premiumTier >= r,
        o = G.M2T[r];
    return (0, i.jsxs)("div", {
        className: N()(en.Nr, { [en.Bm]: a, [en.c]: !a }),
        children: [
            (0, i.jsx)(ei, { tier: r, isActive: a }),
            (0, i.jsxs)("div", {
                className: en.zI,
                children: [
                    (0, i.jsxs)("div", {
                        className: en.$h,
                        children: [
                            (0, i.jsx)(v.D, {
                                className: N()(en.JJ, { [en.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: V.intl.string(
                                    r === G.TVA.TIER_1 ? V.t.nzXtaS : r === G.TVA.TIER_2 ? V.t["h33/uW"] : V.t.BfF6ED,
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                className: en.yC,
                                children: [
                                    (0, i.jsx)(C._, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(O.E, {
                                        variant: "text-md/medium",
                                        children: V.intl.format(V.t["pob/cL"], { subscriptions: o }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: en.PJ,
                        children: [
                            s.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let n = (0, J.X)(e.perkIcon);
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: N()(en.bK, { [en.o]: !a }),
                                        children: [
                                            (0, i.jsx)(n, {
                                                className: en.kf,
                                                color: a ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, i.jsx)(O.E, {
                                                variant: "text-md/medium",
                                                color: a ? "text-default" : void 0,
                                                children: e.getCopy(),
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                            (0, i.jsx)(O.E, {
                                className: en.wx,
                                variant: "text-md/medium",
                                children: V.intl.string(et.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function es(e) {
    let { guild: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: N()(en.iE, n),
        children: ee.t.map((e) => (0, i.jsx)(er, { guild: t, definition: e }, e.tier)),
    });
}
var ea = n(922139),
    eo = n(172218),
    el = n(717421),
    eu = n(289704),
    ec = n(628284),
    ed = n(812993),
    e_ = n(775602),
    eh = n(868652),
    ef = n(363487);
n(321073);
var ep = n(512750),
    eE = n(881756),
    em = n(568065),
    eg = n(800007),
    eA = n(576709);
let eI =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    eT = new Set([...Array.from(em.aH), ...Array.from(em.m_), ep.FB]);
var eS = n(998418),
    ey = n(828162),
    eN = n(975571),
    ev = n(262880);
function eC(e) {
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
        A = n !== em.b_.INACTIVE,
        I = (0, ef.A)(t),
        T = (0, s.bG)([e_.A], () => e_.A.useReducedMotion),
        S = r.useRef(null),
        [y, D] = r.useState(!1),
        [L, w] = r.useState(!1),
        [M, P] = r.useState(!1),
        x = L || M,
        k = r.useCallback(() => {
            let e = c.A.getGuild(t);
            null != e &&
                (0, U.g)({
                    analyticsLocation: {
                        page: G.liQ.GUILD_POWERUPS_MARKETING,
                        section: G.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: g,
                    guild: e,
                });
        }, [t, g]),
        F = r.useCallback(() => {
            m(), (0, ey.A)(t, o.A.GUILD_POWERUPS_MARKETING, p.skuId);
        }, [t, p.skuId, m]),
        B = { tension: 400, friction: 30 },
        H = (0, el.z)({ scale: x ? 0.85 : 1, y: x ? -32 : 0, config: B }),
        j = (0, el.z)({ scale: x ? 0.7 : 1, y: x ? -35 : 0, config: B }),
        Y = (0, el.z)({ y: x ? -32 : 0, config: B }),
        W = (0, el.z)({ opacity: +!!x, transform: x ? "translateY(0)" : "translateY(16px)", config: B }),
        K = r.useCallback((e) => {
            e && D(!0);
        }, []),
        $ = r.useCallback(() => {
            P(!0);
        }, []),
        z = r.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || P(!1);
        }, []),
        q = (0, eo.K)(K),
        X = p.skuId === eg.W5;
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
                children: X
                    ? (0, i.jsx)(ea.animated.div, {
                          className: ev.bm,
                          style: { transform: (0, ea.to)([j.scale, j.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, i.jsx)(eu.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: S,
                              fit: "contain",
                              className: ev.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, i.jsx)(ea.animated.img, {
                          className: ev.bm,
                          src: x && null != f && "" !== f && !T ? f : h,
                          alt: "",
                          style: { transform: (0, ea.to)([H.scale, H.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, i.jsxs)(ea.animated.div, {
                style: { ...Y, transform: Y.y.to((e) => `translateY(${e}px)`) },
                className: ev.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: ev.P_,
                        children: [
                            (0, i.jsx)(v.D, { className: ev.DD, variant: "heading-lg/semibold", children: a }),
                            (0, i.jsx)(O.E, { className: ev.h_, variant: "text-md/medium", children: u }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ev.jp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ev.qS,
                                children: [
                                    (0, i.jsx)(C._, { size: "xs", color: R.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, i.jsx)(O.E, {
                                        className: ev.Vv,
                                        variant: "text-sm/semibold",
                                        children: V.intl.formatToPlainString(
                                            null != _ ? eA.default["G/aTXi"] : eA.default.r9pa9K,
                                            { boostCount: d },
                                        ),
                                    }),
                                ],
                            }),
                            A &&
                                (0, i.jsxs)("div", {
                                    className: N()(ev.qS, ev.nt),
                                    children: [
                                        (0, i.jsx)(ec.y, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(O.E, {
                                            className: ev.nt,
                                            variant: "text-sm/semibold",
                                            children: V.intl.string(V.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(ea.animated.div, {
                style: W,
                className: ev.NC,
                children: [
                    (0, i.jsx)("div", {
                        className: ev.x6,
                        children: (0, i.jsx)(b.$, {
                            variant: "primary",
                            text: V.intl.string(V.t.oPAx73),
                            onClick: k,
                            fullWidth: !0,
                        }),
                    }),
                    I &&
                        (0, i.jsx)("div", {
                            className: ev.x6,
                            children: (0, i.jsx)(b.$, {
                                variant: "secondary",
                                text: V.intl.string(V.t.GoCQxU),
                                onClick: F,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === E && (0, i.jsx)(ed.Lp, { className: ev.AP, text: V.intl.string(V.t.y2b7CA) }),
            "beta" === E &&
                (0, i.jsx)(ed.Lp, {
                    className: ev.AP,
                    text: V.intl.string(V.t.oW0eUd),
                    color: R.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eR(e) {
    let { guildId: t, powerup: n, costDecorator: r, badge: s, onClose: a } = e,
        o = (0, eS.Ay)(t, n).type;
    return (0, i.jsx)(eC, {
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
let eO = new Map([[eg.W5, "+"]]),
    eb = r.forwardRef((e, t) => {
        var n;
        let a,
            o,
            { guild: l, onClose: u } = e;
        r.useEffect(() => {
            T.A.shouldFetchCatalogForGuild(l.id) && (0, eh.AK)(l.id),
                T.A.shouldFetchPowerupsForGuild(l.id) && (0, eh.Xd)(l.id);
        }, [l.id]);
        let c = Array.from(
            ((n = l.id),
            (a = (0, s.bG)([T.A], () => T.A.getStateForGuild(n)?.powerupCatalog?.[em.o9.PERK])),
            (o = (function (e) {
                let t = (0, A.C$)(e, "useGameServerPerk"),
                    n = (0, s.bG)([I.A], () => I.A.getLowestGameCostForGuild(e)),
                    { gameName: i, gameName2: a } = (0, eE.A)();
                return r.useMemo(
                    () =>
                        t && null != n
                            ? {
                                  skuId: eg.W5,
                                  title: V.intl.string(eA.default["B3OfL/"]),
                                  description: V.intl.format(eA.default["+UqyGU"], { gameName: i, gameName2: a }),
                                  cost: n,
                                  dependencies: [],
                                  type: em.o9.PERK,
                                  animatedImageUrl: eI,
                                  staticImageUrl: eI,
                              }
                            : null,
                    [t, n, i, a],
                );
            })(n)),
            r.useMemo(() => {
                let e = [...(a ?? [])];
                return null != o && e.push(o), e.filter((e) => !eT.has(e.skuId));
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
                                  children: V.intl.string(et.default.wjI18Q),
                              }),
                              (0, i.jsx)(O.E, {
                                  className: ev.fV,
                                  variant: "text-md/medium",
                                  children: V.intl.format(et.default.S562fn, {
                                      helpDeskArticle: eN.A.getArticleURL(G.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: ev.vY,
                          children: c.map((e) =>
                              (0, i.jsx)(
                                  eR,
                                  {
                                      guildId: l.id,
                                      powerup: e,
                                      costDecorator: eO.get(e.skuId),
                                      badge: em.ys[e.skuId],
                                      onClose: u,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eb.displayName = "GuildBoostingMarketingPerkCards";
var eD = n(527113),
    eL = n(862482),
    ew = n(187322),
    eM = n(944304),
    eP = n(672350);
let ex = function (e) {
    let { closeLayer: t, guild: n, isVisible: s } = e,
        a = r.useRef(null),
        o = (0, el.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(ea.animated.div, {
        className: eP.iE,
        style: o,
        children: (0, i.jsx)("div", {
            ref: a,
            className: eP.iJ,
            children: (0, i.jsxs)(ew.xp, {
                containerRef: a,
                children: [
                    (0, i.jsxs)("div", {
                        className: eP.OA,
                        children: [
                            (0, i.jsx)(L.Ay, { className: eP.$f, guild: n, size: L.Ay.Sizes.SMALL }),
                            (0, i.jsx)(O.E, { className: eP.J5, variant: "text-md/semibold", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)(eM.A, {
                        className: eP.lI,
                        guild: n,
                        analyticsLocation: {
                            page: G.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: G.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: G.ZSU.BUTTON_CTA,
                            objectType: G.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !s,
                        size: eL.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var ek = n(192308),
    eU = n(65154),
    eG = n(387772),
    eF = n(519636);
function eV(e) {
    let { guild: t, analyticsLocation: s, videoPlacement: a, sourceAnalyticsLocations: o } = e,
        l = r.useCallback(() => {
            (0, ek.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("6836"), n.e("85810")]).then(n.bind(n, 872233));
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
    return (0, i.jsxs)(p.D, {
        className: eG.kL,
        onClick: l,
        "aria-label": V.intl.string(et.default["103aY+"]),
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
        y = r.useRef(null),
        N = r.useRef(null),
        v = r.useRef(null),
        C = r.useCallback(() => {
            a?.();
        }, [a]),
        R = r.useCallback(() => {
            null != v.current &&
                null != N.current &&
                N.current.scrollIntoViewNode({ node: v.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        O = r.useCallback(
            (e) => {
                e &&
                    !d.current &&
                    (_.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: G.liQ.PREMIUM_GUILD_USER_MODAL,
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
        _.default.track(G.HAw.OPEN_MODAL, {
            type: G.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: h,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
        });
    }, [n.id, t, h]);
    let b = (0, A.C$)(n.id, "GuildBoostingMarketingRefresh"),
        D = (0, s.bG)([I.A], () => I.A.shouldFetchCatalogForGuild(n.id));
    r.useEffect(() => {
        b && D && (0, g.z9)(n.id);
    }, [n.id, b, D]);
    let L = (0, s.bG)([T.A], () => T.A.hasFetchedPowerupCatalog(n.id));
    return (
        r.useEffect(() => {
            if (o && L) {
                let e = setTimeout(() => {
                    R();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [o, R, L]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != a &&
                    (0, i.jsx)("div", {
                        className: z.Yk,
                        children: (0, i.jsx)(p.D, {
                            className: z.b,
                            onClick: C,
                            "aria-label": V.intl.string(V.t.cpT0Cq),
                            children: (0, i.jsx)(E.P, { size: "md", color: "currentColor" }),
                        }),
                    }),
                (0, i.jsxs)(m.Gt, {
                    ref: N,
                    className: z.XG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: z.wx,
                            children: [
                                (0, i.jsx)(q, { className: z.y2 }),
                                (0, i.jsxs)("div", {
                                    className: z.AZ,
                                    children: [
                                        (0, i.jsx)(H, {
                                            guild: n,
                                            closeLayer: C,
                                            onCtaVisibilityChange: c,
                                            className: z.Oh,
                                        }),
                                        (0, i.jsx)(eV, {
                                            guild: n,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: h,
                                        }),
                                        (0, i.jsx)(es, { guild: n }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: z.uE,
                            children: (0, i.jsx)(eb, { ref: v, guild: e.guild, onClose: C }),
                        }),
                        (0, i.jsx)("div", {
                            className: z.o6,
                            children: (0, i.jsxs)("div", {
                                className: z.y$,
                                children: [
                                    (0, i.jsx)(eD.A, { className: z.Q, guild: n }),
                                    (0, i.jsx)(S.A, {}),
                                    (0, i.jsx)(j.A, {}),
                                ],
                            }),
                        }),
                        (0, i.jsx)(f.L, {
                            innerRef: y,
                            onChange: O,
                            children: (0, i.jsx)("div", { ref: y, className: z.mR }),
                        }),
                    ],
                }),
                (0, i.jsx)(ex, { guild: n, isVisible: !u, closeLayer: C }),
            ],
        })
    );
}
let eH = "BoostedGuildPerksModalConnected",
    ej = (e) => {
        let { guildId: t, close: n, location: u, registerDismissModalHandler: h, scrollToPowerupCards: f } = e,
            p = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
            E = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]),
            m = (0, a.A)(() => Date.now()),
            { analyticsLocations: g } = (0, l.Ay)(o.A.BOOSTED_GUILD_PERKS_MODAL),
            A = E?.id,
            I = r.useCallback(() => {
                n(),
                    null != A &&
                        _.default.track(G.HAw.MODAL_DISMISSED, {
                            type: G.liQ.PREMIUM_GUILD_USER_MODAL,
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
                (0, i.jsx)(ej, {
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
            layerKey: eH,
            onEscape: () =>
                h._.hasSubscribers(G.jej.MODAL_CLOSE)
                    ? (h._.dispatch(G.jej.MODAL_CLOSE), !0)
                    : null != s.current && (s.current(), !0),
        },
    );
}
