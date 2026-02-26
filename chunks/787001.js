"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(230109),
    u = n(397927),
    c = n(688810),
    d = n(263063),
    _ = n(532794),
    f = n(864310),
    p = n(338548),
    h = n(287809),
    m = n(178368),
    E = n(927578),
    g = n(987144),
    A = n(652215),
    I = n(788868),
    T = n(985018),
    S = n(639431);
let y = function (e) {
    let { className: t, closeLayer: n, guild: s, onCtaVisibilityChange: y } = e,
        v = i.useRef(null),
        N = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        C = (0, o.bG)([m.A], () => m.A.boostSlots),
        b = N?.isPremiumGroupMember(),
        { analyticsLocations: R } = (0, c.Ay)(),
        [O, D] = i.useState(!1),
        L = i.useMemo(
            () =>
                Object.keys(C).filter((e) => {
                    let t = C[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === s.id;
                }).length,
            [C, s.id],
        ),
        w = (0, f.A)(e.guild.id).total;
    async function x() {
        D(!0),
            await (0, g.g)({
                analyticsLocations: R,
                analyticsLocation: {
                    page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: A.ZSU.BUTTON_CTA,
                    objectType: A.AnalyticsObjectTypes.BUY,
                },
                guild: s,
                closeLayer: n,
            }),
            D(!1);
    }
    function M() {
        (0, _.A)({
            initialPlanId: null,
            subscriptionTier: I.pe.TIER_2,
            analyticsLocations: R,
            analyticsObject: {
                page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: A.ZSU.BUTTON_ICON,
                objectType: A.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && n(),
        });
    }
    function P() {
        (0, _.A)({
            initialPlanId: null,
            subscriptionTier: I.pe.TIER_2,
            isGift: !0,
            analyticsLocations: R,
            analyticsObject: {
                page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: A.ZSU.BUTTON_ICON,
                objectType: A.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && n(),
        });
    }
    return (0, r.jsxs)("div", {
        className: a()(S.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: S.$R,
                children: [
                    (0, r.jsx)(d.Ay, { className: S.$f, guild: s, size: d.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, r.jsxs)("div", {
                        className: S.CR,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: S.J5,
                                variant: "heading-lg/semibold",
                                children: s.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: S.SJ,
                                children: [
                                    (0, r.jsx)(u._Jp, {
                                        color:
                                            w > 0 ? u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: a()(S.Me, { [S.S3]: w > 0 }),
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: S.n,
                                        variant: "text-md/semibold",
                                        children: T.intl.format(T.t["pob/cL"], { subscriptions: w }),
                                    }),
                                ],
                            }),
                            L > 0
                                ? (0, r.jsx)(u.Text, {
                                      className: S.EV,
                                      variant: "text-sm/normal",
                                      children: T.intl.format(T.t.Jeto2u, { numSubscriptions: L }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: S.mY,
                children: [
                    (0, r.jsx)("h1", { className: S.R_, children: T.intl.string(T.t.N4sqzL) }),
                    b ? (0, r.jsx)(p.A, { alwaysWhite: !0 }) : null,
                    (0, r.jsxs)("div", {
                        className: S.Sq,
                        children: [
                            (0, r.jsx)(l.L, {
                                innerRef: v,
                                onChange: y,
                                threshold: 0.9,
                                children: (0, r.jsx)("div", {
                                    ref: v,
                                    className: S.dp,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: u._Jp,
                                        text: T.intl.string(T.t.gKmQ1G),
                                        onClick: x,
                                        loading: O,
                                        disabled: b,
                                    }),
                                }),
                            }),
                            E.Ay.hasFreeBoosts(N) || E.Ay.isPremium(N, I.PremiumTypes.TIER_2)
                                ? (0, r.jsx)(u.Button, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: u.okO,
                                      text: T.intl.string(T.t["8MYSQw"]),
                                      onClick: P,
                                  })
                                : (0, r.jsx)(u.Button, {
                                      variant: "secondary",
                                      size: "md",
                                      text: T.intl.string(T.t.Q43TvC),
                                      onClick: M,
                                      disabled: b,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
