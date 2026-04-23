"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(230109),
    u = n(534514),
    c = n(104510),
    d = n(827734),
    _ = n(834730),
    f = n(821609),
    p = n(597770),
    h = n(688810),
    E = n(263063),
    m = n(532794),
    g = n(864310),
    A = n(338548),
    I = n(287809),
    T = n(178368),
    S = n(927578),
    y = n(987144),
    N = n(652215),
    v = n(788868),
    C = n(985018),
    O = n(474236);
let R = function (e) {
    let { className: t, closeLayer: n, guild: s, onCtaVisibilityChange: R } = e,
        b = i.useRef(null),
        D = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        L = (0, o.bG)([T.A], () => T.A.boostSlots),
        w = D?.isPremiumGroupMember(),
        { analyticsLocations: M } = (0, h.Ay)(),
        [P, x] = i.useState(!1),
        k = i.useMemo(
            () =>
                Object.keys(L).filter((e) => {
                    let t = L[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === s.id;
                }).length,
            [L, s.id],
        ),
        U = (0, g.A)(e.guild.id).total;
    async function G() {
        x(!0),
            await (0, y.g)({
                analyticsLocations: M,
                analyticsLocation: {
                    page: N.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: N.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: N.ZSU.BUTTON_CTA,
                    objectType: N.AnalyticsObjectTypes.BUY,
                },
                guild: s,
                closeLayer: n,
            }),
            x(!1);
    }
    return (0, r.jsxs)("div", {
        className: a()(O.kL, t),
        children: [
            (0, r.jsxs)("div", {
                className: O.$R,
                children: [
                    (0, r.jsx)(E.Ay, { className: O.$f, guild: s, size: E.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, r.jsxs)("div", {
                        className: O.CR,
                        children: [
                            (0, r.jsx)(u.D, { className: O.J5, variant: "heading-lg/semibold", children: s.name }),
                            (0, r.jsxs)("div", {
                                className: O.SJ,
                                children: [
                                    (0, r.jsx)(c._, {
                                        color:
                                            U > 0 ? d.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: a()(O.Me, { [O.S3]: U > 0 }),
                                    }),
                                    (0, r.jsx)(_.E, {
                                        className: O.n,
                                        variant: "text-md/semibold",
                                        children: C.intl.format(C.t["pob/cL"], { subscriptions: U }),
                                    }),
                                ],
                            }),
                            k > 0
                                ? (0, r.jsx)(_.E, {
                                      className: O.EV,
                                      variant: "text-sm/normal",
                                      children: C.intl.format(C.t.Jeto2u, { numSubscriptions: k }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: O.mY,
                children: [
                    (0, r.jsx)("h1", { className: O.R_, children: C.intl.string(C.t.N4sqzL) }),
                    w ? (0, r.jsx)(A.A, { alwaysWhite: !0 }) : null,
                    (0, r.jsxs)("div", {
                        className: O.Sq,
                        children: [
                            (0, r.jsx)(l.L, {
                                innerRef: b,
                                onChange: R,
                                threshold: 0.9,
                                children: (0, r.jsx)("div", {
                                    ref: b,
                                    className: O.dp,
                                    children: (0, r.jsx)(f.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: c._,
                                        text: C.intl.string(C.t.gKmQ1G),
                                        onClick: G,
                                        loading: P,
                                        disabled: w,
                                    }),
                                }),
                            }),
                            S.Ay.hasFreeBoosts(D) || S.Ay.isPremium(D, v.PremiumTypes.TIER_2)
                                ? (0, r.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: p.o,
                                      text: C.intl.string(C.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, m.A)({
                                              initialPlanId: null,
                                              subscriptionTier: v.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: M,
                                              analyticsObject: {
                                                  page: N.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: N.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: N.ZSU.BUTTON_ICON,
                                                  objectType: N.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                  })
                                : (0, r.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: C.intl.string(C.t.Q43TvC),
                                      onClick: function () {
                                          (0, m.A)({
                                              initialPlanId: null,
                                              subscriptionTier: v.pe.TIER_2,
                                              analyticsLocations: M,
                                              analyticsObject: {
                                                  page: N.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: N.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: N.ZSU.BUTTON_ICON,
                                                  objectType: N.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && n(),
                                          });
                                      },
                                      disabled: w,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
