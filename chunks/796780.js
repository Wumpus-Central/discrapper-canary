"use strict";
n.d(t, { A: () => H });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(4208),
    l = n(172218),
    u = n(158954),
    c = n(311907),
    d = n(990078),
    _ = n(397927),
    f = n(793574),
    p = n(688810),
    h = n(987144),
    m = n(12711),
    E = n(71393),
    g = n(287809),
    A = n(975571),
    I = n(942975),
    T = n(645619),
    S = n(990208),
    y = n(363487),
    v = n(263215),
    N = n(998418),
    C = n(828162),
    R = n(800007),
    O = n(88001),
    b = n(568065),
    D = n(652215),
    L = n(519412),
    w = n(333354),
    M = n(985018),
    x = n(810087),
    P = n(973048);
function k(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: s,
            description: A,
            cost: I,
            costDecorator: T,
            imageUrl: S,
            skuId: v,
            isNew: N,
            onClose: k,
            onHover: U,
        } = e,
        { analyticsLocations: G } = (0, p.Ay)(),
        F = n !== b.b_.INACTIVE,
        V = (0, y.A)(t),
        B = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
        H = i.useRef(null),
        [j, Y] = i.useState(!1),
        [W, K] = i.useState(!1),
        $ = W,
        z = i.useCallback(() => {
            let e = E.A.getGuild(t);
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
            k(), (0, C.A)(t, f.A.GUILD_POWERUPS_MARKETING, v);
        }, [t, v, k]),
        Z = { tension: 400, friction: 30 },
        X = (0, _.zhh)({
            transform: $
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: Z,
        }),
        Q = (0, _.zhh)({
            transform: $ ? "translateX(0%) translateY(16px) scale(0.9)" : "translateX(0%) translateY(24px) scale(1.2)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: Z,
        }),
        J = (0, _.zhh)({ y: $ ? -25 : 0, config: Z }),
        ee = (0, _.zhh)({ opacity: +!!$, transform: $ ? "translateY(-10px)" : "translateY(20px)", config: Z }),
        et = i.useCallback((e) => {
            e && Y(!0);
        }, []),
        en = (0, l.K)(et),
        er = v === R.W5;
    return (0, r.jsxs)("div", {
        ref: H,
        className: a()(P.p3, P.sc, x.zL, { [P.i0]: j }),
        onMouseEnter: () => {
            K(!0), U?.(!0);
        },
        onMouseLeave: () => {
            K(!1), U?.(!1);
        },
        children: [
            (0, r.jsx)("div", { className: P.sL, ref: en }),
            (0, r.jsx)("div", {
                className: P.BL,
                children: er
                    ? (0, r.jsx)(o.animated.div, {
                          className: a()(P.e_, x.Sl, x.$b),
                          style: Q,
                          children: (0, r.jsx)(u.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: H,
                              fit: "contain",
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, { className: a()(P.e_, x.Sl), src: S, alt: "", style: X }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...J, transform: J.y.to((e) => `translateY(${e}px)`) },
                className: a()(P.hQ, x.hQ),
                children: [
                    (0, r.jsx)(m.xp, {
                        heading: s,
                        description: A,
                        label: M.intl.formatToPlainString(w.default.QOacIS, { quantity: I, decorator: T ?? "" }),
                        isEnabled: F,
                    }),
                    (0, r.jsxs)(o.animated.div, {
                        style: ee,
                        className: P.NC,
                        children: [
                            (0, r.jsx)(d.m, {
                                text: M.intl.formatToPlainString(L.default["5xN/C1"], {
                                    premiumGroupProductName: (0, O.DP)(),
                                }),
                                shouldShow: B?.isPremiumGroupMember() === !0,
                                children: (0, r.jsx)("div", {
                                    className: P.x6,
                                    children: (0, r.jsx)(_.Button, {
                                        variant: "primary",
                                        text: M.intl.string(M.t.oPAx73),
                                        onClick: z,
                                        disabled: B?.isPremiumGroupMember(),
                                        fullWidth: !0,
                                    }),
                                }),
                            }),
                            V &&
                                (0, r.jsx)("div", {
                                    className: P.x6,
                                    children: (0, r.jsx)(_.Button, {
                                        variant: "secondary",
                                        text: M.intl.string(M.t.GoCQxU),
                                        onClick: q,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            N && (0, r.jsx)(_.LpS, { className: P.zG, text: M.intl.string(M.t.y2b7CA) }),
            j && (0, r.jsx)("div", { className: P.Q4 }),
        ],
    });
}
function U(e) {
    let { guildId: t, powerup: n, costDecorator: s, isNew: a, onClose: o } = e,
        [l, u] = i.useState(!1),
        c = (0, N.Ay)(t, n).type,
        d = (0, S.A)(n, l);
    return (0, r.jsx)(k, {
        guildId: t,
        activeStatus: c,
        title: n.title,
        description: n.description,
        cost: n.cost,
        imageUrl: d,
        skuId: n.skuId,
        costDecorator: s,
        isNew: a,
        onClose: o,
        onHover: (e) => u(e),
    });
}
let G = 3,
    F = new Set([R.W5]),
    V = new Map([[R.W5, "+"]]),
    B = i.forwardRef((e, t) => {
        let { guild: n, onClose: s } = e;
        i.useEffect(() => {
            T.A.shouldFetchCatalogForGuild(n.id) && (0, I.AK)(n.id),
                T.A.shouldFetchPowerupsForGuild(n.id) && (0, I.Xd)(n.id);
        }, [n.id]);
        let a = Array.from((0, v.A)(n.id) ?? [])
            .reverse()
            .slice(0, G);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: x.kL,
                  children: [
                      (0, r.jsx)(u.DZT, {
                          variant: "heading-xxl/extrabold",
                          children: M.intl.string(w.default.wjI18Q),
                      }),
                      (0, r.jsx)(u.EYj, {
                          variant: "text-lg/medium",
                          children: M.intl.format(w.default.OdCzjA, {
                              helpDeskArticle: A.A.getArticleURL(D.MVz.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: x.DO,
                          children: a.map((e) =>
                              (0, r.jsx)(
                                  U,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: V.get(e.skuId),
                                      isNew: F.has(e.skuId),
                                      onClose: s,
                                  },
                                  `guild-powerup-marketing-${e.skuId}`,
                              ),
                          ),
                      }),
                  ],
              });
    });
B.displayName = "GuildPowerupsMarketingPowerupCards";
let H = B;
