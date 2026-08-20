i.d(t, { Zt: () => eB, K4: () => eH });
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
    h = i(259678),
    E = i(939249),
    p = i(789645),
    _ = i(689175),
    f = i(498480),
    A = i(831617),
    v = i(475669),
    x = i(645619),
    I = i(333722),
    S = i(503698),
    b = i.n(S),
    R = i(297264),
    N = i(104510),
    j = i(661531),
    C = i(834730),
    G = i(821609),
    V = i(597770),
    y = i(548118),
    M = i(532794),
    U = i(864310),
    P = i(338548),
    O = i(178368),
    L = i(158045),
    D = i(987144),
    k = i(652215),
    w = i(202541),
    z = i(375708),
    B = i(673555);
let F = function (e) {
    let { className: t, closeLayer: i, guild: a, onCtaVisibilityChange: l } = e,
        c = n.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([O.A], () => O.A.boostSlots),
        g = d?.isPremiumGroupMember(),
        { analyticsLocations: h } = (0, o.Ay)(),
        [E, p] = n.useState(!1),
        _ = n.useMemo(
            () =>
                Object.keys(m).filter((e) => {
                    let t = m[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [m, a.id],
        ),
        f = (0, U.A)(e.guild.id).total;
    async function A() {
        p(!0),
            await (0, D.g)({
                analyticsLocations: h,
                analyticsLocation: {
                    page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: k.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: k.ZSU.BUTTON_CTA,
                    objectType: k.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: i,
            }),
            p(!1);
    }
    return (0, s.jsxs)("div", {
        className: b()(B.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: B.$R,
                children: [
                    (0, s.jsx)(y.Ay, { className: B.$f, guild: a, size: y.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: B.CR,
                        children: [
                            (0, s.jsx)(R.D, { className: B.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, s.jsxs)("div", {
                                className: B.SJ,
                                children: [
                                    (0, s.jsx)(N._, {
                                        color:
                                            f > 0 ? j.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: b()(B.Me, { [B.S3]: f > 0 }),
                                    }),
                                    (0, s.jsx)(C.E, {
                                        className: B.n,
                                        variant: "text-md/semibold",
                                        children: z.intl.format(z.t["pob/cL"], { subscriptions: f }),
                                    }),
                                ],
                            }),
                            _ > 0
                                ? (0, s.jsx)(C.E, {
                                      className: B.EV,
                                      variant: "text-sm/normal",
                                      children: z.intl.format(z.t.Jeto2u, { numSubscriptions: _ }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: B.mY,
                children: [
                    (0, s.jsx)("h1", { className: B.R_, children: z.intl.string(z.t.N4sqzL) }),
                    g ? (0, s.jsx)(P.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: B.Sq,
                        children: [
                            (0, s.jsx)(T.L, {
                                innerRef: c,
                                onChange: l,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: c,
                                    className: B.dp,
                                    children: (0, s.jsx)(G.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: N._,
                                        text: z.intl.string(z.t.gKmQ1G),
                                        onClick: A,
                                        loading: E,
                                        disabled: g,
                                    }),
                                }),
                            }),
                            L.Ay.hasFreeBoosts(d) || L.Ay.isPremium(d, w.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(G.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: V.GiftIcon,
                                      text: z.intl.string(z.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: w.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: h,
                                              analyticsObject: {
                                                  page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: k.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: k.ZSU.BUTTON_ICON,
                                                  objectType: k.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(G.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: z.intl.string(z.t.Q43TvC),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: w.pe.TIER_2,
                                              analyticsLocations: h,
                                              analyticsObject: {
                                                  page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: k.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: k.ZSU.BUTTON_ICON,
                                                  objectType: k.AnalyticsObjectTypes.BUY,
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
    W = i(366010),
    Q = i(736653),
    K = i(303136),
    Y = i(676279),
    J = i(432528);
function Z(e) {
    let { className: t } = e,
        i = (0, Q.Ay)(),
        n = (0, W.q)(i),
        r = (0, Y.TM)()
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
                K.A,
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
function $(e) {
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
function X(e) {
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
var ee = i(210273),
    et = i(508155),
    ei = i(641641),
    es = i(381881);
function en(e) {
    let { tier: t, isActive: i } = e,
        n = t === k.TVA.TIER_1,
        r = t === k.TVA.TIER_3,
        a = t === k.TVA.TIER_1 ? q : t === k.TVA.TIER_2 ? $ : X;
    return (0, s.jsxs)("div", {
        className: es.MY,
        children: [
            (0, s.jsx)("div", { className: b()(es.hr, { [es.ti]: i, [es.YO]: !i, [es.JQ]: n, [es.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: b()(es.Zj, {
                    [es.jv]: i,
                    [es.ip]: t === k.TVA.TIER_1,
                    [es.p3]: t === k.TVA.TIER_2,
                    [es.wF]: t === k.TVA.TIER_3,
                }),
                children: (0, s.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function er(e) {
    let { guild: t, definition: i } = e,
        { tier: n, perks: r } = i,
        a = t.premiumTier >= n,
        l = k.M2T[n];
    return (0, s.jsxs)("div", {
        className: b()(es.Nr, { [es.Bm]: a, [es.c]: !a }),
        children: [
            (0, s.jsx)(en, { tier: n, isActive: a }),
            (0, s.jsxs)("div", {
                className: es.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: es.$h,
                        children: [
                            (0, s.jsx)(R.D, {
                                className: b()(es.JJ, { [es.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: z.intl.string(
                                    n === k.TVA.TIER_1 ? z.t.nzXtaS : n === k.TVA.TIER_2 ? z.t["h33/uW"] : z.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: es.yC,
                                children: [
                                    (0, s.jsx)(N._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(C.E, {
                                        variant: "text-md/medium",
                                        children: z.intl.format(z.t["pob/cL"], { subscriptions: l }),
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
                                        className: b()(es.bK, { [es.o]: !a }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: es.kf,
                                                color: a ? "var(--text-default)" : "currentColor",
                                                size: "sm",
                                            }),
                                            (0, s.jsx)(C.E, {
                                                variant: "text-md/medium",
                                                color: a ? "text-default" : void 0,
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
                                children: z.intl.string(ei.default.nIj3LZ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { guild: t, className: i } = e;
    return (0, s.jsx)("div", {
        className: b()(es.iE, i),
        children: et.t.map((e) => (0, s.jsx)(er, { guild: t, definition: e }, e.tier)),
    });
}
var el = i(53466),
    eo = i(172218),
    ec = i(717421),
    ed = i(289704),
    eu = i(628284),
    em = i(812993),
    eg = i(775602),
    eT = i(868652),
    eh = i(363487);
i(321073);
var eE = i(512750),
    ep = i(948134),
    e_ = i(628049),
    ef = i(568065),
    eA = i(632847);
let ev =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    ex = new Set([...Array.from(ef.aH), ...Array.from(ef.m_), eE.FB]);
var eI = i(998418),
    eS = i(828162);
i(667532);
var eb = i(975571),
    eR = i(658937);
function eN(e) {
    let {
            guildId: t,
            activeStatus: i,
            title: a,
            description: c,
            cost: u,
            costDecorator: m,
            staticImageUrl: g,
            animatedImageUrl: T,
            powerup: h,
            badge: E,
            onClose: p,
        } = e,
        { analyticsLocations: _ } = (0, o.Ay)(),
        f = i !== ef.b_.INACTIVE,
        A = (0, eh.A)(t),
        v = (0, r.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        x = n.useRef(null),
        [I, S] = n.useState(!1),
        [V, y] = n.useState(!1),
        [M, U] = n.useState(!1),
        P = V || M,
        O = n.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, D.g)({
                    analyticsLocation: {
                        page: k.liQ.GUILD_POWERUPS_MARKETING,
                        section: k.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: _,
                    guild: e,
                });
        }, [t, _]),
        L = n.useCallback(() => {
            p(), (0, eS.A)(t, l.A.GUILD_POWERUPS_MARKETING, h.skuId);
        }, [t, h.skuId, p]),
        w = { tension: 400, friction: 30 },
        B = (0, ec.z)({ scale: P ? 0.85 : 1, y: P ? -32 : 0, config: w }),
        F = (0, ec.z)({ scale: P ? 0.7 : 1, y: P ? -35 : 0, config: w }),
        H = (0, ec.z)({ y: P ? -32 : 0, config: w }),
        W = (0, ec.z)({ opacity: +!!P, transform: P ? "translateY(0)" : "translateY(16px)", config: w }),
        Q = n.useCallback((e) => {
            e && S(!0);
        }, []),
        K = n.useCallback(() => {
            U(!0);
        }, []),
        Y = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || U(!1);
        }, []),
        J = (0, eo.K)(Q),
        Z = h.skuId === e_.W5;
    return (0, s.jsxs)("div", {
        className: b()(eR.Nr, { [eR.fM]: I }),
        onFocus: K,
        onBlur: Y,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1),
        children: [
            (0, s.jsx)("div", { className: eR.sL, ref: J }),
            (0, s.jsx)("div", {
                className: eR.kQ,
                children: Z
                    ? (0, s.jsx)(el.animated.div, {
                          className: eR.bm,
                          style: { transform: (0, el.to)([F.scale, F.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(ed.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: x,
                              fit: "contain",
                              className: eR.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(el.animated.img, {
                          className: eR.bm,
                          src: P && null != T && "" !== T && !v ? T : g,
                          alt: "",
                          style: { transform: (0, el.to)([B.scale, B.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(el.animated.div, {
                style: { ...H, transform: H.y.to((e) => `translateY(${e}px)`) },
                className: eR.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eR.P_,
                        children: [
                            (0, s.jsx)(R.D, { className: eR.DD, variant: "heading-lg/semibold", children: a }),
                            (0, s.jsx)(C.E, { className: eR.h_, variant: "text-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eR.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eR.qS,
                                children: [
                                    (0, s.jsx)(N._, { size: "xs", color: j.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(C.E, {
                                        className: eR.Vv,
                                        variant: "text-sm/semibold",
                                        children: z.intl.formatToPlainString(
                                            null != m ? eA.default["G/aTXi"] : eA.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            f &&
                                (0, s.jsxs)("div", {
                                    className: b()(eR.qS, eR.nt),
                                    children: [
                                        (0, s.jsx)(eu.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(C.E, {
                                            className: eR.nt,
                                            variant: "text-sm/semibold",
                                            children: z.intl.string(z.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(el.animated.div, {
                style: W,
                className: eR.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eR.x6,
                        children: (0, s.jsx)(G.$, {
                            variant: "primary",
                            text: z.intl.string(z.t.oPAx73),
                            onClick: O,
                            fullWidth: !0,
                        }),
                    }),
                    A &&
                        (0, s.jsx)("div", {
                            className: eR.x6,
                            children: (0, s.jsx)(G.$, {
                                variant: "secondary",
                                text: z.intl.string(z.t.GoCQxU),
                                onClick: L,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === E && (0, s.jsx)(em.Lp, { className: eR.AP, text: z.intl.string(z.t.y2b7CA) }),
            "beta" === E &&
                (0, s.jsx)(em.Lp, {
                    className: eR.AP,
                    text: z.intl.string(z.t.oW0eUd),
                    color: j.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function ej(e) {
    let { guildId: t, powerup: i, costDecorator: n, badge: r, onClose: a } = e,
        l = (0, eI.Ay)(t, i).type;
    return (0, s.jsx)(eN, {
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
let eC = new Map([[e_.W5, "+"]]),
    eG = n.forwardRef((e, t) => {
        var i;
        let a,
            l,
            { guild: o, onClose: c } = e;
        n.useEffect(() => {
            x.A.shouldFetchCatalogForGuild(o.id) && (0, eT.AK)(o.id),
                x.A.shouldFetchPowerupsForGuild(o.id) && (0, eT.Xd)(o.id);
        }, [o.id]);
        let d = (function (e) {
            let t = [...e].reverse(),
                i = t.findIndex((e) => e.skuId === eE.d0);
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
            (a = (0, r.bG)([x.A], () => x.A.getStateForGuild(i)?.powerupCatalog?.[ef.o9.PERK])),
            (l = (function (e) {
                let t = (0, A.C$)(e, "useGameServerPerk"),
                    i = (0, r.bG)([v.A], () => v.A.getLowestGameCostForGuild(e)),
                    { gameName: s, gameName2: a } = (0, ep.A)();
                return n.useMemo(
                    () =>
                        t && null != i
                            ? {
                                  skuId: e_.W5,
                                  title: z.intl.string(eA.default["B3OfL/"]),
                                  description: z.intl.format(eA.default["+UqyGU"], { gameName: s, gameName2: a }),
                                  cost: i,
                                  dependencies: [],
                                  type: ef.o9.PERK,
                                  animatedImageUrl: ev,
                                  staticImageUrl: ev,
                              }
                            : null,
                    [t, i, s, a],
                );
            })(i)),
            n.useMemo(() => {
                let e = [...(a ?? [])];
                return null != l && e.push(l), e.filter((e) => !ex.has(e.skuId));
            }, [a, l]) ?? []),
        ).slice(0, 6);
        return 0 === d.length
            ? null
            : (0, s.jsxs)("div", {
                  ref: t,
                  className: eR.iE,
                  children: [
                      (0, s.jsxs)("div", {
                          className: eR.ND,
                          children: [
                              (0, s.jsx)(R.D, {
                                  className: eR.R_,
                                  variant: "heading-xxl/semibold",
                                  children: z.intl.string(ei.default.wjI18Q),
                              }),
                              (0, s.jsx)(C.E, {
                                  className: eR.fV,
                                  variant: "text-md/medium",
                                  children: z.intl.format(ei.default.S562fn, {
                                      helpDeskArticle: eb.A.getArticleURL(k.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: eR.vY,
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
eG.displayName = "GuildBoostingMarketingPerkCards";
var eV = i(527113),
    ey = i(862482),
    eM = i(944304),
    eU = i(430815);
let eP = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        a = n.useRef(null),
        l = (0, ec.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(el.animated.div, {
        className: eU.iE,
        style: l,
        children: (0, s.jsx)("div", {
            ref: a,
            className: eU.iJ,
            children: (0, s.jsxs)(h.xp, {
                containerRef: a,
                children: [
                    (0, s.jsxs)("div", {
                        className: eU.OA,
                        children: [
                            (0, s.jsx)(y.Ay, { className: eU.$f, guild: i, size: y.Ay.Sizes.SMALL }),
                            (0, s.jsx)(C.E, { className: eU.J5, variant: "text-md/semibold", children: i.name }),
                        ],
                    }),
                    (0, s.jsx)(eM.A, {
                        className: eU.lI,
                        guild: i,
                        analyticsLocation: {
                            page: k.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: k.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: k.ZSU.BUTTON_CTA,
                            objectType: k.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !r,
                        size: ey.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eO = i(192308),
    eL = i(65154),
    eD = i(149881),
    ek = i(519636);
function ew(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: a, sourceAnalyticsLocations: l } = e,
        o = n.useCallback(() => {
            (0, eO.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    i.e("434168"),
                    i.e("601031"),
                    i.e("482815"),
                    i.e("170653"),
                    i.e("784103"),
                    i.e("896232"),
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
                        videoPlacement: a,
                        sourceAnalyticsLocations: l,
                    });
            });
        }, [r, t.id, l, a]);
    return (0, s.jsxs)(E.D, {
        className: eD.kL,
        onClick: o,
        "aria-label": z.intl.string(ei.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: eD.xn, src: ek.A }),
            (0, s.jsx)("div", { className: eD.Lw }),
            (0, s.jsx)("div", {
                className: eD.Rr,
                children: (0, s.jsx)(eL.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function ez(e) {
    let { analyticsLocation: t, guild: i, onClose: a, scrollToPowerupCards: l } = e,
        [c, d] = n.useState(!0),
        u = n.useRef(!1),
        { analyticsLocations: g } = (0, o.Ay)(),
        S = n.useRef(null),
        b = n.useRef(null),
        R = n.useRef(null),
        N = n.useRef(null),
        j = n.useCallback(() => {
            a?.();
        }, [a]),
        C = n.useCallback(() => {
            null != R.current &&
                null != b.current &&
                b.current.scrollIntoViewNode({ node: R.current, animate: !0, shouldScrollToStart: !0 });
        }, []),
        G = n.useCallback(
            (e) => {
                e &&
                    !u.current &&
                    (m.default.track(k.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: k.liQ.PREMIUM_GUILD_USER_MODAL,
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
        m.default.track(k.HAw.OPEN_MODAL, {
            type: k.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: g,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, g]);
    let V = (0, A.C$)(i.id, "GuildBoostingMarketingRefresh"),
        y = (0, r.bG)([v.A], () => v.A.shouldFetchCatalogForGuild(i.id));
    n.useEffect(() => {
        V && y && (0, f.z9)(i.id);
    }, [i.id, V, y]);
    let M = (0, r.bG)([x.A], () => x.A.hasFetchedPowerupCatalog(i.id));
    return (
        n.useEffect(() => {
            if (l && M) {
                let e = setTimeout(() => {
                    C();
                }, 100);
                return () => clearTimeout(e);
            }
        }, [l, C, M]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                null != a &&
                    (0, s.jsx)("div", {
                        ref: N,
                        className: J.Yk,
                        children: (0, s.jsx)(h.xp, {
                            containerRef: N,
                            children: (0, s.jsx)(E.D, {
                                className: J.b,
                                onClick: j,
                                "aria-label": z.intl.string(z.t.cpT0Cq),
                                children: (0, s.jsx)(p.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(_.Gt, {
                    ref: b,
                    className: J.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: J.wx,
                            children: [
                                (0, s.jsx)(Z, { className: J.y2 }),
                                (0, s.jsxs)("div", {
                                    className: J.AZ,
                                    children: [
                                        (0, s.jsx)(F, {
                                            guild: i,
                                            closeLayer: j,
                                            onCtaVisibilityChange: d,
                                            className: J.Oh,
                                        }),
                                        (0, s.jsx)(ew, {
                                            guild: i,
                                            analyticsLocation: t,
                                            videoPlacement: "top",
                                            sourceAnalyticsLocations: g,
                                        }),
                                        (0, s.jsx)(ea, { guild: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: J.uE,
                            children: (0, s.jsx)(eG, { ref: R, guild: e.guild, onClose: j }),
                        }),
                        (0, s.jsx)("div", {
                            className: J.o6,
                            children: (0, s.jsxs)("div", {
                                className: J.y$,
                                children: [
                                    (0, s.jsx)(eV.A, { className: J.Q, guild: i }),
                                    (0, s.jsx)(I.A, {}),
                                    (0, s.jsx)(H.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(T.L, {
                            innerRef: S,
                            onChange: G,
                            children: (0, s.jsx)("div", { ref: S, className: J.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eP, { guild: i, isVisible: !c, closeLayer: j }),
            ],
        })
    );
}
let eB = "BoostedGuildPerksModalConnected";
function eF(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: g, scrollToPowerupCards: T } = e,
        h = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        E = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        p = (0, a.A)(() => Date.now()),
        { analyticsLocations: _ } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
        f = E?.id,
        A = n.useCallback(() => {
            i(),
                null != f &&
                    m.default.track(k.HAw.MODAL_DISMISSED, {
                        type: k.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: _,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: f,
                        duration_open_ms: Date.now() - p,
                    });
        }, [_, p, c.object, c.section, i, f]);
    return (n.useLayoutEffect(() => {
        g?.(A);
    }, [A, g]),
    null == h || null == E)
        ? null
        : (0, s.jsx)(o.f5, {
              value: _,
              children: (0, s.jsx)(ez, { analyticsLocation: c, onClose: A, guild: E, scrollToPowerupCards: T }),
          });
}
function eH(e) {
    let { guildId: t, location: i, scrollToPowerupCards: n } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == r.current && (r.current = a),
                (0, s.jsx)(eF, {
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
            layerKey: eB,
            onEscape: () =>
                g._.hasSubscribers(k.jej.MODAL_CLOSE)
                    ? (g._.dispatch(k.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
