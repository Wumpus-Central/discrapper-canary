i.d(t, { default: () => q });
var r = i(627968),
    s = i(64700),
    a = i(43594),
    n = i(503698),
    l = i.n(n),
    o = i(935462),
    c = i(534514),
    d = i(834730),
    p = i(821609),
    u = i(503852),
    x = i(363487),
    m = i(998418),
    v = i(193157),
    E = i(439156),
    I = i(568065),
    g = i(375708),
    j = i(764872),
    h = i(107836);
function A(e) {
    let { guildId: t, powerup: i, onClose: a, ...n } = e,
        [A, _] = s.useState(void 0),
        T = (0, m.Ay)(t, i),
        k = T.type === I.b_.TIER_OVERRIDE_ACTIVATED,
        f = (0, x.A)(t),
        N = null == T.sourceEntitlement || !f;
    return (
        (0, u.Z)(t, i, u.q.DETAIL),
        (0, r.jsxs)(o.EO, {
            "data-migration-pending": !0,
            className: j.yl,
            size: o.rI.DYNAMIC,
            ...n,
            parentComponent: "GuildPowerupLevelModal",
            children: [
                (0, r.jsxs)(o.$m, {
                    "data-migration-pending": !0,
                    className: j._F,
                    scrollbarType: "none",
                    children: [
                        (0, r.jsx)("img", { alt: "", src: h, className: j.v5 }),
                        (0, r.jsxs)("div", {
                            className: j.hQ,
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
                                    className: l()(j.qr, { [j.r9]: N }),
                                    children: [
                                        !k &&
                                            f &&
                                            (0, r.jsx)(E.A, {
                                                guildId: t,
                                                powerup: i,
                                                onError: _,
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
                (0, r.jsx)(o.s_, { "data-migration-pending": !0, className: j.VN, onClick: a }),
            ],
        })
    );
}
var _ = i(990078),
    T = i(104510),
    k = i(661531),
    f = i(772707),
    N = i(470934),
    b = i(249286),
    C = i(933337),
    y = i(743569),
    D = i(309326),
    w = i(337322),
    R = i(144580);
function L(e) {
    let { powerup: t } = e,
        i = (0, w.A)(t);
    return (0, r.jsx)("div", {
        className: R.kL,
        children: i.map((e) => {
            let { Icon: t } = (0, D.a)(e.perkIcon, !1);
            return (0, r.jsxs)(
                "div",
                {
                    className: R.d_,
                    children: [
                        (0, r.jsx)(t, { color: k.A.colors.TEXT_MUTED, className: R.Kk }),
                        (0, r.jsx)(d.E, {
                            className: R.Qq,
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
    P = i(853513);
let V = (e) => (0, r.jsx)(T._, { ...e, color: k.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
function S(e) {
    var t;
    let i,
        a,
        { guildId: n, powerup: l, expressiveCta: o, onClose: c, ...v } = e,
        [E, j] = s.useState(void 0),
        h = (0, m.Ay)(n, l),
        A = h.type !== I.b_.INACTIVE,
        k = h.type === I.b_.TIER_OVERRIDE_ACTIVATED,
        D = (0, x.A)(n),
        { disabled: w } = (0, N.A)(n, l, A),
        { onActivate: R, isLoading: S, error: q } = (0, b.A)(n, l),
        M = (0, C.A)(n, l);
    s.useEffect(() => {
        j(q);
    }, [q]),
        (0, u.Z)(n, l, u.q.DETAIL);
    let z = { type: "rive", rive: y.T[l.skuId], aspectRatio: "16/9" },
        G = !k && D,
        Q =
            G && !A
                ? [
                      {
                          text: g.intl.string(P.default.AOQgki),
                          icon: T._,
                          variant: o ? "expressive" : "primary",
                          size: "md",
                          disabled: w,
                          loading: S,
                          onClick: () => {
                              R();
                          },
                      },
                  ]
                : void 0,
        $ = g.intl.formatToPlainString(P.default["5HQUzD"], { boostCount: l.cost }),
        U =
            G && A
                ? (0, r.jsx)(_.m, {
                      text: $,
                      delay: 100,
                      children: (0, r.jsx)(p.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: w,
                          loading: S,
                          text: g.intl.string(P.default.PYPdl4),
                          onClick: () => {
                              M();
                          },
                      }),
                  })
                : void 0;
    return (0, r.jsxs)(f.k, {
        graphic: z,
        title: l.title,
        subtitle: {
            text:
                ((t = l.skuId),
                (i = I.y7[t] ?? O.TVA.NONE),
                (a = O.M2T[i]),
                g.intl.formatToPlainString(g.t["pob/cL"], { subscriptions: a })),
            leadingIcon: V,
        },
        actions: Q,
        actionBarInput: U,
        onClose: c,
        ...v,
        children: [
            (0, r.jsx)(L, { powerup: l }),
            null != E && (0, r.jsx)(d.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: E }),
        ],
    });
}
function q(e) {
    let { guildId: t, powerup: i, ...s } = e,
        n = (0, a.D)("GuildPowerupLevelModalExperimentWrapper");
    return "control" === n
        ? (0, r.jsx)(A, { guildId: t, powerup: i, ...s })
        : (0, r.jsx)(S, { guildId: t, powerup: i, expressiveCta: "refresh_expressive_cta" === n, ...s });
}
