"use strict";
n.d(t, { A: () => S });
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
    p = n(338548),
    h = n(287809),
    m = n(178368),
    g = n(927578),
    E = n(987144),
    A = n(652215),
    I = n(788868),
    T = n(985018),
    y = n(127397);
let S = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        S = i.useRef(null),
        v = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        C = (0, o.bG)([m.A], () => m.A.boostSlots),
        b = v?.isPremiumGroupMember(),
        { analyticsLocations: N } = (0, c.Ay)(),
        [R, O] = i.useState(!1),
        D = i.useMemo(
            () =>
                Object.keys(C).filter((e) => {
                    let t = C[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [C, n.id],
        ),
        L = (0, f.A)(e.guild.id).total;
    async function w() {
        O(!0),
            await (0, E.g)({
                analyticsLocations: N,
                analyticsLocation: {
                    page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: A.ZSU.BUTTON_CTA,
                    objectType: A.AnalyticsObjectTypes.BUY,
                },
                guild: n,
                closeLayer: t,
            }),
            O(!1);
    }
    function x() {
        (0, _.A)({
            initialPlanId: null,
            subscriptionTier: I.pe.TIER_2,
            analyticsLocations: N,
            analyticsObject: {
                page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: A.ZSU.BUTTON_ICON,
                objectType: A.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && t(),
        });
    }
    function P() {
        (0, _.A)({
            initialPlanId: null,
            subscriptionTier: I.pe.TIER_2,
            isGift: !0,
            analyticsLocations: N,
            analyticsObject: {
                page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: A.ZSU.BUTTON_ICON,
                objectType: A.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && t(),
        });
    }
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [
            (0, r.jsxs)("div", {
                className: y.$R,
                children: [
                    (0, r.jsx)(d.A, { className: y.$f, guild: n, size: d.A.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, r.jsxs)("div", {
                        className: y.CR,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: y.J5,
                                variant: "heading-lg/semibold",
                                children: n.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: y.SJ,
                                children: [
                                    (0, r.jsx)(u._Jp, {
                                        color:
                                            L > 0 ? u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: s()(y.Me, { [y.S3]: L > 0 }),
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: y.n,
                                        variant: "text-md/semibold",
                                        children: T.intl.format(T.t["pob/cL"], { subscriptions: L }),
                                    }),
                                ],
                            }),
                            D > 0
                                ? (0, r.jsx)(u.Text, {
                                      className: y.EV,
                                      variant: "text-sm/normal",
                                      children: T.intl.format(T.t.Jeto2u, { numSubscriptions: D }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: y.mY,
                children: [
                    (0, r.jsx)("h1", { className: y.R_, children: T.intl.string(T.t.N4sqzL) }),
                    b ? (0, r.jsx)(p.A, { alwaysWhite: !0 }) : null,
                    (0, r.jsxs)("div", {
                        className: y.Sq,
                        children: [
                            (0, r.jsx)(l.L, {
                                innerRef: S,
                                onChange: a,
                                threshold: 0.9,
                                children: (0, r.jsx)("div", {
                                    ref: S,
                                    className: y.dp,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: u._Jp,
                                        text: T.intl.string(T.t.gKmQ1G),
                                        onClick: w,
                                        loading: R,
                                        disabled: b,
                                    }),
                                }),
                            }),
                            g.Ay.hasFreeBoosts(v) || g.Ay.isPremium(v, I.PremiumTypes.TIER_2)
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
                                      onClick: x,
                                      disabled: b,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
