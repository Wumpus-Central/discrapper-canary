n.d(t, { A: () => v }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(397927),
    u = n(688810),
    d = n(263063),
    f = n(532794),
    p = n(864310),
    _ = n(338548),
    h = n(287809),
    m = n(178368),
    g = n(927578),
    E = n(987144),
    b = n(652215),
    y = n(788868),
    O = n(985018),
    A = n(127397);
let v = function (e) {
    let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
        v = i.useRef(null),
        S = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        I = (0, o.bG)([m.A], () => m.A.boostSlots),
        T = null == S ? void 0 : S.isPremiumGroupMember(),
        { analyticsLocations: C } = (0, u.Ay)(),
        [N, R] = i.useState(!1),
        w = i.useMemo(
            () =>
                Object.keys(I).filter((e) => {
                    let t = I[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
                }).length,
            [I, n.id],
        ),
        P = (0, p.A)(e.guild.id).total;
    async function D() {
        R(!0),
            await (0, E.g)({
                analyticsLocations: C,
                analyticsLocation: {
                    page: b.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: b.ZSU.BUTTON_CTA,
                    objectType: b.AnalyticsObjectTypes.BUY,
                },
                guild: n,
                closeLayer: t,
            }),
            R(!1);
    }
    function x() {
        (0, f.A)({
            initialPlanId: null,
            subscriptionTier: y.pe.TIER_2,
            analyticsLocations: C,
            analyticsObject: {
                page: b.liQ.PREMIUM_GUILD_USER_MODAL,
                section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: b.ZSU.BUTTON_ICON,
                objectType: b.AnalyticsObjectTypes.BUY,
            },
            onClose: (e) => e && t(),
        });
    }
    function L() {
        (0, f.A)({
            initialPlanId: null,
            subscriptionTier: y.pe.TIER_2,
            isGift: !0,
            analyticsLocations: C,
            analyticsObject: {
                page: b.liQ.PREMIUM_GUILD_USER_MODAL,
                section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: b.ZSU.BUTTON_ICON,
                objectType: b.AnalyticsObjectTypes.GIFT,
            },
            onClose: (e) => e && t(),
        });
    }
    return (0, r.jsxs)("div", {
        className: A.kL,
        children: [
            (0, r.jsxs)("div", {
                className: A.$R,
                children: [
                    (0, r.jsx)(d.A, {
                        className: A.$f,
                        guild: n,
                        size: d.A.Sizes.LARGER,
                        iconSize: 70,
                        active: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: A.CR,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                className: A.J5,
                                variant: "heading-lg/semibold",
                                children: n.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: A.SJ,
                                children: [
                                    (0, r.jsx)(c._Jp, {
                                        color:
                                            P > 0 ? c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: s()(A.Me, { [A.S3]: P > 0 }),
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        className: A.n,
                                        variant: "text-md/semibold",
                                        children: O.intl.format(O.t["pob/cL"], { subscriptions: P }),
                                    }),
                                ],
                            }),
                            w > 0
                                ? (0, r.jsx)(c.Text, {
                                      className: A.EV,
                                      variant: "text-sm/normal",
                                      children: O.intl.format(O.t.Jeto2u, { numSubscriptions: w }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: A.mY,
                children: [
                    (0, r.jsx)("h1", {
                        className: A.R_,
                        children: O.intl.string(O.t.N4sqzL),
                    }),
                    T ? (0, r.jsx)(_.A, { alwaysWhite: !0 }) : null,
                    (0, r.jsxs)("div", {
                        className: A.Sq,
                        children: [
                            (0, r.jsx)(l.L, {
                                innerRef: v,
                                onChange: a,
                                threshold: 0.9,
                                children: (0, r.jsx)("div", {
                                    ref: v,
                                    className: A.dp,
                                    children: (0, r.jsx)(c.Button, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: c._Jp,
                                        text: O.intl.string(O.t.gKmQ1G),
                                        onClick: D,
                                        loading: N,
                                        disabled: T,
                                    }),
                                }),
                            }),
                            g.Ay.hasFreeBoosts(S) || g.Ay.isPremium(S, y.PremiumTypes.TIER_2)
                                ? (0, r.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: c.okO,
                                      text: O.intl.string(O.t["8MYSQw"]),
                                      onClick: L,
                                  })
                                : (0, r.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: "md",
                                      text: O.intl.string(O.t.Q43TvC),
                                      onClick: x,
                                      disabled: T,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
