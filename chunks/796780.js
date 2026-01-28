n.d(t, {
    A: () => K,
}),
    n(228524),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(353709),
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
    y = n(975571),
    b = n(942975),
    O = n(645619),
    v = n(990208),
    A = n(363487),
    I = n(263215),
    S = n(998418),
    T = n(828162),
    C = n(800007),
    N = n(88001),
    w = n(568065),
    R = n(652215),
    P = n(519412),
    D = n(333354),
    L = n(985018),
    x = n(213378),
    M = n(329431);

function j(e, t, n) {
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
                j(e, t, n[t]);
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

function F(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: y,
            cost: b,
            costDecorator: O,
            imageUrl: v,
            skuId: I,
            isNew: S,
            onClose: j,
            onHover: U,
        } = e,
        { analyticsLocations: F } = (0, _.Ay)(),
        V = n !== w.b_.INACTIVE,
        B = (0, A.A)(t),
        H = (0, u.bG)([E.default], () => E.default.getCurrentUser()),
        Y = i.useRef(null),
        [W, K] = i.useState(!1),
        [z, q] = i.useState(!1),
        Z = z,
        Q = i.useCallback(() => {
            let e = g.A.getGuild(t);
            null != e &&
                (0, h.g)({
                    analyticsLocation: {
                        page: R.liQ.GUILD_POWERUPS_MARKETING,
                        section: R.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: F,
                    guild: e,
                });
        }, [t, F]),
        X = i.useCallback(() => {
            j(), (0, T.A)(t, p.A.GUILD_POWERUPS_MARKETING, I);
        }, [t, I, j]),
        J = {
            tension: 400,
            friction: 30,
        },
        $ = (0, f.zhh)({
            transform: Z
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: J,
        }),
        ee = (0, f.zhh)({
            transform: Z ? "translateX(0%) translateY(16px) scale(0.9)" : "translateX(0%) translateY(24px) scale(1.2)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: J,
        }),
        et = (0, f.zhh)({
            y: Z ? -25 : 0,
            config: J,
        }),
        en = (0, f.zhh)({
            opacity: +!!Z,
            transform: Z ? "translateY(-10px)" : "translateY(20px)",
            config: J,
        }),
        er = i.useCallback((e) => {
            e && K(!0);
        }, []),
        ei = (0, l.K)(er),
        ea = I === C.W5;
    return (0, r.jsxs)("div", {
        ref: Y,
        className: o()(M.p3, M.sc, x.zL, {
            [M.i0]: W,
        }),
        onMouseEnter: () => {
            q(!0), null == U || U(!0);
        },
        onMouseLeave: () => {
            q(!1), null == U || U(!1);
        },
        children: [
            (0, r.jsx)("div", {
                className: M.sL,
                ref: ei,
            }),
            (0, r.jsx)("div", {
                className: M.BL,
                children: ea
                    ? (0, r.jsx)(s.animated.div, {
                          className: o()(M.e_, x.Sl, x.$b),
                          style: ee,
                          children: (0, r.jsx)(c.E_w, {
                              withReducedMotion: "halt",
                              eventTargetRef: Y,
                              fit: "contain",
                              stateMachine: "SM_Main_Int",
                          }),
                      })
                    : (0, r.jsx)(s.animated.img, {
                          className: o()(M.e_, x.Sl),
                          src: v,
                          alt: "",
                          style: $,
                      }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: G(k({}, et), {
                    transform: et.y.to((e) => "translateY(".concat(e, "px)")),
                }),
                className: o()(M.hQ, x.hQ),
                children: [
                    (0, r.jsx)(m.xp, {
                        heading: a,
                        description: y,
                        label: L.intl.formatToPlainString(D.default.QOacIS, {
                            quantity: b,
                            decorator: null != O ? O : "",
                        }),
                        isEnabled: V,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: en,
                        className: M.NC,
                        children: [
                            (0, r.jsx)(d.m, {
                                text: L.intl.formatToPlainString(P.default["5xN/C1"], {
                                    premiumGroupProductName: (0, N.DP)(),
                                }),
                                shouldShow: (null == H ? void 0 : H.isPremiumGroupMember()) === !0,
                                children: (0, r.jsx)("div", {
                                    className: M.x6,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "primary",
                                        text: L.intl.string(L.t.oPAx73),
                                        onClick: Q,
                                        disabled: null == H ? void 0 : H.isPremiumGroupMember(),
                                        fullWidth: !0,
                                    }),
                                }),
                            }),
                            B &&
                                (0, r.jsx)("div", {
                                    className: M.x6,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "secondary",
                                        text: L.intl.string(L.t.GoCQxU),
                                        onClick: X,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            S &&
                (0, r.jsx)(f.LpS, {
                    className: M.zG,
                    text: L.intl.string(L.t.y2b7CA),
                }),
            W &&
                (0, r.jsx)("div", {
                    className: M.Q4,
                }),
        ],
    });
}

function V(e) {
    let { guildId: t, powerup: n, costDecorator: a, isNew: o, onClose: s } = e,
        [l, c] = i.useState(!1),
        u = (0, S.Ay)(t, n).type,
        d = (0, v.A)(n, l);
    return (0, r.jsx)(F, {
        guildId: t,
        activeStatus: u,
        title: n.title,
        description: n.description,
        cost: n.cost,
        imageUrl: d,
        skuId: n.skuId,
        costDecorator: a,
        isNew: o,
        onClose: s,
        onHover: (e) => c(e),
    });
}
let B = 3,
    H = new Set([C.W5]),
    Y = new Map([[C.W5, "+"]]),
    W = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            O.A.shouldFetchCatalogForGuild(n.id) && (0, b.AK)(n.id),
                O.A.shouldFetchPowerupsForGuild(n.id) && (0, b.Xd)(n.id);
        }, [n.id]);
        let o = (0, I.A)(n.id),
            s = Array.from(null != o ? o : [])
                .reverse()
                .slice(0, B);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: x.kL,
                  children: [
                      (0, r.jsx)(c.DZT, {
                          variant: "heading-xxl/extrabold",
                          children: L.intl.string(D.default.wjI18Q),
                      }),
                      (0, r.jsx)(c.EYj, {
                          variant: "text-lg/medium",
                          children: L.intl.format(D.default.OdCzjA, {
                              helpDeskArticle: y.A.getArticleURL(R.MVz.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: x.DO,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  V,
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
