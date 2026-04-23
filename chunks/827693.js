n.d(t, { A: () => x, R: () => p });
var i = n(627968),
    s = n(311907),
    l = n(834730),
    a = n(104510),
    r = n(827734),
    o = n(821609),
    d = n(263063),
    u = n(987144),
    c = n(864310),
    g = n(71393),
    m = n(473145),
    _ = n(652215),
    A = n(985018),
    h = n(102320);
function p(e) {
    let { guild: t, className: n } = e,
        { total: s } = (0, c.A)(t.id);
    return (0, i.jsxs)("div", {
        className: n ?? h.OA,
        children: [
            (0, i.jsx)(d.Ay, { className: h.$f, guild: t, size: d.Ay.Sizes.MEDIUM }),
            (0, i.jsxs)("div", {
                className: h.gI,
                children: [
                    (0, i.jsx)(l.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, i.jsxs)("div", {
                        className: h.ew,
                        children: [
                            (0, i.jsxs)("div", {
                                className: h.QW,
                                children: [
                                    (0, i.jsx)(a._, {
                                        className: h.Wz,
                                        color: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, i.jsx)(l.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: A.intl.format(A.t["pob/cL"], { subscriptions: s }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== _.TVA.NONE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: h.zk }),
                                        (0, i.jsx)(l.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, m.gb)(t.premiumTier, { useLevels: !1 }),
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
        n = (0, s.bG)([g.A], () => g.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: h.Nr,
              children: [
                  (0, i.jsx)(p, { guild: n }),
                  (0, i.jsx)(o.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: a._,
                      text: A.intl.string(A.t.aBHecF),
                      onClick: () => {
                          (0, u.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: _.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: _.ZSU.BUTTON_CTA,
                                  objectType: _.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
