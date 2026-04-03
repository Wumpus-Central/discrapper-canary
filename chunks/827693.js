n.d(t, { A: () => x, R: () => _ });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(263063),
    r = n(987144),
    o = n(864310),
    d = n(71393),
    c = n(473145),
    u = n(652215),
    m = n(985018),
    g = n(927552);
function _(e) {
    let { guild: t, className: n } = e,
        { total: s } = (0, o.A)(t.id);
    return (0, i.jsxs)("div", {
        className: n ?? g.OA,
        children: [
            (0, i.jsx)(a.Ay, { className: g.$f, guild: t, size: a.Ay.Sizes.MEDIUM }),
            (0, i.jsxs)("div", {
                className: g.gI,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, i.jsxs)("div", {
                        className: g.ew,
                        children: [
                            (0, i.jsxs)("div", {
                                className: g.QW,
                                children: [
                                    (0, i.jsx)(l._Jp, {
                                        className: g.Wz,
                                        color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["pob/cL"], { subscriptions: s }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== u.TVA.NONE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: g.zk }),
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, c.gb)(t.premiumTier, { useLevels: !1 }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([d.A], () => d.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: g.Nr,
              children: [
                  (0, i.jsx)(_, { guild: n }),
                  (0, i.jsx)(l.Button, {
                      variant: "secondary",
                      size: "sm",
                      icon: l._Jp,
                      text: m.intl.string(m.t.aBHecF),
                      onClick: () => {
                          (0, r.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: u.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: u.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: u.ZSU.BUTTON_CTA,
                                  objectType: u.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
