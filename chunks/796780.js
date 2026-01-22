n.d(t, {
    A: () => K,
}),
    n(228524),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(172218),
    c = n(158954),
    u = n(311907),
    d = n(990078),
    f = n(397927),
    p = n(793574),
    _ = n(688810),
    h = n(987144),
    m = n(12711),
    g = n(71393),
    E = n(287809),
    b = n(975571),
    y = n(942975),
    O = n(645619),
    A = n(990208),
    v = n(363487),
    S = n(263215),
    I = n(998418),
    T = n(828162),
    C = n(800007),
    N = n(88001),
    R = n(568065),
    w = n(652215),
    P = n(519412),
    D = n(333354),
    x = n(985018),
    L = n(213378),
    j = n(329431);

function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}

function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function V(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: c,
            cost: b,
            costDecorator: y,
            imageUrl: O,
            skuId: A,
            isNew: S,
            onClose: I,
            onHover: C,
        } = e,
        { analyticsLocations: M } = (0, _.Ay)(),
        U = n !== R.b_.INACTIVE,
        V = (0, v.A)(t),
        F = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        [B, H] = i.useState(!1),
        [Y, W] = i.useState(!1),
        K = Y,
        z = i.useCallback(() => {
            let e = g.A.getGuild(t);
            null != e &&
                (0, h.g)({
                    analyticsLocation: {
                        page: w.liQ.GUILD_POWERUPS_MARKETING,
                        section: w.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: M,
                    guild: e,
                });
        }, [t, M]),
        q = i.useCallback(() => {
            I(), (0, T.A)(t, p.A.GUILD_POWERUPS_MARKETING, A);
        }, [t, A, I]),
        X = {
            tension: 400,
            friction: 30,
        },
        Z = (0, f.zhh)({
            transform: K
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: X,
        }),
        Q = (0, f.zhh)({
            y: K ? -25 : 0,
            config: X,
        }),
        $ = (0, f.zhh)({
            opacity: +!!K,
            transform: K ? "translateY(0)" : "translateY(20px)",
            config: X,
        }),
        J = i.useCallback((e) => {
            e && H(!0);
        }, []),
        ee = (0, l.K)(J);
    return (0, r.jsxs)("div", {
        className: s()(j.p3, j.sc, L.zL, {
            [j.i0]: B,
        }),
        onMouseEnter: () => {
            W(!0), null == C || C(!0);
        },
        onMouseLeave: () => {
            W(!1), null == C || C(!1);
        },
        children: [
            (0, r.jsx)("div", {
                className: j.sL,
                ref: ee,
            }),
            (0, r.jsx)("div", {
                className: j.BL,
                children: (0, r.jsx)(o.animated.img, {
                    className: s()(j.e_, L.Sl),
                    src: O,
                    alt: "",
                    style: Z,
                }),
            }),
            (0, r.jsxs)(o.animated.div, {
                style: G(k({}, Q), {
                    transform: Q.y.to((e) => "translateY(".concat(e, "px)")),
                }),
                className: s()(j.hQ, L.hQ),
                children: [
                    (0, r.jsx)(m.xp, {
                        heading: a,
                        description: c,
                        label: x.intl.formatToPlainString(D.default.QOacIS, {
                            quantity: b,
                            decorator: null != y ? y : "",
                        }),
                        isEnabled: U,
                    }),
                    (0, r.jsxs)(o.animated.div, {
                        style: $,
                        className: j.NC,
                        children: [
                            (0, r.jsx)(d.m, {
                                text: x.intl.formatToPlainString(P.default["5xN/C1"], {
                                    premiumGroupProductName: (0, N.DP)(),
                                }),
                                shouldShow: (null == F ? void 0 : F.isPremiumGroupMember()) === !0,
                                children: (0, r.jsx)("div", {
                                    className: j.x6,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "primary",
                                        text: x.intl.string(x.t.oPAx73),
                                        onClick: z,
                                        disabled: null == F ? void 0 : F.isPremiumGroupMember(),
                                        fullWidth: !0,
                                    }),
                                }),
                            }),
                            V &&
                                (0, r.jsx)("div", {
                                    className: j.x6,
                                    children: (0, r.jsx)(f.Button, {
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
            S &&
                (0, r.jsx)(f.LpS, {
                    className: j.zG,
                    text: x.intl.string(x.t.y2b7CA),
                }),
            B &&
                (0, r.jsx)("div", {
                    className: j.Q4,
                }),
        ],
    });
}

function F(e) {
    let { guildId: t, powerup: n, costDecorator: a, isNew: s, onClose: o } = e,
        [l, c] = i.useState(!1),
        u = (0, I.Ay)(t, n).type,
        d = (0, A.A)(n, l);
    return (0, r.jsx)(V, {
        guildId: t,
        activeStatus: u,
        title: n.title,
        description: n.description,
        cost: n.cost,
        imageUrl: d,
        skuId: n.skuId,
        costDecorator: a,
        isNew: s,
        onClose: o,
        onHover: (e) => c(e),
    });
}
let B = 3,
    H = new Set([C.W5]),
    Y = new Map([[C.W5, "+"]]),
    W = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            O.A.shouldFetchCatalogForGuild(n.id) && (0, y.AK)(n.id),
                O.A.shouldFetchPowerupsForGuild(n.id) && (0, y.Xd)(n.id);
        }, [n.id]);
        let s = (0, S.A)(n.id),
            o = Array.from(null != s ? s : [])
                .reverse()
                .slice(0, B);
        return 0 === o.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: L.kL,
                  children: [
                      (0, r.jsx)(c.DZT, {
                          variant: "heading-xxl/extrabold",
                          children: x.intl.string(D.default.wjI18Q),
                      }),
                      (0, r.jsx)(c.EYj, {
                          variant: "text-lg/medium",
                          children: x.intl.format(D.default.OdCzjA, {
                              helpDeskArticle: b.A.getArticleURL(w.MVz.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: L.DO,
                          children: o.map((e) =>
                              (0, r.jsx)(
                                  F,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: Y.get(e.skuId),
                                      isNew: H.has(e.skuId),
                                      onClose: a,
                                  },
                                  "guild-powerup-marketing-".concat(e.skuId),
                              ),
                          ),
                      }),
                  ],
              });
    });
W.displayName = "GuildPowerupsMarketingPowerupCards";
let K = W;
