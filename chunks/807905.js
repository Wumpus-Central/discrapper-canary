n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(502572),
    d = n(123292),
    u = n(821609),
    c = n(834730),
    g = n(192308),
    m = n(939249),
    _ = n(534514),
    A = n(775602),
    h = n(531260),
    p = n(657516),
    x = n(983511),
    E = n(342744),
    T = n(87719),
    S = n(287809),
    f = n(166403),
    b = n(473145),
    C = n(927578),
    v = n(966275),
    N = n(311092),
    I = n(233413),
    y = n(652215),
    j = n(788868),
    O = n(985018),
    R = n(929570);
function L(e) {
    let {
            guildBoostSlot: t,
            isCancellable: n,
            onCancel: l,
            onUncancel: a,
            premiumSubscription: r,
            useReducedMotion: u,
            fractionalState: g,
        } = e,
        m = s.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        _ = (0, b.I5)(t),
        A = r?.isPaused === !0 && g === j.xc.NONE,
        h = O.intl.string(O.t.mOWsF1);
    return (0, i.jsxs)(
        "li",
        {
            className: R.Hp,
            children: [
                (0, i.jsxs)("div", {
                    className: R.YL,
                    children: [
                        (0, i.jsx)(I.A, {
                            className: R.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: _,
                            useReducedMotion: u,
                        }),
                        _ && null != r
                            ? (0, i.jsx)(c.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: O.intl.format(O.t.Z4ULRD, { date: r.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != m
                              ? (0, i.jsx)(N.A, { cooldown: m.getTime() })
                              : (0, i.jsx)(c.E, {
                                    className: R.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: O.intl.string(O.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: R.E7,
                    children: [
                        n &&
                            !_ &&
                            (0, i.jsx)(o.A, {
                                shouldShow: A,
                                text: h,
                                "aria-label": h.toString(),
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: R.LB,
                                        children: (0, i.jsx)(d.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: O.intl.string(O.t.twFU3R),
                                            onClick: () => l(t),
                                            disabled: A,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        _ &&
                            (0, i.jsx)(o.A, {
                                shouldShow: A,
                                text: h,
                                "aria-label": h.toString(),
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: R.LB,
                                        children: (0, i.jsx)(d.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: O.intl.string(O.t["2glQNp"]),
                                            onClick: () => a(t),
                                            disabled: A,
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
function D(e) {
    (0, g.openModalLazy)(async () => (t) => (0, i.jsx)(x.default, { ...t, guildBoostSlot: e }));
}
function P(e) {
    (0, g.openModalLazy)(async () => (t) => (0, i.jsx)(E.default, { ...t, guildBoostSlotId: e.id }));
}
let G = function (e) {
    let t,
        n,
        l,
        { guildBoostSlots: d } = e,
        x = (0, r.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        E = x?.isPausedOrPausePending === !0,
        { fractionalState: N } = (0, h.A)(),
        I = (0, r.bG)([A.A], () => A.A.useReducedMotion),
        G = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        M = N === j.xc.FP_SUB_PAUSED,
        U = E && !M,
        {
            appliedGuildBoostSlots: k,
            unappliedGuildBoostSlots: V,
            numActiveGuildBoostSlots: w,
            hasCooldownBoosts: B,
            allGuildBoostsAreOnCooldown: F,
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return (
                d.forEach((l) => {
                    !(0, b.I5)(l) && n++,
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
        z = null != x ? C.Ay.getNumIncludedPremiumGuildSubscriptionSlots(x.planId) : 0,
        H = Math.max(0, z - k.length),
        Y = w > z,
        X = z === d.length,
        K = X ? H : 1,
        W = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < K; t++) e.push((0, i.jsx)(v.A, { className: R.YA, useReducedMotion: I }, t));
            return e;
        }, [K, I]),
        Z = s.useMemo(() => V.find((e) => e.isAvailable()), [V]);
    if (0 === V.length) return null;
    let q = V.length;
    if (
        ((t = X
            ? O.intl.formatToPlainString(F ? O.t["3DW6Dc"] : O.t["/u15Qc"], { numUnappliedGuildBoostSlots: q })
            : O.intl.formatToPlainString(F ? O.t["3DW6Dc"] : O.t.BPadnO, { numUnappliedGuildBoostSlots: q })),
        C.Ay.isPremium(G))
    ) {
        let e = (e, t) =>
            (0, i.jsx)(
                m.D,
                {
                    className: R.nw,
                    tag: "span",
                    onClick: () => {
                        (0, T.e)();
                    },
                    children: e,
                },
                t,
            );
        n = F
            ? O.intl.format(O.t.omcpSE, { learnMoreHook: e })
            : O.intl.format(O.t["5mAkVi"], { numUnappliedGuildBoostSlots: q, learnMoreHook: e });
    } else
        n = F
            ? O.intl.string(O.t["8pcUZi"])
            : O.intl.formatToPlainString(O.t.Kaw82o, { numUnappliedGuildBoostSlots: q });
    return (
        (l = E && N === j.xc.NONE ? O.intl.string(O.t.mOWsF1) : O.intl.string(O.t.xr4m5B)),
        (0, i.jsx)("div", {
            className: R.iE,
            children: (0, i.jsxs)("div", {
                className: a()(R.Qs, [R.Yq]),
                children: [
                    (0, i.jsxs)("div", {
                        className: R.wx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: R.RW,
                                children: [
                                    (0, i.jsx)("div", { className: R.PS, children: W }),
                                    (0, i.jsxs)("div", {
                                        className: R.__invalid_headerCopy,
                                        children: [
                                            (0, i.jsx)(_.D, {
                                                className: R.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, i.jsx)(c.E, {
                                                className: R.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: R.di,
                                children: (0, i.jsx)(o.A, {
                                    shouldShow: null == Z || U,
                                    text: l,
                                    "aria-label": l.toString(),
                                    children: (e) =>
                                        (0, i.jsx)(u.$, {
                                            variant: "primary",
                                            text: O.intl.string(O.t.BMx1iy),
                                            ...e,
                                            disabled: null == Z || U,
                                            onClick:
                                                null != Z
                                                    ? () => {
                                                          (0, g.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, i.jsx)(p.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [Z],
                                                                      locationSection: y.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!X || B) &&
                        (0, i.jsx)("ul", {
                            className: R.LU,
                            children: V.map((e) =>
                                (0, i.jsx)(
                                    L,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: Y,
                                        onCancel: D,
                                        onUncancel: P,
                                        premiumSubscription: x,
                                        useReducedMotion: I,
                                        fractionalState: N,
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
