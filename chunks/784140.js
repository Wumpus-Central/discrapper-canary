i.d(e, { default: () => C });
var s = i(477900),
    n = i(582128),
    a = i(104510),
    r = i(646514),
    l = i(866665),
    o = i(821609),
    c = i(772707),
    d = i(683071),
    u = i(834730),
    p = i(503852),
    m = i(470934),
    x = i(363487),
    k = i(998418),
    f = i(742534),
    v = i(933337),
    I = i(743569),
    h = i(309326),
    A = i(337322),
    E = i(183699);
function T(t) {
    let { powerup: e } = t,
        i = (0, A.A)(e);
    return (0, s.jsx)("div", {
        className: E.kL,
        children: i.map((t) => {
            let { Icon: e } = (0, h.a)(t.perkIcon, !1);
            return (0, s.jsxs)(
                "div",
                {
                    className: E.d_,
                    children: [
                        (0, s.jsx)(e, { color: r.A.colors.TEXT_SUBTLE, className: E.Kk }),
                        (0, s.jsx)(u.E, { className: E.Qq, variant: "body-sm/normal", children: t.description }),
                    ],
                },
                `perk-${t.perkIcon}`,
            );
        }),
    });
}
var _ = i(568065),
    b = i(652215),
    j = i(586428),
    g = i(792996),
    y = i(115087);
function N(t) {
    return (0, s.jsx)(a._, { ...t, color: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
}
function C(t) {
    var e;
    let i,
        r,
        { guildId: h, powerup: A, onClose: E, ...C } = t,
        [L, P] = n.useState(void 0),
        R = (0, k.Ay)(h, A),
        S = R.type !== _.b_.INACTIVE,
        w = R.type === _.b_.TIER_OVERRIDE_ACTIVATED,
        D = (0, x.A)(h),
        { disabled: O, reason: V } = (0, m.A)(h, A, S),
        { onActivate: z, isLoading: B, error: Q } = (0, f.A)(h, A),
        U = (0, v.A)(h, A);
    (n.useEffect(() => {
        P(Q);
    }, [Q]),
        (0, p.Z)(h, A, p.q.DETAIL));
    let q = { type: "rive", rive: I.T[A.skuId], aspectRatio: "16/9" },
        G = !w && D,
        H =
            G && !S
                ? [
                      {
                          text: g.intl.string(j.default.AOQgki),
                          icon: a._,
                          variant: "primary",
                          size: "md",
                          disabled: O,
                          loading: B,
                          onClick: () => {
                              z();
                          },
                      },
                  ]
                : void 0,
        K = g.intl.formatToPlainString(j.default["5HQUzD"], { boostCount: A.cost }),
        $ =
            G && S
                ? (0, s.jsx)(l.m, {
                      text: K,
                      delay: 100,
                      children: (0, s.jsx)(o.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: O,
                          loading: B,
                          text: g.intl.string(j.default.PYPdl4),
                          onClick: () => {
                              U();
                          },
                      }),
                  })
                : void 0;
    return (0, s.jsxs)(c.k, {
        graphic: q,
        title: A.title,
        subtitle: {
            text:
                ((e = A.skuId),
                (i = _.y7[e] ?? b.TVA.NONE),
                (r = b.M2T[i]),
                g.intl.formatToPlainString(g.t["pob/cL"], { subscriptions: r })),
            leadingIcon: N,
        },
        actions: H,
        actionBarInput: $,
        onClose: E,
        ...C,
        children: [
            (0, s.jsx)(T, { powerup: A }),
            G &&
                !S &&
                null != V &&
                (0, s.jsx)("div", {
                    className: y.P,
                    children: (0, s.jsx)(d.w, { type: "info", message: V, role: "none" }),
                }),
            null != L && (0, s.jsx)(u.E, { color: "text-feedback-critical", variant: "body-sm/semibold", children: L }),
        ],
    });
}
