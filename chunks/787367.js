i.d(t, { default: () => z });
var r = i(477900),
    s = i(582128),
    a = i(43594),
    l = i(503698),
    n = i.n(l),
    o = i(935462),
    c = i(297264),
    d = i(834730),
    p = i(821609),
    u = i(503852),
    x = i(363487),
    m = i(998418),
    v = i(193157),
    E = i(439156),
    j = i(568065),
    g = i(660183),
    I = i(389240),
    h = i(107836);
function A(e) {
    let { guildId: t, powerup: i, onClose: a, ...l } = e,
        [A, T] = s.useState(void 0),
        _ = (0, m.Ay)(t, i),
        k = _.type === j.b_.TIER_OVERRIDE_ACTIVATED,
        f = (0, x.A)(t),
        N = null == _.sourceEntitlement || !f;
    return (
        (0, u.Z)(t, i, u.q.DETAIL),
        (0, r.jsxs)(o.EO, {
            "data-migration-pending": !0,
            className: I.yl,
            size: o.rI.DYNAMIC,
            ...l,
            parentComponent: "GuildPowerupLevelModal",
            children: [
                (0, r.jsxs)(o.$m, {
                    "data-migration-pending": !0,
                    className: I._F,
                    scrollbarType: "none",
                    children: [
                        (0, r.jsx)("img", { alt: "", src: h, className: I.v5 }),
                        (0, r.jsxs)("div", {
                            className: I.hQ,
                            children: [
                                (0, r.jsx)(c.D, { variant: "heading-xl/extrabold", children: i.title }),
                                (0, r.jsx)(v.A, { powerup: i }),
                                null != A &&
                                    (0, r.jsx)(d.E, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: A,
                                    }),
                                (0, r.jsxs)("div", {
                                    className: n()(I.qr, { [I.r9]: N }),
                                    children: [
                                        !k &&
                                            f &&
                                            (0, r.jsx)(E.A, {
                                                guildId: t,
                                                powerup: i,
                                                onError: T,
                                                grow: !1,
                                                compact: !N,
                                            }),
                                        (0, r.jsx)(p.$, {
                                            variant: N ? "secondary" : "primary",
                                            onClick: a,
                                            text: g.intl.string(g.t.cpT0Cq),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(o.s_, { "data-migration-pending": !0, className: I.VN, onClick: a }),
            ],
        })
    );
}
var T = i(104510),
    _ = i(661531),
    k = i(866665),
    f = i(772707),
    N = i(683071),
    b = i(470934),
    C = i(249286),
    y = i(933337),
    w = i(743569),
    D = i(37537),
    L = i(309326),
    P = i(337322),
    R = i(183699);
function O(e) {
    let { powerup: t } = e,
        i = (0, P.A)(t),
        s = (0, D.c)("GuildPowerupLevelPerks");
    return (0, r.jsx)("div", {
        className: R.kL,
        children: i.map((e) => {
            let { Icon: t } = (0, L.a)(e.perkIcon, !1);
            return (0, r.jsxs)(
                "div",
                {
                    className: R.d_,
                    children: [
                        (0, r.jsx)(t, { color: s ? _.A.colors.TEXT_SUBTLE : _.A.colors.TEXT_MUTED, className: R.Kk }),
                        (0, r.jsx)(d.E, {
                            className: R.Qq,
                            color: s ? void 0 : "text-muted",
                            variant: s ? "text-sm/normal" : "text-sm/medium",
                            children: e.description,
                        }),
                    ],
                },
                `perk-${e.perkIcon}`,
            );
        }),
    });
}
var S = i(652215),
    V = i(25525),
    q = i(115087);
function G(e) {
    return (0, r.jsx)(T._, { ...e, color: _.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
}
function M(e) {
    var t;
    let i,
        a,
        { guildId: l, powerup: n, expressiveCta: o, onClose: c, ...v } = e,
        [E, I] = s.useState(void 0),
        h = (0, m.Ay)(l, n),
        A = h.type !== j.b_.INACTIVE,
        _ = h.type === j.b_.TIER_OVERRIDE_ACTIVATED,
        D = (0, x.A)(l),
        { disabled: L, reason: P } = (0, b.A)(l, n, A),
        { onActivate: R, isLoading: M, error: z } = (0, C.A)(l, n),
        Q = (0, y.A)(l, n);
    (s.useEffect(() => {
        I(z);
    }, [z]),
        (0, u.Z)(l, n, u.q.DETAIL));
    let U = { type: "rive", rive: w.T[n.skuId], aspectRatio: "16/9" },
        $ = !_ && D,
        B =
            $ && !A
                ? [
                      {
                          text: g.intl.string(V.default.AOQgki),
                          icon: T._,
                          variant: o ? "expressive" : "primary",
                          size: "md",
                          disabled: L,
                          loading: M,
                          onClick: () => {
                              R();
                          },
                      },
                  ]
                : void 0,
        F = g.intl.formatToPlainString(V.default["5HQUzD"], { boostCount: n.cost }),
        H =
            $ && A
                ? (0, r.jsx)(k.m, {
                      text: F,
                      delay: 100,
                      children: (0, r.jsx)(p.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: L,
                          loading: M,
                          text: g.intl.string(V.default.PYPdl4),
                          onClick: () => {
                              Q();
                          },
                      }),
                  })
                : void 0;
    return (0, r.jsxs)(f.k, {
        graphic: U,
        title: n.title,
        subtitle: {
            text:
                ((t = n.skuId),
                (i = j.y7[t] ?? S.TVA.NONE),
                (a = S.M2T[i]),
                g.intl.formatToPlainString(g.t["pob/cL"], { subscriptions: a })),
            leadingIcon: G,
        },
        actions: B,
        actionBarInput: H,
        onClose: c,
        ...v,
        children: [
            (0, r.jsx)(O, { powerup: n }),
            $ &&
                !A &&
                null != P &&
                (0, r.jsx)("div", {
                    className: q.P,
                    children: (0, r.jsx)(N.w, { type: "info", message: P, role: "static" }),
                }),
            null != E && (0, r.jsx)(d.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: E }),
        ],
    });
}
function z(e) {
    let { guildId: t, powerup: i, ...s } = e,
        l = (0, a.D)("GuildPowerupLevelModalExperimentWrapper");
    return "control" === l
        ? (0, r.jsx)(A, { guildId: t, powerup: i, ...s })
        : (0, r.jsx)(M, { guildId: t, powerup: i, expressiveCta: "refresh_expressive_cta" === l, ...s });
}
