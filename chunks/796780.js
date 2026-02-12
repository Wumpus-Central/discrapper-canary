"use strict";
n.d(t, { A: () => H });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(288720),
    l = n(172218),
    u = n(158954),
    c = n(311907),
    d = n(990078),
    _ = n(397927),
    f = n(793574),
    h = n(688810),
    p = n(987144),
    g = n(12711),
    E = n(71393),
    A = n(287809),
    I = n(975571),
    T = n(942975),
    y = n(645619),
    S = n(990208),
    v = n(363487),
    C = n(263215),
    b = n(998418),
    N = n(828162),
    R = n(800007),
    O = n(88001),
    D = n(568065),
    L = n(652215),
    w = n(519412),
    x = n(333354),
    P = n(985018),
    M = n(213378),
    k = n(329431);
function U(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: I,
            cost: T,
            costDecorator: y,
            imageUrl: S,
            skuId: C,
            isNew: b,
            onClose: U,
            onHover: G,
        } = e,
        { analyticsLocations: F } = (0, h.Ay)(),
        V = n !== D.b_.INACTIVE,
        B = (0, v.A)(t),
        j = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
        H = i.useRef(null),
        [Y, W] = i.useState(!1),
        [K, $] = i.useState(!1),
        z = K,
        q = i.useCallback(() => {
            let e = E.A.getGuild(t);
            null != e &&
                (0, p.g)({
                    analyticsLocation: {
                        page: L.liQ.GUILD_POWERUPS_MARKETING,
                        section: L.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: F,
                    guild: e,
                });
        }, [t, F]),
        X = i.useCallback(() => {
            U(), (0, N.A)(t, f.A.GUILD_POWERUPS_MARKETING, C);
        }, [t, C, U]),
        Z = { tension: 400, friction: 30 },
        Q = (0, _.zhh)({
            transform: z
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: Z,
        }),
        J = (0, _.zhh)({
            transform: z ? "translateX(0%) translateY(16px) scale(0.9)" : "translateX(0%) translateY(24px) scale(1.2)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: Z,
        }),
        ee = (0, _.zhh)({ y: z ? -25 : 0, config: Z }),
        et = (0, _.zhh)({ opacity: +!!z, transform: z ? "translateY(-10px)" : "translateY(20px)", config: Z }),
        en = i.useCallback((e) => {
            e && W(!0);
        }, []),
        er = (0, l.K)(en),
        ei = C === R.W5;
    return (0, r.jsxs)("div", {
        ref: H,
        className: s()(k.p3, k.sc, M.zL, { [k.i0]: Y }),
        onMouseEnter: () => {
            $(!0), G?.(!0);
        },
        onMouseLeave: () => {
            $(!1), G?.(!1);
        },
        children: [
            (0, r.jsx)("div", { className: k.sL, ref: er }),
            (0, r.jsx)("div", {
                className: k.BL,
                children: ei
                    ? (0, r.jsx)(o.animated.div, {
                          className: s()(k.e_, M.Sl, M.$b),
                          style: J,
                          children: (0, r.jsx)(u.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: H,
                              fit: "contain",
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(o.animated.img, { className: s()(k.e_, M.Sl), src: S, alt: "", style: Q }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: { ...ee, transform: ee.y.to((e) => `translateY(${e}px)`) },
                className: s()(k.hQ, M.hQ),
                children: [
                    (0, r.jsx)(g.xp, {
                        heading: a,
                        description: I,
                        label: P.intl.formatToPlainString(x.default.QOacIS, { quantity: T, decorator: y ?? "" }),
                        isEnabled: V,
                    }),
                    (0, r.jsxs)(o.animated.div, {
                        style: et,
                        className: k.NC,
                        children: [
                            (0, r.jsx)(d.m, {
                                text: P.intl.formatToPlainString(w.default["5xN/C1"], {
                                    premiumGroupProductName: (0, O.DP)(),
                                }),
                                shouldShow: j?.isPremiumGroupMember() === !0,
                                children: (0, r.jsx)("div", {
                                    className: k.x6,
                                    children: (0, r.jsx)(_.Button, {
                                        variant: "primary",
                                        text: P.intl.string(P.t.oPAx73),
                                        onClick: q,
                                        disabled: j?.isPremiumGroupMember(),
                                        fullWidth: !0,
                                    }),
                                }),
                            }),
                            B &&
                                (0, r.jsx)("div", {
                                    className: k.x6,
                                    children: (0, r.jsx)(_.Button, {
                                        variant: "secondary",
                                        text: P.intl.string(P.t.GoCQxU),
                                        onClick: X,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            b && (0, r.jsx)(_.LpS, { className: k.zG, text: P.intl.string(P.t.y2b7CA) }),
            Y && (0, r.jsx)("div", { className: k.Q4 }),
        ],
    });
}
function G(e) {
    let { guildId: t, powerup: n, costDecorator: a, isNew: s, onClose: o } = e,
        [l, u] = i.useState(!1),
        c = (0, b.Ay)(t, n).type,
        d = (0, S.A)(n, l);
    return (0, r.jsx)(U, {
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
let F = 3,
    V = new Set([R.W5]),
    B = new Map([[R.W5, "+"]]),
    j = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            y.A.shouldFetchCatalogForGuild(n.id) && (0, T.AK)(n.id),
                y.A.shouldFetchPowerupsForGuild(n.id) && (0, T.Xd)(n.id);
        }, [n.id]);
        let s = Array.from((0, C.A)(n.id) ?? [])
            .reverse()
            .slice(0, F);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: M.kL,
                  children: [
                      (0, r.jsx)(u.DZT, {
                          variant: "heading-xxl/extrabold",
                          children: P.intl.string(x.default.wjI18Q),
                      }),
                      (0, r.jsx)(u.EYj, {
                          variant: "text-lg/medium",
                          children: P.intl.format(x.default.OdCzjA, {
                              helpDeskArticle: I.A.getArticleURL(L.MVz.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: M.DO,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  G,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: B.get(e.skuId),
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
j.displayName = "GuildPowerupsMarketingPowerupCards";
let H = j;
