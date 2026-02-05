"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(172218),
    u = n(158954),
    c = n(311907),
    d = n(990078),
    _ = n(397927),
    f = n(793574),
    p = n(688810),
    h = n(987144),
    m = n(12711),
    g = n(71393),
    E = n(287809),
    A = n(975571),
    I = n(942975),
    T = n(645619),
    y = n(990208),
    S = n(363487),
    v = n(263215),
    C = n(998418),
    b = n(828162),
    N = n(800007),
    R = n(88001),
    O = n(568065),
    D = n(652215),
    L = n(519412),
    w = n(333354),
    x = n(985018),
    P = n(213378),
    M = n(329431);
function k(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: A,
            cost: I,
            costDecorator: T,
            imageUrl: y,
            skuId: v,
            isNew: C,
            onClose: k,
            onHover: U,
        } = e,
        { analyticsLocations: G } = (0, p.Ay)(),
        V = n !== O.b_.INACTIVE,
        F = (0, S.A)(t),
        B = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        j = i.useRef(null),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(!1),
        z = W,
        $ = i.useCallback(() => {
            let e = g.A.getGuild(t);
            null != e &&
                (0, h.g)({
                    analyticsLocation: {
                        page: D.liQ.GUILD_POWERUPS_MARKETING,
                        section: D.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: G,
                    guild: e,
                });
        }, [t, G]),
        q = i.useCallback(() => {
            k(), (0, b.A)(t, f.A.GUILD_POWERUPS_MARKETING, v);
        }, [t, v, k]),
        Z = { tension: 400, friction: 30 },
        Q = (0, _.zhh)({
            transform: z
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: Z,
        }),
        X = (0, _.zhh)({
            transform: z ? "translateX(0%) translateY(16px) scale(0.9)" : "translateX(0%) translateY(24px) scale(1.2)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: Z,
        }),
        J = (0, _.zhh)({ y: z ? -25 : 0, config: Z }),
        ee = (0, _.zhh)({ opacity: +!!z, transform: z ? "translateY(-10px)" : "translateY(20px)", config: Z }),
        et = i.useCallback((e) => {
            e && Y(!0);
        }, []),
        en = (0, l.K)(et),
        er = v === N.W5;
    return (0, r.jsxs)("div", {
        ref: j,
        className: s()(M.p3, M.sc, P.zL, { [M.i0]: H }),
        onMouseEnter: () => {
            K(!0), U?.(!0);
        },
        onMouseLeave: () => {
            K(!1), U?.(!1);
        },
        children: [
            (0, r.jsx)("div", { className: M.sL, ref: en }),
            (0, r.jsx)("div", {
                className: M.BL,
                children: er
                    ? (0, r.jsx)(o.animated.div, {
                          className: s()(M.e_, P.Sl, P.$b),
                          style: X,
                          children: (0, r.jsx)(u.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: j,
                              fit: "contain",
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, { className: s()(M.e_, P.Sl), src: y, alt: "", style: Q }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...J, transform: J.y.to((e) => `translateY(${e}px)`) },
                className: s()(M.hQ, P.hQ),
                children: [
                    (0, r.jsx)(m.xp, {
                        heading: a,
                        description: A,
                        label: x.intl.formatToPlainString(w.default.QOacIS, { quantity: I, decorator: T ?? "" }),
                        isEnabled: V,
                    }),
                    (0, r.jsxs)(o.animated.div, {
                        style: ee,
                        className: M.NC,
                        children: [
                            (0, r.jsx)(d.m, {
                                text: x.intl.formatToPlainString(L.default["5xN/C1"], {
                                    premiumGroupProductName: (0, R.DP)(),
                                }),
                                shouldShow: B?.isPremiumGroupMember() === !0,
                                children: (0, r.jsx)("div", {
                                    className: M.x6,
                                    children: (0, r.jsx)(_.Button, {
                                        variant: "primary",
                                        text: x.intl.string(x.t.oPAx73),
                                        onClick: $,
                                        disabled: B?.isPremiumGroupMember(),
                                        fullWidth: !0,
                                    }),
                                }),
                            }),
                            F &&
                                (0, r.jsx)("div", {
                                    className: M.x6,
                                    children: (0, r.jsx)(_.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t.GoCQxU),
                                        onClick: q,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            C && (0, r.jsx)(_.LpS, { className: M.zG, text: x.intl.string(x.t.y2b7CA) }),
            H && (0, r.jsx)("div", { className: M.Q4 }),
        ],
    });
}
function U(e) {
    let { guildId: t, powerup: n, costDecorator: a, isNew: s, onClose: o } = e,
        [l, u] = i.useState(!1),
        c = (0, C.Ay)(t, n).type,
        d = (0, y.A)(n, l);
    return (0, r.jsx)(k, {
        guildId: t,
        activeStatus: c,
        title: n.title,
        description: n.description,
        cost: n.cost,
        imageUrl: d,
        skuId: n.skuId,
        costDecorator: a,
        isNew: s,
        onClose: o,
        onHover: (e) => u(e),
    });
}
let G = 3,
    V = new Set([N.W5]),
    F = new Map([[N.W5, "+"]]),
    B = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            T.A.shouldFetchCatalogForGuild(n.id) && (0, I.AK)(n.id),
                T.A.shouldFetchPowerupsForGuild(n.id) && (0, I.Xd)(n.id);
        }, [n.id]);
        let s = Array.from((0, v.A)(n.id) ?? [])
            .reverse()
            .slice(0, G);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: P.kL,
                  children: [
                      (0, r.jsx)(u.DZT, {
                          variant: "heading-xxl/extrabold",
                          children: x.intl.string(w.default.wjI18Q),
                      }),
                      (0, r.jsx)(u.EYj, {
                          variant: "text-lg/medium",
                          children: x.intl.format(w.default.OdCzjA, {
                              helpDeskArticle: A.A.getArticleURL(D.MVz.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: P.DO,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  U,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: F.get(e.skuId),
                                      isNew: V.has(e.skuId),
                                      onClose: a,
                                  },
                                  `guild-powerup-marketing-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
B.displayName = "GuildPowerupsMarketingPowerupCards";
let j = B;
