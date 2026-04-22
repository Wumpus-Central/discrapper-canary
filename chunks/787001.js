i.d(t, { A: () => V });
var s = i(627968),
    l = i(64700),
    a = i(503698),
    n = i.n(a),
    r = i(311907),
    c = i(230109),
    o = i(534514),
    d = i(104510),
    u = i(827734),
    m = i(834730),
    g = i(821609),
    T = i(597770),
    x = i(688810),
    A = i(263063),
    f = i(532794),
    h = i(864310),
    j = i(338548),
    p = i(287809),
    N = i(178368),
    E = i(927578),
    b = i(987144),
    v = i(652215),
    I = i(788868),
    _ = i(985018),
    R = i(474236);
let V = function (e) {
    let { className: t, closeLayer: i, guild: a, onCtaVisibilityChange: V } = e,
        S = l.useRef(null),
        P = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        y = (0, r.bG)([N.A], () => N.A.boostSlots),
        C = P?.isPremiumGroupMember(),
        { analyticsLocations: k } = (0, x.Ay)(),
        [L, U] = l.useState(!1),
        M = l.useMemo(
            () =>
                Object.keys(y).filter((e) => {
                    let t = y[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === a.id;
                }).length,
            [y, a.id],
        ),
        O = (0, h.A)(e.guild.id).total;
    async function G() {
        U(!0),
            await (0, b.g)({
                analyticsLocations: k,
                analyticsLocation: {
                    page: v.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: v.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: v.ZSU.BUTTON_CTA,
                    objectType: v.AnalyticsObjectTypes.BUY,
                },
                guild: a,
                closeLayer: i,
            }),
            U(!1);
    }
    return (0, s.jsxs)("div", {
        className: n()(R.kL, t),
        children: [
            (0, s.jsxs)("div", {
                className: R.$R,
                children: [
                    (0, s.jsx)(A.Ay, { className: R.$f, guild: a, size: A.Ay.Sizes.LARGER, iconSize: 70, active: !0 }),
                    (0, s.jsxs)("div", {
                        className: R.CR,
                        children: [
                            (0, s.jsx)(o.D, { className: R.J5, variant: "heading-lg/semibold", children: a.name }),
                            (0, s.jsxs)("div", {
                                className: R.SJ,
                                children: [
                                    (0, s.jsx)(d._, {
                                        color:
                                            O > 0 ? u.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                                        className: n()(R.Me, { [R.S3]: O > 0 }),
                                    }),
                                    (0, s.jsx)(m.E, {
                                        className: R.n,
                                        variant: "text-md/semibold",
                                        children: _.intl.format(_.t["pob/cL"], { subscriptions: O }),
                                    }),
                                ],
                            }),
                            M > 0
                                ? (0, s.jsx)(m.E, {
                                      className: R.EV,
                                      variant: "text-sm/normal",
                                      children: _.intl.format(_.t.Jeto2u, { numSubscriptions: M }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: R.mY,
                children: [
                    (0, s.jsx)("h1", { className: R.R_, children: _.intl.string(_.t.N4sqzL) }),
                    C ? (0, s.jsx)(j.A, { alwaysWhite: !0 }) : null,
                    (0, s.jsxs)("div", {
                        className: R.Sq,
                        children: [
                            (0, s.jsx)(c.L, {
                                innerRef: S,
                                onChange: V,
                                threshold: 0.9,
                                children: (0, s.jsx)("div", {
                                    ref: S,
                                    className: R.dp,
                                    children: (0, s.jsx)(g.$, {
                                        variant: "expressive",
                                        size: "md",
                                        icon: d._,
                                        text: _.intl.string(_.t.gKmQ1G),
                                        onClick: G,
                                        loading: L,
                                        disabled: C,
                                    }),
                                }),
                            }),
                            E.Ay.hasFreeBoosts(P) || E.Ay.isPremium(P, I.PremiumTypes.TIER_2)
                                ? (0, s.jsx)(g.$, {
                                      variant: "secondary",
                                      size: "md",
                                      icon: T.o,
                                      text: _.intl.string(_.t["8MYSQw"]),
                                      onClick: function () {
                                          (0, f.A)({
                                              initialPlanId: null,
                                              subscriptionTier: I.pe.TIER_2,
                                              isGift: !0,
                                              analyticsLocations: k,
                                              analyticsObject: {
                                                  page: v.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: v.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: v.ZSU.BUTTON_ICON,
                                                  objectType: v.AnalyticsObjectTypes.GIFT,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                  })
                                : (0, s.jsx)(g.$, {
                                      variant: "secondary",
                                      size: "md",
                                      text: _.intl.string(_.t.Q43TvC),
                                      onClick: function () {
                                          (0, f.A)({
                                              initialPlanId: null,
                                              subscriptionTier: I.pe.TIER_2,
                                              analyticsLocations: k,
                                              analyticsObject: {
                                                  page: v.liQ.PREMIUM_GUILD_USER_MODAL,
                                                  section: v.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: v.ZSU.BUTTON_ICON,
                                                  objectType: v.AnalyticsObjectTypes.BUY,
                                              },
                                              onClose: (e) => e && i(),
                                          });
                                      },
                                      disabled: C,
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
