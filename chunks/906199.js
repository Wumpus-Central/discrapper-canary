i.d(t, { Zt: () => eF, K4: () => eW });
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
    v = i(831617),
    A = i(475669),
    x = i(645619),
    S = i(333722),
    I = i(503698),
    b = i.n(I),
    R = i(297264),
    N = i(104510),
    j = i(661531),
    C = i(834730),
    G = i(821609),
    V = i(597770),
    y = i(548118),
    M = i(532794),
    P = i(56815),
    U = i(864310),
    O = i(338548),
    L = i(178368),
    D = i(158045),
    k = i(987144),
    w = i(652215),
    z = i(202541),
    B = i(375708),
    F = i(673555);
let H = function (e) {
    let { className: t, closeLayer: i, guild: a, onCtaVisibilityChange: l } = e,
        c = n.useRef(null),
        d = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (0, r.bG)([L.A], () => L.A.boostSlots),
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
    async function v() {
        p(!0),
            await (0, k.g)({
                analyticsLocations: h,
                analyticsLocation: {
                    page: w.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: w.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: w.ZSU.BUTTON_CTA,
                    objectType: w.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: i,
            }),
            p(!1);
    }
    return (0, s.jsxs)("div", {
        className: b()(F.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: F.$R,
                children: [
                    (0, s.jsx)(y.Ay, { className: F.$f, guild: a, size: y.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: F.CR,
                        children: [
                            (0, s.jsx)(R.D, { className: F.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, s.jsxs)("div", {
                                className: F.SJ,
                                children: [
                                    (0, s.jsx)(N._, {
                                        color:
                                            f > 0 ? j.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: b()(F.Me, { [F.S3]: f > 0 }),
                                    }),
                                    (0, s.jsx)(C.E, {
                                        className: F.n,
                                        variant: "text-md/semibold",
                                        children: B.intl.format(B.t["pob/cL"], { subscriptions: f }),
                                    }),
                                ],
                            }),
                            _ > 0
                                ? (0, s.jsx)(C.E, {
                                      className: F.EV,
                                      variant: "text-sm/normal",
                                      children: B.intl.format(B.t.Jeto2u, { numSubscriptions: _ }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: F.mY,
                children: [
                    (0, s.jsx)("h1", { className: F.R_, children: B.intl.string(B.t.N4sqzL) }),
                    g ? (0, s.jsx)(O.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: F.Sq,
                        children: [
                            (0, s.jsx)(T.L, {
                                innerRef: c,
                                onChange: l,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: c,
                                    className: F.dp,
                                    children: (0, s.jsx)(G.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: N._,
                                        text: B.intl.string(B.t.gKmQ1G),
                                        onClick: v,
                                        loading: E,
                                        disabled: g,
                                    }),
                                }),
                            }),
                            D.Ay.hasFreeBoosts(d) || D.Ay.isPremium(d, z.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(G.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: V.GiftIcon,
                                      text: B.intl.string(B.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, M.A)({
                                              subscriptionTier: z.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: h,
                                              analyticsObject: {
                                                  page: w.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: w.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: w.ZSU.BUTTON_ICON,
                                                  objectType: w.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                              ...(0, P.Dv)(z.pe.TIER_2, !0, "guild_boosting_marketing_cta_bar"),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(G.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: B.intl.string(B.t.Q43TvC),
                                      onClick: function () {
                                          (0, M.A)({
                                              initialPlanId: null,
                                              subscriptionTier: z.pe.TIER_2,
                                              analyticsLocations: h,
                                              analyticsObject: {
                                                  page: w.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: w.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: w.ZSU.BUTTON_ICON,
                                                  objectType: w.AnalyticsObjectTypes.BUY,
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
var W = i(232122),
    Q = i(366010),
    K = i(736653),
    Y = i(303136),
    J = i(676279),
    Z = i(432528);
function q(e) {
    let { className: t } = e,
        i = (0, K.Ay)(),
        n = (0, Q.q)(i),
        r = (0, J.TM)()
            ? n
                ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
                : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
            : n
              ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
              : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: Z.YL }),
            (0, s.jsx)(
                Y.A,
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
function $(e) {
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
function X(e) {
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
function ee(e) {
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
var et = i(210273),
    ei = i(508155),
    es = i(25525),
    en = i(381881);
function er(e) {
    let { tier: t, isActive: i } = e,
        n = t === w.TVA.TIER_1,
        r = t === w.TVA.TIER_3,
        a = t === w.TVA.TIER_1 ? $ : t === w.TVA.TIER_2 ? X : ee;
    return (0, s.jsxs)("div", {
        className: en.MY,
        children: [
            (0, s.jsx)("div", { className: b()(en.hr, { [en.ti]: i, [en.YO]: !i, [en.JQ]: n, [en.Uz]: r }) }),
            (0, s.jsx)("div", {
                className: b()(en.Zj, {
                    [en.jv]: i,
                    [en.ip]: t === w.TVA.TIER_1,
                    [en.p3]: t === w.TVA.TIER_2,
                    [en.wF]: t === w.TVA.TIER_3,
                }),
                children: (0, s.jsx)(a, { alt: "", ariaHidden: !0, size: 24 }),
            }),
        ],
    });
}
function ea(e) {
    let { guild: t, definition: i } = e,
        { tier: n, perks: r } = i,
        a = t.premiumTier >= n,
        l = w.M2T[n];
    return (0, s.jsxs)("div", {
        className: b()(en.Nr, { [en.Bm]: a, [en.c]: !a }),
        children: [
            (0, s.jsx)(er, { tier: n, isActive: a }),
            (0, s.jsxs)("div", {
                className: en.zI,
                children: [
                    (0, s.jsxs)("div", {
                        className: en.$h,
                        children: [
                            (0, s.jsx)(R.D, {
                                className: b()(en.JJ, { [en.eX]: !a }),
                                variant: "heading-xl/semibold",
                                color: a ? "text-strong" : void 0,
                                children: B.intl.string(
                                    n === w.TVA.TIER_1 ? B.t.nzXtaS : n === w.TVA.TIER_2 ? B.t["h33/uW"] : B.t.BfF6ED,
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: en.yC,
                                children: [
                                    (0, s.jsx)(N._, { size: "xs", color: "currentColor" }),
                                    (0, s.jsx)(C.E, {
                                        variant: "text-md/medium",
                                        children: B.intl.format(B.t["pob/cL"], { subscriptions: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: en.PJ,
                        children: [
                            r.slice(0, 4).map((e, t) => {
                                if (null != e.predicate && !e.predicate()) return null;
                                let i = (0, et.X)(e.perkIcon);
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: b()(en.bK, { [en.o]: !a }),
                                        children: [
                                            (0, s.jsx)(i, {
                                                className: en.kf,
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
                                className: en.wx,
                                variant: "text-md/medium",
                                children: B.intl.string(es.default.nIj3LZ),
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
        className: b()(en.iE, i),
        children: ei.t.map((e) => (0, s.jsx)(ea, { guild: t, definition: e }, e.tier)),
    });
}
var eo = i(950372),
    ec = i(172218),
    ed = i(717421),
    eu = i(289704),
    em = i(628284),
    eg = i(812993),
    eT = i(775602),
    eh = i(868652),
    eE = i(363487);
i(321073);
var ep = i(512750),
    e_ = i(948134),
    ef = i(628049),
    ev = i(568065),
    eA = i(394107);
let ex =
        "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png",
    eS = new Set([...Array.from(ev.aH), ...Array.from(ev.m_), ep.FB]);
var eI = i(998418),
    eb = i(828162);
i(667532);
var eR = i(975571),
    eN = i(658937);
function ej(e) {
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
        f = i !== ev.b_.INACTIVE,
        v = (0, eE.A)(t),
        A = (0, r.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        x = n.useRef(null),
        [S, I] = n.useState(!1),
        [V, y] = n.useState(!1),
        [M, P] = n.useState(!1),
        U = V || M,
        O = n.useCallback(() => {
            let e = d.A.getGuild(t);
            null != e &&
                (0, k.g)({
                    analyticsLocation: {
                        page: w.liQ.GUILD_POWERUPS_MARKETING,
                        section: w.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: _,
                    guild: e,
                });
        }, [t, _]),
        L = n.useCallback(() => {
            p(), (0, eb.A)(t, l.A.GUILD_POWERUPS_MARKETING, h.skuId);
        }, [t, h.skuId, p]),
        D = { tension: 400, friction: 30 },
        z = (0, ed.z)({ scale: U ? 0.85 : 1, y: U ? -32 : 0, config: D }),
        F = (0, ed.z)({ scale: U ? 0.7 : 1, y: U ? -35 : 0, config: D }),
        H = (0, ed.z)({ y: U ? -32 : 0, config: D }),
        W = (0, ed.z)({ opacity: +!!U, transform: U ? "translateY(0)" : "translateY(16px)", config: D }),
        Q = n.useCallback((e) => {
            e && I(!0);
        }, []),
        K = n.useCallback(() => {
            P(!0);
        }, []),
        Y = n.useCallback((e) => {
            let t = e.relatedTarget;
            (null != t && e.currentTarget.contains(t)) || P(!1);
        }, []),
        J = (0, ec.K)(Q),
        Z = h.skuId === ef.W5;
    return (0, s.jsxs)("div", {
        className: b()(eN.Nr, { [eN.fM]: S }),
        onFocus: K,
        onBlur: Y,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1),
        children: [
            (0, s.jsx)("div", { className: eN.sL, ref: J }),
            (0, s.jsx)("div", {
                className: eN.kQ,
                children: Z
                    ? (0, s.jsx)(eo.animated.div, {
                          className: eN.bm,
                          style: { transform: (0, eo.to)([F.scale, F.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                          children: (0, s.jsx)(eu.E, {
                              withReducedMotion: "halt",
                              eventTargetRef: x,
                              fit: "contain",
                              className: eN.Sq,
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, s.jsx)(eo.animated.img, {
                          className: eN.bm,
                          src: U && null != T && "" !== T && !A ? T : g,
                          alt: "",
                          style: { transform: (0, eo.to)([z.scale, z.y], (e, t) => `scale(${e}) translateY(${t}px)`) },
                      }),
            }),
            (0, s.jsxs)(eo.animated.div, {
                style: { ...H, transform: H.y.to((e) => `translateY(${e}px)`) },
                className: eN.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eN.P_,
                        children: [
                            (0, s.jsx)(R.D, { className: eN.DD, variant: "heading-lg/semibold", children: a }),
                            (0, s.jsx)(C.E, { className: eN.h_, variant: "text-md/medium", children: c }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eN.jp,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eN.qS,
                                children: [
                                    (0, s.jsx)(N._, { size: "xs", color: j.A.unsafe_rawColors.ILLO_PINK_40 }),
                                    (0, s.jsx)(C.E, {
                                        className: eN.Vv,
                                        variant: "text-sm/semibold",
                                        children: B.intl.formatToPlainString(
                                            null != m ? eA.default["G/aTXi"] : eA.default.r9pa9K,
                                            { boostCount: u },
                                        ),
                                    }),
                                ],
                            }),
                            f &&
                                (0, s.jsxs)("div", {
                                    className: b()(eN.qS, eN.nt),
                                    children: [
                                        (0, s.jsx)(em.y, { size: "xs", color: "currentColor" }),
                                        (0, s.jsx)(C.E, {
                                            className: eN.nt,
                                            variant: "text-sm/semibold",
                                            children: B.intl.string(B.t.pCMkDb),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(eo.animated.div, {
                style: W,
                className: eN.NC,
                children: [
                    (0, s.jsx)("div", {
                        className: eN.x6,
                        children: (0, s.jsx)(G.$, {
                            variant: "primary",
                            text: B.intl.string(B.t.oPAx73),
                            onClick: O,
                            fullWidth: !0,
                        }),
                    }),
                    v &&
                        (0, s.jsx)("div", {
                            className: eN.x6,
                            children: (0, s.jsx)(G.$, {
                                variant: "secondary",
                                text: B.intl.string(B.t.GoCQxU),
                                onClick: L,
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            "new" === E && (0, s.jsx)(eg.Lp, { className: eN.AP, text: B.intl.string(B.t.y2b7CA) }),
            "beta" === E &&
                (0, s.jsx)(eg.Lp, {
                    className: eN.AP,
                    text: B.intl.string(B.t.oW0eUd),
                    color: j.A.colors.BACKGROUND_BRAND.css,
                }),
        ],
    });
}
function eC(e) {
    let { guildId: t, powerup: i, costDecorator: n, badge: r, onClose: a } = e,
        l = (0, eI.Ay)(t, i).type;
    return (0, s.jsx)(ej, {
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
let eG = new Map([[ef.W5, "+"]]),
    eV = n.forwardRef((e, t) => {
        var i;
        let a,
            l,
            { guild: o, onClose: c } = e;
        n.useEffect(() => {
            x.A.shouldFetchCatalogForGuild(o.id) && (0, eh.AK)(o.id),
                x.A.shouldFetchPowerupsForGuild(o.id) && (0, eh.Xd)(o.id);
        }, [o.id]);
        let d = (function (e) {
            let t = [...e].reverse(),
                i = t.findIndex((e) => e.skuId === ep.d0);
            if (i > 0) {
                let [e] = t.splice(i, 1);
                t.unshift(e);
            }
            let s = t.findIndex((e) => e.skuId === ef.W5);
            if (-1 !== s && s !== t.length - 1) {
                let [e] = t.splice(s, 1);
                t.push(e);
            }
            return t;
        })(
            ((i = o.id),
            (a = (0, r.bG)([x.A], () => x.A.getStateForGuild(i)?.powerupCatalog?.[ev.o9.PERK])),
            (l = (function (e) {
                let t = (0, v.C$)(e, "useGameServerPerk"),
                    i = (0, r.bG)([A.A], () => A.A.getLowestGameCostForGuild(e)),
                    { gameName: s, gameName2: a } = (0, e_.A)();
                return n.useMemo(
                    () =>
                        t && null != i
                            ? {
                                  skuId: ef.W5,
                                  title: B.intl.string(eA.default["B3OfL/"]),
                                  description: B.intl.format(eA.default["+UqyGU"], { gameName: s, gameName2: a }),
                                  cost: i,
                                  dependencies: [],
                                  type: ev.o9.PERK,
                                  animatedImageUrl: ex,
                                  staticImageUrl: ex,
                              }
                            : null,
                    [t, i, s, a],
                );
            })(i)),
            n.useMemo(() => {
                let e = [...(a ?? [])];
                return null != l && e.push(l), e.filter((e) => !eS.has(e.skuId));
            }, [a, l]) ?? []),
        ).slice(0, 6);
        return 0 === d.length
            ? null
            : (0, s.jsxs)("div", {
                  ref: t,
                  className: eN.iE,
                  children: [
                      (0, s.jsxs)("div", {
                          className: eN.ND,
                          children: [
                              (0, s.jsx)(R.D, {
                                  className: eN.R_,
                                  variant: "heading-xxl/semibold",
                                  children: B.intl.string(es.default.wjI18Q),
                              }),
                              (0, s.jsx)(C.E, {
                                  className: eN.fV,
                                  variant: "text-md/medium",
                                  children: B.intl.format(es.default.S562fn, {
                                      helpDeskArticle: eR.A.getArticleURL(w.MVz.GUILD_BOOSTING_FAQ),
                                  }),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: eN.vY,
                          children: d.map((e) =>
                              (0, s.jsx)(
                                  eC,
                                  {
                                      guildId: o.id,
                                      powerup: e,
                                      costDecorator: eG.get(e.skuId),
                                      badge: ev.ys[e.skuId],
                                      onClose: c,
                                  },
                                  `perk-card-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
eV.displayName = "GuildBoostingMarketingPerkCards";
var ey = i(527113),
    eM = i(862482),
    eP = i(944304),
    eU = i(430815);
let eO = function (e) {
    let { closeLayer: t, guild: i, isVisible: r } = e,
        a = n.useRef(null),
        l = (0, ed.z)({
            transform: r ? "translateY(-100%)" : "translateY(0%)",
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(eo.animated.div, {
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
                    (0, s.jsx)(eP.A, {
                        className: eU.lI,
                        guild: i,
                        analyticsLocation: {
                            page: w.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: w.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                            object: w.ZSU.BUTTON_CTA,
                            objectType: w.AnalyticsObjectTypes.BUY,
                        },
                        closeLayer: t,
                        pauseAnimation: !r,
                        size: eM.$n.Sizes.SMALL,
                        useExpressiveButton: !0,
                    }),
                ],
            }),
        }),
    });
};
var eL = i(192308),
    eD = i(65154),
    ek = i(149881),
    ew = i(519636);
function ez(e) {
    let { guild: t, analyticsLocation: r, videoPlacement: a, sourceAnalyticsLocations: l } = e,
        o = n.useCallback(() => {
            (0, eL.openModalLazy)(async () => {
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
                        videoPlacement: a,
                        sourceAnalyticsLocations: l,
                    });
            });
        }, [r, t.id, l, a]);
    return (0, s.jsxs)(E.D, {
        className: ek.kL,
        onClick: o,
        "aria-label": B.intl.string(es.default["103aY+"]),
        children: [
            (0, s.jsx)("img", { alt: "", className: ek.xn, src: ew.A }),
            (0, s.jsx)("div", { className: ek.Lw }),
            (0, s.jsx)("div", {
                className: ek.Rr,
                children: (0, s.jsx)(eD.S, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
function eB(e) {
    let { analyticsLocation: t, guild: i, onClose: a, scrollToPowerupCards: l } = e,
        [c, d] = n.useState(!0),
        u = n.useRef(!1),
        { analyticsLocations: g } = (0, o.Ay)(),
        I = n.useRef(null),
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
                    (m.default.track(w.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        type: w.liQ.PREMIUM_GUILD_USER_MODAL,
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
        m.default.track(w.HAw.OPEN_MODAL, {
            type: w.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: g,
            location_section: t.section,
            location_object: t.object,
            guild_id: i.id,
        });
    }, [i.id, t, g]);
    let V = (0, v.C$)(i.id, "GuildBoostingMarketingRefresh"),
        y = (0, r.bG)([A.A], () => A.A.shouldFetchCatalogForGuild(i.id));
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
                        className: Z.Yk,
                        children: (0, s.jsx)(h.xp, {
                            containerRef: N,
                            children: (0, s.jsx)(E.D, {
                                className: Z.b,
                                onClick: j,
                                "aria-label": B.intl.string(B.t.cpT0Cq),
                                children: (0, s.jsx)(p.P, { size: "md", color: "currentColor" }),
                            }),
                        }),
                    }),
                (0, s.jsxs)(_.Gt, {
                    ref: b,
                    className: Z.XG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: Z.wx,
                            children: [
                                (0, s.jsx)(q, { className: Z.y2 }),
                                (0, s.jsxs)("div", {
                                    className: Z.AZ,
                                    children: [
                                        (0, s.jsx)(H, {
                                            guild: i,
                                            closeLayer: j,
                                            onCtaVisibilityChange: d,
                                            className: Z.Oh,
                                        }),
                                        (0, s.jsx)(ez, {
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
                            className: Z.uE,
                            children: (0, s.jsx)(eV, { ref: R, guild: e.guild, onClose: j }),
                        }),
                        (0, s.jsx)("div", {
                            className: Z.o6,
                            children: (0, s.jsxs)("div", {
                                className: Z.y$,
                                children: [
                                    (0, s.jsx)(ey.A, { className: Z.Q, guild: i }),
                                    (0, s.jsx)(S.A, {}),
                                    (0, s.jsx)(W.A, {}),
                                ],
                            }),
                        }),
                        (0, s.jsx)(T.L, {
                            innerRef: I,
                            onChange: G,
                            children: (0, s.jsx)("div", { ref: I, className: Z.mR }),
                        }),
                    ],
                }),
                (0, s.jsx)(eO, { guild: i, isVisible: !c, closeLayer: j }),
            ],
        })
    );
}
let eF = "BoostedGuildPerksModalConnected";
function eH(e) {
    let { guildId: t, close: i, location: c, registerDismissModalHandler: g, scrollToPowerupCards: T } = e,
        h = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        E = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        p = (0, a.A)(() => Date.now()),
        { analyticsLocations: _ } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
        f = E?.id,
        v = n.useCallback(() => {
            i(),
                null != f &&
                    m.default.track(w.HAw.MODAL_DISMISSED, {
                        type: w.liQ.PREMIUM_GUILD_USER_MODAL,
                        location_stack: _,
                        location_section: c.section,
                        location_object: c.object,
                        guild_id: f,
                        duration_open_ms: Date.now() - p,
                    });
        }, [_, p, c.object, c.section, i, f]);
    return (n.useLayoutEffect(() => {
        g?.(v);
    }, [v, g]),
    null == h || null == E)
        ? null
        : (0, s.jsx)(o.f5, {
              value: _,
              children: (0, s.jsx)(eB, { analyticsLocation: c, onClose: v, guild: E, scrollToPowerupCards: T }),
          });
}
function eW(e) {
    let { guildId: t, location: i, scrollToPowerupCards: n } = e,
        r = { current: null };
    (0, c.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == r.current && (r.current = a),
                (0, s.jsx)(eH, {
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
            layerKey: eF,
            onEscape: () =>
                g._.hasSubscribers(w.jej.MODAL_CLOSE)
                    ? (g._.dispatch(w.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
