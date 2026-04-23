r.d(t, { default: () => V });
var a = r(627968),
    s = r(64700),
    n = r(43594),
    o = r(503698),
    i = r.n(o),
    l = r(935462),
    c = r(534514),
    d = r(834730),
    u = r(821609),
    _ = r(503852),
    p = r(363487),
    m = r(998418),
    f = r(193157),
    b = r(439156),
    I = r(568065),
    k = r(985018),
    x = r(764872),
    v = r(107836);
function T(e) {
    let { guildId: t, powerup: r, onClose: n, ...o } = e,
        [T, E] = s.useState(void 0),
        A = (0, m.Ay)(t, r),
        N = A.type === I.b_.TIER_OVERRIDE_ACTIVATED,
        h = (0, p.A)(t),
        g = null == A.sourceEntitlement || !h;
    return (
        (0, _.Z)(t, r, _.q.DETAIL),
        (0, a.jsxs)(l.EO, {
            "data-migration-pending": !0,
            className: x.yl,
            size: l.rI.DYNAMIC,
            ...o,
            parentComponent: "GuildPowerupLevelModal",
            children: [
                (0, a.jsxs)(l.$m, {
                    "data-migration-pending": !0,
                    className: x._F,
                    scrollbarType: "none",
                    children: [
                        (0, a.jsx)("img", { alt: "", src: v, className: x.v5 }),
                        (0, a.jsxs)("div", {
                            className: x.hQ,
                            children: [
                                (0, a.jsx)(c.D, { variant: "heading-xl/extrabold", children: r.title }),
                                (0, a.jsx)(f.A, { powerup: r }),
                                null != T &&
                                    (0, a.jsx)(d.E, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: T,
                                    }),
                                (0, a.jsxs)("div", {
                                    className: i()(x.qr, { [x.r9]: g }),
                                    children: [
                                        !N &&
                                            h &&
                                            (0, a.jsx)(b.A, {
                                                guildId: t,
                                                powerup: r,
                                                onError: E,
                                                grow: !1,
                                                compact: !g,
                                            }),
                                        (0, a.jsx)(u.$, {
                                            variant: g ? "secondary" : "primary",
                                            onClick: n,
                                            text: k.intl.string(k.t.cpT0Cq),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)(l.s_, { "data-migration-pending": !0, className: x.VN, onClick: n }),
            ],
        })
    );
}
var E = r(990078),
    A = r(104510),
    N = r(661531),
    h = r(772707),
    g = r(470934),
    C = r(249286),
    j = r(933337),
    P = r(743569),
    S = r(309326),
    D = r(337322),
    O = r(144580);
function w(e) {
    let { powerup: t } = e,
        r = (0, D.A)(t);
    return (0, a.jsx)("div", {
        className: O.kL,
        children: r.map((e) => {
            let { Icon: t } = (0, S.a)(e.perkIcon, !1);
            return (0, a.jsxs)(
                "div",
                {
                    className: O.d_,
                    children: [
                        (0, a.jsx)(t, { color: N.A.colors.TEXT_MUTED, className: O.Kk }),
                        (0, a.jsx)(d.E, {
                            className: O.Qq,
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
var y = r(652215),
    R = r(853513);
let K = (e) => (0, a.jsx)(A._, { ...e, color: N.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
function L(e) {
    var t;
    let r,
        n,
        { guildId: o, powerup: i, expressiveCta: l, onClose: c, ...f } = e,
        [b, x] = s.useState(void 0),
        v = (0, m.Ay)(o, i),
        T = v.type !== I.b_.INACTIVE,
        N = v.type === I.b_.TIER_OVERRIDE_ACTIVATED,
        S = (0, p.A)(o),
        { disabled: D } = (0, g.A)(o, i, T),
        { onActivate: O, isLoading: L, error: V } = (0, C.A)(o, i),
        M = (0, j.A)(o, i);
    s.useEffect(() => {
        x(V);
    }, [V]),
        (0, _.Z)(o, i, _.q.DETAIL);
    let q = { type: "rive", rive: P.T[i.skuId], aspectRatio: "16/9" },
        U = !N && S,
        z =
            U && !T
                ? [
                      {
                          text: k.intl.string(R.default.AOQgki),
                          icon: A._,
                          variant: l ? "expressive" : "primary",
                          size: "md",
                          disabled: D,
                          loading: L,
                          onClick: () => {
                              O();
                          },
                      },
                  ]
                : void 0,
        G = k.intl.formatToPlainString(R.default["5HQUzD"], { boostCount: i.cost }),
        Z =
            U && T
                ? (0, a.jsx)(E.m, {
                      text: G,
                      delay: 100,
                      children: (0, a.jsx)(u.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: D,
                          loading: L,
                          text: k.intl.string(R.default.PYPdl4),
                          onClick: () => {
                              M();
                          },
                      }),
                  })
                : void 0;
    return (0, a.jsxs)(h.k, {
        graphic: q,
        title: i.title,
        subtitle: {
            text:
                ((t = i.skuId),
                (r = I.y7[t] ?? y.TVA.NONE),
                (n = y.M2T[r]),
                k.intl.formatToPlainString(k.t["pob/cL"], { subscriptions: n })),
            leadingIcon: K,
        },
        actions: z,
        actionBarInput: Z,
        onClose: c,
        ...f,
        children: [
            (0, a.jsx)(w, { powerup: i }),
            null != b && (0, a.jsx)(d.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: b }),
        ],
    });
}
function V(e) {
    let { guildId: t, powerup: r, ...s } = e,
        o = (0, n.D)("GuildPowerupLevelModalExperimentWrapper");
    return "control" === o
        ? (0, a.jsx)(T, { guildId: t, powerup: r, ...s })
        : (0, a.jsx)(L, { guildId: t, powerup: r, expressiveCta: "refresh_expressive_cta" === o, ...s });
}
