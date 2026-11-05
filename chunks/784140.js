i.d(e, { default: () => C });
var s = i(477900),
    n = i(582128),
    o = i(104510),
    a = i(646514),
    r = i(866665),
    l = i(821609),
    c = i(772707),
    d = i(683071),
    u = i(834730),
    p = i(503852),
    m = i(470934),
    x = i(363487),
    I = i(998418),
    k = i(742534),
    f = i(933337),
    v = i(743569),
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
                        (0, s.jsx)(e, { color: a.A.colors.TEXT_SUBTLE, className: E.Kk }),
                        (0, s.jsx)(u.E, { className: E.Qq, variant: "body-sm/normal", children: t.description }),
                    ],
                },
                `perk-${t.perkIcon}`,
            );
        }),
    });
}
var b = i(568065),
    j = i(652215),
    _ = i(586428),
    g = i(792996),
    y = i(115087);
function N(t) {
    return (0, s.jsx)(o.BoostGemIcon, { ...t, color: a.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH });
}
function C(t) {
    var e;
    let i,
        a,
        { guildId: h, powerup: A, onClose: E, ...C } = t,
        [L, P] = n.useState(void 0),
        R = (0, I.Ay)(h, A),
        S = R.type !== b.b_.INACTIVE,
        w = R.type === b.b_.TIER_OVERRIDE_ACTIVATED,
        B = (0, x.A)(h),
        { disabled: D, reason: O } = (0, m.A)(h, A, S),
        { onActivate: G, isLoading: V, error: z } = (0, k.A)(h, A),
        Q = (0, f.A)(h, A);
    (n.useEffect(() => {
        P(z);
    }, [z]),
        (0, p.Z)(h, A, p.q.DETAIL));
    let U = { type: "rive", rive: v.T[A.skuId], aspectRatio: "16/9" },
        q = !w && B,
        H =
            q && !S
                ? [
                      {
                          text: g.intl.string(_.default.AOQgki),
                          icon: o.BoostGemIcon,
                          variant: "primary",
                          size: "md",
                          disabled: D,
                          loading: V,
                          onClick: () => {
                              G();
                          },
                      },
                  ]
                : void 0,
        K = g.intl.formatToPlainString(_.default["5HQUzD"], { boostCount: A.cost }),
        $ =
            q && S
                ? (0, s.jsx)(r.m, {
                      text: K,
                      delay: 100,
                      children: (0, s.jsx)(l.$, {
                          variant: "secondary",
                          size: "md",
                          fullWidth: !0,
                          disabled: D,
                          loading: V,
                          text: g.intl.string(_.default.PYPdl4),
                          onClick: () => {
                              Q();
                          },
                      }),
                  })
                : void 0;
    return (0, s.jsxs)(c.k, {
        graphic: U,
        title: A.title,
        subtitle: {
            text:
                ((e = A.skuId),
                (i = b.y7[e] ?? j.TVA.NONE),
                (a = j.M2T[i]),
                g.intl.formatToPlainString(g.t["pob/cL"], { subscriptions: a })),
            leadingIcon: N,
        },
        actions: H,
        actionBarInput: $,
        onClose: E,
        ...C,
        children: [
            (0, s.jsx)(T, { powerup: A }),
            q &&
                !S &&
                null != O &&
                (0, s.jsx)("div", {
                    className: y.P,
                    children: (0, s.jsx)(d.w, { type: "info", message: O, role: "none" }),
                }),
            null != L && (0, s.jsx)(u.E, { color: "text-feedback-critical", variant: "body-sm/semibold", children: L }),
        ],
    });
}
