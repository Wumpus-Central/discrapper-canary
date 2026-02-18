"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    u = n(397927),
    c = n(688810),
    d = n(263063),
    _ = n(532794),
    f = n(864310),
    h = n(338548),
    p = n(287809),
    g = n(178368),
    E = n(927578),
    A = n(987144),
    I = n(652215),
    T = n(788868),
    y = n(985018),
    S = n(127397);
let v = function (e) {
    let { className: t, closeLayer: n, guild: a, onCtaVisibilityChange: v } = e,
        C = i.useRef(null),
        b = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        N = (0, o.bG)([g.A], () => g.A.boostSlots),
        R = b?.isPremiumGroupMember(),
        { analyticsLocations: O } = (0, c.Ay)(),
        [D, L] = i.useState(!1),
        w = i.useMemo(
            () =>
                Object.keys(N).filter((e) => {
                    let t = N[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [N, a.id],
        ),
        x = (0, f.A)(e.guild.id).total;
    async function P() {
        L(!0),
            await (0, A.g)({
                analyticsLocations: O,
                analyticsLocation: {
                    page: I.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: I.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: I.ZSU.BUTTON_CTA,
                    objectType: I.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: n,
            }),
            L(!1);
    }
    function M() {
        (0, _.A)({
            initialPlanId: null,
            subscriptionTier: T.pe.TIER_2,
            analyticsLocations: O,
            analyticsObject: {
                page: I.liQ.PREMIUM_GUILD_USER_MODAL,
                section: I.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.ZSU.BUTTON_ICON,
                objectType: I.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && n(),
        });
    }
    function k() {
        (0, _.A)({
            initialPlanId: null,
            subscriptionTier: T.pe.TIER_2,
            isGift: !0,
            analyticsLocations: O,
            analyticsObject: {
                page: I.liQ.PREMIUM_GUILD_USER_MODAL,
                section: I.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.ZSU.BUTTON_ICON,
                objectType: I.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && n(),
        });
    }
    return (0, r.jsxs)("div", {
        className: s()(S.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: S.$R,
                children: [
                    (0, r.jsx)(d.A, { className: S.$f, guild: a, size: d.A.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, r.jsxs)("div", {
                        className: S.CR,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: S.J5,
                                variant: "heading-lg/semibold",
                                children: a.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: S.SJ,
                                children: [
                                    (0, r.jsx)(u._Jp, {
                                        color:
                                            x > 0 ? u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: s()(S.Me, { [S.S3]: x > 0 }),
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: S.n,
                                        variant: "text-md/semibold",
                                        children: y.intl.format(y.t["pob/cL"], { subscriptions: x }),
                                    }),
                                ],
                            }),
                            w > 0
                                ? (0, r.jsx)(u.Text, {
                                      className: S.EV,
                                      variant: "text-sm/normal",
                                      children: y.intl.format(y.t.Jeto2u, { numSubscriptions: w }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: S.mY,
                children: [
                    (0, r.jsx)("h1", { className: S.R_, children: y.intl.string(y.t.N4sqzL) }),
                    R ? (0, r.jsx)(h.A, { alwaysWhite: !0 }) : null,
                    (0, r.jsxs)("div", {
                        className: S.Sq,
                        children: [
                            (0, r.jsx)(l.L, {
                                innerRef: C,
                                onChange: v,
                                threshold: 0.9,
                                children: (0, r.jsx)("div", {
                                    ref: C,
                                    className: S.dp,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: u._Jp,
                                        text: y.intl.string(y.t.gKmQ1G),
                                        onClick: P,
                                        loading: D,
                                        disabled: R,
                                    }),
                                }),
                            }),
                            E.Ay.hasFreeBoosts(b) || E.Ay.isPremium(b, T.PremiumTypes.TIER_2)
                                ? (0, r.jsx)(u.Button, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: u.okO,
                                      text: y.intl.string(y.t["8MYSQw"]),
                                      onClick: k,
                                  })
                                : (0, r.jsx)(u.Button, {
                                      variant: "secondary",
                                      size: "md",
                                      text: y.intl.string(y.t.Q43TvC),
                                      onClick: M,
                                      disabled: R,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
