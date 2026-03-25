n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(502572),
    d = n(732955),
    c = n(397927),
    u = n(775602),
    m = n(531260),
    _ = n(657516),
    g = n(983511),
    x = n(342744),
    A = n(87719),
    h = n(287809),
    p = n(166403),
    f = n(473145),
    T = n(927578),
    S = n(966275),
    E = n(311092),
    b = n(233413),
    C = n(652215),
    v = n(788868),
    N = n(985018),
    I = n(806161);
function j(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: l,
            onUncancel: a,
            premiumSubscription: r,
            useReducedMotion: u,
            fractionalState: m,
        } = e,
        _ = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        g = (0, f.I5)(t),
        x = r?.isPaused === !0 && m === v.xc.NONE,
        A = N.intl.string(N.t.mOWsF1);
    return (0, i.jsxs)(
        "li",
        {
            className: I.Hp,
            children: [
                (0, i.jsxs)("div", {
                    className: I.YL,
                    children: [
                        (0, i.jsx)(b.A, {
                            className: I.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: g,
                            useReducedMotion: u,
                        }),
                        g && null != r
                            ? (0, i.jsx)(c.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: N.intl.format(N.t.Z4ULRD, { date: r.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != _
                              ? (0, i.jsx)(E.A, { cooldown: _.getTime() })
                              : (0, i.jsx)(c.Text, {
                                    className: I.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: N.intl.string(N.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: I.E7,
                    children: [
                        n &&
                            !g &&
                            (0, i.jsx)(o.A, {
                                shouldShow: x,
                                text: A,
                                "aria-label": A.toString(),
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: I.LB,
                                        children: (0, i.jsx)(d.QWc, {
                                            ...e,
                                            variant: "primary",
                                            text: N.intl.string(N.t.twFU3R),
                                            onClick: () => l(t),
                                            disabled: x,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        g &&
                            (0, i.jsx)(o.A, {
                                shouldShow: x,
                                text: A,
                                "aria-label": A.toString(),
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: I.LB,
                                        children: (0, i.jsx)(d.QWc, {
                                            ...e,
                                            variant: "primary",
                                            text: N.intl.string(N.t["2glQNp"]),
                                            onClick: () => a(t),
                                            disabled: x,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                    ],
                }),
            ],
        },
        t.id,
    );
}
function y(e) {
    (0, c.mMO)(async () => (t) => (0, i.jsx)(g.default, { ...t, guildBoostSlot: e }));
}
function O(e) {
    (0, c.mMO)(async () => (t) => (0, i.jsx)(x.default, { ...t, guildBoostSlotId: e.id }));
}
let R = function (e) {
    let t,
        n,
        l,
        { guildBoostSlots: d } = e,
        g = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        x = g?.isPausedOrPausePending === !0,
        { fractionalState: E } = (0, m.A)(),
        b = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        R = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        L = E === v.xc.FP_SUB_PAUSED,
        P = x && !L,
        {
            appliedGuildBoostSlots: D,
            unappliedGuildBoostSlots: G,
            numActiveGuildBoostSlots: M,
            hasCooldownBoosts: U,
            allGuildBoostsAreOnCooldown: k,
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                d.forEach((l) => {
                    !(0, f.I5)(l) && n++,
                        l.isOnCooldown() ? (i = !0) : (s = !1),
                        null != l.premiumGuildSubscription ? e.push(l) : t.push(l);
                }),
                {
                    appliedGuildBoostSlots: e,
                    unappliedGuildBoostSlots: t,
                    numActiveGuildBoostSlots: n,
                    hasCooldownBoosts: i,
                    allGuildBoostsAreOnCooldown: s,
                }
            );
        }, [d]),
        w = null != g ? T.Ay.getNumIncludedPremiumGuildSubscriptionSlots(g.planId) : 0,
        V = Math.max(0, w - D.length),
        B = M > w,
        F = w === d.length,
        H = F ? V : 1,
        z = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < H; t++) e.push((0, i.jsx)(S.A, { className: I.YA, useReducedMotion: b }, t));
            return e;
        }, [H, b]),
        Y = s.useMemo(() => G.find((e) => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let X = G.length;
    if (
        ((t = F
            ? N.intl.formatToPlainString(k ? N.t["3DW6Dc"] : N.t["/u15Qc"], { numUnappliedGuildBoostSlots: X })
            : N.intl.formatToPlainString(k ? N.t["3DW6Dc"] : N.t.BPadnO, { numUnappliedGuildBoostSlots: X })),
        T.Ay.isPremium(R))
    ) {
        let e = (e, t) =>
            (0, i.jsx)(
                c.DUT,
                {
                    className: I.nw,
                    tag: "span",
                    onClick: () => {
                        (0, A.e)();
                    },
                    children: e,
                },
                t,
            );
        n = k
            ? N.intl.format(N.t.omcpSE, { learnMoreHook: e })
            : N.intl.format(N.t["5mAkVi"], { numUnappliedGuildBoostSlots: X, learnMoreHook: e });
    } else
        n = k
            ? N.intl.string(N.t["8pcUZi"])
            : N.intl.formatToPlainString(N.t.Kaw82o, { numUnappliedGuildBoostSlots: X });
    return (
        (l = x && E === v.xc.NONE ? N.intl.string(N.t.mOWsF1) : N.intl.string(N.t.xr4m5B)),
        (0, i.jsx)("div", {
            className: I.iE,
            children: (0, i.jsxs)("div", {
                className: a()(I.Qs, [I.Yq]),
                children: [
                    (0, i.jsxs)("div", {
                        className: I.wx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: I.RW,
                                children: [
                                    (0, i.jsx)("div", { className: I.PS, children: z }),
                                    (0, i.jsxs)("div", {
                                        className: I.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(c.Heading, {
                                                className: I.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                className: I.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: I.di,
                                children: (0, i.jsx)(o.A, {
                                    shouldShow: null == Y || P,
                                    text: l,
                                    "aria-label": l.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(c.Button, {
                                            variant: "primary",
                                            text: N.intl.string(N.t.BMx1iy),
                                            ...e,
                                            disabled: null == Y || P,
                                            onClick:
                                                null != Y
                                                    ? () => {
                                                          (0, c.mMO)(
                                                              async () => (e) =>
                                                                  (0, i.jsx)(_.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [Y],
                                                                      locationSection: C.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!F || U) &&
                        (0, i.jsx)("ul", {
                            className: I.LU,
                            children: G.map((e) =>
                                (0, i.jsx)(
                                    j,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: B,
                                        onCancel: y,
                                        onUncancel: O,
                                        premiumSubscription: g,
                                        useReducedMotion: b,
                                        fractionalState: E,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                ],
            }),
        })
    );
};
