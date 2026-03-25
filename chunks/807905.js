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
        { guildBoostSlots: g } = e,
        x = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        E = x?.isPausedOrPausePending === !0,
        { fractionalState: b } = (0, m.A)(),
        R = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        L = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        P = b === v.xc.FP_SUB_PAUSED,
        D = E && !P,
        {
            appliedGuildBoostSlots: G,
            unappliedGuildBoostSlots: M,
            numActiveGuildBoostSlots: U,
            hasCooldownBoosts: k,
            allGuildBoostsAreOnCooldown: w,
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                g.forEach((l) => {
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
        }, [g]),
        V = null != x ? T.Ay.getNumIncludedPremiumGuildSubscriptionSlots(x.planId) : 0,
        B = Math.max(0, V - G.length),
        F = U > V,
        H = V === g.length,
        z = H ? B : 1,
        Y = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < z; t++) e.push((0, i.jsx)(S.A, { className: I.YA, useReducedMotion: R }, t));
            return e;
        }, [z, R]),
        X = s.useMemo(() => M.find((e) => e.isAvailable()), [M]);
    if (0 === M.length) return null;
    let K = M.length;
    if (
        ((t = H
            ? N.intl.formatToPlainString(w ? N.t["3DW6Dc"] : N.t["/u15Qc"], { numUnappliedGuildBoostSlots: K })
            : N.intl.formatToPlainString(w ? N.t["3DW6Dc"] : N.t.BPadnO, { numUnappliedGuildBoostSlots: K })),
        T.Ay.isPremium(L))
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
        n = w
            ? N.intl.format(N.t.omcpSE, { learnMoreHook: e })
            : N.intl.format(N.t["5mAkVi"], { numUnappliedGuildBoostSlots: K, learnMoreHook: e });
    } else
        n = w
            ? N.intl.string(N.t["8pcUZi"])
            : N.intl.formatToPlainString(N.t.Kaw82o, { numUnappliedGuildBoostSlots: K });
    return (
        (l = E && b === v.xc.NONE ? N.intl.string(N.t.mOWsF1) : N.intl.string(N.t.xr4m5B)),
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
                                    (0, i.jsx)("div", { className: I.PS, children: Y }),
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
                                    shouldShow: null == X || D,
                                    text: l,
                                    "aria-label": l.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(d.$nd, {
                                            variant: "primary",
                                            text: N.intl.string(N.t.BMx1iy),
                                            ...e,
                                            disabled: null == X || D,
                                            onClick:
                                                null != X
                                                    ? () => {
                                                          (0, c.mMO)(
                                                              async () => (e) =>
                                                                  (0, i.jsx)(_.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [X],
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
                    (!H || k) &&
                        (0, i.jsx)("ul", {
                            className: I.LU,
                            children: M.map((e) =>
                                (0, i.jsx)(
                                    j,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: F,
                                        onCancel: y,
                                        onUncancel: O,
                                        premiumSubscription: x,
                                        useReducedMotion: R,
                                        fractionalState: b,
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
