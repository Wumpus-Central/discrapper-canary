i.d(t, { default: () => z });
var r = i(627968),
    s = i(64700),
    n = i(43594),
    a = i(503698),
    l = i.n(a),
    o = i(935462),
    c = i(534514),
    d = i(834730),
    p = i(821609),
    u = i(503852),
    x = i(363487),
    m = i(998418),
    v = i(193157),
    j = i(439156),
    h = i(568065),
    E = i(375708),
    I = i(764872),
    g = i(107836);
function A(e) {
    let { guildId: t, powerup: i, onClose: n, ...a } = e,
        [A, _] = s.useState(void 0),
        T = (0, m.Ay)(t, i),
        f = T.type === h.b_.TIER_OVERRIDE_ACTIVATED,
        k = (0, x.A)(t),
        N = null == T.sourceEntitlement || !k;
    return (
        (0, u.Z)(t, i, u.q.DETAIL),
        (0, r.jsxs)(o.EO, {
            "data-migration-pending": !0,
            className: I.yl,
            size: o.rI.DYNAMIC,
            ...a,
            parentComponent: "GuildPowerupLevelModal",
            children: [
                (0, r.jsxs)(o.$m, {
                    "data-migration-pending": !0,
                    className: I._F,
                    scrollbarType: "none",
                    children: [
                        (0, r.jsx)("img", { alt: "", src: g, className: I.v5 }),
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
                                    className: l()(I.qr, { [I.r9]: N }),
                                    children: [
                                        !f &&
                                            k &&
                                            (0, r.jsx)(j.A, {
                                                guildId: t,
                                                powerup: i,
                                                onError: _,
                                                grow: !1,
                                                compact: !N,
                                            }),
                                        (0, r.jsx)(p.$, {
                                            variant: N ? "secondary" : "primary",
                                            onClick: n,
                                            text: E.intl.string(E.t.cpT0Cq),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(o.s_, { "data-migration-pending": !0, className: I.VN, onClick: n }),
            ],
        })
    );
}
var _ = i(990078),
    T = i(104510),
    f = i(661531),
    k = i(772707),
    N = i(683071),
    b = i(470934),
    C = i(249286),
    y = i(933337),
    w = i(743569),
    D = i(309326),
    R = i(337322),
    L = i(144580);
function P(e) {
    let { powerup: t } = e,
        i = (0, R.A)(t);
    return (0, r.jsx)("div", {
        className: L.kL,
        children: i.map((e) => {
            let { Icon: t } = (0, D.a)(e.perkIcon, !1);
            return (0, r.jsxs)(
                "div",
                {
                    className: L.d_,
                    children: [
                        (0, r.jsx)(t, { color: f.A.colors.TEXT_MUTED, className: L.Kk }),
                        (0, r.jsx)(d.E, {
                            className: L.Qq,
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: e.description,
                        }),
                    ],
                },
                `perk-${e.perkIcon}`,
            );
        }),
    });
}
var O = i(652215),
    V = i(853513),
    S = i(554672);
function q(e) {
    return (0, r.jsx)(T._, { ...e, color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
}
function M(e) {
    var t;
    let i,
        n,
        { guildId: a, powerup: l, expressiveCta: o, onClose: c, ...v } = e,
        [j, I] = s.useState(void 0),
        g = (0, m.Ay)(a, l),
        A = g.type !== h.b_.INACTIVE,
        f = g.type === h.b_.TIER_OVERRIDE_ACTIVATED,
        D = (0, x.A)(a),
        { disabled: R, reason: L } = (0, b.A)(a, l, A),
        { onActivate: M, isLoading: z, error: G } = (0, C.A)(a, l),
        Q = (0, y.A)(a, l);
    s.useEffect(() => {
        I(G);
    }, [G]),
        (0, u.Z)(a, l, u.q.DETAIL);
    let $ = { type: "rive", rive: w.T[l.skuId], aspectRatio: "16/9" },
        U = !f && D,
        B =
            U && !A
                ? [
                      {
                          text: E.intl.string(V.default.AOQgki),
                          icon: T._,
                          variant: o ? "expressive" : "primary",
                          size: "md",
                          disabled: R,
                          loading: z,
                          onClick: () => {
                              M();
                          },
                      },
                  ]
                : void 0,
        F = E.intl.formatToPlainString(V.default["5HQUzD"], { boostCount: l.cost }),
        H =
            U && A
                ? (0, r.jsx)(_.m, {
                      text: F,
                      delay: 100,
                      children: (0, r.jsx)(p.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: R,
                          loading: z,
                          text: E.intl.string(V.default.PYPdl4),
                          onClick: () => {
                              Q();
                          },
                      }),
                  })
                : void 0;
    return (0, r.jsxs)(k.k, {
        graphic: $,
        title: l.title,
        subtitle: {
            text:
                ((t = l.skuId),
                (i = h.y7[t] ?? O.TVA.NONE),
                (n = O.M2T[i]),
                E.intl.formatToPlainString(E.t["pob/cL"], { subscriptions: n })),
            leadingIcon: q,
        },
        actions: B,
        actionBarInput: H,
        onClose: c,
        ...v,
        children: [
            (0, r.jsx)(P, { powerup: l }),
            U &&
                !A &&
                null != L &&
                (0, r.jsx)("div", { className: S.P, children: (0, r.jsx)(N.w, { type: "info", children: L }) }),
            null != j && (0, r.jsx)(d.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: j }),
        ],
    });
}
function z(e) {
    let { guildId: t, powerup: i, ...s } = e,
        a = (0, n.D)("GuildPowerupLevelModalExperimentWrapper");
    return "control" === a
        ? (0, r.jsx)(A, { guildId: t, powerup: i, ...s })
        : (0, r.jsx)(M, { guildId: t, powerup: i, expressiveCta: "refresh_expressive_cta" === a, ...s });
}
